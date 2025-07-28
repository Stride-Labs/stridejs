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
const registry = [["/stride.claim.MsgSetAirdropAllocations", import_tx.MsgSetAirdropAllocations], ["/stride.claim.MsgClaimFreeAmount", import_tx.MsgClaimFreeAmount], ["/stride.claim.MsgCreateAirdrop", import_tx.MsgCreateAirdrop], ["/stride.claim.MsgDeleteAirdrop", import_tx.MsgDeleteAirdrop]];
const load = (protoRegistry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
const MessageComposer = {
  encoded: {
    setAirdropAllocations(value) {
      return {
        typeUrl: "/stride.claim.MsgSetAirdropAllocations",
        value: import_tx.MsgSetAirdropAllocations.encode(value).finish()
      };
    },
    claimFreeAmount(value) {
      return {
        typeUrl: "/stride.claim.MsgClaimFreeAmount",
        value: import_tx.MsgClaimFreeAmount.encode(value).finish()
      };
    },
    createAirdrop(value) {
      return {
        typeUrl: "/stride.claim.MsgCreateAirdrop",
        value: import_tx.MsgCreateAirdrop.encode(value).finish()
      };
    },
    deleteAirdrop(value) {
      return {
        typeUrl: "/stride.claim.MsgDeleteAirdrop",
        value: import_tx.MsgDeleteAirdrop.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    setAirdropAllocations(value) {
      return {
        typeUrl: "/stride.claim.MsgSetAirdropAllocations",
        value
      };
    },
    claimFreeAmount(value) {
      return {
        typeUrl: "/stride.claim.MsgClaimFreeAmount",
        value
      };
    },
    createAirdrop(value) {
      return {
        typeUrl: "/stride.claim.MsgCreateAirdrop",
        value
      };
    },
    deleteAirdrop(value) {
      return {
        typeUrl: "/stride.claim.MsgDeleteAirdrop",
        value
      };
    }
  },
  fromPartial: {
    setAirdropAllocations(value) {
      return {
        typeUrl: "/stride.claim.MsgSetAirdropAllocations",
        value: import_tx.MsgSetAirdropAllocations.fromPartial(value)
      };
    },
    claimFreeAmount(value) {
      return {
        typeUrl: "/stride.claim.MsgClaimFreeAmount",
        value: import_tx.MsgClaimFreeAmount.fromPartial(value)
      };
    },
    createAirdrop(value) {
      return {
        typeUrl: "/stride.claim.MsgCreateAirdrop",
        value: import_tx.MsgCreateAirdrop.fromPartial(value)
      };
    },
    deleteAirdrop(value) {
      return {
        typeUrl: "/stride.claim.MsgDeleteAirdrop",
        value: import_tx.MsgDeleteAirdrop.fromPartial(value)
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
