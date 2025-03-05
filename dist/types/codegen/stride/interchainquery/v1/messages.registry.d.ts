import { TelescopeGeneratedType } from "../../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgSubmitQueryResponse } from "./messages";
export declare const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        submitQueryResponse(value: MsgSubmitQueryResponse): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        submitQueryResponse(value: MsgSubmitQueryResponse): {
            typeUrl: string;
            value: MsgSubmitQueryResponse;
        };
    };
    fromPartial: {
        submitQueryResponse(value: MsgSubmitQueryResponse): {
            typeUrl: string;
            value: MsgSubmitQueryResponse;
        };
    };
};
