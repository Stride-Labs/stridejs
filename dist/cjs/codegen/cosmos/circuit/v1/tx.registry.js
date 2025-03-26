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
const registry = [["/cosmos.circuit.v1.MsgAuthorizeCircuitBreaker", import_tx.MsgAuthorizeCircuitBreaker], ["/cosmos.circuit.v1.MsgTripCircuitBreaker", import_tx.MsgTripCircuitBreaker], ["/cosmos.circuit.v1.MsgResetCircuitBreaker", import_tx.MsgResetCircuitBreaker]];
const load = (protoRegistry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
const MessageComposer = {
  encoded: {
    authorizeCircuitBreaker(value) {
      return {
        typeUrl: "/cosmos.circuit.v1.MsgAuthorizeCircuitBreaker",
        value: import_tx.MsgAuthorizeCircuitBreaker.encode(value).finish()
      };
    },
    tripCircuitBreaker(value) {
      return {
        typeUrl: "/cosmos.circuit.v1.MsgTripCircuitBreaker",
        value: import_tx.MsgTripCircuitBreaker.encode(value).finish()
      };
    },
    resetCircuitBreaker(value) {
      return {
        typeUrl: "/cosmos.circuit.v1.MsgResetCircuitBreaker",
        value: import_tx.MsgResetCircuitBreaker.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    authorizeCircuitBreaker(value) {
      return {
        typeUrl: "/cosmos.circuit.v1.MsgAuthorizeCircuitBreaker",
        value
      };
    },
    tripCircuitBreaker(value) {
      return {
        typeUrl: "/cosmos.circuit.v1.MsgTripCircuitBreaker",
        value
      };
    },
    resetCircuitBreaker(value) {
      return {
        typeUrl: "/cosmos.circuit.v1.MsgResetCircuitBreaker",
        value
      };
    }
  },
  fromPartial: {
    authorizeCircuitBreaker(value) {
      return {
        typeUrl: "/cosmos.circuit.v1.MsgAuthorizeCircuitBreaker",
        value: import_tx.MsgAuthorizeCircuitBreaker.fromPartial(value)
      };
    },
    tripCircuitBreaker(value) {
      return {
        typeUrl: "/cosmos.circuit.v1.MsgTripCircuitBreaker",
        value: import_tx.MsgTripCircuitBreaker.fromPartial(value)
      };
    },
    resetCircuitBreaker(value) {
      return {
        typeUrl: "/cosmos.circuit.v1.MsgResetCircuitBreaker",
        value: import_tx.MsgResetCircuitBreaker.fromPartial(value)
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
