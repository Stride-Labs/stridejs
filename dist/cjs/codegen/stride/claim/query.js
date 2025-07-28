"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var query_exports = {};
__export(query_exports, {
  ClaimMetadata: () => ClaimMetadata,
  ClaimStatus: () => ClaimStatus,
  QueryClaimMetadataRequest: () => QueryClaimMetadataRequest,
  QueryClaimMetadataResponse: () => QueryClaimMetadataResponse,
  QueryClaimRecordRequest: () => QueryClaimRecordRequest,
  QueryClaimRecordResponse: () => QueryClaimRecordResponse,
  QueryClaimStatusRequest: () => QueryClaimStatusRequest,
  QueryClaimStatusResponse: () => QueryClaimStatusResponse,
  QueryClaimableForActionRequest: () => QueryClaimableForActionRequest,
  QueryClaimableForActionResponse: () => QueryClaimableForActionResponse,
  QueryDistributorAccountBalanceRequest: () => QueryDistributorAccountBalanceRequest,
  QueryDistributorAccountBalanceResponse: () => QueryDistributorAccountBalanceResponse,
  QueryParamsRequest: () => QueryParamsRequest,
  QueryParamsResponse: () => QueryParamsResponse,
  QueryTotalClaimableRequest: () => QueryTotalClaimableRequest,
  QueryTotalClaimableResponse: () => QueryTotalClaimableResponse,
  QueryUserVestingsRequest: () => QueryUserVestingsRequest,
  QueryUserVestingsResponse: () => QueryUserVestingsResponse
});
module.exports = __toCommonJS(query_exports);
var import_claim = require("./claim");
var import_timestamp = require("../../google/protobuf/timestamp");
var import_coin = require("../../cosmos/base/v1beta1/coin");
var import_params = require("./params");
var import_vesting = require("../vesting/vesting");
var import_binary = require("../../binary");
var import_helpers = require("../../helpers");
function createBaseClaimStatus() {
  return {
    airdropIdentifier: "",
    claimed: false
  };
}
const ClaimStatus = {
  typeUrl: "/stride.claim.ClaimStatus",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.airdropIdentifier !== "") {
      writer.uint32(10).string(message.airdropIdentifier);
    }
    if (message.claimed === true) {
      writer.uint32(16).bool(message.claimed);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseClaimStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.airdropIdentifier = reader.string();
          break;
        case 2:
          message.claimed = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseClaimStatus();
    message.airdropIdentifier = object.airdropIdentifier ?? "";
    message.claimed = object.claimed ?? false;
    return message;
  },
  fromAmino(object) {
    const message = createBaseClaimStatus();
    if (object.airdrop_identifier !== void 0 && object.airdrop_identifier !== null) {
      message.airdropIdentifier = object.airdrop_identifier;
    }
    if (object.claimed !== void 0 && object.claimed !== null) {
      message.claimed = object.claimed;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.airdrop_identifier = message.airdropIdentifier === "" ? void 0 : message.airdropIdentifier;
    obj.claimed = message.claimed === false ? void 0 : message.claimed;
    return obj;
  },
  fromAminoMsg(object) {
    return ClaimStatus.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return ClaimStatus.decode(message.value);
  },
  toProto(message) {
    return ClaimStatus.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.claim.ClaimStatus",
      value: ClaimStatus.encode(message).finish()
    };
  }
};
function createBaseQueryClaimStatusRequest() {
  return {
    address: ""
  };
}
const QueryClaimStatusRequest = {
  typeUrl: "/stride.claim.QueryClaimStatusRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryClaimStatusRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryClaimStatusRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryClaimStatusRequest();
    if (object.address !== void 0 && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.address = message.address === "" ? void 0 : message.address;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryClaimStatusRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryClaimStatusRequest.decode(message.value);
  },
  toProto(message) {
    return QueryClaimStatusRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.claim.QueryClaimStatusRequest",
      value: QueryClaimStatusRequest.encode(message).finish()
    };
  }
};
function createBaseQueryClaimStatusResponse() {
  return {
    claimStatus: []
  };
}
const QueryClaimStatusResponse = {
  typeUrl: "/stride.claim.QueryClaimStatusResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.claimStatus) {
      ClaimStatus.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryClaimStatusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.claimStatus.push(ClaimStatus.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryClaimStatusResponse();
    message.claimStatus = object.claimStatus?.map((e) => ClaimStatus.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryClaimStatusResponse();
    message.claimStatus = object.claim_status?.map((e) => ClaimStatus.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.claimStatus) {
      obj.claim_status = message.claimStatus.map((e) => e ? ClaimStatus.toAmino(e) : void 0);
    } else {
      obj.claim_status = message.claimStatus;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return QueryClaimStatusResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryClaimStatusResponse.decode(message.value);
  },
  toProto(message) {
    return QueryClaimStatusResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.claim.QueryClaimStatusResponse",
      value: QueryClaimStatusResponse.encode(message).finish()
    };
  }
};
function createBaseClaimMetadata() {
  return {
    airdropIdentifier: "",
    currentRound: "",
    currentRoundStart: /* @__PURE__ */ new Date(),
    currentRoundEnd: /* @__PURE__ */ new Date()
  };
}
const ClaimMetadata = {
  typeUrl: "/stride.claim.ClaimMetadata",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.airdropIdentifier !== "") {
      writer.uint32(10).string(message.airdropIdentifier);
    }
    if (message.currentRound !== "") {
      writer.uint32(18).string(message.currentRound);
    }
    if (message.currentRoundStart !== void 0) {
      import_timestamp.Timestamp.encode((0, import_helpers.toTimestamp)(message.currentRoundStart), writer.uint32(26).fork()).ldelim();
    }
    if (message.currentRoundEnd !== void 0) {
      import_timestamp.Timestamp.encode((0, import_helpers.toTimestamp)(message.currentRoundEnd), writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseClaimMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.airdropIdentifier = reader.string();
          break;
        case 2:
          message.currentRound = reader.string();
          break;
        case 3:
          message.currentRoundStart = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        case 4:
          message.currentRoundEnd = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseClaimMetadata();
    message.airdropIdentifier = object.airdropIdentifier ?? "";
    message.currentRound = object.currentRound ?? "";
    message.currentRoundStart = object.currentRoundStart ?? void 0;
    message.currentRoundEnd = object.currentRoundEnd ?? void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseClaimMetadata();
    if (object.airdrop_identifier !== void 0 && object.airdrop_identifier !== null) {
      message.airdropIdentifier = object.airdrop_identifier;
    }
    if (object.current_round !== void 0 && object.current_round !== null) {
      message.currentRound = object.current_round;
    }
    if (object.current_round_start !== void 0 && object.current_round_start !== null) {
      message.currentRoundStart = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.fromAmino(object.current_round_start));
    }
    if (object.current_round_end !== void 0 && object.current_round_end !== null) {
      message.currentRoundEnd = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.fromAmino(object.current_round_end));
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.airdrop_identifier = message.airdropIdentifier === "" ? void 0 : message.airdropIdentifier;
    obj.current_round = message.currentRound === "" ? void 0 : message.currentRound;
    obj.current_round_start = message.currentRoundStart ? import_timestamp.Timestamp.toAmino((0, import_helpers.toTimestamp)(message.currentRoundStart)) : void 0;
    obj.current_round_end = message.currentRoundEnd ? import_timestamp.Timestamp.toAmino((0, import_helpers.toTimestamp)(message.currentRoundEnd)) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return ClaimMetadata.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return ClaimMetadata.decode(message.value);
  },
  toProto(message) {
    return ClaimMetadata.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.claim.ClaimMetadata",
      value: ClaimMetadata.encode(message).finish()
    };
  }
};
function createBaseQueryClaimMetadataRequest() {
  return {};
}
const QueryClaimMetadataRequest = {
  typeUrl: "/stride.claim.QueryClaimMetadataRequest",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryClaimMetadataRequest();
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
    const message = createBaseQueryClaimMetadataRequest();
    return message;
  },
  fromAmino(_) {
    const message = createBaseQueryClaimMetadataRequest();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return QueryClaimMetadataRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryClaimMetadataRequest.decode(message.value);
  },
  toProto(message) {
    return QueryClaimMetadataRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.claim.QueryClaimMetadataRequest",
      value: QueryClaimMetadataRequest.encode(message).finish()
    };
  }
};
function createBaseQueryClaimMetadataResponse() {
  return {
    claimMetadata: []
  };
}
const QueryClaimMetadataResponse = {
  typeUrl: "/stride.claim.QueryClaimMetadataResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.claimMetadata) {
      ClaimMetadata.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryClaimMetadataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.claimMetadata.push(ClaimMetadata.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryClaimMetadataResponse();
    message.claimMetadata = object.claimMetadata?.map((e) => ClaimMetadata.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryClaimMetadataResponse();
    message.claimMetadata = object.claim_metadata?.map((e) => ClaimMetadata.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.claimMetadata) {
      obj.claim_metadata = message.claimMetadata.map((e) => e ? ClaimMetadata.toAmino(e) : void 0);
    } else {
      obj.claim_metadata = message.claimMetadata;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return QueryClaimMetadataResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryClaimMetadataResponse.decode(message.value);
  },
  toProto(message) {
    return QueryClaimMetadataResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.claim.QueryClaimMetadataResponse",
      value: QueryClaimMetadataResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDistributorAccountBalanceRequest() {
  return {
    airdropIdentifier: ""
  };
}
const QueryDistributorAccountBalanceRequest = {
  typeUrl: "/stride.claim.QueryDistributorAccountBalanceRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.airdropIdentifier !== "") {
      writer.uint32(10).string(message.airdropIdentifier);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryDistributorAccountBalanceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.airdropIdentifier = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryDistributorAccountBalanceRequest();
    message.airdropIdentifier = object.airdropIdentifier ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryDistributorAccountBalanceRequest();
    if (object.airdrop_identifier !== void 0 && object.airdrop_identifier !== null) {
      message.airdropIdentifier = object.airdrop_identifier;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.airdrop_identifier = message.airdropIdentifier === "" ? void 0 : message.airdropIdentifier;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryDistributorAccountBalanceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryDistributorAccountBalanceRequest.decode(message.value);
  },
  toProto(message) {
    return QueryDistributorAccountBalanceRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.claim.QueryDistributorAccountBalanceRequest",
      value: QueryDistributorAccountBalanceRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDistributorAccountBalanceResponse() {
  return {
    distributorAccountBalance: []
  };
}
const QueryDistributorAccountBalanceResponse = {
  typeUrl: "/stride.claim.QueryDistributorAccountBalanceResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.distributorAccountBalance) {
      import_coin.Coin.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryDistributorAccountBalanceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.distributorAccountBalance.push(import_coin.Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryDistributorAccountBalanceResponse();
    message.distributorAccountBalance = object.distributorAccountBalance?.map((e) => import_coin.Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryDistributorAccountBalanceResponse();
    message.distributorAccountBalance = object.distributor_account_balance?.map((e) => import_coin.Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.distributorAccountBalance) {
      obj.distributor_account_balance = message.distributorAccountBalance.map((e) => e ? import_coin.Coin.toAmino(e) : void 0);
    } else {
      obj.distributor_account_balance = message.distributorAccountBalance;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return QueryDistributorAccountBalanceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryDistributorAccountBalanceResponse.decode(message.value);
  },
  toProto(message) {
    return QueryDistributorAccountBalanceResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.claim.QueryDistributorAccountBalanceResponse",
      value: QueryDistributorAccountBalanceResponse.encode(message).finish()
    };
  }
};
function createBaseQueryParamsRequest() {
  return {};
}
const QueryParamsRequest = {
  typeUrl: "/stride.claim.QueryParamsRequest",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
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
      typeUrl: "/stride.claim.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse() {
  return {
    params: import_params.Params.fromPartial({})
  };
}
const QueryParamsResponse = {
  typeUrl: "/stride.claim.QueryParamsResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.params !== void 0) {
      import_params.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = import_params.Params.decode(reader, reader.uint32());
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
    message.params = object.params !== void 0 && object.params !== null ? import_params.Params.fromPartial(object.params) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryParamsResponse();
    if (object.params !== void 0 && object.params !== null) {
      message.params = import_params.Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.params = message.params ? import_params.Params.toAmino(message.params) : void 0;
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
      typeUrl: "/stride.claim.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryClaimRecordRequest() {
  return {
    airdropIdentifier: "",
    address: ""
  };
}
const QueryClaimRecordRequest = {
  typeUrl: "/stride.claim.QueryClaimRecordRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.airdropIdentifier !== "") {
      writer.uint32(10).string(message.airdropIdentifier);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryClaimRecordRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.airdropIdentifier = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryClaimRecordRequest();
    message.airdropIdentifier = object.airdropIdentifier ?? "";
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryClaimRecordRequest();
    if (object.airdrop_identifier !== void 0 && object.airdrop_identifier !== null) {
      message.airdropIdentifier = object.airdrop_identifier;
    }
    if (object.address !== void 0 && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.airdrop_identifier = message.airdropIdentifier === "" ? void 0 : message.airdropIdentifier;
    obj.address = message.address === "" ? void 0 : message.address;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryClaimRecordRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryClaimRecordRequest.decode(message.value);
  },
  toProto(message) {
    return QueryClaimRecordRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.claim.QueryClaimRecordRequest",
      value: QueryClaimRecordRequest.encode(message).finish()
    };
  }
};
function createBaseQueryClaimRecordResponse() {
  return {
    claimRecord: import_claim.ClaimRecord.fromPartial({})
  };
}
const QueryClaimRecordResponse = {
  typeUrl: "/stride.claim.QueryClaimRecordResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.claimRecord !== void 0) {
      import_claim.ClaimRecord.encode(message.claimRecord, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryClaimRecordResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.claimRecord = import_claim.ClaimRecord.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryClaimRecordResponse();
    message.claimRecord = object.claimRecord !== void 0 && object.claimRecord !== null ? import_claim.ClaimRecord.fromPartial(object.claimRecord) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryClaimRecordResponse();
    if (object.claim_record !== void 0 && object.claim_record !== null) {
      message.claimRecord = import_claim.ClaimRecord.fromAmino(object.claim_record);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.claim_record = message.claimRecord ? import_claim.ClaimRecord.toAmino(message.claimRecord) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryClaimRecordResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryClaimRecordResponse.decode(message.value);
  },
  toProto(message) {
    return QueryClaimRecordResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.claim.QueryClaimRecordResponse",
      value: QueryClaimRecordResponse.encode(message).finish()
    };
  }
};
function createBaseQueryClaimableForActionRequest() {
  return {
    airdropIdentifier: "",
    address: "",
    action: 0
  };
}
const QueryClaimableForActionRequest = {
  typeUrl: "/stride.claim.QueryClaimableForActionRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.airdropIdentifier !== "") {
      writer.uint32(10).string(message.airdropIdentifier);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.action !== 0) {
      writer.uint32(24).int32(message.action);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryClaimableForActionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.airdropIdentifier = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.action = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryClaimableForActionRequest();
    message.airdropIdentifier = object.airdropIdentifier ?? "";
    message.address = object.address ?? "";
    message.action = object.action ?? 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryClaimableForActionRequest();
    if (object.airdrop_identifier !== void 0 && object.airdrop_identifier !== null) {
      message.airdropIdentifier = object.airdrop_identifier;
    }
    if (object.address !== void 0 && object.address !== null) {
      message.address = object.address;
    }
    if (object.action !== void 0 && object.action !== null) {
      message.action = object.action;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.airdrop_identifier = message.airdropIdentifier === "" ? void 0 : message.airdropIdentifier;
    obj.address = message.address === "" ? void 0 : message.address;
    obj.action = message.action === 0 ? void 0 : message.action;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryClaimableForActionRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryClaimableForActionRequest.decode(message.value);
  },
  toProto(message) {
    return QueryClaimableForActionRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.claim.QueryClaimableForActionRequest",
      value: QueryClaimableForActionRequest.encode(message).finish()
    };
  }
};
function createBaseQueryClaimableForActionResponse() {
  return {
    coins: []
  };
}
const QueryClaimableForActionResponse = {
  typeUrl: "/stride.claim.QueryClaimableForActionResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.coins) {
      import_coin.Coin.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryClaimableForActionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coins.push(import_coin.Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryClaimableForActionResponse();
    message.coins = object.coins?.map((e) => import_coin.Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryClaimableForActionResponse();
    message.coins = object.coins?.map((e) => import_coin.Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.coins) {
      obj.coins = message.coins.map((e) => e ? import_coin.Coin.toAmino(e) : void 0);
    } else {
      obj.coins = message.coins;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return QueryClaimableForActionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryClaimableForActionResponse.decode(message.value);
  },
  toProto(message) {
    return QueryClaimableForActionResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.claim.QueryClaimableForActionResponse",
      value: QueryClaimableForActionResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTotalClaimableRequest() {
  return {
    airdropIdentifier: "",
    address: "",
    includeClaimed: false
  };
}
const QueryTotalClaimableRequest = {
  typeUrl: "/stride.claim.QueryTotalClaimableRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.airdropIdentifier !== "") {
      writer.uint32(10).string(message.airdropIdentifier);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.includeClaimed === true) {
      writer.uint32(24).bool(message.includeClaimed);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalClaimableRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.airdropIdentifier = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.includeClaimed = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryTotalClaimableRequest();
    message.airdropIdentifier = object.airdropIdentifier ?? "";
    message.address = object.address ?? "";
    message.includeClaimed = object.includeClaimed ?? false;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryTotalClaimableRequest();
    if (object.airdrop_identifier !== void 0 && object.airdrop_identifier !== null) {
      message.airdropIdentifier = object.airdrop_identifier;
    }
    if (object.address !== void 0 && object.address !== null) {
      message.address = object.address;
    }
    if (object.include_claimed !== void 0 && object.include_claimed !== null) {
      message.includeClaimed = object.include_claimed;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.airdrop_identifier = message.airdropIdentifier === "" ? void 0 : message.airdropIdentifier;
    obj.address = message.address === "" ? void 0 : message.address;
    obj.include_claimed = message.includeClaimed === false ? void 0 : message.includeClaimed;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryTotalClaimableRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryTotalClaimableRequest.decode(message.value);
  },
  toProto(message) {
    return QueryTotalClaimableRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.claim.QueryTotalClaimableRequest",
      value: QueryTotalClaimableRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTotalClaimableResponse() {
  return {
    coins: []
  };
}
const QueryTotalClaimableResponse = {
  typeUrl: "/stride.claim.QueryTotalClaimableResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.coins) {
      import_coin.Coin.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalClaimableResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coins.push(import_coin.Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryTotalClaimableResponse();
    message.coins = object.coins?.map((e) => import_coin.Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryTotalClaimableResponse();
    message.coins = object.coins?.map((e) => import_coin.Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.coins) {
      obj.coins = message.coins.map((e) => e ? import_coin.Coin.toAmino(e) : void 0);
    } else {
      obj.coins = message.coins;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return QueryTotalClaimableResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryTotalClaimableResponse.decode(message.value);
  },
  toProto(message) {
    return QueryTotalClaimableResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.claim.QueryTotalClaimableResponse",
      value: QueryTotalClaimableResponse.encode(message).finish()
    };
  }
};
function createBaseQueryUserVestingsRequest() {
  return {
    address: ""
  };
}
const QueryUserVestingsRequest = {
  typeUrl: "/stride.claim.QueryUserVestingsRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryUserVestingsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryUserVestingsRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryUserVestingsRequest();
    if (object.address !== void 0 && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.address = message.address === "" ? void 0 : message.address;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryUserVestingsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryUserVestingsRequest.decode(message.value);
  },
  toProto(message) {
    return QueryUserVestingsRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.claim.QueryUserVestingsRequest",
      value: QueryUserVestingsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryUserVestingsResponse() {
  return {
    spendableCoins: [],
    periods: []
  };
}
const QueryUserVestingsResponse = {
  typeUrl: "/stride.claim.QueryUserVestingsResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.spendableCoins) {
      import_coin.Coin.encode(v, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.periods) {
      import_vesting.Period.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryUserVestingsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          message.spendableCoins.push(import_coin.Coin.decode(reader, reader.uint32()));
          break;
        case 1:
          message.periods.push(import_vesting.Period.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryUserVestingsResponse();
    message.spendableCoins = object.spendableCoins?.map((e) => import_coin.Coin.fromPartial(e)) || [];
    message.periods = object.periods?.map((e) => import_vesting.Period.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryUserVestingsResponse();
    message.spendableCoins = object.spendable_coins?.map((e) => import_coin.Coin.fromAmino(e)) || [];
    message.periods = object.periods?.map((e) => import_vesting.Period.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.spendableCoins) {
      obj.spendable_coins = message.spendableCoins.map((e) => e ? import_coin.Coin.toAmino(e) : void 0);
    } else {
      obj.spendable_coins = message.spendableCoins;
    }
    if (message.periods) {
      obj.periods = message.periods.map((e) => e ? import_vesting.Period.toAmino(e) : void 0);
    } else {
      obj.periods = message.periods;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return QueryUserVestingsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryUserVestingsResponse.decode(message.value);
  },
  toProto(message) {
    return QueryUserVestingsResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.claim.QueryUserVestingsResponse",
      value: QueryUserVestingsResponse.encode(message).finish()
    };
  }
};
// Proper CommonJS exports for dynamic imports
module.exports = {
  ClaimMetadata,
  ClaimStatus,
  QueryClaimMetadataRequest,
  QueryClaimMetadataResponse,
  QueryClaimRecordRequest,
  QueryClaimRecordResponse,
  QueryClaimStatusRequest,
  QueryClaimStatusResponse,
  QueryClaimableForActionRequest,
  QueryClaimableForActionResponse,
  QueryDistributorAccountBalanceRequest,
  QueryDistributorAccountBalanceResponse,
  QueryParamsRequest,
  QueryParamsResponse,
  QueryTotalClaimableRequest,
  QueryTotalClaimableResponse,
  QueryUserVestingsRequest,
  QueryUserVestingsResponse
};
