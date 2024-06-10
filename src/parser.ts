import { Uint64 } from "@cosmjs/math";
import { decodePubkey } from "@cosmjs/proto-signing";
import { assert } from "@cosmjs/utils";
import { accountFromAny, Account } from "@cosmjs/stargate";
import { BaseAccount } from "cosmjs-types/cosmos/auth/v1beta1/auth";
import { Any } from "cosmjs-types/google/protobuf/any";
import Long from "long";
import { stride } from "./codegen";

function uint64FromProto(input: number | Long): Uint64 {
  return Uint64.fromString(input.toString());
}

function accountFromBaseAccount(input: BaseAccount): Account {
  const { address, pubKey, accountNumber, sequence } = input;
  const pubkey = pubKey ? decodePubkey(pubKey) : null;
  return {
    address: address,
    pubkey: pubkey,
    accountNumber: uint64FromProto(accountNumber).toNumber(),
    sequence: uint64FromProto(sequence).toNumber(),
  };
}

/**
 * A wrapper for Stargate's default accountParser that adds support for `StridePeriodicVestingAccount`.
 */
export function strideAccountParser(input: Any): Account {
  const { typeUrl, value } = input;

  switch (typeUrl) {
    case "/stride.vesting.StridePeriodicVestingAccount": {
      const baseAccount =
        stride.vesting.StridePeriodicVestingAccount.decode(value)
          .baseVestingAccount.baseAccount;
      assert(baseAccount);
      return accountFromBaseAccount(baseAccount);
    }

    default: {
      return accountFromAny(input);
    }
  }
}
