import { BinaryReader } from "../../../../binary";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryChecksumsRequest, QueryChecksumsResponse, QueryCodeRequest, QueryCodeResponse } from "./query";
class QueryClientImpl {
  rpc;
  constructor(rpc) {
    this.rpc = rpc;
    this.checksums = this.checksums.bind(this);
    this.code = this.code.bind(this);
  }
  checksums(request = {
    pagination: void 0
  }) {
    const data = QueryChecksumsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.lightclients.wasm.v1.Query", "Checksums", data);
    return promise.then((data2) => QueryChecksumsResponse.decode(new BinaryReader(data2)));
  }
  code(request) {
    const data = QueryCodeRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.lightclients.wasm.v1.Query", "Code", data);
    return promise.then((data2) => QueryCodeResponse.decode(new BinaryReader(data2)));
  }
}
const createRpcQueryExtension = (base) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    checksums(request) {
      return queryService.checksums(request);
    },
    code(request) {
      return queryService.code(request);
    }
  };
};
export {
  QueryClientImpl,
  createRpcQueryExtension
};
