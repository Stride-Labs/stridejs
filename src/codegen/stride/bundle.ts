import * as _94 from "./claim/claim";
import * as _95 from "./claim/genesis";
import * as _96 from "./claim/params";
import * as _97 from "./claim/query";
import * as _98 from "./claim/tx";
import * as _99 from "./epochs/genesis";
import * as _100 from "./epochs/query";
import * as _101 from "./icacallbacks/callback_data";
import * as _102 from "./icacallbacks/genesis";
import * as _103 from "./icacallbacks/packet";
import * as _104 from "./icacallbacks/params";
import * as _105 from "./icacallbacks/query";
import * as _106 from "./icacallbacks/tx";
import * as _107 from "./interchainquery/v1/genesis";
import * as _108 from "./interchainquery/v1/messages";
import * as _109 from "./mint/v1beta1/genesis";
import * as _110 from "./mint/v1beta1/mint";
import * as _111 from "./mint/v1beta1/query";
import * as _112 from "./records/callbacks";
import * as _113 from "./records/genesis";
import * as _114 from "./records/query";
import * as _115 from "./stakeibc/callbacks";
import * as _116 from "./stakeibc/delegation";
import * as _117 from "./stakeibc/epoch_tracker";
import * as _118 from "./stakeibc/genesis";
import * as _119 from "./stakeibc/gov";
import * as _120 from "./stakeibc/host_zone";
import * as _121 from "./stakeibc/ica_account";
import * as _122 from "./stakeibc/min_validator_requirements";
import * as _123 from "./stakeibc/packet";
import * as _124 from "./stakeibc/params";
import * as _125 from "./stakeibc/query";
import * as _126 from "./stakeibc/tx";
import * as _127 from "./stakeibc/validator";
import * as _128 from "./vesting/tx";
import * as _129 from "./vesting/vesting";
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
  export const claim = { ..._94,
    ..._95,
    ..._96,
    ..._97,
    ..._98,
    ..._188,
    ..._191,
    ..._194,
    ..._200,
    ..._206
  };
  export const epochs = { ..._99,
    ..._100,
    ..._195,
    ..._201
  };
  export const icacallbacks = { ..._101,
    ..._102,
    ..._103,
    ..._104,
    ..._105,
    ..._106,
    ..._196,
    ..._202
  };
  export namespace interchainquery {
    export const v1 = { ..._107,
      ..._108,
      ..._189,
      ..._192,
      ..._207
    };
  }
  export namespace mint {
    export const v1beta1 = { ..._109,
      ..._110,
      ..._111,
      ..._197,
      ..._203
    };
  }
  export const records = { ..._112,
    ..._113,
    ..._114,
    ..._198,
    ..._204
  };
  export const stakeibc = { ..._115,
    ..._116,
    ..._117,
    ..._118,
    ..._119,
    ..._120,
    ..._121,
    ..._122,
    ..._123,
    ..._124,
    ..._125,
    ..._126,
    ..._127,
    ..._190,
    ..._193,
    ..._199,
    ..._205,
    ..._208
  };
  export const vesting = { ..._128,
    ..._129
  };
  export const ClientFactory = { ..._212,
    ..._213,
    ..._214
  };
}