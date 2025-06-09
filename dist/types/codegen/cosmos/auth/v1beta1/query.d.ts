import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Params, ParamsAmino, ParamsSDKType, BaseAccount, BaseAccountProtoMsg, BaseAccountAmino, BaseAccountSDKType, ModuleAccount, ModuleAccountProtoMsg, ModuleAccountSDKType } from "./auth";
import { BinaryReader, BinaryWriter } from "../../../binary";
/**
 * QueryAccountsRequest is the request type for the Query/Accounts RPC method.
 *
 * Since: cosmos-sdk 0.43
 */
export interface QueryAccountsRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
export interface QueryAccountsRequestProtoMsg {
    typeUrl: "/cosmos.auth.v1beta1.QueryAccountsRequest";
    value: Uint8Array;
}
/**
 * QueryAccountsRequest is the request type for the Query/Accounts RPC method.
 *
 * Since: cosmos-sdk 0.43
 * @name QueryAccountsRequestAmino
 * @package cosmos.auth.v1beta1
 * @see proto type: cosmos.auth.v1beta1.QueryAccountsRequest
 */
export interface QueryAccountsRequestAmino {
    /**
     * pagination defines an optional pagination for the request.
     */
    pagination?: PageRequestAmino;
}
export interface QueryAccountsRequestAminoMsg {
    type: "cosmos-sdk/QueryAccountsRequest";
    value: QueryAccountsRequestAmino;
}
/**
 * QueryAccountsRequest is the request type for the Query/Accounts RPC method.
 *
 * Since: cosmos-sdk 0.43
 */
export interface QueryAccountsRequestSDKType {
    pagination?: PageRequestSDKType;
}
/**
 * QueryAccountsResponse is the response type for the Query/Accounts RPC method.
 *
 * Since: cosmos-sdk 0.43
 */
