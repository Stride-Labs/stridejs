import * as _81 from "./api/http";
import * as _84 from "./api/httpbody";
import * as _85 from "./protobuf/any";
import * as _86 from "./protobuf/duration";
import * as _87 from "./protobuf/timestamp";
import * as _88 from "./protobuf/empty";
import * as _89 from "./protobuf/struct";
import * as _90 from "./protobuf/wrappers";
import * as _91 from "./protobuf/field_mask";
export declare namespace google {
    const api: {
        HttpBody: {
            encode(message: _84.HttpBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.HttpBody;
            fromPartial(object: {
                contentType?: string;
                data?: Uint8Array;
                extensions?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[];
            }): _84.HttpBody;
        };
        Http: {
            encode(message: _81.Http, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.Http;
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
            }): _81.Http;
        };
        HttpRule: {
            encode(message: _81.HttpRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.HttpRule;
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
            }): _81.HttpRule;
        };
        CustomHttpPattern: {
            encode(message: _81.CustomHttpPattern, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.CustomHttpPattern;
            fromPartial(object: {
                kind?: string;
                path?: string;
            }): _81.CustomHttpPattern;
        };
    };
    const protobuf: {
        FieldMask: {
            encode(message: _91.FieldMask, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.FieldMask;
            fromPartial(object: {
                paths?: string[];
            }): _91.FieldMask;
        };
        DoubleValue: {
            encode(message: _90.DoubleValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.DoubleValue;
            fromPartial(object: {
                value?: number;
            }): _90.DoubleValue;
        };
        FloatValue: {
            encode(message: _90.FloatValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.FloatValue;
            fromPartial(object: {
                value?: number;
            }): _90.FloatValue;
        };
        Int64Value: {
            encode(message: _90.Int64Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.Int64Value;
            fromPartial(object: {
                value?: {
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
            }): _90.Int64Value;
        };
        UInt64Value: {
            encode(message: _90.UInt64Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.UInt64Value;
            fromPartial(object: {
                value?: {
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
            }): _90.UInt64Value;
        };
        Int32Value: {
            encode(message: _90.Int32Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.Int32Value;
            fromPartial(object: {
                value?: number;
            }): _90.Int32Value;
        };
        UInt32Value: {
            encode(message: _90.UInt32Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.UInt32Value;
            fromPartial(object: {
                value?: number;
            }): _90.UInt32Value;
        };
        BoolValue: {
            encode(message: _90.BoolValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.BoolValue;
            fromPartial(object: {
                value?: boolean;
            }): _90.BoolValue;
        };
        StringValue: {
            encode(message: _90.StringValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.StringValue;
            fromPartial(object: {
                value?: string;
            }): _90.StringValue;
        };
        BytesValue: {
            encode(message: _90.BytesValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.BytesValue;
            fromPartial(object: {
                value?: Uint8Array;
            }): _90.BytesValue;
        };
        nullValueFromJSON(object: any): _89.NullValue;
        nullValueToJSON(object: _89.NullValue): string;
        NullValue: typeof _89.NullValue;
        NullValueSDKType: typeof _89.NullValueSDKType;
        Struct_FieldsEntry: {
            encode(message: _89.Struct_FieldsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.Struct_FieldsEntry;
            fromPartial(object: {
                key?: string;
                value?: {
                    nullValue?: _89.NullValue;
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
            }): _89.Struct_FieldsEntry;
        };
        Struct: {
            encode(message: _89.Struct, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.Struct;
            fromPartial(object: {
                fields?: {
                    [x: string]: any;
                };
            }): _89.Struct;
        };
        Value: {
            encode(message: _89.Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.Value;
            fromPartial(object: {
                nullValue?: _89.NullValue;
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
            }): _89.Value;
        };
        ListValue: {
            encode(message: _89.ListValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.ListValue;
            fromPartial(object: {
                values?: any[];
            }): _89.ListValue;
        };
        Empty: {
            encode(_: _88.Empty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.Empty;
            fromPartial(_: {}): _88.Empty;
        };
        Timestamp: {
            encode(message: _87.Timestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.Timestamp;
            fromPartial(object: {
                seconds?: {
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
                nanos?: number;
            }): _87.Timestamp;
        };
        Duration: {
            encode(message: _86.Duration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.Duration;
            fromPartial(object: {
                seconds?: {
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
                nanos?: number;
            }): _86.Duration;
        };
        Any: {
            encode(message: _85.Any, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.Any;
            fromPartial(object: {
                typeUrl?: string;
                value?: Uint8Array;
            }): _85.Any;
        };
    };
}
