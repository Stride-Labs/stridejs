import { TxRpc } from "../../types";
import { MsgPlaceBid, MsgPlaceBidResponse, MsgCreateAuction, MsgCreateAuctionResponse, MsgUpdateAuction, MsgUpdateAuctionResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
    /** PlaceBid places a bid to buy a token off an auction */
    placeBid(request: MsgPlaceBid): Promise<MsgPlaceBidResponse>;
    /** CreateAuction creates a new auction */
    createAuction(request: MsgCreateAuction): Promise<MsgCreateAuctionResponse>;
    /** CreateAuction updates an existing auction */
    updateAuction(request: MsgUpdateAuction): Promise<MsgUpdateAuctionResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: TxRpc);
    placeBid(request: MsgPlaceBid): Promise<MsgPlaceBidResponse>;
    createAuction(request: MsgCreateAuction): Promise<MsgCreateAuctionResponse>;
    updateAuction(request: MsgUpdateAuction): Promise<MsgUpdateAuctionResponse>;
}