export interface QueryAccountsResponse {
    /** accounts are the existing accounts */
    accounts: (BaseAccount | Any)[] | Any[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
export interface QueryAccountsResponseProtoMsg {
    typeUrl: "/cosmos.auth.v1beta1.QueryAccountsResponse";
    value: Uint8Array;
}
export declare type QueryAccountsResponseEncoded = Omit<QueryAccountsResponse, "accounts"> & {
    /** accounts are the existing accounts */ accounts: (BaseAccountProtoMsg | AnyProtoMsg)[];
};
/**
 * QueryAccountsResponse is the response type for the Query/Accounts RPC method.
 *
 * Since: cosmos-sdk 0.43
 * @name QueryAccountsResponseAmino
 * @package cosmos.auth.v1beta1
 * @see proto type: cosmos.auth.v1beta1.QueryAccountsResponse
 */
export interface QueryAccountsResponseAmino {
    /**
     * accounts are the existing accounts
     */
    accounts?: AnyAmino[];
    /**
     * pagination defines the pagination in the response.
     */
    pagination?: PageResponseAmino;
}
export interface QueryAccountsResponseAminoMsg {
    type: "cosmos-sdk/QueryAccountsResponse";
    value: QueryAccountsResponseAmino;
}
/**
 * QueryAccountsResponse is the response type for the Query/Accounts RPC method.
 *
 * Since: cosmos-sdk 0.43
 */
export interface QueryAccountsResponseSDKType {
    accounts: (BaseAccountSDKType | AnySDKType)[];
    pagination?: PageResponseSDKType;
}
/** QueryAccountRequest is the request type for the Query/Account RPC method. */
export interface QueryAccountRequest {
    /** address defines the address to query for. */
    address: string;
}
export interface QueryAccountRequestProtoMsg {
    typeUrl: "/cosmos.auth.v1beta1.QueryAccountRequest";
    value: Uint8Array;
}
/**
 * QueryAccountRequest is the request type for the Query/Account RPC method.
 * @name QueryAccountRequestAmino
 * @package cosmos.auth.v1beta1
 * @see proto type: cosmos.auth.v1beta1.QueryAccountRequest
 */
export interface QueryAccountRequestAmino {
    /**
     * address defines the address to query for.
     */
    address?: string;
}
export interface QueryAccountRequestAminoMsg {
    type: "cosmos-sdk/QueryAccountRequest";
    value: QueryAccountRequestAmino;
}
/** QueryAccountRequest is the request type for the Query/Account RPC method. */
export interface QueryAccountRequestSDKType {
    address: string;
}
/** QueryAccountResponse is the response type for the Query/Account RPC method. */
export interface QueryAccountResponse {
    /** account defines the account of the corresponding address. */
    account?: BaseAccount | Any | undefined;
}
export interface QueryAccountResponseProtoMsg {
    typeUrl: "/cosmos.auth.v1beta1.QueryAccountResponse";
    value: Uint8Array;
}
export declare type QueryAccountResponseEncoded = Omit<QueryAccountResponse, "account"> & {
    /** account defines the account of the corresponding address. */ account?: BaseAccountProtoMsg | AnyProtoMsg | undefined;
};
/**
 * QueryAccountResponse is the response type for the Query/Account RPC method.
 * @name QueryAccountResponseAmino
 * @package cosmos.auth.v1beta1
 * @see proto type: cosmos.auth.v1beta1.QueryAccountResponse
 */
export interface QueryAccountResponseAmino {
    /**
     * account defines the account of the corresponding address.
     */
    account?: AnyAmino;
}
export interface QueryAccountResponseAminoMsg {
    type: "cosmos-sdk/QueryAccountResponse";
    value: QueryAccountResponseAmino;
}
/** QueryAccountResponse is the response type for the Query/Account RPC method. */
export interface QueryAccountResponseSDKType {
    account?: BaseAccountSDKType | AnySDKType | undefined;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/cosmos.auth.v1beta1.QueryParamsRequest";
    value: Uint8Array;
}
/**
 * QueryParamsRequest is the request type for the Query/Params RPC method.
 * @name QueryParamsRequestAmino
 * @package cosmos.auth.v1beta1
 * @see proto type: cosmos.auth.v1beta1.QueryParamsRequest
 */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "cosmos-sdk/QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params defines the parameters of the module. */
    params: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/cosmos.auth.v1beta1.QueryParamsResponse";
    value: Uint8Array;
}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC method.
 * @name QueryParamsResponseAmino
 * @package cosmos.auth.v1beta1
 * @see proto type: cosmos.auth.v1beta1.QueryParamsResponse
 */
export interface QueryParamsResponseAmino {
    /**
     * params defines the parameters of the module.
     */
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "cosmos-sdk/QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
/**
 * QueryModuleAccountsRequest is the request type for the Query/ModuleAccounts RPC method.
 *
 * Since: cosmos-sdk 0.46
 */
export interface QueryModuleAccountsRequest {
}
export interface QueryModuleAccountsRequestProtoMsg {
    typeUrl: "/cosmos.auth.v1beta1.QueryModuleAccountsRequest";
    value: Uint8Array;
}
/**
 * QueryModuleAccountsRequest is the request type for the Query/ModuleAccounts RPC method.
 *
 * Since: cosmos-sdk 0.46
 * @name QueryModuleAccountsRequestAmino
 * @package cosmos.auth.v1beta1
 * @see proto type: cosmos.auth.v1beta1.QueryModuleAccountsRequest
 */
export interface QueryModuleAccountsRequestAmino {
}
export interface QueryModuleAccountsRequestAminoMsg {
    type: "cosmos-sdk/QueryModuleAccountsRequest";
    value: QueryModuleAccountsRequestAmino;
}
/**
 * QueryModuleAccountsRequest is the request type for the Query/ModuleAccounts RPC method.
 *
 * Since: cosmos-sdk 0.46
 */
export interface QueryModuleAccountsRequestSDKType {
}
/**
 * QueryModuleAccountsResponse is the response type for the Query/ModuleAccounts RPC method.
 *
 * Since: cosmos-sdk 0.46
 */
export interface QueryModuleAccountsResponse {
    accounts: (ModuleAccount | Any)[] | Any[];
}
export interface QueryModuleAccountsResponseProtoMsg {
    typeUrl: "/cosmos.auth.v1beta1.QueryModuleAccountsResponse";
    value: Uint8Array;
}
export declare type QueryModuleAccountsResponseEncoded = Omit<QueryModuleAccountsResponse, "accounts"> & {
    accounts: (ModuleAccountProtoMsg | AnyProtoMsg)[];
};
/**
 * QueryModuleAccountsResponse is the response type for the Query/ModuleAccounts RPC method.
 *
 * Since: cosmos-sdk 0.46
 * @name QueryModuleAccountsResponseAmino
 * @package cosmos.auth.v1beta1
 * @see proto type: cosmos.auth.v1beta1.QueryModuleAccountsResponse
 */
export interface QueryModuleAccountsResponseAmino {
    accounts?: AnyAmino[];
}
export interface QueryModuleAccountsResponseAminoMsg {
    type: "cosmos-sdk/QueryModuleAccountsResponse";
    value: QueryModuleAccountsResponseAmino;
}
/**
 * QueryModuleAccountsResponse is the response type for the Query/ModuleAccounts RPC method.
 *
 * Since: cosmos-sdk 0.46
 */
export interface QueryModuleAccountsResponseSDKType {
    accounts: (ModuleAccountSDKType | AnySDKType)[];
}
/** QueryModuleAccountByNameRequest is the request type for the Query/ModuleAccountByName RPC method. */
export interface QueryModuleAccountByNameRequest {
    name: string;
}
export interface QueryModuleAccountByNameRequestProtoMsg {
    typeUrl: "/cosmos.auth.v1beta1.QueryModuleAccountByNameRequest";
    value: Uint8Array;
}
/**
 * QueryModuleAccountByNameRequest is the request type for the Query/ModuleAccountByName RPC method.
 * @name QueryModuleAccountByNameRequestAmino
 * @package cosmos.auth.v1beta1
 * @see proto type: cosmos.auth.v1beta1.QueryModuleAccountByNameRequest
 */
export interface QueryModuleAccountByNameRequestAmino {
    name?: string;
}
export interface QueryModuleAccountByNameRequestAminoMsg {
    type: "cosmos-sdk/QueryModuleAccountByNameRequest";
    value: QueryModuleAccountByNameRequestAmino;
}
/** QueryModuleAccountByNameRequest is the request type for the Query/ModuleAccountByName RPC method. */
export interface QueryModuleAccountByNameRequestSDKType {
    name: string;
}
/** QueryModuleAccountByNameResponse is the response type for the Query/ModuleAccountByName RPC method. */
export interface QueryModuleAccountByNameResponse {
    account?: ModuleAccount | Any | undefined;
}
export interface QueryModuleAccountByNameResponseProtoMsg {
    typeUrl: "/cosmos.auth.v1beta1.QueryModuleAccountByNameResponse";
    value: Uint8Array;
}
export declare type QueryModuleAccountByNameResponseEncoded = Omit<QueryModuleAccountByNameResponse, "account"> & {
    account?: ModuleAccountProtoMsg | AnyProtoMsg | undefined;
};
/**
 * QueryModuleAccountByNameResponse is the response type for the Query/ModuleAccountByName RPC method.
 * @name QueryModuleAccountByNameResponseAmino
 * @package cosmos.auth.v1beta1
 * @see proto type: cosmos.auth.v1beta1.QueryModuleAccountByNameResponse
 */
export interface QueryModuleAccountByNameResponseAmino {
    account?: AnyAmino;
}
export interface QueryModuleAccountByNameResponseAminoMsg {
    type: "cosmos-sdk/QueryModuleAccountByNameResponse";
    value: QueryModuleAccountByNameResponseAmino;
}
/** QueryModuleAccountByNameResponse is the response type for the Query/ModuleAccountByName RPC method. */
export interface QueryModuleAccountByNameResponseSDKType {
    account?: ModuleAccountSDKType | AnySDKType | undefined;
}
/**
 * Bech32PrefixRequest is the request type for Bech32Prefix rpc method.
 *
 * Since: cosmos-sdk 0.46
 */
export interface Bech32PrefixRequest {
}
export interface Bech32PrefixRequestProtoMsg {
    typeUrl: "/cosmos.auth.v1beta1.Bech32PrefixRequest";
    value: Uint8Array;
}
/**
 * Bech32PrefixRequest is the request type for Bech32Prefix rpc method.
 *
 * Since: cosmos-sdk 0.46
 * @name Bech32PrefixRequestAmino
 * @package cosmos.auth.v1beta1
 * @see proto type: cosmos.auth.v1beta1.Bech32PrefixRequest
 */
export interface Bech32PrefixRequestAmino {
}
export interface Bech32PrefixRequestAminoMsg {
    type: "cosmos-sdk/Bech32PrefixRequest";
    value: Bech32PrefixRequestAmino;
}
/**
 * Bech32PrefixRequest is the request type for Bech32Prefix rpc method.
 *
 * Since: cosmos-sdk 0.46
 */
export interface Bech32PrefixRequestSDKType {
}
/**
 * Bech32PrefixResponse is the response type for Bech32Prefix rpc method.
 *
 * Since: cosmos-sdk 0.46
 */
export interface Bech32PrefixResponse {
    bech32Prefix: string;
}
export interface Bech32PrefixResponseProtoMsg {
    typeUrl: "/cosmos.auth.v1beta1.Bech32PrefixResponse";
    value: Uint8Array;
}
/**
 * Bech32PrefixResponse is the response type for Bech32Prefix rpc method.
 *
 * Since: cosmos-sdk 0.46
 * @name Bech32PrefixResponseAmino
 * @package cosmos.auth.v1beta1
 * @see proto type: cosmos.auth.v1beta1.Bech32PrefixResponse
 */
export interface Bech32PrefixResponseAmino {
    bech32_prefix?: string;
}
export interface Bech32PrefixResponseAminoMsg {
    type: "cosmos-sdk/Bech32PrefixResponse";
    value: Bech32PrefixResponseAmino;
}
/**
 * Bech32PrefixResponse is the response type for Bech32Prefix rpc method.
 *
 * Since: cosmos-sdk 0.46
 */
export interface Bech32PrefixResponseSDKType {
    bech32_prefix: string;
}
/**
 * AddressBytesToStringRequest is the request type for AddressString rpc method.
 *
 * Since: cosmos-sdk 0.46
 */
export interface AddressBytesToStringRequest {
    addressBytes: Uint8Array;
}
export interface AddressBytesToStringRequestProtoMsg {
    typeUrl: "/cosmos.auth.v1beta1.AddressBytesToStringRequest";
    value: Uint8Array;
}
/**
 * AddressBytesToStringRequest is the request type for AddressString rpc method.
 *
 * Since: cosmos-sdk 0.46
 * @name AddressBytesToStringRequestAmino
 * @package cosmos.auth.v1beta1
 * @see proto type: cosmos.auth.v1beta1.AddressBytesToStringRequest
 */
export interface AddressBytesToStringRequestAmino {
    address_bytes?: string;
}
export interface AddressBytesToStringRequestAminoMsg {
    type: "cosmos-sdk/AddressBytesToStringRequest";
    value: AddressBytesToStringRequestAmino;
}
/**
 * AddressBytesToStringRequest is the request type for AddressString rpc method.
 *
 * Since: cosmos-sdk 0.46
 */
export interface AddressBytesToStringRequestSDKType {
    address_bytes: Uint8Array;
}
/**
 * AddressBytesToStringResponse is the response type for AddressString rpc method.
 *
 * Since: cosmos-sdk 0.46
 */
export interface AddressBytesToStringResponse {
    addressString: string;
}
export interface AddressBytesToStringResponseProtoMsg {
    typeUrl: "/cosmos.auth.v1beta1.AddressBytesToStringResponse";
    value: Uint8Array;
}
/**
 * AddressBytesToStringResponse is the response type for AddressString rpc method.
 *
 * Since: cosmos-sdk 0.46
 * @name AddressBytesToStringResponseAmino
 * @package cosmos.auth.v1beta1
 * @see proto type: cosmos.auth.v1beta1.AddressBytesToStringResponse
 */
export interface AddressBytesToStringResponseAmino {
    address_string?: string;
}
export interface AddressBytesToStringResponseAminoMsg {
    type: "cosmos-sdk/AddressBytesToStringResponse";
    value: AddressBytesToStringResponseAmino;
}
/**
 * AddressBytesToStringResponse is the response type for AddressString rpc method.
 *
 * Since: cosmos-sdk 0.46
 */
export interface AddressBytesToStringResponseSDKType {
    address_string: string;
}
/**
 * AddressStringToBytesRequest is the request type for AccountBytes rpc method.
 *
 * Since: cosmos-sdk 0.46
 */
export interface AddressStringToBytesRequest {
    addressString: string;
}
export interface AddressStringToBytesRequestProtoMsg {
    typeUrl: "/cosmos.auth.v1beta1.AddressStringToBytesRequest";
    value: Uint8Array;
}
/**
 * AddressStringToBytesRequest is the request type for AccountBytes rpc method.
 *
 * Since: cosmos-sdk 0.46
 * @name AddressStringToBytesRequestAmino
 * @package cosmos.auth.v1beta1
 * @see proto type: cosmos.auth.v1beta1.AddressStringToBytesRequest
 */
export interface AddressStringToBytesRequestAmino {
    address_string?: string;
}
export interface AddressStringToBytesRequestAminoMsg {
    type: "cosmos-sdk/AddressStringToBytesRequest";
    value: AddressStringToBytesRequestAmino;
}
/**
 * AddressStringToBytesRequest is the request type for AccountBytes rpc method.
 *
 * Since: cosmos-sdk 0.46
 */
export interface AddressStringToBytesRequestSDKType {
    address_string: string;
}
/**
 * AddressStringToBytesResponse is the response type for AddressBytes rpc method.
 *
 * Since: cosmos-sdk 0.46
 */
export interface AddressStringToBytesResponse {
    addressBytes: Uint8Array;
}
export interface AddressStringToBytesResponseProtoMsg {
    typeUrl: "/cosmos.auth.v1beta1.AddressStringToBytesResponse";
    value: Uint8Array;
}
/**
 * AddressStringToBytesResponse is the response type for AddressBytes rpc method.
 *
 * Since: cosmos-sdk 0.46
 * @name AddressStringToBytesResponseAmino
 * @package cosmos.auth.v1beta1
 * @see proto type: cosmos.auth.v1beta1.AddressStringToBytesResponse
 */
export interface AddressStringToBytesResponseAmino {
    address_bytes?: string;
}
export interface AddressStringToBytesResponseAminoMsg {
    type: "cosmos-sdk/AddressStringToBytesResponse";
    value: AddressStringToBytesResponseAmino;
}
/**
 * AddressStringToBytesResponse is the response type for AddressBytes rpc method.
 *
 * Since: cosmos-sdk 0.46
 */
export interface AddressStringToBytesResponseSDKType {
    address_bytes: Uint8Array;
}
/**
 * QueryAccountAddressByIDRequest is the request type for AccountAddressByID rpc method
 *
 * Since: cosmos-sdk 0.46.2
 */
export interface QueryAccountAddressByIDRequest {
    /**
     * Deprecated, use account_id instead
     *
     * id is the account number of the address to be queried. This field
     * should have been an uint64 (like all account numbers), and will be
     * updated to uint64 in a future version of the auth query.
     */
    /** @deprecated */
    id: bigint;
    /**
     * account_id is the account number of the address to be queried.
     *
     * Since: cosmos-sdk 0.47
     */
    accountId: bigint;
}
export interface QueryAccountAddressByIDRequestProtoMsg {
    typeUrl: "/cosmos.auth.v1beta1.QueryAccountAddressByIDRequest";
    value: Uint8Array;
}
/**
 * QueryAccountAddressByIDRequest is the request type for AccountAddressByID rpc method
 *
 * Since: cosmos-sdk 0.46.2
 * @name QueryAccountAddressByIDRequestAmino
 * @package cosmos.auth.v1beta1
 * @see proto type: cosmos.auth.v1beta1.QueryAccountAddressByIDRequest
 */
export interface QueryAccountAddressByIDRequestAmino {
    /**
     * Deprecated, use account_id instead
     *
     * id is the account number of the address to be queried. This field
     * should have been an uint64 (like all account numbers), and will be
     * updated to uint64 in a future version of the auth query.
     * @deprecated
     */
    id?: string;
    /**
     * account_id is the account number of the address to be queried.
     *
     * Since: cosmos-sdk 0.47
     */
    account_id?: string;
}
export interface QueryAccountAddressByIDRequestAminoMsg {
    type: "cosmos-sdk/QueryAccountAddressByIDRequest";
    value: QueryAccountAddressByIDRequestAmino;
}
/**
 * QueryAccountAddressByIDRequest is the request type for AccountAddressByID rpc method
 *
 * Since: cosmos-sdk 0.46.2
 */
export interface QueryAccountAddressByIDRequestSDKType {
    /** @deprecated */
    id: bigint;
    account_id: bigint;
}
/**
 * QueryAccountAddressByIDResponse is the response type for AccountAddressByID rpc method
 *
 * Since: cosmos-sdk 0.46.2
 */
export interface QueryAccountAddressByIDResponse {
    accountAddress: string;
}
export interface QueryAccountAddressByIDResponseProtoMsg {
    typeUrl: "/cosmos.auth.v1beta1.QueryAccountAddressByIDResponse";
    value: Uint8Array;
}
/**
 * QueryAccountAddressByIDResponse is the response type for AccountAddressByID rpc method
 *
 * Since: cosmos-sdk 0.46.2
 * @name QueryAccountAddressByIDResponseAmino
 * @package cosmos.auth.v1beta1
 * @see proto type: cosmos.auth.v1beta1.QueryAccountAddressByIDResponse
 */
export interface QueryAccountAddressByIDResponseAmino {
    account_address?: string;
}
export interface QueryAccountAddressByIDResponseAminoMsg {
    type: "cosmos-sdk/QueryAccountAddressByIDResponse";
    value: QueryAccountAddressByIDResponseAmino;
}
/**
 * QueryAccountAddressByIDResponse is the response type for AccountAddressByID rpc method
 *
 * Since: cosmos-sdk 0.46.2
 */
export interface QueryAccountAddressByIDResponseSDKType {
    account_address: string;
}
/**
 * QueryAccountInfoRequest is the Query/AccountInfo request type.
 *
 * Since: cosmos-sdk 0.47
 */
export interface QueryAccountInfoRequest {
    /** address is the account address string. */
    address: string;
}
export interface QueryAccountInfoRequestProtoMsg {
    typeUrl: "/cosmos.auth.v1beta1.QueryAccountInfoRequest";
    value: Uint8Array;
}
/**
 * QueryAccountInfoRequest is the Query/AccountInfo request type.
 *
 * Since: cosmos-sdk 0.47
 * @name QueryAccountInfoRequestAmino
 * @package cosmos.auth.v1beta1
 * @see proto type: cosmos.auth.v1beta1.QueryAccountInfoRequest
 */
export interface QueryAccountInfoRequestAmino {
    /**
     * address is the account address string.
     */
    address?: string;
}
export interface QueryAccountInfoRequestAminoMsg {
    type: "cosmos-sdk/QueryAccountInfoRequest";
    value: QueryAccountInfoRequestAmino;
}
/**
 * QueryAccountInfoRequest is the Query/AccountInfo request type.
 *
 * Since: cosmos-sdk 0.47
 */
export interface QueryAccountInfoRequestSDKType {
    address: string;
}
/**
 * QueryAccountInfoResponse is the Query/AccountInfo response type.
 *
 * Since: cosmos-sdk 0.47
 */
export interface QueryAccountInfoResponse {
    /** info is the account info which is represented by BaseAccount. */
    info?: BaseAccount;
}
export interface QueryAccountInfoResponseProtoMsg {
    typeUrl: "/cosmos.auth.v1beta1.QueryAccountInfoResponse";
    value: Uint8Array;
}
/**
 * QueryAccountInfoResponse is the Query/AccountInfo response type.
 *
 * Since: cosmos-sdk 0.47
 * @name QueryAccountInfoResponseAmino
 * @package cosmos.auth.v1beta1
 * @see proto type: cosmos.auth.v1beta1.QueryAccountInfoResponse
 */
export interface QueryAccountInfoResponseAmino {
    /**
     * info is the account info which is represented by BaseAccount.
     */
    info?: BaseAccountAmino;
}
export interface QueryAccountInfoResponseAminoMsg {
    type: "cosmos-sdk/QueryAccountInfoResponse";
    value: QueryAccountInfoResponseAmino;
}
/**
 * QueryAccountInfoResponse is the Query/AccountInfo response type.
 *
 * Since: cosmos-sdk 0.47
 */
export interface QueryAccountInfoResponseSDKType {
    info?: BaseAccountSDKType;
}
export declare const QueryAccountsRequest: {
    typeUrl: string;
    encode(message: QueryAccountsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAccountsRequest;
    fromPartial(object: Partial<QueryAccountsRequest>): QueryAccountsRequest;
    fromAmino(object: QueryAccountsRequestAmino): QueryAccountsRequest;
    toAmino(message: QueryAccountsRequest): QueryAccountsRequestAmino;
    fromAminoMsg(object: QueryAccountsRequestAminoMsg): QueryAccountsRequest;
    toAminoMsg(message: QueryAccountsRequest): QueryAccountsRequestAminoMsg;
    fromProtoMsg(message: QueryAccountsRequestProtoMsg): QueryAccountsRequest;
    toProto(message: QueryAccountsRequest): Uint8Array;
    toProtoMsg(message: QueryAccountsRequest): QueryAccountsRequestProtoMsg;
};
export declare const QueryAccountsResponse: {
    typeUrl: string;
    encode(message: QueryAccountsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAccountsResponse;
    fromPartial(object: Partial<QueryAccountsResponse>): QueryAccountsResponse;
    fromAmino(object: QueryAccountsResponseAmino): QueryAccountsResponse;
    toAmino(message: QueryAccountsResponse): QueryAccountsResponseAmino;
    fromAminoMsg(object: QueryAccountsResponseAminoMsg): QueryAccountsResponse;
    toAminoMsg(message: QueryAccountsResponse): QueryAccountsResponseAminoMsg;
    fromProtoMsg(message: QueryAccountsResponseProtoMsg): QueryAccountsResponse;
    toProto(message: QueryAccountsResponse): Uint8Array;
    toProtoMsg(message: QueryAccountsResponse): QueryAccountsResponseProtoMsg;
};
export declare const QueryAccountRequest: {
    typeUrl: string;
    encode(message: QueryAccountRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAccountRequest;
    fromPartial(object: Partial<QueryAccountRequest>): QueryAccountRequest;
    fromAmino(object: QueryAccountRequestAmino): QueryAccountRequest;
    toAmino(message: QueryAccountRequest): QueryAccountRequestAmino;
    fromAminoMsg(object: QueryAccountRequestAminoMsg): QueryAccountRequest;
    toAminoMsg(message: QueryAccountRequest): QueryAccountRequestAminoMsg;
    fromProtoMsg(message: QueryAccountRequestProtoMsg): QueryAccountRequest;
    toProto(message: QueryAccountRequest): Uint8Array;
    toProtoMsg(message: QueryAccountRequest): QueryAccountRequestProtoMsg;
};
export declare const QueryAccountResponse: {
    typeUrl: string;
    encode(message: QueryAccountResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAccountResponse;
    fromPartial(object: Partial<QueryAccountResponse>): QueryAccountResponse;
    fromAmino(object: QueryAccountResponseAmino): QueryAccountResponse;
    toAmino(message: QueryAccountResponse): QueryAccountResponseAmino;
    fromAminoMsg(object: QueryAccountResponseAminoMsg): QueryAccountResponse;
    toAminoMsg(message: QueryAccountResponse): QueryAccountResponseAminoMsg;
    fromProtoMsg(message: QueryAccountResponseProtoMsg): QueryAccountResponse;
    toProto(message: QueryAccountResponse): Uint8Array;
    toProtoMsg(message: QueryAccountResponse): QueryAccountResponseProtoMsg;
};
export declare const QueryParamsRequest: {
    typeUrl: string;
    encode(_: QueryParamsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
    fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest;
    toAmino(_: QueryParamsRequest): QueryParamsRequestAmino;
    fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest;
    toAminoMsg(message: QueryParamsRequest): QueryParamsRequestAminoMsg;
    fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest;
    toProto(message: QueryParamsRequest): Uint8Array;
    toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg;
};
export declare const QueryParamsResponse: {
    typeUrl: string;
    encode(message: QueryParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
    fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse;
    toAmino(message: QueryParamsResponse): QueryParamsResponseAmino;
    fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse;
    toAminoMsg(message: QueryParamsResponse): QueryParamsResponseAminoMsg;
    fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse;
    toProto(message: QueryParamsResponse): Uint8Array;
    toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg;
};
export declare const QueryModuleAccountsRequest: {
    typeUrl: string;
    encode(_: QueryModuleAccountsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryModuleAccountsRequest;
    fromPartial(_: Partial<QueryModuleAccountsRequest>): QueryModuleAccountsRequest;
    fromAmino(_: QueryModuleAccountsRequestAmino): QueryModuleAccountsRequest;
    toAmino(_: QueryModuleAccountsRequest): QueryModuleAccountsRequestAmino;
    fromAminoMsg(object: QueryModuleAccountsRequestAminoMsg): QueryModuleAccountsRequest;
    toAminoMsg(message: QueryModuleAccountsRequest): QueryModuleAccountsRequestAminoMsg;
    fromProtoMsg(message: QueryModuleAccountsRequestProtoMsg): QueryModuleAccountsRequest;
    toProto(message: QueryModuleAccountsRequest): Uint8Array;
    toProtoMsg(message: QueryModuleAccountsRequest): QueryModuleAccountsRequestProtoMsg;
};
export declare const QueryModuleAccountsResponse: {
    typeUrl: string;
    encode(message: QueryModuleAccountsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryModuleAccountsResponse;
    fromPartial(object: Partial<QueryModuleAccountsResponse>): QueryModuleAccountsResponse;
    fromAmino(object: QueryModuleAccountsResponseAmino): QueryModuleAccountsResponse;
    toAmino(message: QueryModuleAccountsResponse): QueryModuleAccountsResponseAmino;
    fromAminoMsg(object: QueryModuleAccountsResponseAminoMsg): QueryModuleAccountsResponse;
    toAminoMsg(message: QueryModuleAccountsResponse): QueryModuleAccountsResponseAminoMsg;
    fromProtoMsg(message: QueryModuleAccountsResponseProtoMsg): QueryModuleAccountsResponse;
    toProto(message: QueryModuleAccountsResponse): Uint8Array;
    toProtoMsg(message: QueryModuleAccountsResponse): QueryModuleAccountsResponseProtoMsg;
};
export declare const QueryModuleAccountByNameRequest: {
    typeUrl: string;
    encode(message: QueryModuleAccountByNameRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryModuleAccountByNameRequest;
    fromPartial(object: Partial<QueryModuleAccountByNameRequest>): QueryModuleAccountByNameRequest;
    fromAmino(object: QueryModuleAccountByNameRequestAmino): QueryModuleAccountByNameRequest;
    toAmino(message: QueryModuleAccountByNameRequest): QueryModuleAccountByNameRequestAmino;
    fromAminoMsg(object: QueryModuleAccountByNameRequestAminoMsg): QueryModuleAccountByNameRequest;
    toAminoMsg(message: QueryModuleAccountByNameRequest): QueryModuleAccountByNameRequestAminoMsg;
    fromProtoMsg(message: QueryModuleAccountByNameRequestProtoMsg): QueryModuleAccountByNameRequest;
    toProto(message: QueryModuleAccountByNameRequest): Uint8Array;
    toProtoMsg(message: QueryModuleAccountByNameRequest): QueryModuleAccountByNameRequestProtoMsg;
};
export declare const QueryModuleAccountByNameResponse: {
    typeUrl: string;
    encode(message: QueryModuleAccountByNameResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryModuleAccountByNameResponse;
    fromPartial(object: Partial<QueryModuleAccountByNameResponse>): QueryModuleAccountByNameResponse;
    fromAmino(object: QueryModuleAccountByNameResponseAmino): QueryModuleAccountByNameResponse;
    toAmino(message: QueryModuleAccountByNameResponse): QueryModuleAccountByNameResponseAmino;
    fromAminoMsg(object: QueryModuleAccountByNameResponseAminoMsg): QueryModuleAccountByNameResponse;
    toAminoMsg(message: QueryModuleAccountByNameResponse): QueryModuleAccountByNameResponseAminoMsg;
    fromProtoMsg(message: QueryModuleAccountByNameResponseProtoMsg): QueryModuleAccountByNameResponse;
    toProto(message: QueryModuleAccountByNameResponse): Uint8Array;
    toProtoMsg(message: QueryModuleAccountByNameResponse): QueryModuleAccountByNameResponseProtoMsg;
};
export declare const Bech32PrefixRequest: {
    typeUrl: string;
    encode(_: Bech32PrefixRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Bech32PrefixRequest;
    fromPartial(_: Partial<Bech32PrefixRequest>): Bech32PrefixRequest;
    fromAmino(_: Bech32PrefixRequestAmino): Bech32PrefixRequest;
    toAmino(_: Bech32PrefixRequest): Bech32PrefixRequestAmino;
    fromAminoMsg(object: Bech32PrefixRequestAminoMsg): Bech32PrefixRequest;
    toAminoMsg(message: Bech32PrefixRequest): Bech32PrefixRequestAminoMsg;
    fromProtoMsg(message: Bech32PrefixRequestProtoMsg): Bech32PrefixRequest;
    toProto(message: Bech32PrefixRequest): Uint8Array;
    toProtoMsg(message: Bech32PrefixRequest): Bech32PrefixRequestProtoMsg;
};
export declare const Bech32PrefixResponse: {
    typeUrl: string;
    encode(message: Bech32PrefixResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Bech32PrefixResponse;
    fromPartial(object: Partial<Bech32PrefixResponse>): Bech32PrefixResponse;
    fromAmino(object: Bech32PrefixResponseAmino): Bech32PrefixResponse;
    toAmino(message: Bech32PrefixResponse): Bech32PrefixResponseAmino;
    fromAminoMsg(object: Bech32PrefixResponseAminoMsg): Bech32PrefixResponse;
    toAminoMsg(message: Bech32PrefixResponse): Bech32PrefixResponseAminoMsg;
    fromProtoMsg(message: Bech32PrefixResponseProtoMsg): Bech32PrefixResponse;
    toProto(message: Bech32PrefixResponse): Uint8Array;
    toProtoMsg(message: Bech32PrefixResponse): Bech32PrefixResponseProtoMsg;
};
export declare const AddressBytesToStringRequest: {
    typeUrl: string;
    encode(message: AddressBytesToStringRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AddressBytesToStringRequest;
    fromPartial(object: Partial<AddressBytesToStringRequest>): AddressBytesToStringRequest;
    fromAmino(object: AddressBytesToStringRequestAmino): AddressBytesToStringRequest;
    toAmino(message: AddressBytesToStringRequest): AddressBytesToStringRequestAmino;
    fromAminoMsg(object: AddressBytesToStringRequestAminoMsg): AddressBytesToStringRequest;
    toAminoMsg(message: AddressBytesToStringRequest): AddressBytesToStringRequestAminoMsg;
    fromProtoMsg(message: AddressBytesToStringRequestProtoMsg): AddressBytesToStringRequest;
    toProto(message: AddressBytesToStringRequest): Uint8Array;
    toProtoMsg(message: AddressBytesToStringRequest): AddressBytesToStringRequestProtoMsg;
};
export declare const AddressBytesToStringResponse: {
    typeUrl: string;
    encode(message: AddressBytesToStringResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AddressBytesToStringResponse;
    fromPartial(object: Partial<AddressBytesToStringResponse>): AddressBytesToStringResponse;
    fromAmino(object: AddressBytesToStringResponseAmino): AddressBytesToStringResponse;
    toAmino(message: AddressBytesToStringResponse): AddressBytesToStringResponseAmino;
    fromAminoMsg(object: AddressBytesToStringResponseAminoMsg): AddressBytesToStringResponse;
    toAminoMsg(message: AddressBytesToStringResponse): AddressBytesToStringResponseAminoMsg;
    fromProtoMsg(message: AddressBytesToStringResponseProtoMsg): AddressBytesToStringResponse;
    toProto(message: AddressBytesToStringResponse): Uint8Array;
    toProtoMsg(message: AddressBytesToStringResponse): AddressBytesToStringResponseProtoMsg;
};
export declare const AddressStringToBytesRequest: {
    typeUrl: string;
    encode(message: AddressStringToBytesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AddressStringToBytesRequest;
    fromPartial(object: Partial<AddressStringToBytesRequest>): AddressStringToBytesRequest;
    fromAmino(object: AddressStringToBytesRequestAmino): AddressStringToBytesRequest;
    toAmino(message: AddressStringToBytesRequest): AddressStringToBytesRequestAmino;
    fromAminoMsg(object: AddressStringToBytesRequestAminoMsg): AddressStringToBytesRequest;
    toAminoMsg(message: AddressStringToBytesRequest): AddressStringToBytesRequestAminoMsg;
    fromProtoMsg(message: AddressStringToBytesRequestProtoMsg): AddressStringToBytesRequest;
    toProto(message: AddressStringToBytesRequest): Uint8Array;
    toProtoMsg(message: AddressStringToBytesRequest): AddressStringToBytesRequestProtoMsg;
};
export declare const AddressStringToBytesResponse: {
    typeUrl: string;
    encode(message: AddressStringToBytesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AddressStringToBytesResponse;
    fromPartial(object: Partial<AddressStringToBytesResponse>): AddressStringToBytesResponse;
    fromAmino(object: AddressStringToBytesResponseAmino): AddressStringToBytesResponse;
    toAmino(message: AddressStringToBytesResponse): AddressStringToBytesResponseAmino;
    fromAminoMsg(object: AddressStringToBytesResponseAminoMsg): AddressStringToBytesResponse;
    toAminoMsg(message: AddressStringToBytesResponse): AddressStringToBytesResponseAminoMsg;
    fromProtoMsg(message: AddressStringToBytesResponseProtoMsg): AddressStringToBytesResponse;
    toProto(message: AddressStringToBytesResponse): Uint8Array;
    toProtoMsg(message: AddressStringToBytesResponse): AddressStringToBytesResponseProtoMsg;
};
export declare const QueryAccountAddressByIDRequest: {
    typeUrl: string;
    encode(message: QueryAccountAddressByIDRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAccountAddressByIDRequest;
    fromPartial(object: Partial<QueryAccountAddressByIDRequest>): QueryAccountAddressByIDRequest;
    fromAmino(object: QueryAccountAddressByIDRequestAmino): QueryAccountAddressByIDRequest;
    toAmino(message: QueryAccountAddressByIDRequest): QueryAccountAddressByIDRequestAmino;
    fromAminoMsg(object: QueryAccountAddressByIDRequestAminoMsg): QueryAccountAddressByIDRequest;
    toAminoMsg(message: QueryAccountAddressByIDRequest): QueryAccountAddressByIDRequestAminoMsg;
    fromProtoMsg(message: QueryAccountAddressByIDRequestProtoMsg): QueryAccountAddressByIDRequest;
    toProto(message: QueryAccountAddressByIDRequest): Uint8Array;
    toProtoMsg(message: QueryAccountAddressByIDRequest): QueryAccountAddressByIDRequestProtoMsg;
};
export declare const QueryAccountAddressByIDResponse: {
    typeUrl: string;
    encode(message: QueryAccountAddressByIDResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAccountAddressByIDResponse;
    fromPartial(object: Partial<QueryAccountAddressByIDResponse>): QueryAccountAddressByIDResponse;
    fromAmino(object: QueryAccountAddressByIDResponseAmino): QueryAccountAddressByIDResponse;
    toAmino(message: QueryAccountAddressByIDResponse): QueryAccountAddressByIDResponseAmino;
    fromAminoMsg(object: QueryAccountAddressByIDResponseAminoMsg): QueryAccountAddressByIDResponse;
    toAminoMsg(message: QueryAccountAddressByIDResponse): QueryAccountAddressByIDResponseAminoMsg;
    fromProtoMsg(message: QueryAccountAddressByIDResponseProtoMsg): QueryAccountAddressByIDResponse;
    toProto(message: QueryAccountAddressByIDResponse): Uint8Array;
    toProtoMsg(message: QueryAccountAddressByIDResponse): QueryAccountAddressByIDResponseProtoMsg;
};
export declare const QueryAccountInfoRequest: {
    typeUrl: string;
    encode(message: QueryAccountInfoRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAccountInfoRequest;
    fromPartial(object: Partial<QueryAccountInfoRequest>): QueryAccountInfoRequest;
    fromAmino(object: QueryAccountInfoRequestAmino): QueryAccountInfoRequest;
    toAmino(message: QueryAccountInfoRequest): QueryAccountInfoRequestAmino;
    fromAminoMsg(object: QueryAccountInfoRequestAminoMsg): QueryAccountInfoRequest;
    toAminoMsg(message: QueryAccountInfoRequest): QueryAccountInfoRequestAminoMsg;
    fromProtoMsg(message: QueryAccountInfoRequestProtoMsg): QueryAccountInfoRequest;
    toProto(message: QueryAccountInfoRequest): Uint8Array;
    toProtoMsg(message: QueryAccountInfoRequest): QueryAccountInfoRequestProtoMsg;
};
export declare const QueryAccountInfoResponse: {
    typeUrl: string;
    encode(message: QueryAccountInfoResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAccountInfoResponse;
    fromPartial(object: Partial<QueryAccountInfoResponse>): QueryAccountInfoResponse;
    fromAmino(object: QueryAccountInfoResponseAmino): QueryAccountInfoResponse;
    toAmino(message: QueryAccountInfoResponse): QueryAccountInfoResponseAmino;
    fromAminoMsg(object: QueryAccountInfoResponseAminoMsg): QueryAccountInfoResponse;
    toAminoMsg(message: QueryAccountInfoResponse): QueryAccountInfoResponseAminoMsg;
    fromProtoMsg(message: QueryAccountInfoResponseProtoMsg): QueryAccountInfoResponse;
    toProto(message: QueryAccountInfoResponse): Uint8Array;
    toProtoMsg(message: QueryAccountInfoResponse): QueryAccountInfoResponseProtoMsg;
};
export declare const Cosmos_authv1beta1AccountI_InterfaceDecoder: (input: BinaryReader | Uint8Array) => BaseAccount | Any;
export declare const Cosmos_authv1beta1AccountI_FromAmino: (content: AnyAmino) => Any;
export declare const Cosmos_authv1beta1AccountI_ToAmino: (content: Any) => AnyAmino;
export declare const Cosmos_authv1beta1ModuleAccountI_InterfaceDecoder: (input: BinaryReader | Uint8Array) => ModuleAccount | Any;
export declare const Cosmos_authv1beta1ModuleAccountI_FromAmino: (content: AnyAmino) => Any;
export declare const Cosmos_authv1beta1ModuleAccountI_ToAmino: (content: Any) => AnyAmino;
