import { TelescopeGeneratedType } from "../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgClaimDaily, MsgClaimEarly, MsgCreateAirdrop, MsgUpdateAirdrop, MsgAddAllocations, MsgUpdateUserAllocation, MsgLinkAddresses } from "./tx";
export declare const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        claimDaily(value: MsgClaimDaily): {
            typeUrl: string;
            value: Uint8Array;
        };
        claimEarly(value: MsgClaimEarly): {
            typeUrl: string;
            value: Uint8Array;
        };
        createAirdrop(value: MsgCreateAirdrop): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateAirdrop(value: MsgUpdateAirdrop): {
            typeUrl: string;
            value: Uint8Array;
        };
        addAllocations(value: MsgAddAllocations): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateUserAllocation(value: MsgUpdateUserAllocation): {
            typeUrl: string;
            value: Uint8Array;
        };
        linkAddresses(value: MsgLinkAddresses): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        claimDaily(value: MsgClaimDaily): {
            typeUrl: string;
            value: MsgClaimDaily;
        };
        claimEarly(value: MsgClaimEarly): {
            typeUrl: string;
            value: MsgClaimEarly;
        };
        createAirdrop(value: MsgCreateAirdrop): {
            typeUrl: string;
            value: MsgCreateAirdrop;
        };
        updateAirdrop(value: MsgUpdateAirdrop): {
            typeUrl: string;
            value: MsgUpdateAirdrop;
        };
        addAllocations(value: MsgAddAllocations): {
            typeUrl: string;
            value: MsgAddAllocations;
        };
        updateUserAllocation(value: MsgUpdateUserAllocation): {
            typeUrl: string;
            value: MsgUpdateUserAllocation;
        };
        linkAddresses(value: MsgLinkAddresses): {
            typeUrl: string;
            value: MsgLinkAddresses;
        };
    };
    fromPartial: {
        claimDaily(value: MsgClaimDaily): {
            typeUrl: string;
            value: MsgClaimDaily;
        };
        claimEarly(value: MsgClaimEarly): {
            typeUrl: string;
            value: MsgClaimEarly;
        };
        createAirdrop(value: MsgCreateAirdrop): {
            typeUrl: string;
            value: MsgCreateAirdrop;
        };
        updateAirdrop(value: MsgUpdateAirdrop): {
            typeUrl: string;
            value: MsgUpdateAirdrop;
        };
        addAllocations(value: MsgAddAllocations): {
            typeUrl: string;
            value: MsgAddAllocations;
        };
        updateUserAllocation(value: MsgUpdateUserAllocation): {
            typeUrl: string;
            value: MsgUpdateUserAllocation;
        };
        linkAddresses(value: MsgLinkAddresses): {
            typeUrl: string;
            value: MsgLinkAddresses;
        };
    };
};
