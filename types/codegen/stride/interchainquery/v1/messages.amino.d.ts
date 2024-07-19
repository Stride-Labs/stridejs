import { MsgSubmitQueryResponse } from "./messages";
export declare const AminoConverter: {
    "/stride.interchainquery.v1.MsgSubmitQueryResponse": {
        aminoType: string;
        toAmino: (message: MsgSubmitQueryResponse) => import("./messages").MsgSubmitQueryResponseAmino;
        fromAmino: (object: import("./messages").MsgSubmitQueryResponseAmino) => MsgSubmitQueryResponse;
    };
};
