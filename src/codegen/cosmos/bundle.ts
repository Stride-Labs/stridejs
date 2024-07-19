import * as _2 from "./auth/v1beta1/auth";
import * as _3 from "./auth/v1beta1/genesis";
import * as _4 from "./auth/v1beta1/query";
import * as _5 from "./base/query/v1beta1/pagination";
import * as _6 from "./base/v1beta1/coin";
import * as _7 from "./base/abci/v1beta1/abci";
import * as _8 from "./base/kv/v1beta1/kv";
import * as _9 from "./base/node/v1beta1/query";
import * as _10 from "./base/reflection/v1beta1/reflection";
import * as _11 from "./base/reflection/v2alpha1/reflection";
import * as _12 from "./base/snapshots/v1beta1/snapshot";
import * as _13 from "./base/store/v1beta1/commit_info";
import * as _14 from "./base/store/v1beta1/listening";
import * as _15 from "./base/tendermint/v1beta1/query";
import * as _16 from "./msg/v1/msg";
import * as _17 from "./staking/v1beta1/lsm_tx";
import * as _18 from "./staking/v1beta1/authz";
import * as _19 from "./staking/v1beta1/genesis";
import * as _20 from "./staking/v1beta1/query";
import * as _21 from "./staking/v1beta1/staking";
import * as _22 from "./staking/v1beta1/tx";
import * as _23 from "./authz/v1beta1/authz";
import * as _24 from "./authz/v1beta1/event";
import * as _25 from "./authz/v1beta1/genesis";
import * as _26 from "./authz/v1beta1/query";
import * as _27 from "./authz/v1beta1/tx";
import * as _28 from "./bank/v1beta1/authz";
import * as _29 from "./bank/v1beta1/bank";
import * as _30 from "./bank/v1beta1/genesis";
import * as _31 from "./bank/v1beta1/query";
import * as _32 from "./bank/v1beta1/tx";
import * as _33 from "./capability/v1beta1/capability";
import * as _34 from "./capability/v1beta1/genesis";
import * as _35 from "./crisis/v1beta1/genesis";
import * as _36 from "./crisis/v1beta1/tx";
import * as _37 from "./crypto/ed25519/keys";
import * as _38 from "./crypto/multisig/keys";
import * as _39 from "./crypto/secp256k1/keys";
import * as _40 from "./crypto/secp256r1/keys";
import * as _41 from "./distribution/v1beta1/distribution";
import * as _42 from "./distribution/v1beta1/genesis";
import * as _43 from "./distribution/v1beta1/query";
import * as _44 from "./distribution/v1beta1/tx";
import * as _45 from "./evidence/v1beta1/evidence";
import * as _46 from "./evidence/v1beta1/genesis";
import * as _47 from "./evidence/v1beta1/query";
import * as _48 from "./evidence/v1beta1/tx";
import * as _49 from "./feegrant/v1beta1/feegrant";
import * as _50 from "./feegrant/v1beta1/genesis";
import * as _51 from "./feegrant/v1beta1/query";
import * as _52 from "./feegrant/v1beta1/tx";
import * as _53 from "./genutil/v1beta1/genesis";
import * as _54 from "./gov/v1beta1/genesis";
import * as _55 from "./gov/v1beta1/gov";
import * as _56 from "./gov/v1beta1/query";
import * as _57 from "./gov/v1beta1/tx";
import * as _58 from "./mint/v1beta1/genesis";
import * as _59 from "./mint/v1beta1/mint";
import * as _60 from "./mint/v1beta1/query";
import * as _61 from "./params/v1beta1/params";
import * as _62 from "./params/v1beta1/query";
import * as _63 from "./slashing/v1beta1/genesis";
import * as _64 from "./slashing/v1beta1/query";
import * as _65 from "./slashing/v1beta1/slashing";
import * as _66 from "./slashing/v1beta1/tx";
import * as _67 from "./tx/signing/v1beta1/signing";
import * as _68 from "./tx/v1beta1/service";
import * as _69 from "./tx/v1beta1/tx";
import * as _70 from "./upgrade/v1beta1/query";
import * as _71 from "./upgrade/v1beta1/upgrade";
import * as _72 from "./vesting/v1beta1/tx";
import * as _73 from "./vesting/v1beta1/vesting";
import * as _155 from "./authz/v1beta1/tx.amino";
import * as _156 from "./bank/v1beta1/tx.amino";
import * as _157 from "./crisis/v1beta1/tx.amino";
import * as _158 from "./distribution/v1beta1/tx.amino";
import * as _159 from "./evidence/v1beta1/tx.amino";
import * as _160 from "./feegrant/v1beta1/tx.amino";
import * as _161 from "./gov/v1beta1/tx.amino";
import * as _162 from "./slashing/v1beta1/tx.amino";
import * as _163 from "./staking/v1beta1/tx.amino";
import * as _164 from "./vesting/v1beta1/tx.amino";
import * as _165 from "./authz/v1beta1/tx.registry";
import * as _166 from "./bank/v1beta1/tx.registry";
import * as _167 from "./crisis/v1beta1/tx.registry";
import * as _168 from "./distribution/v1beta1/tx.registry";
import * as _169 from "./evidence/v1beta1/tx.registry";
import * as _170 from "./feegrant/v1beta1/tx.registry";
import * as _171 from "./gov/v1beta1/tx.registry";
import * as _172 from "./slashing/v1beta1/tx.registry";
import * as _173 from "./staking/v1beta1/tx.registry";
import * as _174 from "./vesting/v1beta1/tx.registry";
import * as _175 from "./auth/v1beta1/query.lcd";
import * as _176 from "./authz/v1beta1/query.lcd";
import * as _177 from "./bank/v1beta1/query.lcd";
import * as _178 from "./base/node/v1beta1/query.lcd";
import * as _179 from "./base/tendermint/v1beta1/query.lcd";
import * as _180 from "./distribution/v1beta1/query.lcd";
import * as _181 from "./evidence/v1beta1/query.lcd";
import * as _182 from "./feegrant/v1beta1/query.lcd";
import * as _183 from "./gov/v1beta1/query.lcd";
import * as _184 from "./mint/v1beta1/query.lcd";
import * as _185 from "./params/v1beta1/query.lcd";
import * as _186 from "./slashing/v1beta1/query.lcd";
import * as _187 from "./staking/v1beta1/query.lcd";
import * as _188 from "./tx/v1beta1/service.lcd";
import * as _189 from "./upgrade/v1beta1/query.lcd";
import * as _190 from "./auth/v1beta1/query.rpc.Query";
import * as _191 from "./authz/v1beta1/query.rpc.Query";
import * as _192 from "./bank/v1beta1/query.rpc.Query";
import * as _193 from "./base/node/v1beta1/query.rpc.Service";
import * as _194 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _195 from "./distribution/v1beta1/query.rpc.Query";
import * as _196 from "./evidence/v1beta1/query.rpc.Query";
import * as _197 from "./feegrant/v1beta1/query.rpc.Query";
import * as _198 from "./gov/v1beta1/query.rpc.Query";
import * as _199 from "./mint/v1beta1/query.rpc.Query";
import * as _200 from "./params/v1beta1/query.rpc.Query";
import * as _201 from "./slashing/v1beta1/query.rpc.Query";
import * as _202 from "./staking/v1beta1/query.rpc.Query";
import * as _203 from "./tx/v1beta1/service.rpc.Service";
import * as _204 from "./upgrade/v1beta1/query.rpc.Query";
import * as _205 from "./authz/v1beta1/tx.rpc.msg";
import * as _206 from "./bank/v1beta1/tx.rpc.msg";
import * as _207 from "./crisis/v1beta1/tx.rpc.msg";
import * as _208 from "./distribution/v1beta1/tx.rpc.msg";
import * as _209 from "./evidence/v1beta1/tx.rpc.msg";
import * as _210 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _211 from "./gov/v1beta1/tx.rpc.msg";
import * as _212 from "./slashing/v1beta1/tx.rpc.msg";
import * as _213 from "./staking/v1beta1/tx.rpc.msg";
import * as _214 from "./vesting/v1beta1/tx.rpc.msg";
import * as _258 from "./lcd";
import * as _259 from "./rpc.query";
import * as _260 from "./rpc.tx";
export namespace cosmos {
  export namespace auth {
    export const v1beta1 = {
      ..._2,
      ..._3,
      ..._4,
      ..._175,
      ..._190
    };
  }
  export namespace base {
    export namespace query {
      export const v1beta1 = {
        ..._5
      };
    }
    export const v1beta1 = {
      ..._6
    };
    export namespace abci {
      export const v1beta1 = {
        ..._7
      };
    }
    export namespace kv {
      export const v1beta1 = {
        ..._8
      };
    }
    export namespace node {
      export const v1beta1 = {
        ..._9,
        ..._178,
        ..._193
      };
    }
    export namespace reflection {
      export const v1beta1 = {
        ..._10
      };
      export const v2alpha1 = {
        ..._11
      };
    }
    export namespace snapshots {
      export const v1beta1 = {
        ..._12
      };
    }
    export namespace store {
      export const v1beta1 = {
        ..._13,
        ..._14
      };
    }
    export namespace tendermint {
      export const v1beta1 = {
        ..._15,
        ..._179,
        ..._194
      };
    }
  }
  export namespace msg {
    export const v1 = {
      ..._16
    };
  }
  export namespace staking {
    export const v1beta1 = {
      ..._17,
      ..._18,
      ..._19,
      ..._20,
      ..._21,
      ..._22,
      ..._163,
      ..._173,
      ..._187,
      ..._202,
      ..._213
    };
  }
  export namespace authz {
    export const v1beta1 = {
      ..._23,
      ..._24,
      ..._25,
      ..._26,
      ..._27,
      ..._155,
      ..._165,
      ..._176,
      ..._191,
      ..._205
    };
  }
  export namespace bank {
    export const v1beta1 = {
      ..._28,
      ..._29,
      ..._30,
      ..._31,
      ..._32,
      ..._156,
      ..._166,
      ..._177,
      ..._192,
      ..._206
    };
  }
  export namespace capability {
    export const v1beta1 = {
      ..._33,
      ..._34
    };
  }
  export namespace crisis {
    export const v1beta1 = {
      ..._35,
      ..._36,
      ..._157,
      ..._167,
      ..._207
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._37
    };
    export const multisig = {
      ..._38
    };
    export const secp256k1 = {
      ..._39
    };
    export const secp256r1 = {
      ..._40
    };
  }
  export namespace distribution {
    export const v1beta1 = {
      ..._41,
      ..._42,
      ..._43,
      ..._44,
      ..._158,
      ..._168,
      ..._180,
      ..._195,
      ..._208
    };
  }
  export namespace evidence {
    export const v1beta1 = {
      ..._45,
      ..._46,
      ..._47,
      ..._48,
      ..._159,
      ..._169,
      ..._181,
      ..._196,
      ..._209
    };
  }
  export namespace feegrant {
    export const v1beta1 = {
      ..._49,
      ..._50,
      ..._51,
      ..._52,
      ..._160,
      ..._170,
      ..._182,
      ..._197,
      ..._210
    };
  }
  export namespace genutil {
    export const v1beta1 = {
      ..._53
    };
  }
  export namespace gov {
    export const v1beta1 = {
      ..._54,
      ..._55,
      ..._56,
      ..._57,
      ..._161,
      ..._171,
      ..._183,
      ..._198,
      ..._211
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._58,
      ..._59,
      ..._60,
      ..._184,
      ..._199
    };
  }
  export namespace params {
    export const v1beta1 = {
      ..._61,
      ..._62,
      ..._185,
      ..._200
    };
  }
  export namespace slashing {
    export const v1beta1 = {
      ..._63,
      ..._64,
      ..._65,
      ..._66,
      ..._162,
      ..._172,
      ..._186,
      ..._201,
      ..._212
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = {
        ..._67
      };
    }
    export const v1beta1 = {
      ..._68,
      ..._69,
      ..._188,
      ..._203
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._70,
      ..._71,
      ..._189,
      ..._204
    };
  }
  export namespace vesting {
    export const v1beta1 = {
      ..._72,
      ..._73,
      ..._164,
      ..._174,
      ..._214
    };
  }
  export const ClientFactory = {
    ..._258,
    ..._259,
    ..._260
  };
}