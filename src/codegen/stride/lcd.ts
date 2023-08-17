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
    stride: {
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
      mint: {
        v1beta1: new (await import("./mint/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      ratelimit: new (await import("./ratelimit/query.lcd")).LCDQueryClient({
        requestClient
      }),
      records: new (await import("./records/query.lcd")).LCDQueryClient({
        requestClient
      }),
      stakeibc: new (await import("./stakeibc/query.lcd")).LCDQueryClient({
        requestClient
      })
    }
  };
};