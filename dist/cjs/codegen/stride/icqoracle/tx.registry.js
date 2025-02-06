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
const registry = [["/stride.icqoracle.MsgRegisterTokenPriceQuery", import_tx.MsgRegisterTokenPriceQuery], ["/stride.icqoracle.MsgRemoveTokenPriceQuery", import_tx.MsgRemoveTokenPriceQuery]];
const load = (protoRegistry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
const MessageComposer = {
  encoded: {
    registerTokenPriceQuery(value) {
      return {
        typeUrl: "/stride.icqoracle.MsgRegisterTokenPriceQuery",
        value: import_tx.MsgRegisterTokenPriceQuery.encode(value).finish()
      };
    },
    removeTokenPriceQuery(value) {
      return {
        typeUrl: "/stride.icqoracle.MsgRemoveTokenPriceQuery",
        value: import_tx.MsgRemoveTokenPriceQuery.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    registerTokenPriceQuery(value) {
      return {
        typeUrl: "/stride.icqoracle.MsgRegisterTokenPriceQuery",
        value
      };
    },
    removeTokenPriceQuery(value) {
      return {
        typeUrl: "/stride.icqoracle.MsgRemoveTokenPriceQuery",
        value
      };
    }
  },
  fromPartial: {
    registerTokenPriceQuery(value) {
      return {
        typeUrl: "/stride.icqoracle.MsgRegisterTokenPriceQuery",
        value: import_tx.MsgRegisterTokenPriceQuery.fromPartial(value)
      };
    },
    removeTokenPriceQuery(value) {
      return {
        typeUrl: "/stride.icqoracle.MsgRemoveTokenPriceQuery",
        value: import_tx.MsgRemoveTokenPriceQuery.fromPartial(value)
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
