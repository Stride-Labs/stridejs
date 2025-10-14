import { MsgCreateClient, MsgUpdateClient, MsgUpgradeClient, MsgSubmitMisbehaviour, MsgRecoverClient, MsgIBCSoftwareUpgrade, MsgUpdateParams } from "./tx";
const registry = [["/ibc.core.client.v1.MsgCreateClient", MsgCreateClient], ["/ibc.core.client.v1.MsgUpdateClient", MsgUpdateClient], ["/ibc.core.client.v1.MsgUpgradeClient", MsgUpgradeClient], ["/ibc.core.client.v1.MsgSubmitMisbehaviour", MsgSubmitMisbehaviour], ["/ibc.core.client.v1.MsgRecoverClient", MsgRecoverClient], ["/ibc.core.client.v1.MsgIBCSoftwareUpgrade", MsgIBCSoftwareUpgrade], ["/ibc.core.client.v1.MsgUpdateParams", MsgUpdateParams]];
const load = (protoRegistry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
const MessageComposer = {
  encoded: {
    createClient(value) {
      return {
        typeUrl: "/ibc.core.client.v1.MsgCreateClient",
        value: MsgCreateClient.encode(value).finish()
      };
    },
    updateClient(value) {
      return {
        typeUrl: "/ibc.core.client.v1.MsgUpdateClient",
        value: MsgUpdateClient.encode(value).finish()
      };
    },
    upgradeClient(value) {
      return {
        typeUrl: "/ibc.core.client.v1.MsgUpgradeClient",
        value: MsgUpgradeClient.encode(value).finish()
      };
    },
    submitMisbehaviour(value) {
      return {
        typeUrl: "/ibc.core.client.v1.MsgSubmitMisbehaviour",
        value: MsgSubmitMisbehaviour.encode(value).finish()
      };
    },
    recoverClient(value) {
      return {
        typeUrl: "/ibc.core.client.v1.MsgRecoverClient",
        value: MsgRecoverClient.encode(value).finish()
      };
    },
    iBCSoftwareUpgrade(value) {
      return {
        typeUrl: "/ibc.core.client.v1.MsgIBCSoftwareUpgrade",
        value: MsgIBCSoftwareUpgrade.encode(value).finish()
      };
    },
    updateClientParams(value) {
      return {
        typeUrl: "/ibc.core.client.v1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createClient(value) {
      return {
        typeUrl: "/ibc.core.client.v1.MsgCreateClient",
        value
      };
    },
    updateClient(value) {
      return {
        typeUrl: "/ibc.core.client.v1.MsgUpdateClient",
        value
      };
    },
    upgradeClient(value) {
      return {
        typeUrl: "/ibc.core.client.v1.MsgUpgradeClient",
        value
      };
    },
    submitMisbehaviour(value) {
      return {
        typeUrl: "/ibc.core.client.v1.MsgSubmitMisbehaviour",
        value
      };
    },
    recoverClient(value) {
      return {
        typeUrl: "/ibc.core.client.v1.MsgRecoverClient",
        value
      };
    },
    iBCSoftwareUpgrade(value) {
      return {
        typeUrl: "/ibc.core.client.v1.MsgIBCSoftwareUpgrade",
        value
      };
    },
    updateClientParams(value) {
      return {
        typeUrl: "/ibc.core.client.v1.MsgUpdateParams",
        value
      };
    }
  },
  fromPartial: {
    createClient(value) {
      return {
        typeUrl: "/ibc.core.client.v1.MsgCreateClient",
        value: MsgCreateClient.fromPartial(value)
      };
    },
    updateClient(value) {
      return {
        typeUrl: "/ibc.core.client.v1.MsgUpdateClient",
        value: MsgUpdateClient.fromPartial(value)
      };
    },
    upgradeClient(value) {
      return {
        typeUrl: "/ibc.core.client.v1.MsgUpgradeClient",
        value: MsgUpgradeClient.fromPartial(value)
      };
    },
    submitMisbehaviour(value) {
      return {
        typeUrl: "/ibc.core.client.v1.MsgSubmitMisbehaviour",
        value: MsgSubmitMisbehaviour.fromPartial(value)
      };
    },
    recoverClient(value) {
      return {
        typeUrl: "/ibc.core.client.v1.MsgRecoverClient",
        value: MsgRecoverClient.fromPartial(value)
      };
    },
    iBCSoftwareUpgrade(value) {
      return {
        typeUrl: "/ibc.core.client.v1.MsgIBCSoftwareUpgrade",
        value: MsgIBCSoftwareUpgrade.fromPartial(value)
      };
    },
    updateClientParams(value) {
      return {
        typeUrl: "/ibc.core.client.v1.MsgUpdateParams",
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
