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
const registry = [["/ibc.lightclients.wasm.v1.MsgStoreCode", import_tx.MsgStoreCode], ["/ibc.lightclients.wasm.v1.MsgRemoveChecksum", import_tx.MsgRemoveChecksum], ["/ibc.lightclients.wasm.v1.MsgMigrateContract", import_tx.MsgMigrateContract]];
const load = (protoRegistry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
const MessageComposer = {
  encoded: {
    storeCode(value) {
      return {
        typeUrl: "/ibc.lightclients.wasm.v1.MsgStoreCode",
        value: import_tx.MsgStoreCode.encode(value).finish()
      };
    },
    removeChecksum(value) {
      return {
        typeUrl: "/ibc.lightclients.wasm.v1.MsgRemoveChecksum",
        value: import_tx.MsgRemoveChecksum.encode(value).finish()
      };
    },
    migrateContract(value) {
      return {
        typeUrl: "/ibc.lightclients.wasm.v1.MsgMigrateContract",
        value: import_tx.MsgMigrateContract.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    storeCode(value) {
      return {
        typeUrl: "/ibc.lightclients.wasm.v1.MsgStoreCode",
        value
      };
    },
    removeChecksum(value) {
      return {
        typeUrl: "/ibc.lightclients.wasm.v1.MsgRemoveChecksum",
        value
      };
    },
    migrateContract(value) {
      return {
        typeUrl: "/ibc.lightclients.wasm.v1.MsgMigrateContract",
        value
      };
    }
  },
  fromPartial: {
    storeCode(value) {
      return {
        typeUrl: "/ibc.lightclients.wasm.v1.MsgStoreCode",
        value: import_tx.MsgStoreCode.fromPartial(value)
      };
    },
    removeChecksum(value) {
      return {
        typeUrl: "/ibc.lightclients.wasm.v1.MsgRemoveChecksum",
        value: import_tx.MsgRemoveChecksum.fromPartial(value)
      };
    },
    migrateContract(value) {
      return {
        typeUrl: "/ibc.lightclients.wasm.v1.MsgMigrateContract",
        value: import_tx.MsgMigrateContract.fromPartial(value)
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
