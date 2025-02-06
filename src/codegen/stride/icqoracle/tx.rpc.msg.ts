import { TxRpc } from "../../types";
import { BinaryReader } from "../../binary";
import { MsgRegisterTokenPriceQuery, MsgRegisterTokenPriceQueryResponse, MsgRemoveTokenPriceQuery, MsgRemoveTokenPriceQueryResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  /** RegisterTokenPriceQuery registers a new token to track prices for */
  registerTokenPriceQuery(request: MsgRegisterTokenPriceQuery): Promise<MsgRegisterTokenPriceQueryResponse>;
  /** RemoveTokenPriceQuery removes a token from price tracking */
  removeTokenPriceQuery(request: MsgRemoveTokenPriceQuery): Promise<MsgRemoveTokenPriceQueryResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
    this.registerTokenPriceQuery = this.registerTokenPriceQuery.bind(this);
    this.removeTokenPriceQuery = this.removeTokenPriceQuery.bind(this);
  }
  registerTokenPriceQuery(request: MsgRegisterTokenPriceQuery): Promise<MsgRegisterTokenPriceQueryResponse> {
    const data = MsgRegisterTokenPriceQuery.encode(request).finish();
    const promise = this.rpc.request("stride.icqoracle.Msg", "RegisterTokenPriceQuery", data);
    return promise.then(data => MsgRegisterTokenPriceQueryResponse.decode(new BinaryReader(data)));
  }
  removeTokenPriceQuery(request: MsgRemoveTokenPriceQuery): Promise<MsgRemoveTokenPriceQueryResponse> {
    const data = MsgRemoveTokenPriceQuery.encode(request).finish();
    const promise = this.rpc.request("stride.icqoracle.Msg", "RemoveTokenPriceQuery", data);
    return promise.then(data => MsgRemoveTokenPriceQueryResponse.decode(new BinaryReader(data)));
  }
}