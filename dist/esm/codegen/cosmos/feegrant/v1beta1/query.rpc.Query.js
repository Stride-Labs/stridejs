import { BinaryReader } from "../../../binary";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryAllowanceRequest, QueryAllowanceResponse, QueryAllowancesRequest, QueryAllowancesResponse, QueryAllowancesByGranterRequest, QueryAllowancesByGranterResponse } from "./query";
class QueryClientImpl {
  rpc;
  constructor(rpc) {
    this.rpc = rpc;
    this.allowance = this.allowance.bind(this);
    this.allowances = this.allowances.bind(this);
    this.allowancesByGranter = this.allowancesByGranter.bind(this);
  }
  allowance(request) {
    const data = QueryAllowanceRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.feegrant.v1beta1.Query", "Allowance", data);
    return promise.then((data2) => QueryAllowanceResponse.decode(new BinaryReader(data2)));
  }
  allowances(request) {
    const data = QueryAllowancesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.feegrant.v1beta1.Query", "Allowances", data);
    return promise.then((data2) => QueryAllowancesResponse.decode(new BinaryReader(data2)));
  }
  allowancesByGranter(request) {
    const data = QueryAllowancesByGranterRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.feegrant.v1beta1.Query", "AllowancesByGranter", data);
    return promise.then((data2) => QueryAllowancesByGranterResponse.decode(new BinaryReader(data2)));
  }
}
const createRpcQueryExtension = (base) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    allowance(request) {
      return queryService.allowance(request);
    },
    allowances(request) {
      return queryService.allowances(request);
    },
    allowancesByGranter(request) {
      return queryService.allowancesByGranter(request);
    }
  };
};
export {
  QueryClientImpl,
  createRpcQueryExtension
};
