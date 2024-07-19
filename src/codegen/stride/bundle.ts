import * as _83 from "./airdrop/airdrop";
import * as _84 from "./airdrop/genesis";
import * as _85 from "./airdrop/query";
import * as _86 from "./airdrop/tx";
import * as _87 from "./autopilot/genesis";
import * as _88 from "./autopilot/params";
import * as _89 from "./autopilot/query";
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
import * as _103 from "./icaoracle/callbacks";
import * as _104 from "./icaoracle/contract";
import * as _105 from "./icaoracle/genesis";
import * as _106 from "./icaoracle/icaoracle";
import * as _107 from "./icaoracle/query";
import * as _108 from "./icaoracle/tx";
import * as _109 from "./interchainquery/v1/genesis";
import * as _110 from "./interchainquery/v1/messages";
import * as _111 from "./interchainquery/v1/query";
import * as _112 from "./mint/v1beta1/genesis";
import * as _113 from "./mint/v1beta1/mint";
import * as _114 from "./mint/v1beta1/query";
import * as _115 from "./records/callbacks";
import * as _116 from "./records/genesis";
import * as _117 from "./records/params";
import * as _118 from "./records/query";
import * as _119 from "./records/records";
import * as _120 from "./stakedym/genesis";
import * as _121 from "./stakedym/query";
import * as _122 from "./stakedym/stakedym";
import * as _123 from "./stakedym/tx";
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
import * as _134 from "./stakeibc/trade_route";
import * as _135 from "./stakeibc/tx";
import * as _136 from "./stakeibc/validator";
import * as _137 from "./staketia/genesis";
import * as _138 from "./staketia/query";
import * as _139 from "./staketia/staketia";
import * as _140 from "./staketia/tx";
import * as _141 from "./vesting/tx";
import * as _142 from "./vesting/vesting";
import * as _215 from "./airdrop/tx.amino";
import * as _216 from "./claim/tx.amino";
import * as _217 from "./icaoracle/tx.amino";
import * as _218 from "./interchainquery/v1/messages.amino";
import * as _219 from "./stakedym/tx.amino";
import * as _220 from "./stakeibc/tx.amino";
import * as _221 from "./staketia/tx.amino";
import * as _222 from "./airdrop/tx.registry";
import * as _223 from "./claim/tx.registry";
import * as _224 from "./icaoracle/tx.registry";
import * as _225 from "./interchainquery/v1/messages.registry";
import * as _226 from "./stakedym/tx.registry";
import * as _227 from "./stakeibc/tx.registry";
import * as _228 from "./staketia/tx.registry";
import * as _229 from "./airdrop/query.lcd";
import * as _230 from "./autopilot/query.lcd";
import * as _231 from "./claim/query.lcd";
import * as _232 from "./epochs/query.lcd";
import * as _233 from "./icacallbacks/query.lcd";
import * as _234 from "./icaoracle/query.lcd";
import * as _235 from "./mint/v1beta1/query.lcd";
import * as _236 from "./records/query.lcd";
import * as _237 from "./stakedym/query.lcd";
import * as _238 from "./stakeibc/query.lcd";
import * as _239 from "./staketia/query.lcd";
import * as _240 from "./airdrop/query.rpc.Query";
import * as _241 from "./autopilot/query.rpc.Query";
import * as _242 from "./claim/query.rpc.Query";
import * as _243 from "./epochs/query.rpc.Query";
import * as _244 from "./icacallbacks/query.rpc.Query";
import * as _245 from "./icaoracle/query.rpc.Query";
import * as _246 from "./mint/v1beta1/query.rpc.Query";
import * as _247 from "./records/query.rpc.Query";
import * as _248 from "./stakedym/query.rpc.Query";
import * as _249 from "./stakeibc/query.rpc.Query";
import * as _250 from "./staketia/query.rpc.Query";
import * as _251 from "./airdrop/tx.rpc.msg";
import * as _252 from "./claim/tx.rpc.msg";
import * as _253 from "./icaoracle/tx.rpc.msg";
import * as _254 from "./interchainquery/v1/messages.rpc.msg";
import * as _255 from "./stakedym/tx.rpc.msg";
import * as _256 from "./stakeibc/tx.rpc.msg";
import * as _257 from "./staketia/tx.rpc.msg";
import * as _261 from "./lcd";
import * as _262 from "./rpc.query";
import * as _263 from "./rpc.tx";
export namespace stride {
  export const airdrop = {
    ..._83,
    ..._84,
    ..._85,
    ..._86,
    ..._215,
    ..._222,
    ..._229,
    ..._240,
    ..._251
  };
  export const autopilot = {
    ..._87,
    ..._88,
    ..._89,
    ..._230,
    ..._241
  };
  export const claim = {
    ..._90,
    ..._91,
    ..._92,
    ..._93,
    ..._94,
    ..._216,
    ..._223,
    ..._231,
    ..._242,
    ..._252
  };
  export const epochs = {
    ..._95,
    ..._96,
    ..._232,
    ..._243
  };
  export const icacallbacks = {
    ..._97,
    ..._98,
    ..._99,
    ..._100,
    ..._101,
    ..._102,
    ..._233,
    ..._244
  };
  export const icaoracle = {
    ..._103,
    ..._104,
    ..._105,
    ..._106,
    ..._107,
    ..._108,
    ..._217,
    ..._224,
    ..._234,
    ..._245,
    ..._253
  };
  export namespace interchainquery {
    export const v1 = {
      ..._109,
      ..._110,
      ..._111,
      ..._218,
      ..._225,
      ..._254
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._112,
      ..._113,
      ..._114,
      ..._235,
      ..._246
    };
  }
  export const records = {
    ..._115,
    ..._116,
    ..._117,
    ..._118,
    ..._119,
    ..._236,
    ..._247
  };
  export const stakedym = {
    ..._120,
    ..._121,
    ..._122,
    ..._123,
    ..._219,
    ..._226,
    ..._237,
    ..._248,
    ..._255
  };
  export const stakeibc = {
    ..._124,
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
    ..._136,
    ..._220,
    ..._227,
    ..._238,
    ..._249,
    ..._256
  };
  export const staketia = {
    ..._137,
    ..._138,
    ..._139,
    ..._140,
    ..._221,
    ..._228,
    ..._239,
    ..._250,
    ..._257
  };
  export const vesting = {
    ..._141,
    ..._142
  };
  export const ClientFactory = {
    ..._261,
    ..._262,
    ..._263
  };
}