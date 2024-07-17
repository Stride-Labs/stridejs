import { LCDClient } from "@osmonauts/lcd";
export const createLCDClient = async ({
  restEndpoint
}: {
  restEndpoint: string;
}) => {
  const requestClient = new LCDClient({
    restEndpoint
  });
  return {
    cosmos: {
      auth: {
        v1beta1: new (await import("../cosmos/auth/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      authz: {
        v1beta1: new (await import("../cosmos/authz/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      bank: {
        v1beta1: new (await import("../cosmos/bank/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      base: {
        node: {
          v1beta1: new (await import("../cosmos/base/node/v1beta1/query.lcd")).LCDQueryClient({
            requestClient
          })
        },
        tendermint: {
          v1beta1: new (await import("../cosmos/base/tendermint/v1beta1/query.lcd")).LCDQueryClient({
            requestClient
          })
        }
      },
      distribution: {
        v1beta1: new (await import("../cosmos/distribution/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      evidence: {
        v1beta1: new (await import("../cosmos/evidence/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      feegrant: {
        v1beta1: new (await import("../cosmos/feegrant/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      gov: {
        v1beta1: new (await import("../cosmos/gov/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      mint: {
        v1beta1: new (await import("../cosmos/mint/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      params: {
        v1beta1: new (await import("../cosmos/params/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      slashing: {
        v1beta1: new (await import("../cosmos/slashing/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      staking: {
        v1beta1: new (await import("../cosmos/staking/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      tx: {
        v1beta1: new (await import("../cosmos/tx/v1beta1/service.lcd")).LCDQueryClient({
          requestClient
        })
      },
      upgrade: {
        v1beta1: new (await import("../cosmos/upgrade/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      }
    },
    stride: {
      airdrop: new (await import("./airdrop/query.lcd")).LCDQueryClient({
        requestClient
      }),
      autopilot: new (await import("./autopilot/query.lcd")).LCDQueryClient({
        requestClient
      }),
      claim: new (await import("./claim/query.lcd")).LCDQueryClient({
        requestClient
      }),
      epochs: new (await import("./epochs/query.lcd")).LCDQueryClient({
        requestClient
      }),
      icacallbacks: new (await import("./icacallbacks/query.lcd")).LCDQueryClient({
        requestClient
      }),
      icaoracle: new (await import("./icaoracle/query.lcd")).LCDQueryClient({
        requestClient
      }),
      mint: {
        v1beta1: new (await import("./mint/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      records: new (await import("./records/query.lcd")).LCDQueryClient({
        requestClient
      }),
      stakedym: new (await import("./stakedym/query.lcd")).LCDQueryClient({
        requestClient
      }),
      stakeibc: new (await import("./stakeibc/query.lcd")).LCDQueryClient({
        requestClient
      }),
      staketia: new (await import("./staketia/query.lcd")).LCDQueryClient({
        requestClient
      })
    }
  };
};