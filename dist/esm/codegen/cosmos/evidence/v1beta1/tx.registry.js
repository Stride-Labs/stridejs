import { MsgSubmitEvidence } from "./tx";
const registry = [["/cosmos.evidence.v1beta1.MsgSubmitEvidence", MsgSubmitEvidence]];
const load = (protoRegistry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
const MessageComposer = {
  encoded: {
    submitEvidence(value) {
      return {
        typeUrl: "/cosmos.evidence.v1beta1.MsgSubmitEvidence",
        value: MsgSubmitEvidence.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    submitEvidence(value) {
      return {
        typeUrl: "/cosmos.evidence.v1beta1.MsgSubmitEvidence",
        value
      };
    }
  },
  fromPartial: {
    submitEvidence(value) {
      return {
        typeUrl: "/cosmos.evidence.v1beta1.MsgSubmitEvidence",
        value: MsgSubmitEvidence.fromPartial(value)
      };
    }
  }
};
export {
  MessageComposer,
  load,
  registry
};
