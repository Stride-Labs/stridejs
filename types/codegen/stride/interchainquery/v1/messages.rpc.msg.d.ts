import { TxRpc } from "../../../types";
import { MsgSubmitQueryResponse, MsgSubmitQueryResponseResponse } from "./messages";
/** Msg defines the interchainquery Msg service. */
export interface Msg {
    /** SubmitQueryResponse defines a method for submit query responses. */
    submitQueryResponse(request: MsgSubmitQueryResponse): Promise<MsgSubmitQueryResponseResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: TxRpc);
    submitQueryResponse(request: MsgSubmitQueryResponse): Promise<MsgSubmitQueryResponseResponse>;
}
