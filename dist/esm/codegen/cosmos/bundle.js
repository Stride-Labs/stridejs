import * as _3 from "./auth/v1beta1/auth";
import * as _4 from "./auth/v1beta1/genesis";
import * as _5 from "./auth/v1beta1/query";
import * as _6 from "./authz/v1beta1/authz";
import * as _7 from "./authz/v1beta1/event";
import * as _8 from "./authz/v1beta1/genesis";
import * as _9 from "./authz/v1beta1/query";
import * as _10 from "./authz/v1beta1/tx";
import * as _11 from "./bank/v1beta1/authz";
import * as _12 from "./bank/v1beta1/bank";
import * as _13 from "./bank/v1beta1/genesis";
import * as _14 from "./bank/v1beta1/query";
import * as _15 from "./bank/v1beta1/tx";
import * as _16 from "./base/abci/v1beta1/abci";
import * as _17 from "./base/kv/v1beta1/kv";
import * as _18 from "./base/node/v1beta1/query";
import * as _19 from "./base/query/v1beta1/pagination";
import * as _20 from "./base/reflection/v1beta1/reflection";
import * as _21 from "./base/reflection/v2alpha1/reflection";
import * as _22 from "./base/snapshots/v1beta1/snapshot";
import * as _23 from "./base/store/v1beta1/commit_info";
import * as _24 from "./base/store/v1beta1/listening";
import * as _25 from "./base/tendermint/v1beta1/query";
import * as _26 from "./base/v1beta1/coin";
import * as _27 from "./capability/v1beta1/capability";
import * as _28 from "./capability/v1beta1/genesis";
import * as _29 from "./crisis/v1beta1/genesis";
import * as _30 from "./crisis/v1beta1/tx";
import * as _31 from "./crypto/ed25519/keys";
import * as _32 from "./crypto/multisig/keys";
import * as _33 from "./crypto/secp256k1/keys";
import * as _34 from "./crypto/secp256r1/keys";
import * as _35 from "./distribution/v1beta1/distribution";
import * as _36 from "./distribution/v1beta1/genesis";
import * as _37 from "./distribution/v1beta1/query";
import * as _38 from "./distribution/v1beta1/tx";
import * as _39 from "./evidence/v1beta1/evidence";
import * as _40 from "./evidence/v1beta1/genesis";
import * as _41 from "./evidence/v1beta1/query";
import * as _42 from "./evidence/v1beta1/tx";
import * as _43 from "./feegrant/v1beta1/feegrant";
import * as _44 from "./feegrant/v1beta1/genesis";
import * as _45 from "./feegrant/v1beta1/query";
import * as _46 from "./feegrant/v1beta1/tx";
import * as _47 from "./genutil/v1beta1/genesis";
import * as _48 from "./gov/v1beta1/genesis";
import * as _49 from "./gov/v1beta1/gov";
import * as _50 from "./gov/v1beta1/query";
import * as _51 from "./gov/v1beta1/tx";
import * as _52 from "./ics23/v1/proofs";
import * as _53 from "./mint/v1beta1/genesis";
import * as _54 from "./mint/v1beta1/mint";
import * as _55 from "./mint/v1beta1/query";
import * as _56 from "./msg/v1/msg";
import * as _57 from "./params/v1beta1/params";
import * as _58 from "./params/v1beta1/query";
import * as _59 from "./slashing/v1beta1/genesis";
import * as _60 from "./slashing/v1beta1/query";
import * as _61 from "./slashing/v1beta1/slashing";
import * as _62 from "./slashing/v1beta1/tx";
import * as _63 from "./staking/v1beta1/authz";
import * as _64 from "./staking/v1beta1/genesis";
import * as _65 from "./staking/v1beta1/lsm_tx";
import * as _66 from "./staking/v1beta1/query";
import * as _67 from "./staking/v1beta1/staking";
import * as _68 from "./staking/v1beta1/tx";
import * as _69 from "./tx/signing/v1beta1/signing";
import * as _70 from "./tx/v1beta1/service";
import * as _71 from "./tx/v1beta1/tx";
import * as _72 from "./upgrade/v1beta1/query";
import * as _73 from "./upgrade/v1beta1/upgrade";
import * as _74 from "./vesting/v1beta1/tx";
import * as _75 from "./vesting/v1beta1/vesting";
import * as _204 from "./authz/v1beta1/tx.amino";
import * as _205 from "./bank/v1beta1/tx.amino";
import * as _206 from "./crisis/v1beta1/tx.amino";
import * as _207 from "./distribution/v1beta1/tx.amino";
import * as _208 from "./evidence/v1beta1/tx.amino";
import * as _209 from "./feegrant/v1beta1/tx.amino";
import * as _210 from "./gov/v1beta1/tx.amino";
import * as _211 from "./slashing/v1beta1/tx.amino";
import * as _212 from "./staking/v1beta1/tx.amino";
import * as _213 from "./vesting/v1beta1/tx.amino";
import * as _214 from "./authz/v1beta1/tx.registry";
import * as _215 from "./bank/v1beta1/tx.registry";
import * as _216 from "./crisis/v1beta1/tx.registry";
import * as _217 from "./distribution/v1beta1/tx.registry";
import * as _218 from "./evidence/v1beta1/tx.registry";
import * as _219 from "./feegrant/v1beta1/tx.registry";
import * as _220 from "./gov/v1beta1/tx.registry";
import * as _221 from "./slashing/v1beta1/tx.registry";
import * as _222 from "./staking/v1beta1/tx.registry";
import * as _223 from "./vesting/v1beta1/tx.registry";
import * as _224 from "./auth/v1beta1/query.rpc.Query";
import * as _225 from "./authz/v1beta1/query.rpc.Query";
import * as _226 from "./bank/v1beta1/query.rpc.Query";
import * as _227 from "./base/node/v1beta1/query.rpc.Service";
import * as _228 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _229 from "./distribution/v1beta1/query.rpc.Query";
import * as _230 from "./evidence/v1beta1/query.rpc.Query";
import * as _231 from "./feegrant/v1beta1/query.rpc.Query";
import * as _232 from "./gov/v1beta1/query.rpc.Query";
import * as _233 from "./mint/v1beta1/query.rpc.Query";
import * as _234 from "./params/v1beta1/query.rpc.Query";
import * as _235 from "./slashing/v1beta1/query.rpc.Query";
import * as _236 from "./staking/v1beta1/query.rpc.Query";
import * as _237 from "./tx/v1beta1/service.rpc.Service";
import * as _238 from "./upgrade/v1beta1/query.rpc.Query";
import * as _239 from "./authz/v1beta1/tx.rpc.msg";
import * as _240 from "./bank/v1beta1/tx.rpc.msg";
import * as _241 from "./crisis/v1beta1/tx.rpc.msg";
import * as _242 from "./distribution/v1beta1/tx.rpc.msg";
import * as _243 from "./evidence/v1beta1/tx.rpc.msg";
import * as _244 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _245 from "./gov/v1beta1/tx.rpc.msg";
import * as _246 from "./slashing/v1beta1/tx.rpc.msg";
import * as _247 from "./staking/v1beta1/tx.rpc.msg";
import * as _248 from "./vesting/v1beta1/tx.rpc.msg";
import * as _315 from "./rpc.query";
import * as _316 from "./rpc.tx";
var cosmos;
((cosmos2) => {
  let auth;
  ((auth2) => {
    auth2.v1beta1 = {
      ..._3,
      ..._4,
      ..._5,
      ..._224
    };
  })(auth = cosmos2.auth || (cosmos2.auth = {}));
  let authz;
  ((authz2) => {
    authz2.v1beta1 = {
      ..._6,
      ..._7,
      ..._8,
      ..._9,
      ..._10,
      ..._204,
      ..._214,
      ..._225,
      ..._239
    };
  })(authz = cosmos2.authz || (cosmos2.authz = {}));
  let bank;
  ((bank2) => {
    bank2.v1beta1 = {
      ..._11,
      ..._12,
      ..._13,
      ..._14,
      ..._15,
      ..._205,
      ..._215,
      ..._226,
      ..._240
    };
  })(bank = cosmos2.bank || (cosmos2.bank = {}));
  let base;
  ((base2) => {
    let abci;
    ((abci2) => {
      abci2.v1beta1 = {
        ..._16
      };
    })(abci = base2.abci || (base2.abci = {}));
    let kv;
    ((kv2) => {
      kv2.v1beta1 = {
        ..._17
      };
    })(kv = base2.kv || (base2.kv = {}));
    let node;
    ((node2) => {
      node2.v1beta1 = {
        ..._18,
        ..._227
      };
    })(node = base2.node || (base2.node = {}));
    let query;
    ((query2) => {
      query2.v1beta1 = {
        ..._19
      };
    })(query = base2.query || (base2.query = {}));
    let reflection;
    ((reflection2) => {
      reflection2.v1beta1 = {
        ..._20
      };
      reflection2.v2alpha1 = {
        ..._21
      };
    })(reflection = base2.reflection || (base2.reflection = {}));
    let snapshots;
    ((snapshots2) => {
      snapshots2.v1beta1 = {
        ..._22
      };
    })(snapshots = base2.snapshots || (base2.snapshots = {}));
    let store;
    ((store2) => {
      store2.v1beta1 = {
        ..._23,
        ..._24
      };
    })(store = base2.store || (base2.store = {}));
    let tendermint;
    ((tendermint2) => {
      tendermint2.v1beta1 = {
        ..._25,
        ..._228
      };
    })(tendermint = base2.tendermint || (base2.tendermint = {}));
    base2.v1beta1 = {
      ..._26
    };
  })(base = cosmos2.base || (cosmos2.base = {}));
  let capability;
  ((capability2) => {
    capability2.v1beta1 = {
      ..._27,
      ..._28
    };
  })(capability = cosmos2.capability || (cosmos2.capability = {}));
  let crisis;
  ((crisis2) => {
    crisis2.v1beta1 = {
      ..._29,
      ..._30,
      ..._206,
      ..._216,
      ..._241
    };
  })(crisis = cosmos2.crisis || (cosmos2.crisis = {}));
  let crypto;
  ((crypto2) => {
    crypto2.ed25519 = {
      ..._31
    };
    crypto2.multisig = {
      ..._32
    };
    crypto2.secp256k1 = {
      ..._33
    };
    crypto2.secp256r1 = {
      ..._34
    };
  })(crypto = cosmos2.crypto || (cosmos2.crypto = {}));
  let distribution;
  ((distribution2) => {
    distribution2.v1beta1 = {
      ..._35,
      ..._36,
      ..._37,
      ..._38,
      ..._207,
      ..._217,
      ..._229,
      ..._242
    };
  })(distribution = cosmos2.distribution || (cosmos2.distribution = {}));
  let evidence;
  ((evidence2) => {
    evidence2.v1beta1 = {
      ..._39,
      ..._40,
      ..._41,
      ..._42,
      ..._208,
      ..._218,
      ..._230,
      ..._243
    };
  })(evidence = cosmos2.evidence || (cosmos2.evidence = {}));
  let feegrant;
  ((feegrant2) => {
    feegrant2.v1beta1 = {
      ..._43,
      ..._44,
      ..._45,
      ..._46,
      ..._209,
      ..._219,
      ..._231,
      ..._244
    };
  })(feegrant = cosmos2.feegrant || (cosmos2.feegrant = {}));
  let genutil;
  ((genutil2) => {
    genutil2.v1beta1 = {
      ..._47
    };
  })(genutil = cosmos2.genutil || (cosmos2.genutil = {}));
  let gov;
  ((gov2) => {
    gov2.v1beta1 = {
      ..._48,
      ..._49,
      ..._50,
      ..._51,
      ..._210,
      ..._220,
      ..._232,
      ..._245
    };
  })(gov = cosmos2.gov || (cosmos2.gov = {}));
  let ics23;
  ((ics232) => {
    ics232.v1 = {
      ..._52
    };
  })(ics23 = cosmos2.ics23 || (cosmos2.ics23 = {}));
  let mint;
  ((mint2) => {
    mint2.v1beta1 = {
      ..._53,
      ..._54,
      ..._55,
      ..._233
    };
  })(mint = cosmos2.mint || (cosmos2.mint = {}));
  let msg;
  ((msg2) => {
    msg2.v1 = {
      ..._56
    };
  })(msg = cosmos2.msg || (cosmos2.msg = {}));
  let params;
  ((params2) => {
    params2.v1beta1 = {
      ..._57,
      ..._58,
      ..._234
    };
  })(params = cosmos2.params || (cosmos2.params = {}));
  let slashing;
  ((slashing2) => {
    slashing2.v1beta1 = {
      ..._59,
      ..._60,
      ..._61,
      ..._62,
      ..._211,
      ..._221,
      ..._235,
      ..._246
    };
  })(slashing = cosmos2.slashing || (cosmos2.slashing = {}));
  let staking;
  ((staking2) => {
    staking2.v1beta1 = {
      ..._63,
      ..._64,
      ..._65,
      ..._66,
      ..._67,
      ..._68,
      ..._212,
      ..._222,
      ..._236,
      ..._247
    };
  })(staking = cosmos2.staking || (cosmos2.staking = {}));
  let tx;
  ((tx2) => {
    let signing;
    ((signing2) => {
      signing2.v1beta1 = {
        ..._69
      };
    })(signing = tx2.signing || (tx2.signing = {}));
    tx2.v1beta1 = {
      ..._70,
      ..._71,
      ..._237
    };
  })(tx = cosmos2.tx || (cosmos2.tx = {}));
  let upgrade;
  ((upgrade2) => {
    upgrade2.v1beta1 = {
      ..._72,
      ..._73,
      ..._238
    };
  })(upgrade = cosmos2.upgrade || (cosmos2.upgrade = {}));
  let vesting;
  ((vesting2) => {
    vesting2.v1beta1 = {
      ..._74,
      ..._75,
      ..._213,
      ..._223,
      ..._248
    };
  })(vesting = cosmos2.vesting || (cosmos2.vesting = {}));
  cosmos2.ClientFactory = {
    ..._315,
    ..._316
  };
})(cosmos || (cosmos = {}));
export {
  cosmos
};
