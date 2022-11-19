import * as _83 from "./claim/claim";
import * as _84 from "./claim/genesis";
import * as _85 from "./claim/params";
import * as _86 from "./claim/query";
import * as _87 from "./claim/tx";
import * as _88 from "./epochs/genesis";
import * as _89 from "./epochs/query";
import * as _90 from "./icacallbacks/callback_data";
import * as _91 from "./icacallbacks/genesis";
import * as _92 from "./icacallbacks/packet";
import * as _93 from "./icacallbacks/params";
import * as _94 from "./icacallbacks/query";
import * as _95 from "./icacallbacks/tx";
import * as _96 from "./interchainquery/v1/genesis";
import * as _97 from "./interchainquery/v1/messages";
import * as _98 from "./mint/v1beta1/genesis";
import * as _99 from "./mint/v1beta1/mint";
import * as _100 from "./mint/v1beta1/query";
import * as _101 from "./records/callbacks";
import * as _102 from "./records/genesis";
import * as _103 from "./records/query";
import * as _104 from "./stakeibc/callbacks";
import * as _105 from "./stakeibc/delegation";
import * as _106 from "./stakeibc/epoch_tracker";
import * as _107 from "./stakeibc/genesis";
import * as _108 from "./stakeibc/gov";
import * as _109 from "./stakeibc/host_zone";
import * as _110 from "./stakeibc/ica_account";
import * as _111 from "./stakeibc/min_validator_requirements";
import * as _112 from "./stakeibc/packet";
import * as _113 from "./stakeibc/params";
import * as _114 from "./stakeibc/query";
import * as _115 from "./stakeibc/tx";
import * as _116 from "./stakeibc/validator";
import * as _117 from "./vesting/tx";
import * as _118 from "./vesting/vesting";
import * as _188 from "./claim/tx.amino";
import * as _189 from "./interchainquery/v1/messages.amino";
import * as _190 from "./stakeibc/tx.amino";
import * as _191 from "./claim/tx.registry";
import * as _192 from "./interchainquery/v1/messages.registry";
import * as _193 from "./stakeibc/tx.registry";
import * as _194 from "./claim/query.lcd";
import * as _195 from "./epochs/query.lcd";
import * as _196 from "./icacallbacks/query.lcd";
import * as _197 from "./mint/v1beta1/query.lcd";
import * as _198 from "./records/query.lcd";
import * as _199 from "./stakeibc/query.lcd";
import * as _200 from "./claim/query.rpc.query";
import * as _201 from "./epochs/query.rpc.query";
import * as _202 from "./icacallbacks/query.rpc.query";
import * as _203 from "./mint/v1beta1/query.rpc.query";
import * as _204 from "./records/query.rpc.query";
import * as _205 from "./stakeibc/query.rpc.query";
import * as _206 from "./claim/tx.rpc.msg";
import * as _207 from "./interchainquery/v1/messages.rpc.msg";
import * as _208 from "./stakeibc/tx.rpc.msg";
import * as _212 from "./lcd";
import * as _213 from "./rpc.query";
import * as _214 from "./rpc.tx";
export namespace stride {
  export const claim = { ..._83,
    ..._84,
    ..._85,
    ..._86,
    ..._87,
    ..._188,
    ..._191,
    ..._194,
    ..._200,
    ..._206
  };
  export const epochs = { ..._88,
    ..._89,
    ..._195,
    ..._201
  };
  export const icacallbacks = { ..._90,
    ..._91,
    ..._92,
    ..._93,
    ..._94,
    ..._95,
    ..._196,
    ..._202
  };
  export namespace interchainquery {
    export const v1 = { ..._96,
      ..._97,
      ..._189,
      ..._192,
      ..._207
    };
  }
  export namespace mint {
    export const v1beta1 = { ..._98,
      ..._99,
      ..._100,
      ..._197,
      ..._203
    };
  }
  export const records = { ..._101,
    ..._102,
    ..._103,
    ..._198,
    ..._204
  };
  export const stakeibc = { ..._104,
    ..._105,
    ..._106,
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
    ..._190,
    ..._193,
    ..._199,
    ..._205,
    ..._208
  };
  export const vesting = { ..._117,
    ..._118
  };
  export const ClientFactory = { ..._212,
    ..._213,
    ..._214
  };
}