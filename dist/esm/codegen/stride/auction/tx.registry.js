import { MsgPlaceBid, MsgCreateAuction, MsgUpdateAuction } from "./tx";
const registry = [["/stride.auction.MsgPlaceBid", MsgPlaceBid], ["/stride.auction.MsgCreateAuction", MsgCreateAuction], ["/stride.auction.MsgUpdateAuction", MsgUpdateAuction]];
const load = (protoRegistry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
const MessageComposer = {
  encoded: {
    placeBid(value) {
      return {
        typeUrl: "/stride.auction.MsgPlaceBid",
        value: MsgPlaceBid.encode(value).finish()
      };
    },
    createAuction(value) {
      return {
        typeUrl: "/stride.auction.MsgCreateAuction",
        value: MsgCreateAuction.encode(value).finish()
      };
    },
    updateAuction(value) {
      return {
        typeUrl: "/stride.auction.MsgUpdateAuction",
        value: MsgUpdateAuction.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    placeBid(value) {
      return {
        typeUrl: "/stride.auction.MsgPlaceBid",
        value
      };
    },
    createAuction(value) {
      return {
        typeUrl: "/stride.auction.MsgCreateAuction",
        value
      };
    },
    updateAuction(value) {
      return {
        typeUrl: "/stride.auction.MsgUpdateAuction",
        value
      };
    }
  },
  fromPartial: {
    placeBid(value) {
      return {
        typeUrl: "/stride.auction.MsgPlaceBid",
        value: MsgPlaceBid.fromPartial(value)
      };
    },
    createAuction(value) {
      return {
        typeUrl: "/stride.auction.MsgCreateAuction",
        value: MsgCreateAuction.fromPartial(value)
      };
    },
    updateAuction(value) {
      return {
        typeUrl: "/stride.auction.MsgUpdateAuction",
        value: MsgUpdateAuction.fromPartial(value)
      };
    }
  }
};
export {
  MessageComposer,
  load,
  registry
};
