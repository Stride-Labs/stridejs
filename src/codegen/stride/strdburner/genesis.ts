import { BinaryReader, BinaryWriter } from "../../binary";
/** Stores the total burned for each account */
export interface AddressBurnedAmount {
  /** The address of the account */
  address: string;
  /** The total burned from the account */
  amount: string;
}
export interface AddressBurnedAmountProtoMsg {
  typeUrl: "/stride.strdburner.AddressBurnedAmount";
  value: Uint8Array;
}
/**
 * Stores the total burned for each account
 * @name AddressBurnedAmountAmino
 * @package stride.strdburner
 * @see proto type: stride.strdburner.AddressBurnedAmount
 */
export interface AddressBurnedAmountAmino {
  /**
   * The address of the account
   */
  address?: string;
  /**
   * The total burned from the account
   */
  amount?: string;
}
export interface AddressBurnedAmountAminoMsg {
  type: "/stride.strdburner.AddressBurnedAmount";
  value: AddressBurnedAmountAmino;
}
/** Stores the total burned for each account */
export interface AddressBurnedAmountSDKType {
  address: string;
  amount: string;
}
/** Stores stride and non-stride linked addresses */
export interface LinkedAddresses {
  /** The stride address for the account */
  strideAddress: string;
  /** The non-stride address that is linked */
  linkedAddress: string;
}
export interface LinkedAddressesProtoMsg {
  typeUrl: "/stride.strdburner.LinkedAddresses";
  value: Uint8Array;
}
/**
 * Stores stride and non-stride linked addresses
 * @name LinkedAddressesAmino
 * @package stride.strdburner
 * @see proto type: stride.strdburner.LinkedAddresses
 */
