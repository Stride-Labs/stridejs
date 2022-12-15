import { Rpc } from "../../../helpers";
import { QueryClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { SimulateRequest, SimulateResponse, GetTxRequest, GetTxResponse, BroadcastTxRequest, BroadcastTxResponse, GetTxsEventRequest, GetTxsEventResponse } from "./service";
/** Service defines a gRPC service for interacting with transactions. */
export interface Service {
    /** Simulate simulates executing a transaction for estimating gas usage. */
    simulate(request: SimulateRequest): Promise<SimulateResponse>;
    /** GetTx fetches a tx by hash. */
    getTx(request: GetTxRequest): Promise<GetTxResponse>;
    /** BroadcastTx broadcast transaction. */
    broadcastTx(request: BroadcastTxRequest): Promise<BroadcastTxResponse>;
    /** GetTxsEvent fetches txs by event. */
    getTxsEvent(request: GetTxsEventRequest): Promise<GetTxsEventResponse>;
}
export declare class ServiceClientImpl implements Service {
    private readonly rpc;
    constructor(rpc: Rpc);
    simulate(request: SimulateRequest): Promise<SimulateResponse>;
    getTx(request: GetTxRequest): Promise<GetTxResponse>;
    broadcastTx(request: BroadcastTxRequest): Promise<BroadcastTxResponse>;
    getTxsEvent(request: GetTxsEventRequest): Promise<GetTxsEventResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    simulate(request: SimulateRequest): Promise<SimulateResponse>;
    getTx(request: GetTxRequest): Promise<GetTxResponse>;
    broadcastTx(request: BroadcastTxRequest): Promise<BroadcastTxResponse>;
    getTxsEvent(request: GetTxsEventRequest): Promise<GetTxsEventResponse>;
};
export interface UseSimulateQuery<TData> extends ReactQueryParams<SimulateResponse, TData> {
    request: SimulateRequest;
}
export interface UseGetTxQuery<TData> extends ReactQueryParams<GetTxResponse, TData> {
    request: GetTxRequest;
}
export interface UseBroadcastTxQuery<TData> extends ReactQueryParams<BroadcastTxResponse, TData> {
    request: BroadcastTxRequest;
}
export interface UseGetTxsEventQuery<TData> extends ReactQueryParams<GetTxsEventResponse, TData> {
    request: GetTxsEventRequest;
}
export declare const createRpcQueryHooks: (rpc: ProtobufRpcClient | undefined) => {
    /** Simulate simulates executing a transaction for estimating gas usage. */
    useSimulate: <TData = SimulateResponse>({ request, options }: UseSimulateQuery<TData>) => any;
    /** GetTx fetches a tx by hash. */
    useGetTx: <TData_1 = GetTxResponse>({ request, options }: UseGetTxQuery<TData_1>) => any;
    /** BroadcastTx broadcast transaction. */
    useBroadcastTx: <TData_2 = BroadcastTxResponse>({ request, options }: UseBroadcastTxQuery<TData_2>) => any;
    /** GetTxsEvent fetches txs by event. */
    useGetTxsEvent: <TData_3 = GetTxsEventResponse>({ request, options }: UseGetTxsEventQuery<TData_3>) => any;
};
