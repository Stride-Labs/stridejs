import { BinaryReader } from "../../binary";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryAirdropRequest, QueryAirdropResponse, QueryAllAirdropsRequest, QueryAllAirdropsResponse, QueryUserAllocationRequest, QueryUserAllocationResponse, QueryUserAllocationsRequest, QueryUserAllocationsResponse, QueryAllAllocationsRequest, QueryAllAllocationsResponse, QueryUserSummaryRequest, QueryUserSummaryResponse } from "./query";
class QueryClientImpl {
  rpc;
  constructor(rpc) {
    this.rpc = rpc;
    this.airdrop = this.airdrop.bind(this);
    this.allAirdrops = this.allAirdrops.bind(this);
    this.userAllocation = this.userAllocation.bind(this);
    this.userAllocations = this.userAllocations.bind(this);
    this.allAllocations = this.allAllocations.bind(this);
    this.userSummary = this.userSummary.bind(this);
  }
  airdrop(request) {
    const data = QueryAirdropRequest.encode(request).finish();
    const promise = this.rpc.request("stride.airdrop.Query", "Airdrop", data);
    return promise.then((data2) => QueryAirdropResponse.decode(new BinaryReader(data2)));
  }
  allAirdrops(request = {}) {
    const data = QueryAllAirdropsRequest.encode(request).finish();
    const promise = this.rpc.request("stride.airdrop.Query", "AllAirdrops", data);
    return promise.then((data2) => QueryAllAirdropsResponse.decode(new BinaryReader(data2)));
  }
  userAllocation(request) {
    const data = QueryUserAllocationRequest.encode(request).finish();
    const promise = this.rpc.request("stride.airdrop.Query", "UserAllocation", data);
    return promise.then((data2) => QueryUserAllocationResponse.decode(new BinaryReader(data2)));
  }
  userAllocations(request) {
    const data = QueryUserAllocationsRequest.encode(request).finish();
    const promise = this.rpc.request("stride.airdrop.Query", "UserAllocations", data);
    return promise.then((data2) => QueryUserAllocationsResponse.decode(new BinaryReader(data2)));
  }
  allAllocations(request) {
    const data = QueryAllAllocationsRequest.encode(request).finish();
    const promise = this.rpc.request("stride.airdrop.Query", "AllAllocations", data);
    return promise.then((data2) => QueryAllAllocationsResponse.decode(new BinaryReader(data2)));
  }
  userSummary(request) {
    const data = QueryUserSummaryRequest.encode(request).finish();
    const promise = this.rpc.request("stride.airdrop.Query", "UserSummary", data);
    return promise.then((data2) => QueryUserSummaryResponse.decode(new BinaryReader(data2)));
  }
}
const createRpcQueryExtension = (base) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    airdrop(request) {
      return queryService.airdrop(request);
    },
    allAirdrops(request) {
      return queryService.allAirdrops(request);
    },
    userAllocation(request) {
      return queryService.userAllocation(request);
    },
    userAllocations(request) {
      return queryService.userAllocations(request);
    },
    allAllocations(request) {
      return queryService.allAllocations(request);
    },
    userSummary(request) {
      return queryService.userSummary(request);
    }
  };
};
export {
  QueryClientImpl,
  createRpcQueryExtension
};
