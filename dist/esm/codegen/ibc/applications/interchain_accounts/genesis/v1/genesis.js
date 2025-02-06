import { Params as Params1 } from "../../controller/v1/controller";
import { Params as Params2 } from "../../host/v1/host";
import { BinaryReader, BinaryWriter } from "../../../../../binary";
function createBaseGenesisState() {
  return {
    controllerGenesisState: ControllerGenesisState.fromPartial({}),
    hostGenesisState: HostGenesisState.fromPartial({})
  };
}
const GenesisState = {
  typeUrl: "/ibc.applications.interchain_accounts.genesis.v1.GenesisState",
  encode(message, writer = BinaryWriter.create()) {
    if (message.controllerGenesisState !== void 0) {
      ControllerGenesisState.encode(message.controllerGenesisState, writer.uint32(10).fork()).ldelim();
    }
    if (message.hostGenesisState !== void 0) {
      HostGenesisState.encode(message.hostGenesisState, writer.uint32(18).fork()).ldelim();
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
          message.controllerGenesisState = ControllerGenesisState.decode(reader, reader.uint32());
          break;
        case 2:
          message.hostGenesisState = HostGenesisState.decode(reader, reader.uint32());
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
    message.controllerGenesisState = object.controllerGenesisState !== void 0 && object.controllerGenesisState !== null ? ControllerGenesisState.fromPartial(object.controllerGenesisState) : void 0;
    message.hostGenesisState = object.hostGenesisState !== void 0 && object.hostGenesisState !== null ? HostGenesisState.fromPartial(object.hostGenesisState) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseGenesisState();
    if (object.controller_genesis_state !== void 0 && object.controller_genesis_state !== null) {
      message.controllerGenesisState = ControllerGenesisState.fromAmino(object.controller_genesis_state);
    }
    if (object.host_genesis_state !== void 0 && object.host_genesis_state !== null) {
      message.hostGenesisState = HostGenesisState.fromAmino(object.host_genesis_state);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.controller_genesis_state = message.controllerGenesisState ? ControllerGenesisState.toAmino(message.controllerGenesisState) : void 0;
    obj.host_genesis_state = message.hostGenesisState ? HostGenesisState.toAmino(message.hostGenesisState) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GenesisState",
      value: GenesisState.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return GenesisState.decode(message.value);
  },
  toProto(message) {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.applications.interchain_accounts.genesis.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseControllerGenesisState() {
  return {
    activeChannels: [],
    interchainAccounts: [],
    ports: [],
    params: Params1.fromPartial({})
  };
}
const ControllerGenesisState = {
  typeUrl: "/ibc.applications.interchain_accounts.genesis.v1.ControllerGenesisState",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.activeChannels) {
      ActiveChannel.encode(v, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.interchainAccounts) {
      RegisteredInterchainAccount.encode(v, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.ports) {
      writer.uint32(26).string(v);
    }
    if (message.params !== void 0) {
      Params1.encode(message.params, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseControllerGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.activeChannels.push(ActiveChannel.decode(reader, reader.uint32()));
          break;
        case 2:
          message.interchainAccounts.push(RegisteredInterchainAccount.decode(reader, reader.uint32()));
          break;
        case 3:
          message.ports.push(reader.string());
          break;
        case 4:
          message.params = Params1.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseControllerGenesisState();
    message.activeChannels = object.activeChannels?.map((e) => ActiveChannel.fromPartial(e)) || [];
    message.interchainAccounts = object.interchainAccounts?.map((e) => RegisteredInterchainAccount.fromPartial(e)) || [];
    message.ports = object.ports?.map((e) => e) || [];
    message.params = object.params !== void 0 && object.params !== null ? Params1.fromPartial(object.params) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseControllerGenesisState();
    message.activeChannels = object.active_channels?.map((e) => ActiveChannel.fromAmino(e)) || [];
    message.interchainAccounts = object.interchain_accounts?.map((e) => RegisteredInterchainAccount.fromAmino(e)) || [];
    message.ports = object.ports?.map((e) => e) || [];
    if (object.params !== void 0 && object.params !== null) {
      message.params = Params1.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.activeChannels) {
      obj.active_channels = message.activeChannels.map((e) => e ? ActiveChannel.toAmino(e) : void 0);
    } else {
      obj.active_channels = message.activeChannels;
    }
    if (message.interchainAccounts) {
      obj.interchain_accounts = message.interchainAccounts.map((e) => e ? RegisteredInterchainAccount.toAmino(e) : void 0);
    } else {
      obj.interchain_accounts = message.interchainAccounts;
    }
    if (message.ports) {
      obj.ports = message.ports.map((e) => e);
    } else {
      obj.ports = message.ports;
    }
    obj.params = message.params ? Params1.toAmino(message.params) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return ControllerGenesisState.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/ControllerGenesisState",
      value: ControllerGenesisState.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return ControllerGenesisState.decode(message.value);
  },
  toProto(message) {
    return ControllerGenesisState.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.applications.interchain_accounts.genesis.v1.ControllerGenesisState",
      value: ControllerGenesisState.encode(message).finish()
    };
  }
};
function createBaseHostGenesisState() {
  return {
    activeChannels: [],
    interchainAccounts: [],
    port: "",
    params: Params2.fromPartial({})
  };
}
const HostGenesisState = {
  typeUrl: "/ibc.applications.interchain_accounts.genesis.v1.HostGenesisState",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.activeChannels) {
      ActiveChannel.encode(v, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.interchainAccounts) {
      RegisteredInterchainAccount.encode(v, writer.uint32(18).fork()).ldelim();
    }
    if (message.port !== "") {
      writer.uint32(26).string(message.port);
    }
    if (message.params !== void 0) {
      Params2.encode(message.params, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseHostGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.activeChannels.push(ActiveChannel.decode(reader, reader.uint32()));
          break;
        case 2:
          message.interchainAccounts.push(RegisteredInterchainAccount.decode(reader, reader.uint32()));
          break;
        case 3:
          message.port = reader.string();
          break;
        case 4:
          message.params = Params2.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseHostGenesisState();
    message.activeChannels = object.activeChannels?.map((e) => ActiveChannel.fromPartial(e)) || [];
    message.interchainAccounts = object.interchainAccounts?.map((e) => RegisteredInterchainAccount.fromPartial(e)) || [];
    message.port = object.port ?? "";
    message.params = object.params !== void 0 && object.params !== null ? Params2.fromPartial(object.params) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseHostGenesisState();
    message.activeChannels = object.active_channels?.map((e) => ActiveChannel.fromAmino(e)) || [];
    message.interchainAccounts = object.interchain_accounts?.map((e) => RegisteredInterchainAccount.fromAmino(e)) || [];
    if (object.port !== void 0 && object.port !== null) {
      message.port = object.port;
    }
    if (object.params !== void 0 && object.params !== null) {
      message.params = Params2.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.activeChannels) {
      obj.active_channels = message.activeChannels.map((e) => e ? ActiveChannel.toAmino(e) : void 0);
    } else {
      obj.active_channels = message.activeChannels;
    }
    if (message.interchainAccounts) {
      obj.interchain_accounts = message.interchainAccounts.map((e) => e ? RegisteredInterchainAccount.toAmino(e) : void 0);
    } else {
      obj.interchain_accounts = message.interchainAccounts;
    }
    obj.port = message.port === "" ? void 0 : message.port;
    obj.params = message.params ? Params2.toAmino(message.params) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return HostGenesisState.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/HostGenesisState",
      value: HostGenesisState.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return HostGenesisState.decode(message.value);
  },
  toProto(message) {
    return HostGenesisState.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.applications.interchain_accounts.genesis.v1.HostGenesisState",
      value: HostGenesisState.encode(message).finish()
    };
  }
};
function createBaseActiveChannel() {
  return {
    connectionId: "",
    portId: "",
    channelId: "",
    isMiddlewareEnabled: false
  };
}
const ActiveChannel = {
  typeUrl: "/ibc.applications.interchain_accounts.genesis.v1.ActiveChannel",
  encode(message, writer = BinaryWriter.create()) {
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }
    if (message.portId !== "") {
      writer.uint32(18).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(26).string(message.channelId);
    }
    if (message.isMiddlewareEnabled === true) {
      writer.uint32(32).bool(message.isMiddlewareEnabled);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseActiveChannel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connectionId = reader.string();
          break;
        case 2:
          message.portId = reader.string();
          break;
        case 3:
          message.channelId = reader.string();
          break;
        case 4:
          message.isMiddlewareEnabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseActiveChannel();
    message.connectionId = object.connectionId ?? "";
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.isMiddlewareEnabled = object.isMiddlewareEnabled ?? false;
    return message;
  },
  fromAmino(object) {
    const message = createBaseActiveChannel();
    if (object.connection_id !== void 0 && object.connection_id !== null) {
      message.connectionId = object.connection_id;
    }
    if (object.port_id !== void 0 && object.port_id !== null) {
      message.portId = object.port_id;
    }
    if (object.channel_id !== void 0 && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    if (object.is_middleware_enabled !== void 0 && object.is_middleware_enabled !== null) {
      message.isMiddlewareEnabled = object.is_middleware_enabled;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.connection_id = message.connectionId === "" ? void 0 : message.connectionId;
    obj.port_id = message.portId === "" ? void 0 : message.portId;
    obj.channel_id = message.channelId === "" ? void 0 : message.channelId;
    obj.is_middleware_enabled = message.isMiddlewareEnabled === false ? void 0 : message.isMiddlewareEnabled;
    return obj;
  },
  fromAminoMsg(object) {
    return ActiveChannel.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/ActiveChannel",
      value: ActiveChannel.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return ActiveChannel.decode(message.value);
  },
  toProto(message) {
    return ActiveChannel.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.applications.interchain_accounts.genesis.v1.ActiveChannel",
      value: ActiveChannel.encode(message).finish()
    };
  }
};
function createBaseRegisteredInterchainAccount() {
  return {
    connectionId: "",
    portId: "",
    accountAddress: ""
  };
}
const RegisteredInterchainAccount = {
  typeUrl: "/ibc.applications.interchain_accounts.genesis.v1.RegisteredInterchainAccount",
  encode(message, writer = BinaryWriter.create()) {
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }
    if (message.portId !== "") {
      writer.uint32(18).string(message.portId);
    }
    if (message.accountAddress !== "") {
      writer.uint32(26).string(message.accountAddress);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRegisteredInterchainAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connectionId = reader.string();
          break;
        case 2:
          message.portId = reader.string();
          break;
        case 3:
          message.accountAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseRegisteredInterchainAccount();
    message.connectionId = object.connectionId ?? "";
    message.portId = object.portId ?? "";
    message.accountAddress = object.accountAddress ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseRegisteredInterchainAccount();
    if (object.connection_id !== void 0 && object.connection_id !== null) {
      message.connectionId = object.connection_id;
    }
    if (object.port_id !== void 0 && object.port_id !== null) {
      message.portId = object.port_id;
    }
    if (object.account_address !== void 0 && object.account_address !== null) {
      message.accountAddress = object.account_address;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.connection_id = message.connectionId === "" ? void 0 : message.connectionId;
    obj.port_id = message.portId === "" ? void 0 : message.portId;
    obj.account_address = message.accountAddress === "" ? void 0 : message.accountAddress;
    return obj;
  },
  fromAminoMsg(object) {
    return RegisteredInterchainAccount.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/RegisteredInterchainAccount",
      value: RegisteredInterchainAccount.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return RegisteredInterchainAccount.decode(message.value);
  },
  toProto(message) {
    return RegisteredInterchainAccount.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.applications.interchain_accounts.genesis.v1.RegisteredInterchainAccount",
      value: RegisteredInterchainAccount.encode(message).finish()
    };
  }
};
export {
  ActiveChannel,
  ControllerGenesisState,
  GenesisState,
  HostGenesisState,
  RegisteredInterchainAccount
};
