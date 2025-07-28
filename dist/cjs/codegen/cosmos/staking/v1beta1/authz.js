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
var authz_exports = {};
__export(authz_exports, {
  AuthorizationType: () => AuthorizationType,
  AuthorizationTypeAmino: () => AuthorizationTypeAmino,
  AuthorizationTypeSDKType: () => AuthorizationTypeSDKType,
  StakeAuthorization: () => StakeAuthorization,
  StakeAuthorization_Validators: () => StakeAuthorization_Validators,
  authorizationTypeFromJSON: () => authorizationTypeFromJSON,
  authorizationTypeToJSON: () => authorizationTypeToJSON
});
module.exports = __toCommonJS(authz_exports);
var import_coin = require("../../base/v1beta1/coin");
var import_binary = require("../../../binary");
var AuthorizationType = /* @__PURE__ */ ((AuthorizationType2) => {
  AuthorizationType2[AuthorizationType2["AUTHORIZATION_TYPE_UNSPECIFIED"] = 0] = "AUTHORIZATION_TYPE_UNSPECIFIED";
  AuthorizationType2[AuthorizationType2["AUTHORIZATION_TYPE_DELEGATE"] = 1] = "AUTHORIZATION_TYPE_DELEGATE";
  AuthorizationType2[AuthorizationType2["AUTHORIZATION_TYPE_UNDELEGATE"] = 2] = "AUTHORIZATION_TYPE_UNDELEGATE";
  AuthorizationType2[AuthorizationType2["AUTHORIZATION_TYPE_REDELEGATE"] = 3] = "AUTHORIZATION_TYPE_REDELEGATE";
  AuthorizationType2[AuthorizationType2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return AuthorizationType2;
})(AuthorizationType || {});
const AuthorizationTypeSDKType = AuthorizationType;
const AuthorizationTypeAmino = AuthorizationType;
function authorizationTypeFromJSON(object) {
  switch (object) {
    case 0:
    case "AUTHORIZATION_TYPE_UNSPECIFIED":
      return 0 /* AUTHORIZATION_TYPE_UNSPECIFIED */;
    case 1:
    case "AUTHORIZATION_TYPE_DELEGATE":
      return 1 /* AUTHORIZATION_TYPE_DELEGATE */;
    case 2:
    case "AUTHORIZATION_TYPE_UNDELEGATE":
      return 2 /* AUTHORIZATION_TYPE_UNDELEGATE */;
    case 3:
    case "AUTHORIZATION_TYPE_REDELEGATE":
      return 3 /* AUTHORIZATION_TYPE_REDELEGATE */;
    case -1:
    case "UNRECOGNIZED":
    default:
      return -1 /* UNRECOGNIZED */;
  }
}
function authorizationTypeToJSON(object) {
  switch (object) {
    case 0 /* AUTHORIZATION_TYPE_UNSPECIFIED */:
      return "AUTHORIZATION_TYPE_UNSPECIFIED";
    case 1 /* AUTHORIZATION_TYPE_DELEGATE */:
      return "AUTHORIZATION_TYPE_DELEGATE";
    case 2 /* AUTHORIZATION_TYPE_UNDELEGATE */:
      return "AUTHORIZATION_TYPE_UNDELEGATE";
    case 3 /* AUTHORIZATION_TYPE_REDELEGATE */:
      return "AUTHORIZATION_TYPE_REDELEGATE";
    case -1 /* UNRECOGNIZED */:
    default:
      return "UNRECOGNIZED";
  }
}
function createBaseStakeAuthorization() {
  return {
    $typeUrl: "/cosmos.staking.v1beta1.StakeAuthorization",
    maxTokens: void 0,
    allowList: void 0,
    denyList: void 0,
    authorizationType: 0
  };
}
const StakeAuthorization = {
  typeUrl: "/cosmos.staking.v1beta1.StakeAuthorization",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.maxTokens !== void 0) {
      import_coin.Coin.encode(message.maxTokens, writer.uint32(10).fork()).ldelim();
    }
    if (message.allowList !== void 0) {
      StakeAuthorization_Validators.encode(message.allowList, writer.uint32(18).fork()).ldelim();
    }
    if (message.denyList !== void 0) {
      StakeAuthorization_Validators.encode(message.denyList, writer.uint32(26).fork()).ldelim();
    }
    if (message.authorizationType !== 0) {
      writer.uint32(32).int32(message.authorizationType);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseStakeAuthorization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxTokens = import_coin.Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.allowList = StakeAuthorization_Validators.decode(reader, reader.uint32());
          break;
        case 3:
          message.denyList = StakeAuthorization_Validators.decode(reader, reader.uint32());
          break;
        case 4:
          message.authorizationType = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseStakeAuthorization();
    message.maxTokens = object.maxTokens !== void 0 && object.maxTokens !== null ? import_coin.Coin.fromPartial(object.maxTokens) : void 0;
    message.allowList = object.allowList !== void 0 && object.allowList !== null ? StakeAuthorization_Validators.fromPartial(object.allowList) : void 0;
    message.denyList = object.denyList !== void 0 && object.denyList !== null ? StakeAuthorization_Validators.fromPartial(object.denyList) : void 0;
    message.authorizationType = object.authorizationType ?? 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseStakeAuthorization();
    if (object.max_tokens !== void 0 && object.max_tokens !== null) {
      message.maxTokens = import_coin.Coin.fromAmino(object.max_tokens);
    }
    if (object.allow_list !== void 0 && object.allow_list !== null) {
      message.allowList = StakeAuthorization_Validators.fromAmino(object.allow_list);
    }
    if (object.deny_list !== void 0 && object.deny_list !== null) {
      message.denyList = StakeAuthorization_Validators.fromAmino(object.deny_list);
    }
    if (object.authorization_type !== void 0 && object.authorization_type !== null) {
      message.authorizationType = object.authorization_type;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.max_tokens = message.maxTokens ? import_coin.Coin.toAmino(message.maxTokens) : void 0;
    obj.allow_list = message.allowList ? StakeAuthorization_Validators.toAmino(message.allowList) : void 0;
    obj.deny_list = message.denyList ? StakeAuthorization_Validators.toAmino(message.denyList) : void 0;
    obj.authorization_type = message.authorizationType === 0 ? void 0 : message.authorizationType;
    return obj;
  },
  fromAminoMsg(object) {
    return StakeAuthorization.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/StakeAuthorization",
      value: StakeAuthorization.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return StakeAuthorization.decode(message.value);
  },
  toProto(message) {
    return StakeAuthorization.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.StakeAuthorization",
      value: StakeAuthorization.encode(message).finish()
    };
  }
};
function createBaseStakeAuthorization_Validators() {
  return {
    address: []
  };
}
const StakeAuthorization_Validators = {
  typeUrl: "/cosmos.staking.v1beta1.Validators",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.address) {
      writer.uint32(10).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseStakeAuthorization_Validators();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseStakeAuthorization_Validators();
    message.address = object.address?.map((e) => e) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseStakeAuthorization_Validators();
    message.address = object.address?.map((e) => e) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.address) {
      obj.address = message.address.map((e) => e);
    } else {
      obj.address = message.address;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return StakeAuthorization_Validators.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Validators",
      value: StakeAuthorization_Validators.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return StakeAuthorization_Validators.decode(message.value);
  },
  toProto(message) {
    return StakeAuthorization_Validators.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.Validators",
      value: StakeAuthorization_Validators.encode(message).finish()
    };
  }
};
// Removed broken CommonJS export annotation
