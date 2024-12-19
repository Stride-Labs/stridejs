import { BinaryReader } from "../../../binary";
import { MsgSoftwareUpgrade, MsgSoftwareUpgradeResponse, MsgCancelUpgrade, MsgCancelUpgradeResponse } from "./tx";
class MsgClientImpl {
  rpc;
  constructor(rpc) {
    this.rpc = rpc;
    this.softwareUpgrade = this.softwareUpgrade.bind(this);
    this.cancelUpgrade = this.cancelUpgrade.bind(this);
  }
  softwareUpgrade(request) {
    const data = MsgSoftwareUpgrade.encode(request).finish();
    const promise = this.rpc.request("cosmos.upgrade.v1beta1.Msg", "SoftwareUpgrade", data);
    return promise.then((data2) => MsgSoftwareUpgradeResponse.decode(new BinaryReader(data2)));
  }
  cancelUpgrade(request) {
    const data = MsgCancelUpgrade.encode(request).finish();
    const promise = this.rpc.request("cosmos.upgrade.v1beta1.Msg", "CancelUpgrade", data);
    return promise.then((data2) => MsgCancelUpgradeResponse.decode(new BinaryReader(data2)));
  }
}
export {
  MsgClientImpl
};
