import * as _134 from "./crypto/proof";
import * as _135 from "./crypto/keys";
import * as _136 from "./crypto/proof";
import * as _137 from "./abci/types";
import * as _138 from "./libs/bits/types";
import * as _139 from "./p2p/types";
import * as _140 from "./types/block";
import * as _141 from "./types/evidence";
import * as _142 from "./types/params";
import * as _143 from "./types/types";
import * as _144 from "./types/validator";
import * as _145 from "./version/types";
export namespace tendermint {
  export const crypto = { ..._134,
    ..._135,
    ..._136
  };
  export const abci = { ..._137
  };
  export namespace libs {
    export const bits = { ..._138
    };
  }
  export const p2p = { ..._139
  };
  export const types = { ..._140,
    ..._141,
    ..._142,
    ..._143,
    ..._144
  };
  export const version = { ..._145
  };
}