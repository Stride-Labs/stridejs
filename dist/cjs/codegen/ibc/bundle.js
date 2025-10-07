var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var bundle_exports = {};
__export(bundle_exports, {
  ibc: () => ibc
});
module.exports = __toCommonJS(bundle_exports);
var _154 = __toESM(require("./applications/fee/v1/ack"));
var _155 = __toESM(require("./applications/fee/v1/fee"));
var _156 = __toESM(require("./applications/fee/v1/genesis"));
var _157 = __toESM(require("./applications/fee/v1/metadata"));
var _158 = __toESM(require("./applications/fee/v1/query"));
var _159 = __toESM(require("./applications/fee/v1/tx"));
var _160 = __toESM(require("./applications/interchain_accounts/controller/v1/controller"));
var _161 = __toESM(require("./applications/interchain_accounts/controller/v1/query"));
var _162 = __toESM(require("./applications/interchain_accounts/controller/v1/tx"));
var _163 = __toESM(require("./applications/interchain_accounts/genesis/v1/genesis"));
var _164 = __toESM(require("./applications/interchain_accounts/host/v1/host"));
var _165 = __toESM(require("./applications/interchain_accounts/host/v1/query"));
var _166 = __toESM(require("./applications/interchain_accounts/host/v1/tx"));
var _167 = __toESM(require("./applications/interchain_accounts/v1/account"));
var _168 = __toESM(require("./applications/interchain_accounts/v1/metadata"));
var _169 = __toESM(require("./applications/interchain_accounts/v1/packet"));
var _170 = __toESM(require("./applications/transfer/v1/authz"));
var _171 = __toESM(require("./applications/transfer/v1/genesis"));
var _172 = __toESM(require("./applications/transfer/v1/query"));
var _173 = __toESM(require("./applications/transfer/v1/transfer"));
var _174 = __toESM(require("./applications/transfer/v1/tx"));
var _175 = __toESM(require("./applications/transfer/v2/packet"));
var _176 = __toESM(require("./core/channel/v1/channel"));
var _177 = __toESM(require("./core/channel/v1/genesis"));
var _178 = __toESM(require("./core/channel/v1/query"));
var _179 = __toESM(require("./core/channel/v1/tx"));
var _180 = __toESM(require("./core/channel/v1/upgrade"));
var _181 = __toESM(require("./core/client/v1/client"));
var _182 = __toESM(require("./core/client/v1/genesis"));
var _183 = __toESM(require("./core/client/v1/query"));
var _184 = __toESM(require("./core/client/v1/tx"));
var _185 = __toESM(require("./core/commitment/v1/commitment"));
var _186 = __toESM(require("./core/connection/v1/connection"));
var _187 = __toESM(require("./core/connection/v1/genesis"));
var _188 = __toESM(require("./core/connection/v1/query"));
var _189 = __toESM(require("./core/connection/v1/tx"));
var _190 = __toESM(require("./core/types/v1/genesis"));
var _191 = __toESM(require("./lightclients/localhost/v2/localhost"));
var _192 = __toESM(require("./lightclients/solomachine/v2/solomachine"));
var _193 = __toESM(require("./lightclients/solomachine/v3/solomachine"));
var _194 = __toESM(require("./lightclients/tendermint/v1/tendermint"));
var _195 = __toESM(require("./lightclients/wasm/v1/genesis"));
var _196 = __toESM(require("./lightclients/wasm/v1/query"));
var _197 = __toESM(require("./lightclients/wasm/v1/tx"));
var _198 = __toESM(require("./lightclients/wasm/v1/wasm"));
var _365 = __toESM(require("./applications/fee/v1/tx.amino"));
var _366 = __toESM(require("./applications/interchain_accounts/controller/v1/tx.amino"));
var _367 = __toESM(require("./applications/interchain_accounts/host/v1/tx.amino"));
var _368 = __toESM(require("./applications/transfer/v1/tx.amino"));
var _369 = __toESM(require("./core/channel/v1/tx.amino"));
var _370 = __toESM(require("./core/client/v1/tx.amino"));
var _371 = __toESM(require("./core/connection/v1/tx.amino"));
var _372 = __toESM(require("./lightclients/wasm/v1/tx.amino"));
var _373 = __toESM(require("./applications/fee/v1/tx.registry"));
var _374 = __toESM(require("./applications/interchain_accounts/controller/v1/tx.registry"));
var _375 = __toESM(require("./applications/interchain_accounts/host/v1/tx.registry"));
var _376 = __toESM(require("./applications/transfer/v1/tx.registry"));
var _377 = __toESM(require("./core/channel/v1/tx.registry"));
var _378 = __toESM(require("./core/client/v1/tx.registry"));
var _379 = __toESM(require("./core/connection/v1/tx.registry"));
var _380 = __toESM(require("./lightclients/wasm/v1/tx.registry"));
var _381 = __toESM(require("./applications/fee/v1/query.rpc.Query"));
var _382 = __toESM(require("./applications/interchain_accounts/controller/v1/query.rpc.Query"));
var _383 = __toESM(require("./applications/interchain_accounts/host/v1/query.rpc.Query"));
var _384 = __toESM(require("./applications/transfer/v1/query.rpc.Query"));
var _385 = __toESM(require("./core/channel/v1/query.rpc.Query"));
var _386 = __toESM(require("./core/client/v1/query.rpc.Query"));
var _387 = __toESM(require("./core/connection/v1/query.rpc.Query"));
var _388 = __toESM(require("./lightclients/wasm/v1/query.rpc.Query"));
var _389 = __toESM(require("./applications/fee/v1/tx.rpc.msg"));
var _390 = __toESM(require("./applications/interchain_accounts/controller/v1/tx.rpc.msg"));
var _391 = __toESM(require("./applications/interchain_accounts/host/v1/tx.rpc.msg"));
var _392 = __toESM(require("./applications/transfer/v1/tx.rpc.msg"));
var _393 = __toESM(require("./core/channel/v1/tx.rpc.msg"));
var _394 = __toESM(require("./core/client/v1/tx.rpc.msg"));
var _395 = __toESM(require("./core/connection/v1/tx.rpc.msg"));
var _396 = __toESM(require("./lightclients/wasm/v1/tx.rpc.msg"));
var _447 = __toESM(require("./rpc.query"));
var _448 = __toESM(require("./rpc.tx"));
var ibc;
((ibc2) => {
  let applications;
  ((applications2) => {
    let fee;
    ((fee2) => {
      fee2.v1 = {
        ..._154,
        ..._155,
        ..._156,
        ..._157,
        ..._158,
        ..._159,
        ..._365,
        ..._373,
        ..._381,
        ..._389
      };
    })(fee = applications2.fee || (applications2.fee = {}));
    let interchain_accounts;
    ((interchain_accounts2) => {
      let controller;
      ((controller2) => {
        controller2.v1 = {
          ..._160,
          ..._161,
          ..._162,
          ..._366,
          ..._374,
          ..._382,
          ..._390
        };
      })(controller = interchain_accounts2.controller || (interchain_accounts2.controller = {}));
      let genesis;
      ((genesis2) => {
        genesis2.v1 = {
          ..._163
        };
      })(genesis = interchain_accounts2.genesis || (interchain_accounts2.genesis = {}));
      let host;
      ((host2) => {
        host2.v1 = {
          ..._164,
          ..._165,
          ..._166,
          ..._367,
          ..._375,
          ..._383,
          ..._391
        };
      })(host = interchain_accounts2.host || (interchain_accounts2.host = {}));
      interchain_accounts2.v1 = {
        ..._167,
        ..._168,
        ..._169
      };
    })(interchain_accounts = applications2.interchain_accounts || (applications2.interchain_accounts = {}));
    let transfer;
    ((transfer2) => {
      transfer2.v1 = {
        ..._170,
        ..._171,
        ..._172,
        ..._173,
        ..._174,
        ..._368,
        ..._376,
        ..._384,
        ..._392
      };
      transfer2.v2 = {
        ..._175
      };
    })(transfer = applications2.transfer || (applications2.transfer = {}));
  })(applications = ibc2.applications || (ibc2.applications = {}));
  let core;
  ((core2) => {
    let channel;
    ((channel2) => {
      channel2.v1 = {
        ..._176,
        ..._177,
        ..._178,
        ..._179,
        ..._180,
        ..._369,
        ..._377,
        ..._385,
        ..._393
      };
    })(channel = core2.channel || (core2.channel = {}));
    let client;
    ((client2) => {
      client2.v1 = {
        ..._181,
        ..._182,
        ..._183,
        ..._184,
        ..._370,
        ..._378,
        ..._386,
        ..._394
      };
    })(client = core2.client || (core2.client = {}));
    let commitment;
    ((commitment2) => {
      commitment2.v1 = {
        ..._185
      };
    })(commitment = core2.commitment || (core2.commitment = {}));
    let connection;
    ((connection2) => {
      connection2.v1 = {
        ..._186,
        ..._187,
        ..._188,
        ..._189,
        ..._371,
        ..._379,
        ..._387,
        ..._395
      };
    })(connection = core2.connection || (core2.connection = {}));
    let types;
    ((types2) => {
      types2.v1 = {
        ..._190
      };
    })(types = core2.types || (core2.types = {}));
  })(core = ibc2.core || (ibc2.core = {}));
  let lightclients;
  ((lightclients2) => {
    let localhost;
    ((localhost2) => {
      localhost2.v2 = {
        ..._191
      };
    })(localhost = lightclients2.localhost || (lightclients2.localhost = {}));
    let solomachine;
    ((solomachine2) => {
      solomachine2.v2 = {
        ..._192
      };
      solomachine2.v3 = {
        ..._193
      };
    })(solomachine = lightclients2.solomachine || (lightclients2.solomachine = {}));
    let tendermint;
    ((tendermint2) => {
      tendermint2.v1 = {
        ..._194
      };
    })(tendermint = lightclients2.tendermint || (lightclients2.tendermint = {}));
    let wasm;
    ((wasm2) => {
      wasm2.v1 = {
        ..._195,
        ..._196,
        ..._197,
        ..._198,
        ..._372,
        ..._380,
        ..._388,
        ..._396
      };
    })(wasm = lightclients2.wasm || (lightclients2.wasm = {}));
  })(lightclients = ibc2.lightclients || (ibc2.lightclients = {}));
  ibc2.ClientFactory = {
    ..._447,
    ..._448
  };
})(ibc || (ibc = {}));
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ibc
});
