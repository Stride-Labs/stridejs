import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export declare enum Action {
    ActionFree = 0,
    ActionLiquidStake = 1,
    ActionDelegateStake = 2,
    UNRECOGNIZED = -1
}
export declare enum ActionSDKType {
    ActionFree = 0,
    ActionLiquidStake = 1,
    ActionDelegateStake = 2,
    UNRECOGNIZED = -1
}
export declare function actionFromJSON(object: any): Action;
export declare function actionToJSON(object: Action): string;
/** A Claim Records is the metadata of claim data per address */
export interface ClaimRecord {
    /** airdrop identifier */
    airdropIdentifier: string;
    /** address of claim user */
    address: string;
    /** weight that represent the portion from total allocation */
    weight: string;
    /**
     * true if action is completed
     * index of bool in array refers to action enum #
     */
    actionCompleted: boolean[];
}
/** A Claim Records is the metadata of claim data per address */
export interface ClaimRecordSDKType {
    /** airdrop identifier */
    airdrop_identifier: string;
    /** address of claim user */
    address: string;
    /** weight that represent the portion from total allocation */
    weight: string;
    /**
     * true if action is completed
     * index of bool in array refers to action enum #
     */
    action_completed: boolean[];
}
export declare const ClaimRecord: {
    encode(message: ClaimRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClaimRecord;
    fromPartial(object: DeepPartial<ClaimRecord>): ClaimRecord;
};
