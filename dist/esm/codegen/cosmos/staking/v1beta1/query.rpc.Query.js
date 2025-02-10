import { BinaryReader } from "../../../binary";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryValidatorsRequest, QueryValidatorsResponse, QueryValidatorRequest, QueryValidatorResponse, QueryValidatorDelegationsRequest, QueryValidatorDelegationsResponse, QueryValidatorUnbondingDelegationsRequest, QueryValidatorUnbondingDelegationsResponse, QueryDelegationRequest, QueryDelegationResponse, QueryUnbondingDelegationRequest, QueryUnbondingDelegationResponse, QueryDelegatorDelegationsRequest, QueryDelegatorDelegationsResponse, QueryDelegatorUnbondingDelegationsRequest, QueryDelegatorUnbondingDelegationsResponse, QueryRedelegationsRequest, QueryRedelegationsResponse, QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponse, QueryDelegatorValidatorRequest, QueryDelegatorValidatorResponse, QueryHistoricalInfoRequest, QueryHistoricalInfoResponse, QueryPoolRequest, QueryPoolResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
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
    }
  };
};
export {
  QueryClientImpl,
  createRpcQueryExtension
};
