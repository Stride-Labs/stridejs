import { MsgRegisterTokenPriceQuery, MsgRemoveTokenPriceQuery } from "./tx";
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
};
