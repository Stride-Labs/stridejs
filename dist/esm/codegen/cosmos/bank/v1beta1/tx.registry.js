import { MsgSend, MsgMultiSend } from "./tx";
const registry = [["/cosmos.bank.v1beta1.MsgSend", MsgSend], ["/cosmos.bank.v1beta1.MsgMultiSend", MsgMultiSend]];
const load = (protoRegistry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
const MessageComposer = {
  encoded: {
    send(value) {
      return {
        typeUrl: "/cosmos.bank.v1beta1.MsgSend",
        value: MsgSend.encode(value).finish()
      };
    },
    multiSend(value) {
      return {
        typeUrl: "/cosmos.bank.v1beta1.MsgMultiSend",
        value: MsgMultiSend.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    send(value) {
      return {
        typeUrl: "/cosmos.bank.v1beta1.MsgSend",
        value
      };
    },
    multiSend(value) {
      return {
        typeUrl: "/cosmos.bank.v1beta1.MsgMultiSend",
        value
      };
    }
  },
  fromPartial: {
    send(value) {
      return {
        typeUrl: "/cosmos.bank.v1beta1.MsgSend",
        value: MsgSend.fromPartial(value)
      };
    },
    multiSend(value) {
      return {
        typeUrl: "/cosmos.bank.v1beta1.MsgMultiSend",
        value: MsgMultiSend.fromPartial(value)
      };
    }
  }
};
export {
  MessageComposer,
  load,
  registry
};
