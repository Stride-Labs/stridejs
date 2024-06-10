import { Rpc } from "@osmonauts/helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryOracleRequest, QueryOracleResponse, QueryAllOraclesRequest, QueryAllOraclesResponse, QueryActiveOraclesRequest, QueryActiveOraclesResponse, QueryMetricsRequest, QueryMetricsResponse } from "./query";
/** Query defines the RPC service */
export interface Query {
    oracle(request: QueryOracleRequest): Promise<QueryOracleResponse>;
    allOracles(request?: QueryAllOraclesRequest): Promise<QueryAllOraclesResponse>;
    activeOracles(request: QueryActiveOraclesRequest): Promise<QueryActiveOraclesResponse>;
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
