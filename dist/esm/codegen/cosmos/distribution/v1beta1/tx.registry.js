import { MsgSetWithdrawAddress, MsgWithdrawDelegatorReward, MsgWithdrawValidatorCommission, MsgWithdrawTokenizeShareRecordReward, MsgWithdrawAllTokenizeShareRecordReward, MsgFundCommunityPool } from "./tx";
const registry = [["/cosmos.distribution.v1beta1.MsgSetWithdrawAddress", MsgSetWithdrawAddress], ["/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward", MsgWithdrawDelegatorReward], ["/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission", MsgWithdrawValidatorCommission], ["/cosmos.distribution.v1beta1.MsgWithdrawTokenizeShareRecordReward", MsgWithdrawTokenizeShareRecordReward], ["/cosmos.distribution.v1beta1.MsgWithdrawAllTokenizeShareRecordReward", MsgWithdrawAllTokenizeShareRecordReward], ["/cosmos.distribution.v1beta1.MsgFundCommunityPool", MsgFundCommunityPool]];
const load = (protoRegistry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
const MessageComposer = {
  encoded: {
    setWithdrawAddress(value) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress",
        value: MsgSetWithdrawAddress.encode(value).finish()
      };
    },
    withdrawDelegatorReward(value) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
        value: MsgWithdrawDelegatorReward.encode(value).finish()
      };
    },
    withdrawValidatorCommission(value) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission",
        value: MsgWithdrawValidatorCommission.encode(value).finish()
      };
    },
    withdrawTokenizeShareRecordReward(value) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawTokenizeShareRecordReward",
        value: MsgWithdrawTokenizeShareRecordReward.encode(value).finish()
      };
    },
    withdrawAllTokenizeShareRecordReward(value) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawAllTokenizeShareRecordReward",
        value: MsgWithdrawAllTokenizeShareRecordReward.encode(value).finish()
      };
    },
    fundCommunityPool(value) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPool",
        value: MsgFundCommunityPool.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    setWithdrawAddress(value) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress",
        value
      };
    },
    withdrawDelegatorReward(value) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
        value
      };
    },
    withdrawValidatorCommission(value) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission",
        value
      };
    },
    withdrawTokenizeShareRecordReward(value) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawTokenizeShareRecordReward",
        value
      };
    },
    withdrawAllTokenizeShareRecordReward(value) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawAllTokenizeShareRecordReward",
        value
      };
    },
    fundCommunityPool(value) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPool",
        value
      };
    }
  },
  fromPartial: {
    setWithdrawAddress(value) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress",
        value: MsgSetWithdrawAddress.fromPartial(value)
      };
    },
    withdrawDelegatorReward(value) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
        value: MsgWithdrawDelegatorReward.fromPartial(value)
      };
    },
    withdrawValidatorCommission(value) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission",
        value: MsgWithdrawValidatorCommission.fromPartial(value)
      };
    },
    withdrawTokenizeShareRecordReward(value) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawTokenizeShareRecordReward",
        value: MsgWithdrawTokenizeShareRecordReward.fromPartial(value)
      };
    },
    withdrawAllTokenizeShareRecordReward(value) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawAllTokenizeShareRecordReward",
        value: MsgWithdrawAllTokenizeShareRecordReward.fromPartial(value)
      };
    },
    fundCommunityPool(value) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPool",
        value: MsgFundCommunityPool.fromPartial(value)
      };
    }
  }
};
export {
  MessageComposer,
  load,
  registry
};
