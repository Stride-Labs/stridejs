import { Coin, StdFee } from "@cosmjs/amino";
import { DeliverTxResponse, IndexedTx, StargateClient } from "@cosmjs/stargate";
/**
 * This file is adapted from https://github.com/scrtlabs/secret.js, specifically these functions:
 * - coinFromString
 * - coinsFromString
 * - ibcDenom
 * - pubkeyToAddress
 * - base64PubkeyToAddress
 * - selfDelegatorAddressToValidatorAddress
 * - validatorAddressToSelfDelegatorAddress
 * - tendermintPubkeyToValconsAddress
 * - base64TendermintPubkeyToValconsAddress
 * - getTxIbcResponses
 * - findIbcResponse
 *
 * The secret.js license:
 *
 * MIT License
 *
 * Copyright (c) 2022 SCRT Labs
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
/**
 * Creates a Coin object from the given string representation of a coin.
 *
 * @example
 * ```
 * coinFromString("1ustrd") => {amount:"1",denom:"ustrd"}
 * ```
 * @param {string} coinAsString A string representation of a coin in the format "amountdenom"
 * @returns {Coin} A Coin object with the extracted amount and denom
 */
export declare function coinFromString(coinAsString: string): Coin;
/**
 * Converts a string of comma-separated coins into an array of Coin objects.
 *
 * @example
 * ```
 * coinsFromString("1ustrd,2uosmo") => => [{amount:"1",denom:"ustrd"},{amount:"2",denom:"uosmo"}]
 * ```
 *
 * @param {string} coinsAsString A string of comma-separated coins in the format "amountdenom,amountdenom,..."
 * @returns {Coin[]} An array of Coin objects
 */
export declare function coinsFromString(coinsAsString: string): Coin[];
/**
 * Creates a StdFee object from the given gas limit and gas price.
 *
 * @param {number} gasLimit The gas limit to use for the fee calculation.
 * @param {number} [gasPrice=0.025] The gas price to use for the fee calculation. Defaults to 0.025.
 * @returns {StdFee} A StdFee object with the calculated fee amount and gas limit.
 */
export declare function feeFromGas(gasLimit: number, gasPrice?: number): StdFee;
/**
 * Compute the IBC denom of a token that was sent over IBC.
 *
 * @example
 * To get the IBC denom of STRD on mainnet Osmosis:
 * ```
 * ibcDenom([{incomingPortId: "transfer", incomingChannelId: "channel-326"}], "ustrd")
 * ```
 *
 * @param {Object[]} paths An array of objects containing information about the IBC transfer paths.
 * @param {string} coinMinimalDenom The minimal denom of the coin.
 * @returns {string} The computed IBC denom of the token.
 */
export declare function ibcDenom(paths: {
    incomingPortId: string;
    incomingChannelId: string;
}[], coinMinimalDenom: string): string;
/**
 * Convert a secp256k1 compressed public key to an address
 *
 * @param {Uint8Array} pubkey The account's pubkey, should be 33 bytes (compressed secp256k1)
 * @param {String} [prefix="stride"] The address' bech32 prefix. Defaults to `"stride"`.
 * @returns the account's address
 */
export declare function pubkeyToAddress(pubkey: Uint8Array, prefix?: string): string;
/**
 * Convert a secp256k1 compressed public key to an address
 *
 * @param {Uint8Array} pubkey The account's pubkey as base64 string, should be 33 bytes (compressed secp256k1)
 * @param {String} [prefix="stride"] The address' bech32 prefix. Defaults to `"stride"`.
 * @returns the account's address
 */
export declare function base64PubkeyToAddress(pubkey: string, prefix?: string): string;
/**
 * Convert self delegator address to validator address
 *
 * @param {String} selfDelegator The self delegator bech32 encoded address
 * @param {String} [prefix="stride"] The self delegator address' bech32 prefix. Defaults to `"stride"`.
 * @returns the account's address
 */
export declare function selfDelegatorAddressToValidatorAddress(selfDelegator: string, prefix?: string): string;
/**
 * Convert self delegator address to validator address
 *
 * @param {String} validator The validator bech32 encoded address
 * @param {String} [prefix="stride"] The self delegator address' bech32 prefix. Defaults to `"stride"`.
 * @returns the account's address
 */
export declare function validatorAddressToSelfDelegatorAddress(validator: string, prefix?: string): string;
/**
 * Convert a Tendermint ed25519 public key to a consensus address
 *
 * @param {Uint8Array} pubkey The tendermint pubkey, should be 32 bytes (ed25519)
 * @param {String} [prefix="stride"] The valcons address' bech32 prefix. Defaults to `"stride"`.
 * @returns the valcons account's address
 */
