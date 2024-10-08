import { TelescopeGeneratedType } from "../../../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgTransfer } from "./tx";
export declare const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        transfer(value: MsgTransfer): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        transfer(value: MsgTransfer): {
            typeUrl: string;
            value: MsgTransfer;
        };
    };
    fromPartial: {
        transfer(value: MsgTransfer): {
            typeUrl: string;
            value: MsgTransfer;
        };
    };
};
