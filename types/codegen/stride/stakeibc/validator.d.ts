import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
export interface Validator {
    name: string;
    address: string;
    weight: Long;
    delegation: string;
    slashQueryProgressTracker: string;
    slashQueryCheckpoint: string;
    sharesToTokensRate: string;
    delegationChangesInProgress: Long;
    slashQueryInProgress: boolean;
}
export interface ValidatorSDKType {
    name: string;
    address: string;
    weight: Long;
    delegation: string;
    slash_query_progress_tracker: string;
    slash_query_checkpoint: string;
    shares_to_tokens_rate: string;
    delegation_changes_in_progress: Long;
    slash_query_in_progress: boolean;
}
export declare const Validator: {
    encode(message: Validator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Validator;
    fromPartial(object: DeepPartial<Validator>): Validator;
};
