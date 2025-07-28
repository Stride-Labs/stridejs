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
const registry = [["/cosmos.gov.v1beta1.MsgSubmitProposal", import_tx.MsgSubmitProposal], ["/cosmos.gov.v1beta1.MsgVote", import_tx.MsgVote], ["/cosmos.gov.v1beta1.MsgVoteWeighted", import_tx.MsgVoteWeighted], ["/cosmos.gov.v1beta1.MsgDeposit", import_tx.MsgDeposit]];
const load = (protoRegistry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
const MessageComposer = {
  encoded: {
    submitProposal(value) {
      return {
        typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposal",
        value: import_tx.MsgSubmitProposal.encode(value).finish()
      };
    },
    vote(value) {
      return {
        typeUrl: "/cosmos.gov.v1beta1.MsgVote",
        value: import_tx.MsgVote.encode(value).finish()
      };
    },
    voteWeighted(value) {
      return {
        typeUrl: "/cosmos.gov.v1beta1.MsgVoteWeighted",
        value: import_tx.MsgVoteWeighted.encode(value).finish()
      };
    },
    deposit(value) {
      return {
        typeUrl: "/cosmos.gov.v1beta1.MsgDeposit",
        value: import_tx.MsgDeposit.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    submitProposal(value) {
      return {
        typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposal",
        value
      };
    },
    vote(value) {
      return {
        typeUrl: "/cosmos.gov.v1beta1.MsgVote",
        value
      };
    },
    voteWeighted(value) {
      return {
        typeUrl: "/cosmos.gov.v1beta1.MsgVoteWeighted",
        value
      };
    },
    deposit(value) {
      return {
        typeUrl: "/cosmos.gov.v1beta1.MsgDeposit",
        value
      };
    }
  },
  fromPartial: {
    submitProposal(value) {
      return {
        typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposal",
        value: import_tx.MsgSubmitProposal.fromPartial(value)
      };
    },
    vote(value) {
      return {
        typeUrl: "/cosmos.gov.v1beta1.MsgVote",
        value: import_tx.MsgVote.fromPartial(value)
      };
    },
    voteWeighted(value) {
      return {
        typeUrl: "/cosmos.gov.v1beta1.MsgVoteWeighted",
        value: import_tx.MsgVoteWeighted.fromPartial(value)
      };
    },
    deposit(value) {
      return {
        typeUrl: "/cosmos.gov.v1beta1.MsgDeposit",
        value: import_tx.MsgDeposit.fromPartial(value)
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
