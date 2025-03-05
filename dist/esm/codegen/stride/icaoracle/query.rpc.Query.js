import { BinaryReader } from "../../binary";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryOracleRequest, QueryOracleResponse, QueryAllOraclesRequest, QueryAllOraclesResponse, QueryActiveOraclesRequest, QueryActiveOraclesResponse, QueryMetricsRequest, QueryMetricsResponse } from "./query";
class QueryClientImpl {
  rpc;
  constructor(rpc) {
    this.rpc = rpc;
    this.oracle = this.oracle.bind(this);
    this.allOracles = this.allOracles.bind(this);
    this.activeOracles = this.activeOracles.bind(this);
    this.metrics = this.metrics.bind(this);
  }
  oracle(request) {
    const data = QueryOracleRequest.encode(request).finish();
    const promise = this.rpc.request("stride.icaoracle.Query", "Oracle", data);
    return promise.then((data2) => QueryOracleResponse.decode(new BinaryReader(data2)));
  }
  allOracles(request = {}) {
    const data = QueryAllOraclesRequest.encode(request).finish();
    const promise = this.rpc.request("stride.icaoracle.Query", "AllOracles", data);
    return promise.then((data2) => QueryAllOraclesResponse.decode(new BinaryReader(data2)));
  }
  activeOracles(request) {
    const data = QueryActiveOraclesRequest.encode(request).finish();
    const promise = this.rpc.request("stride.icaoracle.Query", "ActiveOracles", data);
    return promise.then((data2) => QueryActiveOraclesResponse.decode(new BinaryReader(data2)));
  }
  metrics(request) {
    const data = QueryMetricsRequest.encode(request).finish();
    const promise = this.rpc.request("stride.icaoracle.Query", "Metrics", data);
    return promise.then((data2) => QueryMetricsResponse.decode(new BinaryReader(data2)));
  }
}
const createRpcQueryExtension = (base) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    oracle(request) {
      return queryService.oracle(request);
    },
    allOracles(request) {
      return queryService.allOracles(request);
    },
    activeOracles(request) {
      return queryService.activeOracles(request);
    },
    metrics(request) {
      return queryService.metrics(request);
    }
  };
};
export {
  QueryClientImpl,
  createRpcQueryExtension
};
