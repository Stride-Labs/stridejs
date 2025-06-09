import * as _128 from "./wasm/v1/authz";
import * as _129 from "./wasm/v1/genesis";
import * as _130 from "./wasm/v1/ibc";
import * as _131 from "./wasm/v1/proposal_legacy";
import * as _132 from "./wasm/v1/query";
import * as _133 from "./wasm/v1/tx";
import * as _134 from "./wasm/v1/types";
import * as _338 from "./wasm/v1/tx.amino";
import * as _339 from "./wasm/v1/tx.registry";
import * as _340 from "./wasm/v1/query.rpc.Query";
import * as _341 from "./wasm/v1/tx.rpc.msg";
import * as _413 from "./rpc.query";
import * as _414 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = {
      ..._128,
      ..._129,
      ..._130,
      ..._131,
      ..._132,
      ..._133,
      ..._134,
      ..._338,
      ..._339,
      ..._340,
      ..._341
    };
  }
  export const ClientFactory = {
    ..._413,
    ..._414
  };
}