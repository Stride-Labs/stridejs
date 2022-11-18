import * as _90 from "./epochs/genesis";
import * as _91 from "./epochs/query";
import * as _92 from "./icacallbacks/callback_data";
import * as _93 from "./icacallbacks/genesis";
import * as _94 from "./icacallbacks/packet";
import * as _95 from "./icacallbacks/params";
import * as _96 from "./icacallbacks/query";
import * as _97 from "./icacallbacks/tx";
import * as _98 from "./interchainquery/v1/genesis";
import * as _99 from "./interchainquery/v1/messages";
import * as _100 from "./mint/v1beta1/genesis";
import * as _101 from "./mint/v1beta1/mint";
import * as _102 from "./mint/v1beta1/query";
import * as _103 from "./records/callbacks";
import * as _104 from "./records/genesis";
import * as _105 from "./records/query";
import * as _106 from "./stakeibc/callbacks";
import * as _107 from "./stakeibc/delegation";
import * as _108 from "./stakeibc/epoch_tracker";
import * as _109 from "./stakeibc/genesis";
import * as _110 from "./stakeibc/gov";
import * as _111 from "./stakeibc/host_zone";
import * as _112 from "./stakeibc/ica_account";
import * as _113 from "./stakeibc/min_validator_requirements";
import * as _114 from "./stakeibc/packet";
import * as _115 from "./stakeibc/params";
import * as _116 from "./stakeibc/query";
import * as _117 from "./stakeibc/tx";
import * as _118 from "./stakeibc/validator";
import * as _193 from "./interchainquery/v1/messages.amino";
import * as _194 from "./stakeibc/tx.amino";
import * as _195 from "./interchainquery/v1/messages.registry";
import * as _196 from "./stakeibc/tx.registry";
import * as _197 from "./epochs/query.lcd";
import * as _198 from "./icacallbacks/query.lcd";
import * as _199 from "./mint/v1beta1/query.lcd";
import * as _200 from "./records/query.lcd";
import * as _201 from "./stakeibc/query.lcd";
import * as _202 from "./epochs/query.rpc.query";
import * as _203 from "./icacallbacks/query.rpc.query";
import * as _204 from "./mint/v1beta1/query.rpc.query";
import * as _205 from "./records/query.rpc.query";
import * as _206 from "./stakeibc/query.rpc.query";
import * as _207 from "./interchainquery/v1/messages.rpc.msg";
import * as _208 from "./stakeibc/tx.rpc.msg";
import * as _215 from "./lcd";
import * as _216 from "./rpc.query";
import * as _217 from "./rpc.tx";
export namespace stride {
  export const epochs = { ..._90,
    ..._91,
    ..._197,
    ..._202
  };
  export const icacallbacks = { ..._92,
    ..._93,
    ..._94,
    ..._95,
    ..._96,
    ..._97,
    ..._198,
    ..._203
  };
  export namespace interchainquery {
    export const v1 = { ..._98,
      ..._99,
      ..._193,
      ..._195,
      ..._207
    };
  }
  export namespace mint {
    export const v1beta1 = { ..._100,
      ..._101,
      ..._102,
      ..._199,
      ..._204
    };
  }
  export const records = { ..._103,
    ..._104,
    ..._105,
    ..._200,
    ..._205
  };
  export const stakeibc = { ..._106,
    ..._107,
    ..._108,
    ..._109,
    ..._110,
    ..._111,
    ..._112,
    ..._113,
    ..._114,
    ..._115,
    ..._116,
    ..._117,
    ..._118,
    ..._194,
    ..._196,
    ..._201,
    ..._206,
    ..._208
  };
  export const ClientFactory = { ..._215,
    ..._216,
    ..._217
  };
}