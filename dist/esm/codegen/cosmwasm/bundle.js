import * as _134 from "./wasm/v1/authz";
import * as _135 from "./wasm/v1/genesis";
import * as _136 from "./wasm/v1/ibc";
import * as _137 from "./wasm/v1/proposal_legacy";
import * as _138 from "./wasm/v1/query";
import * as _139 from "./wasm/v1/tx";
import * as _140 from "./wasm/v1/types";
import * as _350 from "./wasm/v1/tx.amino";
import * as _351 from "./wasm/v1/tx.registry";
import * as _352 from "./wasm/v1/query.rpc.Query";
import * as _353 from "./wasm/v1/tx.rpc.msg";
import * as _429 from "./rpc.query";
import * as _430 from "./rpc.tx";
var cosmwasm;
((cosmwasm2) => {
  let wasm;
  ((wasm2) => {
    wasm2.v1 = {
      ..._134,
      ..._135,
      ..._136,
      ..._137,
      ..._138,
      ..._139,
      ..._140,
      ..._350,
      ..._351,
      ..._352,
      ..._353
    };
  })(wasm = cosmwasm2.wasm || (cosmwasm2.wasm = {}));
  cosmwasm2.ClientFactory = {
    ..._429,
    ..._430
  };
})(cosmwasm || (cosmwasm = {}));
export {
  cosmwasm
};
