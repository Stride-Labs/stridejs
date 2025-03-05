import { Duration, DurationAmino, DurationSDKType } from "../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../binary";
export interface EpochInfo {
    identifier: string;
    startTime: Date;
    duration: Duration;
    currentEpoch: bigint;
    currentEpochStartTime: Date;
    epochCountingStarted: boolean;
    currentEpochStartHeight: bigint;
}
export interface EpochInfoProtoMsg {
    typeUrl: "/stride.epochs.EpochInfo";
    value: Uint8Array;
}
export interface EpochInfoAmino {
    identifier?: string;
    start_time?: string;
    duration?: DurationAmino;
    current_epoch?: string;
    current_epoch_start_time?: string;
    epoch_counting_started?: boolean;
    current_epoch_start_height?: string;
}
export interface EpochInfoAminoMsg {
    type: "/stride.epochs.EpochInfo";
    value: EpochInfoAmino;
}
export interface EpochInfoSDKType {
    identifier: string;
    start_time: Date;
    duration: DurationSDKType;
    current_epoch: bigint;
    current_epoch_start_time: Date;
    epoch_counting_started: boolean;
    current_epoch_start_height: bigint;
}
/** GenesisState defines the epochs module's genesis state. */
export interface GenesisState {
    epochs: EpochInfo[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/stride.epochs.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the epochs module's genesis state. */
export interface GenesisStateAmino {
    epochs?: EpochInfoAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/stride.epochs.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the epochs module's genesis state. */
export interface GenesisStateSDKType {
    epochs: EpochInfoSDKType[];
}
export declare const EpochInfo: {
    typeUrl: string;
    encode(message: EpochInfo, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EpochInfo;
    fromPartial(object: Partial<EpochInfo>): EpochInfo;
    fromAmino(object: EpochInfoAmino): EpochInfo;
    toAmino(message: EpochInfo): EpochInfoAmino;
    fromAminoMsg(object: EpochInfoAminoMsg): EpochInfo;
    fromProtoMsg(message: EpochInfoProtoMsg): EpochInfo;
    toProto(message: EpochInfo): Uint8Array;
    toProtoMsg(message: EpochInfo): EpochInfoProtoMsg;
};
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
