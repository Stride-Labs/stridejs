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
const registry = [["/cosmos.bank.v1beta1.MsgSend", import_tx.MsgSend], ["/cosmos.bank.v1beta1.MsgMultiSend", import_tx.MsgMultiSend], ["/cosmos.bank.v1beta1.MsgUpdateParams", import_tx.MsgUpdateParams], ["/cosmos.bank.v1beta1.MsgSetSendEnabled", import_tx.MsgSetSendEnabled]];
const load = (protoRegistry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
const MessageComposer = {
  encoded: {
    send(value) {
      return {
        typeUrl: "/cosmos.bank.v1beta1.MsgSend",
        value: import_tx.MsgSend.encode(value).finish()
      };
    },
    multiSend(value) {
      return {
        typeUrl: "/cosmos.bank.v1beta1.MsgMultiSend",
        value: import_tx.MsgMultiSend.encode(value).finish()
      };
    },
    updateParams(value) {
      return {
        typeUrl: "/cosmos.bank.v1beta1.MsgUpdateParams",
        value: import_tx.MsgUpdateParams.encode(value).finish()
      };
    },
    setSendEnabled(value) {
      return {
        typeUrl: "/cosmos.bank.v1beta1.MsgSetSendEnabled",
        value: import_tx.MsgSetSendEnabled.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    send(value) {
      return {
        typeUrl: "/cosmos.bank.v1beta1.MsgSend",
        value
      };
    },
    multiSend(value) {
      return {
        typeUrl: "/cosmos.bank.v1beta1.MsgMultiSend",
        value
      };
    },
    updateParams(value) {
      return {
        typeUrl: "/cosmos.bank.v1beta1.MsgUpdateParams",
        value
      };
    },
    setSendEnabled(value) {
      return {
        typeUrl: "/cosmos.bank.v1beta1.MsgSetSendEnabled",
        value
      };
    }
  },
  fromPartial: {
    send(value) {
      return {
        typeUrl: "/cosmos.bank.v1beta1.MsgSend",
        value: import_tx.MsgSend.fromPartial(value)
      };
    },
    multiSend(value) {
      return {
        typeUrl: "/cosmos.bank.v1beta1.MsgMultiSend",
        value: import_tx.MsgMultiSend.fromPartial(value)
      };
    },
    updateParams(value) {
      return {
        typeUrl: "/cosmos.bank.v1beta1.MsgUpdateParams",
        value: import_tx.MsgUpdateParams.fromPartial(value)
      };
    },
    setSendEnabled(value) {
      return {
        typeUrl: "/cosmos.bank.v1beta1.MsgSetSendEnabled",
        value: import_tx.MsgSetSendEnabled.fromPartial(value)
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
