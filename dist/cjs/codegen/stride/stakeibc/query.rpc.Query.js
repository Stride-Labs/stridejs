var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var query_rpc_Query_exports = {};
__export(query_rpc_Query_exports, {
  QueryClientImpl: () => QueryClientImpl,
  createRpcQueryExtension: () => createRpcQueryExtension
});
module.exports = __toCommonJS(query_rpc_Query_exports);
var import_binary = require("../../binary");
var import_stargate = require("@cosmjs/stargate");
var import_query = require("./query");
class QueryClientImpl {
  rpc;
  constructor(rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.validators = this.validators.bind(this);
    this.hostZone = this.hostZone.bind(this);
    this.hostZoneAll = this.hostZoneAll.bind(this);
    this.moduleAddress = this.moduleAddress.bind(this);
    this.interchainAccountFromAddress = this.interchainAccountFromAddress.bind(this);
    this.epochTracker = this.epochTracker.bind(this);
    this.epochTrackerAll = this.epochTrackerAll.bind(this);
    this.nextPacketSequence = this.nextPacketSequence.bind(this);
    this.addressUnbondings = this.addressUnbondings.bind(this);
    this.allTradeRoutes = this.allTradeRoutes.bind(this);
  }
  params(request = {}) {
    const data = import_query.QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Query", "Params", data);
    return promise.then((data2) => import_query.QueryParamsResponse.decode(new import_binary.BinaryReader(data2)));
  }
  validators(request) {
    const data = import_query.QueryGetValidatorsRequest.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Query", "Validators", data);
    return promise.then((data2) => import_query.QueryGetValidatorsResponse.decode(new import_binary.BinaryReader(data2)));
  }
  hostZone(request) {
    const data = import_query.QueryGetHostZoneRequest.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Query", "HostZone", data);
    return promise.then((data2) => import_query.QueryGetHostZoneResponse.decode(new import_binary.BinaryReader(data2)));
  }
  hostZoneAll(request = {
    pagination: void 0
  }) {
    const data = import_query.QueryAllHostZoneRequest.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Query", "HostZoneAll", data);
    return promise.then((data2) => import_query.QueryAllHostZoneResponse.decode(new import_binary.BinaryReader(data2)));
  }
  moduleAddress(request) {
    const data = import_query.QueryModuleAddressRequest.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Query", "ModuleAddress", data);
    return promise.then((data2) => import_query.QueryModuleAddressResponse.decode(new import_binary.BinaryReader(data2)));
  }
  interchainAccountFromAddress(request) {
    const data = import_query.QueryInterchainAccountFromAddressRequest.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Query", "InterchainAccountFromAddress", data);
    return promise.then((data2) => import_query.QueryInterchainAccountFromAddressResponse.decode(new import_binary.BinaryReader(data2)));
  }
  epochTracker(request) {
    const data = import_query.QueryGetEpochTrackerRequest.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Query", "EpochTracker", data);
    return promise.then((data2) => import_query.QueryGetEpochTrackerResponse.decode(new import_binary.BinaryReader(data2)));
  }
  epochTrackerAll(request = {}) {
    const data = import_query.QueryAllEpochTrackerRequest.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Query", "EpochTrackerAll", data);
    return promise.then((data2) => import_query.QueryAllEpochTrackerResponse.decode(new import_binary.BinaryReader(data2)));
  }
  nextPacketSequence(request) {
    const data = import_query.QueryGetNextPacketSequenceRequest.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Query", "NextPacketSequence", data);
    return promise.then((data2) => import_query.QueryGetNextPacketSequenceResponse.decode(new import_binary.BinaryReader(data2)));
  }
  addressUnbondings(request) {
    const data = import_query.QueryAddressUnbondings.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Query", "AddressUnbondings", data);
    return promise.then((data2) => import_query.QueryAddressUnbondingsResponse.decode(new import_binary.BinaryReader(data2)));
  }
  allTradeRoutes(request = {}) {
    const data = import_query.QueryAllTradeRoutes.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Query", "AllTradeRoutes", data);
    return promise.then((data2) => import_query.QueryAllTradeRoutesResponse.decode(new import_binary.BinaryReader(data2)));
  }
}
const createRpcQueryExtension = (base) => {
  const rpc = (0, import_stargate.createProtobufRpcClient)(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request) {
      return queryService.params(request);
    },
    validators(request) {
      return queryService.validators(request);
    },
    hostZone(request) {
      return queryService.hostZone(request);
    },
    hostZoneAll(request) {
      return queryService.hostZoneAll(request);
    },
    moduleAddress(request) {
      return queryService.moduleAddress(request);
    },
    interchainAccountFromAddress(request) {
      return queryService.interchainAccountFromAddress(request);
    },
    epochTracker(request) {
      return queryService.epochTracker(request);
    },
    epochTrackerAll(request) {
      return queryService.epochTrackerAll(request);
    },
    nextPacketSequence(request) {
      return queryService.nextPacketSequence(request);
    },
    addressUnbondings(request) {
      return queryService.addressUnbondings(request);
    },
    allTradeRoutes(request) {
      return queryService.allTradeRoutes(request);
    }
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  QueryClientImpl,
  createRpcQueryExtension
});
