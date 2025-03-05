import { TelescopeGeneratedType } from "../../../../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgModuleQuerySafe } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/ibc.applications.interchain_accounts.host.v1.MsgModuleQuerySafe", MsgModuleQuerySafe]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    moduleQuerySafe(value: MsgModuleQuerySafe) {
      return {
        typeUrl: "/ibc.applications.interchain_accounts.host.v1.MsgModuleQuerySafe",
        value: MsgModuleQuerySafe.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    moduleQuerySafe(value: MsgModuleQuerySafe) {
      return {
        typeUrl: "/ibc.applications.interchain_accounts.host.v1.MsgModuleQuerySafe",
        value
      };
    }
  },
  fromPartial: {
    moduleQuerySafe(value: MsgModuleQuerySafe) {
      return {
        typeUrl: "/ibc.applications.interchain_accounts.host.v1.MsgModuleQuerySafe",
        value: MsgModuleQuerySafe.fromPartial(value)
      };
    }
  }
};