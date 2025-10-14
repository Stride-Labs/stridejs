import { MsgTransfer, MsgUpdateParams } from "./tx";
const registry = [["/ibc.applications.transfer.v1.MsgTransfer", MsgTransfer], ["/ibc.applications.transfer.v1.MsgUpdateParams", MsgUpdateParams]];
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
    },
    updateParams(value) {
      return {
        typeUrl: "/ibc.applications.transfer.v1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    transfer(value) {
      return {
        typeUrl: "/ibc.applications.transfer.v1.MsgTransfer",
        value
      };
    },
    updateParams(value) {
      return {
        typeUrl: "/ibc.applications.transfer.v1.MsgUpdateParams",
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
    },
    updateParams(value) {
      return {
        typeUrl: "/ibc.applications.transfer.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    }
  }
};
export {
  MessageComposer,
  load,
  registry
};
