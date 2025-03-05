import { BinaryReader } from "../../binary";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryDistributorAccountBalanceRequest, QueryDistributorAccountBalanceResponse, QueryParamsRequest, QueryParamsResponse, QueryClaimRecordRequest, QueryClaimRecordResponse, QueryClaimableForActionRequest, QueryClaimableForActionResponse, QueryTotalClaimableRequest, QueryTotalClaimableResponse, QueryUserVestingsRequest, QueryUserVestingsResponse, QueryClaimStatusRequest, QueryClaimStatusResponse, QueryClaimMetadataRequest, QueryClaimMetadataResponse } from "./query";
class QueryClientImpl {
  rpc;
  constructor(rpc) {
    this.rpc = rpc;
    this.distributorAccountBalance = this.distributorAccountBalance.bind(this);
    this.params = this.params.bind(this);
    this.claimRecord = this.claimRecord.bind(this);
    this.claimableForAction = this.claimableForAction.bind(this);
    this.totalClaimable = this.totalClaimable.bind(this);
    this.userVestings = this.userVestings.bind(this);
    this.claimStatus = this.claimStatus.bind(this);
    this.claimMetadata = this.claimMetadata.bind(this);
  }
  distributorAccountBalance(request) {
    const data = QueryDistributorAccountBalanceRequest.encode(request).finish();
    const promise = this.rpc.request("stride.claim.Query", "DistributorAccountBalance", data);
    return promise.then((data2) => QueryDistributorAccountBalanceResponse.decode(new BinaryReader(data2)));
  }
  params(request = {}) {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("stride.claim.Query", "Params", data);
    return promise.then((data2) => QueryParamsResponse.decode(new BinaryReader(data2)));
  }
  claimRecord(request) {
    const data = QueryClaimRecordRequest.encode(request).finish();
    const promise = this.rpc.request("stride.claim.Query", "ClaimRecord", data);
    return promise.then((data2) => QueryClaimRecordResponse.decode(new BinaryReader(data2)));
  }
  claimableForAction(request) {
    const data = QueryClaimableForActionRequest.encode(request).finish();
    const promise = this.rpc.request("stride.claim.Query", "ClaimableForAction", data);
    return promise.then((data2) => QueryClaimableForActionResponse.decode(new BinaryReader(data2)));
  }
  totalClaimable(request) {
    const data = QueryTotalClaimableRequest.encode(request).finish();
    const promise = this.rpc.request("stride.claim.Query", "TotalClaimable", data);
    return promise.then((data2) => QueryTotalClaimableResponse.decode(new BinaryReader(data2)));
  }
  userVestings(request) {
    const data = QueryUserVestingsRequest.encode(request).finish();
    const promise = this.rpc.request("stride.claim.Query", "UserVestings", data);
    return promise.then((data2) => QueryUserVestingsResponse.decode(new BinaryReader(data2)));
  }
  claimStatus(request) {
    const data = QueryClaimStatusRequest.encode(request).finish();
    const promise = this.rpc.request("stride.claim.Query", "ClaimStatus", data);
    return promise.then((data2) => QueryClaimStatusResponse.decode(new BinaryReader(data2)));
  }
  claimMetadata(request = {}) {
    const data = QueryClaimMetadataRequest.encode(request).finish();
    const promise = this.rpc.request("stride.claim.Query", "ClaimMetadata", data);
    return promise.then((data2) => QueryClaimMetadataResponse.decode(new BinaryReader(data2)));
  }
}
const createRpcQueryExtension = (base) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    distributorAccountBalance(request) {
      return queryService.distributorAccountBalance(request);
    },
    params(request) {
      return queryService.params(request);
    },
    claimRecord(request) {
      return queryService.claimRecord(request);
    },
    claimableForAction(request) {
      return queryService.claimableForAction(request);
    },
    totalClaimable(request) {
      return queryService.totalClaimable(request);
    },
    userVestings(request) {
      return queryService.userVestings(request);
    },
    claimStatus(request) {
      return queryService.claimStatus(request);
    },
    claimMetadata(request) {
      return queryService.claimMetadata(request);
    }
  };
};
export {
  QueryClientImpl,
  createRpcQueryExtension
};
