import * as _245 from "./abci/types";
import * as _246 from "./crypto/keys";
import * as _247 from "./crypto/proof";
import * as _248 from "./libs/bits/types";
import * as _249 from "./p2p/types";
import * as _250 from "./types/block";
import * as _251 from "./types/evidence";
import * as _252 from "./types/params";
import * as _253 from "./types/types";
import * as _254 from "./types/validator";
import * as _255 from "./version/types";
var tendermint;
((tendermint2) => {
  tendermint2.abci = {
    ..._245
  };
  tendermint2.crypto = {
    ..._246,
    ..._247
  };
  let libs;
  ((libs2) => {
    libs2.bits = {
      ..._248
    };
  })(libs = tendermint2.libs || (tendermint2.libs = {}));
  tendermint2.p2p = {
    ..._249
  };
  tendermint2.types = {
    ..._250,
    ..._251,
    ..._252,
    ..._253,
    ..._254
  };
  tendermint2.version = {
    ..._255
  };
})(tendermint || (tendermint = {}));
export {
  tendermint
};
