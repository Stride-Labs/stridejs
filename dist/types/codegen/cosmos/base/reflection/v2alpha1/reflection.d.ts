import { BinaryReader, BinaryWriter } from "../../../../binary";
/** AppDescriptor describes a cosmos-sdk based application */
export interface AppDescriptor {
    /**
     * AuthnDescriptor provides information on how to authenticate transactions on the application
     * NOTE: experimental and subject to change in future releases.
     */
    authn?: AuthnDescriptor;
    /** chain provides the chain descriptor */
    chain?: ChainDescriptor;
    /** codec provides metadata information regarding codec related types */
    codec?: CodecDescriptor;
    /** configuration provides metadata information regarding the sdk.Config type */
    configuration?: ConfigurationDescriptor;
    /** query_services provides metadata information regarding the available queriable endpoints */
    queryServices?: QueryServicesDescriptor;
    /** tx provides metadata information regarding how to send transactions to the given application */
    tx?: TxDescriptor;
}
export interface AppDescriptorProtoMsg {
    typeUrl: "/cosmos.base.reflection.v2alpha1.AppDescriptor";
    value: Uint8Array;
}
/**
 * AppDescriptor describes a cosmos-sdk based application
 * @name AppDescriptorAmino
 * @package cosmos.base.reflection.v2alpha1
 * @see proto type: cosmos.base.reflection.v2alpha1.AppDescriptor
 */
export interface AppDescriptorAmino {
    /**
     * AuthnDescriptor provides information on how to authenticate transactions on the application
     * NOTE: experimental and subject to change in future releases.
     */
    authn?: AuthnDescriptorAmino;
    /**
     * chain provides the chain descriptor
     */
    chain?: ChainDescriptorAmino;
    /**
     * codec provides metadata information regarding codec related types
     */
    codec?: CodecDescriptorAmino;
    /**
     * configuration provides metadata information regarding the sdk.Config type
     */
    configuration?: ConfigurationDescriptorAmino;
    /**
     * query_services provides metadata information regarding the available queriable endpoints
     */
    query_services?: QueryServicesDescriptorAmino;
    /**
     * tx provides metadata information regarding how to send transactions to the given application
     */
    tx?: TxDescriptorAmino;
}
export interface AppDescriptorAminoMsg {
    type: "cosmos-sdk/AppDescriptor";
    value: AppDescriptorAmino;
}
/** AppDescriptor describes a cosmos-sdk based application */
export interface AppDescriptorSDKType {
    authn?: AuthnDescriptorSDKType;
    chain?: ChainDescriptorSDKType;
    codec?: CodecDescriptorSDKType;
    configuration?: ConfigurationDescriptorSDKType;
    query_services?: QueryServicesDescriptorSDKType;
    tx?: TxDescriptorSDKType;
}
/** TxDescriptor describes the accepted transaction type */
export interface TxDescriptor {
    /**
     * fullname is the protobuf fullname of the raw transaction type (for instance the tx.Tx type)
     * it is not meant to support polymorphism of transaction types, it is supposed to be used by
     * reflection clients to understand if they can handle a specific transaction type in an application.
     */
    fullname: string;
    /** msgs lists the accepted application messages (sdk.Msg) */
    msgs: MsgDescriptor[];
}
export interface TxDescriptorProtoMsg {
    typeUrl: "/cosmos.base.reflection.v2alpha1.TxDescriptor";
    value: Uint8Array;
}
/**
 * TxDescriptor describes the accepted transaction type
 * @name TxDescriptorAmino
 * @package cosmos.base.reflection.v2alpha1
 * @see proto type: cosmos.base.reflection.v2alpha1.TxDescriptor
 */
export interface TxDescriptorAmino {
    /**
     * fullname is the protobuf fullname of the raw transaction type (for instance the tx.Tx type)
     * it is not meant to support polymorphism of transaction types, it is supposed to be used by
     * reflection clients to understand if they can handle a specific transaction type in an application.
     */
    fullname?: string;
    /**
     * msgs lists the accepted application messages (sdk.Msg)
     */
    msgs?: MsgDescriptorAmino[];
}
export interface TxDescriptorAminoMsg {
    type: "cosmos-sdk/TxDescriptor";
    value: TxDescriptorAmino;
}
/** TxDescriptor describes the accepted transaction type */
export interface TxDescriptorSDKType {
    fullname: string;
    msgs: MsgDescriptorSDKType[];
}
/**
 * AuthnDescriptor provides information on how to sign transactions without relying
 * on the online RPCs GetTxMetadata and CombineUnsignedTxAndSignatures
 */
export interface AuthnDescriptor {
    /** sign_modes defines the supported signature algorithm */
    signModes: SigningModeDescriptor[];
}
export interface AuthnDescriptorProtoMsg {
    typeUrl: "/cosmos.base.reflection.v2alpha1.AuthnDescriptor";
    value: Uint8Array;
}
/**
 * AuthnDescriptor provides information on how to sign transactions without relying
 * on the online RPCs GetTxMetadata and CombineUnsignedTxAndSignatures
 * @name AuthnDescriptorAmino
 * @package cosmos.base.reflection.v2alpha1
 * @see proto type: cosmos.base.reflection.v2alpha1.AuthnDescriptor
 */
export interface AuthnDescriptorAmino {
    /**
     * sign_modes defines the supported signature algorithm
     */
    sign_modes?: SigningModeDescriptorAmino[];
}
export interface AuthnDescriptorAminoMsg {
    type: "cosmos-sdk/AuthnDescriptor";
    value: AuthnDescriptorAmino;
}
/**
 * AuthnDescriptor provides information on how to sign transactions without relying
 * on the online RPCs GetTxMetadata and CombineUnsignedTxAndSignatures
 */
export interface AuthnDescriptorSDKType {
    sign_modes: SigningModeDescriptorSDKType[];
}
/**
 * SigningModeDescriptor provides information on a signing flow of the application
 * NOTE(fdymylja): here we could go as far as providing an entire flow on how
 * to sign a message given a SigningModeDescriptor, but it's better to think about
 * this another time
 */
export interface SigningModeDescriptor {
    /** name defines the unique name of the signing mode */
    name: string;
    /** number is the unique int32 identifier for the sign_mode enum */
    number: number;
    /**
     * authn_info_provider_method_fullname defines the fullname of the method to call to get
     * the metadata required to authenticate using the provided sign_modes
     */
    authnInfoProviderMethodFullname: string;
}
export interface SigningModeDescriptorProtoMsg {
    typeUrl: "/cosmos.base.reflection.v2alpha1.SigningModeDescriptor";
    value: Uint8Array;
}
/**
 * SigningModeDescriptor provides information on a signing flow of the application
 * NOTE(fdymylja): here we could go as far as providing an entire flow on how
 * to sign a message given a SigningModeDescriptor, but it's better to think about
 * this another time
 * @name SigningModeDescriptorAmino
 * @package cosmos.base.reflection.v2alpha1
 * @see proto type: cosmos.base.reflection.v2alpha1.SigningModeDescriptor
 */
export interface SigningModeDescriptorAmino {
    /**
     * name defines the unique name of the signing mode
     */
    name?: string;
    /**
     * number is the unique int32 identifier for the sign_mode enum
     */
    number?: number;
    /**
     * authn_info_provider_method_fullname defines the fullname of the method to call to get
     * the metadata required to authenticate using the provided sign_modes
     */
    authn_info_provider_method_fullname?: string;
}
export interface SigningModeDescriptorAminoMsg {
    type: "cosmos-sdk/SigningModeDescriptor";
    value: SigningModeDescriptorAmino;
}
/**
 * SigningModeDescriptor provides information on a signing flow of the application
 * NOTE(fdymylja): here we could go as far as providing an entire flow on how
 * to sign a message given a SigningModeDescriptor, but it's better to think about
 * this another time
 */
