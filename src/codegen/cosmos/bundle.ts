import * as _8 from "./auth/v1beta1/auth";
import * as _9 from "./auth/v1beta1/genesis";
import * as _10 from "./auth/v1beta1/query";
import * as _11 from "./authz/v1beta1/authz";
import * as _12 from "./authz/v1beta1/event";
import * as _13 from "./authz/v1beta1/genesis";
import * as _14 from "./authz/v1beta1/query";
import * as _15 from "./authz/v1beta1/tx";
import * as _16 from "./bank/v1beta1/authz";
import * as _17 from "./bank/v1beta1/bank";
import * as _18 from "./bank/v1beta1/genesis";
import * as _19 from "./bank/v1beta1/query";
import * as _20 from "./bank/v1beta1/tx";
import * as _21 from "./base/abci/v1beta1/abci";
import * as _22 from "./base/kv/v1beta1/kv";
import * as _23 from "./base/query/v1beta1/pagination";
import * as _24 from "./base/reflection/v1beta1/reflection";
import * as _25 from "./base/reflection/v2alpha1/reflection";
import * as _26 from "./base/snapshots/v1beta1/snapshot";
import * as _27 from "./base/store/v1beta1/commit_info";
import * as _28 from "./base/store/v1beta1/listening";
import * as _29 from "./base/store/v1beta1/snapshot";
import * as _30 from "./base/tendermint/v1beta1/query";
import * as _31 from "./base/v1beta1/coin";
import * as _32 from "./capability/v1beta1/capability";
import * as _33 from "./capability/v1beta1/genesis";
import * as _34 from "./crisis/v1beta1/genesis";
import * as _35 from "./crisis/v1beta1/tx";
import * as _36 from "./crypto/ed25519/keys";
import * as _37 from "./crypto/multisig/keys";
import * as _38 from "./crypto/secp256k1/keys";
import * as _39 from "./crypto/secp256r1/keys";
import * as _40 from "./distribution/v1beta1/distribution";
import * as _41 from "./distribution/v1beta1/genesis";
import * as _42 from "./distribution/v1beta1/query";
import * as _43 from "./distribution/v1beta1/tx";
import * as _44 from "./evidence/v1beta1/evidence";
import * as _45 from "./evidence/v1beta1/genesis";
import * as _46 from "./evidence/v1beta1/query";
import * as _47 from "./evidence/v1beta1/tx";
import * as _48 from "./feegrant/v1beta1/feegrant";
import * as _49 from "./feegrant/v1beta1/genesis";
import * as _50 from "./feegrant/v1beta1/query";
import * as _51 from "./feegrant/v1beta1/tx";
import * as _52 from "./genutil/v1beta1/genesis";
import * as _53 from "./gov/v1beta1/genesis";
import * as _54 from "./gov/v1beta1/gov";
import * as _55 from "./gov/v1beta1/query";
import * as _56 from "./gov/v1beta1/tx";
import * as _57 from "./mint/v1beta1/genesis";
import * as _58 from "./mint/v1beta1/mint";
import * as _59 from "./mint/v1beta1/query";
import * as _60 from "./params/v1beta1/params";
import * as _61 from "./params/v1beta1/query";
import * as _62 from "./slashing/v1beta1/genesis";
import * as _63 from "./slashing/v1beta1/query";
import * as _64 from "./slashing/v1beta1/slashing";
import * as _65 from "./slashing/v1beta1/tx";
import * as _66 from "./staking/v1beta1/authz";
import * as _67 from "./staking/v1beta1/genesis";
import * as _68 from "./staking/v1beta1/query";
import * as _69 from "./staking/v1beta1/staking";
import * as _70 from "./staking/v1beta1/tx";
import * as _71 from "./tx/signing/v1beta1/signing";
import * as _72 from "./tx/v1beta1/service";
import * as _73 from "./tx/v1beta1/tx";
import * as _74 from "./upgrade/v1beta1/query";
import * as _75 from "./upgrade/v1beta1/upgrade";
import * as _76 from "./vesting/v1beta1/tx";
import * as _77 from "./vesting/v1beta1/vesting";
import * as _135 from "./authz/v1beta1/tx.amino";
import * as _136 from "./bank/v1beta1/tx.amino";
import * as _137 from "./crisis/v1beta1/tx.amino";
import * as _138 from "./distribution/v1beta1/tx.amino";
import * as _139 from "./evidence/v1beta1/tx.amino";
import * as _140 from "./feegrant/v1beta1/tx.amino";
import * as _141 from "./gov/v1beta1/tx.amino";
import * as _142 from "./slashing/v1beta1/tx.amino";
import * as _143 from "./staking/v1beta1/tx.amino";
import * as _144 from "./vesting/v1beta1/tx.amino";
import * as _145 from "./authz/v1beta1/tx.registry";
import * as _146 from "./bank/v1beta1/tx.registry";
import * as _147 from "./crisis/v1beta1/tx.registry";
import * as _148 from "./distribution/v1beta1/tx.registry";
import * as _149 from "./evidence/v1beta1/tx.registry";
import * as _150 from "./feegrant/v1beta1/tx.registry";
import * as _151 from "./gov/v1beta1/tx.registry";
import * as _152 from "./slashing/v1beta1/tx.registry";
import * as _153 from "./staking/v1beta1/tx.registry";
import * as _154 from "./vesting/v1beta1/tx.registry";
import * as _155 from "./auth/v1beta1/query.lcd";
import * as _156 from "./authz/v1beta1/query.lcd";
import * as _157 from "./bank/v1beta1/query.lcd";
import * as _158 from "./base/tendermint/v1beta1/query.lcd";
import * as _159 from "./distribution/v1beta1/query.lcd";
import * as _160 from "./evidence/v1beta1/query.lcd";
import * as _161 from "./feegrant/v1beta1/query.lcd";
import * as _162 from "./gov/v1beta1/query.lcd";
import * as _163 from "./mint/v1beta1/query.lcd";
import * as _164 from "./params/v1beta1/query.lcd";
import * as _165 from "./slashing/v1beta1/query.lcd";
import * as _166 from "./staking/v1beta1/query.lcd";
import * as _167 from "./tx/v1beta1/service.lcd";
import * as _168 from "./upgrade/v1beta1/query.lcd";
import * as _169 from "./auth/v1beta1/query.rpc.query";
import * as _170 from "./authz/v1beta1/query.rpc.query";
import * as _171 from "./bank/v1beta1/query.rpc.query";
import * as _172 from "./base/tendermint/v1beta1/query.rpc.svc";
import * as _173 from "./distribution/v1beta1/query.rpc.query";
import * as _174 from "./evidence/v1beta1/query.rpc.query";
import * as _175 from "./feegrant/v1beta1/query.rpc.query";
import * as _176 from "./gov/v1beta1/query.rpc.query";
import * as _177 from "./mint/v1beta1/query.rpc.query";
import * as _178 from "./params/v1beta1/query.rpc.query";
import * as _179 from "./slashing/v1beta1/query.rpc.query";
import * as _180 from "./staking/v1beta1/query.rpc.query";
import * as _181 from "./tx/v1beta1/service.rpc.svc";
import * as _182 from "./upgrade/v1beta1/query.rpc.query";
import * as _183 from "./authz/v1beta1/tx.rpc.msg";
import * as _184 from "./bank/v1beta1/tx.rpc.msg";
import * as _185 from "./crisis/v1beta1/tx.rpc.msg";
import * as _186 from "./distribution/v1beta1/tx.rpc.msg";
import * as _187 from "./evidence/v1beta1/tx.rpc.msg";
import * as _188 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _189 from "./gov/v1beta1/tx.rpc.msg";
import * as _190 from "./slashing/v1beta1/tx.rpc.msg";
import * as _191 from "./staking/v1beta1/tx.rpc.msg";
import * as _192 from "./vesting/v1beta1/tx.rpc.msg";
import * as _212 from "./lcd";
import * as _213 from "./rpc.query";
import * as _214 from "./rpc.tx";
export namespace cosmos {
  export namespace auth {
    export const v1beta1 = { ..._8,
      ..._9,
      ..._10,
      ..._155,
      ..._169
    };
  }
  export namespace authz {
    export const v1beta1 = { ..._11,
      ..._12,
      ..._13,
      ..._14,
      ..._15,
      ..._135,
      ..._145,
      ..._156,
      ..._170,
      ..._183
    };
  }
  export namespace bank {
    export const v1beta1 = { ..._16,
      ..._17,
      ..._18,
      ..._19,
      ..._20,
      ..._136,
      ..._146,
      ..._157,
      ..._171,
      ..._184
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = { ..._21
      };
    }
    export namespace kv {
      export const v1beta1 = { ..._22
      };
    }
    export namespace query {
      export const v1beta1 = { ..._23
      };
    }
    export namespace reflection {
      export const v1beta1 = { ..._24
      };
      export const v2alpha1 = { ..._25
      };
    }
    export namespace snapshots {
      export const v1beta1 = { ..._26
      };
    }
    export namespace store {
      export const v1beta1 = { ..._27,
        ..._28,
        ..._29
      };
    }
    export namespace tendermint {
      export const v1beta1 = { ..._30,
        ..._158,
        ..._172
      };
    }
    export const v1beta1 = { ..._31
    };
  }
  export namespace capability {
    export const v1beta1 = { ..._32,
      ..._33
    };
  }
  export namespace crisis {
    export const v1beta1 = { ..._34,
      ..._35,
      ..._137,
      ..._147,
      ..._185
    };
  }
  export namespace crypto {
    export const ed25519 = { ..._36
    };
    export const multisig = { ..._37
    };
    export const secp256k1 = { ..._38
    };
    export const secp256r1 = { ..._39
    };
  }
  export namespace distribution {
    export const v1beta1 = { ..._40,
      ..._41,
      ..._42,
      ..._43,
      ..._138,
      ..._148,
      ..._159,
      ..._173,
      ..._186
    };
  }
  export namespace evidence {
    export const v1beta1 = { ..._44,
      ..._45,
      ..._46,
      ..._47,
      ..._139,
      ..._149,
      ..._160,
      ..._174,
      ..._187
    };
  }
  export namespace feegrant {
    export const v1beta1 = { ..._48,
      ..._49,
      ..._50,
      ..._51,
      ..._140,
      ..._150,
      ..._161,
      ..._175,
      ..._188
    };
  }
  export namespace genutil {
    export const v1beta1 = { ..._52
    };
  }
  export namespace gov {
    export const v1beta1 = { ..._53,
      ..._54,
      ..._55,
      ..._56,
      ..._141,
      ..._151,
      ..._162,
      ..._176,
      ..._189
    };
  }
  export namespace mint {
    export const v1beta1 = { ..._57,
      ..._58,
      ..._59,
      ..._163,
      ..._177
    };
  }
  export namespace params {
    export const v1beta1 = { ..._60,
      ..._61,
      ..._164,
      ..._178
    };
  }
  export namespace slashing {
    export const v1beta1 = { ..._62,
      ..._63,
      ..._64,
      ..._65,
      ..._142,
      ..._152,
      ..._165,
      ..._179,
      ..._190
    };
  }
  export namespace staking {
    export const v1beta1 = { ..._66,
      ..._67,
      ..._68,
      ..._69,
      ..._70,
      ..._143,
      ..._153,
      ..._166,
      ..._180,
      ..._191
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = { ..._71
      };
    }
    export const v1beta1 = { ..._72,
      ..._73,
      ..._167,
      ..._181
    };
  }
  export namespace upgrade {
    export const v1beta1 = { ..._74,
      ..._75,
      ..._168,
      ..._182
    };
  }
  export namespace vesting {
    export const v1beta1 = { ..._76,
      ..._77,
      ..._144,
      ..._154,
      ..._192
    };
  }
  export const ClientFactory = { ..._212,
    ..._213,
    ..._214
  };
}