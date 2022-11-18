import { OfflineSigner, GeneratedType, Registry } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import * as strideInterchainqueryV1MessagesRegistry from "./interchainquery/v1/messages.registry";
import * as strideStakeibcTxRegistry from "./stakeibc/tx.registry";
import * as strideInterchainqueryV1MessagesAmino from "./interchainquery/v1/messages.amino";
import * as strideStakeibcTxAmino from "./stakeibc/tx.amino";
export const strideAminoConverters = { ...strideInterchainqueryV1MessagesAmino.AminoConverter,
  ...strideStakeibcTxAmino.AminoConverter
};
export const strideProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...strideInterchainqueryV1MessagesRegistry.registry, ...strideStakeibcTxRegistry.registry];
export const getSigningStrideClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...strideProtoRegistry]);
  const aminoTypes = new AminoTypes({ ...strideAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningStrideClient = async ({
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
  } = getSigningStrideClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry,
    aminoTypes
  });
  return client;
};