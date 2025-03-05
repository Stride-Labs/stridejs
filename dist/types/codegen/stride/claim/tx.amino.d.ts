import { MsgSetAirdropAllocations, MsgClaimFreeAmount, MsgCreateAirdrop, MsgDeleteAirdrop } from "./tx";
export declare const AminoConverter: {
    "/stride.claim.MsgSetAirdropAllocations": {
        aminoType: string;
        toAmino: (message: MsgSetAirdropAllocations) => import("./tx").MsgSetAirdropAllocationsAmino;
        fromAmino: (object: import("./tx").MsgSetAirdropAllocationsAmino) => MsgSetAirdropAllocations;
    };
    "/stride.claim.MsgClaimFreeAmount": {
        aminoType: string;
        toAmino: (message: MsgClaimFreeAmount) => import("./tx").MsgClaimFreeAmountAmino;
        fromAmino: (object: import("./tx").MsgClaimFreeAmountAmino) => MsgClaimFreeAmount;
    };
    "/stride.claim.MsgCreateAirdrop": {
        aminoType: string;
        toAmino: (message: MsgCreateAirdrop) => import("./tx").MsgCreateAirdropAmino;
        fromAmino: (object: import("./tx").MsgCreateAirdropAmino) => MsgCreateAirdrop;
    };
    "/stride.claim.MsgDeleteAirdrop": {
        aminoType: string;
        toAmino: (message: MsgDeleteAirdrop) => import("./tx").MsgDeleteAirdropAmino;
        fromAmino: (object: import("./tx").MsgDeleteAirdropAmino) => MsgDeleteAirdrop;
    };
};
