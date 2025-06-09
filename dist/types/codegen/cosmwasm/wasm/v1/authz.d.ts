import { AccessConfig, AccessConfigAmino, AccessConfigSDKType } from "./types";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
/**
 * StoreCodeAuthorization defines authorization for wasm code upload.
 * Since: wasmd 0.42
 */
export interface StoreCodeAuthorization {
    $typeUrl?: "/cosmwasm.wasm.v1.StoreCodeAuthorization";
    /** Grants for code upload */
    grants: CodeGrant[];
}
export interface StoreCodeAuthorizationProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.StoreCodeAuthorization";
    value: Uint8Array;
}
/**
 * StoreCodeAuthorization defines authorization for wasm code upload.
 * Since: wasmd 0.42
 * @name StoreCodeAuthorizationAmino
 * @package cosmwasm.wasm.v1
 * @see proto type: cosmwasm.wasm.v1.StoreCodeAuthorization
 */
export interface StoreCodeAuthorizationAmino {
    /**
     * Grants for code upload
     */
    grants: CodeGrantAmino[];
}
export interface StoreCodeAuthorizationAminoMsg {
    type: "wasm/StoreCodeAuthorization";
    value: StoreCodeAuthorizationAmino;
}
/**
 * StoreCodeAuthorization defines authorization for wasm code upload.
 * Since: wasmd 0.42
 */
export interface StoreCodeAuthorizationSDKType {
    $typeUrl?: "/cosmwasm.wasm.v1.StoreCodeAuthorization";
    grants: CodeGrantSDKType[];
}
/**
 * ContractExecutionAuthorization defines authorization for wasm execute.
 * Since: wasmd 0.30
 */
export interface ContractExecutionAuthorization {
    $typeUrl?: "/cosmwasm.wasm.v1.ContractExecutionAuthorization";
    /** Grants for contract executions */
    grants: ContractGrant[];
}
export interface ContractExecutionAuthorizationProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.ContractExecutionAuthorization";
    value: Uint8Array;
}
/**
 * ContractExecutionAuthorization defines authorization for wasm execute.
 * Since: wasmd 0.30
 * @name ContractExecutionAuthorizationAmino
 * @package cosmwasm.wasm.v1
 * @see proto type: cosmwasm.wasm.v1.ContractExecutionAuthorization
 */
export interface ContractExecutionAuthorizationAmino {
    /**
     * Grants for contract executions
     */
    grants: ContractGrantAmino[];
}
export interface ContractExecutionAuthorizationAminoMsg {
    type: "wasm/ContractExecutionAuthorization";
    value: ContractExecutionAuthorizationAmino;
}
/**
 * ContractExecutionAuthorization defines authorization for wasm execute.
 * Since: wasmd 0.30
 */
export interface ContractExecutionAuthorizationSDKType {
    $typeUrl?: "/cosmwasm.wasm.v1.ContractExecutionAuthorization";
    grants: ContractGrantSDKType[];
}
/**
 * ContractMigrationAuthorization defines authorization for wasm contract
 * migration. Since: wasmd 0.30
 */
export interface ContractMigrationAuthorization {
    $typeUrl?: "/cosmwasm.wasm.v1.ContractMigrationAuthorization";
    /** Grants for contract migrations */
    grants: ContractGrant[];
}
export interface ContractMigrationAuthorizationProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.ContractMigrationAuthorization";
    value: Uint8Array;
}
/**
 * ContractMigrationAuthorization defines authorization for wasm contract
 * migration. Since: wasmd 0.30
 * @name ContractMigrationAuthorizationAmino
 * @package cosmwasm.wasm.v1
 * @see proto type: cosmwasm.wasm.v1.ContractMigrationAuthorization
 */
export interface ContractMigrationAuthorizationAmino {
    /**
     * Grants for contract migrations
     */
    grants: ContractGrantAmino[];
}
export interface ContractMigrationAuthorizationAminoMsg {
    type: "wasm/ContractMigrationAuthorization";
    value: ContractMigrationAuthorizationAmino;
}
/**
 * ContractMigrationAuthorization defines authorization for wasm contract
 * migration. Since: wasmd 0.30
 */
