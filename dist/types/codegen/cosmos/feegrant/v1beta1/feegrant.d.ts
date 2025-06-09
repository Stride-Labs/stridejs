import { Coin, CoinAmino, CoinSDKType } from "../../base/v1beta1/coin";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
/**
 * BasicAllowance implements Allowance with a one-time grant of coins
 * that optionally expires. The grantee can use up to SpendLimit to cover fees.
 */
export interface BasicAllowance {
    $typeUrl?: "/cosmos.feegrant.v1beta1.BasicAllowance";
    /**
     * spend_limit specifies the maximum amount of coins that can be spent
     * by this allowance and will be updated as coins are spent. If it is
     * empty, there is no spend limit and any amount of coins can be spent.
     */
    spendLimit: Coin[];
    /** expiration specifies an optional time when this allowance expires */
    expiration?: Date;
}
export interface BasicAllowanceProtoMsg {
    typeUrl: "/cosmos.feegrant.v1beta1.BasicAllowance";
    value: Uint8Array;
}
/**
 * BasicAllowance implements Allowance with a one-time grant of coins
 * that optionally expires. The grantee can use up to SpendLimit to cover fees.
 * @name BasicAllowanceAmino
 * @package cosmos.feegrant.v1beta1
 * @see proto type: cosmos.feegrant.v1beta1.BasicAllowance
 */
export interface BasicAllowanceAmino {
    /**
     * spend_limit specifies the maximum amount of coins that can be spent
     * by this allowance and will be updated as coins are spent. If it is
     * empty, there is no spend limit and any amount of coins can be spent.
     */
    spend_limit: CoinAmino[];
    /**
     * expiration specifies an optional time when this allowance expires
     */
    expiration?: string;
}
export interface BasicAllowanceAminoMsg {
    type: "cosmos-sdk/BasicAllowance";
    value: BasicAllowanceAmino;
}
/**
 * BasicAllowance implements Allowance with a one-time grant of coins
 * that optionally expires. The grantee can use up to SpendLimit to cover fees.
 */
export interface BasicAllowanceSDKType {
    $typeUrl?: "/cosmos.feegrant.v1beta1.BasicAllowance";
    spend_limit: CoinSDKType[];
    expiration?: Date;
}
/**
 * PeriodicAllowance extends Allowance to allow for both a maximum cap,
 * as well as a limit per time period.
 */
export interface PeriodicAllowance {
    $typeUrl?: "/cosmos.feegrant.v1beta1.PeriodicAllowance";
    /** basic specifies a struct of `BasicAllowance` */
    basic: BasicAllowance;
    /**
     * period specifies the time duration in which period_spend_limit coins can
     * be spent before that allowance is reset
     */
    period: Duration;
    /**
     * period_spend_limit specifies the maximum number of coins that can be spent
     * in the period
     */
    periodSpendLimit: Coin[];
    /** period_can_spend is the number of coins left to be spent before the period_reset time */
    periodCanSpend: Coin[];
    /**
     * period_reset is the time at which this period resets and a new one begins,
     * it is calculated from the start time of the first transaction after the
     * last period ended
     */
    periodReset: Date;
}
export interface PeriodicAllowanceProtoMsg {
    typeUrl: "/cosmos.feegrant.v1beta1.PeriodicAllowance";
    value: Uint8Array;
}
/**
 * PeriodicAllowance extends Allowance to allow for both a maximum cap,
 * as well as a limit per time period.
 * @name PeriodicAllowanceAmino
 * @package cosmos.feegrant.v1beta1
 * @see proto type: cosmos.feegrant.v1beta1.PeriodicAllowance
 */
export interface PeriodicAllowanceAmino {
    /**
     * basic specifies a struct of `BasicAllowance`
     */
    basic: BasicAllowanceAmino;
    /**
     * period specifies the time duration in which period_spend_limit coins can
     * be spent before that allowance is reset
     */
    period: DurationAmino;
    /**
     * period_spend_limit specifies the maximum number of coins that can be spent
     * in the period
     */
    period_spend_limit: CoinAmino[];
    /**
     * period_can_spend is the number of coins left to be spent before the period_reset time
     */
    period_can_spend: CoinAmino[];
    /**
     * period_reset is the time at which this period resets and a new one begins,
     * it is calculated from the start time of the first transaction after the
     * last period ended
     */
    period_reset: string;
}
export interface PeriodicAllowanceAminoMsg {
    type: "cosmos-sdk/PeriodicAllowance";
    value: PeriodicAllowanceAmino;
}
/**
 * PeriodicAllowance extends Allowance to allow for both a maximum cap,
 * as well as a limit per time period.
 */
