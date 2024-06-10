import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
/** Adds a new oracle */

export interface MsgAddOracle {
  creator: string;
  connectionId: string;
}
/** Adds a new oracle */

export interface MsgAddOracleSDKType {
  creator: string;
  connection_id: string;
}
export interface MsgAddOracleResponse {}
export interface MsgAddOracleResponseSDKType {}
/** Instantiates the oracle's CW contract */

export interface MsgInstantiateOracle {
  creator: string;
  oracleChainId: string;
  contractCodeId: Long;
  transferChannelOnOracle: string;
}
/** Instantiates the oracle's CW contract */

export interface MsgInstantiateOracleSDKType {
  creator: string;
  oracle_chain_id: string;
  contract_code_id: Long;
  transfer_channel_on_oracle: string;
}
export interface MsgInstantiateOracleResponse {}
export interface MsgInstantiateOracleResponseSDKType {}
/** Restore's a closed ICA channel for a given oracle */

export interface MsgRestoreOracleICA {
  creator: string;
  oracleChainId: string;
}
/** Restore's a closed ICA channel for a given oracle */

export interface MsgRestoreOracleICASDKType {
  creator: string;
  oracle_chain_id: string;
}
export interface MsgRestoreOracleICAResponse {}
export interface MsgRestoreOracleICAResponseSDKType {}
/** Toggle's whether an oracle is active and should receive metric updates */

export interface MsgToggleOracle {
  /**
   * authority is the address that controls the module (defaults to x/gov unless
   * overwritten).
   */
  authority: string;
  oracleChainId: string;
  active: boolean;
}
/** Toggle's whether an oracle is active and should receive metric updates */

export interface MsgToggleOracleSDKType {
  /**
   * authority is the address that controls the module (defaults to x/gov unless
   * overwritten).
   */
  authority: string;
  oracle_chain_id: string;
  active: boolean;
}
export interface MsgToggleOracleResponse {}
export interface MsgToggleOracleResponseSDKType {}
/** Removes an oracle completely */

export interface MsgRemoveOracle {
  /**
   * authority is the address that controls the module (defaults to x/gov unless
   * overwritten).
   */
  authority: string;
  oracleChainId: string;
}
/** Removes an oracle completely */

export interface MsgRemoveOracleSDKType {
  /**
   * authority is the address that controls the module (defaults to x/gov unless
   * overwritten).
   */
  authority: string;
  oracle_chain_id: string;
}
export interface MsgRemoveOracleResponse {}
export interface MsgRemoveOracleResponseSDKType {}

function createBaseMsgAddOracle(): MsgAddOracle {
  return {
    creator: "",
    connectionId: ""
  };
}

