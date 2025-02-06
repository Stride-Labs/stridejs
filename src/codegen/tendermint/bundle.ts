import * as _193 from "./abci/types";
import * as _194 from "./crypto/keys";
import * as _195 from "./crypto/proof";
import * as _196 from "./libs/bits/types";
import * as _197 from "./p2p/types";
import * as _198 from "./types/block";
import * as _199 from "./types/evidence";
import * as _200 from "./types/params";
import * as _201 from "./types/types";
import * as _202 from "./types/validator";
import * as _203 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._193
  };
  export const crypto = {
    ..._194,
    ..._195
  };
  export namespace libs {
    export const bits = {
      ..._196
    };
  }
  export const p2p = {
    ..._197
  };
  export const types = {
    ..._198,
    ..._199,
    ..._200,
    ..._201,
    ..._202
  };
  export const version = {
    ..._203
  };
}