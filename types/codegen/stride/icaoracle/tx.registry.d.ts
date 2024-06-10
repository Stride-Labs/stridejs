import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgAddOracle, MsgInstantiateOracle, MsgRestoreOracleICA, MsgToggleOracle, MsgRemoveOracle } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        addOracle(value: MsgAddOracle): {
            typeUrl: string;
            value: Uint8Array;
        };
        instantiateOracle(value: MsgInstantiateOracle): {
            typeUrl: string;
            value: Uint8Array;
        };
        restoreOracleICA(value: MsgRestoreOracleICA): {
            typeUrl: string;
            value: Uint8Array;
        };
        toggleOracle(value: MsgToggleOracle): {
            typeUrl: string;
            value: Uint8Array;
        };
        removeOracle(value: MsgRemoveOracle): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        addOracle(value: MsgAddOracle): {
            typeUrl: string;
            value: MsgAddOracle;
        };
        instantiateOracle(value: MsgInstantiateOracle): {
            typeUrl: string;
            value: MsgInstantiateOracle;
        };
        restoreOracleICA(value: MsgRestoreOracleICA): {
            typeUrl: string;
            value: MsgRestoreOracleICA;
        };
        toggleOracle(value: MsgToggleOracle): {
            typeUrl: string;
            value: MsgToggleOracle;
        };
        removeOracle(value: MsgRemoveOracle): {
            typeUrl: string;
            value: MsgRemoveOracle;
        };
    };
    fromPartial: {
        addOracle(value: MsgAddOracle): {
            typeUrl: string;
            value: MsgAddOracle;
        };
        instantiateOracle(value: MsgInstantiateOracle): {
            typeUrl: string;
            value: MsgInstantiateOracle;
        };
        restoreOracleICA(value: MsgRestoreOracleICA): {
            typeUrl: string;
            value: MsgRestoreOracleICA;
        };
        toggleOracle(value: MsgToggleOracle): {
            typeUrl: string;
            value: MsgToggleOracle;
        };
        removeOracle(value: MsgRemoveOracle): {
            typeUrl: string;
            value: MsgRemoveOracle;
        };
    };
};
