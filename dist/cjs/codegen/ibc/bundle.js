"use strict";
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
var _149 = __toESM(require("./applications/fee/v1/ack"));
var _150 = __toESM(require("./applications/fee/v1/fee"));
var _151 = __toESM(require("./applications/fee/v1/genesis"));
var _152 = __toESM(require("./applications/fee/v1/metadata"));
var _153 = __toESM(require("./applications/fee/v1/query"));
var _154 = __toESM(require("./applications/fee/v1/tx"));
var _155 = __toESM(require("./applications/interchain_accounts/controller/v1/controller"));
var _156 = __toESM(require("./applications/interchain_accounts/controller/v1/query"));
var _157 = __toESM(require("./applications/interchain_accounts/controller/v1/tx"));
var _158 = __toESM(require("./applications/interchain_accounts/genesis/v1/genesis"));
var _159 = __toESM(require("./applications/interchain_accounts/host/v1/host"));
var _160 = __toESM(require("./applications/interchain_accounts/host/v1/query"));
var _161 = __toESM(require("./applications/interchain_accounts/host/v1/tx"));
var _162 = __toESM(require("./applications/interchain_accounts/v1/account"));
var _163 = __toESM(require("./applications/interchain_accounts/v1/metadata"));
var _164 = __toESM(require("./applications/interchain_accounts/v1/packet"));
var _165 = __toESM(require("./applications/transfer/v1/authz"));
var _166 = __toESM(require("./applications/transfer/v1/genesis"));
var _167 = __toESM(require("./applications/transfer/v1/query"));
var _168 = __toESM(require("./applications/transfer/v1/transfer"));
var _169 = __toESM(require("./applications/transfer/v1/tx"));
var _170 = __toESM(require("./applications/transfer/v2/packet"));
var _171 = __toESM(require("./core/channel/v1/channel"));
var _172 = __toESM(require("./core/channel/v1/genesis"));
var _173 = __toESM(require("./core/channel/v1/query"));
var _174 = __toESM(require("./core/channel/v1/tx"));
var _175 = __toESM(require("./core/client/v1/client"));
var _176 = __toESM(require("./core/client/v1/genesis"));
var _177 = __toESM(require("./core/client/v1/query"));
var _178 = __toESM(require("./core/client/v1/tx"));
var _179 = __toESM(require("./core/commitment/v1/commitment"));
var _180 = __toESM(require("./core/connection/v1/connection"));
var _181 = __toESM(require("./core/connection/v1/genesis"));
var _182 = __toESM(require("./core/connection/v1/query"));
var _183 = __toESM(require("./core/connection/v1/tx"));
var _184 = __toESM(require("./core/types/v1/genesis"));
var _185 = __toESM(require("./lightclients/localhost/v2/localhost"));
var _186 = __toESM(require("./lightclients/solomachine/v2/solomachine"));
var _187 = __toESM(require("./lightclients/solomachine/v3/solomachine"));
var _188 = __toESM(require("./lightclients/tendermint/v1/tendermint"));
var _352 = __toESM(require("./applications/fee/v1/tx.amino"));
var _353 = __toESM(require("./applications/interchain_accounts/controller/v1/tx.amino"));
var _354 = __toESM(require("./applications/interchain_accounts/host/v1/tx.amino"));
var _355 = __toESM(require("./applications/transfer/v1/tx.amino"));
var _356 = __toESM(require("./core/channel/v1/tx.amino"));
var _357 = __toESM(require("./core/client/v1/tx.amino"));
var _358 = __toESM(require("./core/connection/v1/tx.amino"));
var _359 = __toESM(require("./applications/fee/v1/tx.registry"));
var _360 = __toESM(require("./applications/interchain_accounts/controller/v1/tx.registry"));
var _361 = __toESM(require("./applications/interchain_accounts/host/v1/tx.registry"));
var _362 = __toESM(require("./applications/transfer/v1/tx.registry"));
var _363 = __toESM(require("./core/channel/v1/tx.registry"));
var _364 = __toESM(require("./core/client/v1/tx.registry"));
var _365 = __toESM(require("./core/connection/v1/tx.registry"));
var _366 = __toESM(require("./applications/fee/v1/query.rpc.Query"));
var _367 = __toESM(require("./applications/interchain_accounts/controller/v1/query.rpc.Query"));
var _368 = __toESM(require("./applications/interchain_accounts/host/v1/query.rpc.Query"));
var _369 = __toESM(require("./applications/transfer/v1/query.rpc.Query"));
var _370 = __toESM(require("./core/channel/v1/query.rpc.Query"));
var _371 = __toESM(require("./core/client/v1/query.rpc.Query"));
var _372 = __toESM(require("./core/connection/v1/query.rpc.Query"));
var _373 = __toESM(require("./applications/fee/v1/tx.rpc.msg"));
var _374 = __toESM(require("./applications/interchain_accounts/controller/v1/tx.rpc.msg"));
var _375 = __toESM(require("./applications/interchain_accounts/host/v1/tx.rpc.msg"));
var _376 = __toESM(require("./applications/transfer/v1/tx.rpc.msg"));
var _377 = __toESM(require("./core/channel/v1/tx.rpc.msg"));
var _378 = __toESM(require("./core/client/v1/tx.rpc.msg"));
var _379 = __toESM(require("./core/connection/v1/tx.rpc.msg"));
var _427 = __toESM(require("./rpc.query"));
var _428 = __toESM(require("./rpc.tx"));
var ibc;
((ibc2) => {
  let applications;
  ((applications2) => {
    let fee;
    ((fee2) => {
      fee2.v1 = {
        ..._149,
        ..._150,
        ..._151,
        ..._152,
        ..._153,
        ..._154,
        ..._352,
        ..._359,
        ..._366,
        ..._373
      };
    })(fee = applications2.fee || (applications2.fee = {}));
    let interchain_accounts;
    ((interchain_accounts2) => {
      let controller;
      ((controller2) => {
        controller2.v1 = {
          ..._155,
          ..._156,
          ..._157,
          ..._353,
          ..._360,
          ..._367,
          ..._374
        };
      })(controller = interchain_accounts2.controller || (interchain_accounts2.controller = {}));
      let genesis;
      ((genesis2) => {
        genesis2.v1 = {
          ..._158
        };
      })(genesis = interchain_accounts2.genesis || (interchain_accounts2.genesis = {}));
      let host;
      ((host2) => {
        host2.v1 = {
          ..._159,
          ..._160,
          ..._161,
          ..._354,
          ..._361,
          ..._368,
          ..._375
        };
      })(host = interchain_accounts2.host || (interchain_accounts2.host = {}));
      interchain_accounts2.v1 = {
        ..._162,
        ..._163,
        ..._164
      };
    })(interchain_accounts = applications2.interchain_accounts || (applications2.interchain_accounts = {}));
    let transfer;
    ((transfer2) => {
      transfer2.v1 = {
        ..._165,
        ..._166,
        ..._167,
        ..._168,
        ..._169,
        ..._355,
        ..._362,
        ..._369,
        ..._376
      };
      transfer2.v2 = {
        ..._170
      };
    })(transfer = applications2.transfer || (applications2.transfer = {}));
  })(applications = ibc2.applications || (ibc2.applications = {}));
  let core;
  ((core2) => {
    let channel;
    ((channel2) => {
      channel2.v1 = {
        ..._171,
        ..._172,
        ..._173,
        ..._174,
        ..._356,
        ..._363,
        ..._370,
        ..._377
      };
    })(channel = core2.channel || (core2.channel = {}));
    let client;
    ((client2) => {
      client2.v1 = {
        ..._175,
        ..._176,
        ..._177,
        ..._178,
        ..._357,
        ..._364,
        ..._371,
        ..._378
      };
    })(client = core2.client || (core2.client = {}));
    let commitment;
    ((commitment2) => {
      commitment2.v1 = {
        ..._179
      };
    })(commitment = core2.commitment || (core2.commitment = {}));
    let connection;
    ((connection2) => {
      connection2.v1 = {
        ..._180,
        ..._181,
        ..._182,
        ..._183,
        ..._358,
        ..._365,
        ..._372,
        ..._379
      };
    })(connection = core2.connection || (core2.connection = {}));
    let types;
    ((types2) => {
      types2.v1 = {
        ..._184
      };
    })(types = core2.types || (core2.types = {}));
  })(core = ibc2.core || (ibc2.core = {}));
  let lightclients;
  ((lightclients2) => {
    let localhost;
    ((localhost2) => {
      localhost2.v2 = {
        ..._185
      };
    })(localhost = lightclients2.localhost || (lightclients2.localhost = {}));
    let solomachine;
    ((solomachine2) => {
      solomachine2.v2 = {
        ..._186
      };
      solomachine2.v3 = {
        ..._187
      };
    })(solomachine = lightclients2.solomachine || (lightclients2.solomachine = {}));
    let tendermint;
    ((tendermint2) => {
      tendermint2.v1 = {
        ..._188
      };
    })(tendermint = lightclients2.tendermint || (lightclients2.tendermint = {}));
  })(lightclients = ibc2.lightclients || (ibc2.lightclients = {}));
  ibc2.ClientFactory = {
    ..._427,
    ..._428
  };
})(ibc || (ibc = {}));
// Removed broken CommonJS export annotation
