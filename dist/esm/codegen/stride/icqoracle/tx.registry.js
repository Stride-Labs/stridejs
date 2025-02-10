import { MsgRegisterTokenPriceQuery, MsgRemoveTokenPriceQuery, MsgUpdateParams } from "./tx";
const registry = [["/stride.icqoracle.MsgRegisterTokenPriceQuery", MsgRegisterTokenPriceQuery], ["/stride.icqoracle.MsgRemoveTokenPriceQuery", MsgRemoveTokenPriceQuery], ["/stride.icqoracle.MsgUpdateParams", MsgUpdateParams]];
const load = (protoRegistry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
const MessageComposer = {
  encoded: {
    registerTokenPriceQuery(value) {
      return {
        typeUrl: "/stride.icqoracle.MsgRegisterTokenPriceQuery",
        value: MsgRegisterTokenPriceQuery.encode(value).finish()
      };
    },
    removeTokenPriceQuery(value) {
      return {
        typeUrl: "/stride.icqoracle.MsgRemoveTokenPriceQuery",
        value: MsgRemoveTokenPriceQuery.encode(value).finish()
      };
    },
    updateParams(value) {
      return {
        typeUrl: "/stride.icqoracle.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    registerTokenPriceQuery(value) {
      return {
        typeUrl: "/stride.icqoracle.MsgRegisterTokenPriceQuery",
        value
      };
    },
    removeTokenPriceQuery(value) {
      return {
        typeUrl: "/stride.icqoracle.MsgRemoveTokenPriceQuery",
        value
      };
    },
    updateParams(value) {
      return {
        typeUrl: "/stride.icqoracle.MsgUpdateParams",
        value
      };
    }
  },
  fromPartial: {
    registerTokenPriceQuery(value) {
      return {
        typeUrl: "/stride.icqoracle.MsgRegisterTokenPriceQuery",
        value: MsgRegisterTokenPriceQuery.fromPartial(value)
      };
    },
    removeTokenPriceQuery(value) {
      return {
        typeUrl: "/stride.icqoracle.MsgRemoveTokenPriceQuery",
        value: MsgRemoveTokenPriceQuery.fromPartial(value)
      };
    },
    updateParams(value) {
      return {
        typeUrl: "/stride.icqoracle.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    }
  }
};
export {
  MessageComposer,
  load,
  registry
};
