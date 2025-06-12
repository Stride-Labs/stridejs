import { Registry } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import * as gaiaLiquidV1beta1TxRegistry from "./liquid/v1beta1/tx.registry";
import * as gaiaLiquidV1beta1TxAmino from "./liquid/v1beta1/tx.amino";
const gaiaAminoConverters = {
  ...gaiaLiquidV1beta1TxAmino.AminoConverter
};
const gaiaProtoRegistry = [...gaiaLiquidV1beta1TxRegistry.registry];
const getSigningGaiaClientOptions = ({
  defaultTypes = defaultRegistryTypes
} = {}) => {
  const registry = new Registry([...defaultTypes, ...gaiaProtoRegistry]);
  const aminoTypes = new AminoTypes({
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
  defaultTypes = defaultRegistryTypes
}) => {
  const {
    registry,
    aminoTypes
  } = getSigningGaiaClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry,
    aminoTypes
  });
  return client;
};
export {
  gaiaAminoConverters,
  gaiaProtoRegistry,
  getSigningGaiaClient,
  getSigningGaiaClientOptions
};
