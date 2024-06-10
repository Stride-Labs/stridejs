import * as _7 from "./wasm/v1/cosmwasm";
export declare namespace cosmwasm {
    namespace wasm {
        const v1: {
            MsgExecuteContract: {
                encode(message: _7.MsgExecuteContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.MsgExecuteContract;
                fromPartial(object: {
                    sender?: string;
                    contract?: string;
                    msg?: Uint8Array;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _7.MsgExecuteContract;
            };
            MsgInstantiateContract: {
                encode(message: _7.MsgInstantiateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.MsgInstantiateContract;
                fromPartial(object: {
                    sender?: string;
                    admin?: string;
                    codeId?: {
                        high?: number;
                        low?: number;
                        unsigned?: boolean;
                        add?: (addend: string | number | import("long").default) => import("long").default;
                        and?: (other: string | number | import("long").default) => import("long").default;
                        compare?: (other: string | number | import("long").default) => number;
                        comp?: (other: string | number | import("long").default) => number;
                        divide?: (divisor: string | number | import("long").default) => import("long").default;
                        div?: (divisor: string | number | import("long").default) => import("long").default;
                        equals?: (other: string | number | import("long").default) => boolean;
                        eq?: (other: string | number | import("long").default) => boolean;
                        getHighBits?: () => number;
                        getHighBitsUnsigned?: () => number;
                        getLowBits?: () => number;
                        getLowBitsUnsigned?: () => number;
                        getNumBitsAbs?: () => number;
                        greaterThan?: (other: string | number | import("long").default) => boolean;
                        gt?: (other: string | number | import("long").default) => boolean;
                        greaterThanOrEqual?: (other: string | number | import("long").default) => boolean;
                        gte?: (other: string | number | import("long").default) => boolean;
                        ge?: (other: string | number | import("long").default) => boolean;
                        isEven?: () => boolean;
                        isNegative?: () => boolean;
                        isOdd?: () => boolean;
                        isPositive?: () => boolean;
                        isZero?: () => boolean;
                        eqz?: () => boolean;
                        lessThan?: (other: string | number | import("long").default) => boolean;
                        lt?: (other: string | number | import("long").default) => boolean;
                        lessThanOrEqual?: (other: string | number | import("long").default) => boolean;
                        lte?: (other: string | number | import("long").default) => boolean;
                        le?: (other: string | number | import("long").default) => boolean;
                        modulo?: (other: string | number | import("long").default) => import("long").default;
                        mod?: (other: string | number | import("long").default) => import("long").default;
                        rem?: (other: string | number | import("long").default) => import("long").default;
                        multiply?: (multiplier: string | number | import("long").default) => import("long").default;
                        mul?: (multiplier: string | number | import("long").default) => import("long").default;
                        negate?: () => import("long").default;
                        neg?: () => import("long").default;
                        not?: () => import("long").default;
                        countLeadingZeros?: () => number;
                        clz?: () => number;
                        countTrailingZeros?: () => number;
                        ctz?: () => number;
                        notEquals?: (other: string | number | import("long").default) => boolean;
                        neq?: (other: string | number | import("long").default) => boolean;
                        ne?: (other: string | number | import("long").default) => boolean;
                        or?: (other: string | number | import("long").default) => import("long").default;
                        shiftLeft?: (numBits: number | import("long").default) => import("long").default;
                        shl?: (numBits: number | import("long").default) => import("long").default;
                        shiftRight?: (numBits: number | import("long").default) => import("long").default;
                        shr?: (numBits: number | import("long").default) => import("long").default;
                        shiftRightUnsigned?: (numBits: number | import("long").default) => import("long").default;
                        shru?: (numBits: number | import("long").default) => import("long").default;
                        shr_u?: (numBits: number | import("long").default) => import("long").default;
                        rotateLeft?: (numBits: number | import("long").default) => import("long").default;
                        rotl?: (numBits: number | import("long").default) => import("long").default;
                        rotateRight?: (numBits: number | import("long").default) => import("long").default;
                        rotr?: (numBits: number | import("long").default) => import("long").default;
                        subtract?: (subtrahend: string | number | import("long").default) => import("long").default;
                        sub?: (subtrahend: string | number | import("long").default) => import("long").default;
                        toInt?: () => number;
                        toNumber?: () => number;
                        toBytes?: (le?: boolean) => number[];
                        toBytesLE?: () => number[];
                        toBytesBE?: () => number[];
                        toSigned?: () => import("long").default;
                        toString?: (radix?: number) => string;
                        toUnsigned?: () => import("long").default;
                        xor?: (other: string | number | import("long").default) => import("long").default;
                    };
                    label?: string;
                    msg?: Uint8Array;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _7.MsgInstantiateContract;
            };
            MsgInstantiateContractResponse: {
                encode(message: _7.MsgInstantiateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.MsgInstantiateContractResponse;
                fromPartial(object: {
                    address?: string;
                    data?: Uint8Array;
                }): _7.MsgInstantiateContractResponse;
            };
        };
    }
}
