import { MsgVerifyInvariant, MsgUpdateParams } from "./tx";
const registry = [["/cosmos.crisis.v1beta1.MsgVerifyInvariant", MsgVerifyInvariant], ["/cosmos.crisis.v1beta1.MsgUpdateParams", MsgUpdateParams]];
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
    },
    updateParams(value) {
      return {
        typeUrl: "/cosmos.crisis.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    verifyInvariant(value) {
      return {
        typeUrl: "/cosmos.crisis.v1beta1.MsgVerifyInvariant",
        value
      };
    },
    updateParams(value) {
      return {
        typeUrl: "/cosmos.crisis.v1beta1.MsgUpdateParams",
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
    },
    updateParams(value) {
      return {
        typeUrl: "/cosmos.crisis.v1beta1.MsgUpdateParams",
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
