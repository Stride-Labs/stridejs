import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryValidatorsRequest, QueryValidatorsResponse, QueryValidatorRequest, QueryValidatorResponse, QueryValidatorDelegationsRequest, QueryValidatorDelegationsResponse, QueryValidatorUnbondingDelegationsRequest, QueryValidatorUnbondingDelegationsResponse, QueryDelegationRequest, QueryDelegationResponse, QueryUnbondingDelegationRequest, QueryUnbondingDelegationResponse, QueryDelegatorDelegationsRequest, QueryDelegatorDelegationsResponse, QueryDelegatorUnbondingDelegationsRequest, QueryDelegatorUnbondingDelegationsResponse, QueryRedelegationsRequest, QueryRedelegationsResponse, QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponse, QueryDelegatorValidatorRequest, QueryDelegatorValidatorResponse, QueryHistoricalInfoRequest, QueryHistoricalInfoResponse, QueryPoolRequest, QueryPoolResponse, QueryParamsRequest, QueryParamsResponse, QueryTokenizeShareRecordByIdRequest, QueryTokenizeShareRecordByIdResponse, QueryTokenizeShareRecordByDenomRequest, QueryTokenizeShareRecordByDenomResponse, QueryTokenizeShareRecordsOwnedRequest, QueryTokenizeShareRecordsOwnedResponse, QueryAllTokenizeShareRecordsRequest, QueryAllTokenizeShareRecordsResponse, QueryLastTokenizeShareRecordIdRequest, QueryLastTokenizeShareRecordIdResponse, QueryTotalTokenizeSharedAssetsRequest, QueryTotalTokenizeSharedAssetsResponse, QueryTotalLiquidStaked, QueryTotalLiquidStakedResponse, QueryTokenizeShareLockInfo, QueryTokenizeShareLockInfoResponse } from "./query";
/** Query defines the RPC service */

export interface Query {
  validators(request: QueryValidatorsRequest): Promise<QueryValidatorsResponse>;
  /*Validators queries all validators that match the given status.*/

  validator(request: QueryValidatorRequest): Promise<QueryValidatorResponse>;
  /*Validator queries validator info for given validator address.*/

  validatorDelegations(request: QueryValidatorDelegationsRequest): Promise<QueryValidatorDelegationsResponse>;
  /*ValidatorDelegations queries delegate info for given validator.*/

  validatorUnbondingDelegations(request: QueryValidatorUnbondingDelegationsRequest): Promise<QueryValidatorUnbondingDelegationsResponse>;
  /*ValidatorUnbondingDelegations queries unbonding delegations of a validator.*/

  delegation(request: QueryDelegationRequest): Promise<QueryDelegationResponse>;
  /*Delegation queries delegate info for given validator delegator pair.*/

  unbondingDelegation(request: QueryUnbondingDelegationRequest): Promise<QueryUnbondingDelegationResponse>;
  /*UnbondingDelegation queries unbonding info for given validator delegator
   pair.*/

  delegatorDelegations(request: QueryDelegatorDelegationsRequest): Promise<QueryDelegatorDelegationsResponse>;
  /*DelegatorDelegations queries all delegations of a given delegator address.*/

  delegatorUnbondingDelegations(request: QueryDelegatorUnbondingDelegationsRequest): Promise<QueryDelegatorUnbondingDelegationsResponse>;
  /*DelegatorUnbondingDelegations queries all unbonding delegations of a given
   delegator address.*/

  redelegations(request: QueryRedelegationsRequest): Promise<QueryRedelegationsResponse>;
  /*Redelegations queries redelegations of given address.*/

  delegatorValidators(request: QueryDelegatorValidatorsRequest): Promise<QueryDelegatorValidatorsResponse>;
  /*DelegatorValidators queries all validators info for given delegator
   address.*/

  delegatorValidator(request: QueryDelegatorValidatorRequest): Promise<QueryDelegatorValidatorResponse>;
  /*DelegatorValidator queries validator info for given delegator validator
   pair.*/

  historicalInfo(request: QueryHistoricalInfoRequest): Promise<QueryHistoricalInfoResponse>;
  /*HistoricalInfo queries the historical info for given height.*/

