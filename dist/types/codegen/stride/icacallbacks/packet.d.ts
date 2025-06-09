import { BinaryReader, BinaryWriter } from "../../binary";
export interface IcacallbacksPacketData {
    noData?: NoData;
}
export interface IcacallbacksPacketDataProtoMsg {
    typeUrl: "/stride.icacallbacks.IcacallbacksPacketData";
    value: Uint8Array;
}
/**
 * @name IcacallbacksPacketDataAmino
 * @package stride.icacallbacks
 * @see proto type: stride.icacallbacks.IcacallbacksPacketData
 */
export interface IcacallbacksPacketDataAmino {
    no_data?: NoDataAmino;
}
export interface IcacallbacksPacketDataAminoMsg {
    type: "/stride.icacallbacks.IcacallbacksPacketData";
    value: IcacallbacksPacketDataAmino;
}
export interface IcacallbacksPacketDataSDKType {
    no_data?: NoDataSDKType;
}
export interface NoData {
}
export interface NoDataProtoMsg {
    typeUrl: "/stride.icacallbacks.NoData";
    value: Uint8Array;
}
/**
 * @name NoDataAmino
 * @package stride.icacallbacks
 * @see proto type: stride.icacallbacks.NoData
 */
export interface NoDataAmino {
}
export interface NoDataAminoMsg {
    type: "/stride.icacallbacks.NoData";
    value: NoDataAmino;
}
export interface NoDataSDKType {
}
export declare const IcacallbacksPacketData: {
    typeUrl: string;
    encode(message: IcacallbacksPacketData, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): IcacallbacksPacketData;
    fromPartial(object: Partial<IcacallbacksPacketData>): IcacallbacksPacketData;
    fromAmino(object: IcacallbacksPacketDataAmino): IcacallbacksPacketData;
    toAmino(message: IcacallbacksPacketData): IcacallbacksPacketDataAmino;
    fromAminoMsg(object: IcacallbacksPacketDataAminoMsg): IcacallbacksPacketData;
    fromProtoMsg(message: IcacallbacksPacketDataProtoMsg): IcacallbacksPacketData;
    toProto(message: IcacallbacksPacketData): Uint8Array;
    toProtoMsg(message: IcacallbacksPacketData): IcacallbacksPacketDataProtoMsg;
};
export declare const NoData: {
    typeUrl: string;
    encode(_: NoData, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): NoData;
    fromPartial(_: Partial<NoData>): NoData;
    fromAmino(_: NoDataAmino): NoData;
    toAmino(_: NoData): NoDataAmino;
    fromAminoMsg(object: NoDataAminoMsg): NoData;
    fromProtoMsg(message: NoDataProtoMsg): NoData;
    toProto(message: NoData): Uint8Array;
    toProtoMsg(message: NoData): NoDataProtoMsg;
};
