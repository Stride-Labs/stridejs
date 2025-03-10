import { TxRpc } from "../../../../../types";
import { BinaryReader } from "../../../../../binary";
import { MsgModuleQuerySafe, MsgModuleQuerySafeResponse } from "./tx";
/** Msg defines the 27-interchain-accounts/host Msg service. */
export interface Msg {
  /** ModuleQuerySafe defines a rpc handler for MsgModuleQuerySafe. */
  moduleQuerySafe(request: MsgModuleQuerySafe): Promise<MsgModuleQuerySafeResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
    this.moduleQuerySafe = this.moduleQuerySafe.bind(this);
  }
  moduleQuerySafe(request: MsgModuleQuerySafe): Promise<MsgModuleQuerySafeResponse> {
    const data = MsgModuleQuerySafe.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.interchain_accounts.host.v1.Msg", "ModuleQuerySafe", data);
    return promise.then(data => MsgModuleQuerySafeResponse.decode(new BinaryReader(data)));
  }
}