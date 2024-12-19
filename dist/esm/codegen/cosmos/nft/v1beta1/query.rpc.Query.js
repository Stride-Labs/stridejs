import { BinaryReader } from "../../../binary";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryBalanceRequest, QueryBalanceResponse, QueryOwnerRequest, QueryOwnerResponse, QuerySupplyRequest, QuerySupplyResponse, QueryNFTsRequest, QueryNFTsResponse, QueryNFTRequest, QueryNFTResponse, QueryClassRequest, QueryClassResponse, QueryClassesRequest, QueryClassesResponse } from "./query";
class QueryClientImpl {
  rpc;
  constructor(rpc) {
    this.rpc = rpc;
    this.balance = this.balance.bind(this);
    this.owner = this.owner.bind(this);
    this.supply = this.supply.bind(this);
    this.nFTs = this.nFTs.bind(this);
    this.nFT = this.nFT.bind(this);
    this.class = this.class.bind(this);
    this.classes = this.classes.bind(this);
  }
  balance(request) {
    const data = QueryBalanceRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.nft.v1beta1.Query", "Balance", data);
    return promise.then((data2) => QueryBalanceResponse.decode(new BinaryReader(data2)));
  }
  owner(request) {
    const data = QueryOwnerRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.nft.v1beta1.Query", "Owner", data);
    return promise.then((data2) => QueryOwnerResponse.decode(new BinaryReader(data2)));
  }
  supply(request) {
    const data = QuerySupplyRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.nft.v1beta1.Query", "Supply", data);
    return promise.then((data2) => QuerySupplyResponse.decode(new BinaryReader(data2)));
  }
  nFTs(request) {
    const data = QueryNFTsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.nft.v1beta1.Query", "NFTs", data);
    return promise.then((data2) => QueryNFTsResponse.decode(new BinaryReader(data2)));
  }
  nFT(request) {
    const data = QueryNFTRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.nft.v1beta1.Query", "NFT", data);
    return promise.then((data2) => QueryNFTResponse.decode(new BinaryReader(data2)));
  }
  class(request) {
    const data = QueryClassRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.nft.v1beta1.Query", "Class", data);
    return promise.then((data2) => QueryClassResponse.decode(new BinaryReader(data2)));
  }
  classes(request = {
    pagination: void 0
  }) {
    const data = QueryClassesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.nft.v1beta1.Query", "Classes", data);
    return promise.then((data2) => QueryClassesResponse.decode(new BinaryReader(data2)));
  }
}
const createRpcQueryExtension = (base) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    balance(request) {
      return queryService.balance(request);
    },
    owner(request) {
      return queryService.owner(request);
    },
    supply(request) {
      return queryService.supply(request);
    },
    nFTs(request) {
      return queryService.nFTs(request);
    },
    nFT(request) {
      return queryService.nFT(request);
    },
    class(request) {
      return queryService.class(request);
    },
    classes(request) {
      return queryService.classes(request);
    }
  };
};
export {
  QueryClientImpl,
  createRpcQueryExtension
};
