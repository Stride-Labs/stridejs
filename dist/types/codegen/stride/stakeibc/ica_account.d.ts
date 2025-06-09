import { BinaryReader, BinaryWriter } from "../../binary";
export declare enum ICAAccountType {
    DELEGATION = 0,
    FEE = 1,
    WITHDRAWAL = 2,
    REDEMPTION = 3,
    COMMUNITY_POOL_DEPOSIT = 4,
    COMMUNITY_POOL_RETURN = 5,
    CONVERTER_UNWIND = 6,
    CONVERTER_TRADE = 7,
    UNRECOGNIZED = -1
}
export declare const ICAAccountTypeSDKType: typeof ICAAccountType;
export declare const ICAAccountTypeAmino: typeof ICAAccountType;
export declare function iCAAccountTypeFromJSON(object: any): ICAAccountType;
export declare function iCAAccountTypeToJSON(object: ICAAccountType): string;
export interface ICAAccount {
    chainId: string;
    type: ICAAccountType;
    connectionId: string;
    address: string;
}
export interface ICAAccountProtoMsg {
    typeUrl: "/stride.stakeibc.ICAAccount";
    value: Uint8Array;
}
/**
 * @name ICAAccountAmino
 * @package stride.stakeibc
 * @see proto type: stride.stakeibc.ICAAccount
 */
export interface ICAAccountAmino {
    chain_id?: string;
    type?: ICAAccountType;
    connection_id?: string;
    address?: string;
}
export interface ICAAccountAminoMsg {
    type: "/stride.stakeibc.ICAAccount";
    value: ICAAccountAmino;
}
export interface ICAAccountSDKType {
    chain_id: string;
    type: ICAAccountType;
    connection_id: string;
    address: string;
}
export declare const ICAAccount: {
    typeUrl: string;
    encode(message: ICAAccount, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ICAAccount;
    fromPartial(object: Partial<ICAAccount>): ICAAccount;
    fromAmino(object: ICAAccountAmino): ICAAccount;
    toAmino(message: ICAAccount): ICAAccountAmino;
    fromAminoMsg(object: ICAAccountAminoMsg): ICAAccount;
    fromProtoMsg(message: ICAAccountProtoMsg): ICAAccount;
    toProto(message: ICAAccount): Uint8Array;
    toProtoMsg(message: ICAAccount): ICAAccountProtoMsg;
};
