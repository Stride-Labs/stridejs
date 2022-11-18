import { LCDClient } from "@osmonauts/lcd";
import { QueryDistributorAccountBalanceRequest, QueryDistributorAccountBalanceResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType, QueryClaimRecordRequest, QueryClaimRecordResponseSDKType, QueryClaimableForActionRequest, QueryClaimableForActionResponseSDKType, QueryTotalClaimableRequest, QueryTotalClaimableResponseSDKType } from "./query";
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
  }
  /* DistributorAccountBalance */


  async distributorAccountBalance(params: QueryDistributorAccountBalanceRequest): Promise<QueryDistributorAccountBalanceResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.airdropIdentifier !== "undefined") {
      options.params.airdrop_identifier = params.airdropIdentifier;
    }

    const endpoint = `claim/v1beta1/module_account_balance`;
    return await this.req.get<QueryDistributorAccountBalanceResponseSDKType>(endpoint, options);
  }
  /* Params */


  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `claim/v1beta1/params`;
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

    const endpoint = `claim/v1beta1/claim_record/${params.address}`;
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

    const endpoint = `claim/v1beta1/claimable_for_action/${params.address}/${params.action}`;
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

    const endpoint = `claim/v1beta1/total_claimable/${params.address}`;
    return await this.req.get<QueryTotalClaimableResponseSDKType>(endpoint, options);
  }

}