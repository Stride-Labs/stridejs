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
  AppOptionsRequest: () => AppOptionsRequest,
  AppOptionsResponse: () => AppOptionsResponse,
  AppOptionsResponse_ModuleOptionsEntry: () => AppOptionsResponse_ModuleOptionsEntry
});
module.exports = __toCommonJS(query_exports);
var import_options = require("./options");
var import_binary = require("../../../binary");
function createBaseAppOptionsRequest() {
  return {};
}
const AppOptionsRequest = {
  typeUrl: "/cosmos.autocli.v1.AppOptionsRequest",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseAppOptionsRequest();
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
    const message = createBaseAppOptionsRequest();
    return message;
  },
  fromAmino(_) {
    const message = createBaseAppOptionsRequest();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return AppOptionsRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/AppOptionsRequest",
      value: AppOptionsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return AppOptionsRequest.decode(message.value);
  },
  toProto(message) {
    return AppOptionsRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.autocli.v1.AppOptionsRequest",
      value: AppOptionsRequest.encode(message).finish()
    };
  }
};
function createBaseAppOptionsResponse_ModuleOptionsEntry() {
  return {
    key: "",
    value: void 0
  };
}
const AppOptionsResponse_ModuleOptionsEntry = {
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== void 0) {
      import_options.ModuleOptions.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseAppOptionsResponse_ModuleOptionsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = import_options.ModuleOptions.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseAppOptionsResponse_ModuleOptionsEntry();
    message.key = object.key ?? "";
    message.value = object.value !== void 0 && object.value !== null ? import_options.ModuleOptions.fromPartial(object.value) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseAppOptionsResponse_ModuleOptionsEntry();
    if (object.key !== void 0 && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== void 0 && object.value !== null) {
      message.value = import_options.ModuleOptions.fromAmino(object.value);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.key = message.key === "" ? void 0 : message.key;
    obj.value = message.value ? import_options.ModuleOptions.toAmino(message.value) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return AppOptionsResponse_ModuleOptionsEntry.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return AppOptionsResponse_ModuleOptionsEntry.decode(message.value);
  },
  toProto(message) {
    return AppOptionsResponse_ModuleOptionsEntry.encode(message).finish();
  }
};
function createBaseAppOptionsResponse() {
  return {
    moduleOptions: {}
  };
}
const AppOptionsResponse = {
  typeUrl: "/cosmos.autocli.v1.AppOptionsResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    Object.entries(message.moduleOptions).forEach(([key, value]) => {
      AppOptionsResponse_ModuleOptionsEntry.encode({
        key,
        value
      }, writer.uint32(10).fork()).ldelim();
    });
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseAppOptionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = AppOptionsResponse_ModuleOptionsEntry.decode(reader, reader.uint32());
          if (entry1.value !== void 0) {
            message.moduleOptions[entry1.key] = entry1.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseAppOptionsResponse();
    message.moduleOptions = Object.entries(object.moduleOptions ?? {}).reduce((acc, [key, value]) => {
      if (value !== void 0) {
        acc[key] = import_options.ModuleOptions.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  },
  fromAmino(object) {
    const message = createBaseAppOptionsResponse();
    message.moduleOptions = Object.entries(object.module_options ?? {}).reduce((acc, [key, value]) => {
      if (value !== void 0) {
        acc[key] = import_options.ModuleOptions.fromAmino(value);
      }
      return acc;
    }, {});
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.module_options = {};
    if (message.moduleOptions) {
      Object.entries(message.moduleOptions).forEach(([k, v]) => {
        obj.module_options[k] = import_options.ModuleOptions.toAmino(v);
      });
    }
    return obj;
  },
  fromAminoMsg(object) {
    return AppOptionsResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/AppOptionsResponse",
      value: AppOptionsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return AppOptionsResponse.decode(message.value);
  },
  toProto(message) {
    return AppOptionsResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.autocli.v1.AppOptionsResponse",
      value: AppOptionsResponse.encode(message).finish()
    };
  }
};
// Removed broken CommonJS export annotation
