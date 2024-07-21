import * as _176 from "./airdrop/airdrop";
import * as _177 from "./airdrop/genesis";
import * as _178 from "./airdrop/query";
import * as _179 from "./airdrop/tx";
import * as _180 from "./autopilot/genesis";
import * as _181 from "./autopilot/params";
import * as _182 from "./autopilot/query";
import * as _183 from "./claim/claim";
import * as _184 from "./claim/genesis";
import * as _185 from "./claim/params";
import * as _186 from "./claim/query";
import * as _187 from "./claim/tx";
import * as _188 from "./epochs/genesis";
import * as _189 from "./epochs/query";
import * as _190 from "./icacallbacks/callback_data";
import * as _191 from "./icacallbacks/genesis";
import * as _192 from "./icacallbacks/packet";
import * as _193 from "./icacallbacks/params";
import * as _194 from "./icacallbacks/query";
import * as _195 from "./icacallbacks/tx";
import * as _196 from "./icaoracle/callbacks";
import * as _197 from "./icaoracle/contract";
import * as _198 from "./icaoracle/genesis";
import * as _199 from "./icaoracle/icaoracle";
import * as _200 from "./icaoracle/query";
import * as _201 from "./icaoracle/tx";
import * as _202 from "./interchainquery/v1/genesis";
import * as _203 from "./interchainquery/v1/messages";
import * as _204 from "./interchainquery/v1/query";
import * as _205 from "./mint/v1beta1/genesis";
import * as _206 from "./mint/v1beta1/mint";
import * as _207 from "./mint/v1beta1/query";
import * as _208 from "./records/callbacks";
import * as _209 from "./records/genesis";
import * as _210 from "./records/params";
import * as _211 from "./records/query";
import * as _212 from "./records/records";
import * as _213 from "./stakedym/genesis";
import * as _214 from "./stakedym/query";
import * as _215 from "./stakedym/stakedym";
import * as _216 from "./stakedym/tx";
import * as _217 from "./stakeibc/address_unbonding";
import * as _218 from "./stakeibc/callbacks";
import * as _219 from "./stakeibc/epoch_tracker";
import * as _220 from "./stakeibc/genesis";
import * as _221 from "./stakeibc/gov";
import * as _222 from "./stakeibc/host_zone";
import * as _223 from "./stakeibc/ica_account";
import * as _224 from "./stakeibc/packet";
import * as _225 from "./stakeibc/params";
import * as _226 from "./stakeibc/query";
import * as _227 from "./stakeibc/trade_route";
import * as _228 from "./stakeibc/tx";
import * as _229 from "./stakeibc/validator";
import * as _230 from "./staketia/genesis";
import * as _231 from "./staketia/query";
import * as _232 from "./staketia/staketia";
import * as _233 from "./staketia/tx";
import * as _234 from "./vesting/tx";
import * as _235 from "./vesting/vesting";
import * as _345 from "./airdrop/tx.amino";
import * as _346 from "./claim/tx.amino";
import * as _347 from "./icaoracle/tx.amino";
import * as _348 from "./interchainquery/v1/messages.amino";
import * as _349 from "./stakedym/tx.amino";
import * as _350 from "./stakeibc/tx.amino";
import * as _351 from "./staketia/tx.amino";
import * as _352 from "./airdrop/tx.registry";
import * as _353 from "./claim/tx.registry";
import * as _354 from "./icaoracle/tx.registry";
import * as _355 from "./interchainquery/v1/messages.registry";
import * as _356 from "./stakedym/tx.registry";
import * as _357 from "./stakeibc/tx.registry";
import * as _358 from "./staketia/tx.registry";
import * as _359 from "./airdrop/query.rpc.Query";
import * as _360 from "./autopilot/query.rpc.Query";
import * as _361 from "./claim/query.rpc.Query";
import * as _362 from "./epochs/query.rpc.Query";
import * as _363 from "./icacallbacks/query.rpc.Query";
import * as _364 from "./icaoracle/query.rpc.Query";
import * as _365 from "./mint/v1beta1/query.rpc.Query";
import * as _366 from "./records/query.rpc.Query";
import * as _367 from "./stakedym/query.rpc.Query";
import * as _368 from "./stakeibc/query.rpc.Query";
import * as _369 from "./staketia/query.rpc.Query";
import * as _370 from "./airdrop/tx.rpc.msg";
import * as _371 from "./claim/tx.rpc.msg";
import * as _372 from "./icaoracle/tx.rpc.msg";
import * as _373 from "./interchainquery/v1/messages.rpc.msg";
import * as _374 from "./stakedym/tx.rpc.msg";
import * as _375 from "./stakeibc/tx.rpc.msg";
import * as _376 from "./staketia/tx.rpc.msg";
import * as _381 from "./rpc.query";
import * as _382 from "./rpc.tx";
export namespace stride {
  export const airdrop = {
    ..._176,
    ..._177,
    ..._178,
    ..._179,
    ..._345,
    ..._352,
    ..._359,
    ..._370
  };
  export const autopilot = {
    ..._180,
    ..._181,
    ..._182,
    ..._360
  };
  export const claim = {
    ..._183,
    ..._184,
    ..._185,
    ..._186,
    ..._187,
    ..._346,
    ..._353,
    ..._361,
    ..._371
  };
  export const epochs = {
    ..._188,
    ..._189,
    ..._362
  };
  export const icacallbacks = {
    ..._190,
    ..._191,
    ..._192,
    ..._193,
    ..._194,
    ..._195,
    ..._363
  };
  export const icaoracle = {
    ..._196,
    ..._197,
    ..._198,
    ..._199,
    ..._200,
    ..._201,
    ..._347,
    ..._354,
    ..._364,
    ..._372
  };
  export namespace interchainquery {
    export const v1 = {
      ..._202,
      ..._203,
      ..._204,
      ..._348,
      ..._355,
      ..._373
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._205,
      ..._206,
      ..._207,
      ..._365
    };
  }
  export const records = {
    ..._208,
    ..._209,
    ..._210,
    ..._211,
    ..._212,
    ..._366
  };
  export const stakedym = {
    ..._213,
    ..._214,
    ..._215,
    ..._216,
    ..._349,
    ..._356,
    ..._367,
    ..._374
  };
  export const stakeibc = {
    ..._217,
    ..._218,
    ..._219,
    ..._220,
    ..._221,
    ..._222,
    ..._223,
    ..._224,
    ..._225,
    ..._226,
    ..._227,
    ..._228,
    ..._229,
    ..._350,
    ..._357,
    ..._368,
    ..._375
  };
  export const staketia = {
    ..._230,
    ..._231,
    ..._232,
    ..._233,
    ..._351,
    ..._358,
    ..._369,
    ..._376
  };
  export const vesting = {
    ..._234,
    ..._235
  };
  export const ClientFactory = {
    ..._381,
    ..._382
  };
}