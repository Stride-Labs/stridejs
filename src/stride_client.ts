import { EncodeObject, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import {
  AminoTypes,
  DeliverTxResponse,
  SigningStargateClient,
  SigningStargateClientOptions,
  StdFee,
} from "@cosmjs/stargate";
import {
  cosmos,
  cosmosAminoConverters,
  cosmosProtoRegistry,
  cosmwasm,
  cosmwasmAminoConverters,
  cosmwasmProtoRegistry,
  ibc,
  ibcAminoConverters,
  ibcProtoRegistry,
  stride,
  strideAminoConverters,
  strideProtoRegistry,
} from "./codegen";
import { getTxIbcResponses, IbcResponse } from "./utils";

export type StrideClientOptions = SigningStargateClientOptions & {
  /**
   * How much time (in milliseconds) to wait for IBC response txs (acknowledge/timeout).
   *
   * Defaults to `180_000` (3 minutes).
   *
   */
  resolveIbcResponsesTimeoutMs?: number;
  /**
   * When waiting for the IBC response txs (acknowledge/timeout) to commit on-chain, how much time (in milliseconds) to wait between checks.
   *
   * Smaller intervals will cause more load on your node provider. Keep in mind that blocks on Stride take about 6 seconds to finalize.
   *
   * Defaults to `12_000` (12 seconds).
   */
  resolveIbcResponsesCheckIntervalMs?: number;
};

export class StrideClient {
  private constructor(
    public readonly rpcEndpoint: string,
    public readonly signer: OfflineSigner,
    public readonly address: string,
    public readonly signingStargateClient: Awaited<
      ReturnType<typeof SigningStargateClient.connectWithSigner>
    >,
    public readonly query: Awaited<
      ReturnType<typeof stride.ClientFactory.createRPCQueryClient>
    > &
      Awaited<ReturnType<typeof cosmos.ClientFactory.createRPCQueryClient>> &
      Awaited<ReturnType<typeof cosmwasm.ClientFactory.createRPCQueryClient>> &
      Awaited<ReturnType<typeof ibc.ClientFactory.createRPCQueryClient>>,
    public readonly options?: StrideClientOptions,
  ) {}

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
  public static async create(
    rpcUrl: string,
    signer: OfflineSigner,
    address: string,
    options?: StrideClientOptions,
  ) {
    // setup signingStargateClient
    const registry = new Registry([
      ...strideProtoRegistry,
      ...cosmosProtoRegistry,
      ...ibcProtoRegistry,
      ...cosmwasmProtoRegistry,
    ]);
    const aminoTypes = new AminoTypes({
      ...strideAminoConverters,
      ...cosmosAminoConverters,
      ...ibcAminoConverters,
      ...cosmwasmAminoConverters,
    });

    options = Object.assign(
      {},
      {
        registry,
        aminoTypes,
      },
      options,
    );

    const signingStargateClient = await SigningStargateClient.connectWithSigner(
      rpcUrl,
      signer,
      options,
    );

    // setup query client
    const query = Object.assign(
      await ibc.ClientFactory.createRPCQueryClient({
        rpcEndpoint: rpcUrl,
      }),
      await cosmwasm.ClientFactory.createRPCQueryClient({
        rpcEndpoint: rpcUrl,
      }),
      await cosmos.ClientFactory.createRPCQueryClient({
        rpcEndpoint: rpcUrl,
      }),
      await stride.ClientFactory.createRPCQueryClient({
        rpcEndpoint: rpcUrl,
      }),
    );

    return new StrideClient(
      rpcUrl,
      signer,
      address,
      signingStargateClient,
      query,
      options,
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
  public async signAndBroadcast(
    messages: readonly EncodeObject[],
    fee: StdFee | "auto" | number = "auto",
    memo: string = "",
  ): Promise<
    DeliverTxResponse & { ibcResponses: Array<Promise<IbcResponse>> }
  > {
    const txResp = await this.signingStargateClient.signAndBroadcast(
      this.address,
      messages,
      fee,
      memo,
    );

    const ibcResponses = getTxIbcResponses(
      this.signingStargateClient,
      txResp,
      this.options?.resolveIbcResponsesTimeoutMs ?? undefined,
      this.options?.resolveIbcResponsesCheckIntervalMs ?? undefined,
    );

    return Object.assign(txResp, { ibcResponses });
  }
}
