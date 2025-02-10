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
var genesis_exports = {};
__export(genesis_exports, {
  GenesisState: () => GenesisState
});
module.exports = __toCommonJS(genesis_exports);
var import_auth = require("./auth");
var import_any = require("../../../google/protobuf/any");
var import_binary = require("../../../binary");
function createBaseGenesisState() {
  return {
    params: import_auth.Params.fromPartial({}),
    accounts: []
  };
}
const GenesisState = {
  typeUrl: "/cosmos.auth.v1beta1.GenesisState",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.params !== void 0) {
      import_auth.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.accounts) {
      import_any.Any.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = import_auth.Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.accounts.push(import_any.Any.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseGenesisState();
    message.params = object.params !== void 0 && object.params !== null ? import_auth.Params.fromPartial(object.params) : void 0;
    message.accounts = object.accounts?.map((e) => import_any.Any.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseGenesisState();
    if (object.params !== void 0 && object.params !== null) {
      message.params = import_auth.Params.fromAmino(object.params);
    }
    message.accounts = object.accounts?.map((e) => import_any.Any.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.params = message.params ? import_auth.Params.toAmino(message.params) : import_auth.Params.toAmino(import_auth.Params.fromPartial({}));
    if (message.accounts) {
      obj.accounts = message.accounts.map((e) => e ? import_any.Any.toAmino(e) : void 0);
    } else {
      obj.accounts = message.accounts;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GenesisState",
      value: GenesisState.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return GenesisState.decode(message.value);
  },
  toProto(message) {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.auth.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  GenesisState
});
