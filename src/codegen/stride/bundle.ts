import * as _86 from "./epochs/genesis";
import * as _87 from "./epochs/query";
import * as _88 from "./icacallbacks/callback_data";
import * as _89 from "./icacallbacks/genesis";
import * as _90 from "./icacallbacks/packet";
import * as _91 from "./icacallbacks/params";
import * as _92 from "./icacallbacks/query";
import * as _93 from "./icacallbacks/tx";
import * as _94 from "./interchainquery/v1/genesis";
import * as _95 from "./interchainquery/v1/messages";
import * as _96 from "./mint/v1beta1/genesis";
import * as _97 from "./mint/v1beta1/mint";
import * as _98 from "./mint/v1beta1/query";
import * as _99 from "./records/callbacks";
import * as _100 from "./records/genesis";
import * as _101 from "./records/query";
import * as _102 from "./stakeibc/callbacks";
import * as _103 from "./stakeibc/delegation";
import * as _104 from "./stakeibc/epoch_tracker";
import * as _105 from "./stakeibc/genesis";
import * as _106 from "./stakeibc/gov";
import * as _107 from "./stakeibc/host_zone";
import * as _108 from "./stakeibc/ica_account";
import * as _109 from "./stakeibc/min_validator_requirements";
import * as _110 from "./stakeibc/packet";
import * as _111 from "./stakeibc/params";
import * as _112 from "./stakeibc/query";
import * as _113 from "./stakeibc/tx";
import * as _114 from "./stakeibc/validator";
import * as _174 from "./interchainquery/v1/messages.amino";
import * as _175 from "./stakeibc/tx.amino";
import * as _176 from "./interchainquery/v1/messages.registry";
import * as _177 from "./stakeibc/tx.registry";
import * as _178 from "./epochs/query.rpc.Query";
import * as _179 from "./icacallbacks/query.rpc.Query";
import * as _180 from "./mint/v1beta1/query.rpc.Query";
import * as _181 from "./records/query.rpc.Query";
import * as _182 from "./stakeibc/query.rpc.Query";
import * as _183 from "./interchainquery/v1/messages.rpc.msg";
import * as _184 from "./stakeibc/tx.rpc.msg";
import * as _189 from "./rpc.query";
import * as _190 from "./rpc.tx";
export namespace stride {
  export const epochs = { ..._86,
    ..._87,
    ..._178
  };
  export const icacallbacks = { ..._88,
    ..._89,
    ..._90,
    ..._91,
    ..._92,
    ..._93,
    ..._179
  };
  export namespace interchainquery {
    export const v1 = { ..._94,
      ..._95,
      ..._174,
      ..._176,
      ..._183
    };
  }
  export namespace mint {
    export const v1beta1 = { ..._96,
      ..._97,
      ..._98,
      ..._180
    };
  }
  export const records = { ..._99,
    ..._100,
    ..._101,
    ..._181
  };
  export const stakeibc = { ..._102,
    ..._103,
    ..._104,
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
    ..._175,
    ..._177,
    ..._182,
    ..._184
  };
  export const ClientFactory = { ..._189,
    ..._190
  };
}