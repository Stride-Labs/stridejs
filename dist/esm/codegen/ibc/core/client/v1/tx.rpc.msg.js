import { BinaryReader } from "../../../../binary";
import { MsgCreateClient, MsgCreateClientResponse, MsgUpdateClient, MsgUpdateClientResponse, MsgUpgradeClient, MsgUpgradeClientResponse, MsgSubmitMisbehaviour, MsgSubmitMisbehaviourResponse, MsgRecoverClient, MsgRecoverClientResponse, MsgIBCSoftwareUpgrade, MsgIBCSoftwareUpgradeResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
class MsgClientImpl {
  rpc;
  constructor(rpc) {
    this.rpc = rpc;
    this.createClient = this.createClient.bind(this);
    this.updateClient = this.updateClient.bind(this);
    this.upgradeClient = this.upgradeClient.bind(this);
    this.submitMisbehaviour = this.submitMisbehaviour.bind(this);
    this.recoverClient = this.recoverClient.bind(this);
    this.iBCSoftwareUpgrade = this.iBCSoftwareUpgrade.bind(this);
    this.updateClientParams = this.updateClientParams.bind(this);
  }
  createClient(request) {
    const data = MsgCreateClient.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Msg", "CreateClient", data);
    return promise.then((data2) => MsgCreateClientResponse.decode(new BinaryReader(data2)));
  }
  updateClient(request) {
    const data = MsgUpdateClient.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Msg", "UpdateClient", data);
    return promise.then((data2) => MsgUpdateClientResponse.decode(new BinaryReader(data2)));
  }
  upgradeClient(request) {
    const data = MsgUpgradeClient.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Msg", "UpgradeClient", data);
    return promise.then((data2) => MsgUpgradeClientResponse.decode(new BinaryReader(data2)));
  }
  submitMisbehaviour(request) {
    const data = MsgSubmitMisbehaviour.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Msg", "SubmitMisbehaviour", data);
    return promise.then((data2) => MsgSubmitMisbehaviourResponse.decode(new BinaryReader(data2)));
  }
  recoverClient(request) {
    const data = MsgRecoverClient.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Msg", "RecoverClient", data);
    return promise.then((data2) => MsgRecoverClientResponse.decode(new BinaryReader(data2)));
  }
  iBCSoftwareUpgrade(request) {
    const data = MsgIBCSoftwareUpgrade.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Msg", "IBCSoftwareUpgrade", data);
    return promise.then((data2) => MsgIBCSoftwareUpgradeResponse.decode(new BinaryReader(data2)));
  }
  updateClientParams(request) {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Msg", "UpdateClientParams", data);
    return promise.then((data2) => MsgUpdateParamsResponse.decode(new BinaryReader(data2)));
  }
}
export {
  MsgClientImpl
};
