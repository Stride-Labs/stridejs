import { BinaryReader, BinaryWriter } from "../../binary";
/** Burn STRD */
export interface MsgBurn {
  burner: string;
  amount: string;
}
export interface MsgBurnProtoMsg {
  typeUrl: "/stride.strdburner.MsgBurn";
  value: Uint8Array;
}
/**
 * Burn STRD
 * @name MsgBurnAmino
 * @package stride.strdburner
 * @see proto type: stride.strdburner.MsgBurn
 */
export interface MsgBurnAmino {
  burner?: string;
  amount?: string;
}
export interface MsgBurnAminoMsg {
  type: "strdburner/MsgBurn";
  value: MsgBurnAmino;
}
/** Burn STRD */
export interface MsgBurnSDKType {
  burner: string;
  amount: string;
}
export interface MsgBurnResponse {}
export interface MsgBurnResponseProtoMsg {
  typeUrl: "/stride.strdburner.MsgBurnResponse";
  value: Uint8Array;
}
/**
 * @name MsgBurnResponseAmino
 * @package stride.strdburner
 * @see proto type: stride.strdburner.MsgBurnResponse
 */
export interface MsgBurnResponseAmino {}
export interface MsgBurnResponseAminoMsg {
  type: "/stride.strdburner.MsgBurnResponse";
  value: MsgBurnResponseAmino;
}
export interface MsgBurnResponseSDKType {}
/** Link non-stride address */
export interface MsgLink {
  strideAddress: string;
  linkedAddress: string;
}
export interface MsgLinkProtoMsg {
  typeUrl: "/stride.strdburner.MsgLink";
  value: Uint8Array;
}
/**
 * Link non-stride address
 * @name MsgLinkAmino
 * @package stride.strdburner
 * @see proto type: stride.strdburner.MsgLink
 */
export interface MsgLinkAmino {
  stride_address?: string;
  linked_address?: string;
}
export interface MsgLinkAminoMsg {
  type: "strdburner/MsgLink";
  value: MsgLinkAmino;
}
/** Link non-stride address */
export interface MsgLinkSDKType {
  stride_address: string;
  linked_address: string;
}
export interface MsgLinkResponse {}
export interface MsgLinkResponseProtoMsg {
  typeUrl: "/stride.strdburner.MsgLinkResponse";
  value: Uint8Array;
}
/**
 * @name MsgLinkResponseAmino
 * @package stride.strdburner
 * @see proto type: stride.strdburner.MsgLinkResponse
 */
