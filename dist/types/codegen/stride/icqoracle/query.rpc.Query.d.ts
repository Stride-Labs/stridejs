import { TxRpc } from "../../types";
import { QueryClient } from "@cosmjs/stargate";
import { QueryTokenPriceRequest, TokenPriceResponse, QueryTokenPricesRequest, QueryTokenPricesResponse, QueryParamsRequest, QueryParamsResponse, QueryTokenPriceForQuoteDenomRequest, QueryTokenPriceForQuoteDenomResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** TokenPrice queries the current price for a specific token */
    tokenPrice(request: QueryTokenPriceRequest): Promise<TokenPriceResponse>;
    /** TokenPrices queries all token prices */
    tokenPrices(request?: QueryTokenPricesRequest): Promise<QueryTokenPricesResponse>;
    /** Params queries the oracle parameters */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** TokenPriceForQuoteDenom queries the exchange rate between two tokens */
    tokenPriceForQuoteDenom(request: QueryTokenPriceForQuoteDenomRequest): Promise<QueryTokenPriceForQuoteDenomResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: TxRpc);
    tokenPrice(request: QueryTokenPriceRequest): Promise<TokenPriceResponse>;
    tokenPrices(request?: QueryTokenPricesRequest): Promise<QueryTokenPricesResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    tokenPriceForQuoteDenom(request: QueryTokenPriceForQuoteDenomRequest): Promise<QueryTokenPriceForQuoteDenomResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    tokenPrice(request: QueryTokenPriceRequest): Promise<TokenPriceResponse>;
    tokenPrices(request?: QueryTokenPricesRequest): Promise<QueryTokenPricesResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    tokenPriceForQuoteDenom(request: QueryTokenPriceForQuoteDenomRequest): Promise<QueryTokenPriceForQuoteDenomResponse>;
};
