import { Rpc } from "@osmonauts/helpers";
import { MsgAddOracle, MsgAddOracleResponse, MsgInstantiateOracle, MsgInstantiateOracleResponse, MsgRestoreOracleICA, MsgRestoreOracleICAResponse, MsgToggleOracle, MsgToggleOracleResponse, MsgRemoveOracle, MsgRemoveOracleResponse } from "./tx";
/** Msg defines the RPC service */
export interface Msg {
    addOracle(request: MsgAddOracle): Promise<MsgAddOracleResponse>;
    instantiateOracle(request: MsgInstantiateOracle): Promise<MsgInstantiateOracleResponse>;
    restoreOracleICA(request: MsgRestoreOracleICA): Promise<MsgRestoreOracleICAResponse>;
    toggleOracle(request: MsgToggleOracle): Promise<MsgToggleOracleResponse>;
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
