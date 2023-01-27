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
import * as _109 from "./interchainquery/v1/query";
import * as _110 from "./mint/v1beta1/genesis";
import * as _111 from "./mint/v1beta1/mint";
import * as _112 from "./mint/v1beta1/query";
import * as _113 from "./records/callbacks";
import * as _114 from "./records/genesis";
import * as _115 from "./records/query";
import * as _116 from "./stakeibc/callbacks";
import * as _117 from "./stakeibc/epoch_tracker";
import * as _118 from "./stakeibc/genesis";
import * as _119 from "./stakeibc/gov";
import * as _120 from "./stakeibc/host_zone";
import * as _121 from "./stakeibc/ica_account";
import * as _122 from "./stakeibc/packet";
import * as _123 from "./stakeibc/params";
import * as _124 from "./stakeibc/query";
import * as _125 from "./stakeibc/tx";
import * as _126 from "./stakeibc/validator";
import * as _127 from "./vesting/tx";
import * as _128 from "./vesting/vesting";
import * as _187 from "./claim/tx.amino";
import * as _188 from "./interchainquery/v1/messages.amino";
import * as _189 from "./stakeibc/tx.amino";
import * as _190 from "./claim/tx.registry";
import * as _191 from "./interchainquery/v1/messages.registry";
import * as _192 from "./stakeibc/tx.registry";
import * as _193 from "./claim/query.lcd";
import * as _194 from "./epochs/query.lcd";
import * as _195 from "./icacallbacks/query.lcd";
import * as _196 from "./mint/v1beta1/query.lcd";
import * as _197 from "./records/query.lcd";
import * as _198 from "./stakeibc/query.lcd";
import * as _199 from "./claim/query.rpc.query";
import * as _200 from "./epochs/query.rpc.query";
import * as _201 from "./icacallbacks/query.rpc.query";
import * as _202 from "./mint/v1beta1/query.rpc.query";
import * as _203 from "./records/query.rpc.query";
import * as _204 from "./stakeibc/query.rpc.query";
import * as _205 from "./claim/tx.rpc.msg";
import * as _206 from "./interchainquery/v1/messages.rpc.msg";
import * as _207 from "./stakeibc/tx.rpc.msg";
import * as _211 from "./lcd";
import * as _212 from "./rpc.query";
import * as _213 from "./rpc.tx";
export namespace stride {
  export const claim = { ..._94,
    ..._95,
    ..._96,
    ..._97,
    ..._98,
    ..._187,
    ..._190,
    ..._193,
    ..._199,
    ..._205
  };
  export const epochs = { ..._99,
    ..._100,
    ..._194,
    ..._200
  };
  export const icacallbacks = { ..._101,
    ..._102,
    ..._103,
    ..._104,
    ..._105,
    ..._106,
    ..._195,
    ..._201
  };
  export namespace interchainquery {
    export const v1 = { ..._107,
      ..._108,
      ..._109,
      ..._188,
      ..._191,
      ..._206
    };
  }
  export namespace mint {
    export const v1beta1 = { ..._110,
      ..._111,
      ..._112,
      ..._196,
      ..._202
    };
  }
  export const records = { ..._113,
    ..._114,
    ..._115,
    ..._197,
    ..._203
  };
  export const stakeibc = { ..._116,
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
    ..._189,
    ..._192,
    ..._198,
    ..._204,
    ..._207
  };
  export const vesting = { ..._127,
    ..._128
  };
  export const ClientFactory = { ..._211,
    ..._212,
    ..._213
  };
}