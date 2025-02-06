import { BaseAccount } from "../../../../cosmos/auth/v1beta1/auth";
import { BinaryReader, BinaryWriter } from "../../../../binary";
function createBaseInterchainAccount() {
  return {
    $typeUrl: "/ibc.applications.interchain_accounts.v1.InterchainAccount",
    baseAccount: void 0,
    accountOwner: ""
  };
}
const InterchainAccount = {
  typeUrl: "/ibc.applications.interchain_accounts.v1.InterchainAccount",
  encode(message, writer = BinaryWriter.create()) {
    if (message.baseAccount !== void 0) {
      BaseAccount.encode(message.baseAccount, writer.uint32(10).fork()).ldelim();
    }
    if (message.accountOwner !== "") {
      writer.uint32(18).string(message.accountOwner);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseInterchainAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseAccount = BaseAccount.decode(reader, reader.uint32());
          break;
        case 2:
          message.accountOwner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseInterchainAccount();
    message.baseAccount = object.baseAccount !== void 0 && object.baseAccount !== null ? BaseAccount.fromPartial(object.baseAccount) : void 0;
    message.accountOwner = object.accountOwner ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseInterchainAccount();
    if (object.base_account !== void 0 && object.base_account !== null) {
      message.baseAccount = BaseAccount.fromAmino(object.base_account);
    }
    if (object.account_owner !== void 0 && object.account_owner !== null) {
      message.accountOwner = object.account_owner;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.base_account = message.baseAccount ? BaseAccount.toAmino(message.baseAccount) : void 0;
    obj.account_owner = message.accountOwner === "" ? void 0 : message.accountOwner;
    return obj;
  },
  fromAminoMsg(object) {
    return InterchainAccount.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/InterchainAccount",
      value: InterchainAccount.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return InterchainAccount.decode(message.value);
  },
  toProto(message) {
    return InterchainAccount.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.applications.interchain_accounts.v1.InterchainAccount",
      value: InterchainAccount.encode(message).finish()
    };
  }
};
export {
  InterchainAccount
};
