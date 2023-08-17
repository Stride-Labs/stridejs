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
import * as _13 from "./base/reflection/v1beta1/reflection";
import * as _14 from "./base/reflection/v2alpha1/reflection";
import * as _15 from "./base/snapshots/v1beta1/snapshot";
import * as _16 from "./base/store/v1beta1/commit_info";
import * as _17 from "./base/store/v1beta1/listening";
import * as _18 from "./base/store/v1beta1/snapshot";
import * as _19 from "./base/tendermint/v1beta1/query";
import * as _20 from "./staking/v1beta1/lsm_tx";
import * as _21 from "./staking/v1beta1/authz";
import * as _22 from "./staking/v1beta1/genesis";
import * as _23 from "./staking/v1beta1/query";
import * as _24 from "./staking/v1beta1/staking";
import * as _25 from "./staking/v1beta1/tx";
import * as _26 from "./authz/v1beta1/authz";
import * as _27 from "./authz/v1beta1/event";
import * as _28 from "./authz/v1beta1/genesis";
import * as _29 from "./authz/v1beta1/query";
import * as _30 from "./authz/v1beta1/tx";
import * as _31 from "./bank/v1beta1/authz";
import * as _32 from "./bank/v1beta1/bank";
import * as _33 from "./bank/v1beta1/genesis";
import * as _34 from "./bank/v1beta1/query";
import * as _35 from "./bank/v1beta1/tx";
import * as _36 from "./capability/v1beta1/capability";
import * as _37 from "./capability/v1beta1/genesis";
import * as _38 from "./crisis/v1beta1/genesis";
import * as _39 from "./crisis/v1beta1/tx";
import * as _40 from "./crypto/ed25519/keys";
import * as _41 from "./crypto/multisig/keys";
import * as _42 from "./crypto/secp256k1/keys";
import * as _43 from "./crypto/secp256r1/keys";
import * as _44 from "./distribution/v1beta1/distribution";
import * as _45 from "./distribution/v1beta1/genesis";
import * as _46 from "./distribution/v1beta1/query";
import * as _47 from "./distribution/v1beta1/tx";
import * as _48 from "./evidence/v1beta1/evidence";
import * as _49 from "./evidence/v1beta1/genesis";
import * as _50 from "./evidence/v1beta1/query";
import * as _51 from "./evidence/v1beta1/tx";
import * as _52 from "./feegrant/v1beta1/feegrant";
import * as _53 from "./feegrant/v1beta1/genesis";
import * as _54 from "./feegrant/v1beta1/query";
import * as _55 from "./feegrant/v1beta1/tx";
import * as _56 from "./genutil/v1beta1/genesis";
import * as _57 from "./gov/v1beta1/genesis";
import * as _58 from "./gov/v1beta1/gov";
import * as _59 from "./gov/v1beta1/query";
import * as _60 from "./gov/v1beta1/tx";
import * as _61 from "./mint/v1beta1/genesis";
import * as _62 from "./mint/v1beta1/mint";
import * as _63 from "./mint/v1beta1/query";
import * as _64 from "./params/v1beta1/params";
import * as _65 from "./params/v1beta1/query";
import * as _66 from "./slashing/v1beta1/genesis";
import * as _67 from "./slashing/v1beta1/query";
import * as _68 from "./slashing/v1beta1/slashing";
import * as _69 from "./slashing/v1beta1/tx";
import * as _70 from "./tx/signing/v1beta1/signing";
import * as _71 from "./tx/v1beta1/service";
import * as _72 from "./tx/v1beta1/tx";
import * as _73 from "./upgrade/v1beta1/query";
import * as _74 from "./upgrade/v1beta1/upgrade";
import * as _75 from "./vesting/v1beta1/tx";
import * as _76 from "./vesting/v1beta1/vesting";
import * as _150 from "./authz/v1beta1/tx.amino";
import * as _151 from "./bank/v1beta1/tx.amino";
import * as _152 from "./crisis/v1beta1/tx.amino";
import * as _153 from "./distribution/v1beta1/tx.amino";
import * as _154 from "./evidence/v1beta1/tx.amino";
import * as _155 from "./feegrant/v1beta1/tx.amino";
import * as _156 from "./gov/v1beta1/tx.amino";
import * as _157 from "./slashing/v1beta1/tx.amino";
import * as _158 from "./staking/v1beta1/tx.amino";
import * as _159 from "./vesting/v1beta1/tx.amino";
import * as _160 from "./authz/v1beta1/tx.registry";
import * as _161 from "./bank/v1beta1/tx.registry";
import * as _162 from "./crisis/v1beta1/tx.registry";
import * as _163 from "./distribution/v1beta1/tx.registry";
import * as _164 from "./evidence/v1beta1/tx.registry";
import * as _165 from "./feegrant/v1beta1/tx.registry";
import * as _166 from "./gov/v1beta1/tx.registry";
import * as _167 from "./slashing/v1beta1/tx.registry";
import * as _168 from "./staking/v1beta1/tx.registry";
import * as _169 from "./vesting/v1beta1/tx.registry";
import * as _170 from "./auth/v1beta1/query.lcd";
import * as _171 from "./authz/v1beta1/query.lcd";
import * as _172 from "./bank/v1beta1/query.lcd";
import * as _173 from "./base/tendermint/v1beta1/query.lcd";
import * as _174 from "./distribution/v1beta1/query.lcd";
import * as _175 from "./evidence/v1beta1/query.lcd";
import * as _176 from "./feegrant/v1beta1/query.lcd";
import * as _177 from "./gov/v1beta1/query.lcd";
import * as _178 from "./mint/v1beta1/query.lcd";
import * as _179 from "./params/v1beta1/query.lcd";
import * as _180 from "./slashing/v1beta1/query.lcd";
import * as _181 from "./staking/v1beta1/query.lcd";
import * as _182 from "./tx/v1beta1/service.lcd";
import * as _183 from "./upgrade/v1beta1/query.lcd";
import * as _184 from "./auth/v1beta1/query.rpc.query";
import * as _185 from "./authz/v1beta1/query.rpc.query";
import * as _186 from "./bank/v1beta1/query.rpc.query";
import * as _187 from "./base/tendermint/v1beta1/query.rpc.svc";
import * as _188 from "./distribution/v1beta1/query.rpc.query";
import * as _189 from "./evidence/v1beta1/query.rpc.query";
import * as _190 from "./feegrant/v1beta1/query.rpc.query";
import * as _191 from "./gov/v1beta1/query.rpc.query";
import * as _192 from "./mint/v1beta1/query.rpc.query";
import * as _193 from "./params/v1beta1/query.rpc.query";
import * as _194 from "./slashing/v1beta1/query.rpc.query";
import * as _195 from "./staking/v1beta1/query.rpc.query";
import * as _196 from "./tx/v1beta1/service.rpc.svc";
import * as _197 from "./upgrade/v1beta1/query.rpc.query";
import * as _198 from "./authz/v1beta1/tx.rpc.msg";
import * as _199 from "./bank/v1beta1/tx.rpc.msg";
import * as _200 from "./crisis/v1beta1/tx.rpc.msg";
import * as _201 from "./distribution/v1beta1/tx.rpc.msg";
import * as _202 from "./evidence/v1beta1/tx.rpc.msg";
import * as _203 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _204 from "./gov/v1beta1/tx.rpc.msg";
import * as _205 from "./slashing/v1beta1/tx.rpc.msg";
import * as _206 from "./staking/v1beta1/tx.rpc.msg";
import * as _207 from "./vesting/v1beta1/tx.rpc.msg";
import * as _233 from "./lcd";
import * as _234 from "./rpc.query";
import * as _235 from "./rpc.tx";
export namespace cosmos {
  export namespace auth {
    export const v1beta1 = { ..._3,
      ..._4,
      ..._5,
      ..._6,
      ..._170,
      ..._184
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
    export namespace reflection {
      export const v1beta1 = { ..._13
      };
      export const v2alpha1 = { ..._14
      };
    }
    export namespace snapshots {
      export const v1beta1 = { ..._15
      };
    }
    export namespace store {
      export const v1beta1 = { ..._16,
        ..._17,
        ..._18
      };
    }
    export namespace tendermint {
      export const v1beta1 = { ..._19,
        ..._173,
        ..._187
      };
    }
  }
  export namespace staking {
    export const v1beta1 = { ..._20,
      ..._21,
      ..._22,
      ..._23,
      ..._24,
      ..._25,
      ..._158,
      ..._168,
      ..._181,
      ..._195,
      ..._206
    };
  }
  export namespace authz {
    export const v1beta1 = { ..._26,
      ..._27,
      ..._28,
      ..._29,
      ..._30,
      ..._150,
      ..._160,
      ..._171,
      ..._185,
      ..._198
    };
  }
  export namespace bank {
    export const v1beta1 = { ..._31,
      ..._32,
      ..._33,
      ..._34,
      ..._35,
      ..._151,
      ..._161,
      ..._172,
      ..._186,
      ..._199
    };
  }
  export namespace capability {
    export const v1beta1 = { ..._36,
      ..._37
    };
  }
  export namespace crisis {
    export const v1beta1 = { ..._38,
      ..._39,
      ..._152,
      ..._162,
      ..._200
    };
  }
  export namespace crypto {
    export const ed25519 = { ..._40
    };
    export const multisig = { ..._41
    };
    export const secp256k1 = { ..._42
    };
    export const secp256r1 = { ..._43
    };
  }
  export namespace distribution {
    export const v1beta1 = { ..._44,
      ..._45,
      ..._46,
      ..._47,
      ..._153,
      ..._163,
      ..._174,
      ..._188,
      ..._201
    };
  }
  export namespace evidence {
    export const v1beta1 = { ..._48,
      ..._49,
      ..._50,
      ..._51,
      ..._154,
      ..._164,
      ..._175,
      ..._189,
      ..._202
    };
  }
  export namespace feegrant {
    export const v1beta1 = { ..._52,
      ..._53,
      ..._54,
      ..._55,
      ..._155,
      ..._165,
      ..._176,
      ..._190,
      ..._203
    };
  }
  export namespace genutil {
    export const v1beta1 = { ..._56
    };
  }
  export namespace gov {
    export const v1beta1 = { ..._57,
      ..._58,
      ..._59,
      ..._60,
      ..._156,
      ..._166,
      ..._177,
      ..._191,
      ..._204
    };
  }
  export namespace mint {
    export const v1beta1 = { ..._61,
      ..._62,
      ..._63,
      ..._178,
      ..._192
    };
  }
  export namespace params {
    export const v1beta1 = { ..._64,
      ..._65,
      ..._179,
      ..._193
    };
  }
  export namespace slashing {
    export const v1beta1 = { ..._66,
      ..._67,
      ..._68,
      ..._69,
      ..._157,
      ..._167,
      ..._180,
      ..._194,
      ..._205
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = { ..._70
      };
    }
    export const v1beta1 = { ..._71,
      ..._72,
      ..._182,
      ..._196
    };
  }
  export namespace upgrade {
    export const v1beta1 = { ..._73,
      ..._74,
      ..._183,
      ..._197
    };
  }
  export namespace vesting {
    export const v1beta1 = { ..._75,
      ..._76,
      ..._159,
      ..._169,
      ..._207
    };
  }
  export const ClientFactory = { ..._233,
    ..._234,
    ..._235
  };
}