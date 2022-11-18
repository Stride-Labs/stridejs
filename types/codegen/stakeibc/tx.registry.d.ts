import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgLiquidStake, MsgRedeemStake, MsgRegisterHostZone, MsgClaimUndelegatedTokens, MsgRebalanceValidators, MsgAddValidator, MsgChangeValidatorWeight, MsgDeleteValidator, MsgRestoreInterchainAccount, MsgUpdateValidatorSharesExchRate, MsgClearBalance } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        liquidStake(value: MsgLiquidStake): {
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
        addValidator(value: MsgAddValidator): {
            typeUrl: string;
            value: Uint8Array;
        };
        changeValidatorWeight(value: MsgChangeValidatorWeight): {
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
        updateValidatorSharesExchRate(value: MsgUpdateValidatorSharesExchRate): {
            typeUrl: string;
            value: Uint8Array;
        };
        clearBalance(value: MsgClearBalance): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        liquidStake(value: MsgLiquidStake): {
            typeUrl: string;
            value: MsgLiquidStake;
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
        addValidator(value: MsgAddValidator): {
            typeUrl: string;
            value: MsgAddValidator;
        };
        changeValidatorWeight(value: MsgChangeValidatorWeight): {
            typeUrl: string;
            value: MsgChangeValidatorWeight;
        };
        deleteValidator(value: MsgDeleteValidator): {
            typeUrl: string;
            value: MsgDeleteValidator;
        };
        restoreInterchainAccount(value: MsgRestoreInterchainAccount): {
            typeUrl: string;
            value: MsgRestoreInterchainAccount;
        };
        updateValidatorSharesExchRate(value: MsgUpdateValidatorSharesExchRate): {
            typeUrl: string;
            value: MsgUpdateValidatorSharesExchRate;
        };
        clearBalance(value: MsgClearBalance): {
            typeUrl: string;
            value: MsgClearBalance;
        };
    };
    fromPartial: {
        liquidStake(value: MsgLiquidStake): {
            typeUrl: string;
            value: MsgLiquidStake;
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
        addValidator(value: MsgAddValidator): {
            typeUrl: string;
            value: MsgAddValidator;
        };
        changeValidatorWeight(value: MsgChangeValidatorWeight): {
            typeUrl: string;
            value: MsgChangeValidatorWeight;
        };
        deleteValidator(value: MsgDeleteValidator): {
            typeUrl: string;
            value: MsgDeleteValidator;
        };
        restoreInterchainAccount(value: MsgRestoreInterchainAccount): {
            typeUrl: string;
            value: MsgRestoreInterchainAccount;
        };
        updateValidatorSharesExchRate(value: MsgUpdateValidatorSharesExchRate): {
            typeUrl: string;
            value: MsgUpdateValidatorSharesExchRate;
        };
        clearBalance(value: MsgClearBalance): {
            typeUrl: string;
            value: MsgClearBalance;
        };
    };
};
