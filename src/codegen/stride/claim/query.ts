import { Action, ActionSDKType, ClaimRecord, ClaimRecordSDKType } from "./claim";
import { Timestamp } from "../../google/protobuf/timestamp";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Params, ParamsSDKType } from "./params";
import { Period, PeriodSDKType } from "../vesting/vesting";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, toTimestamp, fromTimestamp } from "@osmonauts/helpers";
export interface ClaimStatus {
  airdropIdentifier: string;
  claimed: boolean;
}
export interface ClaimStatusSDKType {
  airdrop_identifier: string;
  claimed: boolean;
}
export interface QueryClaimStatusRequest {
  address: string;
}
export interface QueryClaimStatusRequestSDKType {
  address: string;
}
export interface QueryClaimStatusResponse {
  claimStatus: ClaimStatus[];
}
export interface QueryClaimStatusResponseSDKType {
  claim_status: ClaimStatusSDKType[];
}
export interface ClaimMetadata {
  airdropIdentifier: string;
  currentRound: string;
  currentRoundStart: Date;
  currentRoundEnd: Date;
}
export interface ClaimMetadataSDKType {
  airdrop_identifier: string;
  current_round: string;
  current_round_start: Date;
  current_round_end: Date;
}
export interface QueryClaimMetadataRequest {}
export interface QueryClaimMetadataRequestSDKType {}
export interface QueryClaimMetadataResponse {
  claimMetadata: ClaimMetadata[];
}
export interface QueryClaimMetadataResponseSDKType {
  claim_metadata: ClaimMetadataSDKType[];
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */

export interface QueryDistributorAccountBalanceRequest {
  airdropIdentifier?: string;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */

export interface QueryDistributorAccountBalanceRequestSDKType {
  airdrop_identifier?: string;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */

export interface QueryDistributorAccountBalanceResponse {
  /** params defines the parameters of the module. */
  distributorAccountBalance: Coin[];
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */

export interface QueryDistributorAccountBalanceResponseSDKType {
  /** params defines the parameters of the module. */
  distributor_account_balance: CoinSDKType[];
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */

export interface QueryParamsRequest {}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */

export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */

export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params: Params;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */

export interface QueryParamsResponseSDKType {
  /** params defines the parameters of the module. */
  params: ParamsSDKType;
}
export interface QueryClaimRecordRequest {
  airdropIdentifier?: string;
  address: string;
}
export interface QueryClaimRecordRequestSDKType {
  airdrop_identifier?: string;
  address: string;
}
export interface QueryClaimRecordResponse {
  claimRecord: ClaimRecord;
}
export interface QueryClaimRecordResponseSDKType {
  claim_record: ClaimRecordSDKType;
}
export interface QueryClaimableForActionRequest {
  airdropIdentifier?: string;
  address: string;
  action: Action;
}
export interface QueryClaimableForActionRequestSDKType {
  airdrop_identifier?: string;
  address: string;
  action: ActionSDKType;
}
export interface QueryClaimableForActionResponse {
  coins: Coin[];
}
export interface QueryClaimableForActionResponseSDKType {
  coins: CoinSDKType[];
}
export interface QueryTotalClaimableRequest {
  airdropIdentifier?: string;
  address: string;
  includeClaimed?: boolean;
}
export interface QueryTotalClaimableRequestSDKType {
  airdrop_identifier?: string;
  address: string;
  include_claimed?: boolean;
}
export interface QueryTotalClaimableResponse {
  coins: Coin[];
}
export interface QueryTotalClaimableResponseSDKType {
  coins: CoinSDKType[];
}
export interface QueryUserVestingsRequest {
  address: string;
}
export interface QueryUserVestingsRequestSDKType {
  address: string;
}
export interface QueryUserVestingsResponse {
  spendableCoins: Coin[];
  periods: Period[];
}
export interface QueryUserVestingsResponseSDKType {
  spendable_coins: CoinSDKType[];
  periods: PeriodSDKType[];
}

function createBaseClaimStatus(): ClaimStatus {
  return {
    airdropIdentifier: "",
    claimed: false
  };
}

export const ClaimStatus = {
  encode(message: ClaimStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.airdropIdentifier !== "") {
      writer.uint32(10).string(message.airdropIdentifier);
    }

    if (message.claimed === true) {
      writer.uint32(16).bool(message.claimed);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClaimStatus {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClaimStatus();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.airdropIdentifier = reader.string();
          break;

        case 2:
          message.claimed = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ClaimStatus>): ClaimStatus {
    const message = createBaseClaimStatus();
    message.airdropIdentifier = object.airdropIdentifier ?? "";
    message.claimed = object.claimed ?? false;
    return message;
  }

};

function createBaseQueryClaimStatusRequest(): QueryClaimStatusRequest {
  return {
    address: ""
  };
}

export const QueryClaimStatusRequest = {
  encode(message: QueryClaimStatusRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClaimStatusRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClaimStatusRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryClaimStatusRequest>): QueryClaimStatusRequest {
    const message = createBaseQueryClaimStatusRequest();
    message.address = object.address ?? "";
    return message;
  }

};

function createBaseQueryClaimStatusResponse(): QueryClaimStatusResponse {
  return {
    claimStatus: []
  };
}

export const QueryClaimStatusResponse = {
  encode(message: QueryClaimStatusResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.claimStatus) {
      ClaimStatus.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClaimStatusResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClaimStatusResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.claimStatus.push(ClaimStatus.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryClaimStatusResponse>): QueryClaimStatusResponse {
    const message = createBaseQueryClaimStatusResponse();
    message.claimStatus = object.claimStatus?.map(e => ClaimStatus.fromPartial(e)) || [];
    return message;
  }

};

function createBaseClaimMetadata(): ClaimMetadata {
  return {
    airdropIdentifier: "",
    currentRound: "",
    currentRoundStart: undefined,
    currentRoundEnd: undefined
  };
}

export const ClaimMetadata = {
  encode(message: ClaimMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.airdropIdentifier !== "") {
      writer.uint32(10).string(message.airdropIdentifier);
    }

    if (message.currentRound !== "") {
      writer.uint32(18).string(message.currentRound);
    }

    if (message.currentRoundStart !== undefined) {
      Timestamp.encode(toTimestamp(message.currentRoundStart), writer.uint32(26).fork()).ldelim();
    }

    if (message.currentRoundEnd !== undefined) {
      Timestamp.encode(toTimestamp(message.currentRoundEnd), writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClaimMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClaimMetadata();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.airdropIdentifier = reader.string();
          break;

        case 2:
          message.currentRound = reader.string();
          break;

        case 3:
          message.currentRoundStart = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 4:
          message.currentRoundEnd = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ClaimMetadata>): ClaimMetadata {
    const message = createBaseClaimMetadata();
    message.airdropIdentifier = object.airdropIdentifier ?? "";
    message.currentRound = object.currentRound ?? "";
    message.currentRoundStart = object.currentRoundStart ?? undefined;
    message.currentRoundEnd = object.currentRoundEnd ?? undefined;
    return message;
  }

};

function createBaseQueryClaimMetadataRequest(): QueryClaimMetadataRequest {
  return {};
}

export const QueryClaimMetadataRequest = {
  encode(_: QueryClaimMetadataRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClaimMetadataRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClaimMetadataRequest();

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

  fromPartial(_: DeepPartial<QueryClaimMetadataRequest>): QueryClaimMetadataRequest {
    const message = createBaseQueryClaimMetadataRequest();
    return message;
  }

};

function createBaseQueryClaimMetadataResponse(): QueryClaimMetadataResponse {
  return {
    claimMetadata: []
  };
}

export const QueryClaimMetadataResponse = {
  encode(message: QueryClaimMetadataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.claimMetadata) {
      ClaimMetadata.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClaimMetadataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClaimMetadataResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.claimMetadata.push(ClaimMetadata.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryClaimMetadataResponse>): QueryClaimMetadataResponse {
    const message = createBaseQueryClaimMetadataResponse();
    message.claimMetadata = object.claimMetadata?.map(e => ClaimMetadata.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryDistributorAccountBalanceRequest(): QueryDistributorAccountBalanceRequest {
  return {
    airdropIdentifier: ""
  };
}

export const QueryDistributorAccountBalanceRequest = {
  encode(message: QueryDistributorAccountBalanceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.airdropIdentifier !== "") {
      writer.uint32(10).string(message.airdropIdentifier);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDistributorAccountBalanceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDistributorAccountBalanceRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.airdropIdentifier = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryDistributorAccountBalanceRequest>): QueryDistributorAccountBalanceRequest {
    const message = createBaseQueryDistributorAccountBalanceRequest();
    message.airdropIdentifier = object.airdropIdentifier ?? "";
    return message;
  }

};

function createBaseQueryDistributorAccountBalanceResponse(): QueryDistributorAccountBalanceResponse {
  return {
    distributorAccountBalance: []
  };
}

export const QueryDistributorAccountBalanceResponse = {
  encode(message: QueryDistributorAccountBalanceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.distributorAccountBalance) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDistributorAccountBalanceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDistributorAccountBalanceResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.distributorAccountBalance.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryDistributorAccountBalanceResponse>): QueryDistributorAccountBalanceResponse {
    const message = createBaseQueryDistributorAccountBalanceResponse();
    message.distributorAccountBalance = object.distributorAccountBalance?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();

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

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  }

};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined
  };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }

};

function createBaseQueryClaimRecordRequest(): QueryClaimRecordRequest {
  return {
    airdropIdentifier: "",
    address: ""
  };
}

export const QueryClaimRecordRequest = {
  encode(message: QueryClaimRecordRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.airdropIdentifier !== "") {
      writer.uint32(10).string(message.airdropIdentifier);
    }

    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClaimRecordRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClaimRecordRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.airdropIdentifier = reader.string();
          break;

        case 2:
          message.address = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryClaimRecordRequest>): QueryClaimRecordRequest {
    const message = createBaseQueryClaimRecordRequest();
    message.airdropIdentifier = object.airdropIdentifier ?? "";
    message.address = object.address ?? "";
    return message;
  }

};

function createBaseQueryClaimRecordResponse(): QueryClaimRecordResponse {
  return {
    claimRecord: undefined
  };
}

export const QueryClaimRecordResponse = {
  encode(message: QueryClaimRecordResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.claimRecord !== undefined) {
      ClaimRecord.encode(message.claimRecord, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClaimRecordResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClaimRecordResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.claimRecord = ClaimRecord.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryClaimRecordResponse>): QueryClaimRecordResponse {
    const message = createBaseQueryClaimRecordResponse();
    message.claimRecord = object.claimRecord !== undefined && object.claimRecord !== null ? ClaimRecord.fromPartial(object.claimRecord) : undefined;
    return message;
  }

};

function createBaseQueryClaimableForActionRequest(): QueryClaimableForActionRequest {
  return {
    airdropIdentifier: "",
    address: "",
    action: 0
  };
}

export const QueryClaimableForActionRequest = {
  encode(message: QueryClaimableForActionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.airdropIdentifier !== "") {
      writer.uint32(10).string(message.airdropIdentifier);
    }

    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }

    if (message.action !== 0) {
      writer.uint32(24).int32(message.action);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClaimableForActionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClaimableForActionRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.airdropIdentifier = reader.string();
          break;

        case 2:
          message.address = reader.string();
          break;

        case 3:
          message.action = (reader.int32() as any);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryClaimableForActionRequest>): QueryClaimableForActionRequest {
    const message = createBaseQueryClaimableForActionRequest();
    message.airdropIdentifier = object.airdropIdentifier ?? "";
    message.address = object.address ?? "";
    message.action = object.action ?? 0;
    return message;
  }

};

function createBaseQueryClaimableForActionResponse(): QueryClaimableForActionResponse {
  return {
    coins: []
  };
}

export const QueryClaimableForActionResponse = {
  encode(message: QueryClaimableForActionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClaimableForActionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClaimableForActionResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryClaimableForActionResponse>): QueryClaimableForActionResponse {
    const message = createBaseQueryClaimableForActionResponse();
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryTotalClaimableRequest(): QueryTotalClaimableRequest {
  return {
    airdropIdentifier: "",
    address: "",
    includeClaimed: false
  };
}

export const QueryTotalClaimableRequest = {
  encode(message: QueryTotalClaimableRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.airdropIdentifier !== "") {
      writer.uint32(10).string(message.airdropIdentifier);
    }

    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }

    if (message.includeClaimed === true) {
      writer.uint32(24).bool(message.includeClaimed);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalClaimableRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalClaimableRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.airdropIdentifier = reader.string();
          break;

        case 2:
          message.address = reader.string();
          break;

        case 3:
          message.includeClaimed = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryTotalClaimableRequest>): QueryTotalClaimableRequest {
    const message = createBaseQueryTotalClaimableRequest();
    message.airdropIdentifier = object.airdropIdentifier ?? "";
    message.address = object.address ?? "";
    message.includeClaimed = object.includeClaimed ?? false;
    return message;
  }

};

function createBaseQueryTotalClaimableResponse(): QueryTotalClaimableResponse {
  return {
    coins: []
  };
}

export const QueryTotalClaimableResponse = {
  encode(message: QueryTotalClaimableResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalClaimableResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalClaimableResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryTotalClaimableResponse>): QueryTotalClaimableResponse {
    const message = createBaseQueryTotalClaimableResponse();
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryUserVestingsRequest(): QueryUserVestingsRequest {
  return {
    address: ""
  };
}

export const QueryUserVestingsRequest = {
  encode(message: QueryUserVestingsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUserVestingsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserVestingsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryUserVestingsRequest>): QueryUserVestingsRequest {
    const message = createBaseQueryUserVestingsRequest();
    message.address = object.address ?? "";
    return message;
  }

};

function createBaseQueryUserVestingsResponse(): QueryUserVestingsResponse {
  return {
    spendableCoins: [],
    periods: []
  };
}

export const QueryUserVestingsResponse = {
  encode(message: QueryUserVestingsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.spendableCoins) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.periods) {
      Period.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUserVestingsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserVestingsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 3:
          message.spendableCoins.push(Coin.decode(reader, reader.uint32()));
          break;

        case 1:
          message.periods.push(Period.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryUserVestingsResponse>): QueryUserVestingsResponse {
    const message = createBaseQueryUserVestingsResponse();
    message.spendableCoins = object.spendableCoins?.map(e => Coin.fromPartial(e)) || [];
    message.periods = object.periods?.map(e => Period.fromPartial(e)) || [];
    return message;
  }

};