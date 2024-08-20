import { TxRpc } from "../../../../types";
import { MsgTransfer, MsgTransferResponse } from "./tx";
/** Msg defines the ibc/transfer Msg service. */
export interface Msg {
    /** Transfer defines a rpc handler method for MsgTransfer. */
    transfer(request: MsgTransfer): Promise<MsgTransferResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: TxRpc);
    transfer(request: MsgTransfer): Promise<MsgTransferResponse>;
}
