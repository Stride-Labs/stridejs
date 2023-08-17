import { Rpc } from "@osmonauts/helpers";
export const createRPCMsgClient = async ({
  rpc
}: {
  rpc: Rpc;
}) => ({
  stride: {
    claim: new (await import("./claim/tx.rpc.msg")).MsgClientImpl(rpc),
    interchainquery: {
      v1: new (await import("./interchainquery/v1/messages.rpc.msg")).MsgClientImpl(rpc)
    },
    stakeibc: new (await import("./stakeibc/tx.rpc.msg")).MsgClientImpl(rpc)
  }
});