export interface LinkedAddressesAmino {
  /**
   * The stride address for the account
   */
  stride_address?: string;
  /**
   * The non-stride address that is linked
   */
  linked_address?: string;
}
export interface LinkedAddressesAminoMsg {
  type: "/stride.strdburner.LinkedAddresses";
  value: LinkedAddressesAmino;
}
/** Stores stride and non-stride linked addresses */
export interface LinkedAddressesSDKType {
  stride_address: string;
  linked_address: string;
}
/** GenesisState defines the strdburner module's genesis state */
export interface GenesisState {
  /** Total amount of ustrd burned */
  totalUstrdBurned: string;
  /** Total amount of ustrd burned from the protocol */
  protocolUstrdBurned: string;
  /** Total amount of ustrd burned from users */
  totalUserUstrdBurned: string;
  /** List of the amount burned from each account */
  burnedByAccount: AddressBurnedAmount[];
  /** List of the linked addresses */
  linkedAddresses: LinkedAddresses[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/stride.strdburner.GenesisState";
  value: Uint8Array;
}
/**
 * GenesisState defines the strdburner module's genesis state
 * @name GenesisStateAmino
 * @package stride.strdburner
 * @see proto type: stride.strdburner.GenesisState
 */
export interface GenesisStateAmino {
  /**
   * Total amount of ustrd burned
   */
  total_ustrd_burned?: string;
  /**
   * Total amount of ustrd burned from the protocol
   */
  protocol_ustrd_burned?: string;
  /**
   * Total amount of ustrd burned from users
   */
  total_user_ustrd_burned?: string;
  /**
   * List of the amount burned from each account
   */
  burned_by_account?: AddressBurnedAmountAmino[];
  /**
   * List of the linked addresses
   */
  linked_addresses?: LinkedAddressesAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/stride.strdburner.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the strdburner module's genesis state */
export interface GenesisStateSDKType {
  total_ustrd_burned: string;
  protocol_ustrd_burned: string;
  total_user_ustrd_burned: string;
  burned_by_account: AddressBurnedAmountSDKType[];
  linked_addresses: LinkedAddressesSDKType[];
}
function createBaseAddressBurnedAmount(): AddressBurnedAmount {
  return {
    address: "",
    amount: ""
  };
}
export const AddressBurnedAmount = {
  typeUrl: "/stride.strdburner.AddressBurnedAmount",
  encode(message: AddressBurnedAmount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AddressBurnedAmount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddressBurnedAmount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<AddressBurnedAmount>): AddressBurnedAmount {
    const message = createBaseAddressBurnedAmount();
    message.address = object.address ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: AddressBurnedAmountAmino): AddressBurnedAmount {
    const message = createBaseAddressBurnedAmount();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: AddressBurnedAmount): AddressBurnedAmountAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: AddressBurnedAmountAminoMsg): AddressBurnedAmount {
    return AddressBurnedAmount.fromAmino(object.value);
  },
  fromProtoMsg(message: AddressBurnedAmountProtoMsg): AddressBurnedAmount {
    return AddressBurnedAmount.decode(message.value);
  },
  toProto(message: AddressBurnedAmount): Uint8Array {
    return AddressBurnedAmount.encode(message).finish();
  },
  toProtoMsg(message: AddressBurnedAmount): AddressBurnedAmountProtoMsg {
    return {
      typeUrl: "/stride.strdburner.AddressBurnedAmount",
      value: AddressBurnedAmount.encode(message).finish()
    };
  }
};
function createBaseLinkedAddresses(): LinkedAddresses {
  return {
    strideAddress: "",
    linkedAddress: ""
  };
}
export const LinkedAddresses = {
  typeUrl: "/stride.strdburner.LinkedAddresses",
  encode(message: LinkedAddresses, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.strideAddress !== "") {
      writer.uint32(10).string(message.strideAddress);
    }
    if (message.linkedAddress !== "") {
      writer.uint32(18).string(message.linkedAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LinkedAddresses {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkedAddresses();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.strideAddress = reader.string();
          break;
        case 2:
          message.linkedAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<LinkedAddresses>): LinkedAddresses {
    const message = createBaseLinkedAddresses();
    message.strideAddress = object.strideAddress ?? "";
    message.linkedAddress = object.linkedAddress ?? "";
    return message;
  },
  fromAmino(object: LinkedAddressesAmino): LinkedAddresses {
    const message = createBaseLinkedAddresses();
    if (object.stride_address !== undefined && object.stride_address !== null) {
      message.strideAddress = object.stride_address;
    }
    if (object.linked_address !== undefined && object.linked_address !== null) {
      message.linkedAddress = object.linked_address;
    }
    return message;
  },
  toAmino(message: LinkedAddresses): LinkedAddressesAmino {
    const obj: any = {};
    obj.stride_address = message.strideAddress === "" ? undefined : message.strideAddress;
    obj.linked_address = message.linkedAddress === "" ? undefined : message.linkedAddress;
    return obj;
  },
  fromAminoMsg(object: LinkedAddressesAminoMsg): LinkedAddresses {
    return LinkedAddresses.fromAmino(object.value);
  },
  fromProtoMsg(message: LinkedAddressesProtoMsg): LinkedAddresses {
    return LinkedAddresses.decode(message.value);
  },
  toProto(message: LinkedAddresses): Uint8Array {
    return LinkedAddresses.encode(message).finish();
  },
  toProtoMsg(message: LinkedAddresses): LinkedAddressesProtoMsg {
    return {
      typeUrl: "/stride.strdburner.LinkedAddresses",
      value: LinkedAddresses.encode(message).finish()
    };
  }
};
function createBaseGenesisState(): GenesisState {
  return {
    totalUstrdBurned: "",
    protocolUstrdBurned: "",
    totalUserUstrdBurned: "",
    burnedByAccount: [],
    linkedAddresses: []
  };
}
export const GenesisState = {
  typeUrl: "/stride.strdburner.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.totalUstrdBurned !== "") {
      writer.uint32(74).string(message.totalUstrdBurned);
    }
    if (message.protocolUstrdBurned !== "") {
      writer.uint32(10).string(message.protocolUstrdBurned);
    }
    if (message.totalUserUstrdBurned !== "") {
      writer.uint32(18).string(message.totalUserUstrdBurned);
    }
    for (const v of message.burnedByAccount) {
      AddressBurnedAmount.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.linkedAddresses) {
      LinkedAddresses.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 9:
          message.totalUstrdBurned = reader.string();
          break;
        case 1:
          message.protocolUstrdBurned = reader.string();
          break;
        case 2:
          message.totalUserUstrdBurned = reader.string();
          break;
        case 3:
          message.burnedByAccount.push(AddressBurnedAmount.decode(reader, reader.uint32()));
          break;
        case 4:
          message.linkedAddresses.push(LinkedAddresses.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.totalUstrdBurned = object.totalUstrdBurned ?? "";
    message.protocolUstrdBurned = object.protocolUstrdBurned ?? "";
    message.totalUserUstrdBurned = object.totalUserUstrdBurned ?? "";
    message.burnedByAccount = object.burnedByAccount?.map(e => AddressBurnedAmount.fromPartial(e)) || [];
    message.linkedAddresses = object.linkedAddresses?.map(e => LinkedAddresses.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.total_ustrd_burned !== undefined && object.total_ustrd_burned !== null) {
      message.totalUstrdBurned = object.total_ustrd_burned;
    }
    if (object.protocol_ustrd_burned !== undefined && object.protocol_ustrd_burned !== null) {
      message.protocolUstrdBurned = object.protocol_ustrd_burned;
    }
    if (object.total_user_ustrd_burned !== undefined && object.total_user_ustrd_burned !== null) {
      message.totalUserUstrdBurned = object.total_user_ustrd_burned;
    }
    message.burnedByAccount = object.burned_by_account?.map(e => AddressBurnedAmount.fromAmino(e)) || [];
    message.linkedAddresses = object.linked_addresses?.map(e => LinkedAddresses.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.total_ustrd_burned = message.totalUstrdBurned === "" ? undefined : message.totalUstrdBurned;
    obj.protocol_ustrd_burned = message.protocolUstrdBurned === "" ? undefined : message.protocolUstrdBurned;
    obj.total_user_ustrd_burned = message.totalUserUstrdBurned === "" ? undefined : message.totalUserUstrdBurned;
    if (message.burnedByAccount) {
      obj.burned_by_account = message.burnedByAccount.map(e => e ? AddressBurnedAmount.toAmino(e) : undefined);
    } else {
      obj.burned_by_account = message.burnedByAccount;
    }
    if (message.linkedAddresses) {
      obj.linked_addresses = message.linkedAddresses.map(e => e ? LinkedAddresses.toAmino(e) : undefined);
    } else {
      obj.linked_addresses = message.linkedAddresses;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/stride.strdburner.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};