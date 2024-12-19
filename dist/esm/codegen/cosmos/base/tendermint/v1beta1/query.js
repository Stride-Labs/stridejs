import { PageRequest, PageResponse } from "../../query/v1beta1/pagination";
import { Any } from "../../../../google/protobuf/any";
import { BlockID } from "../../../../tendermint/types/types";
import { Block as Block1 } from "../../../../tendermint/types/block";
import { Block as Block2 } from "./types";
import { DefaultNodeInfo } from "../../../../tendermint/p2p/types";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { bytesFromBase64, base64FromBytes } from "../../../../helpers";
function createBaseGetValidatorSetByHeightRequest() {
  return {
    height: BigInt(0),
    pagination: void 0
  };
}
const GetValidatorSetByHeightRequest = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).int64(message.height);
    }
    if (message.pagination !== void 0) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGetValidatorSetByHeightRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseGetValidatorSetByHeightRequest();
    message.height = object.height !== void 0 && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseGetValidatorSetByHeightRequest();
    if (object.height !== void 0 && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.height = message.height !== BigInt(0) ? message.height.toString() : void 0;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return GetValidatorSetByHeightRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GetValidatorSetByHeightRequest",
      value: GetValidatorSetByHeightRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return GetValidatorSetByHeightRequest.decode(message.value);
  },
  toProto(message) {
    return GetValidatorSetByHeightRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightRequest",
      value: GetValidatorSetByHeightRequest.encode(message).finish()
    };
  }
};
function createBaseGetValidatorSetByHeightResponse() {
  return {
    blockHeight: BigInt(0),
    validators: [],
    pagination: void 0
  };
}
const GetValidatorSetByHeightResponse = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.blockHeight !== BigInt(0)) {
      writer.uint32(8).int64(message.blockHeight);
    }
    for (const v of message.validators) {
      Validator.encode(v, writer.uint32(18).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGetValidatorSetByHeightResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockHeight = reader.int64();
          break;
        case 2:
          message.validators.push(Validator.decode(reader, reader.uint32()));
          break;
        case 3:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseGetValidatorSetByHeightResponse();
    message.blockHeight = object.blockHeight !== void 0 && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
    message.validators = object.validators?.map((e) => Validator.fromPartial(e)) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseGetValidatorSetByHeightResponse();
    if (object.block_height !== void 0 && object.block_height !== null) {
      message.blockHeight = BigInt(object.block_height);
    }
    message.validators = object.validators?.map((e) => Validator.fromAmino(e)) || [];
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.block_height = message.blockHeight !== BigInt(0) ? message.blockHeight.toString() : void 0;
    if (message.validators) {
      obj.validators = message.validators.map((e) => e ? Validator.toAmino(e) : void 0);
    } else {
      obj.validators = message.validators;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return GetValidatorSetByHeightResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GetValidatorSetByHeightResponse",
      value: GetValidatorSetByHeightResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return GetValidatorSetByHeightResponse.decode(message.value);
  },
  toProto(message) {
    return GetValidatorSetByHeightResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightResponse",
      value: GetValidatorSetByHeightResponse.encode(message).finish()
    };
  }
};
function createBaseGetLatestValidatorSetRequest() {
  return {
    pagination: void 0
  };
}
const GetLatestValidatorSetRequest = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestValidatorSetRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.pagination !== void 0) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGetLatestValidatorSetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseGetLatestValidatorSetRequest();
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseGetLatestValidatorSetRequest();
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return GetLatestValidatorSetRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GetLatestValidatorSetRequest",
      value: GetLatestValidatorSetRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return GetLatestValidatorSetRequest.decode(message.value);
  },
  toProto(message) {
    return GetLatestValidatorSetRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestValidatorSetRequest",
      value: GetLatestValidatorSetRequest.encode(message).finish()
    };
  }
};
function createBaseGetLatestValidatorSetResponse() {
  return {
    blockHeight: BigInt(0),
    validators: [],
    pagination: void 0
  };
}
const GetLatestValidatorSetResponse = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestValidatorSetResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.blockHeight !== BigInt(0)) {
      writer.uint32(8).int64(message.blockHeight);
    }
    for (const v of message.validators) {
      Validator.encode(v, writer.uint32(18).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGetLatestValidatorSetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockHeight = reader.int64();
          break;
        case 2:
          message.validators.push(Validator.decode(reader, reader.uint32()));
          break;
        case 3:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseGetLatestValidatorSetResponse();
    message.blockHeight = object.blockHeight !== void 0 && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
    message.validators = object.validators?.map((e) => Validator.fromPartial(e)) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseGetLatestValidatorSetResponse();
    if (object.block_height !== void 0 && object.block_height !== null) {
      message.blockHeight = BigInt(object.block_height);
    }
    message.validators = object.validators?.map((e) => Validator.fromAmino(e)) || [];
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.block_height = message.blockHeight !== BigInt(0) ? message.blockHeight.toString() : void 0;
    if (message.validators) {
      obj.validators = message.validators.map((e) => e ? Validator.toAmino(e) : void 0);
    } else {
      obj.validators = message.validators;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return GetLatestValidatorSetResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GetLatestValidatorSetResponse",
      value: GetLatestValidatorSetResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return GetLatestValidatorSetResponse.decode(message.value);
  },
  toProto(message) {
    return GetLatestValidatorSetResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestValidatorSetResponse",
      value: GetLatestValidatorSetResponse.encode(message).finish()
    };
  }
};
function createBaseValidator() {
  return {
    address: "",
    pubKey: void 0,
    votingPower: BigInt(0),
    proposerPriority: BigInt(0)
  };
}
const Validator = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.Validator",
  encode(message, writer = BinaryWriter.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pubKey !== void 0) {
      Any.encode(message.pubKey, writer.uint32(18).fork()).ldelim();
    }
    if (message.votingPower !== BigInt(0)) {
      writer.uint32(24).int64(message.votingPower);
    }
    if (message.proposerPriority !== BigInt(0)) {
      writer.uint32(32).int64(message.proposerPriority);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.pubKey = Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.votingPower = reader.int64();
          break;
        case 4:
          message.proposerPriority = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseValidator();
    message.address = object.address ?? "";
    message.pubKey = object.pubKey !== void 0 && object.pubKey !== null ? Any.fromPartial(object.pubKey) : void 0;
    message.votingPower = object.votingPower !== void 0 && object.votingPower !== null ? BigInt(object.votingPower.toString()) : BigInt(0);
    message.proposerPriority = object.proposerPriority !== void 0 && object.proposerPriority !== null ? BigInt(object.proposerPriority.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseValidator();
    if (object.address !== void 0 && object.address !== null) {
      message.address = object.address;
    }
    if (object.pub_key !== void 0 && object.pub_key !== null) {
      message.pubKey = Any.fromAmino(object.pub_key);
    }
    if (object.voting_power !== void 0 && object.voting_power !== null) {
      message.votingPower = BigInt(object.voting_power);
    }
    if (object.proposer_priority !== void 0 && object.proposer_priority !== null) {
      message.proposerPriority = BigInt(object.proposer_priority);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.address = message.address === "" ? void 0 : message.address;
    obj.pub_key = message.pubKey ? Any.toAmino(message.pubKey) : void 0;
    obj.voting_power = message.votingPower !== BigInt(0) ? message.votingPower.toString() : void 0;
    obj.proposer_priority = message.proposerPriority !== BigInt(0) ? message.proposerPriority.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return Validator.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Validator",
      value: Validator.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return Validator.decode(message.value);
  },
  toProto(message) {
    return Validator.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.tendermint.v1beta1.Validator",
      value: Validator.encode(message).finish()
    };
  }
};
function createBaseGetBlockByHeightRequest() {
  return {
    height: BigInt(0)
  };
}
const GetBlockByHeightRequest = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetBlockByHeightRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).int64(message.height);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGetBlockByHeightRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseGetBlockByHeightRequest();
    message.height = object.height !== void 0 && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseGetBlockByHeightRequest();
    if (object.height !== void 0 && object.height !== null) {
      message.height = BigInt(object.height);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.height = message.height !== BigInt(0) ? message.height.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return GetBlockByHeightRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GetBlockByHeightRequest",
      value: GetBlockByHeightRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return GetBlockByHeightRequest.decode(message.value);
  },
  toProto(message) {
    return GetBlockByHeightRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.tendermint.v1beta1.GetBlockByHeightRequest",
      value: GetBlockByHeightRequest.encode(message).finish()
    };
  }
};
function createBaseGetBlockByHeightResponse() {
  return {
    blockId: void 0,
    block: void 0,
    sdkBlock: void 0
  };
}
const GetBlockByHeightResponse = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetBlockByHeightResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.blockId !== void 0) {
      BlockID.encode(message.blockId, writer.uint32(10).fork()).ldelim();
    }
    if (message.block !== void 0) {
      Block1.encode(message.block, writer.uint32(18).fork()).ldelim();
    }
    if (message.sdkBlock !== void 0) {
      Block2.encode(message.sdkBlock, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGetBlockByHeightResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockId = BlockID.decode(reader, reader.uint32());
          break;
        case 2:
          message.block = Block1.decode(reader, reader.uint32());
          break;
        case 3:
          message.sdkBlock = Block2.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseGetBlockByHeightResponse();
    message.blockId = object.blockId !== void 0 && object.blockId !== null ? BlockID.fromPartial(object.blockId) : void 0;
    message.block = object.block !== void 0 && object.block !== null ? Block1.fromPartial(object.block) : void 0;
    message.sdkBlock = object.sdkBlock !== void 0 && object.sdkBlock !== null ? Block2.fromPartial(object.sdkBlock) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseGetBlockByHeightResponse();
    if (object.block_id !== void 0 && object.block_id !== null) {
      message.blockId = BlockID.fromAmino(object.block_id);
    }
    if (object.block !== void 0 && object.block !== null) {
      message.block = Block1.fromAmino(object.block);
    }
    if (object.sdk_block !== void 0 && object.sdk_block !== null) {
      message.sdkBlock = Block2.fromAmino(object.sdk_block);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.block_id = message.blockId ? BlockID.toAmino(message.blockId) : void 0;
    obj.block = message.block ? Block1.toAmino(message.block) : void 0;
    obj.sdk_block = message.sdkBlock ? Block2.toAmino(message.sdkBlock) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return GetBlockByHeightResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GetBlockByHeightResponse",
      value: GetBlockByHeightResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return GetBlockByHeightResponse.decode(message.value);
  },
  toProto(message) {
    return GetBlockByHeightResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.tendermint.v1beta1.GetBlockByHeightResponse",
      value: GetBlockByHeightResponse.encode(message).finish()
    };
  }
};
function createBaseGetLatestBlockRequest() {
  return {};
}
const GetLatestBlockRequest = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestBlockRequest",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGetLatestBlockRequest();
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
  fromPartial(_) {
    const message = createBaseGetLatestBlockRequest();
    return message;
  },
  fromAmino(_) {
    const message = createBaseGetLatestBlockRequest();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return GetLatestBlockRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GetLatestBlockRequest",
      value: GetLatestBlockRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return GetLatestBlockRequest.decode(message.value);
  },
  toProto(message) {
    return GetLatestBlockRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestBlockRequest",
      value: GetLatestBlockRequest.encode(message).finish()
    };
  }
};
function createBaseGetLatestBlockResponse() {
  return {
    blockId: void 0,
    block: void 0,
    sdkBlock: void 0
  };
}
const GetLatestBlockResponse = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestBlockResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.blockId !== void 0) {
      BlockID.encode(message.blockId, writer.uint32(10).fork()).ldelim();
    }
    if (message.block !== void 0) {
      Block1.encode(message.block, writer.uint32(18).fork()).ldelim();
    }
    if (message.sdkBlock !== void 0) {
      Block2.encode(message.sdkBlock, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGetLatestBlockResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockId = BlockID.decode(reader, reader.uint32());
          break;
        case 2:
          message.block = Block1.decode(reader, reader.uint32());
          break;
        case 3:
          message.sdkBlock = Block2.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseGetLatestBlockResponse();
    message.blockId = object.blockId !== void 0 && object.blockId !== null ? BlockID.fromPartial(object.blockId) : void 0;
    message.block = object.block !== void 0 && object.block !== null ? Block1.fromPartial(object.block) : void 0;
    message.sdkBlock = object.sdkBlock !== void 0 && object.sdkBlock !== null ? Block2.fromPartial(object.sdkBlock) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseGetLatestBlockResponse();
    if (object.block_id !== void 0 && object.block_id !== null) {
      message.blockId = BlockID.fromAmino(object.block_id);
    }
    if (object.block !== void 0 && object.block !== null) {
      message.block = Block1.fromAmino(object.block);
    }
    if (object.sdk_block !== void 0 && object.sdk_block !== null) {
      message.sdkBlock = Block2.fromAmino(object.sdk_block);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.block_id = message.blockId ? BlockID.toAmino(message.blockId) : void 0;
    obj.block = message.block ? Block1.toAmino(message.block) : void 0;
    obj.sdk_block = message.sdkBlock ? Block2.toAmino(message.sdkBlock) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return GetLatestBlockResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GetLatestBlockResponse",
      value: GetLatestBlockResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return GetLatestBlockResponse.decode(message.value);
  },
  toProto(message) {
    return GetLatestBlockResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestBlockResponse",
      value: GetLatestBlockResponse.encode(message).finish()
    };
  }
};
function createBaseGetSyncingRequest() {
  return {};
}
const GetSyncingRequest = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetSyncingRequest",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGetSyncingRequest();
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
  fromPartial(_) {
    const message = createBaseGetSyncingRequest();
    return message;
  },
  fromAmino(_) {
    const message = createBaseGetSyncingRequest();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return GetSyncingRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GetSyncingRequest",
      value: GetSyncingRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return GetSyncingRequest.decode(message.value);
  },
  toProto(message) {
    return GetSyncingRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.tendermint.v1beta1.GetSyncingRequest",
      value: GetSyncingRequest.encode(message).finish()
    };
  }
};
function createBaseGetSyncingResponse() {
  return {
    syncing: false
  };
}
const GetSyncingResponse = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetSyncingResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.syncing === true) {
      writer.uint32(8).bool(message.syncing);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGetSyncingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.syncing = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseGetSyncingResponse();
    message.syncing = object.syncing ?? false;
    return message;
  },
  fromAmino(object) {
    const message = createBaseGetSyncingResponse();
    if (object.syncing !== void 0 && object.syncing !== null) {
      message.syncing = object.syncing;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.syncing = message.syncing === false ? void 0 : message.syncing;
    return obj;
  },
  fromAminoMsg(object) {
    return GetSyncingResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GetSyncingResponse",
      value: GetSyncingResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return GetSyncingResponse.decode(message.value);
  },
  toProto(message) {
    return GetSyncingResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.tendermint.v1beta1.GetSyncingResponse",
      value: GetSyncingResponse.encode(message).finish()
    };
  }
};
function createBaseGetNodeInfoRequest() {
  return {};
}
const GetNodeInfoRequest = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetNodeInfoRequest",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGetNodeInfoRequest();
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
  fromPartial(_) {
    const message = createBaseGetNodeInfoRequest();
    return message;
  },
  fromAmino(_) {
    const message = createBaseGetNodeInfoRequest();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return GetNodeInfoRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GetNodeInfoRequest",
      value: GetNodeInfoRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return GetNodeInfoRequest.decode(message.value);
  },
  toProto(message) {
    return GetNodeInfoRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.tendermint.v1beta1.GetNodeInfoRequest",
      value: GetNodeInfoRequest.encode(message).finish()
    };
  }
};
function createBaseGetNodeInfoResponse() {
  return {
    defaultNodeInfo: void 0,
    applicationVersion: void 0
  };
}
const GetNodeInfoResponse = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetNodeInfoResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.defaultNodeInfo !== void 0) {
      DefaultNodeInfo.encode(message.defaultNodeInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.applicationVersion !== void 0) {
      VersionInfo.encode(message.applicationVersion, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGetNodeInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.defaultNodeInfo = DefaultNodeInfo.decode(reader, reader.uint32());
          break;
        case 2:
          message.applicationVersion = VersionInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseGetNodeInfoResponse();
    message.defaultNodeInfo = object.defaultNodeInfo !== void 0 && object.defaultNodeInfo !== null ? DefaultNodeInfo.fromPartial(object.defaultNodeInfo) : void 0;
    message.applicationVersion = object.applicationVersion !== void 0 && object.applicationVersion !== null ? VersionInfo.fromPartial(object.applicationVersion) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseGetNodeInfoResponse();
    if (object.default_node_info !== void 0 && object.default_node_info !== null) {
      message.defaultNodeInfo = DefaultNodeInfo.fromAmino(object.default_node_info);
    }
    if (object.application_version !== void 0 && object.application_version !== null) {
      message.applicationVersion = VersionInfo.fromAmino(object.application_version);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.default_node_info = message.defaultNodeInfo ? DefaultNodeInfo.toAmino(message.defaultNodeInfo) : void 0;
    obj.application_version = message.applicationVersion ? VersionInfo.toAmino(message.applicationVersion) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return GetNodeInfoResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GetNodeInfoResponse",
      value: GetNodeInfoResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return GetNodeInfoResponse.decode(message.value);
  },
  toProto(message) {
    return GetNodeInfoResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.tendermint.v1beta1.GetNodeInfoResponse",
      value: GetNodeInfoResponse.encode(message).finish()
    };
  }
};
function createBaseVersionInfo() {
  return {
    name: "",
    appName: "",
    version: "",
    gitCommit: "",
    buildTags: "",
    goVersion: "",
    buildDeps: [],
    cosmosSdkVersion: ""
  };
}
const VersionInfo = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.VersionInfo",
  encode(message, writer = BinaryWriter.create()) {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.appName !== "") {
      writer.uint32(18).string(message.appName);
    }
    if (message.version !== "") {
      writer.uint32(26).string(message.version);
    }
    if (message.gitCommit !== "") {
      writer.uint32(34).string(message.gitCommit);
    }
    if (message.buildTags !== "") {
      writer.uint32(42).string(message.buildTags);
    }
    if (message.goVersion !== "") {
      writer.uint32(50).string(message.goVersion);
    }
    for (const v of message.buildDeps) {
      Module.encode(v, writer.uint32(58).fork()).ldelim();
    }
    if (message.cosmosSdkVersion !== "") {
      writer.uint32(66).string(message.cosmosSdkVersion);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseVersionInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.appName = reader.string();
          break;
        case 3:
          message.version = reader.string();
          break;
        case 4:
          message.gitCommit = reader.string();
          break;
        case 5:
          message.buildTags = reader.string();
          break;
        case 6:
          message.goVersion = reader.string();
          break;
        case 7:
          message.buildDeps.push(Module.decode(reader, reader.uint32()));
          break;
        case 8:
          message.cosmosSdkVersion = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseVersionInfo();
    message.name = object.name ?? "";
    message.appName = object.appName ?? "";
    message.version = object.version ?? "";
    message.gitCommit = object.gitCommit ?? "";
    message.buildTags = object.buildTags ?? "";
    message.goVersion = object.goVersion ?? "";
    message.buildDeps = object.buildDeps?.map((e) => Module.fromPartial(e)) || [];
    message.cosmosSdkVersion = object.cosmosSdkVersion ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseVersionInfo();
    if (object.name !== void 0 && object.name !== null) {
      message.name = object.name;
    }
    if (object.app_name !== void 0 && object.app_name !== null) {
      message.appName = object.app_name;
    }
    if (object.version !== void 0 && object.version !== null) {
      message.version = object.version;
    }
    if (object.git_commit !== void 0 && object.git_commit !== null) {
      message.gitCommit = object.git_commit;
    }
    if (object.build_tags !== void 0 && object.build_tags !== null) {
      message.buildTags = object.build_tags;
    }
    if (object.go_version !== void 0 && object.go_version !== null) {
      message.goVersion = object.go_version;
    }
    message.buildDeps = object.build_deps?.map((e) => Module.fromAmino(e)) || [];
    if (object.cosmos_sdk_version !== void 0 && object.cosmos_sdk_version !== null) {
      message.cosmosSdkVersion = object.cosmos_sdk_version;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.name = message.name === "" ? void 0 : message.name;
    obj.app_name = message.appName === "" ? void 0 : message.appName;
    obj.version = message.version === "" ? void 0 : message.version;
    obj.git_commit = message.gitCommit === "" ? void 0 : message.gitCommit;
    obj.build_tags = message.buildTags === "" ? void 0 : message.buildTags;
    obj.go_version = message.goVersion === "" ? void 0 : message.goVersion;
    if (message.buildDeps) {
      obj.build_deps = message.buildDeps.map((e) => e ? Module.toAmino(e) : void 0);
    } else {
      obj.build_deps = message.buildDeps;
    }
    obj.cosmos_sdk_version = message.cosmosSdkVersion === "" ? void 0 : message.cosmosSdkVersion;
    return obj;
  },
  fromAminoMsg(object) {
    return VersionInfo.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/VersionInfo",
      value: VersionInfo.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return VersionInfo.decode(message.value);
  },
  toProto(message) {
    return VersionInfo.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.tendermint.v1beta1.VersionInfo",
      value: VersionInfo.encode(message).finish()
    };
  }
};
function createBaseModule() {
  return {
    path: "",
    version: "",
    sum: ""
  };
}
const Module = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.Module",
  encode(message, writer = BinaryWriter.create()) {
    if (message.path !== "") {
      writer.uint32(10).string(message.path);
    }
    if (message.version !== "") {
      writer.uint32(18).string(message.version);
    }
    if (message.sum !== "") {
      writer.uint32(26).string(message.sum);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseModule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.path = reader.string();
          break;
        case 2:
          message.version = reader.string();
          break;
        case 3:
          message.sum = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseModule();
    message.path = object.path ?? "";
    message.version = object.version ?? "";
    message.sum = object.sum ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseModule();
    if (object.path !== void 0 && object.path !== null) {
      message.path = object.path;
    }
    if (object.version !== void 0 && object.version !== null) {
      message.version = object.version;
    }
    if (object.sum !== void 0 && object.sum !== null) {
      message.sum = object.sum;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.path = message.path === "" ? void 0 : message.path;
    obj.version = message.version === "" ? void 0 : message.version;
    obj.sum = message.sum === "" ? void 0 : message.sum;
    return obj;
  },
  fromAminoMsg(object) {
    return Module.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Module",
      value: Module.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return Module.decode(message.value);
  },
  toProto(message) {
    return Module.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.tendermint.v1beta1.Module",
      value: Module.encode(message).finish()
    };
  }
};
function createBaseABCIQueryRequest() {
  return {
    data: new Uint8Array(),
    path: "",
    height: BigInt(0),
    prove: false
  };
}
const ABCIQueryRequest = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.ABCIQueryRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    if (message.path !== "") {
      writer.uint32(18).string(message.path);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(24).int64(message.height);
    }
    if (message.prove === true) {
      writer.uint32(32).bool(message.prove);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseABCIQueryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        case 2:
          message.path = reader.string();
          break;
        case 3:
          message.height = reader.int64();
          break;
        case 4:
          message.prove = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseABCIQueryRequest();
    message.data = object.data ?? new Uint8Array();
    message.path = object.path ?? "";
    message.height = object.height !== void 0 && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.prove = object.prove ?? false;
    return message;
  },
  fromAmino(object) {
    const message = createBaseABCIQueryRequest();
    if (object.data !== void 0 && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    if (object.path !== void 0 && object.path !== null) {
      message.path = object.path;
    }
    if (object.height !== void 0 && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.prove !== void 0 && object.prove !== null) {
      message.prove = object.prove;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.data = message.data ? base64FromBytes(message.data) : void 0;
    obj.path = message.path === "" ? void 0 : message.path;
    obj.height = message.height !== BigInt(0) ? message.height.toString() : void 0;
    obj.prove = message.prove === false ? void 0 : message.prove;
    return obj;
  },
  fromAminoMsg(object) {
    return ABCIQueryRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/ABCIQueryRequest",
      value: ABCIQueryRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return ABCIQueryRequest.decode(message.value);
  },
  toProto(message) {
    return ABCIQueryRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.tendermint.v1beta1.ABCIQueryRequest",
      value: ABCIQueryRequest.encode(message).finish()
    };
  }
};
function createBaseABCIQueryResponse() {
  return {
    code: 0,
    log: "",
    info: "",
    index: BigInt(0),
    key: new Uint8Array(),
    value: new Uint8Array(),
    proofOps: void 0,
    height: BigInt(0),
    codespace: ""
  };
}
const ABCIQueryResponse = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.ABCIQueryResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.code !== 0) {
      writer.uint32(8).uint32(message.code);
    }
    if (message.log !== "") {
      writer.uint32(26).string(message.log);
    }
    if (message.info !== "") {
      writer.uint32(34).string(message.info);
    }
    if (message.index !== BigInt(0)) {
      writer.uint32(40).int64(message.index);
    }
    if (message.key.length !== 0) {
      writer.uint32(50).bytes(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(58).bytes(message.value);
    }
    if (message.proofOps !== void 0) {
      ProofOps.encode(message.proofOps, writer.uint32(66).fork()).ldelim();
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(72).int64(message.height);
    }
    if (message.codespace !== "") {
      writer.uint32(82).string(message.codespace);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseABCIQueryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.uint32();
          break;
        case 3:
          message.log = reader.string();
          break;
        case 4:
          message.info = reader.string();
          break;
        case 5:
          message.index = reader.int64();
          break;
        case 6:
          message.key = reader.bytes();
          break;
        case 7:
          message.value = reader.bytes();
          break;
        case 8:
          message.proofOps = ProofOps.decode(reader, reader.uint32());
          break;
        case 9:
          message.height = reader.int64();
          break;
        case 10:
          message.codespace = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseABCIQueryResponse();
    message.code = object.code ?? 0;
    message.log = object.log ?? "";
    message.info = object.info ?? "";
    message.index = object.index !== void 0 && object.index !== null ? BigInt(object.index.toString()) : BigInt(0);
    message.key = object.key ?? new Uint8Array();
    message.value = object.value ?? new Uint8Array();
    message.proofOps = object.proofOps !== void 0 && object.proofOps !== null ? ProofOps.fromPartial(object.proofOps) : void 0;
    message.height = object.height !== void 0 && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.codespace = object.codespace ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseABCIQueryResponse();
    if (object.code !== void 0 && object.code !== null) {
      message.code = object.code;
    }
    if (object.log !== void 0 && object.log !== null) {
      message.log = object.log;
    }
    if (object.info !== void 0 && object.info !== null) {
      message.info = object.info;
    }
    if (object.index !== void 0 && object.index !== null) {
      message.index = BigInt(object.index);
    }
    if (object.key !== void 0 && object.key !== null) {
      message.key = bytesFromBase64(object.key);
    }
    if (object.value !== void 0 && object.value !== null) {
      message.value = bytesFromBase64(object.value);
    }
    if (object.proof_ops !== void 0 && object.proof_ops !== null) {
      message.proofOps = ProofOps.fromAmino(object.proof_ops);
    }
    if (object.height !== void 0 && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.codespace !== void 0 && object.codespace !== null) {
      message.codespace = object.codespace;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.code = message.code === 0 ? void 0 : message.code;
    obj.log = message.log === "" ? void 0 : message.log;
    obj.info = message.info === "" ? void 0 : message.info;
    obj.index = message.index !== BigInt(0) ? message.index.toString() : void 0;
    obj.key = message.key ? base64FromBytes(message.key) : void 0;
    obj.value = message.value ? base64FromBytes(message.value) : void 0;
    obj.proof_ops = message.proofOps ? ProofOps.toAmino(message.proofOps) : void 0;
    obj.height = message.height !== BigInt(0) ? message.height.toString() : void 0;
    obj.codespace = message.codespace === "" ? void 0 : message.codespace;
    return obj;
  },
  fromAminoMsg(object) {
    return ABCIQueryResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/ABCIQueryResponse",
      value: ABCIQueryResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return ABCIQueryResponse.decode(message.value);
  },
  toProto(message) {
    return ABCIQueryResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.tendermint.v1beta1.ABCIQueryResponse",
      value: ABCIQueryResponse.encode(message).finish()
    };
  }
};
function createBaseProofOp() {
  return {
    type: "",
    key: new Uint8Array(),
    data: new Uint8Array()
  };
}
const ProofOp = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.ProofOp",
  encode(message, writer = BinaryWriter.create()) {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.key.length !== 0) {
      writer.uint32(18).bytes(message.key);
    }
    if (message.data.length !== 0) {
      writer.uint32(26).bytes(message.data);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseProofOp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.key = reader.bytes();
          break;
        case 3:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseProofOp();
    message.type = object.type ?? "";
    message.key = object.key ?? new Uint8Array();
    message.data = object.data ?? new Uint8Array();
    return message;
  },
  fromAmino(object) {
    const message = createBaseProofOp();
    if (object.type !== void 0 && object.type !== null) {
      message.type = object.type;
    }
    if (object.key !== void 0 && object.key !== null) {
      message.key = bytesFromBase64(object.key);
    }
    if (object.data !== void 0 && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.type = message.type === "" ? void 0 : message.type;
    obj.key = message.key ? base64FromBytes(message.key) : void 0;
    obj.data = message.data ? base64FromBytes(message.data) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return ProofOp.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/ProofOp",
      value: ProofOp.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return ProofOp.decode(message.value);
  },
  toProto(message) {
    return ProofOp.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.tendermint.v1beta1.ProofOp",
      value: ProofOp.encode(message).finish()
    };
  }
};
function createBaseProofOps() {
  return {
    ops: []
  };
}
const ProofOps = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.ProofOps",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.ops) {
      ProofOp.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseProofOps();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ops.push(ProofOp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseProofOps();
    message.ops = object.ops?.map((e) => ProofOp.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseProofOps();
    message.ops = object.ops?.map((e) => ProofOp.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.ops) {
      obj.ops = message.ops.map((e) => e ? ProofOp.toAmino(e) : void 0);
    } else {
      obj.ops = message.ops;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return ProofOps.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/ProofOps",
      value: ProofOps.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return ProofOps.decode(message.value);
  },
  toProto(message) {
    return ProofOps.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.tendermint.v1beta1.ProofOps",
      value: ProofOps.encode(message).finish()
    };
  }
};
export {
  ABCIQueryRequest,
  ABCIQueryResponse,
  GetBlockByHeightRequest,
  GetBlockByHeightResponse,
  GetLatestBlockRequest,
  GetLatestBlockResponse,
  GetLatestValidatorSetRequest,
  GetLatestValidatorSetResponse,
  GetNodeInfoRequest,
  GetNodeInfoResponse,
  GetSyncingRequest,
  GetSyncingResponse,
  GetValidatorSetByHeightRequest,
  GetValidatorSetByHeightResponse,
  Module,
  ProofOp,
  ProofOps,
  Validator,
  VersionInfo
};
