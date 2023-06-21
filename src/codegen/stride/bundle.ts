import * as _15 from "./autopilot/genesis";
import * as _16 from "./autopilot/params";
import * as _17 from "./autopilot/query";
import * as _18 from "./claim/claim";
import * as _19 from "./claim/genesis";
import * as _20 from "./claim/params";
import * as _21 from "./claim/query";
import * as _22 from "./claim/tx";
import * as _23 from "./epochs/genesis";
import * as _24 from "./epochs/query";
import * as _25 from "./icacallbacks/callback_data";
import * as _26 from "./icacallbacks/genesis";
import * as _27 from "./icacallbacks/packet";
import * as _28 from "./icacallbacks/params";
import * as _29 from "./icacallbacks/query";
import * as _30 from "./icacallbacks/tx";
import * as _31 from "./interchainquery/v1/genesis";
import * as _32 from "./interchainquery/v1/messages";
import * as _33 from "./interchainquery/v1/query";
import * as _34 from "./mint/v1beta1/genesis";
import * as _35 from "./mint/v1beta1/mint";
import * as _36 from "./mint/v1beta1/query";
import * as _37 from "./ratelimit/genesis";
import * as _38 from "./ratelimit/gov";
import * as _39 from "./ratelimit/params";
import * as _40 from "./ratelimit/query";
import * as _41 from "./ratelimit/ratelimit";
import * as _42 from "./records/callbacks";
import * as _43 from "./records/genesis";
import * as _44 from "./records/query";
import * as _45 from "./stakeibc/address_unbonding";
import * as _46 from "./stakeibc/callbacks";
import * as _47 from "./stakeibc/epoch_tracker";
import * as _48 from "./stakeibc/genesis";
import * as _49 from "./stakeibc/gov";
import * as _50 from "./stakeibc/host_zone";
import * as _51 from "./stakeibc/ica_account";
import * as _52 from "./stakeibc/packet";
import * as _53 from "./stakeibc/params";
import * as _54 from "./stakeibc/query";
import * as _55 from "./stakeibc/tx";
import * as _56 from "./stakeibc/validator";
import * as _57 from "./vesting/tx";
import * as _58 from "./vesting/vesting";
import * as _60 from "./claim/tx.amino";
import * as _61 from "./interchainquery/v1/messages.amino";
import * as _62 from "./stakeibc/tx.amino";
import * as _63 from "./claim/tx.registry";
import * as _64 from "./interchainquery/v1/messages.registry";
import * as _65 from "./stakeibc/tx.registry";
import * as _66 from "./autopilot/query.lcd";
import * as _67 from "./claim/query.lcd";
import * as _68 from "./epochs/query.lcd";
import * as _69 from "./icacallbacks/query.lcd";
import * as _70 from "./mint/v1beta1/query.lcd";
import * as _71 from "./ratelimit/query.lcd";
import * as _72 from "./records/query.lcd";
import * as _73 from "./stakeibc/query.lcd";
import * as _74 from "./autopilot/query.rpc.query";
import * as _75 from "./claim/query.rpc.query";
import * as _76 from "./epochs/query.rpc.query";
import * as _77 from "./icacallbacks/query.rpc.query";
import * as _78 from "./mint/v1beta1/query.rpc.query";
import * as _79 from "./ratelimit/query.rpc.query";
import * as _80 from "./records/query.rpc.query";
import * as _81 from "./stakeibc/query.rpc.query";
import * as _82 from "./claim/tx.rpc.msg";
import * as _83 from "./interchainquery/v1/messages.rpc.msg";
import * as _84 from "./stakeibc/tx.rpc.msg";
import * as _85 from "./lcd";
import * as _86 from "./rpc.query";
import * as _87 from "./rpc.tx";
export namespace stride {
  export const autopilot = { ..._15,
    ..._16,
    ..._17,
    ..._66,
    ..._74
  };
  export const claim = { ..._18,
    ..._19,
    ..._20,
    ..._21,
    ..._22,
    ..._60,
    ..._63,
    ..._67,
    ..._75,
    ..._82
  };
  export const epochs = { ..._23,
    ..._24,
    ..._68,
    ..._76
  };
  export const icacallbacks = { ..._25,
    ..._26,
    ..._27,
    ..._28,
    ..._29,
    ..._30,
    ..._69,
    ..._77
  };
  export namespace interchainquery {
    export const v1 = { ..._31,
      ..._32,
      ..._33,
      ..._61,
      ..._64,
      ..._83
    };
  }
  export namespace mint {
    export const v1beta1 = { ..._34,
      ..._35,
      ..._36,
      ..._70,
      ..._78
    };
  }
  export const ratelimit = { ..._37,
    ..._38,
    ..._39,
    ..._40,
    ..._41,
    ..._71,
    ..._79
  };
  export const records = { ..._42,
    ..._43,
    ..._44,
    ..._72,
    ..._80
  };
  export const stakeibc = { ..._45,
    ..._46,
    ..._47,
    ..._48,
    ..._49,
    ..._50,
    ..._51,
    ..._52,
    ..._53,
    ..._54,
    ..._55,
    ..._56,
    ..._62,
    ..._65,
    ..._73,
    ..._81,
    ..._84
  };
  export const vesting = { ..._57,
    ..._58
  };
  export const ClientFactory = { ..._85,
    ..._86,
    ..._87
  };
}