import { LCDClient } from "@osmonauts/lcd";
import { QueryDistributorAccountBalanceRequest, QueryDistributorAccountBalanceResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType, QueryClaimRecordRequest, QueryClaimRecordResponseSDKType, QueryClaimableForActionRequest, QueryClaimableForActionResponseSDKType, QueryTotalClaimableRequest, QueryTotalClaimableResponseSDKType, QueryUserVestingsRequest, QueryUserVestingsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.distributorAccountBalance = this.distributorAccountBalance.bind(this);
    this.params = this.params.bind(this);
    this.claimRecord = this.claimRecord.bind(this);
    this.claimableForAction = this.claimableForAction.bind(this);
    this.totalClaimable = this.totalClaimable.bind(this);
    this.userVestings = this.userVestings.bind(this);
  }
  /* DistributorAccountBalance */


  async distributorAccountBalance(params: QueryDistributorAccountBalanceRequest): Promise<QueryDistributorAccountBalanceResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.airdropIdentifier !== "undefined") {
      options.params.airdrop_identifier = params.airdropIdentifier;
    }

    const endpoint = `claim/module_account_balance`;
    return await this.req.get<QueryDistributorAccountBalanceResponseSDKType>(endpoint, options);
  }
  /* Params */


  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `claim/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* ClaimRecord */


  async claimRecord(params: QueryClaimRecordRequest): Promise<QueryClaimRecordResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.airdropIdentifier !== "undefined") {
      options.params.airdrop_identifier = params.airdropIdentifier;
    }

    const endpoint = `claim/claim_record/${params.address}`;
    return await this.req.get<QueryClaimRecordResponseSDKType>(endpoint, options);
  }
  /* ClaimableForAction */


  async claimableForAction(params: QueryClaimableForActionRequest): Promise<QueryClaimableForActionResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.airdropIdentifier !== "undefined") {
      options.params.airdrop_identifier = params.airdropIdentifier;
    }

    const endpoint = `claim/claimable_for_action/${params.address}/${params.action}`;
    return await this.req.get<QueryClaimableForActionResponseSDKType>(endpoint, options);
  }
  /* TotalClaimable */


  async totalClaimable(params: QueryTotalClaimableRequest): Promise<QueryTotalClaimableResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.airdropIdentifier !== "undefined") {
      options.params.airdrop_identifier = params.airdropIdentifier;
    }

    if (typeof params?.includeClaimed !== "undefined") {
      options.params.include_claimed = params.includeClaimed;
    }

    const endpoint = `claim/total_claimable/${params.address}`;
    return await this.req.get<QueryTotalClaimableResponseSDKType>(endpoint, options);
  }
  /* UserVestings */


  async userVestings(params: QueryUserVestingsRequest): Promise<QueryUserVestingsResponseSDKType> {
    const endpoint = `claim/user_vestings/${params.address}`;
    return await this.req.get<QueryUserVestingsResponseSDKType>(endpoint);
  }

}