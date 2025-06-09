import { Params, ParamsAmino, ParamsSDKType, Auction, AuctionAmino, AuctionSDKType } from "./auction";
import { BinaryReader, BinaryWriter } from "../../binary";
/** GenesisState defines the auction module's genesis state */
export interface GenesisState {
    /** Module parameters */
    params: Params;
    /** List of token auctions */
    auctions: Auction[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/stride.auction.GenesisState";
    value: Uint8Array;
}
/**
 * GenesisState defines the auction module's genesis state
 * @name GenesisStateAmino
 * @package stride.auction
 * @see proto type: stride.auction.GenesisState
 */
export interface GenesisStateAmino {
    /**
     * Module parameters
     */
    params?: ParamsAmino;
    /**
     * List of token auctions
     */
    auctions?: AuctionAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/stride.auction.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the auction module's genesis state */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    auctions: AuctionSDKType[];
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
