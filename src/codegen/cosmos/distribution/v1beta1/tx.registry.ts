import { TelescopeGeneratedType } from "../../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgSetWithdrawAddress, MsgWithdrawDelegatorReward, MsgWithdrawValidatorCommission, MsgWithdrawTokenizeShareRecordReward, MsgWithdrawAllTokenizeShareRecordReward, MsgFundCommunityPool } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/cosmos.distribution.v1beta1.MsgSetWithdrawAddress", MsgSetWithdrawAddress], ["/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward", MsgWithdrawDelegatorReward], ["/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission", MsgWithdrawValidatorCommission], ["/cosmos.distribution.v1beta1.MsgWithdrawTokenizeShareRecordReward", MsgWithdrawTokenizeShareRecordReward], ["/cosmos.distribution.v1beta1.MsgWithdrawAllTokenizeShareRecordReward", MsgWithdrawAllTokenizeShareRecordReward], ["/cosmos.distribution.v1beta1.MsgFundCommunityPool", MsgFundCommunityPool]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    setWithdrawAddress(value: MsgSetWithdrawAddress) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress",
        value: MsgSetWithdrawAddress.encode(value).finish()
      };
    },
    withdrawDelegatorReward(value: MsgWithdrawDelegatorReward) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
        value: MsgWithdrawDelegatorReward.encode(value).finish()
      };
    },
    withdrawValidatorCommission(value: MsgWithdrawValidatorCommission) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission",
        value: MsgWithdrawValidatorCommission.encode(value).finish()
      };
    },
    withdrawTokenizeShareRecordReward(value: MsgWithdrawTokenizeShareRecordReward) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawTokenizeShareRecordReward",
        value: MsgWithdrawTokenizeShareRecordReward.encode(value).finish()
      };
    },
    withdrawAllTokenizeShareRecordReward(value: MsgWithdrawAllTokenizeShareRecordReward) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawAllTokenizeShareRecordReward",
        value: MsgWithdrawAllTokenizeShareRecordReward.encode(value).finish()
      };
    },
    fundCommunityPool(value: MsgFundCommunityPool) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPool",
        value: MsgFundCommunityPool.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    setWithdrawAddress(value: MsgSetWithdrawAddress) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress",
        value
      };
    },
    withdrawDelegatorReward(value: MsgWithdrawDelegatorReward) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
        value
      };
    },
    withdrawValidatorCommission(value: MsgWithdrawValidatorCommission) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission",
        value
      };
    },
    withdrawTokenizeShareRecordReward(value: MsgWithdrawTokenizeShareRecordReward) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawTokenizeShareRecordReward",
        value
      };
    },
    withdrawAllTokenizeShareRecordReward(value: MsgWithdrawAllTokenizeShareRecordReward) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawAllTokenizeShareRecordReward",
        value
      };
    },
    fundCommunityPool(value: MsgFundCommunityPool) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPool",
        value
      };
    }
  },
  fromPartial: {
    setWithdrawAddress(value: MsgSetWithdrawAddress) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress",
        value: MsgSetWithdrawAddress.fromPartial(value)
      };
    },
    withdrawDelegatorReward(value: MsgWithdrawDelegatorReward) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
        value: MsgWithdrawDelegatorReward.fromPartial(value)
      };
    },
    withdrawValidatorCommission(value: MsgWithdrawValidatorCommission) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission",
        value: MsgWithdrawValidatorCommission.fromPartial(value)
      };
    },
    withdrawTokenizeShareRecordReward(value: MsgWithdrawTokenizeShareRecordReward) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawTokenizeShareRecordReward",
        value: MsgWithdrawTokenizeShareRecordReward.fromPartial(value)
      };
    },
    withdrawAllTokenizeShareRecordReward(value: MsgWithdrawAllTokenizeShareRecordReward) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawAllTokenizeShareRecordReward",
        value: MsgWithdrawAllTokenizeShareRecordReward.fromPartial(value)
      };
    },
    fundCommunityPool(value: MsgFundCommunityPool) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPool",
        value: MsgFundCommunityPool.fromPartial(value)
      };
    }
  }
};