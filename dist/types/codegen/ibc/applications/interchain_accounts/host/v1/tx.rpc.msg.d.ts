import { TxRpc } from "../../../../../types";
import { MsgModuleQuerySafe, MsgModuleQuerySafeResponse } from "./tx";
/** Msg defines the 27-interchain-accounts/host Msg service. */
export interface Msg {
    /** ModuleQuerySafe defines a rpc handler for MsgModuleQuerySafe. */
    moduleQuerySafe(request: MsgModuleQuerySafe): Promise<MsgModuleQuerySafeResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: TxRpc);
    moduleQuerySafe(request: MsgModuleQuerySafe): Promise<MsgModuleQuerySafeResponse>;
}
