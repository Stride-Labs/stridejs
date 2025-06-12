import { TelescopeGeneratedType } from "../../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgUpdateParams, MsgTokenizeShares, MsgRedeemTokensForShares, MsgTransferTokenizeShareRecord, MsgDisableTokenizeShares, MsgEnableTokenizeShares, MsgWithdrawTokenizeShareRecordReward, MsgWithdrawAllTokenizeShareRecordReward } from "./tx";
export declare const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        updateParams(value: MsgUpdateParams): {
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
        withdrawTokenizeShareRecordReward(value: MsgWithdrawTokenizeShareRecordReward): {
            typeUrl: string;
            value: Uint8Array;
        };
        withdrawAllTokenizeShareRecordReward(value: MsgWithdrawAllTokenizeShareRecordReward): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
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
        withdrawTokenizeShareRecordReward(value: MsgWithdrawTokenizeShareRecordReward): {
            typeUrl: string;
            value: MsgWithdrawTokenizeShareRecordReward;
        };
        withdrawAllTokenizeShareRecordReward(value: MsgWithdrawAllTokenizeShareRecordReward): {
            typeUrl: string;
            value: MsgWithdrawAllTokenizeShareRecordReward;
        };
    };
    fromPartial: {
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
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
        withdrawTokenizeShareRecordReward(value: MsgWithdrawTokenizeShareRecordReward): {
            typeUrl: string;
            value: MsgWithdrawTokenizeShareRecordReward;
        };
        withdrawAllTokenizeShareRecordReward(value: MsgWithdrawAllTokenizeShareRecordReward): {
            typeUrl: string;
            value: MsgWithdrawAllTokenizeShareRecordReward;
        };
    };
};
