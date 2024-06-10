import * as _92 from "./gamm/v1beta1/osmosis";
export declare namespace osmosis {
    namespace gamm {
        const v1beta1: {
            MsgSwapExactAmountIn: {
                encode(message: _92.MsgSwapExactAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.MsgSwapExactAmountIn;
                fromPartial(object: {
                    sender?: string;
                    routes?: {
                        poolId?: {
                            high?: number;
                            low?: number;
                            unsigned?: boolean;
                            add?: (addend: string | number | import("long")) => import("long");
                            and?: (other: string | number | import("long")) => import("long");
                            compare?: (other: string | number | import("long")) => number;
                            comp?: (other: string | number | import("long")) => number;
                            divide?: (divisor: string | number | import("long")) => import("long");
                            div?: (divisor: string | number | import("long")) => import("long");
                            equals?: (other: string | number | import("long")) => boolean;
                            eq?: (other: string | number | import("long")) => boolean;
                            getHighBits?: () => number;
                            getHighBitsUnsigned?: () => number;
                            getLowBits?: () => number;
                            getLowBitsUnsigned?: () => number;
                            getNumBitsAbs?: () => number;
                            greaterThan?: (other: string | number | import("long")) => boolean;
                            gt?: (other: string | number | import("long")) => boolean;
                            greaterThanOrEqual?: (other: string | number | import("long")) => boolean;
                            gte?: (other: string | number | import("long")) => boolean;
                            ge?: (other: string | number | import("long")) => boolean;
                            isEven?: () => boolean;
                            isNegative?: () => boolean;
                            isOdd?: () => boolean;
                            isPositive?: () => boolean;
                            isZero?: () => boolean;
                            eqz?: () => boolean;
                            lessThan?: (other: string | number | import("long")) => boolean;
                            lt?: (other: string | number | import("long")) => boolean;
                            lessThanOrEqual?: (other: string | number | import("long")) => boolean;
                            lte?: (other: string | number | import("long")) => boolean;
                            le?: (other: string | number | import("long")) => boolean;
                            modulo?: (other: string | number | import("long")) => import("long");
                            mod?: (other: string | number | import("long")) => import("long");
                            rem?: (other: string | number | import("long")) => import("long");
                            multiply?: (multiplier: string | number | import("long")) => import("long");
                            mul?: (multiplier: string | number | import("long")) => import("long");
                            negate?: () => import("long");
                            neg?: () => import("long");
                            not?: () => import("long");
                            countLeadingZeros?: () => number;
                            clz?: () => number;
                            countTrailingZeros?: () => number;
                            ctz?: () => number;
                            notEquals?: (other: string | number | import("long")) => boolean;
                            neq?: (other: string | number | import("long")) => boolean;
                            ne?: (other: string | number | import("long")) => boolean;
                            or?: (other: string | number | import("long")) => import("long");
                            shiftLeft?: (numBits: number | import("long")) => import("long");
                            shl?: (numBits: number | import("long")) => import("long");
                            shiftRight?: (numBits: number | import("long")) => import("long");
                            shr?: (numBits: number | import("long")) => import("long");
                            shiftRightUnsigned?: (numBits: number | import("long")) => import("long");
                            shru?: (numBits: number | import("long")) => import("long");
                            shr_u?: (numBits: number | import("long")) => import("long");
                            rotateLeft?: (numBits: number | import("long")) => import("long");
                            rotl?: (numBits: number | import("long")) => import("long");
                            rotateRight?: (numBits: number | import("long")) => import("long");
                            rotr?: (numBits: number | import("long")) => import("long");
                            subtract?: (subtrahend: string | number | import("long")) => import("long");
                            sub?: (subtrahend: string | number | import("long")) => import("long");
                            toInt?: () => number;
                            toNumber?: () => number;
                            toBytes?: (le?: boolean) => number[];
                            toBytesLE?: () => number[];
                            toBytesBE?: () => number[];
                            toSigned?: () => import("long");
                            toString?: (radix?: number) => string;
                            toUnsigned?: () => import("long");
                            xor?: (other: string | number | import("long")) => import("long");
                        };
                        tokenOutDenom?: string;
                    }[];
                    tokenIn?: {
                        denom?: string;
                        amount?: string;
                    };
                    tokenOutMinAmount?: string;
                }): _92.MsgSwapExactAmountIn;
            };
            SwapAmountInRoute: {
                encode(message: _92.SwapAmountInRoute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.SwapAmountInRoute;
                fromPartial(object: {
                    poolId?: {
                        high?: number;
                        low?: number;
                        unsigned?: boolean;
                        add?: (addend: string | number | import("long")) => import("long");
                        and?: (other: string | number | import("long")) => import("long");
                        compare?: (other: string | number | import("long")) => number;
                        comp?: (other: string | number | import("long")) => number;
                        divide?: (divisor: string | number | import("long")) => import("long");
                        div?: (divisor: string | number | import("long")) => import("long");
                        equals?: (other: string | number | import("long")) => boolean;
                        eq?: (other: string | number | import("long")) => boolean;
                        getHighBits?: () => number;
                        getHighBitsUnsigned?: () => number;
                        getLowBits?: () => number;
                        getLowBitsUnsigned?: () => number;
                        getNumBitsAbs?: () => number;
                        greaterThan?: (other: string | number | import("long")) => boolean;
                        gt?: (other: string | number | import("long")) => boolean;
                        greaterThanOrEqual?: (other: string | number | import("long")) => boolean;
                        gte?: (other: string | number | import("long")) => boolean;
                        ge?: (other: string | number | import("long")) => boolean;
                        isEven?: () => boolean;
                        isNegative?: () => boolean;
                        isOdd?: () => boolean;
                        isPositive?: () => boolean;
                        isZero?: () => boolean;
                        eqz?: () => boolean;
                        lessThan?: (other: string | number | import("long")) => boolean;
                        lt?: (other: string | number | import("long")) => boolean;
                        lessThanOrEqual?: (other: string | number | import("long")) => boolean;
                        lte?: (other: string | number | import("long")) => boolean;
                        le?: (other: string | number | import("long")) => boolean;
                        modulo?: (other: string | number | import("long")) => import("long");
                        mod?: (other: string | number | import("long")) => import("long");
                        rem?: (other: string | number | import("long")) => import("long");
                        multiply?: (multiplier: string | number | import("long")) => import("long");
                        mul?: (multiplier: string | number | import("long")) => import("long");
                        negate?: () => import("long");
                        neg?: () => import("long");
                        not?: () => import("long");
                        countLeadingZeros?: () => number;
                        clz?: () => number;
                        countTrailingZeros?: () => number;
                        ctz?: () => number;
                        notEquals?: (other: string | number | import("long")) => boolean;
                        neq?: (other: string | number | import("long")) => boolean;
                        ne?: (other: string | number | import("long")) => boolean;
                        or?: (other: string | number | import("long")) => import("long");
                        shiftLeft?: (numBits: number | import("long")) => import("long");
                        shl?: (numBits: number | import("long")) => import("long");
                        shiftRight?: (numBits: number | import("long")) => import("long");
                        shr?: (numBits: number | import("long")) => import("long");
                        shiftRightUnsigned?: (numBits: number | import("long")) => import("long");
                        shru?: (numBits: number | import("long")) => import("long");
                        shr_u?: (numBits: number | import("long")) => import("long");
                        rotateLeft?: (numBits: number | import("long")) => import("long");
                        rotl?: (numBits: number | import("long")) => import("long");
                        rotateRight?: (numBits: number | import("long")) => import("long");
                        rotr?: (numBits: number | import("long")) => import("long");
                        subtract?: (subtrahend: string | number | import("long")) => import("long");
                        sub?: (subtrahend: string | number | import("long")) => import("long");
                        toInt?: () => number;
                        toNumber?: () => number;
                        toBytes?: (le?: boolean) => number[];
                        toBytesLE?: () => number[];
                        toBytesBE?: () => number[];
                        toSigned?: () => import("long");
                        toString?: (radix?: number) => string;
                        toUnsigned?: () => import("long");
                        xor?: (other: string | number | import("long")) => import("long");
                    };
                    tokenOutDenom?: string;
                }): _92.SwapAmountInRoute;
            };
            OsmosisTwapRecord: {
                encode(message: _92.OsmosisTwapRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.OsmosisTwapRecord;
                fromPartial(object: {
                    poolId?: {
                        high?: number;
                        low?: number;
                        unsigned?: boolean;
                        add?: (addend: string | number | import("long")) => import("long");
                        and?: (other: string | number | import("long")) => import("long");
                        compare?: (other: string | number | import("long")) => number;
                        comp?: (other: string | number | import("long")) => number;
                        divide?: (divisor: string | number | import("long")) => import("long");
                        div?: (divisor: string | number | import("long")) => import("long");
                        equals?: (other: string | number | import("long")) => boolean;
                        eq?: (other: string | number | import("long")) => boolean;
                        getHighBits?: () => number;
                        getHighBitsUnsigned?: () => number;
                        getLowBits?: () => number;
                        getLowBitsUnsigned?: () => number;
                        getNumBitsAbs?: () => number;
                        greaterThan?: (other: string | number | import("long")) => boolean;
                        gt?: (other: string | number | import("long")) => boolean;
                        greaterThanOrEqual?: (other: string | number | import("long")) => boolean;
                        gte?: (other: string | number | import("long")) => boolean;
                        ge?: (other: string | number | import("long")) => boolean;
                        isEven?: () => boolean;
                        isNegative?: () => boolean;
                        isOdd?: () => boolean;
                        isPositive?: () => boolean;
                        isZero?: () => boolean;
                        eqz?: () => boolean;
                        lessThan?: (other: string | number | import("long")) => boolean;
                        lt?: (other: string | number | import("long")) => boolean;
                        lessThanOrEqual?: (other: string | number | import("long")) => boolean;
                        lte?: (other: string | number | import("long")) => boolean;
                        le?: (other: string | number | import("long")) => boolean;
                        modulo?: (other: string | number | import("long")) => import("long");
                        mod?: (other: string | number | import("long")) => import("long");
                        rem?: (other: string | number | import("long")) => import("long");
                        multiply?: (multiplier: string | number | import("long")) => import("long");
                        mul?: (multiplier: string | number | import("long")) => import("long");
                        negate?: () => import("long");
                        neg?: () => import("long");
                        not?: () => import("long");
                        countLeadingZeros?: () => number;
                        clz?: () => number;
                        countTrailingZeros?: () => number;
                        ctz?: () => number;
                        notEquals?: (other: string | number | import("long")) => boolean;
                        neq?: (other: string | number | import("long")) => boolean;
                        ne?: (other: string | number | import("long")) => boolean;
                        or?: (other: string | number | import("long")) => import("long");
                        shiftLeft?: (numBits: number | import("long")) => import("long");
                        shl?: (numBits: number | import("long")) => import("long");
                        shiftRight?: (numBits: number | import("long")) => import("long");
                        shr?: (numBits: number | import("long")) => import("long");
                        shiftRightUnsigned?: (numBits: number | import("long")) => import("long");
                        shru?: (numBits: number | import("long")) => import("long");
                        shr_u?: (numBits: number | import("long")) => import("long");
                        rotateLeft?: (numBits: number | import("long")) => import("long");
                        rotl?: (numBits: number | import("long")) => import("long");
                        rotateRight?: (numBits: number | import("long")) => import("long");
                        rotr?: (numBits: number | import("long")) => import("long");
                        subtract?: (subtrahend: string | number | import("long")) => import("long");
                        sub?: (subtrahend: string | number | import("long")) => import("long");
                        toInt?: () => number;
                        toNumber?: () => number;
                        toBytes?: (le?: boolean) => number[];
                        toBytesLE?: () => number[];
                        toBytesBE?: () => number[];
                        toSigned?: () => import("long");
                        toString?: (radix?: number) => string;
                        toUnsigned?: () => import("long");
                        xor?: (other: string | number | import("long")) => import("long");
                    };
                    asset0Denom?: string;
                    asset1Denom?: string;
                    height?: {
                        high?: number;
                        low?: number;
                        unsigned?: boolean;
                        add?: (addend: string | number | import("long")) => import("long");
                        and?: (other: string | number | import("long")) => import("long");
                        compare?: (other: string | number | import("long")) => number;
                        comp?: (other: string | number | import("long")) => number;
                        divide?: (divisor: string | number | import("long")) => import("long");
                        div?: (divisor: string | number | import("long")) => import("long");
                        equals?: (other: string | number | import("long")) => boolean;
                        eq?: (other: string | number | import("long")) => boolean;
                        getHighBits?: () => number;
                        getHighBitsUnsigned?: () => number;
                        getLowBits?: () => number;
                        getLowBitsUnsigned?: () => number;
                        getNumBitsAbs?: () => number;
                        greaterThan?: (other: string | number | import("long")) => boolean;
                        gt?: (other: string | number | import("long")) => boolean;
                        greaterThanOrEqual?: (other: string | number | import("long")) => boolean;
                        gte?: (other: string | number | import("long")) => boolean;
                        ge?: (other: string | number | import("long")) => boolean;
                        isEven?: () => boolean;
                        isNegative?: () => boolean;
                        isOdd?: () => boolean;
                        isPositive?: () => boolean;
                        isZero?: () => boolean;
                        eqz?: () => boolean;
                        lessThan?: (other: string | number | import("long")) => boolean;
                        lt?: (other: string | number | import("long")) => boolean;
                        lessThanOrEqual?: (other: string | number | import("long")) => boolean;
                        lte?: (other: string | number | import("long")) => boolean;
                        le?: (other: string | number | import("long")) => boolean;
                        modulo?: (other: string | number | import("long")) => import("long");
                        mod?: (other: string | number | import("long")) => import("long");
                        rem?: (other: string | number | import("long")) => import("long");
                        multiply?: (multiplier: string | number | import("long")) => import("long");
                        mul?: (multiplier: string | number | import("long")) => import("long");
                        negate?: () => import("long");
                        neg?: () => import("long");
                        not?: () => import("long");
                        countLeadingZeros?: () => number;
                        clz?: () => number;
                        countTrailingZeros?: () => number;
                        ctz?: () => number;
                        notEquals?: (other: string | number | import("long")) => boolean;
                        neq?: (other: string | number | import("long")) => boolean;
                        ne?: (other: string | number | import("long")) => boolean;
                        or?: (other: string | number | import("long")) => import("long");
                        shiftLeft?: (numBits: number | import("long")) => import("long");
                        shl?: (numBits: number | import("long")) => import("long");
                        shiftRight?: (numBits: number | import("long")) => import("long");
                        shr?: (numBits: number | import("long")) => import("long");
                        shiftRightUnsigned?: (numBits: number | import("long")) => import("long");
                        shru?: (numBits: number | import("long")) => import("long");
                        shr_u?: (numBits: number | import("long")) => import("long");
                        rotateLeft?: (numBits: number | import("long")) => import("long");
                        rotl?: (numBits: number | import("long")) => import("long");
                        rotateRight?: (numBits: number | import("long")) => import("long");
                        rotr?: (numBits: number | import("long")) => import("long");
                        subtract?: (subtrahend: string | number | import("long")) => import("long");
                        sub?: (subtrahend: string | number | import("long")) => import("long");
                        toInt?: () => number;
                        toNumber?: () => number;
                        toBytes?: (le?: boolean) => number[];
                        toBytesLE?: () => number[];
                        toBytesBE?: () => number[];
                        toSigned?: () => import("long");
                        toString?: (radix?: number) => string;
                        toUnsigned?: () => import("long");
                        xor?: (other: string | number | import("long")) => import("long");
                    };
                    time?: Date;
                    p0LastSpotPrice?: string;
                    p1LastSpotPrice?: string;
                    p0ArithmeticTwapAccumulator?: string;
                    p1ArithmeticTwapAccumulator?: string;
                    geometricTwapAccumulator?: string;
                    lastErrorTime?: Date;
                }): _92.OsmosisTwapRecord;
            };
        };
    }
}
