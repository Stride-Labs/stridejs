import { AminoMsg } from "@cosmjs/amino";
import { MsgClaimDaily, MsgClaimEarly, MsgCreateAirdrop, MsgUpdateAirdrop, MsgAddAllocations, MsgUpdateUserAllocation, MsgLinkAddresses } from "./tx";
export interface AminoMsgClaimDaily extends AminoMsg {
  type: "airdrop/MsgClaimDaily";
  value: {
    claimer: string;
    airdrop_id: string;
  };
}
export interface AminoMsgClaimEarly extends AminoMsg {
  type: "airdrop/MsgClaimEarly";
  value: {
    claimer: string;
    airdrop_id: string;
  };
}
export interface AminoMsgCreateAirdrop extends AminoMsg {
  type: "/stride.airdrop.MsgCreateAirdrop";
  value: {
    admin: string;
    airdrop_id: string;
    reward_denom: string;
    distribution_start_date: {
      seconds: string;
      nanos: number;
    };
    distribution_end_date: {
      seconds: string;
      nanos: number;
    };
    clawback_date: {
      seconds: string;
      nanos: number;
    };
    claim_type_deadline_date: {
      seconds: string;
      nanos: number;
    };
    early_claim_penalty: string;
    distribution_address: string;
  };
}
export interface AminoMsgUpdateAirdrop extends AminoMsg {
  type: "/stride.airdrop.MsgUpdateAirdrop";
  value: {
    admin: string;
    airdrop_id: string;
    reward_denom: string;
    distribution_start_date: {
      seconds: string;
      nanos: number;
    };
    distribution_end_date: {
      seconds: string;
      nanos: number;
    };
    clawback_date: {
      seconds: string;
      nanos: number;
    };
    claim_type_deadline_date: {
      seconds: string;
      nanos: number;
    };
    early_claim_penalty: string;
    distribution_address: string;
  };
}
export interface AminoMsgAddAllocations extends AminoMsg {
  type: "/stride.airdrop.MsgAddAllocations";
  value: {
    admin: string;
    airdrop_id: string;
    allocations: {
      user_address: string;
      allocations: string[];
    }[];
  };
}
export interface AminoMsgUpdateUserAllocation extends AminoMsg {
  type: "/stride.airdrop.MsgUpdateUserAllocation";
  value: {
    admin: string;
    airdrop_id: string;
    user_address: string;
    allocations: string[];
  };
}
export interface AminoMsgLinkAddresses extends AminoMsg {
  type: "/stride.airdrop.MsgLinkAddresses";
  value: {
    admin: string;
    airdrop_id: string;
    stride_address: string;
    host_address: string;
  };
}
export const AminoConverter = {
  "/stride.airdrop.MsgClaimDaily": {
    aminoType: "airdrop/MsgClaimDaily",
    toAmino: ({
      claimer,
      airdropId
    }: MsgClaimDaily): AminoMsgClaimDaily["value"] => {
      return {
        claimer,
        airdrop_id: airdropId
      };
    },
    fromAmino: ({
      claimer,
      airdrop_id
    }: AminoMsgClaimDaily["value"]): MsgClaimDaily => {
      return {
        claimer,
        airdropId: airdrop_id
      };
    }
  },
  "/stride.airdrop.MsgClaimEarly": {
    aminoType: "airdrop/MsgClaimEarly",
    toAmino: ({
      claimer,
      airdropId
    }: MsgClaimEarly): AminoMsgClaimEarly["value"] => {
      return {
        claimer,
        airdrop_id: airdropId
      };
    },
    fromAmino: ({
      claimer,
      airdrop_id
    }: AminoMsgClaimEarly["value"]): MsgClaimEarly => {
      return {
        claimer,
        airdropId: airdrop_id
      };
    }
  },
  "/stride.airdrop.MsgCreateAirdrop": {
    aminoType: "/stride.airdrop.MsgCreateAirdrop",
    toAmino: ({
      admin,
      airdropId,
      rewardDenom,
      distributionStartDate,
      distributionEndDate,
      clawbackDate,
      claimTypeDeadlineDate,
      earlyClaimPenalty,
      distributionAddress
    }: MsgCreateAirdrop): AminoMsgCreateAirdrop["value"] => {
      return {
        admin,
        airdrop_id: airdropId,
        reward_denom: rewardDenom,
        distribution_start_date: distributionStartDate,
        distribution_end_date: distributionEndDate,
        clawback_date: clawbackDate,
        claim_type_deadline_date: claimTypeDeadlineDate,
        early_claim_penalty: earlyClaimPenalty,
        distribution_address: distributionAddress
      };
    },
    fromAmino: ({
      admin,
      airdrop_id,
      reward_denom,
      distribution_start_date,
      distribution_end_date,
      clawback_date,
      claim_type_deadline_date,
      early_claim_penalty,
      distribution_address
    }: AminoMsgCreateAirdrop["value"]): MsgCreateAirdrop => {
      return {
        admin,
        airdropId: airdrop_id,
        rewardDenom: reward_denom,
        distributionStartDate: distribution_start_date,
        distributionEndDate: distribution_end_date,
        clawbackDate: clawback_date,
        claimTypeDeadlineDate: claim_type_deadline_date,
        earlyClaimPenalty: early_claim_penalty,
        distributionAddress: distribution_address
      };
    }
  },
  "/stride.airdrop.MsgUpdateAirdrop": {
    aminoType: "/stride.airdrop.MsgUpdateAirdrop",
    toAmino: ({
      admin,
      airdropId,
      rewardDenom,
      distributionStartDate,
      distributionEndDate,
      clawbackDate,
      claimTypeDeadlineDate,
      earlyClaimPenalty,
      distributionAddress
    }: MsgUpdateAirdrop): AminoMsgUpdateAirdrop["value"] => {
      return {
        admin,
        airdrop_id: airdropId,
        reward_denom: rewardDenom,
        distribution_start_date: distributionStartDate,
        distribution_end_date: distributionEndDate,
        clawback_date: clawbackDate,
        claim_type_deadline_date: claimTypeDeadlineDate,
        early_claim_penalty: earlyClaimPenalty,
        distribution_address: distributionAddress
      };
    },
    fromAmino: ({
      admin,
      airdrop_id,
      reward_denom,
      distribution_start_date,
      distribution_end_date,
      clawback_date,
      claim_type_deadline_date,
      early_claim_penalty,
      distribution_address
    }: AminoMsgUpdateAirdrop["value"]): MsgUpdateAirdrop => {
      return {
        admin,
        airdropId: airdrop_id,
        rewardDenom: reward_denom,
        distributionStartDate: distribution_start_date,
        distributionEndDate: distribution_end_date,
        clawbackDate: clawback_date,
        claimTypeDeadlineDate: claim_type_deadline_date,
        earlyClaimPenalty: early_claim_penalty,
        distributionAddress: distribution_address
      };
    }
  },
  "/stride.airdrop.MsgAddAllocations": {
    aminoType: "/stride.airdrop.MsgAddAllocations",
    toAmino: ({
      admin,
      airdropId,
      allocations
    }: MsgAddAllocations): AminoMsgAddAllocations["value"] => {
      return {
        admin,
        airdrop_id: airdropId,
        allocations: allocations.map(el0 => ({
          user_address: el0.userAddress,
          allocations: el0.allocations
        }))
      };
    },
    fromAmino: ({
      admin,
      airdrop_id,
      allocations
    }: AminoMsgAddAllocations["value"]): MsgAddAllocations => {
      return {
        admin,
        airdropId: airdrop_id,
        allocations: allocations.map(el0 => ({
          userAddress: el0.user_address,
          allocations: el0.allocations
        }))
      };
    }
  },
  "/stride.airdrop.MsgUpdateUserAllocation": {
    aminoType: "/stride.airdrop.MsgUpdateUserAllocation",
    toAmino: ({
      admin,
      airdropId,
      userAddress,
      allocations
    }: MsgUpdateUserAllocation): AminoMsgUpdateUserAllocation["value"] => {
      return {
        admin,
        airdrop_id: airdropId,
        user_address: userAddress,
        allocations
      };
    },
    fromAmino: ({
      admin,
      airdrop_id,
      user_address,
      allocations
    }: AminoMsgUpdateUserAllocation["value"]): MsgUpdateUserAllocation => {
      return {
        admin,
        airdropId: airdrop_id,
        userAddress: user_address,
        allocations
      };
    }
  },
  "/stride.airdrop.MsgLinkAddresses": {
    aminoType: "/stride.airdrop.MsgLinkAddresses",
    toAmino: ({
      admin,
      airdropId,
      strideAddress,
      hostAddress
    }: MsgLinkAddresses): AminoMsgLinkAddresses["value"] => {
      return {
        admin,
        airdrop_id: airdropId,
        stride_address: strideAddress,
        host_address: hostAddress
      };
    },
    fromAmino: ({
      admin,
      airdrop_id,
      stride_address,
      host_address
    }: AminoMsgLinkAddresses["value"]): MsgLinkAddresses => {
      return {
        admin,
        airdropId: airdrop_id,
        strideAddress: stride_address,
        hostAddress: host_address
      };
    }
  }
};