export interface SigningModeDescriptorSDKType {
    name: string;
    number: number;
    authn_info_provider_method_fullname: string;
}
/** ChainDescriptor describes chain information of the application */
export interface ChainDescriptor {
    /** id is the chain id */
    id: string;
}
export interface ChainDescriptorProtoMsg {
    typeUrl: "/cosmos.base.reflection.v2alpha1.ChainDescriptor";
    value: Uint8Array;
}
/**
 * ChainDescriptor describes chain information of the application
 * @name ChainDescriptorAmino
 * @package cosmos.base.reflection.v2alpha1
 * @see proto type: cosmos.base.reflection.v2alpha1.ChainDescriptor
 */
export interface ChainDescriptorAmino {
    /**
     * id is the chain id
     */
    id?: string;
}
export interface ChainDescriptorAminoMsg {
    type: "cosmos-sdk/ChainDescriptor";
    value: ChainDescriptorAmino;
}
/** ChainDescriptor describes chain information of the application */
export interface ChainDescriptorSDKType {
    id: string;
}
/** CodecDescriptor describes the registered interfaces and provides metadata information on the types */
export interface CodecDescriptor {
    /** interfaces is a list of the registerted interfaces descriptors */
    interfaces: InterfaceDescriptor[];
}
export interface CodecDescriptorProtoMsg {
    typeUrl: "/cosmos.base.reflection.v2alpha1.CodecDescriptor";
    value: Uint8Array;
}
/**
 * CodecDescriptor describes the registered interfaces and provides metadata information on the types
 * @name CodecDescriptorAmino
 * @package cosmos.base.reflection.v2alpha1
 * @see proto type: cosmos.base.reflection.v2alpha1.CodecDescriptor
 */
export interface CodecDescriptorAmino {
    /**
     * interfaces is a list of the registerted interfaces descriptors
     */
    interfaces?: InterfaceDescriptorAmino[];
}
export interface CodecDescriptorAminoMsg {
    type: "cosmos-sdk/CodecDescriptor";
    value: CodecDescriptorAmino;
}
/** CodecDescriptor describes the registered interfaces and provides metadata information on the types */
export interface CodecDescriptorSDKType {
    interfaces: InterfaceDescriptorSDKType[];
}
/** InterfaceDescriptor describes the implementation of an interface */
export interface InterfaceDescriptor {
    /** fullname is the name of the interface */
    fullname: string;
    /**
     * interface_accepting_messages contains information regarding the proto messages which contain the interface as
     * google.protobuf.Any field
     */
    interfaceAcceptingMessages: InterfaceAcceptingMessageDescriptor[];
    /** interface_implementers is a list of the descriptors of the interface implementers */
    interfaceImplementers: InterfaceImplementerDescriptor[];
}
export interface InterfaceDescriptorProtoMsg {
    typeUrl: "/cosmos.base.reflection.v2alpha1.InterfaceDescriptor";
    value: Uint8Array;
}
/**
 * InterfaceDescriptor describes the implementation of an interface
 * @name InterfaceDescriptorAmino
 * @package cosmos.base.reflection.v2alpha1
 * @see proto type: cosmos.base.reflection.v2alpha1.InterfaceDescriptor
 */
export interface InterfaceDescriptorAmino {
    /**
     * fullname is the name of the interface
     */
    fullname?: string;
    /**
     * interface_accepting_messages contains information regarding the proto messages which contain the interface as
     * google.protobuf.Any field
     */
    interface_accepting_messages?: InterfaceAcceptingMessageDescriptorAmino[];
    /**
     * interface_implementers is a list of the descriptors of the interface implementers
     */
    interface_implementers?: InterfaceImplementerDescriptorAmino[];
}
export interface InterfaceDescriptorAminoMsg {
    type: "cosmos-sdk/InterfaceDescriptor";
    value: InterfaceDescriptorAmino;
}
/** InterfaceDescriptor describes the implementation of an interface */
export interface InterfaceDescriptorSDKType {
    fullname: string;
    interface_accepting_messages: InterfaceAcceptingMessageDescriptorSDKType[];
    interface_implementers: InterfaceImplementerDescriptorSDKType[];
}
/** InterfaceImplementerDescriptor describes an interface implementer */
export interface InterfaceImplementerDescriptor {
    /** fullname is the protobuf queryable name of the interface implementer */
    fullname: string;
    /**
     * type_url defines the type URL used when marshalling the type as any
     * this is required so we can provide type safe google.protobuf.Any marshalling and
     * unmarshalling, making sure that we don't accept just 'any' type
     * in our interface fields
     */
    typeUrl: string;
}
export interface InterfaceImplementerDescriptorProtoMsg {
    typeUrl: "/cosmos.base.reflection.v2alpha1.InterfaceImplementerDescriptor";
    value: Uint8Array;
}
/**
 * InterfaceImplementerDescriptor describes an interface implementer
 * @name InterfaceImplementerDescriptorAmino
 * @package cosmos.base.reflection.v2alpha1
 * @see proto type: cosmos.base.reflection.v2alpha1.InterfaceImplementerDescriptor
 */
export interface InterfaceImplementerDescriptorAmino {
    /**
     * fullname is the protobuf queryable name of the interface implementer
     */
    fullname?: string;
    /**
     * type_url defines the type URL used when marshalling the type as any
     * this is required so we can provide type safe google.protobuf.Any marshalling and
     * unmarshalling, making sure that we don't accept just 'any' type
     * in our interface fields
     */
    type_url?: string;
}
export interface InterfaceImplementerDescriptorAminoMsg {
    type: "cosmos-sdk/InterfaceImplementerDescriptor";
    value: InterfaceImplementerDescriptorAmino;
}
/** InterfaceImplementerDescriptor describes an interface implementer */
export interface InterfaceImplementerDescriptorSDKType {
    fullname: string;
    type_url: string;
}
/**
 * InterfaceAcceptingMessageDescriptor describes a protobuf message which contains
 * an interface represented as a google.protobuf.Any
 */
export interface InterfaceAcceptingMessageDescriptor {
    /** fullname is the protobuf fullname of the type containing the interface */
    fullname: string;
    /**
     * field_descriptor_names is a list of the protobuf name (not fullname) of the field
     * which contains the interface as google.protobuf.Any (the interface is the same, but
     * it can be in multiple fields of the same proto message)
     */
    fieldDescriptorNames: string[];
}
export interface InterfaceAcceptingMessageDescriptorProtoMsg {
    typeUrl: "/cosmos.base.reflection.v2alpha1.InterfaceAcceptingMessageDescriptor";
    value: Uint8Array;
}
/**
 * InterfaceAcceptingMessageDescriptor describes a protobuf message which contains
 * an interface represented as a google.protobuf.Any
 * @name InterfaceAcceptingMessageDescriptorAmino
 * @package cosmos.base.reflection.v2alpha1
 * @see proto type: cosmos.base.reflection.v2alpha1.InterfaceAcceptingMessageDescriptor
 */
export interface InterfaceAcceptingMessageDescriptorAmino {
    /**
     * fullname is the protobuf fullname of the type containing the interface
     */
    fullname?: string;
    /**
     * field_descriptor_names is a list of the protobuf name (not fullname) of the field
     * which contains the interface as google.protobuf.Any (the interface is the same, but
     * it can be in multiple fields of the same proto message)
     */
    field_descriptor_names?: string[];
}
export interface InterfaceAcceptingMessageDescriptorAminoMsg {
    type: "cosmos-sdk/InterfaceAcceptingMessageDescriptor";
    value: InterfaceAcceptingMessageDescriptorAmino;
}
/**
 * InterfaceAcceptingMessageDescriptor describes a protobuf message which contains
 * an interface represented as a google.protobuf.Any
 */
