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
const registry = [["/ibc.core.connection.v1.MsgConnectionOpenInit", import_tx.MsgConnectionOpenInit], ["/ibc.core.connection.v1.MsgConnectionOpenTry", import_tx.MsgConnectionOpenTry], ["/ibc.core.connection.v1.MsgConnectionOpenAck", import_tx.MsgConnectionOpenAck], ["/ibc.core.connection.v1.MsgConnectionOpenConfirm", import_tx.MsgConnectionOpenConfirm], ["/ibc.core.connection.v1.MsgUpdateParams", import_tx.MsgUpdateParams]];
const load = (protoRegistry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
const MessageComposer = {
  encoded: {
    connectionOpenInit(value) {
      return {
        typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenInit",
        value: import_tx.MsgConnectionOpenInit.encode(value).finish()
      };
    },
    connectionOpenTry(value) {
      return {
        typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenTry",
        value: import_tx.MsgConnectionOpenTry.encode(value).finish()
      };
    },
    connectionOpenAck(value) {
      return {
        typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenAck",
        value: import_tx.MsgConnectionOpenAck.encode(value).finish()
      };
    },
    connectionOpenConfirm(value) {
      return {
        typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenConfirm",
        value: import_tx.MsgConnectionOpenConfirm.encode(value).finish()
      };
    },
    updateConnectionParams(value) {
      return {
        typeUrl: "/ibc.core.connection.v1.MsgUpdateParams",
        value: import_tx.MsgUpdateParams.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    connectionOpenInit(value) {
      return {
        typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenInit",
        value
      };
    },
    connectionOpenTry(value) {
      return {
        typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenTry",
        value
      };
    },
    connectionOpenAck(value) {
      return {
        typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenAck",
        value
      };
    },
    connectionOpenConfirm(value) {
      return {
        typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenConfirm",
        value
      };
    },
    updateConnectionParams(value) {
      return {
        typeUrl: "/ibc.core.connection.v1.MsgUpdateParams",
        value
      };
    }
  },
  fromPartial: {
    connectionOpenInit(value) {
      return {
        typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenInit",
        value: import_tx.MsgConnectionOpenInit.fromPartial(value)
      };
    },
    connectionOpenTry(value) {
      return {
        typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenTry",
        value: import_tx.MsgConnectionOpenTry.fromPartial(value)
      };
    },
    connectionOpenAck(value) {
      return {
        typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenAck",
        value: import_tx.MsgConnectionOpenAck.fromPartial(value)
      };
    },
    connectionOpenConfirm(value) {
      return {
        typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenConfirm",
        value: import_tx.MsgConnectionOpenConfirm.fromPartial(value)
      };
    },
    updateConnectionParams(value) {
      return {
        typeUrl: "/ibc.core.connection.v1.MsgUpdateParams",
        value: import_tx.MsgUpdateParams.fromPartial(value)
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
