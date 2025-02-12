import { TxRpc } from "../../types";
import { BinaryReader } from "../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
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
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
    this.tokenPrice = this.tokenPrice.bind(this);
    this.tokenPrices = this.tokenPrices.bind(this);
    this.params = this.params.bind(this);
    this.tokenPriceForQuoteDenom = this.tokenPriceForQuoteDenom.bind(this);
  }
  tokenPrice(request: QueryTokenPriceRequest): Promise<TokenPriceResponse> {
    const data = QueryTokenPriceRequest.encode(request).finish();
    const promise = this.rpc.request("stride.icqoracle.Query", "TokenPrice", data);
    return promise.then(data => TokenPriceResponse.decode(new BinaryReader(data)));
  }
  tokenPrices(request: QueryTokenPricesRequest = {
    pagination: undefined
  }): Promise<QueryTokenPricesResponse> {
    const data = QueryTokenPricesRequest.encode(request).finish();
    const promise = this.rpc.request("stride.icqoracle.Query", "TokenPrices", data);
    return promise.then(data => QueryTokenPricesResponse.decode(new BinaryReader(data)));
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("stride.icqoracle.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  tokenPriceForQuoteDenom(request: QueryTokenPriceForQuoteDenomRequest): Promise<QueryTokenPriceForQuoteDenomResponse> {
    const data = QueryTokenPriceForQuoteDenomRequest.encode(request).finish();
    const promise = this.rpc.request("stride.icqoracle.Query", "TokenPriceForQuoteDenom", data);
    return promise.then(data => QueryTokenPriceForQuoteDenomResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    tokenPrice(request: QueryTokenPriceRequest): Promise<TokenPriceResponse> {
      return queryService.tokenPrice(request);
    },
    tokenPrices(request?: QueryTokenPricesRequest): Promise<QueryTokenPricesResponse> {
      return queryService.tokenPrices(request);
    },
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    tokenPriceForQuoteDenom(request: QueryTokenPriceForQuoteDenomRequest): Promise<QueryTokenPriceForQuoteDenomResponse> {
      return queryService.tokenPriceForQuoteDenom(request);
    }
  };
};