import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryLiquidValidatorRequest, QueryLiquidValidatorResponse, QueryTokenizeShareRecordByIdRequest, QueryTokenizeShareRecordByIdResponse, QueryTokenizeShareRecordByDenomRequest, QueryTokenizeShareRecordByDenomResponse, QueryTokenizeShareRecordsOwnedRequest, QueryTokenizeShareRecordsOwnedResponse, QueryAllTokenizeShareRecordsRequest, QueryAllTokenizeShareRecordsResponse, QueryLastTokenizeShareRecordIdRequest, QueryLastTokenizeShareRecordIdResponse, QueryTotalTokenizeSharedAssetsRequest, QueryTotalTokenizeSharedAssetsResponse, QueryTotalLiquidStaked, QueryTotalLiquidStakedResponse, QueryTokenizeShareLockInfo, QueryTokenizeShareLockInfoResponse, QueryParamsRequest, QueryParamsResponse, QueryTokenizeShareRecordRewardRequest, QueryTokenizeShareRecordRewardResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Query for an individual liquid validator by validator address */
  liquidValidator(request: QueryLiquidValidatorRequest): Promise<QueryLiquidValidatorResponse>;
  /** Query for individual tokenize share record information by share by id */
  tokenizeShareRecordById(request: QueryTokenizeShareRecordByIdRequest): Promise<QueryTokenizeShareRecordByIdResponse>;
  /** Query for individual tokenize share record information by share denom */
  tokenizeShareRecordByDenom(request: QueryTokenizeShareRecordByDenomRequest): Promise<QueryTokenizeShareRecordByDenomResponse>;
  /** Query tokenize share records by address */
  tokenizeShareRecordsOwned(request: QueryTokenizeShareRecordsOwnedRequest): Promise<QueryTokenizeShareRecordsOwnedResponse>;
  /** Query for all tokenize share records */
  allTokenizeShareRecords(request?: QueryAllTokenizeShareRecordsRequest): Promise<QueryAllTokenizeShareRecordsResponse>;
  /** Query for last tokenize share record id */
  lastTokenizeShareRecordId(request?: QueryLastTokenizeShareRecordIdRequest): Promise<QueryLastTokenizeShareRecordIdResponse>;
  /** Query for total tokenized staked assets */
  totalTokenizeSharedAssets(request?: QueryTotalTokenizeSharedAssetsRequest): Promise<QueryTotalTokenizeSharedAssetsResponse>;
  /**
   * Query for total liquid staked (including tokenized shares or owned by an
   * liquid staking provider)
   */
  totalLiquidStaked(request?: QueryTotalLiquidStaked): Promise<QueryTotalLiquidStakedResponse>;
  /** Query tokenize share locks */
  tokenizeShareLockInfo(request: QueryTokenizeShareLockInfo): Promise<QueryTokenizeShareLockInfoResponse>;
  /** Parameters queries the liquid parameters. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** TokenizeShareRecordReward queries the tokenize share record rewards */
  tokenizeShareRecordReward(request: QueryTokenizeShareRecordRewardRequest): Promise<QueryTokenizeShareRecordRewardResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
    this.liquidValidator = this.liquidValidator.bind(this);
    this.tokenizeShareRecordById = this.tokenizeShareRecordById.bind(this);
    this.tokenizeShareRecordByDenom = this.tokenizeShareRecordByDenom.bind(this);
    this.tokenizeShareRecordsOwned = this.tokenizeShareRecordsOwned.bind(this);
    this.allTokenizeShareRecords = this.allTokenizeShareRecords.bind(this);
    this.lastTokenizeShareRecordId = this.lastTokenizeShareRecordId.bind(this);
    this.totalTokenizeSharedAssets = this.totalTokenizeSharedAssets.bind(this);
    this.totalLiquidStaked = this.totalLiquidStaked.bind(this);
    this.tokenizeShareLockInfo = this.tokenizeShareLockInfo.bind(this);
    this.params = this.params.bind(this);
    this.tokenizeShareRecordReward = this.tokenizeShareRecordReward.bind(this);
  }
  liquidValidator(request: QueryLiquidValidatorRequest): Promise<QueryLiquidValidatorResponse> {
    const data = QueryLiquidValidatorRequest.encode(request).finish();
    const promise = this.rpc.request("gaia.liquid.v1beta1.Query", "LiquidValidator", data);
    return promise.then(data => QueryLiquidValidatorResponse.decode(new BinaryReader(data)));
  }
  tokenizeShareRecordById(request: QueryTokenizeShareRecordByIdRequest): Promise<QueryTokenizeShareRecordByIdResponse> {
    const data = QueryTokenizeShareRecordByIdRequest.encode(request).finish();
    const promise = this.rpc.request("gaia.liquid.v1beta1.Query", "TokenizeShareRecordById", data);
    return promise.then(data => QueryTokenizeShareRecordByIdResponse.decode(new BinaryReader(data)));
  }
  tokenizeShareRecordByDenom(request: QueryTokenizeShareRecordByDenomRequest): Promise<QueryTokenizeShareRecordByDenomResponse> {
    const data = QueryTokenizeShareRecordByDenomRequest.encode(request).finish();
    const promise = this.rpc.request("gaia.liquid.v1beta1.Query", "TokenizeShareRecordByDenom", data);
    return promise.then(data => QueryTokenizeShareRecordByDenomResponse.decode(new BinaryReader(data)));
  }
  tokenizeShareRecordsOwned(request: QueryTokenizeShareRecordsOwnedRequest): Promise<QueryTokenizeShareRecordsOwnedResponse> {
    const data = QueryTokenizeShareRecordsOwnedRequest.encode(request).finish();
    const promise = this.rpc.request("gaia.liquid.v1beta1.Query", "TokenizeShareRecordsOwned", data);
    return promise.then(data => QueryTokenizeShareRecordsOwnedResponse.decode(new BinaryReader(data)));
  }
  allTokenizeShareRecords(request: QueryAllTokenizeShareRecordsRequest = {
    pagination: undefined
  }): Promise<QueryAllTokenizeShareRecordsResponse> {
    const data = QueryAllTokenizeShareRecordsRequest.encode(request).finish();
    const promise = this.rpc.request("gaia.liquid.v1beta1.Query", "AllTokenizeShareRecords", data);
    return promise.then(data => QueryAllTokenizeShareRecordsResponse.decode(new BinaryReader(data)));
  }
  lastTokenizeShareRecordId(request: QueryLastTokenizeShareRecordIdRequest = {}): Promise<QueryLastTokenizeShareRecordIdResponse> {
    const data = QueryLastTokenizeShareRecordIdRequest.encode(request).finish();
    const promise = this.rpc.request("gaia.liquid.v1beta1.Query", "LastTokenizeShareRecordId", data);
    return promise.then(data => QueryLastTokenizeShareRecordIdResponse.decode(new BinaryReader(data)));
  }
  totalTokenizeSharedAssets(request: QueryTotalTokenizeSharedAssetsRequest = {}): Promise<QueryTotalTokenizeSharedAssetsResponse> {
    const data = QueryTotalTokenizeSharedAssetsRequest.encode(request).finish();
    const promise = this.rpc.request("gaia.liquid.v1beta1.Query", "TotalTokenizeSharedAssets", data);
    return promise.then(data => QueryTotalTokenizeSharedAssetsResponse.decode(new BinaryReader(data)));
  }
  totalLiquidStaked(request: QueryTotalLiquidStaked = {}): Promise<QueryTotalLiquidStakedResponse> {
    const data = QueryTotalLiquidStaked.encode(request).finish();
    const promise = this.rpc.request("gaia.liquid.v1beta1.Query", "TotalLiquidStaked", data);
    return promise.then(data => QueryTotalLiquidStakedResponse.decode(new BinaryReader(data)));
  }
  tokenizeShareLockInfo(request: QueryTokenizeShareLockInfo): Promise<QueryTokenizeShareLockInfoResponse> {
    const data = QueryTokenizeShareLockInfo.encode(request).finish();
    const promise = this.rpc.request("gaia.liquid.v1beta1.Query", "TokenizeShareLockInfo", data);
    return promise.then(data => QueryTokenizeShareLockInfoResponse.decode(new BinaryReader(data)));
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("gaia.liquid.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  tokenizeShareRecordReward(request: QueryTokenizeShareRecordRewardRequest): Promise<QueryTokenizeShareRecordRewardResponse> {
    const data = QueryTokenizeShareRecordRewardRequest.encode(request).finish();
    const promise = this.rpc.request("gaia.liquid.v1beta1.Query", "TokenizeShareRecordReward", data);
    return promise.then(data => QueryTokenizeShareRecordRewardResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    liquidValidator(request: QueryLiquidValidatorRequest): Promise<QueryLiquidValidatorResponse> {
      return queryService.liquidValidator(request);
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
    },
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    tokenizeShareRecordReward(request: QueryTokenizeShareRecordRewardRequest): Promise<QueryTokenizeShareRecordRewardResponse> {
      return queryService.tokenizeShareRecordReward(request);
    }
  };
};