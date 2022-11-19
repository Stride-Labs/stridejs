import { Rpc } from "@osmonauts/helpers";
import { MsgSubmitQueryResponse, MsgSubmitQueryResponseResponse } from "./messages";
/** Msg defines the RPC service */
export interface Msg {
    submitQueryResponse(request: MsgSubmitQueryResponse): Promise<MsgSubmitQueryResponseResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    submitQueryResponse(request: MsgSubmitQueryResponse): Promise<MsgSubmitQueryResponseResponse>;
}
