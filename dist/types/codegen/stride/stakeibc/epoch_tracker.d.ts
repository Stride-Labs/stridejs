import { BinaryReader, BinaryWriter } from "../../binary";
export interface EpochTracker {
    epochIdentifier: string;
    epochNumber: bigint;
    nextEpochStartTime: bigint;
    duration: bigint;
}
export interface EpochTrackerProtoMsg {
    typeUrl: "/stride.stakeibc.EpochTracker";
    value: Uint8Array;
}
/**
 * @name EpochTrackerAmino
 * @package stride.stakeibc
 * @see proto type: stride.stakeibc.EpochTracker
 */
export interface EpochTrackerAmino {
    epoch_identifier?: string;
    epoch_number?: string;
    next_epoch_start_time?: string;
    duration?: string;
}
export interface EpochTrackerAminoMsg {
    type: "/stride.stakeibc.EpochTracker";
    value: EpochTrackerAmino;
}
export interface EpochTrackerSDKType {
    epoch_identifier: string;
    epoch_number: bigint;
    next_epoch_start_time: bigint;
    duration: bigint;
}
export declare const EpochTracker: {
    typeUrl: string;
    encode(message: EpochTracker, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EpochTracker;
    fromPartial(object: Partial<EpochTracker>): EpochTracker;
    fromAmino(object: EpochTrackerAmino): EpochTracker;
    toAmino(message: EpochTracker): EpochTrackerAmino;
    fromAminoMsg(object: EpochTrackerAminoMsg): EpochTracker;
    fromProtoMsg(message: EpochTrackerProtoMsg): EpochTracker;
    toProto(message: EpochTracker): Uint8Array;
    toProtoMsg(message: EpochTracker): EpochTrackerProtoMsg;
};
