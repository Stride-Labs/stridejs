import { Rpc } from "@osmonauts/helpers";
export const createRPCMsgClient = async ({
  rpc
}: {
  rpc: Rpc;
}) => ({
  cosmos: {
    authz: {
      v1beta1: new (await import("../cosmos/authz/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    bank: {
      v1beta1: new (await import("../cosmos/bank/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    crisis: {
      v1beta1: new (await import("../cosmos/crisis/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    distribution: {
      v1beta1: new (await import("../cosmos/distribution/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    evidence: {
      v1beta1: new (await import("../cosmos/evidence/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    feegrant: {
      v1beta1: new (await import("../cosmos/feegrant/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    gov: {
      v1beta1: new (await import("../cosmos/gov/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    slashing: {
      v1beta1: new (await import("../cosmos/slashing/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    staking: {
      v1beta1: new (await import("../cosmos/staking/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    vesting: {
      v1beta1: new (await import("../cosmos/vesting/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    }
  },
  stride: {
    airdrop: new (await import("./airdrop/tx.rpc.msg")).MsgClientImpl(rpc),
    claim: new (await import("./claim/tx.rpc.msg")).MsgClientImpl(rpc),
    icaoracle: new (await import("./icaoracle/tx.rpc.msg")).MsgClientImpl(rpc),
    interchainquery: {
      v1: new (await import("./interchainquery/v1/messages.rpc.msg")).MsgClientImpl(rpc)
    },
    stakedym: new (await import("./stakedym/tx.rpc.msg")).MsgClientImpl(rpc),
    stakeibc: new (await import("./stakeibc/tx.rpc.msg")).MsgClientImpl(rpc),
    staketia: new (await import("./staketia/tx.rpc.msg")).MsgClientImpl(rpc)
  }
});