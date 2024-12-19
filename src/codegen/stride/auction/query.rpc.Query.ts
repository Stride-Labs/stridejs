import { TxRpc } from "../../types";
import { BinaryReader } from "../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryAuctionRequest, QueryAuctionResponse, QueryAuctionsRequest, QueryAuctionsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Auction queries the auction info for a specific token */
  auction(request: QueryAuctionRequest): Promise<QueryAuctionResponse>;
  /** Auctions queries the auction info for a specific token */
  auctions(request?: QueryAuctionsRequest): Promise<QueryAuctionsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
    this.auction = this.auction.bind(this);
    this.auctions = this.auctions.bind(this);
  }
  auction(request: QueryAuctionRequest): Promise<QueryAuctionResponse> {
    const data = QueryAuctionRequest.encode(request).finish();
    const promise = this.rpc.request("stride.auction.Query", "Auction", data);
    return promise.then(data => QueryAuctionResponse.decode(new BinaryReader(data)));
  }
  auctions(request: QueryAuctionsRequest = {
    pagination: undefined
  }): Promise<QueryAuctionsResponse> {
    const data = QueryAuctionsRequest.encode(request).finish();
    const promise = this.rpc.request("stride.auction.Query", "Auctions", data);
    return promise.then(data => QueryAuctionsResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    auction(request: QueryAuctionRequest): Promise<QueryAuctionResponse> {
      return queryService.auction(request);
    },
    auctions(request?: QueryAuctionsRequest): Promise<QueryAuctionsResponse> {
      return queryService.auctions(request);
    }
  };
};