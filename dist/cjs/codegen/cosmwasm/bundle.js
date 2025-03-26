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
var _134 = __toESM(require("./wasm/v1/authz"));
var _135 = __toESM(require("./wasm/v1/genesis"));
var _136 = __toESM(require("./wasm/v1/ibc"));
var _137 = __toESM(require("./wasm/v1/proposal_legacy"));
var _138 = __toESM(require("./wasm/v1/query"));
var _139 = __toESM(require("./wasm/v1/tx"));
var _140 = __toESM(require("./wasm/v1/types"));
var _350 = __toESM(require("./wasm/v1/tx.amino"));
var _351 = __toESM(require("./wasm/v1/tx.registry"));
var _352 = __toESM(require("./wasm/v1/query.rpc.Query"));
var _353 = __toESM(require("./wasm/v1/tx.rpc.msg"));
var _429 = __toESM(require("./rpc.query"));
var _430 = __toESM(require("./rpc.tx"));
var cosmwasm;
((cosmwasm2) => {
  let wasm;
  ((wasm2) => {
    wasm2.v1 = {
      ..._134,
      ..._135,
      ..._136,
      ..._137,
      ..._138,
      ..._139,
      ..._140,
      ..._350,
      ..._351,
      ..._352,
      ..._353
    };
  })(wasm = cosmwasm2.wasm || (cosmwasm2.wasm = {}));
  cosmwasm2.ClientFactory = {
    ..._429,
    ..._430
  };
})(cosmwasm || (cosmwasm = {}));
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  cosmwasm
});
