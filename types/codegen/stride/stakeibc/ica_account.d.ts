import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
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
export declare enum ICAAccountTypeSDKType {
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
export declare function iCAAccountTypeFromJSON(object: any): ICAAccountType;
export declare function iCAAccountTypeToJSON(object: ICAAccountType): string;
export interface ICAAccount {
    chainId: string;
    type: ICAAccountType;
    connectionId: string;
    address: string;
}
export interface ICAAccountSDKType {
    chain_id: string;
    type: ICAAccountTypeSDKType;
    connection_id: string;
    address: string;
}
export declare const ICAAccount: {
    encode(message: ICAAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ICAAccount;
    fromPartial(object: DeepPartial<ICAAccount>): ICAAccount;
};
