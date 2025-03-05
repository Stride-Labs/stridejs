import { BinaryReader } from "../../../../../binary";
import { MsgRegisterInterchainAccount, MsgRegisterInterchainAccountResponse, MsgSendTx, MsgSendTxResponse } from "./tx";
class MsgClientImpl {
  rpc;
  constructor(rpc) {
    this.rpc = rpc;
    this.registerInterchainAccount = this.registerInterchainAccount.bind(this);
    this.sendTx = this.sendTx.bind(this);
  }
  registerInterchainAccount(request) {
    const data = MsgRegisterInterchainAccount.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.interchain_accounts.controller.v1.Msg", "RegisterInterchainAccount", data);
    return promise.then((data2) => MsgRegisterInterchainAccountResponse.decode(new BinaryReader(data2)));
  }
  sendTx(request) {
    const data = MsgSendTx.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.interchain_accounts.controller.v1.Msg", "SendTx", data);
    return promise.then((data2) => MsgSendTxResponse.decode(new BinaryReader(data2)));
  }
}
export {
  MsgClientImpl
};
