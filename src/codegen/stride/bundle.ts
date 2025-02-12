import * as _176 from "./airdrop/airdrop";
import * as _177 from "./airdrop/genesis";
import * as _178 from "./airdrop/query";
import * as _179 from "./airdrop/tx";
import * as _180 from "./auction/auction";
import * as _181 from "./auction/genesis";
import * as _182 from "./auction/query";
import * as _183 from "./auction/tx";
import * as _184 from "./autopilot/genesis";
import * as _185 from "./autopilot/params";
import * as _186 from "./autopilot/query";
import * as _187 from "./claim/claim";
import * as _188 from "./claim/genesis";
import * as _189 from "./claim/params";
import * as _190 from "./claim/query";
import * as _191 from "./claim/tx";
import * as _192 from "./epochs/genesis";
import * as _193 from "./epochs/query";
import * as _194 from "./icacallbacks/callback_data";
import * as _195 from "./icacallbacks/genesis";
import * as _196 from "./icacallbacks/packet";
import * as _197 from "./icacallbacks/params";
import * as _198 from "./icacallbacks/query";
import * as _199 from "./icacallbacks/tx";
import * as _200 from "./icaoracle/callbacks";
import * as _201 from "./icaoracle/contract";
import * as _202 from "./icaoracle/genesis";
import * as _203 from "./icaoracle/icaoracle";
import * as _204 from "./icaoracle/query";
import * as _205 from "./icaoracle/tx";
import * as _206 from "./icqoracle/genesis";
import * as _207 from "./icqoracle/icqoracle";
import * as _208 from "./icqoracle/query";
import * as _209 from "./icqoracle/tx";
import * as _210 from "./interchainquery/v1/genesis";
import * as _211 from "./interchainquery/v1/messages";
import * as _212 from "./interchainquery/v1/query";
import * as _213 from "./mint/v1beta1/genesis";
import * as _214 from "./mint/v1beta1/mint";
import * as _215 from "./mint/v1beta1/query";
import * as _216 from "./records/callbacks";
import * as _217 from "./records/genesis";
import * as _218 from "./records/params";
import * as _219 from "./records/query";
import * as _220 from "./records/records";
import * as _221 from "./stakedym/genesis";
import * as _222 from "./stakedym/query";
import * as _223 from "./stakedym/stakedym";
import * as _224 from "./stakedym/tx";
import * as _225 from "./stakeibc/address_unbonding";
import * as _226 from "./stakeibc/callbacks";
import * as _227 from "./stakeibc/epoch_tracker";
import * as _228 from "./stakeibc/genesis";
import * as _229 from "./stakeibc/gov";
import * as _230 from "./stakeibc/host_zone";
import * as _231 from "./stakeibc/ica_account";
import * as _232 from "./stakeibc/packet";
import * as _233 from "./stakeibc/params";
import * as _234 from "./stakeibc/query";
import * as _235 from "./stakeibc/trade_route";
import * as _236 from "./stakeibc/tx";
import * as _237 from "./stakeibc/validator";
import * as _238 from "./staketia/genesis";
import * as _239 from "./staketia/query";
import * as _240 from "./staketia/staketia";
import * as _241 from "./staketia/tx";
import * as _242 from "./strdburner/genesis";
import * as _243 from "./strdburner/query";
import * as _244 from "./vesting/tx";
import * as _245 from "./vesting/vesting";
import * as _355 from "./airdrop/tx.amino";
import * as _356 from "./auction/tx.amino";
import * as _357 from "./claim/tx.amino";
import * as _358 from "./icaoracle/tx.amino";
import * as _359 from "./icqoracle/tx.amino";
import * as _360 from "./interchainquery/v1/messages.amino";
import * as _361 from "./stakedym/tx.amino";
import * as _362 from "./stakeibc/tx.amino";
import * as _363 from "./staketia/tx.amino";
import * as _364 from "./airdrop/tx.registry";
import * as _365 from "./auction/tx.registry";
import * as _366 from "./claim/tx.registry";
import * as _367 from "./icaoracle/tx.registry";
import * as _368 from "./icqoracle/tx.registry";
import * as _369 from "./interchainquery/v1/messages.registry";
import * as _370 from "./stakedym/tx.registry";
import * as _371 from "./stakeibc/tx.registry";
import * as _372 from "./staketia/tx.registry";
import * as _373 from "./airdrop/query.rpc.Query";
import * as _374 from "./auction/query.rpc.Query";
import * as _375 from "./autopilot/query.rpc.Query";
import * as _376 from "./claim/query.rpc.Query";
import * as _377 from "./epochs/query.rpc.Query";
import * as _378 from "./icacallbacks/query.rpc.Query";
import * as _379 from "./icaoracle/query.rpc.Query";
import * as _380 from "./icqoracle/query.rpc.Query";
import * as _381 from "./mint/v1beta1/query.rpc.Query";
import * as _382 from "./records/query.rpc.Query";
import * as _383 from "./stakedym/query.rpc.Query";
import * as _384 from "./stakeibc/query.rpc.Query";
import * as _385 from "./staketia/query.rpc.Query";
import * as _386 from "./strdburner/query.rpc.Query";
import * as _387 from "./airdrop/tx.rpc.msg";
import * as _388 from "./auction/tx.rpc.msg";
import * as _389 from "./claim/tx.rpc.msg";
import * as _390 from "./icaoracle/tx.rpc.msg";
import * as _391 from "./icqoracle/tx.rpc.msg";
import * as _392 from "./interchainquery/v1/messages.rpc.msg";
import * as _393 from "./stakedym/tx.rpc.msg";
import * as _394 from "./stakeibc/tx.rpc.msg";
import * as _395 from "./staketia/tx.rpc.msg";
import * as _400 from "./rpc.query";
import * as _401 from "./rpc.tx";
export namespace stride {
  export const airdrop = {
    ..._176,
    ..._177,
    ..._178,
    ..._179,
    ..._355,
    ..._364,
    ..._373,
    ..._387
  };
  export const auction = {
    ..._180,
    ..._181,
    ..._182,
    ..._183,
    ..._356,
    ..._365,
    ..._374,
    ..._388
  };
  export const autopilot = {
    ..._184,
    ..._185,
    ..._186,
    ..._375
  };
  export const claim = {
    ..._187,
    ..._188,
    ..._189,
    ..._190,
    ..._191,
    ..._357,
    ..._366,
    ..._376,
    ..._389
  };
  export const epochs = {
    ..._192,
    ..._193,
    ..._377
  };
  export const icacallbacks = {
    ..._194,
    ..._195,
    ..._196,
    ..._197,
    ..._198,
    ..._199,
    ..._378
  };
  export const icaoracle = {
    ..._200,
    ..._201,
    ..._202,
    ..._203,
    ..._204,
    ..._205,
    ..._358,
    ..._367,
    ..._379,
    ..._390
  };
  export const icqoracle = {
    ..._206,
    ..._207,
    ..._208,
    ..._209,
    ..._359,
    ..._368,
    ..._380,
    ..._391
  };
  export namespace interchainquery {
    export const v1 = {
      ..._210,
      ..._211,
      ..._212,
      ..._360,
      ..._369,
      ..._392
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._213,
      ..._214,
      ..._215,
      ..._381
    };
  }
  export const records = {
    ..._216,
    ..._217,
    ..._218,
    ..._219,
    ..._220,
    ..._382
  };
  export const stakedym = {
    ..._221,
    ..._222,
    ..._223,
    ..._224,
    ..._361,
    ..._370,
    ..._383,
    ..._393
  };
  export const stakeibc = {
    ..._225,
    ..._226,
    ..._227,
    ..._228,
    ..._229,
    ..._230,
    ..._231,
    ..._232,
    ..._233,
    ..._234,
    ..._235,
    ..._236,
    ..._237,
    ..._362,
    ..._371,
    ..._384,
    ..._394
  };
  export const staketia = {
    ..._238,
    ..._239,
    ..._240,
    ..._241,
    ..._363,
    ..._372,
    ..._385,
    ..._395
  };
  export const strdburner = {
    ..._242,
    ..._243,
    ..._386
  };
  export const vesting = {
    ..._244,
    ..._245
  };
  export const ClientFactory = {
    ..._400,
    ..._401
  };
}