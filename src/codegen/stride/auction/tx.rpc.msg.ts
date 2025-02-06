import { TxRpc } from "../../types";
import { BinaryReader } from "../../binary";
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
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
    this.placeBid = this.placeBid.bind(this);
    this.createAuction = this.createAuction.bind(this);
    this.updateAuction = this.updateAuction.bind(this);
  }
  placeBid(request: MsgPlaceBid): Promise<MsgPlaceBidResponse> {
    const data = MsgPlaceBid.encode(request).finish();
    const promise = this.rpc.request("stride.auction.Msg", "PlaceBid", data);
    return promise.then(data => MsgPlaceBidResponse.decode(new BinaryReader(data)));
  }
  createAuction(request: MsgCreateAuction): Promise<MsgCreateAuctionResponse> {
    const data = MsgCreateAuction.encode(request).finish();
    const promise = this.rpc.request("stride.auction.Msg", "CreateAuction", data);
    return promise.then(data => MsgCreateAuctionResponse.decode(new BinaryReader(data)));
  }
  updateAuction(request: MsgUpdateAuction): Promise<MsgUpdateAuctionResponse> {
    const data = MsgUpdateAuction.encode(request).finish();
    const promise = this.rpc.request("stride.auction.Msg", "UpdateAuction", data);
    return promise.then(data => MsgUpdateAuctionResponse.decode(new BinaryReader(data)));
  }
}