export interface MsgLinkResponseAmino {}
export interface MsgLinkResponseAminoMsg {
  type: "/stride.strdburner.MsgLinkResponse";
  value: MsgLinkResponseAmino;
}
export interface MsgLinkResponseSDKType {}
function createBaseMsgBurn(): MsgBurn {
  return {
    burner: "",
    amount: ""
  };
}
export const MsgBurn = {
  typeUrl: "/stride.strdburner.MsgBurn",
  encode(message: MsgBurn, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.burner !== "") {
      writer.uint32(10).string(message.burner);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBurn {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.burner = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgBurn>): MsgBurn {
    const message = createBaseMsgBurn();
    message.burner = object.burner ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: MsgBurnAmino): MsgBurn {
    const message = createBaseMsgBurn();
    if (object.burner !== undefined && object.burner !== null) {
      message.burner = object.burner;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: MsgBurn): MsgBurnAmino {
    const obj: any = {};
    obj.burner = message.burner === "" ? undefined : message.burner;
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: MsgBurnAminoMsg): MsgBurn {
    return MsgBurn.fromAmino(object.value);
  },
  toAminoMsg(message: MsgBurn): MsgBurnAminoMsg {
    return {
      type: "strdburner/MsgBurn",
      value: MsgBurn.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgBurnProtoMsg): MsgBurn {
    return MsgBurn.decode(message.value);
  },
  toProto(message: MsgBurn): Uint8Array {
    return MsgBurn.encode(message).finish();
  },
  toProtoMsg(message: MsgBurn): MsgBurnProtoMsg {
    return {
      typeUrl: "/stride.strdburner.MsgBurn",
      value: MsgBurn.encode(message).finish()
    };
  }
};
function createBaseMsgBurnResponse(): MsgBurnResponse {
  return {};
}
export const MsgBurnResponse = {
  typeUrl: "/stride.strdburner.MsgBurnResponse",
  encode(_: MsgBurnResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBurnResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgBurnResponse>): MsgBurnResponse {
    const message = createBaseMsgBurnResponse();
    return message;
  },
  fromAmino(_: MsgBurnResponseAmino): MsgBurnResponse {
    const message = createBaseMsgBurnResponse();
    return message;
  },
  toAmino(_: MsgBurnResponse): MsgBurnResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgBurnResponseAminoMsg): MsgBurnResponse {
    return MsgBurnResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBurnResponseProtoMsg): MsgBurnResponse {
    return MsgBurnResponse.decode(message.value);
  },
  toProto(message: MsgBurnResponse): Uint8Array {
    return MsgBurnResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgBurnResponse): MsgBurnResponseProtoMsg {
    return {
      typeUrl: "/stride.strdburner.MsgBurnResponse",
      value: MsgBurnResponse.encode(message).finish()
    };
  }
};
function createBaseMsgLink(): MsgLink {
  return {
    strideAddress: "",
    linkedAddress: ""
  };
}
export const MsgLink = {
  typeUrl: "/stride.strdburner.MsgLink",
  encode(message: MsgLink, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.strideAddress !== "") {
      writer.uint32(10).string(message.strideAddress);
    }
    if (message.linkedAddress !== "") {
      writer.uint32(18).string(message.linkedAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgLink {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLink();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.strideAddress = reader.string();
          break;
        case 2:
          message.linkedAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgLink>): MsgLink {
    const message = createBaseMsgLink();
    message.strideAddress = object.strideAddress ?? "";
    message.linkedAddress = object.linkedAddress ?? "";
    return message;
  },
  fromAmino(object: MsgLinkAmino): MsgLink {
    const message = createBaseMsgLink();
    if (object.stride_address !== undefined && object.stride_address !== null) {
      message.strideAddress = object.stride_address;
    }
    if (object.linked_address !== undefined && object.linked_address !== null) {
      message.linkedAddress = object.linked_address;
    }
    return message;
  },
  toAmino(message: MsgLink): MsgLinkAmino {
    const obj: any = {};
    obj.stride_address = message.strideAddress === "" ? undefined : message.strideAddress;
    obj.linked_address = message.linkedAddress === "" ? undefined : message.linkedAddress;
    return obj;
  },
  fromAminoMsg(object: MsgLinkAminoMsg): MsgLink {
    return MsgLink.fromAmino(object.value);
  },
  toAminoMsg(message: MsgLink): MsgLinkAminoMsg {
    return {
      type: "strdburner/MsgLink",
      value: MsgLink.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgLinkProtoMsg): MsgLink {
    return MsgLink.decode(message.value);
  },
  toProto(message: MsgLink): Uint8Array {
    return MsgLink.encode(message).finish();
  },
  toProtoMsg(message: MsgLink): MsgLinkProtoMsg {
    return {
      typeUrl: "/stride.strdburner.MsgLink",
      value: MsgLink.encode(message).finish()
    };
  }
};
function createBaseMsgLinkResponse(): MsgLinkResponse {
  return {};
}
export const MsgLinkResponse = {
  typeUrl: "/stride.strdburner.MsgLinkResponse",
  encode(_: MsgLinkResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgLinkResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLinkResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgLinkResponse>): MsgLinkResponse {
    const message = createBaseMsgLinkResponse();
    return message;
  },
  fromAmino(_: MsgLinkResponseAmino): MsgLinkResponse {
    const message = createBaseMsgLinkResponse();
    return message;
  },
  toAmino(_: MsgLinkResponse): MsgLinkResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgLinkResponseAminoMsg): MsgLinkResponse {
    return MsgLinkResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgLinkResponseProtoMsg): MsgLinkResponse {
    return MsgLinkResponse.decode(message.value);
  },
  toProto(message: MsgLinkResponse): Uint8Array {
    return MsgLinkResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgLinkResponse): MsgLinkResponseProtoMsg {
    return {
      typeUrl: "/stride.strdburner.MsgLinkResponse",
      value: MsgLinkResponse.encode(message).finish()
    };
  }
};