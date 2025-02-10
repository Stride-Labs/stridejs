import { BinaryReader } from "../../binary";
import { MsgRegisterTokenPriceQuery, MsgRegisterTokenPriceQueryResponse, MsgRemoveTokenPriceQuery, MsgRemoveTokenPriceQueryResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
class MsgClientImpl {
  rpc;
  constructor(rpc) {
    this.rpc = rpc;
    this.registerTokenPriceQuery = this.registerTokenPriceQuery.bind(this);
    this.removeTokenPriceQuery = this.removeTokenPriceQuery.bind(this);
    this.updateParams = this.updateParams.bind(this);
  }
  registerTokenPriceQuery(request) {
    const data = MsgRegisterTokenPriceQuery.encode(request).finish();
    const promise = this.rpc.request("stride.icqoracle.Msg", "RegisterTokenPriceQuery", data);
    return promise.then((data2) => MsgRegisterTokenPriceQueryResponse.decode(new BinaryReader(data2)));
  }
  removeTokenPriceQuery(request) {
    const data = MsgRemoveTokenPriceQuery.encode(request).finish();
    const promise = this.rpc.request("stride.icqoracle.Msg", "RemoveTokenPriceQuery", data);
    return promise.then((data2) => MsgRemoveTokenPriceQueryResponse.decode(new BinaryReader(data2)));
  }
  updateParams(request) {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("stride.icqoracle.Msg", "UpdateParams", data);
    return promise.then((data2) => MsgUpdateParamsResponse.decode(new BinaryReader(data2)));
  }
}
export {
  MsgClientImpl
};
