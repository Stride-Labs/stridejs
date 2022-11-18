import { LCDClient } from "@osmonauts/lcd";
import { QueryEpochsInfoRequest, QueryEpochsInfoResponseSDKType, QueryCurrentEpochRequest, QueryCurrentEpochResponseSDKType, QueryEpochInfoRequest, QueryEpochInfoResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    epochInfos(params?: QueryEpochsInfoRequest): Promise<QueryEpochsInfoResponseSDKType>;
    currentEpoch(params: QueryCurrentEpochRequest): Promise<QueryCurrentEpochResponseSDKType>;
    epochInfo(params: QueryEpochInfoRequest): Promise<QueryEpochInfoResponseSDKType>;
}
