import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { CallbackData, CallbackDataAmino, CallbackDataSDKType } from "./callback_data";
import { BinaryReader, BinaryWriter } from "../../binary";
/** GenesisState defines the icacallbacks module's genesis state. */
export interface GenesisState {
    params: Params;
    portId: string;
    callbackDataList: CallbackData[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/stride.icacallbacks.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the icacallbacks module's genesis state. */
export interface GenesisStateAmino {
    params?: ParamsAmino;
    port_id?: string;
    callback_data_list?: CallbackDataAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/stride.icacallbacks.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the icacallbacks module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    port_id: string;
    callback_data_list: CallbackDataSDKType[];
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
