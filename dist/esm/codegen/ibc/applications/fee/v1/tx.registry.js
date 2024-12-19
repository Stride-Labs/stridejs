import { MsgRegisterPayee, MsgRegisterCounterpartyPayee, MsgPayPacketFee, MsgPayPacketFeeAsync } from "./tx";
const registry = [["/ibc.applications.fee.v1.MsgRegisterPayee", MsgRegisterPayee], ["/ibc.applications.fee.v1.MsgRegisterCounterpartyPayee", MsgRegisterCounterpartyPayee], ["/ibc.applications.fee.v1.MsgPayPacketFee", MsgPayPacketFee], ["/ibc.applications.fee.v1.MsgPayPacketFeeAsync", MsgPayPacketFeeAsync]];
const load = (protoRegistry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
const MessageComposer = {
  encoded: {
    registerPayee(value) {
      return {
        typeUrl: "/ibc.applications.fee.v1.MsgRegisterPayee",
        value: MsgRegisterPayee.encode(value).finish()
      };
    },
    registerCounterpartyPayee(value) {
      return {
        typeUrl: "/ibc.applications.fee.v1.MsgRegisterCounterpartyPayee",
        value: MsgRegisterCounterpartyPayee.encode(value).finish()
      };
    },
    payPacketFee(value) {
      return {
        typeUrl: "/ibc.applications.fee.v1.MsgPayPacketFee",
        value: MsgPayPacketFee.encode(value).finish()
      };
    },
    payPacketFeeAsync(value) {
      return {
        typeUrl: "/ibc.applications.fee.v1.MsgPayPacketFeeAsync",
        value: MsgPayPacketFeeAsync.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    registerPayee(value) {
      return {
        typeUrl: "/ibc.applications.fee.v1.MsgRegisterPayee",
        value
      };
    },
    registerCounterpartyPayee(value) {
      return {
        typeUrl: "/ibc.applications.fee.v1.MsgRegisterCounterpartyPayee",
        value
      };
    },
    payPacketFee(value) {
      return {
        typeUrl: "/ibc.applications.fee.v1.MsgPayPacketFee",
        value
      };
    },
    payPacketFeeAsync(value) {
      return {
        typeUrl: "/ibc.applications.fee.v1.MsgPayPacketFeeAsync",
        value
      };
    }
  },
  fromPartial: {
    registerPayee(value) {
      return {
        typeUrl: "/ibc.applications.fee.v1.MsgRegisterPayee",
        value: MsgRegisterPayee.fromPartial(value)
      };
    },
    registerCounterpartyPayee(value) {
      return {
        typeUrl: "/ibc.applications.fee.v1.MsgRegisterCounterpartyPayee",
        value: MsgRegisterCounterpartyPayee.fromPartial(value)
      };
    },
    payPacketFee(value) {
      return {
        typeUrl: "/ibc.applications.fee.v1.MsgPayPacketFee",
        value: MsgPayPacketFee.fromPartial(value)
      };
    },
    payPacketFeeAsync(value) {
      return {
        typeUrl: "/ibc.applications.fee.v1.MsgPayPacketFeeAsync",
        value: MsgPayPacketFeeAsync.fromPartial(value)
      };
    }
  }
};
export {
  MessageComposer,
  load,
  registry
};
