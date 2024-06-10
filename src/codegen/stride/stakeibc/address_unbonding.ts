import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
export interface AddressUnbonding {
  address: string;
  receiver: string;
  unbondingEstimatedTime: string;
  amount: string;
  denom: string;
  claimIsPending: boolean;
  epochNumber: Long;
}
export interface AddressUnbondingSDKType {
  address: string;
  receiver: string;
  unbonding_estimated_time: string;
  amount: string;
  denom: string;
  claim_is_pending: boolean;
  epoch_number: Long;
}

function createBaseAddressUnbonding(): AddressUnbonding {
  return {
    address: "",
    receiver: "",
    unbondingEstimatedTime: "",
    amount: "",
    denom: "",
    claimIsPending: false,
    epochNumber: Long.UZERO
  };
}

export const AddressUnbonding = {
  encode(message: AddressUnbonding, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }

    if (message.unbondingEstimatedTime !== "") {
      writer.uint32(26).string(message.unbondingEstimatedTime);
    }

    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }

    if (message.denom !== "") {
      writer.uint32(42).string(message.denom);
    }

    if (message.claimIsPending === true) {
      writer.uint32(64).bool(message.claimIsPending);
    }

    if (!message.epochNumber.isZero()) {
      writer.uint32(72).uint64(message.epochNumber);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddressUnbonding {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddressUnbonding();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        case 2:
          message.receiver = reader.string();
          break;

        case 3:
          message.unbondingEstimatedTime = reader.string();
          break;

        case 4:
          message.amount = reader.string();
          break;

        case 5:
          message.denom = reader.string();
          break;

        case 8:
          message.claimIsPending = reader.bool();
          break;

        case 9:
          message.epochNumber = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<AddressUnbonding>): AddressUnbonding {
    const message = createBaseAddressUnbonding();
    message.address = object.address ?? "";
    message.receiver = object.receiver ?? "";
    message.unbondingEstimatedTime = object.unbondingEstimatedTime ?? "";
    message.amount = object.amount ?? "";
    message.denom = object.denom ?? "";
    message.claimIsPending = object.claimIsPending ?? false;
    message.epochNumber = object.epochNumber !== undefined && object.epochNumber !== null ? Long.fromValue(object.epochNumber) : Long.UZERO;
    return message;
  }

};