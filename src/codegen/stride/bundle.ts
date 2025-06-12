import * as _190 from "./airdrop/airdrop";
import * as _191 from "./airdrop/genesis";
import * as _192 from "./airdrop/query";
import * as _193 from "./airdrop/tx";
import * as _194 from "./auction/auction";
import * as _195 from "./auction/genesis";
import * as _196 from "./auction/query";
import * as _197 from "./auction/tx";
import * as _198 from "./autopilot/genesis";
import * as _199 from "./autopilot/params";
import * as _200 from "./autopilot/query";
import * as _201 from "./claim/claim";
import * as _202 from "./claim/genesis";
import * as _203 from "./claim/params";
import * as _204 from "./claim/query";
import * as _205 from "./claim/tx";
import * as _206 from "./epochs/genesis";
import * as _207 from "./epochs/query";
import * as _208 from "./icacallbacks/callback_data";
import * as _209 from "./icacallbacks/genesis";
import * as _210 from "./icacallbacks/packet";
import * as _211 from "./icacallbacks/params";
import * as _212 from "./icacallbacks/query";
import * as _213 from "./icacallbacks/tx";
import * as _214 from "./icaoracle/callbacks";
import * as _215 from "./icaoracle/contract";
import * as _216 from "./icaoracle/genesis";
import * as _217 from "./icaoracle/icaoracle";
import * as _218 from "./icaoracle/query";
import * as _219 from "./icaoracle/tx";
import * as _220 from "./icqoracle/genesis";
import * as _221 from "./icqoracle/icqoracle";
import * as _222 from "./icqoracle/query";
import * as _223 from "./icqoracle/tx";
import * as _224 from "./interchainquery/v1/genesis";
import * as _225 from "./interchainquery/v1/messages";
import * as _226 from "./interchainquery/v1/query";
import * as _227 from "./mint/v1beta1/genesis";
import * as _228 from "./mint/v1beta1/mint";
import * as _229 from "./mint/v1beta1/query";
import * as _230 from "./records/callbacks";
import * as _231 from "./records/genesis";
import * as _232 from "./records/params";
import * as _233 from "./records/query";
import * as _234 from "./records/records";
import * as _235 from "./stakedym/genesis";
import * as _236 from "./stakedym/query";
import * as _237 from "./stakedym/stakedym";
import * as _238 from "./stakedym/tx";
import * as _239 from "./stakeibc/address_unbonding";
import * as _240 from "./stakeibc/callbacks";
import * as _241 from "./stakeibc/epoch_tracker";
import * as _242 from "./stakeibc/genesis";
import * as _243 from "./stakeibc/gov";
import * as _244 from "./stakeibc/host_zone";
import * as _245 from "./stakeibc/ica_account";
import * as _246 from "./stakeibc/packet";
import * as _247 from "./stakeibc/params";
import * as _248 from "./stakeibc/query";
import * as _249 from "./stakeibc/trade_route";
import * as _250 from "./stakeibc/tx";
import * as _251 from "./stakeibc/validator";
import * as _252 from "./staketia/genesis";
import * as _253 from "./staketia/query";
import * as _254 from "./staketia/staketia";
import * as _255 from "./staketia/tx";
import * as _256 from "./strdburner/genesis";
import * as _257 from "./strdburner/query";
import * as _258 from "./vesting/tx";
import * as _259 from "./vesting/vesting";
import * as _380 from "./airdrop/tx.amino";
import * as _381 from "./auction/tx.amino";
import * as _382 from "./claim/tx.amino";
import * as _383 from "./icaoracle/tx.amino";
import * as _384 from "./icqoracle/tx.amino";
import * as _385 from "./interchainquery/v1/messages.amino";
import * as _386 from "./stakedym/tx.amino";
import * as _387 from "./stakeibc/tx.amino";
import * as _388 from "./staketia/tx.amino";
import * as _389 from "./airdrop/tx.registry";
import * as _390 from "./auction/tx.registry";
import * as _391 from "./claim/tx.registry";
import * as _392 from "./icaoracle/tx.registry";
import * as _393 from "./icqoracle/tx.registry";
import * as _394 from "./interchainquery/v1/messages.registry";
import * as _395 from "./stakedym/tx.registry";
import * as _396 from "./stakeibc/tx.registry";
import * as _397 from "./staketia/tx.registry";
import * as _398 from "./airdrop/query.rpc.Query";
import * as _399 from "./auction/query.rpc.Query";
import * as _400 from "./autopilot/query.rpc.Query";
import * as _401 from "./claim/query.rpc.Query";
import * as _402 from "./epochs/query.rpc.Query";
import * as _403 from "./icacallbacks/query.rpc.Query";
import * as _404 from "./icaoracle/query.rpc.Query";
import * as _405 from "./icqoracle/query.rpc.Query";
import * as _406 from "./mint/v1beta1/query.rpc.Query";
import * as _407 from "./records/query.rpc.Query";
import * as _408 from "./stakedym/query.rpc.Query";
import * as _409 from "./stakeibc/query.rpc.Query";
import * as _410 from "./staketia/query.rpc.Query";
import * as _411 from "./strdburner/query.rpc.Query";
import * as _412 from "./airdrop/tx.rpc.msg";
import * as _413 from "./auction/tx.rpc.msg";
import * as _414 from "./claim/tx.rpc.msg";
import * as _415 from "./icaoracle/tx.rpc.msg";
import * as _416 from "./icqoracle/tx.rpc.msg";
import * as _417 from "./interchainquery/v1/messages.rpc.msg";
import * as _418 from "./stakedym/tx.rpc.msg";
import * as _419 from "./stakeibc/tx.rpc.msg";
import * as _420 from "./staketia/tx.rpc.msg";
import * as _429 from "./rpc.query";
import * as _430 from "./rpc.tx";
export namespace stride {
  export const airdrop = {
    ..._190,
    ..._191,
    ..._192,
    ..._193,
    ..._380,
    ..._389,
    ..._398,
    ..._412
  };
  export const auction = {
    ..._194,
    ..._195,
    ..._196,
    ..._197,
    ..._381,
    ..._390,
    ..._399,
    ..._413
  };
  export const autopilot = {
    ..._198,
    ..._199,
    ..._200,
    ..._400
  };
  export const claim = {
    ..._201,
    ..._202,
    ..._203,
    ..._204,
    ..._205,
    ..._382,
    ..._391,
    ..._401,
    ..._414
  };
  export const epochs = {
    ..._206,
    ..._207,
    ..._402
  };
  export const icacallbacks = {
    ..._208,
    ..._209,
    ..._210,
    ..._211,
    ..._212,
    ..._213,
    ..._403
  };
  export const icaoracle = {
    ..._214,
    ..._215,
    ..._216,
    ..._217,
    ..._218,
    ..._219,
    ..._383,
    ..._392,
    ..._404,
    ..._415
  };
  export const icqoracle = {
    ..._220,
    ..._221,
    ..._222,
    ..._223,
    ..._384,
    ..._393,
    ..._405,
    ..._416
  };
  export namespace interchainquery {
    export const v1 = {
      ..._224,
      ..._225,
      ..._226,
      ..._385,
      ..._394,
      ..._417
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._227,
      ..._228,
      ..._229,
      ..._406
    };
  }
  export const records = {
    ..._230,
    ..._231,
    ..._232,
    ..._233,
    ..._234,
    ..._407
  };
  export const stakedym = {
    ..._235,
    ..._236,
    ..._237,
    ..._238,
    ..._386,
    ..._395,
    ..._408,
    ..._418
  };
  export const stakeibc = {
    ..._239,
    ..._240,
    ..._241,
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
    ..._387,
    ..._396,
    ..._409,
    ..._419
  };
  export const staketia = {
    ..._252,
    ..._253,
    ..._254,
    ..._255,
    ..._388,
    ..._397,
    ..._410,
    ..._420
  };
  export const strdburner = {
    ..._256,
    ..._257,
    ..._411
  };
  export const vesting = {
    ..._258,
    ..._259
  };
  export const ClientFactory = {
    ..._429,
    ..._430
  };
}