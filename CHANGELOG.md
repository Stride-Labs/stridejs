# Changelog

## 0.11.4

- [BUILD] Fix missing emitted types
- [BUILD] Remove unused dependencies from the lockfile

## 0.11.3

- [BUILD] Rework internal build to allow for support different outputs and inspection: cjs and esm

## 0.11.0

- Introduces utilities and goodies from secretjs
- Updates to latest of cosmjs (v0.32.4)
- Updates build system
  - Switch to pnpm and esbuild
  - Update telescope to latest
- Updates telescope to latest to fix sdkmath.Dec values
- Update build to have latest stride protobufs
- Introduces ibc module to the build
- Optimizes node_modules for apps depending on stridejs by excluding git submodules

## 0.10.0

- Introduces stride/airdrop module

## 0.9.0

- Introduces LSM
  - Adds a custom cosmos build for LSM-related messages like MsgTokenizeShares
  - Introduces /stride/stakeibc/MsgLSMLiquidStake
- Update build to have latest stride protobufs
