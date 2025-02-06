import { MsgVerifyInvariant } from "./tx";
const registry = [["/cosmos.crisis.v1beta1.MsgVerifyInvariant", MsgVerifyInvariant]];
const load = (protoRegistry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
const MessageComposer = {
  encoded: {
    verifyInvariant(value) {
      return {
        typeUrl: "/cosmos.crisis.v1beta1.MsgVerifyInvariant",
        value: MsgVerifyInvariant.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    verifyInvariant(value) {
      return {
        typeUrl: "/cosmos.crisis.v1beta1.MsgVerifyInvariant",
        value
      };
    }
  },
  fromPartial: {
    verifyInvariant(value) {
      return {
        typeUrl: "/cosmos.crisis.v1beta1.MsgVerifyInvariant",
        value: MsgVerifyInvariant.fromPartial(value)
      };
    }
  }
};
export {
  MessageComposer,
  load,
  registry
};
