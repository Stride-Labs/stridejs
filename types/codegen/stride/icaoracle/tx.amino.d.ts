import { MsgAddOracle, MsgInstantiateOracle, MsgRestoreOracleICA, MsgToggleOracle, MsgRemoveOracle } from "./tx";
export declare const AminoConverter: {
    "/stride.icaoracle.MsgAddOracle": {
        aminoType: string;
        toAmino: (message: MsgAddOracle) => import("./tx").MsgAddOracleAmino;
        fromAmino: (object: import("./tx").MsgAddOracleAmino) => MsgAddOracle;
    };
    "/stride.icaoracle.MsgInstantiateOracle": {
        aminoType: string;
        toAmino: (message: MsgInstantiateOracle) => import("./tx").MsgInstantiateOracleAmino;
        fromAmino: (object: import("./tx").MsgInstantiateOracleAmino) => MsgInstantiateOracle;
    };
    "/stride.icaoracle.MsgRestoreOracleICA": {
        aminoType: string;
        toAmino: (message: MsgRestoreOracleICA) => import("./tx").MsgRestoreOracleICAAmino;
        fromAmino: (object: import("./tx").MsgRestoreOracleICAAmino) => MsgRestoreOracleICA;
    };
    "/stride.icaoracle.MsgToggleOracle": {
        aminoType: string;
        toAmino: (message: MsgToggleOracle) => import("./tx").MsgToggleOracleAmino;
        fromAmino: (object: import("./tx").MsgToggleOracleAmino) => MsgToggleOracle;
    };
    "/stride.icaoracle.MsgRemoveOracle": {
        aminoType: string;
        toAmino: (message: MsgRemoveOracle) => import("./tx").MsgRemoveOracleAmino;
        fromAmino: (object: import("./tx").MsgRemoveOracleAmino) => MsgRemoveOracle;
    };
};
