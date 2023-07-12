import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
/**
 * MsgSetWithdrawAddress sets the withdraw address for
 * a delegator (or validator self-delegation).
 */

export interface MsgSetWithdrawAddress {
  delegatorAddress: string;
  withdrawAddress: string;
}
/**
 * MsgSetWithdrawAddress sets the withdraw address for
 * a delegator (or validator self-delegation).
 */

export interface MsgSetWithdrawAddressSDKType {
  delegator_address: string;
  withdraw_address: string;
}
/** MsgSetWithdrawAddressResponse defines the Msg/SetWithdrawAddress response type. */

export interface MsgSetWithdrawAddressResponse {}
/** MsgSetWithdrawAddressResponse defines the Msg/SetWithdrawAddress response type. */

export interface MsgSetWithdrawAddressResponseSDKType {}
/**
 * MsgWithdrawDelegatorReward represents delegation withdrawal to a delegator
 * from a single validator.
 */

export interface MsgWithdrawDelegatorReward {
  delegatorAddress: string;
  validatorAddress: string;
}
/**
 * MsgWithdrawDelegatorReward represents delegation withdrawal to a delegator
 * from a single validator.
 */

export interface MsgWithdrawDelegatorRewardSDKType {
  delegator_address: string;
  validator_address: string;
}
/** MsgWithdrawDelegatorRewardResponse defines the Msg/WithdrawDelegatorReward response type. */

export interface MsgWithdrawDelegatorRewardResponse {}
/** MsgWithdrawDelegatorRewardResponse defines the Msg/WithdrawDelegatorReward response type. */

export interface MsgWithdrawDelegatorRewardResponseSDKType {}
/**
 * MsgWithdrawValidatorCommission withdraws the full commission to the validator
 * address.
 */

export interface MsgWithdrawValidatorCommission {
  validatorAddress: string;
}
/**
 * MsgWithdrawValidatorCommission withdraws the full commission to the validator
 * address.
 */

export interface MsgWithdrawValidatorCommissionSDKType {
  validator_address: string;
}
/** MsgWithdrawValidatorCommissionResponse defines the Msg/WithdrawValidatorCommission response type. */

export interface MsgWithdrawValidatorCommissionResponse {}
/** MsgWithdrawValidatorCommissionResponse defines the Msg/WithdrawValidatorCommission response type. */

export interface MsgWithdrawValidatorCommissionResponseSDKType {}
/** MsgWithdrawTokenizeShareRecordReward withdraws tokenize share rewards for a specific record */

export interface MsgWithdrawTokenizeShareRecordReward {
  ownerAddress: string;
  recordId: Long;
}
/** MsgWithdrawTokenizeShareRecordReward withdraws tokenize share rewards for a specific record */

export interface MsgWithdrawTokenizeShareRecordRewardSDKType {
  owner_address: string;
  record_id: Long;
}
/** MsgWithdrawTokenizeShareRecordReward defines the Msg/WithdrawTokenizeShareRecordReward response type. */

export interface MsgWithdrawTokenizeShareRecordRewardResponse {}
/** MsgWithdrawTokenizeShareRecordReward defines the Msg/WithdrawTokenizeShareRecordReward response type. */

export interface MsgWithdrawTokenizeShareRecordRewardResponseSDKType {}
/**
 * MsgWithdrawAllTokenizeShareRecordReward withdraws tokenize share rewards or all
 * records owned by the designated owner
 */

export interface MsgWithdrawAllTokenizeShareRecordReward {
  ownerAddress: string;
}
/**
 * MsgWithdrawAllTokenizeShareRecordReward withdraws tokenize share rewards or all
 * records owned by the designated owner
 */

export interface MsgWithdrawAllTokenizeShareRecordRewardSDKType {
  owner_address: string;
}
/** MsgWithdrawAllTokenizeShareRecordRewardResponse defines the Msg/WithdrawTokenizeShareRecordReward response type. */

export interface MsgWithdrawAllTokenizeShareRecordRewardResponse {}
/** MsgWithdrawAllTokenizeShareRecordRewardResponse defines the Msg/WithdrawTokenizeShareRecordReward response type. */

