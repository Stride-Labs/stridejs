import * as _90 from "./claim/claim";
import * as _91 from "./claim/genesis";
import * as _92 from "./claim/params";
import * as _93 from "./claim/query";
import * as _94 from "./claim/tx";
import * as _95 from "./epochs/genesis";
import * as _96 from "./epochs/query";
import * as _97 from "./icacallbacks/callback_data";
import * as _98 from "./icacallbacks/genesis";
import * as _99 from "./icacallbacks/packet";
import * as _100 from "./icacallbacks/params";
import * as _101 from "./icacallbacks/query";
import * as _102 from "./icacallbacks/tx";
import * as _103 from "./interchainquery/v1/genesis";
import * as _104 from "./interchainquery/v1/messages";
import * as _105 from "./mint/v1beta1/genesis";
import * as _106 from "./mint/v1beta1/mint";
import * as _107 from "./mint/v1beta1/query";
import * as _108 from "./records/callbacks";
import * as _109 from "./records/genesis";
import * as _110 from "./records/query";
import * as _111 from "./stakeibc/callbacks";
import * as _112 from "./stakeibc/delegation";
import * as _113 from "./stakeibc/epoch_tracker";
import * as _114 from "./stakeibc/genesis";
import * as _115 from "./stakeibc/gov";
import * as _116 from "./stakeibc/host_zone";
import * as _117 from "./stakeibc/ica_account";
import * as _118 from "./stakeibc/min_validator_requirements";
import * as _119 from "./stakeibc/packet";
import * as _120 from "./stakeibc/params";
import * as _121 from "./stakeibc/query";
import * as _122 from "./stakeibc/tx";
import * as _123 from "./stakeibc/validator";
import * as _124 from "./vesting/tx";
import * as _125 from "./vesting/vesting";
import * as _184 from "./claim/tx.amino";
import * as _185 from "./interchainquery/v1/messages.amino";
import * as _186 from "./stakeibc/tx.amino";
import * as _187 from "./claim/tx.registry";
import * as _188 from "./interchainquery/v1/messages.registry";
import * as _189 from "./stakeibc/tx.registry";
import * as _190 from "./claim/query.lcd";
import * as _191 from "./epochs/query.lcd";
import * as _192 from "./icacallbacks/query.lcd";
import * as _193 from "./mint/v1beta1/query.lcd";
import * as _194 from "./records/query.lcd";
import * as _195 from "./stakeibc/query.lcd";
import * as _196 from "./claim/query.rpc.Query";
import * as _197 from "./epochs/query.rpc.Query";
import * as _198 from "./icacallbacks/query.rpc.Query";
import * as _199 from "./mint/v1beta1/query.rpc.Query";
import * as _200 from "./records/query.rpc.Query";
import * as _201 from "./stakeibc/query.rpc.Query";
import * as _202 from "./claim/tx.rpc.msg";
import * as _203 from "./interchainquery/v1/messages.rpc.msg";
import * as _204 from "./stakeibc/tx.rpc.msg";
import * as _208 from "./lcd";
import * as _209 from "./rpc.query";
import * as _210 from "./rpc.tx";
export namespace stride {
  export const claim = { ..._90,
    ..._91,
    ..._92,
    ..._93,
    ..._94,
    ..._184,
    ..._187,
    ..._190,
    ..._196,
    ..._202
  };
  export const epochs = { ..._95,
    ..._96,
    ..._191,
    ..._197
  };
  export const icacallbacks = { ..._97,
    ..._98,
    ..._99,
    ..._100,
    ..._101,
    ..._102,
    ..._192,
    ..._198
  };
  export namespace interchainquery {
    export const v1 = { ..._103,
      ..._104,
      ..._185,
      ..._188,
      ..._203
    };
  }
  export namespace mint {
    export const v1beta1 = { ..._105,
      ..._106,
      ..._107,
      ..._193,
      ..._199
    };
  }
  export const records = { ..._108,
    ..._109,
    ..._110,
    ..._194,
    ..._200
  };
  export const stakeibc = { ..._111,
    ..._112,
    ..._113,
    ..._114,
    ..._115,
    ..._116,
    ..._117,
    ..._118,
    ..._119,
    ..._120,
    ..._121,
    ..._122,
    ..._123,
    ..._186,
    ..._189,
    ..._195,
    ..._201,
    ..._204
  };
  export const vesting = { ..._124,
    ..._125
  };
  export const ClientFactory = { ..._208,
    ..._209,
    ..._210
  };
}