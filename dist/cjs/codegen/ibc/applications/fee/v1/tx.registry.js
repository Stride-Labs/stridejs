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
const registry = [["/ibc.applications.fee.v1.MsgRegisterPayee", import_tx.MsgRegisterPayee], ["/ibc.applications.fee.v1.MsgRegisterCounterpartyPayee", import_tx.MsgRegisterCounterpartyPayee], ["/ibc.applications.fee.v1.MsgPayPacketFee", import_tx.MsgPayPacketFee], ["/ibc.applications.fee.v1.MsgPayPacketFeeAsync", import_tx.MsgPayPacketFeeAsync]];
const load = (protoRegistry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
const MessageComposer = {
  encoded: {
    registerPayee(value) {
      return {
        typeUrl: "/ibc.applications.fee.v1.MsgRegisterPayee",
        value: import_tx.MsgRegisterPayee.encode(value).finish()
      };
    },
    registerCounterpartyPayee(value) {
      return {
        typeUrl: "/ibc.applications.fee.v1.MsgRegisterCounterpartyPayee",
        value: import_tx.MsgRegisterCounterpartyPayee.encode(value).finish()
      };
    },
    payPacketFee(value) {
      return {
        typeUrl: "/ibc.applications.fee.v1.MsgPayPacketFee",
        value: import_tx.MsgPayPacketFee.encode(value).finish()
      };
    },
    payPacketFeeAsync(value) {
      return {
        typeUrl: "/ibc.applications.fee.v1.MsgPayPacketFeeAsync",
        value: import_tx.MsgPayPacketFeeAsync.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    registerPayee(value) {
      return {
        typeUrl: "/ibc.applications.fee.v1.MsgRegisterPayee",
        value
      };
    },
    registerCounterpartyPayee(value) {
      return {
        typeUrl: "/ibc.applications.fee.v1.MsgRegisterCounterpartyPayee",
        value
      };
    },
    payPacketFee(value) {
      return {
        typeUrl: "/ibc.applications.fee.v1.MsgPayPacketFee",
        value
      };
    },
    payPacketFeeAsync(value) {
      return {
        typeUrl: "/ibc.applications.fee.v1.MsgPayPacketFeeAsync",
        value
      };
    }
  },
  fromPartial: {
    registerPayee(value) {
      return {
        typeUrl: "/ibc.applications.fee.v1.MsgRegisterPayee",
        value: import_tx.MsgRegisterPayee.fromPartial(value)
      };
    },
    registerCounterpartyPayee(value) {
      return {
        typeUrl: "/ibc.applications.fee.v1.MsgRegisterCounterpartyPayee",
        value: import_tx.MsgRegisterCounterpartyPayee.fromPartial(value)
      };
    },
    payPacketFee(value) {
      return {
        typeUrl: "/ibc.applications.fee.v1.MsgPayPacketFee",
        value: import_tx.MsgPayPacketFee.fromPartial(value)
      };
    },
    payPacketFeeAsync(value) {
      return {
        typeUrl: "/ibc.applications.fee.v1.MsgPayPacketFeeAsync",
        value: import_tx.MsgPayPacketFeeAsync.fromPartial(value)
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