export interface MsgWithdrawAllTokenizeShareRecordRewardResponseSDKType {}
/**
 * MsgFundCommunityPool allows an account to directly
 * fund the community pool.
 */

export interface MsgFundCommunityPool {
  amount: Coin[];
  depositor: string;
}
/**
 * MsgFundCommunityPool allows an account to directly
 * fund the community pool.
 */

export interface MsgFundCommunityPoolSDKType {
  amount: CoinSDKType[];
  depositor: string;
}
/** MsgFundCommunityPoolResponse defines the Msg/FundCommunityPool response type. */

export interface MsgFundCommunityPoolResponse {}
/** MsgFundCommunityPoolResponse defines the Msg/FundCommunityPool response type. */

export interface MsgFundCommunityPoolResponseSDKType {}

function createBaseMsgSetWithdrawAddress(): MsgSetWithdrawAddress {
  return {
    delegatorAddress: "",
    withdrawAddress: ""
  };
}

export const MsgSetWithdrawAddress = {
  encode(message: MsgSetWithdrawAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }

    if (message.withdrawAddress !== "") {
      writer.uint32(18).string(message.withdrawAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetWithdrawAddress {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetWithdrawAddress();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;

        case 2:
          message.withdrawAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgSetWithdrawAddress>): MsgSetWithdrawAddress {
    const message = createBaseMsgSetWithdrawAddress();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.withdrawAddress = object.withdrawAddress ?? "";
    return message;
  }

};

function createBaseMsgSetWithdrawAddressResponse(): MsgSetWithdrawAddressResponse {
  return {};
}

export const MsgSetWithdrawAddressResponse = {
  encode(_: MsgSetWithdrawAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetWithdrawAddressResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetWithdrawAddressResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<MsgSetWithdrawAddressResponse>): MsgSetWithdrawAddressResponse {
    const message = createBaseMsgSetWithdrawAddressResponse();
    return message;
  }

};

function createBaseMsgWithdrawDelegatorReward(): MsgWithdrawDelegatorReward {
  return {
    delegatorAddress: "",
    validatorAddress: ""
  };
}

export const MsgWithdrawDelegatorReward = {
  encode(message: MsgWithdrawDelegatorReward, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }

    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawDelegatorReward {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawDelegatorReward();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;

        case 2:
          message.validatorAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgWithdrawDelegatorReward>): MsgWithdrawDelegatorReward {
    const message = createBaseMsgWithdrawDelegatorReward();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  }

};

function createBaseMsgWithdrawDelegatorRewardResponse(): MsgWithdrawDelegatorRewardResponse {
  return {};
}

export const MsgWithdrawDelegatorRewardResponse = {
  encode(_: MsgWithdrawDelegatorRewardResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawDelegatorRewardResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawDelegatorRewardResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<MsgWithdrawDelegatorRewardResponse>): MsgWithdrawDelegatorRewardResponse {
    const message = createBaseMsgWithdrawDelegatorRewardResponse();
    return message;
  }

};

function createBaseMsgWithdrawValidatorCommission(): MsgWithdrawValidatorCommission {
  return {
    validatorAddress: ""
  };
}

export const MsgWithdrawValidatorCommission = {
  encode(message: MsgWithdrawValidatorCommission, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawValidatorCommission {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawValidatorCommission();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgWithdrawValidatorCommission>): MsgWithdrawValidatorCommission {
    const message = createBaseMsgWithdrawValidatorCommission();
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  }

};

function createBaseMsgWithdrawValidatorCommissionResponse(): MsgWithdrawValidatorCommissionResponse {
  return {};
}

export const MsgWithdrawValidatorCommissionResponse = {
  encode(_: MsgWithdrawValidatorCommissionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawValidatorCommissionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawValidatorCommissionResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<MsgWithdrawValidatorCommissionResponse>): MsgWithdrawValidatorCommissionResponse {
    const message = createBaseMsgWithdrawValidatorCommissionResponse();
    return message;
  }

};

function createBaseMsgWithdrawTokenizeShareRecordReward(): MsgWithdrawTokenizeShareRecordReward {
  return {
    ownerAddress: "",
    recordId: Long.UZERO
  };
}

export const MsgWithdrawTokenizeShareRecordReward = {
  encode(message: MsgWithdrawTokenizeShareRecordReward, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ownerAddress !== "") {
      writer.uint32(10).string(message.ownerAddress);
    }

    if (!message.recordId.isZero()) {
      writer.uint32(16).uint64(message.recordId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawTokenizeShareRecordReward {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawTokenizeShareRecordReward();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.ownerAddress = reader.string();
          break;

        case 2:
          message.recordId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgWithdrawTokenizeShareRecordReward>): MsgWithdrawTokenizeShareRecordReward {
    const message = createBaseMsgWithdrawTokenizeShareRecordReward();
    message.ownerAddress = object.ownerAddress ?? "";
    message.recordId = object.recordId !== undefined && object.recordId !== null ? Long.fromValue(object.recordId) : Long.UZERO;
    return message;
  }

};

function createBaseMsgWithdrawTokenizeShareRecordRewardResponse(): MsgWithdrawTokenizeShareRecordRewardResponse {
  return {};
}

export const MsgWithdrawTokenizeShareRecordRewardResponse = {
  encode(_: MsgWithdrawTokenizeShareRecordRewardResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawTokenizeShareRecordRewardResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawTokenizeShareRecordRewardResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<MsgWithdrawTokenizeShareRecordRewardResponse>): MsgWithdrawTokenizeShareRecordRewardResponse {
    const message = createBaseMsgWithdrawTokenizeShareRecordRewardResponse();
    return message;
  }

};

function createBaseMsgWithdrawAllTokenizeShareRecordReward(): MsgWithdrawAllTokenizeShareRecordReward {
  return {
    ownerAddress: ""
  };
}

export const MsgWithdrawAllTokenizeShareRecordReward = {
  encode(message: MsgWithdrawAllTokenizeShareRecordReward, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ownerAddress !== "") {
      writer.uint32(10).string(message.ownerAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawAllTokenizeShareRecordReward {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawAllTokenizeShareRecordReward();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.ownerAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgWithdrawAllTokenizeShareRecordReward>): MsgWithdrawAllTokenizeShareRecordReward {
    const message = createBaseMsgWithdrawAllTokenizeShareRecordReward();
    message.ownerAddress = object.ownerAddress ?? "";
    return message;
  }

};

function createBaseMsgWithdrawAllTokenizeShareRecordRewardResponse(): MsgWithdrawAllTokenizeShareRecordRewardResponse {
  return {};
}

export const MsgWithdrawAllTokenizeShareRecordRewardResponse = {
  encode(_: MsgWithdrawAllTokenizeShareRecordRewardResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawAllTokenizeShareRecordRewardResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawAllTokenizeShareRecordRewardResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<MsgWithdrawAllTokenizeShareRecordRewardResponse>): MsgWithdrawAllTokenizeShareRecordRewardResponse {
    const message = createBaseMsgWithdrawAllTokenizeShareRecordRewardResponse();
    return message;
  }

};

function createBaseMsgFundCommunityPool(): MsgFundCommunityPool {
  return {
    amount: [],
    depositor: ""
  };
}

export const MsgFundCommunityPool = {
  encode(message: MsgFundCommunityPool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.depositor !== "") {
      writer.uint32(18).string(message.depositor);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgFundCommunityPool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFundCommunityPool();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;

        case 2:
          message.depositor = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgFundCommunityPool>): MsgFundCommunityPool {
    const message = createBaseMsgFundCommunityPool();
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    message.depositor = object.depositor ?? "";
    return message;
  }

};

function createBaseMsgFundCommunityPoolResponse(): MsgFundCommunityPoolResponse {
  return {};
}

export const MsgFundCommunityPoolResponse = {
  encode(_: MsgFundCommunityPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgFundCommunityPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFundCommunityPoolResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<MsgFundCommunityPoolResponse>): MsgFundCommunityPoolResponse {
    const message = createBaseMsgFundCommunityPoolResponse();
    return message;
  }

};