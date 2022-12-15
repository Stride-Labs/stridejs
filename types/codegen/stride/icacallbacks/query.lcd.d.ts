import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryGetCallbackDataRequest, QueryGetCallbackDataResponseSDKType, QueryAllCallbackDataRequest, QueryAllCallbackDataResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    callbackData(params: QueryGetCallbackDataRequest): Promise<QueryGetCallbackDataResponseSDKType>;
    callbackDataAll(params?: QueryAllCallbackDataRequest): Promise<QueryAllCallbackDataResponseSDKType>;
}
