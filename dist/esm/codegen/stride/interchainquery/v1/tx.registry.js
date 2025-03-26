import { MsgSubmitQueryResponse } from "./tx";
const registry = [["/stride.interchainquery.v1.MsgSubmitQueryResponse", MsgSubmitQueryResponse]];
const load = (protoRegistry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
const MessageComposer = {
  encoded: {
    submitQueryResponse(value) {
      return {
        typeUrl: "/stride.interchainquery.v1.MsgSubmitQueryResponse",
        value: MsgSubmitQueryResponse.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    submitQueryResponse(value) {
      return {
        typeUrl: "/stride.interchainquery.v1.MsgSubmitQueryResponse",
        value
      };
    }
  },
  fromPartial: {
    submitQueryResponse(value) {
      return {
        typeUrl: "/stride.interchainquery.v1.MsgSubmitQueryResponse",
        value: MsgSubmitQueryResponse.fromPartial(value)
      };
    }
  }
};
export {
  MessageComposer,
  load,
  registry
};
