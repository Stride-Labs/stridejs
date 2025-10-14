import * as _140 from "./liquid/module/v1/module";
import * as _141 from "./liquid/v1beta1/genesis";
import * as _142 from "./liquid/v1beta1/liquid";
import * as _143 from "./liquid/v1beta1/lsm_tx";
import * as _144 from "./liquid/v1beta1/query";
import * as _145 from "./liquid/v1beta1/tx";
import * as _146 from "./metaprotocols/extensions";
import * as _361 from "./liquid/v1beta1/tx.amino";
import * as _362 from "./liquid/v1beta1/tx.registry";
import * as _363 from "./liquid/v1beta1/query.rpc.Query";
import * as _364 from "./liquid/v1beta1/tx.rpc.msg";
import * as _445 from "./rpc.query";
import * as _446 from "./rpc.tx";
var gaia;
((gaia2) => {
  let liquid;
  ((liquid2) => {
    let module;
    ((module2) => {
      module2.v1 = {
        ..._140
      };
    })(module = liquid2.module || (liquid2.module = {}));
    liquid2.v1beta1 = {
      ..._141,
      ..._142,
      ..._143,
      ..._144,
      ..._145,
      ..._361,
      ..._362,
      ..._363,
      ..._364
    };
  })(liquid = gaia2.liquid || (gaia2.liquid = {}));
  gaia2.metaprotocols = {
    ..._146
  };
  gaia2.ClientFactory = {
    ..._445,
    ..._446
  };
})(gaia || (gaia = {}));
export {
  gaia
};
