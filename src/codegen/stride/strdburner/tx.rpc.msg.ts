import { TxRpc } from "../../types";
import { BinaryReader } from "../../binary";
import { MsgBurn, MsgBurnResponse, MsgLink, MsgLinkResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  /** Burn STRD */
  burn(request: MsgBurn): Promise<MsgBurnResponse>;
  /** Link non-stride address */
  link(request: MsgLink): Promise<MsgLinkResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
    this.burn = this.burn.bind(this);
    this.link = this.link.bind(this);
  }
  burn(request: MsgBurn): Promise<MsgBurnResponse> {
    const data = MsgBurn.encode(request).finish();
    const promise = this.rpc.request("stride.strdburner.Msg", "Burn", data);
    return promise.then(data => MsgBurnResponse.decode(new BinaryReader(data)));
  }
  link(request: MsgLink): Promise<MsgLinkResponse> {
    const data = MsgLink.encode(request).finish();
    const promise = this.rpc.request("stride.strdburner.Msg", "Link", data);
    return promise.then(data => MsgLinkResponse.decode(new BinaryReader(data)));
  }
}