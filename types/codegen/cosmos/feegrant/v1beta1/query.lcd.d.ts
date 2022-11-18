import { LCDClient } from "@osmonauts/lcd";
import { QueryAllowanceRequest, QueryAllowanceResponseSDKType, QueryAllowancesRequest, QueryAllowancesResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    allowance(params: QueryAllowanceRequest): Promise<QueryAllowanceResponseSDKType>;
    allowances(params: QueryAllowancesRequest): Promise<QueryAllowancesResponseSDKType>;
}
