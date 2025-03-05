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
var _143 = __toESM(require("./applications/fee/v1/ack"));
var _144 = __toESM(require("./applications/fee/v1/fee"));
var _145 = __toESM(require("./applications/fee/v1/genesis"));
var _146 = __toESM(require("./applications/fee/v1/metadata"));
var _147 = __toESM(require("./applications/fee/v1/query"));
var _148 = __toESM(require("./applications/fee/v1/tx"));
var _149 = __toESM(require("./applications/interchain_accounts/controller/v1/controller"));
var _150 = __toESM(require("./applications/interchain_accounts/controller/v1/query"));
var _151 = __toESM(require("./applications/interchain_accounts/controller/v1/tx"));
var _152 = __toESM(require("./applications/interchain_accounts/genesis/v1/genesis"));
var _153 = __toESM(require("./applications/interchain_accounts/host/v1/host"));
var _154 = __toESM(require("./applications/interchain_accounts/host/v1/query"));
var _155 = __toESM(require("./applications/interchain_accounts/host/v1/tx"));
var _156 = __toESM(require("./applications/interchain_accounts/v1/account"));
var _157 = __toESM(require("./applications/interchain_accounts/v1/metadata"));
var _158 = __toESM(require("./applications/interchain_accounts/v1/packet"));
var _159 = __toESM(require("./applications/transfer/v1/authz"));
var _160 = __toESM(require("./applications/transfer/v1/genesis"));
var _161 = __toESM(require("./applications/transfer/v1/query"));
var _162 = __toESM(require("./applications/transfer/v1/transfer"));
var _163 = __toESM(require("./applications/transfer/v1/tx"));
var _164 = __toESM(require("./applications/transfer/v2/packet"));
var _165 = __toESM(require("./core/channel/v1/channel"));
var _166 = __toESM(require("./core/channel/v1/genesis"));
var _167 = __toESM(require("./core/channel/v1/query"));
var _168 = __toESM(require("./core/channel/v1/tx"));
var _169 = __toESM(require("./core/client/v1/client"));
var _170 = __toESM(require("./core/client/v1/genesis"));
var _171 = __toESM(require("./core/client/v1/query"));
var _172 = __toESM(require("./core/client/v1/tx"));
var _173 = __toESM(require("./core/commitment/v1/commitment"));
var _174 = __toESM(require("./core/connection/v1/connection"));
var _175 = __toESM(require("./core/connection/v1/genesis"));
var _176 = __toESM(require("./core/connection/v1/query"));
var _177 = __toESM(require("./core/connection/v1/tx"));
var _178 = __toESM(require("./core/types/v1/genesis"));
var _179 = __toESM(require("./lightclients/localhost/v2/localhost"));
var _180 = __toESM(require("./lightclients/solomachine/v2/solomachine"));
var _181 = __toESM(require("./lightclients/solomachine/v3/solomachine"));
var _182 = __toESM(require("./lightclients/tendermint/v1/tendermint"));
var _342 = __toESM(require("./applications/fee/v1/tx.amino"));
var _343 = __toESM(require("./applications/interchain_accounts/controller/v1/tx.amino"));
var _344 = __toESM(require("./applications/interchain_accounts/host/v1/tx.amino"));
var _345 = __toESM(require("./applications/transfer/v1/tx.amino"));
var _346 = __toESM(require("./core/channel/v1/tx.amino"));
var _347 = __toESM(require("./core/client/v1/tx.amino"));
var _348 = __toESM(require("./core/connection/v1/tx.amino"));
var _349 = __toESM(require("./applications/fee/v1/tx.registry"));
var _350 = __toESM(require("./applications/interchain_accounts/controller/v1/tx.registry"));
var _351 = __toESM(require("./applications/interchain_accounts/host/v1/tx.registry"));
var _352 = __toESM(require("./applications/transfer/v1/tx.registry"));
var _353 = __toESM(require("./core/channel/v1/tx.registry"));
var _354 = __toESM(require("./core/client/v1/tx.registry"));
var _355 = __toESM(require("./core/connection/v1/tx.registry"));
var _356 = __toESM(require("./applications/fee/v1/query.rpc.Query"));
var _357 = __toESM(require("./applications/interchain_accounts/controller/v1/query.rpc.Query"));
var _358 = __toESM(require("./applications/interchain_accounts/host/v1/query.rpc.Query"));
var _359 = __toESM(require("./applications/transfer/v1/query.rpc.Query"));
var _360 = __toESM(require("./core/channel/v1/query.rpc.Query"));
var _361 = __toESM(require("./core/client/v1/query.rpc.Query"));
var _362 = __toESM(require("./core/connection/v1/query.rpc.Query"));
var _363 = __toESM(require("./applications/fee/v1/tx.rpc.msg"));
var _364 = __toESM(require("./applications/interchain_accounts/controller/v1/tx.rpc.msg"));
var _365 = __toESM(require("./applications/interchain_accounts/host/v1/tx.rpc.msg"));
var _366 = __toESM(require("./applications/transfer/v1/tx.rpc.msg"));
var _367 = __toESM(require("./core/channel/v1/tx.rpc.msg"));
var _368 = __toESM(require("./core/client/v1/tx.rpc.msg"));
var _369 = __toESM(require("./core/connection/v1/tx.rpc.msg"));
var _415 = __toESM(require("./rpc.query"));
var _416 = __toESM(require("./rpc.tx"));
var ibc;
((ibc2) => {
  let applications;
  ((applications2) => {
    let fee;
    ((fee2) => {
      fee2.v1 = {
        ..._143,
        ..._144,
        ..._145,
        ..._146,
        ..._147,
        ..._148,
        ..._342,
        ..._349,
        ..._356,
        ..._363
      };
    })(fee = applications2.fee || (applications2.fee = {}));
    let interchain_accounts;
    ((interchain_accounts2) => {
      let controller;
      ((controller2) => {
        controller2.v1 = {
          ..._149,
          ..._150,
          ..._151,
          ..._343,
          ..._350,
          ..._357,
          ..._364
        };
      })(controller = interchain_accounts2.controller || (interchain_accounts2.controller = {}));
      let genesis;
      ((genesis2) => {
        genesis2.v1 = {
          ..._152
        };
      })(genesis = interchain_accounts2.genesis || (interchain_accounts2.genesis = {}));
      let host;
      ((host2) => {
        host2.v1 = {
          ..._153,
          ..._154,
          ..._155,
          ..._344,
          ..._351,
          ..._358,
          ..._365
        };
      })(host = interchain_accounts2.host || (interchain_accounts2.host = {}));
      interchain_accounts2.v1 = {
        ..._156,
        ..._157,
        ..._158
      };
    })(interchain_accounts = applications2.interchain_accounts || (applications2.interchain_accounts = {}));
    let transfer;
    ((transfer2) => {
      transfer2.v1 = {
        ..._159,
        ..._160,
        ..._161,
        ..._162,
        ..._163,
        ..._345,
        ..._352,
        ..._359,
        ..._366
      };
      transfer2.v2 = {
        ..._164
      };
    })(transfer = applications2.transfer || (applications2.transfer = {}));
  })(applications = ibc2.applications || (ibc2.applications = {}));
  let core;
  ((core2) => {
    let channel;
    ((channel2) => {
      channel2.v1 = {
        ..._165,
        ..._166,
        ..._167,
        ..._168,
        ..._346,
        ..._353,
        ..._360,
        ..._367
      };
    })(channel = core2.channel || (core2.channel = {}));
    let client;
    ((client2) => {
      client2.v1 = {
        ..._169,
        ..._170,
        ..._171,
        ..._172,
        ..._347,
        ..._354,
        ..._361,
        ..._368
      };
    })(client = core2.client || (core2.client = {}));
    let commitment;
    ((commitment2) => {
      commitment2.v1 = {
        ..._173
      };
    })(commitment = core2.commitment || (core2.commitment = {}));
    let connection;
    ((connection2) => {
      connection2.v1 = {
        ..._174,
        ..._175,
        ..._176,
        ..._177,
        ..._348,
        ..._355,
        ..._362,
        ..._369
      };
    })(connection = core2.connection || (core2.connection = {}));
    let types;
    ((types2) => {
      types2.v1 = {
        ..._178
      };
    })(types = core2.types || (core2.types = {}));
  })(core = ibc2.core || (ibc2.core = {}));
  let lightclients;
  ((lightclients2) => {
    let localhost;
    ((localhost2) => {
      localhost2.v2 = {
        ..._179
      };
    })(localhost = lightclients2.localhost || (lightclients2.localhost = {}));
    let solomachine;
    ((solomachine2) => {
      solomachine2.v2 = {
        ..._180
      };
      solomachine2.v3 = {
        ..._181
      };
    })(solomachine = lightclients2.solomachine || (lightclients2.solomachine = {}));
    let tendermint;
    ((tendermint2) => {
      tendermint2.v1 = {
        ..._182
      };
    })(tendermint = lightclients2.tendermint || (lightclients2.tendermint = {}));
  })(lightclients = ibc2.lightclients || (ibc2.lightclients = {}));
  ibc2.ClientFactory = {
    ..._415,
    ..._416
  };
})(ibc || (ibc = {}));
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ibc
});
