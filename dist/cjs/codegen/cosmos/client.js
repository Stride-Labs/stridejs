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
var client_exports = {};
__export(client_exports, {
  cosmosAminoConverters: () => cosmosAminoConverters,
  cosmosProtoRegistry: () => cosmosProtoRegistry,
  getSigningCosmosClient: () => getSigningCosmosClient,
  getSigningCosmosClientOptions: () => getSigningCosmosClientOptions
});
module.exports = __toCommonJS(client_exports);
var import_proto_signing = require("@cosmjs/proto-signing");
var import_stargate = require("@cosmjs/stargate");
var cosmosAuthV1beta1TxRegistry = __toESM(require("./auth/v1beta1/tx.registry"));
var cosmosAuthzV1beta1TxRegistry = __toESM(require("./authz/v1beta1/tx.registry"));
var cosmosBankV1beta1TxRegistry = __toESM(require("./bank/v1beta1/tx.registry"));
var cosmosConsensusV1TxRegistry = __toESM(require("./consensus/v1/tx.registry"));
var cosmosCrisisV1beta1TxRegistry = __toESM(require("./crisis/v1beta1/tx.registry"));
var cosmosDistributionV1beta1TxRegistry = __toESM(require("./distribution/v1beta1/tx.registry"));
var cosmosEvidenceV1beta1TxRegistry = __toESM(require("./evidence/v1beta1/tx.registry"));
var cosmosFeegrantV1beta1TxRegistry = __toESM(require("./feegrant/v1beta1/tx.registry"));
var cosmosGovV1TxRegistry = __toESM(require("./gov/v1/tx.registry"));
var cosmosGovV1beta1TxRegistry = __toESM(require("./gov/v1beta1/tx.registry"));
var cosmosGroupV1TxRegistry = __toESM(require("./group/v1/tx.registry"));
var cosmosMintV1beta1TxRegistry = __toESM(require("./mint/v1beta1/tx.registry"));
var cosmosNftV1beta1TxRegistry = __toESM(require("./nft/v1beta1/tx.registry"));
var cosmosSlashingV1beta1TxRegistry = __toESM(require("./slashing/v1beta1/tx.registry"));
var cosmosStakingV1beta1TxRegistry = __toESM(require("./staking/v1beta1/tx.registry"));
var cosmosUpgradeV1beta1TxRegistry = __toESM(require("./upgrade/v1beta1/tx.registry"));
var cosmosVestingV1beta1TxRegistry = __toESM(require("./vesting/v1beta1/tx.registry"));
var cosmosAuthV1beta1TxAmino = __toESM(require("./auth/v1beta1/tx.amino"));
var cosmosAuthzV1beta1TxAmino = __toESM(require("./authz/v1beta1/tx.amino"));
var cosmosBankV1beta1TxAmino = __toESM(require("./bank/v1beta1/tx.amino"));
var cosmosConsensusV1TxAmino = __toESM(require("./consensus/v1/tx.amino"));
var cosmosCrisisV1beta1TxAmino = __toESM(require("./crisis/v1beta1/tx.amino"));
var cosmosDistributionV1beta1TxAmino = __toESM(require("./distribution/v1beta1/tx.amino"));
var cosmosEvidenceV1beta1TxAmino = __toESM(require("./evidence/v1beta1/tx.amino"));
var cosmosFeegrantV1beta1TxAmino = __toESM(require("./feegrant/v1beta1/tx.amino"));
var cosmosGovV1TxAmino = __toESM(require("./gov/v1/tx.amino"));
var cosmosGovV1beta1TxAmino = __toESM(require("./gov/v1beta1/tx.amino"));
var cosmosGroupV1TxAmino = __toESM(require("./group/v1/tx.amino"));
var cosmosMintV1beta1TxAmino = __toESM(require("./mint/v1beta1/tx.amino"));
var cosmosNftV1beta1TxAmino = __toESM(require("./nft/v1beta1/tx.amino"));
var cosmosSlashingV1beta1TxAmino = __toESM(require("./slashing/v1beta1/tx.amino"));
var cosmosStakingV1beta1TxAmino = __toESM(require("./staking/v1beta1/tx.amino"));
var cosmosUpgradeV1beta1TxAmino = __toESM(require("./upgrade/v1beta1/tx.amino"));
var cosmosVestingV1beta1TxAmino = __toESM(require("./vesting/v1beta1/tx.amino"));
const cosmosAminoConverters = {
  ...cosmosAuthV1beta1TxAmino.AminoConverter,
  ...cosmosAuthzV1beta1TxAmino.AminoConverter,
  ...cosmosBankV1beta1TxAmino.AminoConverter,
  ...cosmosConsensusV1TxAmino.AminoConverter,
  ...cosmosCrisisV1beta1TxAmino.AminoConverter,
  ...cosmosDistributionV1beta1TxAmino.AminoConverter,
  ...cosmosEvidenceV1beta1TxAmino.AminoConverter,
  ...cosmosFeegrantV1beta1TxAmino.AminoConverter,
  ...cosmosGovV1TxAmino.AminoConverter,
  ...cosmosGovV1beta1TxAmino.AminoConverter,
  ...cosmosGroupV1TxAmino.AminoConverter,
  ...cosmosMintV1beta1TxAmino.AminoConverter,
  ...cosmosNftV1beta1TxAmino.AminoConverter,
  ...cosmosSlashingV1beta1TxAmino.AminoConverter,
  ...cosmosStakingV1beta1TxAmino.AminoConverter,
  ...cosmosUpgradeV1beta1TxAmino.AminoConverter,
  ...cosmosVestingV1beta1TxAmino.AminoConverter
};
const cosmosProtoRegistry = [...cosmosAuthV1beta1TxRegistry.registry, ...cosmosAuthzV1beta1TxRegistry.registry, ...cosmosBankV1beta1TxRegistry.registry, ...cosmosConsensusV1TxRegistry.registry, ...cosmosCrisisV1beta1TxRegistry.registry, ...cosmosDistributionV1beta1TxRegistry.registry, ...cosmosEvidenceV1beta1TxRegistry.registry, ...cosmosFeegrantV1beta1TxRegistry.registry, ...cosmosGovV1TxRegistry.registry, ...cosmosGovV1beta1TxRegistry.registry, ...cosmosGroupV1TxRegistry.registry, ...cosmosMintV1beta1TxRegistry.registry, ...cosmosNftV1beta1TxRegistry.registry, ...cosmosSlashingV1beta1TxRegistry.registry, ...cosmosStakingV1beta1TxRegistry.registry, ...cosmosUpgradeV1beta1TxRegistry.registry, ...cosmosVestingV1beta1TxRegistry.registry];
const getSigningCosmosClientOptions = () => {
  const registry = new import_proto_signing.Registry([...cosmosProtoRegistry]);
  const aminoTypes = new import_stargate.AminoTypes({
    ...cosmosAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
const getSigningCosmosClient = async ({
  rpcEndpoint,
  signer
}) => {
  const {
    registry,
    aminoTypes
  } = getSigningCosmosClientOptions();
  const client = await import_stargate.SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry,
    aminoTypes
  });
  return client;
};
// Proper CommonJS exports for dynamic imports
module.exports = {
  cosmosAminoConverters,
  cosmosProtoRegistry,
  getSigningCosmosClient,
  getSigningCosmosClientOptions
};
