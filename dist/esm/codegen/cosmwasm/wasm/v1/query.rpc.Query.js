import { BinaryReader } from "../../../binary";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryContractInfoRequest, QueryContractInfoResponse, QueryContractHistoryRequest, QueryContractHistoryResponse, QueryContractsByCodeRequest, QueryContractsByCodeResponse, QueryAllContractStateRequest, QueryAllContractStateResponse, QueryRawContractStateRequest, QueryRawContractStateResponse, QuerySmartContractStateRequest, QuerySmartContractStateResponse, QueryCodeRequest, QueryCodeResponse, QueryCodesRequest, QueryCodesResponse, QueryCodeInfoRequest, QueryCodeInfoResponse, QueryPinnedCodesRequest, QueryPinnedCodesResponse, QueryParamsRequest, QueryParamsResponse, QueryContractsByCreatorRequest, QueryContractsByCreatorResponse, QueryWasmLimitsConfigRequest, QueryWasmLimitsConfigResponse, QueryBuildAddressRequest, QueryBuildAddressResponse } from "./query";
class QueryClientImpl {
  rpc;
  constructor(rpc) {
    this.rpc = rpc;
    this.contractInfo = this.contractInfo.bind(this);
    this.contractHistory = this.contractHistory.bind(this);
    this.contractsByCode = this.contractsByCode.bind(this);
    this.allContractState = this.allContractState.bind(this);
    this.rawContractState = this.rawContractState.bind(this);
    this.smartContractState = this.smartContractState.bind(this);
    this.code = this.code.bind(this);
    this.codes = this.codes.bind(this);
    this.codeInfo = this.codeInfo.bind(this);
    this.pinnedCodes = this.pinnedCodes.bind(this);
    this.params = this.params.bind(this);
    this.contractsByCreator = this.contractsByCreator.bind(this);
    this.wasmLimitsConfig = this.wasmLimitsConfig.bind(this);
    this.buildAddress = this.buildAddress.bind(this);
  }
  contractInfo(request) {
    const data = QueryContractInfoRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "ContractInfo", data);
    return promise.then((data2) => QueryContractInfoResponse.decode(new BinaryReader(data2)));
  }
  contractHistory(request) {
    const data = QueryContractHistoryRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "ContractHistory", data);
    return promise.then((data2) => QueryContractHistoryResponse.decode(new BinaryReader(data2)));
  }
  contractsByCode(request) {
    const data = QueryContractsByCodeRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "ContractsByCode", data);
    return promise.then((data2) => QueryContractsByCodeResponse.decode(new BinaryReader(data2)));
  }
  allContractState(request) {
    const data = QueryAllContractStateRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "AllContractState", data);
    return promise.then((data2) => QueryAllContractStateResponse.decode(new BinaryReader(data2)));
  }
  rawContractState(request) {
    const data = QueryRawContractStateRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "RawContractState", data);
    return promise.then((data2) => QueryRawContractStateResponse.decode(new BinaryReader(data2)));
  }
  smartContractState(request) {
    const data = QuerySmartContractStateRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "SmartContractState", data);
    return promise.then((data2) => QuerySmartContractStateResponse.decode(new BinaryReader(data2)));
  }
  code(request) {
    const data = QueryCodeRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "Code", data);
    return promise.then((data2) => QueryCodeResponse.decode(new BinaryReader(data2)));
  }
  codes(request = {
    pagination: void 0
  }) {
    const data = QueryCodesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "Codes", data);
    return promise.then((data2) => QueryCodesResponse.decode(new BinaryReader(data2)));
  }
  codeInfo(request) {
    const data = QueryCodeInfoRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "CodeInfo", data);
    return promise.then((data2) => QueryCodeInfoResponse.decode(new BinaryReader(data2)));
  }
  pinnedCodes(request = {
    pagination: void 0
  }) {
    const data = QueryPinnedCodesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "PinnedCodes", data);
    return promise.then((data2) => QueryPinnedCodesResponse.decode(new BinaryReader(data2)));
  }
  params(request = {}) {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "Params", data);
    return promise.then((data2) => QueryParamsResponse.decode(new BinaryReader(data2)));
  }
  contractsByCreator(request) {
    const data = QueryContractsByCreatorRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "ContractsByCreator", data);
    return promise.then((data2) => QueryContractsByCreatorResponse.decode(new BinaryReader(data2)));
  }
  wasmLimitsConfig(request = {}) {
    const data = QueryWasmLimitsConfigRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "WasmLimitsConfig", data);
    return promise.then((data2) => QueryWasmLimitsConfigResponse.decode(new BinaryReader(data2)));
  }
  buildAddress(request) {
    const data = QueryBuildAddressRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "BuildAddress", data);
    return promise.then((data2) => QueryBuildAddressResponse.decode(new BinaryReader(data2)));
  }
}
const createRpcQueryExtension = (base) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    contractInfo(request) {
      return queryService.contractInfo(request);
    },
    contractHistory(request) {
      return queryService.contractHistory(request);
    },
    contractsByCode(request) {
      return queryService.contractsByCode(request);
    },
    allContractState(request) {
      return queryService.allContractState(request);
    },
    rawContractState(request) {
      return queryService.rawContractState(request);
    },
    smartContractState(request) {
      return queryService.smartContractState(request);
    },
    code(request) {
      return queryService.code(request);
    },
    codes(request) {
      return queryService.codes(request);
    },
    codeInfo(request) {
      return queryService.codeInfo(request);
    },
    pinnedCodes(request) {
      return queryService.pinnedCodes(request);
    },
    params(request) {
      return queryService.params(request);
    },
    contractsByCreator(request) {
      return queryService.contractsByCreator(request);
    },
    wasmLimitsConfig(request) {
      return queryService.wasmLimitsConfig(request);
    },
    buildAddress(request) {
      return queryService.buildAddress(request);
    }
  };
};
export {
  QueryClientImpl,
  createRpcQueryExtension
};
