import { MsgLiquidStake, MsgLSMLiquidStake, MsgRedeemStake, MsgRegisterHostZone, MsgClaimUndelegatedTokens, MsgRebalanceValidators, MsgAddValidators, MsgChangeValidatorWeights, MsgDeleteValidator, MsgRestoreInterchainAccount, MsgCloseDelegationChannel, MsgUpdateValidatorSharesExchRate, MsgCalibrateDelegation, MsgClearBalance, MsgUpdateInnerRedemptionRateBounds, MsgResumeHostZone, MsgCreateTradeRoute, MsgDeleteTradeRoute, MsgUpdateTradeRoute, MsgSetCommunityPoolRebate, MsgToggleTradeController, MsgUpdateHostZoneParams } from "./tx";
const registry = [["/stride.stakeibc.MsgLiquidStake", MsgLiquidStake], ["/stride.stakeibc.MsgLSMLiquidStake", MsgLSMLiquidStake], ["/stride.stakeibc.MsgRedeemStake", MsgRedeemStake], ["/stride.stakeibc.MsgRegisterHostZone", MsgRegisterHostZone], ["/stride.stakeibc.MsgClaimUndelegatedTokens", MsgClaimUndelegatedTokens], ["/stride.stakeibc.MsgRebalanceValidators", MsgRebalanceValidators], ["/stride.stakeibc.MsgAddValidators", MsgAddValidators], ["/stride.stakeibc.MsgChangeValidatorWeights", MsgChangeValidatorWeights], ["/stride.stakeibc.MsgDeleteValidator", MsgDeleteValidator], ["/stride.stakeibc.MsgRestoreInterchainAccount", MsgRestoreInterchainAccount], ["/stride.stakeibc.MsgCloseDelegationChannel", MsgCloseDelegationChannel], ["/stride.stakeibc.MsgUpdateValidatorSharesExchRate", MsgUpdateValidatorSharesExchRate], ["/stride.stakeibc.MsgCalibrateDelegation", MsgCalibrateDelegation], ["/stride.stakeibc.MsgClearBalance", MsgClearBalance], ["/stride.stakeibc.MsgUpdateInnerRedemptionRateBounds", MsgUpdateInnerRedemptionRateBounds], ["/stride.stakeibc.MsgResumeHostZone", MsgResumeHostZone], ["/stride.stakeibc.MsgCreateTradeRoute", MsgCreateTradeRoute], ["/stride.stakeibc.MsgDeleteTradeRoute", MsgDeleteTradeRoute], ["/stride.stakeibc.MsgUpdateTradeRoute", MsgUpdateTradeRoute], ["/stride.stakeibc.MsgSetCommunityPoolRebate", MsgSetCommunityPoolRebate], ["/stride.stakeibc.MsgToggleTradeController", MsgToggleTradeController], ["/stride.stakeibc.MsgUpdateHostZoneParams", MsgUpdateHostZoneParams]];
const load = (protoRegistry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
const MessageComposer = {
  encoded: {
    liquidStake(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgLiquidStake",
        value: MsgLiquidStake.encode(value).finish()
      };
    },
    lSMLiquidStake(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgLSMLiquidStake",
        value: MsgLSMLiquidStake.encode(value).finish()
      };
    },
    redeemStake(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgRedeemStake",
        value: MsgRedeemStake.encode(value).finish()
      };
    },
    registerHostZone(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgRegisterHostZone",
        value: MsgRegisterHostZone.encode(value).finish()
      };
    },
    claimUndelegatedTokens(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgClaimUndelegatedTokens",
        value: MsgClaimUndelegatedTokens.encode(value).finish()
      };
    },
    rebalanceValidators(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgRebalanceValidators",
        value: MsgRebalanceValidators.encode(value).finish()
      };
    },
    addValidators(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgAddValidators",
        value: MsgAddValidators.encode(value).finish()
      };
    },
    changeValidatorWeight(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgChangeValidatorWeights",
        value: MsgChangeValidatorWeights.encode(value).finish()
      };
    },
    deleteValidator(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgDeleteValidator",
        value: MsgDeleteValidator.encode(value).finish()
      };
    },
    restoreInterchainAccount(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgRestoreInterchainAccount",
        value: MsgRestoreInterchainAccount.encode(value).finish()
      };
    },
    closeDelegationChannel(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgCloseDelegationChannel",
        value: MsgCloseDelegationChannel.encode(value).finish()
      };
    },
    updateValidatorSharesExchRate(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgUpdateValidatorSharesExchRate",
        value: MsgUpdateValidatorSharesExchRate.encode(value).finish()
      };
    },
    calibrateDelegation(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgCalibrateDelegation",
        value: MsgCalibrateDelegation.encode(value).finish()
      };
    },
    clearBalance(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgClearBalance",
        value: MsgClearBalance.encode(value).finish()
      };
    },
    updateInnerRedemptionRateBounds(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgUpdateInnerRedemptionRateBounds",
        value: MsgUpdateInnerRedemptionRateBounds.encode(value).finish()
      };
    },
    resumeHostZone(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgResumeHostZone",
        value: MsgResumeHostZone.encode(value).finish()
      };
    },
    createTradeRoute(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgCreateTradeRoute",
        value: MsgCreateTradeRoute.encode(value).finish()
      };
    },
    deleteTradeRoute(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgDeleteTradeRoute",
        value: MsgDeleteTradeRoute.encode(value).finish()
      };
    },
    updateTradeRoute(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgUpdateTradeRoute",
        value: MsgUpdateTradeRoute.encode(value).finish()
      };
    },
    setCommunityPoolRebate(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgSetCommunityPoolRebate",
        value: MsgSetCommunityPoolRebate.encode(value).finish()
      };
    },
    toggleTradeController(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgToggleTradeController",
        value: MsgToggleTradeController.encode(value).finish()
      };
    },
    updateHostZoneParams(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgUpdateHostZoneParams",
        value: MsgUpdateHostZoneParams.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    liquidStake(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgLiquidStake",
        value
      };
    },
    lSMLiquidStake(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgLSMLiquidStake",
        value
      };
    },
    redeemStake(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgRedeemStake",
        value
      };
    },
    registerHostZone(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgRegisterHostZone",
        value
      };
    },
    claimUndelegatedTokens(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgClaimUndelegatedTokens",
        value
      };
    },
    rebalanceValidators(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgRebalanceValidators",
        value
      };
    },
    addValidators(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgAddValidators",
        value
      };
    },
    changeValidatorWeight(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgChangeValidatorWeights",
        value
      };
    },
    deleteValidator(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgDeleteValidator",
        value
      };
    },
    restoreInterchainAccount(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgRestoreInterchainAccount",
        value
      };
    },
    closeDelegationChannel(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgCloseDelegationChannel",
        value
      };
    },
    updateValidatorSharesExchRate(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgUpdateValidatorSharesExchRate",
        value
      };
    },
    calibrateDelegation(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgCalibrateDelegation",
        value
      };
    },
    clearBalance(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgClearBalance",
        value
      };
    },
    updateInnerRedemptionRateBounds(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgUpdateInnerRedemptionRateBounds",
        value
      };
    },
    resumeHostZone(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgResumeHostZone",
        value
      };
    },
    createTradeRoute(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgCreateTradeRoute",
        value
      };
    },
    deleteTradeRoute(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgDeleteTradeRoute",
        value
      };
    },
    updateTradeRoute(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgUpdateTradeRoute",
        value
      };
    },
    setCommunityPoolRebate(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgSetCommunityPoolRebate",
        value
      };
    },
    toggleTradeController(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgToggleTradeController",
        value
      };
    },
    updateHostZoneParams(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgUpdateHostZoneParams",
        value
      };
    }
  },
  fromPartial: {
    liquidStake(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgLiquidStake",
        value: MsgLiquidStake.fromPartial(value)
      };
    },
    lSMLiquidStake(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgLSMLiquidStake",
        value: MsgLSMLiquidStake.fromPartial(value)
      };
    },
    redeemStake(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgRedeemStake",
        value: MsgRedeemStake.fromPartial(value)
      };
    },
    registerHostZone(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgRegisterHostZone",
        value: MsgRegisterHostZone.fromPartial(value)
      };
    },
    claimUndelegatedTokens(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgClaimUndelegatedTokens",
        value: MsgClaimUndelegatedTokens.fromPartial(value)
      };
    },
    rebalanceValidators(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgRebalanceValidators",
        value: MsgRebalanceValidators.fromPartial(value)
      };
    },
    addValidators(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgAddValidators",
        value: MsgAddValidators.fromPartial(value)
      };
    },
    changeValidatorWeight(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgChangeValidatorWeights",
        value: MsgChangeValidatorWeights.fromPartial(value)
      };
    },
    deleteValidator(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgDeleteValidator",
        value: MsgDeleteValidator.fromPartial(value)
      };
    },
    restoreInterchainAccount(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgRestoreInterchainAccount",
        value: MsgRestoreInterchainAccount.fromPartial(value)
      };
    },
    closeDelegationChannel(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgCloseDelegationChannel",
        value: MsgCloseDelegationChannel.fromPartial(value)
      };
    },
    updateValidatorSharesExchRate(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgUpdateValidatorSharesExchRate",
        value: MsgUpdateValidatorSharesExchRate.fromPartial(value)
      };
    },
    calibrateDelegation(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgCalibrateDelegation",
        value: MsgCalibrateDelegation.fromPartial(value)
      };
    },
    clearBalance(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgClearBalance",
        value: MsgClearBalance.fromPartial(value)
      };
    },
    updateInnerRedemptionRateBounds(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgUpdateInnerRedemptionRateBounds",
        value: MsgUpdateInnerRedemptionRateBounds.fromPartial(value)
      };
    },
    resumeHostZone(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgResumeHostZone",
        value: MsgResumeHostZone.fromPartial(value)
      };
    },
    createTradeRoute(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgCreateTradeRoute",
        value: MsgCreateTradeRoute.fromPartial(value)
      };
    },
    deleteTradeRoute(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgDeleteTradeRoute",
        value: MsgDeleteTradeRoute.fromPartial(value)
      };
    },
    updateTradeRoute(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgUpdateTradeRoute",
        value: MsgUpdateTradeRoute.fromPartial(value)
      };
    },
    setCommunityPoolRebate(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgSetCommunityPoolRebate",
        value: MsgSetCommunityPoolRebate.fromPartial(value)
      };
    },
    toggleTradeController(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgToggleTradeController",
        value: MsgToggleTradeController.fromPartial(value)
      };
    },
    updateHostZoneParams(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgUpdateHostZoneParams",
        value: MsgUpdateHostZoneParams.fromPartial(value)
      };
    }
  }
};
export {
  MessageComposer,
  load,
  registry
};
