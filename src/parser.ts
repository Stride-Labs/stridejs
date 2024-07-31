import { decodePubkey } from "@cosmjs/proto-signing";
import { Account, accountFromAny } from "@cosmjs/stargate";
import { assert } from "@cosmjs/utils";
import { Any } from "cosmjs-types/google/protobuf/any";
import { stride } from "./codegen";
import { BaseAccount } from "./codegen/cosmos/auth/v1beta1/auth";

function accountFromBaseAccount(input: BaseAccount): Account {
  const { address, pubKey, accountNumber, sequence } = input;
  const pubkey = pubKey ? decodePubkey(pubKey) : null;
  return {
    address: address,
    pubkey: pubkey,
    accountNumber: Number(accountNumber),
    sequence: Number(sequence),
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
