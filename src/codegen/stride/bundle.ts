import * as _16 from "./autopilot/genesis";
import * as _17 from "./autopilot/params";
import * as _18 from "./autopilot/query";
import * as _19 from "./claim/claim";
import * as _20 from "./claim/genesis";
import * as _21 from "./claim/params";
import * as _22 from "./claim/query";
import * as _23 from "./claim/tx";
import * as _24 from "./epochs/genesis";
import * as _25 from "./epochs/query";
import * as _26 from "./icacallbacks/callback_data";
import * as _27 from "./icacallbacks/genesis";
import * as _28 from "./icacallbacks/packet";
import * as _29 from "./icacallbacks/params";
import * as _30 from "./icacallbacks/query";
import * as _31 from "./icacallbacks/tx";
import * as _32 from "./interchainquery/v1/genesis";
import * as _33 from "./interchainquery/v1/messages";
import * as _34 from "./interchainquery/v1/query";
import * as _35 from "./mint/v1beta1/genesis";
import * as _36 from "./mint/v1beta1/mint";
import * as _37 from "./mint/v1beta1/query";
import * as _38 from "./ratelimit/genesis";
import * as _39 from "./ratelimit/gov";
import * as _40 from "./ratelimit/params";
import * as _41 from "./ratelimit/query";
import * as _42 from "./ratelimit/ratelimit";
import * as _43 from "./records/callbacks";
import * as _44 from "./records/genesis";
import * as _45 from "./records/params";
import * as _46 from "./records/query";
import * as _47 from "./records/records";
import * as _48 from "./stakeibc/address_unbonding";
import * as _49 from "./stakeibc/callbacks";
import * as _50 from "./stakeibc/epoch_tracker";
import * as _51 from "./stakeibc/genesis";
import * as _52 from "./stakeibc/gov";
import * as _53 from "./stakeibc/host_zone";
import * as _54 from "./stakeibc/ica_account";
import * as _55 from "./stakeibc/packet";
import * as _56 from "./stakeibc/params";
import * as _57 from "./stakeibc/query";
import * as _58 from "./stakeibc/tx";
import * as _59 from "./stakeibc/validator";
import * as _60 from "./vesting/tx";
import * as _61 from "./vesting/vesting";
import * as _63 from "./claim/tx.amino";
import * as _64 from "./interchainquery/v1/messages.amino";
import * as _65 from "./stakeibc/tx.amino";
import * as _66 from "./claim/tx.registry";
import * as _67 from "./interchainquery/v1/messages.registry";
import * as _68 from "./stakeibc/tx.registry";
import * as _69 from "./autopilot/query.lcd";
import * as _70 from "./claim/query.lcd";
import * as _71 from "./epochs/query.lcd";
import * as _72 from "./icacallbacks/query.lcd";
import * as _73 from "./mint/v1beta1/query.lcd";
import * as _74 from "./ratelimit/query.lcd";
import * as _75 from "./records/query.lcd";
import * as _76 from "./stakeibc/query.lcd";
import * as _77 from "./autopilot/query.rpc.query";
import * as _78 from "./claim/query.rpc.query";
import * as _79 from "./epochs/query.rpc.query";
import * as _80 from "./icacallbacks/query.rpc.query";
import * as _81 from "./mint/v1beta1/query.rpc.query";
import * as _82 from "./ratelimit/query.rpc.query";
import * as _83 from "./records/query.rpc.query";
import * as _84 from "./stakeibc/query.rpc.query";
import * as _85 from "./claim/tx.rpc.msg";
import * as _86 from "./interchainquery/v1/messages.rpc.msg";
import * as _87 from "./stakeibc/tx.rpc.msg";
import * as _88 from "./lcd";
import * as _89 from "./rpc.query";
import * as _90 from "./rpc.tx";
export namespace stride {
  export const autopilot = { ..._16,
    ..._17,
    ..._18,
    ..._69,
    ..._77
  };
  export const claim = { ..._19,
    ..._20,
    ..._21,
    ..._22,
    ..._23,
    ..._63,
    ..._66,
    ..._70,
    ..._78,
    ..._85
  };
  export const epochs = { ..._24,
    ..._25,
    ..._71,
    ..._79
  };
  export const icacallbacks = { ..._26,
    ..._27,
    ..._28,
    ..._29,
    ..._30,
    ..._31,
    ..._72,
    ..._80
  };
  export namespace interchainquery {
    export const v1 = { ..._32,
      ..._33,
      ..._34,
      ..._64,
      ..._67,
      ..._86
    };
  }
  export namespace mint {
    export const v1beta1 = { ..._35,
      ..._36,
      ..._37,
      ..._73,
      ..._81
    };
  }
  export const ratelimit = { ..._38,
    ..._39,
    ..._40,
    ..._41,
    ..._42,
    ..._74,
    ..._82
  };
  export const records = { ..._43,
    ..._44,
    ..._45,
    ..._46,
    ..._47,
    ..._75,
    ..._83
  };
  export const stakeibc = { ..._48,
    ..._49,
    ..._50,
    ..._51,
    ..._52,
    ..._53,
    ..._54,
    ..._55,
    ..._56,
    ..._57,
    ..._58,
    ..._59,
    ..._65,
    ..._68,
    ..._76,
    ..._84,
    ..._87
  };
  export const vesting = { ..._60,
    ..._61
  };
  export const ClientFactory = { ..._88,
    ..._89,
    ..._90
  };
}