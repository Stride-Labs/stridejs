import { TxRpc } from "../../../types";
import { MsgVerifyInvariant, MsgVerifyInvariantResponse } from "./tx";
/** Msg defines the bank Msg service. */
export interface Msg {
    /** VerifyInvariant defines a method to verify a particular invariance. */
    verifyInvariant(request: MsgVerifyInvariant): Promise<MsgVerifyInvariantResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: TxRpc);
    verifyInvariant(request: MsgVerifyInvariant): Promise<MsgVerifyInvariantResponse>;
}
