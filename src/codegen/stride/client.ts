import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as strideAirdropTxRegistry from "./airdrop/tx.registry";
import * as strideAuctionTxRegistry from "./auction/tx.registry";
import * as strideClaimTxRegistry from "./claim/tx.registry";
import * as strideIcaoracleTxRegistry from "./icaoracle/tx.registry";
import * as strideIcqoracleTxRegistry from "./icqoracle/tx.registry";
import * as strideInterchainqueryV1TxRegistry from "./interchainquery/v1/tx.registry";
import * as strideStakedymTxRegistry from "./stakedym/tx.registry";
import * as strideStakeibcTxRegistry from "./stakeibc/tx.registry";
import * as strideStaketiaTxRegistry from "./staketia/tx.registry";
import * as strideStrdburnerTxRegistry from "./strdburner/tx.registry";
import * as strideAirdropTxAmino from "./airdrop/tx.amino";
import * as strideAuctionTxAmino from "./auction/tx.amino";
import * as strideClaimTxAmino from "./claim/tx.amino";
import * as strideIcaoracleTxAmino from "./icaoracle/tx.amino";
import * as strideIcqoracleTxAmino from "./icqoracle/tx.amino";
import * as strideInterchainqueryV1TxAmino from "./interchainquery/v1/tx.amino";
import * as strideStakedymTxAmino from "./stakedym/tx.amino";
import * as strideStakeibcTxAmino from "./stakeibc/tx.amino";
import * as strideStaketiaTxAmino from "./staketia/tx.amino";
import * as strideStrdburnerTxAmino from "./strdburner/tx.amino";
export const strideAminoConverters = {
  ...strideAirdropTxAmino.AminoConverter,
  ...strideAuctionTxAmino.AminoConverter,
  ...strideClaimTxAmino.AminoConverter,
  ...strideIcaoracleTxAmino.AminoConverter,
  ...strideIcqoracleTxAmino.AminoConverter,
  ...strideInterchainqueryV1TxAmino.AminoConverter,
  ...strideStakedymTxAmino.AminoConverter,
  ...strideStakeibcTxAmino.AminoConverter,
  ...strideStaketiaTxAmino.AminoConverter,
  ...strideStrdburnerTxAmino.AminoConverter
};
export const strideProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...strideAirdropTxRegistry.registry, ...strideAuctionTxRegistry.registry, ...strideClaimTxRegistry.registry, ...strideIcaoracleTxRegistry.registry, ...strideIcqoracleTxRegistry.registry, ...strideInterchainqueryV1TxRegistry.registry, ...strideStakedymTxRegistry.registry, ...strideStakeibcTxRegistry.registry, ...strideStaketiaTxRegistry.registry, ...strideStrdburnerTxRegistry.registry];
export const getSigningStrideClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...strideProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...strideAminoConverters
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
  rpcEndpoint: string | HttpEndpoint;
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
    registry: registry as any,
    aminoTypes
  });
  return client;
};