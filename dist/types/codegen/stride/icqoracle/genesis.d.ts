import { Params, ParamsAmino, ParamsSDKType, TokenPrice, TokenPriceAmino, TokenPriceSDKType } from "./icqoracle";
import { BinaryReader, BinaryWriter } from "../../binary";
/** GenesisState defines the icqoracle module's genesis state */
export interface GenesisState {
    /** Module parameters */
    params: Params;
    /** List of token prices */
    tokenPrices: TokenPrice[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/stride.icqoracle.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the icqoracle module's genesis state */
export interface GenesisStateAmino {
    /** Module parameters */
    params?: ParamsAmino;
    /** List of token prices */
    token_prices?: TokenPriceAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/stride.icqoracle.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the icqoracle module's genesis state */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    token_prices: TokenPriceSDKType[];
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
