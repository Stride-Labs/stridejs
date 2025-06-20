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
  gaiaAminoConverters: () => gaiaAminoConverters,
  gaiaProtoRegistry: () => gaiaProtoRegistry,
  getSigningGaiaClient: () => getSigningGaiaClient,
  getSigningGaiaClientOptions: () => getSigningGaiaClientOptions
});
module.exports = __toCommonJS(client_exports);
var import_proto_signing = require("@cosmjs/proto-signing");
var import_stargate = require("@cosmjs/stargate");
var gaiaLiquidV1beta1TxRegistry = __toESM(require("./liquid/v1beta1/tx.registry"));
var gaiaLiquidV1beta1TxAmino = __toESM(require("./liquid/v1beta1/tx.amino"));
const gaiaAminoConverters = {
  ...gaiaLiquidV1beta1TxAmino.AminoConverter
};
const gaiaProtoRegistry = [...gaiaLiquidV1beta1TxRegistry.registry];
const getSigningGaiaClientOptions = ({
  defaultTypes = import_stargate.defaultRegistryTypes
} = {}) => {
  const registry = new import_proto_signing.Registry([...defaultTypes, ...gaiaProtoRegistry]);
  const aminoTypes = new import_stargate.AminoTypes({
    ...gaiaAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
const getSigningGaiaClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = import_stargate.defaultRegistryTypes
}) => {
  const {
    registry,
    aminoTypes
  } = getSigningGaiaClientOptions({
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
  gaiaAminoConverters,
  gaiaProtoRegistry,
  getSigningGaiaClient,
  getSigningGaiaClientOptions
});
