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
const registry = [["/cosmos.distribution.v1beta1.MsgSetWithdrawAddress", import_tx.MsgSetWithdrawAddress], ["/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward", import_tx.MsgWithdrawDelegatorReward], ["/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission", import_tx.MsgWithdrawValidatorCommission], ["/cosmos.distribution.v1beta1.MsgFundCommunityPool", import_tx.MsgFundCommunityPool], ["/cosmos.distribution.v1beta1.MsgUpdateParams", import_tx.MsgUpdateParams], ["/cosmos.distribution.v1beta1.MsgCommunityPoolSpend", import_tx.MsgCommunityPoolSpend], ["/cosmos.distribution.v1beta1.MsgDepositValidatorRewardsPool", import_tx.MsgDepositValidatorRewardsPool]];
const load = (protoRegistry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
const MessageComposer = {
  encoded: {
    setWithdrawAddress(value) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress",
        value: import_tx.MsgSetWithdrawAddress.encode(value).finish()
      };
    },
    withdrawDelegatorReward(value) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
        value: import_tx.MsgWithdrawDelegatorReward.encode(value).finish()
      };
    },
    withdrawValidatorCommission(value) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission",
        value: import_tx.MsgWithdrawValidatorCommission.encode(value).finish()
      };
    },
    fundCommunityPool(value) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPool",
        value: import_tx.MsgFundCommunityPool.encode(value).finish()
      };
    },
    updateParams(value) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgUpdateParams",
        value: import_tx.MsgUpdateParams.encode(value).finish()
      };
    },
    communityPoolSpend(value) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgCommunityPoolSpend",
        value: import_tx.MsgCommunityPoolSpend.encode(value).finish()
      };
    },
    depositValidatorRewardsPool(value) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgDepositValidatorRewardsPool",
        value: import_tx.MsgDepositValidatorRewardsPool.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    setWithdrawAddress(value) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress",
        value
      };
    },
    withdrawDelegatorReward(value) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
        value
      };
    },
    withdrawValidatorCommission(value) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission",
        value
      };
    },
    fundCommunityPool(value) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPool",
        value
      };
    },
    updateParams(value) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgUpdateParams",
        value
      };
    },
    communityPoolSpend(value) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgCommunityPoolSpend",
        value
      };
    },
    depositValidatorRewardsPool(value) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgDepositValidatorRewardsPool",
        value
      };
    }
  },
  fromPartial: {
    setWithdrawAddress(value) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress",
        value: import_tx.MsgSetWithdrawAddress.fromPartial(value)
      };
    },
    withdrawDelegatorReward(value) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
        value: import_tx.MsgWithdrawDelegatorReward.fromPartial(value)
      };
    },
    withdrawValidatorCommission(value) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission",
        value: import_tx.MsgWithdrawValidatorCommission.fromPartial(value)
      };
    },
    fundCommunityPool(value) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPool",
        value: import_tx.MsgFundCommunityPool.fromPartial(value)
      };
    },
    updateParams(value) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgUpdateParams",
        value: import_tx.MsgUpdateParams.fromPartial(value)
      };
    },
    communityPoolSpend(value) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgCommunityPoolSpend",
        value: import_tx.MsgCommunityPoolSpend.fromPartial(value)
      };
    },
    depositValidatorRewardsPool(value) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgDepositValidatorRewardsPool",
        value: import_tx.MsgDepositValidatorRewardsPool.fromPartial(value)
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
