import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
export interface ValidatorExchangeRate {
  internalTokensToSharesRate: string;
  epochNumber: Long;
}
export interface ValidatorExchangeRateSDKType {
  internal_tokens_to_shares_rate: string;
  epoch_number: Long;
}
export interface Validator {
  name: string;
  address: string;
  delegationAmt: string;
  weight: Long;
  internalExchangeRate: ValidatorExchangeRate;
}
export interface ValidatorSDKType {
  name: string;
  address: string;
  delegation_amt: string;
  weight: Long;
  internal_exchange_rate: ValidatorExchangeRateSDKType;
}

function createBaseValidatorExchangeRate(): ValidatorExchangeRate {
  return {
    internalTokensToSharesRate: "",
    epochNumber: Long.UZERO
  };
}

export const ValidatorExchangeRate = {
  encode(message: ValidatorExchangeRate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.internalTokensToSharesRate !== "") {
      writer.uint32(10).string(message.internalTokensToSharesRate);
    }

    if (!message.epochNumber.isZero()) {
      writer.uint32(16).uint64(message.epochNumber);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorExchangeRate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorExchangeRate();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.internalTokensToSharesRate = reader.string();
          break;

        case 2:
          message.epochNumber = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ValidatorExchangeRate>): ValidatorExchangeRate {
    const message = createBaseValidatorExchangeRate();
    message.internalTokensToSharesRate = object.internalTokensToSharesRate ?? "";
    message.epochNumber = object.epochNumber !== undefined && object.epochNumber !== null ? Long.fromValue(object.epochNumber) : Long.UZERO;
    return message;
  }

};

function createBaseValidator(): Validator {
  return {
    name: "",
    address: "",
    delegationAmt: "",
    weight: Long.UZERO,
    internalExchangeRate: undefined
  };
}

export const Validator = {
  encode(message: Validator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }

    if (message.delegationAmt !== "") {
      writer.uint32(42).string(message.delegationAmt);
    }

    if (!message.weight.isZero()) {
      writer.uint32(48).uint64(message.weight);
    }

    if (message.internalExchangeRate !== undefined) {
      ValidatorExchangeRate.encode(message.internalExchangeRate, writer.uint32(58).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Validator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidator();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 2:
          message.address = reader.string();
          break;

        case 5:
          message.delegationAmt = reader.string();
          break;

        case 6:
          message.weight = (reader.uint64() as Long);
          break;

        case 7:
          message.internalExchangeRate = ValidatorExchangeRate.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Validator>): Validator {
    const message = createBaseValidator();
    message.name = object.name ?? "";
    message.address = object.address ?? "";
    message.delegationAmt = object.delegationAmt ?? "";
    message.weight = object.weight !== undefined && object.weight !== null ? Long.fromValue(object.weight) : Long.UZERO;
    message.internalExchangeRate = object.internalExchangeRate !== undefined && object.internalExchangeRate !== null ? ValidatorExchangeRate.fromPartial(object.internalExchangeRate) : undefined;
    return message;
  }

};