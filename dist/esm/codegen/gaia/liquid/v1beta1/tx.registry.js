import { MsgUpdateParams, MsgTokenizeShares, MsgRedeemTokensForShares, MsgTransferTokenizeShareRecord, MsgDisableTokenizeShares, MsgEnableTokenizeShares, MsgWithdrawTokenizeShareRecordReward, MsgWithdrawAllTokenizeShareRecordReward } from "./tx";
const registry = [["/gaia.liquid.v1beta1.MsgUpdateParams", MsgUpdateParams], ["/gaia.liquid.v1beta1.MsgTokenizeShares", MsgTokenizeShares], ["/gaia.liquid.v1beta1.MsgRedeemTokensForShares", MsgRedeemTokensForShares], ["/gaia.liquid.v1beta1.MsgTransferTokenizeShareRecord", MsgTransferTokenizeShareRecord], ["/gaia.liquid.v1beta1.MsgDisableTokenizeShares", MsgDisableTokenizeShares], ["/gaia.liquid.v1beta1.MsgEnableTokenizeShares", MsgEnableTokenizeShares], ["/gaia.liquid.v1beta1.MsgWithdrawTokenizeShareRecordReward", MsgWithdrawTokenizeShareRecordReward], ["/gaia.liquid.v1beta1.MsgWithdrawAllTokenizeShareRecordReward", MsgWithdrawAllTokenizeShareRecordReward]];
const load = (protoRegistry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
const MessageComposer = {
  encoded: {
    updateParams(value) {
      return {
        typeUrl: "/gaia.liquid.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    tokenizeShares(value) {
      return {
        typeUrl: "/gaia.liquid.v1beta1.MsgTokenizeShares",
        value: MsgTokenizeShares.encode(value).finish()
      };
    },
    redeemTokensForShares(value) {
      return {
        typeUrl: "/gaia.liquid.v1beta1.MsgRedeemTokensForShares",
        value: MsgRedeemTokensForShares.encode(value).finish()
      };
    },
    transferTokenizeShareRecord(value) {
      return {
        typeUrl: "/gaia.liquid.v1beta1.MsgTransferTokenizeShareRecord",
        value: MsgTransferTokenizeShareRecord.encode(value).finish()
      };
    },
    disableTokenizeShares(value) {
      return {
        typeUrl: "/gaia.liquid.v1beta1.MsgDisableTokenizeShares",
        value: MsgDisableTokenizeShares.encode(value).finish()
      };
    },
    enableTokenizeShares(value) {
      return {
        typeUrl: "/gaia.liquid.v1beta1.MsgEnableTokenizeShares",
        value: MsgEnableTokenizeShares.encode(value).finish()
      };
    },
    withdrawTokenizeShareRecordReward(value) {
      return {
        typeUrl: "/gaia.liquid.v1beta1.MsgWithdrawTokenizeShareRecordReward",
        value: MsgWithdrawTokenizeShareRecordReward.encode(value).finish()
      };
    },
    withdrawAllTokenizeShareRecordReward(value) {
      return {
        typeUrl: "/gaia.liquid.v1beta1.MsgWithdrawAllTokenizeShareRecordReward",
        value: MsgWithdrawAllTokenizeShareRecordReward.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    updateParams(value) {
      return {
        typeUrl: "/gaia.liquid.v1beta1.MsgUpdateParams",
        value
      };
    },
    tokenizeShares(value) {
      return {
        typeUrl: "/gaia.liquid.v1beta1.MsgTokenizeShares",
        value
      };
    },
    redeemTokensForShares(value) {
      return {
        typeUrl: "/gaia.liquid.v1beta1.MsgRedeemTokensForShares",
        value
      };
    },
    transferTokenizeShareRecord(value) {
      return {
        typeUrl: "/gaia.liquid.v1beta1.MsgTransferTokenizeShareRecord",
        value
      };
    },
    disableTokenizeShares(value) {
      return {
        typeUrl: "/gaia.liquid.v1beta1.MsgDisableTokenizeShares",
        value
      };
    },
    enableTokenizeShares(value) {
      return {
        typeUrl: "/gaia.liquid.v1beta1.MsgEnableTokenizeShares",
        value
      };
    },
    withdrawTokenizeShareRecordReward(value) {
      return {
        typeUrl: "/gaia.liquid.v1beta1.MsgWithdrawTokenizeShareRecordReward",
        value
      };
    },
    withdrawAllTokenizeShareRecordReward(value) {
      return {
        typeUrl: "/gaia.liquid.v1beta1.MsgWithdrawAllTokenizeShareRecordReward",
        value
      };
    }
  },
  fromPartial: {
    updateParams(value) {
      return {
        typeUrl: "/gaia.liquid.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    tokenizeShares(value) {
      return {
        typeUrl: "/gaia.liquid.v1beta1.MsgTokenizeShares",
        value: MsgTokenizeShares.fromPartial(value)
      };
    },
    redeemTokensForShares(value) {
      return {
        typeUrl: "/gaia.liquid.v1beta1.MsgRedeemTokensForShares",
        value: MsgRedeemTokensForShares.fromPartial(value)
      };
    },
    transferTokenizeShareRecord(value) {
      return {
        typeUrl: "/gaia.liquid.v1beta1.MsgTransferTokenizeShareRecord",
        value: MsgTransferTokenizeShareRecord.fromPartial(value)
      };
    },
    disableTokenizeShares(value) {
      return {
        typeUrl: "/gaia.liquid.v1beta1.MsgDisableTokenizeShares",
        value: MsgDisableTokenizeShares.fromPartial(value)
      };
    },
    enableTokenizeShares(value) {
      return {
        typeUrl: "/gaia.liquid.v1beta1.MsgEnableTokenizeShares",
        value: MsgEnableTokenizeShares.fromPartial(value)
      };
    },
    withdrawTokenizeShareRecordReward(value) {
      return {
        typeUrl: "/gaia.liquid.v1beta1.MsgWithdrawTokenizeShareRecordReward",
        value: MsgWithdrawTokenizeShareRecordReward.fromPartial(value)
      };
    },
    withdrawAllTokenizeShareRecordReward(value) {
      return {
        typeUrl: "/gaia.liquid.v1beta1.MsgWithdrawAllTokenizeShareRecordReward",
        value: MsgWithdrawAllTokenizeShareRecordReward.fromPartial(value)
      };
    }
  }
};
export {
  MessageComposer,
  load,
  registry
};
