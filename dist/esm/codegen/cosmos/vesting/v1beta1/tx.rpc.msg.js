import { BinaryReader } from "../../../binary";
import { MsgCreateVestingAccount, MsgCreateVestingAccountResponse } from "./tx";
class MsgClientImpl {
  rpc;
  constructor(rpc) {
    this.rpc = rpc;
    this.createVestingAccount = this.createVestingAccount.bind(this);
  }
  createVestingAccount(request) {
    const data = MsgCreateVestingAccount.encode(request).finish();
    const promise = this.rpc.request("cosmos.vesting.v1beta1.Msg", "CreateVestingAccount", data);
    return promise.then((data2) => MsgCreateVestingAccountResponse.decode(new BinaryReader(data2)));
  }
}
export {
  MsgClientImpl
};
