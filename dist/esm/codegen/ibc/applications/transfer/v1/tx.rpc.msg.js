import { BinaryReader } from "../../../../binary";
import { MsgTransfer, MsgTransferResponse } from "./tx";
class MsgClientImpl {
  rpc;
  constructor(rpc) {
    this.rpc = rpc;
    this.transfer = this.transfer.bind(this);
  }
  transfer(request) {
    const data = MsgTransfer.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.transfer.v1.Msg", "Transfer", data);
    return promise.then((data2) => MsgTransferResponse.decode(new BinaryReader(data2)));
  }
}
export {
  MsgClientImpl
};
