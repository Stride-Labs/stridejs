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
var utils_exports = {};
__export(utils_exports, {
  base64PubkeyToAddress: () => base64PubkeyToAddress,
  base64TendermintPubkeyToValconsAddress: () => base64TendermintPubkeyToValconsAddress,
  coinFromString: () => coinFromString,
  coinsFromString: () => coinsFromString,
  convertBech32Prefix: () => convertBech32Prefix,
  decToString: () => decToString,
  feeFromGas: () => feeFromGas,
  findIbcResponse: () => findIbcResponse,
  getTxIbcResponses: () => getTxIbcResponses,
  ibcDenom: () => ibcDenom,
  pubkeyToAddress: () => pubkeyToAddress,
  selfDelegatorAddressToValidatorAddress: () => selfDelegatorAddressToValidatorAddress,
  sleep: () => sleep,
  tendermintPubkeyToValconsAddress: () => tendermintPubkeyToValconsAddress,
  validatorAddressToSelfDelegatorAddress: () => validatorAddressToSelfDelegatorAddress
});
module.exports = __toCommonJS(utils_exports);
var import_encoding = require("@cosmjs/encoding");
var import_ripemd160 = require("@noble/hashes/ripemd160");
var import_sha256 = require("@noble/hashes/sha256");
var import_bech32 = require("bech32");
function coinFromString(coinAsString) {
  const regexMatch = coinAsString.match(
    /^([\d\.]+)([a-z]+|ibc\/[0-9A-F]{64})$/
  );
  if (regexMatch === null) {
    throw new Error(`cannot extract denom & amount from '${coinAsString}'`);
  }
  return { amount: regexMatch[1], denom: regexMatch[2] };
}
function coinsFromString(coinsAsString) {
  return coinsAsString.split(",").map(coinFromString);
}
function feeFromGas(gasLimit, gasPrice = 0.025) {
  return {
    amount: coinsFromString(`${gasLimit * gasPrice}ustrd`),
    gas: String(gasLimit)
  };
}
function ibcDenom(paths, coinMinimalDenom) {
  const prefixes = [];
  for (const path of paths) {
    prefixes.push(`${path.incomingPortId}/${path.incomingChannelId}`);
  }
  const prefix = prefixes.join("/");
  const denom = `${prefix}/${coinMinimalDenom}`;
  return "ibc/" + (0, import_encoding.toHex)((0, import_sha256.sha256)((0, import_encoding.toUtf8)(denom))).toUpperCase();
}
function pubkeyToAddress(pubkey, prefix = "stride") {
  return import_bech32.bech32.encode(prefix, import_bech32.bech32.toWords((0, import_ripemd160.ripemd160)((0, import_sha256.sha256)(pubkey))));
}
function base64PubkeyToAddress(pubkey, prefix = "stride") {
  return pubkeyToAddress((0, import_encoding.fromBase64)(pubkey), prefix);
}
function selfDelegatorAddressToValidatorAddress(selfDelegator, prefix = "stride") {
  return import_bech32.bech32.encode(`${prefix}valoper`, import_bech32.bech32.decode(selfDelegator).words);
}
function validatorAddressToSelfDelegatorAddress(validator, prefix = "stride") {
  return import_bech32.bech32.encode(prefix, import_bech32.bech32.decode(validator).words);
}
function tendermintPubkeyToValconsAddress(pubkey, prefix = "stride") {
  return import_bech32.bech32.encode(
    `${prefix}valcons`,
    import_bech32.bech32.toWords((0, import_sha256.sha256)(pubkey).slice(0, 20))
  );
}
function base64TendermintPubkeyToValconsAddress(pubkey, prefix = "stride") {
  return tendermintPubkeyToValconsAddress((0, import_encoding.fromBase64)(pubkey), prefix);
}
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function decToString(dec) {
  return dec.toFixed(18);
}
function convertBech32Prefix(address, toPrefix) {
  return import_bech32.bech32.encode(toPrefix, import_bech32.bech32.decode(address).words);
}
function getTxIbcResponses(stargateClient, txResponse, resolveResponsesTimeoutMs = 18e4, resolveResponsesCheckIntervalMs = 12e3) {
  if (txResponse.code !== 0) {
    return [];
  }
  const packetSequences = [];
  const packetSrcChannels = [];
  for (const e of txResponse.events) {
    if (e.type !== "send_packet") {
      continue;
    }
    for (const a of e.attributes) {
      if (a.key === "packet_sequence") {
        packetSequences.push(a.value);
      }
      if (a.key === "packet_src_channel") {
        packetSrcChannels.push(a.value);
      }
    }
  }
  const ibcResponses = [];
  for (let msgIndex = 0; msgIndex < packetSequences?.length; msgIndex++) {
    const isDoneObject = {
      isDone: false
    };
    ibcResponses.push(
      Promise.race([
        findIbcResponse(
          stargateClient,
          packetSequences[msgIndex],
          packetSrcChannels[msgIndex],
          "ack",
          resolveResponsesTimeoutMs,
          resolveResponsesCheckIntervalMs,
          isDoneObject
        ),
        findIbcResponse(
          stargateClient,
          packetSequences[msgIndex],
          packetSrcChannels[msgIndex],
          "timeout",
          resolveResponsesTimeoutMs,
          resolveResponsesCheckIntervalMs,
          isDoneObject
        )
      ])
    );
  }
  return ibcResponses;
}
async function findIbcResponse(stargateClient, packetSequence, packetSrcChannel, type = "ack", resolveResponsesTimeoutMs = 18e4, resolveResponsesCheckIntervalMs = 12e3, isDoneObject = { isDone: false }) {
  return new Promise(async (resolve, reject) => {
    let tries = resolveResponsesTimeoutMs / resolveResponsesCheckIntervalMs;
    let txType = type;
    if (type === "ack") {
      txType = "acknowledge";
    }
    const query = [
      `${txType}_packet.packet_src_channel='${packetSrcChannel}'`,
      `${txType}_packet.packet_sequence='${packetSequence}'`
    ].join(" AND ");
    while (tries > 0 && !isDoneObject.isDone) {
      const txs = await stargateClient.searchTx(query);
      const ibcRespTx = txs.find((tx) => tx.code === 0);
      if (ibcRespTx) {
        isDoneObject.isDone = true;
        resolve({
          type,
          tx: ibcRespTx
        });
      }
      tries--;
      await sleep(resolveResponsesCheckIntervalMs);
    }
    reject(
      `timed-out while trying to resolve IBC ${type} tx for packet_src_channel='${packetSrcChannel}' and packet_sequence='${packetSequence}'`
    );
  });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  base64PubkeyToAddress,
  base64TendermintPubkeyToValconsAddress,
  coinFromString,
  coinsFromString,
  convertBech32Prefix,
  decToString,
  feeFromGas,
  findIbcResponse,
  getTxIbcResponses,
  ibcDenom,
  pubkeyToAddress,
  selfDelegatorAddressToValidatorAddress,
  sleep,
  tendermintPubkeyToValconsAddress,
  validatorAddressToSelfDelegatorAddress
});
