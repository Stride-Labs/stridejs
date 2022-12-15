import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryGrantsRequest, QueryGrantsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.grants = this.grants.bind(this);
  }
  /* Returns list of `Authorization`, granted to the grantee by the granter. */


  async grants(params: QueryGrantsRequest): Promise<QueryGrantsResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.granter !== "undefined") {
      options.params.granter = params.granter;
    }

    if (typeof params?.grantee !== "undefined") {
      options.params.grantee = params.grantee;
    }

    if (typeof params?.msgTypeUrl !== "undefined") {
      options.params.msg_type_url = params.msgTypeUrl;
    }

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/authz/v1beta1/grants`;
    return await this.req.get<QueryGrantsResponseSDKType>(endpoint, options);
  }

}