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
var tx_amino_exports = {};
__export(tx_amino_exports, {
  AminoConverter: () => AminoConverter
});
module.exports = __toCommonJS(tx_amino_exports);
var import_tx = require("./tx");
const AminoConverter = {
  "/cosmos.group.v1.MsgCreateGroup": {
    aminoType: "cosmos-sdk/MsgCreateGroup",
    toAmino: import_tx.MsgCreateGroup.toAmino,
    fromAmino: import_tx.MsgCreateGroup.fromAmino
  },
  "/cosmos.group.v1.MsgUpdateGroupMembers": {
    aminoType: "cosmos-sdk/MsgUpdateGroupMembers",
    toAmino: import_tx.MsgUpdateGroupMembers.toAmino,
    fromAmino: import_tx.MsgUpdateGroupMembers.fromAmino
  },
  "/cosmos.group.v1.MsgUpdateGroupAdmin": {
    aminoType: "cosmos-sdk/MsgUpdateGroupAdmin",
    toAmino: import_tx.MsgUpdateGroupAdmin.toAmino,
    fromAmino: import_tx.MsgUpdateGroupAdmin.fromAmino
  },
  "/cosmos.group.v1.MsgUpdateGroupMetadata": {
    aminoType: "cosmos-sdk/MsgUpdateGroupMetadata",
    toAmino: import_tx.MsgUpdateGroupMetadata.toAmino,
    fromAmino: import_tx.MsgUpdateGroupMetadata.fromAmino
  },
  "/cosmos.group.v1.MsgCreateGroupPolicy": {
    aminoType: "cosmos-sdk/MsgCreateGroupPolicy",
    toAmino: import_tx.MsgCreateGroupPolicy.toAmino,
    fromAmino: import_tx.MsgCreateGroupPolicy.fromAmino
  },
  "/cosmos.group.v1.MsgCreateGroupWithPolicy": {
    aminoType: "cosmos-sdk/MsgCreateGroupWithPolicy",
    toAmino: import_tx.MsgCreateGroupWithPolicy.toAmino,
    fromAmino: import_tx.MsgCreateGroupWithPolicy.fromAmino
  },
  "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin": {
    aminoType: "cosmos-sdk/MsgUpdateGroupPolicyAdmin",
    toAmino: import_tx.MsgUpdateGroupPolicyAdmin.toAmino,
    fromAmino: import_tx.MsgUpdateGroupPolicyAdmin.fromAmino
  },
  "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
    aminoType: "cosmos-sdk/MsgUpdateGroupDecisionPolicy",
    toAmino: import_tx.MsgUpdateGroupPolicyDecisionPolicy.toAmino,
    fromAmino: import_tx.MsgUpdateGroupPolicyDecisionPolicy.fromAmino
  },
  "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata": {
    aminoType: "cosmos-sdk/MsgUpdateGroupPolicyMetadata",
    toAmino: import_tx.MsgUpdateGroupPolicyMetadata.toAmino,
    fromAmino: import_tx.MsgUpdateGroupPolicyMetadata.fromAmino
  },
  "/cosmos.group.v1.MsgSubmitProposal": {
    aminoType: "cosmos-sdk/group/MsgSubmitProposal",
    toAmino: import_tx.MsgSubmitProposal.toAmino,
    fromAmino: import_tx.MsgSubmitProposal.fromAmino
  },
  "/cosmos.group.v1.MsgWithdrawProposal": {
    aminoType: "cosmos-sdk/group/MsgWithdrawProposal",
    toAmino: import_tx.MsgWithdrawProposal.toAmino,
    fromAmino: import_tx.MsgWithdrawProposal.fromAmino
  },
  "/cosmos.group.v1.MsgVote": {
    aminoType: "cosmos-sdk/group/MsgVote",
    toAmino: import_tx.MsgVote.toAmino,
    fromAmino: import_tx.MsgVote.fromAmino
  },
  "/cosmos.group.v1.MsgExec": {
    aminoType: "cosmos-sdk/group/MsgExec",
    toAmino: import_tx.MsgExec.toAmino,
    fromAmino: import_tx.MsgExec.fromAmino
  },
  "/cosmos.group.v1.MsgLeaveGroup": {
    aminoType: "cosmos-sdk/group/MsgLeaveGroup",
    toAmino: import_tx.MsgLeaveGroup.toAmino,
    fromAmino: import_tx.MsgLeaveGroup.fromAmino
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AminoConverter
});
