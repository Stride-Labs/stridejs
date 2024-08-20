import { LCDClient } from "@cosmology/lcd";
import { QueryDenomTracesRequest, QueryDenomTracesResponseSDKType, QueryDenomTraceRequest, QueryDenomTraceResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType, QueryDenomHashRequest, QueryDenomHashResponseSDKType, QueryEscrowAddressRequest, QueryEscrowAddressResponseSDKType, QueryTotalEscrowForDenomRequest, QueryTotalEscrowForDenomResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    denomTraces(params?: QueryDenomTracesRequest): Promise<QueryDenomTracesResponseSDKType>;
    denomTrace(params: QueryDenomTraceRequest): Promise<QueryDenomTraceResponseSDKType>;
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    denomHash(params: QueryDenomHashRequest): Promise<QueryDenomHashResponseSDKType>;
    escrowAddress(params: QueryEscrowAddressRequest): Promise<QueryEscrowAddressResponseSDKType>;
    totalEscrowForDenom(params: QueryTotalEscrowForDenomRequest): Promise<QueryTotalEscrowForDenomResponseSDKType>;
}
