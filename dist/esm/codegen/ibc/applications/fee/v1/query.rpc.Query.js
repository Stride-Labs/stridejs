import { BinaryReader } from "../../../../binary";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryIncentivizedPacketsRequest, QueryIncentivizedPacketsResponse, QueryIncentivizedPacketRequest, QueryIncentivizedPacketResponse, QueryIncentivizedPacketsForChannelRequest, QueryIncentivizedPacketsForChannelResponse, QueryTotalRecvFeesRequest, QueryTotalRecvFeesResponse, QueryTotalAckFeesRequest, QueryTotalAckFeesResponse, QueryTotalTimeoutFeesRequest, QueryTotalTimeoutFeesResponse, QueryPayeeRequest, QueryPayeeResponse, QueryCounterpartyPayeeRequest, QueryCounterpartyPayeeResponse, QueryFeeEnabledChannelsRequest, QueryFeeEnabledChannelsResponse, QueryFeeEnabledChannelRequest, QueryFeeEnabledChannelResponse } from "./query";
class QueryClientImpl {
  rpc;
  constructor(rpc) {
    this.rpc = rpc;
    this.incentivizedPackets = this.incentivizedPackets.bind(this);
    this.incentivizedPacket = this.incentivizedPacket.bind(this);
    this.incentivizedPacketsForChannel = this.incentivizedPacketsForChannel.bind(this);
    this.totalRecvFees = this.totalRecvFees.bind(this);
    this.totalAckFees = this.totalAckFees.bind(this);
    this.totalTimeoutFees = this.totalTimeoutFees.bind(this);
    this.payee = this.payee.bind(this);
    this.counterpartyPayee = this.counterpartyPayee.bind(this);
    this.feeEnabledChannels = this.feeEnabledChannels.bind(this);
    this.feeEnabledChannel = this.feeEnabledChannel.bind(this);
  }
  incentivizedPackets(request) {
    const data = QueryIncentivizedPacketsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.fee.v1.Query", "IncentivizedPackets", data);
    return promise.then((data2) => QueryIncentivizedPacketsResponse.decode(new BinaryReader(data2)));
  }
  incentivizedPacket(request) {
    const data = QueryIncentivizedPacketRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.fee.v1.Query", "IncentivizedPacket", data);
    return promise.then((data2) => QueryIncentivizedPacketResponse.decode(new BinaryReader(data2)));
  }
  incentivizedPacketsForChannel(request) {
    const data = QueryIncentivizedPacketsForChannelRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.fee.v1.Query", "IncentivizedPacketsForChannel", data);
    return promise.then((data2) => QueryIncentivizedPacketsForChannelResponse.decode(new BinaryReader(data2)));
  }
  totalRecvFees(request) {
    const data = QueryTotalRecvFeesRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.fee.v1.Query", "TotalRecvFees", data);
    return promise.then((data2) => QueryTotalRecvFeesResponse.decode(new BinaryReader(data2)));
  }
  totalAckFees(request) {
    const data = QueryTotalAckFeesRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.fee.v1.Query", "TotalAckFees", data);
    return promise.then((data2) => QueryTotalAckFeesResponse.decode(new BinaryReader(data2)));
  }
  totalTimeoutFees(request) {
    const data = QueryTotalTimeoutFeesRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.fee.v1.Query", "TotalTimeoutFees", data);
    return promise.then((data2) => QueryTotalTimeoutFeesResponse.decode(new BinaryReader(data2)));
  }
  payee(request) {
    const data = QueryPayeeRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.fee.v1.Query", "Payee", data);
    return promise.then((data2) => QueryPayeeResponse.decode(new BinaryReader(data2)));
  }
  counterpartyPayee(request) {
    const data = QueryCounterpartyPayeeRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.fee.v1.Query", "CounterpartyPayee", data);
    return promise.then((data2) => QueryCounterpartyPayeeResponse.decode(new BinaryReader(data2)));
  }
  feeEnabledChannels(request) {
    const data = QueryFeeEnabledChannelsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.fee.v1.Query", "FeeEnabledChannels", data);
    return promise.then((data2) => QueryFeeEnabledChannelsResponse.decode(new BinaryReader(data2)));
  }
  feeEnabledChannel(request) {
    const data = QueryFeeEnabledChannelRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.fee.v1.Query", "FeeEnabledChannel", data);
    return promise.then((data2) => QueryFeeEnabledChannelResponse.decode(new BinaryReader(data2)));
  }
}
const createRpcQueryExtension = (base) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    incentivizedPackets(request) {
      return queryService.incentivizedPackets(request);
    },
    incentivizedPacket(request) {
      return queryService.incentivizedPacket(request);
    },
    incentivizedPacketsForChannel(request) {
      return queryService.incentivizedPacketsForChannel(request);
    },
    totalRecvFees(request) {
      return queryService.totalRecvFees(request);
    },
    totalAckFees(request) {
      return queryService.totalAckFees(request);
    },
    totalTimeoutFees(request) {
      return queryService.totalTimeoutFees(request);
    },
    payee(request) {
      return queryService.payee(request);
    },
    counterpartyPayee(request) {
      return queryService.counterpartyPayee(request);
    },
    feeEnabledChannels(request) {
      return queryService.feeEnabledChannels(request);
    },
    feeEnabledChannel(request) {
      return queryService.feeEnabledChannel(request);
    }
  };
};
export {
  QueryClientImpl,
  createRpcQueryExtension
};
