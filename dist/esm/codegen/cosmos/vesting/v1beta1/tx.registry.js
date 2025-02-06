import { MsgCreateVestingAccount } from "./tx";
const registry = [["/cosmos.vesting.v1beta1.MsgCreateVestingAccount", MsgCreateVestingAccount]];
const load = (protoRegistry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
const MessageComposer = {
  encoded: {
    createVestingAccount(value) {
      return {
        typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccount",
        value: MsgCreateVestingAccount.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createVestingAccount(value) {
      return {
        typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccount",
        value
      };
    }
  },
  fromPartial: {
    createVestingAccount(value) {
      return {
        typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccount",
        value: MsgCreateVestingAccount.fromPartial(value)
      };
    }
  }
};
export {
  MessageComposer,
  load,
  registry
};
