import { MsgStoreCode, MsgRemoveChecksum, MsgMigrateContract } from "./tx";
const registry = [["/ibc.lightclients.wasm.v1.MsgStoreCode", MsgStoreCode], ["/ibc.lightclients.wasm.v1.MsgRemoveChecksum", MsgRemoveChecksum], ["/ibc.lightclients.wasm.v1.MsgMigrateContract", MsgMigrateContract]];
const load = (protoRegistry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
const MessageComposer = {
  encoded: {
    storeCode(value) {
      return {
        typeUrl: "/ibc.lightclients.wasm.v1.MsgStoreCode",
        value: MsgStoreCode.encode(value).finish()
      };
    },
    removeChecksum(value) {
      return {
        typeUrl: "/ibc.lightclients.wasm.v1.MsgRemoveChecksum",
        value: MsgRemoveChecksum.encode(value).finish()
      };
    },
    migrateContract(value) {
      return {
        typeUrl: "/ibc.lightclients.wasm.v1.MsgMigrateContract",
        value: MsgMigrateContract.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    storeCode(value) {
      return {
        typeUrl: "/ibc.lightclients.wasm.v1.MsgStoreCode",
        value
      };
    },
    removeChecksum(value) {
      return {
        typeUrl: "/ibc.lightclients.wasm.v1.MsgRemoveChecksum",
        value
      };
    },
    migrateContract(value) {
      return {
        typeUrl: "/ibc.lightclients.wasm.v1.MsgMigrateContract",
        value
      };
    }
  },
  fromPartial: {
    storeCode(value) {
      return {
        typeUrl: "/ibc.lightclients.wasm.v1.MsgStoreCode",
        value: MsgStoreCode.fromPartial(value)
      };
    },
    removeChecksum(value) {
      return {
        typeUrl: "/ibc.lightclients.wasm.v1.MsgRemoveChecksum",
        value: MsgRemoveChecksum.fromPartial(value)
      };
    },
    migrateContract(value) {
      return {
        typeUrl: "/ibc.lightclients.wasm.v1.MsgMigrateContract",
        value: MsgMigrateContract.fromPartial(value)
      };
    }
  }
};
export {
  MessageComposer,
  load,
  registry
};
