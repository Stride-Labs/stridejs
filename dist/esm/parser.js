import { decodePubkey } from "@cosmjs/proto-signing";
import { accountFromAny } from "@cosmjs/stargate";
import { assert } from "@cosmjs/utils";
import { stride } from "./codegen";
function accountFromBaseAccount(input) {
  const { address, pubKey, accountNumber, sequence } = input;
  const pubkey = pubKey ? decodePubkey(pubKey) : null;
  return {
    address,
    pubkey,
    accountNumber: Number(accountNumber),
    sequence: Number(sequence)
  };
}
function strideAccountParser(input) {
  const { typeUrl, value } = input;
  switch (typeUrl) {
    case "/stride.vesting.StridePeriodicVestingAccount": {
      const baseAccount = stride.vesting.StridePeriodicVestingAccount.decode(value).baseVestingAccount.baseAccount;
      assert(baseAccount);
      return accountFromBaseAccount(baseAccount);
    }
    default: {
      return accountFromAny(input);
    }
  }
}
export {
  strideAccountParser
};
