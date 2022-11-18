import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgSetAirdropAllocations, MsgClaimFreeAmount, MsgCreateAirdrop, MsgDeleteAirdrop } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/Stridelabs.stride.claim.v1beta1.MsgSetAirdropAllocations", MsgSetAirdropAllocations], ["/Stridelabs.stride.claim.v1beta1.MsgClaimFreeAmount", MsgClaimFreeAmount], ["/Stridelabs.stride.claim.v1beta1.MsgCreateAirdrop", MsgCreateAirdrop], ["/Stridelabs.stride.claim.v1beta1.MsgDeleteAirdrop", MsgDeleteAirdrop]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    setAirdropAllocations(value: MsgSetAirdropAllocations) {
      return {
        typeUrl: "/Stridelabs.stride.claim.v1beta1.MsgSetAirdropAllocations",
        value: MsgSetAirdropAllocations.encode(value).finish()
      };
    },

    claimFreeAmount(value: MsgClaimFreeAmount) {
      return {
        typeUrl: "/Stridelabs.stride.claim.v1beta1.MsgClaimFreeAmount",
        value: MsgClaimFreeAmount.encode(value).finish()
      };
    },

    createAirdrop(value: MsgCreateAirdrop) {
      return {
        typeUrl: "/Stridelabs.stride.claim.v1beta1.MsgCreateAirdrop",
        value: MsgCreateAirdrop.encode(value).finish()
      };
    },

    deleteAirdrop(value: MsgDeleteAirdrop) {
      return {
        typeUrl: "/Stridelabs.stride.claim.v1beta1.MsgDeleteAirdrop",
        value: MsgDeleteAirdrop.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    setAirdropAllocations(value: MsgSetAirdropAllocations) {
      return {
        typeUrl: "/Stridelabs.stride.claim.v1beta1.MsgSetAirdropAllocations",
        value
      };
    },

    claimFreeAmount(value: MsgClaimFreeAmount) {
      return {
        typeUrl: "/Stridelabs.stride.claim.v1beta1.MsgClaimFreeAmount",
        value
      };
    },

    createAirdrop(value: MsgCreateAirdrop) {
      return {
        typeUrl: "/Stridelabs.stride.claim.v1beta1.MsgCreateAirdrop",
        value
      };
    },

    deleteAirdrop(value: MsgDeleteAirdrop) {
      return {
        typeUrl: "/Stridelabs.stride.claim.v1beta1.MsgDeleteAirdrop",
        value
      };
    }

  },
  fromPartial: {
    setAirdropAllocations(value: MsgSetAirdropAllocations) {
      return {
        typeUrl: "/Stridelabs.stride.claim.v1beta1.MsgSetAirdropAllocations",
        value: MsgSetAirdropAllocations.fromPartial(value)
      };
    },

    claimFreeAmount(value: MsgClaimFreeAmount) {
      return {
        typeUrl: "/Stridelabs.stride.claim.v1beta1.MsgClaimFreeAmount",
        value: MsgClaimFreeAmount.fromPartial(value)
      };
    },

    createAirdrop(value: MsgCreateAirdrop) {
      return {
        typeUrl: "/Stridelabs.stride.claim.v1beta1.MsgCreateAirdrop",
        value: MsgCreateAirdrop.fromPartial(value)
      };
    },

    deleteAirdrop(value: MsgDeleteAirdrop) {
      return {
        typeUrl: "/Stridelabs.stride.claim.v1beta1.MsgDeleteAirdrop",
        value: MsgDeleteAirdrop.fromPartial(value)
      };
    }

  }
};