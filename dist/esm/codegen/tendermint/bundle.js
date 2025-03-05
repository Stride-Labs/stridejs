import * as _254 from "./abci/types";
import * as _255 from "./crypto/keys";
import * as _256 from "./crypto/proof";
import * as _257 from "./libs/bits/types";
import * as _258 from "./p2p/types";
import * as _259 from "./types/block";
import * as _260 from "./types/evidence";
import * as _261 from "./types/params";
import * as _262 from "./types/types";
import * as _263 from "./types/validator";
import * as _264 from "./version/types";
var tendermint;
((tendermint2) => {
  tendermint2.abci = {
    ..._254
  };
  tendermint2.crypto = {
    ..._255,
    ..._256
  };
  let libs;
  ((libs2) => {
    libs2.bits = {
      ..._257
    };
  })(libs = tendermint2.libs || (tendermint2.libs = {}));
  tendermint2.p2p = {
    ..._258
  };
  tendermint2.types = {
    ..._259,
    ..._260,
    ..._261,
    ..._262,
    ..._263
  };
  tendermint2.version = {
    ..._264
  };
})(tendermint || (tendermint = {}));
export {
  tendermint
};
