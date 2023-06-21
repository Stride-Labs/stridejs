import { Rpc } from "@osmonauts/helpers";
export declare const createRPCMsgClient: ({ rpc }: {
    rpc: Rpc;
}) => Promise<{
    stride: {
        claim: import("./claim/tx.rpc.msg").MsgClientImpl;
        interchainquery: {
            v1: import("./interchainquery/v1/messages.rpc.msg").MsgClientImpl;
        };
        stakeibc: import("./stakeibc/tx.rpc.msg").MsgClientImpl;
    };
}>;
