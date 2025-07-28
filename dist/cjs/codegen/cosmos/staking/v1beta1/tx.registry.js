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
const registry = [["/cosmos.staking.v1beta1.MsgCreateValidator", import_tx.MsgCreateValidator], ["/cosmos.staking.v1beta1.MsgEditValidator", import_tx.MsgEditValidator], ["/cosmos.staking.v1beta1.MsgDelegate", import_tx.MsgDelegate], ["/cosmos.staking.v1beta1.MsgBeginRedelegate", import_tx.MsgBeginRedelegate], ["/cosmos.staking.v1beta1.MsgUndelegate", import_tx.MsgUndelegate], ["/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation", import_tx.MsgCancelUnbondingDelegation], ["/cosmos.staking.v1beta1.MsgUpdateParams", import_tx.MsgUpdateParams]];
const load = (protoRegistry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
const MessageComposer = {
  encoded: {
    createValidator(value) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidator",
        value: import_tx.MsgCreateValidator.encode(value).finish()
      };
    },
    editValidator(value) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgEditValidator",
        value: import_tx.MsgEditValidator.encode(value).finish()
      };
    },
    delegate(value) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgDelegate",
        value: import_tx.MsgDelegate.encode(value).finish()
      };
    },
    beginRedelegate(value) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegate",
        value: import_tx.MsgBeginRedelegate.encode(value).finish()
      };
    },
    undelegate(value) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgUndelegate",
        value: import_tx.MsgUndelegate.encode(value).finish()
      };
    },
    cancelUnbondingDelegation(value) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation",
        value: import_tx.MsgCancelUnbondingDelegation.encode(value).finish()
      };
    },
    updateParams(value) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgUpdateParams",
        value: import_tx.MsgUpdateParams.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createValidator(value) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidator",
        value
      };
    },
    editValidator(value) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgEditValidator",
        value
      };
    },
    delegate(value) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgDelegate",
        value
      };
    },
    beginRedelegate(value) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegate",
        value
      };
    },
    undelegate(value) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgUndelegate",
        value
      };
    },
    cancelUnbondingDelegation(value) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation",
        value
      };
    },
    updateParams(value) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgUpdateParams",
        value
      };
    }
  },
  fromPartial: {
    createValidator(value) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidator",
        value: import_tx.MsgCreateValidator.fromPartial(value)
      };
    },
    editValidator(value) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgEditValidator",
        value: import_tx.MsgEditValidator.fromPartial(value)
      };
    },
    delegate(value) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgDelegate",
        value: import_tx.MsgDelegate.fromPartial(value)
      };
    },
    beginRedelegate(value) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegate",
        value: import_tx.MsgBeginRedelegate.fromPartial(value)
      };
    },
    undelegate(value) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgUndelegate",
        value: import_tx.MsgUndelegate.fromPartial(value)
      };
    },
    cancelUnbondingDelegation(value) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation",
        value: import_tx.MsgCancelUnbondingDelegation.fromPartial(value)
      };
    },
    updateParams(value) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgUpdateParams",
        value: import_tx.MsgUpdateParams.fromPartial(value)
      };
    }
  }
};
// Removed broken CommonJS export annotation
