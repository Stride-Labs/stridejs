import { BinaryReader, BinaryWriter } from "../../binary";
var ICAAccountType = /* @__PURE__ */ ((ICAAccountType2) => {
  ICAAccountType2[ICAAccountType2["DELEGATION"] = 0] = "DELEGATION";
  ICAAccountType2[ICAAccountType2["FEE"] = 1] = "FEE";
  ICAAccountType2[ICAAccountType2["WITHDRAWAL"] = 2] = "WITHDRAWAL";
  ICAAccountType2[ICAAccountType2["REDEMPTION"] = 3] = "REDEMPTION";
  ICAAccountType2[ICAAccountType2["COMMUNITY_POOL_DEPOSIT"] = 4] = "COMMUNITY_POOL_DEPOSIT";
  ICAAccountType2[ICAAccountType2["COMMUNITY_POOL_RETURN"] = 5] = "COMMUNITY_POOL_RETURN";
  ICAAccountType2[ICAAccountType2["CONVERTER_UNWIND"] = 6] = "CONVERTER_UNWIND";
  ICAAccountType2[ICAAccountType2["CONVERTER_TRADE"] = 7] = "CONVERTER_TRADE";
  ICAAccountType2[ICAAccountType2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return ICAAccountType2;
})(ICAAccountType || {});
const ICAAccountTypeSDKType = ICAAccountType;
const ICAAccountTypeAmino = ICAAccountType;
function iCAAccountTypeFromJSON(object) {
  switch (object) {
    case 0:
    case "DELEGATION":
      return 0 /* DELEGATION */;
    case 1:
    case "FEE":
      return 1 /* FEE */;
    case 2:
    case "WITHDRAWAL":
      return 2 /* WITHDRAWAL */;
    case 3:
    case "REDEMPTION":
      return 3 /* REDEMPTION */;
    case 4:
    case "COMMUNITY_POOL_DEPOSIT":
      return 4 /* COMMUNITY_POOL_DEPOSIT */;
    case 5:
    case "COMMUNITY_POOL_RETURN":
      return 5 /* COMMUNITY_POOL_RETURN */;
    case 6:
    case "CONVERTER_UNWIND":
      return 6 /* CONVERTER_UNWIND */;
    case 7:
    case "CONVERTER_TRADE":
      return 7 /* CONVERTER_TRADE */;
    case -1:
    case "UNRECOGNIZED":
    default:
      return -1 /* UNRECOGNIZED */;
  }
}
function iCAAccountTypeToJSON(object) {
  switch (object) {
    case 0 /* DELEGATION */:
      return "DELEGATION";
    case 1 /* FEE */:
      return "FEE";
    case 2 /* WITHDRAWAL */:
      return "WITHDRAWAL";
    case 3 /* REDEMPTION */:
      return "REDEMPTION";
    case 4 /* COMMUNITY_POOL_DEPOSIT */:
      return "COMMUNITY_POOL_DEPOSIT";
    case 5 /* COMMUNITY_POOL_RETURN */:
      return "COMMUNITY_POOL_RETURN";
    case 6 /* CONVERTER_UNWIND */:
      return "CONVERTER_UNWIND";
    case 7 /* CONVERTER_TRADE */:
      return "CONVERTER_TRADE";
    case -1 /* UNRECOGNIZED */:
    default:
      return "UNRECOGNIZED";
  }
}
function createBaseICAAccount() {
  return {
    chainId: "",
    type: 0,
    connectionId: "",
    address: ""
  };
}
const ICAAccount = {
  typeUrl: "/stride.stakeibc.ICAAccount",
  encode(message, writer = BinaryWriter.create()) {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    if (message.connectionId !== "") {
      writer.uint32(26).string(message.connectionId);
    }
    if (message.address !== "") {
      writer.uint32(34).string(message.address);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseICAAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        case 2:
          message.type = reader.int32();
          break;
        case 3:
          message.connectionId = reader.string();
          break;
        case 4:
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
    const message = createBaseICAAccount();
    message.chainId = object.chainId ?? "";
    message.type = object.type ?? 0;
    message.connectionId = object.connectionId ?? "";
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseICAAccount();
    if (object.chain_id !== void 0 && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    if (object.type !== void 0 && object.type !== null) {
      message.type = object.type;
    }
    if (object.connection_id !== void 0 && object.connection_id !== null) {
      message.connectionId = object.connection_id;
    }
    if (object.address !== void 0 && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.chain_id = message.chainId === "" ? void 0 : message.chainId;
    obj.type = message.type === 0 ? void 0 : message.type;
    obj.connection_id = message.connectionId === "" ? void 0 : message.connectionId;
    obj.address = message.address === "" ? void 0 : message.address;
    return obj;
  },
  fromAminoMsg(object) {
    return ICAAccount.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return ICAAccount.decode(message.value);
  },
  toProto(message) {
    return ICAAccount.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakeibc.ICAAccount",
      value: ICAAccount.encode(message).finish()
    };
  }
};
export {
  ICAAccount,
  ICAAccountType,
  ICAAccountTypeAmino,
  ICAAccountTypeSDKType,
  iCAAccountTypeFromJSON,
  iCAAccountTypeToJSON
};
