import { MsgClaimDaily, MsgClaimEarly, MsgCreateAirdrop, MsgUpdateAirdrop, MsgAddAllocations, MsgUpdateUserAllocation, MsgLinkAddresses } from "./tx";
const registry = [["/stride.airdrop.MsgClaimDaily", MsgClaimDaily], ["/stride.airdrop.MsgClaimEarly", MsgClaimEarly], ["/stride.airdrop.MsgCreateAirdrop", MsgCreateAirdrop], ["/stride.airdrop.MsgUpdateAirdrop", MsgUpdateAirdrop], ["/stride.airdrop.MsgAddAllocations", MsgAddAllocations], ["/stride.airdrop.MsgUpdateUserAllocation", MsgUpdateUserAllocation], ["/stride.airdrop.MsgLinkAddresses", MsgLinkAddresses]];
const load = (protoRegistry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
const MessageComposer = {
  encoded: {
    claimDaily(value) {
      return {
        typeUrl: "/stride.airdrop.MsgClaimDaily",
        value: MsgClaimDaily.encode(value).finish()
      };
    },
    claimEarly(value) {
      return {
        typeUrl: "/stride.airdrop.MsgClaimEarly",
        value: MsgClaimEarly.encode(value).finish()
      };
    },
    createAirdrop(value) {
      return {
        typeUrl: "/stride.airdrop.MsgCreateAirdrop",
        value: MsgCreateAirdrop.encode(value).finish()
      };
    },
    updateAirdrop(value) {
      return {
        typeUrl: "/stride.airdrop.MsgUpdateAirdrop",
        value: MsgUpdateAirdrop.encode(value).finish()
      };
    },
    addAllocations(value) {
      return {
        typeUrl: "/stride.airdrop.MsgAddAllocations",
        value: MsgAddAllocations.encode(value).finish()
      };
    },
    updateUserAllocation(value) {
      return {
        typeUrl: "/stride.airdrop.MsgUpdateUserAllocation",
        value: MsgUpdateUserAllocation.encode(value).finish()
      };
    },
    linkAddresses(value) {
      return {
        typeUrl: "/stride.airdrop.MsgLinkAddresses",
        value: MsgLinkAddresses.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    claimDaily(value) {
      return {
        typeUrl: "/stride.airdrop.MsgClaimDaily",
        value
      };
    },
    claimEarly(value) {
      return {
        typeUrl: "/stride.airdrop.MsgClaimEarly",
        value
      };
    },
    createAirdrop(value) {
      return {
        typeUrl: "/stride.airdrop.MsgCreateAirdrop",
        value
      };
    },
    updateAirdrop(value) {
      return {
        typeUrl: "/stride.airdrop.MsgUpdateAirdrop",
        value
      };
    },
    addAllocations(value) {
      return {
        typeUrl: "/stride.airdrop.MsgAddAllocations",
        value
      };
    },
    updateUserAllocation(value) {
      return {
        typeUrl: "/stride.airdrop.MsgUpdateUserAllocation",
        value
      };
    },
    linkAddresses(value) {
      return {
        typeUrl: "/stride.airdrop.MsgLinkAddresses",
        value
      };
    }
  },
  fromPartial: {
    claimDaily(value) {
      return {
        typeUrl: "/stride.airdrop.MsgClaimDaily",
        value: MsgClaimDaily.fromPartial(value)
      };
    },
    claimEarly(value) {
      return {
        typeUrl: "/stride.airdrop.MsgClaimEarly",
        value: MsgClaimEarly.fromPartial(value)
      };
    },
    createAirdrop(value) {
      return {
        typeUrl: "/stride.airdrop.MsgCreateAirdrop",
        value: MsgCreateAirdrop.fromPartial(value)
      };
    },
    updateAirdrop(value) {
      return {
        typeUrl: "/stride.airdrop.MsgUpdateAirdrop",
        value: MsgUpdateAirdrop.fromPartial(value)
      };
    },
    addAllocations(value) {
      return {
        typeUrl: "/stride.airdrop.MsgAddAllocations",
        value: MsgAddAllocations.fromPartial(value)
      };
    },
    updateUserAllocation(value) {
      return {
        typeUrl: "/stride.airdrop.MsgUpdateUserAllocation",
        value: MsgUpdateUserAllocation.fromPartial(value)
      };
    },
    linkAddresses(value) {
      return {
        typeUrl: "/stride.airdrop.MsgLinkAddresses",
        value: MsgLinkAddresses.fromPartial(value)
      };
    }
  }
};
export {
  MessageComposer,
  load,
  registry
};
