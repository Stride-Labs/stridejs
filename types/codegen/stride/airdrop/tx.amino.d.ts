import { MsgClaimDaily, MsgClaimEarly, MsgCreateAirdrop, MsgUpdateAirdrop, MsgAddAllocations, MsgUpdateUserAllocation, MsgLinkAddresses } from "./tx";
export declare const AminoConverter: {
    "/stride.airdrop.MsgClaimDaily": {
        aminoType: string;
        toAmino: (message: MsgClaimDaily) => import("./tx").MsgClaimDailyAmino;
        fromAmino: (object: import("./tx").MsgClaimDailyAmino) => MsgClaimDaily;
    };
    "/stride.airdrop.MsgClaimEarly": {
        aminoType: string;
        toAmino: (message: MsgClaimEarly) => import("./tx").MsgClaimEarlyAmino;
        fromAmino: (object: import("./tx").MsgClaimEarlyAmino) => MsgClaimEarly;
    };
    "/stride.airdrop.MsgCreateAirdrop": {
        aminoType: string;
        toAmino: (message: MsgCreateAirdrop) => import("./tx").MsgCreateAirdropAmino;
        fromAmino: (object: import("./tx").MsgCreateAirdropAmino) => MsgCreateAirdrop;
    };
    "/stride.airdrop.MsgUpdateAirdrop": {
        aminoType: string;
        toAmino: (message: MsgUpdateAirdrop) => import("./tx").MsgUpdateAirdropAmino;
        fromAmino: (object: import("./tx").MsgUpdateAirdropAmino) => MsgUpdateAirdrop;
    };
    "/stride.airdrop.MsgAddAllocations": {
        aminoType: string;
        toAmino: (message: MsgAddAllocations) => import("./tx").MsgAddAllocationsAmino;
        fromAmino: (object: import("./tx").MsgAddAllocationsAmino) => MsgAddAllocations;
    };
    "/stride.airdrop.MsgUpdateUserAllocation": {
        aminoType: string;
        toAmino: (message: MsgUpdateUserAllocation) => import("./tx").MsgUpdateUserAllocationAmino;
        fromAmino: (object: import("./tx").MsgUpdateUserAllocationAmino) => MsgUpdateUserAllocation;
    };
    "/stride.airdrop.MsgLinkAddresses": {
        aminoType: string;
        toAmino: (message: MsgLinkAddresses) => import("./tx").MsgLinkAddressesAmino;
        fromAmino: (object: import("./tx").MsgLinkAddressesAmino) => MsgLinkAddresses;
    };
};
