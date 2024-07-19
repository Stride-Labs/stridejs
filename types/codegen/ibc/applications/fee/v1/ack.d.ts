import { BinaryReader, BinaryWriter } from "../../../../binary";
/** IncentivizedAcknowledgement is the acknowledgement format to be used by applications wrapped in the fee middleware */
export interface IncentivizedAcknowledgement {
    /** the underlying app acknowledgement bytes */
    appAcknowledgement: Uint8Array;
    /** the relayer address which submits the recv packet message */
    forwardRelayerAddress: string;
    /** success flag of the base application callback */
    underlyingAppSuccess: boolean;
}
export interface IncentivizedAcknowledgementProtoMsg {
    typeUrl: "/ibc.applications.fee.v1.IncentivizedAcknowledgement";
    value: Uint8Array;
}
/** IncentivizedAcknowledgement is the acknowledgement format to be used by applications wrapped in the fee middleware */
export interface IncentivizedAcknowledgementAmino {
    /** the underlying app acknowledgement bytes */
    app_acknowledgement?: string;
    /** the relayer address which submits the recv packet message */
    forward_relayer_address?: string;
    /** success flag of the base application callback */
    underlying_app_success?: boolean;
}
export interface IncentivizedAcknowledgementAminoMsg {
    type: "cosmos-sdk/IncentivizedAcknowledgement";
    value: IncentivizedAcknowledgementAmino;
}
/** IncentivizedAcknowledgement is the acknowledgement format to be used by applications wrapped in the fee middleware */
export interface IncentivizedAcknowledgementSDKType {
    app_acknowledgement: Uint8Array;
    forward_relayer_address: string;
    underlying_app_success: boolean;
}
export declare const IncentivizedAcknowledgement: {
    typeUrl: string;
    encode(message: IncentivizedAcknowledgement, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): IncentivizedAcknowledgement;
    fromPartial(object: Partial<IncentivizedAcknowledgement>): IncentivizedAcknowledgement;
    fromAmino(object: IncentivizedAcknowledgementAmino): IncentivizedAcknowledgement;
    toAmino(message: IncentivizedAcknowledgement): IncentivizedAcknowledgementAmino;
    fromAminoMsg(object: IncentivizedAcknowledgementAminoMsg): IncentivizedAcknowledgement;
    toAminoMsg(message: IncentivizedAcknowledgement): IncentivizedAcknowledgementAminoMsg;
    fromProtoMsg(message: IncentivizedAcknowledgementProtoMsg): IncentivizedAcknowledgement;
    toProto(message: IncentivizedAcknowledgement): Uint8Array;
    toProtoMsg(message: IncentivizedAcknowledgement): IncentivizedAcknowledgementProtoMsg;
};
