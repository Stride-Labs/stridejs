import { Validator, ValidatorSDKType } from "./validator";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
export interface Delegation {
  delegateAcctAddress: string;
  validator: Validator;
  amt: Long;
}
export interface DelegationSDKType {
  delegate_acct_address: string;
  validator: ValidatorSDKType;
  amt: Long;
}

function createBaseDelegation(): Delegation {
  return {
    delegateAcctAddress: "",
    validator: undefined,
    amt: Long.ZERO
  };
}

export const Delegation = {
  encode(message: Delegation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegateAcctAddress !== "") {
      writer.uint32(10).string(message.delegateAcctAddress);
    }

    if (message.validator !== undefined) {
      Validator.encode(message.validator, writer.uint32(18).fork()).ldelim();
    }

    if (!message.amt.isZero()) {
      writer.uint32(24).int64(message.amt);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Delegation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegation();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.delegateAcctAddress = reader.string();
          break;

        case 2:
          message.validator = Validator.decode(reader, reader.uint32());
          break;

        case 3:
          message.amt = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Delegation>): Delegation {
    const message = createBaseDelegation();
    message.delegateAcctAddress = object.delegateAcctAddress ?? "";
    message.validator = object.validator !== undefined && object.validator !== null ? Validator.fromPartial(object.validator) : undefined;
    message.amt = object.amt !== undefined && object.amt !== null ? Long.fromValue(object.amt) : Long.ZERO;
    return message;
  }

};