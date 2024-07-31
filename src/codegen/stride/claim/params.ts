import { Timestamp } from "../../google/protobuf/timestamp";
import { Duration, DurationAmino, DurationSDKType } from "../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../binary";
import { toTimestamp, fromTimestamp } from "../../helpers";
/** Params defines the claim module's parameters. */
export interface Params {
  airdrops: Airdrop[];
}
export interface ParamsProtoMsg {
  typeUrl: "/stride.claim.Params";
  value: Uint8Array;
}
/** Params defines the claim module's parameters. */
export interface ParamsAmino {
  airdrops?: AirdropAmino[];
}
export interface ParamsAminoMsg {
  type: "/stride.claim.Params";
  value: ParamsAmino;
}
/** Params defines the claim module's parameters. */
export interface ParamsSDKType {
  airdrops: AirdropSDKType[];
}
export interface Airdrop {
  airdropIdentifier: string;
  chainId: string;
  /** seconds */
  airdropStartTime: Date;
  /** seconds */
  airdropDuration: Duration;
  /** denom of claimable asset */
  claimDenom: string;
  /** airdrop distribution account */
  distributorAddress: string;
  /** ustrd tokens claimed so far in the current period */
  claimedSoFar: string;
  /** indicates the airdrop should be claimed via autopilot */
  autopilotEnabled: boolean;
}
export interface AirdropProtoMsg {
  typeUrl: "/stride.claim.Airdrop";
  value: Uint8Array;
}
export interface AirdropAmino {
  airdrop_identifier?: string;
  chain_id?: string;
  /** seconds */
  airdrop_start_time?: string;
  /** seconds */
  airdrop_duration?: DurationAmino;
  /** denom of claimable asset */
  claim_denom?: string;
  /** airdrop distribution account */
  distributor_address?: string;
  /** ustrd tokens claimed so far in the current period */
  claimed_so_far?: string;
  /** indicates the airdrop should be claimed via autopilot */
  autopilot_enabled?: boolean;
}
export interface AirdropAminoMsg {
  type: "/stride.claim.Airdrop";
  value: AirdropAmino;
}
export interface AirdropSDKType {
  airdrop_identifier: string;
  chain_id: string;
  airdrop_start_time: Date;
  airdrop_duration: DurationSDKType;
  claim_denom: string;
  distributor_address: string;
  claimed_so_far: string;
  autopilot_enabled: boolean;
}
function createBaseParams(): Params {
  return {
    airdrops: []
  };
}
export const Params = {
  typeUrl: "/stride.claim.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.airdrops) {
      Airdrop.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.airdrops = object.airdrops?.map(e => Airdrop.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    message.airdrops = object.airdrops?.map(e => Airdrop.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    if (message.airdrops) {
      obj.airdrops = message.airdrops.map(e => e ? Airdrop.toAmino(e) : undefined);
    } else {
      obj.airdrops = message.airdrops;
    }
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/stride.claim.Params",
      value: Params.encode(message).finish()
    };
  }
};
function createBaseAirdrop(): Airdrop {
  return {
    airdropIdentifier: "",
    chainId: "",
    airdropStartTime: new Date(),
    airdropDuration: Duration.fromPartial({}),
    claimDenom: "",
    distributorAddress: "",
    claimedSoFar: "",
    autopilotEnabled: false
  };
}
export const Airdrop = {
  typeUrl: "/stride.claim.Airdrop",
  encode(message: Airdrop, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.airdropIdentifier !== "") {
      writer.uint32(10).string(message.airdropIdentifier);
    }
    if (message.chainId !== "") {
      writer.uint32(58).string(message.chainId);
    }
    if (message.airdropStartTime !== undefined) {
      Timestamp.encode(toTimestamp(message.airdropStartTime), writer.uint32(18).fork()).ldelim();
    }
    if (message.airdropDuration !== undefined) {
      Duration.encode(message.airdropDuration, writer.uint32(26).fork()).ldelim();
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
  decode(input: BinaryReader | Uint8Array, length?: number): Airdrop {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
          message.airdropStartTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.airdropDuration = Duration.decode(reader, reader.uint32());
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
  fromPartial(object: Partial<Airdrop>): Airdrop {
    const message = createBaseAirdrop();
    message.airdropIdentifier = object.airdropIdentifier ?? "";
    message.chainId = object.chainId ?? "";
    message.airdropStartTime = object.airdropStartTime ?? undefined;
    message.airdropDuration = object.airdropDuration !== undefined && object.airdropDuration !== null ? Duration.fromPartial(object.airdropDuration) : undefined;
    message.claimDenom = object.claimDenom ?? "";
    message.distributorAddress = object.distributorAddress ?? "";
    message.claimedSoFar = object.claimedSoFar ?? "";
    message.autopilotEnabled = object.autopilotEnabled ?? false;
    return message;
  },
  fromAmino(object: AirdropAmino): Airdrop {
    const message = createBaseAirdrop();
    if (object.airdrop_identifier !== undefined && object.airdrop_identifier !== null) {
      message.airdropIdentifier = object.airdrop_identifier;
    }
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    if (object.airdrop_start_time !== undefined && object.airdrop_start_time !== null) {
      message.airdropStartTime = fromTimestamp(Timestamp.fromAmino(object.airdrop_start_time));
    }
    if (object.airdrop_duration !== undefined && object.airdrop_duration !== null) {
      message.airdropDuration = Duration.fromAmino(object.airdrop_duration);
    }
    if (object.claim_denom !== undefined && object.claim_denom !== null) {
      message.claimDenom = object.claim_denom;
    }
    if (object.distributor_address !== undefined && object.distributor_address !== null) {
      message.distributorAddress = object.distributor_address;
    }
    if (object.claimed_so_far !== undefined && object.claimed_so_far !== null) {
      message.claimedSoFar = object.claimed_so_far;
    }
    if (object.autopilot_enabled !== undefined && object.autopilot_enabled !== null) {
      message.autopilotEnabled = object.autopilot_enabled;
    }
    return message;
  },
  toAmino(message: Airdrop): AirdropAmino {
    const obj: any = {};
    obj.airdrop_identifier = message.airdropIdentifier === "" ? undefined : message.airdropIdentifier;
    obj.chain_id = message.chainId === "" ? undefined : message.chainId;
    obj.airdrop_start_time = message.airdropStartTime ? Timestamp.toAmino(toTimestamp(message.airdropStartTime)) : undefined;
    obj.airdrop_duration = message.airdropDuration ? Duration.toAmino(message.airdropDuration) : undefined;
    obj.claim_denom = message.claimDenom === "" ? undefined : message.claimDenom;
    obj.distributor_address = message.distributorAddress === "" ? undefined : message.distributorAddress;
    obj.claimed_so_far = message.claimedSoFar === "" ? undefined : message.claimedSoFar;
    obj.autopilot_enabled = message.autopilotEnabled === false ? undefined : message.autopilotEnabled;
    return obj;
  },
  fromAminoMsg(object: AirdropAminoMsg): Airdrop {
    return Airdrop.fromAmino(object.value);
  },
  fromProtoMsg(message: AirdropProtoMsg): Airdrop {
    return Airdrop.decode(message.value);
  },
  toProto(message: Airdrop): Uint8Array {
    return Airdrop.encode(message).finish();
  },
  toProtoMsg(message: Airdrop): AirdropProtoMsg {
    return {
      typeUrl: "/stride.claim.Airdrop",
      value: Airdrop.encode(message).finish()
    };
  }
};