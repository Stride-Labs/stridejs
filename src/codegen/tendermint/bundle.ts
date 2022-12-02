import * as _83 from "./abci/types";
import * as _84 from "./crypto/keys";
import * as _85 from "./crypto/proof";
import * as _86 from "./libs/bits/types";
import * as _87 from "./p2p/types";
import * as _88 from "./types/block";
import * as _89 from "./types/evidence";
import * as _90 from "./types/params";
import * as _91 from "./types/types";
import * as _92 from "./types/validator";
import * as _93 from "./version/types";
export namespace tendermint {
  export const abci = { ..._83
  };
  export const crypto = { ..._84,
    ..._85
  };
  export namespace libs {
    export const bits = { ..._86
    };
  }
  export const p2p = { ..._87
  };
  export const types = { ..._88,
    ..._89,
    ..._90,
    ..._91,
    ..._92
  };
  export const version = { ..._93
  };
}