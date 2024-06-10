import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryGetValidatorsRequest, QueryGetValidatorsResponse, QueryGetHostZoneRequest, QueryGetHostZoneResponse, QueryAllHostZoneRequest, QueryAllHostZoneResponse, QueryModuleAddressRequest, QueryModuleAddressResponse, QueryInterchainAccountFromAddressRequest, QueryInterchainAccountFromAddressResponse, QueryGetEpochTrackerRequest, QueryGetEpochTrackerResponse, QueryAllEpochTrackerRequest, QueryAllEpochTrackerResponse, QueryGetNextPacketSequenceRequest, QueryGetNextPacketSequenceResponse, QueryAddressUnbondings, QueryAddressUnbondingsResponse, QueryAllTradeRoutes, QueryAllTradeRoutesResponse } from "./query";
/** Query defines the RPC service */

export interface Query {
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /*Parameters queries the parameters of the module.*/

  validators(request: QueryGetValidatorsRequest): Promise<QueryGetValidatorsResponse>;
  /*Queries a Validator by host zone.*/

  hostZone(request: QueryGetHostZoneRequest): Promise<QueryGetHostZoneResponse>;
  /*Queries a HostZone by id.*/

  hostZoneAll(request?: QueryAllHostZoneRequest): Promise<QueryAllHostZoneResponse>;
  /*Queries a list of HostZone items.*/

  moduleAddress(request: QueryModuleAddressRequest): Promise<QueryModuleAddressResponse>;
  /*Queries a list of ModuleAddress items.*/

  interchainAccountFromAddress(request: QueryInterchainAccountFromAddressRequest): Promise<QueryInterchainAccountFromAddressResponse>;
  /*QueryInterchainAccountFromAddress returns the interchain account for given
   owner address on a given connection pair*/

  epochTracker(request: QueryGetEpochTrackerRequest): Promise<QueryGetEpochTrackerResponse>;
  /*Queries a EpochTracker by index.*/

  epochTrackerAll(request?: QueryAllEpochTrackerRequest): Promise<QueryAllEpochTrackerResponse>;
  /*Queries a list of EpochTracker items.*/

  nextPacketSequence(request: QueryGetNextPacketSequenceRequest): Promise<QueryGetNextPacketSequenceResponse>;
  /*Queries the next packet sequence for one for a given channel*/

  addressUnbondings(request: QueryAddressUnbondings): Promise<QueryAddressUnbondingsResponse>;
  /*Queries an address's unbondings*/

  allTradeRoutes(request?: QueryAllTradeRoutes): Promise<QueryAllTradeRoutesResponse>;
  /*Queries all trade routes*/

}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
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

  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  validators(request: QueryGetValidatorsRequest): Promise<QueryGetValidatorsResponse> {
    const data = QueryGetValidatorsRequest.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Query", "Validators", data);
    return promise.then(data => QueryGetValidatorsResponse.decode(new _m0.Reader(data)));
  }

  hostZone(request: QueryGetHostZoneRequest): Promise<QueryGetHostZoneResponse> {
    const data = QueryGetHostZoneRequest.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Query", "HostZone", data);
    return promise.then(data => QueryGetHostZoneResponse.decode(new _m0.Reader(data)));
  }

  hostZoneAll(request: QueryAllHostZoneRequest = {
    pagination: undefined
  }): Promise<QueryAllHostZoneResponse> {
    const data = QueryAllHostZoneRequest.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Query", "HostZoneAll", data);
    return promise.then(data => QueryAllHostZoneResponse.decode(new _m0.Reader(data)));
  }

  moduleAddress(request: QueryModuleAddressRequest): Promise<QueryModuleAddressResponse> {
    const data = QueryModuleAddressRequest.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Query", "ModuleAddress", data);
    return promise.then(data => QueryModuleAddressResponse.decode(new _m0.Reader(data)));
  }

  interchainAccountFromAddress(request: QueryInterchainAccountFromAddressRequest): Promise<QueryInterchainAccountFromAddressResponse> {
    const data = QueryInterchainAccountFromAddressRequest.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Query", "InterchainAccountFromAddress", data);
    return promise.then(data => QueryInterchainAccountFromAddressResponse.decode(new _m0.Reader(data)));
  }

  epochTracker(request: QueryGetEpochTrackerRequest): Promise<QueryGetEpochTrackerResponse> {
    const data = QueryGetEpochTrackerRequest.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Query", "EpochTracker", data);
    return promise.then(data => QueryGetEpochTrackerResponse.decode(new _m0.Reader(data)));
  }

  epochTrackerAll(request: QueryAllEpochTrackerRequest = {}): Promise<QueryAllEpochTrackerResponse> {
    const data = QueryAllEpochTrackerRequest.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Query", "EpochTrackerAll", data);
    return promise.then(data => QueryAllEpochTrackerResponse.decode(new _m0.Reader(data)));
  }

  nextPacketSequence(request: QueryGetNextPacketSequenceRequest): Promise<QueryGetNextPacketSequenceResponse> {
    const data = QueryGetNextPacketSequenceRequest.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Query", "NextPacketSequence", data);
    return promise.then(data => QueryGetNextPacketSequenceResponse.decode(new _m0.Reader(data)));
  }

  addressUnbondings(request: QueryAddressUnbondings): Promise<QueryAddressUnbondingsResponse> {
    const data = QueryAddressUnbondings.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Query", "AddressUnbondings", data);
    return promise.then(data => QueryAddressUnbondingsResponse.decode(new _m0.Reader(data)));
  }

  allTradeRoutes(request: QueryAllTradeRoutes = {}): Promise<QueryAllTradeRoutesResponse> {
    const data = QueryAllTradeRoutes.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Query", "AllTradeRoutes", data);
    return promise.then(data => QueryAllTradeRoutesResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },

    validators(request: QueryGetValidatorsRequest): Promise<QueryGetValidatorsResponse> {
      return queryService.validators(request);
    },

    hostZone(request: QueryGetHostZoneRequest): Promise<QueryGetHostZoneResponse> {
      return queryService.hostZone(request);
    },

    hostZoneAll(request?: QueryAllHostZoneRequest): Promise<QueryAllHostZoneResponse> {
      return queryService.hostZoneAll(request);
    },

    moduleAddress(request: QueryModuleAddressRequest): Promise<QueryModuleAddressResponse> {
      return queryService.moduleAddress(request);
    },

    interchainAccountFromAddress(request: QueryInterchainAccountFromAddressRequest): Promise<QueryInterchainAccountFromAddressResponse> {
      return queryService.interchainAccountFromAddress(request);
    },

    epochTracker(request: QueryGetEpochTrackerRequest): Promise<QueryGetEpochTrackerResponse> {
      return queryService.epochTracker(request);
    },

    epochTrackerAll(request?: QueryAllEpochTrackerRequest): Promise<QueryAllEpochTrackerResponse> {
      return queryService.epochTrackerAll(request);
    },

    nextPacketSequence(request: QueryGetNextPacketSequenceRequest): Promise<QueryGetNextPacketSequenceResponse> {
      return queryService.nextPacketSequence(request);
    },

    addressUnbondings(request: QueryAddressUnbondings): Promise<QueryAddressUnbondingsResponse> {
      return queryService.addressUnbondings(request);
    },

    allTradeRoutes(request?: QueryAllTradeRoutes): Promise<QueryAllTradeRoutesResponse> {
      return queryService.allTradeRoutes(request);
    }

  };
};