  pool(request?: QueryPoolRequest): Promise<QueryPoolResponse>;
  /*Pool queries the pool info.*/

  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /*Parameters queries the staking parameters.*/

  tokenizeShareRecordById(request: QueryTokenizeShareRecordByIdRequest): Promise<QueryTokenizeShareRecordByIdResponse>;
  /*Query for individual tokenize share record information by share by id*/

  tokenizeShareRecordByDenom(request: QueryTokenizeShareRecordByDenomRequest): Promise<QueryTokenizeShareRecordByDenomResponse>;
  /*Query for individual tokenize share record information by share denom*/

  tokenizeShareRecordsOwned(request: QueryTokenizeShareRecordsOwnedRequest): Promise<QueryTokenizeShareRecordsOwnedResponse>;
  /*Query tokenize share records by address*/

  allTokenizeShareRecords(request?: QueryAllTokenizeShareRecordsRequest): Promise<QueryAllTokenizeShareRecordsResponse>;
  /*Query for all tokenize share records*/

  lastTokenizeShareRecordId(request?: QueryLastTokenizeShareRecordIdRequest): Promise<QueryLastTokenizeShareRecordIdResponse>;
  /*Query for last tokenize share record id*/

  totalTokenizeSharedAssets(request?: QueryTotalTokenizeSharedAssetsRequest): Promise<QueryTotalTokenizeSharedAssetsResponse>;
  /*Query for total tokenized staked assets*/

  totalLiquidStaked(request?: QueryTotalLiquidStaked): Promise<QueryTotalLiquidStakedResponse>;
  /*Query for total liquid staked (including tokenized shares or owned by an liquid staking provider)*/

