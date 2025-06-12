import * as _135 from "./liquid/module/v1/module";
import * as _136 from "./liquid/v1beta1/genesis";
import * as _137 from "./liquid/v1beta1/liquid";
import * as _138 from "./liquid/v1beta1/lsm_tx";
import * as _139 from "./liquid/v1beta1/query";
import * as _140 from "./liquid/v1beta1/tx";
import * as _141 from "./metaprotocols/extensions";
import * as _348 from "./liquid/v1beta1/tx.amino";
import * as _349 from "./liquid/v1beta1/tx.registry";
import * as _350 from "./liquid/v1beta1/query.rpc.Query";
import * as _351 from "./liquid/v1beta1/tx.rpc.msg";
import * as _425 from "./rpc.query";
import * as _426 from "./rpc.tx";
export namespace gaia {
  export namespace liquid {
    export namespace module {
      export const v1 = {
        ..._135
      };
    }
    export const v1beta1 = {
      ..._136,
      ..._137,
      ..._138,
      ..._139,
      ..._140,
      ..._348,
      ..._349,
      ..._350,
      ..._351
    };
  }
  export const metaprotocols = {
    ..._141
  };
  export const ClientFactory = {
    ..._425,
    ..._426
  };
}