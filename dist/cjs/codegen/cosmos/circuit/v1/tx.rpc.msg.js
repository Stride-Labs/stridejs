var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var tx_rpc_msg_exports = {};
__export(tx_rpc_msg_exports, {
  MsgClientImpl: () => MsgClientImpl
});
module.exports = __toCommonJS(tx_rpc_msg_exports);
var import_binary = require("../../../binary");
var import_tx = require("./tx");
class MsgClientImpl {
  rpc;
  constructor(rpc) {
    this.rpc = rpc;
    this.authorizeCircuitBreaker = this.authorizeCircuitBreaker.bind(this);
    this.tripCircuitBreaker = this.tripCircuitBreaker.bind(this);
    this.resetCircuitBreaker = this.resetCircuitBreaker.bind(this);
  }
  authorizeCircuitBreaker(request) {
    const data = import_tx.MsgAuthorizeCircuitBreaker.encode(request).finish();
    const promise = this.rpc.request("cosmos.circuit.v1.Msg", "AuthorizeCircuitBreaker", data);
    return promise.then((data2) => import_tx.MsgAuthorizeCircuitBreakerResponse.decode(new import_binary.BinaryReader(data2)));
  }
  tripCircuitBreaker(request) {
    const data = import_tx.MsgTripCircuitBreaker.encode(request).finish();
    const promise = this.rpc.request("cosmos.circuit.v1.Msg", "TripCircuitBreaker", data);
    return promise.then((data2) => import_tx.MsgTripCircuitBreakerResponse.decode(new import_binary.BinaryReader(data2)));
  }
  resetCircuitBreaker(request) {
    const data = import_tx.MsgResetCircuitBreaker.encode(request).finish();
    const promise = this.rpc.request("cosmos.circuit.v1.Msg", "ResetCircuitBreaker", data);
    return promise.then((data2) => import_tx.MsgResetCircuitBreakerResponse.decode(new import_binary.BinaryReader(data2)));
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  MsgClientImpl
});
