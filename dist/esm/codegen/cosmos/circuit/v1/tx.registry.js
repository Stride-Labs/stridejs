import { MsgAuthorizeCircuitBreaker, MsgTripCircuitBreaker, MsgResetCircuitBreaker } from "./tx";
const registry = [["/cosmos.circuit.v1.MsgAuthorizeCircuitBreaker", MsgAuthorizeCircuitBreaker], ["/cosmos.circuit.v1.MsgTripCircuitBreaker", MsgTripCircuitBreaker], ["/cosmos.circuit.v1.MsgResetCircuitBreaker", MsgResetCircuitBreaker]];
const load = (protoRegistry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
const MessageComposer = {
  encoded: {
    authorizeCircuitBreaker(value) {
      return {
        typeUrl: "/cosmos.circuit.v1.MsgAuthorizeCircuitBreaker",
        value: MsgAuthorizeCircuitBreaker.encode(value).finish()
      };
    },
    tripCircuitBreaker(value) {
      return {
        typeUrl: "/cosmos.circuit.v1.MsgTripCircuitBreaker",
        value: MsgTripCircuitBreaker.encode(value).finish()
      };
    },
    resetCircuitBreaker(value) {
      return {
        typeUrl: "/cosmos.circuit.v1.MsgResetCircuitBreaker",
        value: MsgResetCircuitBreaker.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    authorizeCircuitBreaker(value) {
      return {
        typeUrl: "/cosmos.circuit.v1.MsgAuthorizeCircuitBreaker",
        value
      };
    },
    tripCircuitBreaker(value) {
      return {
        typeUrl: "/cosmos.circuit.v1.MsgTripCircuitBreaker",
        value
      };
    },
    resetCircuitBreaker(value) {
      return {
        typeUrl: "/cosmos.circuit.v1.MsgResetCircuitBreaker",
        value
      };
    }
  },
  fromPartial: {
    authorizeCircuitBreaker(value) {
      return {
        typeUrl: "/cosmos.circuit.v1.MsgAuthorizeCircuitBreaker",
        value: MsgAuthorizeCircuitBreaker.fromPartial(value)
      };
    },
    tripCircuitBreaker(value) {
      return {
        typeUrl: "/cosmos.circuit.v1.MsgTripCircuitBreaker",
        value: MsgTripCircuitBreaker.fromPartial(value)
      };
    },
    resetCircuitBreaker(value) {
      return {
        typeUrl: "/cosmos.circuit.v1.MsgResetCircuitBreaker",
        value: MsgResetCircuitBreaker.fromPartial(value)
      };
    }
  }
};
export {
  MessageComposer,
  load,
  registry
};
