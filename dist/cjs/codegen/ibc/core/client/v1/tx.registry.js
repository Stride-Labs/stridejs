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
const registry = [["/ibc.core.client.v1.MsgCreateClient", import_tx.MsgCreateClient], ["/ibc.core.client.v1.MsgUpdateClient", import_tx.MsgUpdateClient], ["/ibc.core.client.v1.MsgUpgradeClient", import_tx.MsgUpgradeClient], ["/ibc.core.client.v1.MsgSubmitMisbehaviour", import_tx.MsgSubmitMisbehaviour]];
const load = (protoRegistry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
const MessageComposer = {
  encoded: {
    createClient(value) {
      return {
        typeUrl: "/ibc.core.client.v1.MsgCreateClient",
        value: import_tx.MsgCreateClient.encode(value).finish()
      };
    },
    updateClient(value) {
      return {
        typeUrl: "/ibc.core.client.v1.MsgUpdateClient",
        value: import_tx.MsgUpdateClient.encode(value).finish()
      };
    },
    upgradeClient(value) {
      return {
        typeUrl: "/ibc.core.client.v1.MsgUpgradeClient",
        value: import_tx.MsgUpgradeClient.encode(value).finish()
      };
    },
    submitMisbehaviour(value) {
      return {
        typeUrl: "/ibc.core.client.v1.MsgSubmitMisbehaviour",
        value: import_tx.MsgSubmitMisbehaviour.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createClient(value) {
      return {
        typeUrl: "/ibc.core.client.v1.MsgCreateClient",
        value
      };
    },
    updateClient(value) {
      return {
        typeUrl: "/ibc.core.client.v1.MsgUpdateClient",
        value
      };
    },
    upgradeClient(value) {
      return {
        typeUrl: "/ibc.core.client.v1.MsgUpgradeClient",
        value
      };
    },
    submitMisbehaviour(value) {
      return {
        typeUrl: "/ibc.core.client.v1.MsgSubmitMisbehaviour",
        value
      };
    }
  },
  fromPartial: {
    createClient(value) {
      return {
        typeUrl: "/ibc.core.client.v1.MsgCreateClient",
        value: import_tx.MsgCreateClient.fromPartial(value)
      };
    },
    updateClient(value) {
      return {
        typeUrl: "/ibc.core.client.v1.MsgUpdateClient",
        value: import_tx.MsgUpdateClient.fromPartial(value)
      };
    },
    upgradeClient(value) {
      return {
        typeUrl: "/ibc.core.client.v1.MsgUpgradeClient",
        value: import_tx.MsgUpgradeClient.fromPartial(value)
      };
    },
    submitMisbehaviour(value) {
      return {
        typeUrl: "/ibc.core.client.v1.MsgSubmitMisbehaviour",
        value: import_tx.MsgSubmitMisbehaviour.fromPartial(value)
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
