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
var tx_amino_exports = {};
__export(tx_amino_exports, {
  AminoConverter: () => AminoConverter
});
module.exports = __toCommonJS(tx_amino_exports);
var import_tx = require("./tx");
const AminoConverter = {
  "/ibc.core.channel.v1.MsgChannelOpenInit": {
    aminoType: "cosmos-sdk/MsgChannelOpenInit",
    toAmino: import_tx.MsgChannelOpenInit.toAmino,
    fromAmino: import_tx.MsgChannelOpenInit.fromAmino
  },
  "/ibc.core.channel.v1.MsgChannelOpenTry": {
    aminoType: "cosmos-sdk/MsgChannelOpenTry",
    toAmino: import_tx.MsgChannelOpenTry.toAmino,
    fromAmino: import_tx.MsgChannelOpenTry.fromAmino
  },
  "/ibc.core.channel.v1.MsgChannelOpenAck": {
    aminoType: "cosmos-sdk/MsgChannelOpenAck",
    toAmino: import_tx.MsgChannelOpenAck.toAmino,
    fromAmino: import_tx.MsgChannelOpenAck.fromAmino
  },
  "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
    aminoType: "cosmos-sdk/MsgChannelOpenConfirm",
    toAmino: import_tx.MsgChannelOpenConfirm.toAmino,
    fromAmino: import_tx.MsgChannelOpenConfirm.fromAmino
  },
  "/ibc.core.channel.v1.MsgChannelCloseInit": {
    aminoType: "cosmos-sdk/MsgChannelCloseInit",
    toAmino: import_tx.MsgChannelCloseInit.toAmino,
    fromAmino: import_tx.MsgChannelCloseInit.fromAmino
  },
  "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
    aminoType: "cosmos-sdk/MsgChannelCloseConfirm",
    toAmino: import_tx.MsgChannelCloseConfirm.toAmino,
    fromAmino: import_tx.MsgChannelCloseConfirm.fromAmino
  },
  "/ibc.core.channel.v1.MsgRecvPacket": {
    aminoType: "cosmos-sdk/MsgRecvPacket",
    toAmino: import_tx.MsgRecvPacket.toAmino,
    fromAmino: import_tx.MsgRecvPacket.fromAmino
  },
  "/ibc.core.channel.v1.MsgTimeout": {
    aminoType: "cosmos-sdk/MsgTimeout",
    toAmino: import_tx.MsgTimeout.toAmino,
    fromAmino: import_tx.MsgTimeout.fromAmino
  },
  "/ibc.core.channel.v1.MsgTimeoutOnClose": {
    aminoType: "cosmos-sdk/MsgTimeoutOnClose",
    toAmino: import_tx.MsgTimeoutOnClose.toAmino,
    fromAmino: import_tx.MsgTimeoutOnClose.fromAmino
  },
  "/ibc.core.channel.v1.MsgAcknowledgement": {
    aminoType: "cosmos-sdk/MsgAcknowledgement",
    toAmino: import_tx.MsgAcknowledgement.toAmino,
    fromAmino: import_tx.MsgAcknowledgement.fromAmino
  },
  "/ibc.core.channel.v1.MsgChannelUpgradeInit": {
    aminoType: "cosmos-sdk/MsgChannelUpgradeInit",
    toAmino: import_tx.MsgChannelUpgradeInit.toAmino,
    fromAmino: import_tx.MsgChannelUpgradeInit.fromAmino
  },
  "/ibc.core.channel.v1.MsgChannelUpgradeTry": {
    aminoType: "cosmos-sdk/MsgChannelUpgradeTry",
    toAmino: import_tx.MsgChannelUpgradeTry.toAmino,
    fromAmino: import_tx.MsgChannelUpgradeTry.fromAmino
  },
  "/ibc.core.channel.v1.MsgChannelUpgradeAck": {
    aminoType: "cosmos-sdk/MsgChannelUpgradeAck",
    toAmino: import_tx.MsgChannelUpgradeAck.toAmino,
    fromAmino: import_tx.MsgChannelUpgradeAck.fromAmino
  },
  "/ibc.core.channel.v1.MsgChannelUpgradeConfirm": {
    aminoType: "cosmos-sdk/MsgChannelUpgradeConfirm",
    toAmino: import_tx.MsgChannelUpgradeConfirm.toAmino,
    fromAmino: import_tx.MsgChannelUpgradeConfirm.fromAmino
  },
  "/ibc.core.channel.v1.MsgChannelUpgradeOpen": {
    aminoType: "cosmos-sdk/MsgChannelUpgradeOpen",
    toAmino: import_tx.MsgChannelUpgradeOpen.toAmino,
    fromAmino: import_tx.MsgChannelUpgradeOpen.fromAmino
  },
  "/ibc.core.channel.v1.MsgChannelUpgradeTimeout": {
    aminoType: "cosmos-sdk/MsgChannelUpgradeTimeout",
    toAmino: import_tx.MsgChannelUpgradeTimeout.toAmino,
    fromAmino: import_tx.MsgChannelUpgradeTimeout.fromAmino
  },
  "/ibc.core.channel.v1.MsgChannelUpgradeCancel": {
    aminoType: "cosmos-sdk/MsgChannelUpgradeCancel",
    toAmino: import_tx.MsgChannelUpgradeCancel.toAmino,
    fromAmino: import_tx.MsgChannelUpgradeCancel.fromAmino
  },
  "/ibc.core.channel.v1.MsgUpdateParams": {
    aminoType: "cosmos-sdk/MsgUpdateParams",
    toAmino: import_tx.MsgUpdateParams.toAmino,
    fromAmino: import_tx.MsgUpdateParams.fromAmino
  },
  "/ibc.core.channel.v1.MsgPruneAcknowledgements": {
    aminoType: "cosmos-sdk/MsgPruneAcknowledgements",
    toAmino: import_tx.MsgPruneAcknowledgements.toAmino,
    fromAmino: import_tx.MsgPruneAcknowledgements.fromAmino
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AminoConverter
});
