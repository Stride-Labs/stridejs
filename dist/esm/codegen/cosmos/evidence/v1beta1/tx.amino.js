import { MsgSubmitEvidence } from "./tx";
const AminoConverter = {
  "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
    aminoType: "cosmos-sdk/MsgSubmitEvidence",
    toAmino: MsgSubmitEvidence.toAmino,
    fromAmino: MsgSubmitEvidence.fromAmino
  }
};
export {
  AminoConverter
};