export interface ContractMigrationAuthorizationSDKType {
    $typeUrl?: "/cosmwasm.wasm.v1.ContractMigrationAuthorization";
    grants: ContractGrantSDKType[];
}
/** CodeGrant a granted permission for a single code */
export interface CodeGrant {
    /**
     * CodeHash is the unique identifier created by wasmvm
     * Wildcard "*" is used to specify any kind of grant.
     */
    codeHash: Uint8Array;
    /**
     * InstantiatePermission is the superset access control to apply
     * on contract creation.
     * Optional
     */
    instantiatePermission?: AccessConfig;
}
export interface CodeGrantProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.CodeGrant";
    value: Uint8Array;
}
/**
 * CodeGrant a granted permission for a single code
 * @name CodeGrantAmino
 * @package cosmwasm.wasm.v1
 * @see proto type: cosmwasm.wasm.v1.CodeGrant
 */
export interface CodeGrantAmino {
    /**
     * CodeHash is the unique identifier created by wasmvm
     * Wildcard "*" is used to specify any kind of grant.
     */
    code_hash?: string;
    /**
     * InstantiatePermission is the superset access control to apply
     * on contract creation.
     * Optional
     */
    instantiate_permission?: AccessConfigAmino;
}
export interface CodeGrantAminoMsg {
    type: "wasm/CodeGrant";
    value: CodeGrantAmino;
}
/** CodeGrant a granted permission for a single code */
export interface CodeGrantSDKType {
    code_hash: Uint8Array;
    instantiate_permission?: AccessConfigSDKType;
}
/**
 * ContractGrant a granted permission for a single contract
 * Since: wasmd 0.30
 */
export interface ContractGrant {
    /** Contract is the bech32 address of the smart contract */
    contract: string;
    /**
     * Limit defines execution limits that are enforced and updated when the grant
     * is applied. When the limit lapsed the grant is removed.
     */
    limit?: MaxCallsLimit | MaxFundsLimit | CombinedLimit | Any | undefined;
    /**
     * Filter define more fine-grained control on the message payload passed
     * to the contract in the operation. When no filter applies on execution, the
     * operation is prohibited.
     */
    filter?: AllowAllMessagesFilter | AcceptedMessageKeysFilter | AcceptedMessagesFilter | Any | undefined;
}
export interface ContractGrantProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.ContractGrant";
    value: Uint8Array;
}
export declare type ContractGrantEncoded = Omit<ContractGrant, "limit" | "filter"> & {
    /**
     * Limit defines execution limits that are enforced and updated when the grant
     * is applied. When the limit lapsed the grant is removed.
     */
    limit?: MaxCallsLimitProtoMsg | MaxFundsLimitProtoMsg | CombinedLimitProtoMsg | AnyProtoMsg | undefined;
    /**
     * Filter define more fine-grained control on the message payload passed
     * to the contract in the operation. When no filter applies on execution, the
     * operation is prohibited.
     */
    filter?: AllowAllMessagesFilterProtoMsg | AcceptedMessageKeysFilterProtoMsg | AcceptedMessagesFilterProtoMsg | AnyProtoMsg | undefined;
};
/**
 * ContractGrant a granted permission for a single contract
 * Since: wasmd 0.30
 * @name ContractGrantAmino
 * @package cosmwasm.wasm.v1
 * @see proto type: cosmwasm.wasm.v1.ContractGrant
 */
export interface ContractGrantAmino {
    /**
     * Contract is the bech32 address of the smart contract
     */
    contract?: string;
    /**
     * Limit defines execution limits that are enforced and updated when the grant
     * is applied. When the limit lapsed the grant is removed.
     */
    limit?: AnyAmino;
    /**
     * Filter define more fine-grained control on the message payload passed
     * to the contract in the operation. When no filter applies on execution, the
     * operation is prohibited.
     */
    filter?: AnyAmino;
}
export interface ContractGrantAminoMsg {
    type: "wasm/ContractGrant";
    value: ContractGrantAmino;
}
/**
 * ContractGrant a granted permission for a single contract
 * Since: wasmd 0.30
 */
