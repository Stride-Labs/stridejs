import { BinaryReader } from "../../binary";
import { MsgAddOracle, MsgAddOracleResponse, MsgInstantiateOracle, MsgInstantiateOracleResponse, MsgRestoreOracleICA, MsgRestoreOracleICAResponse, MsgToggleOracle, MsgToggleOracleResponse, MsgRemoveOracle, MsgRemoveOracleResponse } from "./tx";
class MsgClientImpl {
  rpc;
  constructor(rpc) {
    this.rpc = rpc;
    this.addOracle = this.addOracle.bind(this);
    this.instantiateOracle = this.instantiateOracle.bind(this);
    this.restoreOracleICA = this.restoreOracleICA.bind(this);
    this.toggleOracle = this.toggleOracle.bind(this);
    this.removeOracle = this.removeOracle.bind(this);
  }
  addOracle(request) {
    const data = MsgAddOracle.encode(request).finish();
    const promise = this.rpc.request("stride.icaoracle.Msg", "AddOracle", data);
    return promise.then((data2) => MsgAddOracleResponse.decode(new BinaryReader(data2)));
  }
  instantiateOracle(request) {
    const data = MsgInstantiateOracle.encode(request).finish();
    const promise = this.rpc.request("stride.icaoracle.Msg", "InstantiateOracle", data);
    return promise.then((data2) => MsgInstantiateOracleResponse.decode(new BinaryReader(data2)));
  }
  restoreOracleICA(request) {
    const data = MsgRestoreOracleICA.encode(request).finish();
    const promise = this.rpc.request("stride.icaoracle.Msg", "RestoreOracleICA", data);
    return promise.then((data2) => MsgRestoreOracleICAResponse.decode(new BinaryReader(data2)));
  }
  toggleOracle(request) {
    const data = MsgToggleOracle.encode(request).finish();
    const promise = this.rpc.request("stride.icaoracle.Msg", "ToggleOracle", data);
    return promise.then((data2) => MsgToggleOracleResponse.decode(new BinaryReader(data2)));
  }
  removeOracle(request) {
    const data = MsgRemoveOracle.encode(request).finish();
    const promise = this.rpc.request("stride.icaoracle.Msg", "RemoveOracle", data);
    return promise.then((data2) => MsgRemoveOracleResponse.decode(new BinaryReader(data2)));
  }
}
export {
  MsgClientImpl
};
