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
  getSigningIbcClient: () => getSigningIbcClient,
  getSigningIbcClientOptions: () => getSigningIbcClientOptions,
  ibcAminoConverters: () => ibcAminoConverters,
  ibcProtoRegistry: () => ibcProtoRegistry
});
module.exports = __toCommonJS(client_exports);
var import_proto_signing = require("@cosmjs/proto-signing");
var import_stargate = require("@cosmjs/stargate");
var ibcApplicationsFeeV1TxRegistry = __toESM(require("./applications/fee/v1/tx.registry"));
var ibcApplicationsInterchainAccountsControllerV1TxRegistry = __toESM(require("./applications/interchain_accounts/controller/v1/tx.registry"));
var ibcApplicationsTransferV1TxRegistry = __toESM(require("./applications/transfer/v1/tx.registry"));
var ibcCoreChannelV1TxRegistry = __toESM(require("./core/channel/v1/tx.registry"));
var ibcCoreClientV1TxRegistry = __toESM(require("./core/client/v1/tx.registry"));
var ibcCoreConnectionV1TxRegistry = __toESM(require("./core/connection/v1/tx.registry"));
var ibcApplicationsFeeV1TxAmino = __toESM(require("./applications/fee/v1/tx.amino"));
var ibcApplicationsInterchainAccountsControllerV1TxAmino = __toESM(require("./applications/interchain_accounts/controller/v1/tx.amino"));
var ibcApplicationsTransferV1TxAmino = __toESM(require("./applications/transfer/v1/tx.amino"));
var ibcCoreChannelV1TxAmino = __toESM(require("./core/channel/v1/tx.amino"));
var ibcCoreClientV1TxAmino = __toESM(require("./core/client/v1/tx.amino"));
var ibcCoreConnectionV1TxAmino = __toESM(require("./core/connection/v1/tx.amino"));
const ibcAminoConverters = {
  ...ibcApplicationsFeeV1TxAmino.AminoConverter,
  ...ibcApplicationsInterchainAccountsControllerV1TxAmino.AminoConverter,
  ...ibcApplicationsTransferV1TxAmino.AminoConverter,
  ...ibcCoreChannelV1TxAmino.AminoConverter,
  ...ibcCoreClientV1TxAmino.AminoConverter,
  ...ibcCoreConnectionV1TxAmino.AminoConverter
};
const ibcProtoRegistry = [...ibcApplicationsFeeV1TxRegistry.registry, ...ibcApplicationsInterchainAccountsControllerV1TxRegistry.registry, ...ibcApplicationsTransferV1TxRegistry.registry, ...ibcCoreChannelV1TxRegistry.registry, ...ibcCoreClientV1TxRegistry.registry, ...ibcCoreConnectionV1TxRegistry.registry];
const getSigningIbcClientOptions = ({
  defaultTypes = import_stargate.defaultRegistryTypes
} = {}) => {
  const registry = new import_proto_signing.Registry([...defaultTypes, ...ibcProtoRegistry]);
  const aminoTypes = new import_stargate.AminoTypes({
    ...ibcAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
const getSigningIbcClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = import_stargate.defaultRegistryTypes
}) => {
  const {
    registry,
    aminoTypes
  } = getSigningIbcClientOptions({
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
  getSigningIbcClient,
  getSigningIbcClientOptions,
  ibcAminoConverters,
  ibcProtoRegistry
});
