import { Rpc } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../react-query";
import { useQuery } from "@tanstack/react-query";
import { QueryParamsRequest, QueryParamsResponse, QueryGetValidatorsRequest, QueryGetValidatorsResponse, QueryGetICAAccountRequest, QueryGetICAAccountResponse, QueryGetHostZoneRequest, QueryGetHostZoneResponse, QueryAllHostZoneRequest, QueryAllHostZoneResponse, QueryModuleAddressRequest, QueryModuleAddressResponse, QueryInterchainAccountFromAddressRequest, QueryInterchainAccountFromAddressResponse, QueryGetEpochTrackerRequest, QueryGetEpochTrackerResponse, QueryAllEpochTrackerRequest, QueryAllEpochTrackerResponse } from "./query";
/** Query defines the gRPC querier service. */

export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a Validator by host zone. */

  validators(request: QueryGetValidatorsRequest): Promise<QueryGetValidatorsResponse>;
  /** Queries a ICAAccount by index. */

  iCAAccount(request?: QueryGetICAAccountRequest): Promise<QueryGetICAAccountResponse>;
  /** Queries a HostZone by id. */

  hostZone(request: QueryGetHostZoneRequest): Promise<QueryGetHostZoneResponse>;
  /** Queries a list of HostZone items. */

  hostZoneAll(request?: QueryAllHostZoneRequest): Promise<QueryAllHostZoneResponse>;
  /** Queries a list of ModuleAddress items. */

  moduleAddress(request: QueryModuleAddressRequest): Promise<QueryModuleAddressResponse>;
  /**
   * QueryInterchainAccountFromAddress returns the interchain account for given
   * owner address on a given connection pair
   */

  interchainAccountFromAddress(request: QueryInterchainAccountFromAddressRequest): Promise<QueryInterchainAccountFromAddressResponse>;
  /** Queries a EpochTracker by index. */

  epochTracker(request: QueryGetEpochTrackerRequest): Promise<QueryGetEpochTrackerResponse>;
  /** Queries a list of EpochTracker items. */

  epochTrackerAll(request?: QueryAllEpochTrackerRequest): Promise<QueryAllEpochTrackerResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.validators = this.validators.bind(this);
    this.iCAAccount = this.iCAAccount.bind(this);
    this.hostZone = this.hostZone.bind(this);
    this.hostZoneAll = this.hostZoneAll.bind(this);
    this.moduleAddress = this.moduleAddress.bind(this);
    this.interchainAccountFromAddress = this.interchainAccountFromAddress.bind(this);
    this.epochTracker = this.epochTracker.bind(this);
    this.epochTrackerAll = this.epochTrackerAll.bind(this);
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

  iCAAccount(request: QueryGetICAAccountRequest = {}): Promise<QueryGetICAAccountResponse> {
    const data = QueryGetICAAccountRequest.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Query", "ICAAccount", data);
    return promise.then(data => QueryGetICAAccountResponse.decode(new _m0.Reader(data)));
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

  epochTrackerAll(request: QueryAllEpochTrackerRequest = {
    pagination: undefined
  }): Promise<QueryAllEpochTrackerResponse> {
    const data = QueryAllEpochTrackerRequest.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Query", "EpochTrackerAll", data);
    return promise.then(data => QueryAllEpochTrackerResponse.decode(new _m0.Reader(data)));
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

    iCAAccount(request?: QueryGetICAAccountRequest): Promise<QueryGetICAAccountResponse> {
      return queryService.iCAAccount(request);
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
    }

  };
};
export interface UseParamsQuery<TData> extends ReactQueryParams<QueryParamsResponse, TData> {
  request?: QueryParamsRequest;
}
export interface UseValidatorsQuery<TData> extends ReactQueryParams<QueryGetValidatorsResponse, TData> {
  request: QueryGetValidatorsRequest;
}
export interface UseICAAccountQuery<TData> extends ReactQueryParams<QueryGetICAAccountResponse, TData> {
  request?: QueryGetICAAccountRequest;
}
export interface UseHostZoneQuery<TData> extends ReactQueryParams<QueryGetHostZoneResponse, TData> {
  request: QueryGetHostZoneRequest;
}
export interface UseHostZoneAllQuery<TData> extends ReactQueryParams<QueryAllHostZoneResponse, TData> {
  request?: QueryAllHostZoneRequest;
}
export interface UseModuleAddressQuery<TData> extends ReactQueryParams<QueryModuleAddressResponse, TData> {
  request: QueryModuleAddressRequest;
}
export interface UseInterchainAccountFromAddressQuery<TData> extends ReactQueryParams<QueryInterchainAccountFromAddressResponse, TData> {
  request: QueryInterchainAccountFromAddressRequest;
}
export interface UseEpochTrackerQuery<TData> extends ReactQueryParams<QueryGetEpochTrackerResponse, TData> {
  request: QueryGetEpochTrackerRequest;
}
export interface UseEpochTrackerAllQuery<TData> extends ReactQueryParams<QueryAllEpochTrackerResponse, TData> {
  request?: QueryAllEpochTrackerRequest;
}

