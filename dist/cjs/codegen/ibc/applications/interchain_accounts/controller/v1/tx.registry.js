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
const registry = [["/ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccount", import_tx.MsgRegisterInterchainAccount], ["/ibc.applications.interchain_accounts.controller.v1.MsgSendTx", import_tx.MsgSendTx]];
const load = (protoRegistry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
const MessageComposer = {
  encoded: {
    registerInterchainAccount(value) {
      return {
        typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccount",
        value: import_tx.MsgRegisterInterchainAccount.encode(value).finish()
      };
    },
    sendTx(value) {
      return {
        typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgSendTx",
        value: import_tx.MsgSendTx.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    registerInterchainAccount(value) {
      return {
        typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccount",
        value
      };
    },
    sendTx(value) {
      return {
        typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgSendTx",
        value
      };
    }
  },
  fromPartial: {
    registerInterchainAccount(value) {
      return {
        typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccount",
        value: import_tx.MsgRegisterInterchainAccount.fromPartial(value)
      };
    },
    sendTx(value) {
      return {
        typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgSendTx",
        value: import_tx.MsgSendTx.fromPartial(value)
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
