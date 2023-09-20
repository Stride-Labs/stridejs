import { Params, ParamsSDKType } from "./params";
import { UserRedemptionRecord, UserRedemptionRecordSDKType, EpochUnbondingRecord, EpochUnbondingRecordSDKType, DepositRecord, DepositRecordSDKType } from "./records";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
/** GenesisState defines the records module's genesis state. */
export interface GenesisState {
    params: Params;
    portId: string;
    userRedemptionRecordList: UserRedemptionRecord[];
    userRedemptionRecordCount: Long;
    epochUnbondingRecordList: EpochUnbondingRecord[];
    depositRecordList: DepositRecord[];
    depositRecordCount: Long;
}
/** GenesisState defines the records module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    port_id: string;
    user_redemption_record_list: UserRedemptionRecordSDKType[];
    user_redemption_record_count: Long;
    epoch_unbonding_record_list: EpochUnbondingRecordSDKType[];
    deposit_record_list: DepositRecordSDKType[];
    deposit_record_count: Long;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
