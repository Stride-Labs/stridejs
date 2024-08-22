import { TelescopeGeneratedType } from "../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgAddOracle, MsgInstantiateOracle, MsgRestoreOracleICA, MsgToggleOracle, MsgRemoveOracle } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/stride.icaoracle.MsgAddOracle", MsgAddOracle], ["/stride.icaoracle.MsgInstantiateOracle", MsgInstantiateOracle], ["/stride.icaoracle.MsgRestoreOracleICA", MsgRestoreOracleICA], ["/stride.icaoracle.MsgToggleOracle", MsgToggleOracle], ["/stride.icaoracle.MsgRemoveOracle", MsgRemoveOracle]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    addOracle(value: MsgAddOracle) {
      return {
        typeUrl: "/stride.icaoracle.MsgAddOracle",
        value: MsgAddOracle.encode(value).finish()
      };
    },
    instantiateOracle(value: MsgInstantiateOracle) {
      return {
        typeUrl: "/stride.icaoracle.MsgInstantiateOracle",
        value: MsgInstantiateOracle.encode(value).finish()
      };
    },
    restoreOracleICA(value: MsgRestoreOracleICA) {
      return {
        typeUrl: "/stride.icaoracle.MsgRestoreOracleICA",
        value: MsgRestoreOracleICA.encode(value).finish()
      };
    },
    toggleOracle(value: MsgToggleOracle) {
      return {
        typeUrl: "/stride.icaoracle.MsgToggleOracle",
        value: MsgToggleOracle.encode(value).finish()
      };
    },
    removeOracle(value: MsgRemoveOracle) {
      return {
        typeUrl: "/stride.icaoracle.MsgRemoveOracle",
        value: MsgRemoveOracle.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    addOracle(value: MsgAddOracle) {
      return {
        typeUrl: "/stride.icaoracle.MsgAddOracle",
        value
      };
    },
    instantiateOracle(value: MsgInstantiateOracle) {
      return {
        typeUrl: "/stride.icaoracle.MsgInstantiateOracle",
        value
      };
    },
    restoreOracleICA(value: MsgRestoreOracleICA) {
      return {
        typeUrl: "/stride.icaoracle.MsgRestoreOracleICA",
        value
      };
    },
    toggleOracle(value: MsgToggleOracle) {
      return {
        typeUrl: "/stride.icaoracle.MsgToggleOracle",
        value
      };
    },
    removeOracle(value: MsgRemoveOracle) {
      return {
        typeUrl: "/stride.icaoracle.MsgRemoveOracle",
        value
      };
    }
  },
  fromPartial: {
    addOracle(value: MsgAddOracle) {
      return {
        typeUrl: "/stride.icaoracle.MsgAddOracle",
        value: MsgAddOracle.fromPartial(value)
      };
    },
    instantiateOracle(value: MsgInstantiateOracle) {
      return {
        typeUrl: "/stride.icaoracle.MsgInstantiateOracle",
        value: MsgInstantiateOracle.fromPartial(value)
      };
    },
    restoreOracleICA(value: MsgRestoreOracleICA) {
      return {
        typeUrl: "/stride.icaoracle.MsgRestoreOracleICA",
        value: MsgRestoreOracleICA.fromPartial(value)
      };
    },
    toggleOracle(value: MsgToggleOracle) {
      return {
        typeUrl: "/stride.icaoracle.MsgToggleOracle",
        value: MsgToggleOracle.fromPartial(value)
      };
    },
    removeOracle(value: MsgRemoveOracle) {
      return {
        typeUrl: "/stride.icaoracle.MsgRemoveOracle",
        value: MsgRemoveOracle.fromPartial(value)
      };
    }
  }
};