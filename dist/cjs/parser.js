"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var parser_exports = {};
__export(parser_exports, {
  strideAccountParser: () => strideAccountParser
});
module.exports = __toCommonJS(parser_exports);
var import_proto_signing = require("@cosmjs/proto-signing");
var import_stargate = require("@cosmjs/stargate");
var import_utils = require("@cosmjs/utils");
var import_codegen = require("./codegen");
function accountFromBaseAccount(input) {
  const { address, pubKey, accountNumber, sequence } = input;
  const pubkey = pubKey ? (0, import_proto_signing.decodePubkey)(pubKey) : null;
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
      const baseAccount = import_codegen.stride.vesting.StridePeriodicVestingAccount.decode(value).baseVestingAccount.baseAccount;
      (0, import_utils.assert)(baseAccount);
      return accountFromBaseAccount(baseAccount);
    }
    default: {
      return (0, import_stargate.accountFromAny)(input);
    }
  }
}
// Removed broken CommonJS export annotation
