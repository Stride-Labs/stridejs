import { MsgCreateVestingAccount } from "./tx";
export declare const AminoConverter: {
    "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
        aminoType: string;
        toAmino: (message: MsgCreateVestingAccount) => import("./tx").MsgCreateVestingAccountAmino;
        fromAmino: (object: import("./tx").MsgCreateVestingAccountAmino) => MsgCreateVestingAccount;
    };
};
