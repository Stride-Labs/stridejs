import { BinaryReader } from "../../../binary";
import { MsgGrantAllowance, MsgGrantAllowanceResponse, MsgRevokeAllowance, MsgRevokeAllowanceResponse } from "./tx";
class MsgClientImpl {
  rpc;
  constructor(rpc) {
    this.rpc = rpc;
    this.grantAllowance = this.grantAllowance.bind(this);
    this.revokeAllowance = this.revokeAllowance.bind(this);
  }
  grantAllowance(request) {
    const data = MsgGrantAllowance.encode(request).finish();
    const promise = this.rpc.request("cosmos.feegrant.v1beta1.Msg", "GrantAllowance", data);
    return promise.then((data2) => MsgGrantAllowanceResponse.decode(new BinaryReader(data2)));
  }
  revokeAllowance(request) {
    const data = MsgRevokeAllowance.encode(request).finish();
    const promise = this.rpc.request("cosmos.feegrant.v1beta1.Msg", "RevokeAllowance", data);
    return promise.then((data2) => MsgRevokeAllowanceResponse.decode(new BinaryReader(data2)));
  }
}
export {
  MsgClientImpl
};
