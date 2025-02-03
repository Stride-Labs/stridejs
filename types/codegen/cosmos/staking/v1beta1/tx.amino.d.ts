import { MsgCreateValidator, MsgEditValidator, MsgDelegate, MsgBeginRedelegate, MsgUndelegate, MsgUnbondValidator, MsgCancelUnbondingDelegation, MsgTokenizeShares, MsgRedeemTokensForShares, MsgTransferTokenizeShareRecord, MsgDisableTokenizeShares, MsgEnableTokenizeShares, MsgValidatorBond } from "./tx";
export declare const AminoConverter: {
    "/cosmos.staking.v1beta1.MsgCreateValidator": {
        aminoType: string;
        toAmino: (message: MsgCreateValidator) => import("./tx").MsgCreateValidatorAmino;
        fromAmino: (object: import("./tx").MsgCreateValidatorAmino) => MsgCreateValidator;
    };
    "/cosmos.staking.v1beta1.MsgEditValidator": {
        aminoType: string;
        toAmino: (message: MsgEditValidator) => import("./tx").MsgEditValidatorAmino;
        fromAmino: (object: import("./tx").MsgEditValidatorAmino) => MsgEditValidator;
    };
    "/cosmos.staking.v1beta1.MsgDelegate": {
        aminoType: string;
        toAmino: (message: MsgDelegate) => import("./tx").MsgDelegateAmino;
        fromAmino: (object: import("./tx").MsgDelegateAmino) => MsgDelegate;
    };
    "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
        aminoType: string;
        toAmino: (message: MsgBeginRedelegate) => import("./tx").MsgBeginRedelegateAmino;
        fromAmino: (object: import("./tx").MsgBeginRedelegateAmino) => MsgBeginRedelegate;
    };
    "/cosmos.staking.v1beta1.MsgUndelegate": {
        aminoType: string;
        toAmino: (message: MsgUndelegate) => import("./tx").MsgUndelegateAmino;
        fromAmino: (object: import("./tx").MsgUndelegateAmino) => MsgUndelegate;
    };
    "/cosmos.staking.v1beta1.MsgUnbondValidator": {
        aminoType: string;
        toAmino: (message: MsgUnbondValidator) => import("./tx").MsgUnbondValidatorAmino;
        fromAmino: (object: import("./tx").MsgUnbondValidatorAmino) => MsgUnbondValidator;
    };
    "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation": {
        aminoType: string;
        toAmino: (message: MsgCancelUnbondingDelegation) => import("./tx").MsgCancelUnbondingDelegationAmino;
        fromAmino: (object: import("./tx").MsgCancelUnbondingDelegationAmino) => MsgCancelUnbondingDelegation;
    };
    "/cosmos.staking.v1beta1.MsgTokenizeShares": {
        aminoType: string;
        toAmino: (message: MsgTokenizeShares) => import("./tx").MsgTokenizeSharesAmino;
        fromAmino: (object: import("./tx").MsgTokenizeSharesAmino) => MsgTokenizeShares;
    };
    "/cosmos.staking.v1beta1.MsgRedeemTokensForShares": {
        aminoType: string;
        toAmino: (message: MsgRedeemTokensForShares) => import("./tx").MsgRedeemTokensForSharesAmino;
        fromAmino: (object: import("./tx").MsgRedeemTokensForSharesAmino) => MsgRedeemTokensForShares;
    };
    "/cosmos.staking.v1beta1.MsgTransferTokenizeShareRecord": {
        aminoType: string;
        toAmino: (message: MsgTransferTokenizeShareRecord) => import("./tx").MsgTransferTokenizeShareRecordAmino;
        fromAmino: (object: import("./tx").MsgTransferTokenizeShareRecordAmino) => MsgTransferTokenizeShareRecord;
    };
    "/cosmos.staking.v1beta1.MsgDisableTokenizeShares": {
        aminoType: string;
        toAmino: (message: MsgDisableTokenizeShares) => import("./tx").MsgDisableTokenizeSharesAmino;
        fromAmino: (object: import("./tx").MsgDisableTokenizeSharesAmino) => MsgDisableTokenizeShares;
    };
    "/cosmos.staking.v1beta1.MsgEnableTokenizeShares": {
        aminoType: string;
        toAmino: (message: MsgEnableTokenizeShares) => import("./tx").MsgEnableTokenizeSharesAmino;
        fromAmino: (object: import("./tx").MsgEnableTokenizeSharesAmino) => MsgEnableTokenizeShares;
    };
    "/cosmos.staking.v1beta1.MsgValidatorBond": {
        aminoType: string;
        toAmino: (message: MsgValidatorBond) => import("./tx").MsgValidatorBondAmino;
        fromAmino: (object: import("./tx").MsgValidatorBondAmino) => MsgValidatorBond;
    };
};
