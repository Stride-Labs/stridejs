import { Account } from "@cosmjs/stargate";
import { Any } from "cosmjs-types/google/protobuf/any";
/**
 * A wrapper for Stargate's default accountParser that adds support for `StridePeriodicVestingAccount`.
 */
export declare function strideAccountParser(input: Any): Account;
