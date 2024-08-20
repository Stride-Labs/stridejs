import { MsgLiquidStake, MsgLSMLiquidStake, MsgRedeemStake, MsgRegisterHostZone, MsgClaimUndelegatedTokens, MsgRebalanceValidators, MsgAddValidators, MsgChangeValidatorWeights, MsgDeleteValidator, MsgRestoreInterchainAccount, MsgUpdateValidatorSharesExchRate, MsgCalibrateDelegation, MsgClearBalance, MsgUpdateInnerRedemptionRateBounds, MsgResumeHostZone, MsgCreateTradeRoute, MsgDeleteTradeRoute, MsgUpdateTradeRoute, MsgSetCommunityPoolRebate, MsgToggleTradeController, MsgUpdateHostZoneParams } from "./tx";
export const AminoConverter = {
  "/stride.stakeibc.MsgLiquidStake": {
    aminoType: "stakeibc/LiquidStake",
    toAmino: MsgLiquidStake.toAmino,
    fromAmino: MsgLiquidStake.fromAmino
  },
  "/stride.stakeibc.MsgLSMLiquidStake": {
    aminoType: "stakeibc/LSMLiquidStake",
    toAmino: MsgLSMLiquidStake.toAmino,
    fromAmino: MsgLSMLiquidStake.fromAmino
  },
  "/stride.stakeibc.MsgRedeemStake": {
    aminoType: "stakeibc/RedeemStake",
    toAmino: MsgRedeemStake.toAmino,
    fromAmino: MsgRedeemStake.fromAmino
  },
  "/stride.stakeibc.MsgRegisterHostZone": {
    aminoType: "stakeibc/RegisterHostZone",
    toAmino: MsgRegisterHostZone.toAmino,
    fromAmino: MsgRegisterHostZone.fromAmino
  },
  "/stride.stakeibc.MsgClaimUndelegatedTokens": {
    aminoType: "stakeibc/ClaimUndelegatedTokens",
    toAmino: MsgClaimUndelegatedTokens.toAmino,
    fromAmino: MsgClaimUndelegatedTokens.fromAmino
  },
  "/stride.stakeibc.MsgRebalanceValidators": {
    aminoType: "stakeibc/RebalanceValidators",
    toAmino: MsgRebalanceValidators.toAmino,
    fromAmino: MsgRebalanceValidators.fromAmino
  },
  "/stride.stakeibc.MsgAddValidators": {
    aminoType: "/stride.stakeibc.MsgAddValidators",
    toAmino: MsgAddValidators.toAmino,
    fromAmino: MsgAddValidators.fromAmino
  },
  "/stride.stakeibc.MsgChangeValidatorWeights": {
    aminoType: "/stride.stakeibc.MsgChangeValidatorWeights",
    toAmino: MsgChangeValidatorWeights.toAmino,
    fromAmino: MsgChangeValidatorWeights.fromAmino
  },
  "/stride.stakeibc.MsgDeleteValidator": {
    aminoType: "stakeibc/DeleteValidator",
    toAmino: MsgDeleteValidator.toAmino,
    fromAmino: MsgDeleteValidator.fromAmino
  },
  "/stride.stakeibc.MsgRestoreInterchainAccount": {
    aminoType: "stakeibc/RestoreInterchainAccount",
    toAmino: MsgRestoreInterchainAccount.toAmino,
    fromAmino: MsgRestoreInterchainAccount.fromAmino
  },
  "/stride.stakeibc.MsgUpdateValidatorSharesExchRate": {
    aminoType: "stakeibc/UpdateValidatorSharesExchRate",
    toAmino: MsgUpdateValidatorSharesExchRate.toAmino,
    fromAmino: MsgUpdateValidatorSharesExchRate.fromAmino
  },
  "/stride.stakeibc.MsgCalibrateDelegation": {
    aminoType: "/stride.stakeibc.MsgCalibrateDelegation",
    toAmino: MsgCalibrateDelegation.toAmino,
    fromAmino: MsgCalibrateDelegation.fromAmino
  },
  "/stride.stakeibc.MsgClearBalance": {
    aminoType: "still-no-defined",
    toAmino: MsgClearBalance.toAmino,
    fromAmino: MsgClearBalance.fromAmino
  },
  "/stride.stakeibc.MsgUpdateInnerRedemptionRateBounds": {
    aminoType: "/stride.stakeibc.MsgUpdateInnerRedemptionRateBounds",
    toAmino: MsgUpdateInnerRedemptionRateBounds.toAmino,
    fromAmino: MsgUpdateInnerRedemptionRateBounds.fromAmino
  },
  "/stride.stakeibc.MsgResumeHostZone": {
    aminoType: "/stride.stakeibc.MsgResumeHostZone",
    toAmino: MsgResumeHostZone.toAmino,
    fromAmino: MsgResumeHostZone.fromAmino
  },
  "/stride.stakeibc.MsgCreateTradeRoute": {
    aminoType: "stride/x/stakeibc/MsgCreateTradeRoute",
    toAmino: MsgCreateTradeRoute.toAmino,
    fromAmino: MsgCreateTradeRoute.fromAmino
  },
  "/stride.stakeibc.MsgDeleteTradeRoute": {
    aminoType: "stride/x/stakeibc/MsgDeleteTradeRoute",
    toAmino: MsgDeleteTradeRoute.toAmino,
    fromAmino: MsgDeleteTradeRoute.fromAmino
  },
  "/stride.stakeibc.MsgUpdateTradeRoute": {
    aminoType: "stride/x/stakeibc/MsgUpdateTradeRoute",
    toAmino: MsgUpdateTradeRoute.toAmino,
    fromAmino: MsgUpdateTradeRoute.fromAmino
  },
  "/stride.stakeibc.MsgSetCommunityPoolRebate": {
    aminoType: "stride/x/stakeibc/MsgSetCommunityPoolRebate",
    toAmino: MsgSetCommunityPoolRebate.toAmino,
    fromAmino: MsgSetCommunityPoolRebate.fromAmino
  },
  "/stride.stakeibc.MsgToggleTradeController": {
    aminoType: "stride/x/stakeibc/MsgToggleTradeController",
    toAmino: MsgToggleTradeController.toAmino,
    fromAmino: MsgToggleTradeController.fromAmino
  },
  "/stride.stakeibc.MsgUpdateHostZoneParams": {
    aminoType: "stride/x/stakeibc/MsgUpdateHostZoneParams",
    toAmino: MsgUpdateHostZoneParams.toAmino,
    fromAmino: MsgUpdateHostZoneParams.fromAmino
  }
};