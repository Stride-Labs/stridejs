import { TelescopeGeneratedType } from "../../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgSetWithdrawAddress, MsgWithdrawDelegatorReward, MsgWithdrawValidatorCommission, MsgWithdrawTokenizeShareRecordReward, MsgWithdrawAllTokenizeShareRecordReward, MsgFundCommunityPool } from "./tx";
export declare const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        setWithdrawAddress(value: MsgSetWithdrawAddress): {
            typeUrl: string;
            value: Uint8Array;
        };
        withdrawDelegatorReward(value: MsgWithdrawDelegatorReward): {
            typeUrl: string;
            value: Uint8Array;
        };
        withdrawValidatorCommission(value: MsgWithdrawValidatorCommission): {
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
        fundCommunityPool(value: MsgFundCommunityPool): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        setWithdrawAddress(value: MsgSetWithdrawAddress): {
            typeUrl: string;
            value: MsgSetWithdrawAddress;
        };
        withdrawDelegatorReward(value: MsgWithdrawDelegatorReward): {
            typeUrl: string;
            value: MsgWithdrawDelegatorReward;
        };
        withdrawValidatorCommission(value: MsgWithdrawValidatorCommission): {
            typeUrl: string;
            value: MsgWithdrawValidatorCommission;
        };
        withdrawTokenizeShareRecordReward(value: MsgWithdrawTokenizeShareRecordReward): {
            typeUrl: string;
            value: MsgWithdrawTokenizeShareRecordReward;
        };
        withdrawAllTokenizeShareRecordReward(value: MsgWithdrawAllTokenizeShareRecordReward): {
            typeUrl: string;
            value: MsgWithdrawAllTokenizeShareRecordReward;
        };
        fundCommunityPool(value: MsgFundCommunityPool): {
            typeUrl: string;
            value: MsgFundCommunityPool;
        };
    };
    fromPartial: {
        setWithdrawAddress(value: MsgSetWithdrawAddress): {
            typeUrl: string;
            value: MsgSetWithdrawAddress;
        };
        withdrawDelegatorReward(value: MsgWithdrawDelegatorReward): {
            typeUrl: string;
            value: MsgWithdrawDelegatorReward;
        };
        withdrawValidatorCommission(value: MsgWithdrawValidatorCommission): {
            typeUrl: string;
            value: MsgWithdrawValidatorCommission;
        };
        withdrawTokenizeShareRecordReward(value: MsgWithdrawTokenizeShareRecordReward): {
            typeUrl: string;
            value: MsgWithdrawTokenizeShareRecordReward;
        };
        withdrawAllTokenizeShareRecordReward(value: MsgWithdrawAllTokenizeShareRecordReward): {
            typeUrl: string;
            value: MsgWithdrawAllTokenizeShareRecordReward;
        };
        fundCommunityPool(value: MsgFundCommunityPool): {
            typeUrl: string;
            value: MsgFundCommunityPool;
        };
    };
};
