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
const registry = [["/stride.icaoracle.MsgAddOracle", import_tx.MsgAddOracle], ["/stride.icaoracle.MsgInstantiateOracle", import_tx.MsgInstantiateOracle], ["/stride.icaoracle.MsgRestoreOracleICA", import_tx.MsgRestoreOracleICA], ["/stride.icaoracle.MsgToggleOracle", import_tx.MsgToggleOracle], ["/stride.icaoracle.MsgRemoveOracle", import_tx.MsgRemoveOracle]];
const load = (protoRegistry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
const MessageComposer = {
  encoded: {
    addOracle(value) {
      return {
        typeUrl: "/stride.icaoracle.MsgAddOracle",
        value: import_tx.MsgAddOracle.encode(value).finish()
      };
    },
    instantiateOracle(value) {
      return {
        typeUrl: "/stride.icaoracle.MsgInstantiateOracle",
        value: import_tx.MsgInstantiateOracle.encode(value).finish()
      };
    },
    restoreOracleICA(value) {
      return {
        typeUrl: "/stride.icaoracle.MsgRestoreOracleICA",
        value: import_tx.MsgRestoreOracleICA.encode(value).finish()
      };
    },
    toggleOracle(value) {
      return {
        typeUrl: "/stride.icaoracle.MsgToggleOracle",
        value: import_tx.MsgToggleOracle.encode(value).finish()
      };
    },
    removeOracle(value) {
      return {
        typeUrl: "/stride.icaoracle.MsgRemoveOracle",
        value: import_tx.MsgRemoveOracle.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    addOracle(value) {
      return {
        typeUrl: "/stride.icaoracle.MsgAddOracle",
        value
      };
    },
    instantiateOracle(value) {
      return {
        typeUrl: "/stride.icaoracle.MsgInstantiateOracle",
        value
      };
    },
    restoreOracleICA(value) {
      return {
        typeUrl: "/stride.icaoracle.MsgRestoreOracleICA",
        value
      };
    },
    toggleOracle(value) {
      return {
        typeUrl: "/stride.icaoracle.MsgToggleOracle",
        value
      };
    },
    removeOracle(value) {
      return {
        typeUrl: "/stride.icaoracle.MsgRemoveOracle",
        value
      };
    }
  },
  fromPartial: {
    addOracle(value) {
      return {
        typeUrl: "/stride.icaoracle.MsgAddOracle",
        value: import_tx.MsgAddOracle.fromPartial(value)
      };
    },
    instantiateOracle(value) {
      return {
        typeUrl: "/stride.icaoracle.MsgInstantiateOracle",
        value: import_tx.MsgInstantiateOracle.fromPartial(value)
      };
    },
    restoreOracleICA(value) {
      return {
        typeUrl: "/stride.icaoracle.MsgRestoreOracleICA",
        value: import_tx.MsgRestoreOracleICA.fromPartial(value)
      };
    },
    toggleOracle(value) {
      return {
        typeUrl: "/stride.icaoracle.MsgToggleOracle",
        value: import_tx.MsgToggleOracle.fromPartial(value)
      };
    },
    removeOracle(value) {
      return {
        typeUrl: "/stride.icaoracle.MsgRemoveOracle",
        value: import_tx.MsgRemoveOracle.fromPartial(value)
      };
    }
  }
};
// Proper CommonJS exports for dynamic imports
module.exports = {
  MessageComposer,
  load,
  registry
};
