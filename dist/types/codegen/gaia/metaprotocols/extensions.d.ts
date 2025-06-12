import { BinaryReader, BinaryWriter } from "../../binary";
/** ExtensionData is a data structure that can be used in transaction extensions. */
export interface ExtensionData {
    /**
     * protocol_id is the identifier of the protocol
     * the field is not used internally but it is validated for correctness
     */
    protocolId: string;
    /**
     * protocol_version is the identifier of the protocol version
     * the field is not used internally but it is validated for correctness
     */
    protocolVersion: string;
    /**
     * arbitrary bytes data that can be used to store any data
     * the field is not used internally but it is validated and must be provided
     */
    data: Uint8Array;
}
export interface ExtensionDataProtoMsg {
    typeUrl: "/gaia.metaprotocols.ExtensionData";
    value: Uint8Array;
}
/**
 * ExtensionData is a data structure that can be used in transaction extensions.
 * @name ExtensionDataAmino
 * @package gaia.metaprotocols
 * @see proto type: gaia.metaprotocols.ExtensionData
 */
export interface ExtensionDataAmino {
    /**
     * protocol_id is the identifier of the protocol
     * the field is not used internally but it is validated for correctness
     */
    protocol_id?: string;
    /**
     * protocol_version is the identifier of the protocol version
     * the field is not used internally but it is validated for correctness
     */
    protocol_version?: string;
    /**
     * arbitrary bytes data that can be used to store any data
     * the field is not used internally but it is validated and must be provided
     */
    data?: string;
}
export interface ExtensionDataAminoMsg {
    type: "/gaia.metaprotocols.ExtensionData";
    value: ExtensionDataAmino;
}
/** ExtensionData is a data structure that can be used in transaction extensions. */
export interface ExtensionDataSDKType {
    protocol_id: string;
    protocol_version: string;
    data: Uint8Array;
}
export declare const ExtensionData: {
    typeUrl: string;
    encode(message: ExtensionData, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ExtensionData;
    fromPartial(object: Partial<ExtensionData>): ExtensionData;
    fromAmino(object: ExtensionDataAmino): ExtensionData;
    toAmino(message: ExtensionData): ExtensionDataAmino;
    fromAminoMsg(object: ExtensionDataAminoMsg): ExtensionData;
    fromProtoMsg(message: ExtensionDataProtoMsg): ExtensionData;
    toProto(message: ExtensionData): Uint8Array;
    toProtoMsg(message: ExtensionData): ExtensionDataProtoMsg;
};
