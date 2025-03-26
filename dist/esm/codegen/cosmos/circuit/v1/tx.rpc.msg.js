import { BinaryReader } from "../../../binary";
import { MsgAuthorizeCircuitBreaker, MsgAuthorizeCircuitBreakerResponse, MsgTripCircuitBreaker, MsgTripCircuitBreakerResponse, MsgResetCircuitBreaker, MsgResetCircuitBreakerResponse } from "./tx";
class MsgClientImpl {
  rpc;
  constructor(rpc) {
    this.rpc = rpc;
    this.authorizeCircuitBreaker = this.authorizeCircuitBreaker.bind(this);
    this.tripCircuitBreaker = this.tripCircuitBreaker.bind(this);
    this.resetCircuitBreaker = this.resetCircuitBreaker.bind(this);
  }
  authorizeCircuitBreaker(request) {
    const data = MsgAuthorizeCircuitBreaker.encode(request).finish();
    const promise = this.rpc.request("cosmos.circuit.v1.Msg", "AuthorizeCircuitBreaker", data);
    return promise.then((data2) => MsgAuthorizeCircuitBreakerResponse.decode(new BinaryReader(data2)));
  }
  tripCircuitBreaker(request) {
    const data = MsgTripCircuitBreaker.encode(request).finish();
    const promise = this.rpc.request("cosmos.circuit.v1.Msg", "TripCircuitBreaker", data);
    return promise.then((data2) => MsgTripCircuitBreakerResponse.decode(new BinaryReader(data2)));
  }
  resetCircuitBreaker(request) {
    const data = MsgResetCircuitBreaker.encode(request).finish();
    const promise = this.rpc.request("cosmos.circuit.v1.Msg", "ResetCircuitBreaker", data);
    return promise.then((data2) => MsgResetCircuitBreakerResponse.decode(new BinaryReader(data2)));
  }
}
export {
  MsgClientImpl
};
