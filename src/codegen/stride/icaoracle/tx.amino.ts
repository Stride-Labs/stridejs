import { MsgAddOracle, MsgInstantiateOracle, MsgRestoreOracleICA, MsgToggleOracle, MsgRemoveOracle } from "./tx";
export const AminoConverter = {
  "/stride.icaoracle.MsgAddOracle": {
    aminoType: "stride/x/icaoracle/MsgAddOracle",
    toAmino: MsgAddOracle.toAmino,
    fromAmino: MsgAddOracle.fromAmino
  },
  "/stride.icaoracle.MsgInstantiateOracle": {
    aminoType: "stride/x/icaoracle/MsgInstantiateOracle",
    toAmino: MsgInstantiateOracle.toAmino,
    fromAmino: MsgInstantiateOracle.fromAmino
  },
  "/stride.icaoracle.MsgRestoreOracleICA": {
    aminoType: "stride/x/icaoracle/MsgRestoreOracleICA",
    toAmino: MsgRestoreOracleICA.toAmino,
    fromAmino: MsgRestoreOracleICA.fromAmino
  },
  "/stride.icaoracle.MsgToggleOracle": {
    aminoType: "stride/x/icaoracle/MsgToggleOracle",
    toAmino: MsgToggleOracle.toAmino,
    fromAmino: MsgToggleOracle.fromAmino
  },
  "/stride.icaoracle.MsgRemoveOracle": {
    aminoType: "stride/x/icaoracle/MsgRemoveOracle",
    toAmino: MsgRemoveOracle.toAmino,
    fromAmino: MsgRemoveOracle.fromAmino
  }
};