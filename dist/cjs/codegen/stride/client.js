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
  getSigningStrideClient: () => getSigningStrideClient,
  getSigningStrideClientOptions: () => getSigningStrideClientOptions,
  strideAminoConverters: () => strideAminoConverters,
  strideProtoRegistry: () => strideProtoRegistry
});
module.exports = __toCommonJS(client_exports);
var import_proto_signing = require("@cosmjs/proto-signing");
var import_stargate = require("@cosmjs/stargate");
var strideAirdropTxRegistry = __toESM(require("./airdrop/tx.registry"));
var strideAuctionTxRegistry = __toESM(require("./auction/tx.registry"));
var strideClaimTxRegistry = __toESM(require("./claim/tx.registry"));
var strideIcaoracleTxRegistry = __toESM(require("./icaoracle/tx.registry"));
var strideIcqoracleTxRegistry = __toESM(require("./icqoracle/tx.registry"));
var strideInterchainqueryV1TxRegistry = __toESM(require("./interchainquery/v1/tx.registry"));
var strideStakedymTxRegistry = __toESM(require("./stakedym/tx.registry"));
var strideStakeibcTxRegistry = __toESM(require("./stakeibc/tx.registry"));
var strideStaketiaTxRegistry = __toESM(require("./staketia/tx.registry"));
var strideAirdropTxAmino = __toESM(require("./airdrop/tx.amino"));
var strideAuctionTxAmino = __toESM(require("./auction/tx.amino"));
var strideClaimTxAmino = __toESM(require("./claim/tx.amino"));
var strideIcaoracleTxAmino = __toESM(require("./icaoracle/tx.amino"));
var strideIcqoracleTxAmino = __toESM(require("./icqoracle/tx.amino"));
var strideInterchainqueryV1TxAmino = __toESM(require("./interchainquery/v1/tx.amino"));
var strideStakedymTxAmino = __toESM(require("./stakedym/tx.amino"));
var strideStakeibcTxAmino = __toESM(require("./stakeibc/tx.amino"));
var strideStaketiaTxAmino = __toESM(require("./staketia/tx.amino"));
const strideAminoConverters = {
  ...strideAirdropTxAmino.AminoConverter,
  ...strideAuctionTxAmino.AminoConverter,
  ...strideClaimTxAmino.AminoConverter,
  ...strideIcaoracleTxAmino.AminoConverter,
  ...strideIcqoracleTxAmino.AminoConverter,
  ...strideInterchainqueryV1TxAmino.AminoConverter,
  ...strideStakedymTxAmino.AminoConverter,
  ...strideStakeibcTxAmino.AminoConverter,
  ...strideStaketiaTxAmino.AminoConverter
};
const strideProtoRegistry = [...strideAirdropTxRegistry.registry, ...strideAuctionTxRegistry.registry, ...strideClaimTxRegistry.registry, ...strideIcaoracleTxRegistry.registry, ...strideIcqoracleTxRegistry.registry, ...strideInterchainqueryV1TxRegistry.registry, ...strideStakedymTxRegistry.registry, ...strideStakeibcTxRegistry.registry, ...strideStaketiaTxRegistry.registry];
const getSigningStrideClientOptions = ({
  defaultTypes = import_stargate.defaultRegistryTypes
} = {}) => {
  const registry = new import_proto_signing.Registry([...defaultTypes, ...strideProtoRegistry]);
  const aminoTypes = new import_stargate.AminoTypes({
    ...strideAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
const getSigningStrideClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = import_stargate.defaultRegistryTypes
}) => {
  const {
    registry,
    aminoTypes
  } = getSigningStrideClientOptions({
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
  getSigningStrideClient,
  getSigningStrideClientOptions,
  strideAminoConverters,
  strideProtoRegistry
});
