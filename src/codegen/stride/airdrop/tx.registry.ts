import { TelescopeGeneratedType } from "../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgClaimDaily, MsgClaimEarly, MsgCreateAirdrop, MsgUpdateAirdrop, MsgAddAllocations, MsgUpdateUserAllocation, MsgLinkAddresses } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/stride.airdrop.MsgClaimDaily", MsgClaimDaily], ["/stride.airdrop.MsgClaimEarly", MsgClaimEarly], ["/stride.airdrop.MsgCreateAirdrop", MsgCreateAirdrop], ["/stride.airdrop.MsgUpdateAirdrop", MsgUpdateAirdrop], ["/stride.airdrop.MsgAddAllocations", MsgAddAllocations], ["/stride.airdrop.MsgUpdateUserAllocation", MsgUpdateUserAllocation], ["/stride.airdrop.MsgLinkAddresses", MsgLinkAddresses]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    claimDaily(value: MsgClaimDaily) {
      return {
        typeUrl: "/stride.airdrop.MsgClaimDaily",
        value: MsgClaimDaily.encode(value).finish()
      };
    },
    claimEarly(value: MsgClaimEarly) {
      return {
        typeUrl: "/stride.airdrop.MsgClaimEarly",
        value: MsgClaimEarly.encode(value).finish()
      };
    },
    createAirdrop(value: MsgCreateAirdrop) {
      return {
        typeUrl: "/stride.airdrop.MsgCreateAirdrop",
        value: MsgCreateAirdrop.encode(value).finish()
      };
    },
    updateAirdrop(value: MsgUpdateAirdrop) {
      return {
        typeUrl: "/stride.airdrop.MsgUpdateAirdrop",
        value: MsgUpdateAirdrop.encode(value).finish()
      };
    },
    addAllocations(value: MsgAddAllocations) {
      return {
        typeUrl: "/stride.airdrop.MsgAddAllocations",
        value: MsgAddAllocations.encode(value).finish()
      };
    },
    updateUserAllocation(value: MsgUpdateUserAllocation) {
      return {
        typeUrl: "/stride.airdrop.MsgUpdateUserAllocation",
        value: MsgUpdateUserAllocation.encode(value).finish()
      };
    },
    linkAddresses(value: MsgLinkAddresses) {
      return {
        typeUrl: "/stride.airdrop.MsgLinkAddresses",
        value: MsgLinkAddresses.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    claimDaily(value: MsgClaimDaily) {
      return {
        typeUrl: "/stride.airdrop.MsgClaimDaily",
        value
      };
    },
    claimEarly(value: MsgClaimEarly) {
      return {
        typeUrl: "/stride.airdrop.MsgClaimEarly",
        value
      };
    },
    createAirdrop(value: MsgCreateAirdrop) {
      return {
        typeUrl: "/stride.airdrop.MsgCreateAirdrop",
        value
      };
    },
    updateAirdrop(value: MsgUpdateAirdrop) {
      return {
        typeUrl: "/stride.airdrop.MsgUpdateAirdrop",
        value
      };
    },
    addAllocations(value: MsgAddAllocations) {
      return {
        typeUrl: "/stride.airdrop.MsgAddAllocations",
        value
      };
    },
    updateUserAllocation(value: MsgUpdateUserAllocation) {
      return {
        typeUrl: "/stride.airdrop.MsgUpdateUserAllocation",
        value
      };
    },
    linkAddresses(value: MsgLinkAddresses) {
      return {
        typeUrl: "/stride.airdrop.MsgLinkAddresses",
        value
      };
    }
  },
  fromPartial: {
    claimDaily(value: MsgClaimDaily) {
      return {
        typeUrl: "/stride.airdrop.MsgClaimDaily",
        value: MsgClaimDaily.fromPartial(value)
      };
    },
    claimEarly(value: MsgClaimEarly) {
      return {
        typeUrl: "/stride.airdrop.MsgClaimEarly",
        value: MsgClaimEarly.fromPartial(value)
      };
    },
    createAirdrop(value: MsgCreateAirdrop) {
      return {
        typeUrl: "/stride.airdrop.MsgCreateAirdrop",
        value: MsgCreateAirdrop.fromPartial(value)
      };
    },
    updateAirdrop(value: MsgUpdateAirdrop) {
      return {
        typeUrl: "/stride.airdrop.MsgUpdateAirdrop",
        value: MsgUpdateAirdrop.fromPartial(value)
      };
    },
    addAllocations(value: MsgAddAllocations) {
      return {
        typeUrl: "/stride.airdrop.MsgAddAllocations",
        value: MsgAddAllocations.fromPartial(value)
      };
    },
    updateUserAllocation(value: MsgUpdateUserAllocation) {
      return {
        typeUrl: "/stride.airdrop.MsgUpdateUserAllocation",
        value: MsgUpdateUserAllocation.fromPartial(value)
      };
    },
    linkAddresses(value: MsgLinkAddresses) {
      return {
        typeUrl: "/stride.airdrop.MsgLinkAddresses",
        value: MsgLinkAddresses.fromPartial(value)
      };
    }
  }
};