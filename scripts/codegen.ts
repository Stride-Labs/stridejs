import telescope from "@cosmology/telescope";
import { execSync } from "child_process";
import { join } from "path";
import { config } from "./clone_repos";

const outPath = join(__dirname, "../src/codegen");

telescope({
  protoDirs: [join(__dirname, "proto")],
  outPath,
  options: {
    prototypes: {
      parser: {
        keepCase: false,
      },
      includePackageVar: false,
      typingsFormat: {
        useExact: false,
        timestamp: "date",
        duration: "duration",
        customTypes: {
          useCosmosSDKDec: true,
        },
      },
    },
    aminoEncoding: {
      enabled: true,
      exceptions: {
        "/stride.stakeibc.MsgLiquidStake": {
          aminoType: "stakeibc/LiquidStake",
        },
        "/stride.stakeibc.MsgLSMLiquidStake": {
          aminoType: "stakeibc/LSMLiquidStake",
        },
        "/stride.stakeibc.MsgRedeemStake": {
          aminoType: "stakeibc/RedeemStake",
        },
        "/stride.stakeibc.MsgRegisterHostZone": {
          aminoType: "stakeibc/RegisterHostZone",
        },
        "/stride.stakeibc.MsgClaimUndelegatedTokens": {
          aminoType: "stakeibc/ClaimUndelegatedTokens",
        },
        "/stride.stakeibc.MsgRebalanceValidators": {
          aminoType: "stakeibc/RebalanceValidators",
        },
        "/stride.stakeibc.MsgAddValidator": {
          aminoType: "stakeibc/AddValidator",
        },
        "/stride.stakeibc.MsgChangeValidatorWeight": {
          aminoType: "stakeibc/ChangeValidatorWeight",
        },
        "/stride.stakeibc.MsgDeleteValidator": {
          aminoType: "stakeibc/DeleteValidator",
        },
        "/stride.stakeibc.MsgRestoreInterchainAccount": {
          aminoType: "stakeibc/RestoreInterchainAccount",
        },
        "/stride.stakeibc.MsgUpdateValidatorSharesExchRate": {
          aminoType: "stakeibc/UpdateValidatorSharesExchRate",
        },
        "/stride.stakeibc.MsgClearBalance": {
          aminoType: "still-no-defined",
        },
        "/stride.claim.MsgClaimFreeAmount": {
          aminoType: "claim/ClaimFreeAmount",
        },
        "/stride.staketia.MsgLiquidStake": {
          aminoType: "staketia/MsgLiquidStake",
        },
        "/stride.staketia.MsgRedeemStake": {
          aminoType: "staketia/MsgRedeemStake",
        },
        "/stride.stakedym.MsgLiquidStake": {
          aminoType: "stakedym/MsgLiquidStake",
        },
        "/stride.stakedym.MsgRedeemStake": {
          aminoType: "stakedym/MsgRedeemStake",
        },
        "/stride.airdrop.MsgClaimDaily": {
          aminoType: "airdrop/MsgClaimDaily",
        },
        "/stride.airdrop.MsgClaimEarly": {
          aminoType: "airdrop/MsgClaimEarly",
        },
      },
    },
    lcdClients: {
      enabled: true,
    },
    rpcClients: {
      enabled: true,
      camelCase: true,
    },
  },
})
  .then(() => {
    console.log("✨ all done!");
  })
  .catch((e) => {
    console.error(e);
  });
