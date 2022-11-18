import { AminoMsg } from "@cosmjs/amino";
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
export declare const AminoConverter: {
    "/Stridelabs.stride.claim.v1beta1.MsgSetAirdropAllocations": {
        aminoType: string;
        toAmino: ({ allocator, airdropIdentifier, users, weights }: MsgSetAirdropAllocations) => AminoMsgSetAirdropAllocations["value"];
        fromAmino: ({ allocator, airdrop_identifier, users, weights }: AminoMsgSetAirdropAllocations["value"]) => MsgSetAirdropAllocations;
    };
    "/Stridelabs.stride.claim.v1beta1.MsgClaimFreeAmount": {
        aminoType: string;
        toAmino: ({ user, airdropIdentifier }: MsgClaimFreeAmount) => AminoMsgClaimFreeAmount["value"];
        fromAmino: ({ user, airdrop_identifier }: AminoMsgClaimFreeAmount["value"]) => MsgClaimFreeAmount;
    };
    "/Stridelabs.stride.claim.v1beta1.MsgCreateAirdrop": {
        aminoType: string;
        toAmino: ({ distributor, identifier, startTime, duration, denom }: MsgCreateAirdrop) => AminoMsgCreateAirdrop["value"];
        fromAmino: ({ distributor, identifier, start_time, duration, denom }: AminoMsgCreateAirdrop["value"]) => MsgCreateAirdrop;
    };
    "/Stridelabs.stride.claim.v1beta1.MsgDeleteAirdrop": {
        aminoType: string;
        toAmino: ({ distributor, identifier }: MsgDeleteAirdrop) => AminoMsgDeleteAirdrop["value"];
        fromAmino: ({ distributor, identifier }: AminoMsgDeleteAirdrop["value"]) => MsgDeleteAirdrop;
    };
};
