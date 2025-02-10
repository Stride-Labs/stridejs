import * as _175 from "./airdrop/airdrop";
import * as _176 from "./airdrop/genesis";
import * as _177 from "./airdrop/query";
import * as _178 from "./airdrop/tx";
import * as _179 from "./auction/auction";
import * as _180 from "./auction/genesis";
import * as _181 from "./auction/query";
import * as _182 from "./auction/tx";
import * as _183 from "./autopilot/genesis";
import * as _184 from "./autopilot/params";
import * as _185 from "./autopilot/query";
import * as _186 from "./claim/claim";
import * as _187 from "./claim/genesis";
import * as _188 from "./claim/params";
import * as _189 from "./claim/query";
import * as _190 from "./claim/tx";
import * as _191 from "./epochs/genesis";
import * as _192 from "./epochs/query";
import * as _193 from "./icacallbacks/callback_data";
import * as _194 from "./icacallbacks/genesis";
import * as _195 from "./icacallbacks/packet";
import * as _196 from "./icacallbacks/params";
import * as _197 from "./icacallbacks/query";
import * as _198 from "./icacallbacks/tx";
import * as _199 from "./icaoracle/callbacks";
import * as _200 from "./icaoracle/contract";
import * as _201 from "./icaoracle/genesis";
import * as _202 from "./icaoracle/icaoracle";
import * as _203 from "./icaoracle/query";
import * as _204 from "./icaoracle/tx";
import * as _205 from "./icqoracle/genesis";
import * as _206 from "./icqoracle/icqoracle";
import * as _207 from "./icqoracle/query";
import * as _208 from "./icqoracle/tx";
import * as _209 from "./interchainquery/v1/genesis";
import * as _210 from "./interchainquery/v1/messages";
import * as _211 from "./interchainquery/v1/query";
import * as _212 from "./mint/v1beta1/genesis";
import * as _213 from "./mint/v1beta1/mint";
import * as _214 from "./mint/v1beta1/query";
import * as _215 from "./records/callbacks";
import * as _216 from "./records/genesis";
import * as _217 from "./records/params";
import * as _218 from "./records/query";
import * as _219 from "./records/records";
import * as _220 from "./stakedym/genesis";
import * as _221 from "./stakedym/query";
import * as _222 from "./stakedym/stakedym";
import * as _223 from "./stakedym/tx";
import * as _224 from "./stakeibc/address_unbonding";
import * as _225 from "./stakeibc/callbacks";
import * as _226 from "./stakeibc/epoch_tracker";
import * as _227 from "./stakeibc/genesis";
import * as _228 from "./stakeibc/gov";
import * as _229 from "./stakeibc/host_zone";
import * as _230 from "./stakeibc/ica_account";
import * as _231 from "./stakeibc/packet";
import * as _232 from "./stakeibc/params";
import * as _233 from "./stakeibc/query";
import * as _234 from "./stakeibc/trade_route";
import * as _235 from "./stakeibc/tx";
import * as _236 from "./stakeibc/validator";
import * as _237 from "./staketia/genesis";
import * as _238 from "./staketia/query";
import * as _239 from "./staketia/staketia";
import * as _240 from "./staketia/tx";
import * as _241 from "./strdburner/genesis";
import * as _242 from "./strdburner/query";
import * as _243 from "./vesting/tx";
import * as _244 from "./vesting/vesting";
import * as _354 from "./airdrop/tx.amino";
import * as _355 from "./auction/tx.amino";
import * as _356 from "./claim/tx.amino";
import * as _357 from "./icaoracle/tx.amino";
import * as _358 from "./icqoracle/tx.amino";
import * as _359 from "./interchainquery/v1/messages.amino";
import * as _360 from "./stakedym/tx.amino";
import * as _361 from "./stakeibc/tx.amino";
import * as _362 from "./staketia/tx.amino";
import * as _363 from "./airdrop/tx.registry";
import * as _364 from "./auction/tx.registry";
import * as _365 from "./claim/tx.registry";
import * as _366 from "./icaoracle/tx.registry";
import * as _367 from "./icqoracle/tx.registry";
import * as _368 from "./interchainquery/v1/messages.registry";
import * as _369 from "./stakedym/tx.registry";
import * as _370 from "./stakeibc/tx.registry";
import * as _371 from "./staketia/tx.registry";
import * as _372 from "./airdrop/query.rpc.Query";
import * as _373 from "./auction/query.rpc.Query";
import * as _374 from "./autopilot/query.rpc.Query";
import * as _375 from "./claim/query.rpc.Query";
import * as _376 from "./epochs/query.rpc.Query";
import * as _377 from "./icacallbacks/query.rpc.Query";
import * as _378 from "./icaoracle/query.rpc.Query";
import * as _379 from "./icqoracle/query.rpc.Query";
import * as _380 from "./mint/v1beta1/query.rpc.Query";
import * as _381 from "./records/query.rpc.Query";
import * as _382 from "./stakedym/query.rpc.Query";
import * as _383 from "./stakeibc/query.rpc.Query";
import * as _384 from "./staketia/query.rpc.Query";
import * as _385 from "./strdburner/query.rpc.Query";
import * as _386 from "./airdrop/tx.rpc.msg";
import * as _387 from "./auction/tx.rpc.msg";
import * as _388 from "./claim/tx.rpc.msg";
import * as _389 from "./icaoracle/tx.rpc.msg";
import * as _390 from "./icqoracle/tx.rpc.msg";
import * as _391 from "./interchainquery/v1/messages.rpc.msg";
import * as _392 from "./stakedym/tx.rpc.msg";
import * as _393 from "./stakeibc/tx.rpc.msg";
import * as _394 from "./staketia/tx.rpc.msg";
import * as _399 from "./rpc.query";
import * as _400 from "./rpc.tx";
export namespace stride {
  export const airdrop = {
    ..._175,
    ..._176,
    ..._177,
    ..._178,
    ..._354,
    ..._363,
    ..._372,
    ..._386
  };
  export const auction = {
    ..._179,
    ..._180,
    ..._181,
    ..._182,
    ..._355,
    ..._364,
    ..._373,
    ..._387
  };
  export const autopilot = {
    ..._183,
    ..._184,
    ..._185,
    ..._374
  };
  export const claim = {
    ..._186,
    ..._187,
    ..._188,
    ..._189,
    ..._190,
    ..._356,
    ..._365,
    ..._375,
    ..._388
  };
  export const epochs = {
    ..._191,
    ..._192,
    ..._376
  };
  export const icacallbacks = {
    ..._193,
    ..._194,
    ..._195,
    ..._196,
    ..._197,
    ..._198,
    ..._377
  };
  export const icaoracle = {
    ..._199,
    ..._200,
    ..._201,
    ..._202,
    ..._203,
    ..._204,
    ..._357,
    ..._366,
    ..._378,
    ..._389
  };
  export const icqoracle = {
    ..._205,
    ..._206,
    ..._207,
    ..._208,
    ..._358,
    ..._367,
    ..._379,
    ..._390
  };
  export namespace interchainquery {
    export const v1 = {
      ..._209,
      ..._210,
      ..._211,
      ..._359,
      ..._368,
      ..._391
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._212,
      ..._213,
      ..._214,
      ..._380
    };
  }
  export const records = {
    ..._215,
    ..._216,
    ..._217,
    ..._218,
    ..._219,
    ..._381
  };
  export const stakedym = {
    ..._220,
    ..._221,
    ..._222,
    ..._223,
    ..._360,
    ..._369,
    ..._382,
    ..._392
  };
  export const stakeibc = {
    ..._224,
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
    ..._361,
    ..._370,
    ..._383,
    ..._393
  };
  export const staketia = {
    ..._237,
    ..._238,
    ..._239,
    ..._240,
    ..._362,
    ..._371,
    ..._384,
    ..._394
  };
  export const strdburner = {
    ..._241,
    ..._242,
    ..._385
  };
  export const vesting = {
    ..._243,
    ..._244
  };
  export const ClientFactory = {
    ..._399,
    ..._400
  };
}