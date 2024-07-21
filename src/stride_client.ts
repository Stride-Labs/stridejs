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
    public readonly msgs: { stride: typeof stride } & {
      cosmos: typeof cosmos;
    } & { ibc: typeof ibc },
  ) {}

  /**
   *
   * @param {string} rpcUrl - A URL to the CometBFT RPC endpoint, also known as Tendermint RPC, by default on port 26657.
   * @param {OfflineSigner} signer - A signer for signing transactions.
   * @param {string} address - walletAddress is the specific account address in the wallet that is permitted to sign transactions.
   * @param {SigningStargateClientOptions} [options] - Optional. Configuration options for the signing client, including gas price, gas limit, and other parameters.
   */
  public static async create(
    rpcUrl: string,
    signer: OfflineSigner,
    address: string,
    options?: SigningStargateClientOptions,
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
    const signingStargateClient = await SigningStargateClient.connectWithSigner(
      rpcUrl,
      signer,
      Object.assign({}, options, {
        registry,
        aminoTypes,
      }),
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

    // setup msgs directory
    const msgs = Object.assign(
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
      msgs,
    );
  }

  public async signAndBroadcast(
    messages: readonly EncodeObject[],
    fee: StdFee | "auto" | number,
    memo?: string,
  ): Promise<DeliverTxResponse> {
    return this.signingStargateClient.signAndBroadcast(
      this.address,
      messages,
      fee,
      memo,
    );
  }
}