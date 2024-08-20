import esbuild from "esbuild";
import { nodeExternalsPlugin } from "esbuild-node-externals";

const main = async () => {
  console.log("[BUILD] esbuild starting");

  await esbuild.build({
    entryPoints: ["src/index.ts"],
    bundle: true,
    platform: "node",
    outfile: "dist/index.js",
    plugins: [nodeExternalsPlugin()],
  });

  console.log("[BUILD] esbuild complete");
};

main();
