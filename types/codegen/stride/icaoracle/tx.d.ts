import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
/** Adds a new oracle */
export interface MsgAddOracle {
    creator: string;
    connectionId: string;
}
/** Adds a new oracle */
export interface MsgAddOracleSDKType {
    creator: string;
    connection_id: string;
}
export interface MsgAddOracleResponse {
}
export interface MsgAddOracleResponseSDKType {
}
/** Instantiates the oracle's CW contract */
export interface MsgInstantiateOracle {
    creator: string;
    oracleChainId: string;
    contractCodeId: Long;
    transferChannelOnOracle: string;
}
/** Instantiates the oracle's CW contract */
export interface MsgInstantiateOracleSDKType {
    creator: string;
    oracle_chain_id: string;
    contract_code_id: Long;
    transfer_channel_on_oracle: string;
}
export interface MsgInstantiateOracleResponse {
}
export interface MsgInstantiateOracleResponseSDKType {
}
/** Restore's a closed ICA channel for a given oracle */
export interface MsgRestoreOracleICA {
    creator: string;
    oracleChainId: string;
}
/** Restore's a closed ICA channel for a given oracle */
export interface MsgRestoreOracleICASDKType {
    creator: string;
    oracle_chain_id: string;
}
export interface MsgRestoreOracleICAResponse {
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
/** Toggle's whether an oracle is active and should receive metric updates */
export interface MsgToggleOracleSDKType {
    /**
     * authority is the address that controls the module (defaults to x/gov unless
     * overwritten).
     */
    authority: string;
    oracle_chain_id: string;
    active: boolean;
}
export interface MsgToggleOracleResponse {
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
/** Removes an oracle completely */
export interface MsgRemoveOracleSDKType {
    /**
     * authority is the address that controls the module (defaults to x/gov unless
     * overwritten).
     */
    authority: string;
    oracle_chain_id: string;
}
export interface MsgRemoveOracleResponse {
}
export interface MsgRemoveOracleResponseSDKType {
}
export declare const MsgAddOracle: {
    encode(message: MsgAddOracle, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddOracle;
    fromPartial(object: DeepPartial<MsgAddOracle>): MsgAddOracle;
};
export declare const MsgAddOracleResponse: {
    encode(_: MsgAddOracleResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddOracleResponse;
    fromPartial(_: DeepPartial<MsgAddOracleResponse>): MsgAddOracleResponse;
};
export declare const MsgInstantiateOracle: {
    encode(message: MsgInstantiateOracle, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgInstantiateOracle;
    fromPartial(object: DeepPartial<MsgInstantiateOracle>): MsgInstantiateOracle;
};
export declare const MsgInstantiateOracleResponse: {
    encode(_: MsgInstantiateOracleResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgInstantiateOracleResponse;
    fromPartial(_: DeepPartial<MsgInstantiateOracleResponse>): MsgInstantiateOracleResponse;
};
export declare const MsgRestoreOracleICA: {
    encode(message: MsgRestoreOracleICA, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRestoreOracleICA;
    fromPartial(object: DeepPartial<MsgRestoreOracleICA>): MsgRestoreOracleICA;
};
export declare const MsgRestoreOracleICAResponse: {
    encode(_: MsgRestoreOracleICAResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRestoreOracleICAResponse;
    fromPartial(_: DeepPartial<MsgRestoreOracleICAResponse>): MsgRestoreOracleICAResponse;
};
export declare const MsgToggleOracle: {
    encode(message: MsgToggleOracle, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgToggleOracle;
    fromPartial(object: DeepPartial<MsgToggleOracle>): MsgToggleOracle;
};
export declare const MsgToggleOracleResponse: {
    encode(_: MsgToggleOracleResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgToggleOracleResponse;
    fromPartial(_: DeepPartial<MsgToggleOracleResponse>): MsgToggleOracleResponse;
};
export declare const MsgRemoveOracle: {
    encode(message: MsgRemoveOracle, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveOracle;
    fromPartial(object: DeepPartial<MsgRemoveOracle>): MsgRemoveOracle;
};
export declare const MsgRemoveOracleResponse: {
    encode(_: MsgRemoveOracleResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveOracleResponse;
    fromPartial(_: DeepPartial<MsgRemoveOracleResponse>): MsgRemoveOracleResponse;
};
