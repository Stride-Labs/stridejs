import { Params, ParamsAmino, ParamsSDKType } from "./icqoracle";
import { BinaryReader, BinaryWriter } from "../../binary";
/**
 * MsgRegisterTokenPriceQuery defines the message for adding a new token to
 * track prices
 */
export interface MsgRegisterTokenPriceQuery {
  admin: string;
  /** Token denom on Stride */
  baseDenom: string;
  /** Quote denom on Stride */
  quoteDenom: string;
  /** Token denom on Osmosis */
  osmosisBaseDenom: string;
  /** Quote denom on Osmosis */
  osmosisQuoteDenom: string;
  /** Pool ID on Osmosis */
  osmosisPoolId: bigint;
}
export interface MsgRegisterTokenPriceQueryProtoMsg {
  typeUrl: "/stride.icqoracle.MsgRegisterTokenPriceQuery";
  value: Uint8Array;
}
/**
 * MsgRegisterTokenPriceQuery defines the message for adding a new token to
 * track prices
 * @name MsgRegisterTokenPriceQueryAmino
 * @package stride.icqoracle
 * @see proto type: stride.icqoracle.MsgRegisterTokenPriceQuery
 */
export interface MsgRegisterTokenPriceQueryAmino {
  admin?: string;
  /**
   * Token denom on Stride
   */
  base_denom?: string;
  /**
   * Quote denom on Stride
   */
  quote_denom?: string;
  /**
   * Token denom on Osmosis
   */
  osmosis_base_denom?: string;
  /**
   * Quote denom on Osmosis
   */
  osmosis_quote_denom?: string;
  /**
   * Pool ID on Osmosis
   */
  osmosis_pool_id?: string;
}
export interface MsgRegisterTokenPriceQueryAminoMsg {
  type: "icqoracle/MsgRegisterTokenPriceQuery";
  value: MsgRegisterTokenPriceQueryAmino;
}
/**
 * MsgRegisterTokenPriceQuery defines the message for adding a new token to
 * track prices
 */
export interface MsgRegisterTokenPriceQuerySDKType {
  admin: string;
  base_denom: string;
  quote_denom: string;
  osmosis_base_denom: string;
  osmosis_quote_denom: string;
  osmosis_pool_id: bigint;
}
export interface MsgRegisterTokenPriceQueryResponse {}
export interface MsgRegisterTokenPriceQueryResponseProtoMsg {
  typeUrl: "/stride.icqoracle.MsgRegisterTokenPriceQueryResponse";
  value: Uint8Array;
}
/**
 * @name MsgRegisterTokenPriceQueryResponseAmino
 * @package stride.icqoracle
 * @see proto type: stride.icqoracle.MsgRegisterTokenPriceQueryResponse
 */
export interface MsgRegisterTokenPriceQueryResponseAmino {}
export interface MsgRegisterTokenPriceQueryResponseAminoMsg {
  type: "/stride.icqoracle.MsgRegisterTokenPriceQueryResponse";
  value: MsgRegisterTokenPriceQueryResponseAmino;
}
export interface MsgRegisterTokenPriceQueryResponseSDKType {}
/**
 * MsgRemoveTokenPriceQuery defines the message for removing a token from price
 * tracking
 */
export interface MsgRemoveTokenPriceQuery {
  admin: string;
  /** Token denom on Stride */
  baseDenom: string;
  /** Quote denom on Stride */
  quoteDenom: string;
  /** Pool ID on Osmosis */
  osmosisPoolId: bigint;
}
export interface MsgRemoveTokenPriceQueryProtoMsg {
  typeUrl: "/stride.icqoracle.MsgRemoveTokenPriceQuery";
  value: Uint8Array;
}
/**
 * MsgRemoveTokenPriceQuery defines the message for removing a token from price
 * tracking
 * @name MsgRemoveTokenPriceQueryAmino
 * @package stride.icqoracle
 * @see proto type: stride.icqoracle.MsgRemoveTokenPriceQuery
 */
export interface MsgRemoveTokenPriceQueryAmino {
  admin?: string;
  /**
   * Token denom on Stride
   */
  base_denom?: string;
  /**
   * Quote denom on Stride
   */
  quote_denom?: string;
  /**
   * Pool ID on Osmosis
   */
  osmosis_pool_id?: string;
}
export interface MsgRemoveTokenPriceQueryAminoMsg {
  type: "icqoracle/MsgRemoveTokenPriceQuery";
  value: MsgRemoveTokenPriceQueryAmino;
}
/**
 * MsgRemoveTokenPriceQuery defines the message for removing a token from price
 * tracking
 */
