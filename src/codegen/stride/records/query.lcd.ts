import { setPaginationParams } from "../../helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryGetUserRedemptionRecordRequest, QueryGetUserRedemptionRecordResponseSDKType, QueryAllUserRedemptionRecordRequest, QueryAllUserRedemptionRecordResponseSDKType, QueryAllUserRedemptionRecordForUserRequest, QueryAllUserRedemptionRecordForUserResponseSDKType, QueryGetEpochUnbondingRecordRequest, QueryGetEpochUnbondingRecordResponseSDKType, QueryAllEpochUnbondingRecordRequest, QueryAllEpochUnbondingRecordResponseSDKType, QueryGetDepositRecordRequest, QueryGetDepositRecordResponseSDKType, QueryAllDepositRecordRequest, QueryAllDepositRecordResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.userRedemptionRecord = this.userRedemptionRecord.bind(this);
    this.userRedemptionRecordAll = this.userRedemptionRecordAll.bind(this);
    this.userRedemptionRecordForUser = this.userRedemptionRecordForUser.bind(this);
    this.epochUnbondingRecord = this.epochUnbondingRecord.bind(this);
    this.epochUnbondingRecordAll = this.epochUnbondingRecordAll.bind(this);
    this.depositRecord = this.depositRecord.bind(this);
    this.depositRecordAll = this.depositRecordAll.bind(this);
  }
  /* Parameters queries the parameters of the module. */


  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `StrideLabs/stride/records/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Queries a UserRedemptionRecord by id. */


  async userRedemptionRecord(params: QueryGetUserRedemptionRecordRequest): Promise<QueryGetUserRedemptionRecordResponseSDKType> {
    const endpoint = `Stride-Labs/stride/records/user_redemption_record/${params.id}`;
    return await this.req.get<QueryGetUserRedemptionRecordResponseSDKType>(endpoint);
  }
  /* Queries a list of UserRedemptionRecord items. */


  async userRedemptionRecordAll(params: QueryAllUserRedemptionRecordRequest = {
    pagination: undefined
  }): Promise<QueryAllUserRedemptionRecordResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `Stride-Labs/stride/records/user_redemption_record`;
    return await this.req.get<QueryAllUserRedemptionRecordResponseSDKType>(endpoint, options);
  }
  /* Queries a list of UserRedemptionRecord items by chainId / userId pair. */


  async userRedemptionRecordForUser(params: QueryAllUserRedemptionRecordForUserRequest): Promise<QueryAllUserRedemptionRecordForUserResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `Stride-Labs/stride/records/user_redemption_record_for_user/${params.chainId}/${params.day}/${params.address}/${params.limit}`;
    return await this.req.get<QueryAllUserRedemptionRecordForUserResponseSDKType>(endpoint, options);
  }
  /* Queries a EpochUnbondingRecord by id. */


  async epochUnbondingRecord(params: QueryGetEpochUnbondingRecordRequest): Promise<QueryGetEpochUnbondingRecordResponseSDKType> {
    const endpoint = `Stride-Labs/stride/records/epoch_unbonding_record/${params.epochNumber}`;
    return await this.req.get<QueryGetEpochUnbondingRecordResponseSDKType>(endpoint);
  }
  /* Queries a list of EpochUnbondingRecord items. */


  async epochUnbondingRecordAll(params: QueryAllEpochUnbondingRecordRequest = {
    pagination: undefined
  }): Promise<QueryAllEpochUnbondingRecordResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `Stride-Labs/stride/records/epoch_unbonding_record`;
    return await this.req.get<QueryAllEpochUnbondingRecordResponseSDKType>(endpoint, options);
  }
  /* Queries a DepositRecord by id. */


  async depositRecord(params: QueryGetDepositRecordRequest): Promise<QueryGetDepositRecordResponseSDKType> {
    const endpoint = `Stride-Labs/stride/records/deposit_record/${params.id}`;
    return await this.req.get<QueryGetDepositRecordResponseSDKType>(endpoint);
  }
  /* Queries a list of DepositRecord items. */


  async depositRecordAll(params: QueryAllDepositRecordRequest = {
    pagination: undefined
  }): Promise<QueryAllDepositRecordResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `Stride-Labs/stride/records/deposit_record`;
    return await this.req.get<QueryAllDepositRecordResponseSDKType>(endpoint, options);
  }

}