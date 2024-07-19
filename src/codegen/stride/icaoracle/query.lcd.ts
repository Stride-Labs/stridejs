import { LCDClient } from "@cosmology/lcd";
import { QueryOracleRequest, QueryOracleResponseSDKType, QueryAllOraclesRequest, QueryAllOraclesResponseSDKType, QueryActiveOraclesRequest, QueryActiveOraclesResponseSDKType, QueryMetricsRequest, QueryMetricsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.oracle = this.oracle.bind(this);
    this.allOracles = this.allOracles.bind(this);
    this.activeOracles = this.activeOracles.bind(this);
    this.metrics = this.metrics.bind(this);
  }
  /* Query a specific oracle */
  async oracle(params: QueryOracleRequest): Promise<QueryOracleResponseSDKType> {
    const endpoint = `Stride-Labs/stride/icaoracle/oracle/${params.chainId}`;
    return await this.req.get<QueryOracleResponseSDKType>(endpoint);
  }
  /* Query all oracles */
  async allOracles(_params: QueryAllOraclesRequest = {}): Promise<QueryAllOraclesResponseSDKType> {
    const endpoint = `Stride-Labs/stride/icaoracle/oracles`;
    return await this.req.get<QueryAllOraclesResponseSDKType>(endpoint);
  }
  /* Query oracles with active ffilter:
   - /oracles/by_active?active=true
   - /oracles/by_active?active=false */
  async activeOracles(params: QueryActiveOraclesRequest): Promise<QueryActiveOraclesResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.active !== "undefined") {
      options.params.active = params.active;
    }
    const endpoint = `Stride-Labs/stride/icaoracle/oracles/by_active`;
    return await this.req.get<QueryActiveOraclesResponseSDKType>(endpoint, options);
  }
  /* Query metrics with optional filters
  
   Ex:
   - /metrics
   - /metrics?metric_key=X
   - /metrics?oracle_chain_id=Y */
  async metrics(params: QueryMetricsRequest): Promise<QueryMetricsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.metricKey !== "undefined") {
      options.params.metric_key = params.metricKey;
    }
    if (typeof params?.oracleChainId !== "undefined") {
      options.params.oracle_chain_id = params.oracleChainId;
    }
    const endpoint = `Stride-Labs/stride/icaoracle/metrics`;
    return await this.req.get<QueryMetricsResponseSDKType>(endpoint, options);
  }
}