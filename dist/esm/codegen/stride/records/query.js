import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Params } from "./params";
import { DepositRecord, UserRedemptionRecord, EpochUnbondingRecord, LSMTokenDeposit } from "./records";
import { BinaryReader, BinaryWriter } from "../../binary";
function createBaseQueryParamsRequest() {
  return {};
}
const QueryParamsRequest = {
  typeUrl: "/stride.records.QueryParamsRequest",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_) {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message) {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.records.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse() {
  return {
    params: Params.fromPartial({})
  };
}
const QueryParamsResponse = {
  typeUrl: "/stride.records.QueryParamsResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.params !== void 0) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== void 0 && object.params !== null ? Params.fromPartial(object.params) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryParamsResponse();
    if (object.params !== void 0 && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.params = message.params ? Params.toAmino(message.params) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message) {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.records.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetDepositRecordRequest() {
  return {
    id: BigInt(0)
  };
}
const QueryGetDepositRecordRequest = {
  typeUrl: "/stride.records.QueryGetDepositRecordRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryGetDepositRecordRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryGetDepositRecordRequest();
    message.id = object.id !== void 0 && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryGetDepositRecordRequest();
    if (object.id !== void 0 && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryGetDepositRecordRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryGetDepositRecordRequest.decode(message.value);
  },
  toProto(message) {
    return QueryGetDepositRecordRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.records.QueryGetDepositRecordRequest",
      value: QueryGetDepositRecordRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetDepositRecordResponse() {
  return {
    depositRecord: DepositRecord.fromPartial({})
  };
}
const QueryGetDepositRecordResponse = {
  typeUrl: "/stride.records.QueryGetDepositRecordResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.depositRecord !== void 0) {
      DepositRecord.encode(message.depositRecord, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryGetDepositRecordResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.depositRecord = DepositRecord.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryGetDepositRecordResponse();
    message.depositRecord = object.depositRecord !== void 0 && object.depositRecord !== null ? DepositRecord.fromPartial(object.depositRecord) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryGetDepositRecordResponse();
    if (object.deposit_record !== void 0 && object.deposit_record !== null) {
      message.depositRecord = DepositRecord.fromAmino(object.deposit_record);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.deposit_record = message.depositRecord ? DepositRecord.toAmino(message.depositRecord) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryGetDepositRecordResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryGetDepositRecordResponse.decode(message.value);
  },
  toProto(message) {
    return QueryGetDepositRecordResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.records.QueryGetDepositRecordResponse",
      value: QueryGetDepositRecordResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllDepositRecordRequest() {
  return {
    pagination: void 0
  };
}
const QueryAllDepositRecordRequest = {
  typeUrl: "/stride.records.QueryAllDepositRecordRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.pagination !== void 0) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryAllDepositRecordRequest();
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
    const message = createBaseQueryAllDepositRecordRequest();
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryAllDepositRecordRequest();
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
    return QueryAllDepositRecordRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryAllDepositRecordRequest.decode(message.value);
  },
  toProto(message) {
    return QueryAllDepositRecordRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.records.QueryAllDepositRecordRequest",
      value: QueryAllDepositRecordRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllDepositRecordResponse() {
  return {
    depositRecord: [],
    pagination: void 0
  };
}
const QueryAllDepositRecordResponse = {
  typeUrl: "/stride.records.QueryAllDepositRecordResponse",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.depositRecord) {
      DepositRecord.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryAllDepositRecordResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.depositRecord.push(DepositRecord.decode(reader, reader.uint32()));
          break;
        case 2:
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
    const message = createBaseQueryAllDepositRecordResponse();
    message.depositRecord = object.depositRecord?.map((e) => DepositRecord.fromPartial(e)) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryAllDepositRecordResponse();
    message.depositRecord = object.deposit_record?.map((e) => DepositRecord.fromAmino(e)) || [];
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.depositRecord) {
      obj.deposit_record = message.depositRecord.map((e) => e ? DepositRecord.toAmino(e) : void 0);
    } else {
      obj.deposit_record = message.depositRecord;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryAllDepositRecordResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryAllDepositRecordResponse.decode(message.value);
  },
  toProto(message) {
    return QueryAllDepositRecordResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.records.QueryAllDepositRecordResponse",
      value: QueryAllDepositRecordResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDepositRecordByHostRequest() {
  return {
    hostZoneId: ""
  };
}
const QueryDepositRecordByHostRequest = {
  typeUrl: "/stride.records.QueryDepositRecordByHostRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.hostZoneId !== "") {
      writer.uint32(10).string(message.hostZoneId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositRecordByHostRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hostZoneId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryDepositRecordByHostRequest();
    message.hostZoneId = object.hostZoneId ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryDepositRecordByHostRequest();
    if (object.host_zone_id !== void 0 && object.host_zone_id !== null) {
      message.hostZoneId = object.host_zone_id;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.host_zone_id = message.hostZoneId === "" ? void 0 : message.hostZoneId;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryDepositRecordByHostRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryDepositRecordByHostRequest.decode(message.value);
  },
  toProto(message) {
    return QueryDepositRecordByHostRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.records.QueryDepositRecordByHostRequest",
      value: QueryDepositRecordByHostRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDepositRecordByHostResponse() {
  return {
    depositRecord: []
  };
}
const QueryDepositRecordByHostResponse = {
  typeUrl: "/stride.records.QueryDepositRecordByHostResponse",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.depositRecord) {
      DepositRecord.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositRecordByHostResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.depositRecord.push(DepositRecord.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryDepositRecordByHostResponse();
    message.depositRecord = object.depositRecord?.map((e) => DepositRecord.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryDepositRecordByHostResponse();
    message.depositRecord = object.deposit_record?.map((e) => DepositRecord.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.depositRecord) {
      obj.deposit_record = message.depositRecord.map((e) => e ? DepositRecord.toAmino(e) : void 0);
    } else {
      obj.deposit_record = message.depositRecord;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return QueryDepositRecordByHostResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryDepositRecordByHostResponse.decode(message.value);
  },
  toProto(message) {
    return QueryDepositRecordByHostResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.records.QueryDepositRecordByHostResponse",
      value: QueryDepositRecordByHostResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetUserRedemptionRecordRequest() {
  return {
    id: ""
  };
}
const QueryGetUserRedemptionRecordRequest = {
  typeUrl: "/stride.records.QueryGetUserRedemptionRecordRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryGetUserRedemptionRecordRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryGetUserRedemptionRecordRequest();
    message.id = object.id ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryGetUserRedemptionRecordRequest();
    if (object.id !== void 0 && object.id !== null) {
      message.id = object.id;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.id = message.id === "" ? void 0 : message.id;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryGetUserRedemptionRecordRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryGetUserRedemptionRecordRequest.decode(message.value);
  },
  toProto(message) {
    return QueryGetUserRedemptionRecordRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.records.QueryGetUserRedemptionRecordRequest",
      value: QueryGetUserRedemptionRecordRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetUserRedemptionRecordResponse() {
  return {
    userRedemptionRecord: UserRedemptionRecord.fromPartial({})
  };
}
const QueryGetUserRedemptionRecordResponse = {
  typeUrl: "/stride.records.QueryGetUserRedemptionRecordResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.userRedemptionRecord !== void 0) {
      UserRedemptionRecord.encode(message.userRedemptionRecord, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryGetUserRedemptionRecordResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userRedemptionRecord = UserRedemptionRecord.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryGetUserRedemptionRecordResponse();
    message.userRedemptionRecord = object.userRedemptionRecord !== void 0 && object.userRedemptionRecord !== null ? UserRedemptionRecord.fromPartial(object.userRedemptionRecord) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryGetUserRedemptionRecordResponse();
    if (object.user_redemption_record !== void 0 && object.user_redemption_record !== null) {
      message.userRedemptionRecord = UserRedemptionRecord.fromAmino(object.user_redemption_record);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.user_redemption_record = message.userRedemptionRecord ? UserRedemptionRecord.toAmino(message.userRedemptionRecord) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryGetUserRedemptionRecordResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryGetUserRedemptionRecordResponse.decode(message.value);
  },
  toProto(message) {
    return QueryGetUserRedemptionRecordResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.records.QueryGetUserRedemptionRecordResponse",
      value: QueryGetUserRedemptionRecordResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllUserRedemptionRecordRequest() {
  return {
    pagination: void 0
  };
}
const QueryAllUserRedemptionRecordRequest = {
  typeUrl: "/stride.records.QueryAllUserRedemptionRecordRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.pagination !== void 0) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryAllUserRedemptionRecordRequest();
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
    const message = createBaseQueryAllUserRedemptionRecordRequest();
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryAllUserRedemptionRecordRequest();
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
    return QueryAllUserRedemptionRecordRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryAllUserRedemptionRecordRequest.decode(message.value);
  },
  toProto(message) {
    return QueryAllUserRedemptionRecordRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.records.QueryAllUserRedemptionRecordRequest",
      value: QueryAllUserRedemptionRecordRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllUserRedemptionRecordResponse() {
  return {
    userRedemptionRecord: [],
    pagination: void 0
  };
}
const QueryAllUserRedemptionRecordResponse = {
  typeUrl: "/stride.records.QueryAllUserRedemptionRecordResponse",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.userRedemptionRecord) {
      UserRedemptionRecord.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryAllUserRedemptionRecordResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userRedemptionRecord.push(UserRedemptionRecord.decode(reader, reader.uint32()));
          break;
        case 2:
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
    const message = createBaseQueryAllUserRedemptionRecordResponse();
    message.userRedemptionRecord = object.userRedemptionRecord?.map((e) => UserRedemptionRecord.fromPartial(e)) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryAllUserRedemptionRecordResponse();
    message.userRedemptionRecord = object.user_redemption_record?.map((e) => UserRedemptionRecord.fromAmino(e)) || [];
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.userRedemptionRecord) {
      obj.user_redemption_record = message.userRedemptionRecord.map((e) => e ? UserRedemptionRecord.toAmino(e) : void 0);
    } else {
      obj.user_redemption_record = message.userRedemptionRecord;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryAllUserRedemptionRecordResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryAllUserRedemptionRecordResponse.decode(message.value);
  },
  toProto(message) {
    return QueryAllUserRedemptionRecordResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.records.QueryAllUserRedemptionRecordResponse",
      value: QueryAllUserRedemptionRecordResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllUserRedemptionRecordForUserRequest() {
  return {
    chainId: "",
    day: BigInt(0),
    address: "",
    limit: BigInt(0),
    pagination: void 0
  };
}
const QueryAllUserRedemptionRecordForUserRequest = {
  typeUrl: "/stride.records.QueryAllUserRedemptionRecordForUserRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (message.day !== BigInt(0)) {
      writer.uint32(16).uint64(message.day);
    }
    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }
    if (message.limit !== BigInt(0)) {
      writer.uint32(32).uint64(message.limit);
    }
    if (message.pagination !== void 0) {
      PageRequest.encode(message.pagination, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryAllUserRedemptionRecordForUserRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        case 2:
          message.day = reader.uint64();
          break;
        case 3:
          message.address = reader.string();
          break;
        case 4:
          message.limit = reader.uint64();
          break;
        case 5:
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
    const message = createBaseQueryAllUserRedemptionRecordForUserRequest();
    message.chainId = object.chainId ?? "";
    message.day = object.day !== void 0 && object.day !== null ? BigInt(object.day.toString()) : BigInt(0);
    message.address = object.address ?? "";
    message.limit = object.limit !== void 0 && object.limit !== null ? BigInt(object.limit.toString()) : BigInt(0);
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryAllUserRedemptionRecordForUserRequest();
    if (object.chain_id !== void 0 && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    if (object.day !== void 0 && object.day !== null) {
      message.day = BigInt(object.day);
    }
    if (object.address !== void 0 && object.address !== null) {
      message.address = object.address;
    }
    if (object.limit !== void 0 && object.limit !== null) {
      message.limit = BigInt(object.limit);
    }
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.chain_id = message.chainId === "" ? void 0 : message.chainId;
    obj.day = message.day !== BigInt(0) ? message.day?.toString() : void 0;
    obj.address = message.address === "" ? void 0 : message.address;
    obj.limit = message.limit !== BigInt(0) ? message.limit?.toString() : void 0;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryAllUserRedemptionRecordForUserRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryAllUserRedemptionRecordForUserRequest.decode(message.value);
  },
  toProto(message) {
    return QueryAllUserRedemptionRecordForUserRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.records.QueryAllUserRedemptionRecordForUserRequest",
      value: QueryAllUserRedemptionRecordForUserRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllUserRedemptionRecordForUserResponse() {
  return {
    userRedemptionRecord: [],
    pagination: void 0
  };
}
const QueryAllUserRedemptionRecordForUserResponse = {
  typeUrl: "/stride.records.QueryAllUserRedemptionRecordForUserResponse",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.userRedemptionRecord) {
      UserRedemptionRecord.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryAllUserRedemptionRecordForUserResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userRedemptionRecord.push(UserRedemptionRecord.decode(reader, reader.uint32()));
          break;
        case 2:
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
    const message = createBaseQueryAllUserRedemptionRecordForUserResponse();
    message.userRedemptionRecord = object.userRedemptionRecord?.map((e) => UserRedemptionRecord.fromPartial(e)) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryAllUserRedemptionRecordForUserResponse();
    message.userRedemptionRecord = object.user_redemption_record?.map((e) => UserRedemptionRecord.fromAmino(e)) || [];
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.userRedemptionRecord) {
      obj.user_redemption_record = message.userRedemptionRecord.map((e) => e ? UserRedemptionRecord.toAmino(e) : void 0);
    } else {
      obj.user_redemption_record = message.userRedemptionRecord;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryAllUserRedemptionRecordForUserResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryAllUserRedemptionRecordForUserResponse.decode(message.value);
  },
  toProto(message) {
    return QueryAllUserRedemptionRecordForUserResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.records.QueryAllUserRedemptionRecordForUserResponse",
      value: QueryAllUserRedemptionRecordForUserResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetEpochUnbondingRecordRequest() {
  return {
    epochNumber: BigInt(0)
  };
}
const QueryGetEpochUnbondingRecordRequest = {
  typeUrl: "/stride.records.QueryGetEpochUnbondingRecordRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.epochNumber !== BigInt(0)) {
      writer.uint32(8).uint64(message.epochNumber);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryGetEpochUnbondingRecordRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochNumber = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryGetEpochUnbondingRecordRequest();
    message.epochNumber = object.epochNumber !== void 0 && object.epochNumber !== null ? BigInt(object.epochNumber.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryGetEpochUnbondingRecordRequest();
    if (object.epoch_number !== void 0 && object.epoch_number !== null) {
      message.epochNumber = BigInt(object.epoch_number);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.epoch_number = message.epochNumber !== BigInt(0) ? message.epochNumber?.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryGetEpochUnbondingRecordRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryGetEpochUnbondingRecordRequest.decode(message.value);
  },
  toProto(message) {
    return QueryGetEpochUnbondingRecordRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.records.QueryGetEpochUnbondingRecordRequest",
      value: QueryGetEpochUnbondingRecordRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetEpochUnbondingRecordResponse() {
  return {
    epochUnbondingRecord: EpochUnbondingRecord.fromPartial({})
  };
}
const QueryGetEpochUnbondingRecordResponse = {
  typeUrl: "/stride.records.QueryGetEpochUnbondingRecordResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.epochUnbondingRecord !== void 0) {
      EpochUnbondingRecord.encode(message.epochUnbondingRecord, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryGetEpochUnbondingRecordResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochUnbondingRecord = EpochUnbondingRecord.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryGetEpochUnbondingRecordResponse();
    message.epochUnbondingRecord = object.epochUnbondingRecord !== void 0 && object.epochUnbondingRecord !== null ? EpochUnbondingRecord.fromPartial(object.epochUnbondingRecord) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryGetEpochUnbondingRecordResponse();
    if (object.epoch_unbonding_record !== void 0 && object.epoch_unbonding_record !== null) {
      message.epochUnbondingRecord = EpochUnbondingRecord.fromAmino(object.epoch_unbonding_record);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.epoch_unbonding_record = message.epochUnbondingRecord ? EpochUnbondingRecord.toAmino(message.epochUnbondingRecord) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryGetEpochUnbondingRecordResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryGetEpochUnbondingRecordResponse.decode(message.value);
  },
  toProto(message) {
    return QueryGetEpochUnbondingRecordResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.records.QueryGetEpochUnbondingRecordResponse",
      value: QueryGetEpochUnbondingRecordResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllEpochUnbondingRecordRequest() {
  return {
    pagination: void 0
  };
}
const QueryAllEpochUnbondingRecordRequest = {
  typeUrl: "/stride.records.QueryAllEpochUnbondingRecordRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.pagination !== void 0) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryAllEpochUnbondingRecordRequest();
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
    const message = createBaseQueryAllEpochUnbondingRecordRequest();
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryAllEpochUnbondingRecordRequest();
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
    return QueryAllEpochUnbondingRecordRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryAllEpochUnbondingRecordRequest.decode(message.value);
  },
  toProto(message) {
    return QueryAllEpochUnbondingRecordRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.records.QueryAllEpochUnbondingRecordRequest",
      value: QueryAllEpochUnbondingRecordRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllEpochUnbondingRecordResponse() {
  return {
    epochUnbondingRecord: [],
    pagination: void 0
  };
}
const QueryAllEpochUnbondingRecordResponse = {
  typeUrl: "/stride.records.QueryAllEpochUnbondingRecordResponse",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.epochUnbondingRecord) {
      EpochUnbondingRecord.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryAllEpochUnbondingRecordResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochUnbondingRecord.push(EpochUnbondingRecord.decode(reader, reader.uint32()));
          break;
        case 2:
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
    const message = createBaseQueryAllEpochUnbondingRecordResponse();
    message.epochUnbondingRecord = object.epochUnbondingRecord?.map((e) => EpochUnbondingRecord.fromPartial(e)) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryAllEpochUnbondingRecordResponse();
    message.epochUnbondingRecord = object.epoch_unbonding_record?.map((e) => EpochUnbondingRecord.fromAmino(e)) || [];
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.epochUnbondingRecord) {
      obj.epoch_unbonding_record = message.epochUnbondingRecord.map((e) => e ? EpochUnbondingRecord.toAmino(e) : void 0);
    } else {
      obj.epoch_unbonding_record = message.epochUnbondingRecord;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryAllEpochUnbondingRecordResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryAllEpochUnbondingRecordResponse.decode(message.value);
  },
  toProto(message) {
    return QueryAllEpochUnbondingRecordResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.records.QueryAllEpochUnbondingRecordResponse",
      value: QueryAllEpochUnbondingRecordResponse.encode(message).finish()
    };
  }
};
function createBaseQueryLSMDepositRequest() {
  return {
    chainId: "",
    denom: ""
  };
}
const QueryLSMDepositRequest = {
  typeUrl: "/stride.records.QueryLSMDepositRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryLSMDepositRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryLSMDepositRequest();
    message.chainId = object.chainId ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryLSMDepositRequest();
    if (object.chain_id !== void 0 && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    if (object.denom !== void 0 && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.chain_id = message.chainId === "" ? void 0 : message.chainId;
    obj.denom = message.denom === "" ? void 0 : message.denom;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryLSMDepositRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryLSMDepositRequest.decode(message.value);
  },
  toProto(message) {
    return QueryLSMDepositRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.records.QueryLSMDepositRequest",
      value: QueryLSMDepositRequest.encode(message).finish()
    };
  }
};
function createBaseQueryLSMDepositResponse() {
  return {
    deposit: LSMTokenDeposit.fromPartial({})
  };
}
const QueryLSMDepositResponse = {
  typeUrl: "/stride.records.QueryLSMDepositResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.deposit !== void 0) {
      LSMTokenDeposit.encode(message.deposit, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryLSMDepositResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deposit = LSMTokenDeposit.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryLSMDepositResponse();
    message.deposit = object.deposit !== void 0 && object.deposit !== null ? LSMTokenDeposit.fromPartial(object.deposit) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryLSMDepositResponse();
    if (object.deposit !== void 0 && object.deposit !== null) {
      message.deposit = LSMTokenDeposit.fromAmino(object.deposit);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.deposit = message.deposit ? LSMTokenDeposit.toAmino(message.deposit) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryLSMDepositResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryLSMDepositResponse.decode(message.value);
  },
  toProto(message) {
    return QueryLSMDepositResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.records.QueryLSMDepositResponse",
      value: QueryLSMDepositResponse.encode(message).finish()
    };
  }
};
function createBaseQueryLSMDepositsRequest() {
  return {
    chainId: "",
    validatorAddress: "",
    status: ""
  };
}
const QueryLSMDepositsRequest = {
  typeUrl: "/stride.records.QueryLSMDepositsRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.status !== "") {
      writer.uint32(26).string(message.status);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryLSMDepositsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        case 3:
          message.status = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryLSMDepositsRequest();
    message.chainId = object.chainId ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    message.status = object.status ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryLSMDepositsRequest();
    if (object.chain_id !== void 0 && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    if (object.validator_address !== void 0 && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    if (object.status !== void 0 && object.status !== null) {
      message.status = object.status;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.chain_id = message.chainId === "" ? void 0 : message.chainId;
    obj.validator_address = message.validatorAddress === "" ? void 0 : message.validatorAddress;
    obj.status = message.status === "" ? void 0 : message.status;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryLSMDepositsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryLSMDepositsRequest.decode(message.value);
  },
  toProto(message) {
    return QueryLSMDepositsRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.records.QueryLSMDepositsRequest",
      value: QueryLSMDepositsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryLSMDepositsResponse() {
  return {
    deposits: []
  };
}
const QueryLSMDepositsResponse = {
  typeUrl: "/stride.records.QueryLSMDepositsResponse",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.deposits) {
      LSMTokenDeposit.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryLSMDepositsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deposits.push(LSMTokenDeposit.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryLSMDepositsResponse();
    message.deposits = object.deposits?.map((e) => LSMTokenDeposit.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryLSMDepositsResponse();
    message.deposits = object.deposits?.map((e) => LSMTokenDeposit.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.deposits) {
      obj.deposits = message.deposits.map((e) => e ? LSMTokenDeposit.toAmino(e) : void 0);
    } else {
      obj.deposits = message.deposits;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return QueryLSMDepositsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryLSMDepositsResponse.decode(message.value);
  },
  toProto(message) {
    return QueryLSMDepositsResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.records.QueryLSMDepositsResponse",
      value: QueryLSMDepositsResponse.encode(message).finish()
    };
  }
};
export {
  QueryAllDepositRecordRequest,
  QueryAllDepositRecordResponse,
  QueryAllEpochUnbondingRecordRequest,
  QueryAllEpochUnbondingRecordResponse,
  QueryAllUserRedemptionRecordForUserRequest,
  QueryAllUserRedemptionRecordForUserResponse,
  QueryAllUserRedemptionRecordRequest,
  QueryAllUserRedemptionRecordResponse,
  QueryDepositRecordByHostRequest,
  QueryDepositRecordByHostResponse,
  QueryGetDepositRecordRequest,
  QueryGetDepositRecordResponse,
  QueryGetEpochUnbondingRecordRequest,
  QueryGetEpochUnbondingRecordResponse,
  QueryGetUserRedemptionRecordRequest,
  QueryGetUserRedemptionRecordResponse,
  QueryLSMDepositRequest,
  QueryLSMDepositResponse,
  QueryLSMDepositsRequest,
  QueryLSMDepositsResponse,
  QueryParamsRequest,
  QueryParamsResponse
};
