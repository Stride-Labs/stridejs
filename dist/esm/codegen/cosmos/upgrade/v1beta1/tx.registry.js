import { MsgSoftwareUpgrade, MsgCancelUpgrade } from "./tx";
const registry = [["/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade", MsgSoftwareUpgrade], ["/cosmos.upgrade.v1beta1.MsgCancelUpgrade", MsgCancelUpgrade]];
const load = (protoRegistry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
const MessageComposer = {
  encoded: {
    softwareUpgrade(value) {
      return {
        typeUrl: "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade",
        value: MsgSoftwareUpgrade.encode(value).finish()
      };
    },
    cancelUpgrade(value) {
      return {
        typeUrl: "/cosmos.upgrade.v1beta1.MsgCancelUpgrade",
        value: MsgCancelUpgrade.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    softwareUpgrade(value) {
      return {
        typeUrl: "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade",
        value
      };
    },
    cancelUpgrade(value) {
      return {
        typeUrl: "/cosmos.upgrade.v1beta1.MsgCancelUpgrade",
        value
      };
    }
  },
  fromPartial: {
    softwareUpgrade(value) {
      return {
        typeUrl: "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade",
        value: MsgSoftwareUpgrade.fromPartial(value)
      };
    },
    cancelUpgrade(value) {
      return {
        typeUrl: "/cosmos.upgrade.v1beta1.MsgCancelUpgrade",
        value: MsgCancelUpgrade.fromPartial(value)
      };
    }
  }
};
export {
  MessageComposer,
  load,
  registry
};
