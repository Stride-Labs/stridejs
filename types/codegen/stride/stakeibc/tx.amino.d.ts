import { MsgLiquidStake, MsgLSMLiquidStake, MsgRedeemStake, MsgRegisterHostZone, MsgClaimUndelegatedTokens, MsgRebalanceValidators, MsgAddValidators, MsgChangeValidatorWeights, MsgDeleteValidator, MsgRestoreInterchainAccount, MsgUpdateValidatorSharesExchRate, MsgCalibrateDelegation, MsgClearBalance, MsgUpdateInnerRedemptionRateBounds, MsgResumeHostZone, MsgCreateTradeRoute, MsgDeleteTradeRoute, MsgUpdateTradeRoute, MsgSetCommunityPoolRebate, MsgToggleTradeController, MsgUpdateHostZoneParams } from "./tx";
export declare const AminoConverter: {
    "/stride.stakeibc.MsgLiquidStake": {
        aminoType: string;
        toAmino: (message: MsgLiquidStake) => import("./tx").MsgLiquidStakeAmino;
        fromAmino: (object: import("./tx").MsgLiquidStakeAmino) => MsgLiquidStake;
    };
    "/stride.stakeibc.MsgLSMLiquidStake": {
        aminoType: string;
        toAmino: (message: MsgLSMLiquidStake) => import("./tx").MsgLSMLiquidStakeAmino;
        fromAmino: (object: import("./tx").MsgLSMLiquidStakeAmino) => MsgLSMLiquidStake;
    };
    "/stride.stakeibc.MsgRedeemStake": {
        aminoType: string;
        toAmino: (message: MsgRedeemStake) => import("./tx").MsgRedeemStakeAmino;
        fromAmino: (object: import("./tx").MsgRedeemStakeAmino) => MsgRedeemStake;
    };
    "/stride.stakeibc.MsgRegisterHostZone": {
        aminoType: string;
        toAmino: (message: MsgRegisterHostZone) => import("./tx").MsgRegisterHostZoneAmino;
        fromAmino: (object: import("./tx").MsgRegisterHostZoneAmino) => MsgRegisterHostZone;
    };
    "/stride.stakeibc.MsgClaimUndelegatedTokens": {
        aminoType: string;
        toAmino: (message: MsgClaimUndelegatedTokens) => import("./tx").MsgClaimUndelegatedTokensAmino;
        fromAmino: (object: import("./tx").MsgClaimUndelegatedTokensAmino) => MsgClaimUndelegatedTokens;
    };
    "/stride.stakeibc.MsgRebalanceValidators": {
        aminoType: string;
        toAmino: (message: MsgRebalanceValidators) => import("./tx").MsgRebalanceValidatorsAmino;
        fromAmino: (object: import("./tx").MsgRebalanceValidatorsAmino) => MsgRebalanceValidators;
    };
    "/stride.stakeibc.MsgAddValidators": {
        aminoType: string;
        toAmino: (message: MsgAddValidators) => import("./tx").MsgAddValidatorsAmino;
        fromAmino: (object: import("./tx").MsgAddValidatorsAmino) => MsgAddValidators;
    };
    "/stride.stakeibc.MsgChangeValidatorWeights": {
        aminoType: string;
        toAmino: (message: MsgChangeValidatorWeights) => import("./tx").MsgChangeValidatorWeightsAmino;
        fromAmino: (object: import("./tx").MsgChangeValidatorWeightsAmino) => MsgChangeValidatorWeights;
    };
    "/stride.stakeibc.MsgDeleteValidator": {
        aminoType: string;
        toAmino: (message: MsgDeleteValidator) => import("./tx").MsgDeleteValidatorAmino;
        fromAmino: (object: import("./tx").MsgDeleteValidatorAmino) => MsgDeleteValidator;
    };
    "/stride.stakeibc.MsgRestoreInterchainAccount": {
        aminoType: string;
        toAmino: (message: MsgRestoreInterchainAccount) => import("./tx").MsgRestoreInterchainAccountAmino;
        fromAmino: (object: import("./tx").MsgRestoreInterchainAccountAmino) => MsgRestoreInterchainAccount;
    };
    "/stride.stakeibc.MsgUpdateValidatorSharesExchRate": {
        aminoType: string;
        toAmino: (message: MsgUpdateValidatorSharesExchRate) => import("./tx").MsgUpdateValidatorSharesExchRateAmino;
        fromAmino: (object: import("./tx").MsgUpdateValidatorSharesExchRateAmino) => MsgUpdateValidatorSharesExchRate;
    };
    "/stride.stakeibc.MsgCalibrateDelegation": {
        aminoType: string;
        toAmino: (message: MsgCalibrateDelegation) => import("./tx").MsgCalibrateDelegationAmino;
        fromAmino: (object: import("./tx").MsgCalibrateDelegationAmino) => MsgCalibrateDelegation;
    };
    "/stride.stakeibc.MsgClearBalance": {
        aminoType: string;
        toAmino: (message: MsgClearBalance) => import("./tx").MsgClearBalanceAmino;
        fromAmino: (object: import("./tx").MsgClearBalanceAmino) => MsgClearBalance;
    };
    "/stride.stakeibc.MsgUpdateInnerRedemptionRateBounds": {
        aminoType: string;
        toAmino: (message: MsgUpdateInnerRedemptionRateBounds) => import("./tx").MsgUpdateInnerRedemptionRateBoundsAmino;
        fromAmino: (object: import("./tx").MsgUpdateInnerRedemptionRateBoundsAmino) => MsgUpdateInnerRedemptionRateBounds;
    };
    "/stride.stakeibc.MsgResumeHostZone": {
        aminoType: string;
        toAmino: (message: MsgResumeHostZone) => import("./tx").MsgResumeHostZoneAmino;
        fromAmino: (object: import("./tx").MsgResumeHostZoneAmino) => MsgResumeHostZone;
    };
    "/stride.stakeibc.MsgCreateTradeRoute": {
        aminoType: string;
        toAmino: (message: MsgCreateTradeRoute) => import("./tx").MsgCreateTradeRouteAmino;
        fromAmino: (object: import("./tx").MsgCreateTradeRouteAmino) => MsgCreateTradeRoute;
    };
    "/stride.stakeibc.MsgDeleteTradeRoute": {
        aminoType: string;
        toAmino: (message: MsgDeleteTradeRoute) => import("./tx").MsgDeleteTradeRouteAmino;
        fromAmino: (object: import("./tx").MsgDeleteTradeRouteAmino) => MsgDeleteTradeRoute;
    };
    "/stride.stakeibc.MsgUpdateTradeRoute": {
        aminoType: string;
        toAmino: (message: MsgUpdateTradeRoute) => import("./tx").MsgUpdateTradeRouteAmino;
        fromAmino: (object: import("./tx").MsgUpdateTradeRouteAmino) => MsgUpdateTradeRoute;
    };
    "/stride.stakeibc.MsgSetCommunityPoolRebate": {
        aminoType: string;
        toAmino: (message: MsgSetCommunityPoolRebate) => import("./tx").MsgSetCommunityPoolRebateAmino;
        fromAmino: (object: import("./tx").MsgSetCommunityPoolRebateAmino) => MsgSetCommunityPoolRebate;
    };
    "/stride.stakeibc.MsgToggleTradeController": {
        aminoType: string;
        toAmino: (message: MsgToggleTradeController) => import("./tx").MsgToggleTradeControllerAmino;
        fromAmino: (object: import("./tx").MsgToggleTradeControllerAmino) => MsgToggleTradeController;
    };
    "/stride.stakeibc.MsgUpdateHostZoneParams": {
        aminoType: string;
        toAmino: (message: MsgUpdateHostZoneParams) => import("./tx").MsgUpdateHostZoneParamsAmino;
        fromAmino: (object: import("./tx").MsgUpdateHostZoneParamsAmino) => MsgUpdateHostZoneParams;
    };
};
