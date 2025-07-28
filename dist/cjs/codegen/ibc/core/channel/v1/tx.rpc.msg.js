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
var tx_rpc_msg_exports = {};
__export(tx_rpc_msg_exports, {
  MsgClientImpl: () => MsgClientImpl
});
module.exports = __toCommonJS(tx_rpc_msg_exports);
var import_binary = require("../../../../binary");
var import_tx = require("./tx");
class MsgClientImpl {
  rpc;
  constructor(rpc) {
    this.rpc = rpc;
    this.channelOpenInit = this.channelOpenInit.bind(this);
    this.channelOpenTry = this.channelOpenTry.bind(this);
    this.channelOpenAck = this.channelOpenAck.bind(this);
    this.channelOpenConfirm = this.channelOpenConfirm.bind(this);
    this.channelCloseInit = this.channelCloseInit.bind(this);
    this.channelCloseConfirm = this.channelCloseConfirm.bind(this);
    this.recvPacket = this.recvPacket.bind(this);
    this.timeout = this.timeout.bind(this);
    this.timeoutOnClose = this.timeoutOnClose.bind(this);
    this.acknowledgement = this.acknowledgement.bind(this);
  }
  channelOpenInit(request) {
    const data = import_tx.MsgChannelOpenInit.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Msg", "ChannelOpenInit", data);
    return promise.then((data2) => import_tx.MsgChannelOpenInitResponse.decode(new import_binary.BinaryReader(data2)));
  }
  channelOpenTry(request) {
    const data = import_tx.MsgChannelOpenTry.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Msg", "ChannelOpenTry", data);
    return promise.then((data2) => import_tx.MsgChannelOpenTryResponse.decode(new import_binary.BinaryReader(data2)));
  }
  channelOpenAck(request) {
    const data = import_tx.MsgChannelOpenAck.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Msg", "ChannelOpenAck", data);
    return promise.then((data2) => import_tx.MsgChannelOpenAckResponse.decode(new import_binary.BinaryReader(data2)));
  }
  channelOpenConfirm(request) {
    const data = import_tx.MsgChannelOpenConfirm.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Msg", "ChannelOpenConfirm", data);
    return promise.then((data2) => import_tx.MsgChannelOpenConfirmResponse.decode(new import_binary.BinaryReader(data2)));
  }
  channelCloseInit(request) {
    const data = import_tx.MsgChannelCloseInit.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Msg", "ChannelCloseInit", data);
    return promise.then((data2) => import_tx.MsgChannelCloseInitResponse.decode(new import_binary.BinaryReader(data2)));
  }
  channelCloseConfirm(request) {
    const data = import_tx.MsgChannelCloseConfirm.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Msg", "ChannelCloseConfirm", data);
    return promise.then((data2) => import_tx.MsgChannelCloseConfirmResponse.decode(new import_binary.BinaryReader(data2)));
  }
  recvPacket(request) {
    const data = import_tx.MsgRecvPacket.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Msg", "RecvPacket", data);
    return promise.then((data2) => import_tx.MsgRecvPacketResponse.decode(new import_binary.BinaryReader(data2)));
  }
  timeout(request) {
    const data = import_tx.MsgTimeout.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Msg", "Timeout", data);
    return promise.then((data2) => import_tx.MsgTimeoutResponse.decode(new import_binary.BinaryReader(data2)));
  }
  timeoutOnClose(request) {
    const data = import_tx.MsgTimeoutOnClose.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Msg", "TimeoutOnClose", data);
    return promise.then((data2) => import_tx.MsgTimeoutOnCloseResponse.decode(new import_binary.BinaryReader(data2)));
  }
  acknowledgement(request) {
    const data = import_tx.MsgAcknowledgement.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Msg", "Acknowledgement", data);
    return promise.then((data2) => import_tx.MsgAcknowledgementResponse.decode(new import_binary.BinaryReader(data2)));
  }
}
// Removed broken CommonJS export annotation
