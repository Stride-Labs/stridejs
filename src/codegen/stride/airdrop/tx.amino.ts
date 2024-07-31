import { MsgClaimDaily, MsgClaimEarly, MsgCreateAirdrop, MsgUpdateAirdrop, MsgAddAllocations, MsgUpdateUserAllocation, MsgLinkAddresses } from "./tx";
export const AminoConverter = {
  "/stride.airdrop.MsgClaimDaily": {
    aminoType: "airdrop/MsgClaimDaily",
    toAmino: MsgClaimDaily.toAmino,
    fromAmino: MsgClaimDaily.fromAmino
  },
  "/stride.airdrop.MsgClaimEarly": {
    aminoType: "airdrop/MsgClaimEarly",
    toAmino: MsgClaimEarly.toAmino,
    fromAmino: MsgClaimEarly.fromAmino
  },
  "/stride.airdrop.MsgCreateAirdrop": {
    aminoType: "airdrop/MsgCreateAirdrop",
    toAmino: MsgCreateAirdrop.toAmino,
    fromAmino: MsgCreateAirdrop.fromAmino
  },
  "/stride.airdrop.MsgUpdateAirdrop": {
    aminoType: "airdrop/MsgUpdateAirdrop",
    toAmino: MsgUpdateAirdrop.toAmino,
    fromAmino: MsgUpdateAirdrop.fromAmino
  },
  "/stride.airdrop.MsgAddAllocations": {
    aminoType: "airdrop/MsgAddAllocations",
    toAmino: MsgAddAllocations.toAmino,
    fromAmino: MsgAddAllocations.fromAmino
  },
  "/stride.airdrop.MsgUpdateUserAllocation": {
    aminoType: "airdrop/MsgUpdateUserAllocation",
    toAmino: MsgUpdateUserAllocation.toAmino,
    fromAmino: MsgUpdateUserAllocation.fromAmino
  },
  "/stride.airdrop.MsgLinkAddresses": {
    aminoType: "airdrop/MsgLinkAddresses",
    toAmino: MsgLinkAddresses.toAmino,
    fromAmino: MsgLinkAddresses.fromAmino
  }
};