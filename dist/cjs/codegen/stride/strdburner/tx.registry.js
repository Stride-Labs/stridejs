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
const registry = [["/stride.strdburner.MsgBurn", import_tx.MsgBurn], ["/stride.strdburner.MsgLink", import_tx.MsgLink]];
const load = (protoRegistry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
const MessageComposer = {
  encoded: {
    burn(value) {
      return {
        typeUrl: "/stride.strdburner.MsgBurn",
        value: import_tx.MsgBurn.encode(value).finish()
      };
    },
    link(value) {
      return {
        typeUrl: "/stride.strdburner.MsgLink",
        value: import_tx.MsgLink.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    burn(value) {
      return {
        typeUrl: "/stride.strdburner.MsgBurn",
        value
      };
    },
    link(value) {
      return {
        typeUrl: "/stride.strdburner.MsgLink",
        value
      };
    }
  },
  fromPartial: {
    burn(value) {
      return {
        typeUrl: "/stride.strdburner.MsgBurn",
        value: import_tx.MsgBurn.fromPartial(value)
      };
    },
    link(value) {
      return {
        typeUrl: "/stride.strdburner.MsgLink",
        value: import_tx.MsgLink.fromPartial(value)
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
