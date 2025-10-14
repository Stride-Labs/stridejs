import { TxRpc } from "../../types";
import { QueryClient } from "@cosmjs/stargate";
import { QueryStrdBurnerAddressRequest, QueryStrdBurnerAddressResponse, QueryTotalStrdBurnedRequest, QueryTotalStrdBurnedResponse, QueryStrdBurnedByAddressRequest, QueryStrdBurnedByAddressResponse, QueryLinkedAddressRequest, QueryLinkedAddressResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** StrdBurnerAddress queries the address of the strdburner module */
    strdBurnerAddress(request?: QueryStrdBurnerAddressRequest): Promise<QueryStrdBurnerAddressResponse>;
    /** StrdBurnerAddress queries the address of the strdburner module */
    totalStrdBurned(request?: QueryTotalStrdBurnedRequest): Promise<QueryTotalStrdBurnedResponse>;
    /** StrdBurnerAddress queries amount burned from a given address */
    strdBurnedByAddress(request: QueryStrdBurnedByAddressRequest): Promise<QueryStrdBurnedByAddressResponse>;
    /** LinkedAddress queries the linked address for a given stride address */
    linkedAddress(request: QueryLinkedAddressRequest): Promise<QueryLinkedAddressResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: TxRpc);
    strdBurnerAddress(request?: QueryStrdBurnerAddressRequest): Promise<QueryStrdBurnerAddressResponse>;
    totalStrdBurned(request?: QueryTotalStrdBurnedRequest): Promise<QueryTotalStrdBurnedResponse>;
    strdBurnedByAddress(request: QueryStrdBurnedByAddressRequest): Promise<QueryStrdBurnedByAddressResponse>;
    linkedAddress(request: QueryLinkedAddressRequest): Promise<QueryLinkedAddressResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    strdBurnerAddress(request?: QueryStrdBurnerAddressRequest): Promise<QueryStrdBurnerAddressResponse>;
    totalStrdBurned(request?: QueryTotalStrdBurnedRequest): Promise<QueryTotalStrdBurnedResponse>;
    strdBurnedByAddress(request: QueryStrdBurnedByAddressRequest): Promise<QueryStrdBurnedByAddressResponse>;
    linkedAddress(request: QueryLinkedAddressRequest): Promise<QueryLinkedAddressResponse>;
};
