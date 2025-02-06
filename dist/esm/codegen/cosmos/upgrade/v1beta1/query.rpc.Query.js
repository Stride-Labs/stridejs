import { BinaryReader } from "../../../binary";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryCurrentPlanRequest, QueryCurrentPlanResponse, QueryAppliedPlanRequest, QueryAppliedPlanResponse, QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse, QueryModuleVersionsRequest, QueryModuleVersionsResponse } from "./query";
class QueryClientImpl {
  rpc;
  constructor(rpc) {
    this.rpc = rpc;
    this.currentPlan = this.currentPlan.bind(this);
    this.appliedPlan = this.appliedPlan.bind(this);
    this.upgradedConsensusState = this.upgradedConsensusState.bind(this);
    this.moduleVersions = this.moduleVersions.bind(this);
  }
  currentPlan(request = {}) {
    const data = QueryCurrentPlanRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.upgrade.v1beta1.Query", "CurrentPlan", data);
    return promise.then((data2) => QueryCurrentPlanResponse.decode(new BinaryReader(data2)));
  }
  appliedPlan(request) {
    const data = QueryAppliedPlanRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.upgrade.v1beta1.Query", "AppliedPlan", data);
    return promise.then((data2) => QueryAppliedPlanResponse.decode(new BinaryReader(data2)));
  }
  upgradedConsensusState(request) {
    const data = QueryUpgradedConsensusStateRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.upgrade.v1beta1.Query", "UpgradedConsensusState", data);
    return promise.then((data2) => QueryUpgradedConsensusStateResponse.decode(new BinaryReader(data2)));
  }
  moduleVersions(request) {
    const data = QueryModuleVersionsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.upgrade.v1beta1.Query", "ModuleVersions", data);
    return promise.then((data2) => QueryModuleVersionsResponse.decode(new BinaryReader(data2)));
  }
}
const createRpcQueryExtension = (base) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    currentPlan(request) {
      return queryService.currentPlan(request);
    },
    appliedPlan(request) {
      return queryService.appliedPlan(request);
    },
    upgradedConsensusState(request) {
      return queryService.upgradedConsensusState(request);
    },
    moduleVersions(request) {
      return queryService.moduleVersions(request);
    }
  };
};
export {
  QueryClientImpl,
  createRpcQueryExtension
};
