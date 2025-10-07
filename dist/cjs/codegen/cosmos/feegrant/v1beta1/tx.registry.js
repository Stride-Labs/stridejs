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
const registry = [["/cosmos.feegrant.v1beta1.MsgGrantAllowance", import_tx.MsgGrantAllowance], ["/cosmos.feegrant.v1beta1.MsgRevokeAllowance", import_tx.MsgRevokeAllowance], ["/cosmos.feegrant.v1beta1.MsgPruneAllowances", import_tx.MsgPruneAllowances]];
const load = (protoRegistry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
const MessageComposer = {
  encoded: {
    grantAllowance(value) {
      return {
        typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowance",
        value: import_tx.MsgGrantAllowance.encode(value).finish()
      };
    },
    revokeAllowance(value) {
      return {
        typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowance",
        value: import_tx.MsgRevokeAllowance.encode(value).finish()
      };
    },
    pruneAllowances(value) {
      return {
        typeUrl: "/cosmos.feegrant.v1beta1.MsgPruneAllowances",
        value: import_tx.MsgPruneAllowances.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    grantAllowance(value) {
      return {
        typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowance",
        value
      };
    },
    revokeAllowance(value) {
      return {
        typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowance",
        value
      };
    },
    pruneAllowances(value) {
      return {
        typeUrl: "/cosmos.feegrant.v1beta1.MsgPruneAllowances",
        value
      };
    }
  },
  fromPartial: {
    grantAllowance(value) {
      return {
        typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowance",
        value: import_tx.MsgGrantAllowance.fromPartial(value)
      };
    },
    revokeAllowance(value) {
      return {
        typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowance",
        value: import_tx.MsgRevokeAllowance.fromPartial(value)
      };
    },
    pruneAllowances(value) {
      return {
        typeUrl: "/cosmos.feegrant.v1beta1.MsgPruneAllowances",
        value: import_tx.MsgPruneAllowances.fromPartial(value)
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
