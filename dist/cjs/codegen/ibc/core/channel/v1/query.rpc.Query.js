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
var query_rpc_Query_exports = {};
__export(query_rpc_Query_exports, {
  QueryClientImpl: () => QueryClientImpl,
  createRpcQueryExtension: () => createRpcQueryExtension
});
module.exports = __toCommonJS(query_rpc_Query_exports);
var import_binary = require("../../../../binary");
var import_stargate = require("@cosmjs/stargate");
var import_query = require("./query");
class QueryClientImpl {
  rpc;
  constructor(rpc) {
    this.rpc = rpc;
    this.channel = this.channel.bind(this);
    this.channels = this.channels.bind(this);
    this.connectionChannels = this.connectionChannels.bind(this);
    this.channelClientState = this.channelClientState.bind(this);
    this.channelConsensusState = this.channelConsensusState.bind(this);
    this.packetCommitment = this.packetCommitment.bind(this);
    this.packetCommitments = this.packetCommitments.bind(this);
    this.packetReceipt = this.packetReceipt.bind(this);
    this.packetAcknowledgement = this.packetAcknowledgement.bind(this);
    this.packetAcknowledgements = this.packetAcknowledgements.bind(this);
    this.unreceivedPackets = this.unreceivedPackets.bind(this);
    this.unreceivedAcks = this.unreceivedAcks.bind(this);
    this.nextSequenceReceive = this.nextSequenceReceive.bind(this);
    this.nextSequenceSend = this.nextSequenceSend.bind(this);
    this.upgradeError = this.upgradeError.bind(this);
    this.upgrade = this.upgrade.bind(this);
    this.channelParams = this.channelParams.bind(this);
  }
  channel(request) {
    const data = import_query.QueryChannelRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "Channel", data);
    return promise.then((data2) => import_query.QueryChannelResponse.decode(new import_binary.BinaryReader(data2)));
  }
  channels(request = {
    pagination: void 0
  }) {
    const data = import_query.QueryChannelsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "Channels", data);
    return promise.then((data2) => import_query.QueryChannelsResponse.decode(new import_binary.BinaryReader(data2)));
  }
  connectionChannels(request) {
    const data = import_query.QueryConnectionChannelsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "ConnectionChannels", data);
    return promise.then((data2) => import_query.QueryConnectionChannelsResponse.decode(new import_binary.BinaryReader(data2)));
  }
  channelClientState(request) {
    const data = import_query.QueryChannelClientStateRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "ChannelClientState", data);
    return promise.then((data2) => import_query.QueryChannelClientStateResponse.decode(new import_binary.BinaryReader(data2)));
  }
  channelConsensusState(request) {
    const data = import_query.QueryChannelConsensusStateRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "ChannelConsensusState", data);
    return promise.then((data2) => import_query.QueryChannelConsensusStateResponse.decode(new import_binary.BinaryReader(data2)));
  }
  packetCommitment(request) {
    const data = import_query.QueryPacketCommitmentRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "PacketCommitment", data);
    return promise.then((data2) => import_query.QueryPacketCommitmentResponse.decode(new import_binary.BinaryReader(data2)));
  }
  packetCommitments(request) {
    const data = import_query.QueryPacketCommitmentsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "PacketCommitments", data);
    return promise.then((data2) => import_query.QueryPacketCommitmentsResponse.decode(new import_binary.BinaryReader(data2)));
  }
  packetReceipt(request) {
    const data = import_query.QueryPacketReceiptRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "PacketReceipt", data);
    return promise.then((data2) => import_query.QueryPacketReceiptResponse.decode(new import_binary.BinaryReader(data2)));
  }
  packetAcknowledgement(request) {
    const data = import_query.QueryPacketAcknowledgementRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "PacketAcknowledgement", data);
    return promise.then((data2) => import_query.QueryPacketAcknowledgementResponse.decode(new import_binary.BinaryReader(data2)));
  }
  packetAcknowledgements(request) {
    const data = import_query.QueryPacketAcknowledgementsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "PacketAcknowledgements", data);
    return promise.then((data2) => import_query.QueryPacketAcknowledgementsResponse.decode(new import_binary.BinaryReader(data2)));
  }
  unreceivedPackets(request) {
    const data = import_query.QueryUnreceivedPacketsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "UnreceivedPackets", data);
    return promise.then((data2) => import_query.QueryUnreceivedPacketsResponse.decode(new import_binary.BinaryReader(data2)));
  }
  unreceivedAcks(request) {
    const data = import_query.QueryUnreceivedAcksRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "UnreceivedAcks", data);
    return promise.then((data2) => import_query.QueryUnreceivedAcksResponse.decode(new import_binary.BinaryReader(data2)));
  }
  nextSequenceReceive(request) {
    const data = import_query.QueryNextSequenceReceiveRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "NextSequenceReceive", data);
    return promise.then((data2) => import_query.QueryNextSequenceReceiveResponse.decode(new import_binary.BinaryReader(data2)));
  }
  nextSequenceSend(request) {
    const data = import_query.QueryNextSequenceSendRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "NextSequenceSend", data);
    return promise.then((data2) => import_query.QueryNextSequenceSendResponse.decode(new import_binary.BinaryReader(data2)));
  }
  upgradeError(request) {
    const data = import_query.QueryUpgradeErrorRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "UpgradeError", data);
    return promise.then((data2) => import_query.QueryUpgradeErrorResponse.decode(new import_binary.BinaryReader(data2)));
  }
  upgrade(request) {
    const data = import_query.QueryUpgradeRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "Upgrade", data);
    return promise.then((data2) => import_query.QueryUpgradeResponse.decode(new import_binary.BinaryReader(data2)));
  }
  channelParams(request = {}) {
    const data = import_query.QueryChannelParamsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "ChannelParams", data);
    return promise.then((data2) => import_query.QueryChannelParamsResponse.decode(new import_binary.BinaryReader(data2)));
  }
}
const createRpcQueryExtension = (base) => {
  const rpc = (0, import_stargate.createProtobufRpcClient)(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    channel(request) {
      return queryService.channel(request);
    },
    channels(request) {
      return queryService.channels(request);
    },
    connectionChannels(request) {
      return queryService.connectionChannels(request);
    },
    channelClientState(request) {
      return queryService.channelClientState(request);
    },
    channelConsensusState(request) {
      return queryService.channelConsensusState(request);
    },
    packetCommitment(request) {
      return queryService.packetCommitment(request);
    },
    packetCommitments(request) {
      return queryService.packetCommitments(request);
    },
    packetReceipt(request) {
      return queryService.packetReceipt(request);
    },
    packetAcknowledgement(request) {
      return queryService.packetAcknowledgement(request);
    },
    packetAcknowledgements(request) {
      return queryService.packetAcknowledgements(request);
    },
    unreceivedPackets(request) {
      return queryService.unreceivedPackets(request);
    },
    unreceivedAcks(request) {
      return queryService.unreceivedAcks(request);
    },
    nextSequenceReceive(request) {
      return queryService.nextSequenceReceive(request);
    },
    nextSequenceSend(request) {
      return queryService.nextSequenceSend(request);
    },
    upgradeError(request) {
      return queryService.upgradeError(request);
    },
    upgrade(request) {
      return queryService.upgrade(request);
    },
    channelParams(request) {
      return queryService.channelParams(request);
    }
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  QueryClientImpl,
  createRpcQueryExtension
});
