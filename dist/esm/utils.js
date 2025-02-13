import { fromBase64, toHex, toUtf8 } from "@cosmjs/encoding";
import { ripemd160 } from "@noble/hashes/ripemd160";
import { sha256 } from "@noble/hashes/sha256";
import { bech32 } from "bech32";
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
  return "ibc/" + toHex(sha256(toUtf8(denom))).toUpperCase();
}
function pubkeyToAddress(pubkey, prefix = "stride") {
  return bech32.encode(prefix, bech32.toWords(ripemd160(sha256(pubkey))));
}
function base64PubkeyToAddress(pubkey, prefix = "stride") {
  return pubkeyToAddress(fromBase64(pubkey), prefix);
}
function selfDelegatorAddressToValidatorAddress(selfDelegator, prefix = "stride") {
  return bech32.encode(`${prefix}valoper`, bech32.decode(selfDelegator).words);
}
function validatorAddressToSelfDelegatorAddress(validator, prefix = "stride") {
  return bech32.encode(prefix, bech32.decode(validator).words);
}
function tendermintPubkeyToValconsAddress(pubkey, prefix = "stride") {
  return bech32.encode(
    `${prefix}valcons`,
    bech32.toWords(sha256(pubkey).slice(0, 20))
  );
}
function base64TendermintPubkeyToValconsAddress(pubkey, prefix = "stride") {
  return tendermintPubkeyToValconsAddress(fromBase64(pubkey), prefix);
}
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function decToString(dec) {
  return dec.toFixed(18);
}
function convertBech32Prefix(address, toPrefix) {
  return bech32.encode(toPrefix, bech32.decode(address).words);
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
function getValueFromEvents(events, key) {
  for (const e of events) {
    for (const a of e.attributes) {
      if (`${e.type}.${a.key}` === key) {
        return String(a.value);
      }
    }
  }
  throw new Error(`Event ${key} isn't in ${JSON.stringify(events)}`);
}
export {
  base64PubkeyToAddress,
  base64TendermintPubkeyToValconsAddress,
  coinFromString,
  coinsFromString,
  convertBech32Prefix,
  decToString,
  feeFromGas,
  findIbcResponse,
  getTxIbcResponses,
  getValueFromEvents,
  ibcDenom,
  pubkeyToAddress,
  selfDelegatorAddressToValidatorAddress,
  sleep,
  tendermintPubkeyToValconsAddress,
  validatorAddressToSelfDelegatorAddress
};
