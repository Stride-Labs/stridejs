import { LCDClient } from "@osmonauts/lcd";
import { QueryGrantsRequest, QueryGrantsResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    grants(params: QueryGrantsRequest): Promise<QueryGrantsResponseSDKType>;
}
