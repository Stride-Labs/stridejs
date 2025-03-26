import { MsgAddOracle, MsgInstantiateOracle, MsgRestoreOracleICA, MsgToggleOracle, MsgRemoveOracle } from "./tx";
const AminoConverter = {
  "/stride.icaoracle.MsgAddOracle": {
    aminoType: "icaoracle/MsgAddOracle",
    toAmino: MsgAddOracle.toAmino,
    fromAmino: MsgAddOracle.fromAmino
  },
  "/stride.icaoracle.MsgInstantiateOracle": {
    aminoType: "icaoracle/MsgInstantiateOracle",
    toAmino: MsgInstantiateOracle.toAmino,
    fromAmino: MsgInstantiateOracle.fromAmino
  },
  "/stride.icaoracle.MsgRestoreOracleICA": {
    aminoType: "icaoracle/MsgRestoreOracleICA",
    toAmino: MsgRestoreOracleICA.toAmino,
    fromAmino: MsgRestoreOracleICA.fromAmino
  },
  "/stride.icaoracle.MsgToggleOracle": {
    aminoType: "icaoracle/MsgToggleOracle",
    toAmino: MsgToggleOracle.toAmino,
    fromAmino: MsgToggleOracle.fromAmino
  },
  "/stride.icaoracle.MsgRemoveOracle": {
    aminoType: "icaoracle/MsgRemoveOracle",
    toAmino: MsgRemoveOracle.toAmino,
    fromAmino: MsgRemoveOracle.fromAmino
  }
};
export {
  AminoConverter
};
