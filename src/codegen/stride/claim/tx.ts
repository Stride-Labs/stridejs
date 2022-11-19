import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
export interface MsgSetAirdropAllocations {
  allocator: string;
  airdropIdentifier: string;
  users: string[];
  weights: string[];
}
export interface MsgSetAirdropAllocationsSDKType {
  allocator: string;
  airdrop_identifier: string;
  users: string[];
  weights: string[];
}
export interface MsgSetAirdropAllocationsResponse {}
export interface MsgSetAirdropAllocationsResponseSDKType {}
export interface MsgClaimFreeAmount {
  user: string;
}
export interface MsgClaimFreeAmountSDKType {
  user: string;
}
export interface MsgClaimFreeAmountResponse {
  claimedAmount: Coin[];
}
export interface MsgClaimFreeAmountResponseSDKType {
  claimed_amount: CoinSDKType[];
}
export interface MsgCreateAirdrop {
  distributor: string;
  identifier: string;
  startTime: Long;
  duration: Long;
  denom: string;
}
export interface MsgCreateAirdropSDKType {
  distributor: string;
  identifier: string;
  start_time: Long;
  duration: Long;
  denom: string;
}
export interface MsgCreateAirdropResponse {}
export interface MsgCreateAirdropResponseSDKType {}
export interface MsgDeleteAirdrop {
  distributor: string;
  identifier: string;
}
export interface MsgDeleteAirdropSDKType {
  distributor: string;
  identifier: string;
}
export interface MsgDeleteAirdropResponse {}
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
  encode(message: MsgSetAirdropAllocations, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      writer.uint32(34).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetAirdropAllocations {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
          message.weights.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgSetAirdropAllocations>): MsgSetAirdropAllocations {
    const message = createBaseMsgSetAirdropAllocations();
    message.allocator = object.allocator ?? "";
    message.airdropIdentifier = object.airdropIdentifier ?? "";
    message.users = object.users?.map(e => e) || [];
    message.weights = object.weights?.map(e => e) || [];
    return message;
  }

};

function createBaseMsgSetAirdropAllocationsResponse(): MsgSetAirdropAllocationsResponse {
  return {};
}

export const MsgSetAirdropAllocationsResponse = {
  encode(_: MsgSetAirdropAllocationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetAirdropAllocationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromPartial(_: DeepPartial<MsgSetAirdropAllocationsResponse>): MsgSetAirdropAllocationsResponse {
    const message = createBaseMsgSetAirdropAllocationsResponse();
    return message;
  }

};

function createBaseMsgClaimFreeAmount(): MsgClaimFreeAmount {
  return {
    user: ""
  };
}

export const MsgClaimFreeAmount = {
  encode(message: MsgClaimFreeAmount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.user !== "") {
      writer.uint32(10).string(message.user);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimFreeAmount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromPartial(object: DeepPartial<MsgClaimFreeAmount>): MsgClaimFreeAmount {
    const message = createBaseMsgClaimFreeAmount();
    message.user = object.user ?? "";
    return message;
  }

};

function createBaseMsgClaimFreeAmountResponse(): MsgClaimFreeAmountResponse {
  return {
    claimedAmount: []
  };
}

export const MsgClaimFreeAmountResponse = {
  encode(message: MsgClaimFreeAmountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.claimedAmount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimFreeAmountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromPartial(object: DeepPartial<MsgClaimFreeAmountResponse>): MsgClaimFreeAmountResponse {
    const message = createBaseMsgClaimFreeAmountResponse();
    message.claimedAmount = object.claimedAmount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};

function createBaseMsgCreateAirdrop(): MsgCreateAirdrop {
  return {
    distributor: "",
    identifier: "",
    startTime: Long.UZERO,
    duration: Long.UZERO,
    denom: ""
  };
}

export const MsgCreateAirdrop = {
  encode(message: MsgCreateAirdrop, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.distributor !== "") {
      writer.uint32(10).string(message.distributor);
    }

    if (message.identifier !== "") {
      writer.uint32(18).string(message.identifier);
    }

    if (!message.startTime.isZero()) {
      writer.uint32(24).uint64(message.startTime);
    }

    if (!message.duration.isZero()) {
      writer.uint32(32).uint64(message.duration);
    }

    if (message.denom !== "") {
      writer.uint32(42).string(message.denom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateAirdrop {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

        case 3:
          message.startTime = (reader.uint64() as Long);
          break;

        case 4:
          message.duration = (reader.uint64() as Long);
          break;

        case 5:
          message.denom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgCreateAirdrop>): MsgCreateAirdrop {
    const message = createBaseMsgCreateAirdrop();
    message.distributor = object.distributor ?? "";
    message.identifier = object.identifier ?? "";
    message.startTime = object.startTime !== undefined && object.startTime !== null ? Long.fromValue(object.startTime) : Long.UZERO;
    message.duration = object.duration !== undefined && object.duration !== null ? Long.fromValue(object.duration) : Long.UZERO;
    message.denom = object.denom ?? "";
    return message;
  }

};

function createBaseMsgCreateAirdropResponse(): MsgCreateAirdropResponse {
  return {};
}

export const MsgCreateAirdropResponse = {
  encode(_: MsgCreateAirdropResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateAirdropResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromPartial(_: DeepPartial<MsgCreateAirdropResponse>): MsgCreateAirdropResponse {
    const message = createBaseMsgCreateAirdropResponse();
    return message;
  }

};

function createBaseMsgDeleteAirdrop(): MsgDeleteAirdrop {
  return {
    distributor: "",
    identifier: ""
  };
}

export const MsgDeleteAirdrop = {
  encode(message: MsgDeleteAirdrop, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.distributor !== "") {
      writer.uint32(10).string(message.distributor);
    }

    if (message.identifier !== "") {
      writer.uint32(18).string(message.identifier);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteAirdrop {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromPartial(object: DeepPartial<MsgDeleteAirdrop>): MsgDeleteAirdrop {
    const message = createBaseMsgDeleteAirdrop();
    message.distributor = object.distributor ?? "";
    message.identifier = object.identifier ?? "";
    return message;
  }

};

function createBaseMsgDeleteAirdropResponse(): MsgDeleteAirdropResponse {
  return {};
}

export const MsgDeleteAirdropResponse = {
  encode(_: MsgDeleteAirdropResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteAirdropResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromPartial(_: DeepPartial<MsgDeleteAirdropResponse>): MsgDeleteAirdropResponse {
    const message = createBaseMsgDeleteAirdropResponse();
    return message;
  }

};