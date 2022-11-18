import * as _7 from "./cosmos";
export declare const cosmos_proto: {
    scalarTypeFromJSON(object: any): _7.ScalarType;
    scalarTypeToJSON(object: _7.ScalarType): string;
    ScalarType: typeof _7.ScalarType;
    ScalarTypeSDKType: typeof _7.ScalarTypeSDKType;
    InterfaceDescriptor: {
        encode(message: _7.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.InterfaceDescriptor;
        fromPartial(object: {
            name?: string;
            description?: string;
        }): _7.InterfaceDescriptor;
    };
    ScalarDescriptor: {
        encode(message: _7.ScalarDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.ScalarDescriptor;
        fromPartial(object: {
            name?: string;
            description?: string;
            fieldType?: _7.ScalarType[];
        }): _7.ScalarDescriptor;
    };
};
