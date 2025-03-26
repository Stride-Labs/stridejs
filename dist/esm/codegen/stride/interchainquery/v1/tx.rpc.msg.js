import { BinaryReader } from "../../../binary";
import { MsgSubmitQueryResponse, MsgSubmitQueryResponseResponse } from "./tx";
class MsgClientImpl {
  rpc;
  constructor(rpc) {
    this.rpc = rpc;
    this.submitQueryResponse = this.submitQueryResponse.bind(this);
  }
  submitQueryResponse(request) {
    const data = MsgSubmitQueryResponse.encode(request).finish();
    const promise = this.rpc.request("stride.interchainquery.v1.Msg", "SubmitQueryResponse", data);
    return promise.then((data2) => MsgSubmitQueryResponseResponse.decode(new BinaryReader(data2)));
  }
}
export {
  MsgClientImpl
};
