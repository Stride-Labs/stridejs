import { MsgPlaceBid, MsgCreateAuction, MsgUpdateAuction } from "./tx";
export const AminoConverter = {
  "/stride.auction.MsgPlaceBid": {
    aminoType: "auction/MsgPlaceBid",
    toAmino: MsgPlaceBid.toAmino,
    fromAmino: MsgPlaceBid.fromAmino
  },
  "/stride.auction.MsgCreateAuction": {
    aminoType: "auction/MsgCreateAuction",
    toAmino: MsgCreateAuction.toAmino,
    fromAmino: MsgCreateAuction.fromAmino
  },
  "/stride.auction.MsgUpdateAuction": {
    aminoType: "auction/MsgUpdateAuction",
    toAmino: MsgUpdateAuction.toAmino,
    fromAmino: MsgUpdateAuction.fromAmino
  }
};