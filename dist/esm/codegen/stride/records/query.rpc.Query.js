import { BinaryReader } from "../../binary";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryGetUserRedemptionRecordRequest, QueryGetUserRedemptionRecordResponse, QueryAllUserRedemptionRecordRequest, QueryAllUserRedemptionRecordResponse, QueryAllUserRedemptionRecordForUserRequest, QueryAllUserRedemptionRecordForUserResponse, QueryGetEpochUnbondingRecordRequest, QueryGetEpochUnbondingRecordResponse, QueryAllEpochUnbondingRecordRequest, QueryAllEpochUnbondingRecordResponse, QueryGetDepositRecordRequest, QueryGetDepositRecordResponse, QueryAllDepositRecordRequest, QueryAllDepositRecordResponse, QueryDepositRecordByHostRequest, QueryDepositRecordByHostResponse, QueryLSMDepositRequest, QueryLSMDepositResponse, QueryLSMDepositsRequest, QueryLSMDepositsResponse } from "./query";
class QueryClientImpl {
  rpc;
  constructor(rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.userRedemptionRecord = this.userRedemptionRecord.bind(this);
    this.userRedemptionRecordAll = this.userRedemptionRecordAll.bind(this);
    this.userRedemptionRecordForUser = this.userRedemptionRecordForUser.bind(this);
    this.epochUnbondingRecord = this.epochUnbondingRecord.bind(this);
    this.epochUnbondingRecordAll = this.epochUnbondingRecordAll.bind(this);
    this.depositRecord = this.depositRecord.bind(this);
    this.depositRecordAll = this.depositRecordAll.bind(this);
    this.depositRecordByHost = this.depositRecordByHost.bind(this);
    this.lSMDeposit = this.lSMDeposit.bind(this);
    this.lSMDeposits = this.lSMDeposits.bind(this);
  }
  params(request = {}) {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("stride.records.Query", "Params", data);
    return promise.then((data2) => QueryParamsResponse.decode(new BinaryReader(data2)));
  }
  userRedemptionRecord(request) {
    const data = QueryGetUserRedemptionRecordRequest.encode(request).finish();
    const promise = this.rpc.request("stride.records.Query", "UserRedemptionRecord", data);
    return promise.then((data2) => QueryGetUserRedemptionRecordResponse.decode(new BinaryReader(data2)));
  }
  userRedemptionRecordAll(request = {
    pagination: void 0
  }) {
    const data = QueryAllUserRedemptionRecordRequest.encode(request).finish();
    const promise = this.rpc.request("stride.records.Query", "UserRedemptionRecordAll", data);
    return promise.then((data2) => QueryAllUserRedemptionRecordResponse.decode(new BinaryReader(data2)));
  }
  userRedemptionRecordForUser(request) {
    const data = QueryAllUserRedemptionRecordForUserRequest.encode(request).finish();
    const promise = this.rpc.request("stride.records.Query", "UserRedemptionRecordForUser", data);
    return promise.then((data2) => QueryAllUserRedemptionRecordForUserResponse.decode(new BinaryReader(data2)));
  }
  epochUnbondingRecord(request) {
    const data = QueryGetEpochUnbondingRecordRequest.encode(request).finish();
    const promise = this.rpc.request("stride.records.Query", "EpochUnbondingRecord", data);
    return promise.then((data2) => QueryGetEpochUnbondingRecordResponse.decode(new BinaryReader(data2)));
  }
  epochUnbondingRecordAll(request = {
    pagination: void 0
  }) {
    const data = QueryAllEpochUnbondingRecordRequest.encode(request).finish();
    const promise = this.rpc.request("stride.records.Query", "EpochUnbondingRecordAll", data);
    return promise.then((data2) => QueryAllEpochUnbondingRecordResponse.decode(new BinaryReader(data2)));
  }
  depositRecord(request) {
    const data = QueryGetDepositRecordRequest.encode(request).finish();
    const promise = this.rpc.request("stride.records.Query", "DepositRecord", data);
    return promise.then((data2) => QueryGetDepositRecordResponse.decode(new BinaryReader(data2)));
  }
  depositRecordAll(request = {
    pagination: void 0
  }) {
    const data = QueryAllDepositRecordRequest.encode(request).finish();
    const promise = this.rpc.request("stride.records.Query", "DepositRecordAll", data);
    return promise.then((data2) => QueryAllDepositRecordResponse.decode(new BinaryReader(data2)));
  }
  depositRecordByHost(request) {
    const data = QueryDepositRecordByHostRequest.encode(request).finish();
    const promise = this.rpc.request("stride.records.Query", "DepositRecordByHost", data);
    return promise.then((data2) => QueryDepositRecordByHostResponse.decode(new BinaryReader(data2)));
  }
  lSMDeposit(request) {
    const data = QueryLSMDepositRequest.encode(request).finish();
    const promise = this.rpc.request("stride.records.Query", "LSMDeposit", data);
    return promise.then((data2) => QueryLSMDepositResponse.decode(new BinaryReader(data2)));
  }
  lSMDeposits(request) {
    const data = QueryLSMDepositsRequest.encode(request).finish();
    const promise = this.rpc.request("stride.records.Query", "LSMDeposits", data);
    return promise.then((data2) => QueryLSMDepositsResponse.decode(new BinaryReader(data2)));
  }
}
const createRpcQueryExtension = (base) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request) {
      return queryService.params(request);
    },
    userRedemptionRecord(request) {
      return queryService.userRedemptionRecord(request);
    },
    userRedemptionRecordAll(request) {
      return queryService.userRedemptionRecordAll(request);
    },
    userRedemptionRecordForUser(request) {
      return queryService.userRedemptionRecordForUser(request);
    },
    epochUnbondingRecord(request) {
      return queryService.epochUnbondingRecord(request);
    },
    epochUnbondingRecordAll(request) {
      return queryService.epochUnbondingRecordAll(request);
    },
    depositRecord(request) {
      return queryService.depositRecord(request);
    },
    depositRecordAll(request) {
      return queryService.depositRecordAll(request);
    },
    depositRecordByHost(request) {
      return queryService.depositRecordByHost(request);
    },
    lSMDeposit(request) {
      return queryService.lSMDeposit(request);
    },
    lSMDeposits(request) {
      return queryService.lSMDeposits(request);
    }
  };
};
export {
  QueryClientImpl,
  createRpcQueryExtension
};
