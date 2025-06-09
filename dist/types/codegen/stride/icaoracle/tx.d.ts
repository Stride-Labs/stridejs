import { BinaryReader, BinaryWriter } from "../../binary";
/** Adds a new oracle */
export interface MsgAddOracle {
    creator: string;
    connectionId: string;
}
export interface MsgAddOracleProtoMsg {
    typeUrl: "/stride.icaoracle.MsgAddOracle";
    value: Uint8Array;
}
/**
 * Adds a new oracle
 * @name MsgAddOracleAmino
 * @package stride.icaoracle
 * @see proto type: stride.icaoracle.MsgAddOracle
 */
export interface MsgAddOracleAmino {
    creator?: string;
    connection_id?: string;
}
export interface MsgAddOracleAminoMsg {
    type: "icaoracle/MsgAddOracle";
    value: MsgAddOracleAmino;
}
/** Adds a new oracle */
export interface MsgAddOracleSDKType {
    creator: string;
    connection_id: string;
}
export interface MsgAddOracleResponse {
}
export interface MsgAddOracleResponseProtoMsg {
    typeUrl: "/stride.icaoracle.MsgAddOracleResponse";
    value: Uint8Array;
}
/**
 * @name MsgAddOracleResponseAmino
 * @package stride.icaoracle
 * @see proto type: stride.icaoracle.MsgAddOracleResponse
 */
export interface MsgAddOracleResponseAmino {
}
export interface MsgAddOracleResponseAminoMsg {
    type: "/stride.icaoracle.MsgAddOracleResponse";
    value: MsgAddOracleResponseAmino;
}
export interface MsgAddOracleResponseSDKType {
}
/** Instantiates the oracle's CW contract */
export interface MsgInstantiateOracle {
    creator: string;
    oracleChainId: string;
    contractCodeId: bigint;
    transferChannelOnOracle: string;
}
export interface MsgInstantiateOracleProtoMsg {
    typeUrl: "/stride.icaoracle.MsgInstantiateOracle";
    value: Uint8Array;
}
/**
 * Instantiates the oracle's CW contract
 * @name MsgInstantiateOracleAmino
 * @package stride.icaoracle
 * @see proto type: stride.icaoracle.MsgInstantiateOracle
 */
export interface MsgInstantiateOracleAmino {
    creator?: string;
    oracle_chain_id?: string;
    contract_code_id?: string;
    transfer_channel_on_oracle?: string;
}
export interface MsgInstantiateOracleAminoMsg {
    type: "icaoracle/MsgInstantiateOracle";
    value: MsgInstantiateOracleAmino;
}
/** Instantiates the oracle's CW contract */
export interface MsgInstantiateOracleSDKType {
    creator: string;
    oracle_chain_id: string;
    contract_code_id: bigint;
    transfer_channel_on_oracle: string;
}
export interface MsgInstantiateOracleResponse {
}
export interface MsgInstantiateOracleResponseProtoMsg {
    typeUrl: "/stride.icaoracle.MsgInstantiateOracleResponse";
    value: Uint8Array;
}
/**
 * @name MsgInstantiateOracleResponseAmino
 * @package stride.icaoracle
 * @see proto type: stride.icaoracle.MsgInstantiateOracleResponse
 */
export interface MsgInstantiateOracleResponseAmino {
}
export interface MsgInstantiateOracleResponseAminoMsg {
    type: "/stride.icaoracle.MsgInstantiateOracleResponse";
    value: MsgInstantiateOracleResponseAmino;
}
export interface MsgInstantiateOracleResponseSDKType {
}
/** Restore's a closed ICA channel for a given oracle */
export interface MsgRestoreOracleICA {
    creator: string;
    oracleChainId: string;
}
export interface MsgRestoreOracleICAProtoMsg {
    typeUrl: "/stride.icaoracle.MsgRestoreOracleICA";
    value: Uint8Array;
}
/**
 * Restore's a closed ICA channel for a given oracle
 * @name MsgRestoreOracleICAAmino
 * @package stride.icaoracle
 * @see proto type: stride.icaoracle.MsgRestoreOracleICA
 */
