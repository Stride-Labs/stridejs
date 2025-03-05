import { MsgRegisterTokenPriceQuery, MsgRemoveTokenPriceQuery, MsgUpdateParams } from "./tx";
export const AminoConverter = {
  "/stride.icqoracle.MsgRegisterTokenPriceQuery": {
    aminoType: "icqoracle/MsgRegisterTokenPriceQuery",
    toAmino: MsgRegisterTokenPriceQuery.toAmino,
    fromAmino: MsgRegisterTokenPriceQuery.fromAmino
  },
  "/stride.icqoracle.MsgRemoveTokenPriceQuery": {
    aminoType: "icqoracle/MsgRemoveTokenPriceQuery",
    toAmino: MsgRemoveTokenPriceQuery.toAmino,
    fromAmino: MsgRemoveTokenPriceQuery.fromAmino
  },
  "/stride.icqoracle.MsgUpdateParams": {
    aminoType: "icqoracle/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
};