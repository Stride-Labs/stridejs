import { GroupInfo, GroupMember, GroupPolicyInfo, Proposal, Vote } from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseGenesisState() {
  return {
    groupSeq: BigInt(0),
    groups: [],
    groupMembers: [],
    groupPolicySeq: BigInt(0),
    groupPolicies: [],
    proposalSeq: BigInt(0),
    proposals: [],
    votes: []
  };
}
const GenesisState = {
  typeUrl: "/cosmos.group.v1.GenesisState",
  encode(message, writer = BinaryWriter.create()) {
    if (message.groupSeq !== BigInt(0)) {
      writer.uint32(8).uint64(message.groupSeq);
    }
    for (const v of message.groups) {
      GroupInfo.encode(v, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.groupMembers) {
      GroupMember.encode(v, writer.uint32(26).fork()).ldelim();
    }
    if (message.groupPolicySeq !== BigInt(0)) {
      writer.uint32(32).uint64(message.groupPolicySeq);
    }
    for (const v of message.groupPolicies) {
      GroupPolicyInfo.encode(v, writer.uint32(42).fork()).ldelim();
    }
    if (message.proposalSeq !== BigInt(0)) {
      writer.uint32(48).uint64(message.proposalSeq);
    }
    for (const v of message.proposals) {
      Proposal.encode(v, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.votes) {
      Vote.encode(v, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupSeq = reader.uint64();
          break;
        case 2:
          message.groups.push(GroupInfo.decode(reader, reader.uint32()));
          break;
        case 3:
          message.groupMembers.push(GroupMember.decode(reader, reader.uint32()));
          break;
        case 4:
          message.groupPolicySeq = reader.uint64();
          break;
        case 5:
          message.groupPolicies.push(GroupPolicyInfo.decode(reader, reader.uint32()));
          break;
        case 6:
          message.proposalSeq = reader.uint64();
          break;
        case 7:
          message.proposals.push(Proposal.decode(reader, reader.uint32()));
          break;
        case 8:
          message.votes.push(Vote.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseGenesisState();
    message.groupSeq = object.groupSeq !== void 0 && object.groupSeq !== null ? BigInt(object.groupSeq.toString()) : BigInt(0);
    message.groups = object.groups?.map((e) => GroupInfo.fromPartial(e)) || [];
    message.groupMembers = object.groupMembers?.map((e) => GroupMember.fromPartial(e)) || [];
    message.groupPolicySeq = object.groupPolicySeq !== void 0 && object.groupPolicySeq !== null ? BigInt(object.groupPolicySeq.toString()) : BigInt(0);
    message.groupPolicies = object.groupPolicies?.map((e) => GroupPolicyInfo.fromPartial(e)) || [];
    message.proposalSeq = object.proposalSeq !== void 0 && object.proposalSeq !== null ? BigInt(object.proposalSeq.toString()) : BigInt(0);
    message.proposals = object.proposals?.map((e) => Proposal.fromPartial(e)) || [];
    message.votes = object.votes?.map((e) => Vote.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseGenesisState();
    if (object.group_seq !== void 0 && object.group_seq !== null) {
      message.groupSeq = BigInt(object.group_seq);
    }
    message.groups = object.groups?.map((e) => GroupInfo.fromAmino(e)) || [];
    message.groupMembers = object.group_members?.map((e) => GroupMember.fromAmino(e)) || [];
    if (object.group_policy_seq !== void 0 && object.group_policy_seq !== null) {
      message.groupPolicySeq = BigInt(object.group_policy_seq);
    }
    message.groupPolicies = object.group_policies?.map((e) => GroupPolicyInfo.fromAmino(e)) || [];
    if (object.proposal_seq !== void 0 && object.proposal_seq !== null) {
      message.proposalSeq = BigInt(object.proposal_seq);
    }
    message.proposals = object.proposals?.map((e) => Proposal.fromAmino(e)) || [];
    message.votes = object.votes?.map((e) => Vote.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.group_seq = message.groupSeq !== BigInt(0) ? message.groupSeq.toString() : void 0;
    if (message.groups) {
      obj.groups = message.groups.map((e) => e ? GroupInfo.toAmino(e) : void 0);
    } else {
      obj.groups = message.groups;
    }
    if (message.groupMembers) {
      obj.group_members = message.groupMembers.map((e) => e ? GroupMember.toAmino(e) : void 0);
    } else {
      obj.group_members = message.groupMembers;
    }
    obj.group_policy_seq = message.groupPolicySeq !== BigInt(0) ? message.groupPolicySeq.toString() : void 0;
    if (message.groupPolicies) {
      obj.group_policies = message.groupPolicies.map((e) => e ? GroupPolicyInfo.toAmino(e) : void 0);
    } else {
      obj.group_policies = message.groupPolicies;
    }
    obj.proposal_seq = message.proposalSeq !== BigInt(0) ? message.proposalSeq.toString() : void 0;
    if (message.proposals) {
      obj.proposals = message.proposals.map((e) => e ? Proposal.toAmino(e) : void 0);
    } else {
      obj.proposals = message.proposals;
    }
    if (message.votes) {
      obj.votes = message.votes.map((e) => e ? Vote.toAmino(e) : void 0);
    } else {
      obj.votes = message.votes;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GenesisState",
      value: GenesisState.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return GenesisState.decode(message.value);
  },
  toProto(message) {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
export {
  GenesisState
};
