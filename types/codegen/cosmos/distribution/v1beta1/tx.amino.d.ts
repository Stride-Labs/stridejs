import { MsgSetWithdrawAddress, MsgWithdrawDelegatorReward, MsgWithdrawValidatorCommission, MsgWithdrawTokenizeShareRecordReward, MsgWithdrawAllTokenizeShareRecordReward, MsgFundCommunityPool } from "./tx";
export declare const AminoConverter: {
    "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
        aminoType: string;
        toAmino: (message: MsgSetWithdrawAddress) => import("./tx").MsgSetWithdrawAddressAmino;
        fromAmino: (object: import("./tx").MsgSetWithdrawAddressAmino) => MsgSetWithdrawAddress;
    };
    "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
        aminoType: string;
        toAmino: (message: MsgWithdrawDelegatorReward) => import("./tx").MsgWithdrawDelegatorRewardAmino;
        fromAmino: (object: import("./tx").MsgWithdrawDelegatorRewardAmino) => MsgWithdrawDelegatorReward;
    };
    "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
        aminoType: string;
        toAmino: (message: MsgWithdrawValidatorCommission) => import("./tx").MsgWithdrawValidatorCommissionAmino;
        fromAmino: (object: import("./tx").MsgWithdrawValidatorCommissionAmino) => MsgWithdrawValidatorCommission;
    };
    "/cosmos.distribution.v1beta1.MsgWithdrawTokenizeShareRecordReward": {
        aminoType: string;
        toAmino: (message: MsgWithdrawTokenizeShareRecordReward) => import("./tx").MsgWithdrawTokenizeShareRecordRewardAmino;
        fromAmino: (object: import("./tx").MsgWithdrawTokenizeShareRecordRewardAmino) => MsgWithdrawTokenizeShareRecordReward;
    };
    "/cosmos.distribution.v1beta1.MsgWithdrawAllTokenizeShareRecordReward": {
        aminoType: string;
        toAmino: (message: MsgWithdrawAllTokenizeShareRecordReward) => import("./tx").MsgWithdrawAllTokenizeShareRecordRewardAmino;
        fromAmino: (object: import("./tx").MsgWithdrawAllTokenizeShareRecordRewardAmino) => MsgWithdrawAllTokenizeShareRecordReward;
    };
    "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
        aminoType: string;
        toAmino: (message: MsgFundCommunityPool) => import("./tx").MsgFundCommunityPoolAmino;
        fromAmino: (object: import("./tx").MsgFundCommunityPoolAmino) => MsgFundCommunityPool;
    };
};
