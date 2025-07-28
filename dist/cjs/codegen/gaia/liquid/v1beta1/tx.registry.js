"use strict";
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
const registry = [["/gaia.liquid.v1beta1.MsgUpdateParams", import_tx.MsgUpdateParams], ["/gaia.liquid.v1beta1.MsgTokenizeShares", import_tx.MsgTokenizeShares], ["/gaia.liquid.v1beta1.MsgRedeemTokensForShares", import_tx.MsgRedeemTokensForShares], ["/gaia.liquid.v1beta1.MsgTransferTokenizeShareRecord", import_tx.MsgTransferTokenizeShareRecord], ["/gaia.liquid.v1beta1.MsgDisableTokenizeShares", import_tx.MsgDisableTokenizeShares], ["/gaia.liquid.v1beta1.MsgEnableTokenizeShares", import_tx.MsgEnableTokenizeShares], ["/gaia.liquid.v1beta1.MsgWithdrawTokenizeShareRecordReward", import_tx.MsgWithdrawTokenizeShareRecordReward], ["/gaia.liquid.v1beta1.MsgWithdrawAllTokenizeShareRecordReward", import_tx.MsgWithdrawAllTokenizeShareRecordReward]];
const load = (protoRegistry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
const MessageComposer = {
  encoded: {
    updateParams(value) {
      return {
        typeUrl: "/gaia.liquid.v1beta1.MsgUpdateParams",
        value: import_tx.MsgUpdateParams.encode(value).finish()
      };
    },
    tokenizeShares(value) {
      return {
        typeUrl: "/gaia.liquid.v1beta1.MsgTokenizeShares",
        value: import_tx.MsgTokenizeShares.encode(value).finish()
      };
    },
    redeemTokensForShares(value) {
      return {
        typeUrl: "/gaia.liquid.v1beta1.MsgRedeemTokensForShares",
        value: import_tx.MsgRedeemTokensForShares.encode(value).finish()
      };
    },
    transferTokenizeShareRecord(value) {
      return {
        typeUrl: "/gaia.liquid.v1beta1.MsgTransferTokenizeShareRecord",
        value: import_tx.MsgTransferTokenizeShareRecord.encode(value).finish()
      };
    },
    disableTokenizeShares(value) {
      return {
        typeUrl: "/gaia.liquid.v1beta1.MsgDisableTokenizeShares",
        value: import_tx.MsgDisableTokenizeShares.encode(value).finish()
      };
    },
    enableTokenizeShares(value) {
      return {
        typeUrl: "/gaia.liquid.v1beta1.MsgEnableTokenizeShares",
        value: import_tx.MsgEnableTokenizeShares.encode(value).finish()
      };
    },
    withdrawTokenizeShareRecordReward(value) {
      return {
        typeUrl: "/gaia.liquid.v1beta1.MsgWithdrawTokenizeShareRecordReward",
        value: import_tx.MsgWithdrawTokenizeShareRecordReward.encode(value).finish()
      };
    },
    withdrawAllTokenizeShareRecordReward(value) {
      return {
        typeUrl: "/gaia.liquid.v1beta1.MsgWithdrawAllTokenizeShareRecordReward",
        value: import_tx.MsgWithdrawAllTokenizeShareRecordReward.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    updateParams(value) {
      return {
        typeUrl: "/gaia.liquid.v1beta1.MsgUpdateParams",
        value
      };
    },
    tokenizeShares(value) {
      return {
        typeUrl: "/gaia.liquid.v1beta1.MsgTokenizeShares",
        value
      };
    },
    redeemTokensForShares(value) {
      return {
        typeUrl: "/gaia.liquid.v1beta1.MsgRedeemTokensForShares",
        value
      };
    },
    transferTokenizeShareRecord(value) {
      return {
        typeUrl: "/gaia.liquid.v1beta1.MsgTransferTokenizeShareRecord",
        value
      };
    },
    disableTokenizeShares(value) {
      return {
        typeUrl: "/gaia.liquid.v1beta1.MsgDisableTokenizeShares",
        value
      };
    },
    enableTokenizeShares(value) {
      return {
        typeUrl: "/gaia.liquid.v1beta1.MsgEnableTokenizeShares",
        value
      };
    },
    withdrawTokenizeShareRecordReward(value) {
      return {
        typeUrl: "/gaia.liquid.v1beta1.MsgWithdrawTokenizeShareRecordReward",
        value
      };
    },
    withdrawAllTokenizeShareRecordReward(value) {
      return {
        typeUrl: "/gaia.liquid.v1beta1.MsgWithdrawAllTokenizeShareRecordReward",
        value
      };
    }
  },
  fromPartial: {
    updateParams(value) {
      return {
        typeUrl: "/gaia.liquid.v1beta1.MsgUpdateParams",
        value: import_tx.MsgUpdateParams.fromPartial(value)
      };
    },
    tokenizeShares(value) {
      return {
        typeUrl: "/gaia.liquid.v1beta1.MsgTokenizeShares",
        value: import_tx.MsgTokenizeShares.fromPartial(value)
      };
    },
    redeemTokensForShares(value) {
      return {
        typeUrl: "/gaia.liquid.v1beta1.MsgRedeemTokensForShares",
        value: import_tx.MsgRedeemTokensForShares.fromPartial(value)
      };
    },
    transferTokenizeShareRecord(value) {
      return {
        typeUrl: "/gaia.liquid.v1beta1.MsgTransferTokenizeShareRecord",
        value: import_tx.MsgTransferTokenizeShareRecord.fromPartial(value)
      };
    },
    disableTokenizeShares(value) {
      return {
        typeUrl: "/gaia.liquid.v1beta1.MsgDisableTokenizeShares",
        value: import_tx.MsgDisableTokenizeShares.fromPartial(value)
      };
    },
    enableTokenizeShares(value) {
      return {
        typeUrl: "/gaia.liquid.v1beta1.MsgEnableTokenizeShares",
        value: import_tx.MsgEnableTokenizeShares.fromPartial(value)
      };
    },
    withdrawTokenizeShareRecordReward(value) {
      return {
        typeUrl: "/gaia.liquid.v1beta1.MsgWithdrawTokenizeShareRecordReward",
        value: import_tx.MsgWithdrawTokenizeShareRecordReward.fromPartial(value)
      };
    },
    withdrawAllTokenizeShareRecordReward(value) {
      return {
        typeUrl: "/gaia.liquid.v1beta1.MsgWithdrawAllTokenizeShareRecordReward",
        value: import_tx.MsgWithdrawAllTokenizeShareRecordReward.fromPartial(value)
      };
    }
  }
};
// Removed broken CommonJS export annotation
