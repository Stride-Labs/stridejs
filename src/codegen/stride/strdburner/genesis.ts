import { BinaryReader, BinaryWriter } from "../../binary";
/** GenesisState defines the strdburner module's genesis state */
export interface GenesisState {
  /** Total amount of ustrd burned */
  totalUstrdBurned: string;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/stride.strdburner.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the strdburner module's genesis state */
export interface GenesisStateAmino {
  /** Total amount of ustrd burned */
  total_ustrd_burned?: string;
}
export interface GenesisStateAminoMsg {
  type: "/stride.strdburner.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the strdburner module's genesis state */
export interface GenesisStateSDKType {
  total_ustrd_burned: string;
}
function createBaseGenesisState(): GenesisState {
  return {
    totalUstrdBurned: ""
  };
}
export const GenesisState = {
  typeUrl: "/stride.strdburner.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.totalUstrdBurned !== "") {
      writer.uint32(74).string(message.totalUstrdBurned);
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
        case 9:
          message.totalUstrdBurned = reader.string();
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
    message.totalUstrdBurned = object.totalUstrdBurned ?? "";
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.total_ustrd_burned !== undefined && object.total_ustrd_burned !== null) {
      message.totalUstrdBurned = object.total_ustrd_burned;
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.total_ustrd_burned = message.totalUstrdBurned === "" ? undefined : message.totalUstrdBurned;
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
      typeUrl: "/stride.strdburner.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};