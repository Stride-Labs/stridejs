import { Validator, ValidatorSDKType } from "./validator";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface AddValidatorsProposal {
  title: string;
  description: string;
  hostZone: string;
  validators: Validator[];
  deposit: string;
}
export interface AddValidatorsProposalSDKType {
  title: string;
  description: string;
  host_zone: string;
  validators: ValidatorSDKType[];
  deposit: string;
}
export interface ToggleLSMProposal {
  title: string;
  description: string;
  hostZone: string;
  enabled: boolean;
  deposit: string;
}
export interface ToggleLSMProposalSDKType {
  title: string;
  description: string;
  host_zone: string;
  enabled: boolean;
  deposit: string;
}

function createBaseAddValidatorsProposal(): AddValidatorsProposal {
  return {
    title: "",
    description: "",
    hostZone: "",
    validators: [],
    deposit: ""
  };
}

export const AddValidatorsProposal = {
  encode(message: AddValidatorsProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.hostZone !== "") {
      writer.uint32(26).string(message.hostZone);
    }

    for (const v of message.validators) {
      Validator.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    if (message.deposit !== "") {
      writer.uint32(42).string(message.deposit);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddValidatorsProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddValidatorsProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.hostZone = reader.string();
          break;

        case 4:
          message.validators.push(Validator.decode(reader, reader.uint32()));
          break;

        case 5:
          message.deposit = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<AddValidatorsProposal>): AddValidatorsProposal {
    const message = createBaseAddValidatorsProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.hostZone = object.hostZone ?? "";
    message.validators = object.validators?.map(e => Validator.fromPartial(e)) || [];
    message.deposit = object.deposit ?? "";
    return message;
  }

};

function createBaseToggleLSMProposal(): ToggleLSMProposal {
  return {
    title: "",
    description: "",
    hostZone: "",
    enabled: false,
    deposit: ""
  };
}

export const ToggleLSMProposal = {
  encode(message: ToggleLSMProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.hostZone !== "") {
      writer.uint32(26).string(message.hostZone);
    }

    if (message.enabled === true) {
      writer.uint32(32).bool(message.enabled);
    }

    if (message.deposit !== "") {
      writer.uint32(42).string(message.deposit);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ToggleLSMProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseToggleLSMProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.hostZone = reader.string();
          break;

        case 4:
          message.enabled = reader.bool();
          break;

        case 5:
          message.deposit = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ToggleLSMProposal>): ToggleLSMProposal {
    const message = createBaseToggleLSMProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.hostZone = object.hostZone ?? "";
    message.enabled = object.enabled ?? false;
    message.deposit = object.deposit ?? "";
    return message;
  }

};