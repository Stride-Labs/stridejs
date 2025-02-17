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
var client_exports = {};
__export(client_exports, {
  cosmwasmAminoConverters: () => cosmwasmAminoConverters,
  cosmwasmProtoRegistry: () => cosmwasmProtoRegistry,
  getSigningCosmwasmClient: () => getSigningCosmwasmClient,
  getSigningCosmwasmClientOptions: () => getSigningCosmwasmClientOptions
});
module.exports = __toCommonJS(client_exports);
var import_proto_signing = require("@cosmjs/proto-signing");
var import_stargate = require("@cosmjs/stargate");
var cosmwasmWasmV1TxRegistry = __toESM(require("./wasm/v1/tx.registry"));
var cosmwasmWasmV1TxAmino = __toESM(require("./wasm/v1/tx.amino"));
const cosmwasmAminoConverters = {
  ...cosmwasmWasmV1TxAmino.AminoConverter
};
const cosmwasmProtoRegistry = [...cosmwasmWasmV1TxRegistry.registry];
const getSigningCosmwasmClientOptions = ({
  defaultTypes = import_stargate.defaultRegistryTypes
} = {}) => {
  const registry = new import_proto_signing.Registry([...defaultTypes, ...cosmwasmProtoRegistry]);
  const aminoTypes = new import_stargate.AminoTypes({
    ...cosmwasmAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
const getSigningCosmwasmClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = import_stargate.defaultRegistryTypes
}) => {
  const {
    registry,
    aminoTypes
  } = getSigningCosmwasmClientOptions({
    defaultTypes
  });
  const client = await import_stargate.SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry,
    aminoTypes
  });
  return client;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  cosmwasmAminoConverters,
  cosmwasmProtoRegistry,
  getSigningCosmwasmClient,
  getSigningCosmwasmClientOptions
});
