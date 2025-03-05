var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var bundle_exports = {};
__export(bundle_exports, {
  tendermint: () => tendermint
});
module.exports = __toCommonJS(bundle_exports);
var _254 = __toESM(require("./abci/types"));
var _255 = __toESM(require("./crypto/keys"));
var _256 = __toESM(require("./crypto/proof"));
var _257 = __toESM(require("./libs/bits/types"));
var _258 = __toESM(require("./p2p/types"));
var _259 = __toESM(require("./types/block"));
var _260 = __toESM(require("./types/evidence"));
var _261 = __toESM(require("./types/params"));
var _262 = __toESM(require("./types/types"));
var _263 = __toESM(require("./types/validator"));
var _264 = __toESM(require("./version/types"));
var tendermint;
((tendermint2) => {
  tendermint2.abci = {
    ..._254
  };
  tendermint2.crypto = {
    ..._255,
    ..._256
  };
  let libs;
  ((libs2) => {
    libs2.bits = {
      ..._257
    };
  })(libs = tendermint2.libs || (tendermint2.libs = {}));
  tendermint2.p2p = {
    ..._258
  };
  tendermint2.types = {
    ..._259,
    ..._260,
    ..._261,
    ..._262,
    ..._263
  };
  tendermint2.version = {
    ..._264
  };
})(tendermint || (tendermint = {}));
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  tendermint
});
