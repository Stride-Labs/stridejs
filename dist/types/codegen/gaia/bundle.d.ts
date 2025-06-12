import * as _135 from "./liquid/module/v1/module";
import * as _136 from "./liquid/v1beta1/genesis";
import * as _137 from "./liquid/v1beta1/liquid";
import * as _139 from "./liquid/v1beta1/query";
import * as _140 from "./liquid/v1beta1/tx";
import * as _141 from "./metaprotocols/extensions";
import * as _350 from "./liquid/v1beta1/query.rpc.Query";
import * as _351 from "./liquid/v1beta1/tx.rpc.msg";
export declare namespace gaia {
    namespace liquid {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _135.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _135.Module;
                    fromPartial(object: Partial<_135.Module>): _135.Module;
                    fromAmino(object: _135.ModuleAmino): _135.Module;
                    toAmino(message: _135.Module): _135.ModuleAmino;
                    fromAminoMsg(object: _135.ModuleAminoMsg): _135.Module;
                    fromProtoMsg(message: _135.ModuleProtoMsg): _135.Module;
                    toProto(message: _135.Module): Uint8Array;
                    toProtoMsg(message: _135.Module): _135.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _351.MsgClientImpl;
            QueryClientImpl: typeof _350.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                liquidValidator(request: _139.QueryLiquidValidatorRequest): Promise<_139.QueryLiquidValidatorResponse>;
                tokenizeShareRecordById(request: _139.QueryTokenizeShareRecordByIdRequest): Promise<_139.QueryTokenizeShareRecordByIdResponse>;
                tokenizeShareRecordByDenom(request: _139.QueryTokenizeShareRecordByDenomRequest): Promise<_139.QueryTokenizeShareRecordByDenomResponse>;
                tokenizeShareRecordsOwned(request: _139.QueryTokenizeShareRecordsOwnedRequest): Promise<_139.QueryTokenizeShareRecordsOwnedResponse>;
                allTokenizeShareRecords(request?: _139.QueryAllTokenizeShareRecordsRequest): Promise<_139.QueryAllTokenizeShareRecordsResponse>;
                lastTokenizeShareRecordId(request?: _139.QueryLastTokenizeShareRecordIdRequest): Promise<_139.QueryLastTokenizeShareRecordIdResponse>;
                totalTokenizeSharedAssets(request?: _139.QueryTotalTokenizeSharedAssetsRequest): Promise<_139.QueryTotalTokenizeSharedAssetsResponse>;
                totalLiquidStaked(request?: _139.QueryTotalLiquidStaked): Promise<_139.QueryTotalLiquidStakedResponse>;
                tokenizeShareLockInfo(request: _139.QueryTokenizeShareLockInfo): Promise<_139.QueryTokenizeShareLockInfoResponse>;
                params(request?: _139.QueryParamsRequest): Promise<_139.QueryParamsResponse>;
                tokenizeShareRecordReward(request: _139.QueryTokenizeShareRecordRewardRequest): Promise<_139.QueryTokenizeShareRecordRewardResponse>;
            };
            registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _140.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    tokenizeShares(value: _140.MsgTokenizeShares): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    redeemTokensForShares(value: _140.MsgRedeemTokensForShares): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    transferTokenizeShareRecord(value: _140.MsgTransferTokenizeShareRecord): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    disableTokenizeShares(value: _140.MsgDisableTokenizeShares): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    enableTokenizeShares(value: _140.MsgEnableTokenizeShares): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawTokenizeShareRecordReward(value: _140.MsgWithdrawTokenizeShareRecordReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawAllTokenizeShareRecordReward(value: _140.MsgWithdrawAllTokenizeShareRecordReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _140.MsgUpdateParams): {
                        typeUrl: string;
                        value: _140.MsgUpdateParams;
                    };
                    tokenizeShares(value: _140.MsgTokenizeShares): {
                        typeUrl: string;
                        value: _140.MsgTokenizeShares;
                    };
                    redeemTokensForShares(value: _140.MsgRedeemTokensForShares): {
                        typeUrl: string;
                        value: _140.MsgRedeemTokensForShares;
                    };
                    transferTokenizeShareRecord(value: _140.MsgTransferTokenizeShareRecord): {
                        typeUrl: string;
                        value: _140.MsgTransferTokenizeShareRecord;
                    };
                    disableTokenizeShares(value: _140.MsgDisableTokenizeShares): {
                        typeUrl: string;
                        value: _140.MsgDisableTokenizeShares;
                    };
                    enableTokenizeShares(value: _140.MsgEnableTokenizeShares): {
                        typeUrl: string;
                        value: _140.MsgEnableTokenizeShares;
                    };
                    withdrawTokenizeShareRecordReward(value: _140.MsgWithdrawTokenizeShareRecordReward): {
                        typeUrl: string;
                        value: _140.MsgWithdrawTokenizeShareRecordReward;
                    };
                    withdrawAllTokenizeShareRecordReward(value: _140.MsgWithdrawAllTokenizeShareRecordReward): {
                        typeUrl: string;
                        value: _140.MsgWithdrawAllTokenizeShareRecordReward;
                    };
                };
                fromPartial: {
                    updateParams(value: _140.MsgUpdateParams): {
                        typeUrl: string;
                        value: _140.MsgUpdateParams;
                    };
                    tokenizeShares(value: _140.MsgTokenizeShares): {
                        typeUrl: string;
                        value: _140.MsgTokenizeShares;
                    };
                    redeemTokensForShares(value: _140.MsgRedeemTokensForShares): {
                        typeUrl: string;
                        value: _140.MsgRedeemTokensForShares;
                    };
                    transferTokenizeShareRecord(value: _140.MsgTransferTokenizeShareRecord): {
                        typeUrl: string;
                        value: _140.MsgTransferTokenizeShareRecord;
                    };
                    disableTokenizeShares(value: _140.MsgDisableTokenizeShares): {
                        typeUrl: string;
                        value: _140.MsgDisableTokenizeShares;
                    };
                    enableTokenizeShares(value: _140.MsgEnableTokenizeShares): {
                        typeUrl: string;
                        value: _140.MsgEnableTokenizeShares;
                    };
                    withdrawTokenizeShareRecordReward(value: _140.MsgWithdrawTokenizeShareRecordReward): {
                        typeUrl: string;
                        value: _140.MsgWithdrawTokenizeShareRecordReward;
                    };
                    withdrawAllTokenizeShareRecordReward(value: _140.MsgWithdrawAllTokenizeShareRecordReward): {
                        typeUrl: string;
                        value: _140.MsgWithdrawAllTokenizeShareRecordReward;
                    };
                };
            };
            AminoConverter: {
                "/gaia.liquid.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _140.MsgUpdateParams) => _140.MsgUpdateParamsAmino;
                    fromAmino: (object: _140.MsgUpdateParamsAmino) => _140.MsgUpdateParams;
                };
                "/gaia.liquid.v1beta1.MsgTokenizeShares": {
                    aminoType: string;
                    toAmino: (message: _140.MsgTokenizeShares) => _140.MsgTokenizeSharesAmino;
                    fromAmino: (object: _140.MsgTokenizeSharesAmino) => _140.MsgTokenizeShares;
                };
                "/gaia.liquid.v1beta1.MsgRedeemTokensForShares": {
                    aminoType: string;
                    toAmino: (message: _140.MsgRedeemTokensForShares) => _140.MsgRedeemTokensForSharesAmino;
                    fromAmino: (object: _140.MsgRedeemTokensForSharesAmino) => _140.MsgRedeemTokensForShares;
                };
                "/gaia.liquid.v1beta1.MsgTransferTokenizeShareRecord": {
                    aminoType: string;
                    toAmino: (message: _140.MsgTransferTokenizeShareRecord) => _140.MsgTransferTokenizeShareRecordAmino;
                    fromAmino: (object: _140.MsgTransferTokenizeShareRecordAmino) => _140.MsgTransferTokenizeShareRecord;
                };
                "/gaia.liquid.v1beta1.MsgDisableTokenizeShares": {
                    aminoType: string;
                    toAmino: (message: _140.MsgDisableTokenizeShares) => _140.MsgDisableTokenizeSharesAmino;
                    fromAmino: (object: _140.MsgDisableTokenizeSharesAmino) => _140.MsgDisableTokenizeShares;
                };
                "/gaia.liquid.v1beta1.MsgEnableTokenizeShares": {
                    aminoType: string;
                    toAmino: (message: _140.MsgEnableTokenizeShares) => _140.MsgEnableTokenizeSharesAmino;
                    fromAmino: (object: _140.MsgEnableTokenizeSharesAmino) => _140.MsgEnableTokenizeShares;
                };
                "/gaia.liquid.v1beta1.MsgWithdrawTokenizeShareRecordReward": {
                    aminoType: string;
                    toAmino: (message: _140.MsgWithdrawTokenizeShareRecordReward) => _140.MsgWithdrawTokenizeShareRecordRewardAmino;
                    fromAmino: (object: _140.MsgWithdrawTokenizeShareRecordRewardAmino) => _140.MsgWithdrawTokenizeShareRecordReward;
                };
                "/gaia.liquid.v1beta1.MsgWithdrawAllTokenizeShareRecordReward": {
                    aminoType: string;
                    toAmino: (message: _140.MsgWithdrawAllTokenizeShareRecordReward) => _140.MsgWithdrawAllTokenizeShareRecordRewardAmino;
                    fromAmino: (object: _140.MsgWithdrawAllTokenizeShareRecordRewardAmino) => _140.MsgWithdrawAllTokenizeShareRecordReward;
                };
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _140.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.MsgUpdateParams;
                fromPartial(object: Partial<_140.MsgUpdateParams>): _140.MsgUpdateParams;
                fromAmino(object: _140.MsgUpdateParamsAmino): _140.MsgUpdateParams;
                toAmino(message: _140.MsgUpdateParams): _140.MsgUpdateParamsAmino;
                fromAminoMsg(object: _140.MsgUpdateParamsAminoMsg): _140.MsgUpdateParams;
                toAminoMsg(message: _140.MsgUpdateParams): _140.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _140.MsgUpdateParamsProtoMsg): _140.MsgUpdateParams;
                toProto(message: _140.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _140.MsgUpdateParams): _140.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _140.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_140.MsgUpdateParamsResponse>): _140.MsgUpdateParamsResponse;
                fromAmino(_: _140.MsgUpdateParamsResponseAmino): _140.MsgUpdateParamsResponse;
                toAmino(_: _140.MsgUpdateParamsResponse): _140.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _140.MsgUpdateParamsResponseAminoMsg): _140.MsgUpdateParamsResponse;
                fromProtoMsg(message: _140.MsgUpdateParamsResponseProtoMsg): _140.MsgUpdateParamsResponse;
                toProto(message: _140.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _140.MsgUpdateParamsResponse): _140.MsgUpdateParamsResponseProtoMsg;
            };
            MsgTokenizeShares: {
                typeUrl: string;
                encode(message: _140.MsgTokenizeShares, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.MsgTokenizeShares;
                fromPartial(object: Partial<_140.MsgTokenizeShares>): _140.MsgTokenizeShares;
                fromAmino(object: _140.MsgTokenizeSharesAmino): _140.MsgTokenizeShares;
                toAmino(message: _140.MsgTokenizeShares): _140.MsgTokenizeSharesAmino;
                fromAminoMsg(object: _140.MsgTokenizeSharesAminoMsg): _140.MsgTokenizeShares;
                toAminoMsg(message: _140.MsgTokenizeShares): _140.MsgTokenizeSharesAminoMsg;
                fromProtoMsg(message: _140.MsgTokenizeSharesProtoMsg): _140.MsgTokenizeShares;
                toProto(message: _140.MsgTokenizeShares): Uint8Array;
                toProtoMsg(message: _140.MsgTokenizeShares): _140.MsgTokenizeSharesProtoMsg;
            };
            MsgTokenizeSharesResponse: {
                typeUrl: string;
                encode(message: _140.MsgTokenizeSharesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.MsgTokenizeSharesResponse;
                fromPartial(object: Partial<_140.MsgTokenizeSharesResponse>): _140.MsgTokenizeSharesResponse;
                fromAmino(object: _140.MsgTokenizeSharesResponseAmino): _140.MsgTokenizeSharesResponse;
                toAmino(message: _140.MsgTokenizeSharesResponse): _140.MsgTokenizeSharesResponseAmino;
                fromAminoMsg(object: _140.MsgTokenizeSharesResponseAminoMsg): _140.MsgTokenizeSharesResponse;
                fromProtoMsg(message: _140.MsgTokenizeSharesResponseProtoMsg): _140.MsgTokenizeSharesResponse;
                toProto(message: _140.MsgTokenizeSharesResponse): Uint8Array;
                toProtoMsg(message: _140.MsgTokenizeSharesResponse): _140.MsgTokenizeSharesResponseProtoMsg;
            };
            MsgRedeemTokensForShares: {
                typeUrl: string;
                encode(message: _140.MsgRedeemTokensForShares, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.MsgRedeemTokensForShares;
                fromPartial(object: Partial<_140.MsgRedeemTokensForShares>): _140.MsgRedeemTokensForShares;
                fromAmino(object: _140.MsgRedeemTokensForSharesAmino): _140.MsgRedeemTokensForShares;
                toAmino(message: _140.MsgRedeemTokensForShares): _140.MsgRedeemTokensForSharesAmino;
                fromAminoMsg(object: _140.MsgRedeemTokensForSharesAminoMsg): _140.MsgRedeemTokensForShares;
                toAminoMsg(message: _140.MsgRedeemTokensForShares): _140.MsgRedeemTokensForSharesAminoMsg;
                fromProtoMsg(message: _140.MsgRedeemTokensForSharesProtoMsg): _140.MsgRedeemTokensForShares;
                toProto(message: _140.MsgRedeemTokensForShares): Uint8Array;
                toProtoMsg(message: _140.MsgRedeemTokensForShares): _140.MsgRedeemTokensForSharesProtoMsg;
            };
            MsgRedeemTokensForSharesResponse: {
                typeUrl: string;
                encode(message: _140.MsgRedeemTokensForSharesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.MsgRedeemTokensForSharesResponse;
                fromPartial(object: Partial<_140.MsgRedeemTokensForSharesResponse>): _140.MsgRedeemTokensForSharesResponse;
                fromAmino(object: _140.MsgRedeemTokensForSharesResponseAmino): _140.MsgRedeemTokensForSharesResponse;
                toAmino(message: _140.MsgRedeemTokensForSharesResponse): _140.MsgRedeemTokensForSharesResponseAmino;
                fromAminoMsg(object: _140.MsgRedeemTokensForSharesResponseAminoMsg): _140.MsgRedeemTokensForSharesResponse;
                fromProtoMsg(message: _140.MsgRedeemTokensForSharesResponseProtoMsg): _140.MsgRedeemTokensForSharesResponse;
                toProto(message: _140.MsgRedeemTokensForSharesResponse): Uint8Array;
                toProtoMsg(message: _140.MsgRedeemTokensForSharesResponse): _140.MsgRedeemTokensForSharesResponseProtoMsg;
            };
            MsgTransferTokenizeShareRecord: {
                typeUrl: string;
                encode(message: _140.MsgTransferTokenizeShareRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.MsgTransferTokenizeShareRecord;
                fromPartial(object: Partial<_140.MsgTransferTokenizeShareRecord>): _140.MsgTransferTokenizeShareRecord;
                fromAmino(object: _140.MsgTransferTokenizeShareRecordAmino): _140.MsgTransferTokenizeShareRecord;
                toAmino(message: _140.MsgTransferTokenizeShareRecord): _140.MsgTransferTokenizeShareRecordAmino;
                fromAminoMsg(object: _140.MsgTransferTokenizeShareRecordAminoMsg): _140.MsgTransferTokenizeShareRecord;
                toAminoMsg(message: _140.MsgTransferTokenizeShareRecord): _140.MsgTransferTokenizeShareRecordAminoMsg;
                fromProtoMsg(message: _140.MsgTransferTokenizeShareRecordProtoMsg): _140.MsgTransferTokenizeShareRecord;
                toProto(message: _140.MsgTransferTokenizeShareRecord): Uint8Array;
                toProtoMsg(message: _140.MsgTransferTokenizeShareRecord): _140.MsgTransferTokenizeShareRecordProtoMsg;
            };
            MsgTransferTokenizeShareRecordResponse: {
                typeUrl: string;
                encode(_: _140.MsgTransferTokenizeShareRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.MsgTransferTokenizeShareRecordResponse;
                fromPartial(_: Partial<_140.MsgTransferTokenizeShareRecordResponse>): _140.MsgTransferTokenizeShareRecordResponse;
                fromAmino(_: _140.MsgTransferTokenizeShareRecordResponseAmino): _140.MsgTransferTokenizeShareRecordResponse;
                toAmino(_: _140.MsgTransferTokenizeShareRecordResponse): _140.MsgTransferTokenizeShareRecordResponseAmino;
                fromAminoMsg(object: _140.MsgTransferTokenizeShareRecordResponseAminoMsg): _140.MsgTransferTokenizeShareRecordResponse;
                fromProtoMsg(message: _140.MsgTransferTokenizeShareRecordResponseProtoMsg): _140.MsgTransferTokenizeShareRecordResponse;
                toProto(message: _140.MsgTransferTokenizeShareRecordResponse): Uint8Array;
                toProtoMsg(message: _140.MsgTransferTokenizeShareRecordResponse): _140.MsgTransferTokenizeShareRecordResponseProtoMsg;
            };
            MsgDisableTokenizeShares: {
                typeUrl: string;
                encode(message: _140.MsgDisableTokenizeShares, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.MsgDisableTokenizeShares;
                fromPartial(object: Partial<_140.MsgDisableTokenizeShares>): _140.MsgDisableTokenizeShares;
                fromAmino(object: _140.MsgDisableTokenizeSharesAmino): _140.MsgDisableTokenizeShares;
                toAmino(message: _140.MsgDisableTokenizeShares): _140.MsgDisableTokenizeSharesAmino;
                fromAminoMsg(object: _140.MsgDisableTokenizeSharesAminoMsg): _140.MsgDisableTokenizeShares;
                toAminoMsg(message: _140.MsgDisableTokenizeShares): _140.MsgDisableTokenizeSharesAminoMsg;
                fromProtoMsg(message: _140.MsgDisableTokenizeSharesProtoMsg): _140.MsgDisableTokenizeShares;
                toProto(message: _140.MsgDisableTokenizeShares): Uint8Array;
                toProtoMsg(message: _140.MsgDisableTokenizeShares): _140.MsgDisableTokenizeSharesProtoMsg;
            };
            MsgDisableTokenizeSharesResponse: {
                typeUrl: string;
                encode(_: _140.MsgDisableTokenizeSharesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.MsgDisableTokenizeSharesResponse;
                fromPartial(_: Partial<_140.MsgDisableTokenizeSharesResponse>): _140.MsgDisableTokenizeSharesResponse;
                fromAmino(_: _140.MsgDisableTokenizeSharesResponseAmino): _140.MsgDisableTokenizeSharesResponse;
                toAmino(_: _140.MsgDisableTokenizeSharesResponse): _140.MsgDisableTokenizeSharesResponseAmino;
                fromAminoMsg(object: _140.MsgDisableTokenizeSharesResponseAminoMsg): _140.MsgDisableTokenizeSharesResponse;
                fromProtoMsg(message: _140.MsgDisableTokenizeSharesResponseProtoMsg): _140.MsgDisableTokenizeSharesResponse;
                toProto(message: _140.MsgDisableTokenizeSharesResponse): Uint8Array;
                toProtoMsg(message: _140.MsgDisableTokenizeSharesResponse): _140.MsgDisableTokenizeSharesResponseProtoMsg;
            };
            MsgEnableTokenizeShares: {
                typeUrl: string;
                encode(message: _140.MsgEnableTokenizeShares, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.MsgEnableTokenizeShares;
                fromPartial(object: Partial<_140.MsgEnableTokenizeShares>): _140.MsgEnableTokenizeShares;
                fromAmino(object: _140.MsgEnableTokenizeSharesAmino): _140.MsgEnableTokenizeShares;
                toAmino(message: _140.MsgEnableTokenizeShares): _140.MsgEnableTokenizeSharesAmino;
                fromAminoMsg(object: _140.MsgEnableTokenizeSharesAminoMsg): _140.MsgEnableTokenizeShares;
                toAminoMsg(message: _140.MsgEnableTokenizeShares): _140.MsgEnableTokenizeSharesAminoMsg;
                fromProtoMsg(message: _140.MsgEnableTokenizeSharesProtoMsg): _140.MsgEnableTokenizeShares;
                toProto(message: _140.MsgEnableTokenizeShares): Uint8Array;
                toProtoMsg(message: _140.MsgEnableTokenizeShares): _140.MsgEnableTokenizeSharesProtoMsg;
            };
            MsgEnableTokenizeSharesResponse: {
                typeUrl: string;
                encode(message: _140.MsgEnableTokenizeSharesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.MsgEnableTokenizeSharesResponse;
                fromPartial(object: Partial<_140.MsgEnableTokenizeSharesResponse>): _140.MsgEnableTokenizeSharesResponse;
                fromAmino(object: _140.MsgEnableTokenizeSharesResponseAmino): _140.MsgEnableTokenizeSharesResponse;
                toAmino(message: _140.MsgEnableTokenizeSharesResponse): _140.MsgEnableTokenizeSharesResponseAmino;
                fromAminoMsg(object: _140.MsgEnableTokenizeSharesResponseAminoMsg): _140.MsgEnableTokenizeSharesResponse;
                fromProtoMsg(message: _140.MsgEnableTokenizeSharesResponseProtoMsg): _140.MsgEnableTokenizeSharesResponse;
                toProto(message: _140.MsgEnableTokenizeSharesResponse): Uint8Array;
                toProtoMsg(message: _140.MsgEnableTokenizeSharesResponse): _140.MsgEnableTokenizeSharesResponseProtoMsg;
            };
            MsgWithdrawTokenizeShareRecordReward: {
                typeUrl: string;
                encode(message: _140.MsgWithdrawTokenizeShareRecordReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.MsgWithdrawTokenizeShareRecordReward;
                fromPartial(object: Partial<_140.MsgWithdrawTokenizeShareRecordReward>): _140.MsgWithdrawTokenizeShareRecordReward;
                fromAmino(object: _140.MsgWithdrawTokenizeShareRecordRewardAmino): _140.MsgWithdrawTokenizeShareRecordReward;
                toAmino(message: _140.MsgWithdrawTokenizeShareRecordReward): _140.MsgWithdrawTokenizeShareRecordRewardAmino;
                fromAminoMsg(object: _140.MsgWithdrawTokenizeShareRecordRewardAminoMsg): _140.MsgWithdrawTokenizeShareRecordReward;
                toAminoMsg(message: _140.MsgWithdrawTokenizeShareRecordReward): _140.MsgWithdrawTokenizeShareRecordRewardAminoMsg;
                fromProtoMsg(message: _140.MsgWithdrawTokenizeShareRecordRewardProtoMsg): _140.MsgWithdrawTokenizeShareRecordReward;
                toProto(message: _140.MsgWithdrawTokenizeShareRecordReward): Uint8Array;
                toProtoMsg(message: _140.MsgWithdrawTokenizeShareRecordReward): _140.MsgWithdrawTokenizeShareRecordRewardProtoMsg;
            };
            MsgWithdrawTokenizeShareRecordRewardResponse: {
                typeUrl: string;
                encode(_: _140.MsgWithdrawTokenizeShareRecordRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.MsgWithdrawTokenizeShareRecordRewardResponse;
                fromPartial(_: Partial<_140.MsgWithdrawTokenizeShareRecordRewardResponse>): _140.MsgWithdrawTokenizeShareRecordRewardResponse;
                fromAmino(_: _140.MsgWithdrawTokenizeShareRecordRewardResponseAmino): _140.MsgWithdrawTokenizeShareRecordRewardResponse;
                toAmino(_: _140.MsgWithdrawTokenizeShareRecordRewardResponse): _140.MsgWithdrawTokenizeShareRecordRewardResponseAmino;
                fromAminoMsg(object: _140.MsgWithdrawTokenizeShareRecordRewardResponseAminoMsg): _140.MsgWithdrawTokenizeShareRecordRewardResponse;
                fromProtoMsg(message: _140.MsgWithdrawTokenizeShareRecordRewardResponseProtoMsg): _140.MsgWithdrawTokenizeShareRecordRewardResponse;
                toProto(message: _140.MsgWithdrawTokenizeShareRecordRewardResponse): Uint8Array;
                toProtoMsg(message: _140.MsgWithdrawTokenizeShareRecordRewardResponse): _140.MsgWithdrawTokenizeShareRecordRewardResponseProtoMsg;
            };
            MsgWithdrawAllTokenizeShareRecordReward: {
                typeUrl: string;
                encode(message: _140.MsgWithdrawAllTokenizeShareRecordReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.MsgWithdrawAllTokenizeShareRecordReward;
                fromPartial(object: Partial<_140.MsgWithdrawAllTokenizeShareRecordReward>): _140.MsgWithdrawAllTokenizeShareRecordReward;
                fromAmino(object: _140.MsgWithdrawAllTokenizeShareRecordRewardAmino): _140.MsgWithdrawAllTokenizeShareRecordReward;
                toAmino(message: _140.MsgWithdrawAllTokenizeShareRecordReward): _140.MsgWithdrawAllTokenizeShareRecordRewardAmino;
                fromAminoMsg(object: _140.MsgWithdrawAllTokenizeShareRecordRewardAminoMsg): _140.MsgWithdrawAllTokenizeShareRecordReward;
                toAminoMsg(message: _140.MsgWithdrawAllTokenizeShareRecordReward): _140.MsgWithdrawAllTokenizeShareRecordRewardAminoMsg;
                fromProtoMsg(message: _140.MsgWithdrawAllTokenizeShareRecordRewardProtoMsg): _140.MsgWithdrawAllTokenizeShareRecordReward;
                toProto(message: _140.MsgWithdrawAllTokenizeShareRecordReward): Uint8Array;
                toProtoMsg(message: _140.MsgWithdrawAllTokenizeShareRecordReward): _140.MsgWithdrawAllTokenizeShareRecordRewardProtoMsg;
            };
            MsgWithdrawAllTokenizeShareRecordRewardResponse: {
                typeUrl: string;
                encode(_: _140.MsgWithdrawAllTokenizeShareRecordRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.MsgWithdrawAllTokenizeShareRecordRewardResponse;
                fromPartial(_: Partial<_140.MsgWithdrawAllTokenizeShareRecordRewardResponse>): _140.MsgWithdrawAllTokenizeShareRecordRewardResponse;
                fromAmino(_: _140.MsgWithdrawAllTokenizeShareRecordRewardResponseAmino): _140.MsgWithdrawAllTokenizeShareRecordRewardResponse;
                toAmino(_: _140.MsgWithdrawAllTokenizeShareRecordRewardResponse): _140.MsgWithdrawAllTokenizeShareRecordRewardResponseAmino;
                fromAminoMsg(object: _140.MsgWithdrawAllTokenizeShareRecordRewardResponseAminoMsg): _140.MsgWithdrawAllTokenizeShareRecordRewardResponse;
                fromProtoMsg(message: _140.MsgWithdrawAllTokenizeShareRecordRewardResponseProtoMsg): _140.MsgWithdrawAllTokenizeShareRecordRewardResponse;
                toProto(message: _140.MsgWithdrawAllTokenizeShareRecordRewardResponse): Uint8Array;
                toProtoMsg(message: _140.MsgWithdrawAllTokenizeShareRecordRewardResponse): _140.MsgWithdrawAllTokenizeShareRecordRewardResponseProtoMsg;
            };
            QueryLiquidValidatorRequest: {
                typeUrl: string;
                encode(message: _139.QueryLiquidValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.QueryLiquidValidatorRequest;
                fromPartial(object: Partial<_139.QueryLiquidValidatorRequest>): _139.QueryLiquidValidatorRequest;
                fromAmino(object: _139.QueryLiquidValidatorRequestAmino): _139.QueryLiquidValidatorRequest;
                toAmino(message: _139.QueryLiquidValidatorRequest): _139.QueryLiquidValidatorRequestAmino;
                fromAminoMsg(object: _139.QueryLiquidValidatorRequestAminoMsg): _139.QueryLiquidValidatorRequest;
                fromProtoMsg(message: _139.QueryLiquidValidatorRequestProtoMsg): _139.QueryLiquidValidatorRequest;
                toProto(message: _139.QueryLiquidValidatorRequest): Uint8Array;
                toProtoMsg(message: _139.QueryLiquidValidatorRequest): _139.QueryLiquidValidatorRequestProtoMsg;
            };
            QueryLiquidValidatorResponse: {
                typeUrl: string;
                encode(message: _139.QueryLiquidValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.QueryLiquidValidatorResponse;
                fromPartial(object: Partial<_139.QueryLiquidValidatorResponse>): _139.QueryLiquidValidatorResponse;
                fromAmino(object: _139.QueryLiquidValidatorResponseAmino): _139.QueryLiquidValidatorResponse;
                toAmino(message: _139.QueryLiquidValidatorResponse): _139.QueryLiquidValidatorResponseAmino;
                fromAminoMsg(object: _139.QueryLiquidValidatorResponseAminoMsg): _139.QueryLiquidValidatorResponse;
                fromProtoMsg(message: _139.QueryLiquidValidatorResponseProtoMsg): _139.QueryLiquidValidatorResponse;
                toProto(message: _139.QueryLiquidValidatorResponse): Uint8Array;
                toProtoMsg(message: _139.QueryLiquidValidatorResponse): _139.QueryLiquidValidatorResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _139.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.QueryParamsRequest;
                fromPartial(_: Partial<_139.QueryParamsRequest>): _139.QueryParamsRequest;
                fromAmino(_: _139.QueryParamsRequestAmino): _139.QueryParamsRequest;
                toAmino(_: _139.QueryParamsRequest): _139.QueryParamsRequestAmino;
                fromAminoMsg(object: _139.QueryParamsRequestAminoMsg): _139.QueryParamsRequest;
                fromProtoMsg(message: _139.QueryParamsRequestProtoMsg): _139.QueryParamsRequest;
                toProto(message: _139.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _139.QueryParamsRequest): _139.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _139.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.QueryParamsResponse;
                fromPartial(object: Partial<_139.QueryParamsResponse>): _139.QueryParamsResponse;
                fromAmino(object: _139.QueryParamsResponseAmino): _139.QueryParamsResponse;
                toAmino(message: _139.QueryParamsResponse): _139.QueryParamsResponseAmino;
                fromAminoMsg(object: _139.QueryParamsResponseAminoMsg): _139.QueryParamsResponse;
                fromProtoMsg(message: _139.QueryParamsResponseProtoMsg): _139.QueryParamsResponse;
                toProto(message: _139.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _139.QueryParamsResponse): _139.QueryParamsResponseProtoMsg;
            };
            QueryTokenizeShareRecordByIdRequest: {
                typeUrl: string;
                encode(message: _139.QueryTokenizeShareRecordByIdRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.QueryTokenizeShareRecordByIdRequest;
                fromPartial(object: Partial<_139.QueryTokenizeShareRecordByIdRequest>): _139.QueryTokenizeShareRecordByIdRequest;
                fromAmino(object: _139.QueryTokenizeShareRecordByIdRequestAmino): _139.QueryTokenizeShareRecordByIdRequest;
                toAmino(message: _139.QueryTokenizeShareRecordByIdRequest): _139.QueryTokenizeShareRecordByIdRequestAmino;
                fromAminoMsg(object: _139.QueryTokenizeShareRecordByIdRequestAminoMsg): _139.QueryTokenizeShareRecordByIdRequest;
                fromProtoMsg(message: _139.QueryTokenizeShareRecordByIdRequestProtoMsg): _139.QueryTokenizeShareRecordByIdRequest;
                toProto(message: _139.QueryTokenizeShareRecordByIdRequest): Uint8Array;
                toProtoMsg(message: _139.QueryTokenizeShareRecordByIdRequest): _139.QueryTokenizeShareRecordByIdRequestProtoMsg;
            };
            QueryTokenizeShareRecordByIdResponse: {
                typeUrl: string;
                encode(message: _139.QueryTokenizeShareRecordByIdResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.QueryTokenizeShareRecordByIdResponse;
                fromPartial(object: Partial<_139.QueryTokenizeShareRecordByIdResponse>): _139.QueryTokenizeShareRecordByIdResponse;
                fromAmino(object: _139.QueryTokenizeShareRecordByIdResponseAmino): _139.QueryTokenizeShareRecordByIdResponse;
                toAmino(message: _139.QueryTokenizeShareRecordByIdResponse): _139.QueryTokenizeShareRecordByIdResponseAmino;
                fromAminoMsg(object: _139.QueryTokenizeShareRecordByIdResponseAminoMsg): _139.QueryTokenizeShareRecordByIdResponse;
                fromProtoMsg(message: _139.QueryTokenizeShareRecordByIdResponseProtoMsg): _139.QueryTokenizeShareRecordByIdResponse;
                toProto(message: _139.QueryTokenizeShareRecordByIdResponse): Uint8Array;
                toProtoMsg(message: _139.QueryTokenizeShareRecordByIdResponse): _139.QueryTokenizeShareRecordByIdResponseProtoMsg;
            };
            QueryTokenizeShareRecordByDenomRequest: {
                typeUrl: string;
                encode(message: _139.QueryTokenizeShareRecordByDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.QueryTokenizeShareRecordByDenomRequest;
                fromPartial(object: Partial<_139.QueryTokenizeShareRecordByDenomRequest>): _139.QueryTokenizeShareRecordByDenomRequest;
                fromAmino(object: _139.QueryTokenizeShareRecordByDenomRequestAmino): _139.QueryTokenizeShareRecordByDenomRequest;
                toAmino(message: _139.QueryTokenizeShareRecordByDenomRequest): _139.QueryTokenizeShareRecordByDenomRequestAmino;
                fromAminoMsg(object: _139.QueryTokenizeShareRecordByDenomRequestAminoMsg): _139.QueryTokenizeShareRecordByDenomRequest;
                fromProtoMsg(message: _139.QueryTokenizeShareRecordByDenomRequestProtoMsg): _139.QueryTokenizeShareRecordByDenomRequest;
                toProto(message: _139.QueryTokenizeShareRecordByDenomRequest): Uint8Array;
                toProtoMsg(message: _139.QueryTokenizeShareRecordByDenomRequest): _139.QueryTokenizeShareRecordByDenomRequestProtoMsg;
            };
            QueryTokenizeShareRecordByDenomResponse: {
                typeUrl: string;
                encode(message: _139.QueryTokenizeShareRecordByDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.QueryTokenizeShareRecordByDenomResponse;
                fromPartial(object: Partial<_139.QueryTokenizeShareRecordByDenomResponse>): _139.QueryTokenizeShareRecordByDenomResponse;
                fromAmino(object: _139.QueryTokenizeShareRecordByDenomResponseAmino): _139.QueryTokenizeShareRecordByDenomResponse;
                toAmino(message: _139.QueryTokenizeShareRecordByDenomResponse): _139.QueryTokenizeShareRecordByDenomResponseAmino;
                fromAminoMsg(object: _139.QueryTokenizeShareRecordByDenomResponseAminoMsg): _139.QueryTokenizeShareRecordByDenomResponse;
                fromProtoMsg(message: _139.QueryTokenizeShareRecordByDenomResponseProtoMsg): _139.QueryTokenizeShareRecordByDenomResponse;
                toProto(message: _139.QueryTokenizeShareRecordByDenomResponse): Uint8Array;
                toProtoMsg(message: _139.QueryTokenizeShareRecordByDenomResponse): _139.QueryTokenizeShareRecordByDenomResponseProtoMsg;
            };
            QueryTokenizeShareRecordsOwnedRequest: {
                typeUrl: string;
                encode(message: _139.QueryTokenizeShareRecordsOwnedRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.QueryTokenizeShareRecordsOwnedRequest;
                fromPartial(object: Partial<_139.QueryTokenizeShareRecordsOwnedRequest>): _139.QueryTokenizeShareRecordsOwnedRequest;
                fromAmino(object: _139.QueryTokenizeShareRecordsOwnedRequestAmino): _139.QueryTokenizeShareRecordsOwnedRequest;
                toAmino(message: _139.QueryTokenizeShareRecordsOwnedRequest): _139.QueryTokenizeShareRecordsOwnedRequestAmino;
                fromAminoMsg(object: _139.QueryTokenizeShareRecordsOwnedRequestAminoMsg): _139.QueryTokenizeShareRecordsOwnedRequest;
                fromProtoMsg(message: _139.QueryTokenizeShareRecordsOwnedRequestProtoMsg): _139.QueryTokenizeShareRecordsOwnedRequest;
                toProto(message: _139.QueryTokenizeShareRecordsOwnedRequest): Uint8Array;
                toProtoMsg(message: _139.QueryTokenizeShareRecordsOwnedRequest): _139.QueryTokenizeShareRecordsOwnedRequestProtoMsg;
            };
            QueryTokenizeShareRecordsOwnedResponse: {
                typeUrl: string;
                encode(message: _139.QueryTokenizeShareRecordsOwnedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.QueryTokenizeShareRecordsOwnedResponse;
                fromPartial(object: Partial<_139.QueryTokenizeShareRecordsOwnedResponse>): _139.QueryTokenizeShareRecordsOwnedResponse;
                fromAmino(object: _139.QueryTokenizeShareRecordsOwnedResponseAmino): _139.QueryTokenizeShareRecordsOwnedResponse;
                toAmino(message: _139.QueryTokenizeShareRecordsOwnedResponse): _139.QueryTokenizeShareRecordsOwnedResponseAmino;
                fromAminoMsg(object: _139.QueryTokenizeShareRecordsOwnedResponseAminoMsg): _139.QueryTokenizeShareRecordsOwnedResponse;
                fromProtoMsg(message: _139.QueryTokenizeShareRecordsOwnedResponseProtoMsg): _139.QueryTokenizeShareRecordsOwnedResponse;
                toProto(message: _139.QueryTokenizeShareRecordsOwnedResponse): Uint8Array;
                toProtoMsg(message: _139.QueryTokenizeShareRecordsOwnedResponse): _139.QueryTokenizeShareRecordsOwnedResponseProtoMsg;
            };
            QueryAllTokenizeShareRecordsRequest: {
                typeUrl: string;
                encode(message: _139.QueryAllTokenizeShareRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.QueryAllTokenizeShareRecordsRequest;
                fromPartial(object: Partial<_139.QueryAllTokenizeShareRecordsRequest>): _139.QueryAllTokenizeShareRecordsRequest;
                fromAmino(object: _139.QueryAllTokenizeShareRecordsRequestAmino): _139.QueryAllTokenizeShareRecordsRequest;
                toAmino(message: _139.QueryAllTokenizeShareRecordsRequest): _139.QueryAllTokenizeShareRecordsRequestAmino;
                fromAminoMsg(object: _139.QueryAllTokenizeShareRecordsRequestAminoMsg): _139.QueryAllTokenizeShareRecordsRequest;
                fromProtoMsg(message: _139.QueryAllTokenizeShareRecordsRequestProtoMsg): _139.QueryAllTokenizeShareRecordsRequest;
                toProto(message: _139.QueryAllTokenizeShareRecordsRequest): Uint8Array;
                toProtoMsg(message: _139.QueryAllTokenizeShareRecordsRequest): _139.QueryAllTokenizeShareRecordsRequestProtoMsg;
            };
            QueryAllTokenizeShareRecordsResponse: {
                typeUrl: string;
                encode(message: _139.QueryAllTokenizeShareRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.QueryAllTokenizeShareRecordsResponse;
                fromPartial(object: Partial<_139.QueryAllTokenizeShareRecordsResponse>): _139.QueryAllTokenizeShareRecordsResponse;
                fromAmino(object: _139.QueryAllTokenizeShareRecordsResponseAmino): _139.QueryAllTokenizeShareRecordsResponse;
                toAmino(message: _139.QueryAllTokenizeShareRecordsResponse): _139.QueryAllTokenizeShareRecordsResponseAmino;
                fromAminoMsg(object: _139.QueryAllTokenizeShareRecordsResponseAminoMsg): _139.QueryAllTokenizeShareRecordsResponse;
                fromProtoMsg(message: _139.QueryAllTokenizeShareRecordsResponseProtoMsg): _139.QueryAllTokenizeShareRecordsResponse;
                toProto(message: _139.QueryAllTokenizeShareRecordsResponse): Uint8Array;
                toProtoMsg(message: _139.QueryAllTokenizeShareRecordsResponse): _139.QueryAllTokenizeShareRecordsResponseProtoMsg;
            };
            QueryLastTokenizeShareRecordIdRequest: {
                typeUrl: string;
                encode(_: _139.QueryLastTokenizeShareRecordIdRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.QueryLastTokenizeShareRecordIdRequest;
                fromPartial(_: Partial<_139.QueryLastTokenizeShareRecordIdRequest>): _139.QueryLastTokenizeShareRecordIdRequest;
                fromAmino(_: _139.QueryLastTokenizeShareRecordIdRequestAmino): _139.QueryLastTokenizeShareRecordIdRequest;
                toAmino(_: _139.QueryLastTokenizeShareRecordIdRequest): _139.QueryLastTokenizeShareRecordIdRequestAmino;
                fromAminoMsg(object: _139.QueryLastTokenizeShareRecordIdRequestAminoMsg): _139.QueryLastTokenizeShareRecordIdRequest;
                fromProtoMsg(message: _139.QueryLastTokenizeShareRecordIdRequestProtoMsg): _139.QueryLastTokenizeShareRecordIdRequest;
                toProto(message: _139.QueryLastTokenizeShareRecordIdRequest): Uint8Array;
                toProtoMsg(message: _139.QueryLastTokenizeShareRecordIdRequest): _139.QueryLastTokenizeShareRecordIdRequestProtoMsg;
            };
            QueryLastTokenizeShareRecordIdResponse: {
                typeUrl: string;
                encode(message: _139.QueryLastTokenizeShareRecordIdResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.QueryLastTokenizeShareRecordIdResponse;
                fromPartial(object: Partial<_139.QueryLastTokenizeShareRecordIdResponse>): _139.QueryLastTokenizeShareRecordIdResponse;
                fromAmino(object: _139.QueryLastTokenizeShareRecordIdResponseAmino): _139.QueryLastTokenizeShareRecordIdResponse;
                toAmino(message: _139.QueryLastTokenizeShareRecordIdResponse): _139.QueryLastTokenizeShareRecordIdResponseAmino;
                fromAminoMsg(object: _139.QueryLastTokenizeShareRecordIdResponseAminoMsg): _139.QueryLastTokenizeShareRecordIdResponse;
                fromProtoMsg(message: _139.QueryLastTokenizeShareRecordIdResponseProtoMsg): _139.QueryLastTokenizeShareRecordIdResponse;
                toProto(message: _139.QueryLastTokenizeShareRecordIdResponse): Uint8Array;
                toProtoMsg(message: _139.QueryLastTokenizeShareRecordIdResponse): _139.QueryLastTokenizeShareRecordIdResponseProtoMsg;
            };
            QueryTotalTokenizeSharedAssetsRequest: {
                typeUrl: string;
                encode(_: _139.QueryTotalTokenizeSharedAssetsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.QueryTotalTokenizeSharedAssetsRequest;
                fromPartial(_: Partial<_139.QueryTotalTokenizeSharedAssetsRequest>): _139.QueryTotalTokenizeSharedAssetsRequest;
                fromAmino(_: _139.QueryTotalTokenizeSharedAssetsRequestAmino): _139.QueryTotalTokenizeSharedAssetsRequest;
                toAmino(_: _139.QueryTotalTokenizeSharedAssetsRequest): _139.QueryTotalTokenizeSharedAssetsRequestAmino;
                fromAminoMsg(object: _139.QueryTotalTokenizeSharedAssetsRequestAminoMsg): _139.QueryTotalTokenizeSharedAssetsRequest;
                fromProtoMsg(message: _139.QueryTotalTokenizeSharedAssetsRequestProtoMsg): _139.QueryTotalTokenizeSharedAssetsRequest;
                toProto(message: _139.QueryTotalTokenizeSharedAssetsRequest): Uint8Array;
                toProtoMsg(message: _139.QueryTotalTokenizeSharedAssetsRequest): _139.QueryTotalTokenizeSharedAssetsRequestProtoMsg;
            };
            QueryTotalTokenizeSharedAssetsResponse: {
                typeUrl: string;
                encode(message: _139.QueryTotalTokenizeSharedAssetsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.QueryTotalTokenizeSharedAssetsResponse;
                fromPartial(object: Partial<_139.QueryTotalTokenizeSharedAssetsResponse>): _139.QueryTotalTokenizeSharedAssetsResponse;
                fromAmino(object: _139.QueryTotalTokenizeSharedAssetsResponseAmino): _139.QueryTotalTokenizeSharedAssetsResponse;
                toAmino(message: _139.QueryTotalTokenizeSharedAssetsResponse): _139.QueryTotalTokenizeSharedAssetsResponseAmino;
                fromAminoMsg(object: _139.QueryTotalTokenizeSharedAssetsResponseAminoMsg): _139.QueryTotalTokenizeSharedAssetsResponse;
                fromProtoMsg(message: _139.QueryTotalTokenizeSharedAssetsResponseProtoMsg): _139.QueryTotalTokenizeSharedAssetsResponse;
                toProto(message: _139.QueryTotalTokenizeSharedAssetsResponse): Uint8Array;
                toProtoMsg(message: _139.QueryTotalTokenizeSharedAssetsResponse): _139.QueryTotalTokenizeSharedAssetsResponseProtoMsg;
            };
            QueryTotalLiquidStaked: {
                typeUrl: string;
                encode(_: _139.QueryTotalLiquidStaked, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.QueryTotalLiquidStaked;
                fromPartial(_: Partial<_139.QueryTotalLiquidStaked>): _139.QueryTotalLiquidStaked;
                fromAmino(_: _139.QueryTotalLiquidStakedAmino): _139.QueryTotalLiquidStaked;
                toAmino(_: _139.QueryTotalLiquidStaked): _139.QueryTotalLiquidStakedAmino;
                fromAminoMsg(object: _139.QueryTotalLiquidStakedAminoMsg): _139.QueryTotalLiquidStaked;
                fromProtoMsg(message: _139.QueryTotalLiquidStakedProtoMsg): _139.QueryTotalLiquidStaked;
                toProto(message: _139.QueryTotalLiquidStaked): Uint8Array;
                toProtoMsg(message: _139.QueryTotalLiquidStaked): _139.QueryTotalLiquidStakedProtoMsg;
            };
            QueryTotalLiquidStakedResponse: {
                typeUrl: string;
                encode(message: _139.QueryTotalLiquidStakedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.QueryTotalLiquidStakedResponse;
                fromPartial(object: Partial<_139.QueryTotalLiquidStakedResponse>): _139.QueryTotalLiquidStakedResponse;
                fromAmino(object: _139.QueryTotalLiquidStakedResponseAmino): _139.QueryTotalLiquidStakedResponse;
                toAmino(message: _139.QueryTotalLiquidStakedResponse): _139.QueryTotalLiquidStakedResponseAmino;
                fromAminoMsg(object: _139.QueryTotalLiquidStakedResponseAminoMsg): _139.QueryTotalLiquidStakedResponse;
                fromProtoMsg(message: _139.QueryTotalLiquidStakedResponseProtoMsg): _139.QueryTotalLiquidStakedResponse;
                toProto(message: _139.QueryTotalLiquidStakedResponse): Uint8Array;
                toProtoMsg(message: _139.QueryTotalLiquidStakedResponse): _139.QueryTotalLiquidStakedResponseProtoMsg;
            };
            QueryTokenizeShareLockInfo: {
                typeUrl: string;
                encode(message: _139.QueryTokenizeShareLockInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.QueryTokenizeShareLockInfo;
                fromPartial(object: Partial<_139.QueryTokenizeShareLockInfo>): _139.QueryTokenizeShareLockInfo;
                fromAmino(object: _139.QueryTokenizeShareLockInfoAmino): _139.QueryTokenizeShareLockInfo;
                toAmino(message: _139.QueryTokenizeShareLockInfo): _139.QueryTokenizeShareLockInfoAmino;
                fromAminoMsg(object: _139.QueryTokenizeShareLockInfoAminoMsg): _139.QueryTokenizeShareLockInfo;
                fromProtoMsg(message: _139.QueryTokenizeShareLockInfoProtoMsg): _139.QueryTokenizeShareLockInfo;
                toProto(message: _139.QueryTokenizeShareLockInfo): Uint8Array;
                toProtoMsg(message: _139.QueryTokenizeShareLockInfo): _139.QueryTokenizeShareLockInfoProtoMsg;
            };
            QueryTokenizeShareLockInfoResponse: {
                typeUrl: string;
                encode(message: _139.QueryTokenizeShareLockInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.QueryTokenizeShareLockInfoResponse;
                fromPartial(object: Partial<_139.QueryTokenizeShareLockInfoResponse>): _139.QueryTokenizeShareLockInfoResponse;
                fromAmino(object: _139.QueryTokenizeShareLockInfoResponseAmino): _139.QueryTokenizeShareLockInfoResponse;
                toAmino(message: _139.QueryTokenizeShareLockInfoResponse): _139.QueryTokenizeShareLockInfoResponseAmino;
                fromAminoMsg(object: _139.QueryTokenizeShareLockInfoResponseAminoMsg): _139.QueryTokenizeShareLockInfoResponse;
                fromProtoMsg(message: _139.QueryTokenizeShareLockInfoResponseProtoMsg): _139.QueryTokenizeShareLockInfoResponse;
                toProto(message: _139.QueryTokenizeShareLockInfoResponse): Uint8Array;
                toProtoMsg(message: _139.QueryTokenizeShareLockInfoResponse): _139.QueryTokenizeShareLockInfoResponseProtoMsg;
            };
            QueryTokenizeShareRecordRewardRequest: {
                typeUrl: string;
                encode(message: _139.QueryTokenizeShareRecordRewardRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.QueryTokenizeShareRecordRewardRequest;
                fromPartial(object: Partial<_139.QueryTokenizeShareRecordRewardRequest>): _139.QueryTokenizeShareRecordRewardRequest;
                fromAmino(object: _139.QueryTokenizeShareRecordRewardRequestAmino): _139.QueryTokenizeShareRecordRewardRequest;
                toAmino(message: _139.QueryTokenizeShareRecordRewardRequest): _139.QueryTokenizeShareRecordRewardRequestAmino;
                fromAminoMsg(object: _139.QueryTokenizeShareRecordRewardRequestAminoMsg): _139.QueryTokenizeShareRecordRewardRequest;
                fromProtoMsg(message: _139.QueryTokenizeShareRecordRewardRequestProtoMsg): _139.QueryTokenizeShareRecordRewardRequest;
                toProto(message: _139.QueryTokenizeShareRecordRewardRequest): Uint8Array;
                toProtoMsg(message: _139.QueryTokenizeShareRecordRewardRequest): _139.QueryTokenizeShareRecordRewardRequestProtoMsg;
            };
            QueryTokenizeShareRecordRewardResponse: {
                typeUrl: string;
                encode(message: _139.QueryTokenizeShareRecordRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.QueryTokenizeShareRecordRewardResponse;
                fromPartial(object: Partial<_139.QueryTokenizeShareRecordRewardResponse>): _139.QueryTokenizeShareRecordRewardResponse;
                fromAmino(object: _139.QueryTokenizeShareRecordRewardResponseAmino): _139.QueryTokenizeShareRecordRewardResponse;
                toAmino(message: _139.QueryTokenizeShareRecordRewardResponse): _139.QueryTokenizeShareRecordRewardResponseAmino;
                fromAminoMsg(object: _139.QueryTokenizeShareRecordRewardResponseAminoMsg): _139.QueryTokenizeShareRecordRewardResponse;
                fromProtoMsg(message: _139.QueryTokenizeShareRecordRewardResponseProtoMsg): _139.QueryTokenizeShareRecordRewardResponse;
                toProto(message: _139.QueryTokenizeShareRecordRewardResponse): Uint8Array;
                toProtoMsg(message: _139.QueryTokenizeShareRecordRewardResponse): _139.QueryTokenizeShareRecordRewardResponseProtoMsg;
            };
            tokenizeShareLockStatusFromJSON(object: any): _137.TokenizeShareLockStatus;
            tokenizeShareLockStatusToJSON(object: _137.TokenizeShareLockStatus): string;
            TokenizeShareLockStatus: typeof _137.TokenizeShareLockStatus;
            TokenizeShareLockStatusSDKType: typeof _137.TokenizeShareLockStatus;
            TokenizeShareLockStatusAmino: typeof _137.TokenizeShareLockStatus;
            Params: {
                typeUrl: string;
                encode(message: _137.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.Params;
                fromPartial(object: Partial<_137.Params>): _137.Params;
                fromAmino(object: _137.ParamsAmino): _137.Params;
                toAmino(message: _137.Params): _137.ParamsAmino;
                fromAminoMsg(object: _137.ParamsAminoMsg): _137.Params;
                toAminoMsg(message: _137.Params): _137.ParamsAminoMsg;
                fromProtoMsg(message: _137.ParamsProtoMsg): _137.Params;
                toProto(message: _137.Params): Uint8Array;
                toProtoMsg(message: _137.Params): _137.ParamsProtoMsg;
            };
            TokenizeShareRecord: {
                typeUrl: string;
                encode(message: _137.TokenizeShareRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.TokenizeShareRecord;
                fromPartial(object: Partial<_137.TokenizeShareRecord>): _137.TokenizeShareRecord;
                fromAmino(object: _137.TokenizeShareRecordAmino): _137.TokenizeShareRecord;
                toAmino(message: _137.TokenizeShareRecord): _137.TokenizeShareRecordAmino;
                fromAminoMsg(object: _137.TokenizeShareRecordAminoMsg): _137.TokenizeShareRecord;
                fromProtoMsg(message: _137.TokenizeShareRecordProtoMsg): _137.TokenizeShareRecord;
                toProto(message: _137.TokenizeShareRecord): Uint8Array;
                toProtoMsg(message: _137.TokenizeShareRecord): _137.TokenizeShareRecordProtoMsg;
            };
            PendingTokenizeShareAuthorizations: {
                typeUrl: string;
                encode(message: _137.PendingTokenizeShareAuthorizations, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.PendingTokenizeShareAuthorizations;
                fromPartial(object: Partial<_137.PendingTokenizeShareAuthorizations>): _137.PendingTokenizeShareAuthorizations;
                fromAmino(object: _137.PendingTokenizeShareAuthorizationsAmino): _137.PendingTokenizeShareAuthorizations;
                toAmino(message: _137.PendingTokenizeShareAuthorizations): _137.PendingTokenizeShareAuthorizationsAmino;
                fromAminoMsg(object: _137.PendingTokenizeShareAuthorizationsAminoMsg): _137.PendingTokenizeShareAuthorizations;
                fromProtoMsg(message: _137.PendingTokenizeShareAuthorizationsProtoMsg): _137.PendingTokenizeShareAuthorizations;
                toProto(message: _137.PendingTokenizeShareAuthorizations): Uint8Array;
                toProtoMsg(message: _137.PendingTokenizeShareAuthorizations): _137.PendingTokenizeShareAuthorizationsProtoMsg;
            };
            TokenizeShareRecordReward: {
                typeUrl: string;
                encode(message: _137.TokenizeShareRecordReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.TokenizeShareRecordReward;
                fromPartial(object: Partial<_137.TokenizeShareRecordReward>): _137.TokenizeShareRecordReward;
                fromAmino(object: _137.TokenizeShareRecordRewardAmino): _137.TokenizeShareRecordReward;
                toAmino(message: _137.TokenizeShareRecordReward): _137.TokenizeShareRecordRewardAmino;
                fromAminoMsg(object: _137.TokenizeShareRecordRewardAminoMsg): _137.TokenizeShareRecordReward;
                fromProtoMsg(message: _137.TokenizeShareRecordRewardProtoMsg): _137.TokenizeShareRecordReward;
                toProto(message: _137.TokenizeShareRecordReward): Uint8Array;
                toProtoMsg(message: _137.TokenizeShareRecordReward): _137.TokenizeShareRecordRewardProtoMsg;
            };
            LiquidValidator: {
                typeUrl: string;
                encode(message: _137.LiquidValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.LiquidValidator;
                fromPartial(object: Partial<_137.LiquidValidator>): _137.LiquidValidator;
                fromAmino(object: _137.LiquidValidatorAmino): _137.LiquidValidator;
                toAmino(message: _137.LiquidValidator): _137.LiquidValidatorAmino;
                fromAminoMsg(object: _137.LiquidValidatorAminoMsg): _137.LiquidValidator;
                fromProtoMsg(message: _137.LiquidValidatorProtoMsg): _137.LiquidValidator;
                toProto(message: _137.LiquidValidator): Uint8Array;
                toProtoMsg(message: _137.LiquidValidator): _137.LiquidValidatorProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _136.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.GenesisState;
                fromPartial(object: Partial<_136.GenesisState>): _136.GenesisState;
                fromAmino(object: _136.GenesisStateAmino): _136.GenesisState;
                toAmino(message: _136.GenesisState): _136.GenesisStateAmino;
                fromAminoMsg(object: _136.GenesisStateAminoMsg): _136.GenesisState;
                fromProtoMsg(message: _136.GenesisStateProtoMsg): _136.GenesisState;
                toProto(message: _136.GenesisState): Uint8Array;
                toProtoMsg(message: _136.GenesisState): _136.GenesisStateProtoMsg;
            };
            TokenizeShareLock: {
                typeUrl: string;
                encode(message: _136.TokenizeShareLock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.TokenizeShareLock;
                fromPartial(object: Partial<_136.TokenizeShareLock>): _136.TokenizeShareLock;
                fromAmino(object: _136.TokenizeShareLockAmino): _136.TokenizeShareLock;
                toAmino(message: _136.TokenizeShareLock): _136.TokenizeShareLockAmino;
                fromAminoMsg(object: _136.TokenizeShareLockAminoMsg): _136.TokenizeShareLock;
                fromProtoMsg(message: _136.TokenizeShareLockProtoMsg): _136.TokenizeShareLock;
                toProto(message: _136.TokenizeShareLock): Uint8Array;
                toProtoMsg(message: _136.TokenizeShareLock): _136.TokenizeShareLockProtoMsg;
            };
        };
    }
    const metaprotocols: {
        ExtensionData: {
            typeUrl: string;
            encode(message: _141.ExtensionData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _141.ExtensionData;
            fromPartial(object: Partial<_141.ExtensionData>): _141.ExtensionData;
            fromAmino(object: _141.ExtensionDataAmino): _141.ExtensionData;
            toAmino(message: _141.ExtensionData): _141.ExtensionDataAmino;
            fromAminoMsg(object: _141.ExtensionDataAminoMsg): _141.ExtensionData;
            fromProtoMsg(message: _141.ExtensionDataProtoMsg): _141.ExtensionData;
            toProto(message: _141.ExtensionData): Uint8Array;
            toProtoMsg(message: _141.ExtensionData): _141.ExtensionDataProtoMsg;
        };
    };
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: import("../cosmos/auth/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                consensus: {
                    v1: import("../cosmos/consensus/v1/tx.rpc.msg").MsgClientImpl;
                };
                crisis: {
                    v1beta1: import("../cosmos/crisis/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/tx.rpc.msg").MsgClientImpl;
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                group: {
                    v1: import("../cosmos/group/v1/tx.rpc.msg").MsgClientImpl;
                };
                mint: {
                    v1beta1: import("../cosmos/mint/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                nft: {
                    v1beta1: import("../cosmos/nft/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                vesting: {
                    v1beta1: import("../cosmos/vesting/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
            gaia: {
                liquid: {
                    v1beta1: _351.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: import("../cosmos/app/v1alpha1/query").QueryConfigRequest): Promise<import("../cosmos/app/v1alpha1/query").QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: import("../cosmos/auth/v1beta1/query").QueryAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountsResponse>;
                        account(request: import("../cosmos/auth/v1beta1/query").QueryAccountRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountResponse>;
                        accountAddressByID(request: import("../cosmos/auth/v1beta1/query").QueryAccountAddressByIDRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountAddressByIDResponse>;
                        params(request?: import("../cosmos/auth/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryParamsResponse>;
                        moduleAccounts(request?: import("../cosmos/auth/v1beta1/query").QueryModuleAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountsResponse>;
                        moduleAccountByName(request: import("../cosmos/auth/v1beta1/query").QueryModuleAccountByNameRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountByNameResponse>;
                        bech32Prefix(request?: import("../cosmos/auth/v1beta1/query").Bech32PrefixRequest): Promise<import("../cosmos/auth/v1beta1/query").Bech32PrefixResponse>;
                        addressBytesToString(request: import("../cosmos/auth/v1beta1/query").AddressBytesToStringRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressBytesToStringResponse>;
                        addressStringToBytes(request: import("../cosmos/auth/v1beta1/query").AddressStringToBytesRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressStringToBytesResponse>;
                        accountInfo(request: import("../cosmos/auth/v1beta1/query").QueryAccountInfoRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountInfoResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: import("../cosmos/authz/v1beta1/query").QueryGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGrantsResponse>;
                        granterGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranterGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranterGrantsResponse>;
                        granteeGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsResponse>;
                    };
                };
                autocli: {
                    v1: {
                        appOptions(request?: import("../cosmos/autocli/v1/query").AppOptionsRequest): Promise<import("../cosmos/autocli/v1/query").AppOptionsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: import("../cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBalanceResponse>;
                        allBalances(request: import("../cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryAllBalancesResponse>;
                        spendableBalances(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesResponse>;
                        spendableBalanceByDenom(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalanceByDenomRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalanceByDenomResponse>;
                        totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                        supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                        params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponse>;
                        denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                        denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                        denomOwners(request: import("../cosmos/bank/v1beta1/query").QueryDenomOwnersRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomOwnersResponse>;
                        sendEnabled(request: import("../cosmos/bank/v1beta1/query").QuerySendEnabledRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySendEnabledResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: import("../cosmos/base/node/v1beta1/query").ConfigRequest): Promise<import("../cosmos/base/node/v1beta1/query").ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoResponse>;
                            getSyncing(request?: import("../cosmos/base/tendermint/v1beta1/query").GetSyncingRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetSyncingResponse>;
                            getLatestBlock(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockResponse>;
                            getBlockByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightResponse>;
                            aBCIQuery(request: import("../cosmos/base/tendermint/v1beta1/query").ABCIQueryRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").ABCIQueryResponse>;
                        };
                    };
                };
                consensus: {
                    v1: {
                        params(request?: import("../cosmos/consensus/v1/query").QueryParamsRequest): Promise<import("../cosmos/consensus/v1/query").QueryParamsResponse>;
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: import("../cosmos/distribution/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryParamsResponse>;
                        validatorDistributionInfo(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorDistributionInfoRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorDistributionInfoResponse>;
                        validatorOutstandingRewards(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionResponse>;
                        validatorSlashes(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesResponse>;
                        delegationRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: import("../cosmos/evidence/v1beta1/query").QueryEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query").QueryEvidenceResponse>;
                        allEvidence(request?: import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowanceRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowanceResponse>;
                        allowances(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesResponse>;
                        allowancesByGranter(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: import("../cosmos/gov/v1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1/query").QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: import("../cosmos/gov/v1beta1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1beta1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1beta1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1beta1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1beta1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1beta1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1beta1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: import("../cosmos/group/v1/query").QueryGroupInfoRequest): Promise<import("../cosmos/group/v1/query").QueryGroupInfoResponse>;
                        groupPolicyInfo(request: import("../cosmos/group/v1/query").QueryGroupPolicyInfoRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPolicyInfoResponse>;
                        groupMembers(request: import("../cosmos/group/v1/query").QueryGroupMembersRequest): Promise<import("../cosmos/group/v1/query").QueryGroupMembersResponse>;
                        groupsByAdmin(request: import("../cosmos/group/v1/query").QueryGroupsByAdminRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: import("../cosmos/group/v1/query").QueryGroupPoliciesByGroupRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: import("../cosmos/group/v1/query").QueryGroupPoliciesByAdminRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPoliciesByAdminResponse>;
                        proposal(request: import("../cosmos/group/v1/query").QueryProposalRequest): Promise<import("../cosmos/group/v1/query").QueryProposalResponse>;
                        proposalsByGroupPolicy(request: import("../cosmos/group/v1/query").QueryProposalsByGroupPolicyRequest): Promise<import("../cosmos/group/v1/query").QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: import("../cosmos/group/v1/query").QueryVoteByProposalVoterRequest): Promise<import("../cosmos/group/v1/query").QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: import("../cosmos/group/v1/query").QueryVotesByProposalRequest): Promise<import("../cosmos/group/v1/query").QueryVotesByProposalResponse>;
                        votesByVoter(request: import("../cosmos/group/v1/query").QueryVotesByVoterRequest): Promise<import("../cosmos/group/v1/query").QueryVotesByVoterResponse>;
                        groupsByMember(request: import("../cosmos/group/v1/query").QueryGroupsByMemberRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsByMemberResponse>;
                        tallyResult(request: import("../cosmos/group/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/group/v1/query").QueryTallyResultResponse>;
                        groups(request?: import("../cosmos/group/v1/query").QueryGroupsRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: import("../cosmos/mint/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryParamsResponse>;
                        inflation(request?: import("../cosmos/mint/v1beta1/query").QueryInflationRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryInflationResponse>;
                        annualProvisions(request?: import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: import("../cosmos/nft/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryBalanceResponse>;
                        owner(request: import("../cosmos/nft/v1beta1/query").QueryOwnerRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryOwnerResponse>;
                        supply(request: import("../cosmos/nft/v1beta1/query").QuerySupplyRequest): Promise<import("../cosmos/nft/v1beta1/query").QuerySupplyResponse>;
                        nFTs(request: import("../cosmos/nft/v1beta1/query").QueryNFTsRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryNFTsResponse>;
                        nFT(request: import("../cosmos/nft/v1beta1/query").QueryNFTRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryNFTResponse>;
                        class(request: import("../cosmos/nft/v1beta1/query").QueryClassRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryClassResponse>;
                        classes(request?: import("../cosmos/nft/v1beta1/query").QueryClassesRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryClassesResponse>;
                    };
                };
                orm: {
                    query: {
                        v1alpha1: {
                            get(request: import("../cosmos/orm/query/v1alpha1/query").GetRequest): Promise<import("../cosmos/orm/query/v1alpha1/query").GetResponse>;
                            list(request: import("../cosmos/orm/query/v1alpha1/query").ListRequest): Promise<import("../cosmos/orm/query/v1alpha1/query").ListResponse>;
                        };
                    };
                };
                params: {
                    v1beta1: {
                        params(request: import("../cosmos/params/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/params/v1beta1/query").QueryParamsResponse>;
                        subspaces(request?: import("../cosmos/params/v1beta1/query").QuerySubspacesRequest): Promise<import("../cosmos/params/v1beta1/query").QuerySubspacesResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: import("../cosmos/slashing/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/slashing/v1beta1/query").QueryParamsResponse>;
                        signingInfo(request: import("../cosmos/slashing/v1beta1/query").QuerySigningInfoRequest): Promise<import("../cosmos/slashing/v1beta1/query").QuerySigningInfoResponse>;
                        signingInfos(request?: import("../cosmos/slashing/v1beta1/query").QuerySigningInfosRequest): Promise<import("../cosmos/slashing/v1beta1/query").QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: import("../cosmos/staking/v1beta1/query").QueryValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorsResponse>;
                        validator(request: import("../cosmos/staking/v1beta1/query").QueryValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorResponse>;
                        validatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: import("../cosmos/staking/v1beta1/query").QueryDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegationResponse>;
                        unbondingDelegation(request: import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: import("../cosmos/staking/v1beta1/query").QueryRedelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryRedelegationsResponse>;
                        delegatorValidators(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorResponse>;
                        historicalInfo(request: import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoResponse>;
                        pool(request?: import("../cosmos/staking/v1beta1/query").QueryPoolRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryPoolResponse>;
                        params(request?: import("../cosmos/staking/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: import("../cosmos/tx/v1beta1/service").SimulateRequest): Promise<import("../cosmos/tx/v1beta1/service").SimulateResponse>;
                        getTx(request: import("../cosmos/tx/v1beta1/service").GetTxRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxResponse>;
                        broadcastTx(request: import("../cosmos/tx/v1beta1/service").BroadcastTxRequest): Promise<import("../cosmos/tx/v1beta1/service").BroadcastTxResponse>;
                        getTxsEvent(request: import("../cosmos/tx/v1beta1/service").GetTxsEventRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxsEventResponse>;
                        getBlockWithTxs(request: import("../cosmos/tx/v1beta1/service").GetBlockWithTxsRequest): Promise<import("../cosmos/tx/v1beta1/service").GetBlockWithTxsResponse>;
                        txDecode(request: import("../cosmos/tx/v1beta1/service").TxDecodeRequest): Promise<import("../cosmos/tx/v1beta1/service").TxDecodeResponse>;
                        txEncode(request: import("../cosmos/tx/v1beta1/service").TxEncodeRequest): Promise<import("../cosmos/tx/v1beta1/service").TxEncodeResponse>;
                        txEncodeAmino(request: import("../cosmos/tx/v1beta1/service").TxEncodeAminoRequest): Promise<import("../cosmos/tx/v1beta1/service").TxEncodeAminoResponse>;
                        txDecodeAmino(request: import("../cosmos/tx/v1beta1/service").TxDecodeAminoRequest): Promise<import("../cosmos/tx/v1beta1/service").TxDecodeAminoResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponse>;
                        appliedPlan(request: import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsResponse>;
                        authority(request?: import("../cosmos/upgrade/v1beta1/query").QueryAuthorityRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAuthorityResponse>;
                    };
                };
            };
            gaia: {
                liquid: {
                    v1beta1: {
                        liquidValidator(request: _139.QueryLiquidValidatorRequest): Promise<_139.QueryLiquidValidatorResponse>;
                        tokenizeShareRecordById(request: _139.QueryTokenizeShareRecordByIdRequest): Promise<_139.QueryTokenizeShareRecordByIdResponse>;
                        tokenizeShareRecordByDenom(request: _139.QueryTokenizeShareRecordByDenomRequest): Promise<_139.QueryTokenizeShareRecordByDenomResponse>;
                        tokenizeShareRecordsOwned(request: _139.QueryTokenizeShareRecordsOwnedRequest): Promise<_139.QueryTokenizeShareRecordsOwnedResponse>;
                        allTokenizeShareRecords(request?: _139.QueryAllTokenizeShareRecordsRequest): Promise<_139.QueryAllTokenizeShareRecordsResponse>;
                        lastTokenizeShareRecordId(request?: _139.QueryLastTokenizeShareRecordIdRequest): Promise<_139.QueryLastTokenizeShareRecordIdResponse>;
                        totalTokenizeSharedAssets(request?: _139.QueryTotalTokenizeSharedAssetsRequest): Promise<_139.QueryTotalTokenizeSharedAssetsResponse>;
                        totalLiquidStaked(request?: _139.QueryTotalLiquidStaked): Promise<_139.QueryTotalLiquidStakedResponse>;
                        tokenizeShareLockInfo(request: _139.QueryTokenizeShareLockInfo): Promise<_139.QueryTokenizeShareLockInfoResponse>;
                        params(request?: _139.QueryParamsRequest): Promise<_139.QueryParamsResponse>;
                        tokenizeShareRecordReward(request: _139.QueryTokenizeShareRecordRewardRequest): Promise<_139.QueryTokenizeShareRecordRewardResponse>;
                    };
                };
            };
        }>;
    };
}
