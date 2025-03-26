var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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
var codegen_exports = {};
module.exports = __toCommonJS(codegen_exports);
__reExport(codegen_exports, require("./amino/bundle"), module.exports);
__reExport(codegen_exports, require("./capability/bundle"), module.exports);
__reExport(codegen_exports, require("./cosmos_proto/bundle"), module.exports);
__reExport(codegen_exports, require("./cosmos/bundle"), module.exports);
__reExport(codegen_exports, require("./cosmos/client"), module.exports);
__reExport(codegen_exports, require("./cosmwasm/bundle"), module.exports);
__reExport(codegen_exports, require("./cosmwasm/client"), module.exports);
__reExport(codegen_exports, require("./gogoproto/bundle"), module.exports);
__reExport(codegen_exports, require("./google/bundle"), module.exports);
__reExport(codegen_exports, require("./ibc/bundle"), module.exports);
__reExport(codegen_exports, require("./ibc/client"), module.exports);
__reExport(codegen_exports, require("./osmosis/bundle"), module.exports);
__reExport(codegen_exports, require("./stride/bundle"), module.exports);
__reExport(codegen_exports, require("./stride/client"), module.exports);
__reExport(codegen_exports, require("./tendermint/bundle"), module.exports);
__reExport(codegen_exports, require("./varint"), module.exports);
__reExport(codegen_exports, require("./utf8"), module.exports);
__reExport(codegen_exports, require("./binary"), module.exports);
__reExport(codegen_exports, require("./types"), module.exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ...require("./amino/bundle"),
  ...require("./capability/bundle"),
  ...require("./cosmos_proto/bundle"),
  ...require("./cosmos/bundle"),
  ...require("./cosmos/client"),
  ...require("./cosmwasm/bundle"),
  ...require("./cosmwasm/client"),
  ...require("./gogoproto/bundle"),
  ...require("./google/bundle"),
  ...require("./ibc/bundle"),
  ...require("./ibc/client"),
  ...require("./osmosis/bundle"),
  ...require("./stride/bundle"),
  ...require("./stride/client"),
  ...require("./tendermint/bundle"),
  ...require("./varint"),
  ...require("./utf8"),
  ...require("./binary"),
  ...require("./types")
});
