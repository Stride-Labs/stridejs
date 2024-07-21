import { EncodeObject, OfflineSigner } from "@cosmjs/proto-signing";
import { DeliverTxResponse, SigningStargateClientOptions, StdFee } from "@cosmjs/stargate";
import { cosmos, ibc, stride } from "./codegen";
import { IbcResponse } from "./utils";
export declare type StrideClientOptions = SigningStargateClientOptions & {
    resolveIbcResponsesTimeoutMs: number;
    resolveIbcResponsesCheckIntervalMs: number;
};
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
    private readonly options?;
    private constructor();
    /**
     *
     * @param {string} rpcUrl - A URL to the CometBFT RPC endpoint, also known as Tendermint RPC, by default on port 26657.
     * @param {OfflineSigner} signer - A signer for signing transactions.
     * @param {string} address - walletAddress is the specific account address in the wallet that is permitted to sign transactions.
     * @param {StrideClientOptions} [options] - Optional. Configuration options for the signing client, including gas price, gas limit, and other parameters.
     */
    static create(rpcUrl: string, signer: OfflineSigner, address: string, options?: StrideClientOptions): Promise<StrideClient>;
    /**
     * Sign and broadcast a transaction.
     *
     * @param {EncodeObject[]} messages - An array of messages to be encoded and signed.
     * @param {StdFee | "auto" | number} [fee="auto"] - The transaction fee. You can pass a `StdFee` object to set the gas limit and fee manually. If a `GasPrice` object has been passed to `StrideClient.create()`, you can set `"auto"` to automatically determine the gas limit based on the transaction simulation. Alternatively, you can pass a number to enable `"auto"` mode with a custom gas adjustment multiplier (default is `1.4`). Defaults to `"auto"`.
     * @param {string} [memo=""] - An optional memo for the transaction. Defaults to `""`.
     *
     * @returns {DeliverTxResponse} - The response from the network after broadcasting the transaction, including the transaction hash and status.
     */
    signAndBroadcast(messages: readonly EncodeObject[], fee?: StdFee | "auto" | number, memo?: string): Promise<DeliverTxResponse & {
        ibcResponses: Array<Promise<IbcResponse>>;
    }>;
}
