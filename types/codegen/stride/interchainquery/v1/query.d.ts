import { Query, QuerySDKType } from "./genesis";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface QueryPendingQueriesRequest {
}
export interface QueryPendingQueriesRequestSDKType {
}
export interface QueryPendingQueriesResponse {
    pendingQueries: Query[];
}
export interface QueryPendingQueriesResponseSDKType {
    pending_queries: QuerySDKType[];
}
export declare const QueryPendingQueriesRequest: {
    encode(_: QueryPendingQueriesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPendingQueriesRequest;
    fromPartial(_: DeepPartial<QueryPendingQueriesRequest>): QueryPendingQueriesRequest;
};
export declare const QueryPendingQueriesResponse: {
    encode(message: QueryPendingQueriesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPendingQueriesResponse;
    fromPartial(object: DeepPartial<QueryPendingQueriesResponse>): QueryPendingQueriesResponse;
};
