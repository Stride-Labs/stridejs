import { OfflineSigner, GeneratedType, Registry } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
export declare const stridelabsAminoConverters: {
    "/Stridelabs.stride.claim.v1beta1.MsgSetAirdropAllocations": {
        aminoType: string;
        toAmino: ({ allocator, airdropIdentifier, users, weights }: import("../claim/v1beta1/tx").MsgSetAirdropAllocations) => {
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
        }) => import("../claim/v1beta1/tx").MsgSetAirdropAllocations;
    };
    "/Stridelabs.stride.claim.v1beta1.MsgClaimFreeAmount": {
        aminoType: string;
        toAmino: ({ user, airdropIdentifier }: import("../claim/v1beta1/tx").MsgClaimFreeAmount) => {
            user: string;
            airdrop_identifier: string;
        };
        fromAmino: ({ user, airdrop_identifier }: {
            user: string;
            airdrop_identifier: string;
        }) => import("../claim/v1beta1/tx").MsgClaimFreeAmount;
    };
    "/Stridelabs.stride.claim.v1beta1.MsgCreateAirdrop": {
        aminoType: string;
        toAmino: ({ distributor, identifier, startTime, duration, denom }: import("../claim/v1beta1/tx").MsgCreateAirdrop) => {
            distributor: string;
            identifier: string;
            start_time: string;
            duration: string;
            denom: string;
        };
        fromAmino: ({ distributor, identifier, start_time, duration, denom }: {
            distributor: string;
            identifier: string;
            start_time: string;
            duration: string;
            denom: string;
        }) => import("../claim/v1beta1/tx").MsgCreateAirdrop;
    };
    "/Stridelabs.stride.claim.v1beta1.MsgDeleteAirdrop": {
        aminoType: string;
        toAmino: ({ distributor, identifier }: import("../claim/v1beta1/tx").MsgDeleteAirdrop) => {
            distributor: string;
            identifier: string;
        };
        fromAmino: ({ distributor, identifier }: {
            distributor: string;
            identifier: string;
        }) => import("../claim/v1beta1/tx").MsgDeleteAirdrop;
    };
};
export declare const stridelabsProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningStridelabsClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningStridelabsClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