export interface InterfaceAcceptingMessageDescriptorSDKType {
    fullname: string;
    field_descriptor_names: string[];
}
/** ConfigurationDescriptor contains metadata information on the sdk.Config */
export interface ConfigurationDescriptor {
    /** bech32_account_address_prefix is the account address prefix */
    bech32AccountAddressPrefix: string;
}
export interface ConfigurationDescriptorProtoMsg {
    typeUrl: "/cosmos.base.reflection.v2alpha1.ConfigurationDescriptor";
    value: Uint8Array;
}
/**
 * ConfigurationDescriptor contains metadata information on the sdk.Config
 * @name ConfigurationDescriptorAmino
 * @package cosmos.base.reflection.v2alpha1
 * @see proto type: cosmos.base.reflection.v2alpha1.ConfigurationDescriptor
 */
export interface ConfigurationDescriptorAmino {
    /**
     * bech32_account_address_prefix is the account address prefix
     */
    bech32_account_address_prefix?: string;
}
export interface ConfigurationDescriptorAminoMsg {
    type: "cosmos-sdk/ConfigurationDescriptor";
    value: ConfigurationDescriptorAmino;
}
/** ConfigurationDescriptor contains metadata information on the sdk.Config */
export interface ConfigurationDescriptorSDKType {
    bech32_account_address_prefix: string;
}
/** MsgDescriptor describes a cosmos-sdk message that can be delivered with a transaction */
export interface MsgDescriptor {
    /** msg_type_url contains the TypeURL of a sdk.Msg. */
    msgTypeUrl: string;
}
export interface MsgDescriptorProtoMsg {
    typeUrl: "/cosmos.base.reflection.v2alpha1.MsgDescriptor";
    value: Uint8Array;
}
/**
 * MsgDescriptor describes a cosmos-sdk message that can be delivered with a transaction
 * @name MsgDescriptorAmino
 * @package cosmos.base.reflection.v2alpha1
 * @see proto type: cosmos.base.reflection.v2alpha1.MsgDescriptor
 */
export interface MsgDescriptorAmino {
    /**
     * msg_type_url contains the TypeURL of a sdk.Msg.
     */
    msg_type_url?: string;
}
export interface MsgDescriptorAminoMsg {
    type: "cosmos-sdk/MsgDescriptor";
    value: MsgDescriptorAmino;
}
/** MsgDescriptor describes a cosmos-sdk message that can be delivered with a transaction */
export interface MsgDescriptorSDKType {
    msg_type_url: string;
}
/** GetAuthnDescriptorRequest is the request used for the GetAuthnDescriptor RPC */
export interface GetAuthnDescriptorRequest {
}
export interface GetAuthnDescriptorRequestProtoMsg {
    typeUrl: "/cosmos.base.reflection.v2alpha1.GetAuthnDescriptorRequest";
    value: Uint8Array;
}
/**
 * GetAuthnDescriptorRequest is the request used for the GetAuthnDescriptor RPC
 * @name GetAuthnDescriptorRequestAmino
 * @package cosmos.base.reflection.v2alpha1
 * @see proto type: cosmos.base.reflection.v2alpha1.GetAuthnDescriptorRequest
 */
export interface GetAuthnDescriptorRequestAmino {
}
export interface GetAuthnDescriptorRequestAminoMsg {
    type: "cosmos-sdk/GetAuthnDescriptorRequest";
    value: GetAuthnDescriptorRequestAmino;
}
/** GetAuthnDescriptorRequest is the request used for the GetAuthnDescriptor RPC */
export interface GetAuthnDescriptorRequestSDKType {
}
/** GetAuthnDescriptorResponse is the response returned by the GetAuthnDescriptor RPC */
export interface GetAuthnDescriptorResponse {
    /** authn describes how to authenticate to the application when sending transactions */
    authn?: AuthnDescriptor;
}
export interface GetAuthnDescriptorResponseProtoMsg {
    typeUrl: "/cosmos.base.reflection.v2alpha1.GetAuthnDescriptorResponse";
    value: Uint8Array;
}
/**
 * GetAuthnDescriptorResponse is the response returned by the GetAuthnDescriptor RPC
 * @name GetAuthnDescriptorResponseAmino
 * @package cosmos.base.reflection.v2alpha1
 * @see proto type: cosmos.base.reflection.v2alpha1.GetAuthnDescriptorResponse
 */
export interface GetAuthnDescriptorResponseAmino {
    /**
     * authn describes how to authenticate to the application when sending transactions
     */
    authn?: AuthnDescriptorAmino;
}
export interface GetAuthnDescriptorResponseAminoMsg {
    type: "cosmos-sdk/GetAuthnDescriptorResponse";
    value: GetAuthnDescriptorResponseAmino;
}
/** GetAuthnDescriptorResponse is the response returned by the GetAuthnDescriptor RPC */
export interface GetAuthnDescriptorResponseSDKType {
    authn?: AuthnDescriptorSDKType;
}
/** GetChainDescriptorRequest is the request used for the GetChainDescriptor RPC */
export interface GetChainDescriptorRequest {
}
export interface GetChainDescriptorRequestProtoMsg {
    typeUrl: "/cosmos.base.reflection.v2alpha1.GetChainDescriptorRequest";
    value: Uint8Array;
}
/**
 * GetChainDescriptorRequest is the request used for the GetChainDescriptor RPC
 * @name GetChainDescriptorRequestAmino
 * @package cosmos.base.reflection.v2alpha1
 * @see proto type: cosmos.base.reflection.v2alpha1.GetChainDescriptorRequest
 */
export interface GetChainDescriptorRequestAmino {
}
export interface GetChainDescriptorRequestAminoMsg {
    type: "cosmos-sdk/GetChainDescriptorRequest";
    value: GetChainDescriptorRequestAmino;
}
/** GetChainDescriptorRequest is the request used for the GetChainDescriptor RPC */
export interface GetChainDescriptorRequestSDKType {
}
/** GetChainDescriptorResponse is the response returned by the GetChainDescriptor RPC */
export interface GetChainDescriptorResponse {
    /** chain describes application chain information */
    chain?: ChainDescriptor;
}
export interface GetChainDescriptorResponseProtoMsg {
    typeUrl: "/cosmos.base.reflection.v2alpha1.GetChainDescriptorResponse";
    value: Uint8Array;
}
/**
 * GetChainDescriptorResponse is the response returned by the GetChainDescriptor RPC
 * @name GetChainDescriptorResponseAmino
 * @package cosmos.base.reflection.v2alpha1
 * @see proto type: cosmos.base.reflection.v2alpha1.GetChainDescriptorResponse
 */
export interface GetChainDescriptorResponseAmino {
    /**
     * chain describes application chain information
     */
    chain?: ChainDescriptorAmino;
}
export interface GetChainDescriptorResponseAminoMsg {
    type: "cosmos-sdk/GetChainDescriptorResponse";
    value: GetChainDescriptorResponseAmino;
}
/** GetChainDescriptorResponse is the response returned by the GetChainDescriptor RPC */
export interface GetChainDescriptorResponseSDKType {
    chain?: ChainDescriptorSDKType;
}
/** GetCodecDescriptorRequest is the request used for the GetCodecDescriptor RPC */
export interface GetCodecDescriptorRequest {
}
export interface GetCodecDescriptorRequestProtoMsg {
    typeUrl: "/cosmos.base.reflection.v2alpha1.GetCodecDescriptorRequest";
    value: Uint8Array;
}
/**
 * GetCodecDescriptorRequest is the request used for the GetCodecDescriptor RPC
 * @name GetCodecDescriptorRequestAmino
 * @package cosmos.base.reflection.v2alpha1
 * @see proto type: cosmos.base.reflection.v2alpha1.GetCodecDescriptorRequest
 */
