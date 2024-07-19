import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgSubmitQueryResponse, MsgSubmitQueryResponseResponse } from "./messages";
/** Msg defines the interchainquery Msg service. */
export interface Msg {
  /** SubmitQueryResponse defines a method for submit query responses. */
  submitQueryResponse(request: MsgSubmitQueryResponse): Promise<MsgSubmitQueryResponseResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.submitQueryResponse = this.submitQueryResponse.bind(this);
  }
  submitQueryResponse(request: MsgSubmitQueryResponse): Promise<MsgSubmitQueryResponseResponse> {
    const data = MsgSubmitQueryResponse.encode(request).finish();
    const promise = this.rpc.request("stride.interchainquery.v1.Msg", "SubmitQueryResponse", data);
    return promise.then(data => MsgSubmitQueryResponseResponse.decode(new BinaryReader(data)));
  }
}