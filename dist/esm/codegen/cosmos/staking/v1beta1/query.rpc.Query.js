import { BinaryReader } from "../../../binary";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryValidatorsRequest, QueryValidatorsResponse, QueryValidatorRequest, QueryValidatorResponse, QueryValidatorDelegationsRequest, QueryValidatorDelegationsResponse, QueryValidatorUnbondingDelegationsRequest, QueryValidatorUnbondingDelegationsResponse, QueryDelegationRequest, QueryDelegationResponse, QueryUnbondingDelegationRequest, QueryUnbondingDelegationResponse, QueryDelegatorDelegationsRequest, QueryDelegatorDelegationsResponse, QueryDelegatorUnbondingDelegationsRequest, QueryDelegatorUnbondingDelegationsResponse, QueryRedelegationsRequest, QueryRedelegationsResponse, QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponse, QueryDelegatorValidatorRequest, QueryDelegatorValidatorResponse, QueryHistoricalInfoRequest, QueryHistoricalInfoResponse, QueryPoolRequest, QueryPoolResponse, QueryParamsRequest, QueryParamsResponse, QueryTokenizeShareRecordByIdRequest, QueryTokenizeShareRecordByIdResponse, QueryTokenizeShareRecordByDenomRequest, QueryTokenizeShareRecordByDenomResponse, QueryTokenizeShareRecordsOwnedRequest, QueryTokenizeShareRecordsOwnedResponse, QueryAllTokenizeShareRecordsRequest, QueryAllTokenizeShareRecordsResponse, QueryLastTokenizeShareRecordIdRequest, QueryLastTokenizeShareRecordIdResponse, QueryTotalTokenizeSharedAssetsRequest, QueryTotalTokenizeSharedAssetsResponse, QueryTotalLiquidStaked, QueryTotalLiquidStakedResponse, QueryTokenizeShareLockInfo, QueryTokenizeShareLockInfoResponse } from "./query";
class QueryClientImpl {
  rpc;
  constructor(rpc) {
    this.rpc = rpc;
    this.validators = this.validators.bind(this);
    this.validator = this.validator.bind(this);
    this.validatorDelegations = this.validatorDelegations.bind(this);
    this.validatorUnbondingDelegations = this.validatorUnbondingDelegations.bind(this);
    this.delegation = this.delegation.bind(this);
    this.unbondingDelegation = this.unbondingDelegation.bind(this);
    this.delegatorDelegations = this.delegatorDelegations.bind(this);
    this.delegatorUnbondingDelegations = this.delegatorUnbondingDelegations.bind(this);
    this.redelegations = this.redelegations.bind(this);
    this.delegatorValidators = this.delegatorValidators.bind(this);
    this.delegatorValidator = this.delegatorValidator.bind(this);
    this.historicalInfo = this.historicalInfo.bind(this);
    this.pool = this.pool.bind(this);
    this.params = this.params.bind(this);
    this.tokenizeShareRecordById = this.tokenizeShareRecordById.bind(this);
    this.tokenizeShareRecordByDenom = this.tokenizeShareRecordByDenom.bind(this);
    this.tokenizeShareRecordsOwned = this.tokenizeShareRecordsOwned.bind(this);
    this.allTokenizeShareRecords = this.allTokenizeShareRecords.bind(this);
    this.lastTokenizeShareRecordId = this.lastTokenizeShareRecordId.bind(this);
    this.totalTokenizeSharedAssets = this.totalTokenizeSharedAssets.bind(this);
    this.totalLiquidStaked = this.totalLiquidStaked.bind(this);
    this.tokenizeShareLockInfo = this.tokenizeShareLockInfo.bind(this);
  }
  validators(request) {
    const data = QueryValidatorsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Validators", data);
    return promise.then((data2) => QueryValidatorsResponse.decode(new BinaryReader(data2)));
  }
  validator(request) {
    const data = QueryValidatorRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Validator", data);
    return promise.then((data2) => QueryValidatorResponse.decode(new BinaryReader(data2)));
  }
  validatorDelegations(request) {
    const data = QueryValidatorDelegationsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "ValidatorDelegations", data);
    return promise.then((data2) => QueryValidatorDelegationsResponse.decode(new BinaryReader(data2)));
  }
  validatorUnbondingDelegations(request) {
    const data = QueryValidatorUnbondingDelegationsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "ValidatorUnbondingDelegations", data);
    return promise.then((data2) => QueryValidatorUnbondingDelegationsResponse.decode(new BinaryReader(data2)));
  }
  delegation(request) {
    const data = QueryDelegationRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Delegation", data);
    return promise.then((data2) => QueryDelegationResponse.decode(new BinaryReader(data2)));
  }
  unbondingDelegation(request) {
    const data = QueryUnbondingDelegationRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "UnbondingDelegation", data);
    return promise.then((data2) => QueryUnbondingDelegationResponse.decode(new BinaryReader(data2)));
  }
  delegatorDelegations(request) {
    const data = QueryDelegatorDelegationsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "DelegatorDelegations", data);
    return promise.then((data2) => QueryDelegatorDelegationsResponse.decode(new BinaryReader(data2)));
  }
  delegatorUnbondingDelegations(request) {
    const data = QueryDelegatorUnbondingDelegationsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "DelegatorUnbondingDelegations", data);
    return promise.then((data2) => QueryDelegatorUnbondingDelegationsResponse.decode(new BinaryReader(data2)));
  }
  redelegations(request) {
    const data = QueryRedelegationsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Redelegations", data);
    return promise.then((data2) => QueryRedelegationsResponse.decode(new BinaryReader(data2)));
  }
  delegatorValidators(request) {
    const data = QueryDelegatorValidatorsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "DelegatorValidators", data);
    return promise.then((data2) => QueryDelegatorValidatorsResponse.decode(new BinaryReader(data2)));
  }
  delegatorValidator(request) {
    const data = QueryDelegatorValidatorRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "DelegatorValidator", data);
    return promise.then((data2) => QueryDelegatorValidatorResponse.decode(new BinaryReader(data2)));
  }
  historicalInfo(request) {
    const data = QueryHistoricalInfoRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "HistoricalInfo", data);
    return promise.then((data2) => QueryHistoricalInfoResponse.decode(new BinaryReader(data2)));
  }
  pool(request = {}) {
    const data = QueryPoolRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Pool", data);
    return promise.then((data2) => QueryPoolResponse.decode(new BinaryReader(data2)));
  }
  params(request = {}) {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Params", data);
    return promise.then((data2) => QueryParamsResponse.decode(new BinaryReader(data2)));
  }
  tokenizeShareRecordById(request) {
    const data = QueryTokenizeShareRecordByIdRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "TokenizeShareRecordById", data);
    return promise.then((data2) => QueryTokenizeShareRecordByIdResponse.decode(new BinaryReader(data2)));
  }
  tokenizeShareRecordByDenom(request) {
    const data = QueryTokenizeShareRecordByDenomRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "TokenizeShareRecordByDenom", data);
    return promise.then((data2) => QueryTokenizeShareRecordByDenomResponse.decode(new BinaryReader(data2)));
  }
  tokenizeShareRecordsOwned(request) {
    const data = QueryTokenizeShareRecordsOwnedRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "TokenizeShareRecordsOwned", data);
    return promise.then((data2) => QueryTokenizeShareRecordsOwnedResponse.decode(new BinaryReader(data2)));
  }
  allTokenizeShareRecords(request = {
    pagination: void 0
  }) {
    const data = QueryAllTokenizeShareRecordsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "AllTokenizeShareRecords", data);
    return promise.then((data2) => QueryAllTokenizeShareRecordsResponse.decode(new BinaryReader(data2)));
  }
  lastTokenizeShareRecordId(request = {}) {
    const data = QueryLastTokenizeShareRecordIdRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "LastTokenizeShareRecordId", data);
    return promise.then((data2) => QueryLastTokenizeShareRecordIdResponse.decode(new BinaryReader(data2)));
  }
  totalTokenizeSharedAssets(request = {}) {
    const data = QueryTotalTokenizeSharedAssetsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "TotalTokenizeSharedAssets", data);
    return promise.then((data2) => QueryTotalTokenizeSharedAssetsResponse.decode(new BinaryReader(data2)));
  }
  totalLiquidStaked(request = {}) {
    const data = QueryTotalLiquidStaked.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "TotalLiquidStaked", data);
    return promise.then((data2) => QueryTotalLiquidStakedResponse.decode(new BinaryReader(data2)));
  }
  tokenizeShareLockInfo(request) {
    const data = QueryTokenizeShareLockInfo.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "TokenizeShareLockInfo", data);
    return promise.then((data2) => QueryTokenizeShareLockInfoResponse.decode(new BinaryReader(data2)));
  }
}
const createRpcQueryExtension = (base) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    validators(request) {
      return queryService.validators(request);
    },
    validator(request) {
      return queryService.validator(request);
    },
    validatorDelegations(request) {
      return queryService.validatorDelegations(request);
    },
    validatorUnbondingDelegations(request) {
      return queryService.validatorUnbondingDelegations(request);
    },
    delegation(request) {
      return queryService.delegation(request);
    },
    unbondingDelegation(request) {
      return queryService.unbondingDelegation(request);
    },
    delegatorDelegations(request) {
      return queryService.delegatorDelegations(request);
    },
    delegatorUnbondingDelegations(request) {
      return queryService.delegatorUnbondingDelegations(request);
    },
    redelegations(request) {
      return queryService.redelegations(request);
    },
    delegatorValidators(request) {
      return queryService.delegatorValidators(request);
    },
    delegatorValidator(request) {
      return queryService.delegatorValidator(request);
    },
    historicalInfo(request) {
      return queryService.historicalInfo(request);
    },
    pool(request) {
      return queryService.pool(request);
    },
    params(request) {
      return queryService.params(request);
    },
    tokenizeShareRecordById(request) {
      return queryService.tokenizeShareRecordById(request);
    },
    tokenizeShareRecordByDenom(request) {
      return queryService.tokenizeShareRecordByDenom(request);
    },
    tokenizeShareRecordsOwned(request) {
      return queryService.tokenizeShareRecordsOwned(request);
    },
    allTokenizeShareRecords(request) {
      return queryService.allTokenizeShareRecords(request);
    },
    lastTokenizeShareRecordId(request) {
      return queryService.lastTokenizeShareRecordId(request);
    },
    totalTokenizeSharedAssets(request) {
      return queryService.totalTokenizeSharedAssets(request);
    },
    totalLiquidStaked(request) {
      return queryService.totalLiquidStaked(request);
    },
    tokenizeShareLockInfo(request) {
      return queryService.tokenizeShareLockInfo(request);
    }
  };
};
export {
  QueryClientImpl,
  createRpcQueryExtension
};
