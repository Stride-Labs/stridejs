import * as _92 from "./autopilot/genesis";
import * as _93 from "./autopilot/params";
import * as _94 from "./autopilot/query";
import * as _95 from "./claim/claim";
import * as _96 from "./claim/genesis";
import * as _97 from "./claim/params";
import * as _98 from "./claim/query";
import * as _99 from "./claim/tx";
import * as _100 from "./epochs/genesis";
import * as _101 from "./epochs/query";
import * as _102 from "./icacallbacks/callback_data";
import * as _103 from "./icacallbacks/genesis";
import * as _104 from "./icacallbacks/packet";
import * as _105 from "./icacallbacks/params";
import * as _106 from "./icacallbacks/query";
import * as _107 from "./icacallbacks/tx";
import * as _108 from "./interchainquery/v1/genesis";
import * as _109 from "./interchainquery/v1/messages";
import * as _110 from "./interchainquery/v1/query";
import * as _111 from "./mint/v1beta1/genesis";
import * as _112 from "./mint/v1beta1/mint";
import * as _113 from "./mint/v1beta1/query";
import * as _114 from "./ratelimit/genesis";
import * as _115 from "./ratelimit/gov";
import * as _116 from "./ratelimit/params";
import * as _117 from "./ratelimit/query";
import * as _118 from "./ratelimit/ratelimit";
import * as _119 from "./records/callbacks";
import * as _120 from "./records/genesis";
import * as _121 from "./records/params";
import * as _122 from "./records/query";
import * as _123 from "./records/records";
import * as _124 from "./stakeibc/address_unbonding";
import * as _125 from "./stakeibc/callbacks";
import * as _126 from "./stakeibc/epoch_tracker";
import * as _127 from "./stakeibc/genesis";
import * as _128 from "./stakeibc/gov";
import * as _129 from "./stakeibc/host_zone";
import * as _130 from "./stakeibc/ica_account";
import * as _131 from "./stakeibc/packet";
import * as _132 from "./stakeibc/params";
import * as _133 from "./stakeibc/query";
import * as _134 from "./stakeibc/tx";
import * as _135 from "./stakeibc/validator";
import * as _136 from "./vesting/tx";
import * as _137 from "./vesting/vesting";
import * as _208 from "./claim/tx.amino";
import * as _209 from "./interchainquery/v1/messages.amino";
import * as _210 from "./stakeibc/tx.amino";
import * as _211 from "./claim/tx.registry";
import * as _212 from "./interchainquery/v1/messages.registry";
import * as _213 from "./stakeibc/tx.registry";
import * as _214 from "./autopilot/query.lcd";
import * as _215 from "./claim/query.lcd";
import * as _216 from "./epochs/query.lcd";
import * as _217 from "./icacallbacks/query.lcd";
import * as _218 from "./mint/v1beta1/query.lcd";
import * as _219 from "./ratelimit/query.lcd";
import * as _220 from "./records/query.lcd";
import * as _221 from "./stakeibc/query.lcd";
import * as _222 from "./autopilot/query.rpc.query";
import * as _223 from "./claim/query.rpc.query";
import * as _224 from "./epochs/query.rpc.query";
import * as _225 from "./icacallbacks/query.rpc.query";
import * as _226 from "./mint/v1beta1/query.rpc.query";
import * as _227 from "./ratelimit/query.rpc.query";
import * as _228 from "./records/query.rpc.query";
import * as _229 from "./stakeibc/query.rpc.query";
import * as _230 from "./claim/tx.rpc.msg";
import * as _231 from "./interchainquery/v1/messages.rpc.msg";
import * as _232 from "./stakeibc/tx.rpc.msg";
import * as _236 from "./lcd";
import * as _237 from "./rpc.query";
import * as _238 from "./rpc.tx";
export namespace stride {
  export const autopilot = { ..._92,
    ..._93,
    ..._94,
    ..._214,
    ..._222
  };
  export const claim = { ..._95,
    ..._96,
    ..._97,
    ..._98,
    ..._99,
    ..._208,
    ..._211,
    ..._215,
    ..._223,
    ..._230
  };
  export const epochs = { ..._100,
    ..._101,
    ..._216,
    ..._224
  };
  export const icacallbacks = { ..._102,
    ..._103,
    ..._104,
    ..._105,
    ..._106,
    ..._107,
    ..._217,
    ..._225
  };
  export namespace interchainquery {
    export const v1 = { ..._108,
      ..._109,
      ..._110,
      ..._209,
      ..._212,
      ..._231
    };
  }
  export namespace mint {
    export const v1beta1 = { ..._111,
      ..._112,
      ..._113,
      ..._218,
      ..._226
    };
  }
  export const ratelimit = { ..._114,
    ..._115,
    ..._116,
    ..._117,
    ..._118,
    ..._219,
    ..._227
  };
  export const records = { ..._119,
    ..._120,
    ..._121,
    ..._122,
    ..._123,
    ..._220,
    ..._228
  };
  export const stakeibc = { ..._124,
    ..._125,
    ..._126,
    ..._127,
    ..._128,
    ..._129,
    ..._130,
    ..._131,
    ..._132,
    ..._133,
    ..._134,
    ..._135,
    ..._210,
    ..._213,
    ..._221,
    ..._229,
    ..._232
  };
  export const vesting = { ..._136,
    ..._137
  };
  export const ClientFactory = { ..._236,
    ..._237,
    ..._238
  };
}