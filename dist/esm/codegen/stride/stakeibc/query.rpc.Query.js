import { BinaryReader } from "../../binary";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryGetValidatorsRequest, QueryGetValidatorsResponse, QueryGetHostZoneRequest, QueryGetHostZoneResponse, QueryAllHostZoneRequest, QueryAllHostZoneResponse, QueryModuleAddressRequest, QueryModuleAddressResponse, QueryInterchainAccountFromAddressRequest, QueryInterchainAccountFromAddressResponse, QueryGetEpochTrackerRequest, QueryGetEpochTrackerResponse, QueryAllEpochTrackerRequest, QueryAllEpochTrackerResponse, QueryGetNextPacketSequenceRequest, QueryGetNextPacketSequenceResponse, QueryAddressUnbondings, QueryAddressUnbondingsResponse, QueryAllTradeRoutes, QueryAllTradeRoutesResponse } from "./query";
class QueryClientImpl {
  rpc;
  constructor(rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.validators = this.validators.bind(this);
    this.hostZone = this.hostZone.bind(this);
    this.hostZoneAll = this.hostZoneAll.bind(this);
    this.moduleAddress = this.moduleAddress.bind(this);
    this.interchainAccountFromAddress = this.interchainAccountFromAddress.bind(this);
    this.epochTracker = this.epochTracker.bind(this);
    this.epochTrackerAll = this.epochTrackerAll.bind(this);
    this.nextPacketSequence = this.nextPacketSequence.bind(this);
    this.addressUnbondings = this.addressUnbondings.bind(this);
    this.allTradeRoutes = this.allTradeRoutes.bind(this);
  }
  params(request = {}) {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Query", "Params", data);
    return promise.then((data2) => QueryParamsResponse.decode(new BinaryReader(data2)));
  }
  validators(request) {
    const data = QueryGetValidatorsRequest.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Query", "Validators", data);
    return promise.then((data2) => QueryGetValidatorsResponse.decode(new BinaryReader(data2)));
  }
  hostZone(request) {
    const data = QueryGetHostZoneRequest.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Query", "HostZone", data);
    return promise.then((data2) => QueryGetHostZoneResponse.decode(new BinaryReader(data2)));
  }
  hostZoneAll(request = {
    pagination: void 0
  }) {
    const data = QueryAllHostZoneRequest.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Query", "HostZoneAll", data);
    return promise.then((data2) => QueryAllHostZoneResponse.decode(new BinaryReader(data2)));
  }
  moduleAddress(request) {
    const data = QueryModuleAddressRequest.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Query", "ModuleAddress", data);
    return promise.then((data2) => QueryModuleAddressResponse.decode(new BinaryReader(data2)));
  }
  interchainAccountFromAddress(request) {
    const data = QueryInterchainAccountFromAddressRequest.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Query", "InterchainAccountFromAddress", data);
    return promise.then((data2) => QueryInterchainAccountFromAddressResponse.decode(new BinaryReader(data2)));
  }
  epochTracker(request) {
    const data = QueryGetEpochTrackerRequest.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Query", "EpochTracker", data);
    return promise.then((data2) => QueryGetEpochTrackerResponse.decode(new BinaryReader(data2)));
  }
  epochTrackerAll(request = {}) {
    const data = QueryAllEpochTrackerRequest.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Query", "EpochTrackerAll", data);
    return promise.then((data2) => QueryAllEpochTrackerResponse.decode(new BinaryReader(data2)));
  }
  nextPacketSequence(request) {
    const data = QueryGetNextPacketSequenceRequest.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Query", "NextPacketSequence", data);
    return promise.then((data2) => QueryGetNextPacketSequenceResponse.decode(new BinaryReader(data2)));
  }
  addressUnbondings(request) {
    const data = QueryAddressUnbondings.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Query", "AddressUnbondings", data);
    return promise.then((data2) => QueryAddressUnbondingsResponse.decode(new BinaryReader(data2)));
  }
  allTradeRoutes(request = {}) {
    const data = QueryAllTradeRoutes.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Query", "AllTradeRoutes", data);
    return promise.then((data2) => QueryAllTradeRoutesResponse.decode(new BinaryReader(data2)));
  }
}
const createRpcQueryExtension = (base) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request) {
      return queryService.params(request);
    },
    validators(request) {
      return queryService.validators(request);
    },
    hostZone(request) {
      return queryService.hostZone(request);
    },
    hostZoneAll(request) {
      return queryService.hostZoneAll(request);
    },
    moduleAddress(request) {
      return queryService.moduleAddress(request);
    },
    interchainAccountFromAddress(request) {
      return queryService.interchainAccountFromAddress(request);
    },
    epochTracker(request) {
      return queryService.epochTracker(request);
    },
    epochTrackerAll(request) {
      return queryService.epochTrackerAll(request);
    },
    nextPacketSequence(request) {
      return queryService.nextPacketSequence(request);
    },
    addressUnbondings(request) {
      return queryService.addressUnbondings(request);
    },
    allTradeRoutes(request) {
      return queryService.allTradeRoutes(request);
    }
  };
};
export {
  QueryClientImpl,
  createRpcQueryExtension
};
