import { MsgBurn, MsgLink } from "./tx";
const registry = [["/stride.strdburner.MsgBurn", MsgBurn], ["/stride.strdburner.MsgLink", MsgLink]];
const load = (protoRegistry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
const MessageComposer = {
  encoded: {
    burn(value) {
      return {
        typeUrl: "/stride.strdburner.MsgBurn",
        value: MsgBurn.encode(value).finish()
      };
    },
    link(value) {
      return {
        typeUrl: "/stride.strdburner.MsgLink",
        value: MsgLink.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    burn(value) {
      return {
        typeUrl: "/stride.strdburner.MsgBurn",
        value
      };
    },
    link(value) {
      return {
        typeUrl: "/stride.strdburner.MsgLink",
        value
      };
    }
  },
  fromPartial: {
    burn(value) {
      return {
        typeUrl: "/stride.strdburner.MsgBurn",
        value: MsgBurn.fromPartial(value)
      };
    },
    link(value) {
      return {
        typeUrl: "/stride.strdburner.MsgLink",
        value: MsgLink.fromPartial(value)
      };
    }
  }
};
export {
  MessageComposer,
  load,
  registry
};
