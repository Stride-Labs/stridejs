import { BinaryReader } from "../../../../../binary";
import { MsgUpdateParams, MsgUpdateParamsResponse, MsgModuleQuerySafe, MsgModuleQuerySafeResponse } from "./tx";
class MsgClientImpl {
  rpc;
  constructor(rpc) {
    this.rpc = rpc;
    this.updateParams = this.updateParams.bind(this);
    this.moduleQuerySafe = this.moduleQuerySafe.bind(this);
  }
  updateParams(request) {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.interchain_accounts.host.v1.Msg", "UpdateParams", data);
    return promise.then((data2) => MsgUpdateParamsResponse.decode(new BinaryReader(data2)));
  }
  moduleQuerySafe(request) {
    const data = MsgModuleQuerySafe.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.interchain_accounts.host.v1.Msg", "ModuleQuerySafe", data);
    return promise.then((data2) => MsgModuleQuerySafeResponse.decode(new BinaryReader(data2)));
  }
}
export {
  MsgClientImpl
};
