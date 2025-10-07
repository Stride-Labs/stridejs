import { MsgBurn, MsgLink } from "./tx";
const AminoConverter = {
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
export {
  AminoConverter
};
