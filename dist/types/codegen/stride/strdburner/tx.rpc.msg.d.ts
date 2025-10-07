import { TxRpc } from "../../types";
import { MsgBurn, MsgBurnResponse, MsgLink, MsgLinkResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
    /** Burn STRD */
    burn(request: MsgBurn): Promise<MsgBurnResponse>;
    /** Link non-stride address */
    link(request: MsgLink): Promise<MsgLinkResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: TxRpc);
    burn(request: MsgBurn): Promise<MsgBurnResponse>;
    link(request: MsgLink): Promise<MsgLinkResponse>;
}
