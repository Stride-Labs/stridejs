import * as _194 from "./airdrop/airdrop";
import * as _195 from "./airdrop/genesis";
import * as _196 from "./airdrop/query";
import * as _197 from "./airdrop/tx";
import * as _198 from "./auction/auction";
import * as _199 from "./auction/genesis";
import * as _200 from "./auction/query";
import * as _201 from "./auction/tx";
import * as _202 from "./autopilot/genesis";
import * as _203 from "./autopilot/params";
import * as _204 from "./autopilot/query";
import * as _205 from "./claim/claim";
import * as _206 from "./claim/genesis";
import * as _207 from "./claim/params";
import * as _208 from "./claim/query";
import * as _209 from "./claim/tx";
import * as _210 from "./epochs/genesis";
import * as _211 from "./epochs/query";
import * as _212 from "./icacallbacks/callback_data";
import * as _213 from "./icacallbacks/genesis";
import * as _214 from "./icacallbacks/packet";
import * as _215 from "./icacallbacks/params";
import * as _216 from "./icacallbacks/query";
import * as _217 from "./icaoracle/callbacks";
import * as _218 from "./icaoracle/contract";
import * as _219 from "./icaoracle/genesis";
import * as _220 from "./icaoracle/icaoracle";
import * as _221 from "./icaoracle/query";
import * as _222 from "./icaoracle/tx";
import * as _223 from "./icqoracle/genesis";
import * as _224 from "./icqoracle/icqoracle";
import * as _225 from "./icqoracle/query";
import * as _226 from "./icqoracle/tx";
import * as _227 from "./interchainquery/v1/genesis";
import * as _228 from "./interchainquery/v1/query";
import * as _229 from "./interchainquery/v1/tx";
import * as _230 from "./mint/v1beta1/genesis";
import * as _231 from "./mint/v1beta1/mint";
import * as _232 from "./mint/v1beta1/query";
import * as _233 from "./records/callbacks";
import * as _234 from "./records/genesis";
import * as _235 from "./records/params";
import * as _236 from "./records/query";
import * as _237 from "./records/records";
import * as _238 from "./stakedym/genesis";
import * as _239 from "./stakedym/query";
import * as _240 from "./stakedym/stakedym";
import * as _241 from "./stakedym/tx";
import * as _242 from "./stakeibc/address_unbonding";
import * as _243 from "./stakeibc/callbacks";
import * as _244 from "./stakeibc/epoch_tracker";
import * as _245 from "./stakeibc/genesis";
import * as _246 from "./stakeibc/gov";
import * as _247 from "./stakeibc/host_zone";
import * as _248 from "./stakeibc/ica_account";
import * as _249 from "./stakeibc/packet";
import * as _250 from "./stakeibc/params";
import * as _251 from "./stakeibc/query";
import * as _252 from "./stakeibc/trade_route";
import * as _253 from "./stakeibc/tx";
import * as _254 from "./stakeibc/validator";
import * as _255 from "./staketia/genesis";
import * as _256 from "./staketia/query";
import * as _257 from "./staketia/staketia";
import * as _258 from "./staketia/tx";
import * as _259 from "./strdburner/genesis";
import * as _260 from "./strdburner/query";
import * as _261 from "./vesting/vesting";
import * as _386 from "./airdrop/tx.amino";
import * as _387 from "./auction/tx.amino";
import * as _388 from "./claim/tx.amino";
import * as _389 from "./icaoracle/tx.amino";
import * as _390 from "./icqoracle/tx.amino";
import * as _391 from "./interchainquery/v1/tx.amino";
import * as _392 from "./stakedym/tx.amino";
import * as _393 from "./stakeibc/tx.amino";
import * as _394 from "./staketia/tx.amino";
import * as _395 from "./airdrop/tx.registry";
import * as _396 from "./auction/tx.registry";
import * as _397 from "./claim/tx.registry";
import * as _398 from "./icaoracle/tx.registry";
import * as _399 from "./icqoracle/tx.registry";
import * as _400 from "./interchainquery/v1/tx.registry";
import * as _401 from "./stakedym/tx.registry";
import * as _402 from "./stakeibc/tx.registry";
import * as _403 from "./staketia/tx.registry";
import * as _404 from "./airdrop/query.rpc.Query";
import * as _405 from "./auction/query.rpc.Query";
import * as _406 from "./autopilot/query.rpc.Query";
import * as _407 from "./claim/query.rpc.Query";
import * as _408 from "./epochs/query.rpc.Query";
import * as _409 from "./icacallbacks/query.rpc.Query";
import * as _410 from "./icaoracle/query.rpc.Query";
import * as _411 from "./icqoracle/query.rpc.Query";
import * as _412 from "./mint/v1beta1/query.rpc.Query";
import * as _413 from "./records/query.rpc.Query";
import * as _414 from "./stakedym/query.rpc.Query";
import * as _415 from "./stakeibc/query.rpc.Query";
import * as _416 from "./staketia/query.rpc.Query";
import * as _417 from "./strdburner/query.rpc.Query";
import * as _418 from "./airdrop/tx.rpc.msg";
import * as _419 from "./auction/tx.rpc.msg";
import * as _420 from "./claim/tx.rpc.msg";
import * as _421 from "./icaoracle/tx.rpc.msg";
import * as _422 from "./icqoracle/tx.rpc.msg";
import * as _423 from "./interchainquery/v1/tx.rpc.msg";
import * as _424 from "./stakedym/tx.rpc.msg";
import * as _425 from "./stakeibc/tx.rpc.msg";
import * as _426 from "./staketia/tx.rpc.msg";
import * as _433 from "./rpc.query";
import * as _434 from "./rpc.tx";
export namespace stride {
  export const airdrop = {
    ..._194,
    ..._195,
    ..._196,
    ..._197,
    ..._386,
    ..._395,
    ..._404,
    ..._418
  };
  export const auction = {
    ..._198,
    ..._199,
    ..._200,
    ..._201,
    ..._387,
    ..._396,
    ..._405,
    ..._419
  };
  export const autopilot = {
    ..._202,
    ..._203,
    ..._204,
    ..._406
  };
  export const claim = {
    ..._205,
    ..._206,
    ..._207,
    ..._208,
    ..._209,
    ..._388,
    ..._397,
    ..._407,
    ..._420
  };
  export const epochs = {
    ..._210,
    ..._211,
    ..._408
  };
  export const icacallbacks = {
    ..._212,
    ..._213,
    ..._214,
    ..._215,
    ..._216,
    ..._409
  };
  export const icaoracle = {
    ..._217,
    ..._218,
    ..._219,
    ..._220,
    ..._221,
    ..._222,
    ..._389,
    ..._398,
    ..._410,
    ..._421
  };
  export const icqoracle = {
    ..._223,
    ..._224,
    ..._225,
    ..._226,
    ..._390,
    ..._399,
    ..._411,
    ..._422
  };
  export namespace interchainquery {
    export const v1 = {
      ..._227,
      ..._228,
      ..._229,
      ..._391,
      ..._400,
      ..._423
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._230,
      ..._231,
      ..._232,
      ..._412
    };
  }
  export const records = {
    ..._233,
    ..._234,
    ..._235,
    ..._236,
    ..._237,
    ..._413
  };
  export const stakedym = {
    ..._238,
    ..._239,
    ..._240,
    ..._241,
    ..._392,
    ..._401,
    ..._414,
    ..._424
  };
  export const stakeibc = {
    ..._242,
    ..._243,
    ..._244,
    ..._245,
    ..._246,
    ..._247,
    ..._248,
    ..._249,
    ..._250,
    ..._251,
    ..._252,
    ..._253,
    ..._254,
    ..._393,
    ..._402,
    ..._415,
    ..._425
  };
  export const staketia = {
    ..._255,
    ..._256,
    ..._257,
    ..._258,
    ..._394,
    ..._403,
    ..._416,
    ..._426
  };
  export const strdburner = {
    ..._259,
    ..._260,
    ..._417
  };
  export const vesting = {
    ..._261
  };
  export const ClientFactory = {
    ..._433,
    ..._434
  };
}