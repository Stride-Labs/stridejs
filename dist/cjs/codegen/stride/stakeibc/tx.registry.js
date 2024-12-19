var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var tx_registry_exports = {};
__export(tx_registry_exports, {
  MessageComposer: () => MessageComposer,
  load: () => load,
  registry: () => registry
});
module.exports = __toCommonJS(tx_registry_exports);
var import_tx = require("./tx");
const registry = [["/stride.stakeibc.MsgLiquidStake", import_tx.MsgLiquidStake], ["/stride.stakeibc.MsgLSMLiquidStake", import_tx.MsgLSMLiquidStake], ["/stride.stakeibc.MsgRedeemStake", import_tx.MsgRedeemStake], ["/stride.stakeibc.MsgRegisterHostZone", import_tx.MsgRegisterHostZone], ["/stride.stakeibc.MsgClaimUndelegatedTokens", import_tx.MsgClaimUndelegatedTokens], ["/stride.stakeibc.MsgRebalanceValidators", import_tx.MsgRebalanceValidators], ["/stride.stakeibc.MsgAddValidators", import_tx.MsgAddValidators], ["/stride.stakeibc.MsgChangeValidatorWeights", import_tx.MsgChangeValidatorWeights], ["/stride.stakeibc.MsgDeleteValidator", import_tx.MsgDeleteValidator], ["/stride.stakeibc.MsgRestoreInterchainAccount", import_tx.MsgRestoreInterchainAccount], ["/stride.stakeibc.MsgCloseDelegationChannel", import_tx.MsgCloseDelegationChannel], ["/stride.stakeibc.MsgUpdateValidatorSharesExchRate", import_tx.MsgUpdateValidatorSharesExchRate], ["/stride.stakeibc.MsgCalibrateDelegation", import_tx.MsgCalibrateDelegation], ["/stride.stakeibc.MsgClearBalance", import_tx.MsgClearBalance], ["/stride.stakeibc.MsgUpdateInnerRedemptionRateBounds", import_tx.MsgUpdateInnerRedemptionRateBounds], ["/stride.stakeibc.MsgResumeHostZone", import_tx.MsgResumeHostZone], ["/stride.stakeibc.MsgCreateTradeRoute", import_tx.MsgCreateTradeRoute], ["/stride.stakeibc.MsgDeleteTradeRoute", import_tx.MsgDeleteTradeRoute], ["/stride.stakeibc.MsgUpdateTradeRoute", import_tx.MsgUpdateTradeRoute], ["/stride.stakeibc.MsgSetCommunityPoolRebate", import_tx.MsgSetCommunityPoolRebate], ["/stride.stakeibc.MsgToggleTradeController", import_tx.MsgToggleTradeController], ["/stride.stakeibc.MsgUpdateHostZoneParams", import_tx.MsgUpdateHostZoneParams]];
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
        value: import_tx.MsgLiquidStake.encode(value).finish()
      };
    },
    lSMLiquidStake(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgLSMLiquidStake",
        value: import_tx.MsgLSMLiquidStake.encode(value).finish()
      };
    },
    redeemStake(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgRedeemStake",
        value: import_tx.MsgRedeemStake.encode(value).finish()
      };
    },
    registerHostZone(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgRegisterHostZone",
        value: import_tx.MsgRegisterHostZone.encode(value).finish()
      };
    },
    claimUndelegatedTokens(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgClaimUndelegatedTokens",
        value: import_tx.MsgClaimUndelegatedTokens.encode(value).finish()
      };
    },
    rebalanceValidators(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgRebalanceValidators",
        value: import_tx.MsgRebalanceValidators.encode(value).finish()
      };
    },
    addValidators(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgAddValidators",
        value: import_tx.MsgAddValidators.encode(value).finish()
      };
    },
    changeValidatorWeight(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgChangeValidatorWeights",
        value: import_tx.MsgChangeValidatorWeights.encode(value).finish()
      };
    },
    deleteValidator(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgDeleteValidator",
        value: import_tx.MsgDeleteValidator.encode(value).finish()
      };
    },
    restoreInterchainAccount(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgRestoreInterchainAccount",
        value: import_tx.MsgRestoreInterchainAccount.encode(value).finish()
      };
    },
    closeDelegationChannel(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgCloseDelegationChannel",
        value: import_tx.MsgCloseDelegationChannel.encode(value).finish()
      };
    },
    updateValidatorSharesExchRate(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgUpdateValidatorSharesExchRate",
        value: import_tx.MsgUpdateValidatorSharesExchRate.encode(value).finish()
      };
    },
    calibrateDelegation(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgCalibrateDelegation",
        value: import_tx.MsgCalibrateDelegation.encode(value).finish()
      };
    },
    clearBalance(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgClearBalance",
        value: import_tx.MsgClearBalance.encode(value).finish()
      };
    },
    updateInnerRedemptionRateBounds(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgUpdateInnerRedemptionRateBounds",
        value: import_tx.MsgUpdateInnerRedemptionRateBounds.encode(value).finish()
      };
    },
    resumeHostZone(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgResumeHostZone",
        value: import_tx.MsgResumeHostZone.encode(value).finish()
      };
    },
    createTradeRoute(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgCreateTradeRoute",
        value: import_tx.MsgCreateTradeRoute.encode(value).finish()
      };
    },
    deleteTradeRoute(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgDeleteTradeRoute",
        value: import_tx.MsgDeleteTradeRoute.encode(value).finish()
      };
    },
    updateTradeRoute(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgUpdateTradeRoute",
        value: import_tx.MsgUpdateTradeRoute.encode(value).finish()
      };
    },
    setCommunityPoolRebate(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgSetCommunityPoolRebate",
        value: import_tx.MsgSetCommunityPoolRebate.encode(value).finish()
      };
    },
    toggleTradeController(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgToggleTradeController",
        value: import_tx.MsgToggleTradeController.encode(value).finish()
      };
    },
    updateHostZoneParams(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgUpdateHostZoneParams",
        value: import_tx.MsgUpdateHostZoneParams.encode(value).finish()
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
        value: import_tx.MsgLiquidStake.fromPartial(value)
      };
    },
    lSMLiquidStake(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgLSMLiquidStake",
        value: import_tx.MsgLSMLiquidStake.fromPartial(value)
      };
    },
    redeemStake(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgRedeemStake",
        value: import_tx.MsgRedeemStake.fromPartial(value)
      };
    },
    registerHostZone(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgRegisterHostZone",
        value: import_tx.MsgRegisterHostZone.fromPartial(value)
      };
    },
    claimUndelegatedTokens(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgClaimUndelegatedTokens",
        value: import_tx.MsgClaimUndelegatedTokens.fromPartial(value)
      };
    },
    rebalanceValidators(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgRebalanceValidators",
        value: import_tx.MsgRebalanceValidators.fromPartial(value)
      };
    },
    addValidators(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgAddValidators",
        value: import_tx.MsgAddValidators.fromPartial(value)
      };
    },
    changeValidatorWeight(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgChangeValidatorWeights",
        value: import_tx.MsgChangeValidatorWeights.fromPartial(value)
      };
    },
    deleteValidator(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgDeleteValidator",
        value: import_tx.MsgDeleteValidator.fromPartial(value)
      };
    },
    restoreInterchainAccount(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgRestoreInterchainAccount",
        value: import_tx.MsgRestoreInterchainAccount.fromPartial(value)
      };
    },
    closeDelegationChannel(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgCloseDelegationChannel",
        value: import_tx.MsgCloseDelegationChannel.fromPartial(value)
      };
    },
    updateValidatorSharesExchRate(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgUpdateValidatorSharesExchRate",
        value: import_tx.MsgUpdateValidatorSharesExchRate.fromPartial(value)
      };
    },
    calibrateDelegation(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgCalibrateDelegation",
        value: import_tx.MsgCalibrateDelegation.fromPartial(value)
      };
    },
    clearBalance(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgClearBalance",
        value: import_tx.MsgClearBalance.fromPartial(value)
      };
    },
    updateInnerRedemptionRateBounds(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgUpdateInnerRedemptionRateBounds",
        value: import_tx.MsgUpdateInnerRedemptionRateBounds.fromPartial(value)
      };
    },
    resumeHostZone(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgResumeHostZone",
        value: import_tx.MsgResumeHostZone.fromPartial(value)
      };
    },
    createTradeRoute(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgCreateTradeRoute",
        value: import_tx.MsgCreateTradeRoute.fromPartial(value)
      };
    },
    deleteTradeRoute(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgDeleteTradeRoute",
        value: import_tx.MsgDeleteTradeRoute.fromPartial(value)
      };
    },
    updateTradeRoute(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgUpdateTradeRoute",
        value: import_tx.MsgUpdateTradeRoute.fromPartial(value)
      };
    },
    setCommunityPoolRebate(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgSetCommunityPoolRebate",
        value: import_tx.MsgSetCommunityPoolRebate.fromPartial(value)
      };
    },
    toggleTradeController(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgToggleTradeController",
        value: import_tx.MsgToggleTradeController.fromPartial(value)
      };
    },
    updateHostZoneParams(value) {
      return {
        typeUrl: "/stride.stakeibc.MsgUpdateHostZoneParams",
        value: import_tx.MsgUpdateHostZoneParams.fromPartial(value)
      };
    }
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  MessageComposer,
  load,
  registry
});
