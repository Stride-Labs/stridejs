import { BinaryReader, BinaryWriter } from "../../../binary";
/** Minter represents the minting state. */
export interface Minter {
    /** current annual inflation rate */
    inflation: string;
    /** current annual expected provisions */
    annualProvisions: string;
}
export interface MinterProtoMsg {
    typeUrl: "/cosmos.mint.v1beta1.Minter";
    value: Uint8Array;
}
/**
 * Minter represents the minting state.
 * @name MinterAmino
 * @package cosmos.mint.v1beta1
 * @see proto type: cosmos.mint.v1beta1.Minter
 */
export interface MinterAmino {
    /**
     * current annual inflation rate
     */
    inflation?: string;
    /**
     * current annual expected provisions
     */
    annual_provisions?: string;
}
export interface MinterAminoMsg {
    type: "cosmos-sdk/Minter";
    value: MinterAmino;
}
/** Minter represents the minting state. */
export interface MinterSDKType {
    inflation: string;
    annual_provisions: string;
}
/** Params defines the parameters for the x/mint module. */
export interface Params {
    /** type of coin to mint */
    mintDenom: string;
    /** maximum annual change in inflation rate */
    inflationRateChange: string;
    /** maximum inflation rate */
    inflationMax: string;
    /** minimum inflation rate */
    inflationMin: string;
    /** goal of percent bonded atoms */
    goalBonded: string;
    /** expected blocks per year */
    blocksPerYear: bigint;
}
export interface ParamsProtoMsg {
    typeUrl: "/cosmos.mint.v1beta1.Params";
    value: Uint8Array;
}
/**
 * Params defines the parameters for the x/mint module.
 * @name ParamsAmino
 * @package cosmos.mint.v1beta1
 * @see proto type: cosmos.mint.v1beta1.Params
 */
export interface ParamsAmino {
    /**
     * type of coin to mint
     */
    mint_denom?: string;
    /**
     * maximum annual change in inflation rate
     */
    inflation_rate_change?: string;
    /**
     * maximum inflation rate
     */
    inflation_max?: string;
    /**
     * minimum inflation rate
     */
    inflation_min?: string;
    /**
     * goal of percent bonded atoms
     */
    goal_bonded?: string;
    /**
     * expected blocks per year
     */
    blocks_per_year?: string;
}
export interface ParamsAminoMsg {
    type: "cosmos-sdk/x/mint/Params";
    value: ParamsAmino;
}
/** Params defines the parameters for the x/mint module. */
export interface ParamsSDKType {
    mint_denom: string;
    inflation_rate_change: string;
    inflation_max: string;
    inflation_min: string;
    goal_bonded: string;
    blocks_per_year: bigint;
}
export declare const Minter: {
    typeUrl: string;
    encode(message: Minter, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Minter;
    fromPartial(object: Partial<Minter>): Minter;
    fromAmino(object: MinterAmino): Minter;
    toAmino(message: Minter): MinterAmino;
    fromAminoMsg(object: MinterAminoMsg): Minter;
    toAminoMsg(message: Minter): MinterAminoMsg;
    fromProtoMsg(message: MinterProtoMsg): Minter;
    toProto(message: Minter): Uint8Array;
    toProtoMsg(message: Minter): MinterProtoMsg;
};
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Params;
    fromPartial(object: Partial<Params>): Params;
    fromAmino(object: ParamsAmino): Params;
    toAmino(message: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    toAminoMsg(message: Params): ParamsAminoMsg;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};
