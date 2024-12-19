import { MsgUnjail } from "./tx";
const registry = [["/cosmos.slashing.v1beta1.MsgUnjail", MsgUnjail]];
const load = (protoRegistry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
const MessageComposer = {
  encoded: {
    unjail(value) {
      return {
        typeUrl: "/cosmos.slashing.v1beta1.MsgUnjail",
        value: MsgUnjail.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    unjail(value) {
      return {
        typeUrl: "/cosmos.slashing.v1beta1.MsgUnjail",
        value
      };
    }
  },
  fromPartial: {
    unjail(value) {
      return {
        typeUrl: "/cosmos.slashing.v1beta1.MsgUnjail",
        value: MsgUnjail.fromPartial(value)
      };
    }
  }
};
export {
  MessageComposer,
  load,
  registry
};
