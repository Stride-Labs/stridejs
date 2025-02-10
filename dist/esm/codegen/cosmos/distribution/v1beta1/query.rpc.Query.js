import { BinaryReader } from "../../../binary";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryValidatorDistributionInfoRequest, QueryValidatorDistributionInfoResponse, QueryValidatorOutstandingRewardsRequest, QueryValidatorOutstandingRewardsResponse, QueryValidatorCommissionRequest, QueryValidatorCommissionResponse, QueryValidatorSlashesRequest, QueryValidatorSlashesResponse, QueryDelegationRewardsRequest, QueryDelegationRewardsResponse, QueryDelegationTotalRewardsRequest, QueryDelegationTotalRewardsResponse, QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponse, QueryDelegatorWithdrawAddressRequest, QueryDelegatorWithdrawAddressResponse, QueryCommunityPoolRequest, QueryCommunityPoolResponse } from "./query";
class QueryClientImpl {
  rpc;
  constructor(rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.validatorDistributionInfo = this.validatorDistributionInfo.bind(this);
    this.validatorOutstandingRewards = this.validatorOutstandingRewards.bind(this);
    this.validatorCommission = this.validatorCommission.bind(this);
    this.validatorSlashes = this.validatorSlashes.bind(this);
    this.delegationRewards = this.delegationRewards.bind(this);
    this.delegationTotalRewards = this.delegationTotalRewards.bind(this);
    this.delegatorValidators = this.delegatorValidators.bind(this);
    this.delegatorWithdrawAddress = this.delegatorWithdrawAddress.bind(this);
    this.communityPool = this.communityPool.bind(this);
  }
  params(request = {}) {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "Params", data);
    return promise.then((data2) => QueryParamsResponse.decode(new BinaryReader(data2)));
  }
  validatorDistributionInfo(request) {
    const data = QueryValidatorDistributionInfoRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "ValidatorDistributionInfo", data);
    return promise.then((data2) => QueryValidatorDistributionInfoResponse.decode(new BinaryReader(data2)));
  }
  validatorOutstandingRewards(request) {
    const data = QueryValidatorOutstandingRewardsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "ValidatorOutstandingRewards", data);
    return promise.then((data2) => QueryValidatorOutstandingRewardsResponse.decode(new BinaryReader(data2)));
  }
  validatorCommission(request) {
    const data = QueryValidatorCommissionRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "ValidatorCommission", data);
    return promise.then((data2) => QueryValidatorCommissionResponse.decode(new BinaryReader(data2)));
  }
  validatorSlashes(request) {
    const data = QueryValidatorSlashesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "ValidatorSlashes", data);
    return promise.then((data2) => QueryValidatorSlashesResponse.decode(new BinaryReader(data2)));
  }
  delegationRewards(request) {
    const data = QueryDelegationRewardsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "DelegationRewards", data);
    return promise.then((data2) => QueryDelegationRewardsResponse.decode(new BinaryReader(data2)));
  }
  delegationTotalRewards(request) {
    const data = QueryDelegationTotalRewardsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "DelegationTotalRewards", data);
    return promise.then((data2) => QueryDelegationTotalRewardsResponse.decode(new BinaryReader(data2)));
  }
  delegatorValidators(request) {
    const data = QueryDelegatorValidatorsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "DelegatorValidators", data);
    return promise.then((data2) => QueryDelegatorValidatorsResponse.decode(new BinaryReader(data2)));
  }
  delegatorWithdrawAddress(request) {
    const data = QueryDelegatorWithdrawAddressRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "DelegatorWithdrawAddress", data);
    return promise.then((data2) => QueryDelegatorWithdrawAddressResponse.decode(new BinaryReader(data2)));
  }
  communityPool(request = {}) {
    const data = QueryCommunityPoolRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "CommunityPool", data);
    return promise.then((data2) => QueryCommunityPoolResponse.decode(new BinaryReader(data2)));
  }
}
const createRpcQueryExtension = (base) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request) {
      return queryService.params(request);
    },
    validatorDistributionInfo(request) {
      return queryService.validatorDistributionInfo(request);
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
    }
  };
};
export {
  QueryClientImpl,
  createRpcQueryExtension
};
