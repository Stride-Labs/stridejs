import { Params, ParamsSDKType, Airdrop, AirdropSDKType, UserAllocation, UserAllocationSDKType } from "./airdrop";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** GenesisState defines the airdrop module's genesis state. */
export interface GenesisState {
    /** Module parameters */
    params: Params;
    /** All airdrop config records */
    airdrops: Airdrop[];
    /** All allocation records across all airdrops */
    userAllocations: UserAllocation[];
}
/** GenesisState defines the airdrop module's genesis state. */
export interface GenesisStateSDKType {
    /** Module parameters */
    params: ParamsSDKType;
    /** All airdrop config records */
    airdrops: AirdropSDKType[];
    /** All allocation records across all airdrops */
    user_allocations: UserAllocationSDKType[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
