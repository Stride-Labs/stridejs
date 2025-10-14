import * as _269 from "./abci/types";
import * as _270 from "./crypto/keys";
import * as _271 from "./crypto/proof";
import * as _272 from "./libs/bits/types";
import * as _273 from "./p2p/types";
import * as _274 from "./types/block";
import * as _275 from "./types/evidence";
import * as _276 from "./types/params";
import * as _277 from "./types/types";
import * as _278 from "./types/validator";
import * as _279 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._269
  };
  export const crypto = {
    ..._270,
    ..._271
  };
  export namespace libs {
    export const bits = {
      ..._272
    };
  }
  export const p2p = {
    ..._273
  };
  export const types = {
    ..._274,
    ..._275,
    ..._276,
    ..._277,
    ..._278
  };
  export const version = {
    ..._279
  };
}