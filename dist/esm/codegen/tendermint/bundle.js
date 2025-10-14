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
var tendermint;
((tendermint2) => {
  tendermint2.abci = {
    ..._269
  };
  tendermint2.crypto = {
    ..._270,
    ..._271
  };
  let libs;
  ((libs2) => {
    libs2.bits = {
      ..._272
    };
  })(libs = tendermint2.libs || (tendermint2.libs = {}));
  tendermint2.p2p = {
    ..._273
  };
  tendermint2.types = {
    ..._274,
    ..._275,
    ..._276,
    ..._277,
    ..._278
  };
  tendermint2.version = {
    ..._279
  };
})(tendermint || (tendermint = {}));
export {
  tendermint
};
