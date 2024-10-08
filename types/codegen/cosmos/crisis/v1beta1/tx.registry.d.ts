import { TelescopeGeneratedType } from "../../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgVerifyInvariant } from "./tx";
export declare const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        verifyInvariant(value: MsgVerifyInvariant): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        verifyInvariant(value: MsgVerifyInvariant): {
            typeUrl: string;
            value: MsgVerifyInvariant;
        };
    };
    fromPartial: {
        verifyInvariant(value: MsgVerifyInvariant): {
            typeUrl: string;
            value: MsgVerifyInvariant;
        };
    };
};
