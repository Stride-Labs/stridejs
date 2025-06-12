import { MsgUpdateParams, MsgTokenizeShares, MsgRedeemTokensForShares, MsgTransferTokenizeShareRecord, MsgDisableTokenizeShares, MsgEnableTokenizeShares, MsgWithdrawTokenizeShareRecordReward, MsgWithdrawAllTokenizeShareRecordReward } from "./tx";
export declare const AminoConverter: {
    "/gaia.liquid.v1beta1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: MsgUpdateParams) => import("./tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./tx").MsgUpdateParamsAmino) => MsgUpdateParams;
    };
    "/gaia.liquid.v1beta1.MsgTokenizeShares": {
        aminoType: string;
        toAmino: (message: MsgTokenizeShares) => import("./tx").MsgTokenizeSharesAmino;
        fromAmino: (object: import("./tx").MsgTokenizeSharesAmino) => MsgTokenizeShares;
    };
    "/gaia.liquid.v1beta1.MsgRedeemTokensForShares": {
        aminoType: string;
        toAmino: (message: MsgRedeemTokensForShares) => import("./tx").MsgRedeemTokensForSharesAmino;
        fromAmino: (object: import("./tx").MsgRedeemTokensForSharesAmino) => MsgRedeemTokensForShares;
    };
    "/gaia.liquid.v1beta1.MsgTransferTokenizeShareRecord": {
        aminoType: string;
        toAmino: (message: MsgTransferTokenizeShareRecord) => import("./tx").MsgTransferTokenizeShareRecordAmino;
        fromAmino: (object: import("./tx").MsgTransferTokenizeShareRecordAmino) => MsgTransferTokenizeShareRecord;
    };
    "/gaia.liquid.v1beta1.MsgDisableTokenizeShares": {
        aminoType: string;
        toAmino: (message: MsgDisableTokenizeShares) => import("./tx").MsgDisableTokenizeSharesAmino;
        fromAmino: (object: import("./tx").MsgDisableTokenizeSharesAmino) => MsgDisableTokenizeShares;
    };
    "/gaia.liquid.v1beta1.MsgEnableTokenizeShares": {
        aminoType: string;
        toAmino: (message: MsgEnableTokenizeShares) => import("./tx").MsgEnableTokenizeSharesAmino;
        fromAmino: (object: import("./tx").MsgEnableTokenizeSharesAmino) => MsgEnableTokenizeShares;
    };
    "/gaia.liquid.v1beta1.MsgWithdrawTokenizeShareRecordReward": {
        aminoType: string;
        toAmino: (message: MsgWithdrawTokenizeShareRecordReward) => import("./tx").MsgWithdrawTokenizeShareRecordRewardAmino;
        fromAmino: (object: import("./tx").MsgWithdrawTokenizeShareRecordRewardAmino) => MsgWithdrawTokenizeShareRecordReward;
    };
    "/gaia.liquid.v1beta1.MsgWithdrawAllTokenizeShareRecordReward": {
        aminoType: string;
        toAmino: (message: MsgWithdrawAllTokenizeShareRecordReward) => import("./tx").MsgWithdrawAllTokenizeShareRecordRewardAmino;
        fromAmino: (object: import("./tx").MsgWithdrawAllTokenizeShareRecordRewardAmino) => MsgWithdrawAllTokenizeShareRecordReward;
    };
};
