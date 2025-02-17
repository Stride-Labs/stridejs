import * as _129 from "./wasm/v1/authz";
import * as _130 from "./wasm/v1/genesis";
import * as _131 from "./wasm/v1/ibc";
import * as _132 from "./wasm/v1/proposal_legacy";
import * as _133 from "./wasm/v1/query";
import * as _134 from "./wasm/v1/tx";
import * as _135 from "./wasm/v1/types";
import * as _339 from "./wasm/v1/query.rpc.Query";
import * as _340 from "./wasm/v1/tx.rpc.msg";
export declare namespace cosmwasm {
    namespace wasm {
        const v1: {
            MsgClientImpl: typeof _340.MsgClientImpl;
            QueryClientImpl: typeof _339.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                contractInfo(request: _133.QueryContractInfoRequest): Promise<_133.QueryContractInfoResponse>;
                contractHistory(request: _133.QueryContractHistoryRequest): Promise<_133.QueryContractHistoryResponse>;
                contractsByCode(request: _133.QueryContractsByCodeRequest): Promise<_133.QueryContractsByCodeResponse>;
                allContractState(request: _133.QueryAllContractStateRequest): Promise<_133.QueryAllContractStateResponse>;
                rawContractState(request: _133.QueryRawContractStateRequest): Promise<_133.QueryRawContractStateResponse>;
                smartContractState(request: _133.QuerySmartContractStateRequest): Promise<_133.QuerySmartContractStateResponse>;
                code(request: _133.QueryCodeRequest): Promise<_133.QueryCodeResponse>;
                codes(request?: _133.QueryCodesRequest): Promise<_133.QueryCodesResponse>;
                pinnedCodes(request?: _133.QueryPinnedCodesRequest): Promise<_133.QueryPinnedCodesResponse>;
                params(request?: _133.QueryParamsRequest): Promise<_133.QueryParamsResponse>;
                contractsByCreator(request: _133.QueryContractsByCreatorRequest): Promise<_133.QueryContractsByCreatorResponse>;
            };
            registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    storeCode(value: _134.MsgStoreCode): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract(value: _134.MsgInstantiateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract2(value: _134.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    executeContract(value: _134.MsgExecuteContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    migrateContract(value: _134.MsgMigrateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateAdmin(value: _134.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    clearAdmin(value: _134.MsgClearAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateInstantiateConfig(value: _134.MsgUpdateInstantiateConfig): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _134.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    sudoContract(value: _134.MsgSudoContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    pinCodes(value: _134.MsgPinCodes): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    unpinCodes(value: _134.MsgUnpinCodes): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    storeAndInstantiateContract(value: _134.MsgStoreAndInstantiateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    removeCodeUploadParamsAddresses(value: _134.MsgRemoveCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    addCodeUploadParamsAddresses(value: _134.MsgAddCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    storeAndMigrateContract(value: _134.MsgStoreAndMigrateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateContractLabel(value: _134.MsgUpdateContractLabel): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    storeCode(value: _134.MsgStoreCode): {
                        typeUrl: string;
                        value: _134.MsgStoreCode;
                    };
                    instantiateContract(value: _134.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _134.MsgInstantiateContract;
                    };
                    instantiateContract2(value: _134.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: _134.MsgInstantiateContract2;
                    };
                    executeContract(value: _134.MsgExecuteContract): {
                        typeUrl: string;
                        value: _134.MsgExecuteContract;
                    };
                    migrateContract(value: _134.MsgMigrateContract): {
                        typeUrl: string;
                        value: _134.MsgMigrateContract;
                    };
                    updateAdmin(value: _134.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _134.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _134.MsgClearAdmin): {
                        typeUrl: string;
                        value: _134.MsgClearAdmin;
                    };
                    updateInstantiateConfig(value: _134.MsgUpdateInstantiateConfig): {
                        typeUrl: string;
                        value: _134.MsgUpdateInstantiateConfig;
                    };
                    updateParams(value: _134.MsgUpdateParams): {
                        typeUrl: string;
                        value: _134.MsgUpdateParams;
                    };
                    sudoContract(value: _134.MsgSudoContract): {
                        typeUrl: string;
                        value: _134.MsgSudoContract;
                    };
                    pinCodes(value: _134.MsgPinCodes): {
                        typeUrl: string;
                        value: _134.MsgPinCodes;
                    };
                    unpinCodes(value: _134.MsgUnpinCodes): {
                        typeUrl: string;
                        value: _134.MsgUnpinCodes;
                    };
                    storeAndInstantiateContract(value: _134.MsgStoreAndInstantiateContract): {
                        typeUrl: string;
                        value: _134.MsgStoreAndInstantiateContract;
                    };
                    removeCodeUploadParamsAddresses(value: _134.MsgRemoveCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: _134.MsgRemoveCodeUploadParamsAddresses;
                    };
                    addCodeUploadParamsAddresses(value: _134.MsgAddCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: _134.MsgAddCodeUploadParamsAddresses;
                    };
                    storeAndMigrateContract(value: _134.MsgStoreAndMigrateContract): {
                        typeUrl: string;
                        value: _134.MsgStoreAndMigrateContract;
                    };
                    updateContractLabel(value: _134.MsgUpdateContractLabel): {
                        typeUrl: string;
                        value: _134.MsgUpdateContractLabel;
                    };
                };
                fromPartial: {
                    storeCode(value: _134.MsgStoreCode): {
                        typeUrl: string;
                        value: _134.MsgStoreCode;
                    };
                    instantiateContract(value: _134.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _134.MsgInstantiateContract;
                    };
                    instantiateContract2(value: _134.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: _134.MsgInstantiateContract2;
                    };
                    executeContract(value: _134.MsgExecuteContract): {
                        typeUrl: string;
                        value: _134.MsgExecuteContract;
                    };
                    migrateContract(value: _134.MsgMigrateContract): {
                        typeUrl: string;
                        value: _134.MsgMigrateContract;
                    };
                    updateAdmin(value: _134.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _134.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _134.MsgClearAdmin): {
                        typeUrl: string;
                        value: _134.MsgClearAdmin;
                    };
                    updateInstantiateConfig(value: _134.MsgUpdateInstantiateConfig): {
                        typeUrl: string;
                        value: _134.MsgUpdateInstantiateConfig;
                    };
                    updateParams(value: _134.MsgUpdateParams): {
                        typeUrl: string;
                        value: _134.MsgUpdateParams;
                    };
                    sudoContract(value: _134.MsgSudoContract): {
                        typeUrl: string;
                        value: _134.MsgSudoContract;
                    };
                    pinCodes(value: _134.MsgPinCodes): {
                        typeUrl: string;
                        value: _134.MsgPinCodes;
                    };
                    unpinCodes(value: _134.MsgUnpinCodes): {
                        typeUrl: string;
                        value: _134.MsgUnpinCodes;
                    };
                    storeAndInstantiateContract(value: _134.MsgStoreAndInstantiateContract): {
                        typeUrl: string;
                        value: _134.MsgStoreAndInstantiateContract;
                    };
                    removeCodeUploadParamsAddresses(value: _134.MsgRemoveCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: _134.MsgRemoveCodeUploadParamsAddresses;
                    };
                    addCodeUploadParamsAddresses(value: _134.MsgAddCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: _134.MsgAddCodeUploadParamsAddresses;
                    };
                    storeAndMigrateContract(value: _134.MsgStoreAndMigrateContract): {
                        typeUrl: string;
                        value: _134.MsgStoreAndMigrateContract;
                    };
                    updateContractLabel(value: _134.MsgUpdateContractLabel): {
                        typeUrl: string;
                        value: _134.MsgUpdateContractLabel;
                    };
                };
            };
            AminoConverter: {
                "/cosmwasm.wasm.v1.MsgStoreCode": {
                    aminoType: string;
                    toAmino: (message: _134.MsgStoreCode) => _134.MsgStoreCodeAmino;
                    fromAmino: (object: _134.MsgStoreCodeAmino) => _134.MsgStoreCode;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract": {
                    aminoType: string;
                    toAmino: (message: _134.MsgInstantiateContract) => _134.MsgInstantiateContractAmino;
                    fromAmino: (object: _134.MsgInstantiateContractAmino) => _134.MsgInstantiateContract;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract2": {
                    aminoType: string;
                    toAmino: (message: _134.MsgInstantiateContract2) => _134.MsgInstantiateContract2Amino;
                    fromAmino: (object: _134.MsgInstantiateContract2Amino) => _134.MsgInstantiateContract2;
                };
                "/cosmwasm.wasm.v1.MsgExecuteContract": {
                    aminoType: string;
                    toAmino: (message: _134.MsgExecuteContract) => _134.MsgExecuteContractAmino;
                    fromAmino: (object: _134.MsgExecuteContractAmino) => _134.MsgExecuteContract;
                };
                "/cosmwasm.wasm.v1.MsgMigrateContract": {
                    aminoType: string;
                    toAmino: (message: _134.MsgMigrateContract) => _134.MsgMigrateContractAmino;
                    fromAmino: (object: _134.MsgMigrateContractAmino) => _134.MsgMigrateContract;
                };
                "/cosmwasm.wasm.v1.MsgUpdateAdmin": {
                    aminoType: string;
                    toAmino: (message: _134.MsgUpdateAdmin) => _134.MsgUpdateAdminAmino;
                    fromAmino: (object: _134.MsgUpdateAdminAmino) => _134.MsgUpdateAdmin;
                };
                "/cosmwasm.wasm.v1.MsgClearAdmin": {
                    aminoType: string;
                    toAmino: (message: _134.MsgClearAdmin) => _134.MsgClearAdminAmino;
                    fromAmino: (object: _134.MsgClearAdminAmino) => _134.MsgClearAdmin;
                };
                "/cosmwasm.wasm.v1.MsgUpdateInstantiateConfig": {
                    aminoType: string;
                    toAmino: (message: _134.MsgUpdateInstantiateConfig) => _134.MsgUpdateInstantiateConfigAmino;
                    fromAmino: (object: _134.MsgUpdateInstantiateConfigAmino) => _134.MsgUpdateInstantiateConfig;
                };
                "/cosmwasm.wasm.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _134.MsgUpdateParams) => _134.MsgUpdateParamsAmino;
                    fromAmino: (object: _134.MsgUpdateParamsAmino) => _134.MsgUpdateParams;
                };
                "/cosmwasm.wasm.v1.MsgSudoContract": {
                    aminoType: string;
                    toAmino: (message: _134.MsgSudoContract) => _134.MsgSudoContractAmino;
                    fromAmino: (object: _134.MsgSudoContractAmino) => _134.MsgSudoContract;
                };
                "/cosmwasm.wasm.v1.MsgPinCodes": {
                    aminoType: string;
                    toAmino: (message: _134.MsgPinCodes) => _134.MsgPinCodesAmino;
                    fromAmino: (object: _134.MsgPinCodesAmino) => _134.MsgPinCodes;
                };
                "/cosmwasm.wasm.v1.MsgUnpinCodes": {
                    aminoType: string;
                    toAmino: (message: _134.MsgUnpinCodes) => _134.MsgUnpinCodesAmino;
                    fromAmino: (object: _134.MsgUnpinCodesAmino) => _134.MsgUnpinCodes;
                };
                "/cosmwasm.wasm.v1.MsgStoreAndInstantiateContract": {
                    aminoType: string;
                    toAmino: (message: _134.MsgStoreAndInstantiateContract) => _134.MsgStoreAndInstantiateContractAmino;
                    fromAmino: (object: _134.MsgStoreAndInstantiateContractAmino) => _134.MsgStoreAndInstantiateContract;
                };
                "/cosmwasm.wasm.v1.MsgRemoveCodeUploadParamsAddresses": {
                    aminoType: string;
                    toAmino: (message: _134.MsgRemoveCodeUploadParamsAddresses) => _134.MsgRemoveCodeUploadParamsAddressesAmino;
                    fromAmino: (object: _134.MsgRemoveCodeUploadParamsAddressesAmino) => _134.MsgRemoveCodeUploadParamsAddresses;
                };
                "/cosmwasm.wasm.v1.MsgAddCodeUploadParamsAddresses": {
                    aminoType: string;
                    toAmino: (message: _134.MsgAddCodeUploadParamsAddresses) => _134.MsgAddCodeUploadParamsAddressesAmino;
                    fromAmino: (object: _134.MsgAddCodeUploadParamsAddressesAmino) => _134.MsgAddCodeUploadParamsAddresses;
                };
                "/cosmwasm.wasm.v1.MsgStoreAndMigrateContract": {
                    aminoType: string;
                    toAmino: (message: _134.MsgStoreAndMigrateContract) => _134.MsgStoreAndMigrateContractAmino;
                    fromAmino: (object: _134.MsgStoreAndMigrateContractAmino) => _134.MsgStoreAndMigrateContract;
                };
                "/cosmwasm.wasm.v1.MsgUpdateContractLabel": {
                    aminoType: string;
                    toAmino: (message: _134.MsgUpdateContractLabel) => _134.MsgUpdateContractLabelAmino;
                    fromAmino: (object: _134.MsgUpdateContractLabelAmino) => _134.MsgUpdateContractLabel;
                };
            };
            accessTypeFromJSON(object: any): _135.AccessType;
            accessTypeToJSON(object: _135.AccessType): string;
            contractCodeHistoryOperationTypeFromJSON(object: any): _135.ContractCodeHistoryOperationType;
            contractCodeHistoryOperationTypeToJSON(object: _135.ContractCodeHistoryOperationType): string;
            AccessType: typeof _135.AccessType;
            AccessTypeSDKType: typeof _135.AccessType;
            AccessTypeAmino: typeof _135.AccessType;
            ContractCodeHistoryOperationType: typeof _135.ContractCodeHistoryOperationType;
            ContractCodeHistoryOperationTypeSDKType: typeof _135.ContractCodeHistoryOperationType;
            ContractCodeHistoryOperationTypeAmino: typeof _135.ContractCodeHistoryOperationType;
            AccessTypeParam: {
                typeUrl: string;
                encode(message: _135.AccessTypeParam, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _135.AccessTypeParam;
                fromPartial(object: Partial<_135.AccessTypeParam>): _135.AccessTypeParam;
                fromAmino(object: _135.AccessTypeParamAmino): _135.AccessTypeParam;
                toAmino(message: _135.AccessTypeParam): _135.AccessTypeParamAmino;
                fromAminoMsg(object: _135.AccessTypeParamAminoMsg): _135.AccessTypeParam;
                toAminoMsg(message: _135.AccessTypeParam): _135.AccessTypeParamAminoMsg;
                fromProtoMsg(message: _135.AccessTypeParamProtoMsg): _135.AccessTypeParam;
                toProto(message: _135.AccessTypeParam): Uint8Array;
                toProtoMsg(message: _135.AccessTypeParam): _135.AccessTypeParamProtoMsg;
            };
            AccessConfig: {
                typeUrl: string;
                encode(message: _135.AccessConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _135.AccessConfig;
                fromPartial(object: Partial<_135.AccessConfig>): _135.AccessConfig;
                fromAmino(object: _135.AccessConfigAmino): _135.AccessConfig;
                toAmino(message: _135.AccessConfig): _135.AccessConfigAmino;
                fromAminoMsg(object: _135.AccessConfigAminoMsg): _135.AccessConfig;
                toAminoMsg(message: _135.AccessConfig): _135.AccessConfigAminoMsg;
                fromProtoMsg(message: _135.AccessConfigProtoMsg): _135.AccessConfig;
                toProto(message: _135.AccessConfig): Uint8Array;
                toProtoMsg(message: _135.AccessConfig): _135.AccessConfigProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _135.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _135.Params;
                fromPartial(object: Partial<_135.Params>): _135.Params;
                fromAmino(object: _135.ParamsAmino): _135.Params;
                toAmino(message: _135.Params): _135.ParamsAmino;
                fromAminoMsg(object: _135.ParamsAminoMsg): _135.Params;
                toAminoMsg(message: _135.Params): _135.ParamsAminoMsg;
                fromProtoMsg(message: _135.ParamsProtoMsg): _135.Params;
                toProto(message: _135.Params): Uint8Array;
                toProtoMsg(message: _135.Params): _135.ParamsProtoMsg;
            };
            CodeInfo: {
                typeUrl: string;
                encode(message: _135.CodeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _135.CodeInfo;
                fromPartial(object: Partial<_135.CodeInfo>): _135.CodeInfo;
                fromAmino(object: _135.CodeInfoAmino): _135.CodeInfo;
                toAmino(message: _135.CodeInfo): _135.CodeInfoAmino;
                fromAminoMsg(object: _135.CodeInfoAminoMsg): _135.CodeInfo;
                toAminoMsg(message: _135.CodeInfo): _135.CodeInfoAminoMsg;
                fromProtoMsg(message: _135.CodeInfoProtoMsg): _135.CodeInfo;
                toProto(message: _135.CodeInfo): Uint8Array;
                toProtoMsg(message: _135.CodeInfo): _135.CodeInfoProtoMsg;
            };
            ContractInfo: {
                typeUrl: string;
                encode(message: _135.ContractInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _135.ContractInfo;
                fromPartial(object: Partial<_135.ContractInfo>): _135.ContractInfo;
                fromAmino(object: _135.ContractInfoAmino): _135.ContractInfo;
                toAmino(message: _135.ContractInfo): _135.ContractInfoAmino;
                fromAminoMsg(object: _135.ContractInfoAminoMsg): _135.ContractInfo;
                toAminoMsg(message: _135.ContractInfo): _135.ContractInfoAminoMsg;
                fromProtoMsg(message: _135.ContractInfoProtoMsg): _135.ContractInfo;
                toProto(message: _135.ContractInfo): Uint8Array;
                toProtoMsg(message: _135.ContractInfo): _135.ContractInfoProtoMsg;
            };
            ContractCodeHistoryEntry: {
                typeUrl: string;
                encode(message: _135.ContractCodeHistoryEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _135.ContractCodeHistoryEntry;
                fromPartial(object: Partial<_135.ContractCodeHistoryEntry>): _135.ContractCodeHistoryEntry;
                fromAmino(object: _135.ContractCodeHistoryEntryAmino): _135.ContractCodeHistoryEntry;
                toAmino(message: _135.ContractCodeHistoryEntry): _135.ContractCodeHistoryEntryAmino;
                fromAminoMsg(object: _135.ContractCodeHistoryEntryAminoMsg): _135.ContractCodeHistoryEntry;
                toAminoMsg(message: _135.ContractCodeHistoryEntry): _135.ContractCodeHistoryEntryAminoMsg;
                fromProtoMsg(message: _135.ContractCodeHistoryEntryProtoMsg): _135.ContractCodeHistoryEntry;
                toProto(message: _135.ContractCodeHistoryEntry): Uint8Array;
                toProtoMsg(message: _135.ContractCodeHistoryEntry): _135.ContractCodeHistoryEntryProtoMsg;
            };
            AbsoluteTxPosition: {
                typeUrl: string;
                encode(message: _135.AbsoluteTxPosition, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _135.AbsoluteTxPosition;
                fromPartial(object: Partial<_135.AbsoluteTxPosition>): _135.AbsoluteTxPosition;
                fromAmino(object: _135.AbsoluteTxPositionAmino): _135.AbsoluteTxPosition;
                toAmino(message: _135.AbsoluteTxPosition): _135.AbsoluteTxPositionAmino;
                fromAminoMsg(object: _135.AbsoluteTxPositionAminoMsg): _135.AbsoluteTxPosition;
                toAminoMsg(message: _135.AbsoluteTxPosition): _135.AbsoluteTxPositionAminoMsg;
                fromProtoMsg(message: _135.AbsoluteTxPositionProtoMsg): _135.AbsoluteTxPosition;
                toProto(message: _135.AbsoluteTxPosition): Uint8Array;
                toProtoMsg(message: _135.AbsoluteTxPosition): _135.AbsoluteTxPositionProtoMsg;
            };
            Model: {
                typeUrl: string;
                encode(message: _135.Model, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _135.Model;
                fromPartial(object: Partial<_135.Model>): _135.Model;
                fromAmino(object: _135.ModelAmino): _135.Model;
                toAmino(message: _135.Model): _135.ModelAmino;
                fromAminoMsg(object: _135.ModelAminoMsg): _135.Model;
                toAminoMsg(message: _135.Model): _135.ModelAminoMsg;
                fromProtoMsg(message: _135.ModelProtoMsg): _135.Model;
                toProto(message: _135.Model): Uint8Array;
                toProtoMsg(message: _135.Model): _135.ModelProtoMsg;
            };
            Cosmwasm_wasmv1ContractInfoExtension_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmwasm_wasmv1ContractInfoExtension_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmwasm_wasmv1ContractInfoExtension_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            MsgStoreCode: {
                typeUrl: string;
                encode(message: _134.MsgStoreCode, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.MsgStoreCode;
                fromPartial(object: Partial<_134.MsgStoreCode>): _134.MsgStoreCode;
                fromAmino(object: _134.MsgStoreCodeAmino): _134.MsgStoreCode;
                toAmino(message: _134.MsgStoreCode): _134.MsgStoreCodeAmino;
                fromAminoMsg(object: _134.MsgStoreCodeAminoMsg): _134.MsgStoreCode;
                toAminoMsg(message: _134.MsgStoreCode): _134.MsgStoreCodeAminoMsg;
                fromProtoMsg(message: _134.MsgStoreCodeProtoMsg): _134.MsgStoreCode;
                toProto(message: _134.MsgStoreCode): Uint8Array;
                toProtoMsg(message: _134.MsgStoreCode): _134.MsgStoreCodeProtoMsg;
            };
            MsgStoreCodeResponse: {
                typeUrl: string;
                encode(message: _134.MsgStoreCodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.MsgStoreCodeResponse;
                fromPartial(object: Partial<_134.MsgStoreCodeResponse>): _134.MsgStoreCodeResponse;
                fromAmino(object: _134.MsgStoreCodeResponseAmino): _134.MsgStoreCodeResponse;
                toAmino(message: _134.MsgStoreCodeResponse): _134.MsgStoreCodeResponseAmino;
                fromAminoMsg(object: _134.MsgStoreCodeResponseAminoMsg): _134.MsgStoreCodeResponse;
                toAminoMsg(message: _134.MsgStoreCodeResponse): _134.MsgStoreCodeResponseAminoMsg;
                fromProtoMsg(message: _134.MsgStoreCodeResponseProtoMsg): _134.MsgStoreCodeResponse;
                toProto(message: _134.MsgStoreCodeResponse): Uint8Array;
                toProtoMsg(message: _134.MsgStoreCodeResponse): _134.MsgStoreCodeResponseProtoMsg;
            };
            MsgInstantiateContract: {
                typeUrl: string;
                encode(message: _134.MsgInstantiateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.MsgInstantiateContract;
                fromPartial(object: Partial<_134.MsgInstantiateContract>): _134.MsgInstantiateContract;
                fromAmino(object: _134.MsgInstantiateContractAmino): _134.MsgInstantiateContract;
                toAmino(message: _134.MsgInstantiateContract): _134.MsgInstantiateContractAmino;
                fromAminoMsg(object: _134.MsgInstantiateContractAminoMsg): _134.MsgInstantiateContract;
                toAminoMsg(message: _134.MsgInstantiateContract): _134.MsgInstantiateContractAminoMsg;
                fromProtoMsg(message: _134.MsgInstantiateContractProtoMsg): _134.MsgInstantiateContract;
                toProto(message: _134.MsgInstantiateContract): Uint8Array;
                toProtoMsg(message: _134.MsgInstantiateContract): _134.MsgInstantiateContractProtoMsg;
            };
            MsgInstantiateContractResponse: {
                typeUrl: string;
                encode(message: _134.MsgInstantiateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.MsgInstantiateContractResponse;
                fromPartial(object: Partial<_134.MsgInstantiateContractResponse>): _134.MsgInstantiateContractResponse;
                fromAmino(object: _134.MsgInstantiateContractResponseAmino): _134.MsgInstantiateContractResponse;
                toAmino(message: _134.MsgInstantiateContractResponse): _134.MsgInstantiateContractResponseAmino;
                fromAminoMsg(object: _134.MsgInstantiateContractResponseAminoMsg): _134.MsgInstantiateContractResponse;
                toAminoMsg(message: _134.MsgInstantiateContractResponse): _134.MsgInstantiateContractResponseAminoMsg;
                fromProtoMsg(message: _134.MsgInstantiateContractResponseProtoMsg): _134.MsgInstantiateContractResponse;
                toProto(message: _134.MsgInstantiateContractResponse): Uint8Array;
                toProtoMsg(message: _134.MsgInstantiateContractResponse): _134.MsgInstantiateContractResponseProtoMsg;
            };
            MsgInstantiateContract2: {
                typeUrl: string;
                encode(message: _134.MsgInstantiateContract2, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.MsgInstantiateContract2;
                fromPartial(object: Partial<_134.MsgInstantiateContract2>): _134.MsgInstantiateContract2;
                fromAmino(object: _134.MsgInstantiateContract2Amino): _134.MsgInstantiateContract2;
                toAmino(message: _134.MsgInstantiateContract2): _134.MsgInstantiateContract2Amino;
                fromAminoMsg(object: _134.MsgInstantiateContract2AminoMsg): _134.MsgInstantiateContract2;
                toAminoMsg(message: _134.MsgInstantiateContract2): _134.MsgInstantiateContract2AminoMsg;
                fromProtoMsg(message: _134.MsgInstantiateContract2ProtoMsg): _134.MsgInstantiateContract2;
                toProto(message: _134.MsgInstantiateContract2): Uint8Array;
                toProtoMsg(message: _134.MsgInstantiateContract2): _134.MsgInstantiateContract2ProtoMsg;
            };
            MsgInstantiateContract2Response: {
                typeUrl: string;
                encode(message: _134.MsgInstantiateContract2Response, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.MsgInstantiateContract2Response;
                fromPartial(object: Partial<_134.MsgInstantiateContract2Response>): _134.MsgInstantiateContract2Response;
                fromAmino(object: _134.MsgInstantiateContract2ResponseAmino): _134.MsgInstantiateContract2Response;
                toAmino(message: _134.MsgInstantiateContract2Response): _134.MsgInstantiateContract2ResponseAmino;
                fromAminoMsg(object: _134.MsgInstantiateContract2ResponseAminoMsg): _134.MsgInstantiateContract2Response;
                toAminoMsg(message: _134.MsgInstantiateContract2Response): _134.MsgInstantiateContract2ResponseAminoMsg;
                fromProtoMsg(message: _134.MsgInstantiateContract2ResponseProtoMsg): _134.MsgInstantiateContract2Response;
                toProto(message: _134.MsgInstantiateContract2Response): Uint8Array;
                toProtoMsg(message: _134.MsgInstantiateContract2Response): _134.MsgInstantiateContract2ResponseProtoMsg;
            };
            MsgExecuteContract: {
                typeUrl: string;
                encode(message: _134.MsgExecuteContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.MsgExecuteContract;
                fromPartial(object: Partial<_134.MsgExecuteContract>): _134.MsgExecuteContract;
                fromAmino(object: _134.MsgExecuteContractAmino): _134.MsgExecuteContract;
                toAmino(message: _134.MsgExecuteContract): _134.MsgExecuteContractAmino;
                fromAminoMsg(object: _134.MsgExecuteContractAminoMsg): _134.MsgExecuteContract;
                toAminoMsg(message: _134.MsgExecuteContract): _134.MsgExecuteContractAminoMsg;
                fromProtoMsg(message: _134.MsgExecuteContractProtoMsg): _134.MsgExecuteContract;
                toProto(message: _134.MsgExecuteContract): Uint8Array;
                toProtoMsg(message: _134.MsgExecuteContract): _134.MsgExecuteContractProtoMsg;
            };
            MsgExecuteContractResponse: {
                typeUrl: string;
                encode(message: _134.MsgExecuteContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.MsgExecuteContractResponse;
                fromPartial(object: Partial<_134.MsgExecuteContractResponse>): _134.MsgExecuteContractResponse;
                fromAmino(object: _134.MsgExecuteContractResponseAmino): _134.MsgExecuteContractResponse;
                toAmino(message: _134.MsgExecuteContractResponse): _134.MsgExecuteContractResponseAmino;
                fromAminoMsg(object: _134.MsgExecuteContractResponseAminoMsg): _134.MsgExecuteContractResponse;
                toAminoMsg(message: _134.MsgExecuteContractResponse): _134.MsgExecuteContractResponseAminoMsg;
                fromProtoMsg(message: _134.MsgExecuteContractResponseProtoMsg): _134.MsgExecuteContractResponse;
                toProto(message: _134.MsgExecuteContractResponse): Uint8Array;
                toProtoMsg(message: _134.MsgExecuteContractResponse): _134.MsgExecuteContractResponseProtoMsg;
            };
            MsgMigrateContract: {
                typeUrl: string;
                encode(message: _134.MsgMigrateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.MsgMigrateContract;
                fromPartial(object: Partial<_134.MsgMigrateContract>): _134.MsgMigrateContract;
                fromAmino(object: _134.MsgMigrateContractAmino): _134.MsgMigrateContract;
                toAmino(message: _134.MsgMigrateContract): _134.MsgMigrateContractAmino;
                fromAminoMsg(object: _134.MsgMigrateContractAminoMsg): _134.MsgMigrateContract;
                toAminoMsg(message: _134.MsgMigrateContract): _134.MsgMigrateContractAminoMsg;
                fromProtoMsg(message: _134.MsgMigrateContractProtoMsg): _134.MsgMigrateContract;
                toProto(message: _134.MsgMigrateContract): Uint8Array;
                toProtoMsg(message: _134.MsgMigrateContract): _134.MsgMigrateContractProtoMsg;
            };
            MsgMigrateContractResponse: {
                typeUrl: string;
                encode(message: _134.MsgMigrateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.MsgMigrateContractResponse;
                fromPartial(object: Partial<_134.MsgMigrateContractResponse>): _134.MsgMigrateContractResponse;
                fromAmino(object: _134.MsgMigrateContractResponseAmino): _134.MsgMigrateContractResponse;
                toAmino(message: _134.MsgMigrateContractResponse): _134.MsgMigrateContractResponseAmino;
                fromAminoMsg(object: _134.MsgMigrateContractResponseAminoMsg): _134.MsgMigrateContractResponse;
                toAminoMsg(message: _134.MsgMigrateContractResponse): _134.MsgMigrateContractResponseAminoMsg;
                fromProtoMsg(message: _134.MsgMigrateContractResponseProtoMsg): _134.MsgMigrateContractResponse;
                toProto(message: _134.MsgMigrateContractResponse): Uint8Array;
                toProtoMsg(message: _134.MsgMigrateContractResponse): _134.MsgMigrateContractResponseProtoMsg;
            };
            MsgUpdateAdmin: {
                typeUrl: string;
                encode(message: _134.MsgUpdateAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.MsgUpdateAdmin;
                fromPartial(object: Partial<_134.MsgUpdateAdmin>): _134.MsgUpdateAdmin;
                fromAmino(object: _134.MsgUpdateAdminAmino): _134.MsgUpdateAdmin;
                toAmino(message: _134.MsgUpdateAdmin): _134.MsgUpdateAdminAmino;
                fromAminoMsg(object: _134.MsgUpdateAdminAminoMsg): _134.MsgUpdateAdmin;
                toAminoMsg(message: _134.MsgUpdateAdmin): _134.MsgUpdateAdminAminoMsg;
                fromProtoMsg(message: _134.MsgUpdateAdminProtoMsg): _134.MsgUpdateAdmin;
                toProto(message: _134.MsgUpdateAdmin): Uint8Array;
                toProtoMsg(message: _134.MsgUpdateAdmin): _134.MsgUpdateAdminProtoMsg;
            };
            MsgUpdateAdminResponse: {
                typeUrl: string;
                encode(_: _134.MsgUpdateAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.MsgUpdateAdminResponse;
                fromPartial(_: Partial<_134.MsgUpdateAdminResponse>): _134.MsgUpdateAdminResponse;
                fromAmino(_: _134.MsgUpdateAdminResponseAmino): _134.MsgUpdateAdminResponse;
                toAmino(_: _134.MsgUpdateAdminResponse): _134.MsgUpdateAdminResponseAmino;
                fromAminoMsg(object: _134.MsgUpdateAdminResponseAminoMsg): _134.MsgUpdateAdminResponse;
                toAminoMsg(message: _134.MsgUpdateAdminResponse): _134.MsgUpdateAdminResponseAminoMsg;
                fromProtoMsg(message: _134.MsgUpdateAdminResponseProtoMsg): _134.MsgUpdateAdminResponse;
                toProto(message: _134.MsgUpdateAdminResponse): Uint8Array;
                toProtoMsg(message: _134.MsgUpdateAdminResponse): _134.MsgUpdateAdminResponseProtoMsg;
            };
            MsgClearAdmin: {
                typeUrl: string;
                encode(message: _134.MsgClearAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.MsgClearAdmin;
                fromPartial(object: Partial<_134.MsgClearAdmin>): _134.MsgClearAdmin;
                fromAmino(object: _134.MsgClearAdminAmino): _134.MsgClearAdmin;
                toAmino(message: _134.MsgClearAdmin): _134.MsgClearAdminAmino;
                fromAminoMsg(object: _134.MsgClearAdminAminoMsg): _134.MsgClearAdmin;
                toAminoMsg(message: _134.MsgClearAdmin): _134.MsgClearAdminAminoMsg;
                fromProtoMsg(message: _134.MsgClearAdminProtoMsg): _134.MsgClearAdmin;
                toProto(message: _134.MsgClearAdmin): Uint8Array;
                toProtoMsg(message: _134.MsgClearAdmin): _134.MsgClearAdminProtoMsg;
            };
            MsgClearAdminResponse: {
                typeUrl: string;
                encode(_: _134.MsgClearAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.MsgClearAdminResponse;
                fromPartial(_: Partial<_134.MsgClearAdminResponse>): _134.MsgClearAdminResponse;
                fromAmino(_: _134.MsgClearAdminResponseAmino): _134.MsgClearAdminResponse;
                toAmino(_: _134.MsgClearAdminResponse): _134.MsgClearAdminResponseAmino;
                fromAminoMsg(object: _134.MsgClearAdminResponseAminoMsg): _134.MsgClearAdminResponse;
                toAminoMsg(message: _134.MsgClearAdminResponse): _134.MsgClearAdminResponseAminoMsg;
                fromProtoMsg(message: _134.MsgClearAdminResponseProtoMsg): _134.MsgClearAdminResponse;
                toProto(message: _134.MsgClearAdminResponse): Uint8Array;
                toProtoMsg(message: _134.MsgClearAdminResponse): _134.MsgClearAdminResponseProtoMsg;
            };
            MsgUpdateInstantiateConfig: {
                typeUrl: string;
                encode(message: _134.MsgUpdateInstantiateConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.MsgUpdateInstantiateConfig;
                fromPartial(object: Partial<_134.MsgUpdateInstantiateConfig>): _134.MsgUpdateInstantiateConfig;
                fromAmino(object: _134.MsgUpdateInstantiateConfigAmino): _134.MsgUpdateInstantiateConfig;
                toAmino(message: _134.MsgUpdateInstantiateConfig): _134.MsgUpdateInstantiateConfigAmino;
                fromAminoMsg(object: _134.MsgUpdateInstantiateConfigAminoMsg): _134.MsgUpdateInstantiateConfig;
                toAminoMsg(message: _134.MsgUpdateInstantiateConfig): _134.MsgUpdateInstantiateConfigAminoMsg;
                fromProtoMsg(message: _134.MsgUpdateInstantiateConfigProtoMsg): _134.MsgUpdateInstantiateConfig;
                toProto(message: _134.MsgUpdateInstantiateConfig): Uint8Array;
                toProtoMsg(message: _134.MsgUpdateInstantiateConfig): _134.MsgUpdateInstantiateConfigProtoMsg;
            };
            MsgUpdateInstantiateConfigResponse: {
                typeUrl: string;
                encode(_: _134.MsgUpdateInstantiateConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.MsgUpdateInstantiateConfigResponse;
                fromPartial(_: Partial<_134.MsgUpdateInstantiateConfigResponse>): _134.MsgUpdateInstantiateConfigResponse;
                fromAmino(_: _134.MsgUpdateInstantiateConfigResponseAmino): _134.MsgUpdateInstantiateConfigResponse;
                toAmino(_: _134.MsgUpdateInstantiateConfigResponse): _134.MsgUpdateInstantiateConfigResponseAmino;
                fromAminoMsg(object: _134.MsgUpdateInstantiateConfigResponseAminoMsg): _134.MsgUpdateInstantiateConfigResponse;
                toAminoMsg(message: _134.MsgUpdateInstantiateConfigResponse): _134.MsgUpdateInstantiateConfigResponseAminoMsg;
                fromProtoMsg(message: _134.MsgUpdateInstantiateConfigResponseProtoMsg): _134.MsgUpdateInstantiateConfigResponse;
                toProto(message: _134.MsgUpdateInstantiateConfigResponse): Uint8Array;
                toProtoMsg(message: _134.MsgUpdateInstantiateConfigResponse): _134.MsgUpdateInstantiateConfigResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _134.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.MsgUpdateParams;
                fromPartial(object: Partial<_134.MsgUpdateParams>): _134.MsgUpdateParams;
                fromAmino(object: _134.MsgUpdateParamsAmino): _134.MsgUpdateParams;
                toAmino(message: _134.MsgUpdateParams): _134.MsgUpdateParamsAmino;
                fromAminoMsg(object: _134.MsgUpdateParamsAminoMsg): _134.MsgUpdateParams;
                toAminoMsg(message: _134.MsgUpdateParams): _134.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _134.MsgUpdateParamsProtoMsg): _134.MsgUpdateParams;
                toProto(message: _134.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _134.MsgUpdateParams): _134.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _134.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_134.MsgUpdateParamsResponse>): _134.MsgUpdateParamsResponse;
                fromAmino(_: _134.MsgUpdateParamsResponseAmino): _134.MsgUpdateParamsResponse;
                toAmino(_: _134.MsgUpdateParamsResponse): _134.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _134.MsgUpdateParamsResponseAminoMsg): _134.MsgUpdateParamsResponse;
                toAminoMsg(message: _134.MsgUpdateParamsResponse): _134.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _134.MsgUpdateParamsResponseProtoMsg): _134.MsgUpdateParamsResponse;
                toProto(message: _134.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _134.MsgUpdateParamsResponse): _134.MsgUpdateParamsResponseProtoMsg;
            };
            MsgSudoContract: {
                typeUrl: string;
                encode(message: _134.MsgSudoContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.MsgSudoContract;
                fromPartial(object: Partial<_134.MsgSudoContract>): _134.MsgSudoContract;
                fromAmino(object: _134.MsgSudoContractAmino): _134.MsgSudoContract;
                toAmino(message: _134.MsgSudoContract): _134.MsgSudoContractAmino;
                fromAminoMsg(object: _134.MsgSudoContractAminoMsg): _134.MsgSudoContract;
                toAminoMsg(message: _134.MsgSudoContract): _134.MsgSudoContractAminoMsg;
                fromProtoMsg(message: _134.MsgSudoContractProtoMsg): _134.MsgSudoContract;
                toProto(message: _134.MsgSudoContract): Uint8Array;
                toProtoMsg(message: _134.MsgSudoContract): _134.MsgSudoContractProtoMsg;
            };
            MsgSudoContractResponse: {
                typeUrl: string;
                encode(message: _134.MsgSudoContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.MsgSudoContractResponse;
                fromPartial(object: Partial<_134.MsgSudoContractResponse>): _134.MsgSudoContractResponse;
                fromAmino(object: _134.MsgSudoContractResponseAmino): _134.MsgSudoContractResponse;
                toAmino(message: _134.MsgSudoContractResponse): _134.MsgSudoContractResponseAmino;
                fromAminoMsg(object: _134.MsgSudoContractResponseAminoMsg): _134.MsgSudoContractResponse;
                toAminoMsg(message: _134.MsgSudoContractResponse): _134.MsgSudoContractResponseAminoMsg;
                fromProtoMsg(message: _134.MsgSudoContractResponseProtoMsg): _134.MsgSudoContractResponse;
                toProto(message: _134.MsgSudoContractResponse): Uint8Array;
                toProtoMsg(message: _134.MsgSudoContractResponse): _134.MsgSudoContractResponseProtoMsg;
            };
            MsgPinCodes: {
                typeUrl: string;
                encode(message: _134.MsgPinCodes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.MsgPinCodes;
                fromPartial(object: Partial<_134.MsgPinCodes>): _134.MsgPinCodes;
                fromAmino(object: _134.MsgPinCodesAmino): _134.MsgPinCodes;
                toAmino(message: _134.MsgPinCodes): _134.MsgPinCodesAmino;
                fromAminoMsg(object: _134.MsgPinCodesAminoMsg): _134.MsgPinCodes;
                toAminoMsg(message: _134.MsgPinCodes): _134.MsgPinCodesAminoMsg;
                fromProtoMsg(message: _134.MsgPinCodesProtoMsg): _134.MsgPinCodes;
                toProto(message: _134.MsgPinCodes): Uint8Array;
                toProtoMsg(message: _134.MsgPinCodes): _134.MsgPinCodesProtoMsg;
            };
            MsgPinCodesResponse: {
                typeUrl: string;
                encode(_: _134.MsgPinCodesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.MsgPinCodesResponse;
                fromPartial(_: Partial<_134.MsgPinCodesResponse>): _134.MsgPinCodesResponse;
                fromAmino(_: _134.MsgPinCodesResponseAmino): _134.MsgPinCodesResponse;
                toAmino(_: _134.MsgPinCodesResponse): _134.MsgPinCodesResponseAmino;
                fromAminoMsg(object: _134.MsgPinCodesResponseAminoMsg): _134.MsgPinCodesResponse;
                toAminoMsg(message: _134.MsgPinCodesResponse): _134.MsgPinCodesResponseAminoMsg;
                fromProtoMsg(message: _134.MsgPinCodesResponseProtoMsg): _134.MsgPinCodesResponse;
                toProto(message: _134.MsgPinCodesResponse): Uint8Array;
                toProtoMsg(message: _134.MsgPinCodesResponse): _134.MsgPinCodesResponseProtoMsg;
            };
            MsgUnpinCodes: {
                typeUrl: string;
                encode(message: _134.MsgUnpinCodes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.MsgUnpinCodes;
                fromPartial(object: Partial<_134.MsgUnpinCodes>): _134.MsgUnpinCodes;
                fromAmino(object: _134.MsgUnpinCodesAmino): _134.MsgUnpinCodes;
                toAmino(message: _134.MsgUnpinCodes): _134.MsgUnpinCodesAmino;
                fromAminoMsg(object: _134.MsgUnpinCodesAminoMsg): _134.MsgUnpinCodes;
                toAminoMsg(message: _134.MsgUnpinCodes): _134.MsgUnpinCodesAminoMsg;
                fromProtoMsg(message: _134.MsgUnpinCodesProtoMsg): _134.MsgUnpinCodes;
                toProto(message: _134.MsgUnpinCodes): Uint8Array;
                toProtoMsg(message: _134.MsgUnpinCodes): _134.MsgUnpinCodesProtoMsg;
            };
            MsgUnpinCodesResponse: {
                typeUrl: string;
                encode(_: _134.MsgUnpinCodesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.MsgUnpinCodesResponse;
                fromPartial(_: Partial<_134.MsgUnpinCodesResponse>): _134.MsgUnpinCodesResponse;
                fromAmino(_: _134.MsgUnpinCodesResponseAmino): _134.MsgUnpinCodesResponse;
                toAmino(_: _134.MsgUnpinCodesResponse): _134.MsgUnpinCodesResponseAmino;
                fromAminoMsg(object: _134.MsgUnpinCodesResponseAminoMsg): _134.MsgUnpinCodesResponse;
                toAminoMsg(message: _134.MsgUnpinCodesResponse): _134.MsgUnpinCodesResponseAminoMsg;
                fromProtoMsg(message: _134.MsgUnpinCodesResponseProtoMsg): _134.MsgUnpinCodesResponse;
                toProto(message: _134.MsgUnpinCodesResponse): Uint8Array;
                toProtoMsg(message: _134.MsgUnpinCodesResponse): _134.MsgUnpinCodesResponseProtoMsg;
            };
            MsgStoreAndInstantiateContract: {
                typeUrl: string;
                encode(message: _134.MsgStoreAndInstantiateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.MsgStoreAndInstantiateContract;
                fromPartial(object: Partial<_134.MsgStoreAndInstantiateContract>): _134.MsgStoreAndInstantiateContract;
                fromAmino(object: _134.MsgStoreAndInstantiateContractAmino): _134.MsgStoreAndInstantiateContract;
                toAmino(message: _134.MsgStoreAndInstantiateContract): _134.MsgStoreAndInstantiateContractAmino;
                fromAminoMsg(object: _134.MsgStoreAndInstantiateContractAminoMsg): _134.MsgStoreAndInstantiateContract;
                toAminoMsg(message: _134.MsgStoreAndInstantiateContract): _134.MsgStoreAndInstantiateContractAminoMsg;
                fromProtoMsg(message: _134.MsgStoreAndInstantiateContractProtoMsg): _134.MsgStoreAndInstantiateContract;
                toProto(message: _134.MsgStoreAndInstantiateContract): Uint8Array;
                toProtoMsg(message: _134.MsgStoreAndInstantiateContract): _134.MsgStoreAndInstantiateContractProtoMsg;
            };
            MsgStoreAndInstantiateContractResponse: {
                typeUrl: string;
                encode(message: _134.MsgStoreAndInstantiateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.MsgStoreAndInstantiateContractResponse;
                fromPartial(object: Partial<_134.MsgStoreAndInstantiateContractResponse>): _134.MsgStoreAndInstantiateContractResponse;
                fromAmino(object: _134.MsgStoreAndInstantiateContractResponseAmino): _134.MsgStoreAndInstantiateContractResponse;
                toAmino(message: _134.MsgStoreAndInstantiateContractResponse): _134.MsgStoreAndInstantiateContractResponseAmino;
                fromAminoMsg(object: _134.MsgStoreAndInstantiateContractResponseAminoMsg): _134.MsgStoreAndInstantiateContractResponse;
                toAminoMsg(message: _134.MsgStoreAndInstantiateContractResponse): _134.MsgStoreAndInstantiateContractResponseAminoMsg;
                fromProtoMsg(message: _134.MsgStoreAndInstantiateContractResponseProtoMsg): _134.MsgStoreAndInstantiateContractResponse;
                toProto(message: _134.MsgStoreAndInstantiateContractResponse): Uint8Array;
                toProtoMsg(message: _134.MsgStoreAndInstantiateContractResponse): _134.MsgStoreAndInstantiateContractResponseProtoMsg;
            };
            MsgAddCodeUploadParamsAddresses: {
                typeUrl: string;
                encode(message: _134.MsgAddCodeUploadParamsAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.MsgAddCodeUploadParamsAddresses;
                fromPartial(object: Partial<_134.MsgAddCodeUploadParamsAddresses>): _134.MsgAddCodeUploadParamsAddresses;
                fromAmino(object: _134.MsgAddCodeUploadParamsAddressesAmino): _134.MsgAddCodeUploadParamsAddresses;
                toAmino(message: _134.MsgAddCodeUploadParamsAddresses): _134.MsgAddCodeUploadParamsAddressesAmino;
                fromAminoMsg(object: _134.MsgAddCodeUploadParamsAddressesAminoMsg): _134.MsgAddCodeUploadParamsAddresses;
                toAminoMsg(message: _134.MsgAddCodeUploadParamsAddresses): _134.MsgAddCodeUploadParamsAddressesAminoMsg;
                fromProtoMsg(message: _134.MsgAddCodeUploadParamsAddressesProtoMsg): _134.MsgAddCodeUploadParamsAddresses;
                toProto(message: _134.MsgAddCodeUploadParamsAddresses): Uint8Array;
                toProtoMsg(message: _134.MsgAddCodeUploadParamsAddresses): _134.MsgAddCodeUploadParamsAddressesProtoMsg;
            };
            MsgAddCodeUploadParamsAddressesResponse: {
                typeUrl: string;
                encode(_: _134.MsgAddCodeUploadParamsAddressesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.MsgAddCodeUploadParamsAddressesResponse;
                fromPartial(_: Partial<_134.MsgAddCodeUploadParamsAddressesResponse>): _134.MsgAddCodeUploadParamsAddressesResponse;
                fromAmino(_: _134.MsgAddCodeUploadParamsAddressesResponseAmino): _134.MsgAddCodeUploadParamsAddressesResponse;
                toAmino(_: _134.MsgAddCodeUploadParamsAddressesResponse): _134.MsgAddCodeUploadParamsAddressesResponseAmino;
                fromAminoMsg(object: _134.MsgAddCodeUploadParamsAddressesResponseAminoMsg): _134.MsgAddCodeUploadParamsAddressesResponse;
                toAminoMsg(message: _134.MsgAddCodeUploadParamsAddressesResponse): _134.MsgAddCodeUploadParamsAddressesResponseAminoMsg;
                fromProtoMsg(message: _134.MsgAddCodeUploadParamsAddressesResponseProtoMsg): _134.MsgAddCodeUploadParamsAddressesResponse;
                toProto(message: _134.MsgAddCodeUploadParamsAddressesResponse): Uint8Array;
                toProtoMsg(message: _134.MsgAddCodeUploadParamsAddressesResponse): _134.MsgAddCodeUploadParamsAddressesResponseProtoMsg;
            };
            MsgRemoveCodeUploadParamsAddresses: {
                typeUrl: string;
                encode(message: _134.MsgRemoveCodeUploadParamsAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.MsgRemoveCodeUploadParamsAddresses;
                fromPartial(object: Partial<_134.MsgRemoveCodeUploadParamsAddresses>): _134.MsgRemoveCodeUploadParamsAddresses;
                fromAmino(object: _134.MsgRemoveCodeUploadParamsAddressesAmino): _134.MsgRemoveCodeUploadParamsAddresses;
                toAmino(message: _134.MsgRemoveCodeUploadParamsAddresses): _134.MsgRemoveCodeUploadParamsAddressesAmino;
                fromAminoMsg(object: _134.MsgRemoveCodeUploadParamsAddressesAminoMsg): _134.MsgRemoveCodeUploadParamsAddresses;
                toAminoMsg(message: _134.MsgRemoveCodeUploadParamsAddresses): _134.MsgRemoveCodeUploadParamsAddressesAminoMsg;
                fromProtoMsg(message: _134.MsgRemoveCodeUploadParamsAddressesProtoMsg): _134.MsgRemoveCodeUploadParamsAddresses;
                toProto(message: _134.MsgRemoveCodeUploadParamsAddresses): Uint8Array;
                toProtoMsg(message: _134.MsgRemoveCodeUploadParamsAddresses): _134.MsgRemoveCodeUploadParamsAddressesProtoMsg;
            };
            MsgRemoveCodeUploadParamsAddressesResponse: {
                typeUrl: string;
                encode(_: _134.MsgRemoveCodeUploadParamsAddressesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.MsgRemoveCodeUploadParamsAddressesResponse;
                fromPartial(_: Partial<_134.MsgRemoveCodeUploadParamsAddressesResponse>): _134.MsgRemoveCodeUploadParamsAddressesResponse;
                fromAmino(_: _134.MsgRemoveCodeUploadParamsAddressesResponseAmino): _134.MsgRemoveCodeUploadParamsAddressesResponse;
                toAmino(_: _134.MsgRemoveCodeUploadParamsAddressesResponse): _134.MsgRemoveCodeUploadParamsAddressesResponseAmino;
                fromAminoMsg(object: _134.MsgRemoveCodeUploadParamsAddressesResponseAminoMsg): _134.MsgRemoveCodeUploadParamsAddressesResponse;
                toAminoMsg(message: _134.MsgRemoveCodeUploadParamsAddressesResponse): _134.MsgRemoveCodeUploadParamsAddressesResponseAminoMsg;
                fromProtoMsg(message: _134.MsgRemoveCodeUploadParamsAddressesResponseProtoMsg): _134.MsgRemoveCodeUploadParamsAddressesResponse;
                toProto(message: _134.MsgRemoveCodeUploadParamsAddressesResponse): Uint8Array;
                toProtoMsg(message: _134.MsgRemoveCodeUploadParamsAddressesResponse): _134.MsgRemoveCodeUploadParamsAddressesResponseProtoMsg;
            };
            MsgStoreAndMigrateContract: {
                typeUrl: string;
                encode(message: _134.MsgStoreAndMigrateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.MsgStoreAndMigrateContract;
                fromPartial(object: Partial<_134.MsgStoreAndMigrateContract>): _134.MsgStoreAndMigrateContract;
                fromAmino(object: _134.MsgStoreAndMigrateContractAmino): _134.MsgStoreAndMigrateContract;
                toAmino(message: _134.MsgStoreAndMigrateContract): _134.MsgStoreAndMigrateContractAmino;
                fromAminoMsg(object: _134.MsgStoreAndMigrateContractAminoMsg): _134.MsgStoreAndMigrateContract;
                toAminoMsg(message: _134.MsgStoreAndMigrateContract): _134.MsgStoreAndMigrateContractAminoMsg;
                fromProtoMsg(message: _134.MsgStoreAndMigrateContractProtoMsg): _134.MsgStoreAndMigrateContract;
                toProto(message: _134.MsgStoreAndMigrateContract): Uint8Array;
                toProtoMsg(message: _134.MsgStoreAndMigrateContract): _134.MsgStoreAndMigrateContractProtoMsg;
            };
            MsgStoreAndMigrateContractResponse: {
                typeUrl: string;
                encode(message: _134.MsgStoreAndMigrateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.MsgStoreAndMigrateContractResponse;
                fromPartial(object: Partial<_134.MsgStoreAndMigrateContractResponse>): _134.MsgStoreAndMigrateContractResponse;
                fromAmino(object: _134.MsgStoreAndMigrateContractResponseAmino): _134.MsgStoreAndMigrateContractResponse;
                toAmino(message: _134.MsgStoreAndMigrateContractResponse): _134.MsgStoreAndMigrateContractResponseAmino;
                fromAminoMsg(object: _134.MsgStoreAndMigrateContractResponseAminoMsg): _134.MsgStoreAndMigrateContractResponse;
                toAminoMsg(message: _134.MsgStoreAndMigrateContractResponse): _134.MsgStoreAndMigrateContractResponseAminoMsg;
                fromProtoMsg(message: _134.MsgStoreAndMigrateContractResponseProtoMsg): _134.MsgStoreAndMigrateContractResponse;
                toProto(message: _134.MsgStoreAndMigrateContractResponse): Uint8Array;
                toProtoMsg(message: _134.MsgStoreAndMigrateContractResponse): _134.MsgStoreAndMigrateContractResponseProtoMsg;
            };
            MsgUpdateContractLabel: {
                typeUrl: string;
                encode(message: _134.MsgUpdateContractLabel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.MsgUpdateContractLabel;
                fromPartial(object: Partial<_134.MsgUpdateContractLabel>): _134.MsgUpdateContractLabel;
                fromAmino(object: _134.MsgUpdateContractLabelAmino): _134.MsgUpdateContractLabel;
                toAmino(message: _134.MsgUpdateContractLabel): _134.MsgUpdateContractLabelAmino;
                fromAminoMsg(object: _134.MsgUpdateContractLabelAminoMsg): _134.MsgUpdateContractLabel;
                toAminoMsg(message: _134.MsgUpdateContractLabel): _134.MsgUpdateContractLabelAminoMsg;
                fromProtoMsg(message: _134.MsgUpdateContractLabelProtoMsg): _134.MsgUpdateContractLabel;
                toProto(message: _134.MsgUpdateContractLabel): Uint8Array;
                toProtoMsg(message: _134.MsgUpdateContractLabel): _134.MsgUpdateContractLabelProtoMsg;
            };
            MsgUpdateContractLabelResponse: {
                typeUrl: string;
                encode(_: _134.MsgUpdateContractLabelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.MsgUpdateContractLabelResponse;
                fromPartial(_: Partial<_134.MsgUpdateContractLabelResponse>): _134.MsgUpdateContractLabelResponse;
                fromAmino(_: _134.MsgUpdateContractLabelResponseAmino): _134.MsgUpdateContractLabelResponse;
                toAmino(_: _134.MsgUpdateContractLabelResponse): _134.MsgUpdateContractLabelResponseAmino;
                fromAminoMsg(object: _134.MsgUpdateContractLabelResponseAminoMsg): _134.MsgUpdateContractLabelResponse;
                toAminoMsg(message: _134.MsgUpdateContractLabelResponse): _134.MsgUpdateContractLabelResponseAminoMsg;
                fromProtoMsg(message: _134.MsgUpdateContractLabelResponseProtoMsg): _134.MsgUpdateContractLabelResponse;
                toProto(message: _134.MsgUpdateContractLabelResponse): Uint8Array;
                toProtoMsg(message: _134.MsgUpdateContractLabelResponse): _134.MsgUpdateContractLabelResponseProtoMsg;
            };
            QueryContractInfoRequest: {
                typeUrl: string;
                encode(message: _133.QueryContractInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.QueryContractInfoRequest;
                fromPartial(object: Partial<_133.QueryContractInfoRequest>): _133.QueryContractInfoRequest;
                fromAmino(object: _133.QueryContractInfoRequestAmino): _133.QueryContractInfoRequest;
                toAmino(message: _133.QueryContractInfoRequest): _133.QueryContractInfoRequestAmino;
                fromAminoMsg(object: _133.QueryContractInfoRequestAminoMsg): _133.QueryContractInfoRequest;
                toAminoMsg(message: _133.QueryContractInfoRequest): _133.QueryContractInfoRequestAminoMsg;
                fromProtoMsg(message: _133.QueryContractInfoRequestProtoMsg): _133.QueryContractInfoRequest;
                toProto(message: _133.QueryContractInfoRequest): Uint8Array;
                toProtoMsg(message: _133.QueryContractInfoRequest): _133.QueryContractInfoRequestProtoMsg;
            };
            QueryContractInfoResponse: {
                typeUrl: string;
                encode(message: _133.QueryContractInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.QueryContractInfoResponse;
                fromPartial(object: Partial<_133.QueryContractInfoResponse>): _133.QueryContractInfoResponse;
                fromAmino(object: _133.QueryContractInfoResponseAmino): _133.QueryContractInfoResponse;
                toAmino(message: _133.QueryContractInfoResponse): _133.QueryContractInfoResponseAmino;
                fromAminoMsg(object: _133.QueryContractInfoResponseAminoMsg): _133.QueryContractInfoResponse;
                toAminoMsg(message: _133.QueryContractInfoResponse): _133.QueryContractInfoResponseAminoMsg;
                fromProtoMsg(message: _133.QueryContractInfoResponseProtoMsg): _133.QueryContractInfoResponse;
                toProto(message: _133.QueryContractInfoResponse): Uint8Array;
                toProtoMsg(message: _133.QueryContractInfoResponse): _133.QueryContractInfoResponseProtoMsg;
            };
            QueryContractHistoryRequest: {
                typeUrl: string;
                encode(message: _133.QueryContractHistoryRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.QueryContractHistoryRequest;
                fromPartial(object: Partial<_133.QueryContractHistoryRequest>): _133.QueryContractHistoryRequest;
                fromAmino(object: _133.QueryContractHistoryRequestAmino): _133.QueryContractHistoryRequest;
                toAmino(message: _133.QueryContractHistoryRequest): _133.QueryContractHistoryRequestAmino;
                fromAminoMsg(object: _133.QueryContractHistoryRequestAminoMsg): _133.QueryContractHistoryRequest;
                toAminoMsg(message: _133.QueryContractHistoryRequest): _133.QueryContractHistoryRequestAminoMsg;
                fromProtoMsg(message: _133.QueryContractHistoryRequestProtoMsg): _133.QueryContractHistoryRequest;
                toProto(message: _133.QueryContractHistoryRequest): Uint8Array;
                toProtoMsg(message: _133.QueryContractHistoryRequest): _133.QueryContractHistoryRequestProtoMsg;
            };
            QueryContractHistoryResponse: {
                typeUrl: string;
                encode(message: _133.QueryContractHistoryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.QueryContractHistoryResponse;
                fromPartial(object: Partial<_133.QueryContractHistoryResponse>): _133.QueryContractHistoryResponse;
                fromAmino(object: _133.QueryContractHistoryResponseAmino): _133.QueryContractHistoryResponse;
                toAmino(message: _133.QueryContractHistoryResponse): _133.QueryContractHistoryResponseAmino;
                fromAminoMsg(object: _133.QueryContractHistoryResponseAminoMsg): _133.QueryContractHistoryResponse;
                toAminoMsg(message: _133.QueryContractHistoryResponse): _133.QueryContractHistoryResponseAminoMsg;
                fromProtoMsg(message: _133.QueryContractHistoryResponseProtoMsg): _133.QueryContractHistoryResponse;
                toProto(message: _133.QueryContractHistoryResponse): Uint8Array;
                toProtoMsg(message: _133.QueryContractHistoryResponse): _133.QueryContractHistoryResponseProtoMsg;
            };
            QueryContractsByCodeRequest: {
                typeUrl: string;
                encode(message: _133.QueryContractsByCodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.QueryContractsByCodeRequest;
                fromPartial(object: Partial<_133.QueryContractsByCodeRequest>): _133.QueryContractsByCodeRequest;
                fromAmino(object: _133.QueryContractsByCodeRequestAmino): _133.QueryContractsByCodeRequest;
                toAmino(message: _133.QueryContractsByCodeRequest): _133.QueryContractsByCodeRequestAmino;
                fromAminoMsg(object: _133.QueryContractsByCodeRequestAminoMsg): _133.QueryContractsByCodeRequest;
                toAminoMsg(message: _133.QueryContractsByCodeRequest): _133.QueryContractsByCodeRequestAminoMsg;
                fromProtoMsg(message: _133.QueryContractsByCodeRequestProtoMsg): _133.QueryContractsByCodeRequest;
                toProto(message: _133.QueryContractsByCodeRequest): Uint8Array;
                toProtoMsg(message: _133.QueryContractsByCodeRequest): _133.QueryContractsByCodeRequestProtoMsg;
            };
            QueryContractsByCodeResponse: {
                typeUrl: string;
                encode(message: _133.QueryContractsByCodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.QueryContractsByCodeResponse;
                fromPartial(object: Partial<_133.QueryContractsByCodeResponse>): _133.QueryContractsByCodeResponse;
                fromAmino(object: _133.QueryContractsByCodeResponseAmino): _133.QueryContractsByCodeResponse;
                toAmino(message: _133.QueryContractsByCodeResponse): _133.QueryContractsByCodeResponseAmino;
                fromAminoMsg(object: _133.QueryContractsByCodeResponseAminoMsg): _133.QueryContractsByCodeResponse;
                toAminoMsg(message: _133.QueryContractsByCodeResponse): _133.QueryContractsByCodeResponseAminoMsg;
                fromProtoMsg(message: _133.QueryContractsByCodeResponseProtoMsg): _133.QueryContractsByCodeResponse;
                toProto(message: _133.QueryContractsByCodeResponse): Uint8Array;
                toProtoMsg(message: _133.QueryContractsByCodeResponse): _133.QueryContractsByCodeResponseProtoMsg;
            };
            QueryAllContractStateRequest: {
                typeUrl: string;
                encode(message: _133.QueryAllContractStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.QueryAllContractStateRequest;
                fromPartial(object: Partial<_133.QueryAllContractStateRequest>): _133.QueryAllContractStateRequest;
                fromAmino(object: _133.QueryAllContractStateRequestAmino): _133.QueryAllContractStateRequest;
                toAmino(message: _133.QueryAllContractStateRequest): _133.QueryAllContractStateRequestAmino;
                fromAminoMsg(object: _133.QueryAllContractStateRequestAminoMsg): _133.QueryAllContractStateRequest;
                toAminoMsg(message: _133.QueryAllContractStateRequest): _133.QueryAllContractStateRequestAminoMsg;
                fromProtoMsg(message: _133.QueryAllContractStateRequestProtoMsg): _133.QueryAllContractStateRequest;
                toProto(message: _133.QueryAllContractStateRequest): Uint8Array;
                toProtoMsg(message: _133.QueryAllContractStateRequest): _133.QueryAllContractStateRequestProtoMsg;
            };
            QueryAllContractStateResponse: {
                typeUrl: string;
                encode(message: _133.QueryAllContractStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.QueryAllContractStateResponse;
                fromPartial(object: Partial<_133.QueryAllContractStateResponse>): _133.QueryAllContractStateResponse;
                fromAmino(object: _133.QueryAllContractStateResponseAmino): _133.QueryAllContractStateResponse;
                toAmino(message: _133.QueryAllContractStateResponse): _133.QueryAllContractStateResponseAmino;
                fromAminoMsg(object: _133.QueryAllContractStateResponseAminoMsg): _133.QueryAllContractStateResponse;
                toAminoMsg(message: _133.QueryAllContractStateResponse): _133.QueryAllContractStateResponseAminoMsg;
                fromProtoMsg(message: _133.QueryAllContractStateResponseProtoMsg): _133.QueryAllContractStateResponse;
                toProto(message: _133.QueryAllContractStateResponse): Uint8Array;
                toProtoMsg(message: _133.QueryAllContractStateResponse): _133.QueryAllContractStateResponseProtoMsg;
            };
            QueryRawContractStateRequest: {
                typeUrl: string;
                encode(message: _133.QueryRawContractStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.QueryRawContractStateRequest;
                fromPartial(object: Partial<_133.QueryRawContractStateRequest>): _133.QueryRawContractStateRequest;
                fromAmino(object: _133.QueryRawContractStateRequestAmino): _133.QueryRawContractStateRequest;
                toAmino(message: _133.QueryRawContractStateRequest): _133.QueryRawContractStateRequestAmino;
                fromAminoMsg(object: _133.QueryRawContractStateRequestAminoMsg): _133.QueryRawContractStateRequest;
                toAminoMsg(message: _133.QueryRawContractStateRequest): _133.QueryRawContractStateRequestAminoMsg;
                fromProtoMsg(message: _133.QueryRawContractStateRequestProtoMsg): _133.QueryRawContractStateRequest;
                toProto(message: _133.QueryRawContractStateRequest): Uint8Array;
                toProtoMsg(message: _133.QueryRawContractStateRequest): _133.QueryRawContractStateRequestProtoMsg;
            };
            QueryRawContractStateResponse: {
                typeUrl: string;
                encode(message: _133.QueryRawContractStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.QueryRawContractStateResponse;
                fromPartial(object: Partial<_133.QueryRawContractStateResponse>): _133.QueryRawContractStateResponse;
                fromAmino(object: _133.QueryRawContractStateResponseAmino): _133.QueryRawContractStateResponse;
                toAmino(message: _133.QueryRawContractStateResponse): _133.QueryRawContractStateResponseAmino;
                fromAminoMsg(object: _133.QueryRawContractStateResponseAminoMsg): _133.QueryRawContractStateResponse;
                toAminoMsg(message: _133.QueryRawContractStateResponse): _133.QueryRawContractStateResponseAminoMsg;
                fromProtoMsg(message: _133.QueryRawContractStateResponseProtoMsg): _133.QueryRawContractStateResponse;
                toProto(message: _133.QueryRawContractStateResponse): Uint8Array;
                toProtoMsg(message: _133.QueryRawContractStateResponse): _133.QueryRawContractStateResponseProtoMsg;
            };
            QuerySmartContractStateRequest: {
                typeUrl: string;
                encode(message: _133.QuerySmartContractStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.QuerySmartContractStateRequest;
                fromPartial(object: Partial<_133.QuerySmartContractStateRequest>): _133.QuerySmartContractStateRequest;
                fromAmino(object: _133.QuerySmartContractStateRequestAmino): _133.QuerySmartContractStateRequest;
                toAmino(message: _133.QuerySmartContractStateRequest): _133.QuerySmartContractStateRequestAmino;
                fromAminoMsg(object: _133.QuerySmartContractStateRequestAminoMsg): _133.QuerySmartContractStateRequest;
                toAminoMsg(message: _133.QuerySmartContractStateRequest): _133.QuerySmartContractStateRequestAminoMsg;
                fromProtoMsg(message: _133.QuerySmartContractStateRequestProtoMsg): _133.QuerySmartContractStateRequest;
                toProto(message: _133.QuerySmartContractStateRequest): Uint8Array;
                toProtoMsg(message: _133.QuerySmartContractStateRequest): _133.QuerySmartContractStateRequestProtoMsg;
            };
            QuerySmartContractStateResponse: {
                typeUrl: string;
                encode(message: _133.QuerySmartContractStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.QuerySmartContractStateResponse;
                fromPartial(object: Partial<_133.QuerySmartContractStateResponse>): _133.QuerySmartContractStateResponse;
                fromAmino(object: _133.QuerySmartContractStateResponseAmino): _133.QuerySmartContractStateResponse;
                toAmino(message: _133.QuerySmartContractStateResponse): _133.QuerySmartContractStateResponseAmino;
                fromAminoMsg(object: _133.QuerySmartContractStateResponseAminoMsg): _133.QuerySmartContractStateResponse;
                toAminoMsg(message: _133.QuerySmartContractStateResponse): _133.QuerySmartContractStateResponseAminoMsg;
                fromProtoMsg(message: _133.QuerySmartContractStateResponseProtoMsg): _133.QuerySmartContractStateResponse;
                toProto(message: _133.QuerySmartContractStateResponse): Uint8Array;
                toProtoMsg(message: _133.QuerySmartContractStateResponse): _133.QuerySmartContractStateResponseProtoMsg;
            };
            QueryCodeRequest: {
                typeUrl: string;
                encode(message: _133.QueryCodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.QueryCodeRequest;
                fromPartial(object: Partial<_133.QueryCodeRequest>): _133.QueryCodeRequest;
                fromAmino(object: _133.QueryCodeRequestAmino): _133.QueryCodeRequest;
                toAmino(message: _133.QueryCodeRequest): _133.QueryCodeRequestAmino;
                fromAminoMsg(object: _133.QueryCodeRequestAminoMsg): _133.QueryCodeRequest;
                toAminoMsg(message: _133.QueryCodeRequest): _133.QueryCodeRequestAminoMsg;
                fromProtoMsg(message: _133.QueryCodeRequestProtoMsg): _133.QueryCodeRequest;
                toProto(message: _133.QueryCodeRequest): Uint8Array;
                toProtoMsg(message: _133.QueryCodeRequest): _133.QueryCodeRequestProtoMsg;
            };
            CodeInfoResponse: {
                typeUrl: string;
                encode(message: _133.CodeInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.CodeInfoResponse;
                fromPartial(object: Partial<_133.CodeInfoResponse>): _133.CodeInfoResponse;
                fromAmino(object: _133.CodeInfoResponseAmino): _133.CodeInfoResponse;
                toAmino(message: _133.CodeInfoResponse): _133.CodeInfoResponseAmino;
                fromAminoMsg(object: _133.CodeInfoResponseAminoMsg): _133.CodeInfoResponse;
                toAminoMsg(message: _133.CodeInfoResponse): _133.CodeInfoResponseAminoMsg;
                fromProtoMsg(message: _133.CodeInfoResponseProtoMsg): _133.CodeInfoResponse;
                toProto(message: _133.CodeInfoResponse): Uint8Array;
                toProtoMsg(message: _133.CodeInfoResponse): _133.CodeInfoResponseProtoMsg;
            };
            QueryCodeResponse: {
                typeUrl: string;
                encode(message: _133.QueryCodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.QueryCodeResponse;
                fromPartial(object: Partial<_133.QueryCodeResponse>): _133.QueryCodeResponse;
                fromAmino(object: _133.QueryCodeResponseAmino): _133.QueryCodeResponse;
                toAmino(message: _133.QueryCodeResponse): _133.QueryCodeResponseAmino;
                fromAminoMsg(object: _133.QueryCodeResponseAminoMsg): _133.QueryCodeResponse;
                toAminoMsg(message: _133.QueryCodeResponse): _133.QueryCodeResponseAminoMsg;
                fromProtoMsg(message: _133.QueryCodeResponseProtoMsg): _133.QueryCodeResponse;
                toProto(message: _133.QueryCodeResponse): Uint8Array;
                toProtoMsg(message: _133.QueryCodeResponse): _133.QueryCodeResponseProtoMsg;
            };
            QueryCodesRequest: {
                typeUrl: string;
                encode(message: _133.QueryCodesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.QueryCodesRequest;
                fromPartial(object: Partial<_133.QueryCodesRequest>): _133.QueryCodesRequest;
                fromAmino(object: _133.QueryCodesRequestAmino): _133.QueryCodesRequest;
                toAmino(message: _133.QueryCodesRequest): _133.QueryCodesRequestAmino;
                fromAminoMsg(object: _133.QueryCodesRequestAminoMsg): _133.QueryCodesRequest;
                toAminoMsg(message: _133.QueryCodesRequest): _133.QueryCodesRequestAminoMsg;
                fromProtoMsg(message: _133.QueryCodesRequestProtoMsg): _133.QueryCodesRequest;
                toProto(message: _133.QueryCodesRequest): Uint8Array;
                toProtoMsg(message: _133.QueryCodesRequest): _133.QueryCodesRequestProtoMsg;
            };
            QueryCodesResponse: {
                typeUrl: string;
                encode(message: _133.QueryCodesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.QueryCodesResponse;
                fromPartial(object: Partial<_133.QueryCodesResponse>): _133.QueryCodesResponse;
                fromAmino(object: _133.QueryCodesResponseAmino): _133.QueryCodesResponse;
                toAmino(message: _133.QueryCodesResponse): _133.QueryCodesResponseAmino;
                fromAminoMsg(object: _133.QueryCodesResponseAminoMsg): _133.QueryCodesResponse;
                toAminoMsg(message: _133.QueryCodesResponse): _133.QueryCodesResponseAminoMsg;
                fromProtoMsg(message: _133.QueryCodesResponseProtoMsg): _133.QueryCodesResponse;
                toProto(message: _133.QueryCodesResponse): Uint8Array;
                toProtoMsg(message: _133.QueryCodesResponse): _133.QueryCodesResponseProtoMsg;
            };
            QueryPinnedCodesRequest: {
                typeUrl: string;
                encode(message: _133.QueryPinnedCodesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.QueryPinnedCodesRequest;
                fromPartial(object: Partial<_133.QueryPinnedCodesRequest>): _133.QueryPinnedCodesRequest;
                fromAmino(object: _133.QueryPinnedCodesRequestAmino): _133.QueryPinnedCodesRequest;
                toAmino(message: _133.QueryPinnedCodesRequest): _133.QueryPinnedCodesRequestAmino;
                fromAminoMsg(object: _133.QueryPinnedCodesRequestAminoMsg): _133.QueryPinnedCodesRequest;
                toAminoMsg(message: _133.QueryPinnedCodesRequest): _133.QueryPinnedCodesRequestAminoMsg;
                fromProtoMsg(message: _133.QueryPinnedCodesRequestProtoMsg): _133.QueryPinnedCodesRequest;
                toProto(message: _133.QueryPinnedCodesRequest): Uint8Array;
                toProtoMsg(message: _133.QueryPinnedCodesRequest): _133.QueryPinnedCodesRequestProtoMsg;
            };
            QueryPinnedCodesResponse: {
                typeUrl: string;
                encode(message: _133.QueryPinnedCodesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.QueryPinnedCodesResponse;
                fromPartial(object: Partial<_133.QueryPinnedCodesResponse>): _133.QueryPinnedCodesResponse;
                fromAmino(object: _133.QueryPinnedCodesResponseAmino): _133.QueryPinnedCodesResponse;
                toAmino(message: _133.QueryPinnedCodesResponse): _133.QueryPinnedCodesResponseAmino;
                fromAminoMsg(object: _133.QueryPinnedCodesResponseAminoMsg): _133.QueryPinnedCodesResponse;
                toAminoMsg(message: _133.QueryPinnedCodesResponse): _133.QueryPinnedCodesResponseAminoMsg;
                fromProtoMsg(message: _133.QueryPinnedCodesResponseProtoMsg): _133.QueryPinnedCodesResponse;
                toProto(message: _133.QueryPinnedCodesResponse): Uint8Array;
                toProtoMsg(message: _133.QueryPinnedCodesResponse): _133.QueryPinnedCodesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _133.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.QueryParamsRequest;
                fromPartial(_: Partial<_133.QueryParamsRequest>): _133.QueryParamsRequest;
                fromAmino(_: _133.QueryParamsRequestAmino): _133.QueryParamsRequest;
                toAmino(_: _133.QueryParamsRequest): _133.QueryParamsRequestAmino;
                fromAminoMsg(object: _133.QueryParamsRequestAminoMsg): _133.QueryParamsRequest;
                toAminoMsg(message: _133.QueryParamsRequest): _133.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _133.QueryParamsRequestProtoMsg): _133.QueryParamsRequest;
                toProto(message: _133.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _133.QueryParamsRequest): _133.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _133.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.QueryParamsResponse;
                fromPartial(object: Partial<_133.QueryParamsResponse>): _133.QueryParamsResponse;
                fromAmino(object: _133.QueryParamsResponseAmino): _133.QueryParamsResponse;
                toAmino(message: _133.QueryParamsResponse): _133.QueryParamsResponseAmino;
                fromAminoMsg(object: _133.QueryParamsResponseAminoMsg): _133.QueryParamsResponse;
                toAminoMsg(message: _133.QueryParamsResponse): _133.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _133.QueryParamsResponseProtoMsg): _133.QueryParamsResponse;
                toProto(message: _133.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _133.QueryParamsResponse): _133.QueryParamsResponseProtoMsg;
            };
            QueryContractsByCreatorRequest: {
                typeUrl: string;
                encode(message: _133.QueryContractsByCreatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.QueryContractsByCreatorRequest;
                fromPartial(object: Partial<_133.QueryContractsByCreatorRequest>): _133.QueryContractsByCreatorRequest;
                fromAmino(object: _133.QueryContractsByCreatorRequestAmino): _133.QueryContractsByCreatorRequest;
                toAmino(message: _133.QueryContractsByCreatorRequest): _133.QueryContractsByCreatorRequestAmino;
                fromAminoMsg(object: _133.QueryContractsByCreatorRequestAminoMsg): _133.QueryContractsByCreatorRequest;
                toAminoMsg(message: _133.QueryContractsByCreatorRequest): _133.QueryContractsByCreatorRequestAminoMsg;
                fromProtoMsg(message: _133.QueryContractsByCreatorRequestProtoMsg): _133.QueryContractsByCreatorRequest;
                toProto(message: _133.QueryContractsByCreatorRequest): Uint8Array;
                toProtoMsg(message: _133.QueryContractsByCreatorRequest): _133.QueryContractsByCreatorRequestProtoMsg;
            };
            QueryContractsByCreatorResponse: {
                typeUrl: string;
                encode(message: _133.QueryContractsByCreatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.QueryContractsByCreatorResponse;
                fromPartial(object: Partial<_133.QueryContractsByCreatorResponse>): _133.QueryContractsByCreatorResponse;
                fromAmino(object: _133.QueryContractsByCreatorResponseAmino): _133.QueryContractsByCreatorResponse;
                toAmino(message: _133.QueryContractsByCreatorResponse): _133.QueryContractsByCreatorResponseAmino;
                fromAminoMsg(object: _133.QueryContractsByCreatorResponseAminoMsg): _133.QueryContractsByCreatorResponse;
                toAminoMsg(message: _133.QueryContractsByCreatorResponse): _133.QueryContractsByCreatorResponseAminoMsg;
                fromProtoMsg(message: _133.QueryContractsByCreatorResponseProtoMsg): _133.QueryContractsByCreatorResponse;
                toProto(message: _133.QueryContractsByCreatorResponse): Uint8Array;
                toProtoMsg(message: _133.QueryContractsByCreatorResponse): _133.QueryContractsByCreatorResponseProtoMsg;
            };
            StoreCodeProposal: {
                typeUrl: string;
                encode(message: _132.StoreCodeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _132.StoreCodeProposal;
                fromPartial(object: Partial<_132.StoreCodeProposal>): _132.StoreCodeProposal;
                fromAmino(object: _132.StoreCodeProposalAmino): _132.StoreCodeProposal;
                toAmino(message: _132.StoreCodeProposal): _132.StoreCodeProposalAmino;
                fromAminoMsg(object: _132.StoreCodeProposalAminoMsg): _132.StoreCodeProposal;
                toAminoMsg(message: _132.StoreCodeProposal): _132.StoreCodeProposalAminoMsg;
                fromProtoMsg(message: _132.StoreCodeProposalProtoMsg): _132.StoreCodeProposal;
                toProto(message: _132.StoreCodeProposal): Uint8Array;
                toProtoMsg(message: _132.StoreCodeProposal): _132.StoreCodeProposalProtoMsg;
            };
            InstantiateContractProposal: {
                typeUrl: string;
                encode(message: _132.InstantiateContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _132.InstantiateContractProposal;
                fromPartial(object: Partial<_132.InstantiateContractProposal>): _132.InstantiateContractProposal;
                fromAmino(object: _132.InstantiateContractProposalAmino): _132.InstantiateContractProposal;
                toAmino(message: _132.InstantiateContractProposal): _132.InstantiateContractProposalAmino;
                fromAminoMsg(object: _132.InstantiateContractProposalAminoMsg): _132.InstantiateContractProposal;
                toAminoMsg(message: _132.InstantiateContractProposal): _132.InstantiateContractProposalAminoMsg;
                fromProtoMsg(message: _132.InstantiateContractProposalProtoMsg): _132.InstantiateContractProposal;
                toProto(message: _132.InstantiateContractProposal): Uint8Array;
                toProtoMsg(message: _132.InstantiateContractProposal): _132.InstantiateContractProposalProtoMsg;
            };
            InstantiateContract2Proposal: {
                typeUrl: string;
                encode(message: _132.InstantiateContract2Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _132.InstantiateContract2Proposal;
                fromPartial(object: Partial<_132.InstantiateContract2Proposal>): _132.InstantiateContract2Proposal;
                fromAmino(object: _132.InstantiateContract2ProposalAmino): _132.InstantiateContract2Proposal;
                toAmino(message: _132.InstantiateContract2Proposal): _132.InstantiateContract2ProposalAmino;
                fromAminoMsg(object: _132.InstantiateContract2ProposalAminoMsg): _132.InstantiateContract2Proposal;
                toAminoMsg(message: _132.InstantiateContract2Proposal): _132.InstantiateContract2ProposalAminoMsg;
                fromProtoMsg(message: _132.InstantiateContract2ProposalProtoMsg): _132.InstantiateContract2Proposal;
                toProto(message: _132.InstantiateContract2Proposal): Uint8Array;
                toProtoMsg(message: _132.InstantiateContract2Proposal): _132.InstantiateContract2ProposalProtoMsg;
            };
            MigrateContractProposal: {
                typeUrl: string;
                encode(message: _132.MigrateContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _132.MigrateContractProposal;
                fromPartial(object: Partial<_132.MigrateContractProposal>): _132.MigrateContractProposal;
                fromAmino(object: _132.MigrateContractProposalAmino): _132.MigrateContractProposal;
                toAmino(message: _132.MigrateContractProposal): _132.MigrateContractProposalAmino;
                fromAminoMsg(object: _132.MigrateContractProposalAminoMsg): _132.MigrateContractProposal;
                toAminoMsg(message: _132.MigrateContractProposal): _132.MigrateContractProposalAminoMsg;
                fromProtoMsg(message: _132.MigrateContractProposalProtoMsg): _132.MigrateContractProposal;
                toProto(message: _132.MigrateContractProposal): Uint8Array;
                toProtoMsg(message: _132.MigrateContractProposal): _132.MigrateContractProposalProtoMsg;
            };
            SudoContractProposal: {
                typeUrl: string;
                encode(message: _132.SudoContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _132.SudoContractProposal;
                fromPartial(object: Partial<_132.SudoContractProposal>): _132.SudoContractProposal;
                fromAmino(object: _132.SudoContractProposalAmino): _132.SudoContractProposal;
                toAmino(message: _132.SudoContractProposal): _132.SudoContractProposalAmino;
                fromAminoMsg(object: _132.SudoContractProposalAminoMsg): _132.SudoContractProposal;
                toAminoMsg(message: _132.SudoContractProposal): _132.SudoContractProposalAminoMsg;
                fromProtoMsg(message: _132.SudoContractProposalProtoMsg): _132.SudoContractProposal;
                toProto(message: _132.SudoContractProposal): Uint8Array;
                toProtoMsg(message: _132.SudoContractProposal): _132.SudoContractProposalProtoMsg;
            };
            ExecuteContractProposal: {
                typeUrl: string;
                encode(message: _132.ExecuteContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _132.ExecuteContractProposal;
                fromPartial(object: Partial<_132.ExecuteContractProposal>): _132.ExecuteContractProposal;
                fromAmino(object: _132.ExecuteContractProposalAmino): _132.ExecuteContractProposal;
                toAmino(message: _132.ExecuteContractProposal): _132.ExecuteContractProposalAmino;
                fromAminoMsg(object: _132.ExecuteContractProposalAminoMsg): _132.ExecuteContractProposal;
                toAminoMsg(message: _132.ExecuteContractProposal): _132.ExecuteContractProposalAminoMsg;
                fromProtoMsg(message: _132.ExecuteContractProposalProtoMsg): _132.ExecuteContractProposal;
                toProto(message: _132.ExecuteContractProposal): Uint8Array;
                toProtoMsg(message: _132.ExecuteContractProposal): _132.ExecuteContractProposalProtoMsg;
            };
            UpdateAdminProposal: {
                typeUrl: string;
                encode(message: _132.UpdateAdminProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _132.UpdateAdminProposal;
                fromPartial(object: Partial<_132.UpdateAdminProposal>): _132.UpdateAdminProposal;
                fromAmino(object: _132.UpdateAdminProposalAmino): _132.UpdateAdminProposal;
                toAmino(message: _132.UpdateAdminProposal): _132.UpdateAdminProposalAmino;
                fromAminoMsg(object: _132.UpdateAdminProposalAminoMsg): _132.UpdateAdminProposal;
                toAminoMsg(message: _132.UpdateAdminProposal): _132.UpdateAdminProposalAminoMsg;
                fromProtoMsg(message: _132.UpdateAdminProposalProtoMsg): _132.UpdateAdminProposal;
                toProto(message: _132.UpdateAdminProposal): Uint8Array;
                toProtoMsg(message: _132.UpdateAdminProposal): _132.UpdateAdminProposalProtoMsg;
            };
            ClearAdminProposal: {
                typeUrl: string;
                encode(message: _132.ClearAdminProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _132.ClearAdminProposal;
                fromPartial(object: Partial<_132.ClearAdminProposal>): _132.ClearAdminProposal;
                fromAmino(object: _132.ClearAdminProposalAmino): _132.ClearAdminProposal;
                toAmino(message: _132.ClearAdminProposal): _132.ClearAdminProposalAmino;
                fromAminoMsg(object: _132.ClearAdminProposalAminoMsg): _132.ClearAdminProposal;
                toAminoMsg(message: _132.ClearAdminProposal): _132.ClearAdminProposalAminoMsg;
                fromProtoMsg(message: _132.ClearAdminProposalProtoMsg): _132.ClearAdminProposal;
                toProto(message: _132.ClearAdminProposal): Uint8Array;
                toProtoMsg(message: _132.ClearAdminProposal): _132.ClearAdminProposalProtoMsg;
            };
            PinCodesProposal: {
                typeUrl: string;
                encode(message: _132.PinCodesProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _132.PinCodesProposal;
                fromPartial(object: Partial<_132.PinCodesProposal>): _132.PinCodesProposal;
                fromAmino(object: _132.PinCodesProposalAmino): _132.PinCodesProposal;
                toAmino(message: _132.PinCodesProposal): _132.PinCodesProposalAmino;
                fromAminoMsg(object: _132.PinCodesProposalAminoMsg): _132.PinCodesProposal;
                toAminoMsg(message: _132.PinCodesProposal): _132.PinCodesProposalAminoMsg;
                fromProtoMsg(message: _132.PinCodesProposalProtoMsg): _132.PinCodesProposal;
                toProto(message: _132.PinCodesProposal): Uint8Array;
                toProtoMsg(message: _132.PinCodesProposal): _132.PinCodesProposalProtoMsg;
            };
            UnpinCodesProposal: {
                typeUrl: string;
                encode(message: _132.UnpinCodesProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _132.UnpinCodesProposal;
                fromPartial(object: Partial<_132.UnpinCodesProposal>): _132.UnpinCodesProposal;
                fromAmino(object: _132.UnpinCodesProposalAmino): _132.UnpinCodesProposal;
                toAmino(message: _132.UnpinCodesProposal): _132.UnpinCodesProposalAmino;
                fromAminoMsg(object: _132.UnpinCodesProposalAminoMsg): _132.UnpinCodesProposal;
                toAminoMsg(message: _132.UnpinCodesProposal): _132.UnpinCodesProposalAminoMsg;
                fromProtoMsg(message: _132.UnpinCodesProposalProtoMsg): _132.UnpinCodesProposal;
                toProto(message: _132.UnpinCodesProposal): Uint8Array;
                toProtoMsg(message: _132.UnpinCodesProposal): _132.UnpinCodesProposalProtoMsg;
            };
            AccessConfigUpdate: {
                typeUrl: string;
                encode(message: _132.AccessConfigUpdate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _132.AccessConfigUpdate;
                fromPartial(object: Partial<_132.AccessConfigUpdate>): _132.AccessConfigUpdate;
                fromAmino(object: _132.AccessConfigUpdateAmino): _132.AccessConfigUpdate;
                toAmino(message: _132.AccessConfigUpdate): _132.AccessConfigUpdateAmino;
                fromAminoMsg(object: _132.AccessConfigUpdateAminoMsg): _132.AccessConfigUpdate;
                toAminoMsg(message: _132.AccessConfigUpdate): _132.AccessConfigUpdateAminoMsg;
                fromProtoMsg(message: _132.AccessConfigUpdateProtoMsg): _132.AccessConfigUpdate;
                toProto(message: _132.AccessConfigUpdate): Uint8Array;
                toProtoMsg(message: _132.AccessConfigUpdate): _132.AccessConfigUpdateProtoMsg;
            };
            UpdateInstantiateConfigProposal: {
                typeUrl: string;
                encode(message: _132.UpdateInstantiateConfigProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _132.UpdateInstantiateConfigProposal;
                fromPartial(object: Partial<_132.UpdateInstantiateConfigProposal>): _132.UpdateInstantiateConfigProposal;
                fromAmino(object: _132.UpdateInstantiateConfigProposalAmino): _132.UpdateInstantiateConfigProposal;
                toAmino(message: _132.UpdateInstantiateConfigProposal): _132.UpdateInstantiateConfigProposalAmino;
                fromAminoMsg(object: _132.UpdateInstantiateConfigProposalAminoMsg): _132.UpdateInstantiateConfigProposal;
                toAminoMsg(message: _132.UpdateInstantiateConfigProposal): _132.UpdateInstantiateConfigProposalAminoMsg;
                fromProtoMsg(message: _132.UpdateInstantiateConfigProposalProtoMsg): _132.UpdateInstantiateConfigProposal;
                toProto(message: _132.UpdateInstantiateConfigProposal): Uint8Array;
                toProtoMsg(message: _132.UpdateInstantiateConfigProposal): _132.UpdateInstantiateConfigProposalProtoMsg;
            };
            StoreAndInstantiateContractProposal: {
                typeUrl: string;
                encode(message: _132.StoreAndInstantiateContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _132.StoreAndInstantiateContractProposal;
                fromPartial(object: Partial<_132.StoreAndInstantiateContractProposal>): _132.StoreAndInstantiateContractProposal;
                fromAmino(object: _132.StoreAndInstantiateContractProposalAmino): _132.StoreAndInstantiateContractProposal;
                toAmino(message: _132.StoreAndInstantiateContractProposal): _132.StoreAndInstantiateContractProposalAmino;
                fromAminoMsg(object: _132.StoreAndInstantiateContractProposalAminoMsg): _132.StoreAndInstantiateContractProposal;
                toAminoMsg(message: _132.StoreAndInstantiateContractProposal): _132.StoreAndInstantiateContractProposalAminoMsg;
                fromProtoMsg(message: _132.StoreAndInstantiateContractProposalProtoMsg): _132.StoreAndInstantiateContractProposal;
                toProto(message: _132.StoreAndInstantiateContractProposal): Uint8Array;
                toProtoMsg(message: _132.StoreAndInstantiateContractProposal): _132.StoreAndInstantiateContractProposalProtoMsg;
            };
            MsgIBCSend: {
                typeUrl: string;
                encode(message: _131.MsgIBCSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _131.MsgIBCSend;
                fromPartial(object: Partial<_131.MsgIBCSend>): _131.MsgIBCSend;
                fromAmino(object: _131.MsgIBCSendAmino): _131.MsgIBCSend;
                toAmino(message: _131.MsgIBCSend): _131.MsgIBCSendAmino;
                fromAminoMsg(object: _131.MsgIBCSendAminoMsg): _131.MsgIBCSend;
                toAminoMsg(message: _131.MsgIBCSend): _131.MsgIBCSendAminoMsg;
                fromProtoMsg(message: _131.MsgIBCSendProtoMsg): _131.MsgIBCSend;
                toProto(message: _131.MsgIBCSend): Uint8Array;
                toProtoMsg(message: _131.MsgIBCSend): _131.MsgIBCSendProtoMsg;
            };
            MsgIBCSendResponse: {
                typeUrl: string;
                encode(message: _131.MsgIBCSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _131.MsgIBCSendResponse;
                fromPartial(object: Partial<_131.MsgIBCSendResponse>): _131.MsgIBCSendResponse;
                fromAmino(object: _131.MsgIBCSendResponseAmino): _131.MsgIBCSendResponse;
                toAmino(message: _131.MsgIBCSendResponse): _131.MsgIBCSendResponseAmino;
                fromAminoMsg(object: _131.MsgIBCSendResponseAminoMsg): _131.MsgIBCSendResponse;
                toAminoMsg(message: _131.MsgIBCSendResponse): _131.MsgIBCSendResponseAminoMsg;
                fromProtoMsg(message: _131.MsgIBCSendResponseProtoMsg): _131.MsgIBCSendResponse;
                toProto(message: _131.MsgIBCSendResponse): Uint8Array;
                toProtoMsg(message: _131.MsgIBCSendResponse): _131.MsgIBCSendResponseProtoMsg;
            };
            MsgIBCCloseChannel: {
                typeUrl: string;
                encode(message: _131.MsgIBCCloseChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _131.MsgIBCCloseChannel;
                fromPartial(object: Partial<_131.MsgIBCCloseChannel>): _131.MsgIBCCloseChannel;
                fromAmino(object: _131.MsgIBCCloseChannelAmino): _131.MsgIBCCloseChannel;
                toAmino(message: _131.MsgIBCCloseChannel): _131.MsgIBCCloseChannelAmino;
                fromAminoMsg(object: _131.MsgIBCCloseChannelAminoMsg): _131.MsgIBCCloseChannel;
                toAminoMsg(message: _131.MsgIBCCloseChannel): _131.MsgIBCCloseChannelAminoMsg;
                fromProtoMsg(message: _131.MsgIBCCloseChannelProtoMsg): _131.MsgIBCCloseChannel;
                toProto(message: _131.MsgIBCCloseChannel): Uint8Array;
                toProtoMsg(message: _131.MsgIBCCloseChannel): _131.MsgIBCCloseChannelProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _130.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _130.GenesisState;
                fromPartial(object: Partial<_130.GenesisState>): _130.GenesisState;
                fromAmino(object: _130.GenesisStateAmino): _130.GenesisState;
                toAmino(message: _130.GenesisState): _130.GenesisStateAmino;
                fromAminoMsg(object: _130.GenesisStateAminoMsg): _130.GenesisState;
                toAminoMsg(message: _130.GenesisState): _130.GenesisStateAminoMsg;
                fromProtoMsg(message: _130.GenesisStateProtoMsg): _130.GenesisState;
                toProto(message: _130.GenesisState): Uint8Array;
                toProtoMsg(message: _130.GenesisState): _130.GenesisStateProtoMsg;
            };
            Code: {
                typeUrl: string;
                encode(message: _130.Code, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _130.Code;
                fromPartial(object: Partial<_130.Code>): _130.Code;
                fromAmino(object: _130.CodeAmino): _130.Code;
                toAmino(message: _130.Code): _130.CodeAmino;
                fromAminoMsg(object: _130.CodeAminoMsg): _130.Code;
                toAminoMsg(message: _130.Code): _130.CodeAminoMsg;
                fromProtoMsg(message: _130.CodeProtoMsg): _130.Code;
                toProto(message: _130.Code): Uint8Array;
                toProtoMsg(message: _130.Code): _130.CodeProtoMsg;
            };
            Contract: {
                typeUrl: string;
                encode(message: _130.Contract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _130.Contract;
                fromPartial(object: Partial<_130.Contract>): _130.Contract;
                fromAmino(object: _130.ContractAmino): _130.Contract;
                toAmino(message: _130.Contract): _130.ContractAmino;
                fromAminoMsg(object: _130.ContractAminoMsg): _130.Contract;
                toAminoMsg(message: _130.Contract): _130.ContractAminoMsg;
                fromProtoMsg(message: _130.ContractProtoMsg): _130.Contract;
                toProto(message: _130.Contract): Uint8Array;
                toProtoMsg(message: _130.Contract): _130.ContractProtoMsg;
            };
            Sequence: {
                typeUrl: string;
                encode(message: _130.Sequence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _130.Sequence;
                fromPartial(object: Partial<_130.Sequence>): _130.Sequence;
                fromAmino(object: _130.SequenceAmino): _130.Sequence;
                toAmino(message: _130.Sequence): _130.SequenceAmino;
                fromAminoMsg(object: _130.SequenceAminoMsg): _130.Sequence;
                toAminoMsg(message: _130.Sequence): _130.SequenceAminoMsg;
                fromProtoMsg(message: _130.SequenceProtoMsg): _130.Sequence;
                toProto(message: _130.Sequence): Uint8Array;
                toProtoMsg(message: _130.Sequence): _130.SequenceProtoMsg;
            };
            StoreCodeAuthorization: {
                typeUrl: string;
                encode(message: _129.StoreCodeAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.StoreCodeAuthorization;
                fromPartial(object: Partial<_129.StoreCodeAuthorization>): _129.StoreCodeAuthorization;
                fromAmino(object: _129.StoreCodeAuthorizationAmino): _129.StoreCodeAuthorization;
                toAmino(message: _129.StoreCodeAuthorization): _129.StoreCodeAuthorizationAmino;
                fromAminoMsg(object: _129.StoreCodeAuthorizationAminoMsg): _129.StoreCodeAuthorization;
                toAminoMsg(message: _129.StoreCodeAuthorization): _129.StoreCodeAuthorizationAminoMsg;
                fromProtoMsg(message: _129.StoreCodeAuthorizationProtoMsg): _129.StoreCodeAuthorization;
                toProto(message: _129.StoreCodeAuthorization): Uint8Array;
                toProtoMsg(message: _129.StoreCodeAuthorization): _129.StoreCodeAuthorizationProtoMsg;
            };
            ContractExecutionAuthorization: {
                typeUrl: string;
                encode(message: _129.ContractExecutionAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.ContractExecutionAuthorization;
                fromPartial(object: Partial<_129.ContractExecutionAuthorization>): _129.ContractExecutionAuthorization;
                fromAmino(object: _129.ContractExecutionAuthorizationAmino): _129.ContractExecutionAuthorization;
                toAmino(message: _129.ContractExecutionAuthorization): _129.ContractExecutionAuthorizationAmino;
                fromAminoMsg(object: _129.ContractExecutionAuthorizationAminoMsg): _129.ContractExecutionAuthorization;
                toAminoMsg(message: _129.ContractExecutionAuthorization): _129.ContractExecutionAuthorizationAminoMsg;
                fromProtoMsg(message: _129.ContractExecutionAuthorizationProtoMsg): _129.ContractExecutionAuthorization;
                toProto(message: _129.ContractExecutionAuthorization): Uint8Array;
                toProtoMsg(message: _129.ContractExecutionAuthorization): _129.ContractExecutionAuthorizationProtoMsg;
            };
            ContractMigrationAuthorization: {
                typeUrl: string;
                encode(message: _129.ContractMigrationAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.ContractMigrationAuthorization;
                fromPartial(object: Partial<_129.ContractMigrationAuthorization>): _129.ContractMigrationAuthorization;
                fromAmino(object: _129.ContractMigrationAuthorizationAmino): _129.ContractMigrationAuthorization;
                toAmino(message: _129.ContractMigrationAuthorization): _129.ContractMigrationAuthorizationAmino;
                fromAminoMsg(object: _129.ContractMigrationAuthorizationAminoMsg): _129.ContractMigrationAuthorization;
                toAminoMsg(message: _129.ContractMigrationAuthorization): _129.ContractMigrationAuthorizationAminoMsg;
                fromProtoMsg(message: _129.ContractMigrationAuthorizationProtoMsg): _129.ContractMigrationAuthorization;
                toProto(message: _129.ContractMigrationAuthorization): Uint8Array;
                toProtoMsg(message: _129.ContractMigrationAuthorization): _129.ContractMigrationAuthorizationProtoMsg;
            };
            CodeGrant: {
                typeUrl: string;
                encode(message: _129.CodeGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.CodeGrant;
                fromPartial(object: Partial<_129.CodeGrant>): _129.CodeGrant;
                fromAmino(object: _129.CodeGrantAmino): _129.CodeGrant;
                toAmino(message: _129.CodeGrant): _129.CodeGrantAmino;
                fromAminoMsg(object: _129.CodeGrantAminoMsg): _129.CodeGrant;
                toAminoMsg(message: _129.CodeGrant): _129.CodeGrantAminoMsg;
                fromProtoMsg(message: _129.CodeGrantProtoMsg): _129.CodeGrant;
                toProto(message: _129.CodeGrant): Uint8Array;
                toProtoMsg(message: _129.CodeGrant): _129.CodeGrantProtoMsg;
            };
            ContractGrant: {
                typeUrl: string;
                encode(message: _129.ContractGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.ContractGrant;
                fromPartial(object: Partial<_129.ContractGrant>): _129.ContractGrant;
                fromAmino(object: _129.ContractGrantAmino): _129.ContractGrant;
                toAmino(message: _129.ContractGrant): _129.ContractGrantAmino;
                fromAminoMsg(object: _129.ContractGrantAminoMsg): _129.ContractGrant;
                toAminoMsg(message: _129.ContractGrant): _129.ContractGrantAminoMsg;
                fromProtoMsg(message: _129.ContractGrantProtoMsg): _129.ContractGrant;
                toProto(message: _129.ContractGrant): Uint8Array;
                toProtoMsg(message: _129.ContractGrant): _129.ContractGrantProtoMsg;
            };
            MaxCallsLimit: {
                typeUrl: string;
                encode(message: _129.MaxCallsLimit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.MaxCallsLimit;
                fromPartial(object: Partial<_129.MaxCallsLimit>): _129.MaxCallsLimit;
                fromAmino(object: _129.MaxCallsLimitAmino): _129.MaxCallsLimit;
                toAmino(message: _129.MaxCallsLimit): _129.MaxCallsLimitAmino;
                fromAminoMsg(object: _129.MaxCallsLimitAminoMsg): _129.MaxCallsLimit;
                toAminoMsg(message: _129.MaxCallsLimit): _129.MaxCallsLimitAminoMsg;
                fromProtoMsg(message: _129.MaxCallsLimitProtoMsg): _129.MaxCallsLimit;
                toProto(message: _129.MaxCallsLimit): Uint8Array;
                toProtoMsg(message: _129.MaxCallsLimit): _129.MaxCallsLimitProtoMsg;
            };
            MaxFundsLimit: {
                typeUrl: string;
                encode(message: _129.MaxFundsLimit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.MaxFundsLimit;
                fromPartial(object: Partial<_129.MaxFundsLimit>): _129.MaxFundsLimit;
                fromAmino(object: _129.MaxFundsLimitAmino): _129.MaxFundsLimit;
                toAmino(message: _129.MaxFundsLimit): _129.MaxFundsLimitAmino;
                fromAminoMsg(object: _129.MaxFundsLimitAminoMsg): _129.MaxFundsLimit;
                toAminoMsg(message: _129.MaxFundsLimit): _129.MaxFundsLimitAminoMsg;
                fromProtoMsg(message: _129.MaxFundsLimitProtoMsg): _129.MaxFundsLimit;
                toProto(message: _129.MaxFundsLimit): Uint8Array;
                toProtoMsg(message: _129.MaxFundsLimit): _129.MaxFundsLimitProtoMsg;
            };
            CombinedLimit: {
                typeUrl: string;
                encode(message: _129.CombinedLimit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.CombinedLimit;
                fromPartial(object: Partial<_129.CombinedLimit>): _129.CombinedLimit;
                fromAmino(object: _129.CombinedLimitAmino): _129.CombinedLimit;
                toAmino(message: _129.CombinedLimit): _129.CombinedLimitAmino;
                fromAminoMsg(object: _129.CombinedLimitAminoMsg): _129.CombinedLimit;
                toAminoMsg(message: _129.CombinedLimit): _129.CombinedLimitAminoMsg;
                fromProtoMsg(message: _129.CombinedLimitProtoMsg): _129.CombinedLimit;
                toProto(message: _129.CombinedLimit): Uint8Array;
                toProtoMsg(message: _129.CombinedLimit): _129.CombinedLimitProtoMsg;
            };
            AllowAllMessagesFilter: {
                typeUrl: string;
                encode(_: _129.AllowAllMessagesFilter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.AllowAllMessagesFilter;
                fromPartial(_: Partial<_129.AllowAllMessagesFilter>): _129.AllowAllMessagesFilter;
                fromAmino(_: _129.AllowAllMessagesFilterAmino): _129.AllowAllMessagesFilter;
                toAmino(_: _129.AllowAllMessagesFilter): _129.AllowAllMessagesFilterAmino;
                fromAminoMsg(object: _129.AllowAllMessagesFilterAminoMsg): _129.AllowAllMessagesFilter;
                toAminoMsg(message: _129.AllowAllMessagesFilter): _129.AllowAllMessagesFilterAminoMsg;
                fromProtoMsg(message: _129.AllowAllMessagesFilterProtoMsg): _129.AllowAllMessagesFilter;
                toProto(message: _129.AllowAllMessagesFilter): Uint8Array;
                toProtoMsg(message: _129.AllowAllMessagesFilter): _129.AllowAllMessagesFilterProtoMsg;
            };
            AcceptedMessageKeysFilter: {
                typeUrl: string;
                encode(message: _129.AcceptedMessageKeysFilter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.AcceptedMessageKeysFilter;
                fromPartial(object: Partial<_129.AcceptedMessageKeysFilter>): _129.AcceptedMessageKeysFilter;
                fromAmino(object: _129.AcceptedMessageKeysFilterAmino): _129.AcceptedMessageKeysFilter;
                toAmino(message: _129.AcceptedMessageKeysFilter): _129.AcceptedMessageKeysFilterAmino;
                fromAminoMsg(object: _129.AcceptedMessageKeysFilterAminoMsg): _129.AcceptedMessageKeysFilter;
                toAminoMsg(message: _129.AcceptedMessageKeysFilter): _129.AcceptedMessageKeysFilterAminoMsg;
                fromProtoMsg(message: _129.AcceptedMessageKeysFilterProtoMsg): _129.AcceptedMessageKeysFilter;
                toProto(message: _129.AcceptedMessageKeysFilter): Uint8Array;
                toProtoMsg(message: _129.AcceptedMessageKeysFilter): _129.AcceptedMessageKeysFilterProtoMsg;
            };
            AcceptedMessagesFilter: {
                typeUrl: string;
                encode(message: _129.AcceptedMessagesFilter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.AcceptedMessagesFilter;
                fromPartial(object: Partial<_129.AcceptedMessagesFilter>): _129.AcceptedMessagesFilter;
                fromAmino(object: _129.AcceptedMessagesFilterAmino): _129.AcceptedMessagesFilter;
                toAmino(message: _129.AcceptedMessagesFilter): _129.AcceptedMessagesFilterAmino;
                fromAminoMsg(object: _129.AcceptedMessagesFilterAminoMsg): _129.AcceptedMessagesFilter;
                toAminoMsg(message: _129.AcceptedMessagesFilter): _129.AcceptedMessagesFilterAminoMsg;
                fromProtoMsg(message: _129.AcceptedMessagesFilterProtoMsg): _129.AcceptedMessagesFilter;
                toProto(message: _129.AcceptedMessagesFilter): Uint8Array;
                toProtoMsg(message: _129.AcceptedMessagesFilter): _129.AcceptedMessagesFilterProtoMsg;
            };
            Cosmwasm_wasmv1ContractAuthzLimitX_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _129.MaxCallsLimit | _129.MaxFundsLimit | _129.CombinedLimit;
            Cosmwasm_wasmv1ContractAuthzLimitX_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmwasm_wasmv1ContractAuthzLimitX_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Cosmwasm_wasmv1ContractAuthzFilterX_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _129.AllowAllMessagesFilter | _129.AcceptedMessageKeysFilter | _129.AcceptedMessagesFilter;
            Cosmwasm_wasmv1ContractAuthzFilterX_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmwasm_wasmv1ContractAuthzFilterX_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
        };
    }
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
            cosmwasm: {
                wasm: {
                    v1: _340.MsgClientImpl;
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
            cosmwasm: {
                wasm: {
                    v1: {
                        contractInfo(request: _133.QueryContractInfoRequest): Promise<_133.QueryContractInfoResponse>;
                        contractHistory(request: _133.QueryContractHistoryRequest): Promise<_133.QueryContractHistoryResponse>;
                        contractsByCode(request: _133.QueryContractsByCodeRequest): Promise<_133.QueryContractsByCodeResponse>;
                        allContractState(request: _133.QueryAllContractStateRequest): Promise<_133.QueryAllContractStateResponse>;
                        rawContractState(request: _133.QueryRawContractStateRequest): Promise<_133.QueryRawContractStateResponse>;
                        smartContractState(request: _133.QuerySmartContractStateRequest): Promise<_133.QuerySmartContractStateResponse>;
                        code(request: _133.QueryCodeRequest): Promise<_133.QueryCodeResponse>;
                        codes(request?: _133.QueryCodesRequest): Promise<_133.QueryCodesResponse>;
                        pinnedCodes(request?: _133.QueryPinnedCodesRequest): Promise<_133.QueryPinnedCodesResponse>;
                        params(request?: _133.QueryParamsRequest): Promise<_133.QueryParamsResponse>;
                        contractsByCreator(request: _133.QueryContractsByCreatorRequest): Promise<_133.QueryContractsByCreatorResponse>;
                    };
                };
            };
        }>;
    };
}
