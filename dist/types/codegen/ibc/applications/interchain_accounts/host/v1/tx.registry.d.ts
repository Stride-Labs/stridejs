import { TelescopeGeneratedType } from "../../../../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgModuleQuerySafe } from "./tx";
export declare const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        moduleQuerySafe(value: MsgModuleQuerySafe): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        moduleQuerySafe(value: MsgModuleQuerySafe): {
            typeUrl: string;
            value: MsgModuleQuerySafe;
        };
    };
    fromPartial: {
        moduleQuerySafe(value: MsgModuleQuerySafe): {
            typeUrl: string;
            value: MsgModuleQuerySafe;
        };
    };
};
