import { TelescopeGeneratedType } from "../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgLiquidStake, MsgLSMLiquidStake, MsgRedeemStake, MsgRegisterHostZone, MsgClaimUndelegatedTokens, MsgRebalanceValidators, MsgAddValidators, MsgChangeValidatorWeights, MsgDeleteValidator, MsgRestoreInterchainAccount, MsgCloseDelegationChannel, MsgUpdateValidatorSharesExchRate, MsgCalibrateDelegation, MsgClearBalance, MsgUpdateInnerRedemptionRateBounds, MsgResumeHostZone, MsgCreateTradeRoute, MsgDeleteTradeRoute, MsgUpdateTradeRoute, MsgSetCommunityPoolRebate, MsgToggleTradeController, MsgUpdateHostZoneParams } from "./tx";
export declare const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        liquidStake(value: MsgLiquidStake): {
            typeUrl: string;
            value: Uint8Array;
        };
        lSMLiquidStake(value: MsgLSMLiquidStake): {
            typeUrl: string;
            value: Uint8Array;
        };
        redeemStake(value: MsgRedeemStake): {
            typeUrl: string;
            value: Uint8Array;
        };
        registerHostZone(value: MsgRegisterHostZone): {
            typeUrl: string;
            value: Uint8Array;
        };
        claimUndelegatedTokens(value: MsgClaimUndelegatedTokens): {
            typeUrl: string;
            value: Uint8Array;
        };
        rebalanceValidators(value: MsgRebalanceValidators): {
            typeUrl: string;
            value: Uint8Array;
        };
        addValidators(value: MsgAddValidators): {
            typeUrl: string;
            value: Uint8Array;
        };
        changeValidatorWeight(value: MsgChangeValidatorWeights): {
            typeUrl: string;
            value: Uint8Array;
        };
        deleteValidator(value: MsgDeleteValidator): {
            typeUrl: string;
            value: Uint8Array;
        };
        restoreInterchainAccount(value: MsgRestoreInterchainAccount): {
            typeUrl: string;
            value: Uint8Array;
        };
        closeDelegationChannel(value: MsgCloseDelegationChannel): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateValidatorSharesExchRate(value: MsgUpdateValidatorSharesExchRate): {
            typeUrl: string;
            value: Uint8Array;
        };
        calibrateDelegation(value: MsgCalibrateDelegation): {
            typeUrl: string;
            value: Uint8Array;
        };
        clearBalance(value: MsgClearBalance): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateInnerRedemptionRateBounds(value: MsgUpdateInnerRedemptionRateBounds): {
            typeUrl: string;
            value: Uint8Array;
        };
        resumeHostZone(value: MsgResumeHostZone): {
            typeUrl: string;
            value: Uint8Array;
        };
        createTradeRoute(value: MsgCreateTradeRoute): {
            typeUrl: string;
            value: Uint8Array;
        };
        deleteTradeRoute(value: MsgDeleteTradeRoute): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateTradeRoute(value: MsgUpdateTradeRoute): {
            typeUrl: string;
            value: Uint8Array;
        };
        setCommunityPoolRebate(value: MsgSetCommunityPoolRebate): {
            typeUrl: string;
            value: Uint8Array;
        };
        toggleTradeController(value: MsgToggleTradeController): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateHostZoneParams(value: MsgUpdateHostZoneParams): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        liquidStake(value: MsgLiquidStake): {
            typeUrl: string;
            value: MsgLiquidStake;
        };
        lSMLiquidStake(value: MsgLSMLiquidStake): {
            typeUrl: string;
            value: MsgLSMLiquidStake;
        };
        redeemStake(value: MsgRedeemStake): {
            typeUrl: string;
            value: MsgRedeemStake;
        };
        registerHostZone(value: MsgRegisterHostZone): {
            typeUrl: string;
            value: MsgRegisterHostZone;
        };
        claimUndelegatedTokens(value: MsgClaimUndelegatedTokens): {
            typeUrl: string;
            value: MsgClaimUndelegatedTokens;
        };
        rebalanceValidators(value: MsgRebalanceValidators): {
            typeUrl: string;
            value: MsgRebalanceValidators;
        };
        addValidators(value: MsgAddValidators): {
            typeUrl: string;
            value: MsgAddValidators;
        };
        changeValidatorWeight(value: MsgChangeValidatorWeights): {
            typeUrl: string;
            value: MsgChangeValidatorWeights;
        };
        deleteValidator(value: MsgDeleteValidator): {
            typeUrl: string;
            value: MsgDeleteValidator;
        };
        restoreInterchainAccount(value: MsgRestoreInterchainAccount): {
            typeUrl: string;
            value: MsgRestoreInterchainAccount;
        };
        closeDelegationChannel(value: MsgCloseDelegationChannel): {
            typeUrl: string;
            value: MsgCloseDelegationChannel;
        };
        updateValidatorSharesExchRate(value: MsgUpdateValidatorSharesExchRate): {
            typeUrl: string;
            value: MsgUpdateValidatorSharesExchRate;
        };
        calibrateDelegation(value: MsgCalibrateDelegation): {
            typeUrl: string;
            value: MsgCalibrateDelegation;
        };
        clearBalance(value: MsgClearBalance): {
            typeUrl: string;
            value: MsgClearBalance;
        };
        updateInnerRedemptionRateBounds(value: MsgUpdateInnerRedemptionRateBounds): {
            typeUrl: string;
            value: MsgUpdateInnerRedemptionRateBounds;
        };
        resumeHostZone(value: MsgResumeHostZone): {
            typeUrl: string;
            value: MsgResumeHostZone;
        };
        createTradeRoute(value: MsgCreateTradeRoute): {
            typeUrl: string;
            value: MsgCreateTradeRoute;
        };
        deleteTradeRoute(value: MsgDeleteTradeRoute): {
            typeUrl: string;
            value: MsgDeleteTradeRoute;
        };
        updateTradeRoute(value: MsgUpdateTradeRoute): {
            typeUrl: string;
            value: MsgUpdateTradeRoute;
        };
        setCommunityPoolRebate(value: MsgSetCommunityPoolRebate): {
            typeUrl: string;
            value: MsgSetCommunityPoolRebate;
        };
        toggleTradeController(value: MsgToggleTradeController): {
            typeUrl: string;
            value: MsgToggleTradeController;
        };
        updateHostZoneParams(value: MsgUpdateHostZoneParams): {
            typeUrl: string;
            value: MsgUpdateHostZoneParams;
        };
    };
    fromPartial: {
        liquidStake(value: MsgLiquidStake): {
            typeUrl: string;
            value: MsgLiquidStake;
        };
        lSMLiquidStake(value: MsgLSMLiquidStake): {
            typeUrl: string;
            value: MsgLSMLiquidStake;
        };
        redeemStake(value: MsgRedeemStake): {
            typeUrl: string;
            value: MsgRedeemStake;
        };
        registerHostZone(value: MsgRegisterHostZone): {
            typeUrl: string;
            value: MsgRegisterHostZone;
        };
        claimUndelegatedTokens(value: MsgClaimUndelegatedTokens): {
            typeUrl: string;
            value: MsgClaimUndelegatedTokens;
        };
        rebalanceValidators(value: MsgRebalanceValidators): {
            typeUrl: string;
            value: MsgRebalanceValidators;
        };
        addValidators(value: MsgAddValidators): {
            typeUrl: string;
            value: MsgAddValidators;
        };
        changeValidatorWeight(value: MsgChangeValidatorWeights): {
            typeUrl: string;
            value: MsgChangeValidatorWeights;
        };
        deleteValidator(value: MsgDeleteValidator): {
            typeUrl: string;
            value: MsgDeleteValidator;
        };
        restoreInterchainAccount(value: MsgRestoreInterchainAccount): {
            typeUrl: string;
            value: MsgRestoreInterchainAccount;
        };
        closeDelegationChannel(value: MsgCloseDelegationChannel): {
            typeUrl: string;
            value: MsgCloseDelegationChannel;
        };
        updateValidatorSharesExchRate(value: MsgUpdateValidatorSharesExchRate): {
            typeUrl: string;
            value: MsgUpdateValidatorSharesExchRate;
        };
        calibrateDelegation(value: MsgCalibrateDelegation): {
            typeUrl: string;
            value: MsgCalibrateDelegation;
        };
        clearBalance(value: MsgClearBalance): {
            typeUrl: string;
            value: MsgClearBalance;
        };
        updateInnerRedemptionRateBounds(value: MsgUpdateInnerRedemptionRateBounds): {
            typeUrl: string;
            value: MsgUpdateInnerRedemptionRateBounds;
        };
        resumeHostZone(value: MsgResumeHostZone): {
            typeUrl: string;
            value: MsgResumeHostZone;
        };
        createTradeRoute(value: MsgCreateTradeRoute): {
            typeUrl: string;
            value: MsgCreateTradeRoute;
        };
        deleteTradeRoute(value: MsgDeleteTradeRoute): {
            typeUrl: string;
            value: MsgDeleteTradeRoute;
        };
        updateTradeRoute(value: MsgUpdateTradeRoute): {
            typeUrl: string;
            value: MsgUpdateTradeRoute;
        };
        setCommunityPoolRebate(value: MsgSetCommunityPoolRebate): {
            typeUrl: string;
            value: MsgSetCommunityPoolRebate;
        };
        toggleTradeController(value: MsgToggleTradeController): {
            typeUrl: string;
            value: MsgToggleTradeController;
        };
        updateHostZoneParams(value: MsgUpdateHostZoneParams): {
            typeUrl: string;
            value: MsgUpdateHostZoneParams;
        };
    };
};
