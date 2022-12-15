import { setPaginationParams } from "../../helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryGetCallbackDataRequest, QueryGetCallbackDataResponseSDKType, QueryAllCallbackDataRequest, QueryAllCallbackDataResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.callbackData = this.callbackData.bind(this);
    this.callbackDataAll = this.callbackDataAll.bind(this);
  }
  /* Parameters queries the parameters of the module. */


  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `Stride-Labs/stride/icacallbacks/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Queries a CallbackData by index. */


  async callbackData(params: QueryGetCallbackDataRequest): Promise<QueryGetCallbackDataResponseSDKType> {
    const endpoint = `Stride-Labs/stride/icacallbacks/callback_data/${params.callbackKey}`;
    return await this.req.get<QueryGetCallbackDataResponseSDKType>(endpoint);
  }
  /* Queries a list of CallbackData items. */


  async callbackDataAll(params: QueryAllCallbackDataRequest = {
    pagination: undefined
  }): Promise<QueryAllCallbackDataResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `Stride-Labs/stride/icacallbacks/callback_data`;
    return await this.req.get<QueryAllCallbackDataResponseSDKType>(endpoint, options);
  }

}