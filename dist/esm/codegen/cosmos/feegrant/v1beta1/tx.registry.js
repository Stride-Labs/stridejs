import { MsgGrantAllowance, MsgRevokeAllowance } from "./tx";
const registry = [["/cosmos.feegrant.v1beta1.MsgGrantAllowance", MsgGrantAllowance], ["/cosmos.feegrant.v1beta1.MsgRevokeAllowance", MsgRevokeAllowance]];
const load = (protoRegistry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
const MessageComposer = {
  encoded: {
    grantAllowance(value) {
      return {
        typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowance",
        value: MsgGrantAllowance.encode(value).finish()
      };
    },
    revokeAllowance(value) {
      return {
        typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowance",
        value: MsgRevokeAllowance.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    grantAllowance(value) {
      return {
        typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowance",
        value
      };
    },
    revokeAllowance(value) {
      return {
        typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowance",
        value
      };
    }
  },
  fromPartial: {
    grantAllowance(value) {
      return {
        typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowance",
        value: MsgGrantAllowance.fromPartial(value)
      };
    },
    revokeAllowance(value) {
      return {
        typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowance",
        value: MsgRevokeAllowance.fromPartial(value)
      };
    }
  }
};
export {
  MessageComposer,
  load,
  registry
};
