import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const strideAminoConverters: {
    "/stride.staketia.MsgLiquidStake": {
        aminoType: string;
        toAmino: (message: import("./staketia/tx").MsgLiquidStake) => import("./staketia/tx").MsgLiquidStakeAmino;
        fromAmino: (object: import("./staketia/tx").MsgLiquidStakeAmino) => import("./staketia/tx").MsgLiquidStake;
    };
    "/stride.staketia.MsgRedeemStake": {
        aminoType: string;
        toAmino: (message: import("./staketia/tx").MsgRedeemStake) => import("./staketia/tx").MsgRedeemStakeAmino;
        fromAmino: (object: import("./staketia/tx").MsgRedeemStakeAmino) => import("./staketia/tx").MsgRedeemStake;
    };
    "/stride.staketia.MsgConfirmDelegation": {
        aminoType: string;
        toAmino: (message: import("./staketia/tx").MsgConfirmDelegation) => import("./staketia/tx").MsgConfirmDelegationAmino;
        fromAmino: (object: import("./staketia/tx").MsgConfirmDelegationAmino) => import("./staketia/tx").MsgConfirmDelegation;
    };
    "/stride.staketia.MsgConfirmUndelegation": {
        aminoType: string;
        toAmino: (message: import("./staketia/tx").MsgConfirmUndelegation) => import("./staketia/tx").MsgConfirmUndelegationAmino;
        fromAmino: (object: import("./staketia/tx").MsgConfirmUndelegationAmino) => import("./staketia/tx").MsgConfirmUndelegation;
    };
    "/stride.staketia.MsgConfirmUnbondedTokenSweep": {
        aminoType: string;
        toAmino: (message: import("./staketia/tx").MsgConfirmUnbondedTokenSweep) => import("./staketia/tx").MsgConfirmUnbondedTokenSweepAmino;
        fromAmino: (object: import("./staketia/tx").MsgConfirmUnbondedTokenSweepAmino) => import("./staketia/tx").MsgConfirmUnbondedTokenSweep;
    };
    "/stride.staketia.MsgAdjustDelegatedBalance": {
        aminoType: string;
        toAmino: (message: import("./staketia/tx").MsgAdjustDelegatedBalance) => import("./staketia/tx").MsgAdjustDelegatedBalanceAmino;
        fromAmino: (object: import("./staketia/tx").MsgAdjustDelegatedBalanceAmino) => import("./staketia/tx").MsgAdjustDelegatedBalance;
    };
    "/stride.staketia.MsgUpdateInnerRedemptionRateBounds": {
        aminoType: string;
        toAmino: (message: import("./staketia/tx").MsgUpdateInnerRedemptionRateBounds) => import("./staketia/tx").MsgUpdateInnerRedemptionRateBoundsAmino;
        fromAmino: (object: import("./staketia/tx").MsgUpdateInnerRedemptionRateBoundsAmino) => import("./staketia/tx").MsgUpdateInnerRedemptionRateBounds;
    };
    "/stride.staketia.MsgResumeHostZone": {
        aminoType: string;
        toAmino: (message: import("./staketia/tx").MsgResumeHostZone) => import("./staketia/tx").MsgResumeHostZoneAmino;
        fromAmino: (object: import("./staketia/tx").MsgResumeHostZoneAmino) => import("./staketia/tx").MsgResumeHostZone;
    };
    "/stride.staketia.MsgRefreshRedemptionRate": {
        aminoType: string;
        toAmino: (message: import("./staketia/tx").MsgRefreshRedemptionRate) => import("./staketia/tx").MsgRefreshRedemptionRateAmino;
        fromAmino: (object: import("./staketia/tx").MsgRefreshRedemptionRateAmino) => import("./staketia/tx").MsgRefreshRedemptionRate;
    };
    "/stride.staketia.MsgOverwriteDelegationRecord": {
        aminoType: string;
        toAmino: (message: import("./staketia/tx").MsgOverwriteDelegationRecord) => import("./staketia/tx").MsgOverwriteDelegationRecordAmino;
        fromAmino: (object: import("./staketia/tx").MsgOverwriteDelegationRecordAmino) => import("./staketia/tx").MsgOverwriteDelegationRecord;
    };
    "/stride.staketia.MsgOverwriteUnbondingRecord": {
        aminoType: string;
        toAmino: (message: import("./staketia/tx").MsgOverwriteUnbondingRecord) => import("./staketia/tx").MsgOverwriteUnbondingRecordAmino;
        fromAmino: (object: import("./staketia/tx").MsgOverwriteUnbondingRecordAmino) => import("./staketia/tx").MsgOverwriteUnbondingRecord;
    };
    "/stride.staketia.MsgOverwriteRedemptionRecord": {
        aminoType: string;
        toAmino: (message: import("./staketia/tx").MsgOverwriteRedemptionRecord) => import("./staketia/tx").MsgOverwriteRedemptionRecordAmino;
        fromAmino: (object: import("./staketia/tx").MsgOverwriteRedemptionRecordAmino) => import("./staketia/tx").MsgOverwriteRedemptionRecord;
    };
    "/stride.staketia.MsgSetOperatorAddress": {
        aminoType: string;
        toAmino: (message: import("./staketia/tx").MsgSetOperatorAddress) => import("./staketia/tx").MsgSetOperatorAddressAmino;
        fromAmino: (object: import("./staketia/tx").MsgSetOperatorAddressAmino) => import("./staketia/tx").MsgSetOperatorAddress;
    };
    "/stride.stakeibc.MsgLiquidStake": {
        aminoType: string;
        toAmino: (message: import("./stakeibc/tx").MsgLiquidStake) => import("./stakeibc/tx").MsgLiquidStakeAmino;
        fromAmino: (object: import("./stakeibc/tx").MsgLiquidStakeAmino) => import("./stakeibc/tx").MsgLiquidStake;
    };
    "/stride.stakeibc.MsgLSMLiquidStake": {
        aminoType: string;
        toAmino: (message: import("./stakeibc/tx").MsgLSMLiquidStake) => import("./stakeibc/tx").MsgLSMLiquidStakeAmino;
        fromAmino: (object: import("./stakeibc/tx").MsgLSMLiquidStakeAmino) => import("./stakeibc/tx").MsgLSMLiquidStake;
    };
    "/stride.stakeibc.MsgRedeemStake": {
        aminoType: string;
        toAmino: (message: import("./stakeibc/tx").MsgRedeemStake) => import("./stakeibc/tx").MsgRedeemStakeAmino;
        fromAmino: (object: import("./stakeibc/tx").MsgRedeemStakeAmino) => import("./stakeibc/tx").MsgRedeemStake;
    };
    "/stride.stakeibc.MsgRegisterHostZone": {
        aminoType: string;
        toAmino: (message: import("./stakeibc/tx").MsgRegisterHostZone) => import("./stakeibc/tx").MsgRegisterHostZoneAmino;
        fromAmino: (object: import("./stakeibc/tx").MsgRegisterHostZoneAmino) => import("./stakeibc/tx").MsgRegisterHostZone;
    };
    "/stride.stakeibc.MsgClaimUndelegatedTokens": {
        aminoType: string;
        toAmino: (message: import("./stakeibc/tx").MsgClaimUndelegatedTokens) => import("./stakeibc/tx").MsgClaimUndelegatedTokensAmino;
        fromAmino: (object: import("./stakeibc/tx").MsgClaimUndelegatedTokensAmino) => import("./stakeibc/tx").MsgClaimUndelegatedTokens;
    };
    "/stride.stakeibc.MsgRebalanceValidators": {
        aminoType: string;
        toAmino: (message: import("./stakeibc/tx").MsgRebalanceValidators) => import("./stakeibc/tx").MsgRebalanceValidatorsAmino;
        fromAmino: (object: import("./stakeibc/tx").MsgRebalanceValidatorsAmino) => import("./stakeibc/tx").MsgRebalanceValidators;
    };
    "/stride.stakeibc.MsgAddValidators": {
        aminoType: string;
        toAmino: (message: import("./stakeibc/tx").MsgAddValidators) => import("./stakeibc/tx").MsgAddValidatorsAmino;
        fromAmino: (object: import("./stakeibc/tx").MsgAddValidatorsAmino) => import("./stakeibc/tx").MsgAddValidators;
    };
    "/stride.stakeibc.MsgChangeValidatorWeights": {
        aminoType: string;
        toAmino: (message: import("./stakeibc/tx").MsgChangeValidatorWeights) => import("./stakeibc/tx").MsgChangeValidatorWeightsAmino;
        fromAmino: (object: import("./stakeibc/tx").MsgChangeValidatorWeightsAmino) => import("./stakeibc/tx").MsgChangeValidatorWeights;
    };
    "/stride.stakeibc.MsgDeleteValidator": {
        aminoType: string;
        toAmino: (message: import("./stakeibc/tx").MsgDeleteValidator) => import("./stakeibc/tx").MsgDeleteValidatorAmino;
        fromAmino: (object: import("./stakeibc/tx").MsgDeleteValidatorAmino) => import("./stakeibc/tx").MsgDeleteValidator;
    };
    "/stride.stakeibc.MsgRestoreInterchainAccount": {
        aminoType: string;
        toAmino: (message: import("./stakeibc/tx").MsgRestoreInterchainAccount) => import("./stakeibc/tx").MsgRestoreInterchainAccountAmino;
        fromAmino: (object: import("./stakeibc/tx").MsgRestoreInterchainAccountAmino) => import("./stakeibc/tx").MsgRestoreInterchainAccount;
    };
    "/stride.stakeibc.MsgUpdateValidatorSharesExchRate": {
        aminoType: string;
        toAmino: (message: import("./stakeibc/tx").MsgUpdateValidatorSharesExchRate) => import("./stakeibc/tx").MsgUpdateValidatorSharesExchRateAmino;
        fromAmino: (object: import("./stakeibc/tx").MsgUpdateValidatorSharesExchRateAmino) => import("./stakeibc/tx").MsgUpdateValidatorSharesExchRate;
    };
    "/stride.stakeibc.MsgCalibrateDelegation": {
        aminoType: string;
        toAmino: (message: import("./stakeibc/tx").MsgCalibrateDelegation) => import("./stakeibc/tx").MsgCalibrateDelegationAmino;
        fromAmino: (object: import("./stakeibc/tx").MsgCalibrateDelegationAmino) => import("./stakeibc/tx").MsgCalibrateDelegation;
    };
    "/stride.stakeibc.MsgClearBalance": {
        aminoType: string;
        toAmino: (message: import("./stakeibc/tx").MsgClearBalance) => import("./stakeibc/tx").MsgClearBalanceAmino;
        fromAmino: (object: import("./stakeibc/tx").MsgClearBalanceAmino) => import("./stakeibc/tx").MsgClearBalance;
    };
    "/stride.stakeibc.MsgUpdateInnerRedemptionRateBounds": {
        aminoType: string;
        toAmino: (message: import("./stakeibc/tx").MsgUpdateInnerRedemptionRateBounds) => import("./stakeibc/tx").MsgUpdateInnerRedemptionRateBoundsAmino;
        fromAmino: (object: import("./stakeibc/tx").MsgUpdateInnerRedemptionRateBoundsAmino) => import("./stakeibc/tx").MsgUpdateInnerRedemptionRateBounds;
    };
    "/stride.stakeibc.MsgResumeHostZone": {
        aminoType: string;
        toAmino: (message: import("./stakeibc/tx").MsgResumeHostZone) => import("./stakeibc/tx").MsgResumeHostZoneAmino;
        fromAmino: (object: import("./stakeibc/tx").MsgResumeHostZoneAmino) => import("./stakeibc/tx").MsgResumeHostZone;
    };
    "/stride.stakeibc.MsgCreateTradeRoute": {
        aminoType: string;
        toAmino: (message: import("./stakeibc/tx").MsgCreateTradeRoute) => import("./stakeibc/tx").MsgCreateTradeRouteAmino;
        fromAmino: (object: import("./stakeibc/tx").MsgCreateTradeRouteAmino) => import("./stakeibc/tx").MsgCreateTradeRoute;
    };
    "/stride.stakeibc.MsgDeleteTradeRoute": {
        aminoType: string;
        toAmino: (message: import("./stakeibc/tx").MsgDeleteTradeRoute) => import("./stakeibc/tx").MsgDeleteTradeRouteAmino;
        fromAmino: (object: import("./stakeibc/tx").MsgDeleteTradeRouteAmino) => import("./stakeibc/tx").MsgDeleteTradeRoute;
    };
    "/stride.stakeibc.MsgUpdateTradeRoute": {
        aminoType: string;
        toAmino: (message: import("./stakeibc/tx").MsgUpdateTradeRoute) => import("./stakeibc/tx").MsgUpdateTradeRouteAmino;
        fromAmino: (object: import("./stakeibc/tx").MsgUpdateTradeRouteAmino) => import("./stakeibc/tx").MsgUpdateTradeRoute;
    };
    "/stride.stakeibc.MsgSetCommunityPoolRebate": {
        aminoType: string;
        toAmino: (message: import("./stakeibc/tx").MsgSetCommunityPoolRebate) => import("./stakeibc/tx").MsgSetCommunityPoolRebateAmino;
        fromAmino: (object: import("./stakeibc/tx").MsgSetCommunityPoolRebateAmino) => import("./stakeibc/tx").MsgSetCommunityPoolRebate;
    };
    "/stride.stakeibc.MsgToggleTradeController": {
        aminoType: string;
        toAmino: (message: import("./stakeibc/tx").MsgToggleTradeController) => import("./stakeibc/tx").MsgToggleTradeControllerAmino;
        fromAmino: (object: import("./stakeibc/tx").MsgToggleTradeControllerAmino) => import("./stakeibc/tx").MsgToggleTradeController;
    };
    "/stride.stakeibc.MsgUpdateHostZoneParams": {
        aminoType: string;
        toAmino: (message: import("./stakeibc/tx").MsgUpdateHostZoneParams) => import("./stakeibc/tx").MsgUpdateHostZoneParamsAmino;
        fromAmino: (object: import("./stakeibc/tx").MsgUpdateHostZoneParamsAmino) => import("./stakeibc/tx").MsgUpdateHostZoneParams;
    };
    "/stride.stakedym.MsgLiquidStake": {
        aminoType: string;
        toAmino: (message: import("./stakedym/tx").MsgLiquidStake) => import("./stakedym/tx").MsgLiquidStakeAmino;
        fromAmino: (object: import("./stakedym/tx").MsgLiquidStakeAmino) => import("./stakedym/tx").MsgLiquidStake;
    };
    "/stride.stakedym.MsgRedeemStake": {
        aminoType: string;
        toAmino: (message: import("./stakedym/tx").MsgRedeemStake) => import("./stakedym/tx").MsgRedeemStakeAmino;
        fromAmino: (object: import("./stakedym/tx").MsgRedeemStakeAmino) => import("./stakedym/tx").MsgRedeemStake;
    };
    "/stride.stakedym.MsgConfirmDelegation": {
        aminoType: string;
        toAmino: (message: import("./stakedym/tx").MsgConfirmDelegation) => import("./stakedym/tx").MsgConfirmDelegationAmino;
        fromAmino: (object: import("./stakedym/tx").MsgConfirmDelegationAmino) => import("./stakedym/tx").MsgConfirmDelegation;
    };
    "/stride.stakedym.MsgConfirmUndelegation": {
        aminoType: string;
        toAmino: (message: import("./stakedym/tx").MsgConfirmUndelegation) => import("./stakedym/tx").MsgConfirmUndelegationAmino;
        fromAmino: (object: import("./stakedym/tx").MsgConfirmUndelegationAmino) => import("./stakedym/tx").MsgConfirmUndelegation;
    };
    "/stride.stakedym.MsgConfirmUnbondedTokenSweep": {
        aminoType: string;
        toAmino: (message: import("./stakedym/tx").MsgConfirmUnbondedTokenSweep) => import("./stakedym/tx").MsgConfirmUnbondedTokenSweepAmino;
        fromAmino: (object: import("./stakedym/tx").MsgConfirmUnbondedTokenSweepAmino) => import("./stakedym/tx").MsgConfirmUnbondedTokenSweep;
    };
    "/stride.stakedym.MsgAdjustDelegatedBalance": {
        aminoType: string;
        toAmino: (message: import("./stakedym/tx").MsgAdjustDelegatedBalance) => import("./stakedym/tx").MsgAdjustDelegatedBalanceAmino;
        fromAmino: (object: import("./stakedym/tx").MsgAdjustDelegatedBalanceAmino) => import("./stakedym/tx").MsgAdjustDelegatedBalance;
    };
    "/stride.stakedym.MsgUpdateInnerRedemptionRateBounds": {
        aminoType: string;
        toAmino: (message: import("./stakedym/tx").MsgUpdateInnerRedemptionRateBounds) => import("./stakedym/tx").MsgUpdateInnerRedemptionRateBoundsAmino;
        fromAmino: (object: import("./stakedym/tx").MsgUpdateInnerRedemptionRateBoundsAmino) => import("./stakedym/tx").MsgUpdateInnerRedemptionRateBounds;
    };
    "/stride.stakedym.MsgResumeHostZone": {
        aminoType: string;
        toAmino: (message: import("./stakedym/tx").MsgResumeHostZone) => import("./stakedym/tx").MsgResumeHostZoneAmino;
        fromAmino: (object: import("./stakedym/tx").MsgResumeHostZoneAmino) => import("./stakedym/tx").MsgResumeHostZone;
    };
    "/stride.stakedym.MsgRefreshRedemptionRate": {
        aminoType: string;
        toAmino: (message: import("./stakedym/tx").MsgRefreshRedemptionRate) => import("./stakedym/tx").MsgRefreshRedemptionRateAmino;
        fromAmino: (object: import("./stakedym/tx").MsgRefreshRedemptionRateAmino) => import("./stakedym/tx").MsgRefreshRedemptionRate;
    };
    "/stride.stakedym.MsgOverwriteDelegationRecord": {
        aminoType: string;
        toAmino: (message: import("./stakedym/tx").MsgOverwriteDelegationRecord) => import("./stakedym/tx").MsgOverwriteDelegationRecordAmino;
        fromAmino: (object: import("./stakedym/tx").MsgOverwriteDelegationRecordAmino) => import("./stakedym/tx").MsgOverwriteDelegationRecord;
    };
    "/stride.stakedym.MsgOverwriteUnbondingRecord": {
        aminoType: string;
        toAmino: (message: import("./stakedym/tx").MsgOverwriteUnbondingRecord) => import("./stakedym/tx").MsgOverwriteUnbondingRecordAmino;
        fromAmino: (object: import("./stakedym/tx").MsgOverwriteUnbondingRecordAmino) => import("./stakedym/tx").MsgOverwriteUnbondingRecord;
    };
    "/stride.stakedym.MsgOverwriteRedemptionRecord": {
        aminoType: string;
        toAmino: (message: import("./stakedym/tx").MsgOverwriteRedemptionRecord) => import("./stakedym/tx").MsgOverwriteRedemptionRecordAmino;
        fromAmino: (object: import("./stakedym/tx").MsgOverwriteRedemptionRecordAmino) => import("./stakedym/tx").MsgOverwriteRedemptionRecord;
    };
    "/stride.stakedym.MsgSetOperatorAddress": {
        aminoType: string;
        toAmino: (message: import("./stakedym/tx").MsgSetOperatorAddress) => import("./stakedym/tx").MsgSetOperatorAddressAmino;
        fromAmino: (object: import("./stakedym/tx").MsgSetOperatorAddressAmino) => import("./stakedym/tx").MsgSetOperatorAddress;
    };
    "/stride.interchainquery.v1.MsgSubmitQueryResponse": {
        aminoType: string;
        toAmino: (message: import("./interchainquery/v1/messages").MsgSubmitQueryResponse) => import("./interchainquery/v1/messages").MsgSubmitQueryResponseAmino;
        fromAmino: (object: import("./interchainquery/v1/messages").MsgSubmitQueryResponseAmino) => import("./interchainquery/v1/messages").MsgSubmitQueryResponse;
    };
    "/stride.icaoracle.MsgAddOracle": {
        aminoType: string;
        toAmino: (message: import("./icaoracle/tx").MsgAddOracle) => import("./icaoracle/tx").MsgAddOracleAmino;
        fromAmino: (object: import("./icaoracle/tx").MsgAddOracleAmino) => import("./icaoracle/tx").MsgAddOracle;
    };
    "/stride.icaoracle.MsgInstantiateOracle": {
        aminoType: string;
        toAmino: (message: import("./icaoracle/tx").MsgInstantiateOracle) => import("./icaoracle/tx").MsgInstantiateOracleAmino;
        fromAmino: (object: import("./icaoracle/tx").MsgInstantiateOracleAmino) => import("./icaoracle/tx").MsgInstantiateOracle;
    };
    "/stride.icaoracle.MsgRestoreOracleICA": {
        aminoType: string;
        toAmino: (message: import("./icaoracle/tx").MsgRestoreOracleICA) => import("./icaoracle/tx").MsgRestoreOracleICAAmino;
        fromAmino: (object: import("./icaoracle/tx").MsgRestoreOracleICAAmino) => import("./icaoracle/tx").MsgRestoreOracleICA;
    };
    "/stride.icaoracle.MsgToggleOracle": {
        aminoType: string;
        toAmino: (message: import("./icaoracle/tx").MsgToggleOracle) => import("./icaoracle/tx").MsgToggleOracleAmino;
        fromAmino: (object: import("./icaoracle/tx").MsgToggleOracleAmino) => import("./icaoracle/tx").MsgToggleOracle;
    };
    "/stride.icaoracle.MsgRemoveOracle": {
        aminoType: string;
        toAmino: (message: import("./icaoracle/tx").MsgRemoveOracle) => import("./icaoracle/tx").MsgRemoveOracleAmino;
        fromAmino: (object: import("./icaoracle/tx").MsgRemoveOracleAmino) => import("./icaoracle/tx").MsgRemoveOracle;
    };
    "/stride.claim.MsgSetAirdropAllocations": {
        aminoType: string;
        toAmino: (message: import("./claim/tx").MsgSetAirdropAllocations) => import("./claim/tx").MsgSetAirdropAllocationsAmino;
        fromAmino: (object: import("./claim/tx").MsgSetAirdropAllocationsAmino) => import("./claim/tx").MsgSetAirdropAllocations;
    };
    "/stride.claim.MsgClaimFreeAmount": {
        aminoType: string;
        toAmino: (message: import("./claim/tx").MsgClaimFreeAmount) => import("./claim/tx").MsgClaimFreeAmountAmino;
        fromAmino: (object: import("./claim/tx").MsgClaimFreeAmountAmino) => import("./claim/tx").MsgClaimFreeAmount;
    };
    "/stride.claim.MsgCreateAirdrop": {
        aminoType: string;
        toAmino: (message: import("./claim/tx").MsgCreateAirdrop) => import("./claim/tx").MsgCreateAirdropAmino;
        fromAmino: (object: import("./claim/tx").MsgCreateAirdropAmino) => import("./claim/tx").MsgCreateAirdrop;
    };
    "/stride.claim.MsgDeleteAirdrop": {
        aminoType: string;
        toAmino: (message: import("./claim/tx").MsgDeleteAirdrop) => import("./claim/tx").MsgDeleteAirdropAmino;
        fromAmino: (object: import("./claim/tx").MsgDeleteAirdropAmino) => import("./claim/tx").MsgDeleteAirdrop;
    };
    "/stride.airdrop.MsgClaimDaily": {
        aminoType: string;
        toAmino: (message: import("./airdrop/tx").MsgClaimDaily) => import("./airdrop/tx").MsgClaimDailyAmino;
        fromAmino: (object: import("./airdrop/tx").MsgClaimDailyAmino) => import("./airdrop/tx").MsgClaimDaily;
    };
    "/stride.airdrop.MsgClaimEarly": {
        aminoType: string;
        toAmino: (message: import("./airdrop/tx").MsgClaimEarly) => import("./airdrop/tx").MsgClaimEarlyAmino;
        fromAmino: (object: import("./airdrop/tx").MsgClaimEarlyAmino) => import("./airdrop/tx").MsgClaimEarly;
    };
    "/stride.airdrop.MsgCreateAirdrop": {
        aminoType: string;
        toAmino: (message: import("./airdrop/tx").MsgCreateAirdrop) => import("./airdrop/tx").MsgCreateAirdropAmino;
        fromAmino: (object: import("./airdrop/tx").MsgCreateAirdropAmino) => import("./airdrop/tx").MsgCreateAirdrop;
    };
    "/stride.airdrop.MsgUpdateAirdrop": {
        aminoType: string;
        toAmino: (message: import("./airdrop/tx").MsgUpdateAirdrop) => import("./airdrop/tx").MsgUpdateAirdropAmino;
        fromAmino: (object: import("./airdrop/tx").MsgUpdateAirdropAmino) => import("./airdrop/tx").MsgUpdateAirdrop;
    };
    "/stride.airdrop.MsgAddAllocations": {
        aminoType: string;
        toAmino: (message: import("./airdrop/tx").MsgAddAllocations) => import("./airdrop/tx").MsgAddAllocationsAmino;
        fromAmino: (object: import("./airdrop/tx").MsgAddAllocationsAmino) => import("./airdrop/tx").MsgAddAllocations;
    };
    "/stride.airdrop.MsgUpdateUserAllocation": {
        aminoType: string;
        toAmino: (message: import("./airdrop/tx").MsgUpdateUserAllocation) => import("./airdrop/tx").MsgUpdateUserAllocationAmino;
        fromAmino: (object: import("./airdrop/tx").MsgUpdateUserAllocationAmino) => import("./airdrop/tx").MsgUpdateUserAllocation;
    };
    "/stride.airdrop.MsgLinkAddresses": {
        aminoType: string;
        toAmino: (message: import("./airdrop/tx").MsgLinkAddresses) => import("./airdrop/tx").MsgLinkAddressesAmino;
        fromAmino: (object: import("./airdrop/tx").MsgLinkAddressesAmino) => import("./airdrop/tx").MsgLinkAddresses;
    };
};
export declare const strideProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningStrideClientOptions: ({ defaultTypes }?: {
    defaultTypes?: readonly [string, GeneratedType][];
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningStrideClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
