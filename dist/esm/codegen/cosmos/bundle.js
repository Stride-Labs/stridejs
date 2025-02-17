import * as _2 from "./app/runtime/v1alpha1/module";
import * as _3 from "./app/v1alpha1/config";
import * as _4 from "./app/v1alpha1/module";
import * as _5 from "./app/v1alpha1/query";
import * as _6 from "./auth/module/v1/module";
import * as _7 from "./auth/v1beta1/auth";
import * as _8 from "./auth/v1beta1/genesis";
import * as _9 from "./auth/v1beta1/query";
import * as _10 from "./auth/v1beta1/tx";
import * as _11 from "./authz/module/v1/module";
import * as _12 from "./authz/v1beta1/authz";
import * as _13 from "./authz/v1beta1/event";
import * as _14 from "./authz/v1beta1/genesis";
import * as _15 from "./authz/v1beta1/query";
import * as _16 from "./authz/v1beta1/tx";
import * as _17 from "./autocli/v1/options";
import * as _18 from "./autocli/v1/query";
import * as _19 from "./bank/module/v1/module";
import * as _20 from "./bank/v1beta1/authz";
import * as _21 from "./bank/v1beta1/bank";
import * as _22 from "./bank/v1beta1/genesis";
import * as _23 from "./bank/v1beta1/query";
import * as _24 from "./bank/v1beta1/tx";
import * as _25 from "./base/abci/v1beta1/abci";
import * as _26 from "./base/kv/v1beta1/kv";
import * as _27 from "./base/node/v1beta1/query";
import * as _28 from "./base/query/v1beta1/pagination";
import * as _29 from "./base/reflection/v1beta1/reflection";
import * as _30 from "./base/reflection/v2alpha1/reflection";
import * as _31 from "./base/snapshots/v1beta1/snapshot";
import * as _32 from "./base/store/v1beta1/commit_info";
import * as _33 from "./base/store/v1beta1/listening";
import * as _34 from "./base/tendermint/v1beta1/query";
import * as _35 from "./base/tendermint/v1beta1/types";
import * as _36 from "./base/v1beta1/coin";
import * as _37 from "./capability/module/v1/module";
import * as _38 from "./capability/v1beta1/capability";
import * as _39 from "./capability/v1beta1/genesis";
import * as _40 from "./consensus/module/v1/module";
import * as _41 from "./consensus/v1/query";
import * as _42 from "./consensus/v1/tx";
import * as _43 from "./crisis/module/v1/module";
import * as _44 from "./crisis/v1beta1/genesis";
import * as _45 from "./crisis/v1beta1/tx";
import * as _46 from "./crypto/ed25519/keys";
import * as _47 from "./crypto/hd/v1/hd";
import * as _48 from "./crypto/keyring/v1/record";
import * as _49 from "./crypto/multisig/keys";
import * as _50 from "./crypto/secp256k1/keys";
import * as _51 from "./crypto/secp256r1/keys";
import * as _52 from "./distribution/module/v1/module";
import * as _53 from "./distribution/v1beta1/distribution";
import * as _54 from "./distribution/v1beta1/genesis";
import * as _55 from "./distribution/v1beta1/query";
import * as _56 from "./distribution/v1beta1/tx";
import * as _57 from "./evidence/module/v1/module";
import * as _58 from "./evidence/v1beta1/evidence";
import * as _59 from "./evidence/v1beta1/genesis";
import * as _60 from "./evidence/v1beta1/query";
import * as _61 from "./evidence/v1beta1/tx";
import * as _62 from "./feegrant/module/v1/module";
import * as _63 from "./feegrant/v1beta1/feegrant";
import * as _64 from "./feegrant/v1beta1/genesis";
import * as _65 from "./feegrant/v1beta1/query";
import * as _66 from "./feegrant/v1beta1/tx";
import * as _67 from "./genutil/module/v1/module";
import * as _68 from "./genutil/v1beta1/genesis";
import * as _69 from "./gov/module/v1/module";
import * as _70 from "./gov/v1/genesis";
import * as _71 from "./gov/v1/gov";
import * as _72 from "./gov/v1/query";
import * as _73 from "./gov/v1/tx";
import * as _74 from "./gov/v1beta1/genesis";
import * as _75 from "./gov/v1beta1/gov";
import * as _76 from "./gov/v1beta1/query";
import * as _77 from "./gov/v1beta1/tx";
import * as _78 from "./group/module/v1/module";
import * as _79 from "./group/v1/events";
import * as _80 from "./group/v1/genesis";
import * as _81 from "./group/v1/query";
import * as _82 from "./group/v1/tx";
import * as _83 from "./group/v1/types";
import * as _84 from "./ics23/v1/proofs";
import * as _85 from "./mint/module/v1/module";
import * as _86 from "./mint/v1beta1/genesis";
import * as _87 from "./mint/v1beta1/mint";
import * as _88 from "./mint/v1beta1/query";
import * as _89 from "./mint/v1beta1/tx";
import * as _90 from "./msg/v1/msg";
import * as _91 from "./nft/module/v1/module";
import * as _92 from "./nft/v1beta1/event";
import * as _93 from "./nft/v1beta1/genesis";
import * as _94 from "./nft/v1beta1/nft";
import * as _95 from "./nft/v1beta1/query";
import * as _96 from "./nft/v1beta1/tx";
import * as _97 from "./orm/module/v1alpha1/module";
import * as _98 from "./orm/query/v1alpha1/query";
import * as _99 from "./orm/v1/orm";
import * as _100 from "./orm/v1alpha1/schema";
import * as _101 from "./params/module/v1/module";
import * as _102 from "./params/v1beta1/params";
import * as _103 from "./params/v1beta1/query";
import * as _104 from "./query/v1/query";
import * as _105 from "./reflection/v1/reflection";
import * as _106 from "./slashing/module/v1/module";
import * as _107 from "./slashing/v1beta1/genesis";
import * as _108 from "./slashing/v1beta1/query";
import * as _109 from "./slashing/v1beta1/slashing";
import * as _110 from "./slashing/v1beta1/tx";
import * as _111 from "./staking/module/v1/module";
import * as _112 from "./staking/v1beta1/authz";
import * as _113 from "./staking/v1beta1/genesis";
import * as _114 from "./staking/v1beta1/lsm_tx";
import * as _115 from "./staking/v1beta1/query";
import * as _116 from "./staking/v1beta1/staking";
import * as _117 from "./staking/v1beta1/tx";
import * as _118 from "./tx/config/v1/config";
import * as _119 from "./tx/signing/v1beta1/signing";
import * as _120 from "./tx/v1beta1/service";
import * as _121 from "./tx/v1beta1/tx";
import * as _122 from "./upgrade/module/v1/module";
import * as _123 from "./upgrade/v1beta1/query";
import * as _124 from "./upgrade/v1beta1/tx";
import * as _125 from "./upgrade/v1beta1/upgrade";
import * as _126 from "./vesting/module/v1/module";
import * as _127 from "./vesting/v1beta1/tx";
import * as _128 from "./vesting/v1beta1/vesting";
import * as _264 from "./auth/v1beta1/tx.amino";
import * as _265 from "./authz/v1beta1/tx.amino";
import * as _266 from "./bank/v1beta1/tx.amino";
import * as _267 from "./consensus/v1/tx.amino";
import * as _268 from "./crisis/v1beta1/tx.amino";
import * as _269 from "./distribution/v1beta1/tx.amino";
import * as _270 from "./evidence/v1beta1/tx.amino";
import * as _271 from "./feegrant/v1beta1/tx.amino";
import * as _272 from "./gov/v1/tx.amino";
import * as _273 from "./gov/v1beta1/tx.amino";
import * as _274 from "./group/v1/tx.amino";
import * as _275 from "./mint/v1beta1/tx.amino";
import * as _276 from "./nft/v1beta1/tx.amino";
import * as _277 from "./slashing/v1beta1/tx.amino";
import * as _278 from "./staking/v1beta1/tx.amino";
import * as _279 from "./upgrade/v1beta1/tx.amino";
import * as _280 from "./vesting/v1beta1/tx.amino";
import * as _281 from "./auth/v1beta1/tx.registry";
import * as _282 from "./authz/v1beta1/tx.registry";
import * as _283 from "./bank/v1beta1/tx.registry";
import * as _284 from "./consensus/v1/tx.registry";
import * as _285 from "./crisis/v1beta1/tx.registry";
import * as _286 from "./distribution/v1beta1/tx.registry";
import * as _287 from "./evidence/v1beta1/tx.registry";
import * as _288 from "./feegrant/v1beta1/tx.registry";
import * as _289 from "./gov/v1/tx.registry";
import * as _290 from "./gov/v1beta1/tx.registry";
import * as _291 from "./group/v1/tx.registry";
import * as _292 from "./mint/v1beta1/tx.registry";
import * as _293 from "./nft/v1beta1/tx.registry";
import * as _294 from "./slashing/v1beta1/tx.registry";
import * as _295 from "./staking/v1beta1/tx.registry";
import * as _296 from "./upgrade/v1beta1/tx.registry";
import * as _297 from "./vesting/v1beta1/tx.registry";
import * as _298 from "./app/v1alpha1/query.rpc.Query";
import * as _299 from "./auth/v1beta1/query.rpc.Query";
import * as _300 from "./authz/v1beta1/query.rpc.Query";
import * as _301 from "./autocli/v1/query.rpc.Query";
import * as _302 from "./bank/v1beta1/query.rpc.Query";
import * as _303 from "./base/node/v1beta1/query.rpc.Service";
import * as _304 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _305 from "./consensus/v1/query.rpc.Query";
import * as _306 from "./distribution/v1beta1/query.rpc.Query";
import * as _307 from "./evidence/v1beta1/query.rpc.Query";
import * as _308 from "./feegrant/v1beta1/query.rpc.Query";
import * as _309 from "./gov/v1/query.rpc.Query";
import * as _310 from "./gov/v1beta1/query.rpc.Query";
import * as _311 from "./group/v1/query.rpc.Query";
import * as _312 from "./mint/v1beta1/query.rpc.Query";
import * as _313 from "./nft/v1beta1/query.rpc.Query";
import * as _314 from "./orm/query/v1alpha1/query.rpc.Query";
import * as _315 from "./params/v1beta1/query.rpc.Query";
import * as _316 from "./slashing/v1beta1/query.rpc.Query";
import * as _317 from "./staking/v1beta1/query.rpc.Query";
import * as _318 from "./tx/v1beta1/service.rpc.Service";
import * as _319 from "./upgrade/v1beta1/query.rpc.Query";
import * as _320 from "./auth/v1beta1/tx.rpc.msg";
import * as _321 from "./authz/v1beta1/tx.rpc.msg";
import * as _322 from "./bank/v1beta1/tx.rpc.msg";
import * as _323 from "./consensus/v1/tx.rpc.msg";
import * as _324 from "./crisis/v1beta1/tx.rpc.msg";
import * as _325 from "./distribution/v1beta1/tx.rpc.msg";
import * as _326 from "./evidence/v1beta1/tx.rpc.msg";
import * as _327 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _328 from "./gov/v1/tx.rpc.msg";
import * as _329 from "./gov/v1beta1/tx.rpc.msg";
import * as _330 from "./group/v1/tx.rpc.msg";
import * as _331 from "./mint/v1beta1/tx.rpc.msg";
import * as _332 from "./nft/v1beta1/tx.rpc.msg";
import * as _333 from "./slashing/v1beta1/tx.rpc.msg";
import * as _334 from "./staking/v1beta1/tx.rpc.msg";
import * as _335 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _336 from "./vesting/v1beta1/tx.rpc.msg";
import * as _407 from "./rpc.query";
import * as _408 from "./rpc.tx";
var cosmos;
((cosmos2) => {
  let app;
  ((app2) => {
    let runtime;
    ((runtime2) => {
      runtime2.v1alpha1 = {
        ..._2
      };
    })(runtime = app2.runtime || (app2.runtime = {}));
    app2.v1alpha1 = {
      ..._3,
      ..._4,
      ..._5,
      ..._298
    };
  })(app = cosmos2.app || (cosmos2.app = {}));
  let auth;
  ((auth2) => {
    let module;
    ((module2) => {
      module2.v1 = {
        ..._6
      };
    })(module = auth2.module || (auth2.module = {}));
    auth2.v1beta1 = {
      ..._7,
      ..._8,
      ..._9,
      ..._10,
      ..._264,
      ..._281,
      ..._299,
      ..._320
    };
  })(auth = cosmos2.auth || (cosmos2.auth = {}));
  let authz;
  ((authz2) => {
    let module;
    ((module2) => {
      module2.v1 = {
        ..._11
      };
    })(module = authz2.module || (authz2.module = {}));
    authz2.v1beta1 = {
      ..._12,
      ..._13,
      ..._14,
      ..._15,
      ..._16,
      ..._265,
      ..._282,
      ..._300,
      ..._321
    };
  })(authz = cosmos2.authz || (cosmos2.authz = {}));
  let autocli;
  ((autocli2) => {
    autocli2.v1 = {
      ..._17,
      ..._18,
      ..._301
    };
  })(autocli = cosmos2.autocli || (cosmos2.autocli = {}));
  let bank;
  ((bank2) => {
    let module;
    ((module2) => {
      module2.v1 = {
        ..._19
      };
    })(module = bank2.module || (bank2.module = {}));
    bank2.v1beta1 = {
      ..._20,
      ..._21,
      ..._22,
      ..._23,
      ..._24,
      ..._266,
      ..._283,
      ..._302,
      ..._322
    };
  })(bank = cosmos2.bank || (cosmos2.bank = {}));
  let base;
  ((base2) => {
    let abci;
    ((abci2) => {
      abci2.v1beta1 = {
        ..._25
      };
    })(abci = base2.abci || (base2.abci = {}));
    let kv;
    ((kv2) => {
      kv2.v1beta1 = {
        ..._26
      };
    })(kv = base2.kv || (base2.kv = {}));
    let node;
    ((node2) => {
      node2.v1beta1 = {
        ..._27,
        ..._303
      };
    })(node = base2.node || (base2.node = {}));
    let query2;
    ((query3) => {
      query3.v1beta1 = {
        ..._28
      };
    })(query2 = base2.query || (base2.query = {}));
    let reflection2;
    ((reflection3) => {
      reflection3.v1beta1 = {
        ..._29
      };
      reflection3.v2alpha1 = {
        ..._30
      };
    })(reflection2 = base2.reflection || (base2.reflection = {}));
    let snapshots;
    ((snapshots2) => {
      snapshots2.v1beta1 = {
        ..._31
      };
    })(snapshots = base2.snapshots || (base2.snapshots = {}));
    let store;
    ((store2) => {
      store2.v1beta1 = {
        ..._32,
        ..._33
      };
    })(store = base2.store || (base2.store = {}));
    let tendermint;
    ((tendermint2) => {
      tendermint2.v1beta1 = {
        ..._34,
        ..._35,
        ..._304
      };
    })(tendermint = base2.tendermint || (base2.tendermint = {}));
    base2.v1beta1 = {
      ..._36
    };
  })(base = cosmos2.base || (cosmos2.base = {}));
  let capability;
  ((capability2) => {
    let module;
    ((module2) => {
      module2.v1 = {
        ..._37
      };
    })(module = capability2.module || (capability2.module = {}));
    capability2.v1beta1 = {
      ..._38,
      ..._39
    };
  })(capability = cosmos2.capability || (cosmos2.capability = {}));
  let consensus;
  ((consensus2) => {
    let module;
    ((module2) => {
      module2.v1 = {
        ..._40
      };
    })(module = consensus2.module || (consensus2.module = {}));
    consensus2.v1 = {
      ..._41,
      ..._42,
      ..._267,
      ..._284,
      ..._305,
      ..._323
    };
  })(consensus = cosmos2.consensus || (cosmos2.consensus = {}));
  let crisis;
  ((crisis2) => {
    let module;
    ((module2) => {
      module2.v1 = {
        ..._43
      };
    })(module = crisis2.module || (crisis2.module = {}));
    crisis2.v1beta1 = {
      ..._44,
      ..._45,
      ..._268,
      ..._285,
      ..._324
    };
  })(crisis = cosmos2.crisis || (cosmos2.crisis = {}));
  let crypto;
  ((crypto2) => {
    crypto2.ed25519 = {
      ..._46
    };
    let hd;
    ((hd2) => {
      hd2.v1 = {
        ..._47
      };
    })(hd = crypto2.hd || (crypto2.hd = {}));
    let keyring;
    ((keyring2) => {
      keyring2.v1 = {
        ..._48
      };
    })(keyring = crypto2.keyring || (crypto2.keyring = {}));
    crypto2.multisig = {
      ..._49
    };
    crypto2.secp256k1 = {
      ..._50
    };
    crypto2.secp256r1 = {
      ..._51
    };
  })(crypto = cosmos2.crypto || (cosmos2.crypto = {}));
  let distribution;
  ((distribution2) => {
    let module;
    ((module2) => {
      module2.v1 = {
        ..._52
      };
    })(module = distribution2.module || (distribution2.module = {}));
    distribution2.v1beta1 = {
      ..._53,
      ..._54,
      ..._55,
      ..._56,
      ..._269,
      ..._286,
      ..._306,
      ..._325
    };
  })(distribution = cosmos2.distribution || (cosmos2.distribution = {}));
  let evidence;
  ((evidence2) => {
    let module;
    ((module2) => {
      module2.v1 = {
        ..._57
      };
    })(module = evidence2.module || (evidence2.module = {}));
    evidence2.v1beta1 = {
      ..._58,
      ..._59,
      ..._60,
      ..._61,
      ..._270,
      ..._287,
      ..._307,
      ..._326
    };
  })(evidence = cosmos2.evidence || (cosmos2.evidence = {}));
  let feegrant;
  ((feegrant2) => {
    let module;
    ((module2) => {
      module2.v1 = {
        ..._62
      };
    })(module = feegrant2.module || (feegrant2.module = {}));
    feegrant2.v1beta1 = {
      ..._63,
      ..._64,
      ..._65,
      ..._66,
      ..._271,
      ..._288,
      ..._308,
      ..._327
    };
  })(feegrant = cosmos2.feegrant || (cosmos2.feegrant = {}));
  let genutil;
  ((genutil2) => {
    let module;
    ((module2) => {
      module2.v1 = {
        ..._67
      };
    })(module = genutil2.module || (genutil2.module = {}));
    genutil2.v1beta1 = {
      ..._68
    };
  })(genutil = cosmos2.genutil || (cosmos2.genutil = {}));
  let gov;
  ((gov2) => {
    let module;
    ((module2) => {
      module2.v1 = {
        ..._69
      };
    })(module = gov2.module || (gov2.module = {}));
    gov2.v1 = {
      ..._70,
      ..._71,
      ..._72,
      ..._73,
      ..._272,
      ..._289,
      ..._309,
      ..._328
    };
    gov2.v1beta1 = {
      ..._74,
      ..._75,
      ..._76,
      ..._77,
      ..._273,
      ..._290,
      ..._310,
      ..._329
    };
  })(gov = cosmos2.gov || (cosmos2.gov = {}));
  let group;
  ((group2) => {
    let module;
    ((module2) => {
      module2.v1 = {
        ..._78
      };
    })(module = group2.module || (group2.module = {}));
    group2.v1 = {
      ..._79,
      ..._80,
      ..._81,
      ..._82,
      ..._83,
      ..._274,
      ..._291,
      ..._311,
      ..._330
    };
  })(group = cosmos2.group || (cosmos2.group = {}));
  let ics23;
  ((ics232) => {
    ics232.v1 = {
      ..._84
    };
  })(ics23 = cosmos2.ics23 || (cosmos2.ics23 = {}));
  let mint;
  ((mint2) => {
    let module;
    ((module2) => {
      module2.v1 = {
        ..._85
      };
    })(module = mint2.module || (mint2.module = {}));
    mint2.v1beta1 = {
      ..._86,
      ..._87,
      ..._88,
      ..._89,
      ..._275,
      ..._292,
      ..._312,
      ..._331
    };
  })(mint = cosmos2.mint || (cosmos2.mint = {}));
  let msg;
  ((msg2) => {
    msg2.v1 = {
      ..._90
    };
  })(msg = cosmos2.msg || (cosmos2.msg = {}));
  let nft;
  ((nft2) => {
    let module;
    ((module2) => {
      module2.v1 = {
        ..._91
      };
    })(module = nft2.module || (nft2.module = {}));
    nft2.v1beta1 = {
      ..._92,
      ..._93,
      ..._94,
      ..._95,
      ..._96,
      ..._276,
      ..._293,
      ..._313,
      ..._332
    };
  })(nft = cosmos2.nft || (cosmos2.nft = {}));
  let orm;
  ((orm2) => {
    let module;
    ((module2) => {
      module2.v1alpha1 = {
        ..._97
      };
    })(module = orm2.module || (orm2.module = {}));
    let query2;
    ((query3) => {
      query3.v1alpha1 = {
        ..._98,
        ..._314
      };
    })(query2 = orm2.query || (orm2.query = {}));
    orm2.v1 = {
      ..._99
    };
    orm2.v1alpha1 = {
      ..._100
    };
  })(orm = cosmos2.orm || (cosmos2.orm = {}));
  let params;
  ((params2) => {
    let module;
    ((module2) => {
      module2.v1 = {
        ..._101
      };
    })(module = params2.module || (params2.module = {}));
    params2.v1beta1 = {
      ..._102,
      ..._103,
      ..._315
    };
  })(params = cosmos2.params || (cosmos2.params = {}));
  let query;
  ((query2) => {
    query2.v1 = {
      ..._104
    };
  })(query = cosmos2.query || (cosmos2.query = {}));
  let reflection;
  ((reflection2) => {
    reflection2.v1 = {
      ..._105
    };
  })(reflection = cosmos2.reflection || (cosmos2.reflection = {}));
  let slashing;
  ((slashing2) => {
    let module;
    ((module2) => {
      module2.v1 = {
        ..._106
      };
    })(module = slashing2.module || (slashing2.module = {}));
    slashing2.v1beta1 = {
      ..._107,
      ..._108,
      ..._109,
      ..._110,
      ..._277,
      ..._294,
      ..._316,
      ..._333
    };
  })(slashing = cosmos2.slashing || (cosmos2.slashing = {}));
  let staking;
  ((staking2) => {
    let module;
    ((module2) => {
      module2.v1 = {
        ..._111
      };
    })(module = staking2.module || (staking2.module = {}));
    staking2.v1beta1 = {
      ..._112,
      ..._113,
      ..._114,
      ..._115,
      ..._116,
      ..._117,
      ..._278,
      ..._295,
      ..._317,
      ..._334
    };
  })(staking = cosmos2.staking || (cosmos2.staking = {}));
  let tx;
  ((tx2) => {
    let config;
    ((config2) => {
      config2.v1 = {
        ..._118
      };
    })(config = tx2.config || (tx2.config = {}));
    let signing;
    ((signing2) => {
      signing2.v1beta1 = {
        ..._119
      };
    })(signing = tx2.signing || (tx2.signing = {}));
    tx2.v1beta1 = {
      ..._120,
      ..._121,
      ..._318
    };
  })(tx = cosmos2.tx || (cosmos2.tx = {}));
  let upgrade;
  ((upgrade2) => {
    let module;
    ((module2) => {
      module2.v1 = {
        ..._122
      };
    })(module = upgrade2.module || (upgrade2.module = {}));
    upgrade2.v1beta1 = {
      ..._123,
      ..._124,
      ..._125,
      ..._279,
      ..._296,
      ..._319,
      ..._335
    };
  })(upgrade = cosmos2.upgrade || (cosmos2.upgrade = {}));
  let vesting;
  ((vesting2) => {
    let module;
    ((module2) => {
      module2.v1 = {
        ..._126
      };
    })(module = vesting2.module || (vesting2.module = {}));
    vesting2.v1beta1 = {
      ..._127,
      ..._128,
      ..._280,
      ..._297,
      ..._336
    };
  })(vesting = cosmos2.vesting || (cosmos2.vesting = {}));
  cosmos2.ClientFactory = {
    ..._407,
    ..._408
  };
})(cosmos || (cosmos = {}));
export {
  cosmos
};