export interface MsgRestoreOracleICAAmino {
    creator?: string;
    oracle_chain_id?: string;
}
export interface MsgRestoreOracleICAAminoMsg {
    type: "icaoracle/MsgRestoreOracleICA";
    value: MsgRestoreOracleICAAmino;
}
/** Restore's a closed ICA channel for a given oracle */
export interface MsgRestoreOracleICASDKType {
    creator: string;
    oracle_chain_id: string;
}
export interface MsgRestoreOracleICAResponse {
}
export interface MsgRestoreOracleICAResponseProtoMsg {
    typeUrl: "/stride.icaoracle.MsgRestoreOracleICAResponse";
    value: Uint8Array;
}
/**
 * @name MsgRestoreOracleICAResponseAmino
 * @package stride.icaoracle
 * @see proto type: stride.icaoracle.MsgRestoreOracleICAResponse
 */
export interface MsgRestoreOracleICAResponseAmino {
}
export interface MsgRestoreOracleICAResponseAminoMsg {
    type: "/stride.icaoracle.MsgRestoreOracleICAResponse";
    value: MsgRestoreOracleICAResponseAmino;
}
export interface MsgRestoreOracleICAResponseSDKType {
}
/** Toggle's whether an oracle is active and should receive metric updates */
export interface MsgToggleOracle {
    /**
     * authority is the address that controls the module (defaults to x/gov unless
     * overwritten).
     */
    authority: string;
    oracleChainId: string;
    active: boolean;
}
export interface MsgToggleOracleProtoMsg {
    typeUrl: "/stride.icaoracle.MsgToggleOracle";
    value: Uint8Array;
}
/**
 * Toggle's whether an oracle is active and should receive metric updates
 * @name MsgToggleOracleAmino
 * @package stride.icaoracle
 * @see proto type: stride.icaoracle.MsgToggleOracle
 */
export interface MsgToggleOracleAmino {
    /**
     * authority is the address that controls the module (defaults to x/gov unless
     * overwritten).
     */
    authority?: string;
    oracle_chain_id?: string;
    active?: boolean;
}
export interface MsgToggleOracleAminoMsg {
    type: "icaoracle/MsgToggleOracle";
    value: MsgToggleOracleAmino;
}
/** Toggle's whether an oracle is active and should receive metric updates */
export interface MsgToggleOracleSDKType {
    authority: string;
    oracle_chain_id: string;
    active: boolean;
}
export interface MsgToggleOracleResponse {
}
export interface MsgToggleOracleResponseProtoMsg {
    typeUrl: "/stride.icaoracle.MsgToggleOracleResponse";
    value: Uint8Array;
}
/**
 * @name MsgToggleOracleResponseAmino
 * @package stride.icaoracle
 * @see proto type: stride.icaoracle.MsgToggleOracleResponse
 */
export interface MsgToggleOracleResponseAmino {
}
export interface MsgToggleOracleResponseAminoMsg {
    type: "/stride.icaoracle.MsgToggleOracleResponse";
    value: MsgToggleOracleResponseAmino;
}
export interface MsgToggleOracleResponseSDKType {
}
/** Removes an oracle completely */
export interface MsgRemoveOracle {
    /**
     * authority is the address that controls the module (defaults to x/gov unless
     * overwritten).
     */
    authority: string;
    oracleChainId: string;
}
export interface MsgRemoveOracleProtoMsg {
    typeUrl: "/stride.icaoracle.MsgRemoveOracle";
    value: Uint8Array;
}
/**
 * Removes an oracle completely
 * @name MsgRemoveOracleAmino
 * @package stride.icaoracle
 * @see proto type: stride.icaoracle.MsgRemoveOracle
 */
export interface MsgRemoveOracleAmino {
    /**
     * authority is the address that controls the module (defaults to x/gov unless
     * overwritten).
     */
    authority?: string;
    oracle_chain_id?: string;
}
export interface MsgRemoveOracleAminoMsg {
    type: "icaoracle/MsgRemoveOracle";
    value: MsgRemoveOracleAmino;
}
/** Removes an oracle completely */
export interface MsgRemoveOracleSDKType {
    authority: string;
    oracle_chain_id: string;
}
export interface MsgRemoveOracleResponse {
}
export interface MsgRemoveOracleResponseProtoMsg {
    typeUrl: "/stride.icaoracle.MsgRemoveOracleResponse";
    value: Uint8Array;
}
/**
 * @name MsgRemoveOracleResponseAmino
 * @package stride.icaoracle
 * @see proto type: stride.icaoracle.MsgRemoveOracleResponse
 */
