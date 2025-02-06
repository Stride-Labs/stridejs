import { MsgSubmitQueryResponse } from "./messages";
const AminoConverter = {
  "/stride.interchainquery.v1.MsgSubmitQueryResponse": {
    aminoType: "/stride.interchainquery.v1.MsgSubmitQueryResponse",
    toAmino: MsgSubmitQueryResponse.toAmino,
    fromAmino: MsgSubmitQueryResponse.fromAmino
  }
};
export {
  AminoConverter
};
