import * as _128 from "./wasm/v1/authz";
import * as _129 from "./wasm/v1/genesis";
import * as _130 from "./wasm/v1/ibc";
import * as _131 from "./wasm/v1/proposal_legacy";
import * as _132 from "./wasm/v1/query";
import * as _133 from "./wasm/v1/tx";
import * as _134 from "./wasm/v1/types";
import * as _340 from "./wasm/v1/query.rpc.Query";
import * as _341 from "./wasm/v1/tx.rpc.msg";
export declare namespace cosmwasm {
    namespace wasm {
        const v1: {
            MsgClientImpl: typeof _341.MsgClientImpl;
            QueryClientImpl: typeof _340.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                contractInfo(request: _132.QueryContractInfoRequest): Promise<_132.QueryContractInfoResponse>;
                contractHistory(request: _132.QueryContractHistoryRequest): Promise<_132.QueryContractHistoryResponse>;
                contractsByCode(request: _132.QueryContractsByCodeRequest): Promise<_132.QueryContractsByCodeResponse>;
                allContractState(request: _132.QueryAllContractStateRequest): Promise<_132.QueryAllContractStateResponse>;
                rawContractState(request: _132.QueryRawContractStateRequest): Promise<_132.QueryRawContractStateResponse>;
                smartContractState(request: _132.QuerySmartContractStateRequest): Promise<_132.QuerySmartContractStateResponse>;
                code(request: _132.QueryCodeRequest): Promise<_132.QueryCodeResponse>;
                codes(request?: _132.QueryCodesRequest): Promise<_132.QueryCodesResponse>;
                pinnedCodes(request?: _132.QueryPinnedCodesRequest): Promise<_132.QueryPinnedCodesResponse>;
                params(request?: _132.QueryParamsRequest): Promise<_132.QueryParamsResponse>;
                contractsByCreator(request: _132.QueryContractsByCreatorRequest): Promise<_132.QueryContractsByCreatorResponse>;
            };
            registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    storeCode(value: _133.MsgStoreCode): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract(value: _133.MsgInstantiateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract2(value: _133.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    executeContract(value: _133.MsgExecuteContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    migrateContract(value: _133.MsgMigrateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateAdmin(value: _133.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    clearAdmin(value: _133.MsgClearAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateInstantiateConfig(value: _133.MsgUpdateInstantiateConfig): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _133.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    sudoContract(value: _133.MsgSudoContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    pinCodes(value: _133.MsgPinCodes): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    unpinCodes(value: _133.MsgUnpinCodes): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    storeAndInstantiateContract(value: _133.MsgStoreAndInstantiateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    removeCodeUploadParamsAddresses(value: _133.MsgRemoveCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    addCodeUploadParamsAddresses(value: _133.MsgAddCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    storeAndMigrateContract(value: _133.MsgStoreAndMigrateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateContractLabel(value: _133.MsgUpdateContractLabel): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    storeCode(value: _133.MsgStoreCode): {
                        typeUrl: string;
                        value: _133.MsgStoreCode;
                    };
                    instantiateContract(value: _133.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _133.MsgInstantiateContract;
                    };
                    instantiateContract2(value: _133.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: _133.MsgInstantiateContract2;
                    };
                    executeContract(value: _133.MsgExecuteContract): {
                        typeUrl: string;
                        value: _133.MsgExecuteContract;
                    };
                    migrateContract(value: _133.MsgMigrateContract): {
                        typeUrl: string;
                        value: _133.MsgMigrateContract;
                    };
                    updateAdmin(value: _133.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _133.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _133.MsgClearAdmin): {
                        typeUrl: string;
                        value: _133.MsgClearAdmin;
                    };
                    updateInstantiateConfig(value: _133.MsgUpdateInstantiateConfig): {
                        typeUrl: string;
                        value: _133.MsgUpdateInstantiateConfig;
                    };
                    updateParams(value: _133.MsgUpdateParams): {
                        typeUrl: string;
                        value: _133.MsgUpdateParams;
                    };
                    sudoContract(value: _133.MsgSudoContract): {
                        typeUrl: string;
                        value: _133.MsgSudoContract;
                    };
                    pinCodes(value: _133.MsgPinCodes): {
                        typeUrl: string;
                        value: _133.MsgPinCodes;
                    };
                    unpinCodes(value: _133.MsgUnpinCodes): {
                        typeUrl: string;
                        value: _133.MsgUnpinCodes;
                    };
                    storeAndInstantiateContract(value: _133.MsgStoreAndInstantiateContract): {
                        typeUrl: string;
                        value: _133.MsgStoreAndInstantiateContract;
                    };
                    removeCodeUploadParamsAddresses(value: _133.MsgRemoveCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: _133.MsgRemoveCodeUploadParamsAddresses;
                    };
                    addCodeUploadParamsAddresses(value: _133.MsgAddCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: _133.MsgAddCodeUploadParamsAddresses;
                    };
                    storeAndMigrateContract(value: _133.MsgStoreAndMigrateContract): {
                        typeUrl: string;
                        value: _133.MsgStoreAndMigrateContract;
                    };
                    updateContractLabel(value: _133.MsgUpdateContractLabel): {
                        typeUrl: string;
                        value: _133.MsgUpdateContractLabel;
                    };
                };
                fromPartial: {
                    storeCode(value: _133.MsgStoreCode): {
                        typeUrl: string;
                        value: _133.MsgStoreCode;
                    };
                    instantiateContract(value: _133.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _133.MsgInstantiateContract;
                    };
                    instantiateContract2(value: _133.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: _133.MsgInstantiateContract2;
                    };
                    executeContract(value: _133.MsgExecuteContract): {
                        typeUrl: string;
                        value: _133.MsgExecuteContract;
                    };
                    migrateContract(value: _133.MsgMigrateContract): {
                        typeUrl: string;
                        value: _133.MsgMigrateContract;
                    };
                    updateAdmin(value: _133.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _133.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _133.MsgClearAdmin): {
                        typeUrl: string;
                        value: _133.MsgClearAdmin;
                    };
                    updateInstantiateConfig(value: _133.MsgUpdateInstantiateConfig): {
                        typeUrl: string;
                        value: _133.MsgUpdateInstantiateConfig;
                    };
                    updateParams(value: _133.MsgUpdateParams): {
                        typeUrl: string;
                        value: _133.MsgUpdateParams;
                    };
                    sudoContract(value: _133.MsgSudoContract): {
                        typeUrl: string;
                        value: _133.MsgSudoContract;
                    };
                    pinCodes(value: _133.MsgPinCodes): {
                        typeUrl: string;
                        value: _133.MsgPinCodes;
                    };
                    unpinCodes(value: _133.MsgUnpinCodes): {
                        typeUrl: string;
                        value: _133.MsgUnpinCodes;
                    };
                    storeAndInstantiateContract(value: _133.MsgStoreAndInstantiateContract): {
                        typeUrl: string;
                        value: _133.MsgStoreAndInstantiateContract;
                    };
                    removeCodeUploadParamsAddresses(value: _133.MsgRemoveCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: _133.MsgRemoveCodeUploadParamsAddresses;
                    };
                    addCodeUploadParamsAddresses(value: _133.MsgAddCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: _133.MsgAddCodeUploadParamsAddresses;
                    };
                    storeAndMigrateContract(value: _133.MsgStoreAndMigrateContract): {
                        typeUrl: string;
                        value: _133.MsgStoreAndMigrateContract;
                    };
                    updateContractLabel(value: _133.MsgUpdateContractLabel): {
                        typeUrl: string;
                        value: _133.MsgUpdateContractLabel;
                    };
                };
            };
            AminoConverter: {
                "/cosmwasm.wasm.v1.MsgStoreCode": {
                    aminoType: string;
                    toAmino: (message: _133.MsgStoreCode) => _133.MsgStoreCodeAmino;
                    fromAmino: (object: _133.MsgStoreCodeAmino) => _133.MsgStoreCode;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract": {
                    aminoType: string;
                    toAmino: (message: _133.MsgInstantiateContract) => _133.MsgInstantiateContractAmino;
                    fromAmino: (object: _133.MsgInstantiateContractAmino) => _133.MsgInstantiateContract;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract2": {
                    aminoType: string;
                    toAmino: (message: _133.MsgInstantiateContract2) => _133.MsgInstantiateContract2Amino;
                    fromAmino: (object: _133.MsgInstantiateContract2Amino) => _133.MsgInstantiateContract2;
                };
                "/cosmwasm.wasm.v1.MsgExecuteContract": {
                    aminoType: string;
                    toAmino: (message: _133.MsgExecuteContract) => _133.MsgExecuteContractAmino;
                    fromAmino: (object: _133.MsgExecuteContractAmino) => _133.MsgExecuteContract;
                };
                "/cosmwasm.wasm.v1.MsgMigrateContract": {
                    aminoType: string;
                    toAmino: (message: _133.MsgMigrateContract) => _133.MsgMigrateContractAmino;
                    fromAmino: (object: _133.MsgMigrateContractAmino) => _133.MsgMigrateContract;
                };
                "/cosmwasm.wasm.v1.MsgUpdateAdmin": {
                    aminoType: string;
                    toAmino: (message: _133.MsgUpdateAdmin) => _133.MsgUpdateAdminAmino;
                    fromAmino: (object: _133.MsgUpdateAdminAmino) => _133.MsgUpdateAdmin;
                };
                "/cosmwasm.wasm.v1.MsgClearAdmin": {
                    aminoType: string;
                    toAmino: (message: _133.MsgClearAdmin) => _133.MsgClearAdminAmino;
                    fromAmino: (object: _133.MsgClearAdminAmino) => _133.MsgClearAdmin;
                };
                "/cosmwasm.wasm.v1.MsgUpdateInstantiateConfig": {
                    aminoType: string;
                    toAmino: (message: _133.MsgUpdateInstantiateConfig) => _133.MsgUpdateInstantiateConfigAmino;
                    fromAmino: (object: _133.MsgUpdateInstantiateConfigAmino) => _133.MsgUpdateInstantiateConfig;
                };
                "/cosmwasm.wasm.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _133.MsgUpdateParams) => _133.MsgUpdateParamsAmino;
                    fromAmino: (object: _133.MsgUpdateParamsAmino) => _133.MsgUpdateParams;
                };
                "/cosmwasm.wasm.v1.MsgSudoContract": {
                    aminoType: string;
                    toAmino: (message: _133.MsgSudoContract) => _133.MsgSudoContractAmino;
                    fromAmino: (object: _133.MsgSudoContractAmino) => _133.MsgSudoContract;
                };
                "/cosmwasm.wasm.v1.MsgPinCodes": {
                    aminoType: string;
                    toAmino: (message: _133.MsgPinCodes) => _133.MsgPinCodesAmino;
                    fromAmino: (object: _133.MsgPinCodesAmino) => _133.MsgPinCodes;
                };
                "/cosmwasm.wasm.v1.MsgUnpinCodes": {
                    aminoType: string;
                    toAmino: (message: _133.MsgUnpinCodes) => _133.MsgUnpinCodesAmino;
                    fromAmino: (object: _133.MsgUnpinCodesAmino) => _133.MsgUnpinCodes;
                };
                "/cosmwasm.wasm.v1.MsgStoreAndInstantiateContract": {
                    aminoType: string;
                    toAmino: (message: _133.MsgStoreAndInstantiateContract) => _133.MsgStoreAndInstantiateContractAmino;
                    fromAmino: (object: _133.MsgStoreAndInstantiateContractAmino) => _133.MsgStoreAndInstantiateContract;
                };
                "/cosmwasm.wasm.v1.MsgRemoveCodeUploadParamsAddresses": {
                    aminoType: string;
                    toAmino: (message: _133.MsgRemoveCodeUploadParamsAddresses) => _133.MsgRemoveCodeUploadParamsAddressesAmino;
                    fromAmino: (object: _133.MsgRemoveCodeUploadParamsAddressesAmino) => _133.MsgRemoveCodeUploadParamsAddresses;
                };
                "/cosmwasm.wasm.v1.MsgAddCodeUploadParamsAddresses": {
                    aminoType: string;
                    toAmino: (message: _133.MsgAddCodeUploadParamsAddresses) => _133.MsgAddCodeUploadParamsAddressesAmino;
                    fromAmino: (object: _133.MsgAddCodeUploadParamsAddressesAmino) => _133.MsgAddCodeUploadParamsAddresses;
                };
                "/cosmwasm.wasm.v1.MsgStoreAndMigrateContract": {
                    aminoType: string;
                    toAmino: (message: _133.MsgStoreAndMigrateContract) => _133.MsgStoreAndMigrateContractAmino;
                    fromAmino: (object: _133.MsgStoreAndMigrateContractAmino) => _133.MsgStoreAndMigrateContract;
                };
                "/cosmwasm.wasm.v1.MsgUpdateContractLabel": {
                    aminoType: string;
                    toAmino: (message: _133.MsgUpdateContractLabel) => _133.MsgUpdateContractLabelAmino;
                    fromAmino: (object: _133.MsgUpdateContractLabelAmino) => _133.MsgUpdateContractLabel;
                };
            };
            accessTypeFromJSON(object: any): _134.AccessType;
            accessTypeToJSON(object: _134.AccessType): string;
            contractCodeHistoryOperationTypeFromJSON(object: any): _134.ContractCodeHistoryOperationType;
            contractCodeHistoryOperationTypeToJSON(object: _134.ContractCodeHistoryOperationType): string;
            AccessType: typeof _134.AccessType;
            AccessTypeSDKType: typeof _134.AccessType;
            AccessTypeAmino: typeof _134.AccessType;
            ContractCodeHistoryOperationType: typeof _134.ContractCodeHistoryOperationType;
            ContractCodeHistoryOperationTypeSDKType: typeof _134.ContractCodeHistoryOperationType;
            ContractCodeHistoryOperationTypeAmino: typeof _134.ContractCodeHistoryOperationType;
            AccessTypeParam: {
                typeUrl: string;
                encode(message: _134.AccessTypeParam, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.AccessTypeParam;
                fromPartial(object: Partial<_134.AccessTypeParam>): _134.AccessTypeParam;
                fromAmino(object: _134.AccessTypeParamAmino): _134.AccessTypeParam;
                toAmino(message: _134.AccessTypeParam): _134.AccessTypeParamAmino;
                fromAminoMsg(object: _134.AccessTypeParamAminoMsg): _134.AccessTypeParam;
                toAminoMsg(message: _134.AccessTypeParam): _134.AccessTypeParamAminoMsg;
                fromProtoMsg(message: _134.AccessTypeParamProtoMsg): _134.AccessTypeParam;
                toProto(message: _134.AccessTypeParam): Uint8Array;
                toProtoMsg(message: _134.AccessTypeParam): _134.AccessTypeParamProtoMsg;
            };
            AccessConfig: {
                typeUrl: string;
                encode(message: _134.AccessConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.AccessConfig;
                fromPartial(object: Partial<_134.AccessConfig>): _134.AccessConfig;
                fromAmino(object: _134.AccessConfigAmino): _134.AccessConfig;
                toAmino(message: _134.AccessConfig): _134.AccessConfigAmino;
                fromAminoMsg(object: _134.AccessConfigAminoMsg): _134.AccessConfig;
                toAminoMsg(message: _134.AccessConfig): _134.AccessConfigAminoMsg;
                fromProtoMsg(message: _134.AccessConfigProtoMsg): _134.AccessConfig;
                toProto(message: _134.AccessConfig): Uint8Array;
                toProtoMsg(message: _134.AccessConfig): _134.AccessConfigProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _134.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.Params;
                fromPartial(object: Partial<_134.Params>): _134.Params;
                fromAmino(object: _134.ParamsAmino): _134.Params;
                toAmino(message: _134.Params): _134.ParamsAmino;
                fromAminoMsg(object: _134.ParamsAminoMsg): _134.Params;
                toAminoMsg(message: _134.Params): _134.ParamsAminoMsg;
                fromProtoMsg(message: _134.ParamsProtoMsg): _134.Params;
                toProto(message: _134.Params): Uint8Array;
                toProtoMsg(message: _134.Params): _134.ParamsProtoMsg;
            };
            CodeInfo: {
                typeUrl: string;
                encode(message: _134.CodeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.CodeInfo;
                fromPartial(object: Partial<_134.CodeInfo>): _134.CodeInfo;
                fromAmino(object: _134.CodeInfoAmino): _134.CodeInfo;
                toAmino(message: _134.CodeInfo): _134.CodeInfoAmino;
                fromAminoMsg(object: _134.CodeInfoAminoMsg): _134.CodeInfo;
                toAminoMsg(message: _134.CodeInfo): _134.CodeInfoAminoMsg;
                fromProtoMsg(message: _134.CodeInfoProtoMsg): _134.CodeInfo;
                toProto(message: _134.CodeInfo): Uint8Array;
                toProtoMsg(message: _134.CodeInfo): _134.CodeInfoProtoMsg;
            };
            ContractInfo: {
                typeUrl: string;
                encode(message: _134.ContractInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.ContractInfo;
                fromPartial(object: Partial<_134.ContractInfo>): _134.ContractInfo;
                fromAmino(object: _134.ContractInfoAmino): _134.ContractInfo;
                toAmino(message: _134.ContractInfo): _134.ContractInfoAmino;
                fromAminoMsg(object: _134.ContractInfoAminoMsg): _134.ContractInfo;
                toAminoMsg(message: _134.ContractInfo): _134.ContractInfoAminoMsg;
                fromProtoMsg(message: _134.ContractInfoProtoMsg): _134.ContractInfo;
                toProto(message: _134.ContractInfo): Uint8Array;
                toProtoMsg(message: _134.ContractInfo): _134.ContractInfoProtoMsg;
            };
            ContractCodeHistoryEntry: {
                typeUrl: string;
                encode(message: _134.ContractCodeHistoryEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.ContractCodeHistoryEntry;
                fromPartial(object: Partial<_134.ContractCodeHistoryEntry>): _134.ContractCodeHistoryEntry;
                fromAmino(object: _134.ContractCodeHistoryEntryAmino): _134.ContractCodeHistoryEntry;
                toAmino(message: _134.ContractCodeHistoryEntry): _134.ContractCodeHistoryEntryAmino;
                fromAminoMsg(object: _134.ContractCodeHistoryEntryAminoMsg): _134.ContractCodeHistoryEntry;
                toAminoMsg(message: _134.ContractCodeHistoryEntry): _134.ContractCodeHistoryEntryAminoMsg;
                fromProtoMsg(message: _134.ContractCodeHistoryEntryProtoMsg): _134.ContractCodeHistoryEntry;
                toProto(message: _134.ContractCodeHistoryEntry): Uint8Array;
                toProtoMsg(message: _134.ContractCodeHistoryEntry): _134.ContractCodeHistoryEntryProtoMsg;
            };
            AbsoluteTxPosition: {
                typeUrl: string;
                encode(message: _134.AbsoluteTxPosition, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.AbsoluteTxPosition;
                fromPartial(object: Partial<_134.AbsoluteTxPosition>): _134.AbsoluteTxPosition;
                fromAmino(object: _134.AbsoluteTxPositionAmino): _134.AbsoluteTxPosition;
                toAmino(message: _134.AbsoluteTxPosition): _134.AbsoluteTxPositionAmino;
                fromAminoMsg(object: _134.AbsoluteTxPositionAminoMsg): _134.AbsoluteTxPosition;
                toAminoMsg(message: _134.AbsoluteTxPosition): _134.AbsoluteTxPositionAminoMsg;
                fromProtoMsg(message: _134.AbsoluteTxPositionProtoMsg): _134.AbsoluteTxPosition;
                toProto(message: _134.AbsoluteTxPosition): Uint8Array;
                toProtoMsg(message: _134.AbsoluteTxPosition): _134.AbsoluteTxPositionProtoMsg;
            };
            Model: {
                typeUrl: string;
                encode(message: _134.Model, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.Model;
                fromPartial(object: Partial<_134.Model>): _134.Model;
                fromAmino(object: _134.ModelAmino): _134.Model;
                toAmino(message: _134.Model): _134.ModelAmino;
                fromAminoMsg(object: _134.ModelAminoMsg): _134.Model;
                toAminoMsg(message: _134.Model): _134.ModelAminoMsg;
                fromProtoMsg(message: _134.ModelProtoMsg): _134.Model;
                toProto(message: _134.Model): Uint8Array;
                toProtoMsg(message: _134.Model): _134.ModelProtoMsg;
            };
            Cosmwasm_wasmv1ContractInfoExtension_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmwasm_wasmv1ContractInfoExtension_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmwasm_wasmv1ContractInfoExtension_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            MsgStoreCode: {
                typeUrl: string;
                encode(message: _133.MsgStoreCode, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.MsgStoreCode;
                fromPartial(object: Partial<_133.MsgStoreCode>): _133.MsgStoreCode;
                fromAmino(object: _133.MsgStoreCodeAmino): _133.MsgStoreCode;
                toAmino(message: _133.MsgStoreCode): _133.MsgStoreCodeAmino;
                fromAminoMsg(object: _133.MsgStoreCodeAminoMsg): _133.MsgStoreCode;
                toAminoMsg(message: _133.MsgStoreCode): _133.MsgStoreCodeAminoMsg;
                fromProtoMsg(message: _133.MsgStoreCodeProtoMsg): _133.MsgStoreCode;
                toProto(message: _133.MsgStoreCode): Uint8Array;
                toProtoMsg(message: _133.MsgStoreCode): _133.MsgStoreCodeProtoMsg;
            };
            MsgStoreCodeResponse: {
                typeUrl: string;
                encode(message: _133.MsgStoreCodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.MsgStoreCodeResponse;
                fromPartial(object: Partial<_133.MsgStoreCodeResponse>): _133.MsgStoreCodeResponse;
                fromAmino(object: _133.MsgStoreCodeResponseAmino): _133.MsgStoreCodeResponse;
                toAmino(message: _133.MsgStoreCodeResponse): _133.MsgStoreCodeResponseAmino;
                fromAminoMsg(object: _133.MsgStoreCodeResponseAminoMsg): _133.MsgStoreCodeResponse;
                toAminoMsg(message: _133.MsgStoreCodeResponse): _133.MsgStoreCodeResponseAminoMsg;
                fromProtoMsg(message: _133.MsgStoreCodeResponseProtoMsg): _133.MsgStoreCodeResponse;
                toProto(message: _133.MsgStoreCodeResponse): Uint8Array;
                toProtoMsg(message: _133.MsgStoreCodeResponse): _133.MsgStoreCodeResponseProtoMsg;
            };
            MsgInstantiateContract: {
                typeUrl: string;
                encode(message: _133.MsgInstantiateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.MsgInstantiateContract;
                fromPartial(object: Partial<_133.MsgInstantiateContract>): _133.MsgInstantiateContract;
                fromAmino(object: _133.MsgInstantiateContractAmino): _133.MsgInstantiateContract;
                toAmino(message: _133.MsgInstantiateContract): _133.MsgInstantiateContractAmino;
                fromAminoMsg(object: _133.MsgInstantiateContractAminoMsg): _133.MsgInstantiateContract;
                toAminoMsg(message: _133.MsgInstantiateContract): _133.MsgInstantiateContractAminoMsg;
                fromProtoMsg(message: _133.MsgInstantiateContractProtoMsg): _133.MsgInstantiateContract;
                toProto(message: _133.MsgInstantiateContract): Uint8Array;
                toProtoMsg(message: _133.MsgInstantiateContract): _133.MsgInstantiateContractProtoMsg;
            };
            MsgInstantiateContractResponse: {
                typeUrl: string;
                encode(message: _133.MsgInstantiateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.MsgInstantiateContractResponse;
                fromPartial(object: Partial<_133.MsgInstantiateContractResponse>): _133.MsgInstantiateContractResponse;
                fromAmino(object: _133.MsgInstantiateContractResponseAmino): _133.MsgInstantiateContractResponse;
                toAmino(message: _133.MsgInstantiateContractResponse): _133.MsgInstantiateContractResponseAmino;
                fromAminoMsg(object: _133.MsgInstantiateContractResponseAminoMsg): _133.MsgInstantiateContractResponse;
                toAminoMsg(message: _133.MsgInstantiateContractResponse): _133.MsgInstantiateContractResponseAminoMsg;
                fromProtoMsg(message: _133.MsgInstantiateContractResponseProtoMsg): _133.MsgInstantiateContractResponse;
                toProto(message: _133.MsgInstantiateContractResponse): Uint8Array;
                toProtoMsg(message: _133.MsgInstantiateContractResponse): _133.MsgInstantiateContractResponseProtoMsg;
            };
            MsgInstantiateContract2: {
                typeUrl: string;
                encode(message: _133.MsgInstantiateContract2, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.MsgInstantiateContract2;
                fromPartial(object: Partial<_133.MsgInstantiateContract2>): _133.MsgInstantiateContract2;
                fromAmino(object: _133.MsgInstantiateContract2Amino): _133.MsgInstantiateContract2;
                toAmino(message: _133.MsgInstantiateContract2): _133.MsgInstantiateContract2Amino;
                fromAminoMsg(object: _133.MsgInstantiateContract2AminoMsg): _133.MsgInstantiateContract2;
                toAminoMsg(message: _133.MsgInstantiateContract2): _133.MsgInstantiateContract2AminoMsg;
                fromProtoMsg(message: _133.MsgInstantiateContract2ProtoMsg): _133.MsgInstantiateContract2;
                toProto(message: _133.MsgInstantiateContract2): Uint8Array;
                toProtoMsg(message: _133.MsgInstantiateContract2): _133.MsgInstantiateContract2ProtoMsg;
            };
            MsgInstantiateContract2Response: {
                typeUrl: string;
                encode(message: _133.MsgInstantiateContract2Response, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.MsgInstantiateContract2Response;
                fromPartial(object: Partial<_133.MsgInstantiateContract2Response>): _133.MsgInstantiateContract2Response;
                fromAmino(object: _133.MsgInstantiateContract2ResponseAmino): _133.MsgInstantiateContract2Response;
                toAmino(message: _133.MsgInstantiateContract2Response): _133.MsgInstantiateContract2ResponseAmino;
                fromAminoMsg(object: _133.MsgInstantiateContract2ResponseAminoMsg): _133.MsgInstantiateContract2Response;
                toAminoMsg(message: _133.MsgInstantiateContract2Response): _133.MsgInstantiateContract2ResponseAminoMsg;
                fromProtoMsg(message: _133.MsgInstantiateContract2ResponseProtoMsg): _133.MsgInstantiateContract2Response;
                toProto(message: _133.MsgInstantiateContract2Response): Uint8Array;
                toProtoMsg(message: _133.MsgInstantiateContract2Response): _133.MsgInstantiateContract2ResponseProtoMsg;
            };
            MsgExecuteContract: {
                typeUrl: string;
                encode(message: _133.MsgExecuteContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.MsgExecuteContract;
                fromPartial(object: Partial<_133.MsgExecuteContract>): _133.MsgExecuteContract;
                fromAmino(object: _133.MsgExecuteContractAmino): _133.MsgExecuteContract;
                toAmino(message: _133.MsgExecuteContract): _133.MsgExecuteContractAmino;
                fromAminoMsg(object: _133.MsgExecuteContractAminoMsg): _133.MsgExecuteContract;
                toAminoMsg(message: _133.MsgExecuteContract): _133.MsgExecuteContractAminoMsg;
                fromProtoMsg(message: _133.MsgExecuteContractProtoMsg): _133.MsgExecuteContract;
                toProto(message: _133.MsgExecuteContract): Uint8Array;
                toProtoMsg(message: _133.MsgExecuteContract): _133.MsgExecuteContractProtoMsg;
            };
            MsgExecuteContractResponse: {
                typeUrl: string;
                encode(message: _133.MsgExecuteContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.MsgExecuteContractResponse;
                fromPartial(object: Partial<_133.MsgExecuteContractResponse>): _133.MsgExecuteContractResponse;
                fromAmino(object: _133.MsgExecuteContractResponseAmino): _133.MsgExecuteContractResponse;
                toAmino(message: _133.MsgExecuteContractResponse): _133.MsgExecuteContractResponseAmino;
                fromAminoMsg(object: _133.MsgExecuteContractResponseAminoMsg): _133.MsgExecuteContractResponse;
                toAminoMsg(message: _133.MsgExecuteContractResponse): _133.MsgExecuteContractResponseAminoMsg;
                fromProtoMsg(message: _133.MsgExecuteContractResponseProtoMsg): _133.MsgExecuteContractResponse;
                toProto(message: _133.MsgExecuteContractResponse): Uint8Array;
                toProtoMsg(message: _133.MsgExecuteContractResponse): _133.MsgExecuteContractResponseProtoMsg;
            };
            MsgMigrateContract: {
                typeUrl: string;
                encode(message: _133.MsgMigrateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.MsgMigrateContract;
                fromPartial(object: Partial<_133.MsgMigrateContract>): _133.MsgMigrateContract;
                fromAmino(object: _133.MsgMigrateContractAmino): _133.MsgMigrateContract;
                toAmino(message: _133.MsgMigrateContract): _133.MsgMigrateContractAmino;
                fromAminoMsg(object: _133.MsgMigrateContractAminoMsg): _133.MsgMigrateContract;
                toAminoMsg(message: _133.MsgMigrateContract): _133.MsgMigrateContractAminoMsg;
                fromProtoMsg(message: _133.MsgMigrateContractProtoMsg): _133.MsgMigrateContract;
                toProto(message: _133.MsgMigrateContract): Uint8Array;
                toProtoMsg(message: _133.MsgMigrateContract): _133.MsgMigrateContractProtoMsg;
            };
            MsgMigrateContractResponse: {
                typeUrl: string;
                encode(message: _133.MsgMigrateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.MsgMigrateContractResponse;
                fromPartial(object: Partial<_133.MsgMigrateContractResponse>): _133.MsgMigrateContractResponse;
                fromAmino(object: _133.MsgMigrateContractResponseAmino): _133.MsgMigrateContractResponse;
                toAmino(message: _133.MsgMigrateContractResponse): _133.MsgMigrateContractResponseAmino;
                fromAminoMsg(object: _133.MsgMigrateContractResponseAminoMsg): _133.MsgMigrateContractResponse;
                toAminoMsg(message: _133.MsgMigrateContractResponse): _133.MsgMigrateContractResponseAminoMsg;
                fromProtoMsg(message: _133.MsgMigrateContractResponseProtoMsg): _133.MsgMigrateContractResponse;
                toProto(message: _133.MsgMigrateContractResponse): Uint8Array;
                toProtoMsg(message: _133.MsgMigrateContractResponse): _133.MsgMigrateContractResponseProtoMsg;
            };
            MsgUpdateAdmin: {
                typeUrl: string;
                encode(message: _133.MsgUpdateAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.MsgUpdateAdmin;
                fromPartial(object: Partial<_133.MsgUpdateAdmin>): _133.MsgUpdateAdmin;
                fromAmino(object: _133.MsgUpdateAdminAmino): _133.MsgUpdateAdmin;
                toAmino(message: _133.MsgUpdateAdmin): _133.MsgUpdateAdminAmino;
                fromAminoMsg(object: _133.MsgUpdateAdminAminoMsg): _133.MsgUpdateAdmin;
                toAminoMsg(message: _133.MsgUpdateAdmin): _133.MsgUpdateAdminAminoMsg;
                fromProtoMsg(message: _133.MsgUpdateAdminProtoMsg): _133.MsgUpdateAdmin;
                toProto(message: _133.MsgUpdateAdmin): Uint8Array;
                toProtoMsg(message: _133.MsgUpdateAdmin): _133.MsgUpdateAdminProtoMsg;
            };
            MsgUpdateAdminResponse: {
                typeUrl: string;
                encode(_: _133.MsgUpdateAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.MsgUpdateAdminResponse;
                fromPartial(_: Partial<_133.MsgUpdateAdminResponse>): _133.MsgUpdateAdminResponse;
                fromAmino(_: _133.MsgUpdateAdminResponseAmino): _133.MsgUpdateAdminResponse;
                toAmino(_: _133.MsgUpdateAdminResponse): _133.MsgUpdateAdminResponseAmino;
                fromAminoMsg(object: _133.MsgUpdateAdminResponseAminoMsg): _133.MsgUpdateAdminResponse;
                toAminoMsg(message: _133.MsgUpdateAdminResponse): _133.MsgUpdateAdminResponseAminoMsg;
                fromProtoMsg(message: _133.MsgUpdateAdminResponseProtoMsg): _133.MsgUpdateAdminResponse;
                toProto(message: _133.MsgUpdateAdminResponse): Uint8Array;
                toProtoMsg(message: _133.MsgUpdateAdminResponse): _133.MsgUpdateAdminResponseProtoMsg;
            };
            MsgClearAdmin: {
                typeUrl: string;
                encode(message: _133.MsgClearAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.MsgClearAdmin;
                fromPartial(object: Partial<_133.MsgClearAdmin>): _133.MsgClearAdmin;
                fromAmino(object: _133.MsgClearAdminAmino): _133.MsgClearAdmin;
                toAmino(message: _133.MsgClearAdmin): _133.MsgClearAdminAmino;
                fromAminoMsg(object: _133.MsgClearAdminAminoMsg): _133.MsgClearAdmin;
                toAminoMsg(message: _133.MsgClearAdmin): _133.MsgClearAdminAminoMsg;
                fromProtoMsg(message: _133.MsgClearAdminProtoMsg): _133.MsgClearAdmin;
                toProto(message: _133.MsgClearAdmin): Uint8Array;
                toProtoMsg(message: _133.MsgClearAdmin): _133.MsgClearAdminProtoMsg;
            };
            MsgClearAdminResponse: {
                typeUrl: string;
                encode(_: _133.MsgClearAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.MsgClearAdminResponse;
                fromPartial(_: Partial<_133.MsgClearAdminResponse>): _133.MsgClearAdminResponse;
                fromAmino(_: _133.MsgClearAdminResponseAmino): _133.MsgClearAdminResponse;
                toAmino(_: _133.MsgClearAdminResponse): _133.MsgClearAdminResponseAmino;
                fromAminoMsg(object: _133.MsgClearAdminResponseAminoMsg): _133.MsgClearAdminResponse;
                toAminoMsg(message: _133.MsgClearAdminResponse): _133.MsgClearAdminResponseAminoMsg;
                fromProtoMsg(message: _133.MsgClearAdminResponseProtoMsg): _133.MsgClearAdminResponse;
                toProto(message: _133.MsgClearAdminResponse): Uint8Array;
                toProtoMsg(message: _133.MsgClearAdminResponse): _133.MsgClearAdminResponseProtoMsg;
            };
            MsgUpdateInstantiateConfig: {
                typeUrl: string;
                encode(message: _133.MsgUpdateInstantiateConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.MsgUpdateInstantiateConfig;
                fromPartial(object: Partial<_133.MsgUpdateInstantiateConfig>): _133.MsgUpdateInstantiateConfig;
                fromAmino(object: _133.MsgUpdateInstantiateConfigAmino): _133.MsgUpdateInstantiateConfig;
                toAmino(message: _133.MsgUpdateInstantiateConfig): _133.MsgUpdateInstantiateConfigAmino;
                fromAminoMsg(object: _133.MsgUpdateInstantiateConfigAminoMsg): _133.MsgUpdateInstantiateConfig;
                toAminoMsg(message: _133.MsgUpdateInstantiateConfig): _133.MsgUpdateInstantiateConfigAminoMsg;
                fromProtoMsg(message: _133.MsgUpdateInstantiateConfigProtoMsg): _133.MsgUpdateInstantiateConfig;
                toProto(message: _133.MsgUpdateInstantiateConfig): Uint8Array;
                toProtoMsg(message: _133.MsgUpdateInstantiateConfig): _133.MsgUpdateInstantiateConfigProtoMsg;
            };
            MsgUpdateInstantiateConfigResponse: {
                typeUrl: string;
                encode(_: _133.MsgUpdateInstantiateConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.MsgUpdateInstantiateConfigResponse;
                fromPartial(_: Partial<_133.MsgUpdateInstantiateConfigResponse>): _133.MsgUpdateInstantiateConfigResponse;
                fromAmino(_: _133.MsgUpdateInstantiateConfigResponseAmino): _133.MsgUpdateInstantiateConfigResponse;
                toAmino(_: _133.MsgUpdateInstantiateConfigResponse): _133.MsgUpdateInstantiateConfigResponseAmino;
                fromAminoMsg(object: _133.MsgUpdateInstantiateConfigResponseAminoMsg): _133.MsgUpdateInstantiateConfigResponse;
                toAminoMsg(message: _133.MsgUpdateInstantiateConfigResponse): _133.MsgUpdateInstantiateConfigResponseAminoMsg;
                fromProtoMsg(message: _133.MsgUpdateInstantiateConfigResponseProtoMsg): _133.MsgUpdateInstantiateConfigResponse;
                toProto(message: _133.MsgUpdateInstantiateConfigResponse): Uint8Array;
                toProtoMsg(message: _133.MsgUpdateInstantiateConfigResponse): _133.MsgUpdateInstantiateConfigResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _133.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.MsgUpdateParams;
                fromPartial(object: Partial<_133.MsgUpdateParams>): _133.MsgUpdateParams;
                fromAmino(object: _133.MsgUpdateParamsAmino): _133.MsgUpdateParams;
                toAmino(message: _133.MsgUpdateParams): _133.MsgUpdateParamsAmino;
                fromAminoMsg(object: _133.MsgUpdateParamsAminoMsg): _133.MsgUpdateParams;
                toAminoMsg(message: _133.MsgUpdateParams): _133.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _133.MsgUpdateParamsProtoMsg): _133.MsgUpdateParams;
                toProto(message: _133.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _133.MsgUpdateParams): _133.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _133.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_133.MsgUpdateParamsResponse>): _133.MsgUpdateParamsResponse;
                fromAmino(_: _133.MsgUpdateParamsResponseAmino): _133.MsgUpdateParamsResponse;
                toAmino(_: _133.MsgUpdateParamsResponse): _133.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _133.MsgUpdateParamsResponseAminoMsg): _133.MsgUpdateParamsResponse;
                toAminoMsg(message: _133.MsgUpdateParamsResponse): _133.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _133.MsgUpdateParamsResponseProtoMsg): _133.MsgUpdateParamsResponse;
                toProto(message: _133.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _133.MsgUpdateParamsResponse): _133.MsgUpdateParamsResponseProtoMsg;
            };
            MsgSudoContract: {
                typeUrl: string;
                encode(message: _133.MsgSudoContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.MsgSudoContract;
                fromPartial(object: Partial<_133.MsgSudoContract>): _133.MsgSudoContract;
                fromAmino(object: _133.MsgSudoContractAmino): _133.MsgSudoContract;
                toAmino(message: _133.MsgSudoContract): _133.MsgSudoContractAmino;
                fromAminoMsg(object: _133.MsgSudoContractAminoMsg): _133.MsgSudoContract;
                toAminoMsg(message: _133.MsgSudoContract): _133.MsgSudoContractAminoMsg;
                fromProtoMsg(message: _133.MsgSudoContractProtoMsg): _133.MsgSudoContract;
                toProto(message: _133.MsgSudoContract): Uint8Array;
                toProtoMsg(message: _133.MsgSudoContract): _133.MsgSudoContractProtoMsg;
            };
            MsgSudoContractResponse: {
                typeUrl: string;
                encode(message: _133.MsgSudoContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.MsgSudoContractResponse;
                fromPartial(object: Partial<_133.MsgSudoContractResponse>): _133.MsgSudoContractResponse;
                fromAmino(object: _133.MsgSudoContractResponseAmino): _133.MsgSudoContractResponse;
                toAmino(message: _133.MsgSudoContractResponse): _133.MsgSudoContractResponseAmino;
                fromAminoMsg(object: _133.MsgSudoContractResponseAminoMsg): _133.MsgSudoContractResponse;
                toAminoMsg(message: _133.MsgSudoContractResponse): _133.MsgSudoContractResponseAminoMsg;
                fromProtoMsg(message: _133.MsgSudoContractResponseProtoMsg): _133.MsgSudoContractResponse;
                toProto(message: _133.MsgSudoContractResponse): Uint8Array;
                toProtoMsg(message: _133.MsgSudoContractResponse): _133.MsgSudoContractResponseProtoMsg;
            };
            MsgPinCodes: {
                typeUrl: string;
                encode(message: _133.MsgPinCodes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.MsgPinCodes;
                fromPartial(object: Partial<_133.MsgPinCodes>): _133.MsgPinCodes;
                fromAmino(object: _133.MsgPinCodesAmino): _133.MsgPinCodes;
                toAmino(message: _133.MsgPinCodes): _133.MsgPinCodesAmino;
                fromAminoMsg(object: _133.MsgPinCodesAminoMsg): _133.MsgPinCodes;
                toAminoMsg(message: _133.MsgPinCodes): _133.MsgPinCodesAminoMsg;
                fromProtoMsg(message: _133.MsgPinCodesProtoMsg): _133.MsgPinCodes;
                toProto(message: _133.MsgPinCodes): Uint8Array;
                toProtoMsg(message: _133.MsgPinCodes): _133.MsgPinCodesProtoMsg;
            };
            MsgPinCodesResponse: {
                typeUrl: string;
                encode(_: _133.MsgPinCodesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.MsgPinCodesResponse;
                fromPartial(_: Partial<_133.MsgPinCodesResponse>): _133.MsgPinCodesResponse;
                fromAmino(_: _133.MsgPinCodesResponseAmino): _133.MsgPinCodesResponse;
                toAmino(_: _133.MsgPinCodesResponse): _133.MsgPinCodesResponseAmino;
                fromAminoMsg(object: _133.MsgPinCodesResponseAminoMsg): _133.MsgPinCodesResponse;
                toAminoMsg(message: _133.MsgPinCodesResponse): _133.MsgPinCodesResponseAminoMsg;
                fromProtoMsg(message: _133.MsgPinCodesResponseProtoMsg): _133.MsgPinCodesResponse;
                toProto(message: _133.MsgPinCodesResponse): Uint8Array;
                toProtoMsg(message: _133.MsgPinCodesResponse): _133.MsgPinCodesResponseProtoMsg;
            };
            MsgUnpinCodes: {
                typeUrl: string;
                encode(message: _133.MsgUnpinCodes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.MsgUnpinCodes;
                fromPartial(object: Partial<_133.MsgUnpinCodes>): _133.MsgUnpinCodes;
                fromAmino(object: _133.MsgUnpinCodesAmino): _133.MsgUnpinCodes;
                toAmino(message: _133.MsgUnpinCodes): _133.MsgUnpinCodesAmino;
                fromAminoMsg(object: _133.MsgUnpinCodesAminoMsg): _133.MsgUnpinCodes;
                toAminoMsg(message: _133.MsgUnpinCodes): _133.MsgUnpinCodesAminoMsg;
                fromProtoMsg(message: _133.MsgUnpinCodesProtoMsg): _133.MsgUnpinCodes;
                toProto(message: _133.MsgUnpinCodes): Uint8Array;
                toProtoMsg(message: _133.MsgUnpinCodes): _133.MsgUnpinCodesProtoMsg;
            };
            MsgUnpinCodesResponse: {
                typeUrl: string;
                encode(_: _133.MsgUnpinCodesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.MsgUnpinCodesResponse;
                fromPartial(_: Partial<_133.MsgUnpinCodesResponse>): _133.MsgUnpinCodesResponse;
                fromAmino(_: _133.MsgUnpinCodesResponseAmino): _133.MsgUnpinCodesResponse;
                toAmino(_: _133.MsgUnpinCodesResponse): _133.MsgUnpinCodesResponseAmino;
                fromAminoMsg(object: _133.MsgUnpinCodesResponseAminoMsg): _133.MsgUnpinCodesResponse;
                toAminoMsg(message: _133.MsgUnpinCodesResponse): _133.MsgUnpinCodesResponseAminoMsg;
                fromProtoMsg(message: _133.MsgUnpinCodesResponseProtoMsg): _133.MsgUnpinCodesResponse;
                toProto(message: _133.MsgUnpinCodesResponse): Uint8Array;
                toProtoMsg(message: _133.MsgUnpinCodesResponse): _133.MsgUnpinCodesResponseProtoMsg;
            };
            MsgStoreAndInstantiateContract: {
                typeUrl: string;
                encode(message: _133.MsgStoreAndInstantiateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.MsgStoreAndInstantiateContract;
                fromPartial(object: Partial<_133.MsgStoreAndInstantiateContract>): _133.MsgStoreAndInstantiateContract;
                fromAmino(object: _133.MsgStoreAndInstantiateContractAmino): _133.MsgStoreAndInstantiateContract;
                toAmino(message: _133.MsgStoreAndInstantiateContract): _133.MsgStoreAndInstantiateContractAmino;
                fromAminoMsg(object: _133.MsgStoreAndInstantiateContractAminoMsg): _133.MsgStoreAndInstantiateContract;
                toAminoMsg(message: _133.MsgStoreAndInstantiateContract): _133.MsgStoreAndInstantiateContractAminoMsg;
                fromProtoMsg(message: _133.MsgStoreAndInstantiateContractProtoMsg): _133.MsgStoreAndInstantiateContract;
                toProto(message: _133.MsgStoreAndInstantiateContract): Uint8Array;
                toProtoMsg(message: _133.MsgStoreAndInstantiateContract): _133.MsgStoreAndInstantiateContractProtoMsg;
            };
            MsgStoreAndInstantiateContractResponse: {
                typeUrl: string;
                encode(message: _133.MsgStoreAndInstantiateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.MsgStoreAndInstantiateContractResponse;
                fromPartial(object: Partial<_133.MsgStoreAndInstantiateContractResponse>): _133.MsgStoreAndInstantiateContractResponse;
                fromAmino(object: _133.MsgStoreAndInstantiateContractResponseAmino): _133.MsgStoreAndInstantiateContractResponse;
                toAmino(message: _133.MsgStoreAndInstantiateContractResponse): _133.MsgStoreAndInstantiateContractResponseAmino;
                fromAminoMsg(object: _133.MsgStoreAndInstantiateContractResponseAminoMsg): _133.MsgStoreAndInstantiateContractResponse;
                toAminoMsg(message: _133.MsgStoreAndInstantiateContractResponse): _133.MsgStoreAndInstantiateContractResponseAminoMsg;
                fromProtoMsg(message: _133.MsgStoreAndInstantiateContractResponseProtoMsg): _133.MsgStoreAndInstantiateContractResponse;
                toProto(message: _133.MsgStoreAndInstantiateContractResponse): Uint8Array;
                toProtoMsg(message: _133.MsgStoreAndInstantiateContractResponse): _133.MsgStoreAndInstantiateContractResponseProtoMsg;
            };
            MsgAddCodeUploadParamsAddresses: {
                typeUrl: string;
                encode(message: _133.MsgAddCodeUploadParamsAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.MsgAddCodeUploadParamsAddresses;
                fromPartial(object: Partial<_133.MsgAddCodeUploadParamsAddresses>): _133.MsgAddCodeUploadParamsAddresses;
                fromAmino(object: _133.MsgAddCodeUploadParamsAddressesAmino): _133.MsgAddCodeUploadParamsAddresses;
                toAmino(message: _133.MsgAddCodeUploadParamsAddresses): _133.MsgAddCodeUploadParamsAddressesAmino;
                fromAminoMsg(object: _133.MsgAddCodeUploadParamsAddressesAminoMsg): _133.MsgAddCodeUploadParamsAddresses;
                toAminoMsg(message: _133.MsgAddCodeUploadParamsAddresses): _133.MsgAddCodeUploadParamsAddressesAminoMsg;
                fromProtoMsg(message: _133.MsgAddCodeUploadParamsAddressesProtoMsg): _133.MsgAddCodeUploadParamsAddresses;
                toProto(message: _133.MsgAddCodeUploadParamsAddresses): Uint8Array;
                toProtoMsg(message: _133.MsgAddCodeUploadParamsAddresses): _133.MsgAddCodeUploadParamsAddressesProtoMsg;
            };
            MsgAddCodeUploadParamsAddressesResponse: {
                typeUrl: string;
                encode(_: _133.MsgAddCodeUploadParamsAddressesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.MsgAddCodeUploadParamsAddressesResponse;
                fromPartial(_: Partial<_133.MsgAddCodeUploadParamsAddressesResponse>): _133.MsgAddCodeUploadParamsAddressesResponse;
                fromAmino(_: _133.MsgAddCodeUploadParamsAddressesResponseAmino): _133.MsgAddCodeUploadParamsAddressesResponse;
                toAmino(_: _133.MsgAddCodeUploadParamsAddressesResponse): _133.MsgAddCodeUploadParamsAddressesResponseAmino;
                fromAminoMsg(object: _133.MsgAddCodeUploadParamsAddressesResponseAminoMsg): _133.MsgAddCodeUploadParamsAddressesResponse;
                toAminoMsg(message: _133.MsgAddCodeUploadParamsAddressesResponse): _133.MsgAddCodeUploadParamsAddressesResponseAminoMsg;
                fromProtoMsg(message: _133.MsgAddCodeUploadParamsAddressesResponseProtoMsg): _133.MsgAddCodeUploadParamsAddressesResponse;
                toProto(message: _133.MsgAddCodeUploadParamsAddressesResponse): Uint8Array;
                toProtoMsg(message: _133.MsgAddCodeUploadParamsAddressesResponse): _133.MsgAddCodeUploadParamsAddressesResponseProtoMsg;
            };
            MsgRemoveCodeUploadParamsAddresses: {
                typeUrl: string;
                encode(message: _133.MsgRemoveCodeUploadParamsAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.MsgRemoveCodeUploadParamsAddresses;
                fromPartial(object: Partial<_133.MsgRemoveCodeUploadParamsAddresses>): _133.MsgRemoveCodeUploadParamsAddresses;
                fromAmino(object: _133.MsgRemoveCodeUploadParamsAddressesAmino): _133.MsgRemoveCodeUploadParamsAddresses;
                toAmino(message: _133.MsgRemoveCodeUploadParamsAddresses): _133.MsgRemoveCodeUploadParamsAddressesAmino;
                fromAminoMsg(object: _133.MsgRemoveCodeUploadParamsAddressesAminoMsg): _133.MsgRemoveCodeUploadParamsAddresses;
                toAminoMsg(message: _133.MsgRemoveCodeUploadParamsAddresses): _133.MsgRemoveCodeUploadParamsAddressesAminoMsg;
                fromProtoMsg(message: _133.MsgRemoveCodeUploadParamsAddressesProtoMsg): _133.MsgRemoveCodeUploadParamsAddresses;
                toProto(message: _133.MsgRemoveCodeUploadParamsAddresses): Uint8Array;
                toProtoMsg(message: _133.MsgRemoveCodeUploadParamsAddresses): _133.MsgRemoveCodeUploadParamsAddressesProtoMsg;
            };
            MsgRemoveCodeUploadParamsAddressesResponse: {
                typeUrl: string;
                encode(_: _133.MsgRemoveCodeUploadParamsAddressesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.MsgRemoveCodeUploadParamsAddressesResponse;
                fromPartial(_: Partial<_133.MsgRemoveCodeUploadParamsAddressesResponse>): _133.MsgRemoveCodeUploadParamsAddressesResponse;
                fromAmino(_: _133.MsgRemoveCodeUploadParamsAddressesResponseAmino): _133.MsgRemoveCodeUploadParamsAddressesResponse;
                toAmino(_: _133.MsgRemoveCodeUploadParamsAddressesResponse): _133.MsgRemoveCodeUploadParamsAddressesResponseAmino;
                fromAminoMsg(object: _133.MsgRemoveCodeUploadParamsAddressesResponseAminoMsg): _133.MsgRemoveCodeUploadParamsAddressesResponse;
                toAminoMsg(message: _133.MsgRemoveCodeUploadParamsAddressesResponse): _133.MsgRemoveCodeUploadParamsAddressesResponseAminoMsg;
                fromProtoMsg(message: _133.MsgRemoveCodeUploadParamsAddressesResponseProtoMsg): _133.MsgRemoveCodeUploadParamsAddressesResponse;
                toProto(message: _133.MsgRemoveCodeUploadParamsAddressesResponse): Uint8Array;
                toProtoMsg(message: _133.MsgRemoveCodeUploadParamsAddressesResponse): _133.MsgRemoveCodeUploadParamsAddressesResponseProtoMsg;
            };
            MsgStoreAndMigrateContract: {
                typeUrl: string;
                encode(message: _133.MsgStoreAndMigrateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.MsgStoreAndMigrateContract;
                fromPartial(object: Partial<_133.MsgStoreAndMigrateContract>): _133.MsgStoreAndMigrateContract;
                fromAmino(object: _133.MsgStoreAndMigrateContractAmino): _133.MsgStoreAndMigrateContract;
                toAmino(message: _133.MsgStoreAndMigrateContract): _133.MsgStoreAndMigrateContractAmino;
                fromAminoMsg(object: _133.MsgStoreAndMigrateContractAminoMsg): _133.MsgStoreAndMigrateContract;
                toAminoMsg(message: _133.MsgStoreAndMigrateContract): _133.MsgStoreAndMigrateContractAminoMsg;
                fromProtoMsg(message: _133.MsgStoreAndMigrateContractProtoMsg): _133.MsgStoreAndMigrateContract;
                toProto(message: _133.MsgStoreAndMigrateContract): Uint8Array;
                toProtoMsg(message: _133.MsgStoreAndMigrateContract): _133.MsgStoreAndMigrateContractProtoMsg;
            };
            MsgStoreAndMigrateContractResponse: {
                typeUrl: string;
                encode(message: _133.MsgStoreAndMigrateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.MsgStoreAndMigrateContractResponse;
                fromPartial(object: Partial<_133.MsgStoreAndMigrateContractResponse>): _133.MsgStoreAndMigrateContractResponse;
                fromAmino(object: _133.MsgStoreAndMigrateContractResponseAmino): _133.MsgStoreAndMigrateContractResponse;
                toAmino(message: _133.MsgStoreAndMigrateContractResponse): _133.MsgStoreAndMigrateContractResponseAmino;
                fromAminoMsg(object: _133.MsgStoreAndMigrateContractResponseAminoMsg): _133.MsgStoreAndMigrateContractResponse;
                toAminoMsg(message: _133.MsgStoreAndMigrateContractResponse): _133.MsgStoreAndMigrateContractResponseAminoMsg;
                fromProtoMsg(message: _133.MsgStoreAndMigrateContractResponseProtoMsg): _133.MsgStoreAndMigrateContractResponse;
                toProto(message: _133.MsgStoreAndMigrateContractResponse): Uint8Array;
                toProtoMsg(message: _133.MsgStoreAndMigrateContractResponse): _133.MsgStoreAndMigrateContractResponseProtoMsg;
            };
            MsgUpdateContractLabel: {
                typeUrl: string;
                encode(message: _133.MsgUpdateContractLabel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.MsgUpdateContractLabel;
                fromPartial(object: Partial<_133.MsgUpdateContractLabel>): _133.MsgUpdateContractLabel;
                fromAmino(object: _133.MsgUpdateContractLabelAmino): _133.MsgUpdateContractLabel;
                toAmino(message: _133.MsgUpdateContractLabel): _133.MsgUpdateContractLabelAmino;
                fromAminoMsg(object: _133.MsgUpdateContractLabelAminoMsg): _133.MsgUpdateContractLabel;
                toAminoMsg(message: _133.MsgUpdateContractLabel): _133.MsgUpdateContractLabelAminoMsg;
                fromProtoMsg(message: _133.MsgUpdateContractLabelProtoMsg): _133.MsgUpdateContractLabel;
                toProto(message: _133.MsgUpdateContractLabel): Uint8Array;
                toProtoMsg(message: _133.MsgUpdateContractLabel): _133.MsgUpdateContractLabelProtoMsg;
            };
            MsgUpdateContractLabelResponse: {
                typeUrl: string;
                encode(_: _133.MsgUpdateContractLabelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.MsgUpdateContractLabelResponse;
                fromPartial(_: Partial<_133.MsgUpdateContractLabelResponse>): _133.MsgUpdateContractLabelResponse;
                fromAmino(_: _133.MsgUpdateContractLabelResponseAmino): _133.MsgUpdateContractLabelResponse;
                toAmino(_: _133.MsgUpdateContractLabelResponse): _133.MsgUpdateContractLabelResponseAmino;
                fromAminoMsg(object: _133.MsgUpdateContractLabelResponseAminoMsg): _133.MsgUpdateContractLabelResponse;
                toAminoMsg(message: _133.MsgUpdateContractLabelResponse): _133.MsgUpdateContractLabelResponseAminoMsg;
                fromProtoMsg(message: _133.MsgUpdateContractLabelResponseProtoMsg): _133.MsgUpdateContractLabelResponse;
                toProto(message: _133.MsgUpdateContractLabelResponse): Uint8Array;
                toProtoMsg(message: _133.MsgUpdateContractLabelResponse): _133.MsgUpdateContractLabelResponseProtoMsg;
            };
            QueryContractInfoRequest: {
                typeUrl: string;
                encode(message: _132.QueryContractInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _132.QueryContractInfoRequest;
                fromPartial(object: Partial<_132.QueryContractInfoRequest>): _132.QueryContractInfoRequest;
                fromAmino(object: _132.QueryContractInfoRequestAmino): _132.QueryContractInfoRequest;
                toAmino(message: _132.QueryContractInfoRequest): _132.QueryContractInfoRequestAmino;
                fromAminoMsg(object: _132.QueryContractInfoRequestAminoMsg): _132.QueryContractInfoRequest;
                toAminoMsg(message: _132.QueryContractInfoRequest): _132.QueryContractInfoRequestAminoMsg;
                fromProtoMsg(message: _132.QueryContractInfoRequestProtoMsg): _132.QueryContractInfoRequest;
                toProto(message: _132.QueryContractInfoRequest): Uint8Array;
                toProtoMsg(message: _132.QueryContractInfoRequest): _132.QueryContractInfoRequestProtoMsg;
            };
            QueryContractInfoResponse: {
                typeUrl: string;
                encode(message: _132.QueryContractInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _132.QueryContractInfoResponse;
                fromPartial(object: Partial<_132.QueryContractInfoResponse>): _132.QueryContractInfoResponse;
                fromAmino(object: _132.QueryContractInfoResponseAmino): _132.QueryContractInfoResponse;
                toAmino(message: _132.QueryContractInfoResponse): _132.QueryContractInfoResponseAmino;
                fromAminoMsg(object: _132.QueryContractInfoResponseAminoMsg): _132.QueryContractInfoResponse;
                toAminoMsg(message: _132.QueryContractInfoResponse): _132.QueryContractInfoResponseAminoMsg;
                fromProtoMsg(message: _132.QueryContractInfoResponseProtoMsg): _132.QueryContractInfoResponse;
                toProto(message: _132.QueryContractInfoResponse): Uint8Array;
                toProtoMsg(message: _132.QueryContractInfoResponse): _132.QueryContractInfoResponseProtoMsg;
            };
            QueryContractHistoryRequest: {
                typeUrl: string;
                encode(message: _132.QueryContractHistoryRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _132.QueryContractHistoryRequest;
                fromPartial(object: Partial<_132.QueryContractHistoryRequest>): _132.QueryContractHistoryRequest;
                fromAmino(object: _132.QueryContractHistoryRequestAmino): _132.QueryContractHistoryRequest;
                toAmino(message: _132.QueryContractHistoryRequest): _132.QueryContractHistoryRequestAmino;
                fromAminoMsg(object: _132.QueryContractHistoryRequestAminoMsg): _132.QueryContractHistoryRequest;
                toAminoMsg(message: _132.QueryContractHistoryRequest): _132.QueryContractHistoryRequestAminoMsg;
                fromProtoMsg(message: _132.QueryContractHistoryRequestProtoMsg): _132.QueryContractHistoryRequest;
                toProto(message: _132.QueryContractHistoryRequest): Uint8Array;
                toProtoMsg(message: _132.QueryContractHistoryRequest): _132.QueryContractHistoryRequestProtoMsg;
            };
            QueryContractHistoryResponse: {
                typeUrl: string;
                encode(message: _132.QueryContractHistoryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _132.QueryContractHistoryResponse;
                fromPartial(object: Partial<_132.QueryContractHistoryResponse>): _132.QueryContractHistoryResponse;
                fromAmino(object: _132.QueryContractHistoryResponseAmino): _132.QueryContractHistoryResponse;
                toAmino(message: _132.QueryContractHistoryResponse): _132.QueryContractHistoryResponseAmino;
                fromAminoMsg(object: _132.QueryContractHistoryResponseAminoMsg): _132.QueryContractHistoryResponse;
                toAminoMsg(message: _132.QueryContractHistoryResponse): _132.QueryContractHistoryResponseAminoMsg;
                fromProtoMsg(message: _132.QueryContractHistoryResponseProtoMsg): _132.QueryContractHistoryResponse;
                toProto(message: _132.QueryContractHistoryResponse): Uint8Array;
                toProtoMsg(message: _132.QueryContractHistoryResponse): _132.QueryContractHistoryResponseProtoMsg;
            };
            QueryContractsByCodeRequest: {
                typeUrl: string;
                encode(message: _132.QueryContractsByCodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _132.QueryContractsByCodeRequest;
                fromPartial(object: Partial<_132.QueryContractsByCodeRequest>): _132.QueryContractsByCodeRequest;
                fromAmino(object: _132.QueryContractsByCodeRequestAmino): _132.QueryContractsByCodeRequest;
                toAmino(message: _132.QueryContractsByCodeRequest): _132.QueryContractsByCodeRequestAmino;
                fromAminoMsg(object: _132.QueryContractsByCodeRequestAminoMsg): _132.QueryContractsByCodeRequest;
                toAminoMsg(message: _132.QueryContractsByCodeRequest): _132.QueryContractsByCodeRequestAminoMsg;
                fromProtoMsg(message: _132.QueryContractsByCodeRequestProtoMsg): _132.QueryContractsByCodeRequest;
                toProto(message: _132.QueryContractsByCodeRequest): Uint8Array;
                toProtoMsg(message: _132.QueryContractsByCodeRequest): _132.QueryContractsByCodeRequestProtoMsg;
            };
            QueryContractsByCodeResponse: {
                typeUrl: string;
                encode(message: _132.QueryContractsByCodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _132.QueryContractsByCodeResponse;
                fromPartial(object: Partial<_132.QueryContractsByCodeResponse>): _132.QueryContractsByCodeResponse;
                fromAmino(object: _132.QueryContractsByCodeResponseAmino): _132.QueryContractsByCodeResponse;
                toAmino(message: _132.QueryContractsByCodeResponse): _132.QueryContractsByCodeResponseAmino;
                fromAminoMsg(object: _132.QueryContractsByCodeResponseAminoMsg): _132.QueryContractsByCodeResponse;
                toAminoMsg(message: _132.QueryContractsByCodeResponse): _132.QueryContractsByCodeResponseAminoMsg;
                fromProtoMsg(message: _132.QueryContractsByCodeResponseProtoMsg): _132.QueryContractsByCodeResponse;
                toProto(message: _132.QueryContractsByCodeResponse): Uint8Array;
                toProtoMsg(message: _132.QueryContractsByCodeResponse): _132.QueryContractsByCodeResponseProtoMsg;
            };
            QueryAllContractStateRequest: {
                typeUrl: string;
                encode(message: _132.QueryAllContractStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _132.QueryAllContractStateRequest;
                fromPartial(object: Partial<_132.QueryAllContractStateRequest>): _132.QueryAllContractStateRequest;
                fromAmino(object: _132.QueryAllContractStateRequestAmino): _132.QueryAllContractStateRequest;
                toAmino(message: _132.QueryAllContractStateRequest): _132.QueryAllContractStateRequestAmino;
                fromAminoMsg(object: _132.QueryAllContractStateRequestAminoMsg): _132.QueryAllContractStateRequest;
                toAminoMsg(message: _132.QueryAllContractStateRequest): _132.QueryAllContractStateRequestAminoMsg;
                fromProtoMsg(message: _132.QueryAllContractStateRequestProtoMsg): _132.QueryAllContractStateRequest;
                toProto(message: _132.QueryAllContractStateRequest): Uint8Array;
                toProtoMsg(message: _132.QueryAllContractStateRequest): _132.QueryAllContractStateRequestProtoMsg;
            };
            QueryAllContractStateResponse: {
                typeUrl: string;
                encode(message: _132.QueryAllContractStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _132.QueryAllContractStateResponse;
                fromPartial(object: Partial<_132.QueryAllContractStateResponse>): _132.QueryAllContractStateResponse;
                fromAmino(object: _132.QueryAllContractStateResponseAmino): _132.QueryAllContractStateResponse;
                toAmino(message: _132.QueryAllContractStateResponse): _132.QueryAllContractStateResponseAmino;
                fromAminoMsg(object: _132.QueryAllContractStateResponseAminoMsg): _132.QueryAllContractStateResponse;
                toAminoMsg(message: _132.QueryAllContractStateResponse): _132.QueryAllContractStateResponseAminoMsg;
                fromProtoMsg(message: _132.QueryAllContractStateResponseProtoMsg): _132.QueryAllContractStateResponse;
                toProto(message: _132.QueryAllContractStateResponse): Uint8Array;
                toProtoMsg(message: _132.QueryAllContractStateResponse): _132.QueryAllContractStateResponseProtoMsg;
            };
            QueryRawContractStateRequest: {
                typeUrl: string;
                encode(message: _132.QueryRawContractStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _132.QueryRawContractStateRequest;
                fromPartial(object: Partial<_132.QueryRawContractStateRequest>): _132.QueryRawContractStateRequest;
                fromAmino(object: _132.QueryRawContractStateRequestAmino): _132.QueryRawContractStateRequest;
                toAmino(message: _132.QueryRawContractStateRequest): _132.QueryRawContractStateRequestAmino;
                fromAminoMsg(object: _132.QueryRawContractStateRequestAminoMsg): _132.QueryRawContractStateRequest;
                toAminoMsg(message: _132.QueryRawContractStateRequest): _132.QueryRawContractStateRequestAminoMsg;
                fromProtoMsg(message: _132.QueryRawContractStateRequestProtoMsg): _132.QueryRawContractStateRequest;
                toProto(message: _132.QueryRawContractStateRequest): Uint8Array;
                toProtoMsg(message: _132.QueryRawContractStateRequest): _132.QueryRawContractStateRequestProtoMsg;
            };
            QueryRawContractStateResponse: {
                typeUrl: string;
                encode(message: _132.QueryRawContractStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _132.QueryRawContractStateResponse;
                fromPartial(object: Partial<_132.QueryRawContractStateResponse>): _132.QueryRawContractStateResponse;
                fromAmino(object: _132.QueryRawContractStateResponseAmino): _132.QueryRawContractStateResponse;
                toAmino(message: _132.QueryRawContractStateResponse): _132.QueryRawContractStateResponseAmino;
                fromAminoMsg(object: _132.QueryRawContractStateResponseAminoMsg): _132.QueryRawContractStateResponse;
                toAminoMsg(message: _132.QueryRawContractStateResponse): _132.QueryRawContractStateResponseAminoMsg;
                fromProtoMsg(message: _132.QueryRawContractStateResponseProtoMsg): _132.QueryRawContractStateResponse;
                toProto(message: _132.QueryRawContractStateResponse): Uint8Array;
                toProtoMsg(message: _132.QueryRawContractStateResponse): _132.QueryRawContractStateResponseProtoMsg;
            };
            QuerySmartContractStateRequest: {
                typeUrl: string;
                encode(message: _132.QuerySmartContractStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _132.QuerySmartContractStateRequest;
                fromPartial(object: Partial<_132.QuerySmartContractStateRequest>): _132.QuerySmartContractStateRequest;
                fromAmino(object: _132.QuerySmartContractStateRequestAmino): _132.QuerySmartContractStateRequest;
                toAmino(message: _132.QuerySmartContractStateRequest): _132.QuerySmartContractStateRequestAmino;
                fromAminoMsg(object: _132.QuerySmartContractStateRequestAminoMsg): _132.QuerySmartContractStateRequest;
                toAminoMsg(message: _132.QuerySmartContractStateRequest): _132.QuerySmartContractStateRequestAminoMsg;
                fromProtoMsg(message: _132.QuerySmartContractStateRequestProtoMsg): _132.QuerySmartContractStateRequest;
                toProto(message: _132.QuerySmartContractStateRequest): Uint8Array;
                toProtoMsg(message: _132.QuerySmartContractStateRequest): _132.QuerySmartContractStateRequestProtoMsg;
            };
            QuerySmartContractStateResponse: {
                typeUrl: string;
                encode(message: _132.QuerySmartContractStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _132.QuerySmartContractStateResponse;
                fromPartial(object: Partial<_132.QuerySmartContractStateResponse>): _132.QuerySmartContractStateResponse;
                fromAmino(object: _132.QuerySmartContractStateResponseAmino): _132.QuerySmartContractStateResponse;
                toAmino(message: _132.QuerySmartContractStateResponse): _132.QuerySmartContractStateResponseAmino;
                fromAminoMsg(object: _132.QuerySmartContractStateResponseAminoMsg): _132.QuerySmartContractStateResponse;
                toAminoMsg(message: _132.QuerySmartContractStateResponse): _132.QuerySmartContractStateResponseAminoMsg;
                fromProtoMsg(message: _132.QuerySmartContractStateResponseProtoMsg): _132.QuerySmartContractStateResponse;
                toProto(message: _132.QuerySmartContractStateResponse): Uint8Array;
                toProtoMsg(message: _132.QuerySmartContractStateResponse): _132.QuerySmartContractStateResponseProtoMsg;
            };
            QueryCodeRequest: {
                typeUrl: string;
                encode(message: _132.QueryCodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _132.QueryCodeRequest;
                fromPartial(object: Partial<_132.QueryCodeRequest>): _132.QueryCodeRequest;
                fromAmino(object: _132.QueryCodeRequestAmino): _132.QueryCodeRequest;
                toAmino(message: _132.QueryCodeRequest): _132.QueryCodeRequestAmino;
                fromAminoMsg(object: _132.QueryCodeRequestAminoMsg): _132.QueryCodeRequest;
                toAminoMsg(message: _132.QueryCodeRequest): _132.QueryCodeRequestAminoMsg;
                fromProtoMsg(message: _132.QueryCodeRequestProtoMsg): _132.QueryCodeRequest;
                toProto(message: _132.QueryCodeRequest): Uint8Array;
                toProtoMsg(message: _132.QueryCodeRequest): _132.QueryCodeRequestProtoMsg;
            };
            CodeInfoResponse: {
                typeUrl: string;
                encode(message: _132.CodeInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _132.CodeInfoResponse;
                fromPartial(object: Partial<_132.CodeInfoResponse>): _132.CodeInfoResponse;
                fromAmino(object: _132.CodeInfoResponseAmino): _132.CodeInfoResponse;
                toAmino(message: _132.CodeInfoResponse): _132.CodeInfoResponseAmino;
                fromAminoMsg(object: _132.CodeInfoResponseAminoMsg): _132.CodeInfoResponse;
                toAminoMsg(message: _132.CodeInfoResponse): _132.CodeInfoResponseAminoMsg;
                fromProtoMsg(message: _132.CodeInfoResponseProtoMsg): _132.CodeInfoResponse;
                toProto(message: _132.CodeInfoResponse): Uint8Array;
                toProtoMsg(message: _132.CodeInfoResponse): _132.CodeInfoResponseProtoMsg;
            };
            QueryCodeResponse: {
                typeUrl: string;
                encode(message: _132.QueryCodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _132.QueryCodeResponse;
                fromPartial(object: Partial<_132.QueryCodeResponse>): _132.QueryCodeResponse;
                fromAmino(object: _132.QueryCodeResponseAmino): _132.QueryCodeResponse;
                toAmino(message: _132.QueryCodeResponse): _132.QueryCodeResponseAmino;
                fromAminoMsg(object: _132.QueryCodeResponseAminoMsg): _132.QueryCodeResponse;
                toAminoMsg(message: _132.QueryCodeResponse): _132.QueryCodeResponseAminoMsg;
                fromProtoMsg(message: _132.QueryCodeResponseProtoMsg): _132.QueryCodeResponse;
                toProto(message: _132.QueryCodeResponse): Uint8Array;
                toProtoMsg(message: _132.QueryCodeResponse): _132.QueryCodeResponseProtoMsg;
            };
            QueryCodesRequest: {
                typeUrl: string;
                encode(message: _132.QueryCodesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _132.QueryCodesRequest;
                fromPartial(object: Partial<_132.QueryCodesRequest>): _132.QueryCodesRequest;
                fromAmino(object: _132.QueryCodesRequestAmino): _132.QueryCodesRequest;
                toAmino(message: _132.QueryCodesRequest): _132.QueryCodesRequestAmino;
                fromAminoMsg(object: _132.QueryCodesRequestAminoMsg): _132.QueryCodesRequest;
                toAminoMsg(message: _132.QueryCodesRequest): _132.QueryCodesRequestAminoMsg;
                fromProtoMsg(message: _132.QueryCodesRequestProtoMsg): _132.QueryCodesRequest;
                toProto(message: _132.QueryCodesRequest): Uint8Array;
                toProtoMsg(message: _132.QueryCodesRequest): _132.QueryCodesRequestProtoMsg;
            };
            QueryCodesResponse: {
                typeUrl: string;
                encode(message: _132.QueryCodesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _132.QueryCodesResponse;
                fromPartial(object: Partial<_132.QueryCodesResponse>): _132.QueryCodesResponse;
                fromAmino(object: _132.QueryCodesResponseAmino): _132.QueryCodesResponse;
                toAmino(message: _132.QueryCodesResponse): _132.QueryCodesResponseAmino;
                fromAminoMsg(object: _132.QueryCodesResponseAminoMsg): _132.QueryCodesResponse;
                toAminoMsg(message: _132.QueryCodesResponse): _132.QueryCodesResponseAminoMsg;
                fromProtoMsg(message: _132.QueryCodesResponseProtoMsg): _132.QueryCodesResponse;
                toProto(message: _132.QueryCodesResponse): Uint8Array;
                toProtoMsg(message: _132.QueryCodesResponse): _132.QueryCodesResponseProtoMsg;
            };
            QueryPinnedCodesRequest: {
                typeUrl: string;
                encode(message: _132.QueryPinnedCodesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _132.QueryPinnedCodesRequest;
                fromPartial(object: Partial<_132.QueryPinnedCodesRequest>): _132.QueryPinnedCodesRequest;
                fromAmino(object: _132.QueryPinnedCodesRequestAmino): _132.QueryPinnedCodesRequest;
                toAmino(message: _132.QueryPinnedCodesRequest): _132.QueryPinnedCodesRequestAmino;
                fromAminoMsg(object: _132.QueryPinnedCodesRequestAminoMsg): _132.QueryPinnedCodesRequest;
                toAminoMsg(message: _132.QueryPinnedCodesRequest): _132.QueryPinnedCodesRequestAminoMsg;
                fromProtoMsg(message: _132.QueryPinnedCodesRequestProtoMsg): _132.QueryPinnedCodesRequest;
                toProto(message: _132.QueryPinnedCodesRequest): Uint8Array;
                toProtoMsg(message: _132.QueryPinnedCodesRequest): _132.QueryPinnedCodesRequestProtoMsg;
            };
            QueryPinnedCodesResponse: {
                typeUrl: string;
                encode(message: _132.QueryPinnedCodesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _132.QueryPinnedCodesResponse;
                fromPartial(object: Partial<_132.QueryPinnedCodesResponse>): _132.QueryPinnedCodesResponse;
                fromAmino(object: _132.QueryPinnedCodesResponseAmino): _132.QueryPinnedCodesResponse;
                toAmino(message: _132.QueryPinnedCodesResponse): _132.QueryPinnedCodesResponseAmino;
                fromAminoMsg(object: _132.QueryPinnedCodesResponseAminoMsg): _132.QueryPinnedCodesResponse;
                toAminoMsg(message: _132.QueryPinnedCodesResponse): _132.QueryPinnedCodesResponseAminoMsg;
                fromProtoMsg(message: _132.QueryPinnedCodesResponseProtoMsg): _132.QueryPinnedCodesResponse;
                toProto(message: _132.QueryPinnedCodesResponse): Uint8Array;
                toProtoMsg(message: _132.QueryPinnedCodesResponse): _132.QueryPinnedCodesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _132.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _132.QueryParamsRequest;
                fromPartial(_: Partial<_132.QueryParamsRequest>): _132.QueryParamsRequest;
                fromAmino(_: _132.QueryParamsRequestAmino): _132.QueryParamsRequest;
                toAmino(_: _132.QueryParamsRequest): _132.QueryParamsRequestAmino;
                fromAminoMsg(object: _132.QueryParamsRequestAminoMsg): _132.QueryParamsRequest;
                toAminoMsg(message: _132.QueryParamsRequest): _132.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _132.QueryParamsRequestProtoMsg): _132.QueryParamsRequest;
                toProto(message: _132.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _132.QueryParamsRequest): _132.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _132.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _132.QueryParamsResponse;
                fromPartial(object: Partial<_132.QueryParamsResponse>): _132.QueryParamsResponse;
                fromAmino(object: _132.QueryParamsResponseAmino): _132.QueryParamsResponse;
                toAmino(message: _132.QueryParamsResponse): _132.QueryParamsResponseAmino;
                fromAminoMsg(object: _132.QueryParamsResponseAminoMsg): _132.QueryParamsResponse;
                toAminoMsg(message: _132.QueryParamsResponse): _132.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _132.QueryParamsResponseProtoMsg): _132.QueryParamsResponse;
                toProto(message: _132.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _132.QueryParamsResponse): _132.QueryParamsResponseProtoMsg;
            };
            QueryContractsByCreatorRequest: {
                typeUrl: string;
                encode(message: _132.QueryContractsByCreatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _132.QueryContractsByCreatorRequest;
                fromPartial(object: Partial<_132.QueryContractsByCreatorRequest>): _132.QueryContractsByCreatorRequest;
                fromAmino(object: _132.QueryContractsByCreatorRequestAmino): _132.QueryContractsByCreatorRequest;
                toAmino(message: _132.QueryContractsByCreatorRequest): _132.QueryContractsByCreatorRequestAmino;
                fromAminoMsg(object: _132.QueryContractsByCreatorRequestAminoMsg): _132.QueryContractsByCreatorRequest;
                toAminoMsg(message: _132.QueryContractsByCreatorRequest): _132.QueryContractsByCreatorRequestAminoMsg;
                fromProtoMsg(message: _132.QueryContractsByCreatorRequestProtoMsg): _132.QueryContractsByCreatorRequest;
                toProto(message: _132.QueryContractsByCreatorRequest): Uint8Array;
                toProtoMsg(message: _132.QueryContractsByCreatorRequest): _132.QueryContractsByCreatorRequestProtoMsg;
            };
            QueryContractsByCreatorResponse: {
                typeUrl: string;
                encode(message: _132.QueryContractsByCreatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _132.QueryContractsByCreatorResponse;
                fromPartial(object: Partial<_132.QueryContractsByCreatorResponse>): _132.QueryContractsByCreatorResponse;
                fromAmino(object: _132.QueryContractsByCreatorResponseAmino): _132.QueryContractsByCreatorResponse;
                toAmino(message: _132.QueryContractsByCreatorResponse): _132.QueryContractsByCreatorResponseAmino;
                fromAminoMsg(object: _132.QueryContractsByCreatorResponseAminoMsg): _132.QueryContractsByCreatorResponse;
                toAminoMsg(message: _132.QueryContractsByCreatorResponse): _132.QueryContractsByCreatorResponseAminoMsg;
                fromProtoMsg(message: _132.QueryContractsByCreatorResponseProtoMsg): _132.QueryContractsByCreatorResponse;
                toProto(message: _132.QueryContractsByCreatorResponse): Uint8Array;
                toProtoMsg(message: _132.QueryContractsByCreatorResponse): _132.QueryContractsByCreatorResponseProtoMsg;
            };
            StoreCodeProposal: {
                typeUrl: string;
                encode(message: _131.StoreCodeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _131.StoreCodeProposal;
                fromPartial(object: Partial<_131.StoreCodeProposal>): _131.StoreCodeProposal;
                fromAmino(object: _131.StoreCodeProposalAmino): _131.StoreCodeProposal;
                toAmino(message: _131.StoreCodeProposal): _131.StoreCodeProposalAmino;
                fromAminoMsg(object: _131.StoreCodeProposalAminoMsg): _131.StoreCodeProposal;
                toAminoMsg(message: _131.StoreCodeProposal): _131.StoreCodeProposalAminoMsg;
                fromProtoMsg(message: _131.StoreCodeProposalProtoMsg): _131.StoreCodeProposal;
                toProto(message: _131.StoreCodeProposal): Uint8Array;
                toProtoMsg(message: _131.StoreCodeProposal): _131.StoreCodeProposalProtoMsg;
            };
            InstantiateContractProposal: {
                typeUrl: string;
                encode(message: _131.InstantiateContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _131.InstantiateContractProposal;
                fromPartial(object: Partial<_131.InstantiateContractProposal>): _131.InstantiateContractProposal;
                fromAmino(object: _131.InstantiateContractProposalAmino): _131.InstantiateContractProposal;
                toAmino(message: _131.InstantiateContractProposal): _131.InstantiateContractProposalAmino;
                fromAminoMsg(object: _131.InstantiateContractProposalAminoMsg): _131.InstantiateContractProposal;
                toAminoMsg(message: _131.InstantiateContractProposal): _131.InstantiateContractProposalAminoMsg;
                fromProtoMsg(message: _131.InstantiateContractProposalProtoMsg): _131.InstantiateContractProposal;
                toProto(message: _131.InstantiateContractProposal): Uint8Array;
                toProtoMsg(message: _131.InstantiateContractProposal): _131.InstantiateContractProposalProtoMsg;
            };
            InstantiateContract2Proposal: {
                typeUrl: string;
                encode(message: _131.InstantiateContract2Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _131.InstantiateContract2Proposal;
                fromPartial(object: Partial<_131.InstantiateContract2Proposal>): _131.InstantiateContract2Proposal;
                fromAmino(object: _131.InstantiateContract2ProposalAmino): _131.InstantiateContract2Proposal;
                toAmino(message: _131.InstantiateContract2Proposal): _131.InstantiateContract2ProposalAmino;
                fromAminoMsg(object: _131.InstantiateContract2ProposalAminoMsg): _131.InstantiateContract2Proposal;
                toAminoMsg(message: _131.InstantiateContract2Proposal): _131.InstantiateContract2ProposalAminoMsg;
                fromProtoMsg(message: _131.InstantiateContract2ProposalProtoMsg): _131.InstantiateContract2Proposal;
                toProto(message: _131.InstantiateContract2Proposal): Uint8Array;
                toProtoMsg(message: _131.InstantiateContract2Proposal): _131.InstantiateContract2ProposalProtoMsg;
            };
            MigrateContractProposal: {
                typeUrl: string;
                encode(message: _131.MigrateContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _131.MigrateContractProposal;
                fromPartial(object: Partial<_131.MigrateContractProposal>): _131.MigrateContractProposal;
                fromAmino(object: _131.MigrateContractProposalAmino): _131.MigrateContractProposal;
                toAmino(message: _131.MigrateContractProposal): _131.MigrateContractProposalAmino;
                fromAminoMsg(object: _131.MigrateContractProposalAminoMsg): _131.MigrateContractProposal;
                toAminoMsg(message: _131.MigrateContractProposal): _131.MigrateContractProposalAminoMsg;
                fromProtoMsg(message: _131.MigrateContractProposalProtoMsg): _131.MigrateContractProposal;
                toProto(message: _131.MigrateContractProposal): Uint8Array;
                toProtoMsg(message: _131.MigrateContractProposal): _131.MigrateContractProposalProtoMsg;
            };
            SudoContractProposal: {
                typeUrl: string;
                encode(message: _131.SudoContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _131.SudoContractProposal;
                fromPartial(object: Partial<_131.SudoContractProposal>): _131.SudoContractProposal;
                fromAmino(object: _131.SudoContractProposalAmino): _131.SudoContractProposal;
                toAmino(message: _131.SudoContractProposal): _131.SudoContractProposalAmino;
                fromAminoMsg(object: _131.SudoContractProposalAminoMsg): _131.SudoContractProposal;
                toAminoMsg(message: _131.SudoContractProposal): _131.SudoContractProposalAminoMsg;
                fromProtoMsg(message: _131.SudoContractProposalProtoMsg): _131.SudoContractProposal;
                toProto(message: _131.SudoContractProposal): Uint8Array;
                toProtoMsg(message: _131.SudoContractProposal): _131.SudoContractProposalProtoMsg;
            };
            ExecuteContractProposal: {
                typeUrl: string;
                encode(message: _131.ExecuteContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _131.ExecuteContractProposal;
                fromPartial(object: Partial<_131.ExecuteContractProposal>): _131.ExecuteContractProposal;
                fromAmino(object: _131.ExecuteContractProposalAmino): _131.ExecuteContractProposal;
                toAmino(message: _131.ExecuteContractProposal): _131.ExecuteContractProposalAmino;
                fromAminoMsg(object: _131.ExecuteContractProposalAminoMsg): _131.ExecuteContractProposal;
                toAminoMsg(message: _131.ExecuteContractProposal): _131.ExecuteContractProposalAminoMsg;
                fromProtoMsg(message: _131.ExecuteContractProposalProtoMsg): _131.ExecuteContractProposal;
                toProto(message: _131.ExecuteContractProposal): Uint8Array;
                toProtoMsg(message: _131.ExecuteContractProposal): _131.ExecuteContractProposalProtoMsg;
            };
            UpdateAdminProposal: {
                typeUrl: string;
                encode(message: _131.UpdateAdminProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _131.UpdateAdminProposal;
                fromPartial(object: Partial<_131.UpdateAdminProposal>): _131.UpdateAdminProposal;
                fromAmino(object: _131.UpdateAdminProposalAmino): _131.UpdateAdminProposal;
                toAmino(message: _131.UpdateAdminProposal): _131.UpdateAdminProposalAmino;
                fromAminoMsg(object: _131.UpdateAdminProposalAminoMsg): _131.UpdateAdminProposal;
                toAminoMsg(message: _131.UpdateAdminProposal): _131.UpdateAdminProposalAminoMsg;
                fromProtoMsg(message: _131.UpdateAdminProposalProtoMsg): _131.UpdateAdminProposal;
                toProto(message: _131.UpdateAdminProposal): Uint8Array;
                toProtoMsg(message: _131.UpdateAdminProposal): _131.UpdateAdminProposalProtoMsg;
            };
            ClearAdminProposal: {
                typeUrl: string;
                encode(message: _131.ClearAdminProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _131.ClearAdminProposal;
                fromPartial(object: Partial<_131.ClearAdminProposal>): _131.ClearAdminProposal;
                fromAmino(object: _131.ClearAdminProposalAmino): _131.ClearAdminProposal;
                toAmino(message: _131.ClearAdminProposal): _131.ClearAdminProposalAmino;
                fromAminoMsg(object: _131.ClearAdminProposalAminoMsg): _131.ClearAdminProposal;
                toAminoMsg(message: _131.ClearAdminProposal): _131.ClearAdminProposalAminoMsg;
                fromProtoMsg(message: _131.ClearAdminProposalProtoMsg): _131.ClearAdminProposal;
                toProto(message: _131.ClearAdminProposal): Uint8Array;
                toProtoMsg(message: _131.ClearAdminProposal): _131.ClearAdminProposalProtoMsg;
            };
            PinCodesProposal: {
                typeUrl: string;
                encode(message: _131.PinCodesProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _131.PinCodesProposal;
                fromPartial(object: Partial<_131.PinCodesProposal>): _131.PinCodesProposal;
                fromAmino(object: _131.PinCodesProposalAmino): _131.PinCodesProposal;
                toAmino(message: _131.PinCodesProposal): _131.PinCodesProposalAmino;
                fromAminoMsg(object: _131.PinCodesProposalAminoMsg): _131.PinCodesProposal;
                toAminoMsg(message: _131.PinCodesProposal): _131.PinCodesProposalAminoMsg;
                fromProtoMsg(message: _131.PinCodesProposalProtoMsg): _131.PinCodesProposal;
                toProto(message: _131.PinCodesProposal): Uint8Array;
                toProtoMsg(message: _131.PinCodesProposal): _131.PinCodesProposalProtoMsg;
            };
            UnpinCodesProposal: {
                typeUrl: string;
                encode(message: _131.UnpinCodesProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _131.UnpinCodesProposal;
                fromPartial(object: Partial<_131.UnpinCodesProposal>): _131.UnpinCodesProposal;
                fromAmino(object: _131.UnpinCodesProposalAmino): _131.UnpinCodesProposal;
                toAmino(message: _131.UnpinCodesProposal): _131.UnpinCodesProposalAmino;
                fromAminoMsg(object: _131.UnpinCodesProposalAminoMsg): _131.UnpinCodesProposal;
                toAminoMsg(message: _131.UnpinCodesProposal): _131.UnpinCodesProposalAminoMsg;
                fromProtoMsg(message: _131.UnpinCodesProposalProtoMsg): _131.UnpinCodesProposal;
                toProto(message: _131.UnpinCodesProposal): Uint8Array;
                toProtoMsg(message: _131.UnpinCodesProposal): _131.UnpinCodesProposalProtoMsg;
            };
            AccessConfigUpdate: {
                typeUrl: string;
                encode(message: _131.AccessConfigUpdate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _131.AccessConfigUpdate;
                fromPartial(object: Partial<_131.AccessConfigUpdate>): _131.AccessConfigUpdate;
                fromAmino(object: _131.AccessConfigUpdateAmino): _131.AccessConfigUpdate;
                toAmino(message: _131.AccessConfigUpdate): _131.AccessConfigUpdateAmino;
                fromAminoMsg(object: _131.AccessConfigUpdateAminoMsg): _131.AccessConfigUpdate;
                toAminoMsg(message: _131.AccessConfigUpdate): _131.AccessConfigUpdateAminoMsg;
                fromProtoMsg(message: _131.AccessConfigUpdateProtoMsg): _131.AccessConfigUpdate;
                toProto(message: _131.AccessConfigUpdate): Uint8Array;
                toProtoMsg(message: _131.AccessConfigUpdate): _131.AccessConfigUpdateProtoMsg;
            };
            UpdateInstantiateConfigProposal: {
                typeUrl: string;
                encode(message: _131.UpdateInstantiateConfigProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _131.UpdateInstantiateConfigProposal;
                fromPartial(object: Partial<_131.UpdateInstantiateConfigProposal>): _131.UpdateInstantiateConfigProposal;
                fromAmino(object: _131.UpdateInstantiateConfigProposalAmino): _131.UpdateInstantiateConfigProposal;
                toAmino(message: _131.UpdateInstantiateConfigProposal): _131.UpdateInstantiateConfigProposalAmino;
                fromAminoMsg(object: _131.UpdateInstantiateConfigProposalAminoMsg): _131.UpdateInstantiateConfigProposal;
                toAminoMsg(message: _131.UpdateInstantiateConfigProposal): _131.UpdateInstantiateConfigProposalAminoMsg;
                fromProtoMsg(message: _131.UpdateInstantiateConfigProposalProtoMsg): _131.UpdateInstantiateConfigProposal;
                toProto(message: _131.UpdateInstantiateConfigProposal): Uint8Array;
                toProtoMsg(message: _131.UpdateInstantiateConfigProposal): _131.UpdateInstantiateConfigProposalProtoMsg;
            };
            StoreAndInstantiateContractProposal: {
                typeUrl: string;
                encode(message: _131.StoreAndInstantiateContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _131.StoreAndInstantiateContractProposal;
                fromPartial(object: Partial<_131.StoreAndInstantiateContractProposal>): _131.StoreAndInstantiateContractProposal;
                fromAmino(object: _131.StoreAndInstantiateContractProposalAmino): _131.StoreAndInstantiateContractProposal;
                toAmino(message: _131.StoreAndInstantiateContractProposal): _131.StoreAndInstantiateContractProposalAmino;
                fromAminoMsg(object: _131.StoreAndInstantiateContractProposalAminoMsg): _131.StoreAndInstantiateContractProposal;
                toAminoMsg(message: _131.StoreAndInstantiateContractProposal): _131.StoreAndInstantiateContractProposalAminoMsg;
                fromProtoMsg(message: _131.StoreAndInstantiateContractProposalProtoMsg): _131.StoreAndInstantiateContractProposal;
                toProto(message: _131.StoreAndInstantiateContractProposal): Uint8Array;
                toProtoMsg(message: _131.StoreAndInstantiateContractProposal): _131.StoreAndInstantiateContractProposalProtoMsg;
            };
            MsgIBCSend: {
                typeUrl: string;
                encode(message: _130.MsgIBCSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _130.MsgIBCSend;
                fromPartial(object: Partial<_130.MsgIBCSend>): _130.MsgIBCSend;
                fromAmino(object: _130.MsgIBCSendAmino): _130.MsgIBCSend;
                toAmino(message: _130.MsgIBCSend): _130.MsgIBCSendAmino;
                fromAminoMsg(object: _130.MsgIBCSendAminoMsg): _130.MsgIBCSend;
                toAminoMsg(message: _130.MsgIBCSend): _130.MsgIBCSendAminoMsg;
                fromProtoMsg(message: _130.MsgIBCSendProtoMsg): _130.MsgIBCSend;
                toProto(message: _130.MsgIBCSend): Uint8Array;
                toProtoMsg(message: _130.MsgIBCSend): _130.MsgIBCSendProtoMsg;
            };
            MsgIBCSendResponse: {
                typeUrl: string;
                encode(message: _130.MsgIBCSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _130.MsgIBCSendResponse;
                fromPartial(object: Partial<_130.MsgIBCSendResponse>): _130.MsgIBCSendResponse;
                fromAmino(object: _130.MsgIBCSendResponseAmino): _130.MsgIBCSendResponse;
                toAmino(message: _130.MsgIBCSendResponse): _130.MsgIBCSendResponseAmino;
                fromAminoMsg(object: _130.MsgIBCSendResponseAminoMsg): _130.MsgIBCSendResponse;
                toAminoMsg(message: _130.MsgIBCSendResponse): _130.MsgIBCSendResponseAminoMsg;
                fromProtoMsg(message: _130.MsgIBCSendResponseProtoMsg): _130.MsgIBCSendResponse;
                toProto(message: _130.MsgIBCSendResponse): Uint8Array;
                toProtoMsg(message: _130.MsgIBCSendResponse): _130.MsgIBCSendResponseProtoMsg;
            };
            MsgIBCCloseChannel: {
                typeUrl: string;
                encode(message: _130.MsgIBCCloseChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _130.MsgIBCCloseChannel;
                fromPartial(object: Partial<_130.MsgIBCCloseChannel>): _130.MsgIBCCloseChannel;
                fromAmino(object: _130.MsgIBCCloseChannelAmino): _130.MsgIBCCloseChannel;
                toAmino(message: _130.MsgIBCCloseChannel): _130.MsgIBCCloseChannelAmino;
                fromAminoMsg(object: _130.MsgIBCCloseChannelAminoMsg): _130.MsgIBCCloseChannel;
                toAminoMsg(message: _130.MsgIBCCloseChannel): _130.MsgIBCCloseChannelAminoMsg;
                fromProtoMsg(message: _130.MsgIBCCloseChannelProtoMsg): _130.MsgIBCCloseChannel;
                toProto(message: _130.MsgIBCCloseChannel): Uint8Array;
                toProtoMsg(message: _130.MsgIBCCloseChannel): _130.MsgIBCCloseChannelProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _129.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.GenesisState;
                fromPartial(object: Partial<_129.GenesisState>): _129.GenesisState;
                fromAmino(object: _129.GenesisStateAmino): _129.GenesisState;
                toAmino(message: _129.GenesisState): _129.GenesisStateAmino;
                fromAminoMsg(object: _129.GenesisStateAminoMsg): _129.GenesisState;
                toAminoMsg(message: _129.GenesisState): _129.GenesisStateAminoMsg;
                fromProtoMsg(message: _129.GenesisStateProtoMsg): _129.GenesisState;
                toProto(message: _129.GenesisState): Uint8Array;
                toProtoMsg(message: _129.GenesisState): _129.GenesisStateProtoMsg;
            };
            Code: {
                typeUrl: string;
                encode(message: _129.Code, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.Code;
                fromPartial(object: Partial<_129.Code>): _129.Code;
                fromAmino(object: _129.CodeAmino): _129.Code;
                toAmino(message: _129.Code): _129.CodeAmino;
                fromAminoMsg(object: _129.CodeAminoMsg): _129.Code;
                toAminoMsg(message: _129.Code): _129.CodeAminoMsg;
                fromProtoMsg(message: _129.CodeProtoMsg): _129.Code;
                toProto(message: _129.Code): Uint8Array;
                toProtoMsg(message: _129.Code): _129.CodeProtoMsg;
            };
            Contract: {
                typeUrl: string;
                encode(message: _129.Contract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.Contract;
                fromPartial(object: Partial<_129.Contract>): _129.Contract;
                fromAmino(object: _129.ContractAmino): _129.Contract;
                toAmino(message: _129.Contract): _129.ContractAmino;
                fromAminoMsg(object: _129.ContractAminoMsg): _129.Contract;
                toAminoMsg(message: _129.Contract): _129.ContractAminoMsg;
                fromProtoMsg(message: _129.ContractProtoMsg): _129.Contract;
                toProto(message: _129.Contract): Uint8Array;
                toProtoMsg(message: _129.Contract): _129.ContractProtoMsg;
            };
            Sequence: {
                typeUrl: string;
                encode(message: _129.Sequence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.Sequence;
                fromPartial(object: Partial<_129.Sequence>): _129.Sequence;
                fromAmino(object: _129.SequenceAmino): _129.Sequence;
                toAmino(message: _129.Sequence): _129.SequenceAmino;
                fromAminoMsg(object: _129.SequenceAminoMsg): _129.Sequence;
                toAminoMsg(message: _129.Sequence): _129.SequenceAminoMsg;
                fromProtoMsg(message: _129.SequenceProtoMsg): _129.Sequence;
                toProto(message: _129.Sequence): Uint8Array;
                toProtoMsg(message: _129.Sequence): _129.SequenceProtoMsg;
            };
            StoreCodeAuthorization: {
                typeUrl: string;
                encode(message: _128.StoreCodeAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _128.StoreCodeAuthorization;
                fromPartial(object: Partial<_128.StoreCodeAuthorization>): _128.StoreCodeAuthorization;
                fromAmino(object: _128.StoreCodeAuthorizationAmino): _128.StoreCodeAuthorization;
                toAmino(message: _128.StoreCodeAuthorization): _128.StoreCodeAuthorizationAmino;
                fromAminoMsg(object: _128.StoreCodeAuthorizationAminoMsg): _128.StoreCodeAuthorization;
                toAminoMsg(message: _128.StoreCodeAuthorization): _128.StoreCodeAuthorizationAminoMsg;
                fromProtoMsg(message: _128.StoreCodeAuthorizationProtoMsg): _128.StoreCodeAuthorization;
                toProto(message: _128.StoreCodeAuthorization): Uint8Array;
                toProtoMsg(message: _128.StoreCodeAuthorization): _128.StoreCodeAuthorizationProtoMsg;
            };
            ContractExecutionAuthorization: {
                typeUrl: string;
                encode(message: _128.ContractExecutionAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _128.ContractExecutionAuthorization;
                fromPartial(object: Partial<_128.ContractExecutionAuthorization>): _128.ContractExecutionAuthorization;
                fromAmino(object: _128.ContractExecutionAuthorizationAmino): _128.ContractExecutionAuthorization;
                toAmino(message: _128.ContractExecutionAuthorization): _128.ContractExecutionAuthorizationAmino;
                fromAminoMsg(object: _128.ContractExecutionAuthorizationAminoMsg): _128.ContractExecutionAuthorization;
                toAminoMsg(message: _128.ContractExecutionAuthorization): _128.ContractExecutionAuthorizationAminoMsg;
                fromProtoMsg(message: _128.ContractExecutionAuthorizationProtoMsg): _128.ContractExecutionAuthorization;
                toProto(message: _128.ContractExecutionAuthorization): Uint8Array;
                toProtoMsg(message: _128.ContractExecutionAuthorization): _128.ContractExecutionAuthorizationProtoMsg;
            };
            ContractMigrationAuthorization: {
                typeUrl: string;
                encode(message: _128.ContractMigrationAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _128.ContractMigrationAuthorization;
                fromPartial(object: Partial<_128.ContractMigrationAuthorization>): _128.ContractMigrationAuthorization;
                fromAmino(object: _128.ContractMigrationAuthorizationAmino): _128.ContractMigrationAuthorization;
                toAmino(message: _128.ContractMigrationAuthorization): _128.ContractMigrationAuthorizationAmino;
                fromAminoMsg(object: _128.ContractMigrationAuthorizationAminoMsg): _128.ContractMigrationAuthorization;
                toAminoMsg(message: _128.ContractMigrationAuthorization): _128.ContractMigrationAuthorizationAminoMsg;
                fromProtoMsg(message: _128.ContractMigrationAuthorizationProtoMsg): _128.ContractMigrationAuthorization;
                toProto(message: _128.ContractMigrationAuthorization): Uint8Array;
                toProtoMsg(message: _128.ContractMigrationAuthorization): _128.ContractMigrationAuthorizationProtoMsg;
            };
            CodeGrant: {
                typeUrl: string;
                encode(message: _128.CodeGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _128.CodeGrant;
                fromPartial(object: Partial<_128.CodeGrant>): _128.CodeGrant;
                fromAmino(object: _128.CodeGrantAmino): _128.CodeGrant;
                toAmino(message: _128.CodeGrant): _128.CodeGrantAmino;
                fromAminoMsg(object: _128.CodeGrantAminoMsg): _128.CodeGrant;
                toAminoMsg(message: _128.CodeGrant): _128.CodeGrantAminoMsg;
                fromProtoMsg(message: _128.CodeGrantProtoMsg): _128.CodeGrant;
                toProto(message: _128.CodeGrant): Uint8Array;
                toProtoMsg(message: _128.CodeGrant): _128.CodeGrantProtoMsg;
            };
            ContractGrant: {
                typeUrl: string;
                encode(message: _128.ContractGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _128.ContractGrant;
                fromPartial(object: Partial<_128.ContractGrant>): _128.ContractGrant;
                fromAmino(object: _128.ContractGrantAmino): _128.ContractGrant;
                toAmino(message: _128.ContractGrant): _128.ContractGrantAmino;
                fromAminoMsg(object: _128.ContractGrantAminoMsg): _128.ContractGrant;
                toAminoMsg(message: _128.ContractGrant): _128.ContractGrantAminoMsg;
                fromProtoMsg(message: _128.ContractGrantProtoMsg): _128.ContractGrant;
                toProto(message: _128.ContractGrant): Uint8Array;
                toProtoMsg(message: _128.ContractGrant): _128.ContractGrantProtoMsg;
            };
            MaxCallsLimit: {
                typeUrl: string;
                encode(message: _128.MaxCallsLimit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _128.MaxCallsLimit;
                fromPartial(object: Partial<_128.MaxCallsLimit>): _128.MaxCallsLimit;
                fromAmino(object: _128.MaxCallsLimitAmino): _128.MaxCallsLimit;
                toAmino(message: _128.MaxCallsLimit): _128.MaxCallsLimitAmino;
                fromAminoMsg(object: _128.MaxCallsLimitAminoMsg): _128.MaxCallsLimit;
                toAminoMsg(message: _128.MaxCallsLimit): _128.MaxCallsLimitAminoMsg;
                fromProtoMsg(message: _128.MaxCallsLimitProtoMsg): _128.MaxCallsLimit;
                toProto(message: _128.MaxCallsLimit): Uint8Array;
                toProtoMsg(message: _128.MaxCallsLimit): _128.MaxCallsLimitProtoMsg;
            };
            MaxFundsLimit: {
                typeUrl: string;
                encode(message: _128.MaxFundsLimit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _128.MaxFundsLimit;
                fromPartial(object: Partial<_128.MaxFundsLimit>): _128.MaxFundsLimit;
                fromAmino(object: _128.MaxFundsLimitAmino): _128.MaxFundsLimit;
                toAmino(message: _128.MaxFundsLimit): _128.MaxFundsLimitAmino;
                fromAminoMsg(object: _128.MaxFundsLimitAminoMsg): _128.MaxFundsLimit;
                toAminoMsg(message: _128.MaxFundsLimit): _128.MaxFundsLimitAminoMsg;
                fromProtoMsg(message: _128.MaxFundsLimitProtoMsg): _128.MaxFundsLimit;
                toProto(message: _128.MaxFundsLimit): Uint8Array;
                toProtoMsg(message: _128.MaxFundsLimit): _128.MaxFundsLimitProtoMsg;
            };
            CombinedLimit: {
                typeUrl: string;
                encode(message: _128.CombinedLimit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _128.CombinedLimit;
                fromPartial(object: Partial<_128.CombinedLimit>): _128.CombinedLimit;
                fromAmino(object: _128.CombinedLimitAmino): _128.CombinedLimit;
                toAmino(message: _128.CombinedLimit): _128.CombinedLimitAmino;
                fromAminoMsg(object: _128.CombinedLimitAminoMsg): _128.CombinedLimit;
                toAminoMsg(message: _128.CombinedLimit): _128.CombinedLimitAminoMsg;
                fromProtoMsg(message: _128.CombinedLimitProtoMsg): _128.CombinedLimit;
                toProto(message: _128.CombinedLimit): Uint8Array;
                toProtoMsg(message: _128.CombinedLimit): _128.CombinedLimitProtoMsg;
            };
            AllowAllMessagesFilter: {
                typeUrl: string;
                encode(_: _128.AllowAllMessagesFilter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _128.AllowAllMessagesFilter;
                fromPartial(_: Partial<_128.AllowAllMessagesFilter>): _128.AllowAllMessagesFilter;
                fromAmino(_: _128.AllowAllMessagesFilterAmino): _128.AllowAllMessagesFilter;
                toAmino(_: _128.AllowAllMessagesFilter): _128.AllowAllMessagesFilterAmino;
                fromAminoMsg(object: _128.AllowAllMessagesFilterAminoMsg): _128.AllowAllMessagesFilter;
                toAminoMsg(message: _128.AllowAllMessagesFilter): _128.AllowAllMessagesFilterAminoMsg;
                fromProtoMsg(message: _128.AllowAllMessagesFilterProtoMsg): _128.AllowAllMessagesFilter;
                toProto(message: _128.AllowAllMessagesFilter): Uint8Array;
                toProtoMsg(message: _128.AllowAllMessagesFilter): _128.AllowAllMessagesFilterProtoMsg;
            };
            AcceptedMessageKeysFilter: {
                typeUrl: string;
                encode(message: _128.AcceptedMessageKeysFilter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _128.AcceptedMessageKeysFilter;
                fromPartial(object: Partial<_128.AcceptedMessageKeysFilter>): _128.AcceptedMessageKeysFilter;
                fromAmino(object: _128.AcceptedMessageKeysFilterAmino): _128.AcceptedMessageKeysFilter;
                toAmino(message: _128.AcceptedMessageKeysFilter): _128.AcceptedMessageKeysFilterAmino;
                fromAminoMsg(object: _128.AcceptedMessageKeysFilterAminoMsg): _128.AcceptedMessageKeysFilter;
                toAminoMsg(message: _128.AcceptedMessageKeysFilter): _128.AcceptedMessageKeysFilterAminoMsg;
                fromProtoMsg(message: _128.AcceptedMessageKeysFilterProtoMsg): _128.AcceptedMessageKeysFilter;
                toProto(message: _128.AcceptedMessageKeysFilter): Uint8Array;
                toProtoMsg(message: _128.AcceptedMessageKeysFilter): _128.AcceptedMessageKeysFilterProtoMsg;
            };
            AcceptedMessagesFilter: {
                typeUrl: string;
                encode(message: _128.AcceptedMessagesFilter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _128.AcceptedMessagesFilter;
                fromPartial(object: Partial<_128.AcceptedMessagesFilter>): _128.AcceptedMessagesFilter;
                fromAmino(object: _128.AcceptedMessagesFilterAmino): _128.AcceptedMessagesFilter;
                toAmino(message: _128.AcceptedMessagesFilter): _128.AcceptedMessagesFilterAmino;
                fromAminoMsg(object: _128.AcceptedMessagesFilterAminoMsg): _128.AcceptedMessagesFilter;
                toAminoMsg(message: _128.AcceptedMessagesFilter): _128.AcceptedMessagesFilterAminoMsg;
                fromProtoMsg(message: _128.AcceptedMessagesFilterProtoMsg): _128.AcceptedMessagesFilter;
                toProto(message: _128.AcceptedMessagesFilter): Uint8Array;
                toProtoMsg(message: _128.AcceptedMessagesFilter): _128.AcceptedMessagesFilterProtoMsg;
            };
            Cosmwasm_wasmv1ContractAuthzLimitX_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _128.MaxCallsLimit | _128.MaxFundsLimit | _128.CombinedLimit;
            Cosmwasm_wasmv1ContractAuthzLimitX_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmwasm_wasmv1ContractAuthzLimitX_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Cosmwasm_wasmv1ContractAuthzFilterX_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _128.AllowAllMessagesFilter | _128.AcceptedMessageKeysFilter | _128.AcceptedMessagesFilter;
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
                    v1: _341.MsgClientImpl;
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
                        contractInfo(request: _132.QueryContractInfoRequest): Promise<_132.QueryContractInfoResponse>;
                        contractHistory(request: _132.QueryContractHistoryRequest): Promise<_132.QueryContractHistoryResponse>;
                        contractsByCode(request: _132.QueryContractsByCodeRequest): Promise<_132.QueryContractsByCodeResponse>;
                        allContractState(request: _132.QueryAllContractStateRequest): Promise<_132.QueryAllContractStateResponse>;
                        rawContractState(request: _132.QueryRawContractStateRequest): Promise<_132.QueryRawContractStateResponse>;
                        smartContractState(request: _132.QuerySmartContractStateRequest): Promise<_132.QuerySmartContractStateResponse>;
                        code(request: _132.QueryCodeRequest): Promise<_132.QueryCodeResponse>;
                        codes(request?: _132.QueryCodesRequest): Promise<_132.QueryCodesResponse>;
                        pinnedCodes(request?: _132.QueryPinnedCodesRequest): Promise<_132.QueryPinnedCodesResponse>;
                        params(request?: _132.QueryParamsRequest): Promise<_132.QueryParamsResponse>;
                        contractsByCreator(request: _132.QueryContractsByCreatorRequest): Promise<_132.QueryContractsByCreatorResponse>;
                    };
                };
            };
        }>;
    };
}
