import * as _0 from "../claim/v1beta1/claim";
import * as _1 from "../claim/v1beta1/genesis";
import * as _2 from "../claim/v1beta1/params";
import * as _3 from "../claim/v1beta1/query";
import * as _4 from "../claim/v1beta1/tx";
import * as _5 from "../vesting/tx";
import * as _6 from "../vesting/vesting";
import * as _126 from "../claim/v1beta1/tx.amino";
import * as _127 from "../claim/v1beta1/tx.registry";
import * as _128 from "../claim/v1beta1/query.rpc.Query";
import * as _129 from "../claim/v1beta1/tx.rpc.msg";
import * as _185 from "./rpc.query";
import * as _186 from "./rpc.tx";
export namespace Stridelabs {
  export namespace stride {
    export namespace claim {
      export const v1beta1 = { ..._0,
        ..._1,
        ..._2,
        ..._3,
        ..._4,
        ..._126,
        ..._127,
        ..._128,
        ..._129
      };
    }
    export const vesting = { ..._5,
      ..._6
    };
  }
  export const ClientFactory = { ..._185,
    ..._186
  };
}