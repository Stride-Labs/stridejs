import { Class, ClassAmino, ClassSDKType, NFT, NFTAmino, NFTSDKType } from "./nft";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** GenesisState defines the nft module's genesis state. */
export interface GenesisState {
  /** class defines the class of the nft type. */
  classes: Class[];
  /** entry defines all nft owned by a person. */
  entries: Entry[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/cosmos.nft.v1beta1.GenesisState";
  value: Uint8Array;
}
/**
 * GenesisState defines the nft module's genesis state.
 * @name GenesisStateAmino
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.GenesisState
 */
export interface GenesisStateAmino {
  /**
   * class defines the class of the nft type.
   */
  classes?: ClassAmino[];
  /**
   * entry defines all nft owned by a person.
   */
  entries?: EntryAmino[];
}
export interface GenesisStateAminoMsg {
  type: "cosmos-sdk/GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the nft module's genesis state. */
export interface GenesisStateSDKType {
  classes: ClassSDKType[];
  entries: EntrySDKType[];
}
/** Entry Defines all nft owned by a person */
export interface Entry {
  /** owner is the owner address of the following nft */
  owner: string;
  /** nfts is a group of nfts of the same owner */
  nfts: NFT[];
}
export interface EntryProtoMsg {
  typeUrl: "/cosmos.nft.v1beta1.Entry";
  value: Uint8Array;
}
/**
 * Entry Defines all nft owned by a person
 * @name EntryAmino
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.Entry
 */
export interface EntryAmino {
  /**
   * owner is the owner address of the following nft
   */
  owner?: string;
  /**
   * nfts is a group of nfts of the same owner
   */
  nfts?: NFTAmino[];
}
export interface EntryAminoMsg {
  type: "cosmos-sdk/Entry";
  value: EntryAmino;
}
/** Entry Defines all nft owned by a person */
export interface EntrySDKType {
  owner: string;
  nfts: NFTSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    classes: [],
    entries: []
  };
}
export const GenesisState = {
  typeUrl: "/cosmos.nft.v1beta1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.classes) {
      Class.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.entries) {
      Entry.encode(v!, writer.uint32(18).fork()).ldelim();
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
          message.classes.push(Class.decode(reader, reader.uint32()));
          break;
        case 2:
          message.entries.push(Entry.decode(reader, reader.uint32()));
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
    message.classes = object.classes?.map(e => Class.fromPartial(e)) || [];
    message.entries = object.entries?.map(e => Entry.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    message.classes = object.classes?.map(e => Class.fromAmino(e)) || [];
    message.entries = object.entries?.map(e => Entry.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.classes) {
      obj.classes = message.classes.map(e => e ? Class.toAmino(e) : undefined);
    } else {
      obj.classes = message.classes;
    }
    if (message.entries) {
      obj.entries = message.entries.map(e => e ? Entry.toAmino(e) : undefined);
    } else {
      obj.entries = message.entries;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisState): GenesisStateAminoMsg {
    return {
      type: "cosmos-sdk/GenesisState",
      value: GenesisState.toAmino(message)
    };
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/cosmos.nft.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseEntry(): Entry {
  return {
    owner: "",
    nfts: []
  };
}
export const Entry = {
  typeUrl: "/cosmos.nft.v1beta1.Entry",
  encode(message: Entry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    for (const v of message.nfts) {
      NFT.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Entry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.nfts.push(NFT.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Entry>): Entry {
    const message = createBaseEntry();
    message.owner = object.owner ?? "";
    message.nfts = object.nfts?.map(e => NFT.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: EntryAmino): Entry {
    const message = createBaseEntry();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    message.nfts = object.nfts?.map(e => NFT.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Entry): EntryAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    if (message.nfts) {
      obj.nfts = message.nfts.map(e => e ? NFT.toAmino(e) : undefined);
    } else {
      obj.nfts = message.nfts;
    }
    return obj;
  },
  fromAminoMsg(object: EntryAminoMsg): Entry {
    return Entry.fromAmino(object.value);
  },
  toAminoMsg(message: Entry): EntryAminoMsg {
    return {
      type: "cosmos-sdk/Entry",
      value: Entry.toAmino(message)
    };
  },
  fromProtoMsg(message: EntryProtoMsg): Entry {
    return Entry.decode(message.value);
  },
  toProto(message: Entry): Uint8Array {
    return Entry.encode(message).finish();
  },
  toProtoMsg(message: Entry): EntryProtoMsg {
    return {
      typeUrl: "/cosmos.nft.v1beta1.Entry",
      value: Entry.encode(message).finish()
    };
  }
};