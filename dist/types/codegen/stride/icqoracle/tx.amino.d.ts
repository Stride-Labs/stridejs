import { MsgRegisterTokenPriceQuery, MsgRemoveTokenPriceQuery, MsgUpdateParams } from "./tx";
export declare const AminoConverter: {
    "/stride.icqoracle.MsgRegisterTokenPriceQuery": {
        aminoType: string;
        toAmino: (message: MsgRegisterTokenPriceQuery) => import("./tx").MsgRegisterTokenPriceQueryAmino;
        fromAmino: (object: import("./tx").MsgRegisterTokenPriceQueryAmino) => MsgRegisterTokenPriceQuery;
    };
    "/stride.icqoracle.MsgRemoveTokenPriceQuery": {
        aminoType: string;
        toAmino: (message: MsgRemoveTokenPriceQuery) => import("./tx").MsgRemoveTokenPriceQueryAmino;
        fromAmino: (object: import("./tx").MsgRemoveTokenPriceQueryAmino) => MsgRemoveTokenPriceQuery;
    };
    "/stride.icqoracle.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: MsgUpdateParams) => import("./tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./tx").MsgUpdateParamsAmino) => MsgUpdateParams;
    };
};
