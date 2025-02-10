import { TelescopeGeneratedType } from "../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgRegisterTokenPriceQuery, MsgRemoveTokenPriceQuery, MsgUpdateParams } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/stride.icqoracle.MsgRegisterTokenPriceQuery", MsgRegisterTokenPriceQuery], ["/stride.icqoracle.MsgRemoveTokenPriceQuery", MsgRemoveTokenPriceQuery], ["/stride.icqoracle.MsgUpdateParams", MsgUpdateParams]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    registerTokenPriceQuery(value: MsgRegisterTokenPriceQuery) {
      return {
        typeUrl: "/stride.icqoracle.MsgRegisterTokenPriceQuery",
        value: MsgRegisterTokenPriceQuery.encode(value).finish()
      };
    },
    removeTokenPriceQuery(value: MsgRemoveTokenPriceQuery) {
      return {
        typeUrl: "/stride.icqoracle.MsgRemoveTokenPriceQuery",
        value: MsgRemoveTokenPriceQuery.encode(value).finish()
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/stride.icqoracle.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    registerTokenPriceQuery(value: MsgRegisterTokenPriceQuery) {
      return {
        typeUrl: "/stride.icqoracle.MsgRegisterTokenPriceQuery",
        value
      };
    },
    removeTokenPriceQuery(value: MsgRemoveTokenPriceQuery) {
      return {
        typeUrl: "/stride.icqoracle.MsgRemoveTokenPriceQuery",
        value
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/stride.icqoracle.MsgUpdateParams",
        value
      };
    }
  },
  fromPartial: {
    registerTokenPriceQuery(value: MsgRegisterTokenPriceQuery) {
      return {
        typeUrl: "/stride.icqoracle.MsgRegisterTokenPriceQuery",
        value: MsgRegisterTokenPriceQuery.fromPartial(value)
      };
    },
    removeTokenPriceQuery(value: MsgRemoveTokenPriceQuery) {
      return {
        typeUrl: "/stride.icqoracle.MsgRemoveTokenPriceQuery",
        value: MsgRemoveTokenPriceQuery.fromPartial(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/stride.icqoracle.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    }
  }
};