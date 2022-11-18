import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../helpers";
export enum Action {
  ActionFree = 0,
  ActionLiquidStake = 1,
  ActionDelegateStake = 2,
  UNRECOGNIZED = -1,
}
export enum ActionSDKType {
  ActionFree = 0,
  ActionLiquidStake = 1,
  ActionDelegateStake = 2,
  UNRECOGNIZED = -1,
}
export function actionFromJSON(object: any): Action {
  switch (object) {
    case 0:
    case "ActionFree":
      return Action.ActionFree;

    case 1:
    case "ActionLiquidStake":
      return Action.ActionLiquidStake;

    case 2:
    case "ActionDelegateStake":
      return Action.ActionDelegateStake;

    case -1:
    case "UNRECOGNIZED":
    default:
      return Action.UNRECOGNIZED;
  }
}
export function actionToJSON(object: Action): string {
  switch (object) {
    case Action.ActionFree:
      return "ActionFree";

    case Action.ActionLiquidStake:
      return "ActionLiquidStake";

    case Action.ActionDelegateStake:
      return "ActionDelegateStake";

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
/** A Claim Records is the metadata of claim data per address */

export interface ClaimRecordSDKType {
  /** airdrop identifier */
  airdrop_identifier: string;
  /** address of claim user */

  address: string;
  /** weight that represent the portion from total allocation */

  weight: string;
  /**
   * true if action is completed
   * index of bool in array refers to action enum #
   */

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
  encode(message: ClaimRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.airdropIdentifier !== "") {
      writer.uint32(10).string(message.airdropIdentifier);
    }

    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }

    if (message.weight !== "") {
      writer.uint32(26).string(message.weight);
    }

    writer.uint32(34).fork();

    for (const v of message.actionCompleted) {
      writer.bool(v);
    }

    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClaimRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
          message.weight = reader.string();
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

  fromPartial(object: DeepPartial<ClaimRecord>): ClaimRecord {
    const message = createBaseClaimRecord();
    message.airdropIdentifier = object.airdropIdentifier ?? "";
    message.address = object.address ?? "";
    message.weight = object.weight ?? "";
    message.actionCompleted = object.actionCompleted?.map(e => e) || [];
    return message;
  }

};