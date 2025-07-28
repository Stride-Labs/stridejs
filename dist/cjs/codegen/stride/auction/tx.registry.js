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
const registry = [["/stride.auction.MsgPlaceBid", import_tx.MsgPlaceBid], ["/stride.auction.MsgCreateAuction", import_tx.MsgCreateAuction], ["/stride.auction.MsgUpdateAuction", import_tx.MsgUpdateAuction]];
const load = (protoRegistry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
const MessageComposer = {
  encoded: {
    placeBid(value) {
      return {
        typeUrl: "/stride.auction.MsgPlaceBid",
        value: import_tx.MsgPlaceBid.encode(value).finish()
      };
    },
    createAuction(value) {
      return {
        typeUrl: "/stride.auction.MsgCreateAuction",
        value: import_tx.MsgCreateAuction.encode(value).finish()
      };
    },
    updateAuction(value) {
      return {
        typeUrl: "/stride.auction.MsgUpdateAuction",
        value: import_tx.MsgUpdateAuction.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    placeBid(value) {
      return {
        typeUrl: "/stride.auction.MsgPlaceBid",
        value
      };
    },
    createAuction(value) {
      return {
        typeUrl: "/stride.auction.MsgCreateAuction",
        value
      };
    },
    updateAuction(value) {
      return {
        typeUrl: "/stride.auction.MsgUpdateAuction",
        value
      };
    }
  },
  fromPartial: {
    placeBid(value) {
      return {
        typeUrl: "/stride.auction.MsgPlaceBid",
        value: import_tx.MsgPlaceBid.fromPartial(value)
      };
    },
    createAuction(value) {
      return {
        typeUrl: "/stride.auction.MsgCreateAuction",
        value: import_tx.MsgCreateAuction.fromPartial(value)
      };
    },
    updateAuction(value) {
      return {
        typeUrl: "/stride.auction.MsgUpdateAuction",
        value: import_tx.MsgUpdateAuction.fromPartial(value)
      };
    }
  }
};
// Removed broken CommonJS export annotation
