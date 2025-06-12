import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const gaiaAminoConverters: {
    "/gaia.liquid.v1beta1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: import("./liquid/v1beta1/tx").MsgUpdateParams) => import("./liquid/v1beta1/tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./liquid/v1beta1/tx").MsgUpdateParamsAmino) => import("./liquid/v1beta1/tx").MsgUpdateParams;
    };
    "/gaia.liquid.v1beta1.MsgTokenizeShares": {
        aminoType: string;
        toAmino: (message: import("./liquid/v1beta1/tx").MsgTokenizeShares) => import("./liquid/v1beta1/tx").MsgTokenizeSharesAmino;
        fromAmino: (object: import("./liquid/v1beta1/tx").MsgTokenizeSharesAmino) => import("./liquid/v1beta1/tx").MsgTokenizeShares;
    };
    "/gaia.liquid.v1beta1.MsgRedeemTokensForShares": {
        aminoType: string;
        toAmino: (message: import("./liquid/v1beta1/tx").MsgRedeemTokensForShares) => import("./liquid/v1beta1/tx").MsgRedeemTokensForSharesAmino;
        fromAmino: (object: import("./liquid/v1beta1/tx").MsgRedeemTokensForSharesAmino) => import("./liquid/v1beta1/tx").MsgRedeemTokensForShares;
    };
    "/gaia.liquid.v1beta1.MsgTransferTokenizeShareRecord": {
        aminoType: string;
        toAmino: (message: import("./liquid/v1beta1/tx").MsgTransferTokenizeShareRecord) => import("./liquid/v1beta1/tx").MsgTransferTokenizeShareRecordAmino;
        fromAmino: (object: import("./liquid/v1beta1/tx").MsgTransferTokenizeShareRecordAmino) => import("./liquid/v1beta1/tx").MsgTransferTokenizeShareRecord;
    };
    "/gaia.liquid.v1beta1.MsgDisableTokenizeShares": {
        aminoType: string;
        toAmino: (message: import("./liquid/v1beta1/tx").MsgDisableTokenizeShares) => import("./liquid/v1beta1/tx").MsgDisableTokenizeSharesAmino;
        fromAmino: (object: import("./liquid/v1beta1/tx").MsgDisableTokenizeSharesAmino) => import("./liquid/v1beta1/tx").MsgDisableTokenizeShares;
    };
    "/gaia.liquid.v1beta1.MsgEnableTokenizeShares": {
        aminoType: string;
        toAmino: (message: import("./liquid/v1beta1/tx").MsgEnableTokenizeShares) => import("./liquid/v1beta1/tx").MsgEnableTokenizeSharesAmino;
        fromAmino: (object: import("./liquid/v1beta1/tx").MsgEnableTokenizeSharesAmino) => import("./liquid/v1beta1/tx").MsgEnableTokenizeShares;
    };
    "/gaia.liquid.v1beta1.MsgWithdrawTokenizeShareRecordReward": {
        aminoType: string;
        toAmino: (message: import("./liquid/v1beta1/tx").MsgWithdrawTokenizeShareRecordReward) => import("./liquid/v1beta1/tx").MsgWithdrawTokenizeShareRecordRewardAmino;
        fromAmino: (object: import("./liquid/v1beta1/tx").MsgWithdrawTokenizeShareRecordRewardAmino) => import("./liquid/v1beta1/tx").MsgWithdrawTokenizeShareRecordReward;
    };
    "/gaia.liquid.v1beta1.MsgWithdrawAllTokenizeShareRecordReward": {
        aminoType: string;
        toAmino: (message: import("./liquid/v1beta1/tx").MsgWithdrawAllTokenizeShareRecordReward) => import("./liquid/v1beta1/tx").MsgWithdrawAllTokenizeShareRecordRewardAmino;
        fromAmino: (object: import("./liquid/v1beta1/tx").MsgWithdrawAllTokenizeShareRecordRewardAmino) => import("./liquid/v1beta1/tx").MsgWithdrawAllTokenizeShareRecordReward;
    };
};
export declare const gaiaProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningGaiaClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningGaiaClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
