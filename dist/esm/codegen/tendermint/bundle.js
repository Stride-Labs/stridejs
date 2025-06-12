import * as _260 from "./abci/types";
import * as _261 from "./crypto/keys";
import * as _262 from "./crypto/proof";
import * as _263 from "./libs/bits/types";
import * as _264 from "./p2p/types";
import * as _265 from "./types/block";
import * as _266 from "./types/evidence";
import * as _267 from "./types/params";
import * as _268 from "./types/types";
import * as _269 from "./types/validator";
import * as _270 from "./version/types";
var tendermint;
((tendermint2) => {
  tendermint2.abci = {
    ..._260
  };
  tendermint2.crypto = {
    ..._261,
    ..._262
  };
  let libs;
  ((libs2) => {
    libs2.bits = {
      ..._263
    };
  })(libs = tendermint2.libs || (tendermint2.libs = {}));
  tendermint2.p2p = {
    ..._264
  };
  tendermint2.types = {
    ..._265,
    ..._266,
    ..._267,
    ..._268,
    ..._269
  };
  tendermint2.version = {
    ..._270
  };
})(tendermint || (tendermint = {}));
export {
  tendermint
};