export interface PeriodicAllowanceSDKType {
    $typeUrl?: "/cosmos.feegrant.v1beta1.PeriodicAllowance";
    basic: BasicAllowanceSDKType;
    period: DurationSDKType;
    period_spend_limit: CoinSDKType[];
    period_can_spend: CoinSDKType[];
    period_reset: Date;
}
/** AllowedMsgAllowance creates allowance only for specified message types. */
export interface AllowedMsgAllowance {
    $typeUrl?: "/cosmos.feegrant.v1beta1.AllowedMsgAllowance";
    /** allowance can be any of basic and periodic fee allowance. */
    allowance?: BasicAllowance | PeriodicAllowance | AllowedMsgAllowance | Any | undefined;
    /** allowed_messages are the messages for which the grantee has the access. */
    allowedMessages: string[];
}
export interface AllowedMsgAllowanceProtoMsg {
    typeUrl: "/cosmos.feegrant.v1beta1.AllowedMsgAllowance";
    value: Uint8Array;
}
export declare type AllowedMsgAllowanceEncoded = Omit<AllowedMsgAllowance, "allowance"> & {
    /** allowance can be any of basic and periodic fee allowance. */ allowance?: BasicAllowanceProtoMsg | PeriodicAllowanceProtoMsg | AllowedMsgAllowanceProtoMsg | AnyProtoMsg | undefined;
};
/**
 * AllowedMsgAllowance creates allowance only for specified message types.
 * @name AllowedMsgAllowanceAmino
 * @package cosmos.feegrant.v1beta1
 * @see proto type: cosmos.feegrant.v1beta1.AllowedMsgAllowance
 */
export interface AllowedMsgAllowanceAmino {
    /**
     * allowance can be any of basic and periodic fee allowance.
     */
    allowance?: AnyAmino;
    /**
     * allowed_messages are the messages for which the grantee has the access.
     */
    allowed_messages?: string[];
}
export interface AllowedMsgAllowanceAminoMsg {
    type: "cosmos-sdk/AllowedMsgAllowance";
    value: AllowedMsgAllowanceAmino;
}
/** AllowedMsgAllowance creates allowance only for specified message types. */
export interface AllowedMsgAllowanceSDKType {
    $typeUrl?: "/cosmos.feegrant.v1beta1.AllowedMsgAllowance";
    allowance?: BasicAllowanceSDKType | PeriodicAllowanceSDKType | AllowedMsgAllowanceSDKType | AnySDKType | undefined;
    allowed_messages: string[];
}
/** Grant is stored in the KVStore to record a grant with full context */
export interface Grant {
    /** granter is the address of the user granting an allowance of their funds. */
    granter: string;
    /** grantee is the address of the user being granted an allowance of another user's funds. */
    grantee: string;
    /** allowance can be any of basic, periodic, allowed fee allowance. */
    allowance?: BasicAllowance | PeriodicAllowance | AllowedMsgAllowance | Any | undefined;
}
export interface GrantProtoMsg {
    typeUrl: "/cosmos.feegrant.v1beta1.Grant";
    value: Uint8Array;
}
export declare type GrantEncoded = Omit<Grant, "allowance"> & {
    /** allowance can be any of basic, periodic, allowed fee allowance. */ allowance?: BasicAllowanceProtoMsg | PeriodicAllowanceProtoMsg | AllowedMsgAllowanceProtoMsg | AnyProtoMsg | undefined;
};
/**
 * Grant is stored in the KVStore to record a grant with full context
 * @name GrantAmino
 * @package cosmos.feegrant.v1beta1
 * @see proto type: cosmos.feegrant.v1beta1.Grant
 */
