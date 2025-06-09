# Changelog

## 0.14.0

- Rebuild types for v27
- Update telescope to v0.12.19
- Fix Amino decimals

## 0.13.0

- Add types for buyback and burn (x/icqoracle, x/auction, x/strdburner)
- Add CosmWasm types
- Update cosmos-sdk types to v0.47.15
- Update ibc-go types to v7.9.2
- Rewrite docs
- Remove `StrideClient.types` field in favor of directly importing the necessary namespace

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
