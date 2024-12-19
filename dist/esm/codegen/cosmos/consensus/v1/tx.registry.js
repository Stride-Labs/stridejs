import { MsgUpdateParams } from "./tx";
const registry = [["/cosmos.consensus.v1.MsgUpdateParams", MsgUpdateParams]];
const load = (protoRegistry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
const MessageComposer = {
  encoded: {
    updateParams(value) {
      return {
        typeUrl: "/cosmos.consensus.v1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    updateParams(value) {
      return {
        typeUrl: "/cosmos.consensus.v1.MsgUpdateParams",
        value
      };
    }
  },
  fromPartial: {
    updateParams(value) {
      return {
        typeUrl: "/cosmos.consensus.v1.MsgUpdateParams",
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
