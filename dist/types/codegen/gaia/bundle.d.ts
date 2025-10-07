import * as _140 from "./liquid/module/v1/module";
import * as _141 from "./liquid/v1beta1/genesis";
import * as _142 from "./liquid/v1beta1/liquid";
import * as _144 from "./liquid/v1beta1/query";
import * as _145 from "./liquid/v1beta1/tx";
import * as _146 from "./metaprotocols/extensions";
import * as _363 from "./liquid/v1beta1/query.rpc.Query";
import * as _364 from "./liquid/v1beta1/tx.rpc.msg";
export declare namespace gaia {
    namespace liquid {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _140.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.Module;
                    fromPartial(object: Partial<_140.Module>): _140.Module;
                    fromAmino(object: _140.ModuleAmino): _140.Module;
                    toAmino(message: _140.Module): _140.ModuleAmino;
                    fromAminoMsg(object: _140.ModuleAminoMsg): _140.Module;
                    fromProtoMsg(message: _140.ModuleProtoMsg): _140.Module;
                    toProto(message: _140.Module): Uint8Array;
                    toProtoMsg(message: _140.Module): _140.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _364.MsgClientImpl;
            QueryClientImpl: typeof _363.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                liquidValidator(request: _144.QueryLiquidValidatorRequest): Promise<_144.QueryLiquidValidatorResponse>;
                tokenizeShareRecordById(request: _144.QueryTokenizeShareRecordByIdRequest): Promise<_144.QueryTokenizeShareRecordByIdResponse>;
                tokenizeShareRecordByDenom(request: _144.QueryTokenizeShareRecordByDenomRequest): Promise<_144.QueryTokenizeShareRecordByDenomResponse>;
                tokenizeShareRecordsOwned(request: _144.QueryTokenizeShareRecordsOwnedRequest): Promise<_144.QueryTokenizeShareRecordsOwnedResponse>;
                allTokenizeShareRecords(request?: _144.QueryAllTokenizeShareRecordsRequest): Promise<_144.QueryAllTokenizeShareRecordsResponse>;
                lastTokenizeShareRecordId(request?: _144.QueryLastTokenizeShareRecordIdRequest): Promise<_144.QueryLastTokenizeShareRecordIdResponse>;
                totalTokenizeSharedAssets(request?: _144.QueryTotalTokenizeSharedAssetsRequest): Promise<_144.QueryTotalTokenizeSharedAssetsResponse>;
                totalLiquidStaked(request?: _144.QueryTotalLiquidStaked): Promise<_144.QueryTotalLiquidStakedResponse>;
                tokenizeShareLockInfo(request: _144.QueryTokenizeShareLockInfo): Promise<_144.QueryTokenizeShareLockInfoResponse>;
                params(request?: _144.QueryParamsRequest): Promise<_144.QueryParamsResponse>;
                tokenizeShareRecordReward(request: _144.QueryTokenizeShareRecordRewardRequest): Promise<_144.QueryTokenizeShareRecordRewardResponse>;
            };
            registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _145.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    tokenizeShares(value: _145.MsgTokenizeShares): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    redeemTokensForShares(value: _145.MsgRedeemTokensForShares): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    transferTokenizeShareRecord(value: _145.MsgTransferTokenizeShareRecord): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    disableTokenizeShares(value: _145.MsgDisableTokenizeShares): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    enableTokenizeShares(value: _145.MsgEnableTokenizeShares): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawTokenizeShareRecordReward(value: _145.MsgWithdrawTokenizeShareRecordReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawAllTokenizeShareRecordReward(value: _145.MsgWithdrawAllTokenizeShareRecordReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _145.MsgUpdateParams): {
                        typeUrl: string;
                        value: _145.MsgUpdateParams;
                    };
                    tokenizeShares(value: _145.MsgTokenizeShares): {
                        typeUrl: string;
                        value: _145.MsgTokenizeShares;
                    };
                    redeemTokensForShares(value: _145.MsgRedeemTokensForShares): {
                        typeUrl: string;
                        value: _145.MsgRedeemTokensForShares;
                    };
                    transferTokenizeShareRecord(value: _145.MsgTransferTokenizeShareRecord): {
                        typeUrl: string;
                        value: _145.MsgTransferTokenizeShareRecord;
                    };
                    disableTokenizeShares(value: _145.MsgDisableTokenizeShares): {
                        typeUrl: string;
                        value: _145.MsgDisableTokenizeShares;
                    };
                    enableTokenizeShares(value: _145.MsgEnableTokenizeShares): {
                        typeUrl: string;
                        value: _145.MsgEnableTokenizeShares;
                    };
                    withdrawTokenizeShareRecordReward(value: _145.MsgWithdrawTokenizeShareRecordReward): {
                        typeUrl: string;
                        value: _145.MsgWithdrawTokenizeShareRecordReward;
                    };
                    withdrawAllTokenizeShareRecordReward(value: _145.MsgWithdrawAllTokenizeShareRecordReward): {
                        typeUrl: string;
                        value: _145.MsgWithdrawAllTokenizeShareRecordReward;
                    };
                };
                fromPartial: {
                    updateParams(value: _145.MsgUpdateParams): {
                        typeUrl: string;
                        value: _145.MsgUpdateParams;
                    };
                    tokenizeShares(value: _145.MsgTokenizeShares): {
                        typeUrl: string;
                        value: _145.MsgTokenizeShares;
                    };
                    redeemTokensForShares(value: _145.MsgRedeemTokensForShares): {
                        typeUrl: string;
                        value: _145.MsgRedeemTokensForShares;
                    };
                    transferTokenizeShareRecord(value: _145.MsgTransferTokenizeShareRecord): {
                        typeUrl: string;
                        value: _145.MsgTransferTokenizeShareRecord;
                    };
                    disableTokenizeShares(value: _145.MsgDisableTokenizeShares): {
                        typeUrl: string;
                        value: _145.MsgDisableTokenizeShares;
                    };
                    enableTokenizeShares(value: _145.MsgEnableTokenizeShares): {
                        typeUrl: string;
                        value: _145.MsgEnableTokenizeShares;
                    };
                    withdrawTokenizeShareRecordReward(value: _145.MsgWithdrawTokenizeShareRecordReward): {
                        typeUrl: string;
                        value: _145.MsgWithdrawTokenizeShareRecordReward;
                    };
                    withdrawAllTokenizeShareRecordReward(value: _145.MsgWithdrawAllTokenizeShareRecordReward): {
                        typeUrl: string;
                        value: _145.MsgWithdrawAllTokenizeShareRecordReward;
                    };
                };
            };
            AminoConverter: {
                "/gaia.liquid.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _145.MsgUpdateParams) => _145.MsgUpdateParamsAmino;
                    fromAmino: (object: _145.MsgUpdateParamsAmino) => _145.MsgUpdateParams;
                };
                "/gaia.liquid.v1beta1.MsgTokenizeShares": {
                    aminoType: string;
                    toAmino: (message: _145.MsgTokenizeShares) => _145.MsgTokenizeSharesAmino;
                    fromAmino: (object: _145.MsgTokenizeSharesAmino) => _145.MsgTokenizeShares;
                };
                "/gaia.liquid.v1beta1.MsgRedeemTokensForShares": {
                    aminoType: string;
                    toAmino: (message: _145.MsgRedeemTokensForShares) => _145.MsgRedeemTokensForSharesAmino;
                    fromAmino: (object: _145.MsgRedeemTokensForSharesAmino) => _145.MsgRedeemTokensForShares;
                };
                "/gaia.liquid.v1beta1.MsgTransferTokenizeShareRecord": {
                    aminoType: string;
                    toAmino: (message: _145.MsgTransferTokenizeShareRecord) => _145.MsgTransferTokenizeShareRecordAmino;
                    fromAmino: (object: _145.MsgTransferTokenizeShareRecordAmino) => _145.MsgTransferTokenizeShareRecord;
                };
                "/gaia.liquid.v1beta1.MsgDisableTokenizeShares": {
                    aminoType: string;
                    toAmino: (message: _145.MsgDisableTokenizeShares) => _145.MsgDisableTokenizeSharesAmino;
                    fromAmino: (object: _145.MsgDisableTokenizeSharesAmino) => _145.MsgDisableTokenizeShares;
                };
                "/gaia.liquid.v1beta1.MsgEnableTokenizeShares": {
                    aminoType: string;
                    toAmino: (message: _145.MsgEnableTokenizeShares) => _145.MsgEnableTokenizeSharesAmino;
                    fromAmino: (object: _145.MsgEnableTokenizeSharesAmino) => _145.MsgEnableTokenizeShares;
                };
                "/gaia.liquid.v1beta1.MsgWithdrawTokenizeShareRecordReward": {
                    aminoType: string;
                    toAmino: (message: _145.MsgWithdrawTokenizeShareRecordReward) => _145.MsgWithdrawTokenizeShareRecordRewardAmino;
                    fromAmino: (object: _145.MsgWithdrawTokenizeShareRecordRewardAmino) => _145.MsgWithdrawTokenizeShareRecordReward;
                };
                "/gaia.liquid.v1beta1.MsgWithdrawAllTokenizeShareRecordReward": {
                    aminoType: string;
                    toAmino: (message: _145.MsgWithdrawAllTokenizeShareRecordReward) => _145.MsgWithdrawAllTokenizeShareRecordRewardAmino;
                    fromAmino: (object: _145.MsgWithdrawAllTokenizeShareRecordRewardAmino) => _145.MsgWithdrawAllTokenizeShareRecordReward;
                };
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _145.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _145.MsgUpdateParams;
                fromPartial(object: Partial<_145.MsgUpdateParams>): _145.MsgUpdateParams;
                fromAmino(object: _145.MsgUpdateParamsAmino): _145.MsgUpdateParams;
                toAmino(message: _145.MsgUpdateParams): _145.MsgUpdateParamsAmino;
                fromAminoMsg(object: _145.MsgUpdateParamsAminoMsg): _145.MsgUpdateParams;
                toAminoMsg(message: _145.MsgUpdateParams): _145.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _145.MsgUpdateParamsProtoMsg): _145.MsgUpdateParams;
                toProto(message: _145.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _145.MsgUpdateParams): _145.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _145.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _145.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_145.MsgUpdateParamsResponse>): _145.MsgUpdateParamsResponse;
                fromAmino(_: _145.MsgUpdateParamsResponseAmino): _145.MsgUpdateParamsResponse;
                toAmino(_: _145.MsgUpdateParamsResponse): _145.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _145.MsgUpdateParamsResponseAminoMsg): _145.MsgUpdateParamsResponse;
                fromProtoMsg(message: _145.MsgUpdateParamsResponseProtoMsg): _145.MsgUpdateParamsResponse;
                toProto(message: _145.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _145.MsgUpdateParamsResponse): _145.MsgUpdateParamsResponseProtoMsg;
            };
            MsgTokenizeShares: {
                typeUrl: string;
                encode(message: _145.MsgTokenizeShares, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _145.MsgTokenizeShares;
                fromPartial(object: Partial<_145.MsgTokenizeShares>): _145.MsgTokenizeShares;
                fromAmino(object: _145.MsgTokenizeSharesAmino): _145.MsgTokenizeShares;
                toAmino(message: _145.MsgTokenizeShares): _145.MsgTokenizeSharesAmino;
                fromAminoMsg(object: _145.MsgTokenizeSharesAminoMsg): _145.MsgTokenizeShares;
                toAminoMsg(message: _145.MsgTokenizeShares): _145.MsgTokenizeSharesAminoMsg;
                fromProtoMsg(message: _145.MsgTokenizeSharesProtoMsg): _145.MsgTokenizeShares;
                toProto(message: _145.MsgTokenizeShares): Uint8Array;
                toProtoMsg(message: _145.MsgTokenizeShares): _145.MsgTokenizeSharesProtoMsg;
            };
            MsgTokenizeSharesResponse: {
                typeUrl: string;
                encode(message: _145.MsgTokenizeSharesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _145.MsgTokenizeSharesResponse;
                fromPartial(object: Partial<_145.MsgTokenizeSharesResponse>): _145.MsgTokenizeSharesResponse;
                fromAmino(object: _145.MsgTokenizeSharesResponseAmino): _145.MsgTokenizeSharesResponse;
                toAmino(message: _145.MsgTokenizeSharesResponse): _145.MsgTokenizeSharesResponseAmino;
                fromAminoMsg(object: _145.MsgTokenizeSharesResponseAminoMsg): _145.MsgTokenizeSharesResponse;
                fromProtoMsg(message: _145.MsgTokenizeSharesResponseProtoMsg): _145.MsgTokenizeSharesResponse;
                toProto(message: _145.MsgTokenizeSharesResponse): Uint8Array;
                toProtoMsg(message: _145.MsgTokenizeSharesResponse): _145.MsgTokenizeSharesResponseProtoMsg;
            };
            MsgRedeemTokensForShares: {
                typeUrl: string;
                encode(message: _145.MsgRedeemTokensForShares, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _145.MsgRedeemTokensForShares;
                fromPartial(object: Partial<_145.MsgRedeemTokensForShares>): _145.MsgRedeemTokensForShares;
                fromAmino(object: _145.MsgRedeemTokensForSharesAmino): _145.MsgRedeemTokensForShares;
                toAmino(message: _145.MsgRedeemTokensForShares): _145.MsgRedeemTokensForSharesAmino;
                fromAminoMsg(object: _145.MsgRedeemTokensForSharesAminoMsg): _145.MsgRedeemTokensForShares;
                toAminoMsg(message: _145.MsgRedeemTokensForShares): _145.MsgRedeemTokensForSharesAminoMsg;
                fromProtoMsg(message: _145.MsgRedeemTokensForSharesProtoMsg): _145.MsgRedeemTokensForShares;
                toProto(message: _145.MsgRedeemTokensForShares): Uint8Array;
                toProtoMsg(message: _145.MsgRedeemTokensForShares): _145.MsgRedeemTokensForSharesProtoMsg;
            };
            MsgRedeemTokensForSharesResponse: {
                typeUrl: string;
                encode(message: _145.MsgRedeemTokensForSharesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _145.MsgRedeemTokensForSharesResponse;
                fromPartial(object: Partial<_145.MsgRedeemTokensForSharesResponse>): _145.MsgRedeemTokensForSharesResponse;
                fromAmino(object: _145.MsgRedeemTokensForSharesResponseAmino): _145.MsgRedeemTokensForSharesResponse;
                toAmino(message: _145.MsgRedeemTokensForSharesResponse): _145.MsgRedeemTokensForSharesResponseAmino;
                fromAminoMsg(object: _145.MsgRedeemTokensForSharesResponseAminoMsg): _145.MsgRedeemTokensForSharesResponse;
                fromProtoMsg(message: _145.MsgRedeemTokensForSharesResponseProtoMsg): _145.MsgRedeemTokensForSharesResponse;
                toProto(message: _145.MsgRedeemTokensForSharesResponse): Uint8Array;
                toProtoMsg(message: _145.MsgRedeemTokensForSharesResponse): _145.MsgRedeemTokensForSharesResponseProtoMsg;
            };
            MsgTransferTokenizeShareRecord: {
                typeUrl: string;
                encode(message: _145.MsgTransferTokenizeShareRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _145.MsgTransferTokenizeShareRecord;
                fromPartial(object: Partial<_145.MsgTransferTokenizeShareRecord>): _145.MsgTransferTokenizeShareRecord;
                fromAmino(object: _145.MsgTransferTokenizeShareRecordAmino): _145.MsgTransferTokenizeShareRecord;
                toAmino(message: _145.MsgTransferTokenizeShareRecord): _145.MsgTransferTokenizeShareRecordAmino;
                fromAminoMsg(object: _145.MsgTransferTokenizeShareRecordAminoMsg): _145.MsgTransferTokenizeShareRecord;
                toAminoMsg(message: _145.MsgTransferTokenizeShareRecord): _145.MsgTransferTokenizeShareRecordAminoMsg;
                fromProtoMsg(message: _145.MsgTransferTokenizeShareRecordProtoMsg): _145.MsgTransferTokenizeShareRecord;
                toProto(message: _145.MsgTransferTokenizeShareRecord): Uint8Array;
                toProtoMsg(message: _145.MsgTransferTokenizeShareRecord): _145.MsgTransferTokenizeShareRecordProtoMsg;
            };
            MsgTransferTokenizeShareRecordResponse: {
                typeUrl: string;
                encode(_: _145.MsgTransferTokenizeShareRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _145.MsgTransferTokenizeShareRecordResponse;
                fromPartial(_: Partial<_145.MsgTransferTokenizeShareRecordResponse>): _145.MsgTransferTokenizeShareRecordResponse;
                fromAmino(_: _145.MsgTransferTokenizeShareRecordResponseAmino): _145.MsgTransferTokenizeShareRecordResponse;
                toAmino(_: _145.MsgTransferTokenizeShareRecordResponse): _145.MsgTransferTokenizeShareRecordResponseAmino;
                fromAminoMsg(object: _145.MsgTransferTokenizeShareRecordResponseAminoMsg): _145.MsgTransferTokenizeShareRecordResponse;
                fromProtoMsg(message: _145.MsgTransferTokenizeShareRecordResponseProtoMsg): _145.MsgTransferTokenizeShareRecordResponse;
                toProto(message: _145.MsgTransferTokenizeShareRecordResponse): Uint8Array;
                toProtoMsg(message: _145.MsgTransferTokenizeShareRecordResponse): _145.MsgTransferTokenizeShareRecordResponseProtoMsg;
            };
            MsgDisableTokenizeShares: {
                typeUrl: string;
                encode(message: _145.MsgDisableTokenizeShares, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _145.MsgDisableTokenizeShares;
                fromPartial(object: Partial<_145.MsgDisableTokenizeShares>): _145.MsgDisableTokenizeShares;
                fromAmino(object: _145.MsgDisableTokenizeSharesAmino): _145.MsgDisableTokenizeShares;
                toAmino(message: _145.MsgDisableTokenizeShares): _145.MsgDisableTokenizeSharesAmino;
                fromAminoMsg(object: _145.MsgDisableTokenizeSharesAminoMsg): _145.MsgDisableTokenizeShares;
                toAminoMsg(message: _145.MsgDisableTokenizeShares): _145.MsgDisableTokenizeSharesAminoMsg;
                fromProtoMsg(message: _145.MsgDisableTokenizeSharesProtoMsg): _145.MsgDisableTokenizeShares;
                toProto(message: _145.MsgDisableTokenizeShares): Uint8Array;
                toProtoMsg(message: _145.MsgDisableTokenizeShares): _145.MsgDisableTokenizeSharesProtoMsg;
            };
            MsgDisableTokenizeSharesResponse: {
                typeUrl: string;
                encode(_: _145.MsgDisableTokenizeSharesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _145.MsgDisableTokenizeSharesResponse;
                fromPartial(_: Partial<_145.MsgDisableTokenizeSharesResponse>): _145.MsgDisableTokenizeSharesResponse;
                fromAmino(_: _145.MsgDisableTokenizeSharesResponseAmino): _145.MsgDisableTokenizeSharesResponse;
                toAmino(_: _145.MsgDisableTokenizeSharesResponse): _145.MsgDisableTokenizeSharesResponseAmino;
                fromAminoMsg(object: _145.MsgDisableTokenizeSharesResponseAminoMsg): _145.MsgDisableTokenizeSharesResponse;
                fromProtoMsg(message: _145.MsgDisableTokenizeSharesResponseProtoMsg): _145.MsgDisableTokenizeSharesResponse;
                toProto(message: _145.MsgDisableTokenizeSharesResponse): Uint8Array;
                toProtoMsg(message: _145.MsgDisableTokenizeSharesResponse): _145.MsgDisableTokenizeSharesResponseProtoMsg;
            };
            MsgEnableTokenizeShares: {
                typeUrl: string;
                encode(message: _145.MsgEnableTokenizeShares, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _145.MsgEnableTokenizeShares;
                fromPartial(object: Partial<_145.MsgEnableTokenizeShares>): _145.MsgEnableTokenizeShares;
                fromAmino(object: _145.MsgEnableTokenizeSharesAmino): _145.MsgEnableTokenizeShares;
                toAmino(message: _145.MsgEnableTokenizeShares): _145.MsgEnableTokenizeSharesAmino;
                fromAminoMsg(object: _145.MsgEnableTokenizeSharesAminoMsg): _145.MsgEnableTokenizeShares;
                toAminoMsg(message: _145.MsgEnableTokenizeShares): _145.MsgEnableTokenizeSharesAminoMsg;
                fromProtoMsg(message: _145.MsgEnableTokenizeSharesProtoMsg): _145.MsgEnableTokenizeShares;
                toProto(message: _145.MsgEnableTokenizeShares): Uint8Array;
                toProtoMsg(message: _145.MsgEnableTokenizeShares): _145.MsgEnableTokenizeSharesProtoMsg;
            };
            MsgEnableTokenizeSharesResponse: {
                typeUrl: string;
                encode(message: _145.MsgEnableTokenizeSharesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _145.MsgEnableTokenizeSharesResponse;
                fromPartial(object: Partial<_145.MsgEnableTokenizeSharesResponse>): _145.MsgEnableTokenizeSharesResponse;
                fromAmino(object: _145.MsgEnableTokenizeSharesResponseAmino): _145.MsgEnableTokenizeSharesResponse;
                toAmino(message: _145.MsgEnableTokenizeSharesResponse): _145.MsgEnableTokenizeSharesResponseAmino;
                fromAminoMsg(object: _145.MsgEnableTokenizeSharesResponseAminoMsg): _145.MsgEnableTokenizeSharesResponse;
                fromProtoMsg(message: _145.MsgEnableTokenizeSharesResponseProtoMsg): _145.MsgEnableTokenizeSharesResponse;
                toProto(message: _145.MsgEnableTokenizeSharesResponse): Uint8Array;
                toProtoMsg(message: _145.MsgEnableTokenizeSharesResponse): _145.MsgEnableTokenizeSharesResponseProtoMsg;
            };
            MsgWithdrawTokenizeShareRecordReward: {
                typeUrl: string;
                encode(message: _145.MsgWithdrawTokenizeShareRecordReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _145.MsgWithdrawTokenizeShareRecordReward;
                fromPartial(object: Partial<_145.MsgWithdrawTokenizeShareRecordReward>): _145.MsgWithdrawTokenizeShareRecordReward;
                fromAmino(object: _145.MsgWithdrawTokenizeShareRecordRewardAmino): _145.MsgWithdrawTokenizeShareRecordReward;
                toAmino(message: _145.MsgWithdrawTokenizeShareRecordReward): _145.MsgWithdrawTokenizeShareRecordRewardAmino;
                fromAminoMsg(object: _145.MsgWithdrawTokenizeShareRecordRewardAminoMsg): _145.MsgWithdrawTokenizeShareRecordReward;
                toAminoMsg(message: _145.MsgWithdrawTokenizeShareRecordReward): _145.MsgWithdrawTokenizeShareRecordRewardAminoMsg;
                fromProtoMsg(message: _145.MsgWithdrawTokenizeShareRecordRewardProtoMsg): _145.MsgWithdrawTokenizeShareRecordReward;
                toProto(message: _145.MsgWithdrawTokenizeShareRecordReward): Uint8Array;
                toProtoMsg(message: _145.MsgWithdrawTokenizeShareRecordReward): _145.MsgWithdrawTokenizeShareRecordRewardProtoMsg;
            };
            MsgWithdrawTokenizeShareRecordRewardResponse: {
                typeUrl: string;
                encode(_: _145.MsgWithdrawTokenizeShareRecordRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _145.MsgWithdrawTokenizeShareRecordRewardResponse;
                fromPartial(_: Partial<_145.MsgWithdrawTokenizeShareRecordRewardResponse>): _145.MsgWithdrawTokenizeShareRecordRewardResponse;
                fromAmino(_: _145.MsgWithdrawTokenizeShareRecordRewardResponseAmino): _145.MsgWithdrawTokenizeShareRecordRewardResponse;
                toAmino(_: _145.MsgWithdrawTokenizeShareRecordRewardResponse): _145.MsgWithdrawTokenizeShareRecordRewardResponseAmino;
                fromAminoMsg(object: _145.MsgWithdrawTokenizeShareRecordRewardResponseAminoMsg): _145.MsgWithdrawTokenizeShareRecordRewardResponse;
                fromProtoMsg(message: _145.MsgWithdrawTokenizeShareRecordRewardResponseProtoMsg): _145.MsgWithdrawTokenizeShareRecordRewardResponse;
                toProto(message: _145.MsgWithdrawTokenizeShareRecordRewardResponse): Uint8Array;
                toProtoMsg(message: _145.MsgWithdrawTokenizeShareRecordRewardResponse): _145.MsgWithdrawTokenizeShareRecordRewardResponseProtoMsg;
            };
            MsgWithdrawAllTokenizeShareRecordReward: {
                typeUrl: string;
                encode(message: _145.MsgWithdrawAllTokenizeShareRecordReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _145.MsgWithdrawAllTokenizeShareRecordReward;
                fromPartial(object: Partial<_145.MsgWithdrawAllTokenizeShareRecordReward>): _145.MsgWithdrawAllTokenizeShareRecordReward;
                fromAmino(object: _145.MsgWithdrawAllTokenizeShareRecordRewardAmino): _145.MsgWithdrawAllTokenizeShareRecordReward;
                toAmino(message: _145.MsgWithdrawAllTokenizeShareRecordReward): _145.MsgWithdrawAllTokenizeShareRecordRewardAmino;
                fromAminoMsg(object: _145.MsgWithdrawAllTokenizeShareRecordRewardAminoMsg): _145.MsgWithdrawAllTokenizeShareRecordReward;
                toAminoMsg(message: _145.MsgWithdrawAllTokenizeShareRecordReward): _145.MsgWithdrawAllTokenizeShareRecordRewardAminoMsg;
                fromProtoMsg(message: _145.MsgWithdrawAllTokenizeShareRecordRewardProtoMsg): _145.MsgWithdrawAllTokenizeShareRecordReward;
                toProto(message: _145.MsgWithdrawAllTokenizeShareRecordReward): Uint8Array;
                toProtoMsg(message: _145.MsgWithdrawAllTokenizeShareRecordReward): _145.MsgWithdrawAllTokenizeShareRecordRewardProtoMsg;
            };
            MsgWithdrawAllTokenizeShareRecordRewardResponse: {
                typeUrl: string;
                encode(_: _145.MsgWithdrawAllTokenizeShareRecordRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _145.MsgWithdrawAllTokenizeShareRecordRewardResponse;
                fromPartial(_: Partial<_145.MsgWithdrawAllTokenizeShareRecordRewardResponse>): _145.MsgWithdrawAllTokenizeShareRecordRewardResponse;
                fromAmino(_: _145.MsgWithdrawAllTokenizeShareRecordRewardResponseAmino): _145.MsgWithdrawAllTokenizeShareRecordRewardResponse;
                toAmino(_: _145.MsgWithdrawAllTokenizeShareRecordRewardResponse): _145.MsgWithdrawAllTokenizeShareRecordRewardResponseAmino;
                fromAminoMsg(object: _145.MsgWithdrawAllTokenizeShareRecordRewardResponseAminoMsg): _145.MsgWithdrawAllTokenizeShareRecordRewardResponse;
                fromProtoMsg(message: _145.MsgWithdrawAllTokenizeShareRecordRewardResponseProtoMsg): _145.MsgWithdrawAllTokenizeShareRecordRewardResponse;
                toProto(message: _145.MsgWithdrawAllTokenizeShareRecordRewardResponse): Uint8Array;
                toProtoMsg(message: _145.MsgWithdrawAllTokenizeShareRecordRewardResponse): _145.MsgWithdrawAllTokenizeShareRecordRewardResponseProtoMsg;
            };
            QueryLiquidValidatorRequest: {
                typeUrl: string;
                encode(message: _144.QueryLiquidValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.QueryLiquidValidatorRequest;
                fromPartial(object: Partial<_144.QueryLiquidValidatorRequest>): _144.QueryLiquidValidatorRequest;
                fromAmino(object: _144.QueryLiquidValidatorRequestAmino): _144.QueryLiquidValidatorRequest;
                toAmino(message: _144.QueryLiquidValidatorRequest): _144.QueryLiquidValidatorRequestAmino;
                fromAminoMsg(object: _144.QueryLiquidValidatorRequestAminoMsg): _144.QueryLiquidValidatorRequest;
                fromProtoMsg(message: _144.QueryLiquidValidatorRequestProtoMsg): _144.QueryLiquidValidatorRequest;
                toProto(message: _144.QueryLiquidValidatorRequest): Uint8Array;
                toProtoMsg(message: _144.QueryLiquidValidatorRequest): _144.QueryLiquidValidatorRequestProtoMsg;
            };
            QueryLiquidValidatorResponse: {
                typeUrl: string;
                encode(message: _144.QueryLiquidValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.QueryLiquidValidatorResponse;
                fromPartial(object: Partial<_144.QueryLiquidValidatorResponse>): _144.QueryLiquidValidatorResponse;
                fromAmino(object: _144.QueryLiquidValidatorResponseAmino): _144.QueryLiquidValidatorResponse;
                toAmino(message: _144.QueryLiquidValidatorResponse): _144.QueryLiquidValidatorResponseAmino;
                fromAminoMsg(object: _144.QueryLiquidValidatorResponseAminoMsg): _144.QueryLiquidValidatorResponse;
                fromProtoMsg(message: _144.QueryLiquidValidatorResponseProtoMsg): _144.QueryLiquidValidatorResponse;
                toProto(message: _144.QueryLiquidValidatorResponse): Uint8Array;
                toProtoMsg(message: _144.QueryLiquidValidatorResponse): _144.QueryLiquidValidatorResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _144.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.QueryParamsRequest;
                fromPartial(_: Partial<_144.QueryParamsRequest>): _144.QueryParamsRequest;
                fromAmino(_: _144.QueryParamsRequestAmino): _144.QueryParamsRequest;
                toAmino(_: _144.QueryParamsRequest): _144.QueryParamsRequestAmino;
                fromAminoMsg(object: _144.QueryParamsRequestAminoMsg): _144.QueryParamsRequest;
                fromProtoMsg(message: _144.QueryParamsRequestProtoMsg): _144.QueryParamsRequest;
                toProto(message: _144.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _144.QueryParamsRequest): _144.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _144.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.QueryParamsResponse;
                fromPartial(object: Partial<_144.QueryParamsResponse>): _144.QueryParamsResponse;
                fromAmino(object: _144.QueryParamsResponseAmino): _144.QueryParamsResponse;
                toAmino(message: _144.QueryParamsResponse): _144.QueryParamsResponseAmino;
                fromAminoMsg(object: _144.QueryParamsResponseAminoMsg): _144.QueryParamsResponse;
                fromProtoMsg(message: _144.QueryParamsResponseProtoMsg): _144.QueryParamsResponse;
                toProto(message: _144.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _144.QueryParamsResponse): _144.QueryParamsResponseProtoMsg;
            };
            QueryTokenizeShareRecordByIdRequest: {
                typeUrl: string;
                encode(message: _144.QueryTokenizeShareRecordByIdRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.QueryTokenizeShareRecordByIdRequest;
                fromPartial(object: Partial<_144.QueryTokenizeShareRecordByIdRequest>): _144.QueryTokenizeShareRecordByIdRequest;
                fromAmino(object: _144.QueryTokenizeShareRecordByIdRequestAmino): _144.QueryTokenizeShareRecordByIdRequest;
                toAmino(message: _144.QueryTokenizeShareRecordByIdRequest): _144.QueryTokenizeShareRecordByIdRequestAmino;
                fromAminoMsg(object: _144.QueryTokenizeShareRecordByIdRequestAminoMsg): _144.QueryTokenizeShareRecordByIdRequest;
                fromProtoMsg(message: _144.QueryTokenizeShareRecordByIdRequestProtoMsg): _144.QueryTokenizeShareRecordByIdRequest;
                toProto(message: _144.QueryTokenizeShareRecordByIdRequest): Uint8Array;
                toProtoMsg(message: _144.QueryTokenizeShareRecordByIdRequest): _144.QueryTokenizeShareRecordByIdRequestProtoMsg;
            };
            QueryTokenizeShareRecordByIdResponse: {
                typeUrl: string;
                encode(message: _144.QueryTokenizeShareRecordByIdResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.QueryTokenizeShareRecordByIdResponse;
                fromPartial(object: Partial<_144.QueryTokenizeShareRecordByIdResponse>): _144.QueryTokenizeShareRecordByIdResponse;
                fromAmino(object: _144.QueryTokenizeShareRecordByIdResponseAmino): _144.QueryTokenizeShareRecordByIdResponse;
                toAmino(message: _144.QueryTokenizeShareRecordByIdResponse): _144.QueryTokenizeShareRecordByIdResponseAmino;
                fromAminoMsg(object: _144.QueryTokenizeShareRecordByIdResponseAminoMsg): _144.QueryTokenizeShareRecordByIdResponse;
                fromProtoMsg(message: _144.QueryTokenizeShareRecordByIdResponseProtoMsg): _144.QueryTokenizeShareRecordByIdResponse;
                toProto(message: _144.QueryTokenizeShareRecordByIdResponse): Uint8Array;
                toProtoMsg(message: _144.QueryTokenizeShareRecordByIdResponse): _144.QueryTokenizeShareRecordByIdResponseProtoMsg;
            };
            QueryTokenizeShareRecordByDenomRequest: {
                typeUrl: string;
                encode(message: _144.QueryTokenizeShareRecordByDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.QueryTokenizeShareRecordByDenomRequest;
                fromPartial(object: Partial<_144.QueryTokenizeShareRecordByDenomRequest>): _144.QueryTokenizeShareRecordByDenomRequest;
                fromAmino(object: _144.QueryTokenizeShareRecordByDenomRequestAmino): _144.QueryTokenizeShareRecordByDenomRequest;
                toAmino(message: _144.QueryTokenizeShareRecordByDenomRequest): _144.QueryTokenizeShareRecordByDenomRequestAmino;
                fromAminoMsg(object: _144.QueryTokenizeShareRecordByDenomRequestAminoMsg): _144.QueryTokenizeShareRecordByDenomRequest;
                fromProtoMsg(message: _144.QueryTokenizeShareRecordByDenomRequestProtoMsg): _144.QueryTokenizeShareRecordByDenomRequest;
                toProto(message: _144.QueryTokenizeShareRecordByDenomRequest): Uint8Array;
                toProtoMsg(message: _144.QueryTokenizeShareRecordByDenomRequest): _144.QueryTokenizeShareRecordByDenomRequestProtoMsg;
            };
            QueryTokenizeShareRecordByDenomResponse: {
                typeUrl: string;
                encode(message: _144.QueryTokenizeShareRecordByDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.QueryTokenizeShareRecordByDenomResponse;
                fromPartial(object: Partial<_144.QueryTokenizeShareRecordByDenomResponse>): _144.QueryTokenizeShareRecordByDenomResponse;
                fromAmino(object: _144.QueryTokenizeShareRecordByDenomResponseAmino): _144.QueryTokenizeShareRecordByDenomResponse;
                toAmino(message: _144.QueryTokenizeShareRecordByDenomResponse): _144.QueryTokenizeShareRecordByDenomResponseAmino;
                fromAminoMsg(object: _144.QueryTokenizeShareRecordByDenomResponseAminoMsg): _144.QueryTokenizeShareRecordByDenomResponse;
                fromProtoMsg(message: _144.QueryTokenizeShareRecordByDenomResponseProtoMsg): _144.QueryTokenizeShareRecordByDenomResponse;
                toProto(message: _144.QueryTokenizeShareRecordByDenomResponse): Uint8Array;
                toProtoMsg(message: _144.QueryTokenizeShareRecordByDenomResponse): _144.QueryTokenizeShareRecordByDenomResponseProtoMsg;
            };
            QueryTokenizeShareRecordsOwnedRequest: {
                typeUrl: string;
                encode(message: _144.QueryTokenizeShareRecordsOwnedRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.QueryTokenizeShareRecordsOwnedRequest;
                fromPartial(object: Partial<_144.QueryTokenizeShareRecordsOwnedRequest>): _144.QueryTokenizeShareRecordsOwnedRequest;
                fromAmino(object: _144.QueryTokenizeShareRecordsOwnedRequestAmino): _144.QueryTokenizeShareRecordsOwnedRequest;
                toAmino(message: _144.QueryTokenizeShareRecordsOwnedRequest): _144.QueryTokenizeShareRecordsOwnedRequestAmino;
                fromAminoMsg(object: _144.QueryTokenizeShareRecordsOwnedRequestAminoMsg): _144.QueryTokenizeShareRecordsOwnedRequest;
                fromProtoMsg(message: _144.QueryTokenizeShareRecordsOwnedRequestProtoMsg): _144.QueryTokenizeShareRecordsOwnedRequest;
                toProto(message: _144.QueryTokenizeShareRecordsOwnedRequest): Uint8Array;
                toProtoMsg(message: _144.QueryTokenizeShareRecordsOwnedRequest): _144.QueryTokenizeShareRecordsOwnedRequestProtoMsg;
            };
            QueryTokenizeShareRecordsOwnedResponse: {
                typeUrl: string;
                encode(message: _144.QueryTokenizeShareRecordsOwnedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.QueryTokenizeShareRecordsOwnedResponse;
                fromPartial(object: Partial<_144.QueryTokenizeShareRecordsOwnedResponse>): _144.QueryTokenizeShareRecordsOwnedResponse;
                fromAmino(object: _144.QueryTokenizeShareRecordsOwnedResponseAmino): _144.QueryTokenizeShareRecordsOwnedResponse;
                toAmino(message: _144.QueryTokenizeShareRecordsOwnedResponse): _144.QueryTokenizeShareRecordsOwnedResponseAmino;
                fromAminoMsg(object: _144.QueryTokenizeShareRecordsOwnedResponseAminoMsg): _144.QueryTokenizeShareRecordsOwnedResponse;
                fromProtoMsg(message: _144.QueryTokenizeShareRecordsOwnedResponseProtoMsg): _144.QueryTokenizeShareRecordsOwnedResponse;
                toProto(message: _144.QueryTokenizeShareRecordsOwnedResponse): Uint8Array;
                toProtoMsg(message: _144.QueryTokenizeShareRecordsOwnedResponse): _144.QueryTokenizeShareRecordsOwnedResponseProtoMsg;
            };
            QueryAllTokenizeShareRecordsRequest: {
                typeUrl: string;
                encode(message: _144.QueryAllTokenizeShareRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.QueryAllTokenizeShareRecordsRequest;
                fromPartial(object: Partial<_144.QueryAllTokenizeShareRecordsRequest>): _144.QueryAllTokenizeShareRecordsRequest;
                fromAmino(object: _144.QueryAllTokenizeShareRecordsRequestAmino): _144.QueryAllTokenizeShareRecordsRequest;
                toAmino(message: _144.QueryAllTokenizeShareRecordsRequest): _144.QueryAllTokenizeShareRecordsRequestAmino;
                fromAminoMsg(object: _144.QueryAllTokenizeShareRecordsRequestAminoMsg): _144.QueryAllTokenizeShareRecordsRequest;
                fromProtoMsg(message: _144.QueryAllTokenizeShareRecordsRequestProtoMsg): _144.QueryAllTokenizeShareRecordsRequest;
                toProto(message: _144.QueryAllTokenizeShareRecordsRequest): Uint8Array;
                toProtoMsg(message: _144.QueryAllTokenizeShareRecordsRequest): _144.QueryAllTokenizeShareRecordsRequestProtoMsg;
            };
            QueryAllTokenizeShareRecordsResponse: {
                typeUrl: string;
                encode(message: _144.QueryAllTokenizeShareRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.QueryAllTokenizeShareRecordsResponse;
                fromPartial(object: Partial<_144.QueryAllTokenizeShareRecordsResponse>): _144.QueryAllTokenizeShareRecordsResponse;
                fromAmino(object: _144.QueryAllTokenizeShareRecordsResponseAmino): _144.QueryAllTokenizeShareRecordsResponse;
                toAmino(message: _144.QueryAllTokenizeShareRecordsResponse): _144.QueryAllTokenizeShareRecordsResponseAmino;
                fromAminoMsg(object: _144.QueryAllTokenizeShareRecordsResponseAminoMsg): _144.QueryAllTokenizeShareRecordsResponse;
                fromProtoMsg(message: _144.QueryAllTokenizeShareRecordsResponseProtoMsg): _144.QueryAllTokenizeShareRecordsResponse;
                toProto(message: _144.QueryAllTokenizeShareRecordsResponse): Uint8Array;
                toProtoMsg(message: _144.QueryAllTokenizeShareRecordsResponse): _144.QueryAllTokenizeShareRecordsResponseProtoMsg;
            };
            QueryLastTokenizeShareRecordIdRequest: {
                typeUrl: string;
                encode(_: _144.QueryLastTokenizeShareRecordIdRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.QueryLastTokenizeShareRecordIdRequest;
                fromPartial(_: Partial<_144.QueryLastTokenizeShareRecordIdRequest>): _144.QueryLastTokenizeShareRecordIdRequest;
                fromAmino(_: _144.QueryLastTokenizeShareRecordIdRequestAmino): _144.QueryLastTokenizeShareRecordIdRequest;
                toAmino(_: _144.QueryLastTokenizeShareRecordIdRequest): _144.QueryLastTokenizeShareRecordIdRequestAmino;
                fromAminoMsg(object: _144.QueryLastTokenizeShareRecordIdRequestAminoMsg): _144.QueryLastTokenizeShareRecordIdRequest;
                fromProtoMsg(message: _144.QueryLastTokenizeShareRecordIdRequestProtoMsg): _144.QueryLastTokenizeShareRecordIdRequest;
                toProto(message: _144.QueryLastTokenizeShareRecordIdRequest): Uint8Array;
                toProtoMsg(message: _144.QueryLastTokenizeShareRecordIdRequest): _144.QueryLastTokenizeShareRecordIdRequestProtoMsg;
            };
            QueryLastTokenizeShareRecordIdResponse: {
                typeUrl: string;
                encode(message: _144.QueryLastTokenizeShareRecordIdResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.QueryLastTokenizeShareRecordIdResponse;
                fromPartial(object: Partial<_144.QueryLastTokenizeShareRecordIdResponse>): _144.QueryLastTokenizeShareRecordIdResponse;
                fromAmino(object: _144.QueryLastTokenizeShareRecordIdResponseAmino): _144.QueryLastTokenizeShareRecordIdResponse;
                toAmino(message: _144.QueryLastTokenizeShareRecordIdResponse): _144.QueryLastTokenizeShareRecordIdResponseAmino;
                fromAminoMsg(object: _144.QueryLastTokenizeShareRecordIdResponseAminoMsg): _144.QueryLastTokenizeShareRecordIdResponse;
                fromProtoMsg(message: _144.QueryLastTokenizeShareRecordIdResponseProtoMsg): _144.QueryLastTokenizeShareRecordIdResponse;
                toProto(message: _144.QueryLastTokenizeShareRecordIdResponse): Uint8Array;
                toProtoMsg(message: _144.QueryLastTokenizeShareRecordIdResponse): _144.QueryLastTokenizeShareRecordIdResponseProtoMsg;
            };
            QueryTotalTokenizeSharedAssetsRequest: {
                typeUrl: string;
                encode(_: _144.QueryTotalTokenizeSharedAssetsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.QueryTotalTokenizeSharedAssetsRequest;
                fromPartial(_: Partial<_144.QueryTotalTokenizeSharedAssetsRequest>): _144.QueryTotalTokenizeSharedAssetsRequest;
                fromAmino(_: _144.QueryTotalTokenizeSharedAssetsRequestAmino): _144.QueryTotalTokenizeSharedAssetsRequest;
                toAmino(_: _144.QueryTotalTokenizeSharedAssetsRequest): _144.QueryTotalTokenizeSharedAssetsRequestAmino;
                fromAminoMsg(object: _144.QueryTotalTokenizeSharedAssetsRequestAminoMsg): _144.QueryTotalTokenizeSharedAssetsRequest;
                fromProtoMsg(message: _144.QueryTotalTokenizeSharedAssetsRequestProtoMsg): _144.QueryTotalTokenizeSharedAssetsRequest;
                toProto(message: _144.QueryTotalTokenizeSharedAssetsRequest): Uint8Array;
                toProtoMsg(message: _144.QueryTotalTokenizeSharedAssetsRequest): _144.QueryTotalTokenizeSharedAssetsRequestProtoMsg;
            };
            QueryTotalTokenizeSharedAssetsResponse: {
                typeUrl: string;
                encode(message: _144.QueryTotalTokenizeSharedAssetsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.QueryTotalTokenizeSharedAssetsResponse;
                fromPartial(object: Partial<_144.QueryTotalTokenizeSharedAssetsResponse>): _144.QueryTotalTokenizeSharedAssetsResponse;
                fromAmino(object: _144.QueryTotalTokenizeSharedAssetsResponseAmino): _144.QueryTotalTokenizeSharedAssetsResponse;
                toAmino(message: _144.QueryTotalTokenizeSharedAssetsResponse): _144.QueryTotalTokenizeSharedAssetsResponseAmino;
                fromAminoMsg(object: _144.QueryTotalTokenizeSharedAssetsResponseAminoMsg): _144.QueryTotalTokenizeSharedAssetsResponse;
                fromProtoMsg(message: _144.QueryTotalTokenizeSharedAssetsResponseProtoMsg): _144.QueryTotalTokenizeSharedAssetsResponse;
                toProto(message: _144.QueryTotalTokenizeSharedAssetsResponse): Uint8Array;
                toProtoMsg(message: _144.QueryTotalTokenizeSharedAssetsResponse): _144.QueryTotalTokenizeSharedAssetsResponseProtoMsg;
            };
            QueryTotalLiquidStaked: {
                typeUrl: string;
                encode(_: _144.QueryTotalLiquidStaked, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.QueryTotalLiquidStaked;
                fromPartial(_: Partial<_144.QueryTotalLiquidStaked>): _144.QueryTotalLiquidStaked;
                fromAmino(_: _144.QueryTotalLiquidStakedAmino): _144.QueryTotalLiquidStaked;
                toAmino(_: _144.QueryTotalLiquidStaked): _144.QueryTotalLiquidStakedAmino;
                fromAminoMsg(object: _144.QueryTotalLiquidStakedAminoMsg): _144.QueryTotalLiquidStaked;
                fromProtoMsg(message: _144.QueryTotalLiquidStakedProtoMsg): _144.QueryTotalLiquidStaked;
                toProto(message: _144.QueryTotalLiquidStaked): Uint8Array;
                toProtoMsg(message: _144.QueryTotalLiquidStaked): _144.QueryTotalLiquidStakedProtoMsg;
            };
            QueryTotalLiquidStakedResponse: {
                typeUrl: string;
                encode(message: _144.QueryTotalLiquidStakedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.QueryTotalLiquidStakedResponse;
                fromPartial(object: Partial<_144.QueryTotalLiquidStakedResponse>): _144.QueryTotalLiquidStakedResponse;
                fromAmino(object: _144.QueryTotalLiquidStakedResponseAmino): _144.QueryTotalLiquidStakedResponse;
                toAmino(message: _144.QueryTotalLiquidStakedResponse): _144.QueryTotalLiquidStakedResponseAmino;
                fromAminoMsg(object: _144.QueryTotalLiquidStakedResponseAminoMsg): _144.QueryTotalLiquidStakedResponse;
                fromProtoMsg(message: _144.QueryTotalLiquidStakedResponseProtoMsg): _144.QueryTotalLiquidStakedResponse;
                toProto(message: _144.QueryTotalLiquidStakedResponse): Uint8Array;
                toProtoMsg(message: _144.QueryTotalLiquidStakedResponse): _144.QueryTotalLiquidStakedResponseProtoMsg;
            };
            QueryTokenizeShareLockInfo: {
                typeUrl: string;
                encode(message: _144.QueryTokenizeShareLockInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.QueryTokenizeShareLockInfo;
                fromPartial(object: Partial<_144.QueryTokenizeShareLockInfo>): _144.QueryTokenizeShareLockInfo;
                fromAmino(object: _144.QueryTokenizeShareLockInfoAmino): _144.QueryTokenizeShareLockInfo;
                toAmino(message: _144.QueryTokenizeShareLockInfo): _144.QueryTokenizeShareLockInfoAmino;
                fromAminoMsg(object: _144.QueryTokenizeShareLockInfoAminoMsg): _144.QueryTokenizeShareLockInfo;
                fromProtoMsg(message: _144.QueryTokenizeShareLockInfoProtoMsg): _144.QueryTokenizeShareLockInfo;
                toProto(message: _144.QueryTokenizeShareLockInfo): Uint8Array;
                toProtoMsg(message: _144.QueryTokenizeShareLockInfo): _144.QueryTokenizeShareLockInfoProtoMsg;
            };
            QueryTokenizeShareLockInfoResponse: {
                typeUrl: string;
                encode(message: _144.QueryTokenizeShareLockInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.QueryTokenizeShareLockInfoResponse;
                fromPartial(object: Partial<_144.QueryTokenizeShareLockInfoResponse>): _144.QueryTokenizeShareLockInfoResponse;
                fromAmino(object: _144.QueryTokenizeShareLockInfoResponseAmino): _144.QueryTokenizeShareLockInfoResponse;
                toAmino(message: _144.QueryTokenizeShareLockInfoResponse): _144.QueryTokenizeShareLockInfoResponseAmino;
                fromAminoMsg(object: _144.QueryTokenizeShareLockInfoResponseAminoMsg): _144.QueryTokenizeShareLockInfoResponse;
                fromProtoMsg(message: _144.QueryTokenizeShareLockInfoResponseProtoMsg): _144.QueryTokenizeShareLockInfoResponse;
                toProto(message: _144.QueryTokenizeShareLockInfoResponse): Uint8Array;
                toProtoMsg(message: _144.QueryTokenizeShareLockInfoResponse): _144.QueryTokenizeShareLockInfoResponseProtoMsg;
            };
            QueryTokenizeShareRecordRewardRequest: {
                typeUrl: string;
                encode(message: _144.QueryTokenizeShareRecordRewardRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.QueryTokenizeShareRecordRewardRequest;
                fromPartial(object: Partial<_144.QueryTokenizeShareRecordRewardRequest>): _144.QueryTokenizeShareRecordRewardRequest;
                fromAmino(object: _144.QueryTokenizeShareRecordRewardRequestAmino): _144.QueryTokenizeShareRecordRewardRequest;
                toAmino(message: _144.QueryTokenizeShareRecordRewardRequest): _144.QueryTokenizeShareRecordRewardRequestAmino;
                fromAminoMsg(object: _144.QueryTokenizeShareRecordRewardRequestAminoMsg): _144.QueryTokenizeShareRecordRewardRequest;
                fromProtoMsg(message: _144.QueryTokenizeShareRecordRewardRequestProtoMsg): _144.QueryTokenizeShareRecordRewardRequest;
                toProto(message: _144.QueryTokenizeShareRecordRewardRequest): Uint8Array;
                toProtoMsg(message: _144.QueryTokenizeShareRecordRewardRequest): _144.QueryTokenizeShareRecordRewardRequestProtoMsg;
            };
            QueryTokenizeShareRecordRewardResponse: {
                typeUrl: string;
                encode(message: _144.QueryTokenizeShareRecordRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.QueryTokenizeShareRecordRewardResponse;
                fromPartial(object: Partial<_144.QueryTokenizeShareRecordRewardResponse>): _144.QueryTokenizeShareRecordRewardResponse;
                fromAmino(object: _144.QueryTokenizeShareRecordRewardResponseAmino): _144.QueryTokenizeShareRecordRewardResponse;
                toAmino(message: _144.QueryTokenizeShareRecordRewardResponse): _144.QueryTokenizeShareRecordRewardResponseAmino;
                fromAminoMsg(object: _144.QueryTokenizeShareRecordRewardResponseAminoMsg): _144.QueryTokenizeShareRecordRewardResponse;
                fromProtoMsg(message: _144.QueryTokenizeShareRecordRewardResponseProtoMsg): _144.QueryTokenizeShareRecordRewardResponse;
                toProto(message: _144.QueryTokenizeShareRecordRewardResponse): Uint8Array;
                toProtoMsg(message: _144.QueryTokenizeShareRecordRewardResponse): _144.QueryTokenizeShareRecordRewardResponseProtoMsg;
            };
            tokenizeShareLockStatusFromJSON(object: any): _142.TokenizeShareLockStatus;
            tokenizeShareLockStatusToJSON(object: _142.TokenizeShareLockStatus): string;
            TokenizeShareLockStatus: typeof _142.TokenizeShareLockStatus;
            TokenizeShareLockStatusSDKType: typeof _142.TokenizeShareLockStatus;
            TokenizeShareLockStatusAmino: typeof _142.TokenizeShareLockStatus;
            Params: {
                typeUrl: string;
                encode(message: _142.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.Params;
                fromPartial(object: Partial<_142.Params>): _142.Params;
                fromAmino(object: _142.ParamsAmino): _142.Params;
                toAmino(message: _142.Params): _142.ParamsAmino;
                fromAminoMsg(object: _142.ParamsAminoMsg): _142.Params;
                toAminoMsg(message: _142.Params): _142.ParamsAminoMsg;
                fromProtoMsg(message: _142.ParamsProtoMsg): _142.Params;
                toProto(message: _142.Params): Uint8Array;
                toProtoMsg(message: _142.Params): _142.ParamsProtoMsg;
            };
            TokenizeShareRecord: {
                typeUrl: string;
                encode(message: _142.TokenizeShareRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.TokenizeShareRecord;
                fromPartial(object: Partial<_142.TokenizeShareRecord>): _142.TokenizeShareRecord;
                fromAmino(object: _142.TokenizeShareRecordAmino): _142.TokenizeShareRecord;
                toAmino(message: _142.TokenizeShareRecord): _142.TokenizeShareRecordAmino;
                fromAminoMsg(object: _142.TokenizeShareRecordAminoMsg): _142.TokenizeShareRecord;
                fromProtoMsg(message: _142.TokenizeShareRecordProtoMsg): _142.TokenizeShareRecord;
                toProto(message: _142.TokenizeShareRecord): Uint8Array;
                toProtoMsg(message: _142.TokenizeShareRecord): _142.TokenizeShareRecordProtoMsg;
            };
            PendingTokenizeShareAuthorizations: {
                typeUrl: string;
                encode(message: _142.PendingTokenizeShareAuthorizations, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.PendingTokenizeShareAuthorizations;
                fromPartial(object: Partial<_142.PendingTokenizeShareAuthorizations>): _142.PendingTokenizeShareAuthorizations;
                fromAmino(object: _142.PendingTokenizeShareAuthorizationsAmino): _142.PendingTokenizeShareAuthorizations;
                toAmino(message: _142.PendingTokenizeShareAuthorizations): _142.PendingTokenizeShareAuthorizationsAmino;
                fromAminoMsg(object: _142.PendingTokenizeShareAuthorizationsAminoMsg): _142.PendingTokenizeShareAuthorizations;
                fromProtoMsg(message: _142.PendingTokenizeShareAuthorizationsProtoMsg): _142.PendingTokenizeShareAuthorizations;
                toProto(message: _142.PendingTokenizeShareAuthorizations): Uint8Array;
                toProtoMsg(message: _142.PendingTokenizeShareAuthorizations): _142.PendingTokenizeShareAuthorizationsProtoMsg;
            };
            TokenizeShareRecordReward: {
                typeUrl: string;
                encode(message: _142.TokenizeShareRecordReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.TokenizeShareRecordReward;
                fromPartial(object: Partial<_142.TokenizeShareRecordReward>): _142.TokenizeShareRecordReward;
                fromAmino(object: _142.TokenizeShareRecordRewardAmino): _142.TokenizeShareRecordReward;
                toAmino(message: _142.TokenizeShareRecordReward): _142.TokenizeShareRecordRewardAmino;
                fromAminoMsg(object: _142.TokenizeShareRecordRewardAminoMsg): _142.TokenizeShareRecordReward;
                fromProtoMsg(message: _142.TokenizeShareRecordRewardProtoMsg): _142.TokenizeShareRecordReward;
                toProto(message: _142.TokenizeShareRecordReward): Uint8Array;
                toProtoMsg(message: _142.TokenizeShareRecordReward): _142.TokenizeShareRecordRewardProtoMsg;
            };
            LiquidValidator: {
                typeUrl: string;
                encode(message: _142.LiquidValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.LiquidValidator;
                fromPartial(object: Partial<_142.LiquidValidator>): _142.LiquidValidator;
                fromAmino(object: _142.LiquidValidatorAmino): _142.LiquidValidator;
                toAmino(message: _142.LiquidValidator): _142.LiquidValidatorAmino;
                fromAminoMsg(object: _142.LiquidValidatorAminoMsg): _142.LiquidValidator;
                fromProtoMsg(message: _142.LiquidValidatorProtoMsg): _142.LiquidValidator;
                toProto(message: _142.LiquidValidator): Uint8Array;
                toProtoMsg(message: _142.LiquidValidator): _142.LiquidValidatorProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _141.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _141.GenesisState;
                fromPartial(object: Partial<_141.GenesisState>): _141.GenesisState;
                fromAmino(object: _141.GenesisStateAmino): _141.GenesisState;
                toAmino(message: _141.GenesisState): _141.GenesisStateAmino;
                fromAminoMsg(object: _141.GenesisStateAminoMsg): _141.GenesisState;
                fromProtoMsg(message: _141.GenesisStateProtoMsg): _141.GenesisState;
                toProto(message: _141.GenesisState): Uint8Array;
                toProtoMsg(message: _141.GenesisState): _141.GenesisStateProtoMsg;
            };
            TokenizeShareLock: {
                typeUrl: string;
                encode(message: _141.TokenizeShareLock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _141.TokenizeShareLock;
                fromPartial(object: Partial<_141.TokenizeShareLock>): _141.TokenizeShareLock;
                fromAmino(object: _141.TokenizeShareLockAmino): _141.TokenizeShareLock;
                toAmino(message: _141.TokenizeShareLock): _141.TokenizeShareLockAmino;
                fromAminoMsg(object: _141.TokenizeShareLockAminoMsg): _141.TokenizeShareLock;
                fromProtoMsg(message: _141.TokenizeShareLockProtoMsg): _141.TokenizeShareLock;
                toProto(message: _141.TokenizeShareLock): Uint8Array;
                toProtoMsg(message: _141.TokenizeShareLock): _141.TokenizeShareLockProtoMsg;
            };
        };
    }
    const metaprotocols: {
        ExtensionData: {
            typeUrl: string;
            encode(message: _146.ExtensionData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _146.ExtensionData;
            fromPartial(object: Partial<_146.ExtensionData>): _146.ExtensionData;
            fromAmino(object: _146.ExtensionDataAmino): _146.ExtensionData;
            toAmino(message: _146.ExtensionData): _146.ExtensionDataAmino;
            fromAminoMsg(object: _146.ExtensionDataAminoMsg): _146.ExtensionData;
            fromProtoMsg(message: _146.ExtensionDataProtoMsg): _146.ExtensionData;
            toProto(message: _146.ExtensionData): Uint8Array;
            toProtoMsg(message: _146.ExtensionData): _146.ExtensionDataProtoMsg;
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
                circuit: {
                    v1: import("../cosmos/circuit/v1/tx.rpc.msg").MsgClientImpl;
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
                    v1beta1: _364.MsgClientImpl;
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
                        denomMetadataByQueryString(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataByQueryStringRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataByQueryStringResponse>;
                        denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                        denomOwners(request: import("../cosmos/bank/v1beta1/query").QueryDenomOwnersRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomOwnersResponse>;
                        denomOwnersByQuery(request: import("../cosmos/bank/v1beta1/query").QueryDenomOwnersByQueryRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomOwnersByQueryResponse>;
                        sendEnabled(request: import("../cosmos/bank/v1beta1/query").QuerySendEnabledRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySendEnabledResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: import("../cosmos/base/node/v1beta1/query").ConfigRequest): Promise<import("../cosmos/base/node/v1beta1/query").ConfigResponse>;
                            status(request?: import("../cosmos/base/node/v1beta1/query").StatusRequest): Promise<import("../cosmos/base/node/v1beta1/query").StatusResponse>;
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
                circuit: {
                    v1: {
                        account(request: import("../cosmos/circuit/v1/query").QueryAccountRequest): Promise<import("../cosmos/circuit/v1/query").AccountResponse>;
                        accounts(request?: import("../cosmos/circuit/v1/query").QueryAccountsRequest): Promise<import("../cosmos/circuit/v1/query").AccountsResponse>;
                        disabledList(request?: import("../cosmos/circuit/v1/query").QueryDisabledListRequest): Promise<import("../cosmos/circuit/v1/query").DisabledListResponse>;
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
                        constitution(request?: import("../cosmos/gov/v1/query").QueryConstitutionRequest): Promise<import("../cosmos/gov/v1/query").QueryConstitutionResponse>;
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
                        liquidValidator(request: _144.QueryLiquidValidatorRequest): Promise<_144.QueryLiquidValidatorResponse>;
                        tokenizeShareRecordById(request: _144.QueryTokenizeShareRecordByIdRequest): Promise<_144.QueryTokenizeShareRecordByIdResponse>;
                        tokenizeShareRecordByDenom(request: _144.QueryTokenizeShareRecordByDenomRequest): Promise<_144.QueryTokenizeShareRecordByDenomResponse>;
                        tokenizeShareRecordsOwned(request: _144.QueryTokenizeShareRecordsOwnedRequest): Promise<_144.QueryTokenizeShareRecordsOwnedResponse>;
                        allTokenizeShareRecords(request?: _144.QueryAllTokenizeShareRecordsRequest): Promise<_144.QueryAllTokenizeShareRecordsResponse>;
                        lastTokenizeShareRecordId(request?: _144.QueryLastTokenizeShareRecordIdRequest): Promise<_144.QueryLastTokenizeShareRecordIdResponse>;
                        totalTokenizeSharedAssets(request?: _144.QueryTotalTokenizeSharedAssetsRequest): Promise<_144.QueryTotalTokenizeSharedAssetsResponse>;
                        totalLiquidStaked(request?: _144.QueryTotalLiquidStaked): Promise<_144.QueryTotalLiquidStakedResponse>;
                        tokenizeShareLockInfo(request: _144.QueryTokenizeShareLockInfo): Promise<_144.QueryTokenizeShareLockInfoResponse>;
                        params(request?: _144.QueryParamsRequest): Promise<_144.QueryParamsResponse>;
                        tokenizeShareRecordReward(request: _144.QueryTokenizeShareRecordRewardRequest): Promise<_144.QueryTokenizeShareRecordRewardResponse>;
                    };
                };
            };
        }>;
    };
}
