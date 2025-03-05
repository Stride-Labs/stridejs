import { Params, ParamsAmino, ParamsSDKType, TokenPrice, TokenPriceAmino, TokenPriceSDKType } from "./icqoracle";
import { BinaryReader, BinaryWriter } from "../../binary";
/** GenesisState defines the icqoracle module's genesis state */
export interface GenesisState {
  /** Module parameters */
  params: Params;
  /** List of token prices */
  tokenPrices: TokenPrice[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/stride.icqoracle.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the icqoracle module's genesis state */
export interface GenesisStateAmino {
  /** Module parameters */
  params?: ParamsAmino;
  /** List of token prices */
  token_prices?: TokenPriceAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/stride.icqoracle.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the icqoracle module's genesis state */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  token_prices: TokenPriceSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    tokenPrices: []
  };
}
export const GenesisState = {
  typeUrl: "/stride.icqoracle.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.tokenPrices) {
      TokenPrice.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.tokenPrices.push(TokenPrice.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.tokenPrices = object.tokenPrices?.map(e => TokenPrice.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.tokenPrices = object.token_prices?.map(e => TokenPrice.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.tokenPrices) {
      obj.token_prices = message.tokenPrices.map(e => e ? TokenPrice.toAmino(e) : undefined);
    } else {
      obj.token_prices = message.tokenPrices;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/stride.icqoracle.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};