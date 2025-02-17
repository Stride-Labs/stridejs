import * as _183 from "./airdrop/airdrop";
import * as _184 from "./airdrop/genesis";
import * as _185 from "./airdrop/query";
import * as _186 from "./airdrop/tx";
import * as _187 from "./auction/auction";
import * as _188 from "./auction/genesis";
import * as _189 from "./auction/query";
import * as _190 from "./auction/tx";
import * as _191 from "./autopilot/genesis";
import * as _192 from "./autopilot/params";
import * as _193 from "./autopilot/query";
import * as _194 from "./claim/claim";
import * as _195 from "./claim/genesis";
import * as _196 from "./claim/params";
import * as _197 from "./claim/query";
import * as _198 from "./claim/tx";
import * as _199 from "./epochs/genesis";
import * as _200 from "./epochs/query";
import * as _201 from "./icacallbacks/callback_data";
import * as _202 from "./icacallbacks/genesis";
import * as _203 from "./icacallbacks/packet";
import * as _204 from "./icacallbacks/params";
import * as _205 from "./icacallbacks/query";
import * as _206 from "./icacallbacks/tx";
import * as _207 from "./icaoracle/callbacks";
import * as _208 from "./icaoracle/contract";
import * as _209 from "./icaoracle/genesis";
import * as _210 from "./icaoracle/icaoracle";
import * as _211 from "./icaoracle/query";
import * as _212 from "./icaoracle/tx";
import * as _213 from "./icqoracle/genesis";
import * as _214 from "./icqoracle/icqoracle";
import * as _215 from "./icqoracle/query";
import * as _216 from "./icqoracle/tx";
import * as _217 from "./interchainquery/v1/genesis";
import * as _218 from "./interchainquery/v1/messages";
import * as _219 from "./interchainquery/v1/query";
import * as _220 from "./mint/v1beta1/genesis";
import * as _221 from "./mint/v1beta1/mint";
import * as _222 from "./mint/v1beta1/query";
import * as _223 from "./records/callbacks";
import * as _224 from "./records/genesis";
import * as _225 from "./records/params";
import * as _226 from "./records/query";
import * as _227 from "./records/records";
import * as _228 from "./stakedym/genesis";
import * as _229 from "./stakedym/query";
import * as _230 from "./stakedym/stakedym";
import * as _231 from "./stakedym/tx";
import * as _232 from "./stakeibc/address_unbonding";
import * as _233 from "./stakeibc/callbacks";
import * as _234 from "./stakeibc/epoch_tracker";
import * as _235 from "./stakeibc/genesis";
import * as _236 from "./stakeibc/gov";
import * as _237 from "./stakeibc/host_zone";
import * as _238 from "./stakeibc/ica_account";
import * as _239 from "./stakeibc/packet";
import * as _240 from "./stakeibc/params";
import * as _241 from "./stakeibc/query";
import * as _242 from "./stakeibc/trade_route";
import * as _243 from "./stakeibc/tx";
import * as _244 from "./stakeibc/validator";
import * as _245 from "./staketia/genesis";
import * as _246 from "./staketia/query";
import * as _247 from "./staketia/staketia";
import * as _248 from "./staketia/tx";
import * as _249 from "./strdburner/genesis";
import * as _250 from "./strdburner/query";
import * as _251 from "./vesting/tx";
import * as _252 from "./vesting/vesting";
import * as _366 from "./airdrop/tx.amino";
import * as _367 from "./auction/tx.amino";
import * as _368 from "./claim/tx.amino";
import * as _369 from "./icaoracle/tx.amino";
import * as _370 from "./icqoracle/tx.amino";
import * as _371 from "./interchainquery/v1/messages.amino";
import * as _372 from "./stakedym/tx.amino";
import * as _373 from "./stakeibc/tx.amino";
import * as _374 from "./staketia/tx.amino";
import * as _375 from "./airdrop/tx.registry";
import * as _376 from "./auction/tx.registry";
import * as _377 from "./claim/tx.registry";
import * as _378 from "./icaoracle/tx.registry";
import * as _379 from "./icqoracle/tx.registry";
import * as _380 from "./interchainquery/v1/messages.registry";
import * as _381 from "./stakedym/tx.registry";
import * as _382 from "./stakeibc/tx.registry";
import * as _383 from "./staketia/tx.registry";
import * as _384 from "./airdrop/query.rpc.Query";
import * as _385 from "./auction/query.rpc.Query";
import * as _386 from "./autopilot/query.rpc.Query";
import * as _387 from "./claim/query.rpc.Query";
import * as _388 from "./epochs/query.rpc.Query";
import * as _389 from "./icacallbacks/query.rpc.Query";
import * as _390 from "./icaoracle/query.rpc.Query";
import * as _391 from "./icqoracle/query.rpc.Query";
import * as _392 from "./mint/v1beta1/query.rpc.Query";
import * as _393 from "./records/query.rpc.Query";
import * as _394 from "./stakedym/query.rpc.Query";
import * as _395 from "./stakeibc/query.rpc.Query";
import * as _396 from "./staketia/query.rpc.Query";
import * as _397 from "./strdburner/query.rpc.Query";
import * as _398 from "./airdrop/tx.rpc.msg";
import * as _399 from "./auction/tx.rpc.msg";
import * as _400 from "./claim/tx.rpc.msg";
import * as _401 from "./icaoracle/tx.rpc.msg";
import * as _402 from "./icqoracle/tx.rpc.msg";
import * as _403 from "./interchainquery/v1/messages.rpc.msg";
import * as _404 from "./stakedym/tx.rpc.msg";
import * as _405 from "./stakeibc/tx.rpc.msg";
import * as _406 from "./staketia/tx.rpc.msg";
import * as _413 from "./rpc.query";
import * as _414 from "./rpc.tx";
var stride;
((stride2) => {
  stride2.airdrop = {
    ..._183,
    ..._184,
    ..._185,
    ..._186,
    ..._366,
    ..._375,
    ..._384,
    ..._398
  };
  stride2.auction = {
    ..._187,
    ..._188,
    ..._189,
    ..._190,
    ..._367,
    ..._376,
    ..._385,
    ..._399
  };
  stride2.autopilot = {
    ..._191,
    ..._192,
    ..._193,
    ..._386
  };
  stride2.claim = {
    ..._194,
    ..._195,
    ..._196,
    ..._197,
    ..._198,
    ..._368,
    ..._377,
    ..._387,
    ..._400
  };
  stride2.epochs = {
    ..._199,
    ..._200,
    ..._388
  };
  stride2.icacallbacks = {
    ..._201,
    ..._202,
    ..._203,
    ..._204,
    ..._205,
    ..._206,
    ..._389
  };
  stride2.icaoracle = {
    ..._207,
    ..._208,
    ..._209,
    ..._210,
    ..._211,
    ..._212,
    ..._369,
    ..._378,
    ..._390,
    ..._401
  };
  stride2.icqoracle = {
    ..._213,
    ..._214,
    ..._215,
    ..._216,
    ..._370,
    ..._379,
    ..._391,
    ..._402
  };
  let interchainquery;
  ((interchainquery2) => {
    interchainquery2.v1 = {
      ..._217,
      ..._218,
      ..._219,
      ..._371,
      ..._380,
      ..._403
    };
  })(interchainquery = stride2.interchainquery || (stride2.interchainquery = {}));
  let mint;
  ((mint2) => {
    mint2.v1beta1 = {
      ..._220,
      ..._221,
      ..._222,
      ..._392
    };
  })(mint = stride2.mint || (stride2.mint = {}));
  stride2.records = {
    ..._223,
    ..._224,
    ..._225,
    ..._226,
    ..._227,
    ..._393
  };
  stride2.stakedym = {
    ..._228,
    ..._229,
    ..._230,
    ..._231,
    ..._372,
    ..._381,
    ..._394,
    ..._404
  };
  stride2.stakeibc = {
    ..._232,
    ..._233,
    ..._234,
    ..._235,
    ..._236,
    ..._237,
    ..._238,
    ..._239,
    ..._240,
    ..._241,
    ..._242,
    ..._243,
    ..._244,
    ..._373,
    ..._382,
    ..._395,
    ..._405
  };
  stride2.staketia = {
    ..._245,
    ..._246,
    ..._247,
    ..._248,
    ..._374,
    ..._383,
    ..._396,
    ..._406
  };
  stride2.strdburner = {
    ..._249,
    ..._250,
    ..._397
  };
  stride2.vesting = {
    ..._251,
    ..._252
  };
  stride2.ClientFactory = {
    ..._413,
    ..._414
  };
})(stride || (stride = {}));
export {
  stride
};
