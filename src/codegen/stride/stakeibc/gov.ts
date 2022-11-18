import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface AddValidatorProposal {
  title: string;
  description: string;
  hostZone: string;
  validatorName: string;
  validatorAddress: string;
}
export interface AddValidatorProposalSDKType {
  title: string;
  description: string;
  host_zone: string;
  validator_name: string;
  validator_address: string;
}

function createBaseAddValidatorProposal(): AddValidatorProposal {
  return {
    title: "",
    description: "",
    hostZone: "",
    validatorName: "",
    validatorAddress: ""
  };
}

export const AddValidatorProposal = {
  encode(message: AddValidatorProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.hostZone !== "") {
      writer.uint32(26).string(message.hostZone);
    }

    if (message.validatorName !== "") {
      writer.uint32(34).string(message.validatorName);
    }

    if (message.validatorAddress !== "") {
      writer.uint32(42).string(message.validatorAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddValidatorProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddValidatorProposal();

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
          message.validatorName = reader.string();
          break;

        case 5:
          message.validatorAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<AddValidatorProposal>): AddValidatorProposal {
    const message = createBaseAddValidatorProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.hostZone = object.hostZone ?? "";
    message.validatorName = object.validatorName ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  }

};