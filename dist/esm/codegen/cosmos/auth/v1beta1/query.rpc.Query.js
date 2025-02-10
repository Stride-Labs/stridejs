import { BinaryReader } from "../../../binary";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryAccountsRequest, QueryAccountsResponse, QueryAccountRequest, QueryAccountResponse, QueryAccountAddressByIDRequest, QueryAccountAddressByIDResponse, QueryParamsRequest, QueryParamsResponse, QueryModuleAccountsRequest, QueryModuleAccountsResponse, QueryModuleAccountByNameRequest, QueryModuleAccountByNameResponse, Bech32PrefixRequest, Bech32PrefixResponse, AddressBytesToStringRequest, AddressBytesToStringResponse, AddressStringToBytesRequest, AddressStringToBytesResponse, QueryAccountInfoRequest, QueryAccountInfoResponse } from "./query";
class QueryClientImpl {
  rpc;
  constructor(rpc) {
    this.rpc = rpc;
    this.accounts = this.accounts.bind(this);
    this.account = this.account.bind(this);
    this.accountAddressByID = this.accountAddressByID.bind(this);
    this.params = this.params.bind(this);
    this.moduleAccounts = this.moduleAccounts.bind(this);
    this.moduleAccountByName = this.moduleAccountByName.bind(this);
    this.bech32Prefix = this.bech32Prefix.bind(this);
    this.addressBytesToString = this.addressBytesToString.bind(this);
    this.addressStringToBytes = this.addressStringToBytes.bind(this);
    this.accountInfo = this.accountInfo.bind(this);
  }
  accounts(request = {
    pagination: void 0
  }) {
    const data = QueryAccountsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "Accounts", data);
    return promise.then((data2) => QueryAccountsResponse.decode(new BinaryReader(data2)));
  }
  account(request) {
    const data = QueryAccountRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "Account", data);
    return promise.then((data2) => QueryAccountResponse.decode(new BinaryReader(data2)));
  }
  accountAddressByID(request) {
    const data = QueryAccountAddressByIDRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "AccountAddressByID", data);
    return promise.then((data2) => QueryAccountAddressByIDResponse.decode(new BinaryReader(data2)));
  }
  params(request = {}) {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "Params", data);
    return promise.then((data2) => QueryParamsResponse.decode(new BinaryReader(data2)));
  }
  moduleAccounts(request = {}) {
    const data = QueryModuleAccountsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "ModuleAccounts", data);
    return promise.then((data2) => QueryModuleAccountsResponse.decode(new BinaryReader(data2)));
  }
  moduleAccountByName(request) {
    const data = QueryModuleAccountByNameRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "ModuleAccountByName", data);
    return promise.then((data2) => QueryModuleAccountByNameResponse.decode(new BinaryReader(data2)));
  }
  bech32Prefix(request = {}) {
    const data = Bech32PrefixRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "Bech32Prefix", data);
    return promise.then((data2) => Bech32PrefixResponse.decode(new BinaryReader(data2)));
  }
  addressBytesToString(request) {
    const data = AddressBytesToStringRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "AddressBytesToString", data);
    return promise.then((data2) => AddressBytesToStringResponse.decode(new BinaryReader(data2)));
  }
  addressStringToBytes(request) {
    const data = AddressStringToBytesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "AddressStringToBytes", data);
    return promise.then((data2) => AddressStringToBytesResponse.decode(new BinaryReader(data2)));
  }
  accountInfo(request) {
    const data = QueryAccountInfoRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "AccountInfo", data);
    return promise.then((data2) => QueryAccountInfoResponse.decode(new BinaryReader(data2)));
  }
}
const createRpcQueryExtension = (base) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    accounts(request) {
      return queryService.accounts(request);
    },
    account(request) {
      return queryService.account(request);
    },
    accountAddressByID(request) {
      return queryService.accountAddressByID(request);
    },
    params(request) {
      return queryService.params(request);
    },
    moduleAccounts(request) {
      return queryService.moduleAccounts(request);
    },
    moduleAccountByName(request) {
      return queryService.moduleAccountByName(request);
    },
    bech32Prefix(request) {
      return queryService.bech32Prefix(request);
    },
    addressBytesToString(request) {
      return queryService.addressBytesToString(request);
    },
    addressStringToBytes(request) {
      return queryService.addressStringToBytes(request);
    },
    accountInfo(request) {
      return queryService.accountInfo(request);
    }
  };
};
export {
  QueryClientImpl,
  createRpcQueryExtension
};