export interface GrantAmino {
    /**
     * granter is the address of the user granting an allowance of their funds.
     */
    granter?: string;
    /**
     * grantee is the address of the user being granted an allowance of another user's funds.
     */
    grantee?: string;
    /**
     * allowance can be any of basic, periodic, allowed fee allowance.
     */
    allowance?: AnyAmino;
}
export interface GrantAminoMsg {
    type: "cosmos-sdk/Grant";
    value: GrantAmino;
}
/** Grant is stored in the KVStore to record a grant with full context */
export interface GrantSDKType {
    granter: string;
    grantee: string;
    allowance?: BasicAllowanceSDKType | PeriodicAllowanceSDKType | AllowedMsgAllowanceSDKType | AnySDKType | undefined;
}
export declare const BasicAllowance: {
    typeUrl: string;
    encode(message: BasicAllowance, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): BasicAllowance;
    fromPartial(object: Partial<BasicAllowance>): BasicAllowance;
    fromAmino(object: BasicAllowanceAmino): BasicAllowance;
    toAmino(message: BasicAllowance): BasicAllowanceAmino;
    fromAminoMsg(object: BasicAllowanceAminoMsg): BasicAllowance;
    toAminoMsg(message: BasicAllowance): BasicAllowanceAminoMsg;
    fromProtoMsg(message: BasicAllowanceProtoMsg): BasicAllowance;
    toProto(message: BasicAllowance): Uint8Array;
    toProtoMsg(message: BasicAllowance): BasicAllowanceProtoMsg;
};
export declare const PeriodicAllowance: {
    typeUrl: string;
    encode(message: PeriodicAllowance, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PeriodicAllowance;
    fromPartial(object: Partial<PeriodicAllowance>): PeriodicAllowance;
    fromAmino(object: PeriodicAllowanceAmino): PeriodicAllowance;
    toAmino(message: PeriodicAllowance): PeriodicAllowanceAmino;
    fromAminoMsg(object: PeriodicAllowanceAminoMsg): PeriodicAllowance;
    toAminoMsg(message: PeriodicAllowance): PeriodicAllowanceAminoMsg;
    fromProtoMsg(message: PeriodicAllowanceProtoMsg): PeriodicAllowance;
    toProto(message: PeriodicAllowance): Uint8Array;
    toProtoMsg(message: PeriodicAllowance): PeriodicAllowanceProtoMsg;
};
export declare const AllowedMsgAllowance: {
    typeUrl: string;
    encode(message: AllowedMsgAllowance, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AllowedMsgAllowance;
    fromPartial(object: Partial<AllowedMsgAllowance>): AllowedMsgAllowance;
    fromAmino(object: AllowedMsgAllowanceAmino): AllowedMsgAllowance;
    toAmino(message: AllowedMsgAllowance): AllowedMsgAllowanceAmino;
    fromAminoMsg(object: AllowedMsgAllowanceAminoMsg): AllowedMsgAllowance;
    toAminoMsg(message: AllowedMsgAllowance): AllowedMsgAllowanceAminoMsg;
    fromProtoMsg(message: AllowedMsgAllowanceProtoMsg): AllowedMsgAllowance;
    toProto(message: AllowedMsgAllowance): Uint8Array;
    toProtoMsg(message: AllowedMsgAllowance): AllowedMsgAllowanceProtoMsg;
};
export declare const Grant: {
    typeUrl: string;
    encode(message: Grant, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Grant;
    fromPartial(object: Partial<Grant>): Grant;
    fromAmino(object: GrantAmino): Grant;
    toAmino(message: Grant): GrantAmino;
    fromAminoMsg(object: GrantAminoMsg): Grant;
    toAminoMsg(message: Grant): GrantAminoMsg;
    fromProtoMsg(message: GrantProtoMsg): Grant;
    toProto(message: Grant): Uint8Array;
    toProtoMsg(message: Grant): GrantProtoMsg;
};
export declare const Cosmos_feegrantv1beta1FeeAllowanceI_InterfaceDecoder: (input: BinaryReader | Uint8Array) => BasicAllowance | PeriodicAllowance | AllowedMsgAllowance | Any;
export declare const Cosmos_feegrantv1beta1FeeAllowanceI_FromAmino: (content: AnyAmino) => Any;
export declare const Cosmos_feegrantv1beta1FeeAllowanceI_ToAmino: (content: Any) => AnyAmino;
