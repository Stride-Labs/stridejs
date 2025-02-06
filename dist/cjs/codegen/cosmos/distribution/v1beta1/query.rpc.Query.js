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
var import_binary = require("../../../binary");
var import_stargate = require("@cosmjs/stargate");
var import_query = require("./query");
class QueryClientImpl {
  rpc;
  constructor(rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.validatorOutstandingRewards = this.validatorOutstandingRewards.bind(this);
    this.validatorCommission = this.validatorCommission.bind(this);
    this.validatorSlashes = this.validatorSlashes.bind(this);
    this.delegationRewards = this.delegationRewards.bind(this);
    this.delegationTotalRewards = this.delegationTotalRewards.bind(this);
    this.delegatorValidators = this.delegatorValidators.bind(this);
    this.delegatorWithdrawAddress = this.delegatorWithdrawAddress.bind(this);
    this.communityPool = this.communityPool.bind(this);
    this.tokenizeShareRecordReward = this.tokenizeShareRecordReward.bind(this);
  }
  params(request = {}) {
    const data = import_query.QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "Params", data);
    return promise.then((data2) => import_query.QueryParamsResponse.decode(new import_binary.BinaryReader(data2)));
  }
  validatorOutstandingRewards(request) {
    const data = import_query.QueryValidatorOutstandingRewardsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "ValidatorOutstandingRewards", data);
    return promise.then((data2) => import_query.QueryValidatorOutstandingRewardsResponse.decode(new import_binary.BinaryReader(data2)));
  }
  validatorCommission(request) {
    const data = import_query.QueryValidatorCommissionRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "ValidatorCommission", data);
    return promise.then((data2) => import_query.QueryValidatorCommissionResponse.decode(new import_binary.BinaryReader(data2)));
  }
  validatorSlashes(request) {
    const data = import_query.QueryValidatorSlashesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "ValidatorSlashes", data);
    return promise.then((data2) => import_query.QueryValidatorSlashesResponse.decode(new import_binary.BinaryReader(data2)));
  }
  delegationRewards(request) {
    const data = import_query.QueryDelegationRewardsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "DelegationRewards", data);
    return promise.then((data2) => import_query.QueryDelegationRewardsResponse.decode(new import_binary.BinaryReader(data2)));
  }
  delegationTotalRewards(request) {
    const data = import_query.QueryDelegationTotalRewardsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "DelegationTotalRewards", data);
    return promise.then((data2) => import_query.QueryDelegationTotalRewardsResponse.decode(new import_binary.BinaryReader(data2)));
  }
  delegatorValidators(request) {
    const data = import_query.QueryDelegatorValidatorsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "DelegatorValidators", data);
    return promise.then((data2) => import_query.QueryDelegatorValidatorsResponse.decode(new import_binary.BinaryReader(data2)));
  }
  delegatorWithdrawAddress(request) {
    const data = import_query.QueryDelegatorWithdrawAddressRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "DelegatorWithdrawAddress", data);
    return promise.then((data2) => import_query.QueryDelegatorWithdrawAddressResponse.decode(new import_binary.BinaryReader(data2)));
  }
  communityPool(request = {}) {
    const data = import_query.QueryCommunityPoolRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "CommunityPool", data);
    return promise.then((data2) => import_query.QueryCommunityPoolResponse.decode(new import_binary.BinaryReader(data2)));
  }
  tokenizeShareRecordReward(request) {
    const data = import_query.QueryTokenizeShareRecordRewardRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "TokenizeShareRecordReward", data);
    return promise.then((data2) => import_query.QueryTokenizeShareRecordRewardResponse.decode(new import_binary.BinaryReader(data2)));
  }
}
const createRpcQueryExtension = (base) => {
  const rpc = (0, import_stargate.createProtobufRpcClient)(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request) {
      return queryService.params(request);
    },
    validatorOutstandingRewards(request) {
      return queryService.validatorOutstandingRewards(request);
    },
    validatorCommission(request) {
      return queryService.validatorCommission(request);
    },
    validatorSlashes(request) {
      return queryService.validatorSlashes(request);
    },
    delegationRewards(request) {
      return queryService.delegationRewards(request);
    },
    delegationTotalRewards(request) {
      return queryService.delegationTotalRewards(request);
    },
    delegatorValidators(request) {
      return queryService.delegatorValidators(request);
    },
    delegatorWithdrawAddress(request) {
      return queryService.delegatorWithdrawAddress(request);
    },
    communityPool(request) {
      return queryService.communityPool(request);
    },
    tokenizeShareRecordReward(request) {
      return queryService.tokenizeShareRecordReward(request);
    }
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  QueryClientImpl,
  createRpcQueryExtension
});
