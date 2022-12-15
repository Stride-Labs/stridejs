import { Delegation, DelegationSDKType } from "./delegation";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../helpers";
export enum ICAAccountType {
  DELEGATION = 0,
  FEE = 1,
  WITHDRAWAL = 2,
  REDEMPTION = 3,
  UNRECOGNIZED = -1,
}
export enum ICAAccountTypeSDKType {
  DELEGATION = 0,
  FEE = 1,
  WITHDRAWAL = 2,
  REDEMPTION = 3,
  UNRECOGNIZED = -1,
}
export function iCAAccountTypeFromJSON(object: any): ICAAccountType {
  switch (object) {
    case 0:
    case "DELEGATION":
      return ICAAccountType.DELEGATION;

    case 1:
    case "FEE":
      return ICAAccountType.FEE;

    case 2:
    case "WITHDRAWAL":
      return ICAAccountType.WITHDRAWAL;

    case 3:
    case "REDEMPTION":
      return ICAAccountType.REDEMPTION;

    case -1:
    case "UNRECOGNIZED":
    default:
      return ICAAccountType.UNRECOGNIZED;
  }
}
export function iCAAccountTypeToJSON(object: ICAAccountType): string {
  switch (object) {
    case ICAAccountType.DELEGATION:
      return "DELEGATION";

    case ICAAccountType.FEE:
      return "FEE";

    case ICAAccountType.WITHDRAWAL:
      return "WITHDRAWAL";

    case ICAAccountType.REDEMPTION:
      return "REDEMPTION";

    case ICAAccountType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * TODO(TEST-XX): Update these fields to be more useful (e.g. balances should be
 * coins, maybe store port name directly)
 */

export interface ICAAccount {
  address: string;
  delegations: Delegation[];
  target: ICAAccountType;
}
/**
 * TODO(TEST-XX): Update these fields to be more useful (e.g. balances should be
 * coins, maybe store port name directly)
 */

export interface ICAAccountSDKType {
  address: string;
  delegations: DelegationSDKType[];
  target: ICAAccountTypeSDKType;
}

function createBaseICAAccount(): ICAAccount {
  return {
    address: "",
    delegations: [],
    target: 0
  };
}

export const ICAAccount = {
  encode(message: ICAAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    for (const v of message.delegations) {
      Delegation.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    if (message.target !== 0) {
      writer.uint32(24).int32(message.target);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ICAAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseICAAccount();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        case 2:
          message.delegations.push(Delegation.decode(reader, reader.uint32()));
          break;

        case 3:
          message.target = (reader.int32() as any);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ICAAccount>): ICAAccount {
    const message = createBaseICAAccount();
    message.address = object.address ?? "";
    message.delegations = object.delegations?.map(e => Delegation.fromPartial(e)) || [];
    message.target = object.target ?? 0;
    return message;
  }

};