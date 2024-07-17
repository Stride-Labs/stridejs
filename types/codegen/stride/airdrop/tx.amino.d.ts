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
export declare const AminoConverter: {
    "/stride.airdrop.MsgClaimDaily": {
        aminoType: string;
        toAmino: ({ claimer, airdropId }: MsgClaimDaily) => AminoMsgClaimDaily["value"];
        fromAmino: ({ claimer, airdrop_id }: AminoMsgClaimDaily["value"]) => MsgClaimDaily;
    };
    "/stride.airdrop.MsgClaimEarly": {
        aminoType: string;
        toAmino: ({ claimer, airdropId }: MsgClaimEarly) => AminoMsgClaimEarly["value"];
        fromAmino: ({ claimer, airdrop_id }: AminoMsgClaimEarly["value"]) => MsgClaimEarly;
    };
    "/stride.airdrop.MsgCreateAirdrop": {
        aminoType: string;
        toAmino: ({ admin, airdropId, rewardDenom, distributionStartDate, distributionEndDate, clawbackDate, claimTypeDeadlineDate, earlyClaimPenalty, distributionAddress }: MsgCreateAirdrop) => AminoMsgCreateAirdrop["value"];
        fromAmino: ({ admin, airdrop_id, reward_denom, distribution_start_date, distribution_end_date, clawback_date, claim_type_deadline_date, early_claim_penalty, distribution_address }: AminoMsgCreateAirdrop["value"]) => MsgCreateAirdrop;
    };
    "/stride.airdrop.MsgUpdateAirdrop": {
        aminoType: string;
        toAmino: ({ admin, airdropId, rewardDenom, distributionStartDate, distributionEndDate, clawbackDate, claimTypeDeadlineDate, earlyClaimPenalty, distributionAddress }: MsgUpdateAirdrop) => AminoMsgUpdateAirdrop["value"];
        fromAmino: ({ admin, airdrop_id, reward_denom, distribution_start_date, distribution_end_date, clawback_date, claim_type_deadline_date, early_claim_penalty, distribution_address }: AminoMsgUpdateAirdrop["value"]) => MsgUpdateAirdrop;
    };
    "/stride.airdrop.MsgAddAllocations": {
        aminoType: string;
        toAmino: ({ admin, airdropId, allocations }: MsgAddAllocations) => AminoMsgAddAllocations["value"];
        fromAmino: ({ admin, airdrop_id, allocations }: AminoMsgAddAllocations["value"]) => MsgAddAllocations;
    };
    "/stride.airdrop.MsgUpdateUserAllocation": {
        aminoType: string;
        toAmino: ({ admin, airdropId, userAddress, allocations }: MsgUpdateUserAllocation) => AminoMsgUpdateUserAllocation["value"];
        fromAmino: ({ admin, airdrop_id, user_address, allocations }: AminoMsgUpdateUserAllocation["value"]) => MsgUpdateUserAllocation;
    };
    "/stride.airdrop.MsgLinkAddresses": {
        aminoType: string;
        toAmino: ({ admin, airdropId, strideAddress, hostAddress }: MsgLinkAddresses) => AminoMsgLinkAddresses["value"];
        fromAmino: ({ admin, airdrop_id, stride_address, host_address }: AminoMsgLinkAddresses["value"]) => MsgLinkAddresses;
    };
};
