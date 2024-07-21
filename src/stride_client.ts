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
  ibc,
  ibcAminoConverters,
  ibcProtoRegistry,
  stride,
  strideAminoConverters,
  strideProtoRegistry,
} from "./codegen";
import { getTxIbcResponses, IbcResponse } from "./utils";

export type StrideClientOptions = SigningStargateClientOptions & {
  resolveIbcResponsesTimeoutMs: number;
  resolveIbcResponsesCheckIntervalMs: number;
};

export class StrideClient {
  private constructor(
    public readonly rpcEndpoint: string,
    public readonly signer: OfflineSigner,
    public readonly address: string,
    private readonly signingStargateClient: Awaited<
      ReturnType<typeof SigningStargateClient.connectWithSigner>
    >,
    public readonly query: Awaited<
      ReturnType<typeof stride.ClientFactory.createRPCQueryClient>
    > &
      Awaited<ReturnType<typeof ibc.ClientFactory.createRPCQueryClient>>,
    public readonly types: { stride: typeof stride } & {
      cosmos: typeof cosmos;
    } & { ibc: typeof ibc },
    private readonly options?: StrideClientOptions,
  ) {}

  /**
   *
   * @param {string} rpcUrl - A URL to the CometBFT RPC endpoint, also known as Tendermint RPC, by default on port 26657.
   * @param {OfflineSigner} signer - A signer for signing transactions.
   * @param {string} address - walletAddress is the specific account address in the wallet that is permitted to sign transactions.
   * @param {StrideClientOptions} [options] - Optional. Configuration options for the signing client, including gas price, gas limit, and other parameters.
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
    ]);
    const aminoTypes = new AminoTypes({
      ...strideAminoConverters,
      ...cosmosAminoConverters,
      ...ibcAminoConverters,
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
      await stride.ClientFactory.createRPCQueryClient({
        rpcEndpoint: rpcUrl,
      }),
    );

    // setup types directory
    const types = Object.assign(
      { stride: stride },
      { cosmos: cosmos },
      { ibc: ibc },
    );

    return new StrideClient(
      rpcUrl,
      signer,
      address,
      signingStargateClient,
      query,
      types,
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
      this.options?.resolveIbcResponsesTimeoutMs,
      this.options?.resolveIbcResponsesCheckIntervalMs,
    );

    return Object.assign(txResp, { ibcResponses });
  }
}
