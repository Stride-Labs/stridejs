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
const registry = [["/cosmos.distribution.v1beta1.MsgSetWithdrawAddress", import_tx.MsgSetWithdrawAddress], ["/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward", import_tx.MsgWithdrawDelegatorReward], ["/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission", import_tx.MsgWithdrawValidatorCommission], ["/cosmos.distribution.v1beta1.MsgWithdrawTokenizeShareRecordReward", import_tx.MsgWithdrawTokenizeShareRecordReward], ["/cosmos.distribution.v1beta1.MsgWithdrawAllTokenizeShareRecordReward", import_tx.MsgWithdrawAllTokenizeShareRecordReward], ["/cosmos.distribution.v1beta1.MsgFundCommunityPool", import_tx.MsgFundCommunityPool]];
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
    withdrawTokenizeShareRecordReward(value) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawTokenizeShareRecordReward",
        value: import_tx.MsgWithdrawTokenizeShareRecordReward.encode(value).finish()
      };
    },
    withdrawAllTokenizeShareRecordReward(value) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawAllTokenizeShareRecordReward",
        value: import_tx.MsgWithdrawAllTokenizeShareRecordReward.encode(value).finish()
      };
    },
    fundCommunityPool(value) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPool",
        value: import_tx.MsgFundCommunityPool.encode(value).finish()
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
    withdrawTokenizeShareRecordReward(value) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawTokenizeShareRecordReward",
        value
      };
    },
    withdrawAllTokenizeShareRecordReward(value) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawAllTokenizeShareRecordReward",
        value
      };
    },
    fundCommunityPool(value) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPool",
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
    withdrawTokenizeShareRecordReward(value) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawTokenizeShareRecordReward",
        value: import_tx.MsgWithdrawTokenizeShareRecordReward.fromPartial(value)
      };
    },
    withdrawAllTokenizeShareRecordReward(value) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawAllTokenizeShareRecordReward",
        value: import_tx.MsgWithdrawAllTokenizeShareRecordReward.fromPartial(value)
      };
    },
    fundCommunityPool(value) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPool",
        value: import_tx.MsgFundCommunityPool.fromPartial(value)
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
