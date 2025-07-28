"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var tx_registry_exports = {};
__export(tx_registry_exports, {
  MessageComposer: () => MessageComposer,
  load: () => load,
  registry: () => registry
});
module.exports = __toCommonJS(tx_registry_exports);
var import_tx = require("./tx");
const registry = [["/ibc.core.channel.v1.MsgChannelOpenInit", import_tx.MsgChannelOpenInit], ["/ibc.core.channel.v1.MsgChannelOpenTry", import_tx.MsgChannelOpenTry], ["/ibc.core.channel.v1.MsgChannelOpenAck", import_tx.MsgChannelOpenAck], ["/ibc.core.channel.v1.MsgChannelOpenConfirm", import_tx.MsgChannelOpenConfirm], ["/ibc.core.channel.v1.MsgChannelCloseInit", import_tx.MsgChannelCloseInit], ["/ibc.core.channel.v1.MsgChannelCloseConfirm", import_tx.MsgChannelCloseConfirm], ["/ibc.core.channel.v1.MsgRecvPacket", import_tx.MsgRecvPacket], ["/ibc.core.channel.v1.MsgTimeout", import_tx.MsgTimeout], ["/ibc.core.channel.v1.MsgTimeoutOnClose", import_tx.MsgTimeoutOnClose], ["/ibc.core.channel.v1.MsgAcknowledgement", import_tx.MsgAcknowledgement]];
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
        value: import_tx.MsgChannelOpenInit.encode(value).finish()
      };
    },
    channelOpenTry(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelOpenTry",
        value: import_tx.MsgChannelOpenTry.encode(value).finish()
      };
    },
    channelOpenAck(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelOpenAck",
        value: import_tx.MsgChannelOpenAck.encode(value).finish()
      };
    },
    channelOpenConfirm(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelOpenConfirm",
        value: import_tx.MsgChannelOpenConfirm.encode(value).finish()
      };
    },
    channelCloseInit(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelCloseInit",
        value: import_tx.MsgChannelCloseInit.encode(value).finish()
      };
    },
    channelCloseConfirm(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelCloseConfirm",
        value: import_tx.MsgChannelCloseConfirm.encode(value).finish()
      };
    },
    recvPacket(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgRecvPacket",
        value: import_tx.MsgRecvPacket.encode(value).finish()
      };
    },
    timeout(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgTimeout",
        value: import_tx.MsgTimeout.encode(value).finish()
      };
    },
    timeoutOnClose(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgTimeoutOnClose",
        value: import_tx.MsgTimeoutOnClose.encode(value).finish()
      };
    },
    acknowledgement(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgAcknowledgement",
        value: import_tx.MsgAcknowledgement.encode(value).finish()
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
        value: import_tx.MsgChannelOpenInit.fromPartial(value)
      };
    },
    channelOpenTry(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelOpenTry",
        value: import_tx.MsgChannelOpenTry.fromPartial(value)
      };
    },
    channelOpenAck(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelOpenAck",
        value: import_tx.MsgChannelOpenAck.fromPartial(value)
      };
    },
    channelOpenConfirm(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelOpenConfirm",
        value: import_tx.MsgChannelOpenConfirm.fromPartial(value)
      };
    },
    channelCloseInit(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelCloseInit",
        value: import_tx.MsgChannelCloseInit.fromPartial(value)
      };
    },
    channelCloseConfirm(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelCloseConfirm",
        value: import_tx.MsgChannelCloseConfirm.fromPartial(value)
      };
    },
    recvPacket(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgRecvPacket",
        value: import_tx.MsgRecvPacket.fromPartial(value)
      };
    },
    timeout(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgTimeout",
        value: import_tx.MsgTimeout.fromPartial(value)
      };
    },
    timeoutOnClose(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgTimeoutOnClose",
        value: import_tx.MsgTimeoutOnClose.fromPartial(value)
      };
    },
    acknowledgement(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgAcknowledgement",
        value: import_tx.MsgAcknowledgement.fromPartial(value)
      };
    }
  }
};
// Proper CommonJS exports for dynamic imports
module.exports = {
  MessageComposer,
  load,
  registry
};
