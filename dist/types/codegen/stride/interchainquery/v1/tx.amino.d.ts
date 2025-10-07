import { MsgSubmitQueryResponse } from "./tx";
export declare const AminoConverter: {
    "/stride.interchainquery.v1.MsgSubmitQueryResponse": {
        aminoType: string;
        toAmino: (message: MsgSubmitQueryResponse) => import("./tx").MsgSubmitQueryResponseAmino;
        fromAmino: (object: import("./tx").MsgSubmitQueryResponseAmino) => MsgSubmitQueryResponse;
    };
};
