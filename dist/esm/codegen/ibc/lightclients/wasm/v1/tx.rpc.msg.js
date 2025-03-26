import { BinaryReader } from "../../../../binary";
import { MsgStoreCode, MsgStoreCodeResponse, MsgRemoveChecksum, MsgRemoveChecksumResponse, MsgMigrateContract, MsgMigrateContractResponse } from "./tx";
class MsgClientImpl {
  rpc;
  constructor(rpc) {
    this.rpc = rpc;
    this.storeCode = this.storeCode.bind(this);
    this.removeChecksum = this.removeChecksum.bind(this);
    this.migrateContract = this.migrateContract.bind(this);
  }
  storeCode(request) {
    const data = MsgStoreCode.encode(request).finish();
    const promise = this.rpc.request("ibc.lightclients.wasm.v1.Msg", "StoreCode", data);
    return promise.then((data2) => MsgStoreCodeResponse.decode(new BinaryReader(data2)));
  }
  removeChecksum(request) {
    const data = MsgRemoveChecksum.encode(request).finish();
    const promise = this.rpc.request("ibc.lightclients.wasm.v1.Msg", "RemoveChecksum", data);
    return promise.then((data2) => MsgRemoveChecksumResponse.decode(new BinaryReader(data2)));
  }
  migrateContract(request) {
    const data = MsgMigrateContract.encode(request).finish();
    const promise = this.rpc.request("ibc.lightclients.wasm.v1.Msg", "MigrateContract", data);
    return promise.then((data2) => MsgMigrateContractResponse.decode(new BinaryReader(data2)));
  }
}
export {
  MsgClientImpl
};
