import { BinaryReader, BinaryWriter } from "../../binary";
/** ClaimDaily */
export interface MsgClaimDaily {
    /** Address of the claimer */
    claimer: string;
    /** Airdrop ID */
    airdropId: string;
}
export interface MsgClaimDailyProtoMsg {
    typeUrl: "/stride.airdrop.MsgClaimDaily";
    value: Uint8Array;
}
/** ClaimDaily */
export interface MsgClaimDailyAmino {
    /** Address of the claimer */
    claimer?: string;
    /** Airdrop ID */
    airdrop_id?: string;
}
export interface MsgClaimDailyAminoMsg {
    type: "airdrop/MsgClaimDaily";
    value: MsgClaimDailyAmino;
}
/** ClaimDaily */
export interface MsgClaimDailySDKType {
    claimer: string;
    airdrop_id: string;
}
export interface MsgClaimDailyResponse {
}
export interface MsgClaimDailyResponseProtoMsg {
    typeUrl: "/stride.airdrop.MsgClaimDailyResponse";
    value: Uint8Array;
}
export interface MsgClaimDailyResponseAmino {
}
export interface MsgClaimDailyResponseAminoMsg {
    type: "/stride.airdrop.MsgClaimDailyResponse";
    value: MsgClaimDailyResponseAmino;
}
export interface MsgClaimDailyResponseSDKType {
}
/** ClaimEarly */
export interface MsgClaimEarly {
    /** Address of the claimer */
    claimer: string;
    /** Airdrop ID */
    airdropId: string;
}
export interface MsgClaimEarlyProtoMsg {
    typeUrl: "/stride.airdrop.MsgClaimEarly";
    value: Uint8Array;
}
/** ClaimEarly */
export interface MsgClaimEarlyAmino {
    /** Address of the claimer */
    claimer?: string;
    /** Airdrop ID */
    airdrop_id?: string;
}
export interface MsgClaimEarlyAminoMsg {
    type: "airdrop/MsgClaimEarly";
    value: MsgClaimEarlyAmino;
}
/** ClaimEarly */
export interface MsgClaimEarlySDKType {
    claimer: string;
    airdrop_id: string;
}
export interface MsgClaimEarlyResponse {
}
export interface MsgClaimEarlyResponseProtoMsg {
    typeUrl: "/stride.airdrop.MsgClaimEarlyResponse";
    value: Uint8Array;
}
export interface MsgClaimEarlyResponseAmino {
}
export interface MsgClaimEarlyResponseAminoMsg {
    type: "/stride.airdrop.MsgClaimEarlyResponse";
    value: MsgClaimEarlyResponseAmino;
}
export interface MsgClaimEarlyResponseSDKType {
}
/** CreateAirdrop */
export interface MsgCreateAirdrop {
    /** Airdrop admin address */
    admin: string;
    /** Airdrop ID */
    airdropId: string;
    /** Denom used when distributing rewards */
    rewardDenom: string;
    /** The first date that claiming begins and rewards are distributed */
    distributionStartDate?: Date;
    /**
     * The last date for rewards to be distributed. Immediately after this date
     * the rewards can no longer be claimed, but rewards have not been clawed back
     * yet
     */
    distributionEndDate?: Date;
    /**
     * Date with which the rewards are clawed back (occurs after the distribution
     * end date)
     */
    clawbackDate?: Date;
    /** Deadline for the user to make a decision on their claim type */
    claimTypeDeadlineDate?: Date;
    /**
     * Penalty for claiming rewards early - e.g. 0.5 means claiming early will
     * result in losing 50% of rewards
     */
    earlyClaimPenalty: string;
    /** Account that holds the total reward balance and distributes to users */
    distributorAddress: string;
    /** Admin account with permissions to add or update allocations */
    allocatorAddress: string;
    /** Admin account with permissions to link addresseses */
    linkerAddress: string;
}
export interface MsgCreateAirdropProtoMsg {
    typeUrl: "/stride.airdrop.MsgCreateAirdrop";
    value: Uint8Array;
}
/** CreateAirdrop */
export interface MsgCreateAirdropAmino {
    /** Airdrop admin address */
    admin?: string;
    /** Airdrop ID */
    airdrop_id?: string;
    /** Denom used when distributing rewards */
    reward_denom?: string;
    /** The first date that claiming begins and rewards are distributed */
    distribution_start_date?: string;
    /**
     * The last date for rewards to be distributed. Immediately after this date
     * the rewards can no longer be claimed, but rewards have not been clawed back
     * yet
     */
    distribution_end_date?: string;
    /**
     * Date with which the rewards are clawed back (occurs after the distribution
     * end date)
     */
    clawback_date?: string;
    /** Deadline for the user to make a decision on their claim type */
    claim_type_deadline_date?: string;
    /**
     * Penalty for claiming rewards early - e.g. 0.5 means claiming early will
     * result in losing 50% of rewards
     */
    early_claim_penalty?: string;
    /** Account that holds the total reward balance and distributes to users */
    distributor_address?: string;
    /** Admin account with permissions to add or update allocations */
    allocator_address?: string;
    /** Admin account with permissions to link addresseses */
    linker_address?: string;
}
export interface MsgCreateAirdropAminoMsg {
    type: "airdrop/MsgCreateAirdrop";
    value: MsgCreateAirdropAmino;
}
/** CreateAirdrop */
export interface MsgCreateAirdropSDKType {
    admin: string;
    airdrop_id: string;
    reward_denom: string;
    distribution_start_date?: Date;
    distribution_end_date?: Date;
    clawback_date?: Date;
    claim_type_deadline_date?: Date;
    early_claim_penalty: string;
    distributor_address: string;
    allocator_address: string;
    linker_address: string;
}
export interface MsgCreateAirdropResponse {
}
export interface MsgCreateAirdropResponseProtoMsg {
    typeUrl: "/stride.airdrop.MsgCreateAirdropResponse";
    value: Uint8Array;
}
export interface MsgCreateAirdropResponseAmino {
}
export interface MsgCreateAirdropResponseAminoMsg {
    type: "/stride.airdrop.MsgCreateAirdropResponse";
    value: MsgCreateAirdropResponseAmino;
}
export interface MsgCreateAirdropResponseSDKType {
}
/** UpdateAirdrop */
export interface MsgUpdateAirdrop {
    /** Airdrop admin address */
    admin: string;
    /** Airdrop ID */
    airdropId: string;
    /** Denom used when distributing rewards */
    rewardDenom: string;
    /** The first date that claiming begins and rewards are distributed */
    distributionStartDate?: Date;
    /**
     * The last date for rewards to be distributed. Immediately after this date
     * the rewards can no longer be claimed, but rewards have not been clawed back
     * yet
     */
    distributionEndDate?: Date;
    /**
     * Date with which the rewards are clawed back (occurs after the distribution
     * end date)
     */
    clawbackDate?: Date;
    /** Deadline for the user to make a decision on their claim type */
    claimTypeDeadlineDate?: Date;
    /**
     * Penalty for claiming rewards early - e.g. 0.5 means claiming early will
     * result in losing 50% of rewards
     */
    earlyClaimPenalty: string;
    /** Account that holds the total reward balance and distributes to users */
    distributorAddress: string;
    /** Admin account with permissions to add or update allocations */
    allocatorAddress: string;
    /** Admin account with permissions to link addresseses */
    linkerAddress: string;
}
export interface MsgUpdateAirdropProtoMsg {
    typeUrl: "/stride.airdrop.MsgUpdateAirdrop";
    value: Uint8Array;
}
/** UpdateAirdrop */
export interface MsgUpdateAirdropAmino {
    /** Airdrop admin address */
    admin?: string;
    /** Airdrop ID */
    airdrop_id?: string;
    /** Denom used when distributing rewards */
    reward_denom?: string;
    /** The first date that claiming begins and rewards are distributed */
    distribution_start_date?: string;
    /**
     * The last date for rewards to be distributed. Immediately after this date
     * the rewards can no longer be claimed, but rewards have not been clawed back
     * yet
     */
    distribution_end_date?: string;
    /**
     * Date with which the rewards are clawed back (occurs after the distribution
     * end date)
     */
    clawback_date?: string;
    /** Deadline for the user to make a decision on their claim type */
    claim_type_deadline_date?: string;
    /**
     * Penalty for claiming rewards early - e.g. 0.5 means claiming early will
     * result in losing 50% of rewards
     */
    early_claim_penalty?: string;
    /** Account that holds the total reward balance and distributes to users */
    distributor_address?: string;
    /** Admin account with permissions to add or update allocations */
    allocator_address?: string;
    /** Admin account with permissions to link addresseses */
    linker_address?: string;
}
export interface MsgUpdateAirdropAminoMsg {
    type: "airdrop/MsgUpdateAirdrop";
    value: MsgUpdateAirdropAmino;
}
/** UpdateAirdrop */
export interface MsgUpdateAirdropSDKType {
    admin: string;
    airdrop_id: string;
    reward_denom: string;
    distribution_start_date?: Date;
    distribution_end_date?: Date;
    clawback_date?: Date;
    claim_type_deadline_date?: Date;
    early_claim_penalty: string;
    distributor_address: string;
    allocator_address: string;
    linker_address: string;
}
export interface MsgUpdateAirdropResponse {
}
export interface MsgUpdateAirdropResponseProtoMsg {
    typeUrl: "/stride.airdrop.MsgUpdateAirdropResponse";
    value: Uint8Array;
}
export interface MsgUpdateAirdropResponseAmino {
}
export interface MsgUpdateAirdropResponseAminoMsg {
    type: "/stride.airdrop.MsgUpdateAirdropResponse";
    value: MsgUpdateAirdropResponseAmino;
}
export interface MsgUpdateAirdropResponseSDKType {
}
/** Allocation specification when bootstrapping reward data */
export interface RawAllocation {
    userAddress: string;
    allocations: string[];
}
export interface RawAllocationProtoMsg {
    typeUrl: "/stride.airdrop.RawAllocation";
    value: Uint8Array;
}
/** Allocation specification when bootstrapping reward data */
export interface RawAllocationAmino {
    user_address?: string;
    allocations?: string[];
}
export interface RawAllocationAminoMsg {
    type: "/stride.airdrop.RawAllocation";
    value: RawAllocationAmino;
}
/** Allocation specification when bootstrapping reward data */
export interface RawAllocationSDKType {
    user_address: string;
    allocations: string[];
}
/** AddAllocations */
export interface MsgAddAllocations {
    /** Airdrop admin address */
    admin: string;
    /** Airdrop ID */
    airdropId: string;
    /** List of address/allocation pairs for each user */
    allocations: RawAllocation[];
}
export interface MsgAddAllocationsProtoMsg {
    typeUrl: "/stride.airdrop.MsgAddAllocations";
    value: Uint8Array;
}
/** AddAllocations */
export interface MsgAddAllocationsAmino {
    /** Airdrop admin address */
    admin?: string;
    /** Airdrop ID */
    airdrop_id?: string;
    /** List of address/allocation pairs for each user */
    allocations?: RawAllocationAmino[];
}
export interface MsgAddAllocationsAminoMsg {
    type: "airdrop/MsgAddAllocations";
    value: MsgAddAllocationsAmino;
}
/** AddAllocations */
export interface MsgAddAllocationsSDKType {
    admin: string;
    airdrop_id: string;
    allocations: RawAllocationSDKType[];
}
export interface MsgAddAllocationsResponse {
}
export interface MsgAddAllocationsResponseProtoMsg {
    typeUrl: "/stride.airdrop.MsgAddAllocationsResponse";
    value: Uint8Array;
}
export interface MsgAddAllocationsResponseAmino {
}
export interface MsgAddAllocationsResponseAminoMsg {
    type: "/stride.airdrop.MsgAddAllocationsResponse";
    value: MsgAddAllocationsResponseAmino;
}
export interface MsgAddAllocationsResponseSDKType {
}
/** UpdateUserAllocation */
export interface MsgUpdateUserAllocation {
    /** Airdrop admin address */
    admin: string;
    /** Airdrop ID */
    airdropId: string;
    /** Address of the airdrop recipient */
    userAddress: string;
    /**
     * Allocations - as an array where each element represents the rewards for a
     * day
     */
    allocations: string[];
}
export interface MsgUpdateUserAllocationProtoMsg {
    typeUrl: "/stride.airdrop.MsgUpdateUserAllocation";
    value: Uint8Array;
}
/** UpdateUserAllocation */
export interface MsgUpdateUserAllocationAmino {
    /** Airdrop admin address */
    admin?: string;
    /** Airdrop ID */
    airdrop_id?: string;
    /** Address of the airdrop recipient */
    user_address?: string;
    /**
     * Allocations - as an array where each element represents the rewards for a
     * day
     */
    allocations?: string[];
}
export interface MsgUpdateUserAllocationAminoMsg {
    type: "airdrop/MsgUpdateUserAllocation";
    value: MsgUpdateUserAllocationAmino;
}
/** UpdateUserAllocation */
export interface MsgUpdateUserAllocationSDKType {
    admin: string;
    airdrop_id: string;
    user_address: string;
    allocations: string[];
}
export interface MsgUpdateUserAllocationResponse {
}
export interface MsgUpdateUserAllocationResponseProtoMsg {
    typeUrl: "/stride.airdrop.MsgUpdateUserAllocationResponse";
    value: Uint8Array;
}
export interface MsgUpdateUserAllocationResponseAmino {
}
export interface MsgUpdateUserAllocationResponseAminoMsg {
    type: "/stride.airdrop.MsgUpdateUserAllocationResponse";
    value: MsgUpdateUserAllocationResponseAmino;
}
export interface MsgUpdateUserAllocationResponseSDKType {
}
/** LinkAddresses */
export interface MsgLinkAddresses {
    /** Airdrop admin address */
    admin: string;
    /** Airdrop ID */
    airdropId: string;
    /** Stride address - this address may or may not exist in allocations yet */
    strideAddress: string;
    /** Host address - this address must exist */
    hostAddress: string;
}
export interface MsgLinkAddressesProtoMsg {
    typeUrl: "/stride.airdrop.MsgLinkAddresses";
    value: Uint8Array;
}
/** LinkAddresses */
export interface MsgLinkAddressesAmino {
    /** Airdrop admin address */
    admin?: string;
    /** Airdrop ID */
    airdrop_id?: string;
    /** Stride address - this address may or may not exist in allocations yet */
    stride_address?: string;
    /** Host address - this address must exist */
    host_address?: string;
}
export interface MsgLinkAddressesAminoMsg {
    type: "airdrop/MsgLinkAddresses";
    value: MsgLinkAddressesAmino;
}
/** LinkAddresses */
export interface MsgLinkAddressesSDKType {
    admin: string;
    airdrop_id: string;
    stride_address: string;
    host_address: string;
}
export interface MsgLinkAddressesResponse {
}
export interface MsgLinkAddressesResponseProtoMsg {
    typeUrl: "/stride.airdrop.MsgLinkAddressesResponse";
    value: Uint8Array;
}
export interface MsgLinkAddressesResponseAmino {
}
export interface MsgLinkAddressesResponseAminoMsg {
    type: "/stride.airdrop.MsgLinkAddressesResponse";
    value: MsgLinkAddressesResponseAmino;
}
export interface MsgLinkAddressesResponseSDKType {
}
export declare const MsgClaimDaily: {
    typeUrl: string;
    encode(message: MsgClaimDaily, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgClaimDaily;
    fromPartial(object: Partial<MsgClaimDaily>): MsgClaimDaily;
    fromAmino(object: MsgClaimDailyAmino): MsgClaimDaily;
    toAmino(message: MsgClaimDaily): MsgClaimDailyAmino;
    fromAminoMsg(object: MsgClaimDailyAminoMsg): MsgClaimDaily;
    toAminoMsg(message: MsgClaimDaily): MsgClaimDailyAminoMsg;
    fromProtoMsg(message: MsgClaimDailyProtoMsg): MsgClaimDaily;
    toProto(message: MsgClaimDaily): Uint8Array;
    toProtoMsg(message: MsgClaimDaily): MsgClaimDailyProtoMsg;
};
export declare const MsgClaimDailyResponse: {
    typeUrl: string;
    encode(_: MsgClaimDailyResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgClaimDailyResponse;
    fromPartial(_: Partial<MsgClaimDailyResponse>): MsgClaimDailyResponse;
    fromAmino(_: MsgClaimDailyResponseAmino): MsgClaimDailyResponse;
    toAmino(_: MsgClaimDailyResponse): MsgClaimDailyResponseAmino;
    fromAminoMsg(object: MsgClaimDailyResponseAminoMsg): MsgClaimDailyResponse;
    fromProtoMsg(message: MsgClaimDailyResponseProtoMsg): MsgClaimDailyResponse;
    toProto(message: MsgClaimDailyResponse): Uint8Array;
    toProtoMsg(message: MsgClaimDailyResponse): MsgClaimDailyResponseProtoMsg;
};
export declare const MsgClaimEarly: {
    typeUrl: string;
    encode(message: MsgClaimEarly, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgClaimEarly;
    fromPartial(object: Partial<MsgClaimEarly>): MsgClaimEarly;
    fromAmino(object: MsgClaimEarlyAmino): MsgClaimEarly;
    toAmino(message: MsgClaimEarly): MsgClaimEarlyAmino;
    fromAminoMsg(object: MsgClaimEarlyAminoMsg): MsgClaimEarly;
    toAminoMsg(message: MsgClaimEarly): MsgClaimEarlyAminoMsg;
    fromProtoMsg(message: MsgClaimEarlyProtoMsg): MsgClaimEarly;
    toProto(message: MsgClaimEarly): Uint8Array;
    toProtoMsg(message: MsgClaimEarly): MsgClaimEarlyProtoMsg;
};
export declare const MsgClaimEarlyResponse: {
    typeUrl: string;
    encode(_: MsgClaimEarlyResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgClaimEarlyResponse;
    fromPartial(_: Partial<MsgClaimEarlyResponse>): MsgClaimEarlyResponse;
    fromAmino(_: MsgClaimEarlyResponseAmino): MsgClaimEarlyResponse;
    toAmino(_: MsgClaimEarlyResponse): MsgClaimEarlyResponseAmino;
    fromAminoMsg(object: MsgClaimEarlyResponseAminoMsg): MsgClaimEarlyResponse;
    fromProtoMsg(message: MsgClaimEarlyResponseProtoMsg): MsgClaimEarlyResponse;
    toProto(message: MsgClaimEarlyResponse): Uint8Array;
    toProtoMsg(message: MsgClaimEarlyResponse): MsgClaimEarlyResponseProtoMsg;
};
export declare const MsgCreateAirdrop: {
    typeUrl: string;
    encode(message: MsgCreateAirdrop, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateAirdrop;
    fromPartial(object: Partial<MsgCreateAirdrop>): MsgCreateAirdrop;
    fromAmino(object: MsgCreateAirdropAmino): MsgCreateAirdrop;
    toAmino(message: MsgCreateAirdrop): MsgCreateAirdropAmino;
    fromAminoMsg(object: MsgCreateAirdropAminoMsg): MsgCreateAirdrop;
    toAminoMsg(message: MsgCreateAirdrop): MsgCreateAirdropAminoMsg;
    fromProtoMsg(message: MsgCreateAirdropProtoMsg): MsgCreateAirdrop;
    toProto(message: MsgCreateAirdrop): Uint8Array;
    toProtoMsg(message: MsgCreateAirdrop): MsgCreateAirdropProtoMsg;
};
export declare const MsgCreateAirdropResponse: {
    typeUrl: string;
    encode(_: MsgCreateAirdropResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateAirdropResponse;
    fromPartial(_: Partial<MsgCreateAirdropResponse>): MsgCreateAirdropResponse;
    fromAmino(_: MsgCreateAirdropResponseAmino): MsgCreateAirdropResponse;
    toAmino(_: MsgCreateAirdropResponse): MsgCreateAirdropResponseAmino;
    fromAminoMsg(object: MsgCreateAirdropResponseAminoMsg): MsgCreateAirdropResponse;
    fromProtoMsg(message: MsgCreateAirdropResponseProtoMsg): MsgCreateAirdropResponse;
    toProto(message: MsgCreateAirdropResponse): Uint8Array;
    toProtoMsg(message: MsgCreateAirdropResponse): MsgCreateAirdropResponseProtoMsg;
};
export declare const MsgUpdateAirdrop: {
    typeUrl: string;
    encode(message: MsgUpdateAirdrop, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateAirdrop;
    fromPartial(object: Partial<MsgUpdateAirdrop>): MsgUpdateAirdrop;
    fromAmino(object: MsgUpdateAirdropAmino): MsgUpdateAirdrop;
    toAmino(message: MsgUpdateAirdrop): MsgUpdateAirdropAmino;
    fromAminoMsg(object: MsgUpdateAirdropAminoMsg): MsgUpdateAirdrop;
    toAminoMsg(message: MsgUpdateAirdrop): MsgUpdateAirdropAminoMsg;
    fromProtoMsg(message: MsgUpdateAirdropProtoMsg): MsgUpdateAirdrop;
    toProto(message: MsgUpdateAirdrop): Uint8Array;
    toProtoMsg(message: MsgUpdateAirdrop): MsgUpdateAirdropProtoMsg;
};
export declare const MsgUpdateAirdropResponse: {
    typeUrl: string;
    encode(_: MsgUpdateAirdropResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateAirdropResponse;
    fromPartial(_: Partial<MsgUpdateAirdropResponse>): MsgUpdateAirdropResponse;
    fromAmino(_: MsgUpdateAirdropResponseAmino): MsgUpdateAirdropResponse;
    toAmino(_: MsgUpdateAirdropResponse): MsgUpdateAirdropResponseAmino;
    fromAminoMsg(object: MsgUpdateAirdropResponseAminoMsg): MsgUpdateAirdropResponse;
    fromProtoMsg(message: MsgUpdateAirdropResponseProtoMsg): MsgUpdateAirdropResponse;
    toProto(message: MsgUpdateAirdropResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateAirdropResponse): MsgUpdateAirdropResponseProtoMsg;
};
export declare const RawAllocation: {
    typeUrl: string;
    encode(message: RawAllocation, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RawAllocation;
    fromPartial(object: Partial<RawAllocation>): RawAllocation;
    fromAmino(object: RawAllocationAmino): RawAllocation;
    toAmino(message: RawAllocation): RawAllocationAmino;
    fromAminoMsg(object: RawAllocationAminoMsg): RawAllocation;
    fromProtoMsg(message: RawAllocationProtoMsg): RawAllocation;
    toProto(message: RawAllocation): Uint8Array;
    toProtoMsg(message: RawAllocation): RawAllocationProtoMsg;
};
export declare const MsgAddAllocations: {
    typeUrl: string;
    encode(message: MsgAddAllocations, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgAddAllocations;
    fromPartial(object: Partial<MsgAddAllocations>): MsgAddAllocations;
    fromAmino(object: MsgAddAllocationsAmino): MsgAddAllocations;
    toAmino(message: MsgAddAllocations): MsgAddAllocationsAmino;
    fromAminoMsg(object: MsgAddAllocationsAminoMsg): MsgAddAllocations;
    toAminoMsg(message: MsgAddAllocations): MsgAddAllocationsAminoMsg;
    fromProtoMsg(message: MsgAddAllocationsProtoMsg): MsgAddAllocations;
    toProto(message: MsgAddAllocations): Uint8Array;
    toProtoMsg(message: MsgAddAllocations): MsgAddAllocationsProtoMsg;
};
export declare const MsgAddAllocationsResponse: {
    typeUrl: string;
    encode(_: MsgAddAllocationsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgAddAllocationsResponse;
    fromPartial(_: Partial<MsgAddAllocationsResponse>): MsgAddAllocationsResponse;
    fromAmino(_: MsgAddAllocationsResponseAmino): MsgAddAllocationsResponse;
    toAmino(_: MsgAddAllocationsResponse): MsgAddAllocationsResponseAmino;
    fromAminoMsg(object: MsgAddAllocationsResponseAminoMsg): MsgAddAllocationsResponse;
    fromProtoMsg(message: MsgAddAllocationsResponseProtoMsg): MsgAddAllocationsResponse;
    toProto(message: MsgAddAllocationsResponse): Uint8Array;
    toProtoMsg(message: MsgAddAllocationsResponse): MsgAddAllocationsResponseProtoMsg;
};
export declare const MsgUpdateUserAllocation: {
    typeUrl: string;
    encode(message: MsgUpdateUserAllocation, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateUserAllocation;
    fromPartial(object: Partial<MsgUpdateUserAllocation>): MsgUpdateUserAllocation;
    fromAmino(object: MsgUpdateUserAllocationAmino): MsgUpdateUserAllocation;
    toAmino(message: MsgUpdateUserAllocation): MsgUpdateUserAllocationAmino;
    fromAminoMsg(object: MsgUpdateUserAllocationAminoMsg): MsgUpdateUserAllocation;
    toAminoMsg(message: MsgUpdateUserAllocation): MsgUpdateUserAllocationAminoMsg;
    fromProtoMsg(message: MsgUpdateUserAllocationProtoMsg): MsgUpdateUserAllocation;
    toProto(message: MsgUpdateUserAllocation): Uint8Array;
    toProtoMsg(message: MsgUpdateUserAllocation): MsgUpdateUserAllocationProtoMsg;
};
export declare const MsgUpdateUserAllocationResponse: {
    typeUrl: string;
    encode(_: MsgUpdateUserAllocationResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateUserAllocationResponse;
    fromPartial(_: Partial<MsgUpdateUserAllocationResponse>): MsgUpdateUserAllocationResponse;
    fromAmino(_: MsgUpdateUserAllocationResponseAmino): MsgUpdateUserAllocationResponse;
    toAmino(_: MsgUpdateUserAllocationResponse): MsgUpdateUserAllocationResponseAmino;
    fromAminoMsg(object: MsgUpdateUserAllocationResponseAminoMsg): MsgUpdateUserAllocationResponse;
    fromProtoMsg(message: MsgUpdateUserAllocationResponseProtoMsg): MsgUpdateUserAllocationResponse;
    toProto(message: MsgUpdateUserAllocationResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateUserAllocationResponse): MsgUpdateUserAllocationResponseProtoMsg;
};
export declare const MsgLinkAddresses: {
    typeUrl: string;
    encode(message: MsgLinkAddresses, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgLinkAddresses;
    fromPartial(object: Partial<MsgLinkAddresses>): MsgLinkAddresses;
    fromAmino(object: MsgLinkAddressesAmino): MsgLinkAddresses;
    toAmino(message: MsgLinkAddresses): MsgLinkAddressesAmino;
    fromAminoMsg(object: MsgLinkAddressesAminoMsg): MsgLinkAddresses;
    toAminoMsg(message: MsgLinkAddresses): MsgLinkAddressesAminoMsg;
    fromProtoMsg(message: MsgLinkAddressesProtoMsg): MsgLinkAddresses;
    toProto(message: MsgLinkAddresses): Uint8Array;
    toProtoMsg(message: MsgLinkAddresses): MsgLinkAddressesProtoMsg;
};
export declare const MsgLinkAddressesResponse: {
    typeUrl: string;
    encode(_: MsgLinkAddressesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgLinkAddressesResponse;
    fromPartial(_: Partial<MsgLinkAddressesResponse>): MsgLinkAddressesResponse;
    fromAmino(_: MsgLinkAddressesResponseAmino): MsgLinkAddressesResponse;
    toAmino(_: MsgLinkAddressesResponse): MsgLinkAddressesResponseAmino;
    fromAminoMsg(object: MsgLinkAddressesResponseAminoMsg): MsgLinkAddressesResponse;
    fromProtoMsg(message: MsgLinkAddressesResponseProtoMsg): MsgLinkAddressesResponse;
    toProto(message: MsgLinkAddressesResponse): Uint8Array;
    toProtoMsg(message: MsgLinkAddressesResponse): MsgLinkAddressesResponseProtoMsg;
};
