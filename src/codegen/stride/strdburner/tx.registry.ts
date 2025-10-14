import { TelescopeGeneratedType } from "../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgBurn, MsgLink } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/stride.strdburner.MsgBurn", MsgBurn], ["/stride.strdburner.MsgLink", MsgLink]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    burn(value: MsgBurn) {
      return {
        typeUrl: "/stride.strdburner.MsgBurn",
        value: MsgBurn.encode(value).finish()
      };
    },
    link(value: MsgLink) {
      return {
        typeUrl: "/stride.strdburner.MsgLink",
        value: MsgLink.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    burn(value: MsgBurn) {
      return {
        typeUrl: "/stride.strdburner.MsgBurn",
        value
      };
    },
    link(value: MsgLink) {
      return {
        typeUrl: "/stride.strdburner.MsgLink",
        value
      };
    }
  },
  fromPartial: {
    burn(value: MsgBurn) {
      return {
        typeUrl: "/stride.strdburner.MsgBurn",
        value: MsgBurn.fromPartial(value)
      };
    },
    link(value: MsgLink) {
      return {
        typeUrl: "/stride.strdburner.MsgLink",
        value: MsgLink.fromPartial(value)
      };
    }
  }
};