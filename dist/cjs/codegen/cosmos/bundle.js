var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var bundle_exports = {};
__export(bundle_exports, {
  cosmos: () => cosmos
});
module.exports = __toCommonJS(bundle_exports);
var _4 = __toESM(require("./app/runtime/v1alpha1/module"));
var _5 = __toESM(require("./app/v1alpha1/config"));
var _6 = __toESM(require("./app/v1alpha1/module"));
var _7 = __toESM(require("./app/v1alpha1/query"));
var _8 = __toESM(require("./auth/module/v1/module"));
var _9 = __toESM(require("./auth/v1beta1/auth"));
var _10 = __toESM(require("./auth/v1beta1/genesis"));
var _11 = __toESM(require("./auth/v1beta1/query"));
var _12 = __toESM(require("./auth/v1beta1/tx"));
var _13 = __toESM(require("./authz/module/v1/module"));
var _14 = __toESM(require("./authz/v1beta1/authz"));
var _15 = __toESM(require("./authz/v1beta1/event"));
var _16 = __toESM(require("./authz/v1beta1/genesis"));
var _17 = __toESM(require("./authz/v1beta1/query"));
var _18 = __toESM(require("./authz/v1beta1/tx"));
var _19 = __toESM(require("./autocli/v1/options"));
var _20 = __toESM(require("./autocli/v1/query"));
var _21 = __toESM(require("./bank/module/v1/module"));
var _22 = __toESM(require("./bank/v1beta1/authz"));
var _23 = __toESM(require("./bank/v1beta1/bank"));
var _24 = __toESM(require("./bank/v1beta1/genesis"));
var _25 = __toESM(require("./bank/v1beta1/query"));
var _26 = __toESM(require("./bank/v1beta1/tx"));
var _27 = __toESM(require("./base/abci/v1beta1/abci"));
var _28 = __toESM(require("./base/node/v1beta1/query"));
var _29 = __toESM(require("./base/query/v1beta1/pagination"));
var _30 = __toESM(require("./base/reflection/v1beta1/reflection"));
var _31 = __toESM(require("./base/reflection/v2alpha1/reflection"));
var _32 = __toESM(require("./base/tendermint/v1beta1/query"));
var _33 = __toESM(require("./base/tendermint/v1beta1/types"));
var _34 = __toESM(require("./base/v1beta1/coin"));
var _35 = __toESM(require("./circuit/module/v1/module"));
var _36 = __toESM(require("./circuit/v1/query"));
var _37 = __toESM(require("./circuit/v1/tx"));
var _38 = __toESM(require("./circuit/v1/types"));
var _39 = __toESM(require("./consensus/module/v1/module"));
var _40 = __toESM(require("./consensus/v1/query"));
var _41 = __toESM(require("./consensus/v1/tx"));
var _42 = __toESM(require("./crisis/module/v1/module"));
var _43 = __toESM(require("./crisis/v1beta1/genesis"));
var _44 = __toESM(require("./crisis/v1beta1/tx"));
var _45 = __toESM(require("./crypto/ed25519/keys"));
var _46 = __toESM(require("./crypto/hd/v1/hd"));
var _47 = __toESM(require("./crypto/keyring/v1/record"));
var _48 = __toESM(require("./crypto/multisig/keys"));
var _49 = __toESM(require("./crypto/secp256k1/keys"));
var _50 = __toESM(require("./crypto/secp256r1/keys"));
var _51 = __toESM(require("./distribution/module/v1/module"));
var _52 = __toESM(require("./distribution/v1beta1/distribution"));
var _53 = __toESM(require("./distribution/v1beta1/genesis"));
var _54 = __toESM(require("./distribution/v1beta1/query"));
var _55 = __toESM(require("./distribution/v1beta1/tx"));
var _56 = __toESM(require("./evidence/module/v1/module"));
var _57 = __toESM(require("./evidence/v1beta1/evidence"));
var _58 = __toESM(require("./evidence/v1beta1/genesis"));
var _59 = __toESM(require("./evidence/v1beta1/query"));
var _60 = __toESM(require("./evidence/v1beta1/tx"));
var _61 = __toESM(require("./feegrant/module/v1/module"));
var _62 = __toESM(require("./feegrant/v1beta1/feegrant"));
var _63 = __toESM(require("./feegrant/v1beta1/genesis"));
var _64 = __toESM(require("./feegrant/v1beta1/query"));
var _65 = __toESM(require("./feegrant/v1beta1/tx"));
var _66 = __toESM(require("./genutil/module/v1/module"));
var _67 = __toESM(require("./genutil/v1beta1/genesis"));
var _68 = __toESM(require("./gov/module/v1/module"));
var _69 = __toESM(require("./gov/v1/genesis"));
var _70 = __toESM(require("./gov/v1/gov"));
var _71 = __toESM(require("./gov/v1/query"));
var _72 = __toESM(require("./gov/v1/tx"));
var _73 = __toESM(require("./gov/v1beta1/genesis"));
var _74 = __toESM(require("./gov/v1beta1/gov"));
var _75 = __toESM(require("./gov/v1beta1/query"));
var _76 = __toESM(require("./gov/v1beta1/tx"));
var _77 = __toESM(require("./group/module/v1/module"));
var _78 = __toESM(require("./group/v1/events"));
var _79 = __toESM(require("./group/v1/genesis"));
var _80 = __toESM(require("./group/v1/query"));
var _81 = __toESM(require("./group/v1/tx"));
var _82 = __toESM(require("./group/v1/types"));
var _83 = __toESM(require("./ics23/v1/proofs"));
var _84 = __toESM(require("./mint/module/v1/module"));
var _85 = __toESM(require("./mint/v1beta1/genesis"));
var _86 = __toESM(require("./mint/v1beta1/mint"));
var _87 = __toESM(require("./mint/v1beta1/query"));
var _88 = __toESM(require("./mint/v1beta1/tx"));
var _89 = __toESM(require("./msg/textual/v1/textual"));
var _90 = __toESM(require("./msg/v1/msg"));
var _91 = __toESM(require("./nft/module/v1/module"));
var _92 = __toESM(require("./nft/v1beta1/event"));
var _93 = __toESM(require("./nft/v1beta1/genesis"));
var _94 = __toESM(require("./nft/v1beta1/nft"));
var _95 = __toESM(require("./nft/v1beta1/query"));
var _96 = __toESM(require("./nft/v1beta1/tx"));
var _97 = __toESM(require("./orm/module/v1alpha1/module"));
var _98 = __toESM(require("./orm/query/v1alpha1/query"));
var _99 = __toESM(require("./orm/v1/orm"));
var _100 = __toESM(require("./orm/v1alpha1/schema"));
var _101 = __toESM(require("./params/module/v1/module"));
var _102 = __toESM(require("./params/v1beta1/params"));
var _103 = __toESM(require("./params/v1beta1/query"));
var _104 = __toESM(require("./query/v1/query"));
var _105 = __toESM(require("./reflection/v1/reflection"));
var _106 = __toESM(require("./slashing/module/v1/module"));
var _107 = __toESM(require("./slashing/v1beta1/genesis"));
var _108 = __toESM(require("./slashing/v1beta1/query"));
var _109 = __toESM(require("./slashing/v1beta1/slashing"));
var _110 = __toESM(require("./slashing/v1beta1/tx"));
var _111 = __toESM(require("./staking/module/v1/module"));
var _112 = __toESM(require("./staking/v1beta1/authz"));
var _113 = __toESM(require("./staking/v1beta1/genesis"));
var _114 = __toESM(require("./staking/v1beta1/query"));
var _115 = __toESM(require("./staking/v1beta1/staking"));
var _116 = __toESM(require("./staking/v1beta1/tx"));
var _117 = __toESM(require("./store/internal/kv/v1beta1/kv"));
var _118 = __toESM(require("./store/snapshots/v1/snapshot"));
var _119 = __toESM(require("./store/streaming/abci/grpc"));
var _120 = __toESM(require("./store/v1beta1/commit_info"));
var _121 = __toESM(require("./store/v1beta1/listening"));
var _122 = __toESM(require("./tx/config/v1/config"));
var _123 = __toESM(require("./tx/signing/v1beta1/signing"));
var _124 = __toESM(require("./tx/v1beta1/service"));
var _125 = __toESM(require("./tx/v1beta1/tx"));
var _126 = __toESM(require("./upgrade/module/v1/module"));
var _127 = __toESM(require("./upgrade/v1beta1/query"));
var _128 = __toESM(require("./upgrade/v1beta1/tx"));
var _129 = __toESM(require("./upgrade/v1beta1/upgrade"));
var _130 = __toESM(require("./vesting/module/v1/module"));
var _131 = __toESM(require("./vesting/v1beta1/tx"));
var _132 = __toESM(require("./vesting/v1beta1/vesting"));
var _280 = __toESM(require("./auth/v1beta1/tx.amino"));
var _281 = __toESM(require("./authz/v1beta1/tx.amino"));
var _282 = __toESM(require("./bank/v1beta1/tx.amino"));
var _283 = __toESM(require("./circuit/v1/tx.amino"));
var _284 = __toESM(require("./consensus/v1/tx.amino"));
var _285 = __toESM(require("./crisis/v1beta1/tx.amino"));
var _286 = __toESM(require("./distribution/v1beta1/tx.amino"));
var _287 = __toESM(require("./evidence/v1beta1/tx.amino"));
var _288 = __toESM(require("./feegrant/v1beta1/tx.amino"));
var _289 = __toESM(require("./gov/v1/tx.amino"));
var _290 = __toESM(require("./gov/v1beta1/tx.amino"));
var _291 = __toESM(require("./group/v1/tx.amino"));
var _292 = __toESM(require("./mint/v1beta1/tx.amino"));
var _293 = __toESM(require("./nft/v1beta1/tx.amino"));
var _294 = __toESM(require("./slashing/v1beta1/tx.amino"));
var _295 = __toESM(require("./staking/v1beta1/tx.amino"));
var _296 = __toESM(require("./upgrade/v1beta1/tx.amino"));
var _297 = __toESM(require("./vesting/v1beta1/tx.amino"));
var _298 = __toESM(require("./auth/v1beta1/tx.registry"));
var _299 = __toESM(require("./authz/v1beta1/tx.registry"));
var _300 = __toESM(require("./bank/v1beta1/tx.registry"));
var _301 = __toESM(require("./circuit/v1/tx.registry"));
var _302 = __toESM(require("./consensus/v1/tx.registry"));
var _303 = __toESM(require("./crisis/v1beta1/tx.registry"));
var _304 = __toESM(require("./distribution/v1beta1/tx.registry"));
var _305 = __toESM(require("./evidence/v1beta1/tx.registry"));
var _306 = __toESM(require("./feegrant/v1beta1/tx.registry"));
var _307 = __toESM(require("./gov/v1/tx.registry"));
var _308 = __toESM(require("./gov/v1beta1/tx.registry"));
var _309 = __toESM(require("./group/v1/tx.registry"));
var _310 = __toESM(require("./mint/v1beta1/tx.registry"));
var _311 = __toESM(require("./nft/v1beta1/tx.registry"));
var _312 = __toESM(require("./slashing/v1beta1/tx.registry"));
var _313 = __toESM(require("./staking/v1beta1/tx.registry"));
var _314 = __toESM(require("./upgrade/v1beta1/tx.registry"));
var _315 = __toESM(require("./vesting/v1beta1/tx.registry"));
var _316 = __toESM(require("./app/v1alpha1/query.rpc.Query"));
var _317 = __toESM(require("./auth/v1beta1/query.rpc.Query"));
var _318 = __toESM(require("./authz/v1beta1/query.rpc.Query"));
var _319 = __toESM(require("./autocli/v1/query.rpc.Query"));
var _320 = __toESM(require("./bank/v1beta1/query.rpc.Query"));
var _321 = __toESM(require("./base/node/v1beta1/query.rpc.Service"));
var _322 = __toESM(require("./base/tendermint/v1beta1/query.rpc.Service"));
var _323 = __toESM(require("./circuit/v1/query.rpc.Query"));
var _324 = __toESM(require("./consensus/v1/query.rpc.Query"));
var _325 = __toESM(require("./distribution/v1beta1/query.rpc.Query"));
var _326 = __toESM(require("./evidence/v1beta1/query.rpc.Query"));
var _327 = __toESM(require("./feegrant/v1beta1/query.rpc.Query"));
var _328 = __toESM(require("./gov/v1/query.rpc.Query"));
var _329 = __toESM(require("./gov/v1beta1/query.rpc.Query"));
var _330 = __toESM(require("./group/v1/query.rpc.Query"));
var _331 = __toESM(require("./mint/v1beta1/query.rpc.Query"));
var _332 = __toESM(require("./nft/v1beta1/query.rpc.Query"));
var _333 = __toESM(require("./orm/query/v1alpha1/query.rpc.Query"));
var _334 = __toESM(require("./params/v1beta1/query.rpc.Query"));
var _335 = __toESM(require("./slashing/v1beta1/query.rpc.Query"));
var _336 = __toESM(require("./staking/v1beta1/query.rpc.Query"));
var _337 = __toESM(require("./tx/v1beta1/service.rpc.Service"));
var _338 = __toESM(require("./upgrade/v1beta1/query.rpc.Query"));
var _339 = __toESM(require("./auth/v1beta1/tx.rpc.msg"));
var _340 = __toESM(require("./authz/v1beta1/tx.rpc.msg"));
var _341 = __toESM(require("./bank/v1beta1/tx.rpc.msg"));
var _342 = __toESM(require("./circuit/v1/tx.rpc.msg"));
var _343 = __toESM(require("./consensus/v1/tx.rpc.msg"));
var _344 = __toESM(require("./crisis/v1beta1/tx.rpc.msg"));
var _345 = __toESM(require("./distribution/v1beta1/tx.rpc.msg"));
var _346 = __toESM(require("./evidence/v1beta1/tx.rpc.msg"));
var _347 = __toESM(require("./feegrant/v1beta1/tx.rpc.msg"));
var _348 = __toESM(require("./gov/v1/tx.rpc.msg"));
var _349 = __toESM(require("./gov/v1beta1/tx.rpc.msg"));
var _350 = __toESM(require("./group/v1/tx.rpc.msg"));
var _351 = __toESM(require("./mint/v1beta1/tx.rpc.msg"));
var _352 = __toESM(require("./nft/v1beta1/tx.rpc.msg"));
var _353 = __toESM(require("./slashing/v1beta1/tx.rpc.msg"));
var _354 = __toESM(require("./staking/v1beta1/tx.rpc.msg"));
var _355 = __toESM(require("./upgrade/v1beta1/tx.rpc.msg"));
var _356 = __toESM(require("./vesting/v1beta1/tx.rpc.msg"));
var _441 = __toESM(require("./rpc.query"));
var _442 = __toESM(require("./rpc.tx"));
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
    let module2;
    ((module3) => {
      module3.v1 = {
        ..._8
      };
    })(module2 = auth2.module || (auth2.module = {}));
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
    let module2;
    ((module3) => {
      module3.v1 = {
        ..._13
      };
    })(module2 = authz2.module || (authz2.module = {}));
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
    let module2;
    ((module3) => {
      module3.v1 = {
        ..._21
      };
    })(module2 = bank2.module || (bank2.module = {}));
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
    let module2;
    ((module3) => {
      module3.v1 = {
        ..._35
      };
    })(module2 = circuit2.module || (circuit2.module = {}));
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
    let module2;
    ((module3) => {
      module3.v1 = {
        ..._39
      };
    })(module2 = consensus2.module || (consensus2.module = {}));
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
    let module2;
    ((module3) => {
      module3.v1 = {
        ..._42
      };
    })(module2 = crisis2.module || (crisis2.module = {}));
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
    let module2;
    ((module3) => {
      module3.v1 = {
        ..._51
      };
    })(module2 = distribution2.module || (distribution2.module = {}));
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
    let module2;
    ((module3) => {
      module3.v1 = {
        ..._56
      };
    })(module2 = evidence2.module || (evidence2.module = {}));
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
    let module2;
    ((module3) => {
      module3.v1 = {
        ..._61
      };
    })(module2 = feegrant2.module || (feegrant2.module = {}));
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
    let module2;
    ((module3) => {
      module3.v1 = {
        ..._66
      };
    })(module2 = genutil2.module || (genutil2.module = {}));
    genutil2.v1beta1 = {
      ..._67
    };
  })(genutil = cosmos2.genutil || (cosmos2.genutil = {}));
  let gov;
  ((gov2) => {
    let module2;
    ((module3) => {
      module3.v1 = {
        ..._68
      };
    })(module2 = gov2.module || (gov2.module = {}));
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
    let module2;
    ((module3) => {
      module3.v1 = {
        ..._77
      };
    })(module2 = group2.module || (group2.module = {}));
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
    let module2;
    ((module3) => {
      module3.v1 = {
        ..._84
      };
    })(module2 = mint2.module || (mint2.module = {}));
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
    let module2;
    ((module3) => {
      module3.v1 = {
        ..._91
      };
    })(module2 = nft2.module || (nft2.module = {}));
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
    let module2;
    ((module3) => {
      module3.v1alpha1 = {
        ..._97
      };
    })(module2 = orm2.module || (orm2.module = {}));
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
    let module2;
    ((module3) => {
      module3.v1 = {
        ..._101
      };
    })(module2 = params2.module || (params2.module = {}));
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
    let module2;
    ((module3) => {
      module3.v1 = {
        ..._106
      };
    })(module2 = slashing2.module || (slashing2.module = {}));
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
    let module2;
    ((module3) => {
      module3.v1 = {
        ..._111
      };
    })(module2 = staking2.module || (staking2.module = {}));
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
    let module2;
    ((module3) => {
      module3.v1 = {
        ..._126
      };
    })(module2 = upgrade2.module || (upgrade2.module = {}));
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
    let module2;
    ((module3) => {
      module3.v1 = {
        ..._130
      };
    })(module2 = vesting2.module || (vesting2.module = {}));
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  cosmos
});
