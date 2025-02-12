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
var _2 = __toESM(require("./app/runtime/v1alpha1/module"));
var _3 = __toESM(require("./app/v1alpha1/config"));
var _4 = __toESM(require("./app/v1alpha1/module"));
var _5 = __toESM(require("./app/v1alpha1/query"));
var _6 = __toESM(require("./auth/module/v1/module"));
var _7 = __toESM(require("./auth/v1beta1/auth"));
var _8 = __toESM(require("./auth/v1beta1/genesis"));
var _9 = __toESM(require("./auth/v1beta1/query"));
var _10 = __toESM(require("./auth/v1beta1/tx"));
var _11 = __toESM(require("./authz/module/v1/module"));
var _12 = __toESM(require("./authz/v1beta1/authz"));
var _13 = __toESM(require("./authz/v1beta1/event"));
var _14 = __toESM(require("./authz/v1beta1/genesis"));
var _15 = __toESM(require("./authz/v1beta1/query"));
var _16 = __toESM(require("./authz/v1beta1/tx"));
var _17 = __toESM(require("./autocli/v1/options"));
var _18 = __toESM(require("./autocli/v1/query"));
var _19 = __toESM(require("./bank/module/v1/module"));
var _20 = __toESM(require("./bank/v1beta1/authz"));
var _21 = __toESM(require("./bank/v1beta1/bank"));
var _22 = __toESM(require("./bank/v1beta1/genesis"));
var _23 = __toESM(require("./bank/v1beta1/query"));
var _24 = __toESM(require("./bank/v1beta1/tx"));
var _25 = __toESM(require("./base/abci/v1beta1/abci"));
var _26 = __toESM(require("./base/kv/v1beta1/kv"));
var _27 = __toESM(require("./base/node/v1beta1/query"));
var _28 = __toESM(require("./base/query/v1beta1/pagination"));
var _29 = __toESM(require("./base/reflection/v1beta1/reflection"));
var _30 = __toESM(require("./base/reflection/v2alpha1/reflection"));
var _31 = __toESM(require("./base/snapshots/v1beta1/snapshot"));
var _32 = __toESM(require("./base/store/v1beta1/commit_info"));
var _33 = __toESM(require("./base/store/v1beta1/listening"));
var _34 = __toESM(require("./base/tendermint/v1beta1/query"));
var _35 = __toESM(require("./base/tendermint/v1beta1/types"));
var _36 = __toESM(require("./base/v1beta1/coin"));
var _37 = __toESM(require("./capability/module/v1/module"));
var _38 = __toESM(require("./capability/v1beta1/capability"));
var _39 = __toESM(require("./capability/v1beta1/genesis"));
var _40 = __toESM(require("./consensus/module/v1/module"));
var _41 = __toESM(require("./consensus/v1/query"));
var _42 = __toESM(require("./consensus/v1/tx"));
var _43 = __toESM(require("./crisis/module/v1/module"));
var _44 = __toESM(require("./crisis/v1beta1/genesis"));
var _45 = __toESM(require("./crisis/v1beta1/tx"));
var _46 = __toESM(require("./crypto/ed25519/keys"));
var _47 = __toESM(require("./crypto/hd/v1/hd"));
var _48 = __toESM(require("./crypto/keyring/v1/record"));
var _49 = __toESM(require("./crypto/multisig/keys"));
var _50 = __toESM(require("./crypto/secp256k1/keys"));
var _51 = __toESM(require("./crypto/secp256r1/keys"));
var _52 = __toESM(require("./distribution/module/v1/module"));
var _53 = __toESM(require("./distribution/v1beta1/distribution"));
var _54 = __toESM(require("./distribution/v1beta1/genesis"));
var _55 = __toESM(require("./distribution/v1beta1/query"));
var _56 = __toESM(require("./distribution/v1beta1/tx"));
var _57 = __toESM(require("./evidence/module/v1/module"));
var _58 = __toESM(require("./evidence/v1beta1/evidence"));
var _59 = __toESM(require("./evidence/v1beta1/genesis"));
var _60 = __toESM(require("./evidence/v1beta1/query"));
var _61 = __toESM(require("./evidence/v1beta1/tx"));
var _62 = __toESM(require("./feegrant/module/v1/module"));
var _63 = __toESM(require("./feegrant/v1beta1/feegrant"));
var _64 = __toESM(require("./feegrant/v1beta1/genesis"));
var _65 = __toESM(require("./feegrant/v1beta1/query"));
var _66 = __toESM(require("./feegrant/v1beta1/tx"));
var _67 = __toESM(require("./genutil/module/v1/module"));
var _68 = __toESM(require("./genutil/v1beta1/genesis"));
var _69 = __toESM(require("./gov/module/v1/module"));
var _70 = __toESM(require("./gov/v1/genesis"));
var _71 = __toESM(require("./gov/v1/gov"));
var _72 = __toESM(require("./gov/v1/query"));
var _73 = __toESM(require("./gov/v1/tx"));
var _74 = __toESM(require("./gov/v1beta1/genesis"));
var _75 = __toESM(require("./gov/v1beta1/gov"));
var _76 = __toESM(require("./gov/v1beta1/query"));
var _77 = __toESM(require("./gov/v1beta1/tx"));
var _78 = __toESM(require("./group/module/v1/module"));
var _79 = __toESM(require("./group/v1/events"));
var _80 = __toESM(require("./group/v1/genesis"));
var _81 = __toESM(require("./group/v1/query"));
var _82 = __toESM(require("./group/v1/tx"));
var _83 = __toESM(require("./group/v1/types"));
var _84 = __toESM(require("./ics23/v1/proofs"));
var _85 = __toESM(require("./mint/module/v1/module"));
var _86 = __toESM(require("./mint/v1beta1/genesis"));
var _87 = __toESM(require("./mint/v1beta1/mint"));
var _88 = __toESM(require("./mint/v1beta1/query"));
var _89 = __toESM(require("./mint/v1beta1/tx"));
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
var _114 = __toESM(require("./staking/v1beta1/lsm_tx"));
var _115 = __toESM(require("./staking/v1beta1/query"));
var _116 = __toESM(require("./staking/v1beta1/staking"));
var _117 = __toESM(require("./staking/v1beta1/tx"));
var _118 = __toESM(require("./tx/config/v1/config"));
var _119 = __toESM(require("./tx/signing/v1beta1/signing"));
var _120 = __toESM(require("./tx/v1beta1/service"));
var _121 = __toESM(require("./tx/v1beta1/tx"));
var _122 = __toESM(require("./upgrade/module/v1/module"));
var _123 = __toESM(require("./upgrade/v1beta1/query"));
var _124 = __toESM(require("./upgrade/v1beta1/tx"));
var _125 = __toESM(require("./upgrade/v1beta1/upgrade"));
var _126 = __toESM(require("./vesting/module/v1/module"));
var _127 = __toESM(require("./vesting/v1beta1/tx"));
var _128 = __toESM(require("./vesting/v1beta1/vesting"));
var _257 = __toESM(require("./auth/v1beta1/tx.amino"));
var _258 = __toESM(require("./authz/v1beta1/tx.amino"));
var _259 = __toESM(require("./bank/v1beta1/tx.amino"));
var _260 = __toESM(require("./consensus/v1/tx.amino"));
var _261 = __toESM(require("./crisis/v1beta1/tx.amino"));
var _262 = __toESM(require("./distribution/v1beta1/tx.amino"));
var _263 = __toESM(require("./evidence/v1beta1/tx.amino"));
var _264 = __toESM(require("./feegrant/v1beta1/tx.amino"));
var _265 = __toESM(require("./gov/v1/tx.amino"));
var _266 = __toESM(require("./gov/v1beta1/tx.amino"));
var _267 = __toESM(require("./group/v1/tx.amino"));
var _268 = __toESM(require("./mint/v1beta1/tx.amino"));
var _269 = __toESM(require("./nft/v1beta1/tx.amino"));
var _270 = __toESM(require("./slashing/v1beta1/tx.amino"));
var _271 = __toESM(require("./staking/v1beta1/tx.amino"));
var _272 = __toESM(require("./upgrade/v1beta1/tx.amino"));
var _273 = __toESM(require("./vesting/v1beta1/tx.amino"));
var _274 = __toESM(require("./auth/v1beta1/tx.registry"));
var _275 = __toESM(require("./authz/v1beta1/tx.registry"));
var _276 = __toESM(require("./bank/v1beta1/tx.registry"));
var _277 = __toESM(require("./consensus/v1/tx.registry"));
var _278 = __toESM(require("./crisis/v1beta1/tx.registry"));
var _279 = __toESM(require("./distribution/v1beta1/tx.registry"));
var _280 = __toESM(require("./evidence/v1beta1/tx.registry"));
var _281 = __toESM(require("./feegrant/v1beta1/tx.registry"));
var _282 = __toESM(require("./gov/v1/tx.registry"));
var _283 = __toESM(require("./gov/v1beta1/tx.registry"));
var _284 = __toESM(require("./group/v1/tx.registry"));
var _285 = __toESM(require("./mint/v1beta1/tx.registry"));
var _286 = __toESM(require("./nft/v1beta1/tx.registry"));
var _287 = __toESM(require("./slashing/v1beta1/tx.registry"));
var _288 = __toESM(require("./staking/v1beta1/tx.registry"));
var _289 = __toESM(require("./upgrade/v1beta1/tx.registry"));
var _290 = __toESM(require("./vesting/v1beta1/tx.registry"));
var _291 = __toESM(require("./app/v1alpha1/query.rpc.Query"));
var _292 = __toESM(require("./auth/v1beta1/query.rpc.Query"));
var _293 = __toESM(require("./authz/v1beta1/query.rpc.Query"));
var _294 = __toESM(require("./autocli/v1/query.rpc.Query"));
var _295 = __toESM(require("./bank/v1beta1/query.rpc.Query"));
var _296 = __toESM(require("./base/node/v1beta1/query.rpc.Service"));
var _297 = __toESM(require("./base/tendermint/v1beta1/query.rpc.Service"));
var _298 = __toESM(require("./consensus/v1/query.rpc.Query"));
var _299 = __toESM(require("./distribution/v1beta1/query.rpc.Query"));
var _300 = __toESM(require("./evidence/v1beta1/query.rpc.Query"));
var _301 = __toESM(require("./feegrant/v1beta1/query.rpc.Query"));
var _302 = __toESM(require("./gov/v1/query.rpc.Query"));
var _303 = __toESM(require("./gov/v1beta1/query.rpc.Query"));
var _304 = __toESM(require("./group/v1/query.rpc.Query"));
var _305 = __toESM(require("./mint/v1beta1/query.rpc.Query"));
var _306 = __toESM(require("./nft/v1beta1/query.rpc.Query"));
var _307 = __toESM(require("./orm/query/v1alpha1/query.rpc.Query"));
var _308 = __toESM(require("./params/v1beta1/query.rpc.Query"));
var _309 = __toESM(require("./slashing/v1beta1/query.rpc.Query"));
var _310 = __toESM(require("./staking/v1beta1/query.rpc.Query"));
var _311 = __toESM(require("./tx/v1beta1/service.rpc.Service"));
var _312 = __toESM(require("./upgrade/v1beta1/query.rpc.Query"));
var _313 = __toESM(require("./auth/v1beta1/tx.rpc.msg"));
var _314 = __toESM(require("./authz/v1beta1/tx.rpc.msg"));
var _315 = __toESM(require("./bank/v1beta1/tx.rpc.msg"));
var _316 = __toESM(require("./consensus/v1/tx.rpc.msg"));
var _317 = __toESM(require("./crisis/v1beta1/tx.rpc.msg"));
var _318 = __toESM(require("./distribution/v1beta1/tx.rpc.msg"));
var _319 = __toESM(require("./evidence/v1beta1/tx.rpc.msg"));
var _320 = __toESM(require("./feegrant/v1beta1/tx.rpc.msg"));
var _321 = __toESM(require("./gov/v1/tx.rpc.msg"));
var _322 = __toESM(require("./gov/v1beta1/tx.rpc.msg"));
var _323 = __toESM(require("./group/v1/tx.rpc.msg"));
var _324 = __toESM(require("./mint/v1beta1/tx.rpc.msg"));
var _325 = __toESM(require("./nft/v1beta1/tx.rpc.msg"));
var _326 = __toESM(require("./slashing/v1beta1/tx.rpc.msg"));
var _327 = __toESM(require("./staking/v1beta1/tx.rpc.msg"));
var _328 = __toESM(require("./upgrade/v1beta1/tx.rpc.msg"));
var _329 = __toESM(require("./vesting/v1beta1/tx.rpc.msg"));
var _396 = __toESM(require("./rpc.query"));
var _397 = __toESM(require("./rpc.tx"));
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
      ..._291
    };
  })(app = cosmos2.app || (cosmos2.app = {}));
  let auth;
  ((auth2) => {
    let module2;
    ((module3) => {
      module3.v1 = {
        ..._6
      };
    })(module2 = auth2.module || (auth2.module = {}));
    auth2.v1beta1 = {
      ..._7,
      ..._8,
      ..._9,
      ..._10,
      ..._257,
      ..._274,
      ..._292,
      ..._313
    };
  })(auth = cosmos2.auth || (cosmos2.auth = {}));
  let authz;
  ((authz2) => {
    let module2;
    ((module3) => {
      module3.v1 = {
        ..._11
      };
    })(module2 = authz2.module || (authz2.module = {}));
    authz2.v1beta1 = {
      ..._12,
      ..._13,
      ..._14,
      ..._15,
      ..._16,
      ..._258,
      ..._275,
      ..._293,
      ..._314
    };
  })(authz = cosmos2.authz || (cosmos2.authz = {}));
  let autocli;
  ((autocli2) => {
    autocli2.v1 = {
      ..._17,
      ..._18,
      ..._294
    };
  })(autocli = cosmos2.autocli || (cosmos2.autocli = {}));
  let bank;
  ((bank2) => {
    let module2;
    ((module3) => {
      module3.v1 = {
        ..._19
      };
    })(module2 = bank2.module || (bank2.module = {}));
    bank2.v1beta1 = {
      ..._20,
      ..._21,
      ..._22,
      ..._23,
      ..._24,
      ..._259,
      ..._276,
      ..._295,
      ..._315
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
        ..._296
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
        ..._297
      };
    })(tendermint = base2.tendermint || (base2.tendermint = {}));
    base2.v1beta1 = {
      ..._36
    };
  })(base = cosmos2.base || (cosmos2.base = {}));
  let capability;
  ((capability2) => {
    let module2;
    ((module3) => {
      module3.v1 = {
        ..._37
      };
    })(module2 = capability2.module || (capability2.module = {}));
    capability2.v1beta1 = {
      ..._38,
      ..._39
    };
  })(capability = cosmos2.capability || (cosmos2.capability = {}));
  let consensus;
  ((consensus2) => {
    let module2;
    ((module3) => {
      module3.v1 = {
        ..._40
      };
    })(module2 = consensus2.module || (consensus2.module = {}));
    consensus2.v1 = {
      ..._41,
      ..._42,
      ..._260,
      ..._277,
      ..._298,
      ..._316
    };
  })(consensus = cosmos2.consensus || (cosmos2.consensus = {}));
  let crisis;
  ((crisis2) => {
    let module2;
    ((module3) => {
      module3.v1 = {
        ..._43
      };
    })(module2 = crisis2.module || (crisis2.module = {}));
    crisis2.v1beta1 = {
      ..._44,
      ..._45,
      ..._261,
      ..._278,
      ..._317
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
    let module2;
    ((module3) => {
      module3.v1 = {
        ..._52
      };
    })(module2 = distribution2.module || (distribution2.module = {}));
    distribution2.v1beta1 = {
      ..._53,
      ..._54,
      ..._55,
      ..._56,
      ..._262,
      ..._279,
      ..._299,
      ..._318
    };
  })(distribution = cosmos2.distribution || (cosmos2.distribution = {}));
  let evidence;
  ((evidence2) => {
    let module2;
    ((module3) => {
      module3.v1 = {
        ..._57
      };
    })(module2 = evidence2.module || (evidence2.module = {}));
    evidence2.v1beta1 = {
      ..._58,
      ..._59,
      ..._60,
      ..._61,
      ..._263,
      ..._280,
      ..._300,
      ..._319
    };
  })(evidence = cosmos2.evidence || (cosmos2.evidence = {}));
  let feegrant;
  ((feegrant2) => {
    let module2;
    ((module3) => {
      module3.v1 = {
        ..._62
      };
    })(module2 = feegrant2.module || (feegrant2.module = {}));
    feegrant2.v1beta1 = {
      ..._63,
      ..._64,
      ..._65,
      ..._66,
      ..._264,
      ..._281,
      ..._301,
      ..._320
    };
  })(feegrant = cosmos2.feegrant || (cosmos2.feegrant = {}));
  let genutil;
  ((genutil2) => {
    let module2;
    ((module3) => {
      module3.v1 = {
        ..._67
      };
    })(module2 = genutil2.module || (genutil2.module = {}));
    genutil2.v1beta1 = {
      ..._68
    };
  })(genutil = cosmos2.genutil || (cosmos2.genutil = {}));
  let gov;
  ((gov2) => {
    let module2;
    ((module3) => {
      module3.v1 = {
        ..._69
      };
    })(module2 = gov2.module || (gov2.module = {}));
    gov2.v1 = {
      ..._70,
      ..._71,
      ..._72,
      ..._73,
      ..._265,
      ..._282,
      ..._302,
      ..._321
    };
    gov2.v1beta1 = {
      ..._74,
      ..._75,
      ..._76,
      ..._77,
      ..._266,
      ..._283,
      ..._303,
      ..._322
    };
  })(gov = cosmos2.gov || (cosmos2.gov = {}));
  let group;
  ((group2) => {
    let module2;
    ((module3) => {
      module3.v1 = {
        ..._78
      };
    })(module2 = group2.module || (group2.module = {}));
    group2.v1 = {
      ..._79,
      ..._80,
      ..._81,
      ..._82,
      ..._83,
      ..._267,
      ..._284,
      ..._304,
      ..._323
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
    let module2;
    ((module3) => {
      module3.v1 = {
        ..._85
      };
    })(module2 = mint2.module || (mint2.module = {}));
    mint2.v1beta1 = {
      ..._86,
      ..._87,
      ..._88,
      ..._89,
      ..._268,
      ..._285,
      ..._305,
      ..._324
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
      ..._269,
      ..._286,
      ..._306,
      ..._325
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
        ..._307
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
      ..._308
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
      ..._270,
      ..._287,
      ..._309,
      ..._326
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
      ..._117,
      ..._271,
      ..._288,
      ..._310,
      ..._327
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
      ..._311
    };
  })(tx = cosmos2.tx || (cosmos2.tx = {}));
  let upgrade;
  ((upgrade2) => {
    let module2;
    ((module3) => {
      module3.v1 = {
        ..._122
      };
    })(module2 = upgrade2.module || (upgrade2.module = {}));
    upgrade2.v1beta1 = {
      ..._123,
      ..._124,
      ..._125,
      ..._272,
      ..._289,
      ..._312,
      ..._328
    };
  })(upgrade = cosmos2.upgrade || (cosmos2.upgrade = {}));
  let vesting;
  ((vesting2) => {
    let module2;
    ((module3) => {
      module3.v1 = {
        ..._126
      };
    })(module2 = vesting2.module || (vesting2.module = {}));
    vesting2.v1beta1 = {
      ..._127,
      ..._128,
      ..._273,
      ..._290,
      ..._329
    };
  })(vesting = cosmos2.vesting || (cosmos2.vesting = {}));
  cosmos2.ClientFactory = {
    ..._396,
    ..._397
  };
})(cosmos || (cosmos = {}));
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  cosmos
});
