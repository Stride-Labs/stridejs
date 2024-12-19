import { Params } from "./params";
import { UserRedemptionRecord, EpochUnbondingRecord, DepositRecord, LSMTokenDeposit } from "./records";
import { BinaryReader, BinaryWriter } from "../../binary";
function createBaseGenesisState() {
  return {
    params: Params.fromPartial({}),
    portId: "",
    userRedemptionRecordList: [],
    userRedemptionRecordCount: BigInt(0),
    epochUnbondingRecordList: [],
    depositRecordList: [],
    depositRecordCount: BigInt(0),
    lsmTokenDepositList: []
  };
}
const GenesisState = {
  typeUrl: "/stride.records.GenesisState",
  encode(message, writer = BinaryWriter.create()) {
    if (message.params !== void 0) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.portId !== "") {
      writer.uint32(18).string(message.portId);
    }
    for (const v of message.userRedemptionRecordList) {
      UserRedemptionRecord.encode(v, writer.uint32(26).fork()).ldelim();
    }
    if (message.userRedemptionRecordCount !== BigInt(0)) {
      writer.uint32(32).uint64(message.userRedemptionRecordCount);
    }
    for (const v of message.epochUnbondingRecordList) {
      EpochUnbondingRecord.encode(v, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.depositRecordList) {
      DepositRecord.encode(v, writer.uint32(58).fork()).ldelim();
    }
    if (message.depositRecordCount !== BigInt(0)) {
      writer.uint32(64).uint64(message.depositRecordCount);
    }
    for (const v of message.lsmTokenDepositList) {
      LSMTokenDeposit.encode(v, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
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
          message.userRedemptionRecordCount = reader.uint64();
          break;
        case 5:
          message.epochUnbondingRecordList.push(EpochUnbondingRecord.decode(reader, reader.uint32()));
          break;
        case 7:
          message.depositRecordList.push(DepositRecord.decode(reader, reader.uint32()));
          break;
        case 8:
          message.depositRecordCount = reader.uint64();
          break;
        case 9:
          message.lsmTokenDepositList.push(LSMTokenDeposit.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseGenesisState();
    message.params = object.params !== void 0 && object.params !== null ? Params.fromPartial(object.params) : void 0;
    message.portId = object.portId ?? "";
    message.userRedemptionRecordList = object.userRedemptionRecordList?.map((e) => UserRedemptionRecord.fromPartial(e)) || [];
    message.userRedemptionRecordCount = object.userRedemptionRecordCount !== void 0 && object.userRedemptionRecordCount !== null ? BigInt(object.userRedemptionRecordCount.toString()) : BigInt(0);
    message.epochUnbondingRecordList = object.epochUnbondingRecordList?.map((e) => EpochUnbondingRecord.fromPartial(e)) || [];
    message.depositRecordList = object.depositRecordList?.map((e) => DepositRecord.fromPartial(e)) || [];
    message.depositRecordCount = object.depositRecordCount !== void 0 && object.depositRecordCount !== null ? BigInt(object.depositRecordCount.toString()) : BigInt(0);
    message.lsmTokenDepositList = object.lsmTokenDepositList?.map((e) => LSMTokenDeposit.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseGenesisState();
    if (object.params !== void 0 && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    if (object.port_id !== void 0 && object.port_id !== null) {
      message.portId = object.port_id;
    }
    message.userRedemptionRecordList = object.user_redemption_record_list?.map((e) => UserRedemptionRecord.fromAmino(e)) || [];
    if (object.user_redemption_record_count !== void 0 && object.user_redemption_record_count !== null) {
      message.userRedemptionRecordCount = BigInt(object.user_redemption_record_count);
    }
    message.epochUnbondingRecordList = object.epoch_unbonding_record_list?.map((e) => EpochUnbondingRecord.fromAmino(e)) || [];
    message.depositRecordList = object.deposit_record_list?.map((e) => DepositRecord.fromAmino(e)) || [];
    if (object.deposit_record_count !== void 0 && object.deposit_record_count !== null) {
      message.depositRecordCount = BigInt(object.deposit_record_count);
    }
    message.lsmTokenDepositList = object.lsm_token_deposit_list?.map((e) => LSMTokenDeposit.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.params = message.params ? Params.toAmino(message.params) : void 0;
    obj.port_id = message.portId === "" ? void 0 : message.portId;
    if (message.userRedemptionRecordList) {
      obj.user_redemption_record_list = message.userRedemptionRecordList.map((e) => e ? UserRedemptionRecord.toAmino(e) : void 0);
    } else {
      obj.user_redemption_record_list = message.userRedemptionRecordList;
    }
    obj.user_redemption_record_count = message.userRedemptionRecordCount !== BigInt(0) ? message.userRedemptionRecordCount.toString() : void 0;
    if (message.epochUnbondingRecordList) {
      obj.epoch_unbonding_record_list = message.epochUnbondingRecordList.map((e) => e ? EpochUnbondingRecord.toAmino(e) : void 0);
    } else {
      obj.epoch_unbonding_record_list = message.epochUnbondingRecordList;
    }
    if (message.depositRecordList) {
      obj.deposit_record_list = message.depositRecordList.map((e) => e ? DepositRecord.toAmino(e) : void 0);
    } else {
      obj.deposit_record_list = message.depositRecordList;
    }
    obj.deposit_record_count = message.depositRecordCount !== BigInt(0) ? message.depositRecordCount.toString() : void 0;
    if (message.lsmTokenDepositList) {
      obj.lsm_token_deposit_list = message.lsmTokenDepositList.map((e) => e ? LSMTokenDeposit.toAmino(e) : void 0);
    } else {
      obj.lsm_token_deposit_list = message.lsmTokenDepositList;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return GenesisState.decode(message.value);
  },
  toProto(message) {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.records.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
export {
  GenesisState
};
