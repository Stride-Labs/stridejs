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
var messages_registry_exports = {};
__export(messages_registry_exports, {
  MessageComposer: () => MessageComposer,
  load: () => load,
  registry: () => registry
});
module.exports = __toCommonJS(messages_registry_exports);
var import_messages = require("./messages");
const registry = [["/stride.interchainquery.v1.MsgSubmitQueryResponse", import_messages.MsgSubmitQueryResponse]];
const load = (protoRegistry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
const MessageComposer = {
  encoded: {
    submitQueryResponse(value) {
      return {
        typeUrl: "/stride.interchainquery.v1.MsgSubmitQueryResponse",
        value: import_messages.MsgSubmitQueryResponse.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    submitQueryResponse(value) {
      return {
        typeUrl: "/stride.interchainquery.v1.MsgSubmitQueryResponse",
        value
      };
    }
  },
  fromPartial: {
    submitQueryResponse(value) {
      return {
        typeUrl: "/stride.interchainquery.v1.MsgSubmitQueryResponse",
        value: import_messages.MsgSubmitQueryResponse.fromPartial(value)
      };
    }
  }
};
// Removed broken CommonJS export annotation
