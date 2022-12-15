import { Rpc } from "../../helpers";
import { MsgSetAirdropAllocations, MsgSetAirdropAllocationsResponse, MsgClaimFreeAmount, MsgClaimFreeAmountResponse, MsgCreateAirdrop, MsgCreateAirdropResponse, MsgDeleteAirdrop, MsgDeleteAirdropResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
    setAirdropAllocations(request: MsgSetAirdropAllocations): Promise<MsgSetAirdropAllocationsResponse>;
    claimFreeAmount(request: MsgClaimFreeAmount): Promise<MsgClaimFreeAmountResponse>;
    createAirdrop(request: MsgCreateAirdrop): Promise<MsgCreateAirdropResponse>;
    deleteAirdrop(request: MsgDeleteAirdrop): Promise<MsgDeleteAirdropResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    setAirdropAllocations(request: MsgSetAirdropAllocations): Promise<MsgSetAirdropAllocationsResponse>;
    claimFreeAmount(request: MsgClaimFreeAmount): Promise<MsgClaimFreeAmountResponse>;
    createAirdrop(request: MsgCreateAirdrop): Promise<MsgCreateAirdropResponse>;
    deleteAirdrop(request: MsgDeleteAirdrop): Promise<MsgDeleteAirdropResponse>;
}
