import { OfflineSigner, GeneratedType, Registry } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
export declare const strideAminoConverters: {
    "/stride.stakeibc.MsgLiquidStake": {
        aminoType: string;
        toAmino: ({ creator, amount, hostDenom }: import("./stakeibc/tx").MsgLiquidStake) => {
            creator: string;
            amount: string;
            host_denom: string;
        };
        fromAmino: ({ creator, amount, host_denom }: {
            creator: string;
            amount: string;
            host_denom: string;
        }) => import("./stakeibc/tx").MsgLiquidStake;
    };
    "/stride.stakeibc.MsgRedeemStake": {
        aminoType: string;
        toAmino: ({ creator, amount, hostZone, receiver }: import("./stakeibc/tx").MsgRedeemStake) => {
            creator: string;
            amount: string;
            host_zone: string;
            receiver: string;
        };
        fromAmino: ({ creator, amount, host_zone, receiver }: {
            creator: string;
            amount: string;
            host_zone: string;
            receiver: string;
        }) => import("./stakeibc/tx").MsgRedeemStake;
    };
    "/stride.stakeibc.MsgRegisterHostZone": {
        aminoType: string;
        toAmino: ({ connectionId, bech32prefix, hostDenom, ibcDenom, creator, transferChannelId, unbondingFrequency, minRedemptionRate, maxRedemptionRate }: import("./stakeibc/tx").MsgRegisterHostZone) => {
            connection_id: string;
            bech32prefix: string;
            host_denom: string;
            ibc_denom: string;
            creator: string;
            transfer_channel_id: string;
            unbonding_frequency: string;
            min_redemption_rate: string;
            max_redemption_rate: string;
        };
        fromAmino: ({ connection_id, bech32prefix, host_denom, ibc_denom, creator, transfer_channel_id, unbonding_frequency, min_redemption_rate, max_redemption_rate }: {
            connection_id: string;
            bech32prefix: string;
            host_denom: string;
            ibc_denom: string;
            creator: string;
            transfer_channel_id: string;
            unbonding_frequency: string;
            min_redemption_rate: string;
            max_redemption_rate: string;
        }) => import("./stakeibc/tx").MsgRegisterHostZone;
    };
    "/stride.stakeibc.MsgClaimUndelegatedTokens": {
        aminoType: string;
        toAmino: ({ creator, hostZoneId, epoch, sender }: import("./stakeibc/tx").MsgClaimUndelegatedTokens) => {
            creator: string;
            host_zone_id: string;
            epoch: string;
            sender: string;
        };
        fromAmino: ({ creator, host_zone_id, epoch, sender }: {
            creator: string;
            host_zone_id: string;
            epoch: string;
            sender: string;
        }) => import("./stakeibc/tx").MsgClaimUndelegatedTokens;
    };
    "/stride.stakeibc.MsgRebalanceValidators": {
        aminoType: string;
        toAmino: ({ creator, hostZone, numRebalance }: import("./stakeibc/tx").MsgRebalanceValidators) => {
            creator: string;
            host_zone: string;
            num_rebalance: string;
        };
        fromAmino: ({ creator, host_zone, num_rebalance }: {
            creator: string;
            host_zone: string;
            num_rebalance: string;
        }) => import("./stakeibc/tx").MsgRebalanceValidators;
    };
    "/stride.stakeibc.MsgAddValidators": {
        aminoType: string;
        toAmino: ({ creator, hostZone, validators }: import("./stakeibc/tx").MsgAddValidators) => {
            creator: string;
            host_zone: string;
            validators: {
                name: string;
                address: string;
                delegation_amt: string;
                weight: string;
                internal_exchange_rate: {
                    internal_tokens_to_shares_rate: string;
                    epoch_number: string;
                };
            }[];
        };
        fromAmino: ({ creator, host_zone, validators }: {
            creator: string;
            host_zone: string;
            validators: {
                name: string;
                address: string;
                delegation_amt: string;
                weight: string;
                internal_exchange_rate: {
                    internal_tokens_to_shares_rate: string;
                    epoch_number: string;
                };
            }[];
        }) => import("./stakeibc/tx").MsgAddValidators;
    };
    "/stride.stakeibc.MsgChangeValidatorWeight": {
        aminoType: string;
        toAmino: ({ creator, hostZone, valAddr, weight }: import("./stakeibc/tx").MsgChangeValidatorWeight) => {
            creator: string;
            host_zone: string;
            val_addr: string;
            weight: string;
        };
        fromAmino: ({ creator, host_zone, val_addr, weight }: {
            creator: string;
            host_zone: string;
            val_addr: string;
            weight: string;
        }) => import("./stakeibc/tx").MsgChangeValidatorWeight;
    };
    "/stride.stakeibc.MsgDeleteValidator": {
        aminoType: string;
        toAmino: ({ creator, hostZone, valAddr }: import("./stakeibc/tx").MsgDeleteValidator) => {
            creator: string;
            host_zone: string;
            val_addr: string;
        };
        fromAmino: ({ creator, host_zone, val_addr }: {
            creator: string;
            host_zone: string;
            val_addr: string;
        }) => import("./stakeibc/tx").MsgDeleteValidator;
    };
    "/stride.stakeibc.MsgRestoreInterchainAccount": {
        aminoType: string;
        toAmino: ({ creator, chainId, accountType }: import("./stakeibc/tx").MsgRestoreInterchainAccount) => {
            creator: string;
            chain_id: string;
            account_type: number;
        };
        fromAmino: ({ creator, chain_id, account_type }: {
            creator: string;
            chain_id: string;
            account_type: number;
        }) => import("./stakeibc/tx").MsgRestoreInterchainAccount;
    };
    "/stride.stakeibc.MsgUpdateValidatorSharesExchRate": {
        aminoType: string;
        toAmino: ({ creator, chainId, valoper }: import("./stakeibc/tx").MsgUpdateValidatorSharesExchRate) => {
            creator: string;
            chain_id: string;
            valoper: string;
        };
        fromAmino: ({ creator, chain_id, valoper }: {
            creator: string;
            chain_id: string;
            valoper: string;
        }) => import("./stakeibc/tx").MsgUpdateValidatorSharesExchRate;
    };
    "/stride.stakeibc.MsgClearBalance": {
        aminoType: string;
        toAmino: ({ creator, chainId, amount, channel }: import("./stakeibc/tx").MsgClearBalance) => {
            creator: string;
            chain_id: string;
            amount: string;
            channel: string;
        };
        fromAmino: ({ creator, chain_id, amount, channel }: {
            creator: string;
            chain_id: string;
            amount: string;
            channel: string;
        }) => import("./stakeibc/tx").MsgClearBalance;
    };
    "/stride.interchainquery.v1.MsgSubmitQueryResponse": {
        aminoType: string;
        toAmino: ({ chainId, queryId, result, proofOps, height, fromAddress }: import("./interchainquery/v1/messages").MsgSubmitQueryResponse) => {
            chain_id: string;
            query_id: string;
            result: Uint8Array;
            proof_ops: {
                ops: {
                    type: string;
                    key: Uint8Array;
                    data: Uint8Array;
                }[];
            };
            height: string;
            from_address: string;
        };
        fromAmino: ({ chain_id, query_id, result, proof_ops, height, from_address }: {
            chain_id: string;
            query_id: string;
            result: Uint8Array;
            proof_ops: {
                ops: {
                    type: string;
                    key: Uint8Array;
                    data: Uint8Array;
                }[];
            };
            height: string;
            from_address: string;
        }) => import("./interchainquery/v1/messages").MsgSubmitQueryResponse;
    };
    "/stride.claim.MsgSetAirdropAllocations": {
        aminoType: string;
        toAmino: ({ allocator, airdropIdentifier, users, weights }: import("./claim/tx").MsgSetAirdropAllocations) => {
            allocator: string;
            airdrop_identifier: string;
            users: string[];
            weights: string[];
        };
        fromAmino: ({ allocator, airdrop_identifier, users, weights }: {
            allocator: string;
            airdrop_identifier: string;
            users: string[];
            weights: string[];
        }) => import("./claim/tx").MsgSetAirdropAllocations;
    };
    "/stride.claim.MsgClaimFreeAmount": {
        aminoType: string;
        toAmino: ({ user }: import("./claim/tx").MsgClaimFreeAmount) => {
            user: string;
        };
        fromAmino: ({ user }: {
            user: string;
        }) => import("./claim/tx").MsgClaimFreeAmount;
    };
    "/stride.claim.MsgCreateAirdrop": {
        aminoType: string;
        toAmino: ({ distributor, identifier, chainId, denom, startTime, duration, autopilotEnabled }: import("./claim/tx").MsgCreateAirdrop) => {
            distributor: string;
            identifier: string;
            chain_id: string;
            denom: string;
            start_time: string;
            duration: string;
            autopilot_enabled: boolean;
        };
        fromAmino: ({ distributor, identifier, chain_id, denom, start_time, duration, autopilot_enabled }: {
            distributor: string;
            identifier: string;
            chain_id: string;
            denom: string;
            start_time: string;
            duration: string;
            autopilot_enabled: boolean;
        }) => import("./claim/tx").MsgCreateAirdrop;
    };
    "/stride.claim.MsgDeleteAirdrop": {
        aminoType: string;
        toAmino: ({ distributor, identifier }: import("./claim/tx").MsgDeleteAirdrop) => {
            distributor: string;
            identifier: string;
        };
        fromAmino: ({ distributor, identifier }: {
            distributor: string;
            identifier: string;
        }) => import("./claim/tx").MsgDeleteAirdrop;
    };
};
export declare const strideProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningStrideClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningStrideClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
