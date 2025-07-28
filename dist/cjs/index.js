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
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var src_exports = {};
__export(src_exports, {
  DirectSecp256k1HdWallet: () => import_proto_signing.DirectSecp256k1HdWallet,
  GasPrice: () => import_stargate.GasPrice,
  LedgerSigner: () => import_ledger_amino.LedgerSigner,
  Secp256k1HdWallet: () => import_amino.Secp256k1HdWallet,
  fromAscii: () => import_encoding.fromAscii,
  fromBase64: () => import_encoding.fromBase64,
  fromBech32: () => import_encoding.fromBech32,
  fromHex: () => import_encoding.fromHex,
  fromRfc3339: () => import_encoding.fromRfc3339,
  fromUtf8: () => import_encoding.fromUtf8,
  makeCosmoshubPath: () => import_amino.makeCosmoshubPath,
  normalizeBech32: () => import_encoding.normalizeBech32,
  toAscii: () => import_encoding.toAscii,
  toBase64: () => import_encoding.toBase64,
  toBech32: () => import_encoding.toBech32,
  toHex: () => import_encoding.toHex,
  toRfc3339: () => import_encoding.toRfc3339,
  toUtf8: () => import_encoding.toUtf8
});
module.exports = __toCommonJS(src_exports);
var import_amino = require("@cosmjs/amino");
var import_encoding = require("@cosmjs/encoding");
var import_ledger_amino = require("@cosmjs/ledger-amino");
var import_proto_signing = require("@cosmjs/proto-signing");
var import_stargate = require("@cosmjs/stargate");
__reExport(src_exports, require("./codegen"), module.exports);
__reExport(src_exports, require("./parser"), module.exports);
__reExport(src_exports, require("./stride_client"), module.exports);
__reExport(src_exports, require("./utils"), module.exports);
// Proper CommonJS exports for dynamic imports
module.exports = {
  DirectSecp256k1HdWallet,
  GasPrice,
  LedgerSigner,
  Secp256k1HdWallet,
  fromAscii,
  fromBase64,
  fromBech32,
  fromHex,
  fromRfc3339,
  fromUtf8,
  makeCosmoshubPath,
  normalizeBech32,
  toAscii,
  toBase64,
  toBech32,
  toHex,
  toRfc3339,
  toUtf8,
  ...require("./codegen"),
  ...require("./parser"),
  ...require("./stride_client"),
  ...require("./utils")
};
