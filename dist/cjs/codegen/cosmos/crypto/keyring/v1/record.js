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
var record_exports = {};
__export(record_exports, {
  Record: () => Record,
  Record_Ledger: () => Record_Ledger,
  Record_Local: () => Record_Local,
  Record_Multi: () => Record_Multi,
  Record_Offline: () => Record_Offline
});
module.exports = __toCommonJS(record_exports);
var import_any = require("../../../../google/protobuf/any");
var import_hd = require("../../hd/v1/hd");
var import_binary = require("../../../../binary");
function createBaseRecord() {
  return {
    name: "",
    pubKey: void 0,
    local: void 0,
    ledger: void 0,
    multi: void 0,
    offline: void 0
  };
}
const Record = {
  typeUrl: "/cosmos.crypto.keyring.v1.Record",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.pubKey !== void 0) {
      import_any.Any.encode(message.pubKey, writer.uint32(18).fork()).ldelim();
    }
    if (message.local !== void 0) {
      Record_Local.encode(message.local, writer.uint32(26).fork()).ldelim();
    }
    if (message.ledger !== void 0) {
      Record_Ledger.encode(message.ledger, writer.uint32(34).fork()).ldelim();
    }
    if (message.multi !== void 0) {
      Record_Multi.encode(message.multi, writer.uint32(42).fork()).ldelim();
    }
    if (message.offline !== void 0) {
      Record_Offline.encode(message.offline, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.pubKey = import_any.Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.local = Record_Local.decode(reader, reader.uint32());
          break;
        case 4:
          message.ledger = Record_Ledger.decode(reader, reader.uint32());
          break;
        case 5:
          message.multi = Record_Multi.decode(reader, reader.uint32());
          break;
        case 6:
          message.offline = Record_Offline.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseRecord();
    message.name = object.name ?? "";
    message.pubKey = object.pubKey !== void 0 && object.pubKey !== null ? import_any.Any.fromPartial(object.pubKey) : void 0;
    message.local = object.local !== void 0 && object.local !== null ? Record_Local.fromPartial(object.local) : void 0;
    message.ledger = object.ledger !== void 0 && object.ledger !== null ? Record_Ledger.fromPartial(object.ledger) : void 0;
    message.multi = object.multi !== void 0 && object.multi !== null ? Record_Multi.fromPartial(object.multi) : void 0;
    message.offline = object.offline !== void 0 && object.offline !== null ? Record_Offline.fromPartial(object.offline) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseRecord();
    if (object.name !== void 0 && object.name !== null) {
      message.name = object.name;
    }
    if (object.pub_key !== void 0 && object.pub_key !== null) {
      message.pubKey = import_any.Any.fromAmino(object.pub_key);
    }
    if (object.local !== void 0 && object.local !== null) {
      message.local = Record_Local.fromAmino(object.local);
    }
    if (object.ledger !== void 0 && object.ledger !== null) {
      message.ledger = Record_Ledger.fromAmino(object.ledger);
    }
    if (object.multi !== void 0 && object.multi !== null) {
      message.multi = Record_Multi.fromAmino(object.multi);
    }
    if (object.offline !== void 0 && object.offline !== null) {
      message.offline = Record_Offline.fromAmino(object.offline);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.name = message.name === "" ? void 0 : message.name;
    obj.pub_key = message.pubKey ? import_any.Any.toAmino(message.pubKey) : void 0;
    obj.local = message.local ? Record_Local.toAmino(message.local) : void 0;
    obj.ledger = message.ledger ? Record_Ledger.toAmino(message.ledger) : void 0;
    obj.multi = message.multi ? Record_Multi.toAmino(message.multi) : void 0;
    obj.offline = message.offline ? Record_Offline.toAmino(message.offline) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return Record.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Record",
      value: Record.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return Record.decode(message.value);
  },
  toProto(message) {
    return Record.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.crypto.keyring.v1.Record",
      value: Record.encode(message).finish()
    };
  }
};
function createBaseRecord_Local() {
  return {
    privKey: void 0
  };
}
const Record_Local = {
  typeUrl: "/cosmos.crypto.keyring.v1.Local",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.privKey !== void 0) {
      import_any.Any.encode(message.privKey, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRecord_Local();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.privKey = import_any.Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseRecord_Local();
    message.privKey = object.privKey !== void 0 && object.privKey !== null ? import_any.Any.fromPartial(object.privKey) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseRecord_Local();
    if (object.priv_key !== void 0 && object.priv_key !== null) {
      message.privKey = import_any.Any.fromAmino(object.priv_key);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.priv_key = message.privKey ? import_any.Any.toAmino(message.privKey) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return Record_Local.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Local",
      value: Record_Local.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return Record_Local.decode(message.value);
  },
  toProto(message) {
    return Record_Local.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.crypto.keyring.v1.Local",
      value: Record_Local.encode(message).finish()
    };
  }
};
function createBaseRecord_Ledger() {
  return {
    path: void 0
  };
}
const Record_Ledger = {
  typeUrl: "/cosmos.crypto.keyring.v1.Ledger",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.path !== void 0) {
      import_hd.BIP44Params.encode(message.path, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRecord_Ledger();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.path = import_hd.BIP44Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseRecord_Ledger();
    message.path = object.path !== void 0 && object.path !== null ? import_hd.BIP44Params.fromPartial(object.path) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseRecord_Ledger();
    if (object.path !== void 0 && object.path !== null) {
      message.path = import_hd.BIP44Params.fromAmino(object.path);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.path = message.path ? import_hd.BIP44Params.toAmino(message.path) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return Record_Ledger.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Ledger",
      value: Record_Ledger.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return Record_Ledger.decode(message.value);
  },
  toProto(message) {
    return Record_Ledger.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.crypto.keyring.v1.Ledger",
      value: Record_Ledger.encode(message).finish()
    };
  }
};
function createBaseRecord_Multi() {
  return {};
}
const Record_Multi = {
  typeUrl: "/cosmos.crypto.keyring.v1.Multi",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRecord_Multi();
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
    const message = createBaseRecord_Multi();
    return message;
  },
  fromAmino(_) {
    const message = createBaseRecord_Multi();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return Record_Multi.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Multi",
      value: Record_Multi.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return Record_Multi.decode(message.value);
  },
  toProto(message) {
    return Record_Multi.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.crypto.keyring.v1.Multi",
      value: Record_Multi.encode(message).finish()
    };
  }
};
function createBaseRecord_Offline() {
  return {};
}
const Record_Offline = {
  typeUrl: "/cosmos.crypto.keyring.v1.Offline",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRecord_Offline();
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
    const message = createBaseRecord_Offline();
    return message;
  },
  fromAmino(_) {
    const message = createBaseRecord_Offline();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return Record_Offline.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Offline",
      value: Record_Offline.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return Record_Offline.decode(message.value);
  },
  toProto(message) {
    return Record_Offline.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.crypto.keyring.v1.Offline",
      value: Record_Offline.encode(message).finish()
    };
  }
};
// Proper CommonJS exports for dynamic imports
module.exports = {
  Record,
  Record_Ledger,
  Record_Local,
  Record_Multi,
  Record_Offline
};
