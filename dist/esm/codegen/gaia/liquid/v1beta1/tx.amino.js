import { MsgUpdateParams, MsgTokenizeShares, MsgRedeemTokensForShares, MsgTransferTokenizeShareRecord, MsgDisableTokenizeShares, MsgEnableTokenizeShares, MsgWithdrawTokenizeShareRecordReward, MsgWithdrawAllTokenizeShareRecordReward } from "./tx";
const AminoConverter = {
  "/gaia.liquid.v1beta1.MsgUpdateParams": {
    aminoType: "gaia/liquid/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/gaia.liquid.v1beta1.MsgTokenizeShares": {
    aminoType: "gaia/MsgTokenizeShares",
    toAmino: MsgTokenizeShares.toAmino,
    fromAmino: MsgTokenizeShares.fromAmino
  },
  "/gaia.liquid.v1beta1.MsgRedeemTokensForShares": {
    aminoType: "gaia/MsgRedeemTokensForShares",
    toAmino: MsgRedeemTokensForShares.toAmino,
    fromAmino: MsgRedeemTokensForShares.fromAmino
  },
  "/gaia.liquid.v1beta1.MsgTransferTokenizeShareRecord": {
    aminoType: "gaia/MsgTransferTokenizeShareRecord",
    toAmino: MsgTransferTokenizeShareRecord.toAmino,
    fromAmino: MsgTransferTokenizeShareRecord.fromAmino
  },
  "/gaia.liquid.v1beta1.MsgDisableTokenizeShares": {
    aminoType: "gaia/MsgDisableTokenizeShares",
    toAmino: MsgDisableTokenizeShares.toAmino,
    fromAmino: MsgDisableTokenizeShares.fromAmino
  },
  "/gaia.liquid.v1beta1.MsgEnableTokenizeShares": {
    aminoType: "gaia/MsgEnableTokenizeShares",
    toAmino: MsgEnableTokenizeShares.toAmino,
    fromAmino: MsgEnableTokenizeShares.fromAmino
  },
  "/gaia.liquid.v1beta1.MsgWithdrawTokenizeShareRecordReward": {
    aminoType: "gaia/MsgWithdrawTokenizeShareRecordReward",
    toAmino: MsgWithdrawTokenizeShareRecordReward.toAmino,
    fromAmino: MsgWithdrawTokenizeShareRecordReward.fromAmino
  },
  "/gaia.liquid.v1beta1.MsgWithdrawAllTokenizeShareRecordReward": {
    aminoType: "gaia/MsgWithdrawAllTokenizeShareRecordReward",
    toAmino: MsgWithdrawAllTokenizeShareRecordReward.toAmino,
    fromAmino: MsgWithdrawAllTokenizeShareRecordReward.fromAmino
  }
};
export {
  AminoConverter
};
