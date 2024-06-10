import { AminoMsg } from "@cosmjs/amino";
import { MsgAddOracle, MsgInstantiateOracle, MsgRestoreOracleICA, MsgToggleOracle, MsgRemoveOracle } from "./tx";
export interface AminoMsgAddOracle extends AminoMsg {
    type: "/stride.icaoracle.MsgAddOracle";
    value: {
        creator: string;
        connection_id: string;
    };
}
export interface AminoMsgInstantiateOracle extends AminoMsg {
    type: "/stride.icaoracle.MsgInstantiateOracle";
    value: {
        creator: string;
        oracle_chain_id: string;
        contract_code_id: string;
        transfer_channel_on_oracle: string;
    };
}
export interface AminoMsgRestoreOracleICA extends AminoMsg {
    type: "/stride.icaoracle.MsgRestoreOracleICA";
    value: {
        creator: string;
        oracle_chain_id: string;
    };
}
export interface AminoMsgToggleOracle extends AminoMsg {
    type: "/stride.icaoracle.MsgToggleOracle";
    value: {
        authority: string;
        oracle_chain_id: string;
        active: boolean;
    };
}
export interface AminoMsgRemoveOracle extends AminoMsg {
    type: "/stride.icaoracle.MsgRemoveOracle";
    value: {
        authority: string;
        oracle_chain_id: string;
    };
}
export declare const AminoConverter: {
    "/stride.icaoracle.MsgAddOracle": {
        aminoType: string;
        toAmino: ({ creator, connectionId }: MsgAddOracle) => AminoMsgAddOracle["value"];
        fromAmino: ({ creator, connection_id }: AminoMsgAddOracle["value"]) => MsgAddOracle;
    };
    "/stride.icaoracle.MsgInstantiateOracle": {
        aminoType: string;
        toAmino: ({ creator, oracleChainId, contractCodeId, transferChannelOnOracle }: MsgInstantiateOracle) => AminoMsgInstantiateOracle["value"];
        fromAmino: ({ creator, oracle_chain_id, contract_code_id, transfer_channel_on_oracle }: AminoMsgInstantiateOracle["value"]) => MsgInstantiateOracle;
    };
    "/stride.icaoracle.MsgRestoreOracleICA": {
        aminoType: string;
        toAmino: ({ creator, oracleChainId }: MsgRestoreOracleICA) => AminoMsgRestoreOracleICA["value"];
        fromAmino: ({ creator, oracle_chain_id }: AminoMsgRestoreOracleICA["value"]) => MsgRestoreOracleICA;
    };
    "/stride.icaoracle.MsgToggleOracle": {
        aminoType: string;
        toAmino: ({ authority, oracleChainId, active }: MsgToggleOracle) => AminoMsgToggleOracle["value"];
        fromAmino: ({ authority, oracle_chain_id, active }: AminoMsgToggleOracle["value"]) => MsgToggleOracle;
    };
    "/stride.icaoracle.MsgRemoveOracle": {
        aminoType: string;
        toAmino: ({ authority, oracleChainId }: MsgRemoveOracle) => AminoMsgRemoveOracle["value"];
        fromAmino: ({ authority, oracle_chain_id }: AminoMsgRemoveOracle["value"]) => MsgRemoveOracle;
    };
};
