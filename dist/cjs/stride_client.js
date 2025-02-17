var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stride_client_exports = {};
__export(stride_client_exports, {
  StrideClient: () => StrideClient
});
module.exports = __toCommonJS(stride_client_exports);
var import_proto_signing = require("@cosmjs/proto-signing");
var import_stargate = require("@cosmjs/stargate");
var import_codegen = require("./codegen");
var import_utils = require("./utils");
class StrideClient {
  constructor(rpcEndpoint, signer, address, signingStargateClient, query, options) {
    this.rpcEndpoint = rpcEndpoint;
    this.signer = signer;
    this.address = address;
    this.signingStargateClient = signingStargateClient;
    this.query = query;
    this.options = options;
  }
  /**
   * Creates a new StrideClient object.
   *
   * @param {string} rpcUrl - A URL to the CometBFT RPC endpoint, also known as Tendermint RPC, by default on port 26657.
   * @param {OfflineSigner} signer - A signer for signing transactions.
   * @param {string} address - The account address inside the `signer` that is permitted to sign transactions.
   * @param {StrideClientOptions} [options] - Optional. Configurations for the signing client, including gas price, gas limit, and other parameters.
   * @param {StrideClientOptions.resolveIbcResponsesTimeoutMs} [options.resolveIbcResponsesTimeoutMs] - Optional. How much time (in milliseconds) to wait for IBC response txs (acknowledge/timeout). Defaults to `180_000` (3 minutes).
   * @param {StrideClientOptions.resolveIbcResponsesCheckIntervalMs} [options.resolveIbcResponsesCheckIntervalMs] - Optional. When waiting for IBC response txs, interval between checks in milliseconds. Defaults to `12_000` (12 seconds).
   */
  static async create(rpcUrl, signer, address, options) {
    const registry = new import_proto_signing.Registry([
      ...import_codegen.strideProtoRegistry,
      ...import_codegen.cosmosProtoRegistry,
      ...import_codegen.ibcProtoRegistry,
      ...import_codegen.cosmwasmProtoRegistry
    ]);
    const aminoTypes = new import_stargate.AminoTypes({
      ...import_codegen.strideAminoConverters,
      ...import_codegen.cosmosAminoConverters,
      ...import_codegen.ibcAminoConverters,
      ...import_codegen.cosmwasmAminoConverters
    });
    options = Object.assign(
      {},
      {
        registry,
        aminoTypes
      },
      options
    );
    const signingStargateClient = await import_stargate.SigningStargateClient.connectWithSigner(
      rpcUrl,
      signer,
      options
    );
    const query = Object.assign(
      await import_codegen.ibc.ClientFactory.createRPCQueryClient({
        rpcEndpoint: rpcUrl
      }),
      await import_codegen.cosmwasm.ClientFactory.createRPCQueryClient({
        rpcEndpoint: rpcUrl
      }),
      await import_codegen.cosmos.ClientFactory.createRPCQueryClient({
        rpcEndpoint: rpcUrl
      }),
      await import_codegen.stride.ClientFactory.createRPCQueryClient({
        rpcEndpoint: rpcUrl
      })
    );
    return new StrideClient(
      rpcUrl,
      signer,
      address,
      signingStargateClient,
      query,
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
    const ibcResponses = (0, import_utils.getTxIbcResponses)(
      this.signingStargateClient,
      txResp,
      this.options?.resolveIbcResponsesTimeoutMs ?? void 0,
      this.options?.resolveIbcResponsesCheckIntervalMs ?? void 0
    );
    return Object.assign(txResp, { ibcResponses });
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  StrideClient
});
