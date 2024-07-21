import { TelescopeGeneratedType } from "../../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgSubmitQueryResponse } from "./messages";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/stride.interchainquery.v1.MsgSubmitQueryResponse", MsgSubmitQueryResponse]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    submitQueryResponse(value: MsgSubmitQueryResponse) {
      return {
        typeUrl: "/stride.interchainquery.v1.MsgSubmitQueryResponse",
        value: MsgSubmitQueryResponse.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    submitQueryResponse(value: MsgSubmitQueryResponse) {
      return {
        typeUrl: "/stride.interchainquery.v1.MsgSubmitQueryResponse",
        value
      };
    }
  },
  fromPartial: {
    submitQueryResponse(value: MsgSubmitQueryResponse) {
      return {
        typeUrl: "/stride.interchainquery.v1.MsgSubmitQueryResponse",
        value: MsgSubmitQueryResponse.fromPartial(value)
      };
    }
  }
};