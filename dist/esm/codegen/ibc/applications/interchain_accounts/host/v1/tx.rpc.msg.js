import { BinaryReader } from "../../../../../binary";
import { MsgModuleQuerySafe, MsgModuleQuerySafeResponse } from "./tx";
class MsgClientImpl {
  rpc;
  constructor(rpc) {
    this.rpc = rpc;
    this.moduleQuerySafe = this.moduleQuerySafe.bind(this);
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
