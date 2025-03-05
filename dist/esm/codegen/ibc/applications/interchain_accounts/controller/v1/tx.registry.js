import { MsgRegisterInterchainAccount, MsgSendTx } from "./tx";
const registry = [["/ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccount", MsgRegisterInterchainAccount], ["/ibc.applications.interchain_accounts.controller.v1.MsgSendTx", MsgSendTx]];
const load = (protoRegistry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
const MessageComposer = {
  encoded: {
    registerInterchainAccount(value) {
      return {
        typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccount",
        value: MsgRegisterInterchainAccount.encode(value).finish()
      };
    },
    sendTx(value) {
      return {
        typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgSendTx",
        value: MsgSendTx.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    registerInterchainAccount(value) {
      return {
        typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccount",
        value
      };
    },
    sendTx(value) {
      return {
        typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgSendTx",
        value
      };
    }
  },
  fromPartial: {
    registerInterchainAccount(value) {
      return {
        typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccount",
        value: MsgRegisterInterchainAccount.fromPartial(value)
      };
    },
    sendTx(value) {
      return {
        typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgSendTx",
        value: MsgSendTx.fromPartial(value)
      };
    }
  }
};
export {
  MessageComposer,
  load,
  registry
};
