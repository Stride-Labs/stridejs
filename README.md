# stridejs

<img src="https://user-images.githubusercontent.com/545047/190012774-f9886f76-246a-4f45-b21a-f2798f74f9f8.png" width="400">

## install

```sh
npm install stridejs
```

## Usage

We strongly recommend that you check the generated files in `src/codegen/stride` and use it as source of truth for which functions you could use.

The rest of our documentation will cover only the tip of the iceberg, examples you can take ideas from.

### RPC Client

```js
import { stride } from "stridejs";

const client = await stride.ClienFactory.createRPCQueryClient({
  rpcEndpoint: RPC_ENDPOINT,
});

// now you can query the cosmos modules
const balance = await client.cosmos.bank.v1beta1.allBalances({
  address: "stride1addresshere",
});
```

### Composing Stride Messages

```js
import { stride } from "stridejs";

const msgClaimFreeAmount =
  stride.claim.MessageComposer.withTypeUrl.claimFreeAmount({
    user: strideAccount.key.bech32Address,
  });
```

#### Composing IBC Messages

```js
import { ibc } from "stridejs";

const { transfer } =
  ibc.applications.transfer.v1.MessageComposer.withTypeUrl.transfer({
    // Redacted (check types for the message parameters)
  });
```

## Connecting with Wallets and Signing Messages

⚡️ For web interfaces, we recommend using [cosmos-kit](https://github.com/cosmology-tech/cosmos-kit). Continue below to see how to manually construct signers and clients.

Here are the docs on [creating signers](https://github.com/cosmology-tech/cosmos-kit/tree/main/packages/react#signing-clients) in cosmos-kit that can be used with Keplr and other wallets.

### Creating Signers

To broadcast messages, you can create signers with a variety of options:

- [cosmos-kit](https://github.com/cosmology-tech/cosmos-kit/tree/main/packages/react#signing-clients) (recommended)
- [keplr](https://docs.keplr.app/api/cosmjs.html)
- [cosmjs](https://gist.github.com/webmaster128/8444d42a7eceeda2544c8a59fbd7e1d9)

### Initializing the Stargate Client

We recommend using the `getSigningStrideClientOptions` and manually making the `SigningStargateClient` instance yourself:

```ts
import { getSigningStrideClientOptions } from "@stride/proto";

const { registry, aminoTypes } = getSigningStrideClientOptions();

const client = await SigningStargateClient.connectWithSigner(
  rpc,
  offlineSigner,
  {
    registry,
    aminoTypes,
    accountParser,
  }
);
```

## Developing & Publishing

When first cloning the repo:

```
yarn && git submodules update --init
```

### Codegen

Update the generated ts files:

```
yarn codegen
```

### Publishing

Build the module and types:

```
yarn buidl
```

## Credits

🛠 Built by Cosmology — if you like our tools, please consider delegating to [our validator ⚛️](https://cosmology.tech/validator)

Code built with the help of these related projects:

- [@cosmwasm/ts-codegen](https://github.com/CosmWasm/ts-codegen) for generated CosmWasm contract Typescript classes
- [@osmonauts/telescope](https://github.com/osmosis-labs/telescope) a "babel for the Cosmos", Telescope is a TypeScript Transpiler for Cosmos Protobufs.
- [cosmos-kit](https://github.com/cosmology-tech/cosmos-kit) A wallet connector for the Cosmos ⚛️
