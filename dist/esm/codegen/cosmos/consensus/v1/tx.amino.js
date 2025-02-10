import { MsgUpdateParams } from "./tx";
const AminoConverter = {
  "/cosmos.consensus.v1.MsgUpdateParams": {
    aminoType: "cosmos-sdk/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
};
export {
  AminoConverter
};
