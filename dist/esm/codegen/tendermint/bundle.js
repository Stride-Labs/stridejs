import * as _262 from "./abci/types";
import * as _263 from "./crypto/keys";
import * as _264 from "./crypto/proof";
import * as _265 from "./libs/bits/types";
import * as _266 from "./p2p/types";
import * as _267 from "./types/block";
import * as _268 from "./types/evidence";
import * as _269 from "./types/params";
import * as _270 from "./types/types";
import * as _271 from "./types/validator";
import * as _272 from "./version/types";
var tendermint;
((tendermint2) => {
  tendermint2.abci = {
    ..._262
  };
  tendermint2.crypto = {
    ..._263,
    ..._264
  };
  let libs;
  ((libs2) => {
    libs2.bits = {
      ..._265
    };
  })(libs = tendermint2.libs || (tendermint2.libs = {}));
  tendermint2.p2p = {
    ..._266
  };
  tendermint2.types = {
    ..._267,
    ..._268,
    ..._269,
    ..._270,
    ..._271
  };
  tendermint2.version = {
    ..._272
  };
})(tendermint || (tendermint = {}));
export {
  tendermint
};
