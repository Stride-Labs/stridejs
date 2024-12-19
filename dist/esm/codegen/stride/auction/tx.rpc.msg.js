import { BinaryReader } from "../../binary";
import { MsgPlaceBid, MsgPlaceBidResponse, MsgCreateAuction, MsgCreateAuctionResponse, MsgUpdateAuction, MsgUpdateAuctionResponse } from "./tx";
class MsgClientImpl {
  rpc;
  constructor(rpc) {
    this.rpc = rpc;
    this.placeBid = this.placeBid.bind(this);
    this.createAuction = this.createAuction.bind(this);
    this.updateAuction = this.updateAuction.bind(this);
  }
  placeBid(request) {
    const data = MsgPlaceBid.encode(request).finish();
    const promise = this.rpc.request("stride.auction.Msg", "PlaceBid", data);
    return promise.then((data2) => MsgPlaceBidResponse.decode(new BinaryReader(data2)));
  }
  createAuction(request) {
    const data = MsgCreateAuction.encode(request).finish();
    const promise = this.rpc.request("stride.auction.Msg", "CreateAuction", data);
    return promise.then((data2) => MsgCreateAuctionResponse.decode(new BinaryReader(data2)));
  }
  updateAuction(request) {
    const data = MsgUpdateAuction.encode(request).finish();
    const promise = this.rpc.request("stride.auction.Msg", "UpdateAuction", data);
    return promise.then((data2) => MsgUpdateAuctionResponse.decode(new BinaryReader(data2)));
  }
}
export {
  MsgClientImpl
};
