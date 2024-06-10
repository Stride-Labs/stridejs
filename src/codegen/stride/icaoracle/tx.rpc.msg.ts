import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgAddOracle, MsgAddOracleResponse, MsgInstantiateOracle, MsgInstantiateOracleResponse, MsgRestoreOracleICA, MsgRestoreOracleICAResponse, MsgToggleOracle, MsgToggleOracleResponse, MsgRemoveOracle, MsgRemoveOracleResponse } from "./tx";
/** Msg defines the RPC service */

export interface Msg {
  addOracle(request: MsgAddOracle): Promise<MsgAddOracleResponse>;
  /*Adds a new oracle given a provided connection*/

  instantiateOracle(request: MsgInstantiateOracle): Promise<MsgInstantiateOracleResponse>;
  /*Instantiates an Oracle CW contract*/

  restoreOracleICA(request: MsgRestoreOracleICA): Promise<MsgRestoreOracleICAResponse>;
  /*Restores the oracle ICA channel after a closure*/

  toggleOracle(request: MsgToggleOracle): Promise<MsgToggleOracleResponse>;
  /*Toggle's whether an oracle is active and should receive metric updates*/

  removeOracle(request: MsgRemoveOracle): Promise<MsgRemoveOracleResponse>;
  /*Removes an oracle completely*/

}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.addOracle = this.addOracle.bind(this);
    this.instantiateOracle = this.instantiateOracle.bind(this);
    this.restoreOracleICA = this.restoreOracleICA.bind(this);
    this.toggleOracle = this.toggleOracle.bind(this);
    this.removeOracle = this.removeOracle.bind(this);
  }

  addOracle(request: MsgAddOracle): Promise<MsgAddOracleResponse> {
    const data = MsgAddOracle.encode(request).finish();
    const promise = this.rpc.request("stride.icaoracle.Msg", "AddOracle", data);
    return promise.then(data => MsgAddOracleResponse.decode(new _m0.Reader(data)));
  }

  instantiateOracle(request: MsgInstantiateOracle): Promise<MsgInstantiateOracleResponse> {
    const data = MsgInstantiateOracle.encode(request).finish();
    const promise = this.rpc.request("stride.icaoracle.Msg", "InstantiateOracle", data);
    return promise.then(data => MsgInstantiateOracleResponse.decode(new _m0.Reader(data)));
  }

  restoreOracleICA(request: MsgRestoreOracleICA): Promise<MsgRestoreOracleICAResponse> {
    const data = MsgRestoreOracleICA.encode(request).finish();
    const promise = this.rpc.request("stride.icaoracle.Msg", "RestoreOracleICA", data);
    return promise.then(data => MsgRestoreOracleICAResponse.decode(new _m0.Reader(data)));
  }

  toggleOracle(request: MsgToggleOracle): Promise<MsgToggleOracleResponse> {
    const data = MsgToggleOracle.encode(request).finish();
    const promise = this.rpc.request("stride.icaoracle.Msg", "ToggleOracle", data);
    return promise.then(data => MsgToggleOracleResponse.decode(new _m0.Reader(data)));
  }

  removeOracle(request: MsgRemoveOracle): Promise<MsgRemoveOracleResponse> {
    const data = MsgRemoveOracle.encode(request).finish();
    const promise = this.rpc.request("stride.icaoracle.Msg", "RemoveOracle", data);
    return promise.then(data => MsgRemoveOracleResponse.decode(new _m0.Reader(data)));
  }

}