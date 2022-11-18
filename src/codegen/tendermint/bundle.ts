import * as _119 from "./abci/types";
import * as _120 from "./crypto/keys";
import * as _121 from "./crypto/proof";
import * as _122 from "./libs/bits/types";
import * as _123 from "./p2p/types";
import * as _124 from "./types/block";
import * as _125 from "./types/evidence";
import * as _126 from "./types/params";
import * as _127 from "./types/types";
import * as _128 from "./types/validator";
import * as _129 from "./version/types";
export namespace tendermint {
  export const abci = { ..._119
  };
  export const crypto = { ..._120,
    ..._121
  };
  export namespace libs {
    export const bits = { ..._122
    };
  }
  export const p2p = { ..._123
  };
  export const types = { ..._124,
    ..._125,
    ..._126,
    ..._127,
    ..._128
  };
  export const version = { ..._129
  };
}