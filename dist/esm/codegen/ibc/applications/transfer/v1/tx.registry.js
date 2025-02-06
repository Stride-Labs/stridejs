import { MsgTransfer } from "./tx";
const registry = [["/ibc.applications.transfer.v1.MsgTransfer", MsgTransfer]];
const load = (protoRegistry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
const MessageComposer = {
  encoded: {
    transfer(value) {
      return {
        typeUrl: "/ibc.applications.transfer.v1.MsgTransfer",
        value: MsgTransfer.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    transfer(value) {
      return {
        typeUrl: "/ibc.applications.transfer.v1.MsgTransfer",
        value
      };
    }
  },
  fromPartial: {
    transfer(value) {
      return {
        typeUrl: "/ibc.applications.transfer.v1.MsgTransfer",
        value: MsgTransfer.fromPartial(value)
      };
    }
  }
};
export {
  MessageComposer,
  load,
  registry
};
