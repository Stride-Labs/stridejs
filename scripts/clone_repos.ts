import { execSync } from "child_process";
import { join, resolve } from "path";
import { existsSync, mkdirSync } from "fs";

export const reposDir = join(__dirname, "repos");

// config
export const config = [
  {
    repo: "https://github.com/Stride-Labs/stride",
    branch: "fix-dec-messages-in-stridejs",
  },
  {
    repo: "https://github.com/cosmos/cosmos-sdk",
    branch: "v0.45.16-ics-lsm",
  },
  {
    repo: "https://github.com/cosmos/ibc-go",
    branch: "v7.4.0",
  },
];

// create the /scripts/proto dir
try {
  const dirPath = resolve(reposDir);

  if (!existsSync(dirPath)) {
    mkdirSync(dirPath, { recursive: true });
  }
} catch (error) {
  console.log(`mkdir -p "${reposDir}" failed with '${error.message}'`);
  process.exit(1);
}

// clone repos into /scripts/proto
for (const repoConfig of config) {
  const { repo, branch } = repoConfig;

  try {
    console.log(`git clone ${repo}@${branch}`);

    execSync(
      `cd "${reposDir}" && git clone --depth 1 --branch "${branch}" "${repo}" 2> /dev/null`,
    );
  } catch (error) {
    console.log(`git clone ${repo} failed with '${error.message}'`);
    process.exit(1);
  }
}
