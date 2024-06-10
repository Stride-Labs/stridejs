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
