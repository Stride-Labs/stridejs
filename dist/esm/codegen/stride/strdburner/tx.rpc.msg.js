import { BinaryReader } from "../../binary";
import { MsgBurn, MsgBurnResponse, MsgLink, MsgLinkResponse } from "./tx";
class MsgClientImpl {
  rpc;
  constructor(rpc) {
    this.rpc = rpc;
    this.burn = this.burn.bind(this);
    this.link = this.link.bind(this);
  }
  burn(request) {
    const data = MsgBurn.encode(request).finish();
    const promise = this.rpc.request("stride.strdburner.Msg", "Burn", data);
    return promise.then((data2) => MsgBurnResponse.decode(new BinaryReader(data2)));
  }
  link(request) {
    const data = MsgLink.encode(request).finish();
    const promise = this.rpc.request("stride.strdburner.Msg", "Link", data);
    return promise.then((data2) => MsgLinkResponse.decode(new BinaryReader(data2)));
  }
}
export {
  MsgClientImpl
};
