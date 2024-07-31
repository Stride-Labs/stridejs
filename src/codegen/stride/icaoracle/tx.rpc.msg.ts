import { TxRpc } from "../../types";
import { BinaryReader } from "../../binary";
import { MsgAddOracle, MsgAddOracleResponse, MsgInstantiateOracle, MsgInstantiateOracleResponse, MsgRestoreOracleICA, MsgRestoreOracleICAResponse, MsgToggleOracle, MsgToggleOracleResponse, MsgRemoveOracle, MsgRemoveOracleResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  /** Adds a new oracle given a provided connection */
  addOracle(request: MsgAddOracle): Promise<MsgAddOracleResponse>;
  /** Instantiates an Oracle CW contract */
  instantiateOracle(request: MsgInstantiateOracle): Promise<MsgInstantiateOracleResponse>;
  /** Restores the oracle ICA channel after a closure */
  restoreOracleICA(request: MsgRestoreOracleICA): Promise<MsgRestoreOracleICAResponse>;
  /** Toggle's whether an oracle is active and should receive metric updates */
  toggleOracle(request: MsgToggleOracle): Promise<MsgToggleOracleResponse>;
  /** Removes an oracle completely */
  removeOracle(request: MsgRemoveOracle): Promise<MsgRemoveOracleResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
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
    return promise.then(data => MsgAddOracleResponse.decode(new BinaryReader(data)));
  }
  instantiateOracle(request: MsgInstantiateOracle): Promise<MsgInstantiateOracleResponse> {
    const data = MsgInstantiateOracle.encode(request).finish();
    const promise = this.rpc.request("stride.icaoracle.Msg", "InstantiateOracle", data);
    return promise.then(data => MsgInstantiateOracleResponse.decode(new BinaryReader(data)));
  }
  restoreOracleICA(request: MsgRestoreOracleICA): Promise<MsgRestoreOracleICAResponse> {
    const data = MsgRestoreOracleICA.encode(request).finish();
    const promise = this.rpc.request("stride.icaoracle.Msg", "RestoreOracleICA", data);
    return promise.then(data => MsgRestoreOracleICAResponse.decode(new BinaryReader(data)));
  }
  toggleOracle(request: MsgToggleOracle): Promise<MsgToggleOracleResponse> {
    const data = MsgToggleOracle.encode(request).finish();
    const promise = this.rpc.request("stride.icaoracle.Msg", "ToggleOracle", data);
    return promise.then(data => MsgToggleOracleResponse.decode(new BinaryReader(data)));
  }
  removeOracle(request: MsgRemoveOracle): Promise<MsgRemoveOracleResponse> {
    const data = MsgRemoveOracle.encode(request).finish();
    const promise = this.rpc.request("stride.icaoracle.Msg", "RemoveOracle", data);
    return promise.then(data => MsgRemoveOracleResponse.decode(new BinaryReader(data)));
  }
}