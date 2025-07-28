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
const registry = [["/cosmos.group.v1.MsgCreateGroup", import_tx.MsgCreateGroup], ["/cosmos.group.v1.MsgUpdateGroupMembers", import_tx.MsgUpdateGroupMembers], ["/cosmos.group.v1.MsgUpdateGroupAdmin", import_tx.MsgUpdateGroupAdmin], ["/cosmos.group.v1.MsgUpdateGroupMetadata", import_tx.MsgUpdateGroupMetadata], ["/cosmos.group.v1.MsgCreateGroupPolicy", import_tx.MsgCreateGroupPolicy], ["/cosmos.group.v1.MsgCreateGroupWithPolicy", import_tx.MsgCreateGroupWithPolicy], ["/cosmos.group.v1.MsgUpdateGroupPolicyAdmin", import_tx.MsgUpdateGroupPolicyAdmin], ["/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy", import_tx.MsgUpdateGroupPolicyDecisionPolicy], ["/cosmos.group.v1.MsgUpdateGroupPolicyMetadata", import_tx.MsgUpdateGroupPolicyMetadata], ["/cosmos.group.v1.MsgSubmitProposal", import_tx.MsgSubmitProposal], ["/cosmos.group.v1.MsgWithdrawProposal", import_tx.MsgWithdrawProposal], ["/cosmos.group.v1.MsgVote", import_tx.MsgVote], ["/cosmos.group.v1.MsgExec", import_tx.MsgExec], ["/cosmos.group.v1.MsgLeaveGroup", import_tx.MsgLeaveGroup]];
const load = (protoRegistry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
const MessageComposer = {
  encoded: {
    createGroup(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgCreateGroup",
        value: import_tx.MsgCreateGroup.encode(value).finish()
      };
    },
    updateGroupMembers(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgUpdateGroupMembers",
        value: import_tx.MsgUpdateGroupMembers.encode(value).finish()
      };
    },
    updateGroupAdmin(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgUpdateGroupAdmin",
        value: import_tx.MsgUpdateGroupAdmin.encode(value).finish()
      };
    },
    updateGroupMetadata(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgUpdateGroupMetadata",
        value: import_tx.MsgUpdateGroupMetadata.encode(value).finish()
      };
    },
    createGroupPolicy(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgCreateGroupPolicy",
        value: import_tx.MsgCreateGroupPolicy.encode(value).finish()
      };
    },
    createGroupWithPolicy(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgCreateGroupWithPolicy",
        value: import_tx.MsgCreateGroupWithPolicy.encode(value).finish()
      };
    },
    updateGroupPolicyAdmin(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin",
        value: import_tx.MsgUpdateGroupPolicyAdmin.encode(value).finish()
      };
    },
    updateGroupPolicyDecisionPolicy(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy",
        value: import_tx.MsgUpdateGroupPolicyDecisionPolicy.encode(value).finish()
      };
    },
    updateGroupPolicyMetadata(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata",
        value: import_tx.MsgUpdateGroupPolicyMetadata.encode(value).finish()
      };
    },
    submitProposal(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgSubmitProposal",
        value: import_tx.MsgSubmitProposal.encode(value).finish()
      };
    },
    withdrawProposal(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgWithdrawProposal",
        value: import_tx.MsgWithdrawProposal.encode(value).finish()
      };
    },
    vote(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgVote",
        value: import_tx.MsgVote.encode(value).finish()
      };
    },
    exec(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgExec",
        value: import_tx.MsgExec.encode(value).finish()
      };
    },
    leaveGroup(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgLeaveGroup",
        value: import_tx.MsgLeaveGroup.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createGroup(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgCreateGroup",
        value
      };
    },
    updateGroupMembers(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgUpdateGroupMembers",
        value
      };
    },
    updateGroupAdmin(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgUpdateGroupAdmin",
        value
      };
    },
    updateGroupMetadata(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgUpdateGroupMetadata",
        value
      };
    },
    createGroupPolicy(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgCreateGroupPolicy",
        value
      };
    },
    createGroupWithPolicy(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgCreateGroupWithPolicy",
        value
      };
    },
    updateGroupPolicyAdmin(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin",
        value
      };
    },
    updateGroupPolicyDecisionPolicy(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy",
        value
      };
    },
    updateGroupPolicyMetadata(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata",
        value
      };
    },
    submitProposal(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgSubmitProposal",
        value
      };
    },
    withdrawProposal(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgWithdrawProposal",
        value
      };
    },
    vote(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgVote",
        value
      };
    },
    exec(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgExec",
        value
      };
    },
    leaveGroup(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgLeaveGroup",
        value
      };
    }
  },
  fromPartial: {
    createGroup(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgCreateGroup",
        value: import_tx.MsgCreateGroup.fromPartial(value)
      };
    },
    updateGroupMembers(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgUpdateGroupMembers",
        value: import_tx.MsgUpdateGroupMembers.fromPartial(value)
      };
    },
    updateGroupAdmin(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgUpdateGroupAdmin",
        value: import_tx.MsgUpdateGroupAdmin.fromPartial(value)
      };
    },
    updateGroupMetadata(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgUpdateGroupMetadata",
        value: import_tx.MsgUpdateGroupMetadata.fromPartial(value)
      };
    },
    createGroupPolicy(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgCreateGroupPolicy",
        value: import_tx.MsgCreateGroupPolicy.fromPartial(value)
      };
    },
    createGroupWithPolicy(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgCreateGroupWithPolicy",
        value: import_tx.MsgCreateGroupWithPolicy.fromPartial(value)
      };
    },
    updateGroupPolicyAdmin(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin",
        value: import_tx.MsgUpdateGroupPolicyAdmin.fromPartial(value)
      };
    },
    updateGroupPolicyDecisionPolicy(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy",
        value: import_tx.MsgUpdateGroupPolicyDecisionPolicy.fromPartial(value)
      };
    },
    updateGroupPolicyMetadata(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata",
        value: import_tx.MsgUpdateGroupPolicyMetadata.fromPartial(value)
      };
    },
    submitProposal(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgSubmitProposal",
        value: import_tx.MsgSubmitProposal.fromPartial(value)
      };
    },
    withdrawProposal(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgWithdrawProposal",
        value: import_tx.MsgWithdrawProposal.fromPartial(value)
      };
    },
    vote(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgVote",
        value: import_tx.MsgVote.fromPartial(value)
      };
    },
    exec(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgExec",
        value: import_tx.MsgExec.fromPartial(value)
      };
    },
    leaveGroup(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgLeaveGroup",
        value: import_tx.MsgLeaveGroup.fromPartial(value)
      };
    }
  }
};
// Removed broken CommonJS export annotation
