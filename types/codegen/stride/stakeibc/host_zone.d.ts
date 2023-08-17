import { Validator, ValidatorSDKType } from "./validator";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
export interface HostZone {
    chainId: string;
    bech32prefix: string;
    connectionId: string;
    transferChannelId: string;
    /** ibc denom on stride */
    ibcDenom: string;
    /** native denom on host zone */
    hostDenom: string;
    unbondingPeriod: Long;
    validators: Validator[];
    depositAddress: string;
    withdrawalIcaAddress: string;
    feeIcaAddress: string;
    delegationIcaAddress: string;
    redemptionIcaAddress: string;
    totalDelegations: string;
    lastRedemptionRate: string;
    redemptionRate: string;
    minRedemptionRate: string;
    maxRedemptionRate: string;
    lsmLiquidStakeEnabled: boolean;
    halted: boolean;
}
export interface HostZoneSDKType {
    chain_id: string;
    bech32prefix: string;
    connection_id: string;
    transfer_channel_id: string;
    /** ibc denom on stride */
    ibc_denom: string;
    /** native denom on host zone */
    host_denom: string;
    unbonding_period: Long;
    validators: ValidatorSDKType[];
    deposit_address: string;
    withdrawal_ica_address: string;
    fee_ica_address: string;
    delegation_ica_address: string;
    redemption_ica_address: string;
    total_delegations: string;
    last_redemption_rate: string;
    redemption_rate: string;
    min_redemption_rate: string;
    max_redemption_rate: string;
    lsm_liquid_stake_enabled: boolean;
    halted: boolean;
}
export declare const HostZone: {
    encode(message: HostZone, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): HostZone;
    fromPartial(object: DeepPartial<HostZone>): HostZone;
};
