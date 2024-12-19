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
var _245 = __toESM(require("./abci/types"));
var _246 = __toESM(require("./crypto/keys"));
var _247 = __toESM(require("./crypto/proof"));
var _248 = __toESM(require("./libs/bits/types"));
var _249 = __toESM(require("./p2p/types"));
var _250 = __toESM(require("./types/block"));
var _251 = __toESM(require("./types/evidence"));
var _252 = __toESM(require("./types/params"));
var _253 = __toESM(require("./types/types"));
var _254 = __toESM(require("./types/validator"));
var _255 = __toESM(require("./version/types"));
var tendermint;
((tendermint2) => {
  tendermint2.abci = {
    ..._245
  };
  tendermint2.crypto = {
    ..._246,
    ..._247
  };
  let libs;
  ((libs2) => {
    libs2.bits = {
      ..._248
    };
  })(libs = tendermint2.libs || (tendermint2.libs = {}));
  tendermint2.p2p = {
    ..._249
  };
  tendermint2.types = {
    ..._250,
    ..._251,
    ..._252,
    ..._253,
    ..._254
  };
  tendermint2.version = {
    ..._255
  };
})(tendermint || (tendermint = {}));
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  tendermint
});
