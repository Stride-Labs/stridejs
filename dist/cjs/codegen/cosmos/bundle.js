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
var _3 = __toESM(require("./auth/v1beta1/auth"));
var _4 = __toESM(require("./auth/v1beta1/genesis"));
var _5 = __toESM(require("./auth/v1beta1/query"));
var _6 = __toESM(require("./authz/v1beta1/authz"));
var _7 = __toESM(require("./authz/v1beta1/event"));
var _8 = __toESM(require("./authz/v1beta1/genesis"));
var _9 = __toESM(require("./authz/v1beta1/query"));
var _10 = __toESM(require("./authz/v1beta1/tx"));
var _11 = __toESM(require("./bank/v1beta1/authz"));
var _12 = __toESM(require("./bank/v1beta1/bank"));
var _13 = __toESM(require("./bank/v1beta1/genesis"));
var _14 = __toESM(require("./bank/v1beta1/query"));
var _15 = __toESM(require("./bank/v1beta1/tx"));
var _16 = __toESM(require("./base/abci/v1beta1/abci"));
var _17 = __toESM(require("./base/kv/v1beta1/kv"));
var _18 = __toESM(require("./base/node/v1beta1/query"));
var _19 = __toESM(require("./base/query/v1beta1/pagination"));
var _20 = __toESM(require("./base/reflection/v1beta1/reflection"));
var _21 = __toESM(require("./base/reflection/v2alpha1/reflection"));
var _22 = __toESM(require("./base/snapshots/v1beta1/snapshot"));
var _23 = __toESM(require("./base/store/v1beta1/commit_info"));
var _24 = __toESM(require("./base/store/v1beta1/listening"));
var _25 = __toESM(require("./base/tendermint/v1beta1/query"));
var _26 = __toESM(require("./base/v1beta1/coin"));
var _27 = __toESM(require("./capability/v1beta1/capability"));
var _28 = __toESM(require("./capability/v1beta1/genesis"));
var _29 = __toESM(require("./crisis/v1beta1/genesis"));
var _30 = __toESM(require("./crisis/v1beta1/tx"));
var _31 = __toESM(require("./crypto/ed25519/keys"));
var _32 = __toESM(require("./crypto/multisig/keys"));
var _33 = __toESM(require("./crypto/secp256k1/keys"));
var _34 = __toESM(require("./crypto/secp256r1/keys"));
var _35 = __toESM(require("./distribution/v1beta1/distribution"));
var _36 = __toESM(require("./distribution/v1beta1/genesis"));
var _37 = __toESM(require("./distribution/v1beta1/query"));
var _38 = __toESM(require("./distribution/v1beta1/tx"));
var _39 = __toESM(require("./evidence/v1beta1/evidence"));
var _40 = __toESM(require("./evidence/v1beta1/genesis"));
var _41 = __toESM(require("./evidence/v1beta1/query"));
var _42 = __toESM(require("./evidence/v1beta1/tx"));
var _43 = __toESM(require("./feegrant/v1beta1/feegrant"));
var _44 = __toESM(require("./feegrant/v1beta1/genesis"));
var _45 = __toESM(require("./feegrant/v1beta1/query"));
var _46 = __toESM(require("./feegrant/v1beta1/tx"));
var _47 = __toESM(require("./genutil/v1beta1/genesis"));
var _48 = __toESM(require("./gov/v1beta1/genesis"));
var _49 = __toESM(require("./gov/v1beta1/gov"));
var _50 = __toESM(require("./gov/v1beta1/query"));
var _51 = __toESM(require("./gov/v1beta1/tx"));
var _52 = __toESM(require("./ics23/v1/proofs"));
var _53 = __toESM(require("./mint/v1beta1/genesis"));
var _54 = __toESM(require("./mint/v1beta1/mint"));
var _55 = __toESM(require("./mint/v1beta1/query"));
var _56 = __toESM(require("./msg/v1/msg"));
var _57 = __toESM(require("./params/v1beta1/params"));
var _58 = __toESM(require("./params/v1beta1/query"));
var _59 = __toESM(require("./slashing/v1beta1/genesis"));
var _60 = __toESM(require("./slashing/v1beta1/query"));
var _61 = __toESM(require("./slashing/v1beta1/slashing"));
var _62 = __toESM(require("./slashing/v1beta1/tx"));
var _63 = __toESM(require("./staking/v1beta1/authz"));
var _64 = __toESM(require("./staking/v1beta1/genesis"));
var _65 = __toESM(require("./staking/v1beta1/lsm_tx"));
var _66 = __toESM(require("./staking/v1beta1/query"));
var _67 = __toESM(require("./staking/v1beta1/staking"));
var _68 = __toESM(require("./staking/v1beta1/tx"));
var _69 = __toESM(require("./tx/signing/v1beta1/signing"));
var _70 = __toESM(require("./tx/v1beta1/service"));
var _71 = __toESM(require("./tx/v1beta1/tx"));
var _72 = __toESM(require("./upgrade/v1beta1/query"));
var _73 = __toESM(require("./upgrade/v1beta1/upgrade"));
var _74 = __toESM(require("./vesting/v1beta1/tx"));
var _75 = __toESM(require("./vesting/v1beta1/vesting"));
var _204 = __toESM(require("./authz/v1beta1/tx.amino"));
var _205 = __toESM(require("./bank/v1beta1/tx.amino"));
var _206 = __toESM(require("./crisis/v1beta1/tx.amino"));
var _207 = __toESM(require("./distribution/v1beta1/tx.amino"));
var _208 = __toESM(require("./evidence/v1beta1/tx.amino"));
var _209 = __toESM(require("./feegrant/v1beta1/tx.amino"));
var _210 = __toESM(require("./gov/v1beta1/tx.amino"));
var _211 = __toESM(require("./slashing/v1beta1/tx.amino"));
var _212 = __toESM(require("./staking/v1beta1/tx.amino"));
var _213 = __toESM(require("./vesting/v1beta1/tx.amino"));
var _214 = __toESM(require("./authz/v1beta1/tx.registry"));
var _215 = __toESM(require("./bank/v1beta1/tx.registry"));
var _216 = __toESM(require("./crisis/v1beta1/tx.registry"));
var _217 = __toESM(require("./distribution/v1beta1/tx.registry"));
var _218 = __toESM(require("./evidence/v1beta1/tx.registry"));
var _219 = __toESM(require("./feegrant/v1beta1/tx.registry"));
var _220 = __toESM(require("./gov/v1beta1/tx.registry"));
var _221 = __toESM(require("./slashing/v1beta1/tx.registry"));
var _222 = __toESM(require("./staking/v1beta1/tx.registry"));
var _223 = __toESM(require("./vesting/v1beta1/tx.registry"));
var _224 = __toESM(require("./auth/v1beta1/query.rpc.Query"));
var _225 = __toESM(require("./authz/v1beta1/query.rpc.Query"));
var _226 = __toESM(require("./bank/v1beta1/query.rpc.Query"));
var _227 = __toESM(require("./base/node/v1beta1/query.rpc.Service"));
var _228 = __toESM(require("./base/tendermint/v1beta1/query.rpc.Service"));
var _229 = __toESM(require("./distribution/v1beta1/query.rpc.Query"));
var _230 = __toESM(require("./evidence/v1beta1/query.rpc.Query"));
var _231 = __toESM(require("./feegrant/v1beta1/query.rpc.Query"));
var _232 = __toESM(require("./gov/v1beta1/query.rpc.Query"));
var _233 = __toESM(require("./mint/v1beta1/query.rpc.Query"));
var _234 = __toESM(require("./params/v1beta1/query.rpc.Query"));
var _235 = __toESM(require("./slashing/v1beta1/query.rpc.Query"));
var _236 = __toESM(require("./staking/v1beta1/query.rpc.Query"));
var _237 = __toESM(require("./tx/v1beta1/service.rpc.Service"));
var _238 = __toESM(require("./upgrade/v1beta1/query.rpc.Query"));
var _239 = __toESM(require("./authz/v1beta1/tx.rpc.msg"));
var _240 = __toESM(require("./bank/v1beta1/tx.rpc.msg"));
var _241 = __toESM(require("./crisis/v1beta1/tx.rpc.msg"));
var _242 = __toESM(require("./distribution/v1beta1/tx.rpc.msg"));
var _243 = __toESM(require("./evidence/v1beta1/tx.rpc.msg"));
var _244 = __toESM(require("./feegrant/v1beta1/tx.rpc.msg"));
var _245 = __toESM(require("./gov/v1beta1/tx.rpc.msg"));
var _246 = __toESM(require("./slashing/v1beta1/tx.rpc.msg"));
var _247 = __toESM(require("./staking/v1beta1/tx.rpc.msg"));
var _248 = __toESM(require("./vesting/v1beta1/tx.rpc.msg"));
var _315 = __toESM(require("./rpc.query"));
var _316 = __toESM(require("./rpc.tx"));
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  cosmos
});
