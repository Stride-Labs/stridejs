import { BinaryReader } from "../../../../binary";
import { MsgRegisterPayee, MsgRegisterPayeeResponse, MsgRegisterCounterpartyPayee, MsgRegisterCounterpartyPayeeResponse, MsgPayPacketFee, MsgPayPacketFeeResponse, MsgPayPacketFeeAsync, MsgPayPacketFeeAsyncResponse } from "./tx";
class MsgClientImpl {
  rpc;
  constructor(rpc) {
    this.rpc = rpc;
    this.registerPayee = this.registerPayee.bind(this);
    this.registerCounterpartyPayee = this.registerCounterpartyPayee.bind(this);
    this.payPacketFee = this.payPacketFee.bind(this);
    this.payPacketFeeAsync = this.payPacketFeeAsync.bind(this);
  }
  registerPayee(request) {
    const data = MsgRegisterPayee.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.fee.v1.Msg", "RegisterPayee", data);
    return promise.then((data2) => MsgRegisterPayeeResponse.decode(new BinaryReader(data2)));
  }
  registerCounterpartyPayee(request) {
    const data = MsgRegisterCounterpartyPayee.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.fee.v1.Msg", "RegisterCounterpartyPayee", data);
    return promise.then((data2) => MsgRegisterCounterpartyPayeeResponse.decode(new BinaryReader(data2)));
  }
  payPacketFee(request) {
    const data = MsgPayPacketFee.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.fee.v1.Msg", "PayPacketFee", data);
    return promise.then((data2) => MsgPayPacketFeeResponse.decode(new BinaryReader(data2)));
  }
  payPacketFeeAsync(request) {
    const data = MsgPayPacketFeeAsync.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.fee.v1.Msg", "PayPacketFeeAsync", data);
    return promise.then((data2) => MsgPayPacketFeeAsyncResponse.decode(new BinaryReader(data2)));
  }
}
export {
  MsgClientImpl
};
