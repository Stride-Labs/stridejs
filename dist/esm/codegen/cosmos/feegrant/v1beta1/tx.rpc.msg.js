import { BinaryReader } from "../../../binary";
import { MsgGrantAllowance, MsgGrantAllowanceResponse, MsgRevokeAllowance, MsgRevokeAllowanceResponse, MsgPruneAllowances, MsgPruneAllowancesResponse } from "./tx";
class MsgClientImpl {
  rpc;
  constructor(rpc) {
    this.rpc = rpc;
    this.grantAllowance = this.grantAllowance.bind(this);
    this.revokeAllowance = this.revokeAllowance.bind(this);
    this.pruneAllowances = this.pruneAllowances.bind(this);
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
  pruneAllowances(request) {
    const data = MsgPruneAllowances.encode(request).finish();
    const promise = this.rpc.request("cosmos.feegrant.v1beta1.Msg", "PruneAllowances", data);
    return promise.then((data2) => MsgPruneAllowancesResponse.decode(new BinaryReader(data2)));
  }
}
export {
  MsgClientImpl
};
