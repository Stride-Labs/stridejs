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
var tendermint;
((tendermint2) => {
  tendermint2.abci = {
    ..._193
  };
  tendermint2.crypto = {
    ..._194,
    ..._195
  };
  let libs;
  ((libs2) => {
    libs2.bits = {
      ..._196
    };
  })(libs = tendermint2.libs || (tendermint2.libs = {}));
  tendermint2.p2p = {
    ..._197
  };
  tendermint2.types = {
    ..._198,
    ..._199,
    ..._200,
    ..._201,
    ..._202
  };
  tendermint2.version = {
    ..._203
  };
})(tendermint || (tendermint = {}));
export {
  tendermint
};
