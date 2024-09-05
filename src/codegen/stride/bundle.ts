import * as _175 from "./airdrop/airdrop";
import * as _176 from "./airdrop/genesis";
import * as _177 from "./airdrop/query";
import * as _178 from "./airdrop/tx";
import * as _179 from "./autopilot/genesis";
import * as _180 from "./autopilot/params";
import * as _181 from "./autopilot/query";
import * as _182 from "./claim/claim";
import * as _183 from "./claim/genesis";
import * as _184 from "./claim/params";
import * as _185 from "./claim/query";
import * as _186 from "./claim/tx";
import * as _187 from "./epochs/genesis";
import * as _188 from "./epochs/query";
import * as _189 from "./icacallbacks/callback_data";
import * as _190 from "./icacallbacks/genesis";
import * as _191 from "./icacallbacks/packet";
import * as _192 from "./icacallbacks/params";
import * as _193 from "./icacallbacks/query";
import * as _194 from "./icacallbacks/tx";
import * as _195 from "./icaoracle/callbacks";
import * as _196 from "./icaoracle/contract";
import * as _197 from "./icaoracle/genesis";
import * as _198 from "./icaoracle/icaoracle";
import * as _199 from "./icaoracle/query";
import * as _200 from "./icaoracle/tx";
import * as _201 from "./interchainquery/v1/genesis";
import * as _202 from "./interchainquery/v1/messages";
import * as _203 from "./interchainquery/v1/query";
import * as _204 from "./mint/v1beta1/genesis";
import * as _205 from "./mint/v1beta1/mint";
import * as _206 from "./mint/v1beta1/query";
import * as _207 from "./records/callbacks";
import * as _208 from "./records/genesis";
import * as _209 from "./records/params";
import * as _210 from "./records/query";
import * as _211 from "./records/records";
import * as _212 from "./stakedym/genesis";
import * as _213 from "./stakedym/query";
import * as _214 from "./stakedym/stakedym";
import * as _215 from "./stakedym/tx";
import * as _216 from "./stakeibc/address_unbonding";
import * as _217 from "./stakeibc/callbacks";
import * as _218 from "./stakeibc/epoch_tracker";
import * as _219 from "./stakeibc/genesis";
import * as _220 from "./stakeibc/gov";
import * as _221 from "./stakeibc/host_zone";
import * as _222 from "./stakeibc/ica_account";
import * as _223 from "./stakeibc/packet";
import * as _224 from "./stakeibc/params";
import * as _225 from "./stakeibc/query";
import * as _226 from "./stakeibc/trade_route";
import * as _227 from "./stakeibc/tx";
import * as _228 from "./stakeibc/validator";
import * as _229 from "./staketia/genesis";
import * as _230 from "./staketia/query";
import * as _231 from "./staketia/staketia";
import * as _232 from "./staketia/tx";
import * as _233 from "./vesting/tx";
import * as _234 from "./vesting/vesting";
import * as _344 from "./airdrop/tx.amino";
import * as _345 from "./claim/tx.amino";
import * as _346 from "./icaoracle/tx.amino";
import * as _347 from "./interchainquery/v1/messages.amino";
import * as _348 from "./stakedym/tx.amino";
import * as _349 from "./stakeibc/tx.amino";
import * as _350 from "./staketia/tx.amino";
import * as _351 from "./airdrop/tx.registry";
import * as _352 from "./claim/tx.registry";
import * as _353 from "./icaoracle/tx.registry";
import * as _354 from "./interchainquery/v1/messages.registry";
import * as _355 from "./stakedym/tx.registry";
import * as _356 from "./stakeibc/tx.registry";
import * as _357 from "./staketia/tx.registry";
import * as _358 from "./airdrop/query.rpc.Query";
import * as _359 from "./autopilot/query.rpc.Query";
import * as _360 from "./claim/query.rpc.Query";
import * as _361 from "./epochs/query.rpc.Query";
import * as _362 from "./icacallbacks/query.rpc.Query";
import * as _363 from "./icaoracle/query.rpc.Query";
import * as _364 from "./mint/v1beta1/query.rpc.Query";
import * as _365 from "./records/query.rpc.Query";
import * as _366 from "./stakedym/query.rpc.Query";
import * as _367 from "./stakeibc/query.rpc.Query";
import * as _368 from "./staketia/query.rpc.Query";
import * as _369 from "./airdrop/tx.rpc.msg";
import * as _370 from "./claim/tx.rpc.msg";
import * as _371 from "./icaoracle/tx.rpc.msg";
import * as _372 from "./interchainquery/v1/messages.rpc.msg";
import * as _373 from "./stakedym/tx.rpc.msg";
import * as _374 from "./stakeibc/tx.rpc.msg";
import * as _375 from "./staketia/tx.rpc.msg";
import * as _380 from "./rpc.query";
import * as _381 from "./rpc.tx";
export namespace stride {
  export const airdrop = {
    ..._175,
    ..._176,
    ..._177,
    ..._178,
    ..._344,
    ..._351,
    ..._358,
    ..._369
  };
  export const autopilot = {
    ..._179,
    ..._180,
    ..._181,
    ..._359
  };
  export const claim = {
    ..._182,
    ..._183,
    ..._184,
    ..._185,
    ..._186,
    ..._345,
    ..._352,
    ..._360,
    ..._370
  };
  export const epochs = {
    ..._187,
    ..._188,
    ..._361
  };
  export const icacallbacks = {
    ..._189,
    ..._190,
    ..._191,
    ..._192,
    ..._193,
    ..._194,
    ..._362
  };
  export const icaoracle = {
    ..._195,
    ..._196,
    ..._197,
    ..._198,
    ..._199,
    ..._200,
    ..._346,
    ..._353,
    ..._363,
    ..._371
  };
  export namespace interchainquery {
    export const v1 = {
      ..._201,
      ..._202,
      ..._203,
      ..._347,
      ..._354,
      ..._372
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._204,
      ..._205,
      ..._206,
      ..._364
    };
  }
  export const records = {
    ..._207,
    ..._208,
    ..._209,
    ..._210,
    ..._211,
    ..._365
  };
  export const stakedym = {
    ..._212,
    ..._213,
    ..._214,
    ..._215,
    ..._348,
    ..._355,
    ..._366,
    ..._373
  };
  export const stakeibc = {
    ..._216,
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
    ..._349,
    ..._356,
    ..._367,
    ..._374
  };
  export const staketia = {
    ..._229,
    ..._230,
    ..._231,
    ..._232,
    ..._350,
    ..._357,
    ..._368,
    ..._375
  };
  export const vesting = {
    ..._233,
    ..._234
  };
  export const ClientFactory = {
    ..._380,
    ..._381
  };
}