import { Timestamp } from "../../google/protobuf/timestamp";
import { ConsensusParams } from "../types/params";
import { Header } from "../types/types";
import { ProofOps } from "../crypto/proof";
import { PublicKey } from "../crypto/keys";
import { BinaryReader, BinaryWriter } from "../../binary";
import { toTimestamp, fromTimestamp, bytesFromBase64, base64FromBytes } from "../../helpers";
var CheckTxType = /* @__PURE__ */ ((CheckTxType2) => {
  CheckTxType2[CheckTxType2["NEW"] = 0] = "NEW";
  CheckTxType2[CheckTxType2["RECHECK"] = 1] = "RECHECK";
  CheckTxType2[CheckTxType2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return CheckTxType2;
})(CheckTxType || {});
const CheckTxTypeSDKType = CheckTxType;
const CheckTxTypeAmino = CheckTxType;
function checkTxTypeFromJSON(object) {
  switch (object) {
    case 0:
    case "NEW":
      return 0 /* NEW */;
    case 1:
    case "RECHECK":
      return 1 /* RECHECK */;
    case -1:
    case "UNRECOGNIZED":
    default:
      return -1 /* UNRECOGNIZED */;
  }
}
function checkTxTypeToJSON(object) {
  switch (object) {
    case 0 /* NEW */:
      return "NEW";
    case 1 /* RECHECK */:
      return "RECHECK";
    case -1 /* UNRECOGNIZED */:
    default:
      return "UNRECOGNIZED";
  }
}
var ResponseOfferSnapshot_Result = /* @__PURE__ */ ((ResponseOfferSnapshot_Result2) => {
  ResponseOfferSnapshot_Result2[ResponseOfferSnapshot_Result2["UNKNOWN"] = 0] = "UNKNOWN";
  ResponseOfferSnapshot_Result2[ResponseOfferSnapshot_Result2["ACCEPT"] = 1] = "ACCEPT";
  ResponseOfferSnapshot_Result2[ResponseOfferSnapshot_Result2["ABORT"] = 2] = "ABORT";
  ResponseOfferSnapshot_Result2[ResponseOfferSnapshot_Result2["REJECT"] = 3] = "REJECT";
  ResponseOfferSnapshot_Result2[ResponseOfferSnapshot_Result2["REJECT_FORMAT"] = 4] = "REJECT_FORMAT";
  ResponseOfferSnapshot_Result2[ResponseOfferSnapshot_Result2["REJECT_SENDER"] = 5] = "REJECT_SENDER";
  ResponseOfferSnapshot_Result2[ResponseOfferSnapshot_Result2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return ResponseOfferSnapshot_Result2;
})(ResponseOfferSnapshot_Result || {});
const ResponseOfferSnapshot_ResultSDKType = ResponseOfferSnapshot_Result;
const ResponseOfferSnapshot_ResultAmino = ResponseOfferSnapshot_Result;
function responseOfferSnapshot_ResultFromJSON(object) {
  switch (object) {
    case 0:
    case "UNKNOWN":
      return 0 /* UNKNOWN */;
    case 1:
    case "ACCEPT":
      return 1 /* ACCEPT */;
    case 2:
    case "ABORT":
      return 2 /* ABORT */;
    case 3:
    case "REJECT":
      return 3 /* REJECT */;
    case 4:
    case "REJECT_FORMAT":
      return 4 /* REJECT_FORMAT */;
    case 5:
    case "REJECT_SENDER":
      return 5 /* REJECT_SENDER */;
    case -1:
    case "UNRECOGNIZED":
    default:
      return -1 /* UNRECOGNIZED */;
  }
}
function responseOfferSnapshot_ResultToJSON(object) {
  switch (object) {
    case 0 /* UNKNOWN */:
      return "UNKNOWN";
    case 1 /* ACCEPT */:
      return "ACCEPT";
    case 2 /* ABORT */:
      return "ABORT";
    case 3 /* REJECT */:
      return "REJECT";
    case 4 /* REJECT_FORMAT */:
      return "REJECT_FORMAT";
    case 5 /* REJECT_SENDER */:
      return "REJECT_SENDER";
    case -1 /* UNRECOGNIZED */:
    default:
      return "UNRECOGNIZED";
  }
}
var ResponseApplySnapshotChunk_Result = /* @__PURE__ */ ((ResponseApplySnapshotChunk_Result2) => {
  ResponseApplySnapshotChunk_Result2[ResponseApplySnapshotChunk_Result2["UNKNOWN"] = 0] = "UNKNOWN";
  ResponseApplySnapshotChunk_Result2[ResponseApplySnapshotChunk_Result2["ACCEPT"] = 1] = "ACCEPT";
  ResponseApplySnapshotChunk_Result2[ResponseApplySnapshotChunk_Result2["ABORT"] = 2] = "ABORT";
  ResponseApplySnapshotChunk_Result2[ResponseApplySnapshotChunk_Result2["RETRY"] = 3] = "RETRY";
  ResponseApplySnapshotChunk_Result2[ResponseApplySnapshotChunk_Result2["RETRY_SNAPSHOT"] = 4] = "RETRY_SNAPSHOT";
  ResponseApplySnapshotChunk_Result2[ResponseApplySnapshotChunk_Result2["REJECT_SNAPSHOT"] = 5] = "REJECT_SNAPSHOT";
  ResponseApplySnapshotChunk_Result2[ResponseApplySnapshotChunk_Result2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return ResponseApplySnapshotChunk_Result2;
})(ResponseApplySnapshotChunk_Result || {});
const ResponseApplySnapshotChunk_ResultSDKType = ResponseApplySnapshotChunk_Result;
const ResponseApplySnapshotChunk_ResultAmino = ResponseApplySnapshotChunk_Result;
function responseApplySnapshotChunk_ResultFromJSON(object) {
  switch (object) {
    case 0:
    case "UNKNOWN":
      return 0 /* UNKNOWN */;
    case 1:
    case "ACCEPT":
      return 1 /* ACCEPT */;
    case 2:
    case "ABORT":
      return 2 /* ABORT */;
    case 3:
    case "RETRY":
      return 3 /* RETRY */;
    case 4:
    case "RETRY_SNAPSHOT":
      return 4 /* RETRY_SNAPSHOT */;
    case 5:
    case "REJECT_SNAPSHOT":
      return 5 /* REJECT_SNAPSHOT */;
    case -1:
    case "UNRECOGNIZED":
    default:
      return -1 /* UNRECOGNIZED */;
  }
}
function responseApplySnapshotChunk_ResultToJSON(object) {
  switch (object) {
    case 0 /* UNKNOWN */:
      return "UNKNOWN";
    case 1 /* ACCEPT */:
      return "ACCEPT";
    case 2 /* ABORT */:
      return "ABORT";
    case 3 /* RETRY */:
      return "RETRY";
    case 4 /* RETRY_SNAPSHOT */:
      return "RETRY_SNAPSHOT";
    case 5 /* REJECT_SNAPSHOT */:
      return "REJECT_SNAPSHOT";
    case -1 /* UNRECOGNIZED */:
    default:
      return "UNRECOGNIZED";
  }
}
var ResponseProcessProposal_ProposalStatus = /* @__PURE__ */ ((ResponseProcessProposal_ProposalStatus2) => {
  ResponseProcessProposal_ProposalStatus2[ResponseProcessProposal_ProposalStatus2["UNKNOWN"] = 0] = "UNKNOWN";
  ResponseProcessProposal_ProposalStatus2[ResponseProcessProposal_ProposalStatus2["ACCEPT"] = 1] = "ACCEPT";
  ResponseProcessProposal_ProposalStatus2[ResponseProcessProposal_ProposalStatus2["REJECT"] = 2] = "REJECT";
  ResponseProcessProposal_ProposalStatus2[ResponseProcessProposal_ProposalStatus2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return ResponseProcessProposal_ProposalStatus2;
})(ResponseProcessProposal_ProposalStatus || {});
const ResponseProcessProposal_ProposalStatusSDKType = ResponseProcessProposal_ProposalStatus;
const ResponseProcessProposal_ProposalStatusAmino = ResponseProcessProposal_ProposalStatus;
function responseProcessProposal_ProposalStatusFromJSON(object) {
  switch (object) {
    case 0:
    case "UNKNOWN":
      return 0 /* UNKNOWN */;
    case 1:
    case "ACCEPT":
      return 1 /* ACCEPT */;
    case 2:
    case "REJECT":
      return 2 /* REJECT */;
    case -1:
    case "UNRECOGNIZED":
    default:
      return -1 /* UNRECOGNIZED */;
  }
}
function responseProcessProposal_ProposalStatusToJSON(object) {
  switch (object) {
    case 0 /* UNKNOWN */:
      return "UNKNOWN";
    case 1 /* ACCEPT */:
      return "ACCEPT";
    case 2 /* REJECT */:
      return "REJECT";
    case -1 /* UNRECOGNIZED */:
    default:
      return "UNRECOGNIZED";
  }
}
var MisbehaviorType = /* @__PURE__ */ ((MisbehaviorType2) => {
  MisbehaviorType2[MisbehaviorType2["UNKNOWN"] = 0] = "UNKNOWN";
  MisbehaviorType2[MisbehaviorType2["DUPLICATE_VOTE"] = 1] = "DUPLICATE_VOTE";
  MisbehaviorType2[MisbehaviorType2["LIGHT_CLIENT_ATTACK"] = 2] = "LIGHT_CLIENT_ATTACK";
  MisbehaviorType2[MisbehaviorType2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return MisbehaviorType2;
})(MisbehaviorType || {});
const MisbehaviorTypeSDKType = MisbehaviorType;
const MisbehaviorTypeAmino = MisbehaviorType;
function misbehaviorTypeFromJSON(object) {
  switch (object) {
    case 0:
    case "UNKNOWN":
      return 0 /* UNKNOWN */;
    case 1:
    case "DUPLICATE_VOTE":
      return 1 /* DUPLICATE_VOTE */;
    case 2:
    case "LIGHT_CLIENT_ATTACK":
      return 2 /* LIGHT_CLIENT_ATTACK */;
    case -1:
    case "UNRECOGNIZED":
    default:
      return -1 /* UNRECOGNIZED */;
  }
}
function misbehaviorTypeToJSON(object) {
  switch (object) {
    case 0 /* UNKNOWN */:
      return "UNKNOWN";
    case 1 /* DUPLICATE_VOTE */:
      return "DUPLICATE_VOTE";
    case 2 /* LIGHT_CLIENT_ATTACK */:
      return "LIGHT_CLIENT_ATTACK";
    case -1 /* UNRECOGNIZED */:
    default:
      return "UNRECOGNIZED";
  }
}
function createBaseRequest() {
  return {
    echo: void 0,
    flush: void 0,
    info: void 0,
    initChain: void 0,
    query: void 0,
    beginBlock: void 0,
    checkTx: void 0,
    deliverTx: void 0,
    endBlock: void 0,
    commit: void 0,
    listSnapshots: void 0,
    offerSnapshot: void 0,
    loadSnapshotChunk: void 0,
    applySnapshotChunk: void 0,
    prepareProposal: void 0,
    processProposal: void 0
  };
}
const Request = {
  typeUrl: "/tendermint.abci.Request",
  encode(message, writer = BinaryWriter.create()) {
    if (message.echo !== void 0) {
      RequestEcho.encode(message.echo, writer.uint32(10).fork()).ldelim();
    }
    if (message.flush !== void 0) {
      RequestFlush.encode(message.flush, writer.uint32(18).fork()).ldelim();
    }
    if (message.info !== void 0) {
      RequestInfo.encode(message.info, writer.uint32(26).fork()).ldelim();
    }
    if (message.initChain !== void 0) {
      RequestInitChain.encode(message.initChain, writer.uint32(42).fork()).ldelim();
    }
    if (message.query !== void 0) {
      RequestQuery.encode(message.query, writer.uint32(50).fork()).ldelim();
    }
    if (message.beginBlock !== void 0) {
      RequestBeginBlock.encode(message.beginBlock, writer.uint32(58).fork()).ldelim();
    }
    if (message.checkTx !== void 0) {
      RequestCheckTx.encode(message.checkTx, writer.uint32(66).fork()).ldelim();
    }
    if (message.deliverTx !== void 0) {
      RequestDeliverTx.encode(message.deliverTx, writer.uint32(74).fork()).ldelim();
    }
    if (message.endBlock !== void 0) {
      RequestEndBlock.encode(message.endBlock, writer.uint32(82).fork()).ldelim();
    }
    if (message.commit !== void 0) {
      RequestCommit.encode(message.commit, writer.uint32(90).fork()).ldelim();
    }
    if (message.listSnapshots !== void 0) {
      RequestListSnapshots.encode(message.listSnapshots, writer.uint32(98).fork()).ldelim();
    }
    if (message.offerSnapshot !== void 0) {
      RequestOfferSnapshot.encode(message.offerSnapshot, writer.uint32(106).fork()).ldelim();
    }
    if (message.loadSnapshotChunk !== void 0) {
      RequestLoadSnapshotChunk.encode(message.loadSnapshotChunk, writer.uint32(114).fork()).ldelim();
    }
    if (message.applySnapshotChunk !== void 0) {
      RequestApplySnapshotChunk.encode(message.applySnapshotChunk, writer.uint32(122).fork()).ldelim();
    }
    if (message.prepareProposal !== void 0) {
      RequestPrepareProposal.encode(message.prepareProposal, writer.uint32(130).fork()).ldelim();
    }
    if (message.processProposal !== void 0) {
      RequestProcessProposal.encode(message.processProposal, writer.uint32(138).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.echo = RequestEcho.decode(reader, reader.uint32());
          break;
        case 2:
          message.flush = RequestFlush.decode(reader, reader.uint32());
          break;
        case 3:
          message.info = RequestInfo.decode(reader, reader.uint32());
          break;
        case 5:
          message.initChain = RequestInitChain.decode(reader, reader.uint32());
          break;
        case 6:
          message.query = RequestQuery.decode(reader, reader.uint32());
          break;
        case 7:
          message.beginBlock = RequestBeginBlock.decode(reader, reader.uint32());
          break;
        case 8:
          message.checkTx = RequestCheckTx.decode(reader, reader.uint32());
          break;
        case 9:
          message.deliverTx = RequestDeliverTx.decode(reader, reader.uint32());
          break;
        case 10:
          message.endBlock = RequestEndBlock.decode(reader, reader.uint32());
          break;
        case 11:
          message.commit = RequestCommit.decode(reader, reader.uint32());
          break;
        case 12:
          message.listSnapshots = RequestListSnapshots.decode(reader, reader.uint32());
          break;
        case 13:
          message.offerSnapshot = RequestOfferSnapshot.decode(reader, reader.uint32());
          break;
        case 14:
          message.loadSnapshotChunk = RequestLoadSnapshotChunk.decode(reader, reader.uint32());
          break;
        case 15:
          message.applySnapshotChunk = RequestApplySnapshotChunk.decode(reader, reader.uint32());
          break;
        case 16:
          message.prepareProposal = RequestPrepareProposal.decode(reader, reader.uint32());
          break;
        case 17:
          message.processProposal = RequestProcessProposal.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseRequest();
    message.echo = object.echo !== void 0 && object.echo !== null ? RequestEcho.fromPartial(object.echo) : void 0;
    message.flush = object.flush !== void 0 && object.flush !== null ? RequestFlush.fromPartial(object.flush) : void 0;
    message.info = object.info !== void 0 && object.info !== null ? RequestInfo.fromPartial(object.info) : void 0;
    message.initChain = object.initChain !== void 0 && object.initChain !== null ? RequestInitChain.fromPartial(object.initChain) : void 0;
    message.query = object.query !== void 0 && object.query !== null ? RequestQuery.fromPartial(object.query) : void 0;
    message.beginBlock = object.beginBlock !== void 0 && object.beginBlock !== null ? RequestBeginBlock.fromPartial(object.beginBlock) : void 0;
    message.checkTx = object.checkTx !== void 0 && object.checkTx !== null ? RequestCheckTx.fromPartial(object.checkTx) : void 0;
    message.deliverTx = object.deliverTx !== void 0 && object.deliverTx !== null ? RequestDeliverTx.fromPartial(object.deliverTx) : void 0;
    message.endBlock = object.endBlock !== void 0 && object.endBlock !== null ? RequestEndBlock.fromPartial(object.endBlock) : void 0;
    message.commit = object.commit !== void 0 && object.commit !== null ? RequestCommit.fromPartial(object.commit) : void 0;
    message.listSnapshots = object.listSnapshots !== void 0 && object.listSnapshots !== null ? RequestListSnapshots.fromPartial(object.listSnapshots) : void 0;
    message.offerSnapshot = object.offerSnapshot !== void 0 && object.offerSnapshot !== null ? RequestOfferSnapshot.fromPartial(object.offerSnapshot) : void 0;
    message.loadSnapshotChunk = object.loadSnapshotChunk !== void 0 && object.loadSnapshotChunk !== null ? RequestLoadSnapshotChunk.fromPartial(object.loadSnapshotChunk) : void 0;
    message.applySnapshotChunk = object.applySnapshotChunk !== void 0 && object.applySnapshotChunk !== null ? RequestApplySnapshotChunk.fromPartial(object.applySnapshotChunk) : void 0;
    message.prepareProposal = object.prepareProposal !== void 0 && object.prepareProposal !== null ? RequestPrepareProposal.fromPartial(object.prepareProposal) : void 0;
    message.processProposal = object.processProposal !== void 0 && object.processProposal !== null ? RequestProcessProposal.fromPartial(object.processProposal) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseRequest();
    if (object.echo !== void 0 && object.echo !== null) {
      message.echo = RequestEcho.fromAmino(object.echo);
    }
    if (object.flush !== void 0 && object.flush !== null) {
      message.flush = RequestFlush.fromAmino(object.flush);
    }
    if (object.info !== void 0 && object.info !== null) {
      message.info = RequestInfo.fromAmino(object.info);
    }
    if (object.init_chain !== void 0 && object.init_chain !== null) {
      message.initChain = RequestInitChain.fromAmino(object.init_chain);
    }
    if (object.query !== void 0 && object.query !== null) {
      message.query = RequestQuery.fromAmino(object.query);
    }
    if (object.begin_block !== void 0 && object.begin_block !== null) {
      message.beginBlock = RequestBeginBlock.fromAmino(object.begin_block);
    }
    if (object.check_tx !== void 0 && object.check_tx !== null) {
      message.checkTx = RequestCheckTx.fromAmino(object.check_tx);
    }
    if (object.deliver_tx !== void 0 && object.deliver_tx !== null) {
      message.deliverTx = RequestDeliverTx.fromAmino(object.deliver_tx);
    }
    if (object.end_block !== void 0 && object.end_block !== null) {
      message.endBlock = RequestEndBlock.fromAmino(object.end_block);
    }
    if (object.commit !== void 0 && object.commit !== null) {
      message.commit = RequestCommit.fromAmino(object.commit);
    }
    if (object.list_snapshots !== void 0 && object.list_snapshots !== null) {
      message.listSnapshots = RequestListSnapshots.fromAmino(object.list_snapshots);
    }
    if (object.offer_snapshot !== void 0 && object.offer_snapshot !== null) {
      message.offerSnapshot = RequestOfferSnapshot.fromAmino(object.offer_snapshot);
    }
    if (object.load_snapshot_chunk !== void 0 && object.load_snapshot_chunk !== null) {
      message.loadSnapshotChunk = RequestLoadSnapshotChunk.fromAmino(object.load_snapshot_chunk);
    }
    if (object.apply_snapshot_chunk !== void 0 && object.apply_snapshot_chunk !== null) {
      message.applySnapshotChunk = RequestApplySnapshotChunk.fromAmino(object.apply_snapshot_chunk);
    }
    if (object.prepare_proposal !== void 0 && object.prepare_proposal !== null) {
      message.prepareProposal = RequestPrepareProposal.fromAmino(object.prepare_proposal);
    }
    if (object.process_proposal !== void 0 && object.process_proposal !== null) {
      message.processProposal = RequestProcessProposal.fromAmino(object.process_proposal);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.echo = message.echo ? RequestEcho.toAmino(message.echo) : void 0;
    obj.flush = message.flush ? RequestFlush.toAmino(message.flush) : void 0;
    obj.info = message.info ? RequestInfo.toAmino(message.info) : void 0;
    obj.init_chain = message.initChain ? RequestInitChain.toAmino(message.initChain) : void 0;
    obj.query = message.query ? RequestQuery.toAmino(message.query) : void 0;
    obj.begin_block = message.beginBlock ? RequestBeginBlock.toAmino(message.beginBlock) : void 0;
    obj.check_tx = message.checkTx ? RequestCheckTx.toAmino(message.checkTx) : void 0;
    obj.deliver_tx = message.deliverTx ? RequestDeliverTx.toAmino(message.deliverTx) : void 0;
    obj.end_block = message.endBlock ? RequestEndBlock.toAmino(message.endBlock) : void 0;
    obj.commit = message.commit ? RequestCommit.toAmino(message.commit) : void 0;
    obj.list_snapshots = message.listSnapshots ? RequestListSnapshots.toAmino(message.listSnapshots) : void 0;
    obj.offer_snapshot = message.offerSnapshot ? RequestOfferSnapshot.toAmino(message.offerSnapshot) : void 0;
    obj.load_snapshot_chunk = message.loadSnapshotChunk ? RequestLoadSnapshotChunk.toAmino(message.loadSnapshotChunk) : void 0;
    obj.apply_snapshot_chunk = message.applySnapshotChunk ? RequestApplySnapshotChunk.toAmino(message.applySnapshotChunk) : void 0;
    obj.prepare_proposal = message.prepareProposal ? RequestPrepareProposal.toAmino(message.prepareProposal) : void 0;
    obj.process_proposal = message.processProposal ? RequestProcessProposal.toAmino(message.processProposal) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return Request.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return Request.decode(message.value);
  },
  toProto(message) {
    return Request.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.abci.Request",
      value: Request.encode(message).finish()
    };
  }
};
function createBaseRequestEcho() {
  return {
    message: ""
  };
}
const RequestEcho = {
  typeUrl: "/tendermint.abci.RequestEcho",
  encode(message, writer = BinaryWriter.create()) {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRequestEcho();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseRequestEcho();
    message.message = object.message ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseRequestEcho();
    if (object.message !== void 0 && object.message !== null) {
      message.message = object.message;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.message = message.message === "" ? void 0 : message.message;
    return obj;
  },
  fromAminoMsg(object) {
    return RequestEcho.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return RequestEcho.decode(message.value);
  },
  toProto(message) {
    return RequestEcho.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.abci.RequestEcho",
      value: RequestEcho.encode(message).finish()
    };
  }
};
function createBaseRequestFlush() {
  return {};
}
const RequestFlush = {
  typeUrl: "/tendermint.abci.RequestFlush",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRequestFlush();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_) {
    const message = createBaseRequestFlush();
    return message;
  },
  fromAmino(_) {
    const message = createBaseRequestFlush();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return RequestFlush.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return RequestFlush.decode(message.value);
  },
  toProto(message) {
    return RequestFlush.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.abci.RequestFlush",
      value: RequestFlush.encode(message).finish()
    };
  }
};
function createBaseRequestInfo() {
  return {
    version: "",
    blockVersion: BigInt(0),
    p2pVersion: BigInt(0),
    abciVersion: ""
  };
}
const RequestInfo = {
  typeUrl: "/tendermint.abci.RequestInfo",
  encode(message, writer = BinaryWriter.create()) {
    if (message.version !== "") {
      writer.uint32(10).string(message.version);
    }
    if (message.blockVersion !== BigInt(0)) {
      writer.uint32(16).uint64(message.blockVersion);
    }
    if (message.p2pVersion !== BigInt(0)) {
      writer.uint32(24).uint64(message.p2pVersion);
    }
    if (message.abciVersion !== "") {
      writer.uint32(34).string(message.abciVersion);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRequestInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = reader.string();
          break;
        case 2:
          message.blockVersion = reader.uint64();
          break;
        case 3:
          message.p2pVersion = reader.uint64();
          break;
        case 4:
          message.abciVersion = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseRequestInfo();
    message.version = object.version ?? "";
    message.blockVersion = object.blockVersion !== void 0 && object.blockVersion !== null ? BigInt(object.blockVersion.toString()) : BigInt(0);
    message.p2pVersion = object.p2pVersion !== void 0 && object.p2pVersion !== null ? BigInt(object.p2pVersion.toString()) : BigInt(0);
    message.abciVersion = object.abciVersion ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseRequestInfo();
    if (object.version !== void 0 && object.version !== null) {
      message.version = object.version;
    }
    if (object.block_version !== void 0 && object.block_version !== null) {
      message.blockVersion = BigInt(object.block_version);
    }
    if (object.p2p_version !== void 0 && object.p2p_version !== null) {
      message.p2pVersion = BigInt(object.p2p_version);
    }
    if (object.abci_version !== void 0 && object.abci_version !== null) {
      message.abciVersion = object.abci_version;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.version = message.version === "" ? void 0 : message.version;
    obj.block_version = message.blockVersion !== BigInt(0) ? message.blockVersion?.toString() : void 0;
    obj.p2p_version = message.p2pVersion !== BigInt(0) ? message.p2pVersion?.toString() : void 0;
    obj.abci_version = message.abciVersion === "" ? void 0 : message.abciVersion;
    return obj;
  },
  fromAminoMsg(object) {
    return RequestInfo.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return RequestInfo.decode(message.value);
  },
  toProto(message) {
    return RequestInfo.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.abci.RequestInfo",
      value: RequestInfo.encode(message).finish()
    };
  }
};
function createBaseRequestInitChain() {
  return {
    time: /* @__PURE__ */ new Date(),
    chainId: "",
    consensusParams: void 0,
    validators: [],
    appStateBytes: new Uint8Array(),
    initialHeight: BigInt(0)
  };
}
const RequestInitChain = {
  typeUrl: "/tendermint.abci.RequestInitChain",
  encode(message, writer = BinaryWriter.create()) {
    if (message.time !== void 0) {
      Timestamp.encode(toTimestamp(message.time), writer.uint32(10).fork()).ldelim();
    }
    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }
    if (message.consensusParams !== void 0) {
      ConsensusParams.encode(message.consensusParams, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.validators) {
      ValidatorUpdate.encode(v, writer.uint32(34).fork()).ldelim();
    }
    if (message.appStateBytes.length !== 0) {
      writer.uint32(42).bytes(message.appStateBytes);
    }
    if (message.initialHeight !== BigInt(0)) {
      writer.uint32(48).int64(message.initialHeight);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRequestInitChain();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 2:
          message.chainId = reader.string();
          break;
        case 3:
          message.consensusParams = ConsensusParams.decode(reader, reader.uint32());
          break;
        case 4:
          message.validators.push(ValidatorUpdate.decode(reader, reader.uint32()));
          break;
        case 5:
          message.appStateBytes = reader.bytes();
          break;
        case 6:
          message.initialHeight = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseRequestInitChain();
    message.time = object.time ?? void 0;
    message.chainId = object.chainId ?? "";
    message.consensusParams = object.consensusParams !== void 0 && object.consensusParams !== null ? ConsensusParams.fromPartial(object.consensusParams) : void 0;
    message.validators = object.validators?.map((e) => ValidatorUpdate.fromPartial(e)) || [];
    message.appStateBytes = object.appStateBytes ?? new Uint8Array();
    message.initialHeight = object.initialHeight !== void 0 && object.initialHeight !== null ? BigInt(object.initialHeight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseRequestInitChain();
    if (object.time !== void 0 && object.time !== null) {
      message.time = fromTimestamp(Timestamp.fromAmino(object.time));
    }
    if (object.chain_id !== void 0 && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    if (object.consensus_params !== void 0 && object.consensus_params !== null) {
      message.consensusParams = ConsensusParams.fromAmino(object.consensus_params);
    }
    message.validators = object.validators?.map((e) => ValidatorUpdate.fromAmino(e)) || [];
    if (object.app_state_bytes !== void 0 && object.app_state_bytes !== null) {
      message.appStateBytes = bytesFromBase64(object.app_state_bytes);
    }
    if (object.initial_height !== void 0 && object.initial_height !== null) {
      message.initialHeight = BigInt(object.initial_height);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.time = message.time ? Timestamp.toAmino(toTimestamp(message.time)) : void 0;
    obj.chain_id = message.chainId === "" ? void 0 : message.chainId;
    obj.consensus_params = message.consensusParams ? ConsensusParams.toAmino(message.consensusParams) : void 0;
    if (message.validators) {
      obj.validators = message.validators.map((e) => e ? ValidatorUpdate.toAmino(e) : void 0);
    } else {
      obj.validators = message.validators;
    }
    obj.app_state_bytes = message.appStateBytes ? base64FromBytes(message.appStateBytes) : void 0;
    obj.initial_height = message.initialHeight !== BigInt(0) ? message.initialHeight?.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return RequestInitChain.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return RequestInitChain.decode(message.value);
  },
  toProto(message) {
    return RequestInitChain.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.abci.RequestInitChain",
      value: RequestInitChain.encode(message).finish()
    };
  }
};
function createBaseRequestQuery() {
  return {
    data: new Uint8Array(),
    path: "",
    height: BigInt(0),
    prove: false
  };
}
const RequestQuery = {
  typeUrl: "/tendermint.abci.RequestQuery",
  encode(message, writer = BinaryWriter.create()) {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    if (message.path !== "") {
      writer.uint32(18).string(message.path);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(24).int64(message.height);
    }
    if (message.prove === true) {
      writer.uint32(32).bool(message.prove);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRequestQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        case 2:
          message.path = reader.string();
          break;
        case 3:
          message.height = reader.int64();
          break;
        case 4:
          message.prove = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseRequestQuery();
    message.data = object.data ?? new Uint8Array();
    message.path = object.path ?? "";
    message.height = object.height !== void 0 && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.prove = object.prove ?? false;
    return message;
  },
  fromAmino(object) {
    const message = createBaseRequestQuery();
    if (object.data !== void 0 && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    if (object.path !== void 0 && object.path !== null) {
      message.path = object.path;
    }
    if (object.height !== void 0 && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.prove !== void 0 && object.prove !== null) {
      message.prove = object.prove;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.data = message.data ? base64FromBytes(message.data) : void 0;
    obj.path = message.path === "" ? void 0 : message.path;
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : void 0;
    obj.prove = message.prove === false ? void 0 : message.prove;
    return obj;
  },
  fromAminoMsg(object) {
    return RequestQuery.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return RequestQuery.decode(message.value);
  },
  toProto(message) {
    return RequestQuery.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.abci.RequestQuery",
      value: RequestQuery.encode(message).finish()
    };
  }
};
function createBaseRequestBeginBlock() {
  return {
    hash: new Uint8Array(),
    header: Header.fromPartial({}),
    lastCommitInfo: CommitInfo.fromPartial({}),
    byzantineValidators: []
  };
}
const RequestBeginBlock = {
  typeUrl: "/tendermint.abci.RequestBeginBlock",
  encode(message, writer = BinaryWriter.create()) {
    if (message.hash.length !== 0) {
      writer.uint32(10).bytes(message.hash);
    }
    if (message.header !== void 0) {
      Header.encode(message.header, writer.uint32(18).fork()).ldelim();
    }
    if (message.lastCommitInfo !== void 0) {
      CommitInfo.encode(message.lastCommitInfo, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.byzantineValidators) {
      Misbehavior.encode(v, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRequestBeginBlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.bytes();
          break;
        case 2:
          message.header = Header.decode(reader, reader.uint32());
          break;
        case 3:
          message.lastCommitInfo = CommitInfo.decode(reader, reader.uint32());
          break;
        case 4:
          message.byzantineValidators.push(Misbehavior.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseRequestBeginBlock();
    message.hash = object.hash ?? new Uint8Array();
    message.header = object.header !== void 0 && object.header !== null ? Header.fromPartial(object.header) : void 0;
    message.lastCommitInfo = object.lastCommitInfo !== void 0 && object.lastCommitInfo !== null ? CommitInfo.fromPartial(object.lastCommitInfo) : void 0;
    message.byzantineValidators = object.byzantineValidators?.map((e) => Misbehavior.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseRequestBeginBlock();
    if (object.hash !== void 0 && object.hash !== null) {
      message.hash = bytesFromBase64(object.hash);
    }
    if (object.header !== void 0 && object.header !== null) {
      message.header = Header.fromAmino(object.header);
    }
    if (object.last_commit_info !== void 0 && object.last_commit_info !== null) {
      message.lastCommitInfo = CommitInfo.fromAmino(object.last_commit_info);
    }
    message.byzantineValidators = object.byzantine_validators?.map((e) => Misbehavior.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.hash = message.hash ? base64FromBytes(message.hash) : void 0;
    obj.header = message.header ? Header.toAmino(message.header) : void 0;
    obj.last_commit_info = message.lastCommitInfo ? CommitInfo.toAmino(message.lastCommitInfo) : void 0;
    if (message.byzantineValidators) {
      obj.byzantine_validators = message.byzantineValidators.map((e) => e ? Misbehavior.toAmino(e) : void 0);
    } else {
      obj.byzantine_validators = message.byzantineValidators;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return RequestBeginBlock.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return RequestBeginBlock.decode(message.value);
  },
  toProto(message) {
    return RequestBeginBlock.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.abci.RequestBeginBlock",
      value: RequestBeginBlock.encode(message).finish()
    };
  }
};
function createBaseRequestCheckTx() {
  return {
    tx: new Uint8Array(),
    type: 0
  };
}
const RequestCheckTx = {
  typeUrl: "/tendermint.abci.RequestCheckTx",
  encode(message, writer = BinaryWriter.create()) {
    if (message.tx.length !== 0) {
      writer.uint32(10).bytes(message.tx);
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRequestCheckTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx = reader.bytes();
          break;
        case 2:
          message.type = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseRequestCheckTx();
    message.tx = object.tx ?? new Uint8Array();
    message.type = object.type ?? 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseRequestCheckTx();
    if (object.tx !== void 0 && object.tx !== null) {
      message.tx = bytesFromBase64(object.tx);
    }
    if (object.type !== void 0 && object.type !== null) {
      message.type = object.type;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.tx = message.tx ? base64FromBytes(message.tx) : void 0;
    obj.type = message.type === 0 ? void 0 : message.type;
    return obj;
  },
  fromAminoMsg(object) {
    return RequestCheckTx.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return RequestCheckTx.decode(message.value);
  },
  toProto(message) {
    return RequestCheckTx.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.abci.RequestCheckTx",
      value: RequestCheckTx.encode(message).finish()
    };
  }
};
function createBaseRequestDeliverTx() {
  return {
    tx: new Uint8Array()
  };
}
const RequestDeliverTx = {
  typeUrl: "/tendermint.abci.RequestDeliverTx",
  encode(message, writer = BinaryWriter.create()) {
    if (message.tx.length !== 0) {
      writer.uint32(10).bytes(message.tx);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRequestDeliverTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseRequestDeliverTx();
    message.tx = object.tx ?? new Uint8Array();
    return message;
  },
  fromAmino(object) {
    const message = createBaseRequestDeliverTx();
    if (object.tx !== void 0 && object.tx !== null) {
      message.tx = bytesFromBase64(object.tx);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.tx = message.tx ? base64FromBytes(message.tx) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return RequestDeliverTx.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return RequestDeliverTx.decode(message.value);
  },
  toProto(message) {
    return RequestDeliverTx.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.abci.RequestDeliverTx",
      value: RequestDeliverTx.encode(message).finish()
    };
  }
};
function createBaseRequestEndBlock() {
  return {
    height: BigInt(0)
  };
}
const RequestEndBlock = {
  typeUrl: "/tendermint.abci.RequestEndBlock",
  encode(message, writer = BinaryWriter.create()) {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).int64(message.height);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRequestEndBlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseRequestEndBlock();
    message.height = object.height !== void 0 && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseRequestEndBlock();
    if (object.height !== void 0 && object.height !== null) {
      message.height = BigInt(object.height);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return RequestEndBlock.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return RequestEndBlock.decode(message.value);
  },
  toProto(message) {
    return RequestEndBlock.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.abci.RequestEndBlock",
      value: RequestEndBlock.encode(message).finish()
    };
  }
};
function createBaseRequestCommit() {
  return {};
}
const RequestCommit = {
  typeUrl: "/tendermint.abci.RequestCommit",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRequestCommit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_) {
    const message = createBaseRequestCommit();
    return message;
  },
  fromAmino(_) {
    const message = createBaseRequestCommit();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return RequestCommit.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return RequestCommit.decode(message.value);
  },
  toProto(message) {
    return RequestCommit.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.abci.RequestCommit",
      value: RequestCommit.encode(message).finish()
    };
  }
};
function createBaseRequestListSnapshots() {
  return {};
}
const RequestListSnapshots = {
  typeUrl: "/tendermint.abci.RequestListSnapshots",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRequestListSnapshots();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_) {
    const message = createBaseRequestListSnapshots();
    return message;
  },
  fromAmino(_) {
    const message = createBaseRequestListSnapshots();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return RequestListSnapshots.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return RequestListSnapshots.decode(message.value);
  },
  toProto(message) {
    return RequestListSnapshots.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.abci.RequestListSnapshots",
      value: RequestListSnapshots.encode(message).finish()
    };
  }
};
function createBaseRequestOfferSnapshot() {
  return {
    snapshot: void 0,
    appHash: new Uint8Array()
  };
}
const RequestOfferSnapshot = {
  typeUrl: "/tendermint.abci.RequestOfferSnapshot",
  encode(message, writer = BinaryWriter.create()) {
    if (message.snapshot !== void 0) {
      Snapshot.encode(message.snapshot, writer.uint32(10).fork()).ldelim();
    }
    if (message.appHash.length !== 0) {
      writer.uint32(18).bytes(message.appHash);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRequestOfferSnapshot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.snapshot = Snapshot.decode(reader, reader.uint32());
          break;
        case 2:
          message.appHash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseRequestOfferSnapshot();
    message.snapshot = object.snapshot !== void 0 && object.snapshot !== null ? Snapshot.fromPartial(object.snapshot) : void 0;
    message.appHash = object.appHash ?? new Uint8Array();
    return message;
  },
  fromAmino(object) {
    const message = createBaseRequestOfferSnapshot();
    if (object.snapshot !== void 0 && object.snapshot !== null) {
      message.snapshot = Snapshot.fromAmino(object.snapshot);
    }
    if (object.app_hash !== void 0 && object.app_hash !== null) {
      message.appHash = bytesFromBase64(object.app_hash);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.snapshot = message.snapshot ? Snapshot.toAmino(message.snapshot) : void 0;
    obj.app_hash = message.appHash ? base64FromBytes(message.appHash) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return RequestOfferSnapshot.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return RequestOfferSnapshot.decode(message.value);
  },
  toProto(message) {
    return RequestOfferSnapshot.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.abci.RequestOfferSnapshot",
      value: RequestOfferSnapshot.encode(message).finish()
    };
  }
};
function createBaseRequestLoadSnapshotChunk() {
  return {
    height: BigInt(0),
    format: 0,
    chunk: 0
  };
}
const RequestLoadSnapshotChunk = {
  typeUrl: "/tendermint.abci.RequestLoadSnapshotChunk",
  encode(message, writer = BinaryWriter.create()) {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).uint64(message.height);
    }
    if (message.format !== 0) {
      writer.uint32(16).uint32(message.format);
    }
    if (message.chunk !== 0) {
      writer.uint32(24).uint32(message.chunk);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRequestLoadSnapshotChunk();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.uint64();
          break;
        case 2:
          message.format = reader.uint32();
          break;
        case 3:
          message.chunk = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseRequestLoadSnapshotChunk();
    message.height = object.height !== void 0 && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.format = object.format ?? 0;
    message.chunk = object.chunk ?? 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseRequestLoadSnapshotChunk();
    if (object.height !== void 0 && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.format !== void 0 && object.format !== null) {
      message.format = object.format;
    }
    if (object.chunk !== void 0 && object.chunk !== null) {
      message.chunk = object.chunk;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : void 0;
    obj.format = message.format === 0 ? void 0 : message.format;
    obj.chunk = message.chunk === 0 ? void 0 : message.chunk;
    return obj;
  },
  fromAminoMsg(object) {
    return RequestLoadSnapshotChunk.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return RequestLoadSnapshotChunk.decode(message.value);
  },
  toProto(message) {
    return RequestLoadSnapshotChunk.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.abci.RequestLoadSnapshotChunk",
      value: RequestLoadSnapshotChunk.encode(message).finish()
    };
  }
};
function createBaseRequestApplySnapshotChunk() {
  return {
    index: 0,
    chunk: new Uint8Array(),
    sender: ""
  };
}
const RequestApplySnapshotChunk = {
  typeUrl: "/tendermint.abci.RequestApplySnapshotChunk",
  encode(message, writer = BinaryWriter.create()) {
    if (message.index !== 0) {
      writer.uint32(8).uint32(message.index);
    }
    if (message.chunk.length !== 0) {
      writer.uint32(18).bytes(message.chunk);
    }
    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRequestApplySnapshotChunk();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.uint32();
          break;
        case 2:
          message.chunk = reader.bytes();
          break;
        case 3:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseRequestApplySnapshotChunk();
    message.index = object.index ?? 0;
    message.chunk = object.chunk ?? new Uint8Array();
    message.sender = object.sender ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseRequestApplySnapshotChunk();
    if (object.index !== void 0 && object.index !== null) {
      message.index = object.index;
    }
    if (object.chunk !== void 0 && object.chunk !== null) {
      message.chunk = bytesFromBase64(object.chunk);
    }
    if (object.sender !== void 0 && object.sender !== null) {
      message.sender = object.sender;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.index = message.index === 0 ? void 0 : message.index;
    obj.chunk = message.chunk ? base64FromBytes(message.chunk) : void 0;
    obj.sender = message.sender === "" ? void 0 : message.sender;
    return obj;
  },
  fromAminoMsg(object) {
    return RequestApplySnapshotChunk.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return RequestApplySnapshotChunk.decode(message.value);
  },
  toProto(message) {
    return RequestApplySnapshotChunk.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.abci.RequestApplySnapshotChunk",
      value: RequestApplySnapshotChunk.encode(message).finish()
    };
  }
};
function createBaseRequestPrepareProposal() {
  return {
    maxTxBytes: BigInt(0),
    txs: [],
    localLastCommit: ExtendedCommitInfo.fromPartial({}),
    misbehavior: [],
    height: BigInt(0),
    time: /* @__PURE__ */ new Date(),
    nextValidatorsHash: new Uint8Array(),
    proposerAddress: new Uint8Array()
  };
}
const RequestPrepareProposal = {
  typeUrl: "/tendermint.abci.RequestPrepareProposal",
  encode(message, writer = BinaryWriter.create()) {
    if (message.maxTxBytes !== BigInt(0)) {
      writer.uint32(8).int64(message.maxTxBytes);
    }
    for (const v of message.txs) {
      writer.uint32(18).bytes(v);
    }
    if (message.localLastCommit !== void 0) {
      ExtendedCommitInfo.encode(message.localLastCommit, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.misbehavior) {
      Misbehavior.encode(v, writer.uint32(34).fork()).ldelim();
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(40).int64(message.height);
    }
    if (message.time !== void 0) {
      Timestamp.encode(toTimestamp(message.time), writer.uint32(50).fork()).ldelim();
    }
    if (message.nextValidatorsHash.length !== 0) {
      writer.uint32(58).bytes(message.nextValidatorsHash);
    }
    if (message.proposerAddress.length !== 0) {
      writer.uint32(66).bytes(message.proposerAddress);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRequestPrepareProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxTxBytes = reader.int64();
          break;
        case 2:
          message.txs.push(reader.bytes());
          break;
        case 3:
          message.localLastCommit = ExtendedCommitInfo.decode(reader, reader.uint32());
          break;
        case 4:
          message.misbehavior.push(Misbehavior.decode(reader, reader.uint32()));
          break;
        case 5:
          message.height = reader.int64();
          break;
        case 6:
          message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 7:
          message.nextValidatorsHash = reader.bytes();
          break;
        case 8:
          message.proposerAddress = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseRequestPrepareProposal();
    message.maxTxBytes = object.maxTxBytes !== void 0 && object.maxTxBytes !== null ? BigInt(object.maxTxBytes.toString()) : BigInt(0);
    message.txs = object.txs?.map((e) => e) || [];
    message.localLastCommit = object.localLastCommit !== void 0 && object.localLastCommit !== null ? ExtendedCommitInfo.fromPartial(object.localLastCommit) : void 0;
    message.misbehavior = object.misbehavior?.map((e) => Misbehavior.fromPartial(e)) || [];
    message.height = object.height !== void 0 && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.time = object.time ?? void 0;
    message.nextValidatorsHash = object.nextValidatorsHash ?? new Uint8Array();
    message.proposerAddress = object.proposerAddress ?? new Uint8Array();
    return message;
  },
  fromAmino(object) {
    const message = createBaseRequestPrepareProposal();
    if (object.max_tx_bytes !== void 0 && object.max_tx_bytes !== null) {
      message.maxTxBytes = BigInt(object.max_tx_bytes);
    }
    message.txs = object.txs?.map((e) => bytesFromBase64(e)) || [];
    if (object.local_last_commit !== void 0 && object.local_last_commit !== null) {
      message.localLastCommit = ExtendedCommitInfo.fromAmino(object.local_last_commit);
    }
    message.misbehavior = object.misbehavior?.map((e) => Misbehavior.fromAmino(e)) || [];
    if (object.height !== void 0 && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.time !== void 0 && object.time !== null) {
      message.time = fromTimestamp(Timestamp.fromAmino(object.time));
    }
    if (object.next_validators_hash !== void 0 && object.next_validators_hash !== null) {
      message.nextValidatorsHash = bytesFromBase64(object.next_validators_hash);
    }
    if (object.proposer_address !== void 0 && object.proposer_address !== null) {
      message.proposerAddress = bytesFromBase64(object.proposer_address);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.max_tx_bytes = message.maxTxBytes !== BigInt(0) ? message.maxTxBytes?.toString() : void 0;
    if (message.txs) {
      obj.txs = message.txs.map((e) => base64FromBytes(e));
    } else {
      obj.txs = message.txs;
    }
    obj.local_last_commit = message.localLastCommit ? ExtendedCommitInfo.toAmino(message.localLastCommit) : void 0;
    if (message.misbehavior) {
      obj.misbehavior = message.misbehavior.map((e) => e ? Misbehavior.toAmino(e) : void 0);
    } else {
      obj.misbehavior = message.misbehavior;
    }
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : void 0;
    obj.time = message.time ? Timestamp.toAmino(toTimestamp(message.time)) : void 0;
    obj.next_validators_hash = message.nextValidatorsHash ? base64FromBytes(message.nextValidatorsHash) : void 0;
    obj.proposer_address = message.proposerAddress ? base64FromBytes(message.proposerAddress) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return RequestPrepareProposal.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return RequestPrepareProposal.decode(message.value);
  },
  toProto(message) {
    return RequestPrepareProposal.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.abci.RequestPrepareProposal",
      value: RequestPrepareProposal.encode(message).finish()
    };
  }
};
function createBaseRequestProcessProposal() {
  return {
    txs: [],
    proposedLastCommit: CommitInfo.fromPartial({}),
    misbehavior: [],
    hash: new Uint8Array(),
    height: BigInt(0),
    time: /* @__PURE__ */ new Date(),
    nextValidatorsHash: new Uint8Array(),
    proposerAddress: new Uint8Array()
  };
}
const RequestProcessProposal = {
  typeUrl: "/tendermint.abci.RequestProcessProposal",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.txs) {
      writer.uint32(10).bytes(v);
    }
    if (message.proposedLastCommit !== void 0) {
      CommitInfo.encode(message.proposedLastCommit, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.misbehavior) {
      Misbehavior.encode(v, writer.uint32(26).fork()).ldelim();
    }
    if (message.hash.length !== 0) {
      writer.uint32(34).bytes(message.hash);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(40).int64(message.height);
    }
    if (message.time !== void 0) {
      Timestamp.encode(toTimestamp(message.time), writer.uint32(50).fork()).ldelim();
    }
    if (message.nextValidatorsHash.length !== 0) {
      writer.uint32(58).bytes(message.nextValidatorsHash);
    }
    if (message.proposerAddress.length !== 0) {
      writer.uint32(66).bytes(message.proposerAddress);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRequestProcessProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txs.push(reader.bytes());
          break;
        case 2:
          message.proposedLastCommit = CommitInfo.decode(reader, reader.uint32());
          break;
        case 3:
          message.misbehavior.push(Misbehavior.decode(reader, reader.uint32()));
          break;
        case 4:
          message.hash = reader.bytes();
          break;
        case 5:
          message.height = reader.int64();
          break;
        case 6:
          message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 7:
          message.nextValidatorsHash = reader.bytes();
          break;
        case 8:
          message.proposerAddress = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseRequestProcessProposal();
    message.txs = object.txs?.map((e) => e) || [];
    message.proposedLastCommit = object.proposedLastCommit !== void 0 && object.proposedLastCommit !== null ? CommitInfo.fromPartial(object.proposedLastCommit) : void 0;
    message.misbehavior = object.misbehavior?.map((e) => Misbehavior.fromPartial(e)) || [];
    message.hash = object.hash ?? new Uint8Array();
    message.height = object.height !== void 0 && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.time = object.time ?? void 0;
    message.nextValidatorsHash = object.nextValidatorsHash ?? new Uint8Array();
    message.proposerAddress = object.proposerAddress ?? new Uint8Array();
    return message;
  },
  fromAmino(object) {
    const message = createBaseRequestProcessProposal();
    message.txs = object.txs?.map((e) => bytesFromBase64(e)) || [];
    if (object.proposed_last_commit !== void 0 && object.proposed_last_commit !== null) {
      message.proposedLastCommit = CommitInfo.fromAmino(object.proposed_last_commit);
    }
    message.misbehavior = object.misbehavior?.map((e) => Misbehavior.fromAmino(e)) || [];
    if (object.hash !== void 0 && object.hash !== null) {
      message.hash = bytesFromBase64(object.hash);
    }
    if (object.height !== void 0 && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.time !== void 0 && object.time !== null) {
      message.time = fromTimestamp(Timestamp.fromAmino(object.time));
    }
    if (object.next_validators_hash !== void 0 && object.next_validators_hash !== null) {
      message.nextValidatorsHash = bytesFromBase64(object.next_validators_hash);
    }
    if (object.proposer_address !== void 0 && object.proposer_address !== null) {
      message.proposerAddress = bytesFromBase64(object.proposer_address);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.txs) {
      obj.txs = message.txs.map((e) => base64FromBytes(e));
    } else {
      obj.txs = message.txs;
    }
    obj.proposed_last_commit = message.proposedLastCommit ? CommitInfo.toAmino(message.proposedLastCommit) : void 0;
    if (message.misbehavior) {
      obj.misbehavior = message.misbehavior.map((e) => e ? Misbehavior.toAmino(e) : void 0);
    } else {
      obj.misbehavior = message.misbehavior;
    }
    obj.hash = message.hash ? base64FromBytes(message.hash) : void 0;
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : void 0;
    obj.time = message.time ? Timestamp.toAmino(toTimestamp(message.time)) : void 0;
    obj.next_validators_hash = message.nextValidatorsHash ? base64FromBytes(message.nextValidatorsHash) : void 0;
    obj.proposer_address = message.proposerAddress ? base64FromBytes(message.proposerAddress) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return RequestProcessProposal.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return RequestProcessProposal.decode(message.value);
  },
  toProto(message) {
    return RequestProcessProposal.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.abci.RequestProcessProposal",
      value: RequestProcessProposal.encode(message).finish()
    };
  }
};
function createBaseResponse() {
  return {
    exception: void 0,
    echo: void 0,
    flush: void 0,
    info: void 0,
    initChain: void 0,
    query: void 0,
    beginBlock: void 0,
    checkTx: void 0,
    deliverTx: void 0,
    endBlock: void 0,
    commit: void 0,
    listSnapshots: void 0,
    offerSnapshot: void 0,
    loadSnapshotChunk: void 0,
    applySnapshotChunk: void 0,
    prepareProposal: void 0,
    processProposal: void 0
  };
}
const Response = {
  typeUrl: "/tendermint.abci.Response",
  encode(message, writer = BinaryWriter.create()) {
    if (message.exception !== void 0) {
      ResponseException.encode(message.exception, writer.uint32(10).fork()).ldelim();
    }
    if (message.echo !== void 0) {
      ResponseEcho.encode(message.echo, writer.uint32(18).fork()).ldelim();
    }
    if (message.flush !== void 0) {
      ResponseFlush.encode(message.flush, writer.uint32(26).fork()).ldelim();
    }
    if (message.info !== void 0) {
      ResponseInfo.encode(message.info, writer.uint32(34).fork()).ldelim();
    }
    if (message.initChain !== void 0) {
      ResponseInitChain.encode(message.initChain, writer.uint32(50).fork()).ldelim();
    }
    if (message.query !== void 0) {
      ResponseQuery.encode(message.query, writer.uint32(58).fork()).ldelim();
    }
    if (message.beginBlock !== void 0) {
      ResponseBeginBlock.encode(message.beginBlock, writer.uint32(66).fork()).ldelim();
    }
    if (message.checkTx !== void 0) {
      ResponseCheckTx.encode(message.checkTx, writer.uint32(74).fork()).ldelim();
    }
    if (message.deliverTx !== void 0) {
      ResponseDeliverTx.encode(message.deliverTx, writer.uint32(82).fork()).ldelim();
    }
    if (message.endBlock !== void 0) {
      ResponseEndBlock.encode(message.endBlock, writer.uint32(90).fork()).ldelim();
    }
    if (message.commit !== void 0) {
      ResponseCommit.encode(message.commit, writer.uint32(98).fork()).ldelim();
    }
    if (message.listSnapshots !== void 0) {
      ResponseListSnapshots.encode(message.listSnapshots, writer.uint32(106).fork()).ldelim();
    }
    if (message.offerSnapshot !== void 0) {
      ResponseOfferSnapshot.encode(message.offerSnapshot, writer.uint32(114).fork()).ldelim();
    }
    if (message.loadSnapshotChunk !== void 0) {
      ResponseLoadSnapshotChunk.encode(message.loadSnapshotChunk, writer.uint32(122).fork()).ldelim();
    }
    if (message.applySnapshotChunk !== void 0) {
      ResponseApplySnapshotChunk.encode(message.applySnapshotChunk, writer.uint32(130).fork()).ldelim();
    }
    if (message.prepareProposal !== void 0) {
      ResponsePrepareProposal.encode(message.prepareProposal, writer.uint32(138).fork()).ldelim();
    }
    if (message.processProposal !== void 0) {
      ResponseProcessProposal.encode(message.processProposal, writer.uint32(146).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exception = ResponseException.decode(reader, reader.uint32());
          break;
        case 2:
          message.echo = ResponseEcho.decode(reader, reader.uint32());
          break;
        case 3:
          message.flush = ResponseFlush.decode(reader, reader.uint32());
          break;
        case 4:
          message.info = ResponseInfo.decode(reader, reader.uint32());
          break;
        case 6:
          message.initChain = ResponseInitChain.decode(reader, reader.uint32());
          break;
        case 7:
          message.query = ResponseQuery.decode(reader, reader.uint32());
          break;
        case 8:
          message.beginBlock = ResponseBeginBlock.decode(reader, reader.uint32());
          break;
        case 9:
          message.checkTx = ResponseCheckTx.decode(reader, reader.uint32());
          break;
        case 10:
          message.deliverTx = ResponseDeliverTx.decode(reader, reader.uint32());
          break;
        case 11:
          message.endBlock = ResponseEndBlock.decode(reader, reader.uint32());
          break;
        case 12:
          message.commit = ResponseCommit.decode(reader, reader.uint32());
          break;
        case 13:
          message.listSnapshots = ResponseListSnapshots.decode(reader, reader.uint32());
          break;
        case 14:
          message.offerSnapshot = ResponseOfferSnapshot.decode(reader, reader.uint32());
          break;
        case 15:
          message.loadSnapshotChunk = ResponseLoadSnapshotChunk.decode(reader, reader.uint32());
          break;
        case 16:
          message.applySnapshotChunk = ResponseApplySnapshotChunk.decode(reader, reader.uint32());
          break;
        case 17:
          message.prepareProposal = ResponsePrepareProposal.decode(reader, reader.uint32());
          break;
        case 18:
          message.processProposal = ResponseProcessProposal.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseResponse();
    message.exception = object.exception !== void 0 && object.exception !== null ? ResponseException.fromPartial(object.exception) : void 0;
    message.echo = object.echo !== void 0 && object.echo !== null ? ResponseEcho.fromPartial(object.echo) : void 0;
    message.flush = object.flush !== void 0 && object.flush !== null ? ResponseFlush.fromPartial(object.flush) : void 0;
    message.info = object.info !== void 0 && object.info !== null ? ResponseInfo.fromPartial(object.info) : void 0;
    message.initChain = object.initChain !== void 0 && object.initChain !== null ? ResponseInitChain.fromPartial(object.initChain) : void 0;
    message.query = object.query !== void 0 && object.query !== null ? ResponseQuery.fromPartial(object.query) : void 0;
    message.beginBlock = object.beginBlock !== void 0 && object.beginBlock !== null ? ResponseBeginBlock.fromPartial(object.beginBlock) : void 0;
    message.checkTx = object.checkTx !== void 0 && object.checkTx !== null ? ResponseCheckTx.fromPartial(object.checkTx) : void 0;
    message.deliverTx = object.deliverTx !== void 0 && object.deliverTx !== null ? ResponseDeliverTx.fromPartial(object.deliverTx) : void 0;
    message.endBlock = object.endBlock !== void 0 && object.endBlock !== null ? ResponseEndBlock.fromPartial(object.endBlock) : void 0;
    message.commit = object.commit !== void 0 && object.commit !== null ? ResponseCommit.fromPartial(object.commit) : void 0;
    message.listSnapshots = object.listSnapshots !== void 0 && object.listSnapshots !== null ? ResponseListSnapshots.fromPartial(object.listSnapshots) : void 0;
    message.offerSnapshot = object.offerSnapshot !== void 0 && object.offerSnapshot !== null ? ResponseOfferSnapshot.fromPartial(object.offerSnapshot) : void 0;
    message.loadSnapshotChunk = object.loadSnapshotChunk !== void 0 && object.loadSnapshotChunk !== null ? ResponseLoadSnapshotChunk.fromPartial(object.loadSnapshotChunk) : void 0;
    message.applySnapshotChunk = object.applySnapshotChunk !== void 0 && object.applySnapshotChunk !== null ? ResponseApplySnapshotChunk.fromPartial(object.applySnapshotChunk) : void 0;
    message.prepareProposal = object.prepareProposal !== void 0 && object.prepareProposal !== null ? ResponsePrepareProposal.fromPartial(object.prepareProposal) : void 0;
    message.processProposal = object.processProposal !== void 0 && object.processProposal !== null ? ResponseProcessProposal.fromPartial(object.processProposal) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseResponse();
    if (object.exception !== void 0 && object.exception !== null) {
      message.exception = ResponseException.fromAmino(object.exception);
    }
    if (object.echo !== void 0 && object.echo !== null) {
      message.echo = ResponseEcho.fromAmino(object.echo);
    }
    if (object.flush !== void 0 && object.flush !== null) {
      message.flush = ResponseFlush.fromAmino(object.flush);
    }
    if (object.info !== void 0 && object.info !== null) {
      message.info = ResponseInfo.fromAmino(object.info);
    }
    if (object.init_chain !== void 0 && object.init_chain !== null) {
      message.initChain = ResponseInitChain.fromAmino(object.init_chain);
    }
    if (object.query !== void 0 && object.query !== null) {
      message.query = ResponseQuery.fromAmino(object.query);
    }
    if (object.begin_block !== void 0 && object.begin_block !== null) {
      message.beginBlock = ResponseBeginBlock.fromAmino(object.begin_block);
    }
    if (object.check_tx !== void 0 && object.check_tx !== null) {
      message.checkTx = ResponseCheckTx.fromAmino(object.check_tx);
    }
    if (object.deliver_tx !== void 0 && object.deliver_tx !== null) {
      message.deliverTx = ResponseDeliverTx.fromAmino(object.deliver_tx);
    }
    if (object.end_block !== void 0 && object.end_block !== null) {
      message.endBlock = ResponseEndBlock.fromAmino(object.end_block);
    }
    if (object.commit !== void 0 && object.commit !== null) {
      message.commit = ResponseCommit.fromAmino(object.commit);
    }
    if (object.list_snapshots !== void 0 && object.list_snapshots !== null) {
      message.listSnapshots = ResponseListSnapshots.fromAmino(object.list_snapshots);
    }
    if (object.offer_snapshot !== void 0 && object.offer_snapshot !== null) {
      message.offerSnapshot = ResponseOfferSnapshot.fromAmino(object.offer_snapshot);
    }
    if (object.load_snapshot_chunk !== void 0 && object.load_snapshot_chunk !== null) {
      message.loadSnapshotChunk = ResponseLoadSnapshotChunk.fromAmino(object.load_snapshot_chunk);
    }
    if (object.apply_snapshot_chunk !== void 0 && object.apply_snapshot_chunk !== null) {
      message.applySnapshotChunk = ResponseApplySnapshotChunk.fromAmino(object.apply_snapshot_chunk);
    }
    if (object.prepare_proposal !== void 0 && object.prepare_proposal !== null) {
      message.prepareProposal = ResponsePrepareProposal.fromAmino(object.prepare_proposal);
    }
    if (object.process_proposal !== void 0 && object.process_proposal !== null) {
      message.processProposal = ResponseProcessProposal.fromAmino(object.process_proposal);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.exception = message.exception ? ResponseException.toAmino(message.exception) : void 0;
    obj.echo = message.echo ? ResponseEcho.toAmino(message.echo) : void 0;
    obj.flush = message.flush ? ResponseFlush.toAmino(message.flush) : void 0;
    obj.info = message.info ? ResponseInfo.toAmino(message.info) : void 0;
    obj.init_chain = message.initChain ? ResponseInitChain.toAmino(message.initChain) : void 0;
    obj.query = message.query ? ResponseQuery.toAmino(message.query) : void 0;
    obj.begin_block = message.beginBlock ? ResponseBeginBlock.toAmino(message.beginBlock) : void 0;
    obj.check_tx = message.checkTx ? ResponseCheckTx.toAmino(message.checkTx) : void 0;
    obj.deliver_tx = message.deliverTx ? ResponseDeliverTx.toAmino(message.deliverTx) : void 0;
    obj.end_block = message.endBlock ? ResponseEndBlock.toAmino(message.endBlock) : void 0;
    obj.commit = message.commit ? ResponseCommit.toAmino(message.commit) : void 0;
    obj.list_snapshots = message.listSnapshots ? ResponseListSnapshots.toAmino(message.listSnapshots) : void 0;
    obj.offer_snapshot = message.offerSnapshot ? ResponseOfferSnapshot.toAmino(message.offerSnapshot) : void 0;
    obj.load_snapshot_chunk = message.loadSnapshotChunk ? ResponseLoadSnapshotChunk.toAmino(message.loadSnapshotChunk) : void 0;
    obj.apply_snapshot_chunk = message.applySnapshotChunk ? ResponseApplySnapshotChunk.toAmino(message.applySnapshotChunk) : void 0;
    obj.prepare_proposal = message.prepareProposal ? ResponsePrepareProposal.toAmino(message.prepareProposal) : void 0;
    obj.process_proposal = message.processProposal ? ResponseProcessProposal.toAmino(message.processProposal) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return Response.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return Response.decode(message.value);
  },
  toProto(message) {
    return Response.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.abci.Response",
      value: Response.encode(message).finish()
    };
  }
};
function createBaseResponseException() {
  return {
    error: ""
  };
}
const ResponseException = {
  typeUrl: "/tendermint.abci.ResponseException",
  encode(message, writer = BinaryWriter.create()) {
    if (message.error !== "") {
      writer.uint32(10).string(message.error);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseResponseException();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.error = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseResponseException();
    message.error = object.error ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseResponseException();
    if (object.error !== void 0 && object.error !== null) {
      message.error = object.error;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.error = message.error === "" ? void 0 : message.error;
    return obj;
  },
  fromAminoMsg(object) {
    return ResponseException.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return ResponseException.decode(message.value);
  },
  toProto(message) {
    return ResponseException.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.abci.ResponseException",
      value: ResponseException.encode(message).finish()
    };
  }
};
function createBaseResponseEcho() {
  return {
    message: ""
  };
}
const ResponseEcho = {
  typeUrl: "/tendermint.abci.ResponseEcho",
  encode(message, writer = BinaryWriter.create()) {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseResponseEcho();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseResponseEcho();
    message.message = object.message ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseResponseEcho();
    if (object.message !== void 0 && object.message !== null) {
      message.message = object.message;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.message = message.message === "" ? void 0 : message.message;
    return obj;
  },
  fromAminoMsg(object) {
    return ResponseEcho.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return ResponseEcho.decode(message.value);
  },
  toProto(message) {
    return ResponseEcho.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.abci.ResponseEcho",
      value: ResponseEcho.encode(message).finish()
    };
  }
};
function createBaseResponseFlush() {
  return {};
}
const ResponseFlush = {
  typeUrl: "/tendermint.abci.ResponseFlush",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseResponseFlush();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_) {
    const message = createBaseResponseFlush();
    return message;
  },
  fromAmino(_) {
    const message = createBaseResponseFlush();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return ResponseFlush.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return ResponseFlush.decode(message.value);
  },
  toProto(message) {
    return ResponseFlush.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.abci.ResponseFlush",
      value: ResponseFlush.encode(message).finish()
    };
  }
};
function createBaseResponseInfo() {
  return {
    data: "",
    version: "",
    appVersion: BigInt(0),
    lastBlockHeight: BigInt(0),
    lastBlockAppHash: new Uint8Array()
  };
}
const ResponseInfo = {
  typeUrl: "/tendermint.abci.ResponseInfo",
  encode(message, writer = BinaryWriter.create()) {
    if (message.data !== "") {
      writer.uint32(10).string(message.data);
    }
    if (message.version !== "") {
      writer.uint32(18).string(message.version);
    }
    if (message.appVersion !== BigInt(0)) {
      writer.uint32(24).uint64(message.appVersion);
    }
    if (message.lastBlockHeight !== BigInt(0)) {
      writer.uint32(32).int64(message.lastBlockHeight);
    }
    if (message.lastBlockAppHash.length !== 0) {
      writer.uint32(42).bytes(message.lastBlockAppHash);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseResponseInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.string();
          break;
        case 2:
          message.version = reader.string();
          break;
        case 3:
          message.appVersion = reader.uint64();
          break;
        case 4:
          message.lastBlockHeight = reader.int64();
          break;
        case 5:
          message.lastBlockAppHash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseResponseInfo();
    message.data = object.data ?? "";
    message.version = object.version ?? "";
    message.appVersion = object.appVersion !== void 0 && object.appVersion !== null ? BigInt(object.appVersion.toString()) : BigInt(0);
    message.lastBlockHeight = object.lastBlockHeight !== void 0 && object.lastBlockHeight !== null ? BigInt(object.lastBlockHeight.toString()) : BigInt(0);
    message.lastBlockAppHash = object.lastBlockAppHash ?? new Uint8Array();
    return message;
  },
  fromAmino(object) {
    const message = createBaseResponseInfo();
    if (object.data !== void 0 && object.data !== null) {
      message.data = object.data;
    }
    if (object.version !== void 0 && object.version !== null) {
      message.version = object.version;
    }
    if (object.app_version !== void 0 && object.app_version !== null) {
      message.appVersion = BigInt(object.app_version);
    }
    if (object.last_block_height !== void 0 && object.last_block_height !== null) {
      message.lastBlockHeight = BigInt(object.last_block_height);
    }
    if (object.last_block_app_hash !== void 0 && object.last_block_app_hash !== null) {
      message.lastBlockAppHash = bytesFromBase64(object.last_block_app_hash);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.data = message.data === "" ? void 0 : message.data;
    obj.version = message.version === "" ? void 0 : message.version;
    obj.app_version = message.appVersion !== BigInt(0) ? message.appVersion?.toString() : void 0;
    obj.last_block_height = message.lastBlockHeight !== BigInt(0) ? message.lastBlockHeight?.toString() : void 0;
    obj.last_block_app_hash = message.lastBlockAppHash ? base64FromBytes(message.lastBlockAppHash) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return ResponseInfo.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return ResponseInfo.decode(message.value);
  },
  toProto(message) {
    return ResponseInfo.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.abci.ResponseInfo",
      value: ResponseInfo.encode(message).finish()
    };
  }
};
function createBaseResponseInitChain() {
  return {
    consensusParams: void 0,
    validators: [],
    appHash: new Uint8Array()
  };
}
const ResponseInitChain = {
  typeUrl: "/tendermint.abci.ResponseInitChain",
  encode(message, writer = BinaryWriter.create()) {
    if (message.consensusParams !== void 0) {
      ConsensusParams.encode(message.consensusParams, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.validators) {
      ValidatorUpdate.encode(v, writer.uint32(18).fork()).ldelim();
    }
    if (message.appHash.length !== 0) {
      writer.uint32(26).bytes(message.appHash);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseResponseInitChain();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.consensusParams = ConsensusParams.decode(reader, reader.uint32());
          break;
        case 2:
          message.validators.push(ValidatorUpdate.decode(reader, reader.uint32()));
          break;
        case 3:
          message.appHash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseResponseInitChain();
    message.consensusParams = object.consensusParams !== void 0 && object.consensusParams !== null ? ConsensusParams.fromPartial(object.consensusParams) : void 0;
    message.validators = object.validators?.map((e) => ValidatorUpdate.fromPartial(e)) || [];
    message.appHash = object.appHash ?? new Uint8Array();
    return message;
  },
  fromAmino(object) {
    const message = createBaseResponseInitChain();
    if (object.consensus_params !== void 0 && object.consensus_params !== null) {
      message.consensusParams = ConsensusParams.fromAmino(object.consensus_params);
    }
    message.validators = object.validators?.map((e) => ValidatorUpdate.fromAmino(e)) || [];
    if (object.app_hash !== void 0 && object.app_hash !== null) {
      message.appHash = bytesFromBase64(object.app_hash);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.consensus_params = message.consensusParams ? ConsensusParams.toAmino(message.consensusParams) : void 0;
    if (message.validators) {
      obj.validators = message.validators.map((e) => e ? ValidatorUpdate.toAmino(e) : void 0);
    } else {
      obj.validators = message.validators;
    }
    obj.app_hash = message.appHash ? base64FromBytes(message.appHash) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return ResponseInitChain.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return ResponseInitChain.decode(message.value);
  },
  toProto(message) {
    return ResponseInitChain.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.abci.ResponseInitChain",
      value: ResponseInitChain.encode(message).finish()
    };
  }
};
function createBaseResponseQuery() {
  return {
    code: 0,
    log: "",
    info: "",
    index: BigInt(0),
    key: new Uint8Array(),
    value: new Uint8Array(),
    proofOps: void 0,
    height: BigInt(0),
    codespace: ""
  };
}
const ResponseQuery = {
  typeUrl: "/tendermint.abci.ResponseQuery",
  encode(message, writer = BinaryWriter.create()) {
    if (message.code !== 0) {
      writer.uint32(8).uint32(message.code);
    }
    if (message.log !== "") {
      writer.uint32(26).string(message.log);
    }
    if (message.info !== "") {
      writer.uint32(34).string(message.info);
    }
    if (message.index !== BigInt(0)) {
      writer.uint32(40).int64(message.index);
    }
    if (message.key.length !== 0) {
      writer.uint32(50).bytes(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(58).bytes(message.value);
    }
    if (message.proofOps !== void 0) {
      ProofOps.encode(message.proofOps, writer.uint32(66).fork()).ldelim();
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(72).int64(message.height);
    }
    if (message.codespace !== "") {
      writer.uint32(82).string(message.codespace);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseResponseQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.uint32();
          break;
        case 3:
          message.log = reader.string();
          break;
        case 4:
          message.info = reader.string();
          break;
        case 5:
          message.index = reader.int64();
          break;
        case 6:
          message.key = reader.bytes();
          break;
        case 7:
          message.value = reader.bytes();
          break;
        case 8:
          message.proofOps = ProofOps.decode(reader, reader.uint32());
          break;
        case 9:
          message.height = reader.int64();
          break;
        case 10:
          message.codespace = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseResponseQuery();
    message.code = object.code ?? 0;
    message.log = object.log ?? "";
    message.info = object.info ?? "";
    message.index = object.index !== void 0 && object.index !== null ? BigInt(object.index.toString()) : BigInt(0);
    message.key = object.key ?? new Uint8Array();
    message.value = object.value ?? new Uint8Array();
    message.proofOps = object.proofOps !== void 0 && object.proofOps !== null ? ProofOps.fromPartial(object.proofOps) : void 0;
    message.height = object.height !== void 0 && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.codespace = object.codespace ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseResponseQuery();
    if (object.code !== void 0 && object.code !== null) {
      message.code = object.code;
    }
    if (object.log !== void 0 && object.log !== null) {
      message.log = object.log;
    }
    if (object.info !== void 0 && object.info !== null) {
      message.info = object.info;
    }
    if (object.index !== void 0 && object.index !== null) {
      message.index = BigInt(object.index);
    }
    if (object.key !== void 0 && object.key !== null) {
      message.key = bytesFromBase64(object.key);
    }
    if (object.value !== void 0 && object.value !== null) {
      message.value = bytesFromBase64(object.value);
    }
    if (object.proof_ops !== void 0 && object.proof_ops !== null) {
      message.proofOps = ProofOps.fromAmino(object.proof_ops);
    }
    if (object.height !== void 0 && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.codespace !== void 0 && object.codespace !== null) {
      message.codespace = object.codespace;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.code = message.code === 0 ? void 0 : message.code;
    obj.log = message.log === "" ? void 0 : message.log;
    obj.info = message.info === "" ? void 0 : message.info;
    obj.index = message.index !== BigInt(0) ? message.index?.toString() : void 0;
    obj.key = message.key ? base64FromBytes(message.key) : void 0;
    obj.value = message.value ? base64FromBytes(message.value) : void 0;
    obj.proof_ops = message.proofOps ? ProofOps.toAmino(message.proofOps) : void 0;
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : void 0;
    obj.codespace = message.codespace === "" ? void 0 : message.codespace;
    return obj;
  },
  fromAminoMsg(object) {
    return ResponseQuery.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return ResponseQuery.decode(message.value);
  },
  toProto(message) {
    return ResponseQuery.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.abci.ResponseQuery",
      value: ResponseQuery.encode(message).finish()
    };
  }
};
function createBaseResponseBeginBlock() {
  return {
    events: []
  };
}
const ResponseBeginBlock = {
  typeUrl: "/tendermint.abci.ResponseBeginBlock",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.events) {
      Event.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseResponseBeginBlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.events.push(Event.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseResponseBeginBlock();
    message.events = object.events?.map((e) => Event.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseResponseBeginBlock();
    message.events = object.events?.map((e) => Event.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.events) {
      obj.events = message.events.map((e) => e ? Event.toAmino(e) : void 0);
    } else {
      obj.events = message.events;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return ResponseBeginBlock.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return ResponseBeginBlock.decode(message.value);
  },
  toProto(message) {
    return ResponseBeginBlock.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.abci.ResponseBeginBlock",
      value: ResponseBeginBlock.encode(message).finish()
    };
  }
};
function createBaseResponseCheckTx() {
  return {
    code: 0,
    data: new Uint8Array(),
    log: "",
    info: "",
    gasWanted: BigInt(0),
    gasUsed: BigInt(0),
    events: [],
    codespace: "",
    sender: "",
    priority: BigInt(0),
    mempoolError: ""
  };
}
const ResponseCheckTx = {
  typeUrl: "/tendermint.abci.ResponseCheckTx",
  encode(message, writer = BinaryWriter.create()) {
    if (message.code !== 0) {
      writer.uint32(8).uint32(message.code);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    if (message.log !== "") {
      writer.uint32(26).string(message.log);
    }
    if (message.info !== "") {
      writer.uint32(34).string(message.info);
    }
    if (message.gasWanted !== BigInt(0)) {
      writer.uint32(40).int64(message.gasWanted);
    }
    if (message.gasUsed !== BigInt(0)) {
      writer.uint32(48).int64(message.gasUsed);
    }
    for (const v of message.events) {
      Event.encode(v, writer.uint32(58).fork()).ldelim();
    }
    if (message.codespace !== "") {
      writer.uint32(66).string(message.codespace);
    }
    if (message.sender !== "") {
      writer.uint32(74).string(message.sender);
    }
    if (message.priority !== BigInt(0)) {
      writer.uint32(80).int64(message.priority);
    }
    if (message.mempoolError !== "") {
      writer.uint32(90).string(message.mempoolError);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseResponseCheckTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.uint32();
          break;
        case 2:
          message.data = reader.bytes();
          break;
        case 3:
          message.log = reader.string();
          break;
        case 4:
          message.info = reader.string();
          break;
        case 5:
          message.gasWanted = reader.int64();
          break;
        case 6:
          message.gasUsed = reader.int64();
          break;
        case 7:
          message.events.push(Event.decode(reader, reader.uint32()));
          break;
        case 8:
          message.codespace = reader.string();
          break;
        case 9:
          message.sender = reader.string();
          break;
        case 10:
          message.priority = reader.int64();
          break;
        case 11:
          message.mempoolError = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseResponseCheckTx();
    message.code = object.code ?? 0;
    message.data = object.data ?? new Uint8Array();
    message.log = object.log ?? "";
    message.info = object.info ?? "";
    message.gasWanted = object.gasWanted !== void 0 && object.gasWanted !== null ? BigInt(object.gasWanted.toString()) : BigInt(0);
    message.gasUsed = object.gasUsed !== void 0 && object.gasUsed !== null ? BigInt(object.gasUsed.toString()) : BigInt(0);
    message.events = object.events?.map((e) => Event.fromPartial(e)) || [];
    message.codespace = object.codespace ?? "";
    message.sender = object.sender ?? "";
    message.priority = object.priority !== void 0 && object.priority !== null ? BigInt(object.priority.toString()) : BigInt(0);
    message.mempoolError = object.mempoolError ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseResponseCheckTx();
    if (object.code !== void 0 && object.code !== null) {
      message.code = object.code;
    }
    if (object.data !== void 0 && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    if (object.log !== void 0 && object.log !== null) {
      message.log = object.log;
    }
    if (object.info !== void 0 && object.info !== null) {
      message.info = object.info;
    }
    if (object.gas_wanted !== void 0 && object.gas_wanted !== null) {
      message.gasWanted = BigInt(object.gas_wanted);
    }
    if (object.gas_used !== void 0 && object.gas_used !== null) {
      message.gasUsed = BigInt(object.gas_used);
    }
    message.events = object.events?.map((e) => Event.fromAmino(e)) || [];
    if (object.codespace !== void 0 && object.codespace !== null) {
      message.codespace = object.codespace;
    }
    if (object.sender !== void 0 && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.priority !== void 0 && object.priority !== null) {
      message.priority = BigInt(object.priority);
    }
    if (object.mempool_error !== void 0 && object.mempool_error !== null) {
      message.mempoolError = object.mempool_error;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.code = message.code === 0 ? void 0 : message.code;
    obj.data = message.data ? base64FromBytes(message.data) : void 0;
    obj.log = message.log === "" ? void 0 : message.log;
    obj.info = message.info === "" ? void 0 : message.info;
    obj.gas_wanted = message.gasWanted !== BigInt(0) ? message.gasWanted?.toString() : void 0;
    obj.gas_used = message.gasUsed !== BigInt(0) ? message.gasUsed?.toString() : void 0;
    if (message.events) {
      obj.events = message.events.map((e) => e ? Event.toAmino(e) : void 0);
    } else {
      obj.events = message.events;
    }
    obj.codespace = message.codespace === "" ? void 0 : message.codespace;
    obj.sender = message.sender === "" ? void 0 : message.sender;
    obj.priority = message.priority !== BigInt(0) ? message.priority?.toString() : void 0;
    obj.mempool_error = message.mempoolError === "" ? void 0 : message.mempoolError;
    return obj;
  },
  fromAminoMsg(object) {
    return ResponseCheckTx.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return ResponseCheckTx.decode(message.value);
  },
  toProto(message) {
    return ResponseCheckTx.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.abci.ResponseCheckTx",
      value: ResponseCheckTx.encode(message).finish()
    };
  }
};
function createBaseResponseDeliverTx() {
  return {
    code: 0,
    data: new Uint8Array(),
    log: "",
    info: "",
    gasWanted: BigInt(0),
    gasUsed: BigInt(0),
    events: [],
    codespace: ""
  };
}
const ResponseDeliverTx = {
  typeUrl: "/tendermint.abci.ResponseDeliverTx",
  encode(message, writer = BinaryWriter.create()) {
    if (message.code !== 0) {
      writer.uint32(8).uint32(message.code);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    if (message.log !== "") {
      writer.uint32(26).string(message.log);
    }
    if (message.info !== "") {
      writer.uint32(34).string(message.info);
    }
    if (message.gasWanted !== BigInt(0)) {
      writer.uint32(40).int64(message.gasWanted);
    }
    if (message.gasUsed !== BigInt(0)) {
      writer.uint32(48).int64(message.gasUsed);
    }
    for (const v of message.events) {
      Event.encode(v, writer.uint32(58).fork()).ldelim();
    }
    if (message.codespace !== "") {
      writer.uint32(66).string(message.codespace);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseResponseDeliverTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.uint32();
          break;
        case 2:
          message.data = reader.bytes();
          break;
        case 3:
          message.log = reader.string();
          break;
        case 4:
          message.info = reader.string();
          break;
        case 5:
          message.gasWanted = reader.int64();
          break;
        case 6:
          message.gasUsed = reader.int64();
          break;
        case 7:
          message.events.push(Event.decode(reader, reader.uint32()));
          break;
        case 8:
          message.codespace = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseResponseDeliverTx();
    message.code = object.code ?? 0;
    message.data = object.data ?? new Uint8Array();
    message.log = object.log ?? "";
    message.info = object.info ?? "";
    message.gasWanted = object.gasWanted !== void 0 && object.gasWanted !== null ? BigInt(object.gasWanted.toString()) : BigInt(0);
    message.gasUsed = object.gasUsed !== void 0 && object.gasUsed !== null ? BigInt(object.gasUsed.toString()) : BigInt(0);
    message.events = object.events?.map((e) => Event.fromPartial(e)) || [];
    message.codespace = object.codespace ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseResponseDeliverTx();
    if (object.code !== void 0 && object.code !== null) {
      message.code = object.code;
    }
    if (object.data !== void 0 && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    if (object.log !== void 0 && object.log !== null) {
      message.log = object.log;
    }
    if (object.info !== void 0 && object.info !== null) {
      message.info = object.info;
    }
    if (object.gas_wanted !== void 0 && object.gas_wanted !== null) {
      message.gasWanted = BigInt(object.gas_wanted);
    }
    if (object.gas_used !== void 0 && object.gas_used !== null) {
      message.gasUsed = BigInt(object.gas_used);
    }
    message.events = object.events?.map((e) => Event.fromAmino(e)) || [];
    if (object.codespace !== void 0 && object.codespace !== null) {
      message.codespace = object.codespace;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.code = message.code === 0 ? void 0 : message.code;
    obj.data = message.data ? base64FromBytes(message.data) : void 0;
    obj.log = message.log === "" ? void 0 : message.log;
    obj.info = message.info === "" ? void 0 : message.info;
    obj.gas_wanted = message.gasWanted !== BigInt(0) ? message.gasWanted?.toString() : void 0;
    obj.gas_used = message.gasUsed !== BigInt(0) ? message.gasUsed?.toString() : void 0;
    if (message.events) {
      obj.events = message.events.map((e) => e ? Event.toAmino(e) : void 0);
    } else {
      obj.events = message.events;
    }
    obj.codespace = message.codespace === "" ? void 0 : message.codespace;
    return obj;
  },
  fromAminoMsg(object) {
    return ResponseDeliverTx.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return ResponseDeliverTx.decode(message.value);
  },
  toProto(message) {
    return ResponseDeliverTx.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.abci.ResponseDeliverTx",
      value: ResponseDeliverTx.encode(message).finish()
    };
  }
};
function createBaseResponseEndBlock() {
  return {
    validatorUpdates: [],
    consensusParamUpdates: void 0,
    events: []
  };
}
const ResponseEndBlock = {
  typeUrl: "/tendermint.abci.ResponseEndBlock",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.validatorUpdates) {
      ValidatorUpdate.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.consensusParamUpdates !== void 0) {
      ConsensusParams.encode(message.consensusParamUpdates, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.events) {
      Event.encode(v, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseResponseEndBlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorUpdates.push(ValidatorUpdate.decode(reader, reader.uint32()));
          break;
        case 2:
          message.consensusParamUpdates = ConsensusParams.decode(reader, reader.uint32());
          break;
        case 3:
          message.events.push(Event.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseResponseEndBlock();
    message.validatorUpdates = object.validatorUpdates?.map((e) => ValidatorUpdate.fromPartial(e)) || [];
    message.consensusParamUpdates = object.consensusParamUpdates !== void 0 && object.consensusParamUpdates !== null ? ConsensusParams.fromPartial(object.consensusParamUpdates) : void 0;
    message.events = object.events?.map((e) => Event.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseResponseEndBlock();
    message.validatorUpdates = object.validator_updates?.map((e) => ValidatorUpdate.fromAmino(e)) || [];
    if (object.consensus_param_updates !== void 0 && object.consensus_param_updates !== null) {
      message.consensusParamUpdates = ConsensusParams.fromAmino(object.consensus_param_updates);
    }
    message.events = object.events?.map((e) => Event.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.validatorUpdates) {
      obj.validator_updates = message.validatorUpdates.map((e) => e ? ValidatorUpdate.toAmino(e) : void 0);
    } else {
      obj.validator_updates = message.validatorUpdates;
    }
    obj.consensus_param_updates = message.consensusParamUpdates ? ConsensusParams.toAmino(message.consensusParamUpdates) : void 0;
    if (message.events) {
      obj.events = message.events.map((e) => e ? Event.toAmino(e) : void 0);
    } else {
      obj.events = message.events;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return ResponseEndBlock.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return ResponseEndBlock.decode(message.value);
  },
  toProto(message) {
    return ResponseEndBlock.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.abci.ResponseEndBlock",
      value: ResponseEndBlock.encode(message).finish()
    };
  }
};
function createBaseResponseCommit() {
  return {
    data: new Uint8Array(),
    retainHeight: BigInt(0)
  };
}
const ResponseCommit = {
  typeUrl: "/tendermint.abci.ResponseCommit",
  encode(message, writer = BinaryWriter.create()) {
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    if (message.retainHeight !== BigInt(0)) {
      writer.uint32(24).int64(message.retainHeight);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseResponseCommit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.data = reader.bytes();
          break;
        case 3:
          message.retainHeight = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseResponseCommit();
    message.data = object.data ?? new Uint8Array();
    message.retainHeight = object.retainHeight !== void 0 && object.retainHeight !== null ? BigInt(object.retainHeight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseResponseCommit();
    if (object.data !== void 0 && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    if (object.retain_height !== void 0 && object.retain_height !== null) {
      message.retainHeight = BigInt(object.retain_height);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.data = message.data ? base64FromBytes(message.data) : void 0;
    obj.retain_height = message.retainHeight !== BigInt(0) ? message.retainHeight?.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return ResponseCommit.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return ResponseCommit.decode(message.value);
  },
  toProto(message) {
    return ResponseCommit.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.abci.ResponseCommit",
      value: ResponseCommit.encode(message).finish()
    };
  }
};
function createBaseResponseListSnapshots() {
  return {
    snapshots: []
  };
}
const ResponseListSnapshots = {
  typeUrl: "/tendermint.abci.ResponseListSnapshots",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.snapshots) {
      Snapshot.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseResponseListSnapshots();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.snapshots.push(Snapshot.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseResponseListSnapshots();
    message.snapshots = object.snapshots?.map((e) => Snapshot.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseResponseListSnapshots();
    message.snapshots = object.snapshots?.map((e) => Snapshot.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.snapshots) {
      obj.snapshots = message.snapshots.map((e) => e ? Snapshot.toAmino(e) : void 0);
    } else {
      obj.snapshots = message.snapshots;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return ResponseListSnapshots.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return ResponseListSnapshots.decode(message.value);
  },
  toProto(message) {
    return ResponseListSnapshots.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.abci.ResponseListSnapshots",
      value: ResponseListSnapshots.encode(message).finish()
    };
  }
};
function createBaseResponseOfferSnapshot() {
  return {
    result: 0
  };
}
const ResponseOfferSnapshot = {
  typeUrl: "/tendermint.abci.ResponseOfferSnapshot",
  encode(message, writer = BinaryWriter.create()) {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseResponseOfferSnapshot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseResponseOfferSnapshot();
    message.result = object.result ?? 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseResponseOfferSnapshot();
    if (object.result !== void 0 && object.result !== null) {
      message.result = object.result;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.result = message.result === 0 ? void 0 : message.result;
    return obj;
  },
  fromAminoMsg(object) {
    return ResponseOfferSnapshot.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return ResponseOfferSnapshot.decode(message.value);
  },
  toProto(message) {
    return ResponseOfferSnapshot.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.abci.ResponseOfferSnapshot",
      value: ResponseOfferSnapshot.encode(message).finish()
    };
  }
};
function createBaseResponseLoadSnapshotChunk() {
  return {
    chunk: new Uint8Array()
  };
}
const ResponseLoadSnapshotChunk = {
  typeUrl: "/tendermint.abci.ResponseLoadSnapshotChunk",
  encode(message, writer = BinaryWriter.create()) {
    if (message.chunk.length !== 0) {
      writer.uint32(10).bytes(message.chunk);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseResponseLoadSnapshotChunk();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chunk = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseResponseLoadSnapshotChunk();
    message.chunk = object.chunk ?? new Uint8Array();
    return message;
  },
  fromAmino(object) {
    const message = createBaseResponseLoadSnapshotChunk();
    if (object.chunk !== void 0 && object.chunk !== null) {
      message.chunk = bytesFromBase64(object.chunk);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.chunk = message.chunk ? base64FromBytes(message.chunk) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return ResponseLoadSnapshotChunk.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return ResponseLoadSnapshotChunk.decode(message.value);
  },
  toProto(message) {
    return ResponseLoadSnapshotChunk.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.abci.ResponseLoadSnapshotChunk",
      value: ResponseLoadSnapshotChunk.encode(message).finish()
    };
  }
};
function createBaseResponseApplySnapshotChunk() {
  return {
    result: 0,
    refetchChunks: [],
    rejectSenders: []
  };
}
const ResponseApplySnapshotChunk = {
  typeUrl: "/tendermint.abci.ResponseApplySnapshotChunk",
  encode(message, writer = BinaryWriter.create()) {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    writer.uint32(18).fork();
    for (const v of message.refetchChunks) {
      writer.uint32(v);
    }
    writer.ldelim();
    for (const v of message.rejectSenders) {
      writer.uint32(26).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseResponseApplySnapshotChunk();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = reader.int32();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.refetchChunks.push(reader.uint32());
            }
          } else {
            message.refetchChunks.push(reader.uint32());
          }
          break;
        case 3:
          message.rejectSenders.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseResponseApplySnapshotChunk();
    message.result = object.result ?? 0;
    message.refetchChunks = object.refetchChunks?.map((e) => e) || [];
    message.rejectSenders = object.rejectSenders?.map((e) => e) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseResponseApplySnapshotChunk();
    if (object.result !== void 0 && object.result !== null) {
      message.result = object.result;
    }
    message.refetchChunks = object.refetch_chunks?.map((e) => e) || [];
    message.rejectSenders = object.reject_senders?.map((e) => e) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.result = message.result === 0 ? void 0 : message.result;
    if (message.refetchChunks) {
      obj.refetch_chunks = message.refetchChunks.map((e) => e);
    } else {
      obj.refetch_chunks = message.refetchChunks;
    }
    if (message.rejectSenders) {
      obj.reject_senders = message.rejectSenders.map((e) => e);
    } else {
      obj.reject_senders = message.rejectSenders;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return ResponseApplySnapshotChunk.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return ResponseApplySnapshotChunk.decode(message.value);
  },
  toProto(message) {
    return ResponseApplySnapshotChunk.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.abci.ResponseApplySnapshotChunk",
      value: ResponseApplySnapshotChunk.encode(message).finish()
    };
  }
};
function createBaseResponsePrepareProposal() {
  return {
    txs: []
  };
}
const ResponsePrepareProposal = {
  typeUrl: "/tendermint.abci.ResponsePrepareProposal",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.txs) {
      writer.uint32(10).bytes(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseResponsePrepareProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txs.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseResponsePrepareProposal();
    message.txs = object.txs?.map((e) => e) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseResponsePrepareProposal();
    message.txs = object.txs?.map((e) => bytesFromBase64(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.txs) {
      obj.txs = message.txs.map((e) => base64FromBytes(e));
    } else {
      obj.txs = message.txs;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return ResponsePrepareProposal.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return ResponsePrepareProposal.decode(message.value);
  },
  toProto(message) {
    return ResponsePrepareProposal.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.abci.ResponsePrepareProposal",
      value: ResponsePrepareProposal.encode(message).finish()
    };
  }
};
function createBaseResponseProcessProposal() {
  return {
    status: 0
  };
}
const ResponseProcessProposal = {
  typeUrl: "/tendermint.abci.ResponseProcessProposal",
  encode(message, writer = BinaryWriter.create()) {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseResponseProcessProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseResponseProcessProposal();
    message.status = object.status ?? 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseResponseProcessProposal();
    if (object.status !== void 0 && object.status !== null) {
      message.status = object.status;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.status = message.status === 0 ? void 0 : message.status;
    return obj;
  },
  fromAminoMsg(object) {
    return ResponseProcessProposal.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return ResponseProcessProposal.decode(message.value);
  },
  toProto(message) {
    return ResponseProcessProposal.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.abci.ResponseProcessProposal",
      value: ResponseProcessProposal.encode(message).finish()
    };
  }
};
function createBaseCommitInfo() {
  return {
    round: 0,
    votes: []
  };
}
const CommitInfo = {
  typeUrl: "/tendermint.abci.CommitInfo",
  encode(message, writer = BinaryWriter.create()) {
    if (message.round !== 0) {
      writer.uint32(8).int32(message.round);
    }
    for (const v of message.votes) {
      VoteInfo.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseCommitInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.round = reader.int32();
          break;
        case 2:
          message.votes.push(VoteInfo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseCommitInfo();
    message.round = object.round ?? 0;
    message.votes = object.votes?.map((e) => VoteInfo.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseCommitInfo();
    if (object.round !== void 0 && object.round !== null) {
      message.round = object.round;
    }
    message.votes = object.votes?.map((e) => VoteInfo.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.round = message.round === 0 ? void 0 : message.round;
    if (message.votes) {
      obj.votes = message.votes.map((e) => e ? VoteInfo.toAmino(e) : void 0);
    } else {
      obj.votes = message.votes;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return CommitInfo.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return CommitInfo.decode(message.value);
  },
  toProto(message) {
    return CommitInfo.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.abci.CommitInfo",
      value: CommitInfo.encode(message).finish()
    };
  }
};
function createBaseExtendedCommitInfo() {
  return {
    round: 0,
    votes: []
  };
}
const ExtendedCommitInfo = {
  typeUrl: "/tendermint.abci.ExtendedCommitInfo",
  encode(message, writer = BinaryWriter.create()) {
    if (message.round !== 0) {
      writer.uint32(8).int32(message.round);
    }
    for (const v of message.votes) {
      ExtendedVoteInfo.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseExtendedCommitInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.round = reader.int32();
          break;
        case 2:
          message.votes.push(ExtendedVoteInfo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseExtendedCommitInfo();
    message.round = object.round ?? 0;
    message.votes = object.votes?.map((e) => ExtendedVoteInfo.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseExtendedCommitInfo();
    if (object.round !== void 0 && object.round !== null) {
      message.round = object.round;
    }
    message.votes = object.votes?.map((e) => ExtendedVoteInfo.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.round = message.round === 0 ? void 0 : message.round;
    if (message.votes) {
      obj.votes = message.votes.map((e) => e ? ExtendedVoteInfo.toAmino(e) : void 0);
    } else {
      obj.votes = message.votes;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return ExtendedCommitInfo.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return ExtendedCommitInfo.decode(message.value);
  },
  toProto(message) {
    return ExtendedCommitInfo.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.abci.ExtendedCommitInfo",
      value: ExtendedCommitInfo.encode(message).finish()
    };
  }
};
function createBaseEvent() {
  return {
    type: "",
    attributes: []
  };
}
const Event = {
  typeUrl: "/tendermint.abci.Event",
  encode(message, writer = BinaryWriter.create()) {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    for (const v of message.attributes) {
      EventAttribute.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.attributes.push(EventAttribute.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseEvent();
    message.type = object.type ?? "";
    message.attributes = object.attributes?.map((e) => EventAttribute.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseEvent();
    if (object.type !== void 0 && object.type !== null) {
      message.type = object.type;
    }
    message.attributes = object.attributes?.map((e) => EventAttribute.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.type = message.type === "" ? void 0 : message.type;
    if (message.attributes) {
      obj.attributes = message.attributes.map((e) => e ? EventAttribute.toAmino(e) : void 0);
    } else {
      obj.attributes = message.attributes;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return Event.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return Event.decode(message.value);
  },
  toProto(message) {
    return Event.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.abci.Event",
      value: Event.encode(message).finish()
    };
  }
};
function createBaseEventAttribute() {
  return {
    key: "",
    value: "",
    index: false
  };
}
const EventAttribute = {
  typeUrl: "/tendermint.abci.EventAttribute",
  encode(message, writer = BinaryWriter.create()) {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    if (message.index === true) {
      writer.uint32(24).bool(message.index);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseEventAttribute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        case 3:
          message.index = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseEventAttribute();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    message.index = object.index ?? false;
    return message;
  },
  fromAmino(object) {
    const message = createBaseEventAttribute();
    if (object.key !== void 0 && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== void 0 && object.value !== null) {
      message.value = object.value;
    }
    if (object.index !== void 0 && object.index !== null) {
      message.index = object.index;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.key = message.key === "" ? void 0 : message.key;
    obj.value = message.value === "" ? void 0 : message.value;
    obj.index = message.index === false ? void 0 : message.index;
    return obj;
  },
  fromAminoMsg(object) {
    return EventAttribute.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return EventAttribute.decode(message.value);
  },
  toProto(message) {
    return EventAttribute.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.abci.EventAttribute",
      value: EventAttribute.encode(message).finish()
    };
  }
};
function createBaseTxResult() {
  return {
    height: BigInt(0),
    index: 0,
    tx: new Uint8Array(),
    result: ResponseDeliverTx.fromPartial({})
  };
}
const TxResult = {
  typeUrl: "/tendermint.abci.TxResult",
  encode(message, writer = BinaryWriter.create()) {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).int64(message.height);
    }
    if (message.index !== 0) {
      writer.uint32(16).uint32(message.index);
    }
    if (message.tx.length !== 0) {
      writer.uint32(26).bytes(message.tx);
    }
    if (message.result !== void 0) {
      ResponseDeliverTx.encode(message.result, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseTxResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;
        case 2:
          message.index = reader.uint32();
          break;
        case 3:
          message.tx = reader.bytes();
          break;
        case 4:
          message.result = ResponseDeliverTx.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseTxResult();
    message.height = object.height !== void 0 && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.index = object.index ?? 0;
    message.tx = object.tx ?? new Uint8Array();
    message.result = object.result !== void 0 && object.result !== null ? ResponseDeliverTx.fromPartial(object.result) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseTxResult();
    if (object.height !== void 0 && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.index !== void 0 && object.index !== null) {
      message.index = object.index;
    }
    if (object.tx !== void 0 && object.tx !== null) {
      message.tx = bytesFromBase64(object.tx);
    }
    if (object.result !== void 0 && object.result !== null) {
      message.result = ResponseDeliverTx.fromAmino(object.result);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : void 0;
    obj.index = message.index === 0 ? void 0 : message.index;
    obj.tx = message.tx ? base64FromBytes(message.tx) : void 0;
    obj.result = message.result ? ResponseDeliverTx.toAmino(message.result) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return TxResult.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return TxResult.decode(message.value);
  },
  toProto(message) {
    return TxResult.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.abci.TxResult",
      value: TxResult.encode(message).finish()
    };
  }
};
function createBaseValidator() {
  return {
    address: new Uint8Array(),
    power: BigInt(0)
  };
}
const Validator = {
  typeUrl: "/tendermint.abci.Validator",
  encode(message, writer = BinaryWriter.create()) {
    if (message.address.length !== 0) {
      writer.uint32(10).bytes(message.address);
    }
    if (message.power !== BigInt(0)) {
      writer.uint32(24).int64(message.power);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.bytes();
          break;
        case 3:
          message.power = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseValidator();
    message.address = object.address ?? new Uint8Array();
    message.power = object.power !== void 0 && object.power !== null ? BigInt(object.power.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseValidator();
    if (object.address !== void 0 && object.address !== null) {
      message.address = bytesFromBase64(object.address);
    }
    if (object.power !== void 0 && object.power !== null) {
      message.power = BigInt(object.power);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.address = message.address ? base64FromBytes(message.address) : void 0;
    obj.power = message.power !== BigInt(0) ? message.power?.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return Validator.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return Validator.decode(message.value);
  },
  toProto(message) {
    return Validator.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.abci.Validator",
      value: Validator.encode(message).finish()
    };
  }
};
function createBaseValidatorUpdate() {
  return {
    pubKey: PublicKey.fromPartial({}),
    power: BigInt(0)
  };
}
const ValidatorUpdate = {
  typeUrl: "/tendermint.abci.ValidatorUpdate",
  encode(message, writer = BinaryWriter.create()) {
    if (message.pubKey !== void 0) {
      PublicKey.encode(message.pubKey, writer.uint32(10).fork()).ldelim();
    }
    if (message.power !== BigInt(0)) {
      writer.uint32(16).int64(message.power);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseValidatorUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pubKey = PublicKey.decode(reader, reader.uint32());
          break;
        case 2:
          message.power = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseValidatorUpdate();
    message.pubKey = object.pubKey !== void 0 && object.pubKey !== null ? PublicKey.fromPartial(object.pubKey) : void 0;
    message.power = object.power !== void 0 && object.power !== null ? BigInt(object.power.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseValidatorUpdate();
    if (object.pub_key !== void 0 && object.pub_key !== null) {
      message.pubKey = PublicKey.fromAmino(object.pub_key);
    }
    if (object.power !== void 0 && object.power !== null) {
      message.power = BigInt(object.power);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.pub_key = message.pubKey ? PublicKey.toAmino(message.pubKey) : void 0;
    obj.power = message.power !== BigInt(0) ? message.power?.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return ValidatorUpdate.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return ValidatorUpdate.decode(message.value);
  },
  toProto(message) {
    return ValidatorUpdate.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.abci.ValidatorUpdate",
      value: ValidatorUpdate.encode(message).finish()
    };
  }
};
function createBaseVoteInfo() {
  return {
    validator: Validator.fromPartial({}),
    signedLastBlock: false
  };
}
const VoteInfo = {
  typeUrl: "/tendermint.abci.VoteInfo",
  encode(message, writer = BinaryWriter.create()) {
    if (message.validator !== void 0) {
      Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
    }
    if (message.signedLastBlock === true) {
      writer.uint32(16).bool(message.signedLastBlock);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseVoteInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = Validator.decode(reader, reader.uint32());
          break;
        case 2:
          message.signedLastBlock = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseVoteInfo();
    message.validator = object.validator !== void 0 && object.validator !== null ? Validator.fromPartial(object.validator) : void 0;
    message.signedLastBlock = object.signedLastBlock ?? false;
    return message;
  },
  fromAmino(object) {
    const message = createBaseVoteInfo();
    if (object.validator !== void 0 && object.validator !== null) {
      message.validator = Validator.fromAmino(object.validator);
    }
    if (object.signed_last_block !== void 0 && object.signed_last_block !== null) {
      message.signedLastBlock = object.signed_last_block;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.validator = message.validator ? Validator.toAmino(message.validator) : void 0;
    obj.signed_last_block = message.signedLastBlock === false ? void 0 : message.signedLastBlock;
    return obj;
  },
  fromAminoMsg(object) {
    return VoteInfo.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return VoteInfo.decode(message.value);
  },
  toProto(message) {
    return VoteInfo.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.abci.VoteInfo",
      value: VoteInfo.encode(message).finish()
    };
  }
};
function createBaseExtendedVoteInfo() {
  return {
    validator: Validator.fromPartial({}),
    signedLastBlock: false,
    voteExtension: new Uint8Array()
  };
}
const ExtendedVoteInfo = {
  typeUrl: "/tendermint.abci.ExtendedVoteInfo",
  encode(message, writer = BinaryWriter.create()) {
    if (message.validator !== void 0) {
      Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
    }
    if (message.signedLastBlock === true) {
      writer.uint32(16).bool(message.signedLastBlock);
    }
    if (message.voteExtension.length !== 0) {
      writer.uint32(26).bytes(message.voteExtension);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseExtendedVoteInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = Validator.decode(reader, reader.uint32());
          break;
        case 2:
          message.signedLastBlock = reader.bool();
          break;
        case 3:
          message.voteExtension = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseExtendedVoteInfo();
    message.validator = object.validator !== void 0 && object.validator !== null ? Validator.fromPartial(object.validator) : void 0;
    message.signedLastBlock = object.signedLastBlock ?? false;
    message.voteExtension = object.voteExtension ?? new Uint8Array();
    return message;
  },
  fromAmino(object) {
    const message = createBaseExtendedVoteInfo();
    if (object.validator !== void 0 && object.validator !== null) {
      message.validator = Validator.fromAmino(object.validator);
    }
    if (object.signed_last_block !== void 0 && object.signed_last_block !== null) {
      message.signedLastBlock = object.signed_last_block;
    }
    if (object.vote_extension !== void 0 && object.vote_extension !== null) {
      message.voteExtension = bytesFromBase64(object.vote_extension);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.validator = message.validator ? Validator.toAmino(message.validator) : void 0;
    obj.signed_last_block = message.signedLastBlock === false ? void 0 : message.signedLastBlock;
    obj.vote_extension = message.voteExtension ? base64FromBytes(message.voteExtension) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return ExtendedVoteInfo.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return ExtendedVoteInfo.decode(message.value);
  },
  toProto(message) {
    return ExtendedVoteInfo.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.abci.ExtendedVoteInfo",
      value: ExtendedVoteInfo.encode(message).finish()
    };
  }
};
function createBaseMisbehavior() {
  return {
    type: 0,
    validator: Validator.fromPartial({}),
    height: BigInt(0),
    time: /* @__PURE__ */ new Date(),
    totalVotingPower: BigInt(0)
  };
}
const Misbehavior = {
  typeUrl: "/tendermint.abci.Misbehavior",
  encode(message, writer = BinaryWriter.create()) {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.validator !== void 0) {
      Validator.encode(message.validator, writer.uint32(18).fork()).ldelim();
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(24).int64(message.height);
    }
    if (message.time !== void 0) {
      Timestamp.encode(toTimestamp(message.time), writer.uint32(34).fork()).ldelim();
    }
    if (message.totalVotingPower !== BigInt(0)) {
      writer.uint32(40).int64(message.totalVotingPower);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMisbehavior();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32();
          break;
        case 2:
          message.validator = Validator.decode(reader, reader.uint32());
          break;
        case 3:
          message.height = reader.int64();
          break;
        case 4:
          message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 5:
          message.totalVotingPower = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMisbehavior();
    message.type = object.type ?? 0;
    message.validator = object.validator !== void 0 && object.validator !== null ? Validator.fromPartial(object.validator) : void 0;
    message.height = object.height !== void 0 && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.time = object.time ?? void 0;
    message.totalVotingPower = object.totalVotingPower !== void 0 && object.totalVotingPower !== null ? BigInt(object.totalVotingPower.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseMisbehavior();
    if (object.type !== void 0 && object.type !== null) {
      message.type = object.type;
    }
    if (object.validator !== void 0 && object.validator !== null) {
      message.validator = Validator.fromAmino(object.validator);
    }
    if (object.height !== void 0 && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.time !== void 0 && object.time !== null) {
      message.time = fromTimestamp(Timestamp.fromAmino(object.time));
    }
    if (object.total_voting_power !== void 0 && object.total_voting_power !== null) {
      message.totalVotingPower = BigInt(object.total_voting_power);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.type = message.type === 0 ? void 0 : message.type;
    obj.validator = message.validator ? Validator.toAmino(message.validator) : void 0;
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : void 0;
    obj.time = message.time ? Timestamp.toAmino(toTimestamp(message.time)) : void 0;
    obj.total_voting_power = message.totalVotingPower !== BigInt(0) ? message.totalVotingPower?.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return Misbehavior.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return Misbehavior.decode(message.value);
  },
  toProto(message) {
    return Misbehavior.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.abci.Misbehavior",
      value: Misbehavior.encode(message).finish()
    };
  }
};
function createBaseSnapshot() {
  return {
    height: BigInt(0),
    format: 0,
    chunks: 0,
    hash: new Uint8Array(),
    metadata: new Uint8Array()
  };
}
const Snapshot = {
  typeUrl: "/tendermint.abci.Snapshot",
  encode(message, writer = BinaryWriter.create()) {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).uint64(message.height);
    }
    if (message.format !== 0) {
      writer.uint32(16).uint32(message.format);
    }
    if (message.chunks !== 0) {
      writer.uint32(24).uint32(message.chunks);
    }
    if (message.hash.length !== 0) {
      writer.uint32(34).bytes(message.hash);
    }
    if (message.metadata.length !== 0) {
      writer.uint32(42).bytes(message.metadata);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSnapshot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.uint64();
          break;
        case 2:
          message.format = reader.uint32();
          break;
        case 3:
          message.chunks = reader.uint32();
          break;
        case 4:
          message.hash = reader.bytes();
          break;
        case 5:
          message.metadata = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseSnapshot();
    message.height = object.height !== void 0 && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.format = object.format ?? 0;
    message.chunks = object.chunks ?? 0;
    message.hash = object.hash ?? new Uint8Array();
    message.metadata = object.metadata ?? new Uint8Array();
    return message;
  },
  fromAmino(object) {
    const message = createBaseSnapshot();
    if (object.height !== void 0 && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.format !== void 0 && object.format !== null) {
      message.format = object.format;
    }
    if (object.chunks !== void 0 && object.chunks !== null) {
      message.chunks = object.chunks;
    }
    if (object.hash !== void 0 && object.hash !== null) {
      message.hash = bytesFromBase64(object.hash);
    }
    if (object.metadata !== void 0 && object.metadata !== null) {
      message.metadata = bytesFromBase64(object.metadata);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : void 0;
    obj.format = message.format === 0 ? void 0 : message.format;
    obj.chunks = message.chunks === 0 ? void 0 : message.chunks;
    obj.hash = message.hash ? base64FromBytes(message.hash) : void 0;
    obj.metadata = message.metadata ? base64FromBytes(message.metadata) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return Snapshot.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return Snapshot.decode(message.value);
  },
  toProto(message) {
    return Snapshot.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.abci.Snapshot",
      value: Snapshot.encode(message).finish()
    };
  }
};
export {
  CheckTxType,
  CheckTxTypeAmino,
  CheckTxTypeSDKType,
  CommitInfo,
  Event,
  EventAttribute,
  ExtendedCommitInfo,
  ExtendedVoteInfo,
  Misbehavior,
  MisbehaviorType,
  MisbehaviorTypeAmino,
  MisbehaviorTypeSDKType,
  Request,
  RequestApplySnapshotChunk,
  RequestBeginBlock,
  RequestCheckTx,
  RequestCommit,
  RequestDeliverTx,
  RequestEcho,
  RequestEndBlock,
  RequestFlush,
  RequestInfo,
  RequestInitChain,
  RequestListSnapshots,
  RequestLoadSnapshotChunk,
  RequestOfferSnapshot,
  RequestPrepareProposal,
  RequestProcessProposal,
  RequestQuery,
  Response,
  ResponseApplySnapshotChunk,
  ResponseApplySnapshotChunk_Result,
  ResponseApplySnapshotChunk_ResultAmino,
  ResponseApplySnapshotChunk_ResultSDKType,
  ResponseBeginBlock,
  ResponseCheckTx,
  ResponseCommit,
  ResponseDeliverTx,
  ResponseEcho,
  ResponseEndBlock,
  ResponseException,
  ResponseFlush,
  ResponseInfo,
  ResponseInitChain,
  ResponseListSnapshots,
  ResponseLoadSnapshotChunk,
  ResponseOfferSnapshot,
  ResponseOfferSnapshot_Result,
  ResponseOfferSnapshot_ResultAmino,
  ResponseOfferSnapshot_ResultSDKType,
  ResponsePrepareProposal,
  ResponseProcessProposal,
  ResponseProcessProposal_ProposalStatus,
  ResponseProcessProposal_ProposalStatusAmino,
  ResponseProcessProposal_ProposalStatusSDKType,
  ResponseQuery,
  Snapshot,
  TxResult,
  Validator,
  ValidatorUpdate,
  VoteInfo,
  checkTxTypeFromJSON,
  checkTxTypeToJSON,
  misbehaviorTypeFromJSON,
  misbehaviorTypeToJSON,
  responseApplySnapshotChunk_ResultFromJSON,
  responseApplySnapshotChunk_ResultToJSON,
  responseOfferSnapshot_ResultFromJSON,
  responseOfferSnapshot_ResultToJSON,
  responseProcessProposal_ProposalStatusFromJSON,
  responseProcessProposal_ProposalStatusToJSON
};
