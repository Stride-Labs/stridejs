import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../helpers";
export interface IcacallbacksPacketData {
    noData?: NoData;
}
export interface IcacallbacksPacketDataSDKType {
    no_data?: NoDataSDKType;
}
export interface NoData {
}
export interface NoDataSDKType {
}
export declare const IcacallbacksPacketData: {
    encode(message: IcacallbacksPacketData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IcacallbacksPacketData;
    fromPartial(object: DeepPartial<IcacallbacksPacketData>): IcacallbacksPacketData;
};
export declare const NoData: {
    encode(_: NoData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NoData;
    fromPartial(_: DeepPartial<NoData>): NoData;
};
