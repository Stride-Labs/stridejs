# stridejs

<img src="https://user-images.githubusercontent.com/545047/190012774-f9886f76-246a-4f45-b21a-f2798f74f9f8.png" width="400">

> ⚠️ stridejs currently bundles in a specific version of cosmos-sdk (`v0.45.16-ics-lsm-rc0`) due to LSM. Carefully import the modules you need.

## install

```sh
npm install stridejs
```

## Connecting with Wallets and Signing Messages

⚡️ For web interfaces, we recommend using [cosmos-kit](https://github.com/cosmology-tech/cosmos-kit). To sign and broadcast messages, you can create signers with a variety of options:

- [cosmos-kit](https://github.com/cosmology-tech/cosmos-kit/tree/main/packages/react#signing-clients) (recommended)
- [keplr](https://docs.keplr.app/api/cosmjs.html)
- [cosmjs](https://gist.github.com/webmaster128/8444d42a7eceeda2544c8a59fbd7e1d9)

### Initializing the Stargate Client

We recommend manually making the `SigningStargateClient` instance yourself by using `getSigningStrideClientOptions`:

```ts
import {
  getSigningStrideClientOptions,
  strideAccountParser,
} from "@stride/proto";

const { registry, aminoTypes } = getSigningStrideClientOptions();

const client = await SigningStargateClient.connectWithSigner(
  rpc,
  offlineSigner,
  {
    registry,
    aminoTypes,
    accountParser: strideAccountParser,
  },
);
```

### Custom Account Parser

You are free to wrap stride account's parser depending on your use-case, take this as an example:

```
import { accountFromAny, Account } from "@cosmjs/stargate";

function accountParser(input: Any): Account {
  switch (input.typeUrl) {
    case '/injective.types.v1beta1.EthAccount': {
      return injectiveAccountParser(input)
    }

    case '/stride.vesting.StridePeriodicVestingAccount': {
      return strideAccountParser(input)
    }

    default: {
      return accountFromAny(input);
    }
  }
}
```

## Usage

We strongly recommend that you check the generated files in `src/codegen/stride` and use it as source of truth for which functions you could use.

The rest of our documentation will cover only the tip of the iceberg &mdash; examples you can take ideas from.

### RPC Client

```ts
import { stride } from "stridejs";

const client = await stride.ClienFactory.createRPCQueryClient({
  rpcEndpoint: RPC_ENDPOINT,
});

const balance = await client.cosmos.bank.v1beta1.allBalances({
  address: "stride1addresshere",
});
```

### Composing & Broadcasting Stride Messages

```ts
import { stride } from "stridejs";

const msgClaimFreeAmount =
  stride.claim.MessageComposer.withTypeUrl.claimFreeAmount({
    user: "stride1addresshere",
  });

const fee = {
  amount: [
    {
      amount: "0",
      denom: "STRD",
    },
  ],
  gas: 250_000,
};

const tx = await strideAccount.client.signAndBroadcast(
  "stride1addresshere",
  [msgClaimFreeAmount],
  fee,
  "",
);

assertIsDeliverTxSuccess(tx);
```

If you're unfamiliar with Stargate, you can read their guide [here](https://gist.github.com/webmaster128/8444d42a7eceeda2544c8a59fbd7e1d9).

#### Composing IBC Messages

```js
import { ibc } from "stridejs";

const { transfer } =
  ibc.applications.transfer.v1.MessageComposer.withTypeUrl.transfer({
    // Redacted (check internal types for the message parameters)
  });
```

## Developing & Publishing

When first cloning the repo:

```bash
git submodule sync --recursive
git submodule update --init --recursive
pnpm install
```

### Checkout Relevant Branches

We currently bundle in a specific version of cosmos-sdk because of LSM. And sometimes we do the same for Stride too.

Open up `.gitmodules` to update the specified branches, then sync:

```bash
git submodule sync --recursive
git submodule update --init --recursive
```

Check if the submodules were updated:

```bash
# Check if the specified branch for Stride is correct
cd stride
git branch

cd ../

# Check if the specified branch for Cosmos is correct
cd cosmos
git branch
```

If the branches were not updated, that's ok. Sometimes things get stuck, so we have to manually check out and update branches despite the previous step covering those.

```bash
cd stride
git checkout <branch>
git pull origin <branch>
git log # Confirm if the latest commit is the same on the repository

cd ../

cd cosmos
git checkout <branch>
git pull origin <branch>
git log # Confirm if the latest commit is the same on the repository
```

### Codegen

If there are new public-facing transaction types on the Stride side, make sure to manually adjust its `aminoType` by opening `scripts/codegen.js`. Under `options.aminoEncoding.exceptions`, you'll find stuff like:

```json
"/stride.stakeibc.MsgLiquidStake": {
  aminoType: "stakeibc/LiquidStake",
},
"/stride.stakeibc.MsgLSMLiquidStake": {
  aminoType: "stakeibc/LSMLiquidStake",
},
```

Make sure to add the new transaction types with the same pattern:

```json
"/stride.module.MsgModuleName": {
  aminoType: "module/MsgModuleName",
},
```

Update the generated ts files:

```bash
pnpm run codegen
```

Build the module and types:

```bash
pnpm run buidl
```

### Publishing

If you haven't logged to npm cli, run:

```bash
npm login
```

Afterwards, update package.json version.

```bash
# Example: <version> = v0.4.1
git tag <version>
git push origin <version>
git push origin main
npm publish
```

## Credits

🛠 Built by Cosmology — if you like our tools, please consider delegating to [our validator ⚛️](https://cosmology.tech/validator)

Code built with the help of these related projects:

- [@cosmwasm/ts-codegen](https://github.com/CosmWasm/ts-codegen) for generated CosmWasm contract Typescript classes
- [@cosmology/telescope](https://github.com/cosmology-tech/telescope) a "babel for the Cosmos", Telescope is a TypeScript Transpiler for Cosmos Protobufs.
- [cosmos-kit](https://github.com/cosmology-tech/cosmos-kit) A wallet connector for the Cosmos ⚛️
