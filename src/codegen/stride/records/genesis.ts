import { Params, ParamsSDKType } from "./params";
import { UserRedemptionRecord, UserRedemptionRecordSDKType, EpochUnbondingRecord, EpochUnbondingRecordSDKType, DepositRecord, DepositRecordSDKType } from "./records";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
/** GenesisState defines the records module's genesis state. */

export interface GenesisState {
  params: Params;
  portId: string;
  userRedemptionRecordList: UserRedemptionRecord[];
  userRedemptionRecordCount: Long;
  epochUnbondingRecordList: EpochUnbondingRecord[];
  depositRecordList: DepositRecord[];
  depositRecordCount: Long;
}
/** GenesisState defines the records module's genesis state. */

export interface GenesisStateSDKType {
  params: ParamsSDKType;
  port_id: string;
  user_redemption_record_list: UserRedemptionRecordSDKType[];
  user_redemption_record_count: Long;
  epoch_unbonding_record_list: EpochUnbondingRecordSDKType[];
  deposit_record_list: DepositRecordSDKType[];
  deposit_record_count: Long;
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    portId: "",
    userRedemptionRecordList: [],
    userRedemptionRecordCount: Long.UZERO,
    epochUnbondingRecordList: [],
    depositRecordList: [],
    depositRecordCount: Long.UZERO
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    if (message.portId !== "") {
      writer.uint32(18).string(message.portId);
    }

    for (const v of message.userRedemptionRecordList) {
      UserRedemptionRecord.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    if (!message.userRedemptionRecordCount.isZero()) {
      writer.uint32(32).uint64(message.userRedemptionRecordCount);
    }

    for (const v of message.epochUnbondingRecordList) {
      EpochUnbondingRecord.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    for (const v of message.depositRecordList) {
      DepositRecord.encode(v!, writer.uint32(58).fork()).ldelim();
    }

    if (!message.depositRecordCount.isZero()) {
      writer.uint32(64).uint64(message.depositRecordCount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;

        case 2:
          message.portId = reader.string();
          break;

        case 3:
          message.userRedemptionRecordList.push(UserRedemptionRecord.decode(reader, reader.uint32()));
          break;

        case 4:
          message.userRedemptionRecordCount = (reader.uint64() as Long);
          break;

        case 5:
          message.epochUnbondingRecordList.push(EpochUnbondingRecord.decode(reader, reader.uint32()));
          break;

        case 7:
          message.depositRecordList.push(DepositRecord.decode(reader, reader.uint32()));
          break;

        case 8:
          message.depositRecordCount = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.portId = object.portId ?? "";
    message.userRedemptionRecordList = object.userRedemptionRecordList?.map(e => UserRedemptionRecord.fromPartial(e)) || [];
    message.userRedemptionRecordCount = object.userRedemptionRecordCount !== undefined && object.userRedemptionRecordCount !== null ? Long.fromValue(object.userRedemptionRecordCount) : Long.UZERO;
    message.epochUnbondingRecordList = object.epochUnbondingRecordList?.map(e => EpochUnbondingRecord.fromPartial(e)) || [];
    message.depositRecordList = object.depositRecordList?.map(e => DepositRecord.fromPartial(e)) || [];
    message.depositRecordCount = object.depositRecordCount !== undefined && object.depositRecordCount !== null ? Long.fromValue(object.depositRecordCount) : Long.UZERO;
    return message;
  }

};