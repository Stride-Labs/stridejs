import * as _200 from "./airdrop/airdrop";
import * as _201 from "./airdrop/genesis";
import * as _202 from "./airdrop/query";
import * as _203 from "./airdrop/tx";
import * as _204 from "./auction/auction";
import * as _205 from "./auction/genesis";
import * as _206 from "./auction/query";
import * as _207 from "./auction/tx";
import * as _208 from "./autopilot/genesis";
import * as _209 from "./autopilot/params";
import * as _210 from "./autopilot/query";
import * as _211 from "./claim/claim";
import * as _212 from "./claim/genesis";
import * as _213 from "./claim/params";
import * as _214 from "./claim/query";
import * as _215 from "./claim/tx";
import * as _216 from "./epochs/genesis";
import * as _217 from "./epochs/query";
import * as _218 from "./icacallbacks/callback_data";
import * as _219 from "./icacallbacks/genesis";
import * as _220 from "./icacallbacks/packet";
import * as _221 from "./icacallbacks/params";
import * as _222 from "./icacallbacks/query";
import * as _223 from "./icaoracle/callbacks";
import * as _224 from "./icaoracle/contract";
import * as _225 from "./icaoracle/genesis";
import * as _226 from "./icaoracle/icaoracle";
import * as _227 from "./icaoracle/query";
import * as _228 from "./icaoracle/tx";
import * as _229 from "./icqoracle/genesis";
import * as _230 from "./icqoracle/icqoracle";
import * as _231 from "./icqoracle/query";
import * as _232 from "./icqoracle/tx";
import * as _233 from "./interchainquery/v1/genesis";
import * as _234 from "./interchainquery/v1/query";
import * as _235 from "./interchainquery/v1/tx";
import * as _236 from "./mint/v1beta1/genesis";
import * as _237 from "./mint/v1beta1/mint";
import * as _238 from "./mint/v1beta1/query";
import * as _239 from "./records/callbacks";
import * as _240 from "./records/genesis";
import * as _241 from "./records/params";
import * as _242 from "./records/query";
import * as _243 from "./records/records";
import * as _244 from "./stakedym/genesis";
import * as _245 from "./stakedym/query";
import * as _246 from "./stakedym/stakedym";
import * as _247 from "./stakedym/tx";
import * as _248 from "./stakeibc/address_unbonding";
import * as _249 from "./stakeibc/callbacks";
import * as _250 from "./stakeibc/epoch_tracker";
import * as _251 from "./stakeibc/genesis";
import * as _252 from "./stakeibc/gov";
import * as _253 from "./stakeibc/host_zone";
import * as _254 from "./stakeibc/ica_account";
import * as _255 from "./stakeibc/packet";
import * as _256 from "./stakeibc/params";
import * as _257 from "./stakeibc/query";
import * as _258 from "./stakeibc/trade_route";
import * as _259 from "./stakeibc/tx";
import * as _260 from "./stakeibc/validator";
import * as _261 from "./staketia/genesis";
import * as _262 from "./staketia/query";
import * as _263 from "./staketia/staketia";
import * as _264 from "./staketia/tx";
import * as _265 from "./strdburner/genesis";
import * as _266 from "./strdburner/query";
import * as _267 from "./vesting/vesting";
import * as _396 from "./airdrop/tx.amino";
import * as _397 from "./auction/tx.amino";
import * as _398 from "./claim/tx.amino";
import * as _399 from "./icaoracle/tx.amino";
import * as _400 from "./icqoracle/tx.amino";
import * as _401 from "./interchainquery/v1/tx.amino";
import * as _402 from "./stakedym/tx.amino";
import * as _403 from "./stakeibc/tx.amino";
import * as _404 from "./staketia/tx.amino";
import * as _405 from "./airdrop/tx.registry";
import * as _406 from "./auction/tx.registry";
import * as _407 from "./claim/tx.registry";
import * as _408 from "./icaoracle/tx.registry";
import * as _409 from "./icqoracle/tx.registry";
import * as _410 from "./interchainquery/v1/tx.registry";
import * as _411 from "./stakedym/tx.registry";
import * as _412 from "./stakeibc/tx.registry";
import * as _413 from "./staketia/tx.registry";
import * as _414 from "./airdrop/query.rpc.Query";
import * as _415 from "./auction/query.rpc.Query";
import * as _416 from "./autopilot/query.rpc.Query";
import * as _417 from "./claim/query.rpc.Query";
import * as _418 from "./epochs/query.rpc.Query";
import * as _419 from "./icacallbacks/query.rpc.Query";
import * as _420 from "./icaoracle/query.rpc.Query";
import * as _421 from "./icqoracle/query.rpc.Query";
import * as _422 from "./mint/v1beta1/query.rpc.Query";
import * as _423 from "./records/query.rpc.Query";
import * as _424 from "./stakedym/query.rpc.Query";
import * as _425 from "./stakeibc/query.rpc.Query";
import * as _426 from "./staketia/query.rpc.Query";
import * as _427 from "./strdburner/query.rpc.Query";
import * as _428 from "./airdrop/tx.rpc.msg";
import * as _429 from "./auction/tx.rpc.msg";
import * as _430 from "./claim/tx.rpc.msg";
import * as _431 from "./icaoracle/tx.rpc.msg";
import * as _432 from "./icqoracle/tx.rpc.msg";
import * as _433 from "./interchainquery/v1/tx.rpc.msg";
import * as _434 from "./stakedym/tx.rpc.msg";
import * as _435 from "./stakeibc/tx.rpc.msg";
import * as _436 from "./staketia/tx.rpc.msg";
import * as _445 from "./rpc.query";
import * as _446 from "./rpc.tx";
export namespace stride {
  export const airdrop = {
    ..._200,
    ..._201,
    ..._202,
    ..._203,
    ..._396,
    ..._405,
    ..._414,
    ..._428
  };
  export const auction = {
    ..._204,
    ..._205,
    ..._206,
    ..._207,
    ..._397,
    ..._406,
    ..._415,
    ..._429
  };
  export const autopilot = {
    ..._208,
    ..._209,
    ..._210,
    ..._416
  };
  export const claim = {
    ..._211,
    ..._212,
    ..._213,
    ..._214,
    ..._215,
    ..._398,
    ..._407,
    ..._417,
    ..._430
  };
  export const epochs = {
    ..._216,
    ..._217,
    ..._418
  };
  export const icacallbacks = {
    ..._218,
    ..._219,
    ..._220,
    ..._221,
    ..._222,
    ..._419
  };
  export const icaoracle = {
    ..._223,
    ..._224,
    ..._225,
    ..._226,
    ..._227,
    ..._228,
    ..._399,
    ..._408,
    ..._420,
    ..._431
  };
  export const icqoracle = {
    ..._229,
    ..._230,
    ..._231,
    ..._232,
    ..._400,
    ..._409,
    ..._421,
    ..._432
  };
  export namespace interchainquery {
    export const v1 = {
      ..._233,
      ..._234,
      ..._235,
      ..._401,
      ..._410,
      ..._433
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._236,
      ..._237,
      ..._238,
      ..._422
    };
  }
  export const records = {
    ..._239,
    ..._240,
    ..._241,
    ..._242,
    ..._243,
    ..._423
  };
  export const stakedym = {
    ..._244,
    ..._245,
    ..._246,
    ..._247,
    ..._402,
    ..._411,
    ..._424,
    ..._434
  };
  export const stakeibc = {
    ..._248,
    ..._249,
    ..._250,
    ..._251,
    ..._252,
    ..._253,
    ..._254,
    ..._255,
    ..._256,
    ..._257,
    ..._258,
    ..._259,
    ..._260,
    ..._403,
    ..._412,
    ..._425,
    ..._435
  };
  export const staketia = {
    ..._261,
    ..._262,
    ..._263,
    ..._264,
    ..._404,
    ..._413,
    ..._426,
    ..._436
  };
  export const strdburner = {
    ..._265,
    ..._266,
    ..._427
  };
  export const vesting = {
    ..._267
  };
  export const ClientFactory = {
    ..._445,
    ..._446
  };
}