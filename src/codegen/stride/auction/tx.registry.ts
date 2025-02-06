import { TelescopeGeneratedType } from "../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgPlaceBid, MsgCreateAuction, MsgUpdateAuction } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/stride.auction.MsgPlaceBid", MsgPlaceBid], ["/stride.auction.MsgCreateAuction", MsgCreateAuction], ["/stride.auction.MsgUpdateAuction", MsgUpdateAuction]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    placeBid(value: MsgPlaceBid) {
      return {
        typeUrl: "/stride.auction.MsgPlaceBid",
        value: MsgPlaceBid.encode(value).finish()
      };
    },
    createAuction(value: MsgCreateAuction) {
      return {
        typeUrl: "/stride.auction.MsgCreateAuction",
        value: MsgCreateAuction.encode(value).finish()
      };
    },
    updateAuction(value: MsgUpdateAuction) {
      return {
        typeUrl: "/stride.auction.MsgUpdateAuction",
        value: MsgUpdateAuction.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    placeBid(value: MsgPlaceBid) {
      return {
        typeUrl: "/stride.auction.MsgPlaceBid",
        value
      };
    },
    createAuction(value: MsgCreateAuction) {
      return {
        typeUrl: "/stride.auction.MsgCreateAuction",
        value
      };
    },
    updateAuction(value: MsgUpdateAuction) {
      return {
        typeUrl: "/stride.auction.MsgUpdateAuction",
        value
      };
    }
  },
  fromPartial: {
    placeBid(value: MsgPlaceBid) {
      return {
        typeUrl: "/stride.auction.MsgPlaceBid",
        value: MsgPlaceBid.fromPartial(value)
      };
    },
    createAuction(value: MsgCreateAuction) {
      return {
        typeUrl: "/stride.auction.MsgCreateAuction",
        value: MsgCreateAuction.fromPartial(value)
      };
    },
    updateAuction(value: MsgUpdateAuction) {
      return {
        typeUrl: "/stride.auction.MsgUpdateAuction",
        value: MsgUpdateAuction.fromPartial(value)
      };
    }
  }
};