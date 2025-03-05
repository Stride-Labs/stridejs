import { BinaryReader } from "../../binary";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryHostZoneRequest, QueryHostZoneResponse, QueryDelegationRecordsRequest, QueryDelegationRecordsResponse, QueryUnbondingRecordsRequest, QueryUnbondingRecordsResponse, QueryRedemptionRecordRequest, QueryRedemptionRecordResponse, QueryRedemptionRecordsRequest, QueryRedemptionRecordsResponse, QuerySlashRecordsRequest, QuerySlashRecordsResponse } from "./query";
class QueryClientImpl {
  rpc;
  constructor(rpc) {
    this.rpc = rpc;
    this.hostZone = this.hostZone.bind(this);
    this.delegationRecords = this.delegationRecords.bind(this);
    this.unbondingRecords = this.unbondingRecords.bind(this);
    this.redemptionRecord = this.redemptionRecord.bind(this);
    this.redemptionRecords = this.redemptionRecords.bind(this);
    this.slashRecords = this.slashRecords.bind(this);
  }
  hostZone(request = {}) {
    const data = QueryHostZoneRequest.encode(request).finish();
    const promise = this.rpc.request("stride.staketia.Query", "HostZone", data);
    return promise.then((data2) => QueryHostZoneResponse.decode(new BinaryReader(data2)));
  }
  delegationRecords(request) {
    const data = QueryDelegationRecordsRequest.encode(request).finish();
    const promise = this.rpc.request("stride.staketia.Query", "DelegationRecords", data);
    return promise.then((data2) => QueryDelegationRecordsResponse.decode(new BinaryReader(data2)));
  }
  unbondingRecords(request) {
    const data = QueryUnbondingRecordsRequest.encode(request).finish();
    const promise = this.rpc.request("stride.staketia.Query", "UnbondingRecords", data);
    return promise.then((data2) => QueryUnbondingRecordsResponse.decode(new BinaryReader(data2)));
  }
  redemptionRecord(request) {
    const data = QueryRedemptionRecordRequest.encode(request).finish();
    const promise = this.rpc.request("stride.staketia.Query", "RedemptionRecord", data);
    return promise.then((data2) => QueryRedemptionRecordResponse.decode(new BinaryReader(data2)));
  }
  redemptionRecords(request) {
    const data = QueryRedemptionRecordsRequest.encode(request).finish();
    const promise = this.rpc.request("stride.staketia.Query", "RedemptionRecords", data);
    return promise.then((data2) => QueryRedemptionRecordsResponse.decode(new BinaryReader(data2)));
  }
  slashRecords(request = {}) {
    const data = QuerySlashRecordsRequest.encode(request).finish();
    const promise = this.rpc.request("stride.staketia.Query", "SlashRecords", data);
    return promise.then((data2) => QuerySlashRecordsResponse.decode(new BinaryReader(data2)));
  }
}
const createRpcQueryExtension = (base) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    hostZone(request) {
      return queryService.hostZone(request);
    },
    delegationRecords(request) {
      return queryService.delegationRecords(request);
    },
    unbondingRecords(request) {
      return queryService.unbondingRecords(request);
    },
    redemptionRecord(request) {
      return queryService.redemptionRecord(request);
    },
    redemptionRecords(request) {
      return queryService.redemptionRecords(request);
    },
    slashRecords(request) {
      return queryService.slashRecords(request);
    }
  };
};
export {
  QueryClientImpl,
  createRpcQueryExtension
};
