import { AminoMsg } from "@cosmjs/amino";
import { Long } from "@osmonauts/helpers";
import { MsgSetAirdropAllocations, MsgClaimFreeAmount, MsgCreateAirdrop, MsgDeleteAirdrop } from "./tx";
export interface AminoMsgSetAirdropAllocations extends AminoMsg {
  type: "/Stridelabs.stride.claim.v1beta1.MsgSetAirdropAllocations";
  value: {
    allocator: string;
    airdrop_identifier: string;
    users: string[];
    weights: string[];
  };
}
export interface AminoMsgClaimFreeAmount extends AminoMsg {
  type: "/Stridelabs.stride.claim.v1beta1.MsgClaimFreeAmount";
  value: {
    user: string;
    airdrop_identifier: string;
  };
}
export interface AminoMsgCreateAirdrop extends AminoMsg {
  type: "/Stridelabs.stride.claim.v1beta1.MsgCreateAirdrop";
  value: {
    distributor: string;
    identifier: string;
    start_time: string;
    duration: string;
    denom: string;
  };
}
export interface AminoMsgDeleteAirdrop extends AminoMsg {
  type: "/Stridelabs.stride.claim.v1beta1.MsgDeleteAirdrop";
  value: {
    distributor: string;
    identifier: string;
  };
}
export const AminoConverter = {
  "/Stridelabs.stride.claim.v1beta1.MsgSetAirdropAllocations": {
    aminoType: "/Stridelabs.stride.claim.v1beta1.MsgSetAirdropAllocations",
    toAmino: ({
      allocator,
      airdropIdentifier,
      users,
      weights
    }: MsgSetAirdropAllocations): AminoMsgSetAirdropAllocations["value"] => {
      return {
        allocator,
        airdrop_identifier: airdropIdentifier,
        users,
        weights
      };
    },
    fromAmino: ({
      allocator,
      airdrop_identifier,
      users,
      weights
    }: AminoMsgSetAirdropAllocations["value"]): MsgSetAirdropAllocations => {
      return {
        allocator,
        airdropIdentifier: airdrop_identifier,
        users,
        weights
      };
    }
  },
  "/Stridelabs.stride.claim.v1beta1.MsgClaimFreeAmount": {
    aminoType: "/Stridelabs.stride.claim.v1beta1.MsgClaimFreeAmount",
    toAmino: ({
      user,
      airdropIdentifier
    }: MsgClaimFreeAmount): AminoMsgClaimFreeAmount["value"] => {
      return {
        user,
        airdrop_identifier: airdropIdentifier
      };
    },
    fromAmino: ({
      user,
      airdrop_identifier
    }: AminoMsgClaimFreeAmount["value"]): MsgClaimFreeAmount => {
      return {
        user,
        airdropIdentifier: airdrop_identifier
      };
    }
  },
  "/Stridelabs.stride.claim.v1beta1.MsgCreateAirdrop": {
    aminoType: "/Stridelabs.stride.claim.v1beta1.MsgCreateAirdrop",
    toAmino: ({
      distributor,
      identifier,
      startTime,
      duration,
      denom
    }: MsgCreateAirdrop): AminoMsgCreateAirdrop["value"] => {
      return {
        distributor,
        identifier,
        start_time: startTime.toString(),
        duration: duration.toString(),
        denom
      };
    },
    fromAmino: ({
      distributor,
      identifier,
      start_time,
      duration,
      denom
    }: AminoMsgCreateAirdrop["value"]): MsgCreateAirdrop => {
      return {
        distributor,
        identifier,
        startTime: Long.fromString(start_time),
        duration: Long.fromString(duration),
        denom
      };
    }
  },
  "/Stridelabs.stride.claim.v1beta1.MsgDeleteAirdrop": {
    aminoType: "/Stridelabs.stride.claim.v1beta1.MsgDeleteAirdrop",
    toAmino: ({
      distributor,
      identifier
    }: MsgDeleteAirdrop): AminoMsgDeleteAirdrop["value"] => {
      return {
        distributor,
        identifier
      };
    },
    fromAmino: ({
      distributor,
      identifier
    }: AminoMsgDeleteAirdrop["value"]): MsgDeleteAirdrop => {
      return {
        distributor,
        identifier
      };
    }
  }
};