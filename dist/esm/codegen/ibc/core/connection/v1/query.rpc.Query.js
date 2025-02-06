import { BinaryReader } from "../../../../binary";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryConnectionRequest, QueryConnectionResponse, QueryConnectionsRequest, QueryConnectionsResponse, QueryClientConnectionsRequest, QueryClientConnectionsResponse, QueryConnectionClientStateRequest, QueryConnectionClientStateResponse, QueryConnectionConsensusStateRequest, QueryConnectionConsensusStateResponse, QueryConnectionParamsRequest, QueryConnectionParamsResponse } from "./query";
class QueryClientImpl {
  rpc;
  constructor(rpc) {
    this.rpc = rpc;
    this.connection = this.connection.bind(this);
    this.connections = this.connections.bind(this);
    this.clientConnections = this.clientConnections.bind(this);
    this.connectionClientState = this.connectionClientState.bind(this);
    this.connectionConsensusState = this.connectionConsensusState.bind(this);
    this.connectionParams = this.connectionParams.bind(this);
  }
  connection(request) {
    const data = QueryConnectionRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.connection.v1.Query", "Connection", data);
    return promise.then((data2) => QueryConnectionResponse.decode(new BinaryReader(data2)));
  }
  connections(request = {
    pagination: void 0
  }) {
    const data = QueryConnectionsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.connection.v1.Query", "Connections", data);
    return promise.then((data2) => QueryConnectionsResponse.decode(new BinaryReader(data2)));
  }
  clientConnections(request) {
    const data = QueryClientConnectionsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.connection.v1.Query", "ClientConnections", data);
    return promise.then((data2) => QueryClientConnectionsResponse.decode(new BinaryReader(data2)));
  }
  connectionClientState(request) {
    const data = QueryConnectionClientStateRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.connection.v1.Query", "ConnectionClientState", data);
    return promise.then((data2) => QueryConnectionClientStateResponse.decode(new BinaryReader(data2)));
  }
  connectionConsensusState(request) {
    const data = QueryConnectionConsensusStateRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.connection.v1.Query", "ConnectionConsensusState", data);
    return promise.then((data2) => QueryConnectionConsensusStateResponse.decode(new BinaryReader(data2)));
  }
  connectionParams(request = {}) {
    const data = QueryConnectionParamsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.connection.v1.Query", "ConnectionParams", data);
    return promise.then((data2) => QueryConnectionParamsResponse.decode(new BinaryReader(data2)));
  }
}
const createRpcQueryExtension = (base) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    connection(request) {
      return queryService.connection(request);
    },
    connections(request) {
      return queryService.connections(request);
    },
    clientConnections(request) {
      return queryService.clientConnections(request);
    },
    connectionClientState(request) {
      return queryService.connectionClientState(request);
    },
    connectionConsensusState(request) {
      return queryService.connectionConsensusState(request);
    },
    connectionParams(request) {
      return queryService.connectionParams(request);
    }
  };
};
export {
  QueryClientImpl,
  createRpcQueryExtension
};