export interface ContractGrantSDKType {
    contract: string;
    limit?: MaxCallsLimitSDKType | MaxFundsLimitSDKType | CombinedLimitSDKType | AnySDKType | undefined;
    filter?: AllowAllMessagesFilterSDKType | AcceptedMessageKeysFilterSDKType | AcceptedMessagesFilterSDKType | AnySDKType | undefined;
}
/**
 * MaxCallsLimit limited number of calls to the contract. No funds transferable.
 * Since: wasmd 0.30
 */
export interface MaxCallsLimit {
    $typeUrl?: "/cosmwasm.wasm.v1.MaxCallsLimit";
    /** Remaining number that is decremented on each execution */
    remaining: bigint;
}
export interface MaxCallsLimitProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.MaxCallsLimit";
    value: Uint8Array;
}
/**
 * MaxCallsLimit limited number of calls to the contract. No funds transferable.
 * Since: wasmd 0.30
 * @name MaxCallsLimitAmino
 * @package cosmwasm.wasm.v1
 * @see proto type: cosmwasm.wasm.v1.MaxCallsLimit
 */
export interface MaxCallsLimitAmino {
    /**
     * Remaining number that is decremented on each execution
     */
    remaining?: string;
}
export interface MaxCallsLimitAminoMsg {
    type: "wasm/MaxCallsLimit";
    value: MaxCallsLimitAmino;
}
/**
 * MaxCallsLimit limited number of calls to the contract. No funds transferable.
 * Since: wasmd 0.30
 */
export interface MaxCallsLimitSDKType {
    $typeUrl?: "/cosmwasm.wasm.v1.MaxCallsLimit";
    remaining: bigint;
}
/**
 * MaxFundsLimit defines the maximal amounts that can be sent to the contract.
 * Since: wasmd 0.30
 */
export interface MaxFundsLimit {
    $typeUrl?: "/cosmwasm.wasm.v1.MaxFundsLimit";
    /** Amounts is the maximal amount of tokens transferable to the contract. */
    amounts: Coin[];
}
export interface MaxFundsLimitProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.MaxFundsLimit";
    value: Uint8Array;
}
/**
 * MaxFundsLimit defines the maximal amounts that can be sent to the contract.
 * Since: wasmd 0.30
 * @name MaxFundsLimitAmino
 * @package cosmwasm.wasm.v1
 * @see proto type: cosmwasm.wasm.v1.MaxFundsLimit
 */
export interface MaxFundsLimitAmino {
    /**
     * Amounts is the maximal amount of tokens transferable to the contract.
     */
    amounts: CoinAmino[];
}
export interface MaxFundsLimitAminoMsg {
    type: "wasm/MaxFundsLimit";
    value: MaxFundsLimitAmino;
}
/**
 * MaxFundsLimit defines the maximal amounts that can be sent to the contract.
 * Since: wasmd 0.30
 */
export interface MaxFundsLimitSDKType {
    $typeUrl?: "/cosmwasm.wasm.v1.MaxFundsLimit";
    amounts: CoinSDKType[];
}
/**
 * CombinedLimit defines the maximal amounts that can be sent to a contract and
 * the maximal number of calls executable. Both need to remain >0 to be valid.
 * Since: wasmd 0.30
 */
export interface CombinedLimit {
    $typeUrl?: "/cosmwasm.wasm.v1.CombinedLimit";
    /** Remaining number that is decremented on each execution */
    callsRemaining: bigint;
    /** Amounts is the maximal amount of tokens transferable to the contract. */
    amounts: Coin[];
}
export interface CombinedLimitProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.CombinedLimit";
    value: Uint8Array;
}
/**
 * CombinedLimit defines the maximal amounts that can be sent to a contract and
 * the maximal number of calls executable. Both need to remain >0 to be valid.
 * Since: wasmd 0.30
 * @name CombinedLimitAmino
 * @package cosmwasm.wasm.v1
 * @see proto type: cosmwasm.wasm.v1.CombinedLimit
 */
