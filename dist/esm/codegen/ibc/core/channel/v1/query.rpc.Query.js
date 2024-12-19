import { BinaryReader } from "../../../../binary";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryChannelRequest, QueryChannelResponse, QueryChannelsRequest, QueryChannelsResponse, QueryConnectionChannelsRequest, QueryConnectionChannelsResponse, QueryChannelClientStateRequest, QueryChannelClientStateResponse, QueryChannelConsensusStateRequest, QueryChannelConsensusStateResponse, QueryPacketCommitmentRequest, QueryPacketCommitmentResponse, QueryPacketCommitmentsRequest, QueryPacketCommitmentsResponse, QueryPacketReceiptRequest, QueryPacketReceiptResponse, QueryPacketAcknowledgementRequest, QueryPacketAcknowledgementResponse, QueryPacketAcknowledgementsRequest, QueryPacketAcknowledgementsResponse, QueryUnreceivedPacketsRequest, QueryUnreceivedPacketsResponse, QueryUnreceivedAcksRequest, QueryUnreceivedAcksResponse, QueryNextSequenceReceiveRequest, QueryNextSequenceReceiveResponse } from "./query";
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
  }
  channel(request) {
    const data = QueryChannelRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "Channel", data);
    return promise.then((data2) => QueryChannelResponse.decode(new BinaryReader(data2)));
  }
  channels(request = {
    pagination: void 0
  }) {
    const data = QueryChannelsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "Channels", data);
    return promise.then((data2) => QueryChannelsResponse.decode(new BinaryReader(data2)));
  }
  connectionChannels(request) {
    const data = QueryConnectionChannelsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "ConnectionChannels", data);
    return promise.then((data2) => QueryConnectionChannelsResponse.decode(new BinaryReader(data2)));
  }
  channelClientState(request) {
    const data = QueryChannelClientStateRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "ChannelClientState", data);
    return promise.then((data2) => QueryChannelClientStateResponse.decode(new BinaryReader(data2)));
  }
  channelConsensusState(request) {
    const data = QueryChannelConsensusStateRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "ChannelConsensusState", data);
    return promise.then((data2) => QueryChannelConsensusStateResponse.decode(new BinaryReader(data2)));
  }
  packetCommitment(request) {
    const data = QueryPacketCommitmentRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "PacketCommitment", data);
    return promise.then((data2) => QueryPacketCommitmentResponse.decode(new BinaryReader(data2)));
  }
  packetCommitments(request) {
    const data = QueryPacketCommitmentsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "PacketCommitments", data);
    return promise.then((data2) => QueryPacketCommitmentsResponse.decode(new BinaryReader(data2)));
  }
  packetReceipt(request) {
    const data = QueryPacketReceiptRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "PacketReceipt", data);
    return promise.then((data2) => QueryPacketReceiptResponse.decode(new BinaryReader(data2)));
  }
  packetAcknowledgement(request) {
    const data = QueryPacketAcknowledgementRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "PacketAcknowledgement", data);
    return promise.then((data2) => QueryPacketAcknowledgementResponse.decode(new BinaryReader(data2)));
  }
  packetAcknowledgements(request) {
    const data = QueryPacketAcknowledgementsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "PacketAcknowledgements", data);
    return promise.then((data2) => QueryPacketAcknowledgementsResponse.decode(new BinaryReader(data2)));
  }
  unreceivedPackets(request) {
    const data = QueryUnreceivedPacketsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "UnreceivedPackets", data);
    return promise.then((data2) => QueryUnreceivedPacketsResponse.decode(new BinaryReader(data2)));
  }
  unreceivedAcks(request) {
    const data = QueryUnreceivedAcksRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "UnreceivedAcks", data);
    return promise.then((data2) => QueryUnreceivedAcksResponse.decode(new BinaryReader(data2)));
  }
  nextSequenceReceive(request) {
    const data = QueryNextSequenceReceiveRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "NextSequenceReceive", data);
    return promise.then((data2) => QueryNextSequenceReceiveResponse.decode(new BinaryReader(data2)));
  }
}
const createRpcQueryExtension = (base) => {
  const rpc = createProtobufRpcClient(base);
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
    }
  };
};
export {
  QueryClientImpl,
  createRpcQueryExtension
};
