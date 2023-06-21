export declare const createLCDClient: ({ restEndpoint }: {
    restEndpoint: string;
}) => Promise<{
    stride: {
        autopilot: import("./autopilot/query.lcd").LCDQueryClient;
        claim: import("./claim/query.lcd").LCDQueryClient;
        epochs: import("./epochs/query.lcd").LCDQueryClient;
        icacallbacks: import("./icacallbacks/query.lcd").LCDQueryClient;
        mint: {
            v1beta1: import("./mint/v1beta1/query.lcd").LCDQueryClient;
        };
        ratelimit: import("./ratelimit/query.lcd").LCDQueryClient;
        records: import("./records/query.lcd").LCDQueryClient;
        stakeibc: import("./stakeibc/query.lcd").LCDQueryClient;
    };
}>;
