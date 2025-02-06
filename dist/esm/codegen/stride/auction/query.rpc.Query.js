import { BinaryReader } from "../../binary";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryAuctionRequest, QueryAuctionResponse, QueryAuctionsRequest, QueryAuctionsResponse } from "./query";
class QueryClientImpl {
  rpc;
  constructor(rpc) {
    this.rpc = rpc;
    this.auction = this.auction.bind(this);
    this.auctions = this.auctions.bind(this);
  }
  auction(request) {
    const data = QueryAuctionRequest.encode(request).finish();
    const promise = this.rpc.request("stride.auction.Query", "Auction", data);
    return promise.then((data2) => QueryAuctionResponse.decode(new BinaryReader(data2)));
  }
  auctions(request = {
    pagination: void 0
  }) {
    const data = QueryAuctionsRequest.encode(request).finish();
    const promise = this.rpc.request("stride.auction.Query", "Auctions", data);
    return promise.then((data2) => QueryAuctionsResponse.decode(new BinaryReader(data2)));
  }
}
const createRpcQueryExtension = (base) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    auction(request) {
      return queryService.auction(request);
    },
    auctions(request) {
      return queryService.auctions(request);
    }
  };
};
export {
  QueryClientImpl,
  createRpcQueryExtension
};
