import { TxRpc } from "../../../types";
import { MsgSubmitEvidence, MsgSubmitEvidenceResponse } from "./tx";
/** Msg defines the evidence Msg service. */
export interface Msg {
    /**
     * SubmitEvidence submits an arbitrary Evidence of misbehavior such as equivocation or
     * counterfactual signing.
     */
    submitEvidence(request: MsgSubmitEvidence): Promise<MsgSubmitEvidenceResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: TxRpc);
    submitEvidence(request: MsgSubmitEvidence): Promise<MsgSubmitEvidenceResponse>;
}
