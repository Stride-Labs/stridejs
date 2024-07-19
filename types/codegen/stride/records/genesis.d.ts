import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { UserRedemptionRecord, UserRedemptionRecordAmino, UserRedemptionRecordSDKType, EpochUnbondingRecord, EpochUnbondingRecordAmino, EpochUnbondingRecordSDKType, DepositRecord, DepositRecordAmino, DepositRecordSDKType, LSMTokenDeposit, LSMTokenDepositAmino, LSMTokenDepositSDKType } from "./records";
import { BinaryReader, BinaryWriter } from "../../binary";
/** GenesisState defines the records module's genesis state. */
export interface GenesisState {
    params: Params;
    portId: string;
    userRedemptionRecordList: UserRedemptionRecord[];
    userRedemptionRecordCount: bigint;
    epochUnbondingRecordList: EpochUnbondingRecord[];
    depositRecordList: DepositRecord[];
    depositRecordCount: bigint;
    lsmTokenDepositList: LSMTokenDeposit[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/stride.records.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the records module's genesis state. */
export interface GenesisStateAmino {
    params?: ParamsAmino;
    port_id?: string;
    user_redemption_record_list?: UserRedemptionRecordAmino[];
    user_redemption_record_count?: string;
    epoch_unbonding_record_list?: EpochUnbondingRecordAmino[];
    deposit_record_list?: DepositRecordAmino[];
    deposit_record_count?: string;
    lsm_token_deposit_list?: LSMTokenDepositAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/stride.records.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the records module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    port_id: string;
    user_redemption_record_list: UserRedemptionRecordSDKType[];
    user_redemption_record_count: bigint;
    epoch_unbonding_record_list: EpochUnbondingRecordSDKType[];
    deposit_record_list: DepositRecordSDKType[];
    deposit_record_count: bigint;
    lsm_token_deposit_list: LSMTokenDepositSDKType[];
}
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
