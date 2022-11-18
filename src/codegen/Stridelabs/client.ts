import { OfflineSigner, GeneratedType, Registry } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import * as claimV1beta1TxRegistry from "../claim/v1beta1/tx.registry";
import * as claimV1beta1TxAmino from "../claim/v1beta1/tx.amino";
export const stridelabsAminoConverters = { ...claimV1beta1TxAmino.AminoConverter
};
export const stridelabsProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...claimV1beta1TxRegistry.registry];
export const getSigningStridelabsClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...stridelabsProtoRegistry]);
  const aminoTypes = new AminoTypes({ ...stridelabsAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningStridelabsClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const {
    registry,
    aminoTypes
  } = getSigningStridelabsClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry,
    aminoTypes
  });
  return client;
};