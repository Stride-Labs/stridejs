import { BinaryReader, BinaryWriter } from "../../binary";
export enum ICAAccountType {
  DELEGATION = 0,
  FEE = 1,
  WITHDRAWAL = 2,
  REDEMPTION = 3,
  COMMUNITY_POOL_DEPOSIT = 4,
  COMMUNITY_POOL_RETURN = 5,
  CONVERTER_UNWIND = 6,
  CONVERTER_TRADE = 7,
  UNRECOGNIZED = -1,
}
export const ICAAccountTypeSDKType = ICAAccountType;
export const ICAAccountTypeAmino = ICAAccountType;
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
    case 4:
    case "COMMUNITY_POOL_DEPOSIT":
      return ICAAccountType.COMMUNITY_POOL_DEPOSIT;
    case 5:
    case "COMMUNITY_POOL_RETURN":
      return ICAAccountType.COMMUNITY_POOL_RETURN;
    case 6:
    case "CONVERTER_UNWIND":
      return ICAAccountType.CONVERTER_UNWIND;
    case 7:
    case "CONVERTER_TRADE":
      return ICAAccountType.CONVERTER_TRADE;
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
    case ICAAccountType.COMMUNITY_POOL_DEPOSIT:
      return "COMMUNITY_POOL_DEPOSIT";
    case ICAAccountType.COMMUNITY_POOL_RETURN:
      return "COMMUNITY_POOL_RETURN";
    case ICAAccountType.CONVERTER_UNWIND:
      return "CONVERTER_UNWIND";
    case ICAAccountType.CONVERTER_TRADE:
      return "CONVERTER_TRADE";
    case ICAAccountType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface ICAAccount {
  chainId: string;
  type: ICAAccountType;
  connectionId: string;
  address: string;
}
export interface ICAAccountProtoMsg {
  typeUrl: "/stride.stakeibc.ICAAccount";
  value: Uint8Array;
}
/**
 * @name ICAAccountAmino
 * @package stride.stakeibc
 * @see proto type: stride.stakeibc.ICAAccount
 */
export interface ICAAccountAmino {
  chain_id?: string;
  type?: ICAAccountType;
  connection_id?: string;
  address?: string;
}
export interface ICAAccountAminoMsg {
  type: "/stride.stakeibc.ICAAccount";
  value: ICAAccountAmino;
}
export interface ICAAccountSDKType {
  chain_id: string;
  type: ICAAccountType;
  connection_id: string;
  address: string;
}
function createBaseICAAccount(): ICAAccount {
  return {
    chainId: "",
    type: 0,
    connectionId: "",
    address: ""
  };
}
export const ICAAccount = {
  typeUrl: "/stride.stakeibc.ICAAccount",
  encode(message: ICAAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): ICAAccount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseICAAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        case 2:
          message.type = reader.int32() as any;
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
  fromPartial(object: Partial<ICAAccount>): ICAAccount {
    const message = createBaseICAAccount();
    message.chainId = object.chainId ?? "";
    message.type = object.type ?? 0;
    message.connectionId = object.connectionId ?? "";
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: ICAAccountAmino): ICAAccount {
    const message = createBaseICAAccount();
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    }
    if (object.connection_id !== undefined && object.connection_id !== null) {
      message.connectionId = object.connection_id;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: ICAAccount): ICAAccountAmino {
    const obj: any = {};
    obj.chain_id = message.chainId === "" ? undefined : message.chainId;
    obj.type = message.type === 0 ? undefined : message.type;
    obj.connection_id = message.connectionId === "" ? undefined : message.connectionId;
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: ICAAccountAminoMsg): ICAAccount {
    return ICAAccount.fromAmino(object.value);
  },
  fromProtoMsg(message: ICAAccountProtoMsg): ICAAccount {
    return ICAAccount.decode(message.value);
  },
  toProto(message: ICAAccount): Uint8Array {
    return ICAAccount.encode(message).finish();
  },
  toProtoMsg(message: ICAAccount): ICAAccountProtoMsg {
    return {
      typeUrl: "/stride.stakeibc.ICAAccount",
      value: ICAAccount.encode(message).finish()
    };
  }
};