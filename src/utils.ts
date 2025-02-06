import { Coin, StdFee } from "@cosmjs/amino";
import { fromBase64, toHex, toUtf8 } from "@cosmjs/encoding";
import { DeliverTxResponse, IndexedTx, StargateClient } from "@cosmjs/stargate";
import { ripemd160 } from "@noble/hashes/ripemd160";
import { sha256 } from "@noble/hashes/sha256";
import { bech32 } from "bech32";

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
 * @param {string} coinAsString A string representation of a coin in the format `"{amount}{denom}"`.
 * @returns {Coin} A Coin object with the extracted amount and denom.
 */
export function coinFromString(coinAsString: string): Coin {
  const regexMatch = coinAsString.match(
    /^([\d\.]+)([a-z]+|ibc\/[0-9A-F]{64})$/,
  );

  if (regexMatch === null) {
    throw new Error(`cannot extract denom & amount from '${coinAsString}'`);
  }

  return { amount: regexMatch[1], denom: regexMatch[2] };
}

/**
 * Converts a string of comma-separated coins into an array of Coin objects.
 *
 * @example
 * ```
 * coinsFromString("1ustrd,2uosmo") => => [{amount:"1",denom:"ustrd"},{amount:"2",denom:"uosmo"}]
 * ```
 *
 * @param {string} coinsAsString A string of comma-separated coins in the format `"{amount}{denom},{amount}{denom},..."`.
 * @returns {Coin[]} An array of Coin objects.
 */
export function coinsFromString(coinsAsString: string): Coin[] {
  return coinsAsString.split(",").map(coinFromString);
}

/**
 * Creates a StdFee object from the given gas limit and gas price.
 *
 * @param {number} gasLimit The gas limit to use for the fee calculation.
 * @param {number} [gasPrice=0.025] The gas price to use for the fee calculation. Defaults to `0.025`.
 * @returns {StdFee} A StdFee object with the calculated fee amount and gas limit.
 */
export function feeFromGas(gasLimit: number, gasPrice: number = 0.025): StdFee {
  return {
    amount: coinsFromString(`${gasLimit * gasPrice}ustrd`),
    gas: String(gasLimit),
  };
}

/**
 * Represents an IBC transfer path.
 */
export type IbcTransferPath = {
  /**
   * The port ID on the receiving chain.
   */
  incomingPortId: string;

  /**
   * The channel ID on the receiving chain.
   */
  incomingChannelId: string;
};

/**
 * Compute the IBC denom of a token that was sent over IBC.
 *
 * @example
 * To get the IBC denom of STRD on mainnet Osmosis:
 * ```
 * ibcDenom([{incomingPortId: "transfer", incomingChannelId: "channel-326"}], "ustrd")
 * ```
 *
 * @param {IbcTransferPath[]} paths An array of objects containing information about the IBC transfer paths.
 * @param {string} coinMinimalDenom The minimal denom of the coin.
 * @returns {string} The computed IBC denom of the token.
 */
export function ibcDenom(
  paths: IbcTransferPath[],
  coinMinimalDenom: string,
): string {
  const prefixes: string[] = [];
  for (const path of paths) {
    prefixes.push(`${path.incomingPortId}/${path.incomingChannelId}`);
  }

  const prefix = prefixes.join("/");
  const denom = `${prefix}/${coinMinimalDenom}`;

  return "ibc/" + toHex(sha256(toUtf8(denom))).toUpperCase();
}

/**
 * Convert a secp256k1 compressed public key to an address.
 *
 * @param {Uint8Array} pubkey The account's pubkey, should be 33 bytes (compressed secp256k1).
 * @param {String} [prefix="stride"] The address' bech32 prefix. Defaults to `"stride"`.
 * @returns the account's address.
 */
export function pubkeyToAddress(
  pubkey: Uint8Array,
  prefix: string = "stride",
): string {
  return bech32.encode(prefix, bech32.toWords(ripemd160(sha256(pubkey))));
}

/**
 * Convert a base64 encoded secp256k1 compressed public key to an address.
 *
 * @param {string} pubkey The account's pubkey as base64 string, should be 33 bytes (compressed secp256k1).
 * @param {String} [prefix="stride"] The address' bech32 prefix. Defaults to `"stride"`.
 * @returns the account's address
 */
