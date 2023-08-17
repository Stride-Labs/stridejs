import * as _8 from "./api/http";
import * as _9 from "./protobuf/any";
import * as _10 from "./protobuf/duration";
import * as _11 from "./protobuf/timestamp";
import * as _12 from "./protobuf/empty";
import * as _13 from "./protobuf/struct";
import * as _14 from "./protobuf/wrappers";
import * as _15 from "./protobuf/field_mask";
export declare namespace google {
    const api: {
        Http: {
            encode(message: _8.Http, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.Http;
            fromPartial(object: {
                rules?: {
                    selector?: string;
                    get?: string;
                    put?: string;
                    post?: string;
                    delete?: string;
                    patch?: string;
                    custom?: {
                        kind?: string;
                        path?: string;
                    };
                    body?: string;
                    responseBody?: string;
                    additionalBindings?: any[];
                }[];
                fullyDecodeReservedExpansion?: boolean;
            }): _8.Http;
        };
        HttpRule: {
            encode(message: _8.HttpRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.HttpRule;
            fromPartial(object: {
                selector?: string;
                get?: string;
                put?: string;
                post?: string;
                delete?: string;
                patch?: string;
                custom?: {
                    kind?: string;
                    path?: string;
                };
                body?: string;
                responseBody?: string;
                additionalBindings?: any[];
            }): _8.HttpRule;
        };
        CustomHttpPattern: {
            encode(message: _8.CustomHttpPattern, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.CustomHttpPattern;
            fromPartial(object: {
                kind?: string;
                path?: string;
            }): _8.CustomHttpPattern;
        };
    };
    const protobuf: {
        FieldMask: {
            encode(message: _15.FieldMask, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.FieldMask;
            fromPartial(object: {
                paths?: string[];
            }): _15.FieldMask;
        };
        DoubleValue: {
            encode(message: _14.DoubleValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.DoubleValue;
            fromPartial(object: {
                value?: number;
            }): _14.DoubleValue;
        };
        FloatValue: {
            encode(message: _14.FloatValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.FloatValue;
            fromPartial(object: {
                value?: number;
            }): _14.FloatValue;
        };
        Int64Value: {
            encode(message: _14.Int64Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.Int64Value;
            fromPartial(object: {
                value?: {
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
            }): _14.Int64Value;
        };
        UInt64Value: {
            encode(message: _14.UInt64Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.UInt64Value;
            fromPartial(object: {
                value?: {
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
            }): _14.UInt64Value;
        };
        Int32Value: {
            encode(message: _14.Int32Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.Int32Value;
            fromPartial(object: {
                value?: number;
            }): _14.Int32Value;
        };
        UInt32Value: {
            encode(message: _14.UInt32Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.UInt32Value;
            fromPartial(object: {
                value?: number;
            }): _14.UInt32Value;
        };
        BoolValue: {
            encode(message: _14.BoolValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.BoolValue;
            fromPartial(object: {
                value?: boolean;
            }): _14.BoolValue;
        };
        StringValue: {
            encode(message: _14.StringValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.StringValue;
            fromPartial(object: {
                value?: string;
            }): _14.StringValue;
        };
        BytesValue: {
            encode(message: _14.BytesValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.BytesValue;
            fromPartial(object: {
                value?: Uint8Array;
            }): _14.BytesValue;
        };
        nullValueFromJSON(object: any): _13.NullValue;
        nullValueToJSON(object: _13.NullValue): string;
        NullValue: typeof _13.NullValue;
        NullValueSDKType: typeof _13.NullValueSDKType;
        Struct_FieldsEntry: {
            encode(message: _13.Struct_FieldsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.Struct_FieldsEntry;
            fromPartial(object: {
                key?: string;
                value?: {
                    nullValue?: _13.NullValue;
                    numberValue?: number;
                    stringValue?: string;
                    boolValue?: boolean;
                    structValue?: {
                        fields?: {
                            [x: string]: any;
                        };
                    };
                    listValue?: {
                        values?: any[];
                    };
                };
            }): _13.Struct_FieldsEntry;
        };
        Struct: {
            encode(message: _13.Struct, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.Struct;
            fromPartial(object: {
                fields?: {
                    [x: string]: any;
                };
            }): _13.Struct;
        };
        Value: {
            encode(message: _13.Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.Value;
            fromPartial(object: {
                nullValue?: _13.NullValue;
                numberValue?: number;
                stringValue?: string;
                boolValue?: boolean;
                structValue?: {
                    fields?: {
                        [x: string]: any;
                    };
                };
                listValue?: {
                    values?: any[];
                };
            }): _13.Value;
        };
        ListValue: {
            encode(message: _13.ListValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.ListValue;
            fromPartial(object: {
                values?: any[];
            }): _13.ListValue;
        };
        Empty: {
            encode(_: _12.Empty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.Empty;
            fromPartial(_: {}): _12.Empty;
        };
        Timestamp: {
            encode(message: _11.Timestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.Timestamp;
            fromPartial(object: {
                seconds?: {
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
                nanos?: number;
            }): _11.Timestamp;
        };
        Duration: {
            encode(message: _10.Duration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.Duration;
            fromPartial(object: {
                seconds?: {
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
                nanos?: number;
            }): _10.Duration;
        };
        Any: {
            encode(message: _9.Any, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.Any;
            fromPartial(object: {
                typeUrl?: string;
                value?: Uint8Array;
            }): _9.Any;
        };
    };
}
