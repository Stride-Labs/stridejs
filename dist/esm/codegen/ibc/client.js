import { Registry } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import * as ibcApplicationsFeeV1TxRegistry from "./applications/fee/v1/tx.registry";
import * as ibcApplicationsInterchainAccountsControllerV1TxRegistry from "./applications/interchain_accounts/controller/v1/tx.registry";
import * as ibcApplicationsInterchainAccountsHostV1TxRegistry from "./applications/interchain_accounts/host/v1/tx.registry";
import * as ibcApplicationsTransferV1TxRegistry from "./applications/transfer/v1/tx.registry";
import * as ibcCoreChannelV1TxRegistry from "./core/channel/v1/tx.registry";
import * as ibcCoreClientV1TxRegistry from "./core/client/v1/tx.registry";
import * as ibcCoreConnectionV1TxRegistry from "./core/connection/v1/tx.registry";
import * as ibcApplicationsFeeV1TxAmino from "./applications/fee/v1/tx.amino";
import * as ibcApplicationsInterchainAccountsControllerV1TxAmino from "./applications/interchain_accounts/controller/v1/tx.amino";
import * as ibcApplicationsInterchainAccountsHostV1TxAmino from "./applications/interchain_accounts/host/v1/tx.amino";
import * as ibcApplicationsTransferV1TxAmino from "./applications/transfer/v1/tx.amino";
import * as ibcCoreChannelV1TxAmino from "./core/channel/v1/tx.amino";
import * as ibcCoreClientV1TxAmino from "./core/client/v1/tx.amino";
import * as ibcCoreConnectionV1TxAmino from "./core/connection/v1/tx.amino";
const ibcAminoConverters = {
  ...ibcApplicationsFeeV1TxAmino.AminoConverter,
  ...ibcApplicationsInterchainAccountsControllerV1TxAmino.AminoConverter,
  ...ibcApplicationsInterchainAccountsHostV1TxAmino.AminoConverter,
  ...ibcApplicationsTransferV1TxAmino.AminoConverter,
  ...ibcCoreChannelV1TxAmino.AminoConverter,
  ...ibcCoreClientV1TxAmino.AminoConverter,
  ...ibcCoreConnectionV1TxAmino.AminoConverter
};
const ibcProtoRegistry = [...ibcApplicationsFeeV1TxRegistry.registry, ...ibcApplicationsInterchainAccountsControllerV1TxRegistry.registry, ...ibcApplicationsInterchainAccountsHostV1TxRegistry.registry, ...ibcApplicationsTransferV1TxRegistry.registry, ...ibcCoreChannelV1TxRegistry.registry, ...ibcCoreClientV1TxRegistry.registry, ...ibcCoreConnectionV1TxRegistry.registry];
const getSigningIbcClientOptions = ({
  defaultTypes = defaultRegistryTypes
} = {}) => {
  const registry = new Registry([...defaultTypes, ...ibcProtoRegistry]);
  const aminoTypes = new AminoTypes({
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
  defaultTypes = defaultRegistryTypes
}) => {
  const {
    registry,
    aminoTypes
  } = getSigningIbcClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry,
    aminoTypes
  });
  return client;
};
export {
  getSigningIbcClient,
  getSigningIbcClientOptions,
  ibcAminoConverters,
  ibcProtoRegistry
};
