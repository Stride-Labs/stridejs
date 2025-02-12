import { MsgPlaceBid, MsgCreateAuction, MsgUpdateAuction } from "./tx";
export declare const AminoConverter: {
    "/stride.auction.MsgPlaceBid": {
        aminoType: string;
        toAmino: (message: MsgPlaceBid) => import("./tx").MsgPlaceBidAmino;
        fromAmino: (object: import("./tx").MsgPlaceBidAmino) => MsgPlaceBid;
    };
    "/stride.auction.MsgCreateAuction": {
        aminoType: string;
        toAmino: (message: MsgCreateAuction) => import("./tx").MsgCreateAuctionAmino;
        fromAmino: (object: import("./tx").MsgCreateAuctionAmino) => MsgCreateAuction;
    };
    "/stride.auction.MsgUpdateAuction": {
        aminoType: string;
        toAmino: (message: MsgUpdateAuction) => import("./tx").MsgUpdateAuctionAmino;
        fromAmino: (object: import("./tx").MsgUpdateAuctionAmino) => MsgUpdateAuction;
    };
};
