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
var tx_rpc_msg_exports = {};
__export(tx_rpc_msg_exports, {
  MsgClientImpl: () => MsgClientImpl
});
module.exports = __toCommonJS(tx_rpc_msg_exports);
var import_binary = require("../../../binary");
var import_tx = require("./tx");
class MsgClientImpl {
  rpc;
  constructor(rpc) {
    this.rpc = rpc;
    this.createGroup = this.createGroup.bind(this);
    this.updateGroupMembers = this.updateGroupMembers.bind(this);
    this.updateGroupAdmin = this.updateGroupAdmin.bind(this);
    this.updateGroupMetadata = this.updateGroupMetadata.bind(this);
    this.createGroupPolicy = this.createGroupPolicy.bind(this);
    this.createGroupWithPolicy = this.createGroupWithPolicy.bind(this);
    this.updateGroupPolicyAdmin = this.updateGroupPolicyAdmin.bind(this);
    this.updateGroupPolicyDecisionPolicy = this.updateGroupPolicyDecisionPolicy.bind(this);
    this.updateGroupPolicyMetadata = this.updateGroupPolicyMetadata.bind(this);
    this.submitProposal = this.submitProposal.bind(this);
    this.withdrawProposal = this.withdrawProposal.bind(this);
    this.vote = this.vote.bind(this);
    this.exec = this.exec.bind(this);
    this.leaveGroup = this.leaveGroup.bind(this);
  }
  createGroup(request) {
    const data = import_tx.MsgCreateGroup.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Msg", "CreateGroup", data);
    return promise.then((data2) => import_tx.MsgCreateGroupResponse.decode(new import_binary.BinaryReader(data2)));
  }
  updateGroupMembers(request) {
    const data = import_tx.MsgUpdateGroupMembers.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Msg", "UpdateGroupMembers", data);
    return promise.then((data2) => import_tx.MsgUpdateGroupMembersResponse.decode(new import_binary.BinaryReader(data2)));
  }
  updateGroupAdmin(request) {
    const data = import_tx.MsgUpdateGroupAdmin.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Msg", "UpdateGroupAdmin", data);
    return promise.then((data2) => import_tx.MsgUpdateGroupAdminResponse.decode(new import_binary.BinaryReader(data2)));
  }
  updateGroupMetadata(request) {
    const data = import_tx.MsgUpdateGroupMetadata.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Msg", "UpdateGroupMetadata", data);
    return promise.then((data2) => import_tx.MsgUpdateGroupMetadataResponse.decode(new import_binary.BinaryReader(data2)));
  }
  createGroupPolicy(request) {
    const data = import_tx.MsgCreateGroupPolicy.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Msg", "CreateGroupPolicy", data);
    return promise.then((data2) => import_tx.MsgCreateGroupPolicyResponse.decode(new import_binary.BinaryReader(data2)));
  }
  createGroupWithPolicy(request) {
    const data = import_tx.MsgCreateGroupWithPolicy.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Msg", "CreateGroupWithPolicy", data);
    return promise.then((data2) => import_tx.MsgCreateGroupWithPolicyResponse.decode(new import_binary.BinaryReader(data2)));
  }
  updateGroupPolicyAdmin(request) {
    const data = import_tx.MsgUpdateGroupPolicyAdmin.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Msg", "UpdateGroupPolicyAdmin", data);
    return promise.then((data2) => import_tx.MsgUpdateGroupPolicyAdminResponse.decode(new import_binary.BinaryReader(data2)));
  }
  updateGroupPolicyDecisionPolicy(request) {
    const data = import_tx.MsgUpdateGroupPolicyDecisionPolicy.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Msg", "UpdateGroupPolicyDecisionPolicy", data);
    return promise.then((data2) => import_tx.MsgUpdateGroupPolicyDecisionPolicyResponse.decode(new import_binary.BinaryReader(data2)));
  }
  updateGroupPolicyMetadata(request) {
    const data = import_tx.MsgUpdateGroupPolicyMetadata.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Msg", "UpdateGroupPolicyMetadata", data);
    return promise.then((data2) => import_tx.MsgUpdateGroupPolicyMetadataResponse.decode(new import_binary.BinaryReader(data2)));
  }
  submitProposal(request) {
    const data = import_tx.MsgSubmitProposal.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Msg", "SubmitProposal", data);
    return promise.then((data2) => import_tx.MsgSubmitProposalResponse.decode(new import_binary.BinaryReader(data2)));
  }
  withdrawProposal(request) {
    const data = import_tx.MsgWithdrawProposal.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Msg", "WithdrawProposal", data);
    return promise.then((data2) => import_tx.MsgWithdrawProposalResponse.decode(new import_binary.BinaryReader(data2)));
  }
  vote(request) {
    const data = import_tx.MsgVote.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Msg", "Vote", data);
    return promise.then((data2) => import_tx.MsgVoteResponse.decode(new import_binary.BinaryReader(data2)));
  }
  exec(request) {
    const data = import_tx.MsgExec.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Msg", "Exec", data);
    return promise.then((data2) => import_tx.MsgExecResponse.decode(new import_binary.BinaryReader(data2)));
  }
  leaveGroup(request) {
    const data = import_tx.MsgLeaveGroup.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Msg", "LeaveGroup", data);
    return promise.then((data2) => import_tx.MsgLeaveGroupResponse.decode(new import_binary.BinaryReader(data2)));
  }
}
// Proper CommonJS exports for dynamic imports
module.exports = {
  MsgClientImpl
};
