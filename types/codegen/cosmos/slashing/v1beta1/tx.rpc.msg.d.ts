import { TxRpc } from "../../../types";
import { MsgUnjail, MsgUnjailResponse } from "./tx";
/** Msg defines the slashing Msg service. */
export interface Msg {
    /**
     * Unjail defines a method for unjailing a jailed validator, thus returning
     * them into the bonded validator set, so they can begin receiving provisions
     * and rewards again.
     */
    unjail(request: MsgUnjail): Promise<MsgUnjailResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: TxRpc);
    unjail(request: MsgUnjail): Promise<MsgUnjailResponse>;
}
