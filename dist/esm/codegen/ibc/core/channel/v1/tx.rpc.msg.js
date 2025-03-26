import { BinaryReader } from "../../../../binary";
import { MsgChannelOpenInit, MsgChannelOpenInitResponse, MsgChannelOpenTry, MsgChannelOpenTryResponse, MsgChannelOpenAck, MsgChannelOpenAckResponse, MsgChannelOpenConfirm, MsgChannelOpenConfirmResponse, MsgChannelCloseInit, MsgChannelCloseInitResponse, MsgChannelCloseConfirm, MsgChannelCloseConfirmResponse, MsgRecvPacket, MsgRecvPacketResponse, MsgTimeout, MsgTimeoutResponse, MsgTimeoutOnClose, MsgTimeoutOnCloseResponse, MsgAcknowledgement, MsgAcknowledgementResponse, MsgChannelUpgradeInit, MsgChannelUpgradeInitResponse, MsgChannelUpgradeTry, MsgChannelUpgradeTryResponse, MsgChannelUpgradeAck, MsgChannelUpgradeAckResponse, MsgChannelUpgradeConfirm, MsgChannelUpgradeConfirmResponse, MsgChannelUpgradeOpen, MsgChannelUpgradeOpenResponse, MsgChannelUpgradeTimeout, MsgChannelUpgradeTimeoutResponse, MsgChannelUpgradeCancel, MsgChannelUpgradeCancelResponse, MsgUpdateParams, MsgUpdateParamsResponse, MsgPruneAcknowledgements, MsgPruneAcknowledgementsResponse } from "./tx";
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
    this.channelUpgradeInit = this.channelUpgradeInit.bind(this);
    this.channelUpgradeTry = this.channelUpgradeTry.bind(this);
    this.channelUpgradeAck = this.channelUpgradeAck.bind(this);
    this.channelUpgradeConfirm = this.channelUpgradeConfirm.bind(this);
    this.channelUpgradeOpen = this.channelUpgradeOpen.bind(this);
    this.channelUpgradeTimeout = this.channelUpgradeTimeout.bind(this);
    this.channelUpgradeCancel = this.channelUpgradeCancel.bind(this);
    this.updateChannelParams = this.updateChannelParams.bind(this);
    this.pruneAcknowledgements = this.pruneAcknowledgements.bind(this);
  }
  channelOpenInit(request) {
    const data = MsgChannelOpenInit.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Msg", "ChannelOpenInit", data);
    return promise.then((data2) => MsgChannelOpenInitResponse.decode(new BinaryReader(data2)));
  }
  channelOpenTry(request) {
    const data = MsgChannelOpenTry.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Msg", "ChannelOpenTry", data);
    return promise.then((data2) => MsgChannelOpenTryResponse.decode(new BinaryReader(data2)));
  }
  channelOpenAck(request) {
    const data = MsgChannelOpenAck.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Msg", "ChannelOpenAck", data);
    return promise.then((data2) => MsgChannelOpenAckResponse.decode(new BinaryReader(data2)));
  }
  channelOpenConfirm(request) {
    const data = MsgChannelOpenConfirm.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Msg", "ChannelOpenConfirm", data);
    return promise.then((data2) => MsgChannelOpenConfirmResponse.decode(new BinaryReader(data2)));
  }
  channelCloseInit(request) {
    const data = MsgChannelCloseInit.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Msg", "ChannelCloseInit", data);
    return promise.then((data2) => MsgChannelCloseInitResponse.decode(new BinaryReader(data2)));
  }
  channelCloseConfirm(request) {
    const data = MsgChannelCloseConfirm.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Msg", "ChannelCloseConfirm", data);
    return promise.then((data2) => MsgChannelCloseConfirmResponse.decode(new BinaryReader(data2)));
  }
  recvPacket(request) {
    const data = MsgRecvPacket.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Msg", "RecvPacket", data);
    return promise.then((data2) => MsgRecvPacketResponse.decode(new BinaryReader(data2)));
  }
  timeout(request) {
    const data = MsgTimeout.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Msg", "Timeout", data);
    return promise.then((data2) => MsgTimeoutResponse.decode(new BinaryReader(data2)));
  }
  timeoutOnClose(request) {
    const data = MsgTimeoutOnClose.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Msg", "TimeoutOnClose", data);
    return promise.then((data2) => MsgTimeoutOnCloseResponse.decode(new BinaryReader(data2)));
  }
  acknowledgement(request) {
    const data = MsgAcknowledgement.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Msg", "Acknowledgement", data);
    return promise.then((data2) => MsgAcknowledgementResponse.decode(new BinaryReader(data2)));
  }
  channelUpgradeInit(request) {
    const data = MsgChannelUpgradeInit.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Msg", "ChannelUpgradeInit", data);
    return promise.then((data2) => MsgChannelUpgradeInitResponse.decode(new BinaryReader(data2)));
  }
  channelUpgradeTry(request) {
    const data = MsgChannelUpgradeTry.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Msg", "ChannelUpgradeTry", data);
    return promise.then((data2) => MsgChannelUpgradeTryResponse.decode(new BinaryReader(data2)));
  }
  channelUpgradeAck(request) {
    const data = MsgChannelUpgradeAck.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Msg", "ChannelUpgradeAck", data);
    return promise.then((data2) => MsgChannelUpgradeAckResponse.decode(new BinaryReader(data2)));
  }
  channelUpgradeConfirm(request) {
    const data = MsgChannelUpgradeConfirm.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Msg", "ChannelUpgradeConfirm", data);
    return promise.then((data2) => MsgChannelUpgradeConfirmResponse.decode(new BinaryReader(data2)));
  }
  channelUpgradeOpen(request) {
    const data = MsgChannelUpgradeOpen.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Msg", "ChannelUpgradeOpen", data);
    return promise.then((data2) => MsgChannelUpgradeOpenResponse.decode(new BinaryReader(data2)));
  }
  channelUpgradeTimeout(request) {
    const data = MsgChannelUpgradeTimeout.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Msg", "ChannelUpgradeTimeout", data);
    return promise.then((data2) => MsgChannelUpgradeTimeoutResponse.decode(new BinaryReader(data2)));
  }
  channelUpgradeCancel(request) {
    const data = MsgChannelUpgradeCancel.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Msg", "ChannelUpgradeCancel", data);
    return promise.then((data2) => MsgChannelUpgradeCancelResponse.decode(new BinaryReader(data2)));
  }
  updateChannelParams(request) {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Msg", "UpdateChannelParams", data);
    return promise.then((data2) => MsgUpdateParamsResponse.decode(new BinaryReader(data2)));
  }
  pruneAcknowledgements(request) {
    const data = MsgPruneAcknowledgements.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Msg", "PruneAcknowledgements", data);
    return promise.then((data2) => MsgPruneAcknowledgementsResponse.decode(new BinaryReader(data2)));
  }
}
export {
  MsgClientImpl
};
