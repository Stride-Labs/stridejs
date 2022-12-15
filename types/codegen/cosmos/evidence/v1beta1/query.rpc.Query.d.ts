import { Rpc } from "../../../helpers";
import { QueryClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { QueryEvidenceRequest, QueryEvidenceResponse, QueryAllEvidenceRequest, QueryAllEvidenceResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** Evidence queries evidence based on evidence hash. */
    evidence(request: QueryEvidenceRequest): Promise<QueryEvidenceResponse>;
    /** AllEvidence queries all evidence. */
    allEvidence(request?: QueryAllEvidenceRequest): Promise<QueryAllEvidenceResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    evidence(request: QueryEvidenceRequest): Promise<QueryEvidenceResponse>;
    allEvidence(request?: QueryAllEvidenceRequest): Promise<QueryAllEvidenceResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    evidence(request: QueryEvidenceRequest): Promise<QueryEvidenceResponse>;
    allEvidence(request?: QueryAllEvidenceRequest): Promise<QueryAllEvidenceResponse>;
};
export interface UseEvidenceQuery<TData> extends ReactQueryParams<QueryEvidenceResponse, TData> {
    request: QueryEvidenceRequest;
}
export interface UseAllEvidenceQuery<TData> extends ReactQueryParams<QueryAllEvidenceResponse, TData> {
    request?: QueryAllEvidenceRequest;
}
export declare const createRpcQueryHooks: (rpc: ProtobufRpcClient | undefined) => {
    /** Evidence queries evidence based on evidence hash. */
    useEvidence: <TData = QueryEvidenceResponse>({ request, options }: UseEvidenceQuery<TData>) => any;
    /** AllEvidence queries all evidence. */
    useAllEvidence: <TData_1 = QueryAllEvidenceResponse>({ request, options }: UseAllEvidenceQuery<TData_1>) => any;
};
