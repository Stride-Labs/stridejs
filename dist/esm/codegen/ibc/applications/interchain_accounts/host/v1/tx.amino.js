import { MsgModuleQuerySafe } from "./tx";
const AminoConverter = {
  "/ibc.applications.interchain_accounts.host.v1.MsgModuleQuerySafe": {
    aminoType: "cosmos-sdk/MsgModuleQuerySafe",
    toAmino: MsgModuleQuerySafe.toAmino,
    fromAmino: MsgModuleQuerySafe.fromAmino
  }
};
export {
  AminoConverter
};
