import * as _4 from "./app/runtime/v1alpha1/module";
import * as _5 from "./app/v1alpha1/config";
import * as _6 from "./app/v1alpha1/module";
import * as _7 from "./app/v1alpha1/query";
import * as _8 from "./auth/module/v1/module";
import * as _9 from "./auth/v1beta1/auth";
import * as _10 from "./auth/v1beta1/genesis";
import * as _11 from "./auth/v1beta1/query";
import * as _12 from "./auth/v1beta1/tx";
import * as _13 from "./authz/module/v1/module";
import * as _14 from "./authz/v1beta1/authz";
import * as _15 from "./authz/v1beta1/event";
import * as _16 from "./authz/v1beta1/genesis";
import * as _17 from "./authz/v1beta1/query";
import * as _18 from "./authz/v1beta1/tx";
import * as _19 from "./autocli/v1/options";
import * as _20 from "./autocli/v1/query";
import * as _21 from "./bank/module/v1/module";
import * as _22 from "./bank/v1beta1/authz";
import * as _23 from "./bank/v1beta1/bank";
import * as _24 from "./bank/v1beta1/genesis";
import * as _25 from "./bank/v1beta1/query";
import * as _26 from "./bank/v1beta1/tx";
import * as _27 from "./base/abci/v1beta1/abci";
import * as _28 from "./base/node/v1beta1/query";
import * as _29 from "./base/query/v1beta1/pagination";
import * as _30 from "./base/reflection/v1beta1/reflection";
import * as _31 from "./base/reflection/v2alpha1/reflection";
import * as _32 from "./base/tendermint/v1beta1/query";
import * as _33 from "./base/tendermint/v1beta1/types";
import * as _34 from "./base/v1beta1/coin";
import * as _35 from "./circuit/module/v1/module";
import * as _36 from "./circuit/v1/query";
import * as _37 from "./circuit/v1/tx";
import * as _38 from "./circuit/v1/types";
import * as _39 from "./consensus/module/v1/module";
import * as _40 from "./consensus/v1/query";
import * as _41 from "./consensus/v1/tx";
import * as _42 from "./crisis/module/v1/module";
import * as _43 from "./crisis/v1beta1/genesis";
import * as _44 from "./crisis/v1beta1/tx";
import * as _45 from "./crypto/ed25519/keys";
import * as _46 from "./crypto/hd/v1/hd";
import * as _47 from "./crypto/keyring/v1/record";
import * as _48 from "./crypto/multisig/keys";
import * as _49 from "./crypto/secp256k1/keys";
import * as _50 from "./crypto/secp256r1/keys";
import * as _51 from "./distribution/module/v1/module";
import * as _52 from "./distribution/v1beta1/distribution";
import * as _53 from "./distribution/v1beta1/genesis";
import * as _54 from "./distribution/v1beta1/query";
import * as _55 from "./distribution/v1beta1/tx";
import * as _56 from "./evidence/module/v1/module";
import * as _57 from "./evidence/v1beta1/evidence";
import * as _58 from "./evidence/v1beta1/genesis";
import * as _59 from "./evidence/v1beta1/query";
import * as _60 from "./evidence/v1beta1/tx";
import * as _61 from "./feegrant/module/v1/module";
import * as _62 from "./feegrant/v1beta1/feegrant";
import * as _63 from "./feegrant/v1beta1/genesis";
import * as _64 from "./feegrant/v1beta1/query";
import * as _65 from "./feegrant/v1beta1/tx";
import * as _66 from "./genutil/module/v1/module";
import * as _67 from "./genutil/v1beta1/genesis";
import * as _68 from "./gov/module/v1/module";
import * as _69 from "./gov/v1/genesis";
import * as _70 from "./gov/v1/gov";
import * as _71 from "./gov/v1/query";
import * as _72 from "./gov/v1/tx";
import * as _73 from "./gov/v1beta1/genesis";
import * as _74 from "./gov/v1beta1/gov";
import * as _75 from "./gov/v1beta1/query";
import * as _76 from "./gov/v1beta1/tx";
import * as _77 from "./group/module/v1/module";
import * as _78 from "./group/v1/events";
import * as _79 from "./group/v1/genesis";
import * as _80 from "./group/v1/query";
import * as _81 from "./group/v1/tx";
import * as _82 from "./group/v1/types";
import * as _83 from "./ics23/v1/proofs";
import * as _84 from "./mint/module/v1/module";
import * as _85 from "./mint/v1beta1/genesis";
import * as _86 from "./mint/v1beta1/mint";
import * as _87 from "./mint/v1beta1/query";
import * as _88 from "./mint/v1beta1/tx";
import * as _89 from "./msg/textual/v1/textual";
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
import * as _114 from "./staking/v1beta1/query";
import * as _115 from "./staking/v1beta1/staking";
import * as _116 from "./staking/v1beta1/tx";
import * as _117 from "./store/internal/kv/v1beta1/kv";
import * as _118 from "./store/snapshots/v1/snapshot";
import * as _119 from "./store/streaming/abci/grpc";
import * as _120 from "./store/v1beta1/commit_info";
import * as _121 from "./store/v1beta1/listening";
import * as _122 from "./tx/config/v1/config";
import * as _123 from "./tx/signing/v1beta1/signing";
import * as _124 from "./tx/v1beta1/service";
import * as _125 from "./tx/v1beta1/tx";
import * as _126 from "./upgrade/module/v1/module";
import * as _127 from "./upgrade/v1beta1/query";
import * as _128 from "./upgrade/v1beta1/tx";
import * as _129 from "./upgrade/v1beta1/upgrade";
import * as _130 from "./vesting/module/v1/module";
import * as _131 from "./vesting/v1beta1/tx";
import * as _132 from "./vesting/v1beta1/vesting";
import * as _280 from "./auth/v1beta1/tx.amino";
import * as _281 from "./authz/v1beta1/tx.amino";
import * as _282 from "./bank/v1beta1/tx.amino";
import * as _283 from "./circuit/v1/tx.amino";
import * as _284 from "./consensus/v1/tx.amino";
import * as _285 from "./crisis/v1beta1/tx.amino";
import * as _286 from "./distribution/v1beta1/tx.amino";
import * as _287 from "./evidence/v1beta1/tx.amino";
import * as _288 from "./feegrant/v1beta1/tx.amino";
import * as _289 from "./gov/v1/tx.amino";
import * as _290 from "./gov/v1beta1/tx.amino";
import * as _291 from "./group/v1/tx.amino";
import * as _292 from "./mint/v1beta1/tx.amino";
import * as _293 from "./nft/v1beta1/tx.amino";
import * as _294 from "./slashing/v1beta1/tx.amino";
import * as _295 from "./staking/v1beta1/tx.amino";
import * as _296 from "./upgrade/v1beta1/tx.amino";
import * as _297 from "./vesting/v1beta1/tx.amino";
import * as _298 from "./auth/v1beta1/tx.registry";
import * as _299 from "./authz/v1beta1/tx.registry";
import * as _300 from "./bank/v1beta1/tx.registry";
import * as _301 from "./circuit/v1/tx.registry";
import * as _302 from "./consensus/v1/tx.registry";
import * as _303 from "./crisis/v1beta1/tx.registry";
import * as _304 from "./distribution/v1beta1/tx.registry";
import * as _305 from "./evidence/v1beta1/tx.registry";
import * as _306 from "./feegrant/v1beta1/tx.registry";
import * as _307 from "./gov/v1/tx.registry";
import * as _308 from "./gov/v1beta1/tx.registry";
import * as _309 from "./group/v1/tx.registry";
import * as _310 from "./mint/v1beta1/tx.registry";
import * as _311 from "./nft/v1beta1/tx.registry";
import * as _312 from "./slashing/v1beta1/tx.registry";
import * as _313 from "./staking/v1beta1/tx.registry";
import * as _314 from "./upgrade/v1beta1/tx.registry";
import * as _315 from "./vesting/v1beta1/tx.registry";
import * as _316 from "./app/v1alpha1/query.rpc.Query";
import * as _317 from "./auth/v1beta1/query.rpc.Query";
import * as _318 from "./authz/v1beta1/query.rpc.Query";
import * as _319 from "./autocli/v1/query.rpc.Query";
import * as _320 from "./bank/v1beta1/query.rpc.Query";
import * as _321 from "./base/node/v1beta1/query.rpc.Service";
import * as _322 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _323 from "./circuit/v1/query.rpc.Query";
import * as _324 from "./consensus/v1/query.rpc.Query";
import * as _325 from "./distribution/v1beta1/query.rpc.Query";
import * as _326 from "./evidence/v1beta1/query.rpc.Query";
import * as _327 from "./feegrant/v1beta1/query.rpc.Query";
import * as _328 from "./gov/v1/query.rpc.Query";
import * as _329 from "./gov/v1beta1/query.rpc.Query";
import * as _330 from "./group/v1/query.rpc.Query";
import * as _331 from "./mint/v1beta1/query.rpc.Query";
import * as _332 from "./nft/v1beta1/query.rpc.Query";
import * as _333 from "./orm/query/v1alpha1/query.rpc.Query";
import * as _334 from "./params/v1beta1/query.rpc.Query";
import * as _335 from "./slashing/v1beta1/query.rpc.Query";
import * as _336 from "./staking/v1beta1/query.rpc.Query";
import * as _337 from "./tx/v1beta1/service.rpc.Service";
import * as _338 from "./upgrade/v1beta1/query.rpc.Query";
import * as _339 from "./auth/v1beta1/tx.rpc.msg";
import * as _340 from "./authz/v1beta1/tx.rpc.msg";
import * as _341 from "./bank/v1beta1/tx.rpc.msg";
import * as _342 from "./circuit/v1/tx.rpc.msg";
import * as _343 from "./consensus/v1/tx.rpc.msg";
import * as _344 from "./crisis/v1beta1/tx.rpc.msg";
import * as _345 from "./distribution/v1beta1/tx.rpc.msg";
import * as _346 from "./evidence/v1beta1/tx.rpc.msg";
import * as _347 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _348 from "./gov/v1/tx.rpc.msg";
import * as _349 from "./gov/v1beta1/tx.rpc.msg";
import * as _350 from "./group/v1/tx.rpc.msg";
import * as _351 from "./mint/v1beta1/tx.rpc.msg";
import * as _352 from "./nft/v1beta1/tx.rpc.msg";
import * as _353 from "./slashing/v1beta1/tx.rpc.msg";
import * as _354 from "./staking/v1beta1/tx.rpc.msg";
import * as _355 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _356 from "./vesting/v1beta1/tx.rpc.msg";
import * as _441 from "./rpc.query";
import * as _442 from "./rpc.tx";
var cosmos;
((cosmos2) => {
  let app;
  ((app2) => {
    let runtime;
    ((runtime2) => {
      runtime2.v1alpha1 = {
        ..._4
      };
    })(runtime = app2.runtime || (app2.runtime = {}));
    app2.v1alpha1 = {
      ..._5,
      ..._6,
      ..._7,
      ..._316
    };
  })(app = cosmos2.app || (cosmos2.app = {}));
  let auth;
  ((auth2) => {
    let module;
    ((module2) => {
      module2.v1 = {
        ..._8
      };
    })(module = auth2.module || (auth2.module = {}));
    auth2.v1beta1 = {
      ..._9,
      ..._10,
      ..._11,
      ..._12,
      ..._280,
      ..._298,
      ..._317,
      ..._339
    };
  })(auth = cosmos2.auth || (cosmos2.auth = {}));
  let authz;
  ((authz2) => {
    let module;
    ((module2) => {
      module2.v1 = {
        ..._13
      };
    })(module = authz2.module || (authz2.module = {}));
    authz2.v1beta1 = {
      ..._14,
      ..._15,
      ..._16,
      ..._17,
      ..._18,
      ..._281,
      ..._299,
      ..._318,
      ..._340
    };
  })(authz = cosmos2.authz || (cosmos2.authz = {}));
  let autocli;
  ((autocli2) => {
    autocli2.v1 = {
      ..._19,
      ..._20,
      ..._319
    };
  })(autocli = cosmos2.autocli || (cosmos2.autocli = {}));
  let bank;
  ((bank2) => {
    let module;
    ((module2) => {
      module2.v1 = {
        ..._21
      };
    })(module = bank2.module || (bank2.module = {}));
    bank2.v1beta1 = {
      ..._22,
      ..._23,
      ..._24,
      ..._25,
      ..._26,
      ..._282,
      ..._300,
      ..._320,
      ..._341
    };
  })(bank = cosmos2.bank || (cosmos2.bank = {}));
  let base;
  ((base2) => {
    let abci;
    ((abci2) => {
      abci2.v1beta1 = {
        ..._27
      };
    })(abci = base2.abci || (base2.abci = {}));
    let node;
    ((node2) => {
      node2.v1beta1 = {
        ..._28,
        ..._321
      };
    })(node = base2.node || (base2.node = {}));
    let query2;
    ((query3) => {
      query3.v1beta1 = {
        ..._29
      };
    })(query2 = base2.query || (base2.query = {}));
    let reflection2;
    ((reflection3) => {
      reflection3.v1beta1 = {
        ..._30
      };
      reflection3.v2alpha1 = {
        ..._31
      };
    })(reflection2 = base2.reflection || (base2.reflection = {}));
    let tendermint;
    ((tendermint2) => {
      tendermint2.v1beta1 = {
        ..._32,
        ..._33,
        ..._322
      };
    })(tendermint = base2.tendermint || (base2.tendermint = {}));
    base2.v1beta1 = {
      ..._34
    };
  })(base = cosmos2.base || (cosmos2.base = {}));
  let circuit;
  ((circuit2) => {
    let module;
    ((module2) => {
      module2.v1 = {
        ..._35
      };
    })(module = circuit2.module || (circuit2.module = {}));
    circuit2.v1 = {
      ..._36,
      ..._37,
      ..._38,
      ..._283,
      ..._301,
      ..._323,
      ..._342
    };
  })(circuit = cosmos2.circuit || (cosmos2.circuit = {}));
  let consensus;
  ((consensus2) => {
    let module;
    ((module2) => {
      module2.v1 = {
        ..._39
      };
    })(module = consensus2.module || (consensus2.module = {}));
    consensus2.v1 = {
      ..._40,
      ..._41,
      ..._284,
      ..._302,
      ..._324,
      ..._343
    };
  })(consensus = cosmos2.consensus || (cosmos2.consensus = {}));
  let crisis;
  ((crisis2) => {
    let module;
    ((module2) => {
      module2.v1 = {
        ..._42
      };
    })(module = crisis2.module || (crisis2.module = {}));
    crisis2.v1beta1 = {
      ..._43,
      ..._44,
      ..._285,
      ..._303,
      ..._344
    };
  })(crisis = cosmos2.crisis || (cosmos2.crisis = {}));
  let crypto;
  ((crypto2) => {
    crypto2.ed25519 = {
      ..._45
    };
    let hd;
    ((hd2) => {
      hd2.v1 = {
        ..._46
      };
    })(hd = crypto2.hd || (crypto2.hd = {}));
    let keyring;
    ((keyring2) => {
      keyring2.v1 = {
        ..._47
      };
    })(keyring = crypto2.keyring || (crypto2.keyring = {}));
    crypto2.multisig = {
      ..._48
    };
    crypto2.secp256k1 = {
      ..._49
    };
    crypto2.secp256r1 = {
      ..._50
    };
  })(crypto = cosmos2.crypto || (cosmos2.crypto = {}));
  let distribution;
  ((distribution2) => {
    let module;
    ((module2) => {
      module2.v1 = {
        ..._51
      };
    })(module = distribution2.module || (distribution2.module = {}));
    distribution2.v1beta1 = {
      ..._52,
      ..._53,
      ..._54,
      ..._55,
      ..._286,
      ..._304,
      ..._325,
      ..._345
    };
  })(distribution = cosmos2.distribution || (cosmos2.distribution = {}));
  let evidence;
  ((evidence2) => {
    let module;
    ((module2) => {
      module2.v1 = {
        ..._56
      };
    })(module = evidence2.module || (evidence2.module = {}));
    evidence2.v1beta1 = {
      ..._57,
      ..._58,
      ..._59,
      ..._60,
      ..._287,
      ..._305,
      ..._326,
      ..._346
    };
  })(evidence = cosmos2.evidence || (cosmos2.evidence = {}));
  let feegrant;
  ((feegrant2) => {
    let module;
    ((module2) => {
      module2.v1 = {
        ..._61
      };
    })(module = feegrant2.module || (feegrant2.module = {}));
    feegrant2.v1beta1 = {
      ..._62,
      ..._63,
      ..._64,
      ..._65,
      ..._288,
      ..._306,
      ..._327,
      ..._347
    };
  })(feegrant = cosmos2.feegrant || (cosmos2.feegrant = {}));
  let genutil;
  ((genutil2) => {
    let module;
    ((module2) => {
      module2.v1 = {
        ..._66
      };
    })(module = genutil2.module || (genutil2.module = {}));
    genutil2.v1beta1 = {
      ..._67
    };
  })(genutil = cosmos2.genutil || (cosmos2.genutil = {}));
  let gov;
  ((gov2) => {
    let module;
    ((module2) => {
      module2.v1 = {
        ..._68
      };
    })(module = gov2.module || (gov2.module = {}));
    gov2.v1 = {
      ..._69,
      ..._70,
      ..._71,
      ..._72,
      ..._289,
      ..._307,
      ..._328,
      ..._348
    };
    gov2.v1beta1 = {
      ..._73,
      ..._74,
      ..._75,
      ..._76,
      ..._290,
      ..._308,
      ..._329,
      ..._349
    };
  })(gov = cosmos2.gov || (cosmos2.gov = {}));
  let group;
  ((group2) => {
    let module;
    ((module2) => {
      module2.v1 = {
        ..._77
      };
    })(module = group2.module || (group2.module = {}));
    group2.v1 = {
      ..._78,
      ..._79,
      ..._80,
      ..._81,
      ..._82,
      ..._291,
      ..._309,
      ..._330,
      ..._350
    };
  })(group = cosmos2.group || (cosmos2.group = {}));
  let ics23;
  ((ics232) => {
    ics232.v1 = {
      ..._83
    };
  })(ics23 = cosmos2.ics23 || (cosmos2.ics23 = {}));
  let mint;
  ((mint2) => {
    let module;
    ((module2) => {
      module2.v1 = {
        ..._84
      };
    })(module = mint2.module || (mint2.module = {}));
    mint2.v1beta1 = {
      ..._85,
      ..._86,
      ..._87,
      ..._88,
      ..._292,
      ..._310,
      ..._331,
      ..._351
    };
  })(mint = cosmos2.mint || (cosmos2.mint = {}));
  let msg;
  ((msg2) => {
    let textual;
    ((textual2) => {
      textual2.v1 = {
        ..._89
      };
    })(textual = msg2.textual || (msg2.textual = {}));
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
      ..._293,
      ..._311,
      ..._332,
      ..._352
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
        ..._333
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
      ..._334
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
      ..._294,
      ..._312,
      ..._335,
      ..._353
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
      ..._295,
      ..._313,
      ..._336,
      ..._354
    };
  })(staking = cosmos2.staking || (cosmos2.staking = {}));
  let store;
  ((store2) => {
    let internal;
    ((internal2) => {
      let kv;
      ((kv2) => {
        kv2.v1beta1 = {
          ..._117
        };
      })(kv = internal2.kv || (internal2.kv = {}));
    })(internal = store2.internal || (store2.internal = {}));
    let snapshots;
    ((snapshots2) => {
      snapshots2.v1 = {
        ..._118
      };
    })(snapshots = store2.snapshots || (store2.snapshots = {}));
    let streaming;
    ((streaming2) => {
      streaming2.abci = {
        ..._119
      };
    })(streaming = store2.streaming || (store2.streaming = {}));
    store2.v1beta1 = {
      ..._120,
      ..._121
    };
  })(store = cosmos2.store || (cosmos2.store = {}));
  let tx;
  ((tx2) => {
    let config;
    ((config2) => {
      config2.v1 = {
        ..._122
      };
    })(config = tx2.config || (tx2.config = {}));
    let signing;
    ((signing2) => {
      signing2.v1beta1 = {
        ..._123
      };
    })(signing = tx2.signing || (tx2.signing = {}));
    tx2.v1beta1 = {
      ..._124,
      ..._125,
      ..._337
    };
  })(tx = cosmos2.tx || (cosmos2.tx = {}));
  let upgrade;
  ((upgrade2) => {
    let module;
    ((module2) => {
      module2.v1 = {
        ..._126
      };
    })(module = upgrade2.module || (upgrade2.module = {}));
    upgrade2.v1beta1 = {
      ..._127,
      ..._128,
      ..._129,
      ..._296,
      ..._314,
      ..._338,
      ..._355
    };
  })(upgrade = cosmos2.upgrade || (cosmos2.upgrade = {}));
  let vesting;
  ((vesting2) => {
    let module;
    ((module2) => {
      module2.v1 = {
        ..._130
      };
    })(module = vesting2.module || (vesting2.module = {}));
    vesting2.v1beta1 = {
      ..._131,
      ..._132,
      ..._297,
      ..._315,
      ..._356
    };
  })(vesting = cosmos2.vesting || (cosmos2.vesting = {}));
  cosmos2.ClientFactory = {
    ..._441,
    ..._442
  };
})(cosmos || (cosmos = {}));
export {
  cosmos
};
