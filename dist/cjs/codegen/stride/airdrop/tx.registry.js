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
const registry = [["/stride.airdrop.MsgClaimDaily", import_tx.MsgClaimDaily], ["/stride.airdrop.MsgClaimEarly", import_tx.MsgClaimEarly], ["/stride.airdrop.MsgCreateAirdrop", import_tx.MsgCreateAirdrop], ["/stride.airdrop.MsgUpdateAirdrop", import_tx.MsgUpdateAirdrop], ["/stride.airdrop.MsgAddAllocations", import_tx.MsgAddAllocations], ["/stride.airdrop.MsgUpdateUserAllocation", import_tx.MsgUpdateUserAllocation], ["/stride.airdrop.MsgLinkAddresses", import_tx.MsgLinkAddresses]];
const load = (protoRegistry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
const MessageComposer = {
  encoded: {
    claimDaily(value) {
      return {
        typeUrl: "/stride.airdrop.MsgClaimDaily",
        value: import_tx.MsgClaimDaily.encode(value).finish()
      };
    },
    claimEarly(value) {
      return {
        typeUrl: "/stride.airdrop.MsgClaimEarly",
        value: import_tx.MsgClaimEarly.encode(value).finish()
      };
    },
    createAirdrop(value) {
      return {
        typeUrl: "/stride.airdrop.MsgCreateAirdrop",
        value: import_tx.MsgCreateAirdrop.encode(value).finish()
      };
    },
    updateAirdrop(value) {
      return {
        typeUrl: "/stride.airdrop.MsgUpdateAirdrop",
        value: import_tx.MsgUpdateAirdrop.encode(value).finish()
      };
    },
    addAllocations(value) {
      return {
        typeUrl: "/stride.airdrop.MsgAddAllocations",
        value: import_tx.MsgAddAllocations.encode(value).finish()
      };
    },
    updateUserAllocation(value) {
      return {
        typeUrl: "/stride.airdrop.MsgUpdateUserAllocation",
        value: import_tx.MsgUpdateUserAllocation.encode(value).finish()
      };
    },
    linkAddresses(value) {
      return {
        typeUrl: "/stride.airdrop.MsgLinkAddresses",
        value: import_tx.MsgLinkAddresses.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    claimDaily(value) {
      return {
        typeUrl: "/stride.airdrop.MsgClaimDaily",
        value
      };
    },
    claimEarly(value) {
      return {
        typeUrl: "/stride.airdrop.MsgClaimEarly",
        value
      };
    },
    createAirdrop(value) {
      return {
        typeUrl: "/stride.airdrop.MsgCreateAirdrop",
        value
      };
    },
    updateAirdrop(value) {
      return {
        typeUrl: "/stride.airdrop.MsgUpdateAirdrop",
        value
      };
    },
    addAllocations(value) {
      return {
        typeUrl: "/stride.airdrop.MsgAddAllocations",
        value
      };
    },
    updateUserAllocation(value) {
      return {
        typeUrl: "/stride.airdrop.MsgUpdateUserAllocation",
        value
      };
    },
    linkAddresses(value) {
      return {
        typeUrl: "/stride.airdrop.MsgLinkAddresses",
        value
      };
    }
  },
  fromPartial: {
    claimDaily(value) {
      return {
        typeUrl: "/stride.airdrop.MsgClaimDaily",
        value: import_tx.MsgClaimDaily.fromPartial(value)
      };
    },
    claimEarly(value) {
      return {
        typeUrl: "/stride.airdrop.MsgClaimEarly",
        value: import_tx.MsgClaimEarly.fromPartial(value)
      };
    },
    createAirdrop(value) {
      return {
        typeUrl: "/stride.airdrop.MsgCreateAirdrop",
        value: import_tx.MsgCreateAirdrop.fromPartial(value)
      };
    },
    updateAirdrop(value) {
      return {
        typeUrl: "/stride.airdrop.MsgUpdateAirdrop",
        value: import_tx.MsgUpdateAirdrop.fromPartial(value)
      };
    },
    addAllocations(value) {
      return {
        typeUrl: "/stride.airdrop.MsgAddAllocations",
        value: import_tx.MsgAddAllocations.fromPartial(value)
      };
    },
    updateUserAllocation(value) {
      return {
        typeUrl: "/stride.airdrop.MsgUpdateUserAllocation",
        value: import_tx.MsgUpdateUserAllocation.fromPartial(value)
      };
    },
    linkAddresses(value) {
      return {
        typeUrl: "/stride.airdrop.MsgLinkAddresses",
        value: import_tx.MsgLinkAddresses.fromPartial(value)
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
