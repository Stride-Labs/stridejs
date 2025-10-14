import { MsgBurn, MsgLink } from "./tx";
export declare const AminoConverter: {
    "/stride.strdburner.MsgBurn": {
        aminoType: string;
        toAmino: (message: MsgBurn) => import("./tx").MsgBurnAmino;
        fromAmino: (object: import("./tx").MsgBurnAmino) => MsgBurn;
    };
    "/stride.strdburner.MsgLink": {
        aminoType: string;
        toAmino: (message: MsgLink) => import("./tx").MsgLinkAmino;
        fromAmino: (object: import("./tx").MsgLinkAmino) => MsgLink;
    };
};
