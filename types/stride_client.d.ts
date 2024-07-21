import { EncodeObject, OfflineSigner } from "@cosmjs/proto-signing";
import { DeliverTxResponse, SigningStargateClientOptions, StdFee } from "@cosmjs/stargate";
import { cosmos, ibc, stride } from "./codegen";
export declare class StrideClient {
    readonly rpcEndpoint: string;
    readonly signer: OfflineSigner;
    readonly address: string;
    private readonly signingStargateClient;
    readonly query: Awaited<ReturnType<typeof stride.ClientFactory.createRPCQueryClient>> & Awaited<ReturnType<typeof ibc.ClientFactory.createRPCQueryClient>>;
    readonly types: {
        stride: typeof stride;
    } & {
        cosmos: typeof cosmos;
    } & {
        ibc: typeof ibc;
    };
    private constructor();
    /**
     *
     * @param {string} rpcUrl - A URL to the CometBFT RPC endpoint, also known as Tendermint RPC, by default on port 26657.
     * @param {OfflineSigner} signer - A signer for signing transactions.
     * @param {string} address - walletAddress is the specific account address in the wallet that is permitted to sign transactions.
     * @param {SigningStargateClientOptions} [options] - Optional. Configuration options for the signing client, including gas price, gas limit, and other parameters.
     */
    static create(rpcUrl: string, signer: OfflineSigner, address: string, options?: SigningStargateClientOptions): Promise<StrideClient>;
    /**
     * Sign and broadcast a transaction.
     *
     * @param {EncodeObject[]} messages - An array of messages to be encoded and signed.
     * @param {StdFee | "auto" | number} fee - The transaction fee. Can be "auto" if a `GasPrice` object was passed to `StrideClent.create()` upon creation.
     * @param {string} [memo] - An optional memo for the transaction.
     *
     * @returns {DeliverTxResponse} - The response from the network after broadcasting the transaction, including the transaction hash and status.
     */
    signAndBroadcast(messages: readonly EncodeObject[], fee: StdFee | "auto" | number, memo?: string): Promise<DeliverTxResponse>;
}
