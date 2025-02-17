import * as _253 from "./abci/types";
import * as _254 from "./crypto/keys";
import * as _255 from "./crypto/proof";
import * as _256 from "./libs/bits/types";
import * as _257 from "./p2p/types";
import * as _258 from "./types/block";
import * as _259 from "./types/evidence";
import * as _260 from "./types/params";
import * as _261 from "./types/types";
import * as _262 from "./types/validator";
import * as _263 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._253
  };
  export const crypto = {
    ..._254,
    ..._255
  };
  export namespace libs {
    export const bits = {
      ..._256
    };
  }
  export const p2p = {
    ..._257
  };
  export const types = {
    ..._258,
    ..._259,
    ..._260,
    ..._261,
    ..._262
  };
  export const version = {
    ..._263
  };
}