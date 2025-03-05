import { MsgSetAirdropAllocations, MsgClaimFreeAmount, MsgCreateAirdrop, MsgDeleteAirdrop } from "./tx";
const registry = [["/stride.claim.MsgSetAirdropAllocations", MsgSetAirdropAllocations], ["/stride.claim.MsgClaimFreeAmount", MsgClaimFreeAmount], ["/stride.claim.MsgCreateAirdrop", MsgCreateAirdrop], ["/stride.claim.MsgDeleteAirdrop", MsgDeleteAirdrop]];
const load = (protoRegistry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
const MessageComposer = {
  encoded: {
    setAirdropAllocations(value) {
      return {
        typeUrl: "/stride.claim.MsgSetAirdropAllocations",
        value: MsgSetAirdropAllocations.encode(value).finish()
      };
    },
    claimFreeAmount(value) {
      return {
        typeUrl: "/stride.claim.MsgClaimFreeAmount",
        value: MsgClaimFreeAmount.encode(value).finish()
      };
    },
    createAirdrop(value) {
      return {
        typeUrl: "/stride.claim.MsgCreateAirdrop",
        value: MsgCreateAirdrop.encode(value).finish()
      };
    },
    deleteAirdrop(value) {
      return {
        typeUrl: "/stride.claim.MsgDeleteAirdrop",
        value: MsgDeleteAirdrop.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    setAirdropAllocations(value) {
      return {
        typeUrl: "/stride.claim.MsgSetAirdropAllocations",
        value
      };
    },
    claimFreeAmount(value) {
      return {
        typeUrl: "/stride.claim.MsgClaimFreeAmount",
        value
      };
    },
    createAirdrop(value) {
      return {
        typeUrl: "/stride.claim.MsgCreateAirdrop",
        value
      };
    },
    deleteAirdrop(value) {
      return {
        typeUrl: "/stride.claim.MsgDeleteAirdrop",
        value
      };
    }
  },
  fromPartial: {
    setAirdropAllocations(value) {
      return {
        typeUrl: "/stride.claim.MsgSetAirdropAllocations",
        value: MsgSetAirdropAllocations.fromPartial(value)
      };
    },
    claimFreeAmount(value) {
      return {
        typeUrl: "/stride.claim.MsgClaimFreeAmount",
        value: MsgClaimFreeAmount.fromPartial(value)
      };
    },
    createAirdrop(value) {
      return {
        typeUrl: "/stride.claim.MsgCreateAirdrop",
        value: MsgCreateAirdrop.fromPartial(value)
      };
    },
    deleteAirdrop(value) {
      return {
        typeUrl: "/stride.claim.MsgDeleteAirdrop",
        value: MsgDeleteAirdrop.fromPartial(value)
      };
    }
  }
};
export {
  MessageComposer,
  load,
  registry
};
