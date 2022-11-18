import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
/** Minter represents the minting state. */
export interface Minter {
    /** current epoch provisions */
    epochProvisions: string;
}
/** Minter represents the minting state. */
export interface MinterSDKType {
    /** current epoch provisions */
    epoch_provisions: string;
}
/** next id: 5 */
export interface DistributionProportions {
    /**
     * staking defines the proportion of the minted minted_denom that is to be
     * allocated as staking rewards.
     */
    staking: string;
    /**
     * community_pool defines the proportion of the minted mint_denom that is
     * to be allocated to the community pool: growth.
     */
    communityPoolGrowth: string;
    /**
     * community_pool defines the proportion of the minted mint_denom that is
     * to be allocated to the community pool: security budget.
     */
    communityPoolSecurityBudget: string;
    /**
     * strategic_reserve defines the proportion of the minted mint_denom that is
     * to be allocated to the pool: strategic reserve.
     */
    strategicReserve: string;
}
/** next id: 5 */
export interface DistributionProportionsSDKType {
    /**
     * staking defines the proportion of the minted minted_denom that is to be
     * allocated as staking rewards.
     */
    staking: string;
    /**
     * community_pool defines the proportion of the minted mint_denom that is
     * to be allocated to the community pool: growth.
     */
    community_pool_growth: string;
    /**
     * community_pool defines the proportion of the minted mint_denom that is
     * to be allocated to the community pool: security budget.
     */
    community_pool_security_budget: string;
    /**
     * strategic_reserve defines the proportion of the minted mint_denom that is
     * to be allocated to the pool: strategic reserve.
     */
    strategic_reserve: string;
}
/** Params holds parameters for the mint module. */
export interface Params {
    /** type of coin to mint */
    mintDenom: string;
    /** epoch provisions from the first epoch */
    genesisEpochProvisions: string;
    /** mint epoch identifier */
    epochIdentifier: string;
    /** number of epochs take to reduce rewards */
    reductionPeriodInEpochs: Long;
    /** reduction multiplier to execute on each period */
    reductionFactor: string;
    /** distribution_proportions defines the proportion of the minted denom */
    distributionProportions: DistributionProportions;
    /** start epoch to distribute minting rewards */
    mintingRewardsDistributionStartEpoch: Long;
}
/** Params holds parameters for the mint module. */
export interface ParamsSDKType {
    /** type of coin to mint */
    mint_denom: string;
    /** epoch provisions from the first epoch */
    genesis_epoch_provisions: string;
    /** mint epoch identifier */
    epoch_identifier: string;
    /** number of epochs take to reduce rewards */
    reduction_period_in_epochs: Long;
    /** reduction multiplier to execute on each period */
    reduction_factor: string;
    /** distribution_proportions defines the proportion of the minted denom */
    distribution_proportions: DistributionProportionsSDKType;
    /** start epoch to distribute minting rewards */
    minting_rewards_distribution_start_epoch: Long;
}
export declare const Minter: {
    encode(message: Minter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Minter;
    fromPartial(object: DeepPartial<Minter>): Minter;
};
export declare const DistributionProportions: {
    encode(message: DistributionProportions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DistributionProportions;
    fromPartial(object: DeepPartial<DistributionProportions>): DistributionProportions;
};
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromPartial(object: DeepPartial<Params>): Params;
};
