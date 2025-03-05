# Maintainer's Guide

This guide provides instructions for maintaining the stridejs package, including version management, releases, and dependency updates.

## Table of Contents

- [Maintainer's Guide](#maintainers-guide)
  - [Table of Contents](#table-of-contents)
  - [Version Management](#version-management)
    - [Bumping Package Version](#bumping-package-version)
  - [Release Process](#release-process)
    - [Creating a Release](#creating-a-release)
    - [Annotated Tags with Changelog](#annotated-tags-with-changelog)
  - [Updating Dependencies](#updating-dependencies)
    - [Updating Protocol Repository Versions](#updating-protocol-repository-versions)
  - [Publishing to NPM](#publishing-to-npm)

## Version Management

### Bumping Package Version

When preparing a new release, update the version in `package.json`. Follow semantic versioning principles:

- **Patch** (`0.12.1` → `0.12.2`): Bug fixes, small changes, new stridejs features on the same Stride chain verison
- **Minor** (`0.12.1` → `0.13.0`): Stride chain upgrade with new types and APIs

## Release Process

### Creating a Release

1. Update the version in `package.json`
2. Update changelog information in `CHANGELOG.md`
3. Create an annotated tag with the changelog
4. Push the tag to GitHub
5. Build using `pnpm build`
6. Publish to NPM

### Annotated Tags with Changelog

```bash
# Create an annotated tag with changelog information
git tag -a v0.13.0 -m 'stridejs v0.13.0

- Add types for buyback and burn (x/icqoracle, x/auction, x/strdburner)
- Add CosmWasm types
- Update cosmos-sdk types to v0.47.15
- Update ibc-go types to v7.9.2
- Rewrite docs
- Remove StrideClient.types field in favor of directly importing the necessary namespace
'

# Push the tag to GitHub
git push origin v0.13.0
```

An annotated tag contains the full changelog information directly in the tag message, making it easier to track changes in each release.

## Updating Dependencies

### Updating Protocol Repository Versions

To update the protocol repositories that stridejs depends on, modify the `scripts/clone_repos.ts` file:

```typescript
// Edit scripts/clone_repos.ts to update repository branches/versions
export const config = [
  {
    repo: "https://github.com/Stride-Labs/stride",
    branch: "main", // Change to specific tag/branch as needed
  },
  {
    repo: "https://github.com/Stride-Labs/cosmos-sdk",
    branch: "v0.47.15-stride-distribution-fix-0-mempool-verbose-error", // Change to specific tag/branch as needed
  },
  {
    repo: "https://github.com/cosmos/ibc-go",
    branch: "v7.9.2", // Update to newer version when needed
  },
  {
    repo: "https://github.com/CosmWasm/wasmd",
    branch: "v0.46.0", // Update to newer version when needed
  },
];
```

After updating, regenerate the code:

```bash
pnpm run codegen
```

## Publishing to NPM

To publish a new version to NPM:

```bash
# First build the package
pnpm run build

# Login to npm (if not already logged in)
npm login

# Publish the package
npm publish
```
