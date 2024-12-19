import { TxRpc } from "../../types";
import { MsgRegisterTokenPriceQuery, MsgRegisterTokenPriceQueryResponse, MsgRemoveTokenPriceQuery, MsgRemoveTokenPriceQueryResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
    /** RegisterTokenPriceQuery registers a new token to track prices for */
    registerTokenPriceQuery(request: MsgRegisterTokenPriceQuery): Promise<MsgRegisterTokenPriceQueryResponse>;
    /** RemoveTokenPriceQuery removes a token from price tracking */
    removeTokenPriceQuery(request: MsgRemoveTokenPriceQuery): Promise<MsgRemoveTokenPriceQueryResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: TxRpc);
    registerTokenPriceQuery(request: MsgRegisterTokenPriceQuery): Promise<MsgRegisterTokenPriceQueryResponse>;
    removeTokenPriceQuery(request: MsgRemoveTokenPriceQuery): Promise<MsgRemoveTokenPriceQueryResponse>;
}
