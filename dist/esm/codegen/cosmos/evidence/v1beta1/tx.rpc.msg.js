import { BinaryReader } from "../../../binary";
import { MsgSubmitEvidence, MsgSubmitEvidenceResponse } from "./tx";
class MsgClientImpl {
  rpc;
  constructor(rpc) {
    this.rpc = rpc;
    this.submitEvidence = this.submitEvidence.bind(this);
  }
  submitEvidence(request) {
    const data = MsgSubmitEvidence.encode(request).finish();
    const promise = this.rpc.request("cosmos.evidence.v1beta1.Msg", "SubmitEvidence", data);
    return promise.then((data2) => MsgSubmitEvidenceResponse.decode(new BinaryReader(data2)));
  }
}
export {
  MsgClientImpl
};