export interface CombinedLimitAmino {
    /**
     * Remaining number that is decremented on each execution
     */
    calls_remaining?: string;
    /**
     * Amounts is the maximal amount of tokens transferable to the contract.
     */
    amounts: CoinAmino[];
}
export interface CombinedLimitAminoMsg {
    type: "wasm/CombinedLimit";
    value: CombinedLimitAmino;
}
/**
 * CombinedLimit defines the maximal amounts that can be sent to a contract and
 * the maximal number of calls executable. Both need to remain >0 to be valid.
 * Since: wasmd 0.30
 */
export interface CombinedLimitSDKType {
    $typeUrl?: "/cosmwasm.wasm.v1.CombinedLimit";
    calls_remaining: bigint;
    amounts: CoinSDKType[];
}
/**
 * AllowAllMessagesFilter is a wildcard to allow any type of contract payload
 * message.
 * Since: wasmd 0.30
 */
export interface AllowAllMessagesFilter {
    $typeUrl?: "/cosmwasm.wasm.v1.AllowAllMessagesFilter";
}
export interface AllowAllMessagesFilterProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.AllowAllMessagesFilter";
    value: Uint8Array;
}
/**
 * AllowAllMessagesFilter is a wildcard to allow any type of contract payload
 * message.
 * Since: wasmd 0.30
 * @name AllowAllMessagesFilterAmino
 * @package cosmwasm.wasm.v1
 * @see proto type: cosmwasm.wasm.v1.AllowAllMessagesFilter
 */
export interface AllowAllMessagesFilterAmino {
}
export interface AllowAllMessagesFilterAminoMsg {
    type: "wasm/AllowAllMessagesFilter";
    value: AllowAllMessagesFilterAmino;
}
/**
 * AllowAllMessagesFilter is a wildcard to allow any type of contract payload
 * message.
 * Since: wasmd 0.30
 */
export interface AllowAllMessagesFilterSDKType {
    $typeUrl?: "/cosmwasm.wasm.v1.AllowAllMessagesFilter";
}
/**
 * AcceptedMessageKeysFilter accept only the specific contract message keys in
 * the json object to be executed.
 * Since: wasmd 0.30
 */
export interface AcceptedMessageKeysFilter {
    $typeUrl?: "/cosmwasm.wasm.v1.AcceptedMessageKeysFilter";
    /** Messages is the list of unique keys */
    keys: string[];
}
export interface AcceptedMessageKeysFilterProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.AcceptedMessageKeysFilter";
    value: Uint8Array;
}
/**
 * AcceptedMessageKeysFilter accept only the specific contract message keys in
 * the json object to be executed.
 * Since: wasmd 0.30
 * @name AcceptedMessageKeysFilterAmino
 * @package cosmwasm.wasm.v1
 * @see proto type: cosmwasm.wasm.v1.AcceptedMessageKeysFilter
 */
export interface AcceptedMessageKeysFilterAmino {
    /**
     * Messages is the list of unique keys
     */
    keys?: string[];
}
export interface AcceptedMessageKeysFilterAminoMsg {
    type: "wasm/AcceptedMessageKeysFilter";
    value: AcceptedMessageKeysFilterAmino;
}
/**
 * AcceptedMessageKeysFilter accept only the specific contract message keys in
 * the json object to be executed.
 * Since: wasmd 0.30
 */
export interface AcceptedMessageKeysFilterSDKType {
    $typeUrl?: "/cosmwasm.wasm.v1.AcceptedMessageKeysFilter";
    keys: string[];
}
/**
 * AcceptedMessagesFilter accept only the specific raw contract messages to be
 * executed.
 * Since: wasmd 0.30
 */
