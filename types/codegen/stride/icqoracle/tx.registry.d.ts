import { TelescopeGeneratedType } from "../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgRegisterTokenPriceQuery, MsgRemoveTokenPriceQuery } from "./tx";
export declare const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        registerTokenPriceQuery(value: MsgRegisterTokenPriceQuery): {
            typeUrl: string;
            value: Uint8Array;
        };
        removeTokenPriceQuery(value: MsgRemoveTokenPriceQuery): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        registerTokenPriceQuery(value: MsgRegisterTokenPriceQuery): {
            typeUrl: string;
            value: MsgRegisterTokenPriceQuery;
        };
        removeTokenPriceQuery(value: MsgRemoveTokenPriceQuery): {
            typeUrl: string;
            value: MsgRemoveTokenPriceQuery;
        };
    };
    fromPartial: {
        registerTokenPriceQuery(value: MsgRegisterTokenPriceQuery): {
            typeUrl: string;
            value: MsgRegisterTokenPriceQuery;
        };
        removeTokenPriceQuery(value: MsgRemoveTokenPriceQuery): {
            typeUrl: string;
            value: MsgRemoveTokenPriceQuery;
        };
    };
};
