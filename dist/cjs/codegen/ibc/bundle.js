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
var _155 = __toESM(require("./applications/interchain_accounts/v1/account"));
var _156 = __toESM(require("./applications/interchain_accounts/v1/metadata"));
var _157 = __toESM(require("./applications/interchain_accounts/v1/packet"));
var _158 = __toESM(require("./applications/transfer/v1/authz"));
var _159 = __toESM(require("./applications/transfer/v1/genesis"));
var _160 = __toESM(require("./applications/transfer/v1/query"));
var _161 = __toESM(require("./applications/transfer/v1/transfer"));
var _162 = __toESM(require("./applications/transfer/v1/tx"));
var _163 = __toESM(require("./applications/transfer/v2/packet"));
var _164 = __toESM(require("./core/channel/v1/channel"));
var _165 = __toESM(require("./core/channel/v1/genesis"));
var _166 = __toESM(require("./core/channel/v1/query"));
var _167 = __toESM(require("./core/channel/v1/tx"));
var _168 = __toESM(require("./core/client/v1/client"));
var _169 = __toESM(require("./core/client/v1/genesis"));
var _170 = __toESM(require("./core/client/v1/query"));
var _171 = __toESM(require("./core/client/v1/tx"));
var _172 = __toESM(require("./core/commitment/v1/commitment"));
var _173 = __toESM(require("./core/connection/v1/connection"));
var _174 = __toESM(require("./core/connection/v1/genesis"));
var _175 = __toESM(require("./core/connection/v1/query"));
var _176 = __toESM(require("./core/connection/v1/tx"));
var _177 = __toESM(require("./core/types/v1/genesis"));
var _178 = __toESM(require("./lightclients/localhost/v2/localhost"));
var _179 = __toESM(require("./lightclients/solomachine/v2/solomachine"));
var _180 = __toESM(require("./lightclients/solomachine/v3/solomachine"));
var _181 = __toESM(require("./lightclients/tendermint/v1/tendermint"));
var _341 = __toESM(require("./applications/fee/v1/tx.amino"));
var _342 = __toESM(require("./applications/interchain_accounts/controller/v1/tx.amino"));
var _343 = __toESM(require("./applications/transfer/v1/tx.amino"));
var _344 = __toESM(require("./core/channel/v1/tx.amino"));
var _345 = __toESM(require("./core/client/v1/tx.amino"));
var _346 = __toESM(require("./core/connection/v1/tx.amino"));
var _347 = __toESM(require("./applications/fee/v1/tx.registry"));
var _348 = __toESM(require("./applications/interchain_accounts/controller/v1/tx.registry"));
var _349 = __toESM(require("./applications/transfer/v1/tx.registry"));
var _350 = __toESM(require("./core/channel/v1/tx.registry"));
var _351 = __toESM(require("./core/client/v1/tx.registry"));
var _352 = __toESM(require("./core/connection/v1/tx.registry"));
var _353 = __toESM(require("./applications/fee/v1/query.rpc.Query"));
var _354 = __toESM(require("./applications/interchain_accounts/controller/v1/query.rpc.Query"));
var _355 = __toESM(require("./applications/interchain_accounts/host/v1/query.rpc.Query"));
var _356 = __toESM(require("./applications/transfer/v1/query.rpc.Query"));
var _357 = __toESM(require("./core/channel/v1/query.rpc.Query"));
var _358 = __toESM(require("./core/client/v1/query.rpc.Query"));
var _359 = __toESM(require("./core/connection/v1/query.rpc.Query"));
var _360 = __toESM(require("./applications/fee/v1/tx.rpc.msg"));
var _361 = __toESM(require("./applications/interchain_accounts/controller/v1/tx.rpc.msg"));
var _362 = __toESM(require("./applications/transfer/v1/tx.rpc.msg"));
var _363 = __toESM(require("./core/channel/v1/tx.rpc.msg"));
var _364 = __toESM(require("./core/client/v1/tx.rpc.msg"));
var _365 = __toESM(require("./core/connection/v1/tx.rpc.msg"));
var _411 = __toESM(require("./rpc.query"));
var _412 = __toESM(require("./rpc.tx"));
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
        ..._341,
        ..._347,
        ..._353,
        ..._360
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
          ..._342,
          ..._348,
          ..._354,
          ..._361
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
          ..._355
        };
      })(host = interchain_accounts2.host || (interchain_accounts2.host = {}));
      interchain_accounts2.v1 = {
        ..._155,
        ..._156,
        ..._157
      };
    })(interchain_accounts = applications2.interchain_accounts || (applications2.interchain_accounts = {}));
    let transfer;
    ((transfer2) => {
      transfer2.v1 = {
        ..._158,
        ..._159,
        ..._160,
        ..._161,
        ..._162,
        ..._343,
        ..._349,
        ..._356,
        ..._362
      };
      transfer2.v2 = {
        ..._163
      };
    })(transfer = applications2.transfer || (applications2.transfer = {}));
  })(applications = ibc2.applications || (ibc2.applications = {}));
  let core;
  ((core2) => {
    let channel;
    ((channel2) => {
      channel2.v1 = {
        ..._164,
        ..._165,
        ..._166,
        ..._167,
        ..._344,
        ..._350,
        ..._357,
        ..._363
      };
    })(channel = core2.channel || (core2.channel = {}));
    let client;
    ((client2) => {
      client2.v1 = {
        ..._168,
        ..._169,
        ..._170,
        ..._171,
        ..._345,
        ..._351,
        ..._358,
        ..._364
      };
    })(client = core2.client || (core2.client = {}));
    let commitment;
    ((commitment2) => {
      commitment2.v1 = {
        ..._172
      };
    })(commitment = core2.commitment || (core2.commitment = {}));
    let connection;
    ((connection2) => {
      connection2.v1 = {
        ..._173,
        ..._174,
        ..._175,
        ..._176,
        ..._346,
        ..._352,
        ..._359,
        ..._365
      };
    })(connection = core2.connection || (core2.connection = {}));
    let types;
    ((types2) => {
      types2.v1 = {
        ..._177
      };
    })(types = core2.types || (core2.types = {}));
  })(core = ibc2.core || (ibc2.core = {}));
  let lightclients;
  ((lightclients2) => {
    let localhost;
    ((localhost2) => {
      localhost2.v2 = {
        ..._178
      };
    })(localhost = lightclients2.localhost || (lightclients2.localhost = {}));
    let solomachine;
    ((solomachine2) => {
      solomachine2.v2 = {
        ..._179
      };
      solomachine2.v3 = {
        ..._180
      };
    })(solomachine = lightclients2.solomachine || (lightclients2.solomachine = {}));
    let tendermint;
    ((tendermint2) => {
      tendermint2.v1 = {
        ..._181
      };
    })(tendermint = lightclients2.tendermint || (lightclients2.tendermint = {}));
  })(lightclients = ibc2.lightclients || (ibc2.lightclients = {}));
  ibc2.ClientFactory = {
    ..._411,
    ..._412
  };
})(ibc || (ibc = {}));
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ibc
});
