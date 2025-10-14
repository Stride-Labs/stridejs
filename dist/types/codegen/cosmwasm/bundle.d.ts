import * as _133 from "./wasm/v1/authz";
import * as _134 from "./wasm/v1/genesis";
import * as _135 from "./wasm/v1/ibc";
import * as _136 from "./wasm/v1/proposal_legacy";
import * as _137 from "./wasm/v1/query";
import * as _138 from "./wasm/v1/tx";
import * as _139 from "./wasm/v1/types";
import * as _359 from "./wasm/v1/query.rpc.Query";
import * as _360 from "./wasm/v1/tx.rpc.msg";
export declare namespace cosmwasm {
    namespace wasm {
        const v1: {
            MsgClientImpl: typeof _360.MsgClientImpl;
            QueryClientImpl: typeof _359.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                contractInfo(request: _137.QueryContractInfoRequest): Promise<_137.QueryContractInfoResponse>;
                contractHistory(request: _137.QueryContractHistoryRequest): Promise<_137.QueryContractHistoryResponse>;
                contractsByCode(request: _137.QueryContractsByCodeRequest): Promise<_137.QueryContractsByCodeResponse>;
                allContractState(request: _137.QueryAllContractStateRequest): Promise<_137.QueryAllContractStateResponse>;
                rawContractState(request: _137.QueryRawContractStateRequest): Promise<_137.QueryRawContractStateResponse>;
                smartContractState(request: _137.QuerySmartContractStateRequest): Promise<_137.QuerySmartContractStateResponse>;
                code(request: _137.QueryCodeRequest): Promise<_137.QueryCodeResponse>;
                codes(request?: _137.QueryCodesRequest): Promise<_137.QueryCodesResponse>;
                codeInfo(request: _137.QueryCodeInfoRequest): Promise<_137.QueryCodeInfoResponse>;
                pinnedCodes(request?: _137.QueryPinnedCodesRequest): Promise<_137.QueryPinnedCodesResponse>;
                params(request?: _137.QueryParamsRequest): Promise<_137.QueryParamsResponse>;
                contractsByCreator(request: _137.QueryContractsByCreatorRequest): Promise<_137.QueryContractsByCreatorResponse>;
                wasmLimitsConfig(request?: _137.QueryWasmLimitsConfigRequest): Promise<_137.QueryWasmLimitsConfigResponse>;
                buildAddress(request: _137.QueryBuildAddressRequest): Promise<_137.QueryBuildAddressResponse>;
            };
            registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    storeCode(value: _138.MsgStoreCode): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract(value: _138.MsgInstantiateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract2(value: _138.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    executeContract(value: _138.MsgExecuteContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    migrateContract(value: _138.MsgMigrateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateAdmin(value: _138.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    clearAdmin(value: _138.MsgClearAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateInstantiateConfig(value: _138.MsgUpdateInstantiateConfig): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _138.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    sudoContract(value: _138.MsgSudoContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    pinCodes(value: _138.MsgPinCodes): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    unpinCodes(value: _138.MsgUnpinCodes): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    storeAndInstantiateContract(value: _138.MsgStoreAndInstantiateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    removeCodeUploadParamsAddresses(value: _138.MsgRemoveCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    addCodeUploadParamsAddresses(value: _138.MsgAddCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    storeAndMigrateContract(value: _138.MsgStoreAndMigrateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateContractLabel(value: _138.MsgUpdateContractLabel): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    storeCode(value: _138.MsgStoreCode): {
                        typeUrl: string;
                        value: _138.MsgStoreCode;
                    };
                    instantiateContract(value: _138.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _138.MsgInstantiateContract;
                    };
                    instantiateContract2(value: _138.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: _138.MsgInstantiateContract2;
                    };
                    executeContract(value: _138.MsgExecuteContract): {
                        typeUrl: string;
                        value: _138.MsgExecuteContract;
                    };
                    migrateContract(value: _138.MsgMigrateContract): {
                        typeUrl: string;
                        value: _138.MsgMigrateContract;
                    };
                    updateAdmin(value: _138.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _138.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _138.MsgClearAdmin): {
                        typeUrl: string;
                        value: _138.MsgClearAdmin;
                    };
                    updateInstantiateConfig(value: _138.MsgUpdateInstantiateConfig): {
                        typeUrl: string;
                        value: _138.MsgUpdateInstantiateConfig;
                    };
                    updateParams(value: _138.MsgUpdateParams): {
                        typeUrl: string;
                        value: _138.MsgUpdateParams;
                    };
                    sudoContract(value: _138.MsgSudoContract): {
                        typeUrl: string;
                        value: _138.MsgSudoContract;
                    };
                    pinCodes(value: _138.MsgPinCodes): {
                        typeUrl: string;
                        value: _138.MsgPinCodes;
                    };
                    unpinCodes(value: _138.MsgUnpinCodes): {
                        typeUrl: string;
                        value: _138.MsgUnpinCodes;
                    };
                    storeAndInstantiateContract(value: _138.MsgStoreAndInstantiateContract): {
                        typeUrl: string;
                        value: _138.MsgStoreAndInstantiateContract;
                    };
                    removeCodeUploadParamsAddresses(value: _138.MsgRemoveCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: _138.MsgRemoveCodeUploadParamsAddresses;
                    };
                    addCodeUploadParamsAddresses(value: _138.MsgAddCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: _138.MsgAddCodeUploadParamsAddresses;
                    };
                    storeAndMigrateContract(value: _138.MsgStoreAndMigrateContract): {
                        typeUrl: string;
                        value: _138.MsgStoreAndMigrateContract;
                    };
                    updateContractLabel(value: _138.MsgUpdateContractLabel): {
                        typeUrl: string;
                        value: _138.MsgUpdateContractLabel;
                    };
                };
                fromPartial: {
                    storeCode(value: _138.MsgStoreCode): {
                        typeUrl: string;
                        value: _138.MsgStoreCode;
                    };
                    instantiateContract(value: _138.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _138.MsgInstantiateContract;
                    };
                    instantiateContract2(value: _138.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: _138.MsgInstantiateContract2;
                    };
                    executeContract(value: _138.MsgExecuteContract): {
                        typeUrl: string;
                        value: _138.MsgExecuteContract;
                    };
                    migrateContract(value: _138.MsgMigrateContract): {
                        typeUrl: string;
                        value: _138.MsgMigrateContract;
                    };
                    updateAdmin(value: _138.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _138.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _138.MsgClearAdmin): {
                        typeUrl: string;
                        value: _138.MsgClearAdmin;
                    };
                    updateInstantiateConfig(value: _138.MsgUpdateInstantiateConfig): {
                        typeUrl: string;
                        value: _138.MsgUpdateInstantiateConfig;
                    };
                    updateParams(value: _138.MsgUpdateParams): {
                        typeUrl: string;
                        value: _138.MsgUpdateParams;
                    };
                    sudoContract(value: _138.MsgSudoContract): {
                        typeUrl: string;
                        value: _138.MsgSudoContract;
                    };
                    pinCodes(value: _138.MsgPinCodes): {
                        typeUrl: string;
                        value: _138.MsgPinCodes;
                    };
                    unpinCodes(value: _138.MsgUnpinCodes): {
                        typeUrl: string;
                        value: _138.MsgUnpinCodes;
                    };
                    storeAndInstantiateContract(value: _138.MsgStoreAndInstantiateContract): {
                        typeUrl: string;
                        value: _138.MsgStoreAndInstantiateContract;
                    };
                    removeCodeUploadParamsAddresses(value: _138.MsgRemoveCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: _138.MsgRemoveCodeUploadParamsAddresses;
                    };
                    addCodeUploadParamsAddresses(value: _138.MsgAddCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: _138.MsgAddCodeUploadParamsAddresses;
                    };
                    storeAndMigrateContract(value: _138.MsgStoreAndMigrateContract): {
                        typeUrl: string;
                        value: _138.MsgStoreAndMigrateContract;
                    };
                    updateContractLabel(value: _138.MsgUpdateContractLabel): {
                        typeUrl: string;
                        value: _138.MsgUpdateContractLabel;
                    };
                };
            };
            AminoConverter: {
                "/cosmwasm.wasm.v1.MsgStoreCode": {
                    aminoType: string;
                    toAmino: (message: _138.MsgStoreCode) => _138.MsgStoreCodeAmino;
                    fromAmino: (object: _138.MsgStoreCodeAmino) => _138.MsgStoreCode;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract": {
                    aminoType: string;
                    toAmino: (message: _138.MsgInstantiateContract) => _138.MsgInstantiateContractAmino;
                    fromAmino: (object: _138.MsgInstantiateContractAmino) => _138.MsgInstantiateContract;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract2": {
                    aminoType: string;
                    toAmino: (message: _138.MsgInstantiateContract2) => _138.MsgInstantiateContract2Amino;
                    fromAmino: (object: _138.MsgInstantiateContract2Amino) => _138.MsgInstantiateContract2;
                };
                "/cosmwasm.wasm.v1.MsgExecuteContract": {
                    aminoType: string;
                    toAmino: (message: _138.MsgExecuteContract) => _138.MsgExecuteContractAmino;
                    fromAmino: (object: _138.MsgExecuteContractAmino) => _138.MsgExecuteContract;
                };
                "/cosmwasm.wasm.v1.MsgMigrateContract": {
                    aminoType: string;
                    toAmino: (message: _138.MsgMigrateContract) => _138.MsgMigrateContractAmino;
                    fromAmino: (object: _138.MsgMigrateContractAmino) => _138.MsgMigrateContract;
                };
                "/cosmwasm.wasm.v1.MsgUpdateAdmin": {
                    aminoType: string;
                    toAmino: (message: _138.MsgUpdateAdmin) => _138.MsgUpdateAdminAmino;
                    fromAmino: (object: _138.MsgUpdateAdminAmino) => _138.MsgUpdateAdmin;
                };
                "/cosmwasm.wasm.v1.MsgClearAdmin": {
                    aminoType: string;
                    toAmino: (message: _138.MsgClearAdmin) => _138.MsgClearAdminAmino;
                    fromAmino: (object: _138.MsgClearAdminAmino) => _138.MsgClearAdmin;
                };
                "/cosmwasm.wasm.v1.MsgUpdateInstantiateConfig": {
                    aminoType: string;
                    toAmino: (message: _138.MsgUpdateInstantiateConfig) => _138.MsgUpdateInstantiateConfigAmino;
                    fromAmino: (object: _138.MsgUpdateInstantiateConfigAmino) => _138.MsgUpdateInstantiateConfig;
                };
                "/cosmwasm.wasm.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _138.MsgUpdateParams) => _138.MsgUpdateParamsAmino;
                    fromAmino: (object: _138.MsgUpdateParamsAmino) => _138.MsgUpdateParams;
                };
                "/cosmwasm.wasm.v1.MsgSudoContract": {
                    aminoType: string;
                    toAmino: (message: _138.MsgSudoContract) => _138.MsgSudoContractAmino;
                    fromAmino: (object: _138.MsgSudoContractAmino) => _138.MsgSudoContract;
                };
                "/cosmwasm.wasm.v1.MsgPinCodes": {
                    aminoType: string;
                    toAmino: (message: _138.MsgPinCodes) => _138.MsgPinCodesAmino;
                    fromAmino: (object: _138.MsgPinCodesAmino) => _138.MsgPinCodes;
                };
                "/cosmwasm.wasm.v1.MsgUnpinCodes": {
                    aminoType: string;
                    toAmino: (message: _138.MsgUnpinCodes) => _138.MsgUnpinCodesAmino;
                    fromAmino: (object: _138.MsgUnpinCodesAmino) => _138.MsgUnpinCodes;
                };
                "/cosmwasm.wasm.v1.MsgStoreAndInstantiateContract": {
                    aminoType: string;
                    toAmino: (message: _138.MsgStoreAndInstantiateContract) => _138.MsgStoreAndInstantiateContractAmino;
                    fromAmino: (object: _138.MsgStoreAndInstantiateContractAmino) => _138.MsgStoreAndInstantiateContract;
                };
                "/cosmwasm.wasm.v1.MsgRemoveCodeUploadParamsAddresses": {
                    aminoType: string;
                    toAmino: (message: _138.MsgRemoveCodeUploadParamsAddresses) => _138.MsgRemoveCodeUploadParamsAddressesAmino;
                    fromAmino: (object: _138.MsgRemoveCodeUploadParamsAddressesAmino) => _138.MsgRemoveCodeUploadParamsAddresses;
                };
                "/cosmwasm.wasm.v1.MsgAddCodeUploadParamsAddresses": {
                    aminoType: string;
                    toAmino: (message: _138.MsgAddCodeUploadParamsAddresses) => _138.MsgAddCodeUploadParamsAddressesAmino;
                    fromAmino: (object: _138.MsgAddCodeUploadParamsAddressesAmino) => _138.MsgAddCodeUploadParamsAddresses;
                };
                "/cosmwasm.wasm.v1.MsgStoreAndMigrateContract": {
                    aminoType: string;
                    toAmino: (message: _138.MsgStoreAndMigrateContract) => _138.MsgStoreAndMigrateContractAmino;
                    fromAmino: (object: _138.MsgStoreAndMigrateContractAmino) => _138.MsgStoreAndMigrateContract;
                };
                "/cosmwasm.wasm.v1.MsgUpdateContractLabel": {
                    aminoType: string;
                    toAmino: (message: _138.MsgUpdateContractLabel) => _138.MsgUpdateContractLabelAmino;
                    fromAmino: (object: _138.MsgUpdateContractLabelAmino) => _138.MsgUpdateContractLabel;
                };
            };
            accessTypeFromJSON(object: any): _139.AccessType;
            accessTypeToJSON(object: _139.AccessType): string;
            contractCodeHistoryOperationTypeFromJSON(object: any): _139.ContractCodeHistoryOperationType;
            contractCodeHistoryOperationTypeToJSON(object: _139.ContractCodeHistoryOperationType): string;
            AccessType: typeof _139.AccessType;
            AccessTypeSDKType: typeof _139.AccessType;
            AccessTypeAmino: typeof _139.AccessType;
            ContractCodeHistoryOperationType: typeof _139.ContractCodeHistoryOperationType;
            ContractCodeHistoryOperationTypeSDKType: typeof _139.ContractCodeHistoryOperationType;
            ContractCodeHistoryOperationTypeAmino: typeof _139.ContractCodeHistoryOperationType;
            AccessTypeParam: {
                typeUrl: string;
                encode(message: _139.AccessTypeParam, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.AccessTypeParam;
                fromPartial(object: Partial<_139.AccessTypeParam>): _139.AccessTypeParam;
                fromAmino(object: _139.AccessTypeParamAmino): _139.AccessTypeParam;
                toAmino(message: _139.AccessTypeParam): _139.AccessTypeParamAmino;
                fromAminoMsg(object: _139.AccessTypeParamAminoMsg): _139.AccessTypeParam;
                toAminoMsg(message: _139.AccessTypeParam): _139.AccessTypeParamAminoMsg;
                fromProtoMsg(message: _139.AccessTypeParamProtoMsg): _139.AccessTypeParam;
                toProto(message: _139.AccessTypeParam): Uint8Array;
                toProtoMsg(message: _139.AccessTypeParam): _139.AccessTypeParamProtoMsg;
            };
            AccessConfig: {
                typeUrl: string;
                encode(message: _139.AccessConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.AccessConfig;
                fromPartial(object: Partial<_139.AccessConfig>): _139.AccessConfig;
                fromAmino(object: _139.AccessConfigAmino): _139.AccessConfig;
                toAmino(message: _139.AccessConfig): _139.AccessConfigAmino;
                fromAminoMsg(object: _139.AccessConfigAminoMsg): _139.AccessConfig;
                toAminoMsg(message: _139.AccessConfig): _139.AccessConfigAminoMsg;
                fromProtoMsg(message: _139.AccessConfigProtoMsg): _139.AccessConfig;
                toProto(message: _139.AccessConfig): Uint8Array;
                toProtoMsg(message: _139.AccessConfig): _139.AccessConfigProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _139.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.Params;
                fromPartial(object: Partial<_139.Params>): _139.Params;
                fromAmino(object: _139.ParamsAmino): _139.Params;
                toAmino(message: _139.Params): _139.ParamsAmino;
                fromAminoMsg(object: _139.ParamsAminoMsg): _139.Params;
                toAminoMsg(message: _139.Params): _139.ParamsAminoMsg;
                fromProtoMsg(message: _139.ParamsProtoMsg): _139.Params;
                toProto(message: _139.Params): Uint8Array;
                toProtoMsg(message: _139.Params): _139.ParamsProtoMsg;
            };
            CodeInfo: {
                typeUrl: string;
                encode(message: _139.CodeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.CodeInfo;
                fromPartial(object: Partial<_139.CodeInfo>): _139.CodeInfo;
                fromAmino(object: _139.CodeInfoAmino): _139.CodeInfo;
                toAmino(message: _139.CodeInfo): _139.CodeInfoAmino;
                fromAminoMsg(object: _139.CodeInfoAminoMsg): _139.CodeInfo;
                toAminoMsg(message: _139.CodeInfo): _139.CodeInfoAminoMsg;
                fromProtoMsg(message: _139.CodeInfoProtoMsg): _139.CodeInfo;
                toProto(message: _139.CodeInfo): Uint8Array;
                toProtoMsg(message: _139.CodeInfo): _139.CodeInfoProtoMsg;
            };
            ContractInfo: {
                typeUrl: string;
                encode(message: _139.ContractInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.ContractInfo;
                fromPartial(object: Partial<_139.ContractInfo>): _139.ContractInfo;
                fromAmino(object: _139.ContractInfoAmino): _139.ContractInfo;
                toAmino(message: _139.ContractInfo): _139.ContractInfoAmino;
                fromAminoMsg(object: _139.ContractInfoAminoMsg): _139.ContractInfo;
                toAminoMsg(message: _139.ContractInfo): _139.ContractInfoAminoMsg;
                fromProtoMsg(message: _139.ContractInfoProtoMsg): _139.ContractInfo;
                toProto(message: _139.ContractInfo): Uint8Array;
                toProtoMsg(message: _139.ContractInfo): _139.ContractInfoProtoMsg;
            };
            ContractCodeHistoryEntry: {
                typeUrl: string;
                encode(message: _139.ContractCodeHistoryEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.ContractCodeHistoryEntry;
                fromPartial(object: Partial<_139.ContractCodeHistoryEntry>): _139.ContractCodeHistoryEntry;
                fromAmino(object: _139.ContractCodeHistoryEntryAmino): _139.ContractCodeHistoryEntry;
                toAmino(message: _139.ContractCodeHistoryEntry): _139.ContractCodeHistoryEntryAmino;
                fromAminoMsg(object: _139.ContractCodeHistoryEntryAminoMsg): _139.ContractCodeHistoryEntry;
                toAminoMsg(message: _139.ContractCodeHistoryEntry): _139.ContractCodeHistoryEntryAminoMsg;
                fromProtoMsg(message: _139.ContractCodeHistoryEntryProtoMsg): _139.ContractCodeHistoryEntry;
                toProto(message: _139.ContractCodeHistoryEntry): Uint8Array;
                toProtoMsg(message: _139.ContractCodeHistoryEntry): _139.ContractCodeHistoryEntryProtoMsg;
            };
            AbsoluteTxPosition: {
                typeUrl: string;
                encode(message: _139.AbsoluteTxPosition, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.AbsoluteTxPosition;
                fromPartial(object: Partial<_139.AbsoluteTxPosition>): _139.AbsoluteTxPosition;
                fromAmino(object: _139.AbsoluteTxPositionAmino): _139.AbsoluteTxPosition;
                toAmino(message: _139.AbsoluteTxPosition): _139.AbsoluteTxPositionAmino;
                fromAminoMsg(object: _139.AbsoluteTxPositionAminoMsg): _139.AbsoluteTxPosition;
                toAminoMsg(message: _139.AbsoluteTxPosition): _139.AbsoluteTxPositionAminoMsg;
                fromProtoMsg(message: _139.AbsoluteTxPositionProtoMsg): _139.AbsoluteTxPosition;
                toProto(message: _139.AbsoluteTxPosition): Uint8Array;
                toProtoMsg(message: _139.AbsoluteTxPosition): _139.AbsoluteTxPositionProtoMsg;
            };
            Model: {
                typeUrl: string;
                encode(message: _139.Model, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.Model;
                fromPartial(object: Partial<_139.Model>): _139.Model;
                fromAmino(object: _139.ModelAmino): _139.Model;
                toAmino(message: _139.Model): _139.ModelAmino;
                fromAminoMsg(object: _139.ModelAminoMsg): _139.Model;
                toAminoMsg(message: _139.Model): _139.ModelAminoMsg;
                fromProtoMsg(message: _139.ModelProtoMsg): _139.Model;
                toProto(message: _139.Model): Uint8Array;
                toProtoMsg(message: _139.Model): _139.ModelProtoMsg;
            };
            Cosmwasm_wasmv1ContractInfoExtension_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmwasm_wasmv1ContractInfoExtension_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmwasm_wasmv1ContractInfoExtension_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            MsgStoreCode: {
                typeUrl: string;
                encode(message: _138.MsgStoreCode, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.MsgStoreCode;
                fromPartial(object: Partial<_138.MsgStoreCode>): _138.MsgStoreCode;
                fromAmino(object: _138.MsgStoreCodeAmino): _138.MsgStoreCode;
                toAmino(message: _138.MsgStoreCode): _138.MsgStoreCodeAmino;
                fromAminoMsg(object: _138.MsgStoreCodeAminoMsg): _138.MsgStoreCode;
                toAminoMsg(message: _138.MsgStoreCode): _138.MsgStoreCodeAminoMsg;
                fromProtoMsg(message: _138.MsgStoreCodeProtoMsg): _138.MsgStoreCode;
                toProto(message: _138.MsgStoreCode): Uint8Array;
                toProtoMsg(message: _138.MsgStoreCode): _138.MsgStoreCodeProtoMsg;
            };
            MsgStoreCodeResponse: {
                typeUrl: string;
                encode(message: _138.MsgStoreCodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.MsgStoreCodeResponse;
                fromPartial(object: Partial<_138.MsgStoreCodeResponse>): _138.MsgStoreCodeResponse;
                fromAmino(object: _138.MsgStoreCodeResponseAmino): _138.MsgStoreCodeResponse;
                toAmino(message: _138.MsgStoreCodeResponse): _138.MsgStoreCodeResponseAmino;
                fromAminoMsg(object: _138.MsgStoreCodeResponseAminoMsg): _138.MsgStoreCodeResponse;
                toAminoMsg(message: _138.MsgStoreCodeResponse): _138.MsgStoreCodeResponseAminoMsg;
                fromProtoMsg(message: _138.MsgStoreCodeResponseProtoMsg): _138.MsgStoreCodeResponse;
                toProto(message: _138.MsgStoreCodeResponse): Uint8Array;
                toProtoMsg(message: _138.MsgStoreCodeResponse): _138.MsgStoreCodeResponseProtoMsg;
            };
            MsgInstantiateContract: {
                typeUrl: string;
                encode(message: _138.MsgInstantiateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.MsgInstantiateContract;
                fromPartial(object: Partial<_138.MsgInstantiateContract>): _138.MsgInstantiateContract;
                fromAmino(object: _138.MsgInstantiateContractAmino): _138.MsgInstantiateContract;
                toAmino(message: _138.MsgInstantiateContract): _138.MsgInstantiateContractAmino;
                fromAminoMsg(object: _138.MsgInstantiateContractAminoMsg): _138.MsgInstantiateContract;
                toAminoMsg(message: _138.MsgInstantiateContract): _138.MsgInstantiateContractAminoMsg;
                fromProtoMsg(message: _138.MsgInstantiateContractProtoMsg): _138.MsgInstantiateContract;
                toProto(message: _138.MsgInstantiateContract): Uint8Array;
                toProtoMsg(message: _138.MsgInstantiateContract): _138.MsgInstantiateContractProtoMsg;
            };
            MsgInstantiateContractResponse: {
                typeUrl: string;
                encode(message: _138.MsgInstantiateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.MsgInstantiateContractResponse;
                fromPartial(object: Partial<_138.MsgInstantiateContractResponse>): _138.MsgInstantiateContractResponse;
                fromAmino(object: _138.MsgInstantiateContractResponseAmino): _138.MsgInstantiateContractResponse;
                toAmino(message: _138.MsgInstantiateContractResponse): _138.MsgInstantiateContractResponseAmino;
                fromAminoMsg(object: _138.MsgInstantiateContractResponseAminoMsg): _138.MsgInstantiateContractResponse;
                toAminoMsg(message: _138.MsgInstantiateContractResponse): _138.MsgInstantiateContractResponseAminoMsg;
                fromProtoMsg(message: _138.MsgInstantiateContractResponseProtoMsg): _138.MsgInstantiateContractResponse;
                toProto(message: _138.MsgInstantiateContractResponse): Uint8Array;
                toProtoMsg(message: _138.MsgInstantiateContractResponse): _138.MsgInstantiateContractResponseProtoMsg;
            };
            MsgInstantiateContract2: {
                typeUrl: string;
                encode(message: _138.MsgInstantiateContract2, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.MsgInstantiateContract2;
                fromPartial(object: Partial<_138.MsgInstantiateContract2>): _138.MsgInstantiateContract2;
                fromAmino(object: _138.MsgInstantiateContract2Amino): _138.MsgInstantiateContract2;
                toAmino(message: _138.MsgInstantiateContract2): _138.MsgInstantiateContract2Amino;
                fromAminoMsg(object: _138.MsgInstantiateContract2AminoMsg): _138.MsgInstantiateContract2;
                toAminoMsg(message: _138.MsgInstantiateContract2): _138.MsgInstantiateContract2AminoMsg;
                fromProtoMsg(message: _138.MsgInstantiateContract2ProtoMsg): _138.MsgInstantiateContract2;
                toProto(message: _138.MsgInstantiateContract2): Uint8Array;
                toProtoMsg(message: _138.MsgInstantiateContract2): _138.MsgInstantiateContract2ProtoMsg;
            };
            MsgInstantiateContract2Response: {
                typeUrl: string;
                encode(message: _138.MsgInstantiateContract2Response, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.MsgInstantiateContract2Response;
                fromPartial(object: Partial<_138.MsgInstantiateContract2Response>): _138.MsgInstantiateContract2Response;
                fromAmino(object: _138.MsgInstantiateContract2ResponseAmino): _138.MsgInstantiateContract2Response;
                toAmino(message: _138.MsgInstantiateContract2Response): _138.MsgInstantiateContract2ResponseAmino;
                fromAminoMsg(object: _138.MsgInstantiateContract2ResponseAminoMsg): _138.MsgInstantiateContract2Response;
                toAminoMsg(message: _138.MsgInstantiateContract2Response): _138.MsgInstantiateContract2ResponseAminoMsg;
                fromProtoMsg(message: _138.MsgInstantiateContract2ResponseProtoMsg): _138.MsgInstantiateContract2Response;
                toProto(message: _138.MsgInstantiateContract2Response): Uint8Array;
                toProtoMsg(message: _138.MsgInstantiateContract2Response): _138.MsgInstantiateContract2ResponseProtoMsg;
            };
            MsgExecuteContract: {
                typeUrl: string;
                encode(message: _138.MsgExecuteContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.MsgExecuteContract;
                fromPartial(object: Partial<_138.MsgExecuteContract>): _138.MsgExecuteContract;
                fromAmino(object: _138.MsgExecuteContractAmino): _138.MsgExecuteContract;
                toAmino(message: _138.MsgExecuteContract): _138.MsgExecuteContractAmino;
                fromAminoMsg(object: _138.MsgExecuteContractAminoMsg): _138.MsgExecuteContract;
                toAminoMsg(message: _138.MsgExecuteContract): _138.MsgExecuteContractAminoMsg;
                fromProtoMsg(message: _138.MsgExecuteContractProtoMsg): _138.MsgExecuteContract;
                toProto(message: _138.MsgExecuteContract): Uint8Array;
                toProtoMsg(message: _138.MsgExecuteContract): _138.MsgExecuteContractProtoMsg;
            };
            MsgExecuteContractResponse: {
                typeUrl: string;
                encode(message: _138.MsgExecuteContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.MsgExecuteContractResponse;
                fromPartial(object: Partial<_138.MsgExecuteContractResponse>): _138.MsgExecuteContractResponse;
                fromAmino(object: _138.MsgExecuteContractResponseAmino): _138.MsgExecuteContractResponse;
                toAmino(message: _138.MsgExecuteContractResponse): _138.MsgExecuteContractResponseAmino;
                fromAminoMsg(object: _138.MsgExecuteContractResponseAminoMsg): _138.MsgExecuteContractResponse;
                toAminoMsg(message: _138.MsgExecuteContractResponse): _138.MsgExecuteContractResponseAminoMsg;
                fromProtoMsg(message: _138.MsgExecuteContractResponseProtoMsg): _138.MsgExecuteContractResponse;
                toProto(message: _138.MsgExecuteContractResponse): Uint8Array;
                toProtoMsg(message: _138.MsgExecuteContractResponse): _138.MsgExecuteContractResponseProtoMsg;
            };
            MsgMigrateContract: {
                typeUrl: string;
                encode(message: _138.MsgMigrateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.MsgMigrateContract;
                fromPartial(object: Partial<_138.MsgMigrateContract>): _138.MsgMigrateContract;
                fromAmino(object: _138.MsgMigrateContractAmino): _138.MsgMigrateContract;
                toAmino(message: _138.MsgMigrateContract): _138.MsgMigrateContractAmino;
                fromAminoMsg(object: _138.MsgMigrateContractAminoMsg): _138.MsgMigrateContract;
                toAminoMsg(message: _138.MsgMigrateContract): _138.MsgMigrateContractAminoMsg;
                fromProtoMsg(message: _138.MsgMigrateContractProtoMsg): _138.MsgMigrateContract;
                toProto(message: _138.MsgMigrateContract): Uint8Array;
                toProtoMsg(message: _138.MsgMigrateContract): _138.MsgMigrateContractProtoMsg;
            };
            MsgMigrateContractResponse: {
                typeUrl: string;
                encode(message: _138.MsgMigrateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.MsgMigrateContractResponse;
                fromPartial(object: Partial<_138.MsgMigrateContractResponse>): _138.MsgMigrateContractResponse;
                fromAmino(object: _138.MsgMigrateContractResponseAmino): _138.MsgMigrateContractResponse;
                toAmino(message: _138.MsgMigrateContractResponse): _138.MsgMigrateContractResponseAmino;
                fromAminoMsg(object: _138.MsgMigrateContractResponseAminoMsg): _138.MsgMigrateContractResponse;
                toAminoMsg(message: _138.MsgMigrateContractResponse): _138.MsgMigrateContractResponseAminoMsg;
                fromProtoMsg(message: _138.MsgMigrateContractResponseProtoMsg): _138.MsgMigrateContractResponse;
                toProto(message: _138.MsgMigrateContractResponse): Uint8Array;
                toProtoMsg(message: _138.MsgMigrateContractResponse): _138.MsgMigrateContractResponseProtoMsg;
            };
            MsgUpdateAdmin: {
                typeUrl: string;
                encode(message: _138.MsgUpdateAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.MsgUpdateAdmin;
                fromPartial(object: Partial<_138.MsgUpdateAdmin>): _138.MsgUpdateAdmin;
                fromAmino(object: _138.MsgUpdateAdminAmino): _138.MsgUpdateAdmin;
                toAmino(message: _138.MsgUpdateAdmin): _138.MsgUpdateAdminAmino;
                fromAminoMsg(object: _138.MsgUpdateAdminAminoMsg): _138.MsgUpdateAdmin;
                toAminoMsg(message: _138.MsgUpdateAdmin): _138.MsgUpdateAdminAminoMsg;
                fromProtoMsg(message: _138.MsgUpdateAdminProtoMsg): _138.MsgUpdateAdmin;
                toProto(message: _138.MsgUpdateAdmin): Uint8Array;
                toProtoMsg(message: _138.MsgUpdateAdmin): _138.MsgUpdateAdminProtoMsg;
            };
            MsgUpdateAdminResponse: {
                typeUrl: string;
                encode(_: _138.MsgUpdateAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.MsgUpdateAdminResponse;
                fromPartial(_: Partial<_138.MsgUpdateAdminResponse>): _138.MsgUpdateAdminResponse;
                fromAmino(_: _138.MsgUpdateAdminResponseAmino): _138.MsgUpdateAdminResponse;
                toAmino(_: _138.MsgUpdateAdminResponse): _138.MsgUpdateAdminResponseAmino;
                fromAminoMsg(object: _138.MsgUpdateAdminResponseAminoMsg): _138.MsgUpdateAdminResponse;
                toAminoMsg(message: _138.MsgUpdateAdminResponse): _138.MsgUpdateAdminResponseAminoMsg;
                fromProtoMsg(message: _138.MsgUpdateAdminResponseProtoMsg): _138.MsgUpdateAdminResponse;
                toProto(message: _138.MsgUpdateAdminResponse): Uint8Array;
                toProtoMsg(message: _138.MsgUpdateAdminResponse): _138.MsgUpdateAdminResponseProtoMsg;
            };
            MsgClearAdmin: {
                typeUrl: string;
                encode(message: _138.MsgClearAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.MsgClearAdmin;
                fromPartial(object: Partial<_138.MsgClearAdmin>): _138.MsgClearAdmin;
                fromAmino(object: _138.MsgClearAdminAmino): _138.MsgClearAdmin;
                toAmino(message: _138.MsgClearAdmin): _138.MsgClearAdminAmino;
                fromAminoMsg(object: _138.MsgClearAdminAminoMsg): _138.MsgClearAdmin;
                toAminoMsg(message: _138.MsgClearAdmin): _138.MsgClearAdminAminoMsg;
                fromProtoMsg(message: _138.MsgClearAdminProtoMsg): _138.MsgClearAdmin;
                toProto(message: _138.MsgClearAdmin): Uint8Array;
                toProtoMsg(message: _138.MsgClearAdmin): _138.MsgClearAdminProtoMsg;
            };
            MsgClearAdminResponse: {
                typeUrl: string;
                encode(_: _138.MsgClearAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.MsgClearAdminResponse;
                fromPartial(_: Partial<_138.MsgClearAdminResponse>): _138.MsgClearAdminResponse;
                fromAmino(_: _138.MsgClearAdminResponseAmino): _138.MsgClearAdminResponse;
                toAmino(_: _138.MsgClearAdminResponse): _138.MsgClearAdminResponseAmino;
                fromAminoMsg(object: _138.MsgClearAdminResponseAminoMsg): _138.MsgClearAdminResponse;
                toAminoMsg(message: _138.MsgClearAdminResponse): _138.MsgClearAdminResponseAminoMsg;
                fromProtoMsg(message: _138.MsgClearAdminResponseProtoMsg): _138.MsgClearAdminResponse;
                toProto(message: _138.MsgClearAdminResponse): Uint8Array;
                toProtoMsg(message: _138.MsgClearAdminResponse): _138.MsgClearAdminResponseProtoMsg;
            };
            MsgUpdateInstantiateConfig: {
                typeUrl: string;
                encode(message: _138.MsgUpdateInstantiateConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.MsgUpdateInstantiateConfig;
                fromPartial(object: Partial<_138.MsgUpdateInstantiateConfig>): _138.MsgUpdateInstantiateConfig;
                fromAmino(object: _138.MsgUpdateInstantiateConfigAmino): _138.MsgUpdateInstantiateConfig;
                toAmino(message: _138.MsgUpdateInstantiateConfig): _138.MsgUpdateInstantiateConfigAmino;
                fromAminoMsg(object: _138.MsgUpdateInstantiateConfigAminoMsg): _138.MsgUpdateInstantiateConfig;
                toAminoMsg(message: _138.MsgUpdateInstantiateConfig): _138.MsgUpdateInstantiateConfigAminoMsg;
                fromProtoMsg(message: _138.MsgUpdateInstantiateConfigProtoMsg): _138.MsgUpdateInstantiateConfig;
                toProto(message: _138.MsgUpdateInstantiateConfig): Uint8Array;
                toProtoMsg(message: _138.MsgUpdateInstantiateConfig): _138.MsgUpdateInstantiateConfigProtoMsg;
            };
            MsgUpdateInstantiateConfigResponse: {
                typeUrl: string;
                encode(_: _138.MsgUpdateInstantiateConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.MsgUpdateInstantiateConfigResponse;
                fromPartial(_: Partial<_138.MsgUpdateInstantiateConfigResponse>): _138.MsgUpdateInstantiateConfigResponse;
                fromAmino(_: _138.MsgUpdateInstantiateConfigResponseAmino): _138.MsgUpdateInstantiateConfigResponse;
                toAmino(_: _138.MsgUpdateInstantiateConfigResponse): _138.MsgUpdateInstantiateConfigResponseAmino;
                fromAminoMsg(object: _138.MsgUpdateInstantiateConfigResponseAminoMsg): _138.MsgUpdateInstantiateConfigResponse;
                toAminoMsg(message: _138.MsgUpdateInstantiateConfigResponse): _138.MsgUpdateInstantiateConfigResponseAminoMsg;
                fromProtoMsg(message: _138.MsgUpdateInstantiateConfigResponseProtoMsg): _138.MsgUpdateInstantiateConfigResponse;
                toProto(message: _138.MsgUpdateInstantiateConfigResponse): Uint8Array;
                toProtoMsg(message: _138.MsgUpdateInstantiateConfigResponse): _138.MsgUpdateInstantiateConfigResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _138.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.MsgUpdateParams;
                fromPartial(object: Partial<_138.MsgUpdateParams>): _138.MsgUpdateParams;
                fromAmino(object: _138.MsgUpdateParamsAmino): _138.MsgUpdateParams;
                toAmino(message: _138.MsgUpdateParams): _138.MsgUpdateParamsAmino;
                fromAminoMsg(object: _138.MsgUpdateParamsAminoMsg): _138.MsgUpdateParams;
                toAminoMsg(message: _138.MsgUpdateParams): _138.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _138.MsgUpdateParamsProtoMsg): _138.MsgUpdateParams;
                toProto(message: _138.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _138.MsgUpdateParams): _138.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _138.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_138.MsgUpdateParamsResponse>): _138.MsgUpdateParamsResponse;
                fromAmino(_: _138.MsgUpdateParamsResponseAmino): _138.MsgUpdateParamsResponse;
                toAmino(_: _138.MsgUpdateParamsResponse): _138.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _138.MsgUpdateParamsResponseAminoMsg): _138.MsgUpdateParamsResponse;
                toAminoMsg(message: _138.MsgUpdateParamsResponse): _138.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _138.MsgUpdateParamsResponseProtoMsg): _138.MsgUpdateParamsResponse;
                toProto(message: _138.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _138.MsgUpdateParamsResponse): _138.MsgUpdateParamsResponseProtoMsg;
            };
            MsgSudoContract: {
                typeUrl: string;
                encode(message: _138.MsgSudoContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.MsgSudoContract;
                fromPartial(object: Partial<_138.MsgSudoContract>): _138.MsgSudoContract;
                fromAmino(object: _138.MsgSudoContractAmino): _138.MsgSudoContract;
                toAmino(message: _138.MsgSudoContract): _138.MsgSudoContractAmino;
                fromAminoMsg(object: _138.MsgSudoContractAminoMsg): _138.MsgSudoContract;
                toAminoMsg(message: _138.MsgSudoContract): _138.MsgSudoContractAminoMsg;
                fromProtoMsg(message: _138.MsgSudoContractProtoMsg): _138.MsgSudoContract;
                toProto(message: _138.MsgSudoContract): Uint8Array;
                toProtoMsg(message: _138.MsgSudoContract): _138.MsgSudoContractProtoMsg;
            };
            MsgSudoContractResponse: {
                typeUrl: string;
                encode(message: _138.MsgSudoContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.MsgSudoContractResponse;
                fromPartial(object: Partial<_138.MsgSudoContractResponse>): _138.MsgSudoContractResponse;
                fromAmino(object: _138.MsgSudoContractResponseAmino): _138.MsgSudoContractResponse;
                toAmino(message: _138.MsgSudoContractResponse): _138.MsgSudoContractResponseAmino;
                fromAminoMsg(object: _138.MsgSudoContractResponseAminoMsg): _138.MsgSudoContractResponse;
                toAminoMsg(message: _138.MsgSudoContractResponse): _138.MsgSudoContractResponseAminoMsg;
                fromProtoMsg(message: _138.MsgSudoContractResponseProtoMsg): _138.MsgSudoContractResponse;
                toProto(message: _138.MsgSudoContractResponse): Uint8Array;
                toProtoMsg(message: _138.MsgSudoContractResponse): _138.MsgSudoContractResponseProtoMsg;
            };
            MsgPinCodes: {
                typeUrl: string;
                encode(message: _138.MsgPinCodes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.MsgPinCodes;
                fromPartial(object: Partial<_138.MsgPinCodes>): _138.MsgPinCodes;
                fromAmino(object: _138.MsgPinCodesAmino): _138.MsgPinCodes;
                toAmino(message: _138.MsgPinCodes): _138.MsgPinCodesAmino;
                fromAminoMsg(object: _138.MsgPinCodesAminoMsg): _138.MsgPinCodes;
                toAminoMsg(message: _138.MsgPinCodes): _138.MsgPinCodesAminoMsg;
                fromProtoMsg(message: _138.MsgPinCodesProtoMsg): _138.MsgPinCodes;
                toProto(message: _138.MsgPinCodes): Uint8Array;
                toProtoMsg(message: _138.MsgPinCodes): _138.MsgPinCodesProtoMsg;
            };
            MsgPinCodesResponse: {
                typeUrl: string;
                encode(_: _138.MsgPinCodesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.MsgPinCodesResponse;
                fromPartial(_: Partial<_138.MsgPinCodesResponse>): _138.MsgPinCodesResponse;
                fromAmino(_: _138.MsgPinCodesResponseAmino): _138.MsgPinCodesResponse;
                toAmino(_: _138.MsgPinCodesResponse): _138.MsgPinCodesResponseAmino;
                fromAminoMsg(object: _138.MsgPinCodesResponseAminoMsg): _138.MsgPinCodesResponse;
                toAminoMsg(message: _138.MsgPinCodesResponse): _138.MsgPinCodesResponseAminoMsg;
                fromProtoMsg(message: _138.MsgPinCodesResponseProtoMsg): _138.MsgPinCodesResponse;
                toProto(message: _138.MsgPinCodesResponse): Uint8Array;
                toProtoMsg(message: _138.MsgPinCodesResponse): _138.MsgPinCodesResponseProtoMsg;
            };
            MsgUnpinCodes: {
                typeUrl: string;
                encode(message: _138.MsgUnpinCodes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.MsgUnpinCodes;
                fromPartial(object: Partial<_138.MsgUnpinCodes>): _138.MsgUnpinCodes;
                fromAmino(object: _138.MsgUnpinCodesAmino): _138.MsgUnpinCodes;
                toAmino(message: _138.MsgUnpinCodes): _138.MsgUnpinCodesAmino;
                fromAminoMsg(object: _138.MsgUnpinCodesAminoMsg): _138.MsgUnpinCodes;
                toAminoMsg(message: _138.MsgUnpinCodes): _138.MsgUnpinCodesAminoMsg;
                fromProtoMsg(message: _138.MsgUnpinCodesProtoMsg): _138.MsgUnpinCodes;
                toProto(message: _138.MsgUnpinCodes): Uint8Array;
                toProtoMsg(message: _138.MsgUnpinCodes): _138.MsgUnpinCodesProtoMsg;
            };
            MsgUnpinCodesResponse: {
                typeUrl: string;
                encode(_: _138.MsgUnpinCodesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.MsgUnpinCodesResponse;
                fromPartial(_: Partial<_138.MsgUnpinCodesResponse>): _138.MsgUnpinCodesResponse;
                fromAmino(_: _138.MsgUnpinCodesResponseAmino): _138.MsgUnpinCodesResponse;
                toAmino(_: _138.MsgUnpinCodesResponse): _138.MsgUnpinCodesResponseAmino;
                fromAminoMsg(object: _138.MsgUnpinCodesResponseAminoMsg): _138.MsgUnpinCodesResponse;
                toAminoMsg(message: _138.MsgUnpinCodesResponse): _138.MsgUnpinCodesResponseAminoMsg;
                fromProtoMsg(message: _138.MsgUnpinCodesResponseProtoMsg): _138.MsgUnpinCodesResponse;
                toProto(message: _138.MsgUnpinCodesResponse): Uint8Array;
                toProtoMsg(message: _138.MsgUnpinCodesResponse): _138.MsgUnpinCodesResponseProtoMsg;
            };
            MsgStoreAndInstantiateContract: {
                typeUrl: string;
                encode(message: _138.MsgStoreAndInstantiateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.MsgStoreAndInstantiateContract;
                fromPartial(object: Partial<_138.MsgStoreAndInstantiateContract>): _138.MsgStoreAndInstantiateContract;
                fromAmino(object: _138.MsgStoreAndInstantiateContractAmino): _138.MsgStoreAndInstantiateContract;
                toAmino(message: _138.MsgStoreAndInstantiateContract): _138.MsgStoreAndInstantiateContractAmino;
                fromAminoMsg(object: _138.MsgStoreAndInstantiateContractAminoMsg): _138.MsgStoreAndInstantiateContract;
                toAminoMsg(message: _138.MsgStoreAndInstantiateContract): _138.MsgStoreAndInstantiateContractAminoMsg;
                fromProtoMsg(message: _138.MsgStoreAndInstantiateContractProtoMsg): _138.MsgStoreAndInstantiateContract;
                toProto(message: _138.MsgStoreAndInstantiateContract): Uint8Array;
                toProtoMsg(message: _138.MsgStoreAndInstantiateContract): _138.MsgStoreAndInstantiateContractProtoMsg;
            };
            MsgStoreAndInstantiateContractResponse: {
                typeUrl: string;
                encode(message: _138.MsgStoreAndInstantiateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.MsgStoreAndInstantiateContractResponse;
                fromPartial(object: Partial<_138.MsgStoreAndInstantiateContractResponse>): _138.MsgStoreAndInstantiateContractResponse;
                fromAmino(object: _138.MsgStoreAndInstantiateContractResponseAmino): _138.MsgStoreAndInstantiateContractResponse;
                toAmino(message: _138.MsgStoreAndInstantiateContractResponse): _138.MsgStoreAndInstantiateContractResponseAmino;
                fromAminoMsg(object: _138.MsgStoreAndInstantiateContractResponseAminoMsg): _138.MsgStoreAndInstantiateContractResponse;
                toAminoMsg(message: _138.MsgStoreAndInstantiateContractResponse): _138.MsgStoreAndInstantiateContractResponseAminoMsg;
                fromProtoMsg(message: _138.MsgStoreAndInstantiateContractResponseProtoMsg): _138.MsgStoreAndInstantiateContractResponse;
                toProto(message: _138.MsgStoreAndInstantiateContractResponse): Uint8Array;
                toProtoMsg(message: _138.MsgStoreAndInstantiateContractResponse): _138.MsgStoreAndInstantiateContractResponseProtoMsg;
            };
            MsgAddCodeUploadParamsAddresses: {
                typeUrl: string;
                encode(message: _138.MsgAddCodeUploadParamsAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.MsgAddCodeUploadParamsAddresses;
                fromPartial(object: Partial<_138.MsgAddCodeUploadParamsAddresses>): _138.MsgAddCodeUploadParamsAddresses;
                fromAmino(object: _138.MsgAddCodeUploadParamsAddressesAmino): _138.MsgAddCodeUploadParamsAddresses;
                toAmino(message: _138.MsgAddCodeUploadParamsAddresses): _138.MsgAddCodeUploadParamsAddressesAmino;
                fromAminoMsg(object: _138.MsgAddCodeUploadParamsAddressesAminoMsg): _138.MsgAddCodeUploadParamsAddresses;
                toAminoMsg(message: _138.MsgAddCodeUploadParamsAddresses): _138.MsgAddCodeUploadParamsAddressesAminoMsg;
                fromProtoMsg(message: _138.MsgAddCodeUploadParamsAddressesProtoMsg): _138.MsgAddCodeUploadParamsAddresses;
                toProto(message: _138.MsgAddCodeUploadParamsAddresses): Uint8Array;
                toProtoMsg(message: _138.MsgAddCodeUploadParamsAddresses): _138.MsgAddCodeUploadParamsAddressesProtoMsg;
            };
            MsgAddCodeUploadParamsAddressesResponse: {
                typeUrl: string;
                encode(_: _138.MsgAddCodeUploadParamsAddressesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.MsgAddCodeUploadParamsAddressesResponse;
                fromPartial(_: Partial<_138.MsgAddCodeUploadParamsAddressesResponse>): _138.MsgAddCodeUploadParamsAddressesResponse;
                fromAmino(_: _138.MsgAddCodeUploadParamsAddressesResponseAmino): _138.MsgAddCodeUploadParamsAddressesResponse;
                toAmino(_: _138.MsgAddCodeUploadParamsAddressesResponse): _138.MsgAddCodeUploadParamsAddressesResponseAmino;
                fromAminoMsg(object: _138.MsgAddCodeUploadParamsAddressesResponseAminoMsg): _138.MsgAddCodeUploadParamsAddressesResponse;
                toAminoMsg(message: _138.MsgAddCodeUploadParamsAddressesResponse): _138.MsgAddCodeUploadParamsAddressesResponseAminoMsg;
                fromProtoMsg(message: _138.MsgAddCodeUploadParamsAddressesResponseProtoMsg): _138.MsgAddCodeUploadParamsAddressesResponse;
                toProto(message: _138.MsgAddCodeUploadParamsAddressesResponse): Uint8Array;
                toProtoMsg(message: _138.MsgAddCodeUploadParamsAddressesResponse): _138.MsgAddCodeUploadParamsAddressesResponseProtoMsg;
            };
            MsgRemoveCodeUploadParamsAddresses: {
                typeUrl: string;
                encode(message: _138.MsgRemoveCodeUploadParamsAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.MsgRemoveCodeUploadParamsAddresses;
                fromPartial(object: Partial<_138.MsgRemoveCodeUploadParamsAddresses>): _138.MsgRemoveCodeUploadParamsAddresses;
                fromAmino(object: _138.MsgRemoveCodeUploadParamsAddressesAmino): _138.MsgRemoveCodeUploadParamsAddresses;
                toAmino(message: _138.MsgRemoveCodeUploadParamsAddresses): _138.MsgRemoveCodeUploadParamsAddressesAmino;
                fromAminoMsg(object: _138.MsgRemoveCodeUploadParamsAddressesAminoMsg): _138.MsgRemoveCodeUploadParamsAddresses;
                toAminoMsg(message: _138.MsgRemoveCodeUploadParamsAddresses): _138.MsgRemoveCodeUploadParamsAddressesAminoMsg;
                fromProtoMsg(message: _138.MsgRemoveCodeUploadParamsAddressesProtoMsg): _138.MsgRemoveCodeUploadParamsAddresses;
                toProto(message: _138.MsgRemoveCodeUploadParamsAddresses): Uint8Array;
                toProtoMsg(message: _138.MsgRemoveCodeUploadParamsAddresses): _138.MsgRemoveCodeUploadParamsAddressesProtoMsg;
            };
            MsgRemoveCodeUploadParamsAddressesResponse: {
                typeUrl: string;
                encode(_: _138.MsgRemoveCodeUploadParamsAddressesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.MsgRemoveCodeUploadParamsAddressesResponse;
                fromPartial(_: Partial<_138.MsgRemoveCodeUploadParamsAddressesResponse>): _138.MsgRemoveCodeUploadParamsAddressesResponse;
                fromAmino(_: _138.MsgRemoveCodeUploadParamsAddressesResponseAmino): _138.MsgRemoveCodeUploadParamsAddressesResponse;
                toAmino(_: _138.MsgRemoveCodeUploadParamsAddressesResponse): _138.MsgRemoveCodeUploadParamsAddressesResponseAmino;
                fromAminoMsg(object: _138.MsgRemoveCodeUploadParamsAddressesResponseAminoMsg): _138.MsgRemoveCodeUploadParamsAddressesResponse;
                toAminoMsg(message: _138.MsgRemoveCodeUploadParamsAddressesResponse): _138.MsgRemoveCodeUploadParamsAddressesResponseAminoMsg;
                fromProtoMsg(message: _138.MsgRemoveCodeUploadParamsAddressesResponseProtoMsg): _138.MsgRemoveCodeUploadParamsAddressesResponse;
                toProto(message: _138.MsgRemoveCodeUploadParamsAddressesResponse): Uint8Array;
                toProtoMsg(message: _138.MsgRemoveCodeUploadParamsAddressesResponse): _138.MsgRemoveCodeUploadParamsAddressesResponseProtoMsg;
            };
            MsgStoreAndMigrateContract: {
                typeUrl: string;
                encode(message: _138.MsgStoreAndMigrateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.MsgStoreAndMigrateContract;
                fromPartial(object: Partial<_138.MsgStoreAndMigrateContract>): _138.MsgStoreAndMigrateContract;
                fromAmino(object: _138.MsgStoreAndMigrateContractAmino): _138.MsgStoreAndMigrateContract;
                toAmino(message: _138.MsgStoreAndMigrateContract): _138.MsgStoreAndMigrateContractAmino;
                fromAminoMsg(object: _138.MsgStoreAndMigrateContractAminoMsg): _138.MsgStoreAndMigrateContract;
                toAminoMsg(message: _138.MsgStoreAndMigrateContract): _138.MsgStoreAndMigrateContractAminoMsg;
                fromProtoMsg(message: _138.MsgStoreAndMigrateContractProtoMsg): _138.MsgStoreAndMigrateContract;
                toProto(message: _138.MsgStoreAndMigrateContract): Uint8Array;
                toProtoMsg(message: _138.MsgStoreAndMigrateContract): _138.MsgStoreAndMigrateContractProtoMsg;
            };
            MsgStoreAndMigrateContractResponse: {
                typeUrl: string;
                encode(message: _138.MsgStoreAndMigrateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.MsgStoreAndMigrateContractResponse;
                fromPartial(object: Partial<_138.MsgStoreAndMigrateContractResponse>): _138.MsgStoreAndMigrateContractResponse;
                fromAmino(object: _138.MsgStoreAndMigrateContractResponseAmino): _138.MsgStoreAndMigrateContractResponse;
                toAmino(message: _138.MsgStoreAndMigrateContractResponse): _138.MsgStoreAndMigrateContractResponseAmino;
                fromAminoMsg(object: _138.MsgStoreAndMigrateContractResponseAminoMsg): _138.MsgStoreAndMigrateContractResponse;
                toAminoMsg(message: _138.MsgStoreAndMigrateContractResponse): _138.MsgStoreAndMigrateContractResponseAminoMsg;
                fromProtoMsg(message: _138.MsgStoreAndMigrateContractResponseProtoMsg): _138.MsgStoreAndMigrateContractResponse;
                toProto(message: _138.MsgStoreAndMigrateContractResponse): Uint8Array;
                toProtoMsg(message: _138.MsgStoreAndMigrateContractResponse): _138.MsgStoreAndMigrateContractResponseProtoMsg;
            };
            MsgUpdateContractLabel: {
                typeUrl: string;
                encode(message: _138.MsgUpdateContractLabel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.MsgUpdateContractLabel;
                fromPartial(object: Partial<_138.MsgUpdateContractLabel>): _138.MsgUpdateContractLabel;
                fromAmino(object: _138.MsgUpdateContractLabelAmino): _138.MsgUpdateContractLabel;
                toAmino(message: _138.MsgUpdateContractLabel): _138.MsgUpdateContractLabelAmino;
                fromAminoMsg(object: _138.MsgUpdateContractLabelAminoMsg): _138.MsgUpdateContractLabel;
                toAminoMsg(message: _138.MsgUpdateContractLabel): _138.MsgUpdateContractLabelAminoMsg;
                fromProtoMsg(message: _138.MsgUpdateContractLabelProtoMsg): _138.MsgUpdateContractLabel;
                toProto(message: _138.MsgUpdateContractLabel): Uint8Array;
                toProtoMsg(message: _138.MsgUpdateContractLabel): _138.MsgUpdateContractLabelProtoMsg;
            };
            MsgUpdateContractLabelResponse: {
                typeUrl: string;
                encode(_: _138.MsgUpdateContractLabelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.MsgUpdateContractLabelResponse;
                fromPartial(_: Partial<_138.MsgUpdateContractLabelResponse>): _138.MsgUpdateContractLabelResponse;
                fromAmino(_: _138.MsgUpdateContractLabelResponseAmino): _138.MsgUpdateContractLabelResponse;
                toAmino(_: _138.MsgUpdateContractLabelResponse): _138.MsgUpdateContractLabelResponseAmino;
                fromAminoMsg(object: _138.MsgUpdateContractLabelResponseAminoMsg): _138.MsgUpdateContractLabelResponse;
                toAminoMsg(message: _138.MsgUpdateContractLabelResponse): _138.MsgUpdateContractLabelResponseAminoMsg;
                fromProtoMsg(message: _138.MsgUpdateContractLabelResponseProtoMsg): _138.MsgUpdateContractLabelResponse;
                toProto(message: _138.MsgUpdateContractLabelResponse): Uint8Array;
                toProtoMsg(message: _138.MsgUpdateContractLabelResponse): _138.MsgUpdateContractLabelResponseProtoMsg;
            };
            QueryContractInfoRequest: {
                typeUrl: string;
                encode(message: _137.QueryContractInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.QueryContractInfoRequest;
                fromPartial(object: Partial<_137.QueryContractInfoRequest>): _137.QueryContractInfoRequest;
                fromAmino(object: _137.QueryContractInfoRequestAmino): _137.QueryContractInfoRequest;
                toAmino(message: _137.QueryContractInfoRequest): _137.QueryContractInfoRequestAmino;
                fromAminoMsg(object: _137.QueryContractInfoRequestAminoMsg): _137.QueryContractInfoRequest;
                toAminoMsg(message: _137.QueryContractInfoRequest): _137.QueryContractInfoRequestAminoMsg;
                fromProtoMsg(message: _137.QueryContractInfoRequestProtoMsg): _137.QueryContractInfoRequest;
                toProto(message: _137.QueryContractInfoRequest): Uint8Array;
                toProtoMsg(message: _137.QueryContractInfoRequest): _137.QueryContractInfoRequestProtoMsg;
            };
            QueryContractInfoResponse: {
                typeUrl: string;
                encode(message: _137.QueryContractInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.QueryContractInfoResponse;
                fromPartial(object: Partial<_137.QueryContractInfoResponse>): _137.QueryContractInfoResponse;
                fromAmino(object: _137.QueryContractInfoResponseAmino): _137.QueryContractInfoResponse;
                toAmino(message: _137.QueryContractInfoResponse): _137.QueryContractInfoResponseAmino;
                fromAminoMsg(object: _137.QueryContractInfoResponseAminoMsg): _137.QueryContractInfoResponse;
                toAminoMsg(message: _137.QueryContractInfoResponse): _137.QueryContractInfoResponseAminoMsg;
                fromProtoMsg(message: _137.QueryContractInfoResponseProtoMsg): _137.QueryContractInfoResponse;
                toProto(message: _137.QueryContractInfoResponse): Uint8Array;
                toProtoMsg(message: _137.QueryContractInfoResponse): _137.QueryContractInfoResponseProtoMsg;
            };
            QueryContractHistoryRequest: {
                typeUrl: string;
                encode(message: _137.QueryContractHistoryRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.QueryContractHistoryRequest;
                fromPartial(object: Partial<_137.QueryContractHistoryRequest>): _137.QueryContractHistoryRequest;
                fromAmino(object: _137.QueryContractHistoryRequestAmino): _137.QueryContractHistoryRequest;
                toAmino(message: _137.QueryContractHistoryRequest): _137.QueryContractHistoryRequestAmino;
                fromAminoMsg(object: _137.QueryContractHistoryRequestAminoMsg): _137.QueryContractHistoryRequest;
                toAminoMsg(message: _137.QueryContractHistoryRequest): _137.QueryContractHistoryRequestAminoMsg;
                fromProtoMsg(message: _137.QueryContractHistoryRequestProtoMsg): _137.QueryContractHistoryRequest;
                toProto(message: _137.QueryContractHistoryRequest): Uint8Array;
                toProtoMsg(message: _137.QueryContractHistoryRequest): _137.QueryContractHistoryRequestProtoMsg;
            };
            QueryContractHistoryResponse: {
                typeUrl: string;
                encode(message: _137.QueryContractHistoryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.QueryContractHistoryResponse;
                fromPartial(object: Partial<_137.QueryContractHistoryResponse>): _137.QueryContractHistoryResponse;
                fromAmino(object: _137.QueryContractHistoryResponseAmino): _137.QueryContractHistoryResponse;
                toAmino(message: _137.QueryContractHistoryResponse): _137.QueryContractHistoryResponseAmino;
                fromAminoMsg(object: _137.QueryContractHistoryResponseAminoMsg): _137.QueryContractHistoryResponse;
                toAminoMsg(message: _137.QueryContractHistoryResponse): _137.QueryContractHistoryResponseAminoMsg;
                fromProtoMsg(message: _137.QueryContractHistoryResponseProtoMsg): _137.QueryContractHistoryResponse;
                toProto(message: _137.QueryContractHistoryResponse): Uint8Array;
                toProtoMsg(message: _137.QueryContractHistoryResponse): _137.QueryContractHistoryResponseProtoMsg;
            };
            QueryContractsByCodeRequest: {
                typeUrl: string;
                encode(message: _137.QueryContractsByCodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.QueryContractsByCodeRequest;
                fromPartial(object: Partial<_137.QueryContractsByCodeRequest>): _137.QueryContractsByCodeRequest;
                fromAmino(object: _137.QueryContractsByCodeRequestAmino): _137.QueryContractsByCodeRequest;
                toAmino(message: _137.QueryContractsByCodeRequest): _137.QueryContractsByCodeRequestAmino;
                fromAminoMsg(object: _137.QueryContractsByCodeRequestAminoMsg): _137.QueryContractsByCodeRequest;
                toAminoMsg(message: _137.QueryContractsByCodeRequest): _137.QueryContractsByCodeRequestAminoMsg;
                fromProtoMsg(message: _137.QueryContractsByCodeRequestProtoMsg): _137.QueryContractsByCodeRequest;
                toProto(message: _137.QueryContractsByCodeRequest): Uint8Array;
                toProtoMsg(message: _137.QueryContractsByCodeRequest): _137.QueryContractsByCodeRequestProtoMsg;
            };
            QueryContractsByCodeResponse: {
                typeUrl: string;
                encode(message: _137.QueryContractsByCodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.QueryContractsByCodeResponse;
                fromPartial(object: Partial<_137.QueryContractsByCodeResponse>): _137.QueryContractsByCodeResponse;
                fromAmino(object: _137.QueryContractsByCodeResponseAmino): _137.QueryContractsByCodeResponse;
                toAmino(message: _137.QueryContractsByCodeResponse): _137.QueryContractsByCodeResponseAmino;
                fromAminoMsg(object: _137.QueryContractsByCodeResponseAminoMsg): _137.QueryContractsByCodeResponse;
                toAminoMsg(message: _137.QueryContractsByCodeResponse): _137.QueryContractsByCodeResponseAminoMsg;
                fromProtoMsg(message: _137.QueryContractsByCodeResponseProtoMsg): _137.QueryContractsByCodeResponse;
                toProto(message: _137.QueryContractsByCodeResponse): Uint8Array;
                toProtoMsg(message: _137.QueryContractsByCodeResponse): _137.QueryContractsByCodeResponseProtoMsg;
            };
            QueryAllContractStateRequest: {
                typeUrl: string;
                encode(message: _137.QueryAllContractStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.QueryAllContractStateRequest;
                fromPartial(object: Partial<_137.QueryAllContractStateRequest>): _137.QueryAllContractStateRequest;
                fromAmino(object: _137.QueryAllContractStateRequestAmino): _137.QueryAllContractStateRequest;
                toAmino(message: _137.QueryAllContractStateRequest): _137.QueryAllContractStateRequestAmino;
                fromAminoMsg(object: _137.QueryAllContractStateRequestAminoMsg): _137.QueryAllContractStateRequest;
                toAminoMsg(message: _137.QueryAllContractStateRequest): _137.QueryAllContractStateRequestAminoMsg;
                fromProtoMsg(message: _137.QueryAllContractStateRequestProtoMsg): _137.QueryAllContractStateRequest;
                toProto(message: _137.QueryAllContractStateRequest): Uint8Array;
                toProtoMsg(message: _137.QueryAllContractStateRequest): _137.QueryAllContractStateRequestProtoMsg;
            };
            QueryAllContractStateResponse: {
                typeUrl: string;
                encode(message: _137.QueryAllContractStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.QueryAllContractStateResponse;
                fromPartial(object: Partial<_137.QueryAllContractStateResponse>): _137.QueryAllContractStateResponse;
                fromAmino(object: _137.QueryAllContractStateResponseAmino): _137.QueryAllContractStateResponse;
                toAmino(message: _137.QueryAllContractStateResponse): _137.QueryAllContractStateResponseAmino;
                fromAminoMsg(object: _137.QueryAllContractStateResponseAminoMsg): _137.QueryAllContractStateResponse;
                toAminoMsg(message: _137.QueryAllContractStateResponse): _137.QueryAllContractStateResponseAminoMsg;
                fromProtoMsg(message: _137.QueryAllContractStateResponseProtoMsg): _137.QueryAllContractStateResponse;
                toProto(message: _137.QueryAllContractStateResponse): Uint8Array;
                toProtoMsg(message: _137.QueryAllContractStateResponse): _137.QueryAllContractStateResponseProtoMsg;
            };
            QueryRawContractStateRequest: {
                typeUrl: string;
                encode(message: _137.QueryRawContractStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.QueryRawContractStateRequest;
                fromPartial(object: Partial<_137.QueryRawContractStateRequest>): _137.QueryRawContractStateRequest;
                fromAmino(object: _137.QueryRawContractStateRequestAmino): _137.QueryRawContractStateRequest;
                toAmino(message: _137.QueryRawContractStateRequest): _137.QueryRawContractStateRequestAmino;
                fromAminoMsg(object: _137.QueryRawContractStateRequestAminoMsg): _137.QueryRawContractStateRequest;
                toAminoMsg(message: _137.QueryRawContractStateRequest): _137.QueryRawContractStateRequestAminoMsg;
                fromProtoMsg(message: _137.QueryRawContractStateRequestProtoMsg): _137.QueryRawContractStateRequest;
                toProto(message: _137.QueryRawContractStateRequest): Uint8Array;
                toProtoMsg(message: _137.QueryRawContractStateRequest): _137.QueryRawContractStateRequestProtoMsg;
            };
            QueryRawContractStateResponse: {
                typeUrl: string;
                encode(message: _137.QueryRawContractStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.QueryRawContractStateResponse;
                fromPartial(object: Partial<_137.QueryRawContractStateResponse>): _137.QueryRawContractStateResponse;
                fromAmino(object: _137.QueryRawContractStateResponseAmino): _137.QueryRawContractStateResponse;
                toAmino(message: _137.QueryRawContractStateResponse): _137.QueryRawContractStateResponseAmino;
                fromAminoMsg(object: _137.QueryRawContractStateResponseAminoMsg): _137.QueryRawContractStateResponse;
                toAminoMsg(message: _137.QueryRawContractStateResponse): _137.QueryRawContractStateResponseAminoMsg;
                fromProtoMsg(message: _137.QueryRawContractStateResponseProtoMsg): _137.QueryRawContractStateResponse;
                toProto(message: _137.QueryRawContractStateResponse): Uint8Array;
                toProtoMsg(message: _137.QueryRawContractStateResponse): _137.QueryRawContractStateResponseProtoMsg;
            };
            QuerySmartContractStateRequest: {
                typeUrl: string;
                encode(message: _137.QuerySmartContractStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.QuerySmartContractStateRequest;
                fromPartial(object: Partial<_137.QuerySmartContractStateRequest>): _137.QuerySmartContractStateRequest;
                fromAmino(object: _137.QuerySmartContractStateRequestAmino): _137.QuerySmartContractStateRequest;
                toAmino(message: _137.QuerySmartContractStateRequest): _137.QuerySmartContractStateRequestAmino;
                fromAminoMsg(object: _137.QuerySmartContractStateRequestAminoMsg): _137.QuerySmartContractStateRequest;
                toAminoMsg(message: _137.QuerySmartContractStateRequest): _137.QuerySmartContractStateRequestAminoMsg;
                fromProtoMsg(message: _137.QuerySmartContractStateRequestProtoMsg): _137.QuerySmartContractStateRequest;
                toProto(message: _137.QuerySmartContractStateRequest): Uint8Array;
                toProtoMsg(message: _137.QuerySmartContractStateRequest): _137.QuerySmartContractStateRequestProtoMsg;
            };
            QuerySmartContractStateResponse: {
                typeUrl: string;
                encode(message: _137.QuerySmartContractStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.QuerySmartContractStateResponse;
                fromPartial(object: Partial<_137.QuerySmartContractStateResponse>): _137.QuerySmartContractStateResponse;
                fromAmino(object: _137.QuerySmartContractStateResponseAmino): _137.QuerySmartContractStateResponse;
                toAmino(message: _137.QuerySmartContractStateResponse): _137.QuerySmartContractStateResponseAmino;
                fromAminoMsg(object: _137.QuerySmartContractStateResponseAminoMsg): _137.QuerySmartContractStateResponse;
                toAminoMsg(message: _137.QuerySmartContractStateResponse): _137.QuerySmartContractStateResponseAminoMsg;
                fromProtoMsg(message: _137.QuerySmartContractStateResponseProtoMsg): _137.QuerySmartContractStateResponse;
                toProto(message: _137.QuerySmartContractStateResponse): Uint8Array;
                toProtoMsg(message: _137.QuerySmartContractStateResponse): _137.QuerySmartContractStateResponseProtoMsg;
            };
            QueryCodeRequest: {
                typeUrl: string;
                encode(message: _137.QueryCodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.QueryCodeRequest;
                fromPartial(object: Partial<_137.QueryCodeRequest>): _137.QueryCodeRequest;
                fromAmino(object: _137.QueryCodeRequestAmino): _137.QueryCodeRequest;
                toAmino(message: _137.QueryCodeRequest): _137.QueryCodeRequestAmino;
                fromAminoMsg(object: _137.QueryCodeRequestAminoMsg): _137.QueryCodeRequest;
                toAminoMsg(message: _137.QueryCodeRequest): _137.QueryCodeRequestAminoMsg;
                fromProtoMsg(message: _137.QueryCodeRequestProtoMsg): _137.QueryCodeRequest;
                toProto(message: _137.QueryCodeRequest): Uint8Array;
                toProtoMsg(message: _137.QueryCodeRequest): _137.QueryCodeRequestProtoMsg;
            };
            QueryCodeInfoRequest: {
                typeUrl: string;
                encode(message: _137.QueryCodeInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.QueryCodeInfoRequest;
                fromPartial(object: Partial<_137.QueryCodeInfoRequest>): _137.QueryCodeInfoRequest;
                fromAmino(object: _137.QueryCodeInfoRequestAmino): _137.QueryCodeInfoRequest;
                toAmino(message: _137.QueryCodeInfoRequest): _137.QueryCodeInfoRequestAmino;
                fromAminoMsg(object: _137.QueryCodeInfoRequestAminoMsg): _137.QueryCodeInfoRequest;
                toAminoMsg(message: _137.QueryCodeInfoRequest): _137.QueryCodeInfoRequestAminoMsg;
                fromProtoMsg(message: _137.QueryCodeInfoRequestProtoMsg): _137.QueryCodeInfoRequest;
                toProto(message: _137.QueryCodeInfoRequest): Uint8Array;
                toProtoMsg(message: _137.QueryCodeInfoRequest): _137.QueryCodeInfoRequestProtoMsg;
            };
            QueryCodeInfoResponse: {
                typeUrl: string;
                encode(message: _137.QueryCodeInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.QueryCodeInfoResponse;
                fromPartial(object: Partial<_137.QueryCodeInfoResponse>): _137.QueryCodeInfoResponse;
                fromAmino(object: _137.QueryCodeInfoResponseAmino): _137.QueryCodeInfoResponse;
                toAmino(message: _137.QueryCodeInfoResponse): _137.QueryCodeInfoResponseAmino;
                fromAminoMsg(object: _137.QueryCodeInfoResponseAminoMsg): _137.QueryCodeInfoResponse;
                toAminoMsg(message: _137.QueryCodeInfoResponse): _137.QueryCodeInfoResponseAminoMsg;
                fromProtoMsg(message: _137.QueryCodeInfoResponseProtoMsg): _137.QueryCodeInfoResponse;
                toProto(message: _137.QueryCodeInfoResponse): Uint8Array;
                toProtoMsg(message: _137.QueryCodeInfoResponse): _137.QueryCodeInfoResponseProtoMsg;
            };
            CodeInfoResponse: {
                typeUrl: string;
                encode(message: _137.CodeInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.CodeInfoResponse;
                fromPartial(object: Partial<_137.CodeInfoResponse>): _137.CodeInfoResponse;
                fromAmino(object: _137.CodeInfoResponseAmino): _137.CodeInfoResponse;
                toAmino(message: _137.CodeInfoResponse): _137.CodeInfoResponseAmino;
                fromAminoMsg(object: _137.CodeInfoResponseAminoMsg): _137.CodeInfoResponse;
                toAminoMsg(message: _137.CodeInfoResponse): _137.CodeInfoResponseAminoMsg;
                fromProtoMsg(message: _137.CodeInfoResponseProtoMsg): _137.CodeInfoResponse;
                toProto(message: _137.CodeInfoResponse): Uint8Array;
                toProtoMsg(message: _137.CodeInfoResponse): _137.CodeInfoResponseProtoMsg;
            };
            QueryCodeResponse: {
                typeUrl: string;
                encode(message: _137.QueryCodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.QueryCodeResponse;
                fromPartial(object: Partial<_137.QueryCodeResponse>): _137.QueryCodeResponse;
                fromAmino(object: _137.QueryCodeResponseAmino): _137.QueryCodeResponse;
                toAmino(message: _137.QueryCodeResponse): _137.QueryCodeResponseAmino;
                fromAminoMsg(object: _137.QueryCodeResponseAminoMsg): _137.QueryCodeResponse;
                toAminoMsg(message: _137.QueryCodeResponse): _137.QueryCodeResponseAminoMsg;
                fromProtoMsg(message: _137.QueryCodeResponseProtoMsg): _137.QueryCodeResponse;
                toProto(message: _137.QueryCodeResponse): Uint8Array;
                toProtoMsg(message: _137.QueryCodeResponse): _137.QueryCodeResponseProtoMsg;
            };
            QueryCodesRequest: {
                typeUrl: string;
                encode(message: _137.QueryCodesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.QueryCodesRequest;
                fromPartial(object: Partial<_137.QueryCodesRequest>): _137.QueryCodesRequest;
                fromAmino(object: _137.QueryCodesRequestAmino): _137.QueryCodesRequest;
                toAmino(message: _137.QueryCodesRequest): _137.QueryCodesRequestAmino;
                fromAminoMsg(object: _137.QueryCodesRequestAminoMsg): _137.QueryCodesRequest;
                toAminoMsg(message: _137.QueryCodesRequest): _137.QueryCodesRequestAminoMsg;
                fromProtoMsg(message: _137.QueryCodesRequestProtoMsg): _137.QueryCodesRequest;
                toProto(message: _137.QueryCodesRequest): Uint8Array;
                toProtoMsg(message: _137.QueryCodesRequest): _137.QueryCodesRequestProtoMsg;
            };
            QueryCodesResponse: {
                typeUrl: string;
                encode(message: _137.QueryCodesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.QueryCodesResponse;
                fromPartial(object: Partial<_137.QueryCodesResponse>): _137.QueryCodesResponse;
                fromAmino(object: _137.QueryCodesResponseAmino): _137.QueryCodesResponse;
                toAmino(message: _137.QueryCodesResponse): _137.QueryCodesResponseAmino;
                fromAminoMsg(object: _137.QueryCodesResponseAminoMsg): _137.QueryCodesResponse;
                toAminoMsg(message: _137.QueryCodesResponse): _137.QueryCodesResponseAminoMsg;
                fromProtoMsg(message: _137.QueryCodesResponseProtoMsg): _137.QueryCodesResponse;
                toProto(message: _137.QueryCodesResponse): Uint8Array;
                toProtoMsg(message: _137.QueryCodesResponse): _137.QueryCodesResponseProtoMsg;
            };
            QueryPinnedCodesRequest: {
                typeUrl: string;
                encode(message: _137.QueryPinnedCodesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.QueryPinnedCodesRequest;
                fromPartial(object: Partial<_137.QueryPinnedCodesRequest>): _137.QueryPinnedCodesRequest;
                fromAmino(object: _137.QueryPinnedCodesRequestAmino): _137.QueryPinnedCodesRequest;
                toAmino(message: _137.QueryPinnedCodesRequest): _137.QueryPinnedCodesRequestAmino;
                fromAminoMsg(object: _137.QueryPinnedCodesRequestAminoMsg): _137.QueryPinnedCodesRequest;
                toAminoMsg(message: _137.QueryPinnedCodesRequest): _137.QueryPinnedCodesRequestAminoMsg;
                fromProtoMsg(message: _137.QueryPinnedCodesRequestProtoMsg): _137.QueryPinnedCodesRequest;
                toProto(message: _137.QueryPinnedCodesRequest): Uint8Array;
                toProtoMsg(message: _137.QueryPinnedCodesRequest): _137.QueryPinnedCodesRequestProtoMsg;
            };
            QueryPinnedCodesResponse: {
                typeUrl: string;
                encode(message: _137.QueryPinnedCodesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.QueryPinnedCodesResponse;
                fromPartial(object: Partial<_137.QueryPinnedCodesResponse>): _137.QueryPinnedCodesResponse;
                fromAmino(object: _137.QueryPinnedCodesResponseAmino): _137.QueryPinnedCodesResponse;
                toAmino(message: _137.QueryPinnedCodesResponse): _137.QueryPinnedCodesResponseAmino;
                fromAminoMsg(object: _137.QueryPinnedCodesResponseAminoMsg): _137.QueryPinnedCodesResponse;
                toAminoMsg(message: _137.QueryPinnedCodesResponse): _137.QueryPinnedCodesResponseAminoMsg;
                fromProtoMsg(message: _137.QueryPinnedCodesResponseProtoMsg): _137.QueryPinnedCodesResponse;
                toProto(message: _137.QueryPinnedCodesResponse): Uint8Array;
                toProtoMsg(message: _137.QueryPinnedCodesResponse): _137.QueryPinnedCodesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _137.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.QueryParamsRequest;
                fromPartial(_: Partial<_137.QueryParamsRequest>): _137.QueryParamsRequest;
                fromAmino(_: _137.QueryParamsRequestAmino): _137.QueryParamsRequest;
                toAmino(_: _137.QueryParamsRequest): _137.QueryParamsRequestAmino;
                fromAminoMsg(object: _137.QueryParamsRequestAminoMsg): _137.QueryParamsRequest;
                toAminoMsg(message: _137.QueryParamsRequest): _137.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _137.QueryParamsRequestProtoMsg): _137.QueryParamsRequest;
                toProto(message: _137.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _137.QueryParamsRequest): _137.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _137.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.QueryParamsResponse;
                fromPartial(object: Partial<_137.QueryParamsResponse>): _137.QueryParamsResponse;
                fromAmino(object: _137.QueryParamsResponseAmino): _137.QueryParamsResponse;
                toAmino(message: _137.QueryParamsResponse): _137.QueryParamsResponseAmino;
                fromAminoMsg(object: _137.QueryParamsResponseAminoMsg): _137.QueryParamsResponse;
                toAminoMsg(message: _137.QueryParamsResponse): _137.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _137.QueryParamsResponseProtoMsg): _137.QueryParamsResponse;
                toProto(message: _137.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _137.QueryParamsResponse): _137.QueryParamsResponseProtoMsg;
            };
            QueryContractsByCreatorRequest: {
                typeUrl: string;
                encode(message: _137.QueryContractsByCreatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.QueryContractsByCreatorRequest;
                fromPartial(object: Partial<_137.QueryContractsByCreatorRequest>): _137.QueryContractsByCreatorRequest;
                fromAmino(object: _137.QueryContractsByCreatorRequestAmino): _137.QueryContractsByCreatorRequest;
                toAmino(message: _137.QueryContractsByCreatorRequest): _137.QueryContractsByCreatorRequestAmino;
                fromAminoMsg(object: _137.QueryContractsByCreatorRequestAminoMsg): _137.QueryContractsByCreatorRequest;
                toAminoMsg(message: _137.QueryContractsByCreatorRequest): _137.QueryContractsByCreatorRequestAminoMsg;
                fromProtoMsg(message: _137.QueryContractsByCreatorRequestProtoMsg): _137.QueryContractsByCreatorRequest;
                toProto(message: _137.QueryContractsByCreatorRequest): Uint8Array;
                toProtoMsg(message: _137.QueryContractsByCreatorRequest): _137.QueryContractsByCreatorRequestProtoMsg;
            };
            QueryContractsByCreatorResponse: {
                typeUrl: string;
                encode(message: _137.QueryContractsByCreatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.QueryContractsByCreatorResponse;
                fromPartial(object: Partial<_137.QueryContractsByCreatorResponse>): _137.QueryContractsByCreatorResponse;
                fromAmino(object: _137.QueryContractsByCreatorResponseAmino): _137.QueryContractsByCreatorResponse;
                toAmino(message: _137.QueryContractsByCreatorResponse): _137.QueryContractsByCreatorResponseAmino;
                fromAminoMsg(object: _137.QueryContractsByCreatorResponseAminoMsg): _137.QueryContractsByCreatorResponse;
                toAminoMsg(message: _137.QueryContractsByCreatorResponse): _137.QueryContractsByCreatorResponseAminoMsg;
                fromProtoMsg(message: _137.QueryContractsByCreatorResponseProtoMsg): _137.QueryContractsByCreatorResponse;
                toProto(message: _137.QueryContractsByCreatorResponse): Uint8Array;
                toProtoMsg(message: _137.QueryContractsByCreatorResponse): _137.QueryContractsByCreatorResponseProtoMsg;
            };
            QueryWasmLimitsConfigRequest: {
                typeUrl: string;
                encode(_: _137.QueryWasmLimitsConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.QueryWasmLimitsConfigRequest;
                fromPartial(_: Partial<_137.QueryWasmLimitsConfigRequest>): _137.QueryWasmLimitsConfigRequest;
                fromAmino(_: _137.QueryWasmLimitsConfigRequestAmino): _137.QueryWasmLimitsConfigRequest;
                toAmino(_: _137.QueryWasmLimitsConfigRequest): _137.QueryWasmLimitsConfigRequestAmino;
                fromAminoMsg(object: _137.QueryWasmLimitsConfigRequestAminoMsg): _137.QueryWasmLimitsConfigRequest;
                toAminoMsg(message: _137.QueryWasmLimitsConfigRequest): _137.QueryWasmLimitsConfigRequestAminoMsg;
                fromProtoMsg(message: _137.QueryWasmLimitsConfigRequestProtoMsg): _137.QueryWasmLimitsConfigRequest;
                toProto(message: _137.QueryWasmLimitsConfigRequest): Uint8Array;
                toProtoMsg(message: _137.QueryWasmLimitsConfigRequest): _137.QueryWasmLimitsConfigRequestProtoMsg;
            };
            QueryWasmLimitsConfigResponse: {
                typeUrl: string;
                encode(message: _137.QueryWasmLimitsConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.QueryWasmLimitsConfigResponse;
                fromPartial(object: Partial<_137.QueryWasmLimitsConfigResponse>): _137.QueryWasmLimitsConfigResponse;
                fromAmino(object: _137.QueryWasmLimitsConfigResponseAmino): _137.QueryWasmLimitsConfigResponse;
                toAmino(message: _137.QueryWasmLimitsConfigResponse): _137.QueryWasmLimitsConfigResponseAmino;
                fromAminoMsg(object: _137.QueryWasmLimitsConfigResponseAminoMsg): _137.QueryWasmLimitsConfigResponse;
                toAminoMsg(message: _137.QueryWasmLimitsConfigResponse): _137.QueryWasmLimitsConfigResponseAminoMsg;
                fromProtoMsg(message: _137.QueryWasmLimitsConfigResponseProtoMsg): _137.QueryWasmLimitsConfigResponse;
                toProto(message: _137.QueryWasmLimitsConfigResponse): Uint8Array;
                toProtoMsg(message: _137.QueryWasmLimitsConfigResponse): _137.QueryWasmLimitsConfigResponseProtoMsg;
            };
            QueryBuildAddressRequest: {
                typeUrl: string;
                encode(message: _137.QueryBuildAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.QueryBuildAddressRequest;
                fromPartial(object: Partial<_137.QueryBuildAddressRequest>): _137.QueryBuildAddressRequest;
                fromAmino(object: _137.QueryBuildAddressRequestAmino): _137.QueryBuildAddressRequest;
                toAmino(message: _137.QueryBuildAddressRequest): _137.QueryBuildAddressRequestAmino;
                fromAminoMsg(object: _137.QueryBuildAddressRequestAminoMsg): _137.QueryBuildAddressRequest;
                toAminoMsg(message: _137.QueryBuildAddressRequest): _137.QueryBuildAddressRequestAminoMsg;
                fromProtoMsg(message: _137.QueryBuildAddressRequestProtoMsg): _137.QueryBuildAddressRequest;
                toProto(message: _137.QueryBuildAddressRequest): Uint8Array;
                toProtoMsg(message: _137.QueryBuildAddressRequest): _137.QueryBuildAddressRequestProtoMsg;
            };
            QueryBuildAddressResponse: {
                typeUrl: string;
                encode(message: _137.QueryBuildAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.QueryBuildAddressResponse;
                fromPartial(object: Partial<_137.QueryBuildAddressResponse>): _137.QueryBuildAddressResponse;
                fromAmino(object: _137.QueryBuildAddressResponseAmino): _137.QueryBuildAddressResponse;
                toAmino(message: _137.QueryBuildAddressResponse): _137.QueryBuildAddressResponseAmino;
                fromAminoMsg(object: _137.QueryBuildAddressResponseAminoMsg): _137.QueryBuildAddressResponse;
                toAminoMsg(message: _137.QueryBuildAddressResponse): _137.QueryBuildAddressResponseAminoMsg;
                fromProtoMsg(message: _137.QueryBuildAddressResponseProtoMsg): _137.QueryBuildAddressResponse;
                toProto(message: _137.QueryBuildAddressResponse): Uint8Array;
                toProtoMsg(message: _137.QueryBuildAddressResponse): _137.QueryBuildAddressResponseProtoMsg;
            };
            StoreCodeProposal: {
                typeUrl: string;
                encode(message: _136.StoreCodeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.StoreCodeProposal;
                fromPartial(object: Partial<_136.StoreCodeProposal>): _136.StoreCodeProposal;
                fromAmino(object: _136.StoreCodeProposalAmino): _136.StoreCodeProposal;
                toAmino(message: _136.StoreCodeProposal): _136.StoreCodeProposalAmino;
                fromAminoMsg(object: _136.StoreCodeProposalAminoMsg): _136.StoreCodeProposal;
                toAminoMsg(message: _136.StoreCodeProposal): _136.StoreCodeProposalAminoMsg;
                fromProtoMsg(message: _136.StoreCodeProposalProtoMsg): _136.StoreCodeProposal;
                toProto(message: _136.StoreCodeProposal): Uint8Array;
                toProtoMsg(message: _136.StoreCodeProposal): _136.StoreCodeProposalProtoMsg;
            };
            InstantiateContractProposal: {
                typeUrl: string;
                encode(message: _136.InstantiateContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.InstantiateContractProposal;
                fromPartial(object: Partial<_136.InstantiateContractProposal>): _136.InstantiateContractProposal;
                fromAmino(object: _136.InstantiateContractProposalAmino): _136.InstantiateContractProposal;
                toAmino(message: _136.InstantiateContractProposal): _136.InstantiateContractProposalAmino;
                fromAminoMsg(object: _136.InstantiateContractProposalAminoMsg): _136.InstantiateContractProposal;
                toAminoMsg(message: _136.InstantiateContractProposal): _136.InstantiateContractProposalAminoMsg;
                fromProtoMsg(message: _136.InstantiateContractProposalProtoMsg): _136.InstantiateContractProposal;
                toProto(message: _136.InstantiateContractProposal): Uint8Array;
                toProtoMsg(message: _136.InstantiateContractProposal): _136.InstantiateContractProposalProtoMsg;
            };
            InstantiateContract2Proposal: {
                typeUrl: string;
                encode(message: _136.InstantiateContract2Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.InstantiateContract2Proposal;
                fromPartial(object: Partial<_136.InstantiateContract2Proposal>): _136.InstantiateContract2Proposal;
                fromAmino(object: _136.InstantiateContract2ProposalAmino): _136.InstantiateContract2Proposal;
                toAmino(message: _136.InstantiateContract2Proposal): _136.InstantiateContract2ProposalAmino;
                fromAminoMsg(object: _136.InstantiateContract2ProposalAminoMsg): _136.InstantiateContract2Proposal;
                toAminoMsg(message: _136.InstantiateContract2Proposal): _136.InstantiateContract2ProposalAminoMsg;
                fromProtoMsg(message: _136.InstantiateContract2ProposalProtoMsg): _136.InstantiateContract2Proposal;
                toProto(message: _136.InstantiateContract2Proposal): Uint8Array;
                toProtoMsg(message: _136.InstantiateContract2Proposal): _136.InstantiateContract2ProposalProtoMsg;
            };
            MigrateContractProposal: {
                typeUrl: string;
                encode(message: _136.MigrateContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.MigrateContractProposal;
                fromPartial(object: Partial<_136.MigrateContractProposal>): _136.MigrateContractProposal;
                fromAmino(object: _136.MigrateContractProposalAmino): _136.MigrateContractProposal;
                toAmino(message: _136.MigrateContractProposal): _136.MigrateContractProposalAmino;
                fromAminoMsg(object: _136.MigrateContractProposalAminoMsg): _136.MigrateContractProposal;
                toAminoMsg(message: _136.MigrateContractProposal): _136.MigrateContractProposalAminoMsg;
                fromProtoMsg(message: _136.MigrateContractProposalProtoMsg): _136.MigrateContractProposal;
                toProto(message: _136.MigrateContractProposal): Uint8Array;
                toProtoMsg(message: _136.MigrateContractProposal): _136.MigrateContractProposalProtoMsg;
            };
            SudoContractProposal: {
                typeUrl: string;
                encode(message: _136.SudoContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.SudoContractProposal;
                fromPartial(object: Partial<_136.SudoContractProposal>): _136.SudoContractProposal;
                fromAmino(object: _136.SudoContractProposalAmino): _136.SudoContractProposal;
                toAmino(message: _136.SudoContractProposal): _136.SudoContractProposalAmino;
                fromAminoMsg(object: _136.SudoContractProposalAminoMsg): _136.SudoContractProposal;
                toAminoMsg(message: _136.SudoContractProposal): _136.SudoContractProposalAminoMsg;
                fromProtoMsg(message: _136.SudoContractProposalProtoMsg): _136.SudoContractProposal;
                toProto(message: _136.SudoContractProposal): Uint8Array;
                toProtoMsg(message: _136.SudoContractProposal): _136.SudoContractProposalProtoMsg;
            };
            ExecuteContractProposal: {
                typeUrl: string;
                encode(message: _136.ExecuteContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.ExecuteContractProposal;
                fromPartial(object: Partial<_136.ExecuteContractProposal>): _136.ExecuteContractProposal;
                fromAmino(object: _136.ExecuteContractProposalAmino): _136.ExecuteContractProposal;
                toAmino(message: _136.ExecuteContractProposal): _136.ExecuteContractProposalAmino;
                fromAminoMsg(object: _136.ExecuteContractProposalAminoMsg): _136.ExecuteContractProposal;
                toAminoMsg(message: _136.ExecuteContractProposal): _136.ExecuteContractProposalAminoMsg;
                fromProtoMsg(message: _136.ExecuteContractProposalProtoMsg): _136.ExecuteContractProposal;
                toProto(message: _136.ExecuteContractProposal): Uint8Array;
                toProtoMsg(message: _136.ExecuteContractProposal): _136.ExecuteContractProposalProtoMsg;
            };
            UpdateAdminProposal: {
                typeUrl: string;
                encode(message: _136.UpdateAdminProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.UpdateAdminProposal;
                fromPartial(object: Partial<_136.UpdateAdminProposal>): _136.UpdateAdminProposal;
                fromAmino(object: _136.UpdateAdminProposalAmino): _136.UpdateAdminProposal;
                toAmino(message: _136.UpdateAdminProposal): _136.UpdateAdminProposalAmino;
                fromAminoMsg(object: _136.UpdateAdminProposalAminoMsg): _136.UpdateAdminProposal;
                toAminoMsg(message: _136.UpdateAdminProposal): _136.UpdateAdminProposalAminoMsg;
                fromProtoMsg(message: _136.UpdateAdminProposalProtoMsg): _136.UpdateAdminProposal;
                toProto(message: _136.UpdateAdminProposal): Uint8Array;
                toProtoMsg(message: _136.UpdateAdminProposal): _136.UpdateAdminProposalProtoMsg;
            };
            ClearAdminProposal: {
                typeUrl: string;
                encode(message: _136.ClearAdminProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.ClearAdminProposal;
                fromPartial(object: Partial<_136.ClearAdminProposal>): _136.ClearAdminProposal;
                fromAmino(object: _136.ClearAdminProposalAmino): _136.ClearAdminProposal;
                toAmino(message: _136.ClearAdminProposal): _136.ClearAdminProposalAmino;
                fromAminoMsg(object: _136.ClearAdminProposalAminoMsg): _136.ClearAdminProposal;
                toAminoMsg(message: _136.ClearAdminProposal): _136.ClearAdminProposalAminoMsg;
                fromProtoMsg(message: _136.ClearAdminProposalProtoMsg): _136.ClearAdminProposal;
                toProto(message: _136.ClearAdminProposal): Uint8Array;
                toProtoMsg(message: _136.ClearAdminProposal): _136.ClearAdminProposalProtoMsg;
            };
            PinCodesProposal: {
                typeUrl: string;
                encode(message: _136.PinCodesProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.PinCodesProposal;
                fromPartial(object: Partial<_136.PinCodesProposal>): _136.PinCodesProposal;
                fromAmino(object: _136.PinCodesProposalAmino): _136.PinCodesProposal;
                toAmino(message: _136.PinCodesProposal): _136.PinCodesProposalAmino;
                fromAminoMsg(object: _136.PinCodesProposalAminoMsg): _136.PinCodesProposal;
                toAminoMsg(message: _136.PinCodesProposal): _136.PinCodesProposalAminoMsg;
                fromProtoMsg(message: _136.PinCodesProposalProtoMsg): _136.PinCodesProposal;
                toProto(message: _136.PinCodesProposal): Uint8Array;
                toProtoMsg(message: _136.PinCodesProposal): _136.PinCodesProposalProtoMsg;
            };
            UnpinCodesProposal: {
                typeUrl: string;
                encode(message: _136.UnpinCodesProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.UnpinCodesProposal;
                fromPartial(object: Partial<_136.UnpinCodesProposal>): _136.UnpinCodesProposal;
                fromAmino(object: _136.UnpinCodesProposalAmino): _136.UnpinCodesProposal;
                toAmino(message: _136.UnpinCodesProposal): _136.UnpinCodesProposalAmino;
                fromAminoMsg(object: _136.UnpinCodesProposalAminoMsg): _136.UnpinCodesProposal;
                toAminoMsg(message: _136.UnpinCodesProposal): _136.UnpinCodesProposalAminoMsg;
                fromProtoMsg(message: _136.UnpinCodesProposalProtoMsg): _136.UnpinCodesProposal;
                toProto(message: _136.UnpinCodesProposal): Uint8Array;
                toProtoMsg(message: _136.UnpinCodesProposal): _136.UnpinCodesProposalProtoMsg;
            };
            AccessConfigUpdate: {
                typeUrl: string;
                encode(message: _136.AccessConfigUpdate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.AccessConfigUpdate;
                fromPartial(object: Partial<_136.AccessConfigUpdate>): _136.AccessConfigUpdate;
                fromAmino(object: _136.AccessConfigUpdateAmino): _136.AccessConfigUpdate;
                toAmino(message: _136.AccessConfigUpdate): _136.AccessConfigUpdateAmino;
                fromAminoMsg(object: _136.AccessConfigUpdateAminoMsg): _136.AccessConfigUpdate;
                toAminoMsg(message: _136.AccessConfigUpdate): _136.AccessConfigUpdateAminoMsg;
                fromProtoMsg(message: _136.AccessConfigUpdateProtoMsg): _136.AccessConfigUpdate;
                toProto(message: _136.AccessConfigUpdate): Uint8Array;
                toProtoMsg(message: _136.AccessConfigUpdate): _136.AccessConfigUpdateProtoMsg;
            };
            UpdateInstantiateConfigProposal: {
                typeUrl: string;
                encode(message: _136.UpdateInstantiateConfigProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.UpdateInstantiateConfigProposal;
                fromPartial(object: Partial<_136.UpdateInstantiateConfigProposal>): _136.UpdateInstantiateConfigProposal;
                fromAmino(object: _136.UpdateInstantiateConfigProposalAmino): _136.UpdateInstantiateConfigProposal;
                toAmino(message: _136.UpdateInstantiateConfigProposal): _136.UpdateInstantiateConfigProposalAmino;
                fromAminoMsg(object: _136.UpdateInstantiateConfigProposalAminoMsg): _136.UpdateInstantiateConfigProposal;
                toAminoMsg(message: _136.UpdateInstantiateConfigProposal): _136.UpdateInstantiateConfigProposalAminoMsg;
                fromProtoMsg(message: _136.UpdateInstantiateConfigProposalProtoMsg): _136.UpdateInstantiateConfigProposal;
                toProto(message: _136.UpdateInstantiateConfigProposal): Uint8Array;
                toProtoMsg(message: _136.UpdateInstantiateConfigProposal): _136.UpdateInstantiateConfigProposalProtoMsg;
            };
            StoreAndInstantiateContractProposal: {
                typeUrl: string;
                encode(message: _136.StoreAndInstantiateContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.StoreAndInstantiateContractProposal;
                fromPartial(object: Partial<_136.StoreAndInstantiateContractProposal>): _136.StoreAndInstantiateContractProposal;
                fromAmino(object: _136.StoreAndInstantiateContractProposalAmino): _136.StoreAndInstantiateContractProposal;
                toAmino(message: _136.StoreAndInstantiateContractProposal): _136.StoreAndInstantiateContractProposalAmino;
                fromAminoMsg(object: _136.StoreAndInstantiateContractProposalAminoMsg): _136.StoreAndInstantiateContractProposal;
                toAminoMsg(message: _136.StoreAndInstantiateContractProposal): _136.StoreAndInstantiateContractProposalAminoMsg;
                fromProtoMsg(message: _136.StoreAndInstantiateContractProposalProtoMsg): _136.StoreAndInstantiateContractProposal;
                toProto(message: _136.StoreAndInstantiateContractProposal): Uint8Array;
                toProtoMsg(message: _136.StoreAndInstantiateContractProposal): _136.StoreAndInstantiateContractProposalProtoMsg;
            };
            MsgIBCSend: {
                typeUrl: string;
                encode(message: _135.MsgIBCSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _135.MsgIBCSend;
                fromPartial(object: Partial<_135.MsgIBCSend>): _135.MsgIBCSend;
                fromAmino(object: _135.MsgIBCSendAmino): _135.MsgIBCSend;
                toAmino(message: _135.MsgIBCSend): _135.MsgIBCSendAmino;
                fromAminoMsg(object: _135.MsgIBCSendAminoMsg): _135.MsgIBCSend;
                toAminoMsg(message: _135.MsgIBCSend): _135.MsgIBCSendAminoMsg;
                fromProtoMsg(message: _135.MsgIBCSendProtoMsg): _135.MsgIBCSend;
                toProto(message: _135.MsgIBCSend): Uint8Array;
                toProtoMsg(message: _135.MsgIBCSend): _135.MsgIBCSendProtoMsg;
            };
            MsgIBCSendResponse: {
                typeUrl: string;
                encode(message: _135.MsgIBCSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _135.MsgIBCSendResponse;
                fromPartial(object: Partial<_135.MsgIBCSendResponse>): _135.MsgIBCSendResponse;
                fromAmino(object: _135.MsgIBCSendResponseAmino): _135.MsgIBCSendResponse;
                toAmino(message: _135.MsgIBCSendResponse): _135.MsgIBCSendResponseAmino;
                fromAminoMsg(object: _135.MsgIBCSendResponseAminoMsg): _135.MsgIBCSendResponse;
                toAminoMsg(message: _135.MsgIBCSendResponse): _135.MsgIBCSendResponseAminoMsg;
                fromProtoMsg(message: _135.MsgIBCSendResponseProtoMsg): _135.MsgIBCSendResponse;
                toProto(message: _135.MsgIBCSendResponse): Uint8Array;
                toProtoMsg(message: _135.MsgIBCSendResponse): _135.MsgIBCSendResponseProtoMsg;
            };
            MsgIBCWriteAcknowledgementResponse: {
                typeUrl: string;
                encode(_: _135.MsgIBCWriteAcknowledgementResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _135.MsgIBCWriteAcknowledgementResponse;
                fromPartial(_: Partial<_135.MsgIBCWriteAcknowledgementResponse>): _135.MsgIBCWriteAcknowledgementResponse;
                fromAmino(_: _135.MsgIBCWriteAcknowledgementResponseAmino): _135.MsgIBCWriteAcknowledgementResponse;
                toAmino(_: _135.MsgIBCWriteAcknowledgementResponse): _135.MsgIBCWriteAcknowledgementResponseAmino;
                fromAminoMsg(object: _135.MsgIBCWriteAcknowledgementResponseAminoMsg): _135.MsgIBCWriteAcknowledgementResponse;
                toAminoMsg(message: _135.MsgIBCWriteAcknowledgementResponse): _135.MsgIBCWriteAcknowledgementResponseAminoMsg;
                fromProtoMsg(message: _135.MsgIBCWriteAcknowledgementResponseProtoMsg): _135.MsgIBCWriteAcknowledgementResponse;
                toProto(message: _135.MsgIBCWriteAcknowledgementResponse): Uint8Array;
                toProtoMsg(message: _135.MsgIBCWriteAcknowledgementResponse): _135.MsgIBCWriteAcknowledgementResponseProtoMsg;
            };
            MsgIBCCloseChannel: {
                typeUrl: string;
                encode(message: _135.MsgIBCCloseChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _135.MsgIBCCloseChannel;
                fromPartial(object: Partial<_135.MsgIBCCloseChannel>): _135.MsgIBCCloseChannel;
                fromAmino(object: _135.MsgIBCCloseChannelAmino): _135.MsgIBCCloseChannel;
                toAmino(message: _135.MsgIBCCloseChannel): _135.MsgIBCCloseChannelAmino;
                fromAminoMsg(object: _135.MsgIBCCloseChannelAminoMsg): _135.MsgIBCCloseChannel;
                toAminoMsg(message: _135.MsgIBCCloseChannel): _135.MsgIBCCloseChannelAminoMsg;
                fromProtoMsg(message: _135.MsgIBCCloseChannelProtoMsg): _135.MsgIBCCloseChannel;
                toProto(message: _135.MsgIBCCloseChannel): Uint8Array;
                toProtoMsg(message: _135.MsgIBCCloseChannel): _135.MsgIBCCloseChannelProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _134.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.GenesisState;
                fromPartial(object: Partial<_134.GenesisState>): _134.GenesisState;
                fromAmino(object: _134.GenesisStateAmino): _134.GenesisState;
                toAmino(message: _134.GenesisState): _134.GenesisStateAmino;
                fromAminoMsg(object: _134.GenesisStateAminoMsg): _134.GenesisState;
                toAminoMsg(message: _134.GenesisState): _134.GenesisStateAminoMsg;
                fromProtoMsg(message: _134.GenesisStateProtoMsg): _134.GenesisState;
                toProto(message: _134.GenesisState): Uint8Array;
                toProtoMsg(message: _134.GenesisState): _134.GenesisStateProtoMsg;
            };
            Code: {
                typeUrl: string;
                encode(message: _134.Code, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.Code;
                fromPartial(object: Partial<_134.Code>): _134.Code;
                fromAmino(object: _134.CodeAmino): _134.Code;
                toAmino(message: _134.Code): _134.CodeAmino;
                fromAminoMsg(object: _134.CodeAminoMsg): _134.Code;
                toAminoMsg(message: _134.Code): _134.CodeAminoMsg;
                fromProtoMsg(message: _134.CodeProtoMsg): _134.Code;
                toProto(message: _134.Code): Uint8Array;
                toProtoMsg(message: _134.Code): _134.CodeProtoMsg;
            };
            Contract: {
                typeUrl: string;
                encode(message: _134.Contract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.Contract;
                fromPartial(object: Partial<_134.Contract>): _134.Contract;
                fromAmino(object: _134.ContractAmino): _134.Contract;
                toAmino(message: _134.Contract): _134.ContractAmino;
                fromAminoMsg(object: _134.ContractAminoMsg): _134.Contract;
                toAminoMsg(message: _134.Contract): _134.ContractAminoMsg;
                fromProtoMsg(message: _134.ContractProtoMsg): _134.Contract;
                toProto(message: _134.Contract): Uint8Array;
                toProtoMsg(message: _134.Contract): _134.ContractProtoMsg;
            };
            Sequence: {
                typeUrl: string;
                encode(message: _134.Sequence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.Sequence;
                fromPartial(object: Partial<_134.Sequence>): _134.Sequence;
                fromAmino(object: _134.SequenceAmino): _134.Sequence;
                toAmino(message: _134.Sequence): _134.SequenceAmino;
                fromAminoMsg(object: _134.SequenceAminoMsg): _134.Sequence;
                toAminoMsg(message: _134.Sequence): _134.SequenceAminoMsg;
                fromProtoMsg(message: _134.SequenceProtoMsg): _134.Sequence;
                toProto(message: _134.Sequence): Uint8Array;
                toProtoMsg(message: _134.Sequence): _134.SequenceProtoMsg;
            };
            StoreCodeAuthorization: {
                typeUrl: string;
                encode(message: _133.StoreCodeAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.StoreCodeAuthorization;
                fromPartial(object: Partial<_133.StoreCodeAuthorization>): _133.StoreCodeAuthorization;
                fromAmino(object: _133.StoreCodeAuthorizationAmino): _133.StoreCodeAuthorization;
                toAmino(message: _133.StoreCodeAuthorization): _133.StoreCodeAuthorizationAmino;
                fromAminoMsg(object: _133.StoreCodeAuthorizationAminoMsg): _133.StoreCodeAuthorization;
                toAminoMsg(message: _133.StoreCodeAuthorization): _133.StoreCodeAuthorizationAminoMsg;
                fromProtoMsg(message: _133.StoreCodeAuthorizationProtoMsg): _133.StoreCodeAuthorization;
                toProto(message: _133.StoreCodeAuthorization): Uint8Array;
                toProtoMsg(message: _133.StoreCodeAuthorization): _133.StoreCodeAuthorizationProtoMsg;
            };
            ContractExecutionAuthorization: {
                typeUrl: string;
                encode(message: _133.ContractExecutionAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.ContractExecutionAuthorization;
                fromPartial(object: Partial<_133.ContractExecutionAuthorization>): _133.ContractExecutionAuthorization;
                fromAmino(object: _133.ContractExecutionAuthorizationAmino): _133.ContractExecutionAuthorization;
                toAmino(message: _133.ContractExecutionAuthorization): _133.ContractExecutionAuthorizationAmino;
                fromAminoMsg(object: _133.ContractExecutionAuthorizationAminoMsg): _133.ContractExecutionAuthorization;
                toAminoMsg(message: _133.ContractExecutionAuthorization): _133.ContractExecutionAuthorizationAminoMsg;
                fromProtoMsg(message: _133.ContractExecutionAuthorizationProtoMsg): _133.ContractExecutionAuthorization;
                toProto(message: _133.ContractExecutionAuthorization): Uint8Array;
                toProtoMsg(message: _133.ContractExecutionAuthorization): _133.ContractExecutionAuthorizationProtoMsg;
            };
            ContractMigrationAuthorization: {
                typeUrl: string;
                encode(message: _133.ContractMigrationAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.ContractMigrationAuthorization;
                fromPartial(object: Partial<_133.ContractMigrationAuthorization>): _133.ContractMigrationAuthorization;
                fromAmino(object: _133.ContractMigrationAuthorizationAmino): _133.ContractMigrationAuthorization;
                toAmino(message: _133.ContractMigrationAuthorization): _133.ContractMigrationAuthorizationAmino;
                fromAminoMsg(object: _133.ContractMigrationAuthorizationAminoMsg): _133.ContractMigrationAuthorization;
                toAminoMsg(message: _133.ContractMigrationAuthorization): _133.ContractMigrationAuthorizationAminoMsg;
                fromProtoMsg(message: _133.ContractMigrationAuthorizationProtoMsg): _133.ContractMigrationAuthorization;
                toProto(message: _133.ContractMigrationAuthorization): Uint8Array;
                toProtoMsg(message: _133.ContractMigrationAuthorization): _133.ContractMigrationAuthorizationProtoMsg;
            };
            CodeGrant: {
                typeUrl: string;
                encode(message: _133.CodeGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.CodeGrant;
                fromPartial(object: Partial<_133.CodeGrant>): _133.CodeGrant;
                fromAmino(object: _133.CodeGrantAmino): _133.CodeGrant;
                toAmino(message: _133.CodeGrant): _133.CodeGrantAmino;
                fromAminoMsg(object: _133.CodeGrantAminoMsg): _133.CodeGrant;
                toAminoMsg(message: _133.CodeGrant): _133.CodeGrantAminoMsg;
                fromProtoMsg(message: _133.CodeGrantProtoMsg): _133.CodeGrant;
                toProto(message: _133.CodeGrant): Uint8Array;
                toProtoMsg(message: _133.CodeGrant): _133.CodeGrantProtoMsg;
            };
            ContractGrant: {
                typeUrl: string;
                encode(message: _133.ContractGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.ContractGrant;
                fromPartial(object: Partial<_133.ContractGrant>): _133.ContractGrant;
                fromAmino(object: _133.ContractGrantAmino): _133.ContractGrant;
                toAmino(message: _133.ContractGrant): _133.ContractGrantAmino;
                fromAminoMsg(object: _133.ContractGrantAminoMsg): _133.ContractGrant;
                toAminoMsg(message: _133.ContractGrant): _133.ContractGrantAminoMsg;
                fromProtoMsg(message: _133.ContractGrantProtoMsg): _133.ContractGrant;
                toProto(message: _133.ContractGrant): Uint8Array;
                toProtoMsg(message: _133.ContractGrant): _133.ContractGrantProtoMsg;
            };
            MaxCallsLimit: {
                typeUrl: string;
                encode(message: _133.MaxCallsLimit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.MaxCallsLimit;
                fromPartial(object: Partial<_133.MaxCallsLimit>): _133.MaxCallsLimit;
                fromAmino(object: _133.MaxCallsLimitAmino): _133.MaxCallsLimit;
                toAmino(message: _133.MaxCallsLimit): _133.MaxCallsLimitAmino;
                fromAminoMsg(object: _133.MaxCallsLimitAminoMsg): _133.MaxCallsLimit;
                toAminoMsg(message: _133.MaxCallsLimit): _133.MaxCallsLimitAminoMsg;
                fromProtoMsg(message: _133.MaxCallsLimitProtoMsg): _133.MaxCallsLimit;
                toProto(message: _133.MaxCallsLimit): Uint8Array;
                toProtoMsg(message: _133.MaxCallsLimit): _133.MaxCallsLimitProtoMsg;
            };
            MaxFundsLimit: {
                typeUrl: string;
                encode(message: _133.MaxFundsLimit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.MaxFundsLimit;
                fromPartial(object: Partial<_133.MaxFundsLimit>): _133.MaxFundsLimit;
                fromAmino(object: _133.MaxFundsLimitAmino): _133.MaxFundsLimit;
                toAmino(message: _133.MaxFundsLimit): _133.MaxFundsLimitAmino;
                fromAminoMsg(object: _133.MaxFundsLimitAminoMsg): _133.MaxFundsLimit;
                toAminoMsg(message: _133.MaxFundsLimit): _133.MaxFundsLimitAminoMsg;
                fromProtoMsg(message: _133.MaxFundsLimitProtoMsg): _133.MaxFundsLimit;
                toProto(message: _133.MaxFundsLimit): Uint8Array;
                toProtoMsg(message: _133.MaxFundsLimit): _133.MaxFundsLimitProtoMsg;
            };
            CombinedLimit: {
                typeUrl: string;
                encode(message: _133.CombinedLimit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.CombinedLimit;
                fromPartial(object: Partial<_133.CombinedLimit>): _133.CombinedLimit;
                fromAmino(object: _133.CombinedLimitAmino): _133.CombinedLimit;
                toAmino(message: _133.CombinedLimit): _133.CombinedLimitAmino;
                fromAminoMsg(object: _133.CombinedLimitAminoMsg): _133.CombinedLimit;
                toAminoMsg(message: _133.CombinedLimit): _133.CombinedLimitAminoMsg;
                fromProtoMsg(message: _133.CombinedLimitProtoMsg): _133.CombinedLimit;
                toProto(message: _133.CombinedLimit): Uint8Array;
                toProtoMsg(message: _133.CombinedLimit): _133.CombinedLimitProtoMsg;
            };
            AllowAllMessagesFilter: {
                typeUrl: string;
                encode(_: _133.AllowAllMessagesFilter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.AllowAllMessagesFilter;
                fromPartial(_: Partial<_133.AllowAllMessagesFilter>): _133.AllowAllMessagesFilter;
                fromAmino(_: _133.AllowAllMessagesFilterAmino): _133.AllowAllMessagesFilter;
                toAmino(_: _133.AllowAllMessagesFilter): _133.AllowAllMessagesFilterAmino;
                fromAminoMsg(object: _133.AllowAllMessagesFilterAminoMsg): _133.AllowAllMessagesFilter;
                toAminoMsg(message: _133.AllowAllMessagesFilter): _133.AllowAllMessagesFilterAminoMsg;
                fromProtoMsg(message: _133.AllowAllMessagesFilterProtoMsg): _133.AllowAllMessagesFilter;
                toProto(message: _133.AllowAllMessagesFilter): Uint8Array;
                toProtoMsg(message: _133.AllowAllMessagesFilter): _133.AllowAllMessagesFilterProtoMsg;
            };
            AcceptedMessageKeysFilter: {
                typeUrl: string;
                encode(message: _133.AcceptedMessageKeysFilter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.AcceptedMessageKeysFilter;
                fromPartial(object: Partial<_133.AcceptedMessageKeysFilter>): _133.AcceptedMessageKeysFilter;
                fromAmino(object: _133.AcceptedMessageKeysFilterAmino): _133.AcceptedMessageKeysFilter;
                toAmino(message: _133.AcceptedMessageKeysFilter): _133.AcceptedMessageKeysFilterAmino;
                fromAminoMsg(object: _133.AcceptedMessageKeysFilterAminoMsg): _133.AcceptedMessageKeysFilter;
                toAminoMsg(message: _133.AcceptedMessageKeysFilter): _133.AcceptedMessageKeysFilterAminoMsg;
                fromProtoMsg(message: _133.AcceptedMessageKeysFilterProtoMsg): _133.AcceptedMessageKeysFilter;
                toProto(message: _133.AcceptedMessageKeysFilter): Uint8Array;
                toProtoMsg(message: _133.AcceptedMessageKeysFilter): _133.AcceptedMessageKeysFilterProtoMsg;
            };
            AcceptedMessagesFilter: {
                typeUrl: string;
                encode(message: _133.AcceptedMessagesFilter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.AcceptedMessagesFilter;
                fromPartial(object: Partial<_133.AcceptedMessagesFilter>): _133.AcceptedMessagesFilter;
                fromAmino(object: _133.AcceptedMessagesFilterAmino): _133.AcceptedMessagesFilter;
                toAmino(message: _133.AcceptedMessagesFilter): _133.AcceptedMessagesFilterAmino;
                fromAminoMsg(object: _133.AcceptedMessagesFilterAminoMsg): _133.AcceptedMessagesFilter;
                toAminoMsg(message: _133.AcceptedMessagesFilter): _133.AcceptedMessagesFilterAminoMsg;
                fromProtoMsg(message: _133.AcceptedMessagesFilterProtoMsg): _133.AcceptedMessagesFilter;
                toProto(message: _133.AcceptedMessagesFilter): Uint8Array;
                toProtoMsg(message: _133.AcceptedMessagesFilter): _133.AcceptedMessagesFilterProtoMsg;
            };
            Cosmwasm_wasmv1ContractAuthzLimitX_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _133.MaxCallsLimit | _133.MaxFundsLimit | _133.CombinedLimit;
            Cosmwasm_wasmv1ContractAuthzLimitX_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmwasm_wasmv1ContractAuthzLimitX_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Cosmwasm_wasmv1ContractAuthzFilterX_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _133.AllowAllMessagesFilter | _133.AcceptedMessageKeysFilter | _133.AcceptedMessagesFilter;
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
            cosmwasm: {
                wasm: {
                    v1: _360.MsgClientImpl;
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
            cosmwasm: {
                wasm: {
                    v1: {
                        contractInfo(request: _137.QueryContractInfoRequest): Promise<_137.QueryContractInfoResponse>;
                        contractHistory(request: _137.QueryContractHistoryRequest): Promise<_137.QueryContractHistoryResponse>;
                        contractsByCode(request: _137.QueryContractsByCodeRequest): Promise<_137.QueryContractsByCodeResponse>;
                        allContractState(request: _137.QueryAllContractStateRequest): Promise<_137.QueryAllContractStateResponse>;
                        rawContractState(request: _137.QueryRawContractStateRequest): Promise<_137.QueryRawContractStateResponse>;
                        smartContractState(request: _137.QuerySmartContractStateRequest): Promise<_137.QuerySmartContractStateResponse>;
                        code(request: _137.QueryCodeRequest): Promise<_137.QueryCodeResponse>;
                        codes(request?: _137.QueryCodesRequest): Promise<_137.QueryCodesResponse>;
                        codeInfo(request: _137.QueryCodeInfoRequest): Promise<_137.QueryCodeInfoResponse>;
                        pinnedCodes(request?: _137.QueryPinnedCodesRequest): Promise<_137.QueryPinnedCodesResponse>;
                        params(request?: _137.QueryParamsRequest): Promise<_137.QueryParamsResponse>;
                        contractsByCreator(request: _137.QueryContractsByCreatorRequest): Promise<_137.QueryContractsByCreatorResponse>;
                        wasmLimitsConfig(request?: _137.QueryWasmLimitsConfigRequest): Promise<_137.QueryWasmLimitsConfigResponse>;
                        buildAddress(request: _137.QueryBuildAddressRequest): Promise<_137.QueryBuildAddressResponse>;
                    };
                };
            };
        }>;
    };
}
