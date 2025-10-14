import * as _133 from "./wasm/v1/authz";
import * as _134 from "./wasm/v1/genesis";
import * as _135 from "./wasm/v1/ibc";
import * as _136 from "./wasm/v1/proposal_legacy";
import * as _137 from "./wasm/v1/query";
import * as _138 from "./wasm/v1/tx";
import * as _139 from "./wasm/v1/types";
import * as _357 from "./wasm/v1/tx.amino";
import * as _358 from "./wasm/v1/tx.registry";
import * as _359 from "./wasm/v1/query.rpc.Query";
import * as _360 from "./wasm/v1/tx.rpc.msg";
import * as _443 from "./rpc.query";
import * as _444 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = {
      ..._133,
      ..._134,
      ..._135,
      ..._136,
      ..._137,
      ..._138,
      ..._139,
      ..._357,
      ..._358,
      ..._359,
      ..._360
    };
  }
  export const ClientFactory = {
    ..._443,
    ..._444
  };
}