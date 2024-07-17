import { OfflineSigner, GeneratedType, Registry } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import * as strideAirdropTxRegistry from "./airdrop/tx.registry";
import * as strideClaimTxRegistry from "./claim/tx.registry";
import * as strideIcaoracleTxRegistry from "./icaoracle/tx.registry";
import * as strideInterchainqueryV1MessagesRegistry from "./interchainquery/v1/messages.registry";
import * as strideStakedymTxRegistry from "./stakedym/tx.registry";
import * as strideStakeibcTxRegistry from "./stakeibc/tx.registry";
import * as strideStaketiaTxRegistry from "./staketia/tx.registry";
import * as strideAirdropTxAmino from "./airdrop/tx.amino";
import * as strideClaimTxAmino from "./claim/tx.amino";
import * as strideIcaoracleTxAmino from "./icaoracle/tx.amino";
import * as strideInterchainqueryV1MessagesAmino from "./interchainquery/v1/messages.amino";
import * as strideStakedymTxAmino from "./stakedym/tx.amino";
import * as strideStakeibcTxAmino from "./stakeibc/tx.amino";
import * as strideStaketiaTxAmino from "./staketia/tx.amino";
export const strideAminoConverters = { ...strideAirdropTxAmino.AminoConverter,
  ...strideClaimTxAmino.AminoConverter,
  ...strideIcaoracleTxAmino.AminoConverter,
  ...strideInterchainqueryV1MessagesAmino.AminoConverter,
  ...strideStakedymTxAmino.AminoConverter,
  ...strideStakeibcTxAmino.AminoConverter,
  ...strideStaketiaTxAmino.AminoConverter
};
export const strideProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...strideAirdropTxRegistry.registry, ...strideClaimTxRegistry.registry, ...strideIcaoracleTxRegistry.registry, ...strideInterchainqueryV1MessagesRegistry.registry, ...strideStakedymTxRegistry.registry, ...strideStakeibcTxRegistry.registry, ...strideStaketiaTxRegistry.registry];
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