export const MsgAddOracle = {
  encode(message: MsgAddOracle, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddOracle {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddOracle();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.connectionId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgAddOracle>): MsgAddOracle {
    const message = createBaseMsgAddOracle();
    message.creator = object.creator ?? "";
    message.connectionId = object.connectionId ?? "";
    return message;
  }

};

function createBaseMsgAddOracleResponse(): MsgAddOracleResponse {
  return {};
}

export const MsgAddOracleResponse = {
  encode(_: MsgAddOracleResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddOracleResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddOracleResponse();

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

  fromPartial(_: DeepPartial<MsgAddOracleResponse>): MsgAddOracleResponse {
    const message = createBaseMsgAddOracleResponse();
    return message;
  }

};

function createBaseMsgInstantiateOracle(): MsgInstantiateOracle {
  return {
    creator: "",
    oracleChainId: "",
    contractCodeId: Long.UZERO,
    transferChannelOnOracle: ""
  };
}

export const MsgInstantiateOracle = {
  encode(message: MsgInstantiateOracle, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.oracleChainId !== "") {
      writer.uint32(18).string(message.oracleChainId);
    }

    if (!message.contractCodeId.isZero()) {
      writer.uint32(24).uint64(message.contractCodeId);
    }

    if (message.transferChannelOnOracle !== "") {
      writer.uint32(34).string(message.transferChannelOnOracle);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgInstantiateOracle {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInstantiateOracle();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.oracleChainId = reader.string();
          break;

        case 3:
          message.contractCodeId = (reader.uint64() as Long);
          break;

        case 4:
          message.transferChannelOnOracle = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgInstantiateOracle>): MsgInstantiateOracle {
    const message = createBaseMsgInstantiateOracle();
    message.creator = object.creator ?? "";
    message.oracleChainId = object.oracleChainId ?? "";
    message.contractCodeId = object.contractCodeId !== undefined && object.contractCodeId !== null ? Long.fromValue(object.contractCodeId) : Long.UZERO;
    message.transferChannelOnOracle = object.transferChannelOnOracle ?? "";
    return message;
  }

};

function createBaseMsgInstantiateOracleResponse(): MsgInstantiateOracleResponse {
  return {};
}

export const MsgInstantiateOracleResponse = {
  encode(_: MsgInstantiateOracleResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgInstantiateOracleResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInstantiateOracleResponse();

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

  fromPartial(_: DeepPartial<MsgInstantiateOracleResponse>): MsgInstantiateOracleResponse {
    const message = createBaseMsgInstantiateOracleResponse();
    return message;
  }

};

function createBaseMsgRestoreOracleICA(): MsgRestoreOracleICA {
  return {
    creator: "",
    oracleChainId: ""
  };
}

export const MsgRestoreOracleICA = {
  encode(message: MsgRestoreOracleICA, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.oracleChainId !== "") {
      writer.uint32(18).string(message.oracleChainId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRestoreOracleICA {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRestoreOracleICA();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.oracleChainId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgRestoreOracleICA>): MsgRestoreOracleICA {
    const message = createBaseMsgRestoreOracleICA();
    message.creator = object.creator ?? "";
    message.oracleChainId = object.oracleChainId ?? "";
    return message;
  }

};

function createBaseMsgRestoreOracleICAResponse(): MsgRestoreOracleICAResponse {
  return {};
}

export const MsgRestoreOracleICAResponse = {
  encode(_: MsgRestoreOracleICAResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRestoreOracleICAResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRestoreOracleICAResponse();

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

  fromPartial(_: DeepPartial<MsgRestoreOracleICAResponse>): MsgRestoreOracleICAResponse {
    const message = createBaseMsgRestoreOracleICAResponse();
    return message;
  }

};

function createBaseMsgToggleOracle(): MsgToggleOracle {
  return {
    authority: "",
    oracleChainId: "",
    active: false
  };
}

export const MsgToggleOracle = {
  encode(message: MsgToggleOracle, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }

    if (message.oracleChainId !== "") {
      writer.uint32(18).string(message.oracleChainId);
    }

    if (message.active === true) {
      writer.uint32(24).bool(message.active);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgToggleOracle {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgToggleOracle();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;

        case 2:
          message.oracleChainId = reader.string();
          break;

        case 3:
          message.active = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgToggleOracle>): MsgToggleOracle {
    const message = createBaseMsgToggleOracle();
    message.authority = object.authority ?? "";
    message.oracleChainId = object.oracleChainId ?? "";
    message.active = object.active ?? false;
    return message;
  }

};

function createBaseMsgToggleOracleResponse(): MsgToggleOracleResponse {
  return {};
}

export const MsgToggleOracleResponse = {
  encode(_: MsgToggleOracleResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgToggleOracleResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgToggleOracleResponse();

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

  fromPartial(_: DeepPartial<MsgToggleOracleResponse>): MsgToggleOracleResponse {
    const message = createBaseMsgToggleOracleResponse();
    return message;
  }

};

function createBaseMsgRemoveOracle(): MsgRemoveOracle {
  return {
    authority: "",
    oracleChainId: ""
  };
}

export const MsgRemoveOracle = {
  encode(message: MsgRemoveOracle, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }

    if (message.oracleChainId !== "") {
      writer.uint32(18).string(message.oracleChainId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveOracle {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveOracle();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;

        case 2:
          message.oracleChainId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgRemoveOracle>): MsgRemoveOracle {
    const message = createBaseMsgRemoveOracle();
    message.authority = object.authority ?? "";
    message.oracleChainId = object.oracleChainId ?? "";
    return message;
  }

};

function createBaseMsgRemoveOracleResponse(): MsgRemoveOracleResponse {
  return {};
}

export const MsgRemoveOracleResponse = {
  encode(_: MsgRemoveOracleResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveOracleResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveOracleResponse();

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

  fromPartial(_: DeepPartial<MsgRemoveOracleResponse>): MsgRemoveOracleResponse {
    const message = createBaseMsgRemoveOracleResponse();
    return message;
  }

};