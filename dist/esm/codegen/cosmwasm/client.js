import { Registry } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import * as cosmwasmWasmV1TxRegistry from "./wasm/v1/tx.registry";
import * as cosmwasmWasmV1TxAmino from "./wasm/v1/tx.amino";
const cosmwasmAminoConverters = {
  ...cosmwasmWasmV1TxAmino.AminoConverter
};
const cosmwasmProtoRegistry = [...cosmwasmWasmV1TxRegistry.registry];
const getSigningCosmwasmClientOptions = ({
  defaultTypes = defaultRegistryTypes
} = {}) => {
  const registry = new Registry([...defaultTypes, ...cosmwasmProtoRegistry]);
  const aminoTypes = new AminoTypes({
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
  defaultTypes = defaultRegistryTypes
}) => {
  const {
    registry,
    aminoTypes
  } = getSigningCosmwasmClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry,
    aminoTypes
  });
  return client;
};
export {
  cosmwasmAminoConverters,
  cosmwasmProtoRegistry,
  getSigningCosmwasmClient,
  getSigningCosmwasmClientOptions
};
