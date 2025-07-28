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
var params_exports = {};
__export(params_exports, {
  Airdrop: () => Airdrop,
  Params: () => Params
});
module.exports = __toCommonJS(params_exports);
var import_timestamp = require("../../google/protobuf/timestamp");
var import_duration = require("../../google/protobuf/duration");
var import_binary = require("../../binary");
var import_helpers = require("../../helpers");
function createBaseParams() {
  return {
    airdrops: []
  };
}
const Params = {
  typeUrl: "/stride.claim.Params",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.airdrops) {
      Airdrop.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.airdrops.push(Airdrop.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseParams();
    message.airdrops = object.airdrops?.map((e) => Airdrop.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseParams();
    message.airdrops = object.airdrops?.map((e) => Airdrop.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.airdrops) {
      obj.airdrops = message.airdrops.map((e) => e ? Airdrop.toAmino(e) : void 0);
    } else {
      obj.airdrops = message.airdrops;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return Params.decode(message.value);
  },
  toProto(message) {
    return Params.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.claim.Params",
      value: Params.encode(message).finish()
    };
  }
};
function createBaseAirdrop() {
  return {
    airdropIdentifier: "",
    chainId: "",
    airdropStartTime: /* @__PURE__ */ new Date(),
    airdropDuration: import_duration.Duration.fromPartial({}),
    claimDenom: "",
    distributorAddress: "",
    claimedSoFar: "",
    autopilotEnabled: false
  };
}
const Airdrop = {
  typeUrl: "/stride.claim.Airdrop",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.airdropIdentifier !== "") {
      writer.uint32(10).string(message.airdropIdentifier);
    }
    if (message.chainId !== "") {
      writer.uint32(58).string(message.chainId);
    }
    if (message.airdropStartTime !== void 0) {
      import_timestamp.Timestamp.encode((0, import_helpers.toTimestamp)(message.airdropStartTime), writer.uint32(18).fork()).ldelim();
    }
    if (message.airdropDuration !== void 0) {
      import_duration.Duration.encode(message.airdropDuration, writer.uint32(26).fork()).ldelim();
    }
    if (message.claimDenom !== "") {
      writer.uint32(34).string(message.claimDenom);
    }
    if (message.distributorAddress !== "") {
      writer.uint32(42).string(message.distributorAddress);
    }
    if (message.claimedSoFar !== "") {
      writer.uint32(50).string(message.claimedSoFar);
    }
    if (message.autopilotEnabled === true) {
      writer.uint32(64).bool(message.autopilotEnabled);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseAirdrop();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.airdropIdentifier = reader.string();
          break;
        case 7:
          message.chainId = reader.string();
          break;
        case 2:
          message.airdropStartTime = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.airdropDuration = import_duration.Duration.decode(reader, reader.uint32());
          break;
        case 4:
          message.claimDenom = reader.string();
          break;
        case 5:
          message.distributorAddress = reader.string();
          break;
        case 6:
          message.claimedSoFar = reader.string();
          break;
        case 8:
          message.autopilotEnabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseAirdrop();
    message.airdropIdentifier = object.airdropIdentifier ?? "";
    message.chainId = object.chainId ?? "";
    message.airdropStartTime = object.airdropStartTime ?? void 0;
    message.airdropDuration = object.airdropDuration !== void 0 && object.airdropDuration !== null ? import_duration.Duration.fromPartial(object.airdropDuration) : void 0;
    message.claimDenom = object.claimDenom ?? "";
    message.distributorAddress = object.distributorAddress ?? "";
    message.claimedSoFar = object.claimedSoFar ?? "";
    message.autopilotEnabled = object.autopilotEnabled ?? false;
    return message;
  },
  fromAmino(object) {
    const message = createBaseAirdrop();
    if (object.airdrop_identifier !== void 0 && object.airdrop_identifier !== null) {
      message.airdropIdentifier = object.airdrop_identifier;
    }
    if (object.chain_id !== void 0 && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    if (object.airdrop_start_time !== void 0 && object.airdrop_start_time !== null) {
      message.airdropStartTime = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.fromAmino(object.airdrop_start_time));
    }
    if (object.airdrop_duration !== void 0 && object.airdrop_duration !== null) {
      message.airdropDuration = import_duration.Duration.fromAmino(object.airdrop_duration);
    }
    if (object.claim_denom !== void 0 && object.claim_denom !== null) {
      message.claimDenom = object.claim_denom;
    }
    if (object.distributor_address !== void 0 && object.distributor_address !== null) {
      message.distributorAddress = object.distributor_address;
    }
    if (object.claimed_so_far !== void 0 && object.claimed_so_far !== null) {
      message.claimedSoFar = object.claimed_so_far;
    }
    if (object.autopilot_enabled !== void 0 && object.autopilot_enabled !== null) {
      message.autopilotEnabled = object.autopilot_enabled;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.airdrop_identifier = message.airdropIdentifier === "" ? void 0 : message.airdropIdentifier;
    obj.chain_id = message.chainId === "" ? void 0 : message.chainId;
    obj.airdrop_start_time = message.airdropStartTime ? import_timestamp.Timestamp.toAmino((0, import_helpers.toTimestamp)(message.airdropStartTime)) : void 0;
    obj.airdrop_duration = message.airdropDuration ? import_duration.Duration.toAmino(message.airdropDuration) : void 0;
    obj.claim_denom = message.claimDenom === "" ? void 0 : message.claimDenom;
    obj.distributor_address = message.distributorAddress === "" ? void 0 : message.distributorAddress;
    obj.claimed_so_far = message.claimedSoFar === "" ? void 0 : message.claimedSoFar;
    obj.autopilot_enabled = message.autopilotEnabled === false ? void 0 : message.autopilotEnabled;
    return obj;
  },
  fromAminoMsg(object) {
    return Airdrop.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return Airdrop.decode(message.value);
  },
  toProto(message) {
    return Airdrop.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.claim.Airdrop",
      value: Airdrop.encode(message).finish()
    };
  }
};
// Proper CommonJS exports for dynamic imports
module.exports = {
  Airdrop,
  Params
};
