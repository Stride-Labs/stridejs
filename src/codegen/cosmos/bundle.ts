import * as _3 from "./auth/v1beta1/auth";
import * as _4 from "./auth/v1beta1/auth";
import * as _5 from "./auth/v1beta1/genesis";
import * as _6 from "./auth/v1beta1/query";
import * as _7 from "./base/query/v1beta1/pagination";
import * as _8 from "./base/query/v1beta1/pagination";
import * as _9 from "./base/v1beta1/coin";
import * as _10 from "./base/v1beta1/coin";
import * as _11 from "./base/abci/v1beta1/abci";
import * as _12 from "./base/kv/v1beta1/kv";
import * as _13 from "./base/node/v1beta1/query";
import * as _14 from "./base/reflection/v1beta1/reflection";
import * as _15 from "./base/reflection/v2alpha1/reflection";
import * as _16 from "./base/snapshots/v1beta1/snapshot";
import * as _17 from "./base/store/v1beta1/commit_info";
import * as _18 from "./base/store/v1beta1/listening";
import * as _19 from "./base/tendermint/v1beta1/query";
import * as _20 from "./msg/v1/msg";
import * as _21 from "./staking/v1beta1/lsm_tx";
import * as _22 from "./staking/v1beta1/authz";
import * as _23 from "./staking/v1beta1/genesis";
import * as _24 from "./staking/v1beta1/query";
import * as _25 from "./staking/v1beta1/staking";
import * as _26 from "./staking/v1beta1/tx";
import * as _27 from "./authz/v1beta1/authz";
import * as _28 from "./authz/v1beta1/event";
import * as _29 from "./authz/v1beta1/genesis";
import * as _30 from "./authz/v1beta1/query";
import * as _31 from "./authz/v1beta1/tx";
import * as _32 from "./bank/v1beta1/authz";
import * as _33 from "./bank/v1beta1/bank";
import * as _34 from "./bank/v1beta1/genesis";
import * as _35 from "./bank/v1beta1/query";
import * as _36 from "./bank/v1beta1/tx";
import * as _37 from "./capability/v1beta1/capability";
import * as _38 from "./capability/v1beta1/genesis";
import * as _39 from "./crisis/v1beta1/genesis";
import * as _40 from "./crisis/v1beta1/tx";
import * as _41 from "./crypto/ed25519/keys";
import * as _42 from "./crypto/multisig/keys";
import * as _43 from "./crypto/secp256k1/keys";
import * as _44 from "./crypto/secp256r1/keys";
import * as _45 from "./distribution/v1beta1/distribution";
import * as _46 from "./distribution/v1beta1/genesis";
import * as _47 from "./distribution/v1beta1/query";
import * as _48 from "./distribution/v1beta1/tx";
import * as _49 from "./evidence/v1beta1/evidence";
import * as _50 from "./evidence/v1beta1/genesis";
import * as _51 from "./evidence/v1beta1/query";
import * as _52 from "./evidence/v1beta1/tx";
import * as _53 from "./feegrant/v1beta1/feegrant";
import * as _54 from "./feegrant/v1beta1/genesis";
import * as _55 from "./feegrant/v1beta1/query";
import * as _56 from "./feegrant/v1beta1/tx";
import * as _57 from "./genutil/v1beta1/genesis";
import * as _58 from "./gov/v1beta1/genesis";
import * as _59 from "./gov/v1beta1/gov";
import * as _60 from "./gov/v1beta1/query";
import * as _61 from "./gov/v1beta1/tx";
import * as _62 from "./mint/v1beta1/genesis";
import * as _63 from "./mint/v1beta1/mint";
import * as _64 from "./mint/v1beta1/query";
import * as _65 from "./params/v1beta1/params";
import * as _66 from "./params/v1beta1/query";
import * as _67 from "./slashing/v1beta1/genesis";
import * as _68 from "./slashing/v1beta1/query";
import * as _69 from "./slashing/v1beta1/slashing";
import * as _70 from "./slashing/v1beta1/tx";
import * as _71 from "./tx/signing/v1beta1/signing";
import * as _72 from "./tx/v1beta1/service";
import * as _73 from "./tx/v1beta1/tx";
import * as _74 from "./upgrade/v1beta1/query";
import * as _75 from "./upgrade/v1beta1/upgrade";
import * as _76 from "./vesting/v1beta1/tx";
import * as _77 from "./vesting/v1beta1/vesting";
import * as _162 from "./authz/v1beta1/tx.amino";
import * as _163 from "./bank/v1beta1/tx.amino";
import * as _164 from "./crisis/v1beta1/tx.amino";
import * as _165 from "./distribution/v1beta1/tx.amino";
import * as _166 from "./evidence/v1beta1/tx.amino";
import * as _167 from "./feegrant/v1beta1/tx.amino";
import * as _168 from "./gov/v1beta1/tx.amino";
import * as _169 from "./slashing/v1beta1/tx.amino";
import * as _170 from "./staking/v1beta1/tx.amino";
import * as _171 from "./vesting/v1beta1/tx.amino";
import * as _172 from "./authz/v1beta1/tx.registry";
import * as _173 from "./bank/v1beta1/tx.registry";
import * as _174 from "./crisis/v1beta1/tx.registry";
import * as _175 from "./distribution/v1beta1/tx.registry";
import * as _176 from "./evidence/v1beta1/tx.registry";
import * as _177 from "./feegrant/v1beta1/tx.registry";
import * as _178 from "./gov/v1beta1/tx.registry";
import * as _179 from "./slashing/v1beta1/tx.registry";
import * as _180 from "./staking/v1beta1/tx.registry";
import * as _181 from "./vesting/v1beta1/tx.registry";
import * as _182 from "./auth/v1beta1/query.lcd";
import * as _183 from "./authz/v1beta1/query.lcd";
import * as _184 from "./bank/v1beta1/query.lcd";
import * as _185 from "./base/node/v1beta1/query.lcd";
import * as _186 from "./base/tendermint/v1beta1/query.lcd";
import * as _187 from "./distribution/v1beta1/query.lcd";
import * as _188 from "./evidence/v1beta1/query.lcd";
import * as _189 from "./feegrant/v1beta1/query.lcd";
import * as _190 from "./gov/v1beta1/query.lcd";
import * as _191 from "./mint/v1beta1/query.lcd";
import * as _192 from "./params/v1beta1/query.lcd";
import * as _193 from "./slashing/v1beta1/query.lcd";
import * as _194 from "./staking/v1beta1/query.lcd";
import * as _195 from "./tx/v1beta1/service.lcd";
import * as _196 from "./upgrade/v1beta1/query.lcd";
import * as _197 from "./auth/v1beta1/query.rpc.query";
import * as _198 from "./authz/v1beta1/query.rpc.query";
import * as _199 from "./bank/v1beta1/query.rpc.query";
import * as _200 from "./base/node/v1beta1/query.rpc.svc";
import * as _201 from "./base/tendermint/v1beta1/query.rpc.svc";
import * as _202 from "./distribution/v1beta1/query.rpc.query";
import * as _203 from "./evidence/v1beta1/query.rpc.query";
import * as _204 from "./feegrant/v1beta1/query.rpc.query";
import * as _205 from "./gov/v1beta1/query.rpc.query";
import * as _206 from "./mint/v1beta1/query.rpc.query";
import * as _207 from "./params/v1beta1/query.rpc.query";
import * as _208 from "./slashing/v1beta1/query.rpc.query";
import * as _209 from "./staking/v1beta1/query.rpc.query";
import * as _210 from "./tx/v1beta1/service.rpc.svc";
import * as _211 from "./upgrade/v1beta1/query.rpc.query";
import * as _212 from "./authz/v1beta1/tx.rpc.msg";
import * as _213 from "./bank/v1beta1/tx.rpc.msg";
import * as _214 from "./crisis/v1beta1/tx.rpc.msg";
import * as _215 from "./distribution/v1beta1/tx.rpc.msg";
import * as _216 from "./evidence/v1beta1/tx.rpc.msg";
import * as _217 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _218 from "./gov/v1beta1/tx.rpc.msg";
import * as _219 from "./slashing/v1beta1/tx.rpc.msg";
import * as _220 from "./staking/v1beta1/tx.rpc.msg";
import * as _221 from "./vesting/v1beta1/tx.rpc.msg";
import * as _260 from "./lcd";
import * as _261 from "./rpc.query";
import * as _262 from "./rpc.tx";
export namespace cosmos {
  export namespace auth {
    export const v1beta1 = { ..._3,
      ..._4,
      ..._5,
      ..._6,
      ..._182,
      ..._197
    };
  }
  export namespace base {
    export namespace query {
      export const v1beta1 = { ..._7,
        ..._8
      };
    }
    export const v1beta1 = { ..._9,
      ..._10
    };
    export namespace abci {
      export const v1beta1 = { ..._11
      };
    }
    export namespace kv {
      export const v1beta1 = { ..._12
      };
    }
    export namespace node {
      export const v1beta1 = { ..._13,
        ..._185,
        ..._200
      };
    }
    export namespace reflection {
      export const v1beta1 = { ..._14
      };
      export const v2alpha1 = { ..._15
      };
    }
    export namespace snapshots {
      export const v1beta1 = { ..._16
      };
    }
    export namespace store {
      export const v1beta1 = { ..._17,
        ..._18
      };
    }
    export namespace tendermint {
      export const v1beta1 = { ..._19,
        ..._186,
        ..._201
      };
    }
  }
  export namespace msg {
    export const v1 = { ..._20
    };
  }
  export namespace staking {
    export const v1beta1 = { ..._21,
      ..._22,
      ..._23,
      ..._24,
      ..._25,
      ..._26,
      ..._170,
      ..._180,
      ..._194,
      ..._209,
      ..._220
    };
  }
  export namespace authz {
    export const v1beta1 = { ..._27,
      ..._28,
      ..._29,
      ..._30,
      ..._31,
      ..._162,
      ..._172,
      ..._183,
      ..._198,
      ..._212
    };
  }
  export namespace bank {
    export const v1beta1 = { ..._32,
      ..._33,
      ..._34,
      ..._35,
      ..._36,
      ..._163,
      ..._173,
      ..._184,
      ..._199,
      ..._213
    };
  }
  export namespace capability {
    export const v1beta1 = { ..._37,
      ..._38
    };
  }
  export namespace crisis {
    export const v1beta1 = { ..._39,
      ..._40,
      ..._164,
      ..._174,
      ..._214
    };
  }
  export namespace crypto {
    export const ed25519 = { ..._41
    };
    export const multisig = { ..._42
    };
    export const secp256k1 = { ..._43
    };
    export const secp256r1 = { ..._44
    };
  }
  export namespace distribution {
    export const v1beta1 = { ..._45,
      ..._46,
      ..._47,
      ..._48,
      ..._165,
      ..._175,
      ..._187,
      ..._202,
      ..._215
    };
  }
  export namespace evidence {
    export const v1beta1 = { ..._49,
      ..._50,
      ..._51,
      ..._52,
      ..._166,
      ..._176,
      ..._188,
      ..._203,
      ..._216
    };
  }
  export namespace feegrant {
    export const v1beta1 = { ..._53,
      ..._54,
      ..._55,
      ..._56,
      ..._167,
      ..._177,
      ..._189,
      ..._204,
      ..._217
    };
  }
  export namespace genutil {
    export const v1beta1 = { ..._57
    };
  }
  export namespace gov {
    export const v1beta1 = { ..._58,
      ..._59,
      ..._60,
      ..._61,
      ..._168,
      ..._178,
      ..._190,
      ..._205,
      ..._218
    };
  }
  export namespace mint {
    export const v1beta1 = { ..._62,
      ..._63,
      ..._64,
      ..._191,
      ..._206
    };
  }
  export namespace params {
    export const v1beta1 = { ..._65,
      ..._66,
      ..._192,
      ..._207
    };
  }
  export namespace slashing {
    export const v1beta1 = { ..._67,
      ..._68,
      ..._69,
      ..._70,
      ..._169,
      ..._179,
      ..._193,
      ..._208,
      ..._219
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = { ..._71
      };
    }
    export const v1beta1 = { ..._72,
      ..._73,
      ..._195,
      ..._210
    };
  }
  export namespace upgrade {
    export const v1beta1 = { ..._74,
      ..._75,
      ..._196,
      ..._211
    };
  }
  export namespace vesting {
    export const v1beta1 = { ..._76,
      ..._77,
      ..._171,
      ..._181,
      ..._221
    };
  }
  export const ClientFactory = { ..._260,
    ..._261,
    ..._262
  };
}