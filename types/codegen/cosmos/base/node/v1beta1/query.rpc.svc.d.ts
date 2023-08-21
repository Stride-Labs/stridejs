import { Rpc } from "@osmonauts/helpers";
import { QueryClient } from "@cosmjs/stargate";
import { ConfigRequest, ConfigResponse } from "./query";
/** Service defines the RPC service */
export interface Service {
    config(request?: ConfigRequest): Promise<ConfigResponse>;
}
export declare class QueryClientImpl implements Service {
    private readonly rpc;
    constructor(rpc: Rpc);
    config(request?: ConfigRequest): Promise<ConfigResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    config(request?: ConfigRequest): Promise<ConfigResponse>;
};
