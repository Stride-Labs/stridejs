import { ProofOps, ProofOpsSDKType } from "../../../tendermint/crypto/proof";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "../../../helpers";
/** MsgSubmitQueryResponse represents a message type to fulfil a query request. */
export interface MsgSubmitQueryResponse {
    chainId: string;
    queryId: string;
    result: Uint8Array;
    proofOps?: ProofOps;
    height: Long;
    fromAddress: string;
}
/** MsgSubmitQueryResponse represents a message type to fulfil a query request. */
export interface MsgSubmitQueryResponseSDKType {
    chain_id: string;
    query_id: string;
    result: Uint8Array;
    proof_ops?: ProofOpsSDKType;
    height: Long;
    from_address: string;
}
/**
 * MsgSubmitQueryResponseResponse defines the MsgSubmitQueryResponse response
 * type.
 */
export interface MsgSubmitQueryResponseResponse {
}
/**
 * MsgSubmitQueryResponseResponse defines the MsgSubmitQueryResponse response
 * type.
 */
export interface MsgSubmitQueryResponseResponseSDKType {
}
export declare const MsgSubmitQueryResponse: {
    encode(message: MsgSubmitQueryResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitQueryResponse;
    fromPartial(object: DeepPartial<MsgSubmitQueryResponse>): MsgSubmitQueryResponse;
};
export declare const MsgSubmitQueryResponseResponse: {
    encode(_: MsgSubmitQueryResponseResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitQueryResponseResponse;
    fromPartial(_: DeepPartial<MsgSubmitQueryResponseResponse>): MsgSubmitQueryResponseResponse;
};
