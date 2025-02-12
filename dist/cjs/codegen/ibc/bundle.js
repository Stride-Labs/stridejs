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
var _136 = __toESM(require("./applications/fee/v1/ack"));
var _137 = __toESM(require("./applications/fee/v1/fee"));
var _138 = __toESM(require("./applications/fee/v1/genesis"));
var _139 = __toESM(require("./applications/fee/v1/metadata"));
var _140 = __toESM(require("./applications/fee/v1/query"));
var _141 = __toESM(require("./applications/fee/v1/tx"));
var _142 = __toESM(require("./applications/interchain_accounts/controller/v1/controller"));
var _143 = __toESM(require("./applications/interchain_accounts/controller/v1/query"));
var _144 = __toESM(require("./applications/interchain_accounts/controller/v1/tx"));
var _145 = __toESM(require("./applications/interchain_accounts/genesis/v1/genesis"));
var _146 = __toESM(require("./applications/interchain_accounts/host/v1/host"));
var _147 = __toESM(require("./applications/interchain_accounts/host/v1/query"));
var _148 = __toESM(require("./applications/interchain_accounts/v1/account"));
var _149 = __toESM(require("./applications/interchain_accounts/v1/metadata"));
var _150 = __toESM(require("./applications/interchain_accounts/v1/packet"));
var _151 = __toESM(require("./applications/transfer/v1/authz"));
var _152 = __toESM(require("./applications/transfer/v1/genesis"));
var _153 = __toESM(require("./applications/transfer/v1/query"));
var _154 = __toESM(require("./applications/transfer/v1/transfer"));
var _155 = __toESM(require("./applications/transfer/v1/tx"));
var _156 = __toESM(require("./applications/transfer/v2/packet"));
var _157 = __toESM(require("./core/channel/v1/channel"));
var _158 = __toESM(require("./core/channel/v1/genesis"));
var _159 = __toESM(require("./core/channel/v1/query"));
var _160 = __toESM(require("./core/channel/v1/tx"));
var _161 = __toESM(require("./core/client/v1/client"));
var _162 = __toESM(require("./core/client/v1/genesis"));
var _163 = __toESM(require("./core/client/v1/query"));
var _164 = __toESM(require("./core/client/v1/tx"));
var _165 = __toESM(require("./core/commitment/v1/commitment"));
var _166 = __toESM(require("./core/connection/v1/connection"));
var _167 = __toESM(require("./core/connection/v1/genesis"));
var _168 = __toESM(require("./core/connection/v1/query"));
var _169 = __toESM(require("./core/connection/v1/tx"));
var _170 = __toESM(require("./core/types/v1/genesis"));
var _171 = __toESM(require("./lightclients/localhost/v2/localhost"));
var _172 = __toESM(require("./lightclients/solomachine/v2/solomachine"));
var _173 = __toESM(require("./lightclients/solomachine/v3/solomachine"));
var _174 = __toESM(require("./lightclients/tendermint/v1/tendermint"));
var _330 = __toESM(require("./applications/fee/v1/tx.amino"));
var _331 = __toESM(require("./applications/interchain_accounts/controller/v1/tx.amino"));
var _332 = __toESM(require("./applications/transfer/v1/tx.amino"));
var _333 = __toESM(require("./core/channel/v1/tx.amino"));
var _334 = __toESM(require("./core/client/v1/tx.amino"));
var _335 = __toESM(require("./core/connection/v1/tx.amino"));
var _336 = __toESM(require("./applications/fee/v1/tx.registry"));
var _337 = __toESM(require("./applications/interchain_accounts/controller/v1/tx.registry"));
var _338 = __toESM(require("./applications/transfer/v1/tx.registry"));
var _339 = __toESM(require("./core/channel/v1/tx.registry"));
var _340 = __toESM(require("./core/client/v1/tx.registry"));
var _341 = __toESM(require("./core/connection/v1/tx.registry"));
var _342 = __toESM(require("./applications/fee/v1/query.rpc.Query"));
var _343 = __toESM(require("./applications/interchain_accounts/controller/v1/query.rpc.Query"));
var _344 = __toESM(require("./applications/interchain_accounts/host/v1/query.rpc.Query"));
var _345 = __toESM(require("./applications/transfer/v1/query.rpc.Query"));
var _346 = __toESM(require("./core/channel/v1/query.rpc.Query"));
var _347 = __toESM(require("./core/client/v1/query.rpc.Query"));
var _348 = __toESM(require("./core/connection/v1/query.rpc.Query"));
var _349 = __toESM(require("./applications/fee/v1/tx.rpc.msg"));
var _350 = __toESM(require("./applications/interchain_accounts/controller/v1/tx.rpc.msg"));
var _351 = __toESM(require("./applications/transfer/v1/tx.rpc.msg"));
var _352 = __toESM(require("./core/channel/v1/tx.rpc.msg"));
var _353 = __toESM(require("./core/client/v1/tx.rpc.msg"));
var _354 = __toESM(require("./core/connection/v1/tx.rpc.msg"));
var _398 = __toESM(require("./rpc.query"));
var _399 = __toESM(require("./rpc.tx"));
var ibc;
((ibc2) => {
  let applications;
  ((applications2) => {
    let fee;
    ((fee2) => {
      fee2.v1 = {
        ..._136,
        ..._137,
        ..._138,
        ..._139,
        ..._140,
        ..._141,
        ..._330,
        ..._336,
        ..._342,
        ..._349
      };
    })(fee = applications2.fee || (applications2.fee = {}));
    let interchain_accounts;
    ((interchain_accounts2) => {
      let controller;
      ((controller2) => {
        controller2.v1 = {
          ..._142,
          ..._143,
          ..._144,
          ..._331,
          ..._337,
          ..._343,
          ..._350
        };
      })(controller = interchain_accounts2.controller || (interchain_accounts2.controller = {}));
      let genesis;
      ((genesis2) => {
        genesis2.v1 = {
          ..._145
        };
      })(genesis = interchain_accounts2.genesis || (interchain_accounts2.genesis = {}));
      let host;
      ((host2) => {
        host2.v1 = {
          ..._146,
          ..._147,
          ..._344
        };
      })(host = interchain_accounts2.host || (interchain_accounts2.host = {}));
      interchain_accounts2.v1 = {
        ..._148,
        ..._149,
        ..._150
      };
    })(interchain_accounts = applications2.interchain_accounts || (applications2.interchain_accounts = {}));
    let transfer;
    ((transfer2) => {
      transfer2.v1 = {
        ..._151,
        ..._152,
        ..._153,
        ..._154,
        ..._155,
        ..._332,
        ..._338,
        ..._345,
        ..._351
      };
      transfer2.v2 = {
        ..._156
      };
    })(transfer = applications2.transfer || (applications2.transfer = {}));
  })(applications = ibc2.applications || (ibc2.applications = {}));
  let core;
  ((core2) => {
    let channel;
    ((channel2) => {
      channel2.v1 = {
        ..._157,
        ..._158,
        ..._159,
        ..._160,
        ..._333,
        ..._339,
        ..._346,
        ..._352
      };
    })(channel = core2.channel || (core2.channel = {}));
    let client;
    ((client2) => {
      client2.v1 = {
        ..._161,
        ..._162,
        ..._163,
        ..._164,
        ..._334,
        ..._340,
        ..._347,
        ..._353
      };
    })(client = core2.client || (core2.client = {}));
    let commitment;
    ((commitment2) => {
      commitment2.v1 = {
        ..._165
      };
    })(commitment = core2.commitment || (core2.commitment = {}));
    let connection;
    ((connection2) => {
      connection2.v1 = {
        ..._166,
        ..._167,
        ..._168,
        ..._169,
        ..._335,
        ..._341,
        ..._348,
        ..._354
      };
    })(connection = core2.connection || (core2.connection = {}));
    let types;
    ((types2) => {
      types2.v1 = {
        ..._170
      };
    })(types = core2.types || (core2.types = {}));
  })(core = ibc2.core || (ibc2.core = {}));
  let lightclients;
  ((lightclients2) => {
    let localhost;
    ((localhost2) => {
      localhost2.v2 = {
        ..._171
      };
    })(localhost = lightclients2.localhost || (lightclients2.localhost = {}));
    let solomachine;
    ((solomachine2) => {
      solomachine2.v2 = {
        ..._172
      };
      solomachine2.v3 = {
        ..._173
      };
    })(solomachine = lightclients2.solomachine || (lightclients2.solomachine = {}));
    let tendermint;
    ((tendermint2) => {
      tendermint2.v1 = {
        ..._174
      };
    })(tendermint = lightclients2.tendermint || (lightclients2.tendermint = {}));
  })(lightclients = ibc2.lightclients || (ibc2.lightclients = {}));
  ibc2.ClientFactory = {
    ..._398,
    ..._399
  };
})(ibc || (ibc = {}));
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ibc
});
