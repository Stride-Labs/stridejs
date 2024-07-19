import { LCDClient } from "@cosmology/lcd";
import { QueryOracleRequest, QueryOracleResponseSDKType, QueryAllOraclesRequest, QueryAllOraclesResponseSDKType, QueryActiveOraclesRequest, QueryActiveOraclesResponseSDKType, QueryMetricsRequest, QueryMetricsResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    oracle(params: QueryOracleRequest): Promise<QueryOracleResponseSDKType>;
    allOracles(_params?: QueryAllOraclesRequest): Promise<QueryAllOraclesResponseSDKType>;
    activeOracles(params: QueryActiveOraclesRequest): Promise<QueryActiveOraclesResponseSDKType>;
    metrics(params: QueryMetricsRequest): Promise<QueryMetricsResponseSDKType>;
}
