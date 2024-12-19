import { BinaryReader } from "../../../binary";
import { MsgSend, MsgSendResponse, MsgMultiSend, MsgMultiSendResponse } from "./tx";
class MsgClientImpl {
  rpc;
  constructor(rpc) {
    this.rpc = rpc;
    this.send = this.send.bind(this);
    this.multiSend = this.multiSend.bind(this);
  }
  send(request) {
    const data = MsgSend.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Msg", "Send", data);
    return promise.then((data2) => MsgSendResponse.decode(new BinaryReader(data2)));
  }
  multiSend(request) {
    const data = MsgMultiSend.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Msg", "MultiSend", data);
    return promise.then((data2) => MsgMultiSendResponse.decode(new BinaryReader(data2)));
  }
}
export {
  MsgClientImpl
};
