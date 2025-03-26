import { BinaryReader } from "../../../../binary";
import { MsgConnectionOpenInit, MsgConnectionOpenInitResponse, MsgConnectionOpenTry, MsgConnectionOpenTryResponse, MsgConnectionOpenAck, MsgConnectionOpenAckResponse, MsgConnectionOpenConfirm, MsgConnectionOpenConfirmResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
class MsgClientImpl {
  rpc;
  constructor(rpc) {
    this.rpc = rpc;
    this.connectionOpenInit = this.connectionOpenInit.bind(this);
    this.connectionOpenTry = this.connectionOpenTry.bind(this);
    this.connectionOpenAck = this.connectionOpenAck.bind(this);
    this.connectionOpenConfirm = this.connectionOpenConfirm.bind(this);
    this.updateConnectionParams = this.updateConnectionParams.bind(this);
  }
  connectionOpenInit(request) {
    const data = MsgConnectionOpenInit.encode(request).finish();
    const promise = this.rpc.request("ibc.core.connection.v1.Msg", "ConnectionOpenInit", data);
    return promise.then((data2) => MsgConnectionOpenInitResponse.decode(new BinaryReader(data2)));
  }
  connectionOpenTry(request) {
    const data = MsgConnectionOpenTry.encode(request).finish();
    const promise = this.rpc.request("ibc.core.connection.v1.Msg", "ConnectionOpenTry", data);
    return promise.then((data2) => MsgConnectionOpenTryResponse.decode(new BinaryReader(data2)));
  }
  connectionOpenAck(request) {
    const data = MsgConnectionOpenAck.encode(request).finish();
    const promise = this.rpc.request("ibc.core.connection.v1.Msg", "ConnectionOpenAck", data);
    return promise.then((data2) => MsgConnectionOpenAckResponse.decode(new BinaryReader(data2)));
  }
  connectionOpenConfirm(request) {
    const data = MsgConnectionOpenConfirm.encode(request).finish();
    const promise = this.rpc.request("ibc.core.connection.v1.Msg", "ConnectionOpenConfirm", data);
    return promise.then((data2) => MsgConnectionOpenConfirmResponse.decode(new BinaryReader(data2)));
  }
  updateConnectionParams(request) {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("ibc.core.connection.v1.Msg", "UpdateConnectionParams", data);
    return promise.then((data2) => MsgUpdateParamsResponse.decode(new BinaryReader(data2)));
  }
}
export {
  MsgClientImpl
};
