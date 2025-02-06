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
var genesis_exports = {};
__export(genesis_exports, {
  GenesisState: () => GenesisState
});
module.exports = __toCommonJS(genesis_exports);
var import_gov = require("./gov");
var import_binary = require("../../../binary");
function createBaseGenesisState() {
  return {
    startingProposalId: BigInt(0),
    deposits: [],
    votes: [],
    proposals: [],
    depositParams: import_gov.DepositParams.fromPartial({}),
    votingParams: import_gov.VotingParams.fromPartial({}),
    tallyParams: import_gov.TallyParams.fromPartial({})
  };
}
const GenesisState = {
  typeUrl: "/cosmos.gov.v1beta1.GenesisState",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.startingProposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.startingProposalId);
    }
    for (const v of message.deposits) {
      import_gov.Deposit.encode(v, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.votes) {
      import_gov.Vote.encode(v, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.proposals) {
      import_gov.Proposal.encode(v, writer.uint32(34).fork()).ldelim();
    }
    if (message.depositParams !== void 0) {
      import_gov.DepositParams.encode(message.depositParams, writer.uint32(42).fork()).ldelim();
    }
    if (message.votingParams !== void 0) {
      import_gov.VotingParams.encode(message.votingParams, writer.uint32(50).fork()).ldelim();
    }
    if (message.tallyParams !== void 0) {
      import_gov.TallyParams.encode(message.tallyParams, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.startingProposalId = reader.uint64();
          break;
        case 2:
          message.deposits.push(import_gov.Deposit.decode(reader, reader.uint32()));
          break;
        case 3:
          message.votes.push(import_gov.Vote.decode(reader, reader.uint32()));
          break;
        case 4:
          message.proposals.push(import_gov.Proposal.decode(reader, reader.uint32()));
          break;
        case 5:
          message.depositParams = import_gov.DepositParams.decode(reader, reader.uint32());
          break;
        case 6:
          message.votingParams = import_gov.VotingParams.decode(reader, reader.uint32());
          break;
        case 7:
          message.tallyParams = import_gov.TallyParams.decode(reader, reader.uint32());
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
    message.startingProposalId = object.startingProposalId !== void 0 && object.startingProposalId !== null ? BigInt(object.startingProposalId.toString()) : BigInt(0);
    message.deposits = object.deposits?.map((e) => import_gov.Deposit.fromPartial(e)) || [];
    message.votes = object.votes?.map((e) => import_gov.Vote.fromPartial(e)) || [];
    message.proposals = object.proposals?.map((e) => import_gov.Proposal.fromPartial(e)) || [];
    message.depositParams = object.depositParams !== void 0 && object.depositParams !== null ? import_gov.DepositParams.fromPartial(object.depositParams) : void 0;
    message.votingParams = object.votingParams !== void 0 && object.votingParams !== null ? import_gov.VotingParams.fromPartial(object.votingParams) : void 0;
    message.tallyParams = object.tallyParams !== void 0 && object.tallyParams !== null ? import_gov.TallyParams.fromPartial(object.tallyParams) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseGenesisState();
    if (object.starting_proposal_id !== void 0 && object.starting_proposal_id !== null) {
      message.startingProposalId = BigInt(object.starting_proposal_id);
    }
    message.deposits = object.deposits?.map((e) => import_gov.Deposit.fromAmino(e)) || [];
    message.votes = object.votes?.map((e) => import_gov.Vote.fromAmino(e)) || [];
    message.proposals = object.proposals?.map((e) => import_gov.Proposal.fromAmino(e)) || [];
    if (object.deposit_params !== void 0 && object.deposit_params !== null) {
      message.depositParams = import_gov.DepositParams.fromAmino(object.deposit_params);
    }
    if (object.voting_params !== void 0 && object.voting_params !== null) {
      message.votingParams = import_gov.VotingParams.fromAmino(object.voting_params);
    }
    if (object.tally_params !== void 0 && object.tally_params !== null) {
      message.tallyParams = import_gov.TallyParams.fromAmino(object.tally_params);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.starting_proposal_id = message.startingProposalId !== BigInt(0) ? message.startingProposalId?.toString() : void 0;
    if (message.deposits) {
      obj.deposits = message.deposits.map((e) => e ? import_gov.Deposit.toAmino(e) : void 0);
    } else {
      obj.deposits = message.deposits;
    }
    if (message.votes) {
      obj.votes = message.votes.map((e) => e ? import_gov.Vote.toAmino(e) : void 0);
    } else {
      obj.votes = message.votes;
    }
    if (message.proposals) {
      obj.proposals = message.proposals.map((e) => e ? import_gov.Proposal.toAmino(e) : void 0);
    } else {
      obj.proposals = message.proposals;
    }
    obj.deposit_params = message.depositParams ? import_gov.DepositParams.toAmino(message.depositParams) : void 0;
    obj.voting_params = message.votingParams ? import_gov.VotingParams.toAmino(message.votingParams) : void 0;
    obj.tally_params = message.tallyParams ? import_gov.TallyParams.toAmino(message.tallyParams) : void 0;
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
      typeUrl: "/cosmos.gov.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  GenesisState
});
