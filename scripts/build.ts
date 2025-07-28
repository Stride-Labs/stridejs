import esbuild from "esbuild";
import { nodeExternalsPlugin } from "esbuild-node-externals";
import { readFileSync, writeFileSync, readdirSync, statSync } from "fs";
import { join } from "path";

const getAllJsFiles = (dir: string): string[] => {
  const files: string[] = [];
  const items = readdirSync(dir);
  
  for (const item of items) {
    const fullPath = join(dir, item);
    const stat = statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...getAllJsFiles(fullPath));
    } else if (item.endsWith('.js')) {
      files.push(fullPath);
    }
  }
  
  return files;
};

const fixCjsExports = async () => {
  console.log("[BUILD] Fixing CJS exports for dynamic imports");
  
  const cjsFiles = getAllJsFiles("dist/cjs");
  
  for (const file of cjsFiles) {
    const content = readFileSync(file, "utf8");
    
    // Fix the broken export pattern: 0 && (module.exports = {...})
    const fixedContent = content.replace(
      /\/\/ Annotate the CommonJS export names for ESM import in node:\n0 && \(module\.exports = \{([^}]+)\}\);/g,
      (match, exports) => {
        // Convert the export list to proper CommonJS exports
        const exportNames = exports.split(',').map(name => name.trim()).filter(Boolean);
        const properExports = exportNames.map(name => `  ${name}`).join(',\n');
        return `// Proper CommonJS exports for dynamic imports\nmodule.exports = {\n${properExports}\n};`;
      }
    );
    
    if (fixedContent !== content) {
      writeFileSync(file, fixedContent);
      console.log(`[BUILD] Fixed exports in ${file}`);
    }
  }
};

const main = async () => {
  console.log("[BUILD] esbuild starting");

  await Promise.all([
    esbuild.build({
      entryPoints: ["./src/**/*.ts"],
      bundle: false,
      platform: "node",
      minify: false,
      format: "esm",
      outdir: "dist/esm",
      plugins: [nodeExternalsPlugin()],
    }),

    esbuild.build({
      entryPoints: ["./src/**/*.ts"],
      bundle: false,
      platform: "node",
      minify: false,
      format: "cjs",
      outdir: "dist/cjs",
      plugins: [nodeExternalsPlugin()],
      banner: {
        js: `"use strict";`,
      },
    }),
  ]);

  // Fix CJS exports after build
  await fixCjsExports();

  console.log("[BUILD] esbuild complete");
};

main();
