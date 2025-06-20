import { Deposit, DepositAmino, DepositSDKType, Vote, VoteAmino, VoteSDKType, Proposal, ProposalAmino, ProposalSDKType, DepositParams, DepositParamsAmino, DepositParamsSDKType, VotingParams, VotingParamsAmino, VotingParamsSDKType, TallyParams, TallyParamsAmino, TallyParamsSDKType } from "./gov";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** GenesisState defines the gov module's genesis state. */
export interface GenesisState {
    /** starting_proposal_id is the ID of the starting proposal. */
    startingProposalId: bigint;
    /** deposits defines all the deposits present at genesis. */
    deposits: Deposit[];
    /** votes defines all the votes present at genesis. */
    votes: Vote[];
    /** proposals defines all the proposals present at genesis. */
    proposals: Proposal[];
    /** params defines all the parameters of related to deposit. */
    depositParams: DepositParams;
    /** params defines all the parameters of related to voting. */
    votingParams: VotingParams;
    /** params defines all the parameters of related to tally. */
    tallyParams: TallyParams;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/cosmos.gov.v1beta1.GenesisState";
    value: Uint8Array;
}
/**
 * GenesisState defines the gov module's genesis state.
 * @name GenesisStateAmino
 * @package cosmos.gov.v1beta1
 * @see proto type: cosmos.gov.v1beta1.GenesisState
 */
export interface GenesisStateAmino {
    /**
     * starting_proposal_id is the ID of the starting proposal.
     */
    starting_proposal_id?: string;
    /**
     * deposits defines all the deposits present at genesis.
     */
    deposits: DepositAmino[];
    /**
     * votes defines all the votes present at genesis.
     */
    votes: VoteAmino[];
    /**
     * proposals defines all the proposals present at genesis.
     */
    proposals: ProposalAmino[];
    /**
     * params defines all the parameters of related to deposit.
     */
    deposit_params: DepositParamsAmino;
    /**
     * params defines all the parameters of related to voting.
     */
    voting_params: VotingParamsAmino;
    /**
     * params defines all the parameters of related to tally.
     */
    tally_params: TallyParamsAmino;
}
export interface GenesisStateAminoMsg {
    type: "cosmos-sdk/GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the gov module's genesis state. */
export interface GenesisStateSDKType {
    starting_proposal_id: bigint;
    deposits: DepositSDKType[];
    votes: VoteSDKType[];
    proposals: ProposalSDKType[];
    deposit_params: DepositParamsSDKType;
    voting_params: VotingParamsSDKType;
    tally_params: TallyParamsSDKType;
}
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    toAminoMsg(message: GenesisState): GenesisStateAminoMsg;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
