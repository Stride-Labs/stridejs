import { BinaryReader } from "../../../binary";
import { MsgGrant, MsgGrantResponse, MsgExec, MsgExecResponse, MsgRevoke, MsgRevokeResponse } from "./tx";
class MsgClientImpl {
  rpc;
  constructor(rpc) {
    this.rpc = rpc;
    this.grant = this.grant.bind(this);
    this.exec = this.exec.bind(this);
    this.revoke = this.revoke.bind(this);
  }
  grant(request) {
    const data = MsgGrant.encode(request).finish();
    const promise = this.rpc.request("cosmos.authz.v1beta1.Msg", "Grant", data);
    return promise.then((data2) => MsgGrantResponse.decode(new BinaryReader(data2)));
  }
  exec(request) {
    const data = MsgExec.encode(request).finish();
    const promise = this.rpc.request("cosmos.authz.v1beta1.Msg", "Exec", data);
    return promise.then((data2) => MsgExecResponse.decode(new BinaryReader(data2)));
  }
  revoke(request) {
    const data = MsgRevoke.encode(request).finish();
    const promise = this.rpc.request("cosmos.authz.v1beta1.Msg", "Revoke", data);
    return promise.then((data2) => MsgRevokeResponse.decode(new BinaryReader(data2)));
  }
}
export {
  MsgClientImpl
};
