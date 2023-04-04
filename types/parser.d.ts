import { Pubkey } from "@cosmjs/amino";
import { BaseAccount } from "cosmjs-types/cosmos/auth/v1beta1/auth";
import { Any } from "cosmjs-types/google/protobuf/any";
export interface Account {
    /** Bech32 account address */
    readonly address: string;
    readonly pubkey: Pubkey | null;
    readonly accountNumber: number;
    readonly sequence: number;
}
export declare function accountFromBaseAccount(input: BaseAccount): Account;
/**
 * Represents a generic function that takes an `Any` encoded account from the chain
 * and extracts some common `Account` information from it.
 */
export type AccountParser = (any: Any) => Account;
/**
 * Basic implementation of AccountParser. This is supposed to support the most relevant
 * common Cosmos SDK account types. If you need support for exotic account types,
 * you'll need to write your own account decoder.
 */
export declare function strideAccountParser(input: Any): Account;
