import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "../../decimals";
export interface MsgSetAirdropAllocations {
  allocator: string;
  airdropIdentifier: string;
  users: string[];
  weights: string[];
}
export interface MsgSetAirdropAllocationsProtoMsg {
  typeUrl: "/stride.claim.MsgSetAirdropAllocations";
  value: Uint8Array;
}
/**
 * @name MsgSetAirdropAllocationsAmino
 * @package stride.claim
 * @see proto type: stride.claim.MsgSetAirdropAllocations
 */
export interface MsgSetAirdropAllocationsAmino {
  allocator?: string;
  airdrop_identifier?: string;
  users?: string[];
  weights?: string[];
}
export interface MsgSetAirdropAllocationsAminoMsg {
  type: "claim/MsgSetAirdropAllocations";
  value: MsgSetAirdropAllocationsAmino;
}
export interface MsgSetAirdropAllocationsSDKType {
  allocator: string;
  airdrop_identifier: string;
  users: string[];
  weights: string[];
}
export interface MsgSetAirdropAllocationsResponse {}
export interface MsgSetAirdropAllocationsResponseProtoMsg {
  typeUrl: "/stride.claim.MsgSetAirdropAllocationsResponse";
  value: Uint8Array;
}
/**
 * @name MsgSetAirdropAllocationsResponseAmino
 * @package stride.claim
 * @see proto type: stride.claim.MsgSetAirdropAllocationsResponse
 */
export interface MsgSetAirdropAllocationsResponseAmino {}
export interface MsgSetAirdropAllocationsResponseAminoMsg {
  type: "/stride.claim.MsgSetAirdropAllocationsResponse";
  value: MsgSetAirdropAllocationsResponseAmino;
}
export interface MsgSetAirdropAllocationsResponseSDKType {}
export interface MsgClaimFreeAmount {
  user: string;
}
export interface MsgClaimFreeAmountProtoMsg {
  typeUrl: "/stride.claim.MsgClaimFreeAmount";
  value: Uint8Array;
}
/**
 * @name MsgClaimFreeAmountAmino
 * @package stride.claim
 * @see proto type: stride.claim.MsgClaimFreeAmount
 */
export interface MsgClaimFreeAmountAmino {
  user?: string;
}
export interface MsgClaimFreeAmountAminoMsg {
  type: "claim/MsgClaimFreeAmount";
  value: MsgClaimFreeAmountAmino;
}
export interface MsgClaimFreeAmountSDKType {
  user: string;
}
export interface MsgClaimFreeAmountResponse {
  claimedAmount: Coin[];
}
export interface MsgClaimFreeAmountResponseProtoMsg {
  typeUrl: "/stride.claim.MsgClaimFreeAmountResponse";
  value: Uint8Array;
}
/**
 * @name MsgClaimFreeAmountResponseAmino
 * @package stride.claim
 * @see proto type: stride.claim.MsgClaimFreeAmountResponse
 */
export interface MsgClaimFreeAmountResponseAmino {
  claimed_amount?: CoinAmino[];
}
export interface MsgClaimFreeAmountResponseAminoMsg {
  type: "/stride.claim.MsgClaimFreeAmountResponse";
  value: MsgClaimFreeAmountResponseAmino;
}
export interface MsgClaimFreeAmountResponseSDKType {
  claimed_amount: CoinSDKType[];
}
export interface MsgCreateAirdrop {
  distributor: string;
  identifier: string;
  chainId: string;
  denom: string;
  startTime: bigint;
  duration: bigint;
  autopilotEnabled: boolean;
}
export interface MsgCreateAirdropProtoMsg {
  typeUrl: "/stride.claim.MsgCreateAirdrop";
  value: Uint8Array;
}
/**
 * @name MsgCreateAirdropAmino
 * @package stride.claim
 * @see proto type: stride.claim.MsgCreateAirdrop
 */
