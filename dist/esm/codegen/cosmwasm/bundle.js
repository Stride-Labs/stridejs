import * as _129 from "./wasm/v1/authz";
import * as _130 from "./wasm/v1/genesis";
import * as _131 from "./wasm/v1/ibc";
import * as _132 from "./wasm/v1/proposal_legacy";
import * as _133 from "./wasm/v1/query";
import * as _134 from "./wasm/v1/tx";
import * as _135 from "./wasm/v1/types";
import * as _337 from "./wasm/v1/tx.amino";
import * as _338 from "./wasm/v1/tx.registry";
import * as _339 from "./wasm/v1/query.rpc.Query";
import * as _340 from "./wasm/v1/tx.rpc.msg";
import * as _409 from "./rpc.query";
import * as _410 from "./rpc.tx";
var cosmwasm;
((cosmwasm2) => {
  let wasm;
  ((wasm2) => {
    wasm2.v1 = {
      ..._129,
      ..._130,
      ..._131,
      ..._132,
      ..._133,
      ..._134,
      ..._135,
      ..._337,
      ..._338,
      ..._339,
      ..._340
    };
  })(wasm = cosmwasm2.wasm || (cosmwasm2.wasm = {}));
  cosmwasm2.ClientFactory = {
    ..._409,
    ..._410
  };
})(cosmwasm || (cosmwasm = {}));
export {
  cosmwasm
};
