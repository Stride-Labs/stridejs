import { Rpc } from "../../../helpers";
import { QueryClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { QueryParamsRequest, QueryParamsResponse, QueryEpochProvisionsRequest, QueryEpochProvisionsResponse } from "./query";
/** Query provides defines the gRPC querier service. */
export interface Query {
    /** Params returns the total set of minting parameters. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** EpochProvisions current minting epoch provisions value. */
    epochProvisions(request?: QueryEpochProvisionsRequest): Promise<QueryEpochProvisionsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    epochProvisions(request?: QueryEpochProvisionsRequest): Promise<QueryEpochProvisionsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    epochProvisions(request?: QueryEpochProvisionsRequest): Promise<QueryEpochProvisionsResponse>;
};
export interface UseParamsQuery<TData> extends ReactQueryParams<QueryParamsResponse, TData> {
    request?: QueryParamsRequest;
}
export interface UseEpochProvisionsQuery<TData> extends ReactQueryParams<QueryEpochProvisionsResponse, TData> {
    request?: QueryEpochProvisionsRequest;
}
export declare const createRpcQueryHooks: (rpc: ProtobufRpcClient | undefined) => {
    /** Params returns the total set of minting parameters. */
    useParams: <TData = QueryParamsResponse>({ request, options }: UseParamsQuery<TData>) => any;
    /** EpochProvisions current minting epoch provisions value. */
    useEpochProvisions: <TData_1 = QueryEpochProvisionsResponse>({ request, options }: UseEpochProvisionsQuery<TData_1>) => any;
};
