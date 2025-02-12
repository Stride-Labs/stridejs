import { TxRpc } from "../../types";
import { QueryClient } from "@cosmjs/stargate";
import { QueryStrdBurnerAddressRequest, QueryStrdBurnerAddressResponse, QueryTotalStrdBurnedRequest, QueryTotalStrdBurnedResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** StrdBurnerAddress queries the address of the strdburner module */
    strdBurnerAddress(request?: QueryStrdBurnerAddressRequest): Promise<QueryStrdBurnerAddressResponse>;
    /** StrdBurnerAddress queries the address of the strdburner module */
    totalStrdBurned(request?: QueryTotalStrdBurnedRequest): Promise<QueryTotalStrdBurnedResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: TxRpc);
    strdBurnerAddress(request?: QueryStrdBurnerAddressRequest): Promise<QueryStrdBurnerAddressResponse>;
    totalStrdBurned(request?: QueryTotalStrdBurnedRequest): Promise<QueryTotalStrdBurnedResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    strdBurnerAddress(request?: QueryStrdBurnerAddressRequest): Promise<QueryStrdBurnerAddressResponse>;
    totalStrdBurned(request?: QueryTotalStrdBurnedRequest): Promise<QueryTotalStrdBurnedResponse>;
};