export interface GetCodecDescriptorRequestAmino {
}
export interface GetCodecDescriptorRequestAminoMsg {
    type: "cosmos-sdk/GetCodecDescriptorRequest";
    value: GetCodecDescriptorRequestAmino;
}
/** GetCodecDescriptorRequest is the request used for the GetCodecDescriptor RPC */
export interface GetCodecDescriptorRequestSDKType {
}
/** GetCodecDescriptorResponse is the response returned by the GetCodecDescriptor RPC */
export interface GetCodecDescriptorResponse {
    /** codec describes the application codec such as registered interfaces and implementations */
    codec?: CodecDescriptor;
}
export interface GetCodecDescriptorResponseProtoMsg {
    typeUrl: "/cosmos.base.reflection.v2alpha1.GetCodecDescriptorResponse";
    value: Uint8Array;
}
/**
 * GetCodecDescriptorResponse is the response returned by the GetCodecDescriptor RPC
 * @name GetCodecDescriptorResponseAmino
 * @package cosmos.base.reflection.v2alpha1
 * @see proto type: cosmos.base.reflection.v2alpha1.GetCodecDescriptorResponse
 */
export interface GetCodecDescriptorResponseAmino {
    /**
     * codec describes the application codec such as registered interfaces and implementations
     */
    codec?: CodecDescriptorAmino;
}
export interface GetCodecDescriptorResponseAminoMsg {
    type: "cosmos-sdk/GetCodecDescriptorResponse";
    value: GetCodecDescriptorResponseAmino;
}
/** GetCodecDescriptorResponse is the response returned by the GetCodecDescriptor RPC */
export interface GetCodecDescriptorResponseSDKType {
    codec?: CodecDescriptorSDKType;
}
/** GetConfigurationDescriptorRequest is the request used for the GetConfigurationDescriptor RPC */
export interface GetConfigurationDescriptorRequest {
}
export interface GetConfigurationDescriptorRequestProtoMsg {
    typeUrl: "/cosmos.base.reflection.v2alpha1.GetConfigurationDescriptorRequest";
    value: Uint8Array;
}
/**
 * GetConfigurationDescriptorRequest is the request used for the GetConfigurationDescriptor RPC
 * @name GetConfigurationDescriptorRequestAmino
 * @package cosmos.base.reflection.v2alpha1
 * @see proto type: cosmos.base.reflection.v2alpha1.GetConfigurationDescriptorRequest
 */
export interface GetConfigurationDescriptorRequestAmino {
}
export interface GetConfigurationDescriptorRequestAminoMsg {
    type: "cosmos-sdk/GetConfigurationDescriptorRequest";
    value: GetConfigurationDescriptorRequestAmino;
}
/** GetConfigurationDescriptorRequest is the request used for the GetConfigurationDescriptor RPC */
export interface GetConfigurationDescriptorRequestSDKType {
}
/** GetConfigurationDescriptorResponse is the response returned by the GetConfigurationDescriptor RPC */
export interface GetConfigurationDescriptorResponse {
    /** config describes the application's sdk.Config */
    config?: ConfigurationDescriptor;
}
export interface GetConfigurationDescriptorResponseProtoMsg {
    typeUrl: "/cosmos.base.reflection.v2alpha1.GetConfigurationDescriptorResponse";
    value: Uint8Array;
}
/**
 * GetConfigurationDescriptorResponse is the response returned by the GetConfigurationDescriptor RPC
 * @name GetConfigurationDescriptorResponseAmino
 * @package cosmos.base.reflection.v2alpha1
 * @see proto type: cosmos.base.reflection.v2alpha1.GetConfigurationDescriptorResponse
 */
export interface GetConfigurationDescriptorResponseAmino {
    /**
     * config describes the application's sdk.Config
     */
    config?: ConfigurationDescriptorAmino;
}
export interface GetConfigurationDescriptorResponseAminoMsg {
    type: "cosmos-sdk/GetConfigurationDescriptorResponse";
    value: GetConfigurationDescriptorResponseAmino;
}
/** GetConfigurationDescriptorResponse is the response returned by the GetConfigurationDescriptor RPC */
export interface GetConfigurationDescriptorResponseSDKType {
    config?: ConfigurationDescriptorSDKType;
}
/** GetQueryServicesDescriptorRequest is the request used for the GetQueryServicesDescriptor RPC */
export interface GetQueryServicesDescriptorRequest {
}
export interface GetQueryServicesDescriptorRequestProtoMsg {
    typeUrl: "/cosmos.base.reflection.v2alpha1.GetQueryServicesDescriptorRequest";
    value: Uint8Array;
}
/**
 * GetQueryServicesDescriptorRequest is the request used for the GetQueryServicesDescriptor RPC
 * @name GetQueryServicesDescriptorRequestAmino
 * @package cosmos.base.reflection.v2alpha1
 * @see proto type: cosmos.base.reflection.v2alpha1.GetQueryServicesDescriptorRequest
 */
export interface GetQueryServicesDescriptorRequestAmino {
}
export interface GetQueryServicesDescriptorRequestAminoMsg {
    type: "cosmos-sdk/GetQueryServicesDescriptorRequest";
    value: GetQueryServicesDescriptorRequestAmino;
}
/** GetQueryServicesDescriptorRequest is the request used for the GetQueryServicesDescriptor RPC */
export interface GetQueryServicesDescriptorRequestSDKType {
}
/** GetQueryServicesDescriptorResponse is the response returned by the GetQueryServicesDescriptor RPC */
export interface GetQueryServicesDescriptorResponse {
    /** queries provides information on the available queryable services */
    queries?: QueryServicesDescriptor;
}
export interface GetQueryServicesDescriptorResponseProtoMsg {
    typeUrl: "/cosmos.base.reflection.v2alpha1.GetQueryServicesDescriptorResponse";
    value: Uint8Array;
}
/**
 * GetQueryServicesDescriptorResponse is the response returned by the GetQueryServicesDescriptor RPC
 * @name GetQueryServicesDescriptorResponseAmino
 * @package cosmos.base.reflection.v2alpha1
 * @see proto type: cosmos.base.reflection.v2alpha1.GetQueryServicesDescriptorResponse
 */
export interface GetQueryServicesDescriptorResponseAmino {
    /**
     * queries provides information on the available queryable services
     */
    queries?: QueryServicesDescriptorAmino;
}
export interface GetQueryServicesDescriptorResponseAminoMsg {
    type: "cosmos-sdk/GetQueryServicesDescriptorResponse";
    value: GetQueryServicesDescriptorResponseAmino;
}
/** GetQueryServicesDescriptorResponse is the response returned by the GetQueryServicesDescriptor RPC */
export interface GetQueryServicesDescriptorResponseSDKType {
    queries?: QueryServicesDescriptorSDKType;
}
/** GetTxDescriptorRequest is the request used for the GetTxDescriptor RPC */
export interface GetTxDescriptorRequest {
}
export interface GetTxDescriptorRequestProtoMsg {
    typeUrl: "/cosmos.base.reflection.v2alpha1.GetTxDescriptorRequest";
    value: Uint8Array;
}
/**
 * GetTxDescriptorRequest is the request used for the GetTxDescriptor RPC
 * @name GetTxDescriptorRequestAmino
 * @package cosmos.base.reflection.v2alpha1
 * @see proto type: cosmos.base.reflection.v2alpha1.GetTxDescriptorRequest
 */
