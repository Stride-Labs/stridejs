import { Tendermint34Client } from "@cosmjs/tendermint-rpc";
import { QueryClient } from "@cosmjs/stargate";
export const createRPCQueryClient = async ({
  rpcEndpoint
}: {
  rpcEndpoint: string;
}) => {
  const tmClient = await Tendermint34Client.connect(rpcEndpoint);
  const client = new QueryClient(tmClient);
  return {
    stride: {
      autopilot: (await import("./autopilot/query.rpc.query")).createRpcQueryExtension(client),
      claim: (await import("./claim/query.rpc.query")).createRpcQueryExtension(client),
      epochs: (await import("./epochs/query.rpc.query")).createRpcQueryExtension(client),
      icacallbacks: (await import("./icacallbacks/query.rpc.query")).createRpcQueryExtension(client),
      mint: {
        v1beta1: (await import("./mint/v1beta1/query.rpc.query")).createRpcQueryExtension(client)
      },
      ratelimit: (await import("./ratelimit/query.rpc.query")).createRpcQueryExtension(client),
      records: (await import("./records/query.rpc.query")).createRpcQueryExtension(client),
      stakeibc: (await import("./stakeibc/query.rpc.query")).createRpcQueryExtension(client)
    }
  };
};