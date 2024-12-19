import { BinaryReader } from "../../binary";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryTokenPriceRequest, QueryTokenPriceResponse, QueryTokenPricesRequest, QueryTokenPricesResponse, QueryParamsRequest, QueryParamsResponse, QueryTokenPriceForQuoteDenomRequest, QueryTokenPriceForQuoteDenomResponse } from "./query";
class QueryClientImpl {
  rpc;
  constructor(rpc) {
    this.rpc = rpc;
    this.tokenPrice = this.tokenPrice.bind(this);
    this.tokenPrices = this.tokenPrices.bind(this);
    this.params = this.params.bind(this);
    this.tokenPriceForQuoteDenom = this.tokenPriceForQuoteDenom.bind(this);
  }
  tokenPrice(request) {
    const data = QueryTokenPriceRequest.encode(request).finish();
    const promise = this.rpc.request("stride.icqoracle.Query", "TokenPrice", data);
    return promise.then((data2) => QueryTokenPriceResponse.decode(new BinaryReader(data2)));
  }
  tokenPrices(request = {
    pagination: void 0
  }) {
    const data = QueryTokenPricesRequest.encode(request).finish();
    const promise = this.rpc.request("stride.icqoracle.Query", "TokenPrices", data);
    return promise.then((data2) => QueryTokenPricesResponse.decode(new BinaryReader(data2)));
  }
  params(request = {}) {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("stride.icqoracle.Query", "Params", data);
    return promise.then((data2) => QueryParamsResponse.decode(new BinaryReader(data2)));
  }
  tokenPriceForQuoteDenom(request) {
    const data = QueryTokenPriceForQuoteDenomRequest.encode(request).finish();
    const promise = this.rpc.request("stride.icqoracle.Query", "TokenPriceForQuoteDenom", data);
    return promise.then((data2) => QueryTokenPriceForQuoteDenomResponse.decode(new BinaryReader(data2)));
  }
}
const createRpcQueryExtension = (base) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    tokenPrice(request) {
      return queryService.tokenPrice(request);
    },
    tokenPrices(request) {
      return queryService.tokenPrices(request);
    },
    params(request) {
      return queryService.params(request);
    },
    tokenPriceForQuoteDenom(request) {
      return queryService.tokenPriceForQuoteDenom(request);
    }
  };
};
export {
  QueryClientImpl,
  createRpcQueryExtension
};
