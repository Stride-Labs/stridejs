import { BinaryReader, BinaryWriter } from "../../binary";
/** Adds a new oracle */
export interface MsgAddOracle {
  creator: string;
  connectionId: string;
}
export interface MsgAddOracleProtoMsg {
  typeUrl: "/stride.icaoracle.MsgAddOracle";
  value: Uint8Array;
}
/** Adds a new oracle */
export interface MsgAddOracleAmino {
  creator?: string;
  connection_id?: string;
}
export interface MsgAddOracleAminoMsg {
  type: "icaoracle/MsgAddOracle";
  value: MsgAddOracleAmino;
}
/** Adds a new oracle */
export interface MsgAddOracleSDKType {
  creator: string;
  connection_id: string;
}
export interface MsgAddOracleResponse {}
export interface MsgAddOracleResponseProtoMsg {
  typeUrl: "/stride.icaoracle.MsgAddOracleResponse";
  value: Uint8Array;
}
export interface MsgAddOracleResponseAmino {}
export interface MsgAddOracleResponseAminoMsg {
  type: "/stride.icaoracle.MsgAddOracleResponse";
  value: MsgAddOracleResponseAmino;
}
export interface MsgAddOracleResponseSDKType {}
/** Instantiates the oracle's CW contract */
export interface MsgInstantiateOracle {
  creator: string;
  oracleChainId: string;
  contractCodeId: bigint;
  transferChannelOnOracle: string;
}
export interface MsgInstantiateOracleProtoMsg {
  typeUrl: "/stride.icaoracle.MsgInstantiateOracle";
  value: Uint8Array;
}
/** Instantiates the oracle's CW contract */
export interface MsgInstantiateOracleAmino {
  creator?: string;
  oracle_chain_id?: string;
  contract_code_id?: string;
  transfer_channel_on_oracle?: string;
}
export interface MsgInstantiateOracleAminoMsg {
  type: "icaoracle/MsgInstantiateOracle";
  value: MsgInstantiateOracleAmino;
}
/** Instantiates the oracle's CW contract */
export interface MsgInstantiateOracleSDKType {
  creator: string;
  oracle_chain_id: string;
  contract_code_id: bigint;
  transfer_channel_on_oracle: string;
}
export interface MsgInstantiateOracleResponse {}
export interface MsgInstantiateOracleResponseProtoMsg {
  typeUrl: "/stride.icaoracle.MsgInstantiateOracleResponse";
  value: Uint8Array;
}
export interface MsgInstantiateOracleResponseAmino {}
export interface MsgInstantiateOracleResponseAminoMsg {
  type: "/stride.icaoracle.MsgInstantiateOracleResponse";
  value: MsgInstantiateOracleResponseAmino;
}
export interface MsgInstantiateOracleResponseSDKType {}
/** Restore's a closed ICA channel for a given oracle */
export interface MsgRestoreOracleICA {
  creator: string;
  oracleChainId: string;
}
export interface MsgRestoreOracleICAProtoMsg {
  typeUrl: "/stride.icaoracle.MsgRestoreOracleICA";
  value: Uint8Array;
}
/** Restore's a closed ICA channel for a given oracle */
export interface MsgRestoreOracleICAAmino {
  creator?: string;
  oracle_chain_id?: string;
}
export interface MsgRestoreOracleICAAminoMsg {
  type: "icaoracle/MsgRestoreOracleICA";
  value: MsgRestoreOracleICAAmino;
}
/** Restore's a closed ICA channel for a given oracle */
export interface MsgRestoreOracleICASDKType {
  creator: string;
  oracle_chain_id: string;
}
export interface MsgRestoreOracleICAResponse {}
export interface MsgRestoreOracleICAResponseProtoMsg {
  typeUrl: "/stride.icaoracle.MsgRestoreOracleICAResponse";
  value: Uint8Array;
}
export interface MsgRestoreOracleICAResponseAmino {}
export interface MsgRestoreOracleICAResponseAminoMsg {
  type: "/stride.icaoracle.MsgRestoreOracleICAResponse";
  value: MsgRestoreOracleICAResponseAmino;
}
export interface MsgRestoreOracleICAResponseSDKType {}
/** Toggle's whether an oracle is active and should receive metric updates */
export interface MsgToggleOracle {
  /**
   * authority is the address that controls the module (defaults to x/gov unless
   * overwritten).
   */
  authority: string;
  oracleChainId: string;
  active: boolean;
}
export interface MsgToggleOracleProtoMsg {
  typeUrl: "/stride.icaoracle.MsgToggleOracle";
  value: Uint8Array;
}
/** Toggle's whether an oracle is active and should receive metric updates */
export interface MsgToggleOracleAmino {
  /**
   * authority is the address that controls the module (defaults to x/gov unless
   * overwritten).
   */
  authority?: string;
  oracle_chain_id?: string;
  active?: boolean;
}
export interface MsgToggleOracleAminoMsg {
  type: "icaoracle/MsgToggleOracle";
  value: MsgToggleOracleAmino;
}
/** Toggle's whether an oracle is active and should receive metric updates */
export interface MsgToggleOracleSDKType {
  authority: string;
  oracle_chain_id: string;
  active: boolean;
}
export interface MsgToggleOracleResponse {}
export interface MsgToggleOracleResponseProtoMsg {
  typeUrl: "/stride.icaoracle.MsgToggleOracleResponse";
  value: Uint8Array;
}
export interface MsgToggleOracleResponseAmino {}
export interface MsgToggleOracleResponseAminoMsg {
  type: "/stride.icaoracle.MsgToggleOracleResponse";
  value: MsgToggleOracleResponseAmino;
}
export interface MsgToggleOracleResponseSDKType {}
/** Removes an oracle completely */
export interface MsgRemoveOracle {
  /**
   * authority is the address that controls the module (defaults to x/gov unless
   * overwritten).
   */
  authority: string;
  oracleChainId: string;
}
export interface MsgRemoveOracleProtoMsg {
  typeUrl: "/stride.icaoracle.MsgRemoveOracle";
  value: Uint8Array;
}
/** Removes an oracle completely */
export interface MsgRemoveOracleAmino {
  /**
   * authority is the address that controls the module (defaults to x/gov unless
   * overwritten).
   */
  authority?: string;
  oracle_chain_id?: string;
}
export interface MsgRemoveOracleAminoMsg {
  type: "icaoracle/MsgRemoveOracle";
  value: MsgRemoveOracleAmino;
}
/** Removes an oracle completely */
export interface MsgRemoveOracleSDKType {
  authority: string;
  oracle_chain_id: string;
}
export interface MsgRemoveOracleResponse {}
export interface MsgRemoveOracleResponseProtoMsg {
  typeUrl: "/stride.icaoracle.MsgRemoveOracleResponse";
  value: Uint8Array;
}
export interface MsgRemoveOracleResponseAmino {}
export interface MsgRemoveOracleResponseAminoMsg {
  type: "/stride.icaoracle.MsgRemoveOracleResponse";
  value: MsgRemoveOracleResponseAmino;
}
export interface MsgRemoveOracleResponseSDKType {}
function createBaseMsgAddOracle(): MsgAddOracle {
  return {
    creator: "",
    connectionId: ""
  };
}
export const MsgAddOracle = {
  typeUrl: "/stride.icaoracle.MsgAddOracle",
  encode(message: MsgAddOracle, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAddOracle {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddOracle();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.connectionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgAddOracle>): MsgAddOracle {
    const message = createBaseMsgAddOracle();
    message.creator = object.creator ?? "";
    message.connectionId = object.connectionId ?? "";
    return message;
  },
  fromAmino(object: MsgAddOracleAmino): MsgAddOracle {
    const message = createBaseMsgAddOracle();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.connection_id !== undefined && object.connection_id !== null) {
      message.connectionId = object.connection_id;
    }
    return message;
  },
  toAmino(message: MsgAddOracle): MsgAddOracleAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.connection_id = message.connectionId === "" ? undefined : message.connectionId;
    return obj;
  },
  fromAminoMsg(object: MsgAddOracleAminoMsg): MsgAddOracle {
    return MsgAddOracle.fromAmino(object.value);
  },
  toAminoMsg(message: MsgAddOracle): MsgAddOracleAminoMsg {
    return {
      type: "icaoracle/MsgAddOracle",
      value: MsgAddOracle.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgAddOracleProtoMsg): MsgAddOracle {
    return MsgAddOracle.decode(message.value);
  },
  toProto(message: MsgAddOracle): Uint8Array {
    return MsgAddOracle.encode(message).finish();
  },
  toProtoMsg(message: MsgAddOracle): MsgAddOracleProtoMsg {
    return {
      typeUrl: "/stride.icaoracle.MsgAddOracle",
      value: MsgAddOracle.encode(message).finish()
    };
  }
};
function createBaseMsgAddOracleResponse(): MsgAddOracleResponse {
  return {};
}
export const MsgAddOracleResponse = {
  typeUrl: "/stride.icaoracle.MsgAddOracleResponse",
  encode(_: MsgAddOracleResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAddOracleResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddOracleResponse();
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
  fromPartial(_: Partial<MsgAddOracleResponse>): MsgAddOracleResponse {
    const message = createBaseMsgAddOracleResponse();
    return message;
  },
  fromAmino(_: MsgAddOracleResponseAmino): MsgAddOracleResponse {
    const message = createBaseMsgAddOracleResponse();
    return message;
  },
  toAmino(_: MsgAddOracleResponse): MsgAddOracleResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAddOracleResponseAminoMsg): MsgAddOracleResponse {
    return MsgAddOracleResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddOracleResponseProtoMsg): MsgAddOracleResponse {
    return MsgAddOracleResponse.decode(message.value);
  },
  toProto(message: MsgAddOracleResponse): Uint8Array {
    return MsgAddOracleResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAddOracleResponse): MsgAddOracleResponseProtoMsg {
    return {
      typeUrl: "/stride.icaoracle.MsgAddOracleResponse",
      value: MsgAddOracleResponse.encode(message).finish()
    };
  }
};
function createBaseMsgInstantiateOracle(): MsgInstantiateOracle {
  return {
    creator: "",
    oracleChainId: "",
    contractCodeId: BigInt(0),
    transferChannelOnOracle: ""
  };
}
export const MsgInstantiateOracle = {
  typeUrl: "/stride.icaoracle.MsgInstantiateOracle",
  encode(message: MsgInstantiateOracle, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.oracleChainId !== "") {
      writer.uint32(18).string(message.oracleChainId);
    }
    if (message.contractCodeId !== BigInt(0)) {
      writer.uint32(24).uint64(message.contractCodeId);
    }
    if (message.transferChannelOnOracle !== "") {
      writer.uint32(34).string(message.transferChannelOnOracle);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgInstantiateOracle {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInstantiateOracle();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.oracleChainId = reader.string();
          break;
        case 3:
          message.contractCodeId = reader.uint64();
          break;
        case 4:
          message.transferChannelOnOracle = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgInstantiateOracle>): MsgInstantiateOracle {
    const message = createBaseMsgInstantiateOracle();
    message.creator = object.creator ?? "";
    message.oracleChainId = object.oracleChainId ?? "";
    message.contractCodeId = object.contractCodeId !== undefined && object.contractCodeId !== null ? BigInt(object.contractCodeId.toString()) : BigInt(0);
    message.transferChannelOnOracle = object.transferChannelOnOracle ?? "";
    return message;
  },
  fromAmino(object: MsgInstantiateOracleAmino): MsgInstantiateOracle {
    const message = createBaseMsgInstantiateOracle();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.oracle_chain_id !== undefined && object.oracle_chain_id !== null) {
      message.oracleChainId = object.oracle_chain_id;
    }
    if (object.contract_code_id !== undefined && object.contract_code_id !== null) {
      message.contractCodeId = BigInt(object.contract_code_id);
    }
    if (object.transfer_channel_on_oracle !== undefined && object.transfer_channel_on_oracle !== null) {
      message.transferChannelOnOracle = object.transfer_channel_on_oracle;
    }
    return message;
  },
  toAmino(message: MsgInstantiateOracle): MsgInstantiateOracleAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.oracle_chain_id = message.oracleChainId === "" ? undefined : message.oracleChainId;
    obj.contract_code_id = message.contractCodeId !== BigInt(0) ? message.contractCodeId?.toString() : undefined;
    obj.transfer_channel_on_oracle = message.transferChannelOnOracle === "" ? undefined : message.transferChannelOnOracle;
    return obj;
  },
  fromAminoMsg(object: MsgInstantiateOracleAminoMsg): MsgInstantiateOracle {
    return MsgInstantiateOracle.fromAmino(object.value);
  },
  toAminoMsg(message: MsgInstantiateOracle): MsgInstantiateOracleAminoMsg {
    return {
      type: "icaoracle/MsgInstantiateOracle",
      value: MsgInstantiateOracle.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgInstantiateOracleProtoMsg): MsgInstantiateOracle {
    return MsgInstantiateOracle.decode(message.value);
  },
  toProto(message: MsgInstantiateOracle): Uint8Array {
    return MsgInstantiateOracle.encode(message).finish();
  },
  toProtoMsg(message: MsgInstantiateOracle): MsgInstantiateOracleProtoMsg {
    return {
      typeUrl: "/stride.icaoracle.MsgInstantiateOracle",
      value: MsgInstantiateOracle.encode(message).finish()
    };
  }
};
function createBaseMsgInstantiateOracleResponse(): MsgInstantiateOracleResponse {
  return {};
}
export const MsgInstantiateOracleResponse = {
  typeUrl: "/stride.icaoracle.MsgInstantiateOracleResponse",
  encode(_: MsgInstantiateOracleResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgInstantiateOracleResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInstantiateOracleResponse();
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
  fromPartial(_: Partial<MsgInstantiateOracleResponse>): MsgInstantiateOracleResponse {
    const message = createBaseMsgInstantiateOracleResponse();
    return message;
  },
  fromAmino(_: MsgInstantiateOracleResponseAmino): MsgInstantiateOracleResponse {
    const message = createBaseMsgInstantiateOracleResponse();
    return message;
  },
  toAmino(_: MsgInstantiateOracleResponse): MsgInstantiateOracleResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgInstantiateOracleResponseAminoMsg): MsgInstantiateOracleResponse {
    return MsgInstantiateOracleResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgInstantiateOracleResponseProtoMsg): MsgInstantiateOracleResponse {
    return MsgInstantiateOracleResponse.decode(message.value);
  },
  toProto(message: MsgInstantiateOracleResponse): Uint8Array {
    return MsgInstantiateOracleResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgInstantiateOracleResponse): MsgInstantiateOracleResponseProtoMsg {
    return {
      typeUrl: "/stride.icaoracle.MsgInstantiateOracleResponse",
      value: MsgInstantiateOracleResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRestoreOracleICA(): MsgRestoreOracleICA {
  return {
    creator: "",
    oracleChainId: ""
  };
}
export const MsgRestoreOracleICA = {
  typeUrl: "/stride.icaoracle.MsgRestoreOracleICA",
  encode(message: MsgRestoreOracleICA, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.oracleChainId !== "") {
      writer.uint32(18).string(message.oracleChainId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRestoreOracleICA {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRestoreOracleICA();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.oracleChainId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgRestoreOracleICA>): MsgRestoreOracleICA {
    const message = createBaseMsgRestoreOracleICA();
    message.creator = object.creator ?? "";
    message.oracleChainId = object.oracleChainId ?? "";
    return message;
  },
  fromAmino(object: MsgRestoreOracleICAAmino): MsgRestoreOracleICA {
    const message = createBaseMsgRestoreOracleICA();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.oracle_chain_id !== undefined && object.oracle_chain_id !== null) {
      message.oracleChainId = object.oracle_chain_id;
    }
    return message;
  },
  toAmino(message: MsgRestoreOracleICA): MsgRestoreOracleICAAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.oracle_chain_id = message.oracleChainId === "" ? undefined : message.oracleChainId;
    return obj;
  },
  fromAminoMsg(object: MsgRestoreOracleICAAminoMsg): MsgRestoreOracleICA {
    return MsgRestoreOracleICA.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRestoreOracleICA): MsgRestoreOracleICAAminoMsg {
    return {
      type: "icaoracle/MsgRestoreOracleICA",
      value: MsgRestoreOracleICA.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRestoreOracleICAProtoMsg): MsgRestoreOracleICA {
    return MsgRestoreOracleICA.decode(message.value);
  },
  toProto(message: MsgRestoreOracleICA): Uint8Array {
    return MsgRestoreOracleICA.encode(message).finish();
  },
  toProtoMsg(message: MsgRestoreOracleICA): MsgRestoreOracleICAProtoMsg {
    return {
      typeUrl: "/stride.icaoracle.MsgRestoreOracleICA",
      value: MsgRestoreOracleICA.encode(message).finish()
    };
  }
};
function createBaseMsgRestoreOracleICAResponse(): MsgRestoreOracleICAResponse {
  return {};
}
export const MsgRestoreOracleICAResponse = {
  typeUrl: "/stride.icaoracle.MsgRestoreOracleICAResponse",
  encode(_: MsgRestoreOracleICAResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRestoreOracleICAResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRestoreOracleICAResponse();
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
  fromPartial(_: Partial<MsgRestoreOracleICAResponse>): MsgRestoreOracleICAResponse {
    const message = createBaseMsgRestoreOracleICAResponse();
    return message;
  },
  fromAmino(_: MsgRestoreOracleICAResponseAmino): MsgRestoreOracleICAResponse {
    const message = createBaseMsgRestoreOracleICAResponse();
    return message;
  },
  toAmino(_: MsgRestoreOracleICAResponse): MsgRestoreOracleICAResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRestoreOracleICAResponseAminoMsg): MsgRestoreOracleICAResponse {
    return MsgRestoreOracleICAResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRestoreOracleICAResponseProtoMsg): MsgRestoreOracleICAResponse {
    return MsgRestoreOracleICAResponse.decode(message.value);
  },
  toProto(message: MsgRestoreOracleICAResponse): Uint8Array {
    return MsgRestoreOracleICAResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRestoreOracleICAResponse): MsgRestoreOracleICAResponseProtoMsg {
    return {
      typeUrl: "/stride.icaoracle.MsgRestoreOracleICAResponse",
      value: MsgRestoreOracleICAResponse.encode(message).finish()
    };
  }
};
function createBaseMsgToggleOracle(): MsgToggleOracle {
  return {
    authority: "",
    oracleChainId: "",
    active: false
  };
}
export const MsgToggleOracle = {
  typeUrl: "/stride.icaoracle.MsgToggleOracle",
  encode(message: MsgToggleOracle, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.oracleChainId !== "") {
      writer.uint32(18).string(message.oracleChainId);
    }
    if (message.active === true) {
      writer.uint32(24).bool(message.active);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgToggleOracle {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgToggleOracle();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.oracleChainId = reader.string();
          break;
        case 3:
          message.active = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgToggleOracle>): MsgToggleOracle {
    const message = createBaseMsgToggleOracle();
    message.authority = object.authority ?? "";
    message.oracleChainId = object.oracleChainId ?? "";
    message.active = object.active ?? false;
    return message;
  },
  fromAmino(object: MsgToggleOracleAmino): MsgToggleOracle {
    const message = createBaseMsgToggleOracle();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.oracle_chain_id !== undefined && object.oracle_chain_id !== null) {
      message.oracleChainId = object.oracle_chain_id;
    }
    if (object.active !== undefined && object.active !== null) {
      message.active = object.active;
    }
    return message;
  },
  toAmino(message: MsgToggleOracle): MsgToggleOracleAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.oracle_chain_id = message.oracleChainId === "" ? undefined : message.oracleChainId;
    obj.active = message.active === false ? undefined : message.active;
    return obj;
  },
  fromAminoMsg(object: MsgToggleOracleAminoMsg): MsgToggleOracle {
    return MsgToggleOracle.fromAmino(object.value);
  },
  toAminoMsg(message: MsgToggleOracle): MsgToggleOracleAminoMsg {
    return {
      type: "icaoracle/MsgToggleOracle",
      value: MsgToggleOracle.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgToggleOracleProtoMsg): MsgToggleOracle {
    return MsgToggleOracle.decode(message.value);
  },
  toProto(message: MsgToggleOracle): Uint8Array {
    return MsgToggleOracle.encode(message).finish();
  },
  toProtoMsg(message: MsgToggleOracle): MsgToggleOracleProtoMsg {
    return {
      typeUrl: "/stride.icaoracle.MsgToggleOracle",
      value: MsgToggleOracle.encode(message).finish()
    };
  }
};
function createBaseMsgToggleOracleResponse(): MsgToggleOracleResponse {
  return {};
}
export const MsgToggleOracleResponse = {
  typeUrl: "/stride.icaoracle.MsgToggleOracleResponse",
  encode(_: MsgToggleOracleResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgToggleOracleResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgToggleOracleResponse();
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
  fromPartial(_: Partial<MsgToggleOracleResponse>): MsgToggleOracleResponse {
    const message = createBaseMsgToggleOracleResponse();
    return message;
  },
  fromAmino(_: MsgToggleOracleResponseAmino): MsgToggleOracleResponse {
    const message = createBaseMsgToggleOracleResponse();
    return message;
  },
  toAmino(_: MsgToggleOracleResponse): MsgToggleOracleResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgToggleOracleResponseAminoMsg): MsgToggleOracleResponse {
    return MsgToggleOracleResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgToggleOracleResponseProtoMsg): MsgToggleOracleResponse {
    return MsgToggleOracleResponse.decode(message.value);
  },
  toProto(message: MsgToggleOracleResponse): Uint8Array {
    return MsgToggleOracleResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgToggleOracleResponse): MsgToggleOracleResponseProtoMsg {
    return {
      typeUrl: "/stride.icaoracle.MsgToggleOracleResponse",
      value: MsgToggleOracleResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRemoveOracle(): MsgRemoveOracle {
  return {
    authority: "",
    oracleChainId: ""
  };
}
export const MsgRemoveOracle = {
  typeUrl: "/stride.icaoracle.MsgRemoveOracle",
  encode(message: MsgRemoveOracle, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.oracleChainId !== "") {
      writer.uint32(18).string(message.oracleChainId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveOracle {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveOracle();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.oracleChainId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgRemoveOracle>): MsgRemoveOracle {
    const message = createBaseMsgRemoveOracle();
    message.authority = object.authority ?? "";
    message.oracleChainId = object.oracleChainId ?? "";
    return message;
  },
  fromAmino(object: MsgRemoveOracleAmino): MsgRemoveOracle {
    const message = createBaseMsgRemoveOracle();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.oracle_chain_id !== undefined && object.oracle_chain_id !== null) {
      message.oracleChainId = object.oracle_chain_id;
    }
    return message;
  },
  toAmino(message: MsgRemoveOracle): MsgRemoveOracleAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.oracle_chain_id = message.oracleChainId === "" ? undefined : message.oracleChainId;
    return obj;
  },
  fromAminoMsg(object: MsgRemoveOracleAminoMsg): MsgRemoveOracle {
    return MsgRemoveOracle.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRemoveOracle): MsgRemoveOracleAminoMsg {
    return {
      type: "icaoracle/MsgRemoveOracle",
      value: MsgRemoveOracle.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRemoveOracleProtoMsg): MsgRemoveOracle {
    return MsgRemoveOracle.decode(message.value);
  },
  toProto(message: MsgRemoveOracle): Uint8Array {
    return MsgRemoveOracle.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveOracle): MsgRemoveOracleProtoMsg {
    return {
      typeUrl: "/stride.icaoracle.MsgRemoveOracle",
      value: MsgRemoveOracle.encode(message).finish()
    };
  }
};
function createBaseMsgRemoveOracleResponse(): MsgRemoveOracleResponse {
  return {};
}
export const MsgRemoveOracleResponse = {
  typeUrl: "/stride.icaoracle.MsgRemoveOracleResponse",
  encode(_: MsgRemoveOracleResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveOracleResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveOracleResponse();
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
  fromPartial(_: Partial<MsgRemoveOracleResponse>): MsgRemoveOracleResponse {
    const message = createBaseMsgRemoveOracleResponse();
    return message;
  },
  fromAmino(_: MsgRemoveOracleResponseAmino): MsgRemoveOracleResponse {
    const message = createBaseMsgRemoveOracleResponse();
    return message;
  },
  toAmino(_: MsgRemoveOracleResponse): MsgRemoveOracleResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRemoveOracleResponseAminoMsg): MsgRemoveOracleResponse {
    return MsgRemoveOracleResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRemoveOracleResponseProtoMsg): MsgRemoveOracleResponse {
    return MsgRemoveOracleResponse.decode(message.value);
  },
  toProto(message: MsgRemoveOracleResponse): Uint8Array {
    return MsgRemoveOracleResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveOracleResponse): MsgRemoveOracleResponseProtoMsg {
    return {
      typeUrl: "/stride.icaoracle.MsgRemoveOracleResponse",
      value: MsgRemoveOracleResponse.encode(message).finish()
    };
  }
};