export interface GetTxDescriptorRequestAmino {
}
export interface GetTxDescriptorRequestAminoMsg {
    type: "cosmos-sdk/GetTxDescriptorRequest";
    value: GetTxDescriptorRequestAmino;
}
/** GetTxDescriptorRequest is the request used for the GetTxDescriptor RPC */
export interface GetTxDescriptorRequestSDKType {
}
/** GetTxDescriptorResponse is the response returned by the GetTxDescriptor RPC */
export interface GetTxDescriptorResponse {
    /**
     * tx provides information on msgs that can be forwarded to the application
     * alongside the accepted transaction protobuf type
     */
    tx?: TxDescriptor;
}
export interface GetTxDescriptorResponseProtoMsg {
    typeUrl: "/cosmos.base.reflection.v2alpha1.GetTxDescriptorResponse";
    value: Uint8Array;
}
/**
 * GetTxDescriptorResponse is the response returned by the GetTxDescriptor RPC
 * @name GetTxDescriptorResponseAmino
 * @package cosmos.base.reflection.v2alpha1
 * @see proto type: cosmos.base.reflection.v2alpha1.GetTxDescriptorResponse
 */
export interface GetTxDescriptorResponseAmino {
    /**
     * tx provides information on msgs that can be forwarded to the application
     * alongside the accepted transaction protobuf type
     */
    tx?: TxDescriptorAmino;
}
export interface GetTxDescriptorResponseAminoMsg {
    type: "cosmos-sdk/GetTxDescriptorResponse";
    value: GetTxDescriptorResponseAmino;
}
/** GetTxDescriptorResponse is the response returned by the GetTxDescriptor RPC */
export interface GetTxDescriptorResponseSDKType {
    tx?: TxDescriptorSDKType;
}
/** QueryServicesDescriptor contains the list of cosmos-sdk queriable services */
export interface QueryServicesDescriptor {
    /** query_services is a list of cosmos-sdk QueryServiceDescriptor */
    queryServices: QueryServiceDescriptor[];
}
export interface QueryServicesDescriptorProtoMsg {
    typeUrl: "/cosmos.base.reflection.v2alpha1.QueryServicesDescriptor";
    value: Uint8Array;
}
/**
 * QueryServicesDescriptor contains the list of cosmos-sdk queriable services
 * @name QueryServicesDescriptorAmino
 * @package cosmos.base.reflection.v2alpha1
 * @see proto type: cosmos.base.reflection.v2alpha1.QueryServicesDescriptor
 */
export interface QueryServicesDescriptorAmino {
    /**
     * query_services is a list of cosmos-sdk QueryServiceDescriptor
     */
    query_services?: QueryServiceDescriptorAmino[];
}
export interface QueryServicesDescriptorAminoMsg {
    type: "cosmos-sdk/QueryServicesDescriptor";
    value: QueryServicesDescriptorAmino;
}
/** QueryServicesDescriptor contains the list of cosmos-sdk queriable services */
export interface QueryServicesDescriptorSDKType {
    query_services: QueryServiceDescriptorSDKType[];
}
/** QueryServiceDescriptor describes a cosmos-sdk queryable service */
export interface QueryServiceDescriptor {
    /** fullname is the protobuf fullname of the service descriptor */
    fullname: string;
    /** is_module describes if this service is actually exposed by an application's module */
    isModule: boolean;
    /** methods provides a list of query service methods */
    methods: QueryMethodDescriptor[];
}
export interface QueryServiceDescriptorProtoMsg {
    typeUrl: "/cosmos.base.reflection.v2alpha1.QueryServiceDescriptor";
    value: Uint8Array;
}
/**
 * QueryServiceDescriptor describes a cosmos-sdk queryable service
 * @name QueryServiceDescriptorAmino
 * @package cosmos.base.reflection.v2alpha1
 * @see proto type: cosmos.base.reflection.v2alpha1.QueryServiceDescriptor
 */
export interface QueryServiceDescriptorAmino {
    /**
     * fullname is the protobuf fullname of the service descriptor
     */
    fullname?: string;
    /**
     * is_module describes if this service is actually exposed by an application's module
     */
    is_module?: boolean;
    /**
     * methods provides a list of query service methods
     */
    methods?: QueryMethodDescriptorAmino[];
}
export interface QueryServiceDescriptorAminoMsg {
    type: "cosmos-sdk/QueryServiceDescriptor";
    value: QueryServiceDescriptorAmino;
}
/** QueryServiceDescriptor describes a cosmos-sdk queryable service */
export interface QueryServiceDescriptorSDKType {
    fullname: string;
    is_module: boolean;
    methods: QueryMethodDescriptorSDKType[];
}
/**
 * QueryMethodDescriptor describes a queryable method of a query service
 * no other info is provided beside method name and tendermint queryable path
 * because it would be redundant with the grpc reflection service
 */
export interface QueryMethodDescriptor {
    /** name is the protobuf name (not fullname) of the method */
    name: string;
    /**
     * full_query_path is the path that can be used to query
     * this method via tendermint abci.Query
     */
    fullQueryPath: string;
}
export interface QueryMethodDescriptorProtoMsg {
    typeUrl: "/cosmos.base.reflection.v2alpha1.QueryMethodDescriptor";
    value: Uint8Array;
}
/**
 * QueryMethodDescriptor describes a queryable method of a query service
 * no other info is provided beside method name and tendermint queryable path
 * because it would be redundant with the grpc reflection service
 * @name QueryMethodDescriptorAmino
 * @package cosmos.base.reflection.v2alpha1
 * @see proto type: cosmos.base.reflection.v2alpha1.QueryMethodDescriptor
 */
export interface QueryMethodDescriptorAmino {
    /**
     * name is the protobuf name (not fullname) of the method
     */
    name?: string;
    /**
     * full_query_path is the path that can be used to query
     * this method via tendermint abci.Query
     */
    full_query_path?: string;
}
export interface QueryMethodDescriptorAminoMsg {
    type: "cosmos-sdk/QueryMethodDescriptor";
    value: QueryMethodDescriptorAmino;
}
/**
 * QueryMethodDescriptor describes a queryable method of a query service
 * no other info is provided beside method name and tendermint queryable path
 * because it would be redundant with the grpc reflection service
 */
