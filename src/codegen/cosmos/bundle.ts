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
import * as _195 from "./authz/v1beta1/tx.amino";
import * as _196 from "./bank/v1beta1/tx.amino";
import * as _197 from "./crisis/v1beta1/tx.amino";
import * as _198 from "./distribution/v1beta1/tx.amino";
import * as _199 from "./evidence/v1beta1/tx.amino";
import * as _200 from "./feegrant/v1beta1/tx.amino";
import * as _201 from "./gov/v1beta1/tx.amino";
import * as _202 from "./slashing/v1beta1/tx.amino";
import * as _203 from "./staking/v1beta1/tx.amino";
import * as _204 from "./vesting/v1beta1/tx.amino";
import * as _205 from "./authz/v1beta1/tx.registry";
import * as _206 from "./bank/v1beta1/tx.registry";
import * as _207 from "./crisis/v1beta1/tx.registry";
import * as _208 from "./distribution/v1beta1/tx.registry";
import * as _209 from "./evidence/v1beta1/tx.registry";
import * as _210 from "./feegrant/v1beta1/tx.registry";
import * as _211 from "./gov/v1beta1/tx.registry";
import * as _212 from "./slashing/v1beta1/tx.registry";
import * as _213 from "./staking/v1beta1/tx.registry";
import * as _214 from "./vesting/v1beta1/tx.registry";
import * as _215 from "./auth/v1beta1/query.rpc.Query";
import * as _216 from "./authz/v1beta1/query.rpc.Query";
import * as _217 from "./bank/v1beta1/query.rpc.Query";
import * as _218 from "./base/node/v1beta1/query.rpc.Service";
import * as _219 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _220 from "./distribution/v1beta1/query.rpc.Query";
import * as _221 from "./evidence/v1beta1/query.rpc.Query";
import * as _222 from "./feegrant/v1beta1/query.rpc.Query";
import * as _223 from "./gov/v1beta1/query.rpc.Query";
import * as _224 from "./mint/v1beta1/query.rpc.Query";
import * as _225 from "./params/v1beta1/query.rpc.Query";
import * as _226 from "./slashing/v1beta1/query.rpc.Query";
import * as _227 from "./staking/v1beta1/query.rpc.Query";
import * as _228 from "./tx/v1beta1/service.rpc.Service";
import * as _229 from "./upgrade/v1beta1/query.rpc.Query";
import * as _230 from "./authz/v1beta1/tx.rpc.msg";
import * as _231 from "./bank/v1beta1/tx.rpc.msg";
import * as _232 from "./crisis/v1beta1/tx.rpc.msg";
import * as _233 from "./distribution/v1beta1/tx.rpc.msg";
import * as _234 from "./evidence/v1beta1/tx.rpc.msg";
import * as _235 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _236 from "./gov/v1beta1/tx.rpc.msg";
import * as _237 from "./slashing/v1beta1/tx.rpc.msg";
import * as _238 from "./staking/v1beta1/tx.rpc.msg";
import * as _239 from "./vesting/v1beta1/tx.rpc.msg";
import * as _297 from "./rpc.query";
import * as _298 from "./rpc.tx";
export namespace cosmos {
  export namespace auth {
    export const v1beta1 = {
      ..._3,
      ..._4,
      ..._5,
      ..._215
    };
  }
  export namespace authz {
    export const v1beta1 = {
      ..._6,
      ..._7,
      ..._8,
      ..._9,
      ..._10,
      ..._195,
      ..._205,
      ..._216,
      ..._230
    };
  }
  export namespace bank {
    export const v1beta1 = {
      ..._11,
      ..._12,
      ..._13,
      ..._14,
      ..._15,
      ..._196,
      ..._206,
      ..._217,
      ..._231
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._16
      };
    }
    export namespace kv {
      export const v1beta1 = {
        ..._17
      };
    }
    export namespace node {
      export const v1beta1 = {
        ..._18,
        ..._218
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._19
      };
    }
    export namespace reflection {
      export const v1beta1 = {
        ..._20
      };
      export const v2alpha1 = {
        ..._21
      };
    }
    export namespace snapshots {
      export const v1beta1 = {
        ..._22
      };
    }
    export namespace store {
      export const v1beta1 = {
        ..._23,
        ..._24
      };
    }
    export namespace tendermint {
      export const v1beta1 = {
        ..._25,
        ..._219
      };
    }
    export const v1beta1 = {
      ..._26
    };
  }
  export namespace capability {
    export const v1beta1 = {
      ..._27,
      ..._28
    };
  }
  export namespace crisis {
    export const v1beta1 = {
      ..._29,
      ..._30,
      ..._197,
      ..._207,
      ..._232
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._31
    };
    export const multisig = {
      ..._32
    };
    export const secp256k1 = {
      ..._33
    };
    export const secp256r1 = {
      ..._34
    };
  }
  export namespace distribution {
    export const v1beta1 = {
      ..._35,
      ..._36,
      ..._37,
      ..._38,
      ..._198,
      ..._208,
      ..._220,
      ..._233
    };
  }
  export namespace evidence {
    export const v1beta1 = {
      ..._39,
      ..._40,
      ..._41,
      ..._42,
      ..._199,
      ..._209,
      ..._221,
      ..._234
    };
  }
  export namespace feegrant {
    export const v1beta1 = {
      ..._43,
      ..._44,
      ..._45,
      ..._46,
      ..._200,
      ..._210,
      ..._222,
      ..._235
    };
  }
  export namespace genutil {
    export const v1beta1 = {
      ..._47
    };
  }
  export namespace gov {
    export const v1beta1 = {
      ..._48,
      ..._49,
      ..._50,
      ..._51,
      ..._201,
      ..._211,
      ..._223,
      ..._236
    };
  }
  export namespace ics23 {
    export const v1 = {
      ..._52
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._53,
      ..._54,
      ..._55,
      ..._224
    };
  }
  export namespace msg {
    export const v1 = {
      ..._56
    };
  }
  export namespace params {
    export const v1beta1 = {
      ..._57,
      ..._58,
      ..._225
    };
  }
  export namespace slashing {
    export const v1beta1 = {
      ..._59,
      ..._60,
      ..._61,
      ..._62,
      ..._202,
      ..._212,
      ..._226,
      ..._237
    };
  }
  export namespace staking {
    export const v1beta1 = {
      ..._63,
      ..._64,
      ..._65,
      ..._66,
      ..._67,
      ..._68,
      ..._203,
      ..._213,
      ..._227,
      ..._238
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = {
        ..._69
      };
    }
    export const v1beta1 = {
      ..._70,
      ..._71,
      ..._228
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._72,
      ..._73,
      ..._229
    };
  }
  export namespace vesting {
    export const v1beta1 = {
      ..._74,
      ..._75,
      ..._204,
      ..._214,
      ..._239
    };
  }
  export const ClientFactory = {
    ..._297,
    ..._298
  };
}