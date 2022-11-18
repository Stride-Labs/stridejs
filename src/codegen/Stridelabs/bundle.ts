import * as _0 from "../claim/v1beta1/claim";
import * as _1 from "../claim/v1beta1/genesis";
import * as _2 from "../claim/v1beta1/params";
import * as _3 from "../claim/v1beta1/query";
import * as _4 from "../claim/v1beta1/tx";
import * as _5 from "../vesting/tx";
import * as _6 from "../vesting/vesting";
import * as _130 from "../claim/v1beta1/tx.amino";
import * as _131 from "../claim/v1beta1/tx.registry";
import * as _132 from "../claim/v1beta1/query.lcd";
import * as _133 from "../claim/v1beta1/query.rpc.query";
import * as _134 from "../claim/v1beta1/tx.rpc.msg";
import * as _209 from "./lcd";
import * as _210 from "./rpc.query";
import * as _211 from "./rpc.tx";
export namespace Stridelabs {
  export namespace stride {
    export namespace claim {
      export const v1beta1 = { ..._0,
        ..._1,
        ..._2,
        ..._3,
        ..._4,
        ..._130,
        ..._131,
        ..._132,
        ..._133,
        ..._134
      };
    }
    export const vesting = { ..._5,
      ..._6
    };
  }
  export const ClientFactory = { ..._209,
    ..._210,
    ..._211
  };
}