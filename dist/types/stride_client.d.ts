import { EncodeObject, OfflineSigner } from "@cosmjs/proto-signing";
import { DeliverTxResponse, SigningStargateClient, SigningStargateClientOptions, StdFee } from "@cosmjs/stargate";
import { cosmos, cosmwasm, ibc, stride } from "./codegen";
import { IbcResponse } from "./utils";
export declare type StrideClientOptions = SigningStargateClientOptions & {
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
export declare class StrideClient {
    readonly rpcEndpoint: string;
    readonly signer: OfflineSigner;
    readonly address: string;
    readonly signingStargateClient: Awaited<ReturnType<typeof SigningStargateClient.connectWithSigner>>;
    readonly query: Awaited<ReturnType<typeof stride.ClientFactory.createRPCQueryClient>> & Awaited<ReturnType<typeof cosmos.ClientFactory.createRPCQueryClient>> & Awaited<ReturnType<typeof cosmwasm.ClientFactory.createRPCQueryClient>> & Awaited<ReturnType<typeof ibc.ClientFactory.createRPCQueryClient>>;
    readonly options?: StrideClientOptions;
    private constructor();
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
