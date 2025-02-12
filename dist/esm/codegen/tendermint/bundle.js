import * as _246 from "./abci/types";
import * as _247 from "./crypto/keys";
import * as _248 from "./crypto/proof";
import * as _249 from "./libs/bits/types";
import * as _250 from "./p2p/types";
import * as _251 from "./types/block";
import * as _252 from "./types/evidence";
import * as _253 from "./types/params";
import * as _254 from "./types/types";
import * as _255 from "./types/validator";
import * as _256 from "./version/types";
var tendermint;
((tendermint2) => {
  tendermint2.abci = {
    ..._246
  };
  tendermint2.crypto = {
    ..._247,
    ..._248
  };
  let libs;
  ((libs2) => {
    libs2.bits = {
      ..._249
    };
  })(libs = tendermint2.libs || (tendermint2.libs = {}));
  tendermint2.p2p = {
    ..._250
  };
  tendermint2.types = {
    ..._251,
    ..._252,
    ..._253,
    ..._254,
    ..._255
  };
  tendermint2.version = {
    ..._256
  };
})(tendermint || (tendermint = {}));
export {
  tendermint
};
