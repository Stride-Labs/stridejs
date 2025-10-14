import { TelescopeGeneratedType } from "../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgBurn, MsgLink } from "./tx";
export declare const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        burn(value: MsgBurn): {
            typeUrl: string;
            value: Uint8Array;
        };
        link(value: MsgLink): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        burn(value: MsgBurn): {
            typeUrl: string;
            value: MsgBurn;
        };
        link(value: MsgLink): {
            typeUrl: string;
            value: MsgLink;
        };
    };
    fromPartial: {
        burn(value: MsgBurn): {
            typeUrl: string;
            value: MsgBurn;
        };
        link(value: MsgLink): {
            typeUrl: string;
            value: MsgLink;
        };
    };
};
