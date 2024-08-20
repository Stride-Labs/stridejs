import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { UserRedemptionRecord, UserRedemptionRecordAmino, UserRedemptionRecordSDKType, EpochUnbondingRecord, EpochUnbondingRecordAmino, EpochUnbondingRecordSDKType, DepositRecord, DepositRecordAmino, DepositRecordSDKType, LSMTokenDeposit, LSMTokenDepositAmino, LSMTokenDepositSDKType } from "./records";
import { BinaryReader, BinaryWriter } from "../../binary";
/** GenesisState defines the records module's genesis state. */
export interface GenesisState {
  params: Params;
  portId: string;
  userRedemptionRecordList: UserRedemptionRecord[];
  userRedemptionRecordCount: bigint;
  epochUnbondingRecordList: EpochUnbondingRecord[];
  depositRecordList: DepositRecord[];
  depositRecordCount: bigint;
  lsmTokenDepositList: LSMTokenDeposit[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/stride.records.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the records module's genesis state. */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  port_id?: string;
  user_redemption_record_list?: UserRedemptionRecordAmino[];
  user_redemption_record_count?: string;
  epoch_unbonding_record_list?: EpochUnbondingRecordAmino[];
  deposit_record_list?: DepositRecordAmino[];
  deposit_record_count?: string;
  lsm_token_deposit_list?: LSMTokenDepositAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/stride.records.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the records module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  port_id: string;
  user_redemption_record_list: UserRedemptionRecordSDKType[];
  user_redemption_record_count: bigint;
  epoch_unbonding_record_list: EpochUnbondingRecordSDKType[];
  deposit_record_list: DepositRecordSDKType[];
  deposit_record_count: bigint;
  lsm_token_deposit_list: LSMTokenDepositSDKType[];
}
function createBaseGenesisState(): GenesisState {
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
export const GenesisState = {
  typeUrl: "/stride.records.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.portId !== "") {
      writer.uint32(18).string(message.portId);
    }
    for (const v of message.userRedemptionRecordList) {
      UserRedemptionRecord.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.userRedemptionRecordCount !== BigInt(0)) {
      writer.uint32(32).uint64(message.userRedemptionRecordCount);
    }
    for (const v of message.epochUnbondingRecordList) {
      EpochUnbondingRecord.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.depositRecordList) {
      DepositRecord.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.depositRecordCount !== BigInt(0)) {
      writer.uint32(64).uint64(message.depositRecordCount);
    }
    for (const v of message.lsmTokenDepositList) {
      LSMTokenDeposit.encode(v!, writer.uint32(74).fork()).ldelim();
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
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.portId = object.portId ?? "";
    message.userRedemptionRecordList = object.userRedemptionRecordList?.map(e => UserRedemptionRecord.fromPartial(e)) || [];
    message.userRedemptionRecordCount = object.userRedemptionRecordCount !== undefined && object.userRedemptionRecordCount !== null ? BigInt(object.userRedemptionRecordCount.toString()) : BigInt(0);
    message.epochUnbondingRecordList = object.epochUnbondingRecordList?.map(e => EpochUnbondingRecord.fromPartial(e)) || [];
    message.depositRecordList = object.depositRecordList?.map(e => DepositRecord.fromPartial(e)) || [];
    message.depositRecordCount = object.depositRecordCount !== undefined && object.depositRecordCount !== null ? BigInt(object.depositRecordCount.toString()) : BigInt(0);
    message.lsmTokenDepositList = object.lsmTokenDepositList?.map(e => LSMTokenDeposit.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    if (object.port_id !== undefined && object.port_id !== null) {
      message.portId = object.port_id;
    }
    message.userRedemptionRecordList = object.user_redemption_record_list?.map(e => UserRedemptionRecord.fromAmino(e)) || [];
    if (object.user_redemption_record_count !== undefined && object.user_redemption_record_count !== null) {
      message.userRedemptionRecordCount = BigInt(object.user_redemption_record_count);
    }
    message.epochUnbondingRecordList = object.epoch_unbonding_record_list?.map(e => EpochUnbondingRecord.fromAmino(e)) || [];
    message.depositRecordList = object.deposit_record_list?.map(e => DepositRecord.fromAmino(e)) || [];
    if (object.deposit_record_count !== undefined && object.deposit_record_count !== null) {
      message.depositRecordCount = BigInt(object.deposit_record_count);
    }
    message.lsmTokenDepositList = object.lsm_token_deposit_list?.map(e => LSMTokenDeposit.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    obj.port_id = message.portId === "" ? undefined : message.portId;
    if (message.userRedemptionRecordList) {
      obj.user_redemption_record_list = message.userRedemptionRecordList.map(e => e ? UserRedemptionRecord.toAmino(e) : undefined);
    } else {
      obj.user_redemption_record_list = message.userRedemptionRecordList;
    }
    obj.user_redemption_record_count = message.userRedemptionRecordCount !== BigInt(0) ? message.userRedemptionRecordCount.toString() : undefined;
    if (message.epochUnbondingRecordList) {
      obj.epoch_unbonding_record_list = message.epochUnbondingRecordList.map(e => e ? EpochUnbondingRecord.toAmino(e) : undefined);
    } else {
      obj.epoch_unbonding_record_list = message.epochUnbondingRecordList;
    }
    if (message.depositRecordList) {
      obj.deposit_record_list = message.depositRecordList.map(e => e ? DepositRecord.toAmino(e) : undefined);
    } else {
      obj.deposit_record_list = message.depositRecordList;
    }
    obj.deposit_record_count = message.depositRecordCount !== BigInt(0) ? message.depositRecordCount.toString() : undefined;
    if (message.lsmTokenDepositList) {
      obj.lsm_token_deposit_list = message.lsmTokenDepositList.map(e => e ? LSMTokenDeposit.toAmino(e) : undefined);
    } else {
      obj.lsm_token_deposit_list = message.lsmTokenDepositList;
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
      typeUrl: "/stride.records.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};