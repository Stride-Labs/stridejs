import { Validator, ValidatorSDKType } from "./validator";
import { ICAAccount, ICAAccountSDKType } from "./ica_account";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
/** next id: 19 */
export interface HostZone {
    chainId: string;
    connectionId: string;
    bech32prefix: string;
    transferChannelId: string;
    validators: Validator[];
    blacklistedValidators: Validator[];
    withdrawalAccount: ICAAccount;
    feeAccount: ICAAccount;
    delegationAccount: ICAAccount;
    redemptionAccount: ICAAccount;
    /** ibc denom on stride */
    IBCDenom: string;
    /** native denom on host zone */
    HostDenom: string;
    /**
     * TODO(TEST-68): Should we make this an array and store the last n redemption rates
     * then calculate a TWARR?
     */
    LastRedemptionRate: string;
    RedemptionRate: string;
    /** stores how many days we should wait before issuing unbondings */
    unbondingFrequency: Long;
    /** TODO(TEST-101) int to dec */
    stakedBal: Long;
    address: string;
}
/** next id: 19 */
export interface HostZoneSDKType {
    chainId: string;
    connectionId: string;
    bech32prefix: string;
    transferChannelId: string;
    validators: ValidatorSDKType[];
    blacklistedValidators: ValidatorSDKType[];
    withdrawalAccount: ICAAccountSDKType;
    feeAccount: ICAAccountSDKType;
    delegationAccount: ICAAccountSDKType;
    redemptionAccount: ICAAccountSDKType;
    /** ibc denom on stride */
    IBCDenom: string;
    /** native denom on host zone */
    HostDenom: string;
    /**
     * TODO(TEST-68): Should we make this an array and store the last n redemption rates
     * then calculate a TWARR?
     */
    LastRedemptionRate: string;
    RedemptionRate: string;
    /** stores how many days we should wait before issuing unbondings */
    unbondingFrequency: Long;
    /** TODO(TEST-101) int to dec */
    stakedBal: Long;
    address: string;
}
export declare const HostZone: {
    encode(message: HostZone, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): HostZone;
    fromPartial(object: DeepPartial<HostZone>): HostZone;
};
