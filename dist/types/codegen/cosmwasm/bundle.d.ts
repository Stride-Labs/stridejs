import * as _134 from "./wasm/v1/authz";
import * as _135 from "./wasm/v1/genesis";
import * as _136 from "./wasm/v1/ibc";
import * as _137 from "./wasm/v1/proposal_legacy";
import * as _138 from "./wasm/v1/query";
import * as _139 from "./wasm/v1/tx";
import * as _140 from "./wasm/v1/types";
import * as _352 from "./wasm/v1/query.rpc.Query";
import * as _353 from "./wasm/v1/tx.rpc.msg";
export declare namespace cosmwasm {
    namespace wasm {
        const v1: {
            MsgClientImpl: typeof _353.MsgClientImpl;
            QueryClientImpl: typeof _352.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                contractInfo(request: _138.QueryContractInfoRequest): Promise<_138.QueryContractInfoResponse>;
                contractHistory(request: _138.QueryContractHistoryRequest): Promise<_138.QueryContractHistoryResponse>;
                contractsByCode(request: _138.QueryContractsByCodeRequest): Promise<_138.QueryContractsByCodeResponse>;
                allContractState(request: _138.QueryAllContractStateRequest): Promise<_138.QueryAllContractStateResponse>;
                rawContractState(request: _138.QueryRawContractStateRequest): Promise<_138.QueryRawContractStateResponse>;
                smartContractState(request: _138.QuerySmartContractStateRequest): Promise<_138.QuerySmartContractStateResponse>;
                code(request: _138.QueryCodeRequest): Promise<_138.QueryCodeResponse>;
                codes(request?: _138.QueryCodesRequest): Promise<_138.QueryCodesResponse>;
                codeInfo(request: _138.QueryCodeInfoRequest): Promise<_138.QueryCodeInfoResponse>;
                pinnedCodes(request?: _138.QueryPinnedCodesRequest): Promise<_138.QueryPinnedCodesResponse>;
                params(request?: _138.QueryParamsRequest): Promise<_138.QueryParamsResponse>;
                contractsByCreator(request: _138.QueryContractsByCreatorRequest): Promise<_138.QueryContractsByCreatorResponse>;
                wasmLimitsConfig(request?: _138.QueryWasmLimitsConfigRequest): Promise<_138.QueryWasmLimitsConfigResponse>;
                buildAddress(request: _138.QueryBuildAddressRequest): Promise<_138.QueryBuildAddressResponse>;
            };
            registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    storeCode(value: _139.MsgStoreCode): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract(value: _139.MsgInstantiateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract2(value: _139.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    executeContract(value: _139.MsgExecuteContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    migrateContract(value: _139.MsgMigrateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateAdmin(value: _139.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    clearAdmin(value: _139.MsgClearAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateInstantiateConfig(value: _139.MsgUpdateInstantiateConfig): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _139.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    sudoContract(value: _139.MsgSudoContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    pinCodes(value: _139.MsgPinCodes): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    unpinCodes(value: _139.MsgUnpinCodes): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    storeAndInstantiateContract(value: _139.MsgStoreAndInstantiateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    removeCodeUploadParamsAddresses(value: _139.MsgRemoveCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    addCodeUploadParamsAddresses(value: _139.MsgAddCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    storeAndMigrateContract(value: _139.MsgStoreAndMigrateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateContractLabel(value: _139.MsgUpdateContractLabel): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    storeCode(value: _139.MsgStoreCode): {
                        typeUrl: string;
                        value: _139.MsgStoreCode;
                    };
                    instantiateContract(value: _139.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _139.MsgInstantiateContract;
                    };
                    instantiateContract2(value: _139.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: _139.MsgInstantiateContract2;
                    };
                    executeContract(value: _139.MsgExecuteContract): {
                        typeUrl: string;
                        value: _139.MsgExecuteContract;
                    };
                    migrateContract(value: _139.MsgMigrateContract): {
                        typeUrl: string;
                        value: _139.MsgMigrateContract;
                    };
                    updateAdmin(value: _139.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _139.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _139.MsgClearAdmin): {
                        typeUrl: string;
                        value: _139.MsgClearAdmin;
                    };
                    updateInstantiateConfig(value: _139.MsgUpdateInstantiateConfig): {
                        typeUrl: string;
                        value: _139.MsgUpdateInstantiateConfig;
                    };
                    updateParams(value: _139.MsgUpdateParams): {
                        typeUrl: string;
                        value: _139.MsgUpdateParams;
                    };
                    sudoContract(value: _139.MsgSudoContract): {
                        typeUrl: string;
                        value: _139.MsgSudoContract;
                    };
                    pinCodes(value: _139.MsgPinCodes): {
                        typeUrl: string;
                        value: _139.MsgPinCodes;
                    };
                    unpinCodes(value: _139.MsgUnpinCodes): {
                        typeUrl: string;
                        value: _139.MsgUnpinCodes;
                    };
                    storeAndInstantiateContract(value: _139.MsgStoreAndInstantiateContract): {
                        typeUrl: string;
                        value: _139.MsgStoreAndInstantiateContract;
                    };
                    removeCodeUploadParamsAddresses(value: _139.MsgRemoveCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: _139.MsgRemoveCodeUploadParamsAddresses;
                    };
                    addCodeUploadParamsAddresses(value: _139.MsgAddCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: _139.MsgAddCodeUploadParamsAddresses;
                    };
                    storeAndMigrateContract(value: _139.MsgStoreAndMigrateContract): {
                        typeUrl: string;
                        value: _139.MsgStoreAndMigrateContract;
                    };
                    updateContractLabel(value: _139.MsgUpdateContractLabel): {
                        typeUrl: string;
                        value: _139.MsgUpdateContractLabel;
                    };
                };
                fromPartial: {
                    storeCode(value: _139.MsgStoreCode): {
                        typeUrl: string;
                        value: _139.MsgStoreCode;
                    };
                    instantiateContract(value: _139.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _139.MsgInstantiateContract;
                    };
                    instantiateContract2(value: _139.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: _139.MsgInstantiateContract2;
                    };
                    executeContract(value: _139.MsgExecuteContract): {
                        typeUrl: string;
                        value: _139.MsgExecuteContract;
                    };
                    migrateContract(value: _139.MsgMigrateContract): {
                        typeUrl: string;
                        value: _139.MsgMigrateContract;
                    };
                    updateAdmin(value: _139.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _139.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _139.MsgClearAdmin): {
                        typeUrl: string;
                        value: _139.MsgClearAdmin;
                    };
                    updateInstantiateConfig(value: _139.MsgUpdateInstantiateConfig): {
                        typeUrl: string;
                        value: _139.MsgUpdateInstantiateConfig;
                    };
                    updateParams(value: _139.MsgUpdateParams): {
                        typeUrl: string;
                        value: _139.MsgUpdateParams;
                    };
                    sudoContract(value: _139.MsgSudoContract): {
                        typeUrl: string;
                        value: _139.MsgSudoContract;
                    };
                    pinCodes(value: _139.MsgPinCodes): {
                        typeUrl: string;
                        value: _139.MsgPinCodes;
                    };
                    unpinCodes(value: _139.MsgUnpinCodes): {
                        typeUrl: string;
                        value: _139.MsgUnpinCodes;
                    };
                    storeAndInstantiateContract(value: _139.MsgStoreAndInstantiateContract): {
                        typeUrl: string;
                        value: _139.MsgStoreAndInstantiateContract;
                    };
                    removeCodeUploadParamsAddresses(value: _139.MsgRemoveCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: _139.MsgRemoveCodeUploadParamsAddresses;
                    };
                    addCodeUploadParamsAddresses(value: _139.MsgAddCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: _139.MsgAddCodeUploadParamsAddresses;
                    };
                    storeAndMigrateContract(value: _139.MsgStoreAndMigrateContract): {
                        typeUrl: string;
                        value: _139.MsgStoreAndMigrateContract;
                    };
                    updateContractLabel(value: _139.MsgUpdateContractLabel): {
                        typeUrl: string;
                        value: _139.MsgUpdateContractLabel;
                    };
                };
            };
            AminoConverter: {
                "/cosmwasm.wasm.v1.MsgStoreCode": {
                    aminoType: string;
                    toAmino: (message: _139.MsgStoreCode) => _139.MsgStoreCodeAmino;
                    fromAmino: (object: _139.MsgStoreCodeAmino) => _139.MsgStoreCode;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract": {
                    aminoType: string;
                    toAmino: (message: _139.MsgInstantiateContract) => _139.MsgInstantiateContractAmino;
                    fromAmino: (object: _139.MsgInstantiateContractAmino) => _139.MsgInstantiateContract;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract2": {
                    aminoType: string;
                    toAmino: (message: _139.MsgInstantiateContract2) => _139.MsgInstantiateContract2Amino;
                    fromAmino: (object: _139.MsgInstantiateContract2Amino) => _139.MsgInstantiateContract2;
                };
                "/cosmwasm.wasm.v1.MsgExecuteContract": {
                    aminoType: string;
                    toAmino: (message: _139.MsgExecuteContract) => _139.MsgExecuteContractAmino;
                    fromAmino: (object: _139.MsgExecuteContractAmino) => _139.MsgExecuteContract;
                };
                "/cosmwasm.wasm.v1.MsgMigrateContract": {
                    aminoType: string;
                    toAmino: (message: _139.MsgMigrateContract) => _139.MsgMigrateContractAmino;
                    fromAmino: (object: _139.MsgMigrateContractAmino) => _139.MsgMigrateContract;
                };
                "/cosmwasm.wasm.v1.MsgUpdateAdmin": {
                    aminoType: string;
                    toAmino: (message: _139.MsgUpdateAdmin) => _139.MsgUpdateAdminAmino;
                    fromAmino: (object: _139.MsgUpdateAdminAmino) => _139.MsgUpdateAdmin;
                };
                "/cosmwasm.wasm.v1.MsgClearAdmin": {
                    aminoType: string;
                    toAmino: (message: _139.MsgClearAdmin) => _139.MsgClearAdminAmino;
                    fromAmino: (object: _139.MsgClearAdminAmino) => _139.MsgClearAdmin;
                };
                "/cosmwasm.wasm.v1.MsgUpdateInstantiateConfig": {
                    aminoType: string;
                    toAmino: (message: _139.MsgUpdateInstantiateConfig) => _139.MsgUpdateInstantiateConfigAmino;
                    fromAmino: (object: _139.MsgUpdateInstantiateConfigAmino) => _139.MsgUpdateInstantiateConfig;
                };
                "/cosmwasm.wasm.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _139.MsgUpdateParams) => _139.MsgUpdateParamsAmino;
                    fromAmino: (object: _139.MsgUpdateParamsAmino) => _139.MsgUpdateParams;
                };
                "/cosmwasm.wasm.v1.MsgSudoContract": {
                    aminoType: string;
                    toAmino: (message: _139.MsgSudoContract) => _139.MsgSudoContractAmino;
                    fromAmino: (object: _139.MsgSudoContractAmino) => _139.MsgSudoContract;
                };
                "/cosmwasm.wasm.v1.MsgPinCodes": {
                    aminoType: string;
                    toAmino: (message: _139.MsgPinCodes) => _139.MsgPinCodesAmino;
                    fromAmino: (object: _139.MsgPinCodesAmino) => _139.MsgPinCodes;
                };
                "/cosmwasm.wasm.v1.MsgUnpinCodes": {
                    aminoType: string;
                    toAmino: (message: _139.MsgUnpinCodes) => _139.MsgUnpinCodesAmino;
                    fromAmino: (object: _139.MsgUnpinCodesAmino) => _139.MsgUnpinCodes;
                };
                "/cosmwasm.wasm.v1.MsgStoreAndInstantiateContract": {
                    aminoType: string;
                    toAmino: (message: _139.MsgStoreAndInstantiateContract) => _139.MsgStoreAndInstantiateContractAmino;
                    fromAmino: (object: _139.MsgStoreAndInstantiateContractAmino) => _139.MsgStoreAndInstantiateContract;
                };
                "/cosmwasm.wasm.v1.MsgRemoveCodeUploadParamsAddresses": {
                    aminoType: string;
                    toAmino: (message: _139.MsgRemoveCodeUploadParamsAddresses) => _139.MsgRemoveCodeUploadParamsAddressesAmino;
                    fromAmino: (object: _139.MsgRemoveCodeUploadParamsAddressesAmino) => _139.MsgRemoveCodeUploadParamsAddresses;
                };
                "/cosmwasm.wasm.v1.MsgAddCodeUploadParamsAddresses": {
                    aminoType: string;
                    toAmino: (message: _139.MsgAddCodeUploadParamsAddresses) => _139.MsgAddCodeUploadParamsAddressesAmino;
                    fromAmino: (object: _139.MsgAddCodeUploadParamsAddressesAmino) => _139.MsgAddCodeUploadParamsAddresses;
                };
                "/cosmwasm.wasm.v1.MsgStoreAndMigrateContract": {
                    aminoType: string;
                    toAmino: (message: _139.MsgStoreAndMigrateContract) => _139.MsgStoreAndMigrateContractAmino;
                    fromAmino: (object: _139.MsgStoreAndMigrateContractAmino) => _139.MsgStoreAndMigrateContract;
                };
                "/cosmwasm.wasm.v1.MsgUpdateContractLabel": {
                    aminoType: string;
                    toAmino: (message: _139.MsgUpdateContractLabel) => _139.MsgUpdateContractLabelAmino;
                    fromAmino: (object: _139.MsgUpdateContractLabelAmino) => _139.MsgUpdateContractLabel;
                };
            };
            accessTypeFromJSON(object: any): _140.AccessType;
            accessTypeToJSON(object: _140.AccessType): string;
            contractCodeHistoryOperationTypeFromJSON(object: any): _140.ContractCodeHistoryOperationType;
            contractCodeHistoryOperationTypeToJSON(object: _140.ContractCodeHistoryOperationType): string;
            AccessType: typeof _140.AccessType;
            AccessTypeSDKType: typeof _140.AccessType;
            AccessTypeAmino: typeof _140.AccessType;
            ContractCodeHistoryOperationType: typeof _140.ContractCodeHistoryOperationType;
            ContractCodeHistoryOperationTypeSDKType: typeof _140.ContractCodeHistoryOperationType;
            ContractCodeHistoryOperationTypeAmino: typeof _140.ContractCodeHistoryOperationType;
            AccessTypeParam: {
                typeUrl: string;
                encode(message: _140.AccessTypeParam, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.AccessTypeParam;
                fromPartial(object: Partial<_140.AccessTypeParam>): _140.AccessTypeParam;
                fromAmino(object: _140.AccessTypeParamAmino): _140.AccessTypeParam;
                toAmino(message: _140.AccessTypeParam): _140.AccessTypeParamAmino;
                fromAminoMsg(object: _140.AccessTypeParamAminoMsg): _140.AccessTypeParam;
                toAminoMsg(message: _140.AccessTypeParam): _140.AccessTypeParamAminoMsg;
                fromProtoMsg(message: _140.AccessTypeParamProtoMsg): _140.AccessTypeParam;
                toProto(message: _140.AccessTypeParam): Uint8Array;
                toProtoMsg(message: _140.AccessTypeParam): _140.AccessTypeParamProtoMsg;
            };
            AccessConfig: {
                typeUrl: string;
                encode(message: _140.AccessConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.AccessConfig;
                fromPartial(object: Partial<_140.AccessConfig>): _140.AccessConfig;
                fromAmino(object: _140.AccessConfigAmino): _140.AccessConfig;
                toAmino(message: _140.AccessConfig): _140.AccessConfigAmino;
                fromAminoMsg(object: _140.AccessConfigAminoMsg): _140.AccessConfig;
                toAminoMsg(message: _140.AccessConfig): _140.AccessConfigAminoMsg;
                fromProtoMsg(message: _140.AccessConfigProtoMsg): _140.AccessConfig;
                toProto(message: _140.AccessConfig): Uint8Array;
                toProtoMsg(message: _140.AccessConfig): _140.AccessConfigProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _140.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.Params;
                fromPartial(object: Partial<_140.Params>): _140.Params;
                fromAmino(object: _140.ParamsAmino): _140.Params;
                toAmino(message: _140.Params): _140.ParamsAmino;
                fromAminoMsg(object: _140.ParamsAminoMsg): _140.Params;
                toAminoMsg(message: _140.Params): _140.ParamsAminoMsg;
                fromProtoMsg(message: _140.ParamsProtoMsg): _140.Params;
                toProto(message: _140.Params): Uint8Array;
                toProtoMsg(message: _140.Params): _140.ParamsProtoMsg;
            };
            CodeInfo: {
                typeUrl: string;
                encode(message: _140.CodeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.CodeInfo;
                fromPartial(object: Partial<_140.CodeInfo>): _140.CodeInfo;
                fromAmino(object: _140.CodeInfoAmino): _140.CodeInfo;
                toAmino(message: _140.CodeInfo): _140.CodeInfoAmino;
                fromAminoMsg(object: _140.CodeInfoAminoMsg): _140.CodeInfo;
                toAminoMsg(message: _140.CodeInfo): _140.CodeInfoAminoMsg;
                fromProtoMsg(message: _140.CodeInfoProtoMsg): _140.CodeInfo;
                toProto(message: _140.CodeInfo): Uint8Array;
                toProtoMsg(message: _140.CodeInfo): _140.CodeInfoProtoMsg;
            };
            ContractInfo: {
                typeUrl: string;
                encode(message: _140.ContractInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.ContractInfo;
                fromPartial(object: Partial<_140.ContractInfo>): _140.ContractInfo;
                fromAmino(object: _140.ContractInfoAmino): _140.ContractInfo;
                toAmino(message: _140.ContractInfo): _140.ContractInfoAmino;
                fromAminoMsg(object: _140.ContractInfoAminoMsg): _140.ContractInfo;
                toAminoMsg(message: _140.ContractInfo): _140.ContractInfoAminoMsg;
                fromProtoMsg(message: _140.ContractInfoProtoMsg): _140.ContractInfo;
                toProto(message: _140.ContractInfo): Uint8Array;
                toProtoMsg(message: _140.ContractInfo): _140.ContractInfoProtoMsg;
            };
            ContractCodeHistoryEntry: {
                typeUrl: string;
                encode(message: _140.ContractCodeHistoryEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.ContractCodeHistoryEntry;
                fromPartial(object: Partial<_140.ContractCodeHistoryEntry>): _140.ContractCodeHistoryEntry;
                fromAmino(object: _140.ContractCodeHistoryEntryAmino): _140.ContractCodeHistoryEntry;
                toAmino(message: _140.ContractCodeHistoryEntry): _140.ContractCodeHistoryEntryAmino;
                fromAminoMsg(object: _140.ContractCodeHistoryEntryAminoMsg): _140.ContractCodeHistoryEntry;
                toAminoMsg(message: _140.ContractCodeHistoryEntry): _140.ContractCodeHistoryEntryAminoMsg;
                fromProtoMsg(message: _140.ContractCodeHistoryEntryProtoMsg): _140.ContractCodeHistoryEntry;
                toProto(message: _140.ContractCodeHistoryEntry): Uint8Array;
                toProtoMsg(message: _140.ContractCodeHistoryEntry): _140.ContractCodeHistoryEntryProtoMsg;
            };
            AbsoluteTxPosition: {
                typeUrl: string;
                encode(message: _140.AbsoluteTxPosition, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.AbsoluteTxPosition;
                fromPartial(object: Partial<_140.AbsoluteTxPosition>): _140.AbsoluteTxPosition;
                fromAmino(object: _140.AbsoluteTxPositionAmino): _140.AbsoluteTxPosition;
                toAmino(message: _140.AbsoluteTxPosition): _140.AbsoluteTxPositionAmino;
                fromAminoMsg(object: _140.AbsoluteTxPositionAminoMsg): _140.AbsoluteTxPosition;
                toAminoMsg(message: _140.AbsoluteTxPosition): _140.AbsoluteTxPositionAminoMsg;
                fromProtoMsg(message: _140.AbsoluteTxPositionProtoMsg): _140.AbsoluteTxPosition;
                toProto(message: _140.AbsoluteTxPosition): Uint8Array;
                toProtoMsg(message: _140.AbsoluteTxPosition): _140.AbsoluteTxPositionProtoMsg;
            };
            Model: {
                typeUrl: string;
                encode(message: _140.Model, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.Model;
                fromPartial(object: Partial<_140.Model>): _140.Model;
                fromAmino(object: _140.ModelAmino): _140.Model;
                toAmino(message: _140.Model): _140.ModelAmino;
                fromAminoMsg(object: _140.ModelAminoMsg): _140.Model;
                toAminoMsg(message: _140.Model): _140.ModelAminoMsg;
                fromProtoMsg(message: _140.ModelProtoMsg): _140.Model;
                toProto(message: _140.Model): Uint8Array;
                toProtoMsg(message: _140.Model): _140.ModelProtoMsg;
            };
            Cosmwasm_wasmv1ContractInfoExtension_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmwasm_wasmv1ContractInfoExtension_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmwasm_wasmv1ContractInfoExtension_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            MsgStoreCode: {
                typeUrl: string;
                encode(message: _139.MsgStoreCode, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.MsgStoreCode;
                fromPartial(object: Partial<_139.MsgStoreCode>): _139.MsgStoreCode;
                fromAmino(object: _139.MsgStoreCodeAmino): _139.MsgStoreCode;
                toAmino(message: _139.MsgStoreCode): _139.MsgStoreCodeAmino;
                fromAminoMsg(object: _139.MsgStoreCodeAminoMsg): _139.MsgStoreCode;
                toAminoMsg(message: _139.MsgStoreCode): _139.MsgStoreCodeAminoMsg;
                fromProtoMsg(message: _139.MsgStoreCodeProtoMsg): _139.MsgStoreCode;
                toProto(message: _139.MsgStoreCode): Uint8Array;
                toProtoMsg(message: _139.MsgStoreCode): _139.MsgStoreCodeProtoMsg;
            };
            MsgStoreCodeResponse: {
                typeUrl: string;
                encode(message: _139.MsgStoreCodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.MsgStoreCodeResponse;
                fromPartial(object: Partial<_139.MsgStoreCodeResponse>): _139.MsgStoreCodeResponse;
                fromAmino(object: _139.MsgStoreCodeResponseAmino): _139.MsgStoreCodeResponse;
                toAmino(message: _139.MsgStoreCodeResponse): _139.MsgStoreCodeResponseAmino;
                fromAminoMsg(object: _139.MsgStoreCodeResponseAminoMsg): _139.MsgStoreCodeResponse;
                toAminoMsg(message: _139.MsgStoreCodeResponse): _139.MsgStoreCodeResponseAminoMsg;
                fromProtoMsg(message: _139.MsgStoreCodeResponseProtoMsg): _139.MsgStoreCodeResponse;
                toProto(message: _139.MsgStoreCodeResponse): Uint8Array;
                toProtoMsg(message: _139.MsgStoreCodeResponse): _139.MsgStoreCodeResponseProtoMsg;
            };
            MsgInstantiateContract: {
                typeUrl: string;
                encode(message: _139.MsgInstantiateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.MsgInstantiateContract;
                fromPartial(object: Partial<_139.MsgInstantiateContract>): _139.MsgInstantiateContract;
                fromAmino(object: _139.MsgInstantiateContractAmino): _139.MsgInstantiateContract;
                toAmino(message: _139.MsgInstantiateContract): _139.MsgInstantiateContractAmino;
                fromAminoMsg(object: _139.MsgInstantiateContractAminoMsg): _139.MsgInstantiateContract;
                toAminoMsg(message: _139.MsgInstantiateContract): _139.MsgInstantiateContractAminoMsg;
                fromProtoMsg(message: _139.MsgInstantiateContractProtoMsg): _139.MsgInstantiateContract;
                toProto(message: _139.MsgInstantiateContract): Uint8Array;
                toProtoMsg(message: _139.MsgInstantiateContract): _139.MsgInstantiateContractProtoMsg;
            };
            MsgInstantiateContractResponse: {
                typeUrl: string;
                encode(message: _139.MsgInstantiateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.MsgInstantiateContractResponse;
                fromPartial(object: Partial<_139.MsgInstantiateContractResponse>): _139.MsgInstantiateContractResponse;
                fromAmino(object: _139.MsgInstantiateContractResponseAmino): _139.MsgInstantiateContractResponse;
                toAmino(message: _139.MsgInstantiateContractResponse): _139.MsgInstantiateContractResponseAmino;
                fromAminoMsg(object: _139.MsgInstantiateContractResponseAminoMsg): _139.MsgInstantiateContractResponse;
                toAminoMsg(message: _139.MsgInstantiateContractResponse): _139.MsgInstantiateContractResponseAminoMsg;
                fromProtoMsg(message: _139.MsgInstantiateContractResponseProtoMsg): _139.MsgInstantiateContractResponse;
                toProto(message: _139.MsgInstantiateContractResponse): Uint8Array;
                toProtoMsg(message: _139.MsgInstantiateContractResponse): _139.MsgInstantiateContractResponseProtoMsg;
            };
            MsgInstantiateContract2: {
                typeUrl: string;
                encode(message: _139.MsgInstantiateContract2, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.MsgInstantiateContract2;
                fromPartial(object: Partial<_139.MsgInstantiateContract2>): _139.MsgInstantiateContract2;
                fromAmino(object: _139.MsgInstantiateContract2Amino): _139.MsgInstantiateContract2;
                toAmino(message: _139.MsgInstantiateContract2): _139.MsgInstantiateContract2Amino;
                fromAminoMsg(object: _139.MsgInstantiateContract2AminoMsg): _139.MsgInstantiateContract2;
                toAminoMsg(message: _139.MsgInstantiateContract2): _139.MsgInstantiateContract2AminoMsg;
                fromProtoMsg(message: _139.MsgInstantiateContract2ProtoMsg): _139.MsgInstantiateContract2;
                toProto(message: _139.MsgInstantiateContract2): Uint8Array;
                toProtoMsg(message: _139.MsgInstantiateContract2): _139.MsgInstantiateContract2ProtoMsg;
            };
            MsgInstantiateContract2Response: {
                typeUrl: string;
                encode(message: _139.MsgInstantiateContract2Response, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.MsgInstantiateContract2Response;
                fromPartial(object: Partial<_139.MsgInstantiateContract2Response>): _139.MsgInstantiateContract2Response;
                fromAmino(object: _139.MsgInstantiateContract2ResponseAmino): _139.MsgInstantiateContract2Response;
                toAmino(message: _139.MsgInstantiateContract2Response): _139.MsgInstantiateContract2ResponseAmino;
                fromAminoMsg(object: _139.MsgInstantiateContract2ResponseAminoMsg): _139.MsgInstantiateContract2Response;
                toAminoMsg(message: _139.MsgInstantiateContract2Response): _139.MsgInstantiateContract2ResponseAminoMsg;
                fromProtoMsg(message: _139.MsgInstantiateContract2ResponseProtoMsg): _139.MsgInstantiateContract2Response;
                toProto(message: _139.MsgInstantiateContract2Response): Uint8Array;
                toProtoMsg(message: _139.MsgInstantiateContract2Response): _139.MsgInstantiateContract2ResponseProtoMsg;
            };
            MsgExecuteContract: {
                typeUrl: string;
                encode(message: _139.MsgExecuteContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.MsgExecuteContract;
                fromPartial(object: Partial<_139.MsgExecuteContract>): _139.MsgExecuteContract;
                fromAmino(object: _139.MsgExecuteContractAmino): _139.MsgExecuteContract;
                toAmino(message: _139.MsgExecuteContract): _139.MsgExecuteContractAmino;
                fromAminoMsg(object: _139.MsgExecuteContractAminoMsg): _139.MsgExecuteContract;
                toAminoMsg(message: _139.MsgExecuteContract): _139.MsgExecuteContractAminoMsg;
                fromProtoMsg(message: _139.MsgExecuteContractProtoMsg): _139.MsgExecuteContract;
                toProto(message: _139.MsgExecuteContract): Uint8Array;
                toProtoMsg(message: _139.MsgExecuteContract): _139.MsgExecuteContractProtoMsg;
            };
            MsgExecuteContractResponse: {
                typeUrl: string;
                encode(message: _139.MsgExecuteContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.MsgExecuteContractResponse;
                fromPartial(object: Partial<_139.MsgExecuteContractResponse>): _139.MsgExecuteContractResponse;
                fromAmino(object: _139.MsgExecuteContractResponseAmino): _139.MsgExecuteContractResponse;
                toAmino(message: _139.MsgExecuteContractResponse): _139.MsgExecuteContractResponseAmino;
                fromAminoMsg(object: _139.MsgExecuteContractResponseAminoMsg): _139.MsgExecuteContractResponse;
                toAminoMsg(message: _139.MsgExecuteContractResponse): _139.MsgExecuteContractResponseAminoMsg;
                fromProtoMsg(message: _139.MsgExecuteContractResponseProtoMsg): _139.MsgExecuteContractResponse;
                toProto(message: _139.MsgExecuteContractResponse): Uint8Array;
                toProtoMsg(message: _139.MsgExecuteContractResponse): _139.MsgExecuteContractResponseProtoMsg;
            };
            MsgMigrateContract: {
                typeUrl: string;
                encode(message: _139.MsgMigrateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.MsgMigrateContract;
                fromPartial(object: Partial<_139.MsgMigrateContract>): _139.MsgMigrateContract;
                fromAmino(object: _139.MsgMigrateContractAmino): _139.MsgMigrateContract;
                toAmino(message: _139.MsgMigrateContract): _139.MsgMigrateContractAmino;
                fromAminoMsg(object: _139.MsgMigrateContractAminoMsg): _139.MsgMigrateContract;
                toAminoMsg(message: _139.MsgMigrateContract): _139.MsgMigrateContractAminoMsg;
                fromProtoMsg(message: _139.MsgMigrateContractProtoMsg): _139.MsgMigrateContract;
                toProto(message: _139.MsgMigrateContract): Uint8Array;
                toProtoMsg(message: _139.MsgMigrateContract): _139.MsgMigrateContractProtoMsg;
            };
            MsgMigrateContractResponse: {
                typeUrl: string;
                encode(message: _139.MsgMigrateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.MsgMigrateContractResponse;
                fromPartial(object: Partial<_139.MsgMigrateContractResponse>): _139.MsgMigrateContractResponse;
                fromAmino(object: _139.MsgMigrateContractResponseAmino): _139.MsgMigrateContractResponse;
                toAmino(message: _139.MsgMigrateContractResponse): _139.MsgMigrateContractResponseAmino;
                fromAminoMsg(object: _139.MsgMigrateContractResponseAminoMsg): _139.MsgMigrateContractResponse;
                toAminoMsg(message: _139.MsgMigrateContractResponse): _139.MsgMigrateContractResponseAminoMsg;
                fromProtoMsg(message: _139.MsgMigrateContractResponseProtoMsg): _139.MsgMigrateContractResponse;
                toProto(message: _139.MsgMigrateContractResponse): Uint8Array;
                toProtoMsg(message: _139.MsgMigrateContractResponse): _139.MsgMigrateContractResponseProtoMsg;
            };
            MsgUpdateAdmin: {
                typeUrl: string;
                encode(message: _139.MsgUpdateAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.MsgUpdateAdmin;
                fromPartial(object: Partial<_139.MsgUpdateAdmin>): _139.MsgUpdateAdmin;
                fromAmino(object: _139.MsgUpdateAdminAmino): _139.MsgUpdateAdmin;
                toAmino(message: _139.MsgUpdateAdmin): _139.MsgUpdateAdminAmino;
                fromAminoMsg(object: _139.MsgUpdateAdminAminoMsg): _139.MsgUpdateAdmin;
                toAminoMsg(message: _139.MsgUpdateAdmin): _139.MsgUpdateAdminAminoMsg;
                fromProtoMsg(message: _139.MsgUpdateAdminProtoMsg): _139.MsgUpdateAdmin;
                toProto(message: _139.MsgUpdateAdmin): Uint8Array;
                toProtoMsg(message: _139.MsgUpdateAdmin): _139.MsgUpdateAdminProtoMsg;
            };
            MsgUpdateAdminResponse: {
                typeUrl: string;
                encode(_: _139.MsgUpdateAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.MsgUpdateAdminResponse;
                fromPartial(_: Partial<_139.MsgUpdateAdminResponse>): _139.MsgUpdateAdminResponse;
                fromAmino(_: _139.MsgUpdateAdminResponseAmino): _139.MsgUpdateAdminResponse;
                toAmino(_: _139.MsgUpdateAdminResponse): _139.MsgUpdateAdminResponseAmino;
                fromAminoMsg(object: _139.MsgUpdateAdminResponseAminoMsg): _139.MsgUpdateAdminResponse;
                toAminoMsg(message: _139.MsgUpdateAdminResponse): _139.MsgUpdateAdminResponseAminoMsg;
                fromProtoMsg(message: _139.MsgUpdateAdminResponseProtoMsg): _139.MsgUpdateAdminResponse;
                toProto(message: _139.MsgUpdateAdminResponse): Uint8Array;
                toProtoMsg(message: _139.MsgUpdateAdminResponse): _139.MsgUpdateAdminResponseProtoMsg;
            };
            MsgClearAdmin: {
                typeUrl: string;
                encode(message: _139.MsgClearAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.MsgClearAdmin;
                fromPartial(object: Partial<_139.MsgClearAdmin>): _139.MsgClearAdmin;
                fromAmino(object: _139.MsgClearAdminAmino): _139.MsgClearAdmin;
                toAmino(message: _139.MsgClearAdmin): _139.MsgClearAdminAmino;
                fromAminoMsg(object: _139.MsgClearAdminAminoMsg): _139.MsgClearAdmin;
                toAminoMsg(message: _139.MsgClearAdmin): _139.MsgClearAdminAminoMsg;
                fromProtoMsg(message: _139.MsgClearAdminProtoMsg): _139.MsgClearAdmin;
                toProto(message: _139.MsgClearAdmin): Uint8Array;
                toProtoMsg(message: _139.MsgClearAdmin): _139.MsgClearAdminProtoMsg;
            };
            MsgClearAdminResponse: {
                typeUrl: string;
                encode(_: _139.MsgClearAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.MsgClearAdminResponse;
                fromPartial(_: Partial<_139.MsgClearAdminResponse>): _139.MsgClearAdminResponse;
                fromAmino(_: _139.MsgClearAdminResponseAmino): _139.MsgClearAdminResponse;
                toAmino(_: _139.MsgClearAdminResponse): _139.MsgClearAdminResponseAmino;
                fromAminoMsg(object: _139.MsgClearAdminResponseAminoMsg): _139.MsgClearAdminResponse;
                toAminoMsg(message: _139.MsgClearAdminResponse): _139.MsgClearAdminResponseAminoMsg;
                fromProtoMsg(message: _139.MsgClearAdminResponseProtoMsg): _139.MsgClearAdminResponse;
                toProto(message: _139.MsgClearAdminResponse): Uint8Array;
                toProtoMsg(message: _139.MsgClearAdminResponse): _139.MsgClearAdminResponseProtoMsg;
            };
            MsgUpdateInstantiateConfig: {
                typeUrl: string;
                encode(message: _139.MsgUpdateInstantiateConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.MsgUpdateInstantiateConfig;
                fromPartial(object: Partial<_139.MsgUpdateInstantiateConfig>): _139.MsgUpdateInstantiateConfig;
                fromAmino(object: _139.MsgUpdateInstantiateConfigAmino): _139.MsgUpdateInstantiateConfig;
                toAmino(message: _139.MsgUpdateInstantiateConfig): _139.MsgUpdateInstantiateConfigAmino;
                fromAminoMsg(object: _139.MsgUpdateInstantiateConfigAminoMsg): _139.MsgUpdateInstantiateConfig;
                toAminoMsg(message: _139.MsgUpdateInstantiateConfig): _139.MsgUpdateInstantiateConfigAminoMsg;
                fromProtoMsg(message: _139.MsgUpdateInstantiateConfigProtoMsg): _139.MsgUpdateInstantiateConfig;
                toProto(message: _139.MsgUpdateInstantiateConfig): Uint8Array;
                toProtoMsg(message: _139.MsgUpdateInstantiateConfig): _139.MsgUpdateInstantiateConfigProtoMsg;
            };
            MsgUpdateInstantiateConfigResponse: {
                typeUrl: string;
                encode(_: _139.MsgUpdateInstantiateConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.MsgUpdateInstantiateConfigResponse;
                fromPartial(_: Partial<_139.MsgUpdateInstantiateConfigResponse>): _139.MsgUpdateInstantiateConfigResponse;
                fromAmino(_: _139.MsgUpdateInstantiateConfigResponseAmino): _139.MsgUpdateInstantiateConfigResponse;
                toAmino(_: _139.MsgUpdateInstantiateConfigResponse): _139.MsgUpdateInstantiateConfigResponseAmino;
                fromAminoMsg(object: _139.MsgUpdateInstantiateConfigResponseAminoMsg): _139.MsgUpdateInstantiateConfigResponse;
                toAminoMsg(message: _139.MsgUpdateInstantiateConfigResponse): _139.MsgUpdateInstantiateConfigResponseAminoMsg;
                fromProtoMsg(message: _139.MsgUpdateInstantiateConfigResponseProtoMsg): _139.MsgUpdateInstantiateConfigResponse;
                toProto(message: _139.MsgUpdateInstantiateConfigResponse): Uint8Array;
                toProtoMsg(message: _139.MsgUpdateInstantiateConfigResponse): _139.MsgUpdateInstantiateConfigResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _139.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.MsgUpdateParams;
                fromPartial(object: Partial<_139.MsgUpdateParams>): _139.MsgUpdateParams;
                fromAmino(object: _139.MsgUpdateParamsAmino): _139.MsgUpdateParams;
                toAmino(message: _139.MsgUpdateParams): _139.MsgUpdateParamsAmino;
                fromAminoMsg(object: _139.MsgUpdateParamsAminoMsg): _139.MsgUpdateParams;
                toAminoMsg(message: _139.MsgUpdateParams): _139.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _139.MsgUpdateParamsProtoMsg): _139.MsgUpdateParams;
                toProto(message: _139.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _139.MsgUpdateParams): _139.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _139.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_139.MsgUpdateParamsResponse>): _139.MsgUpdateParamsResponse;
                fromAmino(_: _139.MsgUpdateParamsResponseAmino): _139.MsgUpdateParamsResponse;
                toAmino(_: _139.MsgUpdateParamsResponse): _139.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _139.MsgUpdateParamsResponseAminoMsg): _139.MsgUpdateParamsResponse;
                toAminoMsg(message: _139.MsgUpdateParamsResponse): _139.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _139.MsgUpdateParamsResponseProtoMsg): _139.MsgUpdateParamsResponse;
                toProto(message: _139.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _139.MsgUpdateParamsResponse): _139.MsgUpdateParamsResponseProtoMsg;
            };
            MsgSudoContract: {
                typeUrl: string;
                encode(message: _139.MsgSudoContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.MsgSudoContract;
                fromPartial(object: Partial<_139.MsgSudoContract>): _139.MsgSudoContract;
                fromAmino(object: _139.MsgSudoContractAmino): _139.MsgSudoContract;
                toAmino(message: _139.MsgSudoContract): _139.MsgSudoContractAmino;
                fromAminoMsg(object: _139.MsgSudoContractAminoMsg): _139.MsgSudoContract;
                toAminoMsg(message: _139.MsgSudoContract): _139.MsgSudoContractAminoMsg;
                fromProtoMsg(message: _139.MsgSudoContractProtoMsg): _139.MsgSudoContract;
                toProto(message: _139.MsgSudoContract): Uint8Array;
                toProtoMsg(message: _139.MsgSudoContract): _139.MsgSudoContractProtoMsg;
            };
            MsgSudoContractResponse: {
                typeUrl: string;
                encode(message: _139.MsgSudoContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.MsgSudoContractResponse;
                fromPartial(object: Partial<_139.MsgSudoContractResponse>): _139.MsgSudoContractResponse;
                fromAmino(object: _139.MsgSudoContractResponseAmino): _139.MsgSudoContractResponse;
                toAmino(message: _139.MsgSudoContractResponse): _139.MsgSudoContractResponseAmino;
                fromAminoMsg(object: _139.MsgSudoContractResponseAminoMsg): _139.MsgSudoContractResponse;
                toAminoMsg(message: _139.MsgSudoContractResponse): _139.MsgSudoContractResponseAminoMsg;
                fromProtoMsg(message: _139.MsgSudoContractResponseProtoMsg): _139.MsgSudoContractResponse;
                toProto(message: _139.MsgSudoContractResponse): Uint8Array;
                toProtoMsg(message: _139.MsgSudoContractResponse): _139.MsgSudoContractResponseProtoMsg;
            };
            MsgPinCodes: {
                typeUrl: string;
                encode(message: _139.MsgPinCodes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.MsgPinCodes;
                fromPartial(object: Partial<_139.MsgPinCodes>): _139.MsgPinCodes;
                fromAmino(object: _139.MsgPinCodesAmino): _139.MsgPinCodes;
                toAmino(message: _139.MsgPinCodes): _139.MsgPinCodesAmino;
                fromAminoMsg(object: _139.MsgPinCodesAminoMsg): _139.MsgPinCodes;
                toAminoMsg(message: _139.MsgPinCodes): _139.MsgPinCodesAminoMsg;
                fromProtoMsg(message: _139.MsgPinCodesProtoMsg): _139.MsgPinCodes;
                toProto(message: _139.MsgPinCodes): Uint8Array;
                toProtoMsg(message: _139.MsgPinCodes): _139.MsgPinCodesProtoMsg;
            };
            MsgPinCodesResponse: {
                typeUrl: string;
                encode(_: _139.MsgPinCodesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.MsgPinCodesResponse;
                fromPartial(_: Partial<_139.MsgPinCodesResponse>): _139.MsgPinCodesResponse;
                fromAmino(_: _139.MsgPinCodesResponseAmino): _139.MsgPinCodesResponse;
                toAmino(_: _139.MsgPinCodesResponse): _139.MsgPinCodesResponseAmino;
                fromAminoMsg(object: _139.MsgPinCodesResponseAminoMsg): _139.MsgPinCodesResponse;
                toAminoMsg(message: _139.MsgPinCodesResponse): _139.MsgPinCodesResponseAminoMsg;
                fromProtoMsg(message: _139.MsgPinCodesResponseProtoMsg): _139.MsgPinCodesResponse;
                toProto(message: _139.MsgPinCodesResponse): Uint8Array;
                toProtoMsg(message: _139.MsgPinCodesResponse): _139.MsgPinCodesResponseProtoMsg;
            };
            MsgUnpinCodes: {
                typeUrl: string;
                encode(message: _139.MsgUnpinCodes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.MsgUnpinCodes;
                fromPartial(object: Partial<_139.MsgUnpinCodes>): _139.MsgUnpinCodes;
                fromAmino(object: _139.MsgUnpinCodesAmino): _139.MsgUnpinCodes;
                toAmino(message: _139.MsgUnpinCodes): _139.MsgUnpinCodesAmino;
                fromAminoMsg(object: _139.MsgUnpinCodesAminoMsg): _139.MsgUnpinCodes;
                toAminoMsg(message: _139.MsgUnpinCodes): _139.MsgUnpinCodesAminoMsg;
                fromProtoMsg(message: _139.MsgUnpinCodesProtoMsg): _139.MsgUnpinCodes;
                toProto(message: _139.MsgUnpinCodes): Uint8Array;
                toProtoMsg(message: _139.MsgUnpinCodes): _139.MsgUnpinCodesProtoMsg;
            };
            MsgUnpinCodesResponse: {
                typeUrl: string;
                encode(_: _139.MsgUnpinCodesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.MsgUnpinCodesResponse;
                fromPartial(_: Partial<_139.MsgUnpinCodesResponse>): _139.MsgUnpinCodesResponse;
                fromAmino(_: _139.MsgUnpinCodesResponseAmino): _139.MsgUnpinCodesResponse;
                toAmino(_: _139.MsgUnpinCodesResponse): _139.MsgUnpinCodesResponseAmino;
                fromAminoMsg(object: _139.MsgUnpinCodesResponseAminoMsg): _139.MsgUnpinCodesResponse;
                toAminoMsg(message: _139.MsgUnpinCodesResponse): _139.MsgUnpinCodesResponseAminoMsg;
                fromProtoMsg(message: _139.MsgUnpinCodesResponseProtoMsg): _139.MsgUnpinCodesResponse;
                toProto(message: _139.MsgUnpinCodesResponse): Uint8Array;
                toProtoMsg(message: _139.MsgUnpinCodesResponse): _139.MsgUnpinCodesResponseProtoMsg;
            };
            MsgStoreAndInstantiateContract: {
                typeUrl: string;
                encode(message: _139.MsgStoreAndInstantiateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.MsgStoreAndInstantiateContract;
                fromPartial(object: Partial<_139.MsgStoreAndInstantiateContract>): _139.MsgStoreAndInstantiateContract;
                fromAmino(object: _139.MsgStoreAndInstantiateContractAmino): _139.MsgStoreAndInstantiateContract;
                toAmino(message: _139.MsgStoreAndInstantiateContract): _139.MsgStoreAndInstantiateContractAmino;
                fromAminoMsg(object: _139.MsgStoreAndInstantiateContractAminoMsg): _139.MsgStoreAndInstantiateContract;
                toAminoMsg(message: _139.MsgStoreAndInstantiateContract): _139.MsgStoreAndInstantiateContractAminoMsg;
                fromProtoMsg(message: _139.MsgStoreAndInstantiateContractProtoMsg): _139.MsgStoreAndInstantiateContract;
                toProto(message: _139.MsgStoreAndInstantiateContract): Uint8Array;
                toProtoMsg(message: _139.MsgStoreAndInstantiateContract): _139.MsgStoreAndInstantiateContractProtoMsg;
            };
            MsgStoreAndInstantiateContractResponse: {
                typeUrl: string;
                encode(message: _139.MsgStoreAndInstantiateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.MsgStoreAndInstantiateContractResponse;
                fromPartial(object: Partial<_139.MsgStoreAndInstantiateContractResponse>): _139.MsgStoreAndInstantiateContractResponse;
                fromAmino(object: _139.MsgStoreAndInstantiateContractResponseAmino): _139.MsgStoreAndInstantiateContractResponse;
                toAmino(message: _139.MsgStoreAndInstantiateContractResponse): _139.MsgStoreAndInstantiateContractResponseAmino;
                fromAminoMsg(object: _139.MsgStoreAndInstantiateContractResponseAminoMsg): _139.MsgStoreAndInstantiateContractResponse;
                toAminoMsg(message: _139.MsgStoreAndInstantiateContractResponse): _139.MsgStoreAndInstantiateContractResponseAminoMsg;
                fromProtoMsg(message: _139.MsgStoreAndInstantiateContractResponseProtoMsg): _139.MsgStoreAndInstantiateContractResponse;
                toProto(message: _139.MsgStoreAndInstantiateContractResponse): Uint8Array;
                toProtoMsg(message: _139.MsgStoreAndInstantiateContractResponse): _139.MsgStoreAndInstantiateContractResponseProtoMsg;
            };
            MsgAddCodeUploadParamsAddresses: {
                typeUrl: string;
                encode(message: _139.MsgAddCodeUploadParamsAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.MsgAddCodeUploadParamsAddresses;
                fromPartial(object: Partial<_139.MsgAddCodeUploadParamsAddresses>): _139.MsgAddCodeUploadParamsAddresses;
                fromAmino(object: _139.MsgAddCodeUploadParamsAddressesAmino): _139.MsgAddCodeUploadParamsAddresses;
                toAmino(message: _139.MsgAddCodeUploadParamsAddresses): _139.MsgAddCodeUploadParamsAddressesAmino;
                fromAminoMsg(object: _139.MsgAddCodeUploadParamsAddressesAminoMsg): _139.MsgAddCodeUploadParamsAddresses;
                toAminoMsg(message: _139.MsgAddCodeUploadParamsAddresses): _139.MsgAddCodeUploadParamsAddressesAminoMsg;
                fromProtoMsg(message: _139.MsgAddCodeUploadParamsAddressesProtoMsg): _139.MsgAddCodeUploadParamsAddresses;
                toProto(message: _139.MsgAddCodeUploadParamsAddresses): Uint8Array;
                toProtoMsg(message: _139.MsgAddCodeUploadParamsAddresses): _139.MsgAddCodeUploadParamsAddressesProtoMsg;
            };
            MsgAddCodeUploadParamsAddressesResponse: {
                typeUrl: string;
                encode(_: _139.MsgAddCodeUploadParamsAddressesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.MsgAddCodeUploadParamsAddressesResponse;
                fromPartial(_: Partial<_139.MsgAddCodeUploadParamsAddressesResponse>): _139.MsgAddCodeUploadParamsAddressesResponse;
                fromAmino(_: _139.MsgAddCodeUploadParamsAddressesResponseAmino): _139.MsgAddCodeUploadParamsAddressesResponse;
                toAmino(_: _139.MsgAddCodeUploadParamsAddressesResponse): _139.MsgAddCodeUploadParamsAddressesResponseAmino;
                fromAminoMsg(object: _139.MsgAddCodeUploadParamsAddressesResponseAminoMsg): _139.MsgAddCodeUploadParamsAddressesResponse;
                toAminoMsg(message: _139.MsgAddCodeUploadParamsAddressesResponse): _139.MsgAddCodeUploadParamsAddressesResponseAminoMsg;
                fromProtoMsg(message: _139.MsgAddCodeUploadParamsAddressesResponseProtoMsg): _139.MsgAddCodeUploadParamsAddressesResponse;
                toProto(message: _139.MsgAddCodeUploadParamsAddressesResponse): Uint8Array;
                toProtoMsg(message: _139.MsgAddCodeUploadParamsAddressesResponse): _139.MsgAddCodeUploadParamsAddressesResponseProtoMsg;
            };
            MsgRemoveCodeUploadParamsAddresses: {
                typeUrl: string;
                encode(message: _139.MsgRemoveCodeUploadParamsAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.MsgRemoveCodeUploadParamsAddresses;
                fromPartial(object: Partial<_139.MsgRemoveCodeUploadParamsAddresses>): _139.MsgRemoveCodeUploadParamsAddresses;
                fromAmino(object: _139.MsgRemoveCodeUploadParamsAddressesAmino): _139.MsgRemoveCodeUploadParamsAddresses;
                toAmino(message: _139.MsgRemoveCodeUploadParamsAddresses): _139.MsgRemoveCodeUploadParamsAddressesAmino;
                fromAminoMsg(object: _139.MsgRemoveCodeUploadParamsAddressesAminoMsg): _139.MsgRemoveCodeUploadParamsAddresses;
                toAminoMsg(message: _139.MsgRemoveCodeUploadParamsAddresses): _139.MsgRemoveCodeUploadParamsAddressesAminoMsg;
                fromProtoMsg(message: _139.MsgRemoveCodeUploadParamsAddressesProtoMsg): _139.MsgRemoveCodeUploadParamsAddresses;
                toProto(message: _139.MsgRemoveCodeUploadParamsAddresses): Uint8Array;
                toProtoMsg(message: _139.MsgRemoveCodeUploadParamsAddresses): _139.MsgRemoveCodeUploadParamsAddressesProtoMsg;
            };
            MsgRemoveCodeUploadParamsAddressesResponse: {
                typeUrl: string;
                encode(_: _139.MsgRemoveCodeUploadParamsAddressesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.MsgRemoveCodeUploadParamsAddressesResponse;
                fromPartial(_: Partial<_139.MsgRemoveCodeUploadParamsAddressesResponse>): _139.MsgRemoveCodeUploadParamsAddressesResponse;
                fromAmino(_: _139.MsgRemoveCodeUploadParamsAddressesResponseAmino): _139.MsgRemoveCodeUploadParamsAddressesResponse;
                toAmino(_: _139.MsgRemoveCodeUploadParamsAddressesResponse): _139.MsgRemoveCodeUploadParamsAddressesResponseAmino;
                fromAminoMsg(object: _139.MsgRemoveCodeUploadParamsAddressesResponseAminoMsg): _139.MsgRemoveCodeUploadParamsAddressesResponse;
                toAminoMsg(message: _139.MsgRemoveCodeUploadParamsAddressesResponse): _139.MsgRemoveCodeUploadParamsAddressesResponseAminoMsg;
                fromProtoMsg(message: _139.MsgRemoveCodeUploadParamsAddressesResponseProtoMsg): _139.MsgRemoveCodeUploadParamsAddressesResponse;
                toProto(message: _139.MsgRemoveCodeUploadParamsAddressesResponse): Uint8Array;
                toProtoMsg(message: _139.MsgRemoveCodeUploadParamsAddressesResponse): _139.MsgRemoveCodeUploadParamsAddressesResponseProtoMsg;
            };
            MsgStoreAndMigrateContract: {
                typeUrl: string;
                encode(message: _139.MsgStoreAndMigrateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.MsgStoreAndMigrateContract;
                fromPartial(object: Partial<_139.MsgStoreAndMigrateContract>): _139.MsgStoreAndMigrateContract;
                fromAmino(object: _139.MsgStoreAndMigrateContractAmino): _139.MsgStoreAndMigrateContract;
                toAmino(message: _139.MsgStoreAndMigrateContract): _139.MsgStoreAndMigrateContractAmino;
                fromAminoMsg(object: _139.MsgStoreAndMigrateContractAminoMsg): _139.MsgStoreAndMigrateContract;
                toAminoMsg(message: _139.MsgStoreAndMigrateContract): _139.MsgStoreAndMigrateContractAminoMsg;
                fromProtoMsg(message: _139.MsgStoreAndMigrateContractProtoMsg): _139.MsgStoreAndMigrateContract;
                toProto(message: _139.MsgStoreAndMigrateContract): Uint8Array;
                toProtoMsg(message: _139.MsgStoreAndMigrateContract): _139.MsgStoreAndMigrateContractProtoMsg;
            };
            MsgStoreAndMigrateContractResponse: {
                typeUrl: string;
                encode(message: _139.MsgStoreAndMigrateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.MsgStoreAndMigrateContractResponse;
                fromPartial(object: Partial<_139.MsgStoreAndMigrateContractResponse>): _139.MsgStoreAndMigrateContractResponse;
                fromAmino(object: _139.MsgStoreAndMigrateContractResponseAmino): _139.MsgStoreAndMigrateContractResponse;
                toAmino(message: _139.MsgStoreAndMigrateContractResponse): _139.MsgStoreAndMigrateContractResponseAmino;
                fromAminoMsg(object: _139.MsgStoreAndMigrateContractResponseAminoMsg): _139.MsgStoreAndMigrateContractResponse;
                toAminoMsg(message: _139.MsgStoreAndMigrateContractResponse): _139.MsgStoreAndMigrateContractResponseAminoMsg;
                fromProtoMsg(message: _139.MsgStoreAndMigrateContractResponseProtoMsg): _139.MsgStoreAndMigrateContractResponse;
                toProto(message: _139.MsgStoreAndMigrateContractResponse): Uint8Array;
                toProtoMsg(message: _139.MsgStoreAndMigrateContractResponse): _139.MsgStoreAndMigrateContractResponseProtoMsg;
            };
            MsgUpdateContractLabel: {
                typeUrl: string;
                encode(message: _139.MsgUpdateContractLabel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.MsgUpdateContractLabel;
                fromPartial(object: Partial<_139.MsgUpdateContractLabel>): _139.MsgUpdateContractLabel;
                fromAmino(object: _139.MsgUpdateContractLabelAmino): _139.MsgUpdateContractLabel;
                toAmino(message: _139.MsgUpdateContractLabel): _139.MsgUpdateContractLabelAmino;
                fromAminoMsg(object: _139.MsgUpdateContractLabelAminoMsg): _139.MsgUpdateContractLabel;
                toAminoMsg(message: _139.MsgUpdateContractLabel): _139.MsgUpdateContractLabelAminoMsg;
                fromProtoMsg(message: _139.MsgUpdateContractLabelProtoMsg): _139.MsgUpdateContractLabel;
                toProto(message: _139.MsgUpdateContractLabel): Uint8Array;
                toProtoMsg(message: _139.MsgUpdateContractLabel): _139.MsgUpdateContractLabelProtoMsg;
            };
            MsgUpdateContractLabelResponse: {
                typeUrl: string;
                encode(_: _139.MsgUpdateContractLabelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.MsgUpdateContractLabelResponse;
                fromPartial(_: Partial<_139.MsgUpdateContractLabelResponse>): _139.MsgUpdateContractLabelResponse;
                fromAmino(_: _139.MsgUpdateContractLabelResponseAmino): _139.MsgUpdateContractLabelResponse;
                toAmino(_: _139.MsgUpdateContractLabelResponse): _139.MsgUpdateContractLabelResponseAmino;
                fromAminoMsg(object: _139.MsgUpdateContractLabelResponseAminoMsg): _139.MsgUpdateContractLabelResponse;
                toAminoMsg(message: _139.MsgUpdateContractLabelResponse): _139.MsgUpdateContractLabelResponseAminoMsg;
                fromProtoMsg(message: _139.MsgUpdateContractLabelResponseProtoMsg): _139.MsgUpdateContractLabelResponse;
                toProto(message: _139.MsgUpdateContractLabelResponse): Uint8Array;
                toProtoMsg(message: _139.MsgUpdateContractLabelResponse): _139.MsgUpdateContractLabelResponseProtoMsg;
            };
            QueryContractInfoRequest: {
                typeUrl: string;
                encode(message: _138.QueryContractInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.QueryContractInfoRequest;
                fromPartial(object: Partial<_138.QueryContractInfoRequest>): _138.QueryContractInfoRequest;
                fromAmino(object: _138.QueryContractInfoRequestAmino): _138.QueryContractInfoRequest;
                toAmino(message: _138.QueryContractInfoRequest): _138.QueryContractInfoRequestAmino;
                fromAminoMsg(object: _138.QueryContractInfoRequestAminoMsg): _138.QueryContractInfoRequest;
                toAminoMsg(message: _138.QueryContractInfoRequest): _138.QueryContractInfoRequestAminoMsg;
                fromProtoMsg(message: _138.QueryContractInfoRequestProtoMsg): _138.QueryContractInfoRequest;
                toProto(message: _138.QueryContractInfoRequest): Uint8Array;
                toProtoMsg(message: _138.QueryContractInfoRequest): _138.QueryContractInfoRequestProtoMsg;
            };
            QueryContractInfoResponse: {
                typeUrl: string;
                encode(message: _138.QueryContractInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.QueryContractInfoResponse;
                fromPartial(object: Partial<_138.QueryContractInfoResponse>): _138.QueryContractInfoResponse;
                fromAmino(object: _138.QueryContractInfoResponseAmino): _138.QueryContractInfoResponse;
                toAmino(message: _138.QueryContractInfoResponse): _138.QueryContractInfoResponseAmino;
                fromAminoMsg(object: _138.QueryContractInfoResponseAminoMsg): _138.QueryContractInfoResponse;
                toAminoMsg(message: _138.QueryContractInfoResponse): _138.QueryContractInfoResponseAminoMsg;
                fromProtoMsg(message: _138.QueryContractInfoResponseProtoMsg): _138.QueryContractInfoResponse;
                toProto(message: _138.QueryContractInfoResponse): Uint8Array;
                toProtoMsg(message: _138.QueryContractInfoResponse): _138.QueryContractInfoResponseProtoMsg;
            };
            QueryContractHistoryRequest: {
                typeUrl: string;
                encode(message: _138.QueryContractHistoryRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.QueryContractHistoryRequest;
                fromPartial(object: Partial<_138.QueryContractHistoryRequest>): _138.QueryContractHistoryRequest;
                fromAmino(object: _138.QueryContractHistoryRequestAmino): _138.QueryContractHistoryRequest;
                toAmino(message: _138.QueryContractHistoryRequest): _138.QueryContractHistoryRequestAmino;
                fromAminoMsg(object: _138.QueryContractHistoryRequestAminoMsg): _138.QueryContractHistoryRequest;
                toAminoMsg(message: _138.QueryContractHistoryRequest): _138.QueryContractHistoryRequestAminoMsg;
                fromProtoMsg(message: _138.QueryContractHistoryRequestProtoMsg): _138.QueryContractHistoryRequest;
                toProto(message: _138.QueryContractHistoryRequest): Uint8Array;
                toProtoMsg(message: _138.QueryContractHistoryRequest): _138.QueryContractHistoryRequestProtoMsg;
            };
            QueryContractHistoryResponse: {
                typeUrl: string;
                encode(message: _138.QueryContractHistoryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.QueryContractHistoryResponse;
                fromPartial(object: Partial<_138.QueryContractHistoryResponse>): _138.QueryContractHistoryResponse;
                fromAmino(object: _138.QueryContractHistoryResponseAmino): _138.QueryContractHistoryResponse;
                toAmino(message: _138.QueryContractHistoryResponse): _138.QueryContractHistoryResponseAmino;
                fromAminoMsg(object: _138.QueryContractHistoryResponseAminoMsg): _138.QueryContractHistoryResponse;
                toAminoMsg(message: _138.QueryContractHistoryResponse): _138.QueryContractHistoryResponseAminoMsg;
                fromProtoMsg(message: _138.QueryContractHistoryResponseProtoMsg): _138.QueryContractHistoryResponse;
                toProto(message: _138.QueryContractHistoryResponse): Uint8Array;
                toProtoMsg(message: _138.QueryContractHistoryResponse): _138.QueryContractHistoryResponseProtoMsg;
            };
            QueryContractsByCodeRequest: {
                typeUrl: string;
                encode(message: _138.QueryContractsByCodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.QueryContractsByCodeRequest;
                fromPartial(object: Partial<_138.QueryContractsByCodeRequest>): _138.QueryContractsByCodeRequest;
                fromAmino(object: _138.QueryContractsByCodeRequestAmino): _138.QueryContractsByCodeRequest;
                toAmino(message: _138.QueryContractsByCodeRequest): _138.QueryContractsByCodeRequestAmino;
                fromAminoMsg(object: _138.QueryContractsByCodeRequestAminoMsg): _138.QueryContractsByCodeRequest;
                toAminoMsg(message: _138.QueryContractsByCodeRequest): _138.QueryContractsByCodeRequestAminoMsg;
                fromProtoMsg(message: _138.QueryContractsByCodeRequestProtoMsg): _138.QueryContractsByCodeRequest;
                toProto(message: _138.QueryContractsByCodeRequest): Uint8Array;
                toProtoMsg(message: _138.QueryContractsByCodeRequest): _138.QueryContractsByCodeRequestProtoMsg;
            };
            QueryContractsByCodeResponse: {
                typeUrl: string;
                encode(message: _138.QueryContractsByCodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.QueryContractsByCodeResponse;
                fromPartial(object: Partial<_138.QueryContractsByCodeResponse>): _138.QueryContractsByCodeResponse;
                fromAmino(object: _138.QueryContractsByCodeResponseAmino): _138.QueryContractsByCodeResponse;
                toAmino(message: _138.QueryContractsByCodeResponse): _138.QueryContractsByCodeResponseAmino;
                fromAminoMsg(object: _138.QueryContractsByCodeResponseAminoMsg): _138.QueryContractsByCodeResponse;
                toAminoMsg(message: _138.QueryContractsByCodeResponse): _138.QueryContractsByCodeResponseAminoMsg;
                fromProtoMsg(message: _138.QueryContractsByCodeResponseProtoMsg): _138.QueryContractsByCodeResponse;
                toProto(message: _138.QueryContractsByCodeResponse): Uint8Array;
                toProtoMsg(message: _138.QueryContractsByCodeResponse): _138.QueryContractsByCodeResponseProtoMsg;
            };
            QueryAllContractStateRequest: {
                typeUrl: string;
                encode(message: _138.QueryAllContractStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.QueryAllContractStateRequest;
                fromPartial(object: Partial<_138.QueryAllContractStateRequest>): _138.QueryAllContractStateRequest;
                fromAmino(object: _138.QueryAllContractStateRequestAmino): _138.QueryAllContractStateRequest;
                toAmino(message: _138.QueryAllContractStateRequest): _138.QueryAllContractStateRequestAmino;
                fromAminoMsg(object: _138.QueryAllContractStateRequestAminoMsg): _138.QueryAllContractStateRequest;
                toAminoMsg(message: _138.QueryAllContractStateRequest): _138.QueryAllContractStateRequestAminoMsg;
                fromProtoMsg(message: _138.QueryAllContractStateRequestProtoMsg): _138.QueryAllContractStateRequest;
                toProto(message: _138.QueryAllContractStateRequest): Uint8Array;
                toProtoMsg(message: _138.QueryAllContractStateRequest): _138.QueryAllContractStateRequestProtoMsg;
            };
            QueryAllContractStateResponse: {
                typeUrl: string;
                encode(message: _138.QueryAllContractStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.QueryAllContractStateResponse;
                fromPartial(object: Partial<_138.QueryAllContractStateResponse>): _138.QueryAllContractStateResponse;
                fromAmino(object: _138.QueryAllContractStateResponseAmino): _138.QueryAllContractStateResponse;
                toAmino(message: _138.QueryAllContractStateResponse): _138.QueryAllContractStateResponseAmino;
                fromAminoMsg(object: _138.QueryAllContractStateResponseAminoMsg): _138.QueryAllContractStateResponse;
                toAminoMsg(message: _138.QueryAllContractStateResponse): _138.QueryAllContractStateResponseAminoMsg;
                fromProtoMsg(message: _138.QueryAllContractStateResponseProtoMsg): _138.QueryAllContractStateResponse;
                toProto(message: _138.QueryAllContractStateResponse): Uint8Array;
                toProtoMsg(message: _138.QueryAllContractStateResponse): _138.QueryAllContractStateResponseProtoMsg;
            };
            QueryRawContractStateRequest: {
                typeUrl: string;
                encode(message: _138.QueryRawContractStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.QueryRawContractStateRequest;
                fromPartial(object: Partial<_138.QueryRawContractStateRequest>): _138.QueryRawContractStateRequest;
                fromAmino(object: _138.QueryRawContractStateRequestAmino): _138.QueryRawContractStateRequest;
                toAmino(message: _138.QueryRawContractStateRequest): _138.QueryRawContractStateRequestAmino;
                fromAminoMsg(object: _138.QueryRawContractStateRequestAminoMsg): _138.QueryRawContractStateRequest;
                toAminoMsg(message: _138.QueryRawContractStateRequest): _138.QueryRawContractStateRequestAminoMsg;
                fromProtoMsg(message: _138.QueryRawContractStateRequestProtoMsg): _138.QueryRawContractStateRequest;
                toProto(message: _138.QueryRawContractStateRequest): Uint8Array;
                toProtoMsg(message: _138.QueryRawContractStateRequest): _138.QueryRawContractStateRequestProtoMsg;
            };
            QueryRawContractStateResponse: {
                typeUrl: string;
                encode(message: _138.QueryRawContractStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.QueryRawContractStateResponse;
                fromPartial(object: Partial<_138.QueryRawContractStateResponse>): _138.QueryRawContractStateResponse;
                fromAmino(object: _138.QueryRawContractStateResponseAmino): _138.QueryRawContractStateResponse;
                toAmino(message: _138.QueryRawContractStateResponse): _138.QueryRawContractStateResponseAmino;
                fromAminoMsg(object: _138.QueryRawContractStateResponseAminoMsg): _138.QueryRawContractStateResponse;
                toAminoMsg(message: _138.QueryRawContractStateResponse): _138.QueryRawContractStateResponseAminoMsg;
                fromProtoMsg(message: _138.QueryRawContractStateResponseProtoMsg): _138.QueryRawContractStateResponse;
                toProto(message: _138.QueryRawContractStateResponse): Uint8Array;
                toProtoMsg(message: _138.QueryRawContractStateResponse): _138.QueryRawContractStateResponseProtoMsg;
            };
            QuerySmartContractStateRequest: {
                typeUrl: string;
                encode(message: _138.QuerySmartContractStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.QuerySmartContractStateRequest;
                fromPartial(object: Partial<_138.QuerySmartContractStateRequest>): _138.QuerySmartContractStateRequest;
                fromAmino(object: _138.QuerySmartContractStateRequestAmino): _138.QuerySmartContractStateRequest;
                toAmino(message: _138.QuerySmartContractStateRequest): _138.QuerySmartContractStateRequestAmino;
                fromAminoMsg(object: _138.QuerySmartContractStateRequestAminoMsg): _138.QuerySmartContractStateRequest;
                toAminoMsg(message: _138.QuerySmartContractStateRequest): _138.QuerySmartContractStateRequestAminoMsg;
                fromProtoMsg(message: _138.QuerySmartContractStateRequestProtoMsg): _138.QuerySmartContractStateRequest;
                toProto(message: _138.QuerySmartContractStateRequest): Uint8Array;
                toProtoMsg(message: _138.QuerySmartContractStateRequest): _138.QuerySmartContractStateRequestProtoMsg;
            };
            QuerySmartContractStateResponse: {
                typeUrl: string;
                encode(message: _138.QuerySmartContractStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.QuerySmartContractStateResponse;
                fromPartial(object: Partial<_138.QuerySmartContractStateResponse>): _138.QuerySmartContractStateResponse;
                fromAmino(object: _138.QuerySmartContractStateResponseAmino): _138.QuerySmartContractStateResponse;
                toAmino(message: _138.QuerySmartContractStateResponse): _138.QuerySmartContractStateResponseAmino;
                fromAminoMsg(object: _138.QuerySmartContractStateResponseAminoMsg): _138.QuerySmartContractStateResponse;
                toAminoMsg(message: _138.QuerySmartContractStateResponse): _138.QuerySmartContractStateResponseAminoMsg;
                fromProtoMsg(message: _138.QuerySmartContractStateResponseProtoMsg): _138.QuerySmartContractStateResponse;
                toProto(message: _138.QuerySmartContractStateResponse): Uint8Array;
                toProtoMsg(message: _138.QuerySmartContractStateResponse): _138.QuerySmartContractStateResponseProtoMsg;
            };
            QueryCodeRequest: {
                typeUrl: string;
                encode(message: _138.QueryCodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.QueryCodeRequest;
                fromPartial(object: Partial<_138.QueryCodeRequest>): _138.QueryCodeRequest;
                fromAmino(object: _138.QueryCodeRequestAmino): _138.QueryCodeRequest;
                toAmino(message: _138.QueryCodeRequest): _138.QueryCodeRequestAmino;
                fromAminoMsg(object: _138.QueryCodeRequestAminoMsg): _138.QueryCodeRequest;
                toAminoMsg(message: _138.QueryCodeRequest): _138.QueryCodeRequestAminoMsg;
                fromProtoMsg(message: _138.QueryCodeRequestProtoMsg): _138.QueryCodeRequest;
                toProto(message: _138.QueryCodeRequest): Uint8Array;
                toProtoMsg(message: _138.QueryCodeRequest): _138.QueryCodeRequestProtoMsg;
            };
            QueryCodeInfoRequest: {
                typeUrl: string;
                encode(message: _138.QueryCodeInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.QueryCodeInfoRequest;
                fromPartial(object: Partial<_138.QueryCodeInfoRequest>): _138.QueryCodeInfoRequest;
                fromAmino(object: _138.QueryCodeInfoRequestAmino): _138.QueryCodeInfoRequest;
                toAmino(message: _138.QueryCodeInfoRequest): _138.QueryCodeInfoRequestAmino;
                fromAminoMsg(object: _138.QueryCodeInfoRequestAminoMsg): _138.QueryCodeInfoRequest;
                toAminoMsg(message: _138.QueryCodeInfoRequest): _138.QueryCodeInfoRequestAminoMsg;
                fromProtoMsg(message: _138.QueryCodeInfoRequestProtoMsg): _138.QueryCodeInfoRequest;
                toProto(message: _138.QueryCodeInfoRequest): Uint8Array;
                toProtoMsg(message: _138.QueryCodeInfoRequest): _138.QueryCodeInfoRequestProtoMsg;
            };
            QueryCodeInfoResponse: {
                typeUrl: string;
                encode(message: _138.QueryCodeInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.QueryCodeInfoResponse;
                fromPartial(object: Partial<_138.QueryCodeInfoResponse>): _138.QueryCodeInfoResponse;
                fromAmino(object: _138.QueryCodeInfoResponseAmino): _138.QueryCodeInfoResponse;
                toAmino(message: _138.QueryCodeInfoResponse): _138.QueryCodeInfoResponseAmino;
                fromAminoMsg(object: _138.QueryCodeInfoResponseAminoMsg): _138.QueryCodeInfoResponse;
                toAminoMsg(message: _138.QueryCodeInfoResponse): _138.QueryCodeInfoResponseAminoMsg;
                fromProtoMsg(message: _138.QueryCodeInfoResponseProtoMsg): _138.QueryCodeInfoResponse;
                toProto(message: _138.QueryCodeInfoResponse): Uint8Array;
                toProtoMsg(message: _138.QueryCodeInfoResponse): _138.QueryCodeInfoResponseProtoMsg;
            };
            CodeInfoResponse: {
                typeUrl: string;
                encode(message: _138.CodeInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.CodeInfoResponse;
                fromPartial(object: Partial<_138.CodeInfoResponse>): _138.CodeInfoResponse;
                fromAmino(object: _138.CodeInfoResponseAmino): _138.CodeInfoResponse;
                toAmino(message: _138.CodeInfoResponse): _138.CodeInfoResponseAmino;
                fromAminoMsg(object: _138.CodeInfoResponseAminoMsg): _138.CodeInfoResponse;
                toAminoMsg(message: _138.CodeInfoResponse): _138.CodeInfoResponseAminoMsg;
                fromProtoMsg(message: _138.CodeInfoResponseProtoMsg): _138.CodeInfoResponse;
                toProto(message: _138.CodeInfoResponse): Uint8Array;
                toProtoMsg(message: _138.CodeInfoResponse): _138.CodeInfoResponseProtoMsg;
            };
            QueryCodeResponse: {
                typeUrl: string;
                encode(message: _138.QueryCodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.QueryCodeResponse;
                fromPartial(object: Partial<_138.QueryCodeResponse>): _138.QueryCodeResponse;
                fromAmino(object: _138.QueryCodeResponseAmino): _138.QueryCodeResponse;
                toAmino(message: _138.QueryCodeResponse): _138.QueryCodeResponseAmino;
                fromAminoMsg(object: _138.QueryCodeResponseAminoMsg): _138.QueryCodeResponse;
                toAminoMsg(message: _138.QueryCodeResponse): _138.QueryCodeResponseAminoMsg;
                fromProtoMsg(message: _138.QueryCodeResponseProtoMsg): _138.QueryCodeResponse;
                toProto(message: _138.QueryCodeResponse): Uint8Array;
                toProtoMsg(message: _138.QueryCodeResponse): _138.QueryCodeResponseProtoMsg;
            };
            QueryCodesRequest: {
                typeUrl: string;
                encode(message: _138.QueryCodesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.QueryCodesRequest;
                fromPartial(object: Partial<_138.QueryCodesRequest>): _138.QueryCodesRequest;
                fromAmino(object: _138.QueryCodesRequestAmino): _138.QueryCodesRequest;
                toAmino(message: _138.QueryCodesRequest): _138.QueryCodesRequestAmino;
                fromAminoMsg(object: _138.QueryCodesRequestAminoMsg): _138.QueryCodesRequest;
                toAminoMsg(message: _138.QueryCodesRequest): _138.QueryCodesRequestAminoMsg;
                fromProtoMsg(message: _138.QueryCodesRequestProtoMsg): _138.QueryCodesRequest;
                toProto(message: _138.QueryCodesRequest): Uint8Array;
                toProtoMsg(message: _138.QueryCodesRequest): _138.QueryCodesRequestProtoMsg;
            };
            QueryCodesResponse: {
                typeUrl: string;
                encode(message: _138.QueryCodesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.QueryCodesResponse;
                fromPartial(object: Partial<_138.QueryCodesResponse>): _138.QueryCodesResponse;
                fromAmino(object: _138.QueryCodesResponseAmino): _138.QueryCodesResponse;
                toAmino(message: _138.QueryCodesResponse): _138.QueryCodesResponseAmino;
                fromAminoMsg(object: _138.QueryCodesResponseAminoMsg): _138.QueryCodesResponse;
                toAminoMsg(message: _138.QueryCodesResponse): _138.QueryCodesResponseAminoMsg;
                fromProtoMsg(message: _138.QueryCodesResponseProtoMsg): _138.QueryCodesResponse;
                toProto(message: _138.QueryCodesResponse): Uint8Array;
                toProtoMsg(message: _138.QueryCodesResponse): _138.QueryCodesResponseProtoMsg;
            };
            QueryPinnedCodesRequest: {
                typeUrl: string;
                encode(message: _138.QueryPinnedCodesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.QueryPinnedCodesRequest;
                fromPartial(object: Partial<_138.QueryPinnedCodesRequest>): _138.QueryPinnedCodesRequest;
                fromAmino(object: _138.QueryPinnedCodesRequestAmino): _138.QueryPinnedCodesRequest;
                toAmino(message: _138.QueryPinnedCodesRequest): _138.QueryPinnedCodesRequestAmino;
                fromAminoMsg(object: _138.QueryPinnedCodesRequestAminoMsg): _138.QueryPinnedCodesRequest;
                toAminoMsg(message: _138.QueryPinnedCodesRequest): _138.QueryPinnedCodesRequestAminoMsg;
                fromProtoMsg(message: _138.QueryPinnedCodesRequestProtoMsg): _138.QueryPinnedCodesRequest;
                toProto(message: _138.QueryPinnedCodesRequest): Uint8Array;
                toProtoMsg(message: _138.QueryPinnedCodesRequest): _138.QueryPinnedCodesRequestProtoMsg;
            };
            QueryPinnedCodesResponse: {
                typeUrl: string;
                encode(message: _138.QueryPinnedCodesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.QueryPinnedCodesResponse;
                fromPartial(object: Partial<_138.QueryPinnedCodesResponse>): _138.QueryPinnedCodesResponse;
                fromAmino(object: _138.QueryPinnedCodesResponseAmino): _138.QueryPinnedCodesResponse;
                toAmino(message: _138.QueryPinnedCodesResponse): _138.QueryPinnedCodesResponseAmino;
                fromAminoMsg(object: _138.QueryPinnedCodesResponseAminoMsg): _138.QueryPinnedCodesResponse;
                toAminoMsg(message: _138.QueryPinnedCodesResponse): _138.QueryPinnedCodesResponseAminoMsg;
                fromProtoMsg(message: _138.QueryPinnedCodesResponseProtoMsg): _138.QueryPinnedCodesResponse;
                toProto(message: _138.QueryPinnedCodesResponse): Uint8Array;
                toProtoMsg(message: _138.QueryPinnedCodesResponse): _138.QueryPinnedCodesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _138.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.QueryParamsRequest;
                fromPartial(_: Partial<_138.QueryParamsRequest>): _138.QueryParamsRequest;
                fromAmino(_: _138.QueryParamsRequestAmino): _138.QueryParamsRequest;
                toAmino(_: _138.QueryParamsRequest): _138.QueryParamsRequestAmino;
                fromAminoMsg(object: _138.QueryParamsRequestAminoMsg): _138.QueryParamsRequest;
                toAminoMsg(message: _138.QueryParamsRequest): _138.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _138.QueryParamsRequestProtoMsg): _138.QueryParamsRequest;
                toProto(message: _138.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _138.QueryParamsRequest): _138.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _138.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.QueryParamsResponse;
                fromPartial(object: Partial<_138.QueryParamsResponse>): _138.QueryParamsResponse;
                fromAmino(object: _138.QueryParamsResponseAmino): _138.QueryParamsResponse;
                toAmino(message: _138.QueryParamsResponse): _138.QueryParamsResponseAmino;
                fromAminoMsg(object: _138.QueryParamsResponseAminoMsg): _138.QueryParamsResponse;
                toAminoMsg(message: _138.QueryParamsResponse): _138.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _138.QueryParamsResponseProtoMsg): _138.QueryParamsResponse;
                toProto(message: _138.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _138.QueryParamsResponse): _138.QueryParamsResponseProtoMsg;
            };
            QueryContractsByCreatorRequest: {
                typeUrl: string;
                encode(message: _138.QueryContractsByCreatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.QueryContractsByCreatorRequest;
                fromPartial(object: Partial<_138.QueryContractsByCreatorRequest>): _138.QueryContractsByCreatorRequest;
                fromAmino(object: _138.QueryContractsByCreatorRequestAmino): _138.QueryContractsByCreatorRequest;
                toAmino(message: _138.QueryContractsByCreatorRequest): _138.QueryContractsByCreatorRequestAmino;
                fromAminoMsg(object: _138.QueryContractsByCreatorRequestAminoMsg): _138.QueryContractsByCreatorRequest;
                toAminoMsg(message: _138.QueryContractsByCreatorRequest): _138.QueryContractsByCreatorRequestAminoMsg;
                fromProtoMsg(message: _138.QueryContractsByCreatorRequestProtoMsg): _138.QueryContractsByCreatorRequest;
                toProto(message: _138.QueryContractsByCreatorRequest): Uint8Array;
                toProtoMsg(message: _138.QueryContractsByCreatorRequest): _138.QueryContractsByCreatorRequestProtoMsg;
            };
            QueryContractsByCreatorResponse: {
                typeUrl: string;
                encode(message: _138.QueryContractsByCreatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.QueryContractsByCreatorResponse;
                fromPartial(object: Partial<_138.QueryContractsByCreatorResponse>): _138.QueryContractsByCreatorResponse;
                fromAmino(object: _138.QueryContractsByCreatorResponseAmino): _138.QueryContractsByCreatorResponse;
                toAmino(message: _138.QueryContractsByCreatorResponse): _138.QueryContractsByCreatorResponseAmino;
                fromAminoMsg(object: _138.QueryContractsByCreatorResponseAminoMsg): _138.QueryContractsByCreatorResponse;
                toAminoMsg(message: _138.QueryContractsByCreatorResponse): _138.QueryContractsByCreatorResponseAminoMsg;
                fromProtoMsg(message: _138.QueryContractsByCreatorResponseProtoMsg): _138.QueryContractsByCreatorResponse;
                toProto(message: _138.QueryContractsByCreatorResponse): Uint8Array;
                toProtoMsg(message: _138.QueryContractsByCreatorResponse): _138.QueryContractsByCreatorResponseProtoMsg;
            };
            QueryWasmLimitsConfigRequest: {
                typeUrl: string;
                encode(_: _138.QueryWasmLimitsConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.QueryWasmLimitsConfigRequest;
                fromPartial(_: Partial<_138.QueryWasmLimitsConfigRequest>): _138.QueryWasmLimitsConfigRequest;
                fromAmino(_: _138.QueryWasmLimitsConfigRequestAmino): _138.QueryWasmLimitsConfigRequest;
                toAmino(_: _138.QueryWasmLimitsConfigRequest): _138.QueryWasmLimitsConfigRequestAmino;
                fromAminoMsg(object: _138.QueryWasmLimitsConfigRequestAminoMsg): _138.QueryWasmLimitsConfigRequest;
                toAminoMsg(message: _138.QueryWasmLimitsConfigRequest): _138.QueryWasmLimitsConfigRequestAminoMsg;
                fromProtoMsg(message: _138.QueryWasmLimitsConfigRequestProtoMsg): _138.QueryWasmLimitsConfigRequest;
                toProto(message: _138.QueryWasmLimitsConfigRequest): Uint8Array;
                toProtoMsg(message: _138.QueryWasmLimitsConfigRequest): _138.QueryWasmLimitsConfigRequestProtoMsg;
            };
            QueryWasmLimitsConfigResponse: {
                typeUrl: string;
                encode(message: _138.QueryWasmLimitsConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.QueryWasmLimitsConfigResponse;
                fromPartial(object: Partial<_138.QueryWasmLimitsConfigResponse>): _138.QueryWasmLimitsConfigResponse;
                fromAmino(object: _138.QueryWasmLimitsConfigResponseAmino): _138.QueryWasmLimitsConfigResponse;
                toAmino(message: _138.QueryWasmLimitsConfigResponse): _138.QueryWasmLimitsConfigResponseAmino;
                fromAminoMsg(object: _138.QueryWasmLimitsConfigResponseAminoMsg): _138.QueryWasmLimitsConfigResponse;
                toAminoMsg(message: _138.QueryWasmLimitsConfigResponse): _138.QueryWasmLimitsConfigResponseAminoMsg;
                fromProtoMsg(message: _138.QueryWasmLimitsConfigResponseProtoMsg): _138.QueryWasmLimitsConfigResponse;
                toProto(message: _138.QueryWasmLimitsConfigResponse): Uint8Array;
                toProtoMsg(message: _138.QueryWasmLimitsConfigResponse): _138.QueryWasmLimitsConfigResponseProtoMsg;
            };
            QueryBuildAddressRequest: {
                typeUrl: string;
                encode(message: _138.QueryBuildAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.QueryBuildAddressRequest;
                fromPartial(object: Partial<_138.QueryBuildAddressRequest>): _138.QueryBuildAddressRequest;
                fromAmino(object: _138.QueryBuildAddressRequestAmino): _138.QueryBuildAddressRequest;
                toAmino(message: _138.QueryBuildAddressRequest): _138.QueryBuildAddressRequestAmino;
                fromAminoMsg(object: _138.QueryBuildAddressRequestAminoMsg): _138.QueryBuildAddressRequest;
                toAminoMsg(message: _138.QueryBuildAddressRequest): _138.QueryBuildAddressRequestAminoMsg;
                fromProtoMsg(message: _138.QueryBuildAddressRequestProtoMsg): _138.QueryBuildAddressRequest;
                toProto(message: _138.QueryBuildAddressRequest): Uint8Array;
                toProtoMsg(message: _138.QueryBuildAddressRequest): _138.QueryBuildAddressRequestProtoMsg;
            };
            QueryBuildAddressResponse: {
                typeUrl: string;
                encode(message: _138.QueryBuildAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.QueryBuildAddressResponse;
                fromPartial(object: Partial<_138.QueryBuildAddressResponse>): _138.QueryBuildAddressResponse;
                fromAmino(object: _138.QueryBuildAddressResponseAmino): _138.QueryBuildAddressResponse;
                toAmino(message: _138.QueryBuildAddressResponse): _138.QueryBuildAddressResponseAmino;
                fromAminoMsg(object: _138.QueryBuildAddressResponseAminoMsg): _138.QueryBuildAddressResponse;
                toAminoMsg(message: _138.QueryBuildAddressResponse): _138.QueryBuildAddressResponseAminoMsg;
                fromProtoMsg(message: _138.QueryBuildAddressResponseProtoMsg): _138.QueryBuildAddressResponse;
                toProto(message: _138.QueryBuildAddressResponse): Uint8Array;
                toProtoMsg(message: _138.QueryBuildAddressResponse): _138.QueryBuildAddressResponseProtoMsg;
            };
            StoreCodeProposal: {
                typeUrl: string;
                encode(message: _137.StoreCodeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.StoreCodeProposal;
                fromPartial(object: Partial<_137.StoreCodeProposal>): _137.StoreCodeProposal;
                fromAmino(object: _137.StoreCodeProposalAmino): _137.StoreCodeProposal;
                toAmino(message: _137.StoreCodeProposal): _137.StoreCodeProposalAmino;
                fromAminoMsg(object: _137.StoreCodeProposalAminoMsg): _137.StoreCodeProposal;
                toAminoMsg(message: _137.StoreCodeProposal): _137.StoreCodeProposalAminoMsg;
                fromProtoMsg(message: _137.StoreCodeProposalProtoMsg): _137.StoreCodeProposal;
                toProto(message: _137.StoreCodeProposal): Uint8Array;
                toProtoMsg(message: _137.StoreCodeProposal): _137.StoreCodeProposalProtoMsg;
            };
            InstantiateContractProposal: {
                typeUrl: string;
                encode(message: _137.InstantiateContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.InstantiateContractProposal;
                fromPartial(object: Partial<_137.InstantiateContractProposal>): _137.InstantiateContractProposal;
                fromAmino(object: _137.InstantiateContractProposalAmino): _137.InstantiateContractProposal;
                toAmino(message: _137.InstantiateContractProposal): _137.InstantiateContractProposalAmino;
                fromAminoMsg(object: _137.InstantiateContractProposalAminoMsg): _137.InstantiateContractProposal;
                toAminoMsg(message: _137.InstantiateContractProposal): _137.InstantiateContractProposalAminoMsg;
                fromProtoMsg(message: _137.InstantiateContractProposalProtoMsg): _137.InstantiateContractProposal;
                toProto(message: _137.InstantiateContractProposal): Uint8Array;
                toProtoMsg(message: _137.InstantiateContractProposal): _137.InstantiateContractProposalProtoMsg;
            };
            InstantiateContract2Proposal: {
                typeUrl: string;
                encode(message: _137.InstantiateContract2Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.InstantiateContract2Proposal;
                fromPartial(object: Partial<_137.InstantiateContract2Proposal>): _137.InstantiateContract2Proposal;
                fromAmino(object: _137.InstantiateContract2ProposalAmino): _137.InstantiateContract2Proposal;
                toAmino(message: _137.InstantiateContract2Proposal): _137.InstantiateContract2ProposalAmino;
                fromAminoMsg(object: _137.InstantiateContract2ProposalAminoMsg): _137.InstantiateContract2Proposal;
                toAminoMsg(message: _137.InstantiateContract2Proposal): _137.InstantiateContract2ProposalAminoMsg;
                fromProtoMsg(message: _137.InstantiateContract2ProposalProtoMsg): _137.InstantiateContract2Proposal;
                toProto(message: _137.InstantiateContract2Proposal): Uint8Array;
                toProtoMsg(message: _137.InstantiateContract2Proposal): _137.InstantiateContract2ProposalProtoMsg;
            };
            MigrateContractProposal: {
                typeUrl: string;
                encode(message: _137.MigrateContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.MigrateContractProposal;
                fromPartial(object: Partial<_137.MigrateContractProposal>): _137.MigrateContractProposal;
                fromAmino(object: _137.MigrateContractProposalAmino): _137.MigrateContractProposal;
                toAmino(message: _137.MigrateContractProposal): _137.MigrateContractProposalAmino;
                fromAminoMsg(object: _137.MigrateContractProposalAminoMsg): _137.MigrateContractProposal;
                toAminoMsg(message: _137.MigrateContractProposal): _137.MigrateContractProposalAminoMsg;
                fromProtoMsg(message: _137.MigrateContractProposalProtoMsg): _137.MigrateContractProposal;
                toProto(message: _137.MigrateContractProposal): Uint8Array;
                toProtoMsg(message: _137.MigrateContractProposal): _137.MigrateContractProposalProtoMsg;
            };
            SudoContractProposal: {
                typeUrl: string;
                encode(message: _137.SudoContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.SudoContractProposal;
                fromPartial(object: Partial<_137.SudoContractProposal>): _137.SudoContractProposal;
                fromAmino(object: _137.SudoContractProposalAmino): _137.SudoContractProposal;
                toAmino(message: _137.SudoContractProposal): _137.SudoContractProposalAmino;
                fromAminoMsg(object: _137.SudoContractProposalAminoMsg): _137.SudoContractProposal;
                toAminoMsg(message: _137.SudoContractProposal): _137.SudoContractProposalAminoMsg;
                fromProtoMsg(message: _137.SudoContractProposalProtoMsg): _137.SudoContractProposal;
                toProto(message: _137.SudoContractProposal): Uint8Array;
                toProtoMsg(message: _137.SudoContractProposal): _137.SudoContractProposalProtoMsg;
            };
            ExecuteContractProposal: {
                typeUrl: string;
                encode(message: _137.ExecuteContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.ExecuteContractProposal;
                fromPartial(object: Partial<_137.ExecuteContractProposal>): _137.ExecuteContractProposal;
                fromAmino(object: _137.ExecuteContractProposalAmino): _137.ExecuteContractProposal;
                toAmino(message: _137.ExecuteContractProposal): _137.ExecuteContractProposalAmino;
                fromAminoMsg(object: _137.ExecuteContractProposalAminoMsg): _137.ExecuteContractProposal;
                toAminoMsg(message: _137.ExecuteContractProposal): _137.ExecuteContractProposalAminoMsg;
                fromProtoMsg(message: _137.ExecuteContractProposalProtoMsg): _137.ExecuteContractProposal;
                toProto(message: _137.ExecuteContractProposal): Uint8Array;
                toProtoMsg(message: _137.ExecuteContractProposal): _137.ExecuteContractProposalProtoMsg;
            };
            UpdateAdminProposal: {
                typeUrl: string;
                encode(message: _137.UpdateAdminProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.UpdateAdminProposal;
                fromPartial(object: Partial<_137.UpdateAdminProposal>): _137.UpdateAdminProposal;
                fromAmino(object: _137.UpdateAdminProposalAmino): _137.UpdateAdminProposal;
                toAmino(message: _137.UpdateAdminProposal): _137.UpdateAdminProposalAmino;
                fromAminoMsg(object: _137.UpdateAdminProposalAminoMsg): _137.UpdateAdminProposal;
                toAminoMsg(message: _137.UpdateAdminProposal): _137.UpdateAdminProposalAminoMsg;
                fromProtoMsg(message: _137.UpdateAdminProposalProtoMsg): _137.UpdateAdminProposal;
                toProto(message: _137.UpdateAdminProposal): Uint8Array;
                toProtoMsg(message: _137.UpdateAdminProposal): _137.UpdateAdminProposalProtoMsg;
            };
            ClearAdminProposal: {
                typeUrl: string;
                encode(message: _137.ClearAdminProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.ClearAdminProposal;
                fromPartial(object: Partial<_137.ClearAdminProposal>): _137.ClearAdminProposal;
                fromAmino(object: _137.ClearAdminProposalAmino): _137.ClearAdminProposal;
                toAmino(message: _137.ClearAdminProposal): _137.ClearAdminProposalAmino;
                fromAminoMsg(object: _137.ClearAdminProposalAminoMsg): _137.ClearAdminProposal;
                toAminoMsg(message: _137.ClearAdminProposal): _137.ClearAdminProposalAminoMsg;
                fromProtoMsg(message: _137.ClearAdminProposalProtoMsg): _137.ClearAdminProposal;
                toProto(message: _137.ClearAdminProposal): Uint8Array;
                toProtoMsg(message: _137.ClearAdminProposal): _137.ClearAdminProposalProtoMsg;
            };
            PinCodesProposal: {
                typeUrl: string;
                encode(message: _137.PinCodesProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.PinCodesProposal;
                fromPartial(object: Partial<_137.PinCodesProposal>): _137.PinCodesProposal;
                fromAmino(object: _137.PinCodesProposalAmino): _137.PinCodesProposal;
                toAmino(message: _137.PinCodesProposal): _137.PinCodesProposalAmino;
                fromAminoMsg(object: _137.PinCodesProposalAminoMsg): _137.PinCodesProposal;
                toAminoMsg(message: _137.PinCodesProposal): _137.PinCodesProposalAminoMsg;
                fromProtoMsg(message: _137.PinCodesProposalProtoMsg): _137.PinCodesProposal;
                toProto(message: _137.PinCodesProposal): Uint8Array;
                toProtoMsg(message: _137.PinCodesProposal): _137.PinCodesProposalProtoMsg;
            };
            UnpinCodesProposal: {
                typeUrl: string;
                encode(message: _137.UnpinCodesProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.UnpinCodesProposal;
                fromPartial(object: Partial<_137.UnpinCodesProposal>): _137.UnpinCodesProposal;
                fromAmino(object: _137.UnpinCodesProposalAmino): _137.UnpinCodesProposal;
                toAmino(message: _137.UnpinCodesProposal): _137.UnpinCodesProposalAmino;
                fromAminoMsg(object: _137.UnpinCodesProposalAminoMsg): _137.UnpinCodesProposal;
                toAminoMsg(message: _137.UnpinCodesProposal): _137.UnpinCodesProposalAminoMsg;
                fromProtoMsg(message: _137.UnpinCodesProposalProtoMsg): _137.UnpinCodesProposal;
                toProto(message: _137.UnpinCodesProposal): Uint8Array;
                toProtoMsg(message: _137.UnpinCodesProposal): _137.UnpinCodesProposalProtoMsg;
            };
            AccessConfigUpdate: {
                typeUrl: string;
                encode(message: _137.AccessConfigUpdate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.AccessConfigUpdate;
                fromPartial(object: Partial<_137.AccessConfigUpdate>): _137.AccessConfigUpdate;
                fromAmino(object: _137.AccessConfigUpdateAmino): _137.AccessConfigUpdate;
                toAmino(message: _137.AccessConfigUpdate): _137.AccessConfigUpdateAmino;
                fromAminoMsg(object: _137.AccessConfigUpdateAminoMsg): _137.AccessConfigUpdate;
                toAminoMsg(message: _137.AccessConfigUpdate): _137.AccessConfigUpdateAminoMsg;
                fromProtoMsg(message: _137.AccessConfigUpdateProtoMsg): _137.AccessConfigUpdate;
                toProto(message: _137.AccessConfigUpdate): Uint8Array;
                toProtoMsg(message: _137.AccessConfigUpdate): _137.AccessConfigUpdateProtoMsg;
            };
            UpdateInstantiateConfigProposal: {
                typeUrl: string;
                encode(message: _137.UpdateInstantiateConfigProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.UpdateInstantiateConfigProposal;
                fromPartial(object: Partial<_137.UpdateInstantiateConfigProposal>): _137.UpdateInstantiateConfigProposal;
                fromAmino(object: _137.UpdateInstantiateConfigProposalAmino): _137.UpdateInstantiateConfigProposal;
                toAmino(message: _137.UpdateInstantiateConfigProposal): _137.UpdateInstantiateConfigProposalAmino;
                fromAminoMsg(object: _137.UpdateInstantiateConfigProposalAminoMsg): _137.UpdateInstantiateConfigProposal;
                toAminoMsg(message: _137.UpdateInstantiateConfigProposal): _137.UpdateInstantiateConfigProposalAminoMsg;
                fromProtoMsg(message: _137.UpdateInstantiateConfigProposalProtoMsg): _137.UpdateInstantiateConfigProposal;
                toProto(message: _137.UpdateInstantiateConfigProposal): Uint8Array;
                toProtoMsg(message: _137.UpdateInstantiateConfigProposal): _137.UpdateInstantiateConfigProposalProtoMsg;
            };
            StoreAndInstantiateContractProposal: {
                typeUrl: string;
                encode(message: _137.StoreAndInstantiateContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.StoreAndInstantiateContractProposal;
                fromPartial(object: Partial<_137.StoreAndInstantiateContractProposal>): _137.StoreAndInstantiateContractProposal;
                fromAmino(object: _137.StoreAndInstantiateContractProposalAmino): _137.StoreAndInstantiateContractProposal;
                toAmino(message: _137.StoreAndInstantiateContractProposal): _137.StoreAndInstantiateContractProposalAmino;
                fromAminoMsg(object: _137.StoreAndInstantiateContractProposalAminoMsg): _137.StoreAndInstantiateContractProposal;
                toAminoMsg(message: _137.StoreAndInstantiateContractProposal): _137.StoreAndInstantiateContractProposalAminoMsg;
                fromProtoMsg(message: _137.StoreAndInstantiateContractProposalProtoMsg): _137.StoreAndInstantiateContractProposal;
                toProto(message: _137.StoreAndInstantiateContractProposal): Uint8Array;
                toProtoMsg(message: _137.StoreAndInstantiateContractProposal): _137.StoreAndInstantiateContractProposalProtoMsg;
            };
            MsgIBCSend: {
                typeUrl: string;
                encode(message: _136.MsgIBCSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.MsgIBCSend;
                fromPartial(object: Partial<_136.MsgIBCSend>): _136.MsgIBCSend;
                fromAmino(object: _136.MsgIBCSendAmino): _136.MsgIBCSend;
                toAmino(message: _136.MsgIBCSend): _136.MsgIBCSendAmino;
                fromAminoMsg(object: _136.MsgIBCSendAminoMsg): _136.MsgIBCSend;
                toAminoMsg(message: _136.MsgIBCSend): _136.MsgIBCSendAminoMsg;
                fromProtoMsg(message: _136.MsgIBCSendProtoMsg): _136.MsgIBCSend;
                toProto(message: _136.MsgIBCSend): Uint8Array;
                toProtoMsg(message: _136.MsgIBCSend): _136.MsgIBCSendProtoMsg;
            };
            MsgIBCSendResponse: {
                typeUrl: string;
                encode(message: _136.MsgIBCSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.MsgIBCSendResponse;
                fromPartial(object: Partial<_136.MsgIBCSendResponse>): _136.MsgIBCSendResponse;
                fromAmino(object: _136.MsgIBCSendResponseAmino): _136.MsgIBCSendResponse;
                toAmino(message: _136.MsgIBCSendResponse): _136.MsgIBCSendResponseAmino;
                fromAminoMsg(object: _136.MsgIBCSendResponseAminoMsg): _136.MsgIBCSendResponse;
                toAminoMsg(message: _136.MsgIBCSendResponse): _136.MsgIBCSendResponseAminoMsg;
                fromProtoMsg(message: _136.MsgIBCSendResponseProtoMsg): _136.MsgIBCSendResponse;
                toProto(message: _136.MsgIBCSendResponse): Uint8Array;
                toProtoMsg(message: _136.MsgIBCSendResponse): _136.MsgIBCSendResponseProtoMsg;
            };
            MsgIBCWriteAcknowledgementResponse: {
                typeUrl: string;
                encode(_: _136.MsgIBCWriteAcknowledgementResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.MsgIBCWriteAcknowledgementResponse;
                fromPartial(_: Partial<_136.MsgIBCWriteAcknowledgementResponse>): _136.MsgIBCWriteAcknowledgementResponse;
                fromAmino(_: _136.MsgIBCWriteAcknowledgementResponseAmino): _136.MsgIBCWriteAcknowledgementResponse;
                toAmino(_: _136.MsgIBCWriteAcknowledgementResponse): _136.MsgIBCWriteAcknowledgementResponseAmino;
                fromAminoMsg(object: _136.MsgIBCWriteAcknowledgementResponseAminoMsg): _136.MsgIBCWriteAcknowledgementResponse;
                toAminoMsg(message: _136.MsgIBCWriteAcknowledgementResponse): _136.MsgIBCWriteAcknowledgementResponseAminoMsg;
                fromProtoMsg(message: _136.MsgIBCWriteAcknowledgementResponseProtoMsg): _136.MsgIBCWriteAcknowledgementResponse;
                toProto(message: _136.MsgIBCWriteAcknowledgementResponse): Uint8Array;
                toProtoMsg(message: _136.MsgIBCWriteAcknowledgementResponse): _136.MsgIBCWriteAcknowledgementResponseProtoMsg;
            };
            MsgIBCCloseChannel: {
                typeUrl: string;
                encode(message: _136.MsgIBCCloseChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.MsgIBCCloseChannel;
                fromPartial(object: Partial<_136.MsgIBCCloseChannel>): _136.MsgIBCCloseChannel;
                fromAmino(object: _136.MsgIBCCloseChannelAmino): _136.MsgIBCCloseChannel;
                toAmino(message: _136.MsgIBCCloseChannel): _136.MsgIBCCloseChannelAmino;
                fromAminoMsg(object: _136.MsgIBCCloseChannelAminoMsg): _136.MsgIBCCloseChannel;
                toAminoMsg(message: _136.MsgIBCCloseChannel): _136.MsgIBCCloseChannelAminoMsg;
                fromProtoMsg(message: _136.MsgIBCCloseChannelProtoMsg): _136.MsgIBCCloseChannel;
                toProto(message: _136.MsgIBCCloseChannel): Uint8Array;
                toProtoMsg(message: _136.MsgIBCCloseChannel): _136.MsgIBCCloseChannelProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _135.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _135.GenesisState;
                fromPartial(object: Partial<_135.GenesisState>): _135.GenesisState;
                fromAmino(object: _135.GenesisStateAmino): _135.GenesisState;
                toAmino(message: _135.GenesisState): _135.GenesisStateAmino;
                fromAminoMsg(object: _135.GenesisStateAminoMsg): _135.GenesisState;
                toAminoMsg(message: _135.GenesisState): _135.GenesisStateAminoMsg;
                fromProtoMsg(message: _135.GenesisStateProtoMsg): _135.GenesisState;
                toProto(message: _135.GenesisState): Uint8Array;
                toProtoMsg(message: _135.GenesisState): _135.GenesisStateProtoMsg;
            };
            Code: {
                typeUrl: string;
                encode(message: _135.Code, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _135.Code;
                fromPartial(object: Partial<_135.Code>): _135.Code;
                fromAmino(object: _135.CodeAmino): _135.Code;
                toAmino(message: _135.Code): _135.CodeAmino;
                fromAminoMsg(object: _135.CodeAminoMsg): _135.Code;
                toAminoMsg(message: _135.Code): _135.CodeAminoMsg;
                fromProtoMsg(message: _135.CodeProtoMsg): _135.Code;
                toProto(message: _135.Code): Uint8Array;
                toProtoMsg(message: _135.Code): _135.CodeProtoMsg;
            };
            Contract: {
                typeUrl: string;
                encode(message: _135.Contract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _135.Contract;
                fromPartial(object: Partial<_135.Contract>): _135.Contract;
                fromAmino(object: _135.ContractAmino): _135.Contract;
                toAmino(message: _135.Contract): _135.ContractAmino;
                fromAminoMsg(object: _135.ContractAminoMsg): _135.Contract;
                toAminoMsg(message: _135.Contract): _135.ContractAminoMsg;
                fromProtoMsg(message: _135.ContractProtoMsg): _135.Contract;
                toProto(message: _135.Contract): Uint8Array;
                toProtoMsg(message: _135.Contract): _135.ContractProtoMsg;
            };
            Sequence: {
                typeUrl: string;
                encode(message: _135.Sequence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _135.Sequence;
                fromPartial(object: Partial<_135.Sequence>): _135.Sequence;
                fromAmino(object: _135.SequenceAmino): _135.Sequence;
                toAmino(message: _135.Sequence): _135.SequenceAmino;
                fromAminoMsg(object: _135.SequenceAminoMsg): _135.Sequence;
                toAminoMsg(message: _135.Sequence): _135.SequenceAminoMsg;
                fromProtoMsg(message: _135.SequenceProtoMsg): _135.Sequence;
                toProto(message: _135.Sequence): Uint8Array;
                toProtoMsg(message: _135.Sequence): _135.SequenceProtoMsg;
            };
            StoreCodeAuthorization: {
                typeUrl: string;
                encode(message: _134.StoreCodeAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.StoreCodeAuthorization;
                fromPartial(object: Partial<_134.StoreCodeAuthorization>): _134.StoreCodeAuthorization;
                fromAmino(object: _134.StoreCodeAuthorizationAmino): _134.StoreCodeAuthorization;
                toAmino(message: _134.StoreCodeAuthorization): _134.StoreCodeAuthorizationAmino;
                fromAminoMsg(object: _134.StoreCodeAuthorizationAminoMsg): _134.StoreCodeAuthorization;
                toAminoMsg(message: _134.StoreCodeAuthorization): _134.StoreCodeAuthorizationAminoMsg;
                fromProtoMsg(message: _134.StoreCodeAuthorizationProtoMsg): _134.StoreCodeAuthorization;
                toProto(message: _134.StoreCodeAuthorization): Uint8Array;
                toProtoMsg(message: _134.StoreCodeAuthorization): _134.StoreCodeAuthorizationProtoMsg;
            };
            ContractExecutionAuthorization: {
                typeUrl: string;
                encode(message: _134.ContractExecutionAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.ContractExecutionAuthorization;
                fromPartial(object: Partial<_134.ContractExecutionAuthorization>): _134.ContractExecutionAuthorization;
                fromAmino(object: _134.ContractExecutionAuthorizationAmino): _134.ContractExecutionAuthorization;
                toAmino(message: _134.ContractExecutionAuthorization): _134.ContractExecutionAuthorizationAmino;
                fromAminoMsg(object: _134.ContractExecutionAuthorizationAminoMsg): _134.ContractExecutionAuthorization;
                toAminoMsg(message: _134.ContractExecutionAuthorization): _134.ContractExecutionAuthorizationAminoMsg;
                fromProtoMsg(message: _134.ContractExecutionAuthorizationProtoMsg): _134.ContractExecutionAuthorization;
                toProto(message: _134.ContractExecutionAuthorization): Uint8Array;
                toProtoMsg(message: _134.ContractExecutionAuthorization): _134.ContractExecutionAuthorizationProtoMsg;
            };
            ContractMigrationAuthorization: {
                typeUrl: string;
                encode(message: _134.ContractMigrationAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.ContractMigrationAuthorization;
                fromPartial(object: Partial<_134.ContractMigrationAuthorization>): _134.ContractMigrationAuthorization;
                fromAmino(object: _134.ContractMigrationAuthorizationAmino): _134.ContractMigrationAuthorization;
                toAmino(message: _134.ContractMigrationAuthorization): _134.ContractMigrationAuthorizationAmino;
                fromAminoMsg(object: _134.ContractMigrationAuthorizationAminoMsg): _134.ContractMigrationAuthorization;
                toAminoMsg(message: _134.ContractMigrationAuthorization): _134.ContractMigrationAuthorizationAminoMsg;
                fromProtoMsg(message: _134.ContractMigrationAuthorizationProtoMsg): _134.ContractMigrationAuthorization;
                toProto(message: _134.ContractMigrationAuthorization): Uint8Array;
                toProtoMsg(message: _134.ContractMigrationAuthorization): _134.ContractMigrationAuthorizationProtoMsg;
            };
            CodeGrant: {
                typeUrl: string;
                encode(message: _134.CodeGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.CodeGrant;
                fromPartial(object: Partial<_134.CodeGrant>): _134.CodeGrant;
                fromAmino(object: _134.CodeGrantAmino): _134.CodeGrant;
                toAmino(message: _134.CodeGrant): _134.CodeGrantAmino;
                fromAminoMsg(object: _134.CodeGrantAminoMsg): _134.CodeGrant;
                toAminoMsg(message: _134.CodeGrant): _134.CodeGrantAminoMsg;
                fromProtoMsg(message: _134.CodeGrantProtoMsg): _134.CodeGrant;
                toProto(message: _134.CodeGrant): Uint8Array;
                toProtoMsg(message: _134.CodeGrant): _134.CodeGrantProtoMsg;
            };
            ContractGrant: {
                typeUrl: string;
                encode(message: _134.ContractGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.ContractGrant;
                fromPartial(object: Partial<_134.ContractGrant>): _134.ContractGrant;
                fromAmino(object: _134.ContractGrantAmino): _134.ContractGrant;
                toAmino(message: _134.ContractGrant): _134.ContractGrantAmino;
                fromAminoMsg(object: _134.ContractGrantAminoMsg): _134.ContractGrant;
                toAminoMsg(message: _134.ContractGrant): _134.ContractGrantAminoMsg;
                fromProtoMsg(message: _134.ContractGrantProtoMsg): _134.ContractGrant;
                toProto(message: _134.ContractGrant): Uint8Array;
                toProtoMsg(message: _134.ContractGrant): _134.ContractGrantProtoMsg;
            };
            MaxCallsLimit: {
                typeUrl: string;
                encode(message: _134.MaxCallsLimit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.MaxCallsLimit;
                fromPartial(object: Partial<_134.MaxCallsLimit>): _134.MaxCallsLimit;
                fromAmino(object: _134.MaxCallsLimitAmino): _134.MaxCallsLimit;
                toAmino(message: _134.MaxCallsLimit): _134.MaxCallsLimitAmino;
                fromAminoMsg(object: _134.MaxCallsLimitAminoMsg): _134.MaxCallsLimit;
                toAminoMsg(message: _134.MaxCallsLimit): _134.MaxCallsLimitAminoMsg;
                fromProtoMsg(message: _134.MaxCallsLimitProtoMsg): _134.MaxCallsLimit;
                toProto(message: _134.MaxCallsLimit): Uint8Array;
                toProtoMsg(message: _134.MaxCallsLimit): _134.MaxCallsLimitProtoMsg;
            };
            MaxFundsLimit: {
                typeUrl: string;
                encode(message: _134.MaxFundsLimit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.MaxFundsLimit;
                fromPartial(object: Partial<_134.MaxFundsLimit>): _134.MaxFundsLimit;
                fromAmino(object: _134.MaxFundsLimitAmino): _134.MaxFundsLimit;
                toAmino(message: _134.MaxFundsLimit): _134.MaxFundsLimitAmino;
                fromAminoMsg(object: _134.MaxFundsLimitAminoMsg): _134.MaxFundsLimit;
                toAminoMsg(message: _134.MaxFundsLimit): _134.MaxFundsLimitAminoMsg;
                fromProtoMsg(message: _134.MaxFundsLimitProtoMsg): _134.MaxFundsLimit;
                toProto(message: _134.MaxFundsLimit): Uint8Array;
                toProtoMsg(message: _134.MaxFundsLimit): _134.MaxFundsLimitProtoMsg;
            };
            CombinedLimit: {
                typeUrl: string;
                encode(message: _134.CombinedLimit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.CombinedLimit;
                fromPartial(object: Partial<_134.CombinedLimit>): _134.CombinedLimit;
                fromAmino(object: _134.CombinedLimitAmino): _134.CombinedLimit;
                toAmino(message: _134.CombinedLimit): _134.CombinedLimitAmino;
                fromAminoMsg(object: _134.CombinedLimitAminoMsg): _134.CombinedLimit;
                toAminoMsg(message: _134.CombinedLimit): _134.CombinedLimitAminoMsg;
                fromProtoMsg(message: _134.CombinedLimitProtoMsg): _134.CombinedLimit;
                toProto(message: _134.CombinedLimit): Uint8Array;
                toProtoMsg(message: _134.CombinedLimit): _134.CombinedLimitProtoMsg;
            };
            AllowAllMessagesFilter: {
                typeUrl: string;
                encode(_: _134.AllowAllMessagesFilter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.AllowAllMessagesFilter;
                fromPartial(_: Partial<_134.AllowAllMessagesFilter>): _134.AllowAllMessagesFilter;
                fromAmino(_: _134.AllowAllMessagesFilterAmino): _134.AllowAllMessagesFilter;
                toAmino(_: _134.AllowAllMessagesFilter): _134.AllowAllMessagesFilterAmino;
                fromAminoMsg(object: _134.AllowAllMessagesFilterAminoMsg): _134.AllowAllMessagesFilter;
                toAminoMsg(message: _134.AllowAllMessagesFilter): _134.AllowAllMessagesFilterAminoMsg;
                fromProtoMsg(message: _134.AllowAllMessagesFilterProtoMsg): _134.AllowAllMessagesFilter;
                toProto(message: _134.AllowAllMessagesFilter): Uint8Array;
                toProtoMsg(message: _134.AllowAllMessagesFilter): _134.AllowAllMessagesFilterProtoMsg;
            };
            AcceptedMessageKeysFilter: {
                typeUrl: string;
                encode(message: _134.AcceptedMessageKeysFilter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.AcceptedMessageKeysFilter;
                fromPartial(object: Partial<_134.AcceptedMessageKeysFilter>): _134.AcceptedMessageKeysFilter;
                fromAmino(object: _134.AcceptedMessageKeysFilterAmino): _134.AcceptedMessageKeysFilter;
                toAmino(message: _134.AcceptedMessageKeysFilter): _134.AcceptedMessageKeysFilterAmino;
                fromAminoMsg(object: _134.AcceptedMessageKeysFilterAminoMsg): _134.AcceptedMessageKeysFilter;
                toAminoMsg(message: _134.AcceptedMessageKeysFilter): _134.AcceptedMessageKeysFilterAminoMsg;
                fromProtoMsg(message: _134.AcceptedMessageKeysFilterProtoMsg): _134.AcceptedMessageKeysFilter;
                toProto(message: _134.AcceptedMessageKeysFilter): Uint8Array;
                toProtoMsg(message: _134.AcceptedMessageKeysFilter): _134.AcceptedMessageKeysFilterProtoMsg;
            };
            AcceptedMessagesFilter: {
                typeUrl: string;
                encode(message: _134.AcceptedMessagesFilter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.AcceptedMessagesFilter;
                fromPartial(object: Partial<_134.AcceptedMessagesFilter>): _134.AcceptedMessagesFilter;
                fromAmino(object: _134.AcceptedMessagesFilterAmino): _134.AcceptedMessagesFilter;
                toAmino(message: _134.AcceptedMessagesFilter): _134.AcceptedMessagesFilterAmino;
                fromAminoMsg(object: _134.AcceptedMessagesFilterAminoMsg): _134.AcceptedMessagesFilter;
                toAminoMsg(message: _134.AcceptedMessagesFilter): _134.AcceptedMessagesFilterAminoMsg;
                fromProtoMsg(message: _134.AcceptedMessagesFilterProtoMsg): _134.AcceptedMessagesFilter;
                toProto(message: _134.AcceptedMessagesFilter): Uint8Array;
                toProtoMsg(message: _134.AcceptedMessagesFilter): _134.AcceptedMessagesFilterProtoMsg;
            };
            Cosmwasm_wasmv1ContractAuthzLimitX_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _134.MaxCallsLimit | _134.MaxFundsLimit | _134.CombinedLimit;
            Cosmwasm_wasmv1ContractAuthzLimitX_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmwasm_wasmv1ContractAuthzLimitX_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Cosmwasm_wasmv1ContractAuthzFilterX_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _134.AllowAllMessagesFilter | _134.AcceptedMessageKeysFilter | _134.AcceptedMessagesFilter;
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
                    v1: _353.MsgClientImpl;
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
                        contractInfo(request: _138.QueryContractInfoRequest): Promise<_138.QueryContractInfoResponse>;
                        contractHistory(request: _138.QueryContractHistoryRequest): Promise<_138.QueryContractHistoryResponse>;
                        contractsByCode(request: _138.QueryContractsByCodeRequest): Promise<_138.QueryContractsByCodeResponse>;
                        allContractState(request: _138.QueryAllContractStateRequest): Promise<_138.QueryAllContractStateResponse>;
                        rawContractState(request: _138.QueryRawContractStateRequest): Promise<_138.QueryRawContractStateResponse>;
                        smartContractState(request: _138.QuerySmartContractStateRequest): Promise<_138.QuerySmartContractStateResponse>;
                        code(request: _138.QueryCodeRequest): Promise<_138.QueryCodeResponse>;
                        codes(request?: _138.QueryCodesRequest): Promise<_138.QueryCodesResponse>;
                        codeInfo(request: _138.QueryCodeInfoRequest): Promise<_138.QueryCodeInfoResponse>;
                        pinnedCodes(request?: _138.QueryPinnedCodesRequest): Promise<_138.QueryPinnedCodesResponse>;
                        params(request?: _138.QueryParamsRequest): Promise<_138.QueryParamsResponse>;
                        contractsByCreator(request: _138.QueryContractsByCreatorRequest): Promise<_138.QueryContractsByCreatorResponse>;
                        wasmLimitsConfig(request?: _138.QueryWasmLimitsConfigRequest): Promise<_138.QueryWasmLimitsConfigResponse>;
                        buildAddress(request: _138.QueryBuildAddressRequest): Promise<_138.QueryBuildAddressResponse>;
                    };
                };
            };
        }>;
    };
}
