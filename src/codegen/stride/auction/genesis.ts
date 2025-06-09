import { Params, ParamsAmino, ParamsSDKType, Auction, AuctionAmino, AuctionSDKType } from "./auction";
import { BinaryReader, BinaryWriter } from "../../binary";
/** GenesisState defines the auction module's genesis state */
export interface GenesisState {
  /** Module parameters */
  params: Params;
  /** List of token auctions */
  auctions: Auction[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/stride.auction.GenesisState";
  value: Uint8Array;
}
/**
 * GenesisState defines the auction module's genesis state
 * @name GenesisStateAmino
 * @package stride.auction
 * @see proto type: stride.auction.GenesisState
 */
export interface GenesisStateAmino {
  /**
   * Module parameters
   */
  params?: ParamsAmino;
  /**
   * List of token auctions
   */
  auctions?: AuctionAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/stride.auction.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the auction module's genesis state */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  auctions: AuctionSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    auctions: []
  };
}
export const GenesisState = {
  typeUrl: "/stride.auction.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.auctions) {
      Auction.encode(v!, writer.uint32(18).fork()).ldelim();
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
          message.auctions.push(Auction.decode(reader, reader.uint32()));
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
    message.auctions = object.auctions?.map(e => Auction.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.auctions = object.auctions?.map(e => Auction.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.auctions) {
      obj.auctions = message.auctions.map(e => e ? Auction.toAmino(e) : undefined);
    } else {
      obj.auctions = message.auctions;
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
      typeUrl: "/stride.auction.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};