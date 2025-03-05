import { MsgAddOracle, MsgInstantiateOracle, MsgRestoreOracleICA, MsgToggleOracle, MsgRemoveOracle } from "./tx";
const registry = [["/stride.icaoracle.MsgAddOracle", MsgAddOracle], ["/stride.icaoracle.MsgInstantiateOracle", MsgInstantiateOracle], ["/stride.icaoracle.MsgRestoreOracleICA", MsgRestoreOracleICA], ["/stride.icaoracle.MsgToggleOracle", MsgToggleOracle], ["/stride.icaoracle.MsgRemoveOracle", MsgRemoveOracle]];
const load = (protoRegistry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
const MessageComposer = {
  encoded: {
    addOracle(value) {
      return {
        typeUrl: "/stride.icaoracle.MsgAddOracle",
        value: MsgAddOracle.encode(value).finish()
      };
    },
    instantiateOracle(value) {
      return {
        typeUrl: "/stride.icaoracle.MsgInstantiateOracle",
        value: MsgInstantiateOracle.encode(value).finish()
      };
    },
    restoreOracleICA(value) {
      return {
        typeUrl: "/stride.icaoracle.MsgRestoreOracleICA",
        value: MsgRestoreOracleICA.encode(value).finish()
      };
    },
    toggleOracle(value) {
      return {
        typeUrl: "/stride.icaoracle.MsgToggleOracle",
        value: MsgToggleOracle.encode(value).finish()
      };
    },
    removeOracle(value) {
      return {
        typeUrl: "/stride.icaoracle.MsgRemoveOracle",
        value: MsgRemoveOracle.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    addOracle(value) {
      return {
        typeUrl: "/stride.icaoracle.MsgAddOracle",
        value
      };
    },
    instantiateOracle(value) {
      return {
        typeUrl: "/stride.icaoracle.MsgInstantiateOracle",
        value
      };
    },
    restoreOracleICA(value) {
      return {
        typeUrl: "/stride.icaoracle.MsgRestoreOracleICA",
        value
      };
    },
    toggleOracle(value) {
      return {
        typeUrl: "/stride.icaoracle.MsgToggleOracle",
        value
      };
    },
    removeOracle(value) {
      return {
        typeUrl: "/stride.icaoracle.MsgRemoveOracle",
        value
      };
    }
  },
  fromPartial: {
    addOracle(value) {
      return {
        typeUrl: "/stride.icaoracle.MsgAddOracle",
        value: MsgAddOracle.fromPartial(value)
      };
    },
    instantiateOracle(value) {
      return {
        typeUrl: "/stride.icaoracle.MsgInstantiateOracle",
        value: MsgInstantiateOracle.fromPartial(value)
      };
    },
    restoreOracleICA(value) {
      return {
        typeUrl: "/stride.icaoracle.MsgRestoreOracleICA",
        value: MsgRestoreOracleICA.fromPartial(value)
      };
    },
    toggleOracle(value) {
      return {
        typeUrl: "/stride.icaoracle.MsgToggleOracle",
        value: MsgToggleOracle.fromPartial(value)
      };
    },
    removeOracle(value) {
      return {
        typeUrl: "/stride.icaoracle.MsgRemoveOracle",
        value: MsgRemoveOracle.fromPartial(value)
      };
    }
  }
};
export {
  MessageComposer,
  load,
  registry
};