export interface AcceptedMessagesFilter {
    $typeUrl?: "/cosmwasm.wasm.v1.AcceptedMessagesFilter";
    /** Messages is the list of raw contract messages */
    messages: Uint8Array[];
}
export interface AcceptedMessagesFilterProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.AcceptedMessagesFilter";
    value: Uint8Array;
}
/**
 * AcceptedMessagesFilter accept only the specific raw contract messages to be
 * executed.
 * Since: wasmd 0.30
 * @name AcceptedMessagesFilterAmino
 * @package cosmwasm.wasm.v1
 * @see proto type: cosmwasm.wasm.v1.AcceptedMessagesFilter
 */
export interface AcceptedMessagesFilterAmino {
    /**
     * Messages is the list of raw contract messages
     */
    messages?: any[];
}
export interface AcceptedMessagesFilterAminoMsg {
    type: "wasm/AcceptedMessagesFilter";
    value: AcceptedMessagesFilterAmino;
}
/**
 * AcceptedMessagesFilter accept only the specific raw contract messages to be
 * executed.
 * Since: wasmd 0.30
 */
export interface AcceptedMessagesFilterSDKType {
    $typeUrl?: "/cosmwasm.wasm.v1.AcceptedMessagesFilter";
    messages: Uint8Array[];
}
export declare const StoreCodeAuthorization: {
    typeUrl: string;
    encode(message: StoreCodeAuthorization, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): StoreCodeAuthorization;
    fromPartial(object: Partial<StoreCodeAuthorization>): StoreCodeAuthorization;
    fromAmino(object: StoreCodeAuthorizationAmino): StoreCodeAuthorization;
    toAmino(message: StoreCodeAuthorization): StoreCodeAuthorizationAmino;
    fromAminoMsg(object: StoreCodeAuthorizationAminoMsg): StoreCodeAuthorization;
    toAminoMsg(message: StoreCodeAuthorization): StoreCodeAuthorizationAminoMsg;
    fromProtoMsg(message: StoreCodeAuthorizationProtoMsg): StoreCodeAuthorization;
    toProto(message: StoreCodeAuthorization): Uint8Array;
    toProtoMsg(message: StoreCodeAuthorization): StoreCodeAuthorizationProtoMsg;
};
export declare const ContractExecutionAuthorization: {
    typeUrl: string;
    encode(message: ContractExecutionAuthorization, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ContractExecutionAuthorization;
    fromPartial(object: Partial<ContractExecutionAuthorization>): ContractExecutionAuthorization;
    fromAmino(object: ContractExecutionAuthorizationAmino): ContractExecutionAuthorization;
    toAmino(message: ContractExecutionAuthorization): ContractExecutionAuthorizationAmino;
    fromAminoMsg(object: ContractExecutionAuthorizationAminoMsg): ContractExecutionAuthorization;
    toAminoMsg(message: ContractExecutionAuthorization): ContractExecutionAuthorizationAminoMsg;
    fromProtoMsg(message: ContractExecutionAuthorizationProtoMsg): ContractExecutionAuthorization;
    toProto(message: ContractExecutionAuthorization): Uint8Array;
    toProtoMsg(message: ContractExecutionAuthorization): ContractExecutionAuthorizationProtoMsg;
};
export declare const ContractMigrationAuthorization: {
    typeUrl: string;
    encode(message: ContractMigrationAuthorization, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ContractMigrationAuthorization;
    fromPartial(object: Partial<ContractMigrationAuthorization>): ContractMigrationAuthorization;
    fromAmino(object: ContractMigrationAuthorizationAmino): ContractMigrationAuthorization;
    toAmino(message: ContractMigrationAuthorization): ContractMigrationAuthorizationAmino;
    fromAminoMsg(object: ContractMigrationAuthorizationAminoMsg): ContractMigrationAuthorization;
    toAminoMsg(message: ContractMigrationAuthorization): ContractMigrationAuthorizationAminoMsg;
    fromProtoMsg(message: ContractMigrationAuthorizationProtoMsg): ContractMigrationAuthorization;
    toProto(message: ContractMigrationAuthorization): Uint8Array;
    toProtoMsg(message: ContractMigrationAuthorization): ContractMigrationAuthorizationProtoMsg;
};
export declare const CodeGrant: {
    typeUrl: string;
    encode(message: CodeGrant, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): CodeGrant;
    fromPartial(object: Partial<CodeGrant>): CodeGrant;
    fromAmino(object: CodeGrantAmino): CodeGrant;
    toAmino(message: CodeGrant): CodeGrantAmino;
    fromAminoMsg(object: CodeGrantAminoMsg): CodeGrant;
    toAminoMsg(message: CodeGrant): CodeGrantAminoMsg;
    fromProtoMsg(message: CodeGrantProtoMsg): CodeGrant;
    toProto(message: CodeGrant): Uint8Array;
    toProtoMsg(message: CodeGrant): CodeGrantProtoMsg;
};
export declare const ContractGrant: {
    typeUrl: string;
    encode(message: ContractGrant, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ContractGrant;
    fromPartial(object: Partial<ContractGrant>): ContractGrant;
    fromAmino(object: ContractGrantAmino): ContractGrant;
    toAmino(message: ContractGrant): ContractGrantAmino;
    fromAminoMsg(object: ContractGrantAminoMsg): ContractGrant;
    toAminoMsg(message: ContractGrant): ContractGrantAminoMsg;
    fromProtoMsg(message: ContractGrantProtoMsg): ContractGrant;
    toProto(message: ContractGrant): Uint8Array;
    toProtoMsg(message: ContractGrant): ContractGrantProtoMsg;
};
export declare const MaxCallsLimit: {
    typeUrl: string;
    encode(message: MaxCallsLimit, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MaxCallsLimit;
    fromPartial(object: Partial<MaxCallsLimit>): MaxCallsLimit;
    fromAmino(object: MaxCallsLimitAmino): MaxCallsLimit;
    toAmino(message: MaxCallsLimit): MaxCallsLimitAmino;
    fromAminoMsg(object: MaxCallsLimitAminoMsg): MaxCallsLimit;
    toAminoMsg(message: MaxCallsLimit): MaxCallsLimitAminoMsg;
    fromProtoMsg(message: MaxCallsLimitProtoMsg): MaxCallsLimit;
    toProto(message: MaxCallsLimit): Uint8Array;
    toProtoMsg(message: MaxCallsLimit): MaxCallsLimitProtoMsg;
};
export declare const MaxFundsLimit: {
    typeUrl: string;
    encode(message: MaxFundsLimit, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MaxFundsLimit;
    fromPartial(object: Partial<MaxFundsLimit>): MaxFundsLimit;
    fromAmino(object: MaxFundsLimitAmino): MaxFundsLimit;
    toAmino(message: MaxFundsLimit): MaxFundsLimitAmino;
    fromAminoMsg(object: MaxFundsLimitAminoMsg): MaxFundsLimit;
    toAminoMsg(message: MaxFundsLimit): MaxFundsLimitAminoMsg;
    fromProtoMsg(message: MaxFundsLimitProtoMsg): MaxFundsLimit;
    toProto(message: MaxFundsLimit): Uint8Array;
    toProtoMsg(message: MaxFundsLimit): MaxFundsLimitProtoMsg;
};
export declare const CombinedLimit: {
    typeUrl: string;
    encode(message: CombinedLimit, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): CombinedLimit;
    fromPartial(object: Partial<CombinedLimit>): CombinedLimit;
    fromAmino(object: CombinedLimitAmino): CombinedLimit;
    toAmino(message: CombinedLimit): CombinedLimitAmino;
    fromAminoMsg(object: CombinedLimitAminoMsg): CombinedLimit;
    toAminoMsg(message: CombinedLimit): CombinedLimitAminoMsg;
    fromProtoMsg(message: CombinedLimitProtoMsg): CombinedLimit;
    toProto(message: CombinedLimit): Uint8Array;
    toProtoMsg(message: CombinedLimit): CombinedLimitProtoMsg;
};
export declare const AllowAllMessagesFilter: {
    typeUrl: string;
    encode(_: AllowAllMessagesFilter, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AllowAllMessagesFilter;
    fromPartial(_: Partial<AllowAllMessagesFilter>): AllowAllMessagesFilter;
    fromAmino(_: AllowAllMessagesFilterAmino): AllowAllMessagesFilter;
    toAmino(_: AllowAllMessagesFilter): AllowAllMessagesFilterAmino;
    fromAminoMsg(object: AllowAllMessagesFilterAminoMsg): AllowAllMessagesFilter;
    toAminoMsg(message: AllowAllMessagesFilter): AllowAllMessagesFilterAminoMsg;
    fromProtoMsg(message: AllowAllMessagesFilterProtoMsg): AllowAllMessagesFilter;
    toProto(message: AllowAllMessagesFilter): Uint8Array;
    toProtoMsg(message: AllowAllMessagesFilter): AllowAllMessagesFilterProtoMsg;
};
export declare const AcceptedMessageKeysFilter: {
    typeUrl: string;
    encode(message: AcceptedMessageKeysFilter, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AcceptedMessageKeysFilter;
    fromPartial(object: Partial<AcceptedMessageKeysFilter>): AcceptedMessageKeysFilter;
    fromAmino(object: AcceptedMessageKeysFilterAmino): AcceptedMessageKeysFilter;
    toAmino(message: AcceptedMessageKeysFilter): AcceptedMessageKeysFilterAmino;
    fromAminoMsg(object: AcceptedMessageKeysFilterAminoMsg): AcceptedMessageKeysFilter;
    toAminoMsg(message: AcceptedMessageKeysFilter): AcceptedMessageKeysFilterAminoMsg;
    fromProtoMsg(message: AcceptedMessageKeysFilterProtoMsg): AcceptedMessageKeysFilter;
    toProto(message: AcceptedMessageKeysFilter): Uint8Array;
    toProtoMsg(message: AcceptedMessageKeysFilter): AcceptedMessageKeysFilterProtoMsg;
};
export declare const AcceptedMessagesFilter: {
    typeUrl: string;
    encode(message: AcceptedMessagesFilter, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AcceptedMessagesFilter;
    fromPartial(object: Partial<AcceptedMessagesFilter>): AcceptedMessagesFilter;
    fromAmino(object: AcceptedMessagesFilterAmino): AcceptedMessagesFilter;
    toAmino(message: AcceptedMessagesFilter): AcceptedMessagesFilterAmino;
    fromAminoMsg(object: AcceptedMessagesFilterAminoMsg): AcceptedMessagesFilter;
    toAminoMsg(message: AcceptedMessagesFilter): AcceptedMessagesFilterAminoMsg;
    fromProtoMsg(message: AcceptedMessagesFilterProtoMsg): AcceptedMessagesFilter;
    toProto(message: AcceptedMessagesFilter): Uint8Array;
    toProtoMsg(message: AcceptedMessagesFilter): AcceptedMessagesFilterProtoMsg;
};
export declare const Cosmwasm_wasmv1ContractAuthzLimitX_InterfaceDecoder: (input: BinaryReader | Uint8Array) => MaxCallsLimit | MaxFundsLimit | CombinedLimit | Any;
export declare const Cosmwasm_wasmv1ContractAuthzLimitX_FromAmino: (content: AnyAmino) => Any;
export declare const Cosmwasm_wasmv1ContractAuthzLimitX_ToAmino: (content: Any) => AnyAmino;
export declare const Cosmwasm_wasmv1ContractAuthzFilterX_InterfaceDecoder: (input: BinaryReader | Uint8Array) => AllowAllMessagesFilter | AcceptedMessageKeysFilter | AcceptedMessagesFilter | Any;
export declare const Cosmwasm_wasmv1ContractAuthzFilterX_FromAmino: (content: AnyAmino) => Any;
export declare const Cosmwasm_wasmv1ContractAuthzFilterX_ToAmino: (content: Any) => AnyAmino;
