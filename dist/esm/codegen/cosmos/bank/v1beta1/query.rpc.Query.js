import { BinaryReader } from "../../../binary";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryBalanceRequest, QueryBalanceResponse, QueryAllBalancesRequest, QueryAllBalancesResponse, QuerySpendableBalancesRequest, QuerySpendableBalancesResponse, QuerySpendableBalanceByDenomRequest, QuerySpendableBalanceByDenomResponse, QueryTotalSupplyRequest, QueryTotalSupplyResponse, QuerySupplyOfRequest, QuerySupplyOfResponse, QueryParamsRequest, QueryParamsResponse, QueryDenomMetadataRequest, QueryDenomMetadataResponse, QueryDenomMetadataByQueryStringRequest, QueryDenomMetadataByQueryStringResponse, QueryDenomsMetadataRequest, QueryDenomsMetadataResponse, QueryDenomOwnersRequest, QueryDenomOwnersResponse, QueryDenomOwnersByQueryRequest, QueryDenomOwnersByQueryResponse, QuerySendEnabledRequest, QuerySendEnabledResponse } from "./query";
class QueryClientImpl {
  rpc;
  constructor(rpc) {
    this.rpc = rpc;
    this.balance = this.balance.bind(this);
    this.allBalances = this.allBalances.bind(this);
    this.spendableBalances = this.spendableBalances.bind(this);
    this.spendableBalanceByDenom = this.spendableBalanceByDenom.bind(this);
    this.totalSupply = this.totalSupply.bind(this);
    this.supplyOf = this.supplyOf.bind(this);
    this.params = this.params.bind(this);
    this.denomMetadata = this.denomMetadata.bind(this);
    this.denomMetadataByQueryString = this.denomMetadataByQueryString.bind(this);
    this.denomsMetadata = this.denomsMetadata.bind(this);
    this.denomOwners = this.denomOwners.bind(this);
    this.denomOwnersByQuery = this.denomOwnersByQuery.bind(this);
    this.sendEnabled = this.sendEnabled.bind(this);
  }
  balance(request) {
    const data = QueryBalanceRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "Balance", data);
    return promise.then((data2) => QueryBalanceResponse.decode(new BinaryReader(data2)));
  }
  allBalances(request) {
    const data = QueryAllBalancesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "AllBalances", data);
    return promise.then((data2) => QueryAllBalancesResponse.decode(new BinaryReader(data2)));
  }
  spendableBalances(request) {
    const data = QuerySpendableBalancesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "SpendableBalances", data);
    return promise.then((data2) => QuerySpendableBalancesResponse.decode(new BinaryReader(data2)));
  }
  spendableBalanceByDenom(request) {
    const data = QuerySpendableBalanceByDenomRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "SpendableBalanceByDenom", data);
    return promise.then((data2) => QuerySpendableBalanceByDenomResponse.decode(new BinaryReader(data2)));
  }
  totalSupply(request = {
    pagination: void 0
  }) {
    const data = QueryTotalSupplyRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "TotalSupply", data);
    return promise.then((data2) => QueryTotalSupplyResponse.decode(new BinaryReader(data2)));
  }
  supplyOf(request) {
    const data = QuerySupplyOfRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "SupplyOf", data);
    return promise.then((data2) => QuerySupplyOfResponse.decode(new BinaryReader(data2)));
  }
  params(request = {}) {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "Params", data);
    return promise.then((data2) => QueryParamsResponse.decode(new BinaryReader(data2)));
  }
  denomMetadata(request) {
    const data = QueryDenomMetadataRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "DenomMetadata", data);
    return promise.then((data2) => QueryDenomMetadataResponse.decode(new BinaryReader(data2)));
  }
  denomMetadataByQueryString(request) {
    const data = QueryDenomMetadataByQueryStringRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "DenomMetadataByQueryString", data);
    return promise.then((data2) => QueryDenomMetadataByQueryStringResponse.decode(new BinaryReader(data2)));
  }
  denomsMetadata(request = {
    pagination: void 0
  }) {
    const data = QueryDenomsMetadataRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "DenomsMetadata", data);
    return promise.then((data2) => QueryDenomsMetadataResponse.decode(new BinaryReader(data2)));
  }
  denomOwners(request) {
    const data = QueryDenomOwnersRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "DenomOwners", data);
    return promise.then((data2) => QueryDenomOwnersResponse.decode(new BinaryReader(data2)));
  }
  denomOwnersByQuery(request) {
    const data = QueryDenomOwnersByQueryRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "DenomOwnersByQuery", data);
    return promise.then((data2) => QueryDenomOwnersByQueryResponse.decode(new BinaryReader(data2)));
  }
  sendEnabled(request) {
    const data = QuerySendEnabledRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "SendEnabled", data);
    return promise.then((data2) => QuerySendEnabledResponse.decode(new BinaryReader(data2)));
  }
}
const createRpcQueryExtension = (base) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    balance(request) {
      return queryService.balance(request);
    },
    allBalances(request) {
      return queryService.allBalances(request);
    },
    spendableBalances(request) {
      return queryService.spendableBalances(request);
    },
    spendableBalanceByDenom(request) {
      return queryService.spendableBalanceByDenom(request);
    },
    totalSupply(request) {
      return queryService.totalSupply(request);
    },
    supplyOf(request) {
      return queryService.supplyOf(request);
    },
    params(request) {
      return queryService.params(request);
    },
    denomMetadata(request) {
      return queryService.denomMetadata(request);
    },
    denomMetadataByQueryString(request) {
      return queryService.denomMetadataByQueryString(request);
    },
    denomsMetadata(request) {
      return queryService.denomsMetadata(request);
    },
    denomOwners(request) {
      return queryService.denomOwners(request);
    },
    denomOwnersByQuery(request) {
      return queryService.denomOwnersByQuery(request);
    },
    sendEnabled(request) {
      return queryService.sendEnabled(request);
    }
  };
};
export {
  QueryClientImpl,
  createRpcQueryExtension
};
