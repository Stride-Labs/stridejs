import { MsgBurn, MsgLink } from "./tx";
export const AminoConverter = {
  "/stride.strdburner.MsgBurn": {
    aminoType: "strdburner/MsgBurn",
    toAmino: MsgBurn.toAmino,
    fromAmino: MsgBurn.fromAmino
  },
  "/stride.strdburner.MsgLink": {
    aminoType: "strdburner/MsgLink",
    toAmino: MsgLink.toAmino,
    fromAmino: MsgLink.fromAmino
  }
};