import { BinaryReader } from "../../../binary";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryAccountRequest, AccountResponse, QueryAccountsRequest, AccountsResponse, QueryDisabledListRequest, DisabledListResponse } from "./query";
class QueryClientImpl {
  rpc;
  constructor(rpc) {
    this.rpc = rpc;
    this.account = this.account.bind(this);
    this.accounts = this.accounts.bind(this);
    this.disabledList = this.disabledList.bind(this);
  }
  account(request) {
    const data = QueryAccountRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.circuit.v1.Query", "Account", data);
    return promise.then((data2) => AccountResponse.decode(new BinaryReader(data2)));
  }
  accounts(request = {
    pagination: void 0
  }) {
    const data = QueryAccountsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.circuit.v1.Query", "Accounts", data);
    return promise.then((data2) => AccountsResponse.decode(new BinaryReader(data2)));
  }
  disabledList(request = {}) {
    const data = QueryDisabledListRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.circuit.v1.Query", "DisabledList", data);
    return promise.then((data2) => DisabledListResponse.decode(new BinaryReader(data2)));
  }
}
const createRpcQueryExtension = (base) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    account(request) {
      return queryService.account(request);
    },
    accounts(request) {
      return queryService.accounts(request);
    },
    disabledList(request) {
      return queryService.disabledList(request);
    }
  };
};
export {
  QueryClientImpl,
  createRpcQueryExtension
};
