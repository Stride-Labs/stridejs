import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryOracleRequest, QueryOracleResponse, QueryAllOraclesRequest, QueryAllOraclesResponse, QueryActiveOraclesRequest, QueryActiveOraclesResponse, QueryMetricsRequest, QueryMetricsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Query a specific oracle */
  oracle(request: QueryOracleRequest): Promise<QueryOracleResponse>;
  /** Query all oracles */
  allOracles(request?: QueryAllOraclesRequest): Promise<QueryAllOraclesResponse>;
  /**
   * Query oracles with active ffilter:
   * - /oracles/by_active?active=true
   * - /oracles/by_active?active=false
   */
  activeOracles(request: QueryActiveOraclesRequest): Promise<QueryActiveOraclesResponse>;
  /**
   * Query metrics with optional filters
   * 
   * Ex:
   * - /metrics
   * - /metrics?metric_key=X
   * - /metrics?oracle_chain_id=Y
   */
  metrics(request: QueryMetricsRequest): Promise<QueryMetricsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.oracle = this.oracle.bind(this);
    this.allOracles = this.allOracles.bind(this);
    this.activeOracles = this.activeOracles.bind(this);
    this.metrics = this.metrics.bind(this);
  }
  oracle(request: QueryOracleRequest): Promise<QueryOracleResponse> {
    const data = QueryOracleRequest.encode(request).finish();
    const promise = this.rpc.request("stride.icaoracle.Query", "Oracle", data);
    return promise.then(data => QueryOracleResponse.decode(new BinaryReader(data)));
  }
  allOracles(request: QueryAllOraclesRequest = {}): Promise<QueryAllOraclesResponse> {
    const data = QueryAllOraclesRequest.encode(request).finish();
    const promise = this.rpc.request("stride.icaoracle.Query", "AllOracles", data);
    return promise.then(data => QueryAllOraclesResponse.decode(new BinaryReader(data)));
  }
  activeOracles(request: QueryActiveOraclesRequest): Promise<QueryActiveOraclesResponse> {
    const data = QueryActiveOraclesRequest.encode(request).finish();
    const promise = this.rpc.request("stride.icaoracle.Query", "ActiveOracles", data);
    return promise.then(data => QueryActiveOraclesResponse.decode(new BinaryReader(data)));
  }
  metrics(request: QueryMetricsRequest): Promise<QueryMetricsResponse> {
    const data = QueryMetricsRequest.encode(request).finish();
    const promise = this.rpc.request("stride.icaoracle.Query", "Metrics", data);
    return promise.then(data => QueryMetricsResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    oracle(request: QueryOracleRequest): Promise<QueryOracleResponse> {
      return queryService.oracle(request);
    },
    allOracles(request?: QueryAllOraclesRequest): Promise<QueryAllOraclesResponse> {
      return queryService.allOracles(request);
    },
    activeOracles(request: QueryActiveOraclesRequest): Promise<QueryActiveOraclesResponse> {
      return queryService.activeOracles(request);
    },
    metrics(request: QueryMetricsRequest): Promise<QueryMetricsResponse> {
      return queryService.metrics(request);
    }
  };
};