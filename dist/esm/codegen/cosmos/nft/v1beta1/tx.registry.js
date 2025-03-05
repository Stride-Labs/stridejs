import { MsgSend } from "./tx";
const registry = [["/cosmos.nft.v1beta1.MsgSend", MsgSend]];
const load = (protoRegistry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
const MessageComposer = {
  encoded: {
    send(value) {
      return {
        typeUrl: "/cosmos.nft.v1beta1.MsgSend",
        value: MsgSend.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    send(value) {
      return {
        typeUrl: "/cosmos.nft.v1beta1.MsgSend",
        value
      };
    }
  },
  fromPartial: {
    send(value) {
      return {
        typeUrl: "/cosmos.nft.v1beta1.MsgSend",
        value: MsgSend.fromPartial(value)
      };
    }
  }
};
export {
  MessageComposer,
  load,
  registry
};
