import { Registry } from "@cosmjs/proto-signing";
import {
  AminoTypes,
  SigningStargateClient
} from "@cosmjs/stargate";
import {
  cosmos,
  cosmosAminoConverters,
  cosmosProtoRegistry,
  ibc,
  ibcAminoConverters,
  ibcProtoRegistry,
  stride,
  strideAminoConverters,
  strideProtoRegistry
} from "./codegen";
import { getTxIbcResponses } from "./utils";
class StrideClient {
  constructor(rpcEndpoint, signer, address, signingStargateClient, query, types, options) {
    this.rpcEndpoint = rpcEndpoint;
    this.signer = signer;
    this.address = address;
    this.signingStargateClient = signingStargateClient;
    this.query = query;
    this.types = types;
    this.options = options;
  }
  /**
   * Creates a new StrideClient object.
   *
   * @param {string} rpcUrl - A URL to the CometBFT RPC endpoint, also known as Tendermint RPC, by default on port 26657.
   * @param {OfflineSigner} signer - A signer for signing transactions.
   * @param {string} address - The account address inside the `signer` that is permitted to sign transactions.
   * @param {StrideClientOptions} [options] - Optional. Configurations for the signing client, including gas price, gas limit, and other parameters.
   */
  static async create(rpcUrl, signer, address, options) {
    const registry = new Registry([
      ...strideProtoRegistry,
      ...cosmosProtoRegistry,
      ...ibcProtoRegistry
    ]);
    const aminoTypes = new AminoTypes({
      ...strideAminoConverters,
      ...cosmosAminoConverters,
      ...ibcAminoConverters
    });
    options = Object.assign(
      {},
      {
        registry,
        aminoTypes
      },
      options
    );
    const signingStargateClient = await SigningStargateClient.connectWithSigner(
      rpcUrl,
      signer,
      options
    );
    const query = Object.assign(
      await ibc.ClientFactory.createRPCQueryClient({
        rpcEndpoint: rpcUrl
      }),
      await stride.ClientFactory.createRPCQueryClient({
        rpcEndpoint: rpcUrl
      })
    );
    const types = Object.assign(
      { stride },
      { cosmos },
      { ibc }
    );
    return new StrideClient(
      rpcUrl,
      signer,
      address,
      signingStargateClient,
      query,
      types,
      options
    );
  }
  /**
   * Sign and broadcast a transaction.
   *
   * @param {EncodeObject[]} messages - An array of messages to be encoded and signed.
   * @param {StdFee | "auto" | number} [fee="auto"] - The transaction fee. You can pass a `StdFee` object to set the gas limit and fee manually. If a `GasPrice` object has been passed to `StrideClient.create()`, you can set `"auto"` to automatically determine the gas limit based on the transaction simulation. Alternatively, you can pass a number to enable `"auto"` mode with a custom gas adjustment multiplier (default is `1.4`). Defaults to `"auto"`.
   * @param {string} [memo=""] - An optional memo for the transaction. Defaults to `""`.
   *
   * @returns {DeliverTxResponse} - The response from the network after broadcasting the transaction, including the transaction hash and status.
   */
  async signAndBroadcast(messages, fee = "auto", memo = "") {
    const txResp = await this.signingStargateClient.signAndBroadcast(
      this.address,
      messages,
      fee,
      memo
    );
    const ibcResponses = getTxIbcResponses(
      this.signingStargateClient,
      txResp,
      this.options?.resolveIbcResponsesTimeoutMs ?? void 0,
      this.options?.resolveIbcResponsesCheckIntervalMs ?? void 0
    );
    return Object.assign(txResp, { ibcResponses });
  }
}
export {
  StrideClient
};
