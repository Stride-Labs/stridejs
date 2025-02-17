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
var tendermint;
((tendermint2) => {
  tendermint2.abci = {
    ..._253
  };
  tendermint2.crypto = {
    ..._254,
    ..._255
  };
  let libs;
  ((libs2) => {
    libs2.bits = {
      ..._256
    };
  })(libs = tendermint2.libs || (tendermint2.libs = {}));
  tendermint2.p2p = {
    ..._257
  };
  tendermint2.types = {
    ..._258,
    ..._259,
    ..._260,
    ..._261,
    ..._262
  };
  tendermint2.version = {
    ..._263
  };
})(tendermint || (tendermint = {}));
export {
  tendermint
};
