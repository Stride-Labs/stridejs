import { Rpc } from "../../helpers";
import { QueryClient } from "@cosmjs/stargate";
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
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    oracle(request: QueryOracleRequest): Promise<QueryOracleResponse>;
    allOracles(request?: QueryAllOraclesRequest): Promise<QueryAllOraclesResponse>;
    activeOracles(request: QueryActiveOraclesRequest): Promise<QueryActiveOraclesResponse>;
    metrics(request: QueryMetricsRequest): Promise<QueryMetricsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    oracle(request: QueryOracleRequest): Promise<QueryOracleResponse>;
    allOracles(request?: QueryAllOraclesRequest): Promise<QueryAllOraclesResponse>;
    activeOracles(request: QueryActiveOraclesRequest): Promise<QueryActiveOraclesResponse>;
    metrics(request: QueryMetricsRequest): Promise<QueryMetricsResponse>;
};