const _queryClients: WeakMap<ProtobufRpcClient, QueryClientImpl> = new WeakMap();

const getQueryService = (rpc: ProtobufRpcClient | undefined): QueryClientImpl | undefined => {
  if (!rpc) return;

  if (_queryClients.has(rpc)) {
    return _queryClients.get(rpc);
  }

  const queryService = new QueryClientImpl(rpc);

  _queryClients.set(rpc, queryService);

  return queryService;
};

export const createRpcQueryHooks = (rpc: ProtobufRpcClient | undefined) => {
  const queryService = getQueryService(rpc);

  const useParams = <TData = QueryParamsResponse,>({
    request,
    options
  }: UseParamsQuery<TData>) => {
    return useQuery<QueryParamsResponse, Error, TData>(["paramsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.params(request);
    }, options);
  };

  const useValidators = <TData = QueryGetValidatorsResponse,>({
    request,
    options
  }: UseValidatorsQuery<TData>) => {
    return useQuery<QueryGetValidatorsResponse, Error, TData>(["validatorsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.validators(request);
    }, options);
  };

  const useICAAccount = <TData = QueryGetICAAccountResponse,>({
    request,
    options
  }: UseICAAccountQuery<TData>) => {
    return useQuery<QueryGetICAAccountResponse, Error, TData>(["iCAAccountQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.iCAAccount(request);
    }, options);
  };

  const useHostZone = <TData = QueryGetHostZoneResponse,>({
    request,
    options
  }: UseHostZoneQuery<TData>) => {
    return useQuery<QueryGetHostZoneResponse, Error, TData>(["hostZoneQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.hostZone(request);
    }, options);
  };

  const useHostZoneAll = <TData = QueryAllHostZoneResponse,>({
    request,
    options
  }: UseHostZoneAllQuery<TData>) => {
    return useQuery<QueryAllHostZoneResponse, Error, TData>(["hostZoneAllQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.hostZoneAll(request);
    }, options);
  };

  const useModuleAddress = <TData = QueryModuleAddressResponse,>({
    request,
    options
  }: UseModuleAddressQuery<TData>) => {
    return useQuery<QueryModuleAddressResponse, Error, TData>(["moduleAddressQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.moduleAddress(request);
    }, options);
  };

  const useInterchainAccountFromAddress = <TData = QueryInterchainAccountFromAddressResponse,>({
    request,
    options
  }: UseInterchainAccountFromAddressQuery<TData>) => {
    return useQuery<QueryInterchainAccountFromAddressResponse, Error, TData>(["interchainAccountFromAddressQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.interchainAccountFromAddress(request);
    }, options);
  };

  const useEpochTracker = <TData = QueryGetEpochTrackerResponse,>({
    request,
    options
  }: UseEpochTrackerQuery<TData>) => {
    return useQuery<QueryGetEpochTrackerResponse, Error, TData>(["epochTrackerQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.epochTracker(request);
    }, options);
  };

  const useEpochTrackerAll = <TData = QueryAllEpochTrackerResponse,>({
    request,
    options
  }: UseEpochTrackerAllQuery<TData>) => {
    return useQuery<QueryAllEpochTrackerResponse, Error, TData>(["epochTrackerAllQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.epochTrackerAll(request);
    }, options);
  };

  return {
    /** Parameters queries the parameters of the module. */
    useParams,

    /** Queries a Validator by host zone. */
    useValidators,

    /** Queries a ICAAccount by index. */
    useICAAccount,

    /** Queries a HostZone by id. */
    useHostZone,

    /** Queries a list of HostZone items. */
    useHostZoneAll,

    /** Queries a list of ModuleAddress items. */
    useModuleAddress,

    /**
     * QueryInterchainAccountFromAddress returns the interchain account for given
     * owner address on a given connection pair
     */
    useInterchainAccountFromAddress,

    /** Queries a EpochTracker by index. */
    useEpochTracker,

    /** Queries a list of EpochTracker items. */
    useEpochTrackerAll
  };
};