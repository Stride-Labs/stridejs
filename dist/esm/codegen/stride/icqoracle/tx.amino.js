import { MsgRegisterTokenPriceQuery, MsgRemoveTokenPriceQuery } from "./tx";
const AminoConverter = {
  "/stride.icqoracle.MsgRegisterTokenPriceQuery": {
    aminoType: "icqoracle/MsgRegisterTokenPriceQuery",
    toAmino: MsgRegisterTokenPriceQuery.toAmino,
    fromAmino: MsgRegisterTokenPriceQuery.fromAmino
  },
  "/stride.icqoracle.MsgRemoveTokenPriceQuery": {
    aminoType: "icqoracle/MsgRemoveTokenPriceQuery",
    toAmino: MsgRemoveTokenPriceQuery.toAmino,
    fromAmino: MsgRemoveTokenPriceQuery.fromAmino
  }
};
export {
  AminoConverter
};
