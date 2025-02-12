import { TxRpc } from "../../types";
import { QueryClient } from "@cosmjs/stargate";
import { QueryAuctionRequest, QueryAuctionResponse, QueryAuctionsRequest, QueryAuctionsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** Auction queries the auction info for a specific token */
    auction(request: QueryAuctionRequest): Promise<QueryAuctionResponse>;
    /** Auctions queries the auction info for a specific token */
    auctions(request?: QueryAuctionsRequest): Promise<QueryAuctionsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: TxRpc);
    auction(request: QueryAuctionRequest): Promise<QueryAuctionResponse>;
    auctions(request?: QueryAuctionsRequest): Promise<QueryAuctionsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    auction(request: QueryAuctionRequest): Promise<QueryAuctionResponse>;
    auctions(request?: QueryAuctionsRequest): Promise<QueryAuctionsResponse>;
};
