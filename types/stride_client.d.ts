import { DeliverTxResponse, SigningStargateClientOptions, StdFee } from "@cosmjs/stargate";
import { ibc, stride } from "./codegen";
import { EncodeObject, OfflineSigner } from "@cosmjs/proto-signing";
export declare class StrideClient {
    readonly rpcEndpoint: string;
    readonly signer: OfflineSigner;
    readonly address: string;
    private readonly signingStargateClient;
    readonly query: Awaited<ReturnType<typeof stride.ClientFactory.createRPCQueryClient>> & Awaited<ReturnType<typeof ibc.ClientFactory.createRPCQueryClient>>;
    private constructor();
    /**
     *
     * @param {string} rpcUrl - A URL to the CometBFT RPC endpoint, also known as Tendermint RPC, by default on port 26657.
     * @param {OfflineSigner} signer - A signer for signing transactions.
     * @param {string} address - walletAddress is the specific account address in the wallet that is permitted to sign transactions.
     * @param {GasPrice} [gasPrice] - Optional. The gas price to use for transactions. If not provided, a value will have to be passed when sending transactions.
     */
    static create(rpcUrl: string, signer: OfflineSigner, address: string, options?: SigningStargateClientOptions): Promise<StrideClient>;
    signAndBroadcast(messages: readonly EncodeObject[], fee: StdFee | "auto" | number, memo?: string): Promise<DeliverTxResponse>;
}
