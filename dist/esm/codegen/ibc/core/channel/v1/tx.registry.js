import { MsgChannelOpenInit, MsgChannelOpenTry, MsgChannelOpenAck, MsgChannelOpenConfirm, MsgChannelCloseInit, MsgChannelCloseConfirm, MsgRecvPacket, MsgTimeout, MsgTimeoutOnClose, MsgAcknowledgement } from "./tx";
const registry = [["/ibc.core.channel.v1.MsgChannelOpenInit", MsgChannelOpenInit], ["/ibc.core.channel.v1.MsgChannelOpenTry", MsgChannelOpenTry], ["/ibc.core.channel.v1.MsgChannelOpenAck", MsgChannelOpenAck], ["/ibc.core.channel.v1.MsgChannelOpenConfirm", MsgChannelOpenConfirm], ["/ibc.core.channel.v1.MsgChannelCloseInit", MsgChannelCloseInit], ["/ibc.core.channel.v1.MsgChannelCloseConfirm", MsgChannelCloseConfirm], ["/ibc.core.channel.v1.MsgRecvPacket", MsgRecvPacket], ["/ibc.core.channel.v1.MsgTimeout", MsgTimeout], ["/ibc.core.channel.v1.MsgTimeoutOnClose", MsgTimeoutOnClose], ["/ibc.core.channel.v1.MsgAcknowledgement", MsgAcknowledgement]];
const load = (protoRegistry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
const MessageComposer = {
  encoded: {
    channelOpenInit(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelOpenInit",
        value: MsgChannelOpenInit.encode(value).finish()
      };
    },
    channelOpenTry(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelOpenTry",
        value: MsgChannelOpenTry.encode(value).finish()
      };
    },
    channelOpenAck(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelOpenAck",
        value: MsgChannelOpenAck.encode(value).finish()
      };
    },
    channelOpenConfirm(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelOpenConfirm",
        value: MsgChannelOpenConfirm.encode(value).finish()
      };
    },
    channelCloseInit(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelCloseInit",
        value: MsgChannelCloseInit.encode(value).finish()
      };
    },
    channelCloseConfirm(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelCloseConfirm",
        value: MsgChannelCloseConfirm.encode(value).finish()
      };
    },
    recvPacket(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgRecvPacket",
        value: MsgRecvPacket.encode(value).finish()
      };
    },
    timeout(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgTimeout",
        value: MsgTimeout.encode(value).finish()
      };
    },
    timeoutOnClose(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgTimeoutOnClose",
        value: MsgTimeoutOnClose.encode(value).finish()
      };
    },
    acknowledgement(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgAcknowledgement",
        value: MsgAcknowledgement.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    channelOpenInit(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelOpenInit",
        value
      };
    },
    channelOpenTry(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelOpenTry",
        value
      };
    },
    channelOpenAck(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelOpenAck",
        value
      };
    },
    channelOpenConfirm(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelOpenConfirm",
        value
      };
    },
    channelCloseInit(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelCloseInit",
        value
      };
    },
    channelCloseConfirm(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelCloseConfirm",
        value
      };
    },
    recvPacket(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgRecvPacket",
        value
      };
    },
    timeout(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgTimeout",
        value
      };
    },
    timeoutOnClose(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgTimeoutOnClose",
        value
      };
    },
    acknowledgement(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgAcknowledgement",
        value
      };
    }
  },
  fromPartial: {
    channelOpenInit(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelOpenInit",
        value: MsgChannelOpenInit.fromPartial(value)
      };
    },
    channelOpenTry(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelOpenTry",
        value: MsgChannelOpenTry.fromPartial(value)
      };
    },
    channelOpenAck(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelOpenAck",
        value: MsgChannelOpenAck.fromPartial(value)
      };
    },
    channelOpenConfirm(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelOpenConfirm",
        value: MsgChannelOpenConfirm.fromPartial(value)
      };
    },
    channelCloseInit(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelCloseInit",
        value: MsgChannelCloseInit.fromPartial(value)
      };
    },
    channelCloseConfirm(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelCloseConfirm",
        value: MsgChannelCloseConfirm.fromPartial(value)
      };
    },
    recvPacket(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgRecvPacket",
        value: MsgRecvPacket.fromPartial(value)
      };
    },
    timeout(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgTimeout",
        value: MsgTimeout.fromPartial(value)
      };
    },
    timeoutOnClose(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgTimeoutOnClose",
        value: MsgTimeoutOnClose.fromPartial(value)
      };
    },
    acknowledgement(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgAcknowledgement",
        value: MsgAcknowledgement.fromPartial(value)
      };
    }
  }
};
export {
  MessageComposer,
  load,
  registry
};