export declare function tendermintPubkeyToValconsAddress(pubkey: Uint8Array, prefix?: string): string;
/**
 * Convert a secp256k1 compressed public key to an address
 *
 * @param {Uint8Array} pubkey The account's pubkey as base64 string, should be 33 bytes (compressed secp256k1)
 * @param {String} [prefix="stride"] The address' bech32 prefix. Defaults to `"stride"`.
 * @returns the account's address
 */
export declare function base64TendermintPubkeyToValconsAddress(pubkey: string, prefix?: string): string;
/**
 * Sleep for a certain amount of time
 *
 * @param {number} ms The number of milliseconds to sleep for
 * @returns {Promise<void>} A promise that resolves after the sleep
 */
export declare function sleep(ms: number): Promise<void>;
/**
 * Converts a decimal value to its Amino string representation. Use this function when you need to create transaction messages with Dec values.
 *
 * @example
 * ```
 * decToString(0.5) => "0.500000000000000000"
 * ```
 *
 * @param {number} dec The decimal value to convert.
 * @returns {string} An Amino string representation of the decimal value.
 */
export declare function decToString(dec: number): string;
/**
 * Convert a bech32 encoded address from one prefix to another.
 *
 * Note: This function works only if both chains use the same BIP-44 coin type.
 *
 * @param {string} address The bech32 encoded address to convert.
 * @param {string} toPrefix The target prefix to convert the address to.
 * @returns {string} The converted bech32 encoded address with the new prefix.
 */
export declare function convertBech32Prefix(address: string, toPrefix: string): string;
/**
 * Represents an IBC response, which can be either an acknowledgement or a timeout.
 */
export type IbcResponse = {
    /**
     * The type of IBC response, either "ack" for acknowledgement or "timeout" for timeout.
     */
    type: "ack" | "timeout";
    /**
     * The transaction details associated with the IBC response.
     */
    tx: IndexedTx;
};
/**
 * Retrieves the IBC responses for a given transaction response, with options to customize the timeout and check interval for the IBC response transactions. If `txResponse.code = 0` and the transaction resulted in sending IBC packets, `getIbcResponse()` will return a list of IBC acknowledgement or timeout transactions which signal whether the original IBC packet was accepted, rejected or timed-out on the receiving chain.
 *
 * @param {object} txResponse - The transaction response object.
 * @param {number} [resolveResponsesTimeoutMs=120000] - The timeout in milliseconds for waiting for IBC response txs to commit on-chain. Defaults to 120000 (2 minutes).
 * @param {number} [resolveResponsesCheckIntervalMs=15000] - The interval in milliseconds between checks when waiting for IBC response txs to commit on-chain. Defaults to 15000 (15 seconds).
 * @returns {Promise<object>} A list of IBC acknowledgement or timeout transactions which signal whether the original IBC packet was accepted, rejected or timed-out on the receiving chain.
 */
export declare function getTxIbcResponses(stargateClient: StargateClient, txResponse: DeliverTxResponse, resolveResponsesTimeoutMs?: number, resolveResponsesCheckIntervalMs?: number): Array<Promise<IbcResponse>>;
/**
 * Searches for an IBC response transaction based on the provided packet sequence and source channel, with options to specify the type of response (ack or timeout), and the timeout and interval for checking the response transactions.
 *
 * @param {StargateClient} stargateClient - The client used to query the blockchain for transactions.
 * @param {string} packetSequence - The sequence number of the original IBC packet.
 * @param {string} packetSrcChannel - The source channel of the original IBC packet.
 * @param {"ack" | "timeout"} [type="ack"] - The type of IBC response to search for.
 * @param {number} [resolveResponsesTimeoutMs=120000] - The timeout in milliseconds for waiting for IBC response txs to commit on-chain. Defaults to 120000 (2 minutes).
 * @param {number} [resolveResponsesCheckIntervalMs=15000] - The interval in milliseconds between checks when waiting for IBC response txs to commit on-chain. Defaults to 15000 (15 seconds).
 * @param {{ isDone: boolean }} [isDoneObject={ isDone: false }] - An object to track if the search process has been completed.
 * @returns {Promise<IbcResponse>} A promise that resolves with an IBC response object containing the type of response and the transaction details, or rejects with a timeout error if no response is found within the specified timeout.
 */
export declare function findIbcResponse(stargateClient: StargateClient, packetSequence: string, packetSrcChannel: string, type?: "ack" | "timeout", resolveResponsesTimeoutMs?: number, resolveResponsesCheckIntervalMs?: number, isDoneObject?: {
    isDone: boolean;
}): Promise<IbcResponse>;
