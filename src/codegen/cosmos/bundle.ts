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
import * as _20 from "./authz/v1beta1/authz";
import * as _21 from "./authz/v1beta1/event";
import * as _22 from "./authz/v1beta1/genesis";
import * as _23 from "./authz/v1beta1/query";
import * as _24 from "./authz/v1beta1/tx";
import * as _25 from "./bank/v1beta1/authz";
import * as _26 from "./bank/v1beta1/bank";
import * as _27 from "./bank/v1beta1/genesis";
import * as _28 from "./bank/v1beta1/query";
import * as _29 from "./bank/v1beta1/tx";
import * as _30 from "./capability/v1beta1/capability";
import * as _31 from "./capability/v1beta1/genesis";
import * as _32 from "./crisis/v1beta1/genesis";
import * as _33 from "./crisis/v1beta1/tx";
import * as _34 from "./crypto/ed25519/keys";
import * as _35 from "./crypto/multisig/keys";
import * as _36 from "./crypto/secp256k1/keys";
import * as _37 from "./crypto/secp256r1/keys";
import * as _38 from "./distribution/v1beta1/distribution";
import * as _39 from "./distribution/v1beta1/genesis";
import * as _40 from "./distribution/v1beta1/query";
import * as _41 from "./distribution/v1beta1/tx";
import * as _42 from "./evidence/v1beta1/evidence";
import * as _43 from "./evidence/v1beta1/genesis";
import * as _44 from "./evidence/v1beta1/query";
import * as _45 from "./evidence/v1beta1/tx";
import * as _46 from "./feegrant/v1beta1/feegrant";
import * as _47 from "./feegrant/v1beta1/genesis";
import * as _48 from "./feegrant/v1beta1/query";
import * as _49 from "./feegrant/v1beta1/tx";
import * as _50 from "./genutil/v1beta1/genesis";
import * as _51 from "./gov/v1beta1/genesis";
import * as _52 from "./gov/v1beta1/gov";
import * as _53 from "./gov/v1beta1/query";
import * as _54 from "./gov/v1beta1/tx";
import * as _55 from "./mint/v1beta1/genesis";
import * as _56 from "./mint/v1beta1/mint";
import * as _57 from "./mint/v1beta1/query";
import * as _58 from "./params/v1beta1/params";
import * as _59 from "./params/v1beta1/query";
import * as _60 from "./slashing/v1beta1/genesis";
import * as _61 from "./slashing/v1beta1/query";
import * as _62 from "./slashing/v1beta1/slashing";
import * as _63 from "./slashing/v1beta1/tx";
import * as _64 from "./staking/v1beta1/authz";
import * as _65 from "./staking/v1beta1/genesis";
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
import * as _147 from "./authz/v1beta1/tx.amino";
import * as _148 from "./bank/v1beta1/tx.amino";
import * as _149 from "./crisis/v1beta1/tx.amino";
import * as _150 from "./distribution/v1beta1/tx.amino";
import * as _151 from "./evidence/v1beta1/tx.amino";
import * as _152 from "./feegrant/v1beta1/tx.amino";
import * as _153 from "./gov/v1beta1/tx.amino";
import * as _154 from "./slashing/v1beta1/tx.amino";
import * as _155 from "./staking/v1beta1/tx.amino";
import * as _156 from "./vesting/v1beta1/tx.amino";
import * as _157 from "./authz/v1beta1/tx.registry";
import * as _158 from "./bank/v1beta1/tx.registry";
import * as _159 from "./crisis/v1beta1/tx.registry";
import * as _160 from "./distribution/v1beta1/tx.registry";
import * as _161 from "./evidence/v1beta1/tx.registry";
import * as _162 from "./feegrant/v1beta1/tx.registry";
import * as _163 from "./gov/v1beta1/tx.registry";
import * as _164 from "./slashing/v1beta1/tx.registry";
import * as _165 from "./staking/v1beta1/tx.registry";
import * as _166 from "./vesting/v1beta1/tx.registry";
import * as _167 from "./auth/v1beta1/query.lcd";
import * as _168 from "./authz/v1beta1/query.lcd";
import * as _169 from "./bank/v1beta1/query.lcd";
import * as _170 from "./base/node/v1beta1/query.lcd";
import * as _171 from "./base/tendermint/v1beta1/query.lcd";
import * as _172 from "./distribution/v1beta1/query.lcd";
import * as _173 from "./evidence/v1beta1/query.lcd";
import * as _174 from "./feegrant/v1beta1/query.lcd";
import * as _175 from "./gov/v1beta1/query.lcd";
import * as _176 from "./mint/v1beta1/query.lcd";
import * as _177 from "./params/v1beta1/query.lcd";
import * as _178 from "./slashing/v1beta1/query.lcd";
import * as _179 from "./staking/v1beta1/query.lcd";
import * as _180 from "./tx/v1beta1/service.lcd";
import * as _181 from "./upgrade/v1beta1/query.lcd";
import * as _182 from "./auth/v1beta1/query.rpc.query";
import * as _183 from "./authz/v1beta1/query.rpc.query";
import * as _184 from "./bank/v1beta1/query.rpc.query";
import * as _185 from "./base/node/v1beta1/query.rpc.svc";
import * as _186 from "./base/tendermint/v1beta1/query.rpc.svc";
import * as _187 from "./distribution/v1beta1/query.rpc.query";
import * as _188 from "./evidence/v1beta1/query.rpc.query";
import * as _189 from "./feegrant/v1beta1/query.rpc.query";
import * as _190 from "./gov/v1beta1/query.rpc.query";
import * as _191 from "./mint/v1beta1/query.rpc.query";
import * as _192 from "./params/v1beta1/query.rpc.query";
import * as _193 from "./slashing/v1beta1/query.rpc.query";
import * as _194 from "./staking/v1beta1/query.rpc.query";
import * as _195 from "./tx/v1beta1/service.rpc.svc";
import * as _196 from "./upgrade/v1beta1/query.rpc.query";
import * as _197 from "./authz/v1beta1/tx.rpc.msg";
import * as _198 from "./bank/v1beta1/tx.rpc.msg";
import * as _199 from "./crisis/v1beta1/tx.rpc.msg";
import * as _200 from "./distribution/v1beta1/tx.rpc.msg";
import * as _201 from "./evidence/v1beta1/tx.rpc.msg";
import * as _202 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _203 from "./gov/v1beta1/tx.rpc.msg";
import * as _204 from "./slashing/v1beta1/tx.rpc.msg";
import * as _205 from "./staking/v1beta1/tx.rpc.msg";
import * as _206 from "./vesting/v1beta1/tx.rpc.msg";
import * as _232 from "./lcd";
import * as _233 from "./rpc.query";
import * as _234 from "./rpc.tx";
export namespace cosmos {
  export namespace auth {
    export const v1beta1 = { ..._3,
      ..._4,
      ..._5,
      ..._6,
      ..._167,
      ..._182
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
        ..._170,
        ..._185
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
        ..._171,
        ..._186
      };
    }
  }
  export namespace authz {
    export const v1beta1 = { ..._20,
      ..._21,
      ..._22,
      ..._23,
      ..._24,
      ..._147,
      ..._157,
      ..._168,
      ..._183,
      ..._197
    };
  }
  export namespace bank {
    export const v1beta1 = { ..._25,
      ..._26,
      ..._27,
      ..._28,
      ..._29,
      ..._148,
      ..._158,
      ..._169,
      ..._184,
      ..._198
    };
  }
  export namespace capability {
    export const v1beta1 = { ..._30,
      ..._31
    };
  }
  export namespace crisis {
    export const v1beta1 = { ..._32,
      ..._33,
      ..._149,
      ..._159,
      ..._199
    };
  }
  export namespace crypto {
    export const ed25519 = { ..._34
    };
    export const multisig = { ..._35
    };
    export const secp256k1 = { ..._36
    };
    export const secp256r1 = { ..._37
    };
  }
  export namespace distribution {
    export const v1beta1 = { ..._38,
      ..._39,
      ..._40,
      ..._41,
      ..._150,
      ..._160,
      ..._172,
      ..._187,
      ..._200
    };
  }
  export namespace evidence {
    export const v1beta1 = { ..._42,
      ..._43,
      ..._44,
      ..._45,
      ..._151,
      ..._161,
      ..._173,
      ..._188,
      ..._201
    };
  }
  export namespace feegrant {
    export const v1beta1 = { ..._46,
      ..._47,
      ..._48,
      ..._49,
      ..._152,
      ..._162,
      ..._174,
      ..._189,
      ..._202
    };
  }
  export namespace genutil {
    export const v1beta1 = { ..._50
    };
  }
  export namespace gov {
    export const v1beta1 = { ..._51,
      ..._52,
      ..._53,
      ..._54,
      ..._153,
      ..._163,
      ..._175,
      ..._190,
      ..._203
    };
  }
  export namespace mint {
    export const v1beta1 = { ..._55,
      ..._56,
      ..._57,
      ..._176,
      ..._191
    };
  }
  export namespace params {
    export const v1beta1 = { ..._58,
      ..._59,
      ..._177,
      ..._192
    };
  }
  export namespace slashing {
    export const v1beta1 = { ..._60,
      ..._61,
      ..._62,
      ..._63,
      ..._154,
      ..._164,
      ..._178,
      ..._193,
      ..._204
    };
  }
  export namespace staking {
    export const v1beta1 = { ..._64,
      ..._65,
      ..._66,
      ..._67,
      ..._68,
      ..._155,
      ..._165,
      ..._179,
      ..._194,
      ..._205
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = { ..._69
      };
    }
    export const v1beta1 = { ..._70,
      ..._71,
      ..._180,
      ..._195
    };
  }
  export namespace upgrade {
    export const v1beta1 = { ..._72,
      ..._73,
      ..._181,
      ..._196
    };
  }
  export namespace vesting {
    export const v1beta1 = { ..._74,
      ..._75,
      ..._156,
      ..._166,
      ..._206
    };
  }
  export const ClientFactory = { ..._232,
    ..._233,
    ..._234
  };
}