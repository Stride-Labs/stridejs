import { BinaryReader } from "../../../binary";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryLiquidValidatorRequest, QueryLiquidValidatorResponse, QueryTokenizeShareRecordByIdRequest, QueryTokenizeShareRecordByIdResponse, QueryTokenizeShareRecordByDenomRequest, QueryTokenizeShareRecordByDenomResponse, QueryTokenizeShareRecordsOwnedRequest, QueryTokenizeShareRecordsOwnedResponse, QueryAllTokenizeShareRecordsRequest, QueryAllTokenizeShareRecordsResponse, QueryLastTokenizeShareRecordIdRequest, QueryLastTokenizeShareRecordIdResponse, QueryTotalTokenizeSharedAssetsRequest, QueryTotalTokenizeSharedAssetsResponse, QueryTotalLiquidStaked, QueryTotalLiquidStakedResponse, QueryTokenizeShareLockInfo, QueryTokenizeShareLockInfoResponse, QueryParamsRequest, QueryParamsResponse, QueryTokenizeShareRecordRewardRequest, QueryTokenizeShareRecordRewardResponse } from "./query";
class QueryClientImpl {
  rpc;
  constructor(rpc) {
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
  liquidValidator(request) {
    const data = QueryLiquidValidatorRequest.encode(request).finish();
    const promise = this.rpc.request("gaia.liquid.v1beta1.Query", "LiquidValidator", data);
    return promise.then((data2) => QueryLiquidValidatorResponse.decode(new BinaryReader(data2)));
  }
  tokenizeShareRecordById(request) {
    const data = QueryTokenizeShareRecordByIdRequest.encode(request).finish();
    const promise = this.rpc.request("gaia.liquid.v1beta1.Query", "TokenizeShareRecordById", data);
    return promise.then((data2) => QueryTokenizeShareRecordByIdResponse.decode(new BinaryReader(data2)));
  }
  tokenizeShareRecordByDenom(request) {
    const data = QueryTokenizeShareRecordByDenomRequest.encode(request).finish();
    const promise = this.rpc.request("gaia.liquid.v1beta1.Query", "TokenizeShareRecordByDenom", data);
    return promise.then((data2) => QueryTokenizeShareRecordByDenomResponse.decode(new BinaryReader(data2)));
  }
  tokenizeShareRecordsOwned(request) {
    const data = QueryTokenizeShareRecordsOwnedRequest.encode(request).finish();
    const promise = this.rpc.request("gaia.liquid.v1beta1.Query", "TokenizeShareRecordsOwned", data);
    return promise.then((data2) => QueryTokenizeShareRecordsOwnedResponse.decode(new BinaryReader(data2)));
  }
  allTokenizeShareRecords(request = {
    pagination: void 0
  }) {
    const data = QueryAllTokenizeShareRecordsRequest.encode(request).finish();
    const promise = this.rpc.request("gaia.liquid.v1beta1.Query", "AllTokenizeShareRecords", data);
    return promise.then((data2) => QueryAllTokenizeShareRecordsResponse.decode(new BinaryReader(data2)));
  }
  lastTokenizeShareRecordId(request = {}) {
    const data = QueryLastTokenizeShareRecordIdRequest.encode(request).finish();
    const promise = this.rpc.request("gaia.liquid.v1beta1.Query", "LastTokenizeShareRecordId", data);
    return promise.then((data2) => QueryLastTokenizeShareRecordIdResponse.decode(new BinaryReader(data2)));
  }
  totalTokenizeSharedAssets(request = {}) {
    const data = QueryTotalTokenizeSharedAssetsRequest.encode(request).finish();
    const promise = this.rpc.request("gaia.liquid.v1beta1.Query", "TotalTokenizeSharedAssets", data);
    return promise.then((data2) => QueryTotalTokenizeSharedAssetsResponse.decode(new BinaryReader(data2)));
  }
  totalLiquidStaked(request = {}) {
    const data = QueryTotalLiquidStaked.encode(request).finish();
    const promise = this.rpc.request("gaia.liquid.v1beta1.Query", "TotalLiquidStaked", data);
    return promise.then((data2) => QueryTotalLiquidStakedResponse.decode(new BinaryReader(data2)));
  }
  tokenizeShareLockInfo(request) {
    const data = QueryTokenizeShareLockInfo.encode(request).finish();
    const promise = this.rpc.request("gaia.liquid.v1beta1.Query", "TokenizeShareLockInfo", data);
    return promise.then((data2) => QueryTokenizeShareLockInfoResponse.decode(new BinaryReader(data2)));
  }
  params(request = {}) {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("gaia.liquid.v1beta1.Query", "Params", data);
    return promise.then((data2) => QueryParamsResponse.decode(new BinaryReader(data2)));
  }
  tokenizeShareRecordReward(request) {
    const data = QueryTokenizeShareRecordRewardRequest.encode(request).finish();
    const promise = this.rpc.request("gaia.liquid.v1beta1.Query", "TokenizeShareRecordReward", data);
    return promise.then((data2) => QueryTokenizeShareRecordRewardResponse.decode(new BinaryReader(data2)));
  }
}
const createRpcQueryExtension = (base) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    liquidValidator(request) {
      return queryService.liquidValidator(request);
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
    },
    params(request) {
      return queryService.params(request);
    },
    tokenizeShareRecordReward(request) {
      return queryService.tokenizeShareRecordReward(request);
    }
  };
};
export {
  QueryClientImpl,
  createRpcQueryExtension
};
