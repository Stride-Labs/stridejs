import * as _80 from "./api/http";
import * as _83 from "./api/httpbody";
import * as _84 from "./protobuf/any";
import * as _85 from "./protobuf/duration";
import * as _86 from "./protobuf/timestamp";
import * as _87 from "./protobuf/empty";
import * as _88 from "./protobuf/struct";
import * as _89 from "./protobuf/wrappers";
import * as _90 from "./protobuf/field_mask";
export declare namespace google {
    const api: {
        HttpBody: {
            encode(message: _83.HttpBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.HttpBody;
            fromPartial(object: {
                contentType?: string;
                data?: Uint8Array;
                extensions?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[];
            }): _83.HttpBody;
        };
        Http: {
            encode(message: _80.Http, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.Http;
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
            }): _80.Http;
        };
        HttpRule: {
            encode(message: _80.HttpRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.HttpRule;
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
            }): _80.HttpRule;
        };
        CustomHttpPattern: {
            encode(message: _80.CustomHttpPattern, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.CustomHttpPattern;
            fromPartial(object: {
                kind?: string;
                path?: string;
            }): _80.CustomHttpPattern;
        };
    };
    const protobuf: {
        FieldMask: {
            encode(message: _90.FieldMask, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.FieldMask;
            fromPartial(object: {
                paths?: string[];
            }): _90.FieldMask;
        };
        DoubleValue: {
            encode(message: _89.DoubleValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.DoubleValue;
            fromPartial(object: {
                value?: number;
            }): _89.DoubleValue;
        };
        FloatValue: {
            encode(message: _89.FloatValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.FloatValue;
            fromPartial(object: {
                value?: number;
            }): _89.FloatValue;
        };
        Int64Value: {
            encode(message: _89.Int64Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.Int64Value;
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
            }): _89.Int64Value;
        };
        UInt64Value: {
            encode(message: _89.UInt64Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.UInt64Value;
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
            }): _89.UInt64Value;
        };
        Int32Value: {
            encode(message: _89.Int32Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.Int32Value;
            fromPartial(object: {
                value?: number;
            }): _89.Int32Value;
        };
        UInt32Value: {
            encode(message: _89.UInt32Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.UInt32Value;
            fromPartial(object: {
                value?: number;
            }): _89.UInt32Value;
        };
        BoolValue: {
            encode(message: _89.BoolValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.BoolValue;
            fromPartial(object: {
                value?: boolean;
            }): _89.BoolValue;
        };
        StringValue: {
            encode(message: _89.StringValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.StringValue;
            fromPartial(object: {
                value?: string;
            }): _89.StringValue;
        };
        BytesValue: {
            encode(message: _89.BytesValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.BytesValue;
            fromPartial(object: {
                value?: Uint8Array;
            }): _89.BytesValue;
        };
        nullValueFromJSON(object: any): _88.NullValue;
        nullValueToJSON(object: _88.NullValue): string;
        NullValue: typeof _88.NullValue;
        NullValueSDKType: typeof _88.NullValueSDKType;
        Struct_FieldsEntry: {
            encode(message: _88.Struct_FieldsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.Struct_FieldsEntry;
            fromPartial(object: {
                key?: string;
                value?: {
                    nullValue?: _88.NullValue;
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
            }): _88.Struct_FieldsEntry;
        };
        Struct: {
            encode(message: _88.Struct, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.Struct;
            fromPartial(object: {
                fields?: {
                    [x: string]: any;
                };
            }): _88.Struct;
        };
        Value: {
            encode(message: _88.Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.Value;
            fromPartial(object: {
                nullValue?: _88.NullValue;
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
            }): _88.Value;
        };
        ListValue: {
            encode(message: _88.ListValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.ListValue;
            fromPartial(object: {
                values?: any[];
            }): _88.ListValue;
        };
        Empty: {
            encode(_: _87.Empty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.Empty;
            fromPartial(_: {}): _87.Empty;
        };
        Timestamp: {
            encode(message: _86.Timestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.Timestamp;
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
            }): _86.Timestamp;
        };
        Duration: {
            encode(message: _85.Duration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.Duration;
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
            }): _85.Duration;
        };
        Any: {
            encode(message: _84.Any, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.Any;
            fromPartial(object: {
                typeUrl?: string;
                value?: Uint8Array;
            }): _84.Any;
        };
    };
}
