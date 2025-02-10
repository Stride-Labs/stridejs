import { Coin } from "../../base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Duration } from "../../../google/protobuf/duration";
import { Any } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { toTimestamp, fromTimestamp } from "../../../helpers";
function createBaseBasicAllowance() {
  return {
    $typeUrl: "/cosmos.feegrant.v1beta1.BasicAllowance",
    spendLimit: [],
    expiration: void 0
  };
}
const BasicAllowance = {
  typeUrl: "/cosmos.feegrant.v1beta1.BasicAllowance",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.spendLimit) {
      Coin.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.expiration !== void 0) {
      Timestamp.encode(toTimestamp(message.expiration), writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseBasicAllowance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.spendLimit.push(Coin.decode(reader, reader.uint32()));
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
    const message = createBaseBasicAllowance();
    message.spendLimit = object.spendLimit?.map((e) => Coin.fromPartial(e)) || [];
    message.expiration = object.expiration ?? void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseBasicAllowance();
    message.spendLimit = object.spend_limit?.map((e) => Coin.fromAmino(e)) || [];
    if (object.expiration !== void 0 && object.expiration !== null) {
      message.expiration = fromTimestamp(Timestamp.fromAmino(object.expiration));
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.spendLimit) {
      obj.spend_limit = message.spendLimit.map((e) => e ? Coin.toAmino(e) : void 0);
    } else {
      obj.spend_limit = message.spendLimit;
    }
    obj.expiration = message.expiration ? Timestamp.toAmino(toTimestamp(message.expiration)) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return BasicAllowance.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/BasicAllowance",
      value: BasicAllowance.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return BasicAllowance.decode(message.value);
  },
  toProto(message) {
    return BasicAllowance.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.feegrant.v1beta1.BasicAllowance",
      value: BasicAllowance.encode(message).finish()
    };
  }
};
function createBasePeriodicAllowance() {
  return {
    $typeUrl: "/cosmos.feegrant.v1beta1.PeriodicAllowance",
    basic: BasicAllowance.fromPartial({}),
    period: Duration.fromPartial({}),
    periodSpendLimit: [],
    periodCanSpend: [],
    periodReset: /* @__PURE__ */ new Date()
  };
}
const PeriodicAllowance = {
  typeUrl: "/cosmos.feegrant.v1beta1.PeriodicAllowance",
  encode(message, writer = BinaryWriter.create()) {
    if (message.basic !== void 0) {
      BasicAllowance.encode(message.basic, writer.uint32(10).fork()).ldelim();
    }
    if (message.period !== void 0) {
      Duration.encode(message.period, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.periodSpendLimit) {
      Coin.encode(v, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.periodCanSpend) {
      Coin.encode(v, writer.uint32(34).fork()).ldelim();
    }
    if (message.periodReset !== void 0) {
      Timestamp.encode(toTimestamp(message.periodReset), writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePeriodicAllowance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.basic = BasicAllowance.decode(reader, reader.uint32());
          break;
        case 2:
          message.period = Duration.decode(reader, reader.uint32());
          break;
        case 3:
          message.periodSpendLimit.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.periodCanSpend.push(Coin.decode(reader, reader.uint32()));
          break;
        case 5:
          message.periodReset = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBasePeriodicAllowance();
    message.basic = object.basic !== void 0 && object.basic !== null ? BasicAllowance.fromPartial(object.basic) : void 0;
    message.period = object.period !== void 0 && object.period !== null ? Duration.fromPartial(object.period) : void 0;
    message.periodSpendLimit = object.periodSpendLimit?.map((e) => Coin.fromPartial(e)) || [];
    message.periodCanSpend = object.periodCanSpend?.map((e) => Coin.fromPartial(e)) || [];
    message.periodReset = object.periodReset ?? void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBasePeriodicAllowance();
    if (object.basic !== void 0 && object.basic !== null) {
      message.basic = BasicAllowance.fromAmino(object.basic);
    }
    if (object.period !== void 0 && object.period !== null) {
      message.period = Duration.fromAmino(object.period);
    }
    message.periodSpendLimit = object.period_spend_limit?.map((e) => Coin.fromAmino(e)) || [];
    message.periodCanSpend = object.period_can_spend?.map((e) => Coin.fromAmino(e)) || [];
    if (object.period_reset !== void 0 && object.period_reset !== null) {
      message.periodReset = fromTimestamp(Timestamp.fromAmino(object.period_reset));
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.basic = message.basic ? BasicAllowance.toAmino(message.basic) : BasicAllowance.toAmino(BasicAllowance.fromPartial({}));
    obj.period = message.period ? Duration.toAmino(message.period) : Duration.toAmino(Duration.fromPartial({}));
    if (message.periodSpendLimit) {
      obj.period_spend_limit = message.periodSpendLimit.map((e) => e ? Coin.toAmino(e) : void 0);
    } else {
      obj.period_spend_limit = message.periodSpendLimit;
    }
    if (message.periodCanSpend) {
      obj.period_can_spend = message.periodCanSpend.map((e) => e ? Coin.toAmino(e) : void 0);
    } else {
      obj.period_can_spend = message.periodCanSpend;
    }
    obj.period_reset = message.periodReset ? Timestamp.toAmino(toTimestamp(message.periodReset)) : /* @__PURE__ */ new Date();
    return obj;
  },
  fromAminoMsg(object) {
    return PeriodicAllowance.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/PeriodicAllowance",
      value: PeriodicAllowance.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return PeriodicAllowance.decode(message.value);
  },
  toProto(message) {
    return PeriodicAllowance.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.feegrant.v1beta1.PeriodicAllowance",
      value: PeriodicAllowance.encode(message).finish()
    };
  }
};
function createBaseAllowedMsgAllowance() {
  return {
    $typeUrl: "/cosmos.feegrant.v1beta1.AllowedMsgAllowance",
    allowance: void 0,
    allowedMessages: []
  };
}
const AllowedMsgAllowance = {
  typeUrl: "/cosmos.feegrant.v1beta1.AllowedMsgAllowance",
  encode(message, writer = BinaryWriter.create()) {
    if (message.allowance !== void 0) {
      Any.encode(message.allowance, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.allowedMessages) {
      writer.uint32(18).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseAllowedMsgAllowance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allowance = Cosmos_feegrantv1beta1FeeAllowanceI_InterfaceDecoder(reader);
          break;
        case 2:
          message.allowedMessages.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseAllowedMsgAllowance();
    message.allowance = object.allowance !== void 0 && object.allowance !== null ? Any.fromPartial(object.allowance) : void 0;
    message.allowedMessages = object.allowedMessages?.map((e) => e) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseAllowedMsgAllowance();
    if (object.allowance !== void 0 && object.allowance !== null) {
      message.allowance = Cosmos_feegrantv1beta1FeeAllowanceI_FromAmino(object.allowance);
    }
    message.allowedMessages = object.allowed_messages?.map((e) => e) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.allowance = message.allowance ? Cosmos_feegrantv1beta1FeeAllowanceI_ToAmino(message.allowance) : void 0;
    if (message.allowedMessages) {
      obj.allowed_messages = message.allowedMessages.map((e) => e);
    } else {
      obj.allowed_messages = message.allowedMessages;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return AllowedMsgAllowance.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/AllowedMsgAllowance",
      value: AllowedMsgAllowance.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return AllowedMsgAllowance.decode(message.value);
  },
  toProto(message) {
    return AllowedMsgAllowance.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.feegrant.v1beta1.AllowedMsgAllowance",
      value: AllowedMsgAllowance.encode(message).finish()
    };
  }
};
function createBaseGrant() {
  return {
    granter: "",
    grantee: "",
    allowance: void 0
  };
}
const Grant = {
  typeUrl: "/cosmos.feegrant.v1beta1.Grant",
  encode(message, writer = BinaryWriter.create()) {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }
    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }
    if (message.allowance !== void 0) {
      Any.encode(message.allowance, writer.uint32(26).fork()).ldelim();
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
          message.granter = reader.string();
          break;
        case 2:
          message.grantee = reader.string();
          break;
        case 3:
          message.allowance = Cosmos_feegrantv1beta1FeeAllowanceI_InterfaceDecoder(reader);
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
    message.granter = object.granter ?? "";
    message.grantee = object.grantee ?? "";
    message.allowance = object.allowance !== void 0 && object.allowance !== null ? Any.fromPartial(object.allowance) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseGrant();
    if (object.granter !== void 0 && object.granter !== null) {
      message.granter = object.granter;
    }
    if (object.grantee !== void 0 && object.grantee !== null) {
      message.grantee = object.grantee;
    }
    if (object.allowance !== void 0 && object.allowance !== null) {
      message.allowance = Cosmos_feegrantv1beta1FeeAllowanceI_FromAmino(object.allowance);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.granter = message.granter === "" ? void 0 : message.granter;
    obj.grantee = message.grantee === "" ? void 0 : message.grantee;
    obj.allowance = message.allowance ? Cosmos_feegrantv1beta1FeeAllowanceI_ToAmino(message.allowance) : void 0;
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
      typeUrl: "/cosmos.feegrant.v1beta1.Grant",
      value: Grant.encode(message).finish()
    };
  }
};
const Cosmos_feegrantv1beta1FeeAllowanceI_InterfaceDecoder = (input) => {
  const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
  const data = Any.decode(reader, reader.uint32());
  switch (data.typeUrl) {
    case "/cosmos.feegrant.v1beta1.BasicAllowance":
      return BasicAllowance.decode(data.value);
    case "/cosmos.feegrant.v1beta1.PeriodicAllowance":
      return PeriodicAllowance.decode(data.value);
    case "/cosmos.feegrant.v1beta1.AllowedMsgAllowance":
      return AllowedMsgAllowance.decode(data.value);
    default:
      return data;
  }
};
const Cosmos_feegrantv1beta1FeeAllowanceI_FromAmino = (content) => {
  switch (content.type) {
    case "cosmos-sdk/BasicAllowance":
      return Any.fromPartial({
        typeUrl: "/cosmos.feegrant.v1beta1.BasicAllowance",
        value: BasicAllowance.encode(BasicAllowance.fromPartial(BasicAllowance.fromAmino(content.value))).finish()
      });
    case "cosmos-sdk/PeriodicAllowance":
      return Any.fromPartial({
        typeUrl: "/cosmos.feegrant.v1beta1.PeriodicAllowance",
        value: PeriodicAllowance.encode(PeriodicAllowance.fromPartial(PeriodicAllowance.fromAmino(content.value))).finish()
      });
    case "cosmos-sdk/AllowedMsgAllowance":
      return Any.fromPartial({
        typeUrl: "/cosmos.feegrant.v1beta1.AllowedMsgAllowance",
        value: AllowedMsgAllowance.encode(AllowedMsgAllowance.fromPartial(AllowedMsgAllowance.fromAmino(content.value))).finish()
      });
    default:
      return Any.fromAmino(content);
  }
};
const Cosmos_feegrantv1beta1FeeAllowanceI_ToAmino = (content) => {
  switch (content.typeUrl) {
    case "/cosmos.feegrant.v1beta1.BasicAllowance":
      return {
        type: "cosmos-sdk/BasicAllowance",
        value: BasicAllowance.toAmino(BasicAllowance.decode(content.value, void 0))
      };
    case "/cosmos.feegrant.v1beta1.PeriodicAllowance":
      return {
        type: "cosmos-sdk/PeriodicAllowance",
        value: PeriodicAllowance.toAmino(PeriodicAllowance.decode(content.value, void 0))
      };
    case "/cosmos.feegrant.v1beta1.AllowedMsgAllowance":
      return {
        type: "cosmos-sdk/AllowedMsgAllowance",
        value: AllowedMsgAllowance.toAmino(AllowedMsgAllowance.decode(content.value, void 0))
      };
    default:
      return Any.toAmino(content);
  }
};
export {
  AllowedMsgAllowance,
  BasicAllowance,
  Cosmos_feegrantv1beta1FeeAllowanceI_FromAmino,
  Cosmos_feegrantv1beta1FeeAllowanceI_InterfaceDecoder,
  Cosmos_feegrantv1beta1FeeAllowanceI_ToAmino,
  Grant,
  PeriodicAllowance
};
