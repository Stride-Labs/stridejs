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
import * as _265 from "./auth/v1beta1/tx.amino";
import * as _266 from "./authz/v1beta1/tx.amino";
import * as _267 from "./bank/v1beta1/tx.amino";
import * as _268 from "./consensus/v1/tx.amino";
import * as _269 from "./crisis/v1beta1/tx.amino";
import * as _270 from "./distribution/v1beta1/tx.amino";
import * as _271 from "./evidence/v1beta1/tx.amino";
import * as _272 from "./feegrant/v1beta1/tx.amino";
import * as _273 from "./gov/v1/tx.amino";
import * as _274 from "./gov/v1beta1/tx.amino";
import * as _275 from "./group/v1/tx.amino";
import * as _276 from "./mint/v1beta1/tx.amino";
import * as _277 from "./nft/v1beta1/tx.amino";
import * as _278 from "./slashing/v1beta1/tx.amino";
import * as _279 from "./staking/v1beta1/tx.amino";
import * as _280 from "./upgrade/v1beta1/tx.amino";
import * as _281 from "./vesting/v1beta1/tx.amino";
import * as _282 from "./auth/v1beta1/tx.registry";
import * as _283 from "./authz/v1beta1/tx.registry";
import * as _284 from "./bank/v1beta1/tx.registry";
import * as _285 from "./consensus/v1/tx.registry";
import * as _286 from "./crisis/v1beta1/tx.registry";
import * as _287 from "./distribution/v1beta1/tx.registry";
import * as _288 from "./evidence/v1beta1/tx.registry";
import * as _289 from "./feegrant/v1beta1/tx.registry";
import * as _290 from "./gov/v1/tx.registry";
import * as _291 from "./gov/v1beta1/tx.registry";
import * as _292 from "./group/v1/tx.registry";
import * as _293 from "./mint/v1beta1/tx.registry";
import * as _294 from "./nft/v1beta1/tx.registry";
import * as _295 from "./slashing/v1beta1/tx.registry";
import * as _296 from "./staking/v1beta1/tx.registry";
import * as _297 from "./upgrade/v1beta1/tx.registry";
import * as _298 from "./vesting/v1beta1/tx.registry";
import * as _299 from "./app/v1alpha1/query.rpc.Query";
import * as _300 from "./auth/v1beta1/query.rpc.Query";
import * as _301 from "./authz/v1beta1/query.rpc.Query";
import * as _302 from "./autocli/v1/query.rpc.Query";
import * as _303 from "./bank/v1beta1/query.rpc.Query";
import * as _304 from "./base/node/v1beta1/query.rpc.Service";
import * as _305 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _306 from "./consensus/v1/query.rpc.Query";
import * as _307 from "./distribution/v1beta1/query.rpc.Query";
import * as _308 from "./evidence/v1beta1/query.rpc.Query";
import * as _309 from "./feegrant/v1beta1/query.rpc.Query";
import * as _310 from "./gov/v1/query.rpc.Query";
import * as _311 from "./gov/v1beta1/query.rpc.Query";
import * as _312 from "./group/v1/query.rpc.Query";
import * as _313 from "./mint/v1beta1/query.rpc.Query";
import * as _314 from "./nft/v1beta1/query.rpc.Query";
import * as _315 from "./orm/query/v1alpha1/query.rpc.Query";
import * as _316 from "./params/v1beta1/query.rpc.Query";
import * as _317 from "./slashing/v1beta1/query.rpc.Query";
import * as _318 from "./staking/v1beta1/query.rpc.Query";
import * as _319 from "./tx/v1beta1/service.rpc.Service";
import * as _320 from "./upgrade/v1beta1/query.rpc.Query";
import * as _321 from "./auth/v1beta1/tx.rpc.msg";
import * as _322 from "./authz/v1beta1/tx.rpc.msg";
import * as _323 from "./bank/v1beta1/tx.rpc.msg";
import * as _324 from "./consensus/v1/tx.rpc.msg";
import * as _325 from "./crisis/v1beta1/tx.rpc.msg";
import * as _326 from "./distribution/v1beta1/tx.rpc.msg";
import * as _327 from "./evidence/v1beta1/tx.rpc.msg";
import * as _328 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _329 from "./gov/v1/tx.rpc.msg";
import * as _330 from "./gov/v1beta1/tx.rpc.msg";
import * as _331 from "./group/v1/tx.rpc.msg";
import * as _332 from "./mint/v1beta1/tx.rpc.msg";
import * as _333 from "./nft/v1beta1/tx.rpc.msg";
import * as _334 from "./slashing/v1beta1/tx.rpc.msg";
import * as _335 from "./staking/v1beta1/tx.rpc.msg";
import * as _336 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _337 from "./vesting/v1beta1/tx.rpc.msg";
import * as _411 from "./rpc.query";
import * as _412 from "./rpc.tx";
export namespace cosmos {
  export namespace app {
    export namespace runtime {
      export const v1alpha1 = {
        ..._2
      };
    }
    export const v1alpha1 = {
      ..._3,
      ..._4,
      ..._5,
      ..._299
    };
  }
  export namespace auth {
    export namespace module {
      export const v1 = {
        ..._6
      };
    }
    export const v1beta1 = {
      ..._7,
      ..._8,
      ..._9,
      ..._10,
      ..._265,
      ..._282,
      ..._300,
      ..._321
    };
  }
  export namespace authz {
    export namespace module {
      export const v1 = {
        ..._11
      };
    }
    export const v1beta1 = {
      ..._12,
      ..._13,
      ..._14,
      ..._15,
      ..._16,
      ..._266,
      ..._283,
      ..._301,
      ..._322
    };
  }
  export namespace autocli {
    export const v1 = {
      ..._17,
      ..._18,
      ..._302
    };
  }
  export namespace bank {
    export namespace module {
      export const v1 = {
        ..._19
      };
    }
    export const v1beta1 = {
      ..._20,
      ..._21,
      ..._22,
      ..._23,
      ..._24,
      ..._267,
      ..._284,
      ..._303,
      ..._323
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._25
      };
    }
    export namespace kv {
      export const v1beta1 = {
        ..._26
      };
    }
    export namespace node {
      export const v1beta1 = {
        ..._27,
        ..._304
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._28
      };
    }
    export namespace reflection {
      export const v1beta1 = {
        ..._29
      };
      export const v2alpha1 = {
        ..._30
      };
    }
    export namespace snapshots {
      export const v1beta1 = {
        ..._31
      };
    }
    export namespace store {
      export const v1beta1 = {
        ..._32,
        ..._33
      };
    }
    export namespace tendermint {
      export const v1beta1 = {
        ..._34,
        ..._35,
        ..._305
      };
    }
    export const v1beta1 = {
      ..._36
    };
  }
  export namespace capability {
    export namespace module {
      export const v1 = {
        ..._37
      };
    }
    export const v1beta1 = {
      ..._38,
      ..._39
    };
  }
  export namespace consensus {
    export namespace module {
      export const v1 = {
        ..._40
      };
    }
    export const v1 = {
      ..._41,
      ..._42,
      ..._268,
      ..._285,
      ..._306,
      ..._324
    };
  }
  export namespace crisis {
    export namespace module {
      export const v1 = {
        ..._43
      };
    }
    export const v1beta1 = {
      ..._44,
      ..._45,
      ..._269,
      ..._286,
      ..._325
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._46
    };
    export namespace hd {
      export const v1 = {
        ..._47
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._48
      };
    }
    export const multisig = {
      ..._49
    };
    export const secp256k1 = {
      ..._50
    };
    export const secp256r1 = {
      ..._51
    };
  }
  export namespace distribution {
    export namespace module {
      export const v1 = {
        ..._52
      };
    }
    export const v1beta1 = {
      ..._53,
      ..._54,
      ..._55,
      ..._56,
      ..._270,
      ..._287,
      ..._307,
      ..._326
    };
  }
  export namespace evidence {
    export namespace module {
      export const v1 = {
        ..._57
      };
    }
    export const v1beta1 = {
      ..._58,
      ..._59,
      ..._60,
      ..._61,
      ..._271,
      ..._288,
      ..._308,
      ..._327
    };
  }
  export namespace feegrant {
    export namespace module {
      export const v1 = {
        ..._62
      };
    }
    export const v1beta1 = {
      ..._63,
      ..._64,
      ..._65,
      ..._66,
      ..._272,
      ..._289,
      ..._309,
      ..._328
    };
  }
  export namespace genutil {
    export namespace module {
      export const v1 = {
        ..._67
      };
    }
    export const v1beta1 = {
      ..._68
    };
  }
  export namespace gov {
    export namespace module {
      export const v1 = {
        ..._69
      };
    }
    export const v1 = {
      ..._70,
      ..._71,
      ..._72,
      ..._73,
      ..._273,
      ..._290,
      ..._310,
      ..._329
    };
    export const v1beta1 = {
      ..._74,
      ..._75,
      ..._76,
      ..._77,
      ..._274,
      ..._291,
      ..._311,
      ..._330
    };
  }
  export namespace group {
    export namespace module {
      export const v1 = {
        ..._78
      };
    }
    export const v1 = {
      ..._79,
      ..._80,
      ..._81,
      ..._82,
      ..._83,
      ..._275,
      ..._292,
      ..._312,
      ..._331
    };
  }
  export namespace ics23 {
    export const v1 = {
      ..._84
    };
  }
  export namespace mint {
    export namespace module {
      export const v1 = {
        ..._85
      };
    }
    export const v1beta1 = {
      ..._86,
      ..._87,
      ..._88,
      ..._89,
      ..._276,
      ..._293,
      ..._313,
      ..._332
    };
  }
  export namespace msg {
    export const v1 = {
      ..._90
    };
  }
  export namespace nft {
    export namespace module {
      export const v1 = {
        ..._91
      };
    }
    export const v1beta1 = {
      ..._92,
      ..._93,
      ..._94,
      ..._95,
      ..._96,
      ..._277,
      ..._294,
      ..._314,
      ..._333
    };
  }
  export namespace orm {
    export namespace module {
      export const v1alpha1 = {
        ..._97
      };
    }
    export namespace query {
      export const v1alpha1 = {
        ..._98,
        ..._315
      };
    }
    export const v1 = {
      ..._99
    };
    export const v1alpha1 = {
      ..._100
    };
  }
  export namespace params {
    export namespace module {
      export const v1 = {
        ..._101
      };
    }
    export const v1beta1 = {
      ..._102,
      ..._103,
      ..._316
    };
  }
  export namespace query {
    export const v1 = {
      ..._104
    };
  }
  export namespace reflection {
    export const v1 = {
      ..._105
    };
  }
  export namespace slashing {
    export namespace module {
      export const v1 = {
        ..._106
      };
    }
    export const v1beta1 = {
      ..._107,
      ..._108,
      ..._109,
      ..._110,
      ..._278,
      ..._295,
      ..._317,
      ..._334
    };
  }
  export namespace staking {
    export namespace module {
      export const v1 = {
        ..._111
      };
    }
    export const v1beta1 = {
      ..._112,
      ..._113,
      ..._114,
      ..._115,
      ..._116,
      ..._117,
      ..._279,
      ..._296,
      ..._318,
      ..._335
    };
  }
  export namespace tx {
    export namespace config {
      export const v1 = {
        ..._118
      };
    }
    export namespace signing {
      export const v1beta1 = {
        ..._119
      };
    }
    export const v1beta1 = {
      ..._120,
      ..._121,
      ..._319
    };
  }
  export namespace upgrade {
    export namespace module {
      export const v1 = {
        ..._122
      };
    }
    export const v1beta1 = {
      ..._123,
      ..._124,
      ..._125,
      ..._280,
      ..._297,
      ..._320,
      ..._336
    };
  }
  export namespace vesting {
    export namespace module {
      export const v1 = {
        ..._126
      };
    }
    export const v1beta1 = {
      ..._127,
      ..._128,
      ..._281,
      ..._298,
      ..._337
    };
  }
  export const ClientFactory = {
    ..._411,
    ..._412
  };
}