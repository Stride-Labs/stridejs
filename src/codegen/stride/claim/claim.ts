import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
export enum Action {
  ACTION_FREE = 0,
  ACTION_LIQUID_STAKE = 1,
  ACTION_DELEGATE_STAKE = 2,
  UNRECOGNIZED = -1,
}
export const ActionSDKType = Action;
export const ActionAmino = Action;
export function actionFromJSON(object: any): Action {
  switch (object) {
    case 0:
    case "ACTION_FREE":
      return Action.ACTION_FREE;
    case 1:
    case "ACTION_LIQUID_STAKE":
      return Action.ACTION_LIQUID_STAKE;
    case 2:
    case "ACTION_DELEGATE_STAKE":
      return Action.ACTION_DELEGATE_STAKE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Action.UNRECOGNIZED;
  }
}
export function actionToJSON(object: Action): string {
  switch (object) {
    case Action.ACTION_FREE:
      return "ACTION_FREE";
    case Action.ACTION_LIQUID_STAKE:
      return "ACTION_LIQUID_STAKE";
    case Action.ACTION_DELEGATE_STAKE:
      return "ACTION_DELEGATE_STAKE";
    case Action.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** A Claim Records is the metadata of claim data per address */
export interface ClaimRecord {
  /** airdrop identifier */
  airdropIdentifier: string;
  /** address of claim user */
  address: string;
  /** weight that represent the portion from total allocation */
  weight: string;
  /**
   * true if action is completed
   * index of bool in array refers to action enum #
   */
  actionCompleted: boolean[];
}
export interface ClaimRecordProtoMsg {
  typeUrl: "/stride.claim.ClaimRecord";
  value: Uint8Array;
}
/** A Claim Records is the metadata of claim data per address */
export interface ClaimRecordAmino {
  /** airdrop identifier */
  airdrop_identifier?: string;
  /** address of claim user */
  address?: string;
  /** weight that represent the portion from total allocation */
  weight?: string;
  /**
   * true if action is completed
   * index of bool in array refers to action enum #
   */
  action_completed?: boolean[];
}
export interface ClaimRecordAminoMsg {
  type: "/stride.claim.ClaimRecord";
  value: ClaimRecordAmino;
}
/** A Claim Records is the metadata of claim data per address */
export interface ClaimRecordSDKType {
  airdrop_identifier: string;
  address: string;
  weight: string;
  action_completed: boolean[];
}
function createBaseClaimRecord(): ClaimRecord {
  return {
    airdropIdentifier: "",
    address: "",
    weight: "",
    actionCompleted: []
  };
}
export const ClaimRecord = {
  typeUrl: "/stride.claim.ClaimRecord",
  encode(message: ClaimRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.airdropIdentifier !== "") {
      writer.uint32(10).string(message.airdropIdentifier);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.weight !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.weight, 18).atomics);
    }
    writer.uint32(34).fork();
    for (const v of message.actionCompleted) {
      writer.bool(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ClaimRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClaimRecord();
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
          message.weight = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.actionCompleted.push(reader.bool());
            }
          } else {
            message.actionCompleted.push(reader.bool());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ClaimRecord>): ClaimRecord {
    const message = createBaseClaimRecord();
    message.airdropIdentifier = object.airdropIdentifier ?? "";
    message.address = object.address ?? "";
    message.weight = object.weight ?? "";
    message.actionCompleted = object.actionCompleted?.map(e => e) || [];
    return message;
  },
  fromAmino(object: ClaimRecordAmino): ClaimRecord {
    const message = createBaseClaimRecord();
    if (object.airdrop_identifier !== undefined && object.airdrop_identifier !== null) {
      message.airdropIdentifier = object.airdrop_identifier;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.weight !== undefined && object.weight !== null) {
      message.weight = object.weight;
    }
    message.actionCompleted = object.action_completed?.map(e => e) || [];
    return message;
  },
  toAmino(message: ClaimRecord): ClaimRecordAmino {
    const obj: any = {};
    obj.airdrop_identifier = message.airdropIdentifier === "" ? undefined : message.airdropIdentifier;
    obj.address = message.address === "" ? undefined : message.address;
    obj.weight = message.weight === "" ? undefined : Decimal.fromUserInput(message.weight, 18).atomics;
    if (message.actionCompleted) {
      obj.action_completed = message.actionCompleted.map(e => e);
    } else {
      obj.action_completed = message.actionCompleted;
    }
    return obj;
  },
  fromAminoMsg(object: ClaimRecordAminoMsg): ClaimRecord {
    return ClaimRecord.fromAmino(object.value);
  },
  fromProtoMsg(message: ClaimRecordProtoMsg): ClaimRecord {
    return ClaimRecord.decode(message.value);
  },
  toProto(message: ClaimRecord): Uint8Array {
    return ClaimRecord.encode(message).finish();
  },
  toProtoMsg(message: ClaimRecord): ClaimRecordProtoMsg {
    return {
      typeUrl: "/stride.claim.ClaimRecord",
      value: ClaimRecord.encode(message).finish()
    };
  }
};