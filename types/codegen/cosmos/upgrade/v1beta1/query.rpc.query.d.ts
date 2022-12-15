import { Rpc } from "../../../helpers";
import { QueryClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { QueryCurrentPlanRequest, QueryCurrentPlanResponse, QueryAppliedPlanRequest, QueryAppliedPlanResponse, QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse, QueryModuleVersionsRequest, QueryModuleVersionsResponse } from "./query";
/** Query defines the gRPC upgrade querier service. */
export interface Query {
    /** CurrentPlan queries the current upgrade plan. */
    currentPlan(request?: QueryCurrentPlanRequest): Promise<QueryCurrentPlanResponse>;
    /** AppliedPlan queries a previously applied upgrade plan by its name. */
    appliedPlan(request: QueryAppliedPlanRequest): Promise<QueryAppliedPlanResponse>;
    /**
     * UpgradedConsensusState queries the consensus state that will serve
     * as a trusted kernel for the next version of this chain. It will only be
     * stored at the last height of this chain.
     * UpgradedConsensusState RPC not supported with legacy querier
     */
    upgradedConsensusState(request: QueryUpgradedConsensusStateRequest): Promise<QueryUpgradedConsensusStateResponse>;
    /** ModuleVersions queries the list of module versions from state. */
    moduleVersions(request: QueryModuleVersionsRequest): Promise<QueryModuleVersionsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    currentPlan(request?: QueryCurrentPlanRequest): Promise<QueryCurrentPlanResponse>;
    appliedPlan(request: QueryAppliedPlanRequest): Promise<QueryAppliedPlanResponse>;
    upgradedConsensusState(request: QueryUpgradedConsensusStateRequest): Promise<QueryUpgradedConsensusStateResponse>;
    moduleVersions(request: QueryModuleVersionsRequest): Promise<QueryModuleVersionsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    currentPlan(request?: QueryCurrentPlanRequest): Promise<QueryCurrentPlanResponse>;
    appliedPlan(request: QueryAppliedPlanRequest): Promise<QueryAppliedPlanResponse>;
    upgradedConsensusState(request: QueryUpgradedConsensusStateRequest): Promise<QueryUpgradedConsensusStateResponse>;
    moduleVersions(request: QueryModuleVersionsRequest): Promise<QueryModuleVersionsResponse>;
};
export interface UseCurrentPlanQuery<TData> extends ReactQueryParams<QueryCurrentPlanResponse, TData> {
    request?: QueryCurrentPlanRequest;
}
export interface UseAppliedPlanQuery<TData> extends ReactQueryParams<QueryAppliedPlanResponse, TData> {
    request: QueryAppliedPlanRequest;
}
export interface UseUpgradedConsensusStateQuery<TData> extends ReactQueryParams<QueryUpgradedConsensusStateResponse, TData> {
    request: QueryUpgradedConsensusStateRequest;
}
export interface UseModuleVersionsQuery<TData> extends ReactQueryParams<QueryModuleVersionsResponse, TData> {
    request: QueryModuleVersionsRequest;
}
export declare const createRpcQueryHooks: (rpc: ProtobufRpcClient | undefined) => {
    /** CurrentPlan queries the current upgrade plan. */
    useCurrentPlan: <TData = QueryCurrentPlanResponse>({ request, options }: UseCurrentPlanQuery<TData>) => any;
    /** AppliedPlan queries a previously applied upgrade plan by its name. */
    useAppliedPlan: <TData_1 = QueryAppliedPlanResponse>({ request, options }: UseAppliedPlanQuery<TData_1>) => any;
    /**
     * UpgradedConsensusState queries the consensus state that will serve
     * as a trusted kernel for the next version of this chain. It will only be
     * stored at the last height of this chain.
     * UpgradedConsensusState RPC not supported with legacy querier
     */
    useUpgradedConsensusState: <TData_2 = QueryUpgradedConsensusStateResponse>({ request, options }: UseUpgradedConsensusStateQuery<TData_2>) => any;
    /** ModuleVersions queries the list of module versions from state. */
    useModuleVersions: <TData_3 = QueryModuleVersionsResponse>({ request, options }: UseModuleVersionsQuery<TData_3>) => any;
};
