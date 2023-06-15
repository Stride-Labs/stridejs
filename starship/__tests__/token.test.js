import { generateMnemonic } from '@confio/relayer/build/lib/helpers';
import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';
import { assertIsDeliverTxSuccess } from '@cosmjs/stargate';

import { getSigningStrideClient } from '../../src/codegen';
import { useChain } from '../src';
import './setup.test';

describe('Token transfers', () => {
  let wallet, denom, address;
  let chainInfo, getCoin, getStargateClient, getRpcEndpoint, creditFromFaucet;

  beforeAll(async () => {
    ({
      chainInfo,
      getCoin,
      getStargateClient,
      getRpcEndpoint,
      creditFromFaucet
    } = useChain('stride'));
    denom = getCoin().base;

    // Initialize wallet
    wallet = await DirectSecp256k1HdWallet.fromMnemonic(generateMnemonic(), {
      prefix: chainInfo.chain.bech32_prefix
    });
    address = (await wallet.getAccounts())[0].address;

    await creditFromFaucet(address);
  });

  it('send stride token to address', async () => {
    // Initialize wallet
    const wallet2 = await DirectSecp256k1HdWallet.fromMnemonic(
      generateMnemonic(),
      { prefix: chainInfo.chain.bech32_prefix }
    );
    const address2 = (await wallet2.getAccounts())[0].address;

    const signingClient = await getSigningStrideClient({
      rpcEndpoint: getRpcEndpoint(),
      signer: wallet
    });

    const fee = {
      amount: [
        {
          denom,
          amount: '100000'
        }
      ],
      gas: '550000'
    };

    const token = {
      amount: '10000000',
      denom
    };

    // Transfer uosmo tokens from faceut
    await signingClient.sendTokens(
      address,
      address2,
      [token],
      fee,
      'send tokens test'
    );

    const balance = await signingClient.getBalance(address2, denom);

    expect(balance.amount).toEqual(token.amount);
    expect(balance.denom).toEqual(denom);
  }, 10000);
});
