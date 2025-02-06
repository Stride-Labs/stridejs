import { MsgRegisterTokenPriceQuery, MsgRemoveTokenPriceQuery } from "./tx";
const registry = [["/stride.icqoracle.MsgRegisterTokenPriceQuery", MsgRegisterTokenPriceQuery], ["/stride.icqoracle.MsgRemoveTokenPriceQuery", MsgRemoveTokenPriceQuery]];
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
    }
  }
};
export {
  MessageComposer,
  load,
  registry
};
