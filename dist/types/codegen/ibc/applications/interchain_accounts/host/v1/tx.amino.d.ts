import { MsgModuleQuerySafe } from "./tx";
export declare const AminoConverter: {
    "/ibc.applications.interchain_accounts.host.v1.MsgModuleQuerySafe": {
        aminoType: string;
        toAmino: (message: MsgModuleQuerySafe) => import("./tx").MsgModuleQuerySafeAmino;
        fromAmino: (object: import("./tx").MsgModuleQuerySafeAmino) => MsgModuleQuerySafe;
    };
};
