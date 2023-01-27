import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
export interface Params_ZoneComAddressEntry {
    key: string;
    value: string;
}
export interface Params_ZoneComAddressEntrySDKType {
    key: string;
    value: string;
}
/**
 * Params defines the parameters for the module.
 * next id: 18
 */
export interface Params {
    /** define epoch lengths, in stride_epochs */
    rewardsInterval: Long;
    delegateInterval: Long;
    depositInterval: Long;
    redemptionRateInterval: Long;
    strideCommission: Long;
    /**
     * zone_com_address stores which addresses to
     * send the Stride commission too, as well as what portion
     * of the fee each address is entitled to
     * TODO implement this
     */
    zoneComAddress: {
        [key: string]: string;
    };
    reinvestInterval: Long;
    validatorRebalancingThreshold: Long;
    icaTimeoutNanos: Long;
    bufferSize: Long;
    ibcTimeoutBlocks: Long;
    feeTransferTimeoutNanos: Long;
    maxStakeIcaCallsPerEpoch: Long;
    safetyMinRedemptionRateThreshold: Long;
    safetyMaxRedemptionRateThreshold: Long;
    ibcTransferTimeoutNanos: Long;
    safetyNumValidators: Long;
    safetyMaxSlashPercent: Long;
}
/**
 * Params defines the parameters for the module.
 * next id: 18
 */
export interface ParamsSDKType {
    /** define epoch lengths, in stride_epochs */
    rewards_interval: Long;
    delegate_interval: Long;
    deposit_interval: Long;
    redemption_rate_interval: Long;
    stride_commission: Long;
    /**
     * zone_com_address stores which addresses to
     * send the Stride commission too, as well as what portion
     * of the fee each address is entitled to
     * TODO implement this
     */
    zone_com_address: {
        [key: string]: string;
    };
    reinvest_interval: Long;
    validator_rebalancing_threshold: Long;
    ica_timeout_nanos: Long;
    buffer_size: Long;
    ibc_timeout_blocks: Long;
    fee_transfer_timeout_nanos: Long;
    max_stake_ica_calls_per_epoch: Long;
    safety_min_redemption_rate_threshold: Long;
    safety_max_redemption_rate_threshold: Long;
    ibc_transfer_timeout_nanos: Long;
    safety_num_validators: Long;
    safety_max_slash_percent: Long;
}
export declare const Params_ZoneComAddressEntry: {
    encode(message: Params_ZoneComAddressEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params_ZoneComAddressEntry;
    fromPartial(object: DeepPartial<Params_ZoneComAddressEntry>): Params_ZoneComAddressEntry;
};
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromPartial(object: DeepPartial<Params>): Params;
};
