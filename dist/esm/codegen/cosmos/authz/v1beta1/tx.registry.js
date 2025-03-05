import { MsgGrant, MsgExec, MsgRevoke } from "./tx";
const registry = [["/cosmos.authz.v1beta1.MsgGrant", MsgGrant], ["/cosmos.authz.v1beta1.MsgExec", MsgExec], ["/cosmos.authz.v1beta1.MsgRevoke", MsgRevoke]];
const load = (protoRegistry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
const MessageComposer = {
  encoded: {
    grant(value) {
      return {
        typeUrl: "/cosmos.authz.v1beta1.MsgGrant",
        value: MsgGrant.encode(value).finish()
      };
    },
    exec(value) {
      return {
        typeUrl: "/cosmos.authz.v1beta1.MsgExec",
        value: MsgExec.encode(value).finish()
      };
    },
    revoke(value) {
      return {
        typeUrl: "/cosmos.authz.v1beta1.MsgRevoke",
        value: MsgRevoke.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    grant(value) {
      return {
        typeUrl: "/cosmos.authz.v1beta1.MsgGrant",
        value
      };
    },
    exec(value) {
      return {
        typeUrl: "/cosmos.authz.v1beta1.MsgExec",
        value
      };
    },
    revoke(value) {
      return {
        typeUrl: "/cosmos.authz.v1beta1.MsgRevoke",
        value
      };
    }
  },
  fromPartial: {
    grant(value) {
      return {
        typeUrl: "/cosmos.authz.v1beta1.MsgGrant",
        value: MsgGrant.fromPartial(value)
      };
    },
    exec(value) {
      return {
        typeUrl: "/cosmos.authz.v1beta1.MsgExec",
        value: MsgExec.fromPartial(value)
      };
    },
    revoke(value) {
      return {
        typeUrl: "/cosmos.authz.v1beta1.MsgRevoke",
        value: MsgRevoke.fromPartial(value)
      };
    }
  }
};
export {
  MessageComposer,
  load,
  registry
};
