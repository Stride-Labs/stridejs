import { MsgSend } from "./tx";
const AminoConverter = {
  "/cosmos.nft.v1beta1.MsgSend": {
    aminoType: "cosmos-sdk/MsgNFTSend",
    toAmino: MsgSend.toAmino,
    fromAmino: MsgSend.fromAmino
  }
};
export {
  AminoConverter
};
