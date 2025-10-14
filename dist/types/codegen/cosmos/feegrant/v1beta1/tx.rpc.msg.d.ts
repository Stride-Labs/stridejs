import { TxRpc } from "../../../types";
import { MsgGrantAllowance, MsgGrantAllowanceResponse, MsgRevokeAllowance, MsgRevokeAllowanceResponse, MsgPruneAllowances, MsgPruneAllowancesResponse } from "./tx";
/** Msg defines the feegrant msg service. */
export interface Msg {
    /**
     * GrantAllowance grants fee allowance to the grantee on the granter's
     * account with the provided expiration time.
     */
    grantAllowance(request: MsgGrantAllowance): Promise<MsgGrantAllowanceResponse>;
    /**
     * RevokeAllowance revokes any fee allowance of granter's account that
     * has been granted to the grantee.
     */
    revokeAllowance(request: MsgRevokeAllowance): Promise<MsgRevokeAllowanceResponse>;
    /**
     * PruneAllowances prunes expired fee allowances, currently up to 75 at a time.
     *
     * Since cosmos-sdk 0.50
     */
    pruneAllowances(request: MsgPruneAllowances): Promise<MsgPruneAllowancesResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: TxRpc);
    grantAllowance(request: MsgGrantAllowance): Promise<MsgGrantAllowanceResponse>;
    revokeAllowance(request: MsgRevokeAllowance): Promise<MsgRevokeAllowanceResponse>;
    pruneAllowances(request: MsgPruneAllowances): Promise<MsgPruneAllowancesResponse>;
}
