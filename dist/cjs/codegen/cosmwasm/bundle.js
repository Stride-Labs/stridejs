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
  cosmwasm: () => cosmwasm
});
module.exports = __toCommonJS(bundle_exports);
var _129 = __toESM(require("./wasm/v1/authz"));
var _130 = __toESM(require("./wasm/v1/genesis"));
var _131 = __toESM(require("./wasm/v1/ibc"));
var _132 = __toESM(require("./wasm/v1/proposal_legacy"));
var _133 = __toESM(require("./wasm/v1/query"));
var _134 = __toESM(require("./wasm/v1/tx"));
var _135 = __toESM(require("./wasm/v1/types"));
var _338 = __toESM(require("./wasm/v1/tx.amino"));
var _339 = __toESM(require("./wasm/v1/tx.registry"));
var _340 = __toESM(require("./wasm/v1/query.rpc.Query"));
var _341 = __toESM(require("./wasm/v1/tx.rpc.msg"));
var _413 = __toESM(require("./rpc.query"));
var _414 = __toESM(require("./rpc.tx"));
var cosmwasm;
((cosmwasm2) => {
  let wasm;
  ((wasm2) => {
    wasm2.v1 = {
      ..._129,
      ..._130,
      ..._131,
      ..._132,
      ..._133,
      ..._134,
      ..._135,
      ..._338,
      ..._339,
      ..._340,
      ..._341
    };
  })(wasm = cosmwasm2.wasm || (cosmwasm2.wasm = {}));
  cosmwasm2.ClientFactory = {
    ..._413,
    ..._414
  };
})(cosmwasm || (cosmwasm = {}));
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  cosmwasm
});