  tokenizeShareLockInfo(request: QueryTokenizeShareLockInfo): Promise<QueryTokenizeShareLockInfoResponse>;
  /*Query tokenize share locks*/

}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
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

  validators(request: QueryValidatorsRequest): Promise<QueryValidatorsResponse> {
    const data = QueryValidatorsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Validators", data);
    return promise.then(data => QueryValidatorsResponse.decode(new _m0.Reader(data)));
  }

  validator(request: QueryValidatorRequest): Promise<QueryValidatorResponse> {
    const data = QueryValidatorRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Validator", data);
    return promise.then(data => QueryValidatorResponse.decode(new _m0.Reader(data)));
  }

  validatorDelegations(request: QueryValidatorDelegationsRequest): Promise<QueryValidatorDelegationsResponse> {
    const data = QueryValidatorDelegationsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "ValidatorDelegations", data);
    return promise.then(data => QueryValidatorDelegationsResponse.decode(new _m0.Reader(data)));
  }

  validatorUnbondingDelegations(request: QueryValidatorUnbondingDelegationsRequest): Promise<QueryValidatorUnbondingDelegationsResponse> {
    const data = QueryValidatorUnbondingDelegationsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "ValidatorUnbondingDelegations", data);
    return promise.then(data => QueryValidatorUnbondingDelegationsResponse.decode(new _m0.Reader(data)));
  }

  delegation(request: QueryDelegationRequest): Promise<QueryDelegationResponse> {
    const data = QueryDelegationRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Delegation", data);
    return promise.then(data => QueryDelegationResponse.decode(new _m0.Reader(data)));
  }

  unbondingDelegation(request: QueryUnbondingDelegationRequest): Promise<QueryUnbondingDelegationResponse> {
    const data = QueryUnbondingDelegationRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "UnbondingDelegation", data);
    return promise.then(data => QueryUnbondingDelegationResponse.decode(new _m0.Reader(data)));
  }

  delegatorDelegations(request: QueryDelegatorDelegationsRequest): Promise<QueryDelegatorDelegationsResponse> {
    const data = QueryDelegatorDelegationsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "DelegatorDelegations", data);
    return promise.then(data => QueryDelegatorDelegationsResponse.decode(new _m0.Reader(data)));
  }

  delegatorUnbondingDelegations(request: QueryDelegatorUnbondingDelegationsRequest): Promise<QueryDelegatorUnbondingDelegationsResponse> {
    const data = QueryDelegatorUnbondingDelegationsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "DelegatorUnbondingDelegations", data);
    return promise.then(data => QueryDelegatorUnbondingDelegationsResponse.decode(new _m0.Reader(data)));
  }

  redelegations(request: QueryRedelegationsRequest): Promise<QueryRedelegationsResponse> {
    const data = QueryRedelegationsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Redelegations", data);
    return promise.then(data => QueryRedelegationsResponse.decode(new _m0.Reader(data)));
  }

  delegatorValidators(request: QueryDelegatorValidatorsRequest): Promise<QueryDelegatorValidatorsResponse> {
    const data = QueryDelegatorValidatorsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "DelegatorValidators", data);
    return promise.then(data => QueryDelegatorValidatorsResponse.decode(new _m0.Reader(data)));
  }

  delegatorValidator(request: QueryDelegatorValidatorRequest): Promise<QueryDelegatorValidatorResponse> {
    const data = QueryDelegatorValidatorRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "DelegatorValidator", data);
    return promise.then(data => QueryDelegatorValidatorResponse.decode(new _m0.Reader(data)));
  }

  historicalInfo(request: QueryHistoricalInfoRequest): Promise<QueryHistoricalInfoResponse> {
    const data = QueryHistoricalInfoRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "HistoricalInfo", data);
    return promise.then(data => QueryHistoricalInfoResponse.decode(new _m0.Reader(data)));
  }

  pool(request: QueryPoolRequest = {}): Promise<QueryPoolResponse> {
    const data = QueryPoolRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Pool", data);
    return promise.then(data => QueryPoolResponse.decode(new _m0.Reader(data)));
  }

  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  tokenizeShareRecordById(request: QueryTokenizeShareRecordByIdRequest): Promise<QueryTokenizeShareRecordByIdResponse> {
    const data = QueryTokenizeShareRecordByIdRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "TokenizeShareRecordById", data);
    return promise.then(data => QueryTokenizeShareRecordByIdResponse.decode(new _m0.Reader(data)));
  }

  tokenizeShareRecordByDenom(request: QueryTokenizeShareRecordByDenomRequest): Promise<QueryTokenizeShareRecordByDenomResponse> {
    const data = QueryTokenizeShareRecordByDenomRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "TokenizeShareRecordByDenom", data);
    return promise.then(data => QueryTokenizeShareRecordByDenomResponse.decode(new _m0.Reader(data)));
  }

  tokenizeShareRecordsOwned(request: QueryTokenizeShareRecordsOwnedRequest): Promise<QueryTokenizeShareRecordsOwnedResponse> {
    const data = QueryTokenizeShareRecordsOwnedRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "TokenizeShareRecordsOwned", data);
    return promise.then(data => QueryTokenizeShareRecordsOwnedResponse.decode(new _m0.Reader(data)));
  }

  allTokenizeShareRecords(request: QueryAllTokenizeShareRecordsRequest = {
    pagination: undefined
  }): Promise<QueryAllTokenizeShareRecordsResponse> {
    const data = QueryAllTokenizeShareRecordsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "AllTokenizeShareRecords", data);
    return promise.then(data => QueryAllTokenizeShareRecordsResponse.decode(new _m0.Reader(data)));
  }

  lastTokenizeShareRecordId(request: QueryLastTokenizeShareRecordIdRequest = {}): Promise<QueryLastTokenizeShareRecordIdResponse> {
    const data = QueryLastTokenizeShareRecordIdRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "LastTokenizeShareRecordId", data);
    return promise.then(data => QueryLastTokenizeShareRecordIdResponse.decode(new _m0.Reader(data)));
  }

  totalTokenizeSharedAssets(request: QueryTotalTokenizeSharedAssetsRequest = {}): Promise<QueryTotalTokenizeSharedAssetsResponse> {
    const data = QueryTotalTokenizeSharedAssetsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "TotalTokenizeSharedAssets", data);
    return promise.then(data => QueryTotalTokenizeSharedAssetsResponse.decode(new _m0.Reader(data)));
  }

  totalLiquidStaked(request: QueryTotalLiquidStaked = {}): Promise<QueryTotalLiquidStakedResponse> {
    const data = QueryTotalLiquidStaked.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "TotalLiquidStaked", data);
    return promise.then(data => QueryTotalLiquidStakedResponse.decode(new _m0.Reader(data)));
  }

  tokenizeShareLockInfo(request: QueryTokenizeShareLockInfo): Promise<QueryTokenizeShareLockInfoResponse> {
    const data = QueryTokenizeShareLockInfo.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "TokenizeShareLockInfo", data);
    return promise.then(data => QueryTokenizeShareLockInfoResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    validators(request: QueryValidatorsRequest): Promise<QueryValidatorsResponse> {
      return queryService.validators(request);
    },

    validator(request: QueryValidatorRequest): Promise<QueryValidatorResponse> {
      return queryService.validator(request);
    },

    validatorDelegations(request: QueryValidatorDelegationsRequest): Promise<QueryValidatorDelegationsResponse> {
      return queryService.validatorDelegations(request);
    },

    validatorUnbondingDelegations(request: QueryValidatorUnbondingDelegationsRequest): Promise<QueryValidatorUnbondingDelegationsResponse> {
      return queryService.validatorUnbondingDelegations(request);
    },

    delegation(request: QueryDelegationRequest): Promise<QueryDelegationResponse> {
      return queryService.delegation(request);
    },

    unbondingDelegation(request: QueryUnbondingDelegationRequest): Promise<QueryUnbondingDelegationResponse> {
      return queryService.unbondingDelegation(request);
    },

    delegatorDelegations(request: QueryDelegatorDelegationsRequest): Promise<QueryDelegatorDelegationsResponse> {
      return queryService.delegatorDelegations(request);
    },

    delegatorUnbondingDelegations(request: QueryDelegatorUnbondingDelegationsRequest): Promise<QueryDelegatorUnbondingDelegationsResponse> {
      return queryService.delegatorUnbondingDelegations(request);
    },

    redelegations(request: QueryRedelegationsRequest): Promise<QueryRedelegationsResponse> {
      return queryService.redelegations(request);
    },

    delegatorValidators(request: QueryDelegatorValidatorsRequest): Promise<QueryDelegatorValidatorsResponse> {
      return queryService.delegatorValidators(request);
    },

    delegatorValidator(request: QueryDelegatorValidatorRequest): Promise<QueryDelegatorValidatorResponse> {
      return queryService.delegatorValidator(request);
    },

    historicalInfo(request: QueryHistoricalInfoRequest): Promise<QueryHistoricalInfoResponse> {
      return queryService.historicalInfo(request);
    },

    pool(request?: QueryPoolRequest): Promise<QueryPoolResponse> {
      return queryService.pool(request);
    },

    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },

    tokenizeShareRecordById(request: QueryTokenizeShareRecordByIdRequest): Promise<QueryTokenizeShareRecordByIdResponse> {
      return queryService.tokenizeShareRecordById(request);
    },

    tokenizeShareRecordByDenom(request: QueryTokenizeShareRecordByDenomRequest): Promise<QueryTokenizeShareRecordByDenomResponse> {
      return queryService.tokenizeShareRecordByDenom(request);
    },

    tokenizeShareRecordsOwned(request: QueryTokenizeShareRecordsOwnedRequest): Promise<QueryTokenizeShareRecordsOwnedResponse> {
      return queryService.tokenizeShareRecordsOwned(request);
    },

    allTokenizeShareRecords(request?: QueryAllTokenizeShareRecordsRequest): Promise<QueryAllTokenizeShareRecordsResponse> {
      return queryService.allTokenizeShareRecords(request);
    },

    lastTokenizeShareRecordId(request?: QueryLastTokenizeShareRecordIdRequest): Promise<QueryLastTokenizeShareRecordIdResponse> {
      return queryService.lastTokenizeShareRecordId(request);
    },

    totalTokenizeSharedAssets(request?: QueryTotalTokenizeSharedAssetsRequest): Promise<QueryTotalTokenizeSharedAssetsResponse> {
      return queryService.totalTokenizeSharedAssets(request);
    },

    totalLiquidStaked(request?: QueryTotalLiquidStaked): Promise<QueryTotalLiquidStakedResponse> {
      return queryService.totalLiquidStaked(request);
    },

    tokenizeShareLockInfo(request: QueryTokenizeShareLockInfo): Promise<QueryTokenizeShareLockInfoResponse> {
      return queryService.tokenizeShareLockInfo(request);
    }

  };
};