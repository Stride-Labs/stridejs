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
const registry = [["/ibc.core.channel.v1.MsgChannelOpenInit", import_tx.MsgChannelOpenInit], ["/ibc.core.channel.v1.MsgChannelOpenTry", import_tx.MsgChannelOpenTry], ["/ibc.core.channel.v1.MsgChannelOpenAck", import_tx.MsgChannelOpenAck], ["/ibc.core.channel.v1.MsgChannelOpenConfirm", import_tx.MsgChannelOpenConfirm], ["/ibc.core.channel.v1.MsgChannelCloseInit", import_tx.MsgChannelCloseInit], ["/ibc.core.channel.v1.MsgChannelCloseConfirm", import_tx.MsgChannelCloseConfirm], ["/ibc.core.channel.v1.MsgRecvPacket", import_tx.MsgRecvPacket], ["/ibc.core.channel.v1.MsgTimeout", import_tx.MsgTimeout], ["/ibc.core.channel.v1.MsgTimeoutOnClose", import_tx.MsgTimeoutOnClose], ["/ibc.core.channel.v1.MsgAcknowledgement", import_tx.MsgAcknowledgement], ["/ibc.core.channel.v1.MsgChannelUpgradeInit", import_tx.MsgChannelUpgradeInit], ["/ibc.core.channel.v1.MsgChannelUpgradeTry", import_tx.MsgChannelUpgradeTry], ["/ibc.core.channel.v1.MsgChannelUpgradeAck", import_tx.MsgChannelUpgradeAck], ["/ibc.core.channel.v1.MsgChannelUpgradeConfirm", import_tx.MsgChannelUpgradeConfirm], ["/ibc.core.channel.v1.MsgChannelUpgradeOpen", import_tx.MsgChannelUpgradeOpen], ["/ibc.core.channel.v1.MsgChannelUpgradeTimeout", import_tx.MsgChannelUpgradeTimeout], ["/ibc.core.channel.v1.MsgChannelUpgradeCancel", import_tx.MsgChannelUpgradeCancel], ["/ibc.core.channel.v1.MsgUpdateParams", import_tx.MsgUpdateParams], ["/ibc.core.channel.v1.MsgPruneAcknowledgements", import_tx.MsgPruneAcknowledgements]];
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
    },
    channelUpgradeInit(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeInit",
        value: import_tx.MsgChannelUpgradeInit.encode(value).finish()
      };
    },
    channelUpgradeTry(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeTry",
        value: import_tx.MsgChannelUpgradeTry.encode(value).finish()
      };
    },
    channelUpgradeAck(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeAck",
        value: import_tx.MsgChannelUpgradeAck.encode(value).finish()
      };
    },
    channelUpgradeConfirm(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeConfirm",
        value: import_tx.MsgChannelUpgradeConfirm.encode(value).finish()
      };
    },
    channelUpgradeOpen(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeOpen",
        value: import_tx.MsgChannelUpgradeOpen.encode(value).finish()
      };
    },
    channelUpgradeTimeout(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeTimeout",
        value: import_tx.MsgChannelUpgradeTimeout.encode(value).finish()
      };
    },
    channelUpgradeCancel(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeCancel",
        value: import_tx.MsgChannelUpgradeCancel.encode(value).finish()
      };
    },
    updateChannelParams(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgUpdateParams",
        value: import_tx.MsgUpdateParams.encode(value).finish()
      };
    },
    pruneAcknowledgements(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgPruneAcknowledgements",
        value: import_tx.MsgPruneAcknowledgements.encode(value).finish()
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
    },
    channelUpgradeInit(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeInit",
        value
      };
    },
    channelUpgradeTry(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeTry",
        value
      };
    },
    channelUpgradeAck(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeAck",
        value
      };
    },
    channelUpgradeConfirm(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeConfirm",
        value
      };
    },
    channelUpgradeOpen(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeOpen",
        value
      };
    },
    channelUpgradeTimeout(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeTimeout",
        value
      };
    },
    channelUpgradeCancel(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeCancel",
        value
      };
    },
    updateChannelParams(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgUpdateParams",
        value
      };
    },
    pruneAcknowledgements(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgPruneAcknowledgements",
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
    },
    channelUpgradeInit(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeInit",
        value: import_tx.MsgChannelUpgradeInit.fromPartial(value)
      };
    },
    channelUpgradeTry(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeTry",
        value: import_tx.MsgChannelUpgradeTry.fromPartial(value)
      };
    },
    channelUpgradeAck(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeAck",
        value: import_tx.MsgChannelUpgradeAck.fromPartial(value)
      };
    },
    channelUpgradeConfirm(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeConfirm",
        value: import_tx.MsgChannelUpgradeConfirm.fromPartial(value)
      };
    },
    channelUpgradeOpen(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeOpen",
        value: import_tx.MsgChannelUpgradeOpen.fromPartial(value)
      };
    },
    channelUpgradeTimeout(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeTimeout",
        value: import_tx.MsgChannelUpgradeTimeout.fromPartial(value)
      };
    },
    channelUpgradeCancel(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeCancel",
        value: import_tx.MsgChannelUpgradeCancel.fromPartial(value)
      };
    },
    updateChannelParams(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgUpdateParams",
        value: import_tx.MsgUpdateParams.fromPartial(value)
      };
    },
    pruneAcknowledgements(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgPruneAcknowledgements",
        value: import_tx.MsgPruneAcknowledgements.fromPartial(value)
      };
    }
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  MessageComposer,
  load,
  registry
});
