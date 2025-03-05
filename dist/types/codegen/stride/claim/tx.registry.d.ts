import { TelescopeGeneratedType } from "../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgSetAirdropAllocations, MsgClaimFreeAmount, MsgCreateAirdrop, MsgDeleteAirdrop } from "./tx";
export declare const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        setAirdropAllocations(value: MsgSetAirdropAllocations): {
            typeUrl: string;
            value: Uint8Array;
        };
        claimFreeAmount(value: MsgClaimFreeAmount): {
            typeUrl: string;
            value: Uint8Array;
        };
        createAirdrop(value: MsgCreateAirdrop): {
            typeUrl: string;
            value: Uint8Array;
        };
        deleteAirdrop(value: MsgDeleteAirdrop): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        setAirdropAllocations(value: MsgSetAirdropAllocations): {
            typeUrl: string;
            value: MsgSetAirdropAllocations;
        };
        claimFreeAmount(value: MsgClaimFreeAmount): {
            typeUrl: string;
            value: MsgClaimFreeAmount;
        };
        createAirdrop(value: MsgCreateAirdrop): {
            typeUrl: string;
            value: MsgCreateAirdrop;
        };
        deleteAirdrop(value: MsgDeleteAirdrop): {
            typeUrl: string;
            value: MsgDeleteAirdrop;
        };
    };
    fromPartial: {
        setAirdropAllocations(value: MsgSetAirdropAllocations): {
            typeUrl: string;
            value: MsgSetAirdropAllocations;
        };
        claimFreeAmount(value: MsgClaimFreeAmount): {
            typeUrl: string;
            value: MsgClaimFreeAmount;
        };
        createAirdrop(value: MsgCreateAirdrop): {
            typeUrl: string;
            value: MsgCreateAirdrop;
        };
        deleteAirdrop(value: MsgDeleteAirdrop): {
            typeUrl: string;
            value: MsgDeleteAirdrop;
        };
    };
};
