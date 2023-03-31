import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
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
    reinvestInterval: Long;
    icaTimeoutNanos: Long;
    bufferSize: Long;
    ibcTimeoutBlocks: Long;
    feeTransferTimeoutNanos: Long;
    maxStakeIcaCallsPerEpoch: Long;
    defaultMinRedemptionRateThreshold: Long;
    defaultMaxRedemptionRateThreshold: Long;
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
    reinvest_interval: Long;
    ica_timeout_nanos: Long;
    buffer_size: Long;
    ibc_timeout_blocks: Long;
    fee_transfer_timeout_nanos: Long;
    max_stake_ica_calls_per_epoch: Long;
    default_min_redemption_rate_threshold: Long;
    default_max_redemption_rate_threshold: Long;
    ibc_transfer_timeout_nanos: Long;
    safety_num_validators: Long;
    safety_max_slash_percent: Long;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromPartial(object: DeepPartial<Params>): Params;
};