export interface QueryMethodDescriptorSDKType {
    name: string;
    full_query_path: string;
}
export declare const AppDescriptor: {
    typeUrl: string;
    encode(message: AppDescriptor, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AppDescriptor;
    fromPartial(object: Partial<AppDescriptor>): AppDescriptor;
    fromAmino(object: AppDescriptorAmino): AppDescriptor;
    toAmino(message: AppDescriptor): AppDescriptorAmino;
    fromAminoMsg(object: AppDescriptorAminoMsg): AppDescriptor;
    toAminoMsg(message: AppDescriptor): AppDescriptorAminoMsg;
    fromProtoMsg(message: AppDescriptorProtoMsg): AppDescriptor;
    toProto(message: AppDescriptor): Uint8Array;
    toProtoMsg(message: AppDescriptor): AppDescriptorProtoMsg;
};
export declare const TxDescriptor: {
    typeUrl: string;
    encode(message: TxDescriptor, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): TxDescriptor;
    fromPartial(object: Partial<TxDescriptor>): TxDescriptor;
    fromAmino(object: TxDescriptorAmino): TxDescriptor;
    toAmino(message: TxDescriptor): TxDescriptorAmino;
    fromAminoMsg(object: TxDescriptorAminoMsg): TxDescriptor;
    toAminoMsg(message: TxDescriptor): TxDescriptorAminoMsg;
    fromProtoMsg(message: TxDescriptorProtoMsg): TxDescriptor;
    toProto(message: TxDescriptor): Uint8Array;
    toProtoMsg(message: TxDescriptor): TxDescriptorProtoMsg;
};
export declare const AuthnDescriptor: {
    typeUrl: string;
    encode(message: AuthnDescriptor, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AuthnDescriptor;
    fromPartial(object: Partial<AuthnDescriptor>): AuthnDescriptor;
    fromAmino(object: AuthnDescriptorAmino): AuthnDescriptor;
    toAmino(message: AuthnDescriptor): AuthnDescriptorAmino;
    fromAminoMsg(object: AuthnDescriptorAminoMsg): AuthnDescriptor;
    toAminoMsg(message: AuthnDescriptor): AuthnDescriptorAminoMsg;
    fromProtoMsg(message: AuthnDescriptorProtoMsg): AuthnDescriptor;
    toProto(message: AuthnDescriptor): Uint8Array;
    toProtoMsg(message: AuthnDescriptor): AuthnDescriptorProtoMsg;
};
export declare const SigningModeDescriptor: {
    typeUrl: string;
    encode(message: SigningModeDescriptor, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SigningModeDescriptor;
    fromPartial(object: Partial<SigningModeDescriptor>): SigningModeDescriptor;
    fromAmino(object: SigningModeDescriptorAmino): SigningModeDescriptor;
    toAmino(message: SigningModeDescriptor): SigningModeDescriptorAmino;
    fromAminoMsg(object: SigningModeDescriptorAminoMsg): SigningModeDescriptor;
    toAminoMsg(message: SigningModeDescriptor): SigningModeDescriptorAminoMsg;
    fromProtoMsg(message: SigningModeDescriptorProtoMsg): SigningModeDescriptor;
    toProto(message: SigningModeDescriptor): Uint8Array;
    toProtoMsg(message: SigningModeDescriptor): SigningModeDescriptorProtoMsg;
};
export declare const ChainDescriptor: {
    typeUrl: string;
    encode(message: ChainDescriptor, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ChainDescriptor;
    fromPartial(object: Partial<ChainDescriptor>): ChainDescriptor;
    fromAmino(object: ChainDescriptorAmino): ChainDescriptor;
    toAmino(message: ChainDescriptor): ChainDescriptorAmino;
    fromAminoMsg(object: ChainDescriptorAminoMsg): ChainDescriptor;
    toAminoMsg(message: ChainDescriptor): ChainDescriptorAminoMsg;
    fromProtoMsg(message: ChainDescriptorProtoMsg): ChainDescriptor;
    toProto(message: ChainDescriptor): Uint8Array;
    toProtoMsg(message: ChainDescriptor): ChainDescriptorProtoMsg;
};
export declare const CodecDescriptor: {
    typeUrl: string;
    encode(message: CodecDescriptor, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): CodecDescriptor;
    fromPartial(object: Partial<CodecDescriptor>): CodecDescriptor;
    fromAmino(object: CodecDescriptorAmino): CodecDescriptor;
    toAmino(message: CodecDescriptor): CodecDescriptorAmino;
    fromAminoMsg(object: CodecDescriptorAminoMsg): CodecDescriptor;
    toAminoMsg(message: CodecDescriptor): CodecDescriptorAminoMsg;
    fromProtoMsg(message: CodecDescriptorProtoMsg): CodecDescriptor;
    toProto(message: CodecDescriptor): Uint8Array;
    toProtoMsg(message: CodecDescriptor): CodecDescriptorProtoMsg;
};
export declare const InterfaceDescriptor: {
    typeUrl: string;
    encode(message: InterfaceDescriptor, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): InterfaceDescriptor;
    fromPartial(object: Partial<InterfaceDescriptor>): InterfaceDescriptor;
    fromAmino(object: InterfaceDescriptorAmino): InterfaceDescriptor;
    toAmino(message: InterfaceDescriptor): InterfaceDescriptorAmino;
    fromAminoMsg(object: InterfaceDescriptorAminoMsg): InterfaceDescriptor;
    toAminoMsg(message: InterfaceDescriptor): InterfaceDescriptorAminoMsg;
    fromProtoMsg(message: InterfaceDescriptorProtoMsg): InterfaceDescriptor;
    toProto(message: InterfaceDescriptor): Uint8Array;
    toProtoMsg(message: InterfaceDescriptor): InterfaceDescriptorProtoMsg;
};
export declare const InterfaceImplementerDescriptor: {
    typeUrl: string;
    encode(message: InterfaceImplementerDescriptor, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): InterfaceImplementerDescriptor;
    fromPartial(object: Partial<InterfaceImplementerDescriptor>): InterfaceImplementerDescriptor;
    fromAmino(object: InterfaceImplementerDescriptorAmino): InterfaceImplementerDescriptor;
    toAmino(message: InterfaceImplementerDescriptor): InterfaceImplementerDescriptorAmino;
    fromAminoMsg(object: InterfaceImplementerDescriptorAminoMsg): InterfaceImplementerDescriptor;
    toAminoMsg(message: InterfaceImplementerDescriptor): InterfaceImplementerDescriptorAminoMsg;
    fromProtoMsg(message: InterfaceImplementerDescriptorProtoMsg): InterfaceImplementerDescriptor;
    toProto(message: InterfaceImplementerDescriptor): Uint8Array;
    toProtoMsg(message: InterfaceImplementerDescriptor): InterfaceImplementerDescriptorProtoMsg;
};
export declare const InterfaceAcceptingMessageDescriptor: {
    typeUrl: string;
    encode(message: InterfaceAcceptingMessageDescriptor, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): InterfaceAcceptingMessageDescriptor;
    fromPartial(object: Partial<InterfaceAcceptingMessageDescriptor>): InterfaceAcceptingMessageDescriptor;
    fromAmino(object: InterfaceAcceptingMessageDescriptorAmino): InterfaceAcceptingMessageDescriptor;
    toAmino(message: InterfaceAcceptingMessageDescriptor): InterfaceAcceptingMessageDescriptorAmino;
    fromAminoMsg(object: InterfaceAcceptingMessageDescriptorAminoMsg): InterfaceAcceptingMessageDescriptor;
    toAminoMsg(message: InterfaceAcceptingMessageDescriptor): InterfaceAcceptingMessageDescriptorAminoMsg;
    fromProtoMsg(message: InterfaceAcceptingMessageDescriptorProtoMsg): InterfaceAcceptingMessageDescriptor;
    toProto(message: InterfaceAcceptingMessageDescriptor): Uint8Array;
    toProtoMsg(message: InterfaceAcceptingMessageDescriptor): InterfaceAcceptingMessageDescriptorProtoMsg;
};
export declare const ConfigurationDescriptor: {
    typeUrl: string;
    encode(message: ConfigurationDescriptor, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ConfigurationDescriptor;
    fromPartial(object: Partial<ConfigurationDescriptor>): ConfigurationDescriptor;
    fromAmino(object: ConfigurationDescriptorAmino): ConfigurationDescriptor;
    toAmino(message: ConfigurationDescriptor): ConfigurationDescriptorAmino;
    fromAminoMsg(object: ConfigurationDescriptorAminoMsg): ConfigurationDescriptor;
    toAminoMsg(message: ConfigurationDescriptor): ConfigurationDescriptorAminoMsg;
    fromProtoMsg(message: ConfigurationDescriptorProtoMsg): ConfigurationDescriptor;
    toProto(message: ConfigurationDescriptor): Uint8Array;
    toProtoMsg(message: ConfigurationDescriptor): ConfigurationDescriptorProtoMsg;
};
export declare const MsgDescriptor: {
    typeUrl: string;
    encode(message: MsgDescriptor, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgDescriptor;
    fromPartial(object: Partial<MsgDescriptor>): MsgDescriptor;
    fromAmino(object: MsgDescriptorAmino): MsgDescriptor;
    toAmino(message: MsgDescriptor): MsgDescriptorAmino;
    fromAminoMsg(object: MsgDescriptorAminoMsg): MsgDescriptor;
    toAminoMsg(message: MsgDescriptor): MsgDescriptorAminoMsg;
    fromProtoMsg(message: MsgDescriptorProtoMsg): MsgDescriptor;
    toProto(message: MsgDescriptor): Uint8Array;
    toProtoMsg(message: MsgDescriptor): MsgDescriptorProtoMsg;
};
export declare const GetAuthnDescriptorRequest: {
    typeUrl: string;
    encode(_: GetAuthnDescriptorRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GetAuthnDescriptorRequest;
    fromPartial(_: Partial<GetAuthnDescriptorRequest>): GetAuthnDescriptorRequest;
    fromAmino(_: GetAuthnDescriptorRequestAmino): GetAuthnDescriptorRequest;
    toAmino(_: GetAuthnDescriptorRequest): GetAuthnDescriptorRequestAmino;
    fromAminoMsg(object: GetAuthnDescriptorRequestAminoMsg): GetAuthnDescriptorRequest;
    toAminoMsg(message: GetAuthnDescriptorRequest): GetAuthnDescriptorRequestAminoMsg;
    fromProtoMsg(message: GetAuthnDescriptorRequestProtoMsg): GetAuthnDescriptorRequest;
    toProto(message: GetAuthnDescriptorRequest): Uint8Array;
    toProtoMsg(message: GetAuthnDescriptorRequest): GetAuthnDescriptorRequestProtoMsg;
};
export declare const GetAuthnDescriptorResponse: {
    typeUrl: string;
    encode(message: GetAuthnDescriptorResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GetAuthnDescriptorResponse;
    fromPartial(object: Partial<GetAuthnDescriptorResponse>): GetAuthnDescriptorResponse;
    fromAmino(object: GetAuthnDescriptorResponseAmino): GetAuthnDescriptorResponse;
    toAmino(message: GetAuthnDescriptorResponse): GetAuthnDescriptorResponseAmino;
    fromAminoMsg(object: GetAuthnDescriptorResponseAminoMsg): GetAuthnDescriptorResponse;
    toAminoMsg(message: GetAuthnDescriptorResponse): GetAuthnDescriptorResponseAminoMsg;
    fromProtoMsg(message: GetAuthnDescriptorResponseProtoMsg): GetAuthnDescriptorResponse;
    toProto(message: GetAuthnDescriptorResponse): Uint8Array;
    toProtoMsg(message: GetAuthnDescriptorResponse): GetAuthnDescriptorResponseProtoMsg;
};
export declare const GetChainDescriptorRequest: {
    typeUrl: string;
    encode(_: GetChainDescriptorRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GetChainDescriptorRequest;
    fromPartial(_: Partial<GetChainDescriptorRequest>): GetChainDescriptorRequest;
    fromAmino(_: GetChainDescriptorRequestAmino): GetChainDescriptorRequest;
    toAmino(_: GetChainDescriptorRequest): GetChainDescriptorRequestAmino;
    fromAminoMsg(object: GetChainDescriptorRequestAminoMsg): GetChainDescriptorRequest;
    toAminoMsg(message: GetChainDescriptorRequest): GetChainDescriptorRequestAminoMsg;
    fromProtoMsg(message: GetChainDescriptorRequestProtoMsg): GetChainDescriptorRequest;
    toProto(message: GetChainDescriptorRequest): Uint8Array;
    toProtoMsg(message: GetChainDescriptorRequest): GetChainDescriptorRequestProtoMsg;
};
export declare const GetChainDescriptorResponse: {
    typeUrl: string;
    encode(message: GetChainDescriptorResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GetChainDescriptorResponse;
    fromPartial(object: Partial<GetChainDescriptorResponse>): GetChainDescriptorResponse;
    fromAmino(object: GetChainDescriptorResponseAmino): GetChainDescriptorResponse;
    toAmino(message: GetChainDescriptorResponse): GetChainDescriptorResponseAmino;
    fromAminoMsg(object: GetChainDescriptorResponseAminoMsg): GetChainDescriptorResponse;
    toAminoMsg(message: GetChainDescriptorResponse): GetChainDescriptorResponseAminoMsg;
    fromProtoMsg(message: GetChainDescriptorResponseProtoMsg): GetChainDescriptorResponse;
    toProto(message: GetChainDescriptorResponse): Uint8Array;
    toProtoMsg(message: GetChainDescriptorResponse): GetChainDescriptorResponseProtoMsg;
};
export declare const GetCodecDescriptorRequest: {
    typeUrl: string;
    encode(_: GetCodecDescriptorRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GetCodecDescriptorRequest;
    fromPartial(_: Partial<GetCodecDescriptorRequest>): GetCodecDescriptorRequest;
    fromAmino(_: GetCodecDescriptorRequestAmino): GetCodecDescriptorRequest;
    toAmino(_: GetCodecDescriptorRequest): GetCodecDescriptorRequestAmino;
    fromAminoMsg(object: GetCodecDescriptorRequestAminoMsg): GetCodecDescriptorRequest;
    toAminoMsg(message: GetCodecDescriptorRequest): GetCodecDescriptorRequestAminoMsg;
    fromProtoMsg(message: GetCodecDescriptorRequestProtoMsg): GetCodecDescriptorRequest;
    toProto(message: GetCodecDescriptorRequest): Uint8Array;
    toProtoMsg(message: GetCodecDescriptorRequest): GetCodecDescriptorRequestProtoMsg;
};
export declare const GetCodecDescriptorResponse: {
    typeUrl: string;
    encode(message: GetCodecDescriptorResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GetCodecDescriptorResponse;
    fromPartial(object: Partial<GetCodecDescriptorResponse>): GetCodecDescriptorResponse;
    fromAmino(object: GetCodecDescriptorResponseAmino): GetCodecDescriptorResponse;
    toAmino(message: GetCodecDescriptorResponse): GetCodecDescriptorResponseAmino;
    fromAminoMsg(object: GetCodecDescriptorResponseAminoMsg): GetCodecDescriptorResponse;
    toAminoMsg(message: GetCodecDescriptorResponse): GetCodecDescriptorResponseAminoMsg;
    fromProtoMsg(message: GetCodecDescriptorResponseProtoMsg): GetCodecDescriptorResponse;
    toProto(message: GetCodecDescriptorResponse): Uint8Array;
    toProtoMsg(message: GetCodecDescriptorResponse): GetCodecDescriptorResponseProtoMsg;
};
export declare const GetConfigurationDescriptorRequest: {
    typeUrl: string;
    encode(_: GetConfigurationDescriptorRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GetConfigurationDescriptorRequest;
    fromPartial(_: Partial<GetConfigurationDescriptorRequest>): GetConfigurationDescriptorRequest;
    fromAmino(_: GetConfigurationDescriptorRequestAmino): GetConfigurationDescriptorRequest;
    toAmino(_: GetConfigurationDescriptorRequest): GetConfigurationDescriptorRequestAmino;
    fromAminoMsg(object: GetConfigurationDescriptorRequestAminoMsg): GetConfigurationDescriptorRequest;
    toAminoMsg(message: GetConfigurationDescriptorRequest): GetConfigurationDescriptorRequestAminoMsg;
    fromProtoMsg(message: GetConfigurationDescriptorRequestProtoMsg): GetConfigurationDescriptorRequest;
    toProto(message: GetConfigurationDescriptorRequest): Uint8Array;
    toProtoMsg(message: GetConfigurationDescriptorRequest): GetConfigurationDescriptorRequestProtoMsg;
};
export declare const GetConfigurationDescriptorResponse: {
    typeUrl: string;
    encode(message: GetConfigurationDescriptorResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GetConfigurationDescriptorResponse;
    fromPartial(object: Partial<GetConfigurationDescriptorResponse>): GetConfigurationDescriptorResponse;
    fromAmino(object: GetConfigurationDescriptorResponseAmino): GetConfigurationDescriptorResponse;
    toAmino(message: GetConfigurationDescriptorResponse): GetConfigurationDescriptorResponseAmino;
    fromAminoMsg(object: GetConfigurationDescriptorResponseAminoMsg): GetConfigurationDescriptorResponse;
    toAminoMsg(message: GetConfigurationDescriptorResponse): GetConfigurationDescriptorResponseAminoMsg;
    fromProtoMsg(message: GetConfigurationDescriptorResponseProtoMsg): GetConfigurationDescriptorResponse;
    toProto(message: GetConfigurationDescriptorResponse): Uint8Array;
    toProtoMsg(message: GetConfigurationDescriptorResponse): GetConfigurationDescriptorResponseProtoMsg;
};
export declare const GetQueryServicesDescriptorRequest: {
    typeUrl: string;
    encode(_: GetQueryServicesDescriptorRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GetQueryServicesDescriptorRequest;
    fromPartial(_: Partial<GetQueryServicesDescriptorRequest>): GetQueryServicesDescriptorRequest;
    fromAmino(_: GetQueryServicesDescriptorRequestAmino): GetQueryServicesDescriptorRequest;
    toAmino(_: GetQueryServicesDescriptorRequest): GetQueryServicesDescriptorRequestAmino;
    fromAminoMsg(object: GetQueryServicesDescriptorRequestAminoMsg): GetQueryServicesDescriptorRequest;
    toAminoMsg(message: GetQueryServicesDescriptorRequest): GetQueryServicesDescriptorRequestAminoMsg;
    fromProtoMsg(message: GetQueryServicesDescriptorRequestProtoMsg): GetQueryServicesDescriptorRequest;
    toProto(message: GetQueryServicesDescriptorRequest): Uint8Array;
    toProtoMsg(message: GetQueryServicesDescriptorRequest): GetQueryServicesDescriptorRequestProtoMsg;
};
export declare const GetQueryServicesDescriptorResponse: {
    typeUrl: string;
    encode(message: GetQueryServicesDescriptorResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GetQueryServicesDescriptorResponse;
    fromPartial(object: Partial<GetQueryServicesDescriptorResponse>): GetQueryServicesDescriptorResponse;
    fromAmino(object: GetQueryServicesDescriptorResponseAmino): GetQueryServicesDescriptorResponse;
    toAmino(message: GetQueryServicesDescriptorResponse): GetQueryServicesDescriptorResponseAmino;
    fromAminoMsg(object: GetQueryServicesDescriptorResponseAminoMsg): GetQueryServicesDescriptorResponse;
    toAminoMsg(message: GetQueryServicesDescriptorResponse): GetQueryServicesDescriptorResponseAminoMsg;
    fromProtoMsg(message: GetQueryServicesDescriptorResponseProtoMsg): GetQueryServicesDescriptorResponse;
    toProto(message: GetQueryServicesDescriptorResponse): Uint8Array;
    toProtoMsg(message: GetQueryServicesDescriptorResponse): GetQueryServicesDescriptorResponseProtoMsg;
};
export declare const GetTxDescriptorRequest: {
    typeUrl: string;
    encode(_: GetTxDescriptorRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GetTxDescriptorRequest;
    fromPartial(_: Partial<GetTxDescriptorRequest>): GetTxDescriptorRequest;
    fromAmino(_: GetTxDescriptorRequestAmino): GetTxDescriptorRequest;
    toAmino(_: GetTxDescriptorRequest): GetTxDescriptorRequestAmino;
    fromAminoMsg(object: GetTxDescriptorRequestAminoMsg): GetTxDescriptorRequest;
    toAminoMsg(message: GetTxDescriptorRequest): GetTxDescriptorRequestAminoMsg;
    fromProtoMsg(message: GetTxDescriptorRequestProtoMsg): GetTxDescriptorRequest;
    toProto(message: GetTxDescriptorRequest): Uint8Array;
    toProtoMsg(message: GetTxDescriptorRequest): GetTxDescriptorRequestProtoMsg;
};
export declare const GetTxDescriptorResponse: {
    typeUrl: string;
    encode(message: GetTxDescriptorResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GetTxDescriptorResponse;
    fromPartial(object: Partial<GetTxDescriptorResponse>): GetTxDescriptorResponse;
    fromAmino(object: GetTxDescriptorResponseAmino): GetTxDescriptorResponse;
    toAmino(message: GetTxDescriptorResponse): GetTxDescriptorResponseAmino;
    fromAminoMsg(object: GetTxDescriptorResponseAminoMsg): GetTxDescriptorResponse;
    toAminoMsg(message: GetTxDescriptorResponse): GetTxDescriptorResponseAminoMsg;
    fromProtoMsg(message: GetTxDescriptorResponseProtoMsg): GetTxDescriptorResponse;
    toProto(message: GetTxDescriptorResponse): Uint8Array;
    toProtoMsg(message: GetTxDescriptorResponse): GetTxDescriptorResponseProtoMsg;
};
export declare const QueryServicesDescriptor: {
    typeUrl: string;
    encode(message: QueryServicesDescriptor, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryServicesDescriptor;
    fromPartial(object: Partial<QueryServicesDescriptor>): QueryServicesDescriptor;
    fromAmino(object: QueryServicesDescriptorAmino): QueryServicesDescriptor;
    toAmino(message: QueryServicesDescriptor): QueryServicesDescriptorAmino;
    fromAminoMsg(object: QueryServicesDescriptorAminoMsg): QueryServicesDescriptor;
    toAminoMsg(message: QueryServicesDescriptor): QueryServicesDescriptorAminoMsg;
    fromProtoMsg(message: QueryServicesDescriptorProtoMsg): QueryServicesDescriptor;
    toProto(message: QueryServicesDescriptor): Uint8Array;
    toProtoMsg(message: QueryServicesDescriptor): QueryServicesDescriptorProtoMsg;
};
export declare const QueryServiceDescriptor: {
    typeUrl: string;
    encode(message: QueryServiceDescriptor, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryServiceDescriptor;
    fromPartial(object: Partial<QueryServiceDescriptor>): QueryServiceDescriptor;
    fromAmino(object: QueryServiceDescriptorAmino): QueryServiceDescriptor;
    toAmino(message: QueryServiceDescriptor): QueryServiceDescriptorAmino;
    fromAminoMsg(object: QueryServiceDescriptorAminoMsg): QueryServiceDescriptor;
    toAminoMsg(message: QueryServiceDescriptor): QueryServiceDescriptorAminoMsg;
    fromProtoMsg(message: QueryServiceDescriptorProtoMsg): QueryServiceDescriptor;
    toProto(message: QueryServiceDescriptor): Uint8Array;
    toProtoMsg(message: QueryServiceDescriptor): QueryServiceDescriptorProtoMsg;
};
export declare const QueryMethodDescriptor: {
    typeUrl: string;
    encode(message: QueryMethodDescriptor, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryMethodDescriptor;
    fromPartial(object: Partial<QueryMethodDescriptor>): QueryMethodDescriptor;
    fromAmino(object: QueryMethodDescriptorAmino): QueryMethodDescriptor;
    toAmino(message: QueryMethodDescriptor): QueryMethodDescriptorAmino;
    fromAminoMsg(object: QueryMethodDescriptorAminoMsg): QueryMethodDescriptor;
    toAminoMsg(message: QueryMethodDescriptor): QueryMethodDescriptorAminoMsg;
    fromProtoMsg(message: QueryMethodDescriptorProtoMsg): QueryMethodDescriptor;
    toProto(message: QueryMethodDescriptor): Uint8Array;
    toProtoMsg(message: QueryMethodDescriptor): QueryMethodDescriptorProtoMsg;
};
