import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateValidator, MsgEditValidator, MsgDelegate, MsgBeginRedelegate, MsgUndelegate, MsgUnbondValidator, MsgCancelUnbondingDelegation, MsgTokenizeShares, MsgRedeemTokensForShares, MsgTransferTokenizeShareRecord, MsgDisableTokenizeShares, MsgEnableTokenizeShares, MsgValidatorBond } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        createValidator(value: MsgCreateValidator): {
            typeUrl: string;
            value: Uint8Array;
        };
        editValidator(value: MsgEditValidator): {
            typeUrl: string;
            value: Uint8Array;
        };
        delegate(value: MsgDelegate): {
            typeUrl: string;
            value: Uint8Array;
        };
        beginRedelegate(value: MsgBeginRedelegate): {
            typeUrl: string;
            value: Uint8Array;
        };
        undelegate(value: MsgUndelegate): {
            typeUrl: string;
            value: Uint8Array;
        };
        unbondValidator(value: MsgUnbondValidator): {
            typeUrl: string;
            value: Uint8Array;
        };
        cancelUnbondingDelegation(value: MsgCancelUnbondingDelegation): {
            typeUrl: string;
            value: Uint8Array;
        };
        tokenizeShares(value: MsgTokenizeShares): {
            typeUrl: string;
            value: Uint8Array;
        };
        redeemTokensForShares(value: MsgRedeemTokensForShares): {
            typeUrl: string;
            value: Uint8Array;
        };
        transferTokenizeShareRecord(value: MsgTransferTokenizeShareRecord): {
            typeUrl: string;
            value: Uint8Array;
        };
        disableTokenizeShares(value: MsgDisableTokenizeShares): {
            typeUrl: string;
            value: Uint8Array;
        };
        enableTokenizeShares(value: MsgEnableTokenizeShares): {
            typeUrl: string;
            value: Uint8Array;
        };
        validatorBond(value: MsgValidatorBond): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        createValidator(value: MsgCreateValidator): {
            typeUrl: string;
            value: MsgCreateValidator;
        };
        editValidator(value: MsgEditValidator): {
            typeUrl: string;
            value: MsgEditValidator;
        };
        delegate(value: MsgDelegate): {
            typeUrl: string;
            value: MsgDelegate;
        };
        beginRedelegate(value: MsgBeginRedelegate): {
            typeUrl: string;
            value: MsgBeginRedelegate;
        };
        undelegate(value: MsgUndelegate): {
            typeUrl: string;
            value: MsgUndelegate;
        };
        unbondValidator(value: MsgUnbondValidator): {
            typeUrl: string;
            value: MsgUnbondValidator;
        };
        cancelUnbondingDelegation(value: MsgCancelUnbondingDelegation): {
            typeUrl: string;
            value: MsgCancelUnbondingDelegation;
        };
        tokenizeShares(value: MsgTokenizeShares): {
            typeUrl: string;
            value: MsgTokenizeShares;
        };
        redeemTokensForShares(value: MsgRedeemTokensForShares): {
            typeUrl: string;
            value: MsgRedeemTokensForShares;
        };
        transferTokenizeShareRecord(value: MsgTransferTokenizeShareRecord): {
            typeUrl: string;
            value: MsgTransferTokenizeShareRecord;
        };
        disableTokenizeShares(value: MsgDisableTokenizeShares): {
            typeUrl: string;
            value: MsgDisableTokenizeShares;
        };
        enableTokenizeShares(value: MsgEnableTokenizeShares): {
            typeUrl: string;
            value: MsgEnableTokenizeShares;
        };
        validatorBond(value: MsgValidatorBond): {
            typeUrl: string;
            value: MsgValidatorBond;
        };
    };
    fromPartial: {
        createValidator(value: MsgCreateValidator): {
            typeUrl: string;
            value: MsgCreateValidator;
        };
        editValidator(value: MsgEditValidator): {
            typeUrl: string;
            value: MsgEditValidator;
        };
        delegate(value: MsgDelegate): {
            typeUrl: string;
            value: MsgDelegate;
        };
        beginRedelegate(value: MsgBeginRedelegate): {
            typeUrl: string;
            value: MsgBeginRedelegate;
        };
        undelegate(value: MsgUndelegate): {
            typeUrl: string;
            value: MsgUndelegate;
        };
        unbondValidator(value: MsgUnbondValidator): {
            typeUrl: string;
            value: MsgUnbondValidator;
        };
        cancelUnbondingDelegation(value: MsgCancelUnbondingDelegation): {
            typeUrl: string;
            value: MsgCancelUnbondingDelegation;
        };
        tokenizeShares(value: MsgTokenizeShares): {
            typeUrl: string;
            value: MsgTokenizeShares;
        };
        redeemTokensForShares(value: MsgRedeemTokensForShares): {
            typeUrl: string;
            value: MsgRedeemTokensForShares;
        };
        transferTokenizeShareRecord(value: MsgTransferTokenizeShareRecord): {
            typeUrl: string;
            value: MsgTransferTokenizeShareRecord;
        };
        disableTokenizeShares(value: MsgDisableTokenizeShares): {
            typeUrl: string;
            value: MsgDisableTokenizeShares;
        };
        enableTokenizeShares(value: MsgEnableTokenizeShares): {
            typeUrl: string;
            value: MsgEnableTokenizeShares;
        };
        validatorBond(value: MsgValidatorBond): {
            typeUrl: string;
            value: MsgValidatorBond;
        };
    };
};
