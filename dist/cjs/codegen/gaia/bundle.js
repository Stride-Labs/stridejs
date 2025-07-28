"use strict";
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
  gaia: () => gaia
});
module.exports = __toCommonJS(bundle_exports);
var _135 = __toESM(require("./liquid/module/v1/module"));
var _136 = __toESM(require("./liquid/v1beta1/genesis"));
var _137 = __toESM(require("./liquid/v1beta1/liquid"));
var _138 = __toESM(require("./liquid/v1beta1/lsm_tx"));
var _139 = __toESM(require("./liquid/v1beta1/query"));
var _140 = __toESM(require("./liquid/v1beta1/tx"));
var _141 = __toESM(require("./metaprotocols/extensions"));
var _348 = __toESM(require("./liquid/v1beta1/tx.amino"));
var _349 = __toESM(require("./liquid/v1beta1/tx.registry"));
var _350 = __toESM(require("./liquid/v1beta1/query.rpc.Query"));
var _351 = __toESM(require("./liquid/v1beta1/tx.rpc.msg"));
var _425 = __toESM(require("./rpc.query"));
var _426 = __toESM(require("./rpc.tx"));
var gaia;
((gaia2) => {
  let liquid;
  ((liquid2) => {
    let module2;
    ((module3) => {
      module3.v1 = {
        ..._135
      };
    })(module2 = liquid2.module || (liquid2.module = {}));
    liquid2.v1beta1 = {
      ..._136,
      ..._137,
      ..._138,
      ..._139,
      ..._140,
      ..._348,
      ..._349,
      ..._350,
      ..._351
    };
  })(liquid = gaia2.liquid || (gaia2.liquid = {}));
  gaia2.metaprotocols = {
    ..._141
  };
  gaia2.ClientFactory = {
    ..._425,
    ..._426
  };
})(gaia || (gaia = {}));
// Removed broken CommonJS export annotation
