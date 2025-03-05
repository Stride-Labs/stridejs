import { BinaryReader } from "../../../binary";
import { MsgVerifyInvariant, MsgVerifyInvariantResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
class MsgClientImpl {
  rpc;
  constructor(rpc) {
    this.rpc = rpc;
    this.verifyInvariant = this.verifyInvariant.bind(this);
    this.updateParams = this.updateParams.bind(this);
  }
  verifyInvariant(request) {
    const data = MsgVerifyInvariant.encode(request).finish();
    const promise = this.rpc.request("cosmos.crisis.v1beta1.Msg", "VerifyInvariant", data);
    return promise.then((data2) => MsgVerifyInvariantResponse.decode(new BinaryReader(data2)));
  }
  updateParams(request) {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("cosmos.crisis.v1beta1.Msg", "UpdateParams", data);
    return promise.then((data2) => MsgUpdateParamsResponse.decode(new BinaryReader(data2)));
  }
}
export {
  MsgClientImpl
};
