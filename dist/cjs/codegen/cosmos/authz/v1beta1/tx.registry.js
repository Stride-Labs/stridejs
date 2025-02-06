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
const registry = [["/cosmos.authz.v1beta1.MsgGrant", import_tx.MsgGrant], ["/cosmos.authz.v1beta1.MsgExec", import_tx.MsgExec], ["/cosmos.authz.v1beta1.MsgRevoke", import_tx.MsgRevoke]];
const load = (protoRegistry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
const MessageComposer = {
  encoded: {
    grant(value) {
      return {
        typeUrl: "/cosmos.authz.v1beta1.MsgGrant",
        value: import_tx.MsgGrant.encode(value).finish()
      };
    },
    exec(value) {
      return {
        typeUrl: "/cosmos.authz.v1beta1.MsgExec",
        value: import_tx.MsgExec.encode(value).finish()
      };
    },
    revoke(value) {
      return {
        typeUrl: "/cosmos.authz.v1beta1.MsgRevoke",
        value: import_tx.MsgRevoke.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    grant(value) {
      return {
        typeUrl: "/cosmos.authz.v1beta1.MsgGrant",
        value
      };
    },
    exec(value) {
      return {
        typeUrl: "/cosmos.authz.v1beta1.MsgExec",
        value
      };
    },
    revoke(value) {
      return {
        typeUrl: "/cosmos.authz.v1beta1.MsgRevoke",
        value
      };
    }
  },
  fromPartial: {
    grant(value) {
      return {
        typeUrl: "/cosmos.authz.v1beta1.MsgGrant",
        value: import_tx.MsgGrant.fromPartial(value)
      };
    },
    exec(value) {
      return {
        typeUrl: "/cosmos.authz.v1beta1.MsgExec",
        value: import_tx.MsgExec.fromPartial(value)
      };
    },
    revoke(value) {
      return {
        typeUrl: "/cosmos.authz.v1beta1.MsgRevoke",
        value: import_tx.MsgRevoke.fromPartial(value)
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
