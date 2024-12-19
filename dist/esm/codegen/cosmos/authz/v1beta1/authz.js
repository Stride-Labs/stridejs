import { Any } from "../../../google/protobuf/any";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { SendAuthorization } from "../../bank/v1beta1/authz";
import { StakeAuthorization } from "../../staking/v1beta1/authz";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { toTimestamp, fromTimestamp } from "../../../helpers";
function createBaseGenericAuthorization() {
  return {
    $typeUrl: "/cosmos.authz.v1beta1.GenericAuthorization",
    msg: ""
  };
}
const GenericAuthorization = {
  typeUrl: "/cosmos.authz.v1beta1.GenericAuthorization",
  encode(message, writer = BinaryWriter.create()) {
    if (message.msg !== "") {
      writer.uint32(10).string(message.msg);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGenericAuthorization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msg = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseGenericAuthorization();
    message.msg = object.msg ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseGenericAuthorization();
    if (object.msg !== void 0 && object.msg !== null) {
      message.msg = object.msg;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.msg = message.msg === "" ? void 0 : message.msg;
    return obj;
  },
  fromAminoMsg(object) {
    return GenericAuthorization.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GenericAuthorization",
      value: GenericAuthorization.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return GenericAuthorization.decode(message.value);
  },
  toProto(message) {
    return GenericAuthorization.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.authz.v1beta1.GenericAuthorization",
      value: GenericAuthorization.encode(message).finish()
    };
  }
};
function createBaseGrant() {
  return {
    authorization: void 0,
    expiration: /* @__PURE__ */ new Date()
  };
}
const Grant = {
  typeUrl: "/cosmos.authz.v1beta1.Grant",
  encode(message, writer = BinaryWriter.create()) {
    if (message.authorization !== void 0) {
      Any.encode(message.authorization, writer.uint32(10).fork()).ldelim();
    }
    if (message.expiration !== void 0) {
      Timestamp.encode(toTimestamp(message.expiration), writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGrant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authorization = Authorization_InterfaceDecoder(reader);
          break;
        case 2:
          message.expiration = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseGrant();
    message.authorization = object.authorization !== void 0 && object.authorization !== null ? Any.fromPartial(object.authorization) : void 0;
    message.expiration = object.expiration ?? void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseGrant();
    if (object.authorization !== void 0 && object.authorization !== null) {
      message.authorization = Authorization_FromAmino(object.authorization);
    }
    if (object.expiration !== void 0 && object.expiration !== null) {
      message.expiration = fromTimestamp(Timestamp.fromAmino(object.expiration));
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.authorization = message.authorization ? Authorization_ToAmino(message.authorization) : void 0;
    obj.expiration = message.expiration ? Timestamp.toAmino(toTimestamp(message.expiration)) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return Grant.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Grant",
      value: Grant.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return Grant.decode(message.value);
  },
  toProto(message) {
    return Grant.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.authz.v1beta1.Grant",
      value: Grant.encode(message).finish()
    };
  }
};
function createBaseGrantAuthorization() {
  return {
    granter: "",
    grantee: "",
    authorization: void 0,
    expiration: /* @__PURE__ */ new Date()
  };
}
const GrantAuthorization = {
  typeUrl: "/cosmos.authz.v1beta1.GrantAuthorization",
  encode(message, writer = BinaryWriter.create()) {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }
    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }
    if (message.authorization !== void 0) {
      Any.encode(message.authorization, writer.uint32(26).fork()).ldelim();
    }
    if (message.expiration !== void 0) {
      Timestamp.encode(toTimestamp(message.expiration), writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGrantAuthorization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;
        case 2:
          message.grantee = reader.string();
          break;
        case 3:
          message.authorization = Authorization_InterfaceDecoder(reader);
          break;
        case 4:
          message.expiration = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseGrantAuthorization();
    message.granter = object.granter ?? "";
    message.grantee = object.grantee ?? "";
    message.authorization = object.authorization !== void 0 && object.authorization !== null ? Any.fromPartial(object.authorization) : void 0;
    message.expiration = object.expiration ?? void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseGrantAuthorization();
    if (object.granter !== void 0 && object.granter !== null) {
      message.granter = object.granter;
    }
    if (object.grantee !== void 0 && object.grantee !== null) {
      message.grantee = object.grantee;
    }
    if (object.authorization !== void 0 && object.authorization !== null) {
      message.authorization = Authorization_FromAmino(object.authorization);
    }
    if (object.expiration !== void 0 && object.expiration !== null) {
      message.expiration = fromTimestamp(Timestamp.fromAmino(object.expiration));
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.granter = message.granter === "" ? void 0 : message.granter;
    obj.grantee = message.grantee === "" ? void 0 : message.grantee;
    obj.authorization = message.authorization ? Authorization_ToAmino(message.authorization) : void 0;
    obj.expiration = message.expiration ? Timestamp.toAmino(toTimestamp(message.expiration)) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return GrantAuthorization.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GrantAuthorization",
      value: GrantAuthorization.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return GrantAuthorization.decode(message.value);
  },
  toProto(message) {
    return GrantAuthorization.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.authz.v1beta1.GrantAuthorization",
      value: GrantAuthorization.encode(message).finish()
    };
  }
};
const Authorization_InterfaceDecoder = (input) => {
  const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
  const data = Any.decode(reader, reader.uint32());
  switch (data.typeUrl) {
    case "/cosmos.authz.v1beta1.GenericAuthorization":
      return GenericAuthorization.decode(data.value);
    case "/cosmos.bank.v1beta1.SendAuthorization":
      return SendAuthorization.decode(data.value);
    case "/cosmos.staking.v1beta1.StakeAuthorization":
      return StakeAuthorization.decode(data.value);
    default:
      return data;
  }
};
const Authorization_FromAmino = (content) => {
  switch (content.type) {
    case "cosmos-sdk/GenericAuthorization":
      return Any.fromPartial({
        typeUrl: "/cosmos.authz.v1beta1.GenericAuthorization",
        value: GenericAuthorization.encode(GenericAuthorization.fromPartial(GenericAuthorization.fromAmino(content.value))).finish()
      });
    case "cosmos-sdk/SendAuthorization":
      return Any.fromPartial({
        typeUrl: "/cosmos.bank.v1beta1.SendAuthorization",
        value: SendAuthorization.encode(SendAuthorization.fromPartial(SendAuthorization.fromAmino(content.value))).finish()
      });
    case "cosmos-sdk/StakeAuthorization":
      return Any.fromPartial({
        typeUrl: "/cosmos.staking.v1beta1.StakeAuthorization",
        value: StakeAuthorization.encode(StakeAuthorization.fromPartial(StakeAuthorization.fromAmino(content.value))).finish()
      });
    default:
      return Any.fromAmino(content);
  }
};
const Authorization_ToAmino = (content) => {
  switch (content.typeUrl) {
    case "/cosmos.authz.v1beta1.GenericAuthorization":
      return {
        type: "cosmos-sdk/GenericAuthorization",
        value: GenericAuthorization.toAmino(GenericAuthorization.decode(content.value, void 0))
      };
    case "/cosmos.bank.v1beta1.SendAuthorization":
      return {
        type: "cosmos-sdk/SendAuthorization",
        value: SendAuthorization.toAmino(SendAuthorization.decode(content.value, void 0))
      };
    case "/cosmos.staking.v1beta1.StakeAuthorization":
      return {
        type: "cosmos-sdk/StakeAuthorization",
        value: StakeAuthorization.toAmino(StakeAuthorization.decode(content.value, void 0))
      };
    default:
      return Any.toAmino(content);
  }
};
export {
  Authorization_FromAmino,
  Authorization_InterfaceDecoder,
  Authorization_ToAmino,
  GenericAuthorization,
  Grant,
  GrantAuthorization
};