export interface MsgRemoveOracleResponseAmino {
}
export interface MsgRemoveOracleResponseAminoMsg {
    type: "/stride.icaoracle.MsgRemoveOracleResponse";
    value: MsgRemoveOracleResponseAmino;
}
export interface MsgRemoveOracleResponseSDKType {
}
export declare const MsgAddOracle: {
    typeUrl: string;
    encode(message: MsgAddOracle, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgAddOracle;
    fromPartial(object: Partial<MsgAddOracle>): MsgAddOracle;
    fromAmino(object: MsgAddOracleAmino): MsgAddOracle;
    toAmino(message: MsgAddOracle): MsgAddOracleAmino;
    fromAminoMsg(object: MsgAddOracleAminoMsg): MsgAddOracle;
    toAminoMsg(message: MsgAddOracle): MsgAddOracleAminoMsg;
    fromProtoMsg(message: MsgAddOracleProtoMsg): MsgAddOracle;
    toProto(message: MsgAddOracle): Uint8Array;
    toProtoMsg(message: MsgAddOracle): MsgAddOracleProtoMsg;
};
export declare const MsgAddOracleResponse: {
    typeUrl: string;
    encode(_: MsgAddOracleResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgAddOracleResponse;
    fromPartial(_: Partial<MsgAddOracleResponse>): MsgAddOracleResponse;
    fromAmino(_: MsgAddOracleResponseAmino): MsgAddOracleResponse;
    toAmino(_: MsgAddOracleResponse): MsgAddOracleResponseAmino;
    fromAminoMsg(object: MsgAddOracleResponseAminoMsg): MsgAddOracleResponse;
    fromProtoMsg(message: MsgAddOracleResponseProtoMsg): MsgAddOracleResponse;
    toProto(message: MsgAddOracleResponse): Uint8Array;
    toProtoMsg(message: MsgAddOracleResponse): MsgAddOracleResponseProtoMsg;
};
export declare const MsgInstantiateOracle: {
    typeUrl: string;
    encode(message: MsgInstantiateOracle, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgInstantiateOracle;
    fromPartial(object: Partial<MsgInstantiateOracle>): MsgInstantiateOracle;
    fromAmino(object: MsgInstantiateOracleAmino): MsgInstantiateOracle;
    toAmino(message: MsgInstantiateOracle): MsgInstantiateOracleAmino;
    fromAminoMsg(object: MsgInstantiateOracleAminoMsg): MsgInstantiateOracle;
    toAminoMsg(message: MsgInstantiateOracle): MsgInstantiateOracleAminoMsg;
    fromProtoMsg(message: MsgInstantiateOracleProtoMsg): MsgInstantiateOracle;
    toProto(message: MsgInstantiateOracle): Uint8Array;
    toProtoMsg(message: MsgInstantiateOracle): MsgInstantiateOracleProtoMsg;
};
export declare const MsgInstantiateOracleResponse: {
    typeUrl: string;
    encode(_: MsgInstantiateOracleResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgInstantiateOracleResponse;
    fromPartial(_: Partial<MsgInstantiateOracleResponse>): MsgInstantiateOracleResponse;
    fromAmino(_: MsgInstantiateOracleResponseAmino): MsgInstantiateOracleResponse;
    toAmino(_: MsgInstantiateOracleResponse): MsgInstantiateOracleResponseAmino;
    fromAminoMsg(object: MsgInstantiateOracleResponseAminoMsg): MsgInstantiateOracleResponse;
    fromProtoMsg(message: MsgInstantiateOracleResponseProtoMsg): MsgInstantiateOracleResponse;
    toProto(message: MsgInstantiateOracleResponse): Uint8Array;
    toProtoMsg(message: MsgInstantiateOracleResponse): MsgInstantiateOracleResponseProtoMsg;
};
export declare const MsgRestoreOracleICA: {
    typeUrl: string;
    encode(message: MsgRestoreOracleICA, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRestoreOracleICA;
    fromPartial(object: Partial<MsgRestoreOracleICA>): MsgRestoreOracleICA;
    fromAmino(object: MsgRestoreOracleICAAmino): MsgRestoreOracleICA;
    toAmino(message: MsgRestoreOracleICA): MsgRestoreOracleICAAmino;
    fromAminoMsg(object: MsgRestoreOracleICAAminoMsg): MsgRestoreOracleICA;
    toAminoMsg(message: MsgRestoreOracleICA): MsgRestoreOracleICAAminoMsg;
    fromProtoMsg(message: MsgRestoreOracleICAProtoMsg): MsgRestoreOracleICA;
    toProto(message: MsgRestoreOracleICA): Uint8Array;
    toProtoMsg(message: MsgRestoreOracleICA): MsgRestoreOracleICAProtoMsg;
};
export declare const MsgRestoreOracleICAResponse: {
    typeUrl: string;
    encode(_: MsgRestoreOracleICAResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRestoreOracleICAResponse;
    fromPartial(_: Partial<MsgRestoreOracleICAResponse>): MsgRestoreOracleICAResponse;
    fromAmino(_: MsgRestoreOracleICAResponseAmino): MsgRestoreOracleICAResponse;
    toAmino(_: MsgRestoreOracleICAResponse): MsgRestoreOracleICAResponseAmino;
    fromAminoMsg(object: MsgRestoreOracleICAResponseAminoMsg): MsgRestoreOracleICAResponse;
    fromProtoMsg(message: MsgRestoreOracleICAResponseProtoMsg): MsgRestoreOracleICAResponse;
    toProto(message: MsgRestoreOracleICAResponse): Uint8Array;
    toProtoMsg(message: MsgRestoreOracleICAResponse): MsgRestoreOracleICAResponseProtoMsg;
};
export declare const MsgToggleOracle: {
    typeUrl: string;
    encode(message: MsgToggleOracle, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgToggleOracle;
    fromPartial(object: Partial<MsgToggleOracle>): MsgToggleOracle;
    fromAmino(object: MsgToggleOracleAmino): MsgToggleOracle;
    toAmino(message: MsgToggleOracle): MsgToggleOracleAmino;
    fromAminoMsg(object: MsgToggleOracleAminoMsg): MsgToggleOracle;
    toAminoMsg(message: MsgToggleOracle): MsgToggleOracleAminoMsg;
    fromProtoMsg(message: MsgToggleOracleProtoMsg): MsgToggleOracle;
    toProto(message: MsgToggleOracle): Uint8Array;
    toProtoMsg(message: MsgToggleOracle): MsgToggleOracleProtoMsg;
};
export declare const MsgToggleOracleResponse: {
    typeUrl: string;
    encode(_: MsgToggleOracleResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgToggleOracleResponse;
    fromPartial(_: Partial<MsgToggleOracleResponse>): MsgToggleOracleResponse;
    fromAmino(_: MsgToggleOracleResponseAmino): MsgToggleOracleResponse;
    toAmino(_: MsgToggleOracleResponse): MsgToggleOracleResponseAmino;
    fromAminoMsg(object: MsgToggleOracleResponseAminoMsg): MsgToggleOracleResponse;
    fromProtoMsg(message: MsgToggleOracleResponseProtoMsg): MsgToggleOracleResponse;
    toProto(message: MsgToggleOracleResponse): Uint8Array;
    toProtoMsg(message: MsgToggleOracleResponse): MsgToggleOracleResponseProtoMsg;
};
export declare const MsgRemoveOracle: {
    typeUrl: string;
    encode(message: MsgRemoveOracle, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveOracle;
    fromPartial(object: Partial<MsgRemoveOracle>): MsgRemoveOracle;
    fromAmino(object: MsgRemoveOracleAmino): MsgRemoveOracle;
    toAmino(message: MsgRemoveOracle): MsgRemoveOracleAmino;
    fromAminoMsg(object: MsgRemoveOracleAminoMsg): MsgRemoveOracle;
    toAminoMsg(message: MsgRemoveOracle): MsgRemoveOracleAminoMsg;
    fromProtoMsg(message: MsgRemoveOracleProtoMsg): MsgRemoveOracle;
    toProto(message: MsgRemoveOracle): Uint8Array;
    toProtoMsg(message: MsgRemoveOracle): MsgRemoveOracleProtoMsg;
};
export declare const MsgRemoveOracleResponse: {
    typeUrl: string;
    encode(_: MsgRemoveOracleResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveOracleResponse;
    fromPartial(_: Partial<MsgRemoveOracleResponse>): MsgRemoveOracleResponse;
    fromAmino(_: MsgRemoveOracleResponseAmino): MsgRemoveOracleResponse;
    toAmino(_: MsgRemoveOracleResponse): MsgRemoveOracleResponseAmino;
    fromAminoMsg(object: MsgRemoveOracleResponseAminoMsg): MsgRemoveOracleResponse;
    fromProtoMsg(message: MsgRemoveOracleResponseProtoMsg): MsgRemoveOracleResponse;
    toProto(message: MsgRemoveOracleResponse): Uint8Array;
    toProtoMsg(message: MsgRemoveOracleResponse): MsgRemoveOracleResponseProtoMsg;
};
