import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/**
 * MsgRedeemTokensForShares redeems a tokenized share back into a native
 * delegation
 */
export interface MsgRedeemTokensForShares {
    delegatorAddress: string;
    amount: Coin;
}
/**
 * MsgRedeemTokensForShares redeems a tokenized share back into a native
 * delegation
 */
export interface MsgRedeemTokensForSharesSDKType {
    delegator_address: string;
    amount: CoinSDKType;
}
/**
 * MsgRedeemTokensForSharesResponse defines the Msg/MsgRedeemTokensForShares
 * response type.
 */
export interface MsgRedeemTokensForSharesResponse {
    amount: Coin;
}
/**
 * MsgRedeemTokensForSharesResponse defines the Msg/MsgRedeemTokensForShares
 * response type.
 */
export interface MsgRedeemTokensForSharesResponseSDKType {
    amount: CoinSDKType;
}
export declare const MsgRedeemTokensForShares: {
    encode(message: MsgRedeemTokensForShares, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRedeemTokensForShares;
    fromPartial(object: DeepPartial<MsgRedeemTokensForShares>): MsgRedeemTokensForShares;
};
export declare const MsgRedeemTokensForSharesResponse: {
    encode(message: MsgRedeemTokensForSharesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRedeemTokensForSharesResponse;
    fromPartial(object: DeepPartial<MsgRedeemTokensForSharesResponse>): MsgRedeemTokensForSharesResponse;
};
