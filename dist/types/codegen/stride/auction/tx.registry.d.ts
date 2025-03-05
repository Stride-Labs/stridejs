import { TelescopeGeneratedType } from "../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgPlaceBid, MsgCreateAuction, MsgUpdateAuction } from "./tx";
export declare const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        placeBid(value: MsgPlaceBid): {
            typeUrl: string;
            value: Uint8Array;
        };
        createAuction(value: MsgCreateAuction): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateAuction(value: MsgUpdateAuction): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        placeBid(value: MsgPlaceBid): {
            typeUrl: string;
            value: MsgPlaceBid;
        };
        createAuction(value: MsgCreateAuction): {
            typeUrl: string;
            value: MsgCreateAuction;
        };
        updateAuction(value: MsgUpdateAuction): {
            typeUrl: string;
            value: MsgUpdateAuction;
        };
    };
    fromPartial: {
        placeBid(value: MsgPlaceBid): {
            typeUrl: string;
            value: MsgPlaceBid;
        };
        createAuction(value: MsgCreateAuction): {
            typeUrl: string;
            value: MsgCreateAuction;
        };
        updateAuction(value: MsgUpdateAuction): {
            typeUrl: string;
            value: MsgUpdateAuction;
        };
    };
};