export interface MsgRemoveTokenPriceQuerySDKType {
  admin: string;
  base_denom: string;
  quote_denom: string;
  osmosis_pool_id: bigint;
}
export interface MsgRemoveTokenPriceQueryResponse {}
export interface MsgRemoveTokenPriceQueryResponseProtoMsg {
  typeUrl: "/stride.icqoracle.MsgRemoveTokenPriceQueryResponse";
  value: Uint8Array;
}
/**
 * @name MsgRemoveTokenPriceQueryResponseAmino
 * @package stride.icqoracle
 * @see proto type: stride.icqoracle.MsgRemoveTokenPriceQueryResponse
 */
export interface MsgRemoveTokenPriceQueryResponseAmino {}
export interface MsgRemoveTokenPriceQueryResponseAminoMsg {
  type: "/stride.icqoracle.MsgRemoveTokenPriceQueryResponse";
  value: MsgRemoveTokenPriceQueryResponseAmino;
}
export interface MsgRemoveTokenPriceQueryResponseSDKType {}
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParams {
  /**
   * authority is the address that controls the module (defaults to x/gov unless
   * overwritten).
   */
  authority: string;
  /**
   * params defines the x/icqoracle parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/stride.icqoracle.MsgUpdateParams";
  value: Uint8Array;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * @name MsgUpdateParamsAmino
 * @package stride.icqoracle
 * @see proto type: stride.icqoracle.MsgUpdateParams
 */
export interface MsgUpdateParamsAmino {
  /**
   * authority is the address that controls the module (defaults to x/gov unless
   * overwritten).
   */
  authority?: string;
  /**
   * params defines the x/icqoracle parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "icqoracle/MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParamsSDKType {
  authority: string;
  params: ParamsSDKType;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/stride.icqoracle.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * @name MsgUpdateParamsResponseAmino
 * @package stride.icqoracle
 * @see proto type: stride.icqoracle.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/stride.icqoracle.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponseSDKType {}
function createBaseMsgRegisterTokenPriceQuery(): MsgRegisterTokenPriceQuery {
  return {
    admin: "",
    baseDenom: "",
    quoteDenom: "",
    osmosisBaseDenom: "",
    osmosisQuoteDenom: "",
    osmosisPoolId: BigInt(0)
  };
}
export const MsgRegisterTokenPriceQuery = {
  typeUrl: "/stride.icqoracle.MsgRegisterTokenPriceQuery",
  encode(message: MsgRegisterTokenPriceQuery, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.baseDenom !== "") {
      writer.uint32(18).string(message.baseDenom);
    }
    if (message.quoteDenom !== "") {
      writer.uint32(26).string(message.quoteDenom);
    }
    if (message.osmosisBaseDenom !== "") {
      writer.uint32(34).string(message.osmosisBaseDenom);
    }
    if (message.osmosisQuoteDenom !== "") {
      writer.uint32(42).string(message.osmosisQuoteDenom);
    }
    if (message.osmosisPoolId !== BigInt(0)) {
      writer.uint32(48).uint64(message.osmosisPoolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterTokenPriceQuery {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterTokenPriceQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.baseDenom = reader.string();
          break;
        case 3:
          message.quoteDenom = reader.string();
          break;
        case 4:
          message.osmosisBaseDenom = reader.string();
          break;
        case 5:
          message.osmosisQuoteDenom = reader.string();
          break;
        case 6:
          message.osmosisPoolId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgRegisterTokenPriceQuery>): MsgRegisterTokenPriceQuery {
    const message = createBaseMsgRegisterTokenPriceQuery();
    message.admin = object.admin ?? "";
    message.baseDenom = object.baseDenom ?? "";
    message.quoteDenom = object.quoteDenom ?? "";
    message.osmosisBaseDenom = object.osmosisBaseDenom ?? "";
    message.osmosisQuoteDenom = object.osmosisQuoteDenom ?? "";
    message.osmosisPoolId = object.osmosisPoolId !== undefined && object.osmosisPoolId !== null ? BigInt(object.osmosisPoolId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgRegisterTokenPriceQueryAmino): MsgRegisterTokenPriceQuery {
    const message = createBaseMsgRegisterTokenPriceQuery();
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.base_denom !== undefined && object.base_denom !== null) {
      message.baseDenom = object.base_denom;
    }
    if (object.quote_denom !== undefined && object.quote_denom !== null) {
      message.quoteDenom = object.quote_denom;
    }
    if (object.osmosis_base_denom !== undefined && object.osmosis_base_denom !== null) {
      message.osmosisBaseDenom = object.osmosis_base_denom;
    }
    if (object.osmosis_quote_denom !== undefined && object.osmosis_quote_denom !== null) {
      message.osmosisQuoteDenom = object.osmosis_quote_denom;
    }
    if (object.osmosis_pool_id !== undefined && object.osmosis_pool_id !== null) {
      message.osmosisPoolId = BigInt(object.osmosis_pool_id);
    }
    return message;
  },
  toAmino(message: MsgRegisterTokenPriceQuery): MsgRegisterTokenPriceQueryAmino {
    const obj: any = {};
    obj.admin = message.admin === "" ? undefined : message.admin;
    obj.base_denom = message.baseDenom === "" ? undefined : message.baseDenom;
    obj.quote_denom = message.quoteDenom === "" ? undefined : message.quoteDenom;
    obj.osmosis_base_denom = message.osmosisBaseDenom === "" ? undefined : message.osmosisBaseDenom;
    obj.osmosis_quote_denom = message.osmosisQuoteDenom === "" ? undefined : message.osmosisQuoteDenom;
    obj.osmosis_pool_id = message.osmosisPoolId !== BigInt(0) ? message.osmosisPoolId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgRegisterTokenPriceQueryAminoMsg): MsgRegisterTokenPriceQuery {
    return MsgRegisterTokenPriceQuery.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRegisterTokenPriceQuery): MsgRegisterTokenPriceQueryAminoMsg {
    return {
      type: "icqoracle/MsgRegisterTokenPriceQuery",
      value: MsgRegisterTokenPriceQuery.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRegisterTokenPriceQueryProtoMsg): MsgRegisterTokenPriceQuery {
    return MsgRegisterTokenPriceQuery.decode(message.value);
  },
  toProto(message: MsgRegisterTokenPriceQuery): Uint8Array {
    return MsgRegisterTokenPriceQuery.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterTokenPriceQuery): MsgRegisterTokenPriceQueryProtoMsg {
    return {
      typeUrl: "/stride.icqoracle.MsgRegisterTokenPriceQuery",
      value: MsgRegisterTokenPriceQuery.encode(message).finish()
    };
  }
};
function createBaseMsgRegisterTokenPriceQueryResponse(): MsgRegisterTokenPriceQueryResponse {
  return {};
}
export const MsgRegisterTokenPriceQueryResponse = {
  typeUrl: "/stride.icqoracle.MsgRegisterTokenPriceQueryResponse",
  encode(_: MsgRegisterTokenPriceQueryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterTokenPriceQueryResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterTokenPriceQueryResponse();
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
  fromPartial(_: Partial<MsgRegisterTokenPriceQueryResponse>): MsgRegisterTokenPriceQueryResponse {
    const message = createBaseMsgRegisterTokenPriceQueryResponse();
    return message;
  },
  fromAmino(_: MsgRegisterTokenPriceQueryResponseAmino): MsgRegisterTokenPriceQueryResponse {
    const message = createBaseMsgRegisterTokenPriceQueryResponse();
    return message;
  },
  toAmino(_: MsgRegisterTokenPriceQueryResponse): MsgRegisterTokenPriceQueryResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRegisterTokenPriceQueryResponseAminoMsg): MsgRegisterTokenPriceQueryResponse {
    return MsgRegisterTokenPriceQueryResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterTokenPriceQueryResponseProtoMsg): MsgRegisterTokenPriceQueryResponse {
    return MsgRegisterTokenPriceQueryResponse.decode(message.value);
  },
  toProto(message: MsgRegisterTokenPriceQueryResponse): Uint8Array {
    return MsgRegisterTokenPriceQueryResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterTokenPriceQueryResponse): MsgRegisterTokenPriceQueryResponseProtoMsg {
    return {
      typeUrl: "/stride.icqoracle.MsgRegisterTokenPriceQueryResponse",
      value: MsgRegisterTokenPriceQueryResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRemoveTokenPriceQuery(): MsgRemoveTokenPriceQuery {
  return {
    admin: "",
    baseDenom: "",
    quoteDenom: "",
    osmosisPoolId: BigInt(0)
  };
}
export const MsgRemoveTokenPriceQuery = {
  typeUrl: "/stride.icqoracle.MsgRemoveTokenPriceQuery",
  encode(message: MsgRemoveTokenPriceQuery, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.baseDenom !== "") {
      writer.uint32(18).string(message.baseDenom);
    }
    if (message.quoteDenom !== "") {
      writer.uint32(26).string(message.quoteDenom);
    }
    if (message.osmosisPoolId !== BigInt(0)) {
      writer.uint32(32).uint64(message.osmosisPoolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveTokenPriceQuery {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveTokenPriceQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.baseDenom = reader.string();
          break;
        case 3:
          message.quoteDenom = reader.string();
          break;
        case 4:
          message.osmosisPoolId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgRemoveTokenPriceQuery>): MsgRemoveTokenPriceQuery {
    const message = createBaseMsgRemoveTokenPriceQuery();
    message.admin = object.admin ?? "";
    message.baseDenom = object.baseDenom ?? "";
    message.quoteDenom = object.quoteDenom ?? "";
    message.osmosisPoolId = object.osmosisPoolId !== undefined && object.osmosisPoolId !== null ? BigInt(object.osmosisPoolId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgRemoveTokenPriceQueryAmino): MsgRemoveTokenPriceQuery {
    const message = createBaseMsgRemoveTokenPriceQuery();
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.base_denom !== undefined && object.base_denom !== null) {
      message.baseDenom = object.base_denom;
    }
    if (object.quote_denom !== undefined && object.quote_denom !== null) {
      message.quoteDenom = object.quote_denom;
    }
    if (object.osmosis_pool_id !== undefined && object.osmosis_pool_id !== null) {
      message.osmosisPoolId = BigInt(object.osmosis_pool_id);
    }
    return message;
  },
  toAmino(message: MsgRemoveTokenPriceQuery): MsgRemoveTokenPriceQueryAmino {
    const obj: any = {};
    obj.admin = message.admin === "" ? undefined : message.admin;
    obj.base_denom = message.baseDenom === "" ? undefined : message.baseDenom;
    obj.quote_denom = message.quoteDenom === "" ? undefined : message.quoteDenom;
    obj.osmosis_pool_id = message.osmosisPoolId !== BigInt(0) ? message.osmosisPoolId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgRemoveTokenPriceQueryAminoMsg): MsgRemoveTokenPriceQuery {
    return MsgRemoveTokenPriceQuery.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRemoveTokenPriceQuery): MsgRemoveTokenPriceQueryAminoMsg {
    return {
      type: "icqoracle/MsgRemoveTokenPriceQuery",
      value: MsgRemoveTokenPriceQuery.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRemoveTokenPriceQueryProtoMsg): MsgRemoveTokenPriceQuery {
    return MsgRemoveTokenPriceQuery.decode(message.value);
  },
  toProto(message: MsgRemoveTokenPriceQuery): Uint8Array {
    return MsgRemoveTokenPriceQuery.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveTokenPriceQuery): MsgRemoveTokenPriceQueryProtoMsg {
    return {
      typeUrl: "/stride.icqoracle.MsgRemoveTokenPriceQuery",
      value: MsgRemoveTokenPriceQuery.encode(message).finish()
    };
  }
};
function createBaseMsgRemoveTokenPriceQueryResponse(): MsgRemoveTokenPriceQueryResponse {
  return {};
}
export const MsgRemoveTokenPriceQueryResponse = {
  typeUrl: "/stride.icqoracle.MsgRemoveTokenPriceQueryResponse",
  encode(_: MsgRemoveTokenPriceQueryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveTokenPriceQueryResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveTokenPriceQueryResponse();
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
  fromPartial(_: Partial<MsgRemoveTokenPriceQueryResponse>): MsgRemoveTokenPriceQueryResponse {
    const message = createBaseMsgRemoveTokenPriceQueryResponse();
    return message;
  },
  fromAmino(_: MsgRemoveTokenPriceQueryResponseAmino): MsgRemoveTokenPriceQueryResponse {
    const message = createBaseMsgRemoveTokenPriceQueryResponse();
    return message;
  },
  toAmino(_: MsgRemoveTokenPriceQueryResponse): MsgRemoveTokenPriceQueryResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRemoveTokenPriceQueryResponseAminoMsg): MsgRemoveTokenPriceQueryResponse {
    return MsgRemoveTokenPriceQueryResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRemoveTokenPriceQueryResponseProtoMsg): MsgRemoveTokenPriceQueryResponse {
    return MsgRemoveTokenPriceQueryResponse.decode(message.value);
  },
  toProto(message: MsgRemoveTokenPriceQueryResponse): Uint8Array {
    return MsgRemoveTokenPriceQueryResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveTokenPriceQueryResponse): MsgRemoveTokenPriceQueryResponseProtoMsg {
    return {
      typeUrl: "/stride.icqoracle.MsgRemoveTokenPriceQueryResponse",
      value: MsgRemoveTokenPriceQueryResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/stride.icqoracle.MsgUpdateParams",
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg {
    return {
      type: "icqoracle/MsgUpdateParams",
      value: MsgUpdateParams.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/stride.icqoracle.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/stride.icqoracle.MsgUpdateParamsResponse",
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
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
  fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/stride.icqoracle.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};