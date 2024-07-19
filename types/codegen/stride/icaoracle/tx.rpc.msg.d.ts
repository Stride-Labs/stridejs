import { Rpc } from "../../helpers";
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
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    addOracle(request: MsgAddOracle): Promise<MsgAddOracleResponse>;
    instantiateOracle(request: MsgInstantiateOracle): Promise<MsgInstantiateOracleResponse>;
    restoreOracleICA(request: MsgRestoreOracleICA): Promise<MsgRestoreOracleICAResponse>;
    toggleOracle(request: MsgToggleOracle): Promise<MsgToggleOracleResponse>;
    removeOracle(request: MsgRemoveOracle): Promise<MsgRemoveOracleResponse>;
}