export function base64PubkeyToAddress(
  pubkey: string,
  prefix: string = "stride",
): string {
  return pubkeyToAddress(fromBase64(pubkey), prefix);
}

/**
 * Convert self delegator address to validator address.
 *
 * @param {String} selfDelegator The self delegator bech32 encoded address.
 * @param {String} [prefix="stride"] The self delegator address' bech32 prefix. Defaults to `"stride"`.
 * @returns the account's address
 */
export function selfDelegatorAddressToValidatorAddress(
  selfDelegator: string,
  prefix: string = "stride",
): string {
  return bech32.encode(`${prefix}valoper`, bech32.decode(selfDelegator).words);
}

/**
 * Convert self delegator address to validator address.
 *
 * @param {String} validator The validator bech32 encoded address.
 * @param {String} [prefix="stride"] The self delegator address' bech32 prefix. Defaults to `"stride"`.
 * @returns the account's address
 */
export function validatorAddressToSelfDelegatorAddress(
  validator: string,
  prefix: string = "stride",
): string {
  return bech32.encode(prefix, bech32.decode(validator).words);
}

/**
 * Convert a Tendermint ed25519 public key to a consensus address.
 *
 * @param {Uint8Array} pubkey The tendermint pubkey, should be 32 bytes (ed25519).
 * @param {String} [prefix="stride"] The valcons address' bech32 prefix. Defaults to `"stride"`.
 * @returns the valcons account's address
 */
export function tendermintPubkeyToValconsAddress(
  pubkey: Uint8Array,
  prefix: string = "stride",
): string {
  return bech32.encode(
    `${prefix}valcons`,
    bech32.toWords(sha256(pubkey).slice(0, 20)),
  );
}

/**
 * Convert a base64 encoded secp256k1 compressed public key to a validator address.
 *
 * @param {string} pubkey The account's pubkey as base64 string, should be 33 bytes (compressed secp256k1).
 * @param {String} [prefix="stride"] The address' bech32 prefix. Defaults to `"stride"`.
 * @returns the account's address.
 */
export function base64TendermintPubkeyToValconsAddress(
  pubkey: string,
  prefix: string = "stride",
): string {
  return tendermintPubkeyToValconsAddress(fromBase64(pubkey), prefix);
}

/**
 * Sleep for a certain amount of time.
 *
 * @param {number} ms The number of milliseconds to sleep for.
 * @returns {Promise<void>} A promise that resolves after the sleep.
 */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

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
export function decToString(dec: number): string {
  return dec.toFixed(18);
}

/**
 * Convert a bech32 encoded address from one prefix to another.
 *
 * Note: This function works only if both chains use the same BIP-44 coin type.
 *
 * @param {string} address The bech32 encoded address to convert.
 * @param {string} toPrefix The target prefix to convert the address to.
 * @returns {string} The converted bech32 encoded address with the new prefix.
 */
export function convertBech32Prefix(address: string, toPrefix: string): string {
  return bech32.encode(toPrefix, bech32.decode(address).words);
}

/**
 * Represents an IBC response. It can be either an acknowledgement or a timeout, and it also contains the transaction with the acknowledgement or timeout message.
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
 * @param {number} [resolveResponsesTimeoutMs=180000] - The timeout in milliseconds for waiting for IBC response txs to commit on-chain. Defaults to `180000` (3 minutes).
 * @param {number} [resolveResponsesCheckIntervalMs=12000] - The interval in milliseconds between checks when waiting for IBC response txs to commit on-chain. Defaults to `12000` (12 seconds).
 * @returns {Promise<object>} A list of IBC acknowledgement or timeout transactions which signal whether the original IBC packet was accepted, rejected or timed-out on the receiving chain.
 */
export function getTxIbcResponses(
  stargateClient: StargateClient,
  txResponse: DeliverTxResponse,
  resolveResponsesTimeoutMs: number = 180000,
  resolveResponsesCheckIntervalMs: number = 12000,
): Array<Promise<IbcResponse>> {
  if (txResponse.code !== 0) {
    return [];
  }

  // pasrse output event to extract ibc channels and sequences
  let rawLog: string = txResponse.rawLog!;
  let arrayLog: Array<{
    msg: number;
    type: string;
    key: string;
    value: string;
  }>;
  const jsonLog: Array<{
    msg_index: number;
    events: Array<{
      type: string;
      attributes: Array<{ key: string; value: string }>;
    }>;
  }> = JSON.parse(rawLog);

  arrayLog = [];
  for (let msgIndex = 0; msgIndex < jsonLog.length; msgIndex++) {
    const log = jsonLog[msgIndex];
    for (const event of log.events) {
      for (const attr of event.attributes) {
        arrayLog.push({
          msg: msgIndex,
          type: event.type,
          key: attr.key,
          value: attr.value,
        });
      }
    }
  }

  let ibcResponses: Array<Promise<IbcResponse>> = [];
  const packetSequences =
    arrayLog.filter(
      (x) => x.type === "send_packet" && x.key === "packet_sequence",
    ) || [];

  const packetSrcChannels =
    arrayLog.filter(
      (x) => x.type === "send_packet" && x.key === "packet_src_channel",
    ) || [];

  for (let msgIndex = 0; msgIndex < packetSequences?.length; msgIndex++) {
    // isDoneObject is used to cancel the second promise if the first one is resolved
    const isDoneObject = {
      isDone: false,
    };

    ibcResponses.push(
      Promise.race([
        findIbcResponse(
          stargateClient,
          packetSequences[msgIndex].value,
          packetSrcChannels[msgIndex].value,
          "ack",
          resolveResponsesTimeoutMs,
          resolveResponsesCheckIntervalMs,
          isDoneObject,
        ),
        findIbcResponse(
          stargateClient,
          packetSequences[msgIndex].value,
          packetSrcChannels[msgIndex].value,
          "timeout",
          resolveResponsesTimeoutMs,
          resolveResponsesCheckIntervalMs,
          isDoneObject,
        ),
      ]),
    );
  }

  return ibcResponses;
}

/**
 * Searches for an IBC response transaction based on the provided packet sequence and source channel, with options to specify the type of response (ack or timeout), and the timeout and interval for checking the response transactions.
 *
 * @param {StargateClient} stargateClient - The client used to query the blockchain for transactions.
 * @param {string} packetSequence - The sequence number of the original IBC packet.
 * @param {string} packetSrcChannel - The source channel of the original IBC packet.
 * @param {"ack" | "timeout"} [type="ack"] - The type of IBC response to search for.
 * @param {number} [resolveResponsesTimeoutMs=180000] - The timeout in milliseconds for waiting for IBC response txs to commit on-chain. Defaults to `180000` (3 minutes).
 * @param {number} [resolveResponsesCheckIntervalMs=12000] - The interval in milliseconds between checks when waiting for IBC response txs to commit on-chain. Defaults to `12000` (12 seconds).
 * @param {{ isDone: boolean }} [isDoneObject={ isDone: false }] - An object to track if the search process has been completed.
 * @returns {Promise<IbcResponse>} A promise that resolves with an IBC response object containing the type of response and the transaction details, or rejects with a timeout error if no response is found within the specified timeout.
 */
export async function findIbcResponse(
  stargateClient: StargateClient,
  packetSequence: string,
  packetSrcChannel: string,
  type: "ack" | "timeout" = "ack",
  resolveResponsesTimeoutMs: number = 180000,
  resolveResponsesCheckIntervalMs: number = 12000,
  isDoneObject: { isDone: boolean } = { isDone: false },
): Promise<IbcResponse> {
  return new Promise(async (resolve, reject) => {
    let tries = resolveResponsesTimeoutMs / resolveResponsesCheckIntervalMs;

    let txType: string = type;
    if (type === "ack") {
      txType = "acknowledge";
    }

    const query = [
      `${txType}_packet.packet_src_channel='${packetSrcChannel}'`,
      `${txType}_packet.packet_sequence='${packetSequence}'`,
    ].join(" AND ");

    while (tries > 0 && !isDoneObject.isDone) {
      const txs = await stargateClient.searchTx(query);

      const ibcRespTx = txs.find((tx) => tx.code === 0);

      if (ibcRespTx) {
        isDoneObject.isDone = true;
        resolve({
          type,
          tx: ibcRespTx,
        });
      }

      tries--;
      await sleep(resolveResponsesCheckIntervalMs);
    }

    reject(
      `timed-out while trying to resolve IBC ${type} tx for packet_src_channel='${packetSrcChannel}' and packet_sequence='${packetSequence}'`,
    );
  });
}
