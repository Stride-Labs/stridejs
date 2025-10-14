import { BinaryReader, BinaryWriter } from "../../binary";
/** Stores the total burned for each account */
export interface AddressBurnedAmount {
    /** The address of the account */
    address: string;
    /** The total burned from the account */
    amount: string;
}
export interface AddressBurnedAmountProtoMsg {
    typeUrl: "/stride.strdburner.AddressBurnedAmount";
    value: Uint8Array;
}
/**
 * Stores the total burned for each account
 * @name AddressBurnedAmountAmino
 * @package stride.strdburner
 * @see proto type: stride.strdburner.AddressBurnedAmount
 */
export interface AddressBurnedAmountAmino {
    /**
     * The address of the account
     */
    address?: string;
    /**
     * The total burned from the account
     */
    amount?: string;
}
export interface AddressBurnedAmountAminoMsg {
    type: "/stride.strdburner.AddressBurnedAmount";
    value: AddressBurnedAmountAmino;
}
/** Stores the total burned for each account */
export interface AddressBurnedAmountSDKType {
    address: string;
    amount: string;
}
/** Stores stride and non-stride linked addresses */
export interface LinkedAddresses {
    /** The stride address for the account */
    strideAddress: string;
    /** The non-stride address that is linked */
    linkedAddress: string;
}
export interface LinkedAddressesProtoMsg {
    typeUrl: "/stride.strdburner.LinkedAddresses";
    value: Uint8Array;
}
/**
 * Stores stride and non-stride linked addresses
 * @name LinkedAddressesAmino
 * @package stride.strdburner
 * @see proto type: stride.strdburner.LinkedAddresses
 */
export interface LinkedAddressesAmino {
    /**
     * The stride address for the account
     */
    stride_address?: string;
    /**
     * The non-stride address that is linked
     */
    linked_address?: string;
}
export interface LinkedAddressesAminoMsg {
    type: "/stride.strdburner.LinkedAddresses";
    value: LinkedAddressesAmino;
}
/** Stores stride and non-stride linked addresses */
export interface LinkedAddressesSDKType {
    stride_address: string;
    linked_address: string;
}
/** GenesisState defines the strdburner module's genesis state */
export interface GenesisState {
    /** Total amount of ustrd burned */
    totalUstrdBurned: string;
    /** Total amount of ustrd burned from the protocol */
    protocolUstrdBurned: string;
    /** Total amount of ustrd burned from users */
    totalUserUstrdBurned: string;
    /** List of the amount burned from each account */
    burnedByAccount: AddressBurnedAmount[];
    /** List of the linked addresses */
    linkedAddresses: LinkedAddresses[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/stride.strdburner.GenesisState";
    value: Uint8Array;
}
/**
 * GenesisState defines the strdburner module's genesis state
 * @name GenesisStateAmino
 * @package stride.strdburner
 * @see proto type: stride.strdburner.GenesisState
 */
export interface GenesisStateAmino {
    /**
     * Total amount of ustrd burned
     */
    total_ustrd_burned?: string;
    /**
     * Total amount of ustrd burned from the protocol
     */
    protocol_ustrd_burned?: string;
    /**
     * Total amount of ustrd burned from users
     */
    total_user_ustrd_burned?: string;
    /**
     * List of the amount burned from each account
     */
    burned_by_account?: AddressBurnedAmountAmino[];
    /**
     * List of the linked addresses
     */
    linked_addresses?: LinkedAddressesAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/stride.strdburner.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the strdburner module's genesis state */
export interface GenesisStateSDKType {
    total_ustrd_burned: string;
    protocol_ustrd_burned: string;
    total_user_ustrd_burned: string;
    burned_by_account: AddressBurnedAmountSDKType[];
    linked_addresses: LinkedAddressesSDKType[];
}
export declare const AddressBurnedAmount: {
    typeUrl: string;
    encode(message: AddressBurnedAmount, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AddressBurnedAmount;
    fromPartial(object: Partial<AddressBurnedAmount>): AddressBurnedAmount;
    fromAmino(object: AddressBurnedAmountAmino): AddressBurnedAmount;
    toAmino(message: AddressBurnedAmount): AddressBurnedAmountAmino;
    fromAminoMsg(object: AddressBurnedAmountAminoMsg): AddressBurnedAmount;
    fromProtoMsg(message: AddressBurnedAmountProtoMsg): AddressBurnedAmount;
    toProto(message: AddressBurnedAmount): Uint8Array;
    toProtoMsg(message: AddressBurnedAmount): AddressBurnedAmountProtoMsg;
};
export declare const LinkedAddresses: {
    typeUrl: string;
    encode(message: LinkedAddresses, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): LinkedAddresses;
    fromPartial(object: Partial<LinkedAddresses>): LinkedAddresses;
    fromAmino(object: LinkedAddressesAmino): LinkedAddresses;
    toAmino(message: LinkedAddresses): LinkedAddressesAmino;
    fromAminoMsg(object: LinkedAddressesAminoMsg): LinkedAddresses;
    fromProtoMsg(message: LinkedAddressesProtoMsg): LinkedAddresses;
    toProto(message: LinkedAddresses): Uint8Array;
    toProtoMsg(message: LinkedAddresses): LinkedAddressesProtoMsg;
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
