import { TelescopeGeneratedType } from "../../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgUpdateParams, MsgTokenizeShares, MsgRedeemTokensForShares, MsgTransferTokenizeShareRecord, MsgDisableTokenizeShares, MsgEnableTokenizeShares, MsgWithdrawTokenizeShareRecordReward, MsgWithdrawAllTokenizeShareRecordReward } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/gaia.liquid.v1beta1.MsgUpdateParams", MsgUpdateParams], ["/gaia.liquid.v1beta1.MsgTokenizeShares", MsgTokenizeShares], ["/gaia.liquid.v1beta1.MsgRedeemTokensForShares", MsgRedeemTokensForShares], ["/gaia.liquid.v1beta1.MsgTransferTokenizeShareRecord", MsgTransferTokenizeShareRecord], ["/gaia.liquid.v1beta1.MsgDisableTokenizeShares", MsgDisableTokenizeShares], ["/gaia.liquid.v1beta1.MsgEnableTokenizeShares", MsgEnableTokenizeShares], ["/gaia.liquid.v1beta1.MsgWithdrawTokenizeShareRecordReward", MsgWithdrawTokenizeShareRecordReward], ["/gaia.liquid.v1beta1.MsgWithdrawAllTokenizeShareRecordReward", MsgWithdrawAllTokenizeShareRecordReward]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/gaia.liquid.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    tokenizeShares(value: MsgTokenizeShares) {
      return {
        typeUrl: "/gaia.liquid.v1beta1.MsgTokenizeShares",
        value: MsgTokenizeShares.encode(value).finish()
      };
    },
    redeemTokensForShares(value: MsgRedeemTokensForShares) {
      return {
        typeUrl: "/gaia.liquid.v1beta1.MsgRedeemTokensForShares",
        value: MsgRedeemTokensForShares.encode(value).finish()
      };
    },
    transferTokenizeShareRecord(value: MsgTransferTokenizeShareRecord) {
      return {
        typeUrl: "/gaia.liquid.v1beta1.MsgTransferTokenizeShareRecord",
        value: MsgTransferTokenizeShareRecord.encode(value).finish()
      };
    },
    disableTokenizeShares(value: MsgDisableTokenizeShares) {
      return {
        typeUrl: "/gaia.liquid.v1beta1.MsgDisableTokenizeShares",
        value: MsgDisableTokenizeShares.encode(value).finish()
      };
    },
    enableTokenizeShares(value: MsgEnableTokenizeShares) {
      return {
        typeUrl: "/gaia.liquid.v1beta1.MsgEnableTokenizeShares",
        value: MsgEnableTokenizeShares.encode(value).finish()
      };
    },
    withdrawTokenizeShareRecordReward(value: MsgWithdrawTokenizeShareRecordReward) {
      return {
        typeUrl: "/gaia.liquid.v1beta1.MsgWithdrawTokenizeShareRecordReward",
        value: MsgWithdrawTokenizeShareRecordReward.encode(value).finish()
      };
    },
    withdrawAllTokenizeShareRecordReward(value: MsgWithdrawAllTokenizeShareRecordReward) {
      return {
        typeUrl: "/gaia.liquid.v1beta1.MsgWithdrawAllTokenizeShareRecordReward",
        value: MsgWithdrawAllTokenizeShareRecordReward.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/gaia.liquid.v1beta1.MsgUpdateParams",
        value
      };
    },
    tokenizeShares(value: MsgTokenizeShares) {
      return {
        typeUrl: "/gaia.liquid.v1beta1.MsgTokenizeShares",
        value
      };
    },
    redeemTokensForShares(value: MsgRedeemTokensForShares) {
      return {
        typeUrl: "/gaia.liquid.v1beta1.MsgRedeemTokensForShares",
        value
      };
    },
    transferTokenizeShareRecord(value: MsgTransferTokenizeShareRecord) {
      return {
        typeUrl: "/gaia.liquid.v1beta1.MsgTransferTokenizeShareRecord",
        value
      };
    },
    disableTokenizeShares(value: MsgDisableTokenizeShares) {
      return {
        typeUrl: "/gaia.liquid.v1beta1.MsgDisableTokenizeShares",
        value
      };
    },
    enableTokenizeShares(value: MsgEnableTokenizeShares) {
      return {
        typeUrl: "/gaia.liquid.v1beta1.MsgEnableTokenizeShares",
        value
      };
    },
    withdrawTokenizeShareRecordReward(value: MsgWithdrawTokenizeShareRecordReward) {
      return {
        typeUrl: "/gaia.liquid.v1beta1.MsgWithdrawTokenizeShareRecordReward",
        value
      };
    },
    withdrawAllTokenizeShareRecordReward(value: MsgWithdrawAllTokenizeShareRecordReward) {
      return {
        typeUrl: "/gaia.liquid.v1beta1.MsgWithdrawAllTokenizeShareRecordReward",
        value
      };
    }
  },
  fromPartial: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/gaia.liquid.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    tokenizeShares(value: MsgTokenizeShares) {
      return {
        typeUrl: "/gaia.liquid.v1beta1.MsgTokenizeShares",
        value: MsgTokenizeShares.fromPartial(value)
      };
    },
    redeemTokensForShares(value: MsgRedeemTokensForShares) {
      return {
        typeUrl: "/gaia.liquid.v1beta1.MsgRedeemTokensForShares",
        value: MsgRedeemTokensForShares.fromPartial(value)
      };
    },
    transferTokenizeShareRecord(value: MsgTransferTokenizeShareRecord) {
      return {
        typeUrl: "/gaia.liquid.v1beta1.MsgTransferTokenizeShareRecord",
        value: MsgTransferTokenizeShareRecord.fromPartial(value)
      };
    },
    disableTokenizeShares(value: MsgDisableTokenizeShares) {
      return {
        typeUrl: "/gaia.liquid.v1beta1.MsgDisableTokenizeShares",
        value: MsgDisableTokenizeShares.fromPartial(value)
      };
    },
    enableTokenizeShares(value: MsgEnableTokenizeShares) {
      return {
        typeUrl: "/gaia.liquid.v1beta1.MsgEnableTokenizeShares",
        value: MsgEnableTokenizeShares.fromPartial(value)
      };
    },
    withdrawTokenizeShareRecordReward(value: MsgWithdrawTokenizeShareRecordReward) {
      return {
        typeUrl: "/gaia.liquid.v1beta1.MsgWithdrawTokenizeShareRecordReward",
        value: MsgWithdrawTokenizeShareRecordReward.fromPartial(value)
      };
    },
    withdrawAllTokenizeShareRecordReward(value: MsgWithdrawAllTokenizeShareRecordReward) {
      return {
        typeUrl: "/gaia.liquid.v1beta1.MsgWithdrawAllTokenizeShareRecordReward",
        value: MsgWithdrawAllTokenizeShareRecordReward.fromPartial(value)
      };
    }
  }
};