export interface MsgCreateAirdropAmino {
  distributor?: string;
  identifier?: string;
  chain_id?: string;
  denom?: string;
  start_time?: string;
  duration?: string;
  autopilot_enabled?: boolean;
}
export interface MsgCreateAirdropAminoMsg {
  type: "claim/MsgCreateAirdrop";
  value: MsgCreateAirdropAmino;
}
export interface MsgCreateAirdropSDKType {
  distributor: string;
  identifier: string;
  chain_id: string;
  denom: string;
  start_time: bigint;
  duration: bigint;
  autopilot_enabled: boolean;
}
export interface MsgCreateAirdropResponse {}
export interface MsgCreateAirdropResponseProtoMsg {
  typeUrl: "/stride.claim.MsgCreateAirdropResponse";
  value: Uint8Array;
}
/**
 * @name MsgCreateAirdropResponseAmino
 * @package stride.claim
 * @see proto type: stride.claim.MsgCreateAirdropResponse
 */
export interface MsgCreateAirdropResponseAmino {}
export interface MsgCreateAirdropResponseAminoMsg {
  type: "/stride.claim.MsgCreateAirdropResponse";
  value: MsgCreateAirdropResponseAmino;
}
export interface MsgCreateAirdropResponseSDKType {}
export interface MsgDeleteAirdrop {
  distributor: string;
  identifier: string;
}
export interface MsgDeleteAirdropProtoMsg {
  typeUrl: "/stride.claim.MsgDeleteAirdrop";
  value: Uint8Array;
}
/**
 * @name MsgDeleteAirdropAmino
 * @package stride.claim
 * @see proto type: stride.claim.MsgDeleteAirdrop
 */
export interface MsgDeleteAirdropAmino {
  distributor?: string;
  identifier?: string;
}
export interface MsgDeleteAirdropAminoMsg {
  type: "claim/MsgDeleteAirdrop";
  value: MsgDeleteAirdropAmino;
}
export interface MsgDeleteAirdropSDKType {
  distributor: string;
  identifier: string;
}
export interface MsgDeleteAirdropResponse {}
export interface MsgDeleteAirdropResponseProtoMsg {
  typeUrl: "/stride.claim.MsgDeleteAirdropResponse";
  value: Uint8Array;
}
/**
 * @name MsgDeleteAirdropResponseAmino
 * @package stride.claim
 * @see proto type: stride.claim.MsgDeleteAirdropResponse
 */
export interface MsgDeleteAirdropResponseAmino {}
export interface MsgDeleteAirdropResponseAminoMsg {
  type: "/stride.claim.MsgDeleteAirdropResponse";
  value: MsgDeleteAirdropResponseAmino;
}
export interface MsgDeleteAirdropResponseSDKType {}
function createBaseMsgSetAirdropAllocations(): MsgSetAirdropAllocations {
  return {
    allocator: "",
    airdropIdentifier: "",
    users: [],
    weights: []
  };
}
export const MsgSetAirdropAllocations = {
  typeUrl: "/stride.claim.MsgSetAirdropAllocations",
  encode(message: MsgSetAirdropAllocations, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.allocator !== "") {
      writer.uint32(10).string(message.allocator);
    }
    if (message.airdropIdentifier !== "") {
      writer.uint32(18).string(message.airdropIdentifier);
    }
    for (const v of message.users) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.weights) {
      writer.uint32(34).string(Decimal.fromUserInput(v!, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetAirdropAllocations {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetAirdropAllocations();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allocator = reader.string();
          break;
        case 2:
          message.airdropIdentifier = reader.string();
          break;
        case 3:
          message.users.push(reader.string());
          break;
        case 4:
          message.weights.push(Decimal.fromAtomics(reader.string(), 18).toString());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSetAirdropAllocations>): MsgSetAirdropAllocations {
    const message = createBaseMsgSetAirdropAllocations();
    message.allocator = object.allocator ?? "";
    message.airdropIdentifier = object.airdropIdentifier ?? "";
    message.users = object.users?.map(e => e) || [];
    message.weights = object.weights?.map(e => e) || [];
    return message;
  },
  fromAmino(object: MsgSetAirdropAllocationsAmino): MsgSetAirdropAllocations {
    const message = createBaseMsgSetAirdropAllocations();
    if (object.allocator !== undefined && object.allocator !== null) {
      message.allocator = object.allocator;
    }
    if (object.airdrop_identifier !== undefined && object.airdrop_identifier !== null) {
      message.airdropIdentifier = object.airdrop_identifier;
    }
    message.users = object.users?.map(e => e) || [];
    message.weights = object.weights?.map(e => e) || [];
    return message;
  },
  toAmino(message: MsgSetAirdropAllocations): MsgSetAirdropAllocationsAmino {
    const obj: any = {};
    obj.allocator = message.allocator === "" ? undefined : message.allocator;
    obj.airdrop_identifier = message.airdropIdentifier === "" ? undefined : message.airdropIdentifier;
    if (message.users) {
      obj.users = message.users.map(e => e);
    } else {
      obj.users = message.users;
    }
    if (message.weights) {
      obj.weights = message.weights.map(e => e);
    } else {
      obj.weights = message.weights;
    }
    return obj;
  },
  fromAminoMsg(object: MsgSetAirdropAllocationsAminoMsg): MsgSetAirdropAllocations {
    return MsgSetAirdropAllocations.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetAirdropAllocations): MsgSetAirdropAllocationsAminoMsg {
    return {
      type: "claim/MsgSetAirdropAllocations",
      value: MsgSetAirdropAllocations.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSetAirdropAllocationsProtoMsg): MsgSetAirdropAllocations {
    return MsgSetAirdropAllocations.decode(message.value);
  },
  toProto(message: MsgSetAirdropAllocations): Uint8Array {
    return MsgSetAirdropAllocations.encode(message).finish();
  },
  toProtoMsg(message: MsgSetAirdropAllocations): MsgSetAirdropAllocationsProtoMsg {
    return {
      typeUrl: "/stride.claim.MsgSetAirdropAllocations",
      value: MsgSetAirdropAllocations.encode(message).finish()
    };
  }
};
function createBaseMsgSetAirdropAllocationsResponse(): MsgSetAirdropAllocationsResponse {
  return {};
}
export const MsgSetAirdropAllocationsResponse = {
  typeUrl: "/stride.claim.MsgSetAirdropAllocationsResponse",
  encode(_: MsgSetAirdropAllocationsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetAirdropAllocationsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetAirdropAllocationsResponse();
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
  fromPartial(_: Partial<MsgSetAirdropAllocationsResponse>): MsgSetAirdropAllocationsResponse {
    const message = createBaseMsgSetAirdropAllocationsResponse();
    return message;
  },
  fromAmino(_: MsgSetAirdropAllocationsResponseAmino): MsgSetAirdropAllocationsResponse {
    const message = createBaseMsgSetAirdropAllocationsResponse();
    return message;
  },
  toAmino(_: MsgSetAirdropAllocationsResponse): MsgSetAirdropAllocationsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetAirdropAllocationsResponseAminoMsg): MsgSetAirdropAllocationsResponse {
    return MsgSetAirdropAllocationsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetAirdropAllocationsResponseProtoMsg): MsgSetAirdropAllocationsResponse {
    return MsgSetAirdropAllocationsResponse.decode(message.value);
  },
  toProto(message: MsgSetAirdropAllocationsResponse): Uint8Array {
    return MsgSetAirdropAllocationsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetAirdropAllocationsResponse): MsgSetAirdropAllocationsResponseProtoMsg {
    return {
      typeUrl: "/stride.claim.MsgSetAirdropAllocationsResponse",
      value: MsgSetAirdropAllocationsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgClaimFreeAmount(): MsgClaimFreeAmount {
  return {
    user: ""
  };
}
export const MsgClaimFreeAmount = {
  typeUrl: "/stride.claim.MsgClaimFreeAmount",
  encode(message: MsgClaimFreeAmount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.user !== "") {
      writer.uint32(10).string(message.user);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClaimFreeAmount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimFreeAmount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgClaimFreeAmount>): MsgClaimFreeAmount {
    const message = createBaseMsgClaimFreeAmount();
    message.user = object.user ?? "";
    return message;
  },
  fromAmino(object: MsgClaimFreeAmountAmino): MsgClaimFreeAmount {
    const message = createBaseMsgClaimFreeAmount();
    if (object.user !== undefined && object.user !== null) {
      message.user = object.user;
    }
    return message;
  },
  toAmino(message: MsgClaimFreeAmount): MsgClaimFreeAmountAmino {
    const obj: any = {};
    obj.user = message.user === "" ? undefined : message.user;
    return obj;
  },
  fromAminoMsg(object: MsgClaimFreeAmountAminoMsg): MsgClaimFreeAmount {
    return MsgClaimFreeAmount.fromAmino(object.value);
  },
  toAminoMsg(message: MsgClaimFreeAmount): MsgClaimFreeAmountAminoMsg {
    return {
      type: "claim/MsgClaimFreeAmount",
      value: MsgClaimFreeAmount.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgClaimFreeAmountProtoMsg): MsgClaimFreeAmount {
    return MsgClaimFreeAmount.decode(message.value);
  },
  toProto(message: MsgClaimFreeAmount): Uint8Array {
    return MsgClaimFreeAmount.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimFreeAmount): MsgClaimFreeAmountProtoMsg {
    return {
      typeUrl: "/stride.claim.MsgClaimFreeAmount",
      value: MsgClaimFreeAmount.encode(message).finish()
    };
  }
};
function createBaseMsgClaimFreeAmountResponse(): MsgClaimFreeAmountResponse {
  return {
    claimedAmount: []
  };
}
export const MsgClaimFreeAmountResponse = {
  typeUrl: "/stride.claim.MsgClaimFreeAmountResponse",
  encode(message: MsgClaimFreeAmountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.claimedAmount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClaimFreeAmountResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimFreeAmountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          message.claimedAmount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgClaimFreeAmountResponse>): MsgClaimFreeAmountResponse {
    const message = createBaseMsgClaimFreeAmountResponse();
    message.claimedAmount = object.claimedAmount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgClaimFreeAmountResponseAmino): MsgClaimFreeAmountResponse {
    const message = createBaseMsgClaimFreeAmountResponse();
    message.claimedAmount = object.claimed_amount?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgClaimFreeAmountResponse): MsgClaimFreeAmountResponseAmino {
    const obj: any = {};
    if (message.claimedAmount) {
      obj.claimed_amount = message.claimedAmount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.claimed_amount = message.claimedAmount;
    }
    return obj;
  },
  fromAminoMsg(object: MsgClaimFreeAmountResponseAminoMsg): MsgClaimFreeAmountResponse {
    return MsgClaimFreeAmountResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClaimFreeAmountResponseProtoMsg): MsgClaimFreeAmountResponse {
    return MsgClaimFreeAmountResponse.decode(message.value);
  },
  toProto(message: MsgClaimFreeAmountResponse): Uint8Array {
    return MsgClaimFreeAmountResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimFreeAmountResponse): MsgClaimFreeAmountResponseProtoMsg {
    return {
      typeUrl: "/stride.claim.MsgClaimFreeAmountResponse",
      value: MsgClaimFreeAmountResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateAirdrop(): MsgCreateAirdrop {
  return {
    distributor: "",
    identifier: "",
    chainId: "",
    denom: "",
    startTime: BigInt(0),
    duration: BigInt(0),
    autopilotEnabled: false
  };
}
export const MsgCreateAirdrop = {
  typeUrl: "/stride.claim.MsgCreateAirdrop",
  encode(message: MsgCreateAirdrop, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.distributor !== "") {
      writer.uint32(10).string(message.distributor);
    }
    if (message.identifier !== "") {
      writer.uint32(18).string(message.identifier);
    }
    if (message.chainId !== "") {
      writer.uint32(50).string(message.chainId);
    }
    if (message.denom !== "") {
      writer.uint32(42).string(message.denom);
    }
    if (message.startTime !== BigInt(0)) {
      writer.uint32(24).uint64(message.startTime);
    }
    if (message.duration !== BigInt(0)) {
      writer.uint32(32).uint64(message.duration);
    }
    if (message.autopilotEnabled === true) {
      writer.uint32(56).bool(message.autopilotEnabled);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateAirdrop {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateAirdrop();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.distributor = reader.string();
          break;
        case 2:
          message.identifier = reader.string();
          break;
        case 6:
          message.chainId = reader.string();
          break;
        case 5:
          message.denom = reader.string();
          break;
        case 3:
          message.startTime = reader.uint64();
          break;
        case 4:
          message.duration = reader.uint64();
          break;
        case 7:
          message.autopilotEnabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateAirdrop>): MsgCreateAirdrop {
    const message = createBaseMsgCreateAirdrop();
    message.distributor = object.distributor ?? "";
    message.identifier = object.identifier ?? "";
    message.chainId = object.chainId ?? "";
    message.denom = object.denom ?? "";
    message.startTime = object.startTime !== undefined && object.startTime !== null ? BigInt(object.startTime.toString()) : BigInt(0);
    message.duration = object.duration !== undefined && object.duration !== null ? BigInt(object.duration.toString()) : BigInt(0);
    message.autopilotEnabled = object.autopilotEnabled ?? false;
    return message;
  },
  fromAmino(object: MsgCreateAirdropAmino): MsgCreateAirdrop {
    const message = createBaseMsgCreateAirdrop();
    if (object.distributor !== undefined && object.distributor !== null) {
      message.distributor = object.distributor;
    }
    if (object.identifier !== undefined && object.identifier !== null) {
      message.identifier = object.identifier;
    }
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.start_time !== undefined && object.start_time !== null) {
      message.startTime = BigInt(object.start_time);
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = BigInt(object.duration);
    }
    if (object.autopilot_enabled !== undefined && object.autopilot_enabled !== null) {
      message.autopilotEnabled = object.autopilot_enabled;
    }
    return message;
  },
  toAmino(message: MsgCreateAirdrop): MsgCreateAirdropAmino {
    const obj: any = {};
    obj.distributor = message.distributor === "" ? undefined : message.distributor;
    obj.identifier = message.identifier === "" ? undefined : message.identifier;
    obj.chain_id = message.chainId === "" ? undefined : message.chainId;
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.start_time = message.startTime !== BigInt(0) ? message.startTime?.toString() : undefined;
    obj.duration = message.duration !== BigInt(0) ? message.duration?.toString() : undefined;
    obj.autopilot_enabled = message.autopilotEnabled === false ? undefined : message.autopilotEnabled;
    return obj;
  },
  fromAminoMsg(object: MsgCreateAirdropAminoMsg): MsgCreateAirdrop {
    return MsgCreateAirdrop.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateAirdrop): MsgCreateAirdropAminoMsg {
    return {
      type: "claim/MsgCreateAirdrop",
      value: MsgCreateAirdrop.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateAirdropProtoMsg): MsgCreateAirdrop {
    return MsgCreateAirdrop.decode(message.value);
  },
  toProto(message: MsgCreateAirdrop): Uint8Array {
    return MsgCreateAirdrop.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateAirdrop): MsgCreateAirdropProtoMsg {
    return {
      typeUrl: "/stride.claim.MsgCreateAirdrop",
      value: MsgCreateAirdrop.encode(message).finish()
    };
  }
};
function createBaseMsgCreateAirdropResponse(): MsgCreateAirdropResponse {
  return {};
}
export const MsgCreateAirdropResponse = {
  typeUrl: "/stride.claim.MsgCreateAirdropResponse",
  encode(_: MsgCreateAirdropResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateAirdropResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateAirdropResponse();
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
  fromPartial(_: Partial<MsgCreateAirdropResponse>): MsgCreateAirdropResponse {
    const message = createBaseMsgCreateAirdropResponse();
    return message;
  },
  fromAmino(_: MsgCreateAirdropResponseAmino): MsgCreateAirdropResponse {
    const message = createBaseMsgCreateAirdropResponse();
    return message;
  },
  toAmino(_: MsgCreateAirdropResponse): MsgCreateAirdropResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateAirdropResponseAminoMsg): MsgCreateAirdropResponse {
    return MsgCreateAirdropResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateAirdropResponseProtoMsg): MsgCreateAirdropResponse {
    return MsgCreateAirdropResponse.decode(message.value);
  },
  toProto(message: MsgCreateAirdropResponse): Uint8Array {
    return MsgCreateAirdropResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateAirdropResponse): MsgCreateAirdropResponseProtoMsg {
    return {
      typeUrl: "/stride.claim.MsgCreateAirdropResponse",
      value: MsgCreateAirdropResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteAirdrop(): MsgDeleteAirdrop {
  return {
    distributor: "",
    identifier: ""
  };
}
export const MsgDeleteAirdrop = {
  typeUrl: "/stride.claim.MsgDeleteAirdrop",
  encode(message: MsgDeleteAirdrop, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.distributor !== "") {
      writer.uint32(10).string(message.distributor);
    }
    if (message.identifier !== "") {
      writer.uint32(18).string(message.identifier);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteAirdrop {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteAirdrop();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.distributor = reader.string();
          break;
        case 2:
          message.identifier = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgDeleteAirdrop>): MsgDeleteAirdrop {
    const message = createBaseMsgDeleteAirdrop();
    message.distributor = object.distributor ?? "";
    message.identifier = object.identifier ?? "";
    return message;
  },
  fromAmino(object: MsgDeleteAirdropAmino): MsgDeleteAirdrop {
    const message = createBaseMsgDeleteAirdrop();
    if (object.distributor !== undefined && object.distributor !== null) {
      message.distributor = object.distributor;
    }
    if (object.identifier !== undefined && object.identifier !== null) {
      message.identifier = object.identifier;
    }
    return message;
  },
  toAmino(message: MsgDeleteAirdrop): MsgDeleteAirdropAmino {
    const obj: any = {};
    obj.distributor = message.distributor === "" ? undefined : message.distributor;
    obj.identifier = message.identifier === "" ? undefined : message.identifier;
    return obj;
  },
  fromAminoMsg(object: MsgDeleteAirdropAminoMsg): MsgDeleteAirdrop {
    return MsgDeleteAirdrop.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDeleteAirdrop): MsgDeleteAirdropAminoMsg {
    return {
      type: "claim/MsgDeleteAirdrop",
      value: MsgDeleteAirdrop.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgDeleteAirdropProtoMsg): MsgDeleteAirdrop {
    return MsgDeleteAirdrop.decode(message.value);
  },
  toProto(message: MsgDeleteAirdrop): Uint8Array {
    return MsgDeleteAirdrop.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteAirdrop): MsgDeleteAirdropProtoMsg {
    return {
      typeUrl: "/stride.claim.MsgDeleteAirdrop",
      value: MsgDeleteAirdrop.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteAirdropResponse(): MsgDeleteAirdropResponse {
  return {};
}
export const MsgDeleteAirdropResponse = {
  typeUrl: "/stride.claim.MsgDeleteAirdropResponse",
  encode(_: MsgDeleteAirdropResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteAirdropResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteAirdropResponse();
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
  fromPartial(_: Partial<MsgDeleteAirdropResponse>): MsgDeleteAirdropResponse {
    const message = createBaseMsgDeleteAirdropResponse();
    return message;
  },
  fromAmino(_: MsgDeleteAirdropResponseAmino): MsgDeleteAirdropResponse {
    const message = createBaseMsgDeleteAirdropResponse();
    return message;
  },
  toAmino(_: MsgDeleteAirdropResponse): MsgDeleteAirdropResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDeleteAirdropResponseAminoMsg): MsgDeleteAirdropResponse {
    return MsgDeleteAirdropResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteAirdropResponseProtoMsg): MsgDeleteAirdropResponse {
    return MsgDeleteAirdropResponse.decode(message.value);
  },
  toProto(message: MsgDeleteAirdropResponse): Uint8Array {
    return MsgDeleteAirdropResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteAirdropResponse): MsgDeleteAirdropResponseProtoMsg {
    return {
      typeUrl: "/stride.claim.MsgDeleteAirdropResponse",
      value: MsgDeleteAirdropResponse.encode(message).finish()
    };
  }
};