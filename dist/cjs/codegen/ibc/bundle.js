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
var _84 = __toESM(require("./applications/fee/v1/ack"));
var _85 = __toESM(require("./applications/fee/v1/fee"));
var _86 = __toESM(require("./applications/fee/v1/genesis"));
var _87 = __toESM(require("./applications/fee/v1/metadata"));
var _88 = __toESM(require("./applications/fee/v1/query"));
var _89 = __toESM(require("./applications/fee/v1/tx"));
var _90 = __toESM(require("./applications/interchain_accounts/controller/v1/controller"));
var _91 = __toESM(require("./applications/interchain_accounts/controller/v1/query"));
var _92 = __toESM(require("./applications/interchain_accounts/controller/v1/tx"));
var _93 = __toESM(require("./applications/interchain_accounts/genesis/v1/genesis"));
var _94 = __toESM(require("./applications/interchain_accounts/host/v1/host"));
var _95 = __toESM(require("./applications/interchain_accounts/host/v1/query"));
var _96 = __toESM(require("./applications/interchain_accounts/v1/account"));
var _97 = __toESM(require("./applications/interchain_accounts/v1/metadata"));
var _98 = __toESM(require("./applications/interchain_accounts/v1/packet"));
var _99 = __toESM(require("./applications/transfer/v1/authz"));
var _100 = __toESM(require("./applications/transfer/v1/genesis"));
var _101 = __toESM(require("./applications/transfer/v1/query"));
var _102 = __toESM(require("./applications/transfer/v1/transfer"));
var _103 = __toESM(require("./applications/transfer/v1/tx"));
var _104 = __toESM(require("./applications/transfer/v2/packet"));
var _105 = __toESM(require("./core/channel/v1/channel"));
var _106 = __toESM(require("./core/channel/v1/genesis"));
var _107 = __toESM(require("./core/channel/v1/query"));
var _108 = __toESM(require("./core/channel/v1/tx"));
var _109 = __toESM(require("./core/client/v1/client"));
var _110 = __toESM(require("./core/client/v1/genesis"));
var _111 = __toESM(require("./core/client/v1/query"));
var _112 = __toESM(require("./core/client/v1/tx"));
var _113 = __toESM(require("./core/commitment/v1/commitment"));
var _114 = __toESM(require("./core/connection/v1/connection"));
var _115 = __toESM(require("./core/connection/v1/genesis"));
var _116 = __toESM(require("./core/connection/v1/query"));
var _117 = __toESM(require("./core/connection/v1/tx"));
var _118 = __toESM(require("./core/types/v1/genesis"));
var _119 = __toESM(require("./lightclients/localhost/v2/localhost"));
var _120 = __toESM(require("./lightclients/solomachine/v2/solomachine"));
var _121 = __toESM(require("./lightclients/solomachine/v3/solomachine"));
var _122 = __toESM(require("./lightclients/tendermint/v1/tendermint"));
var _249 = __toESM(require("./applications/fee/v1/tx.amino"));
var _250 = __toESM(require("./applications/interchain_accounts/controller/v1/tx.amino"));
var _251 = __toESM(require("./applications/transfer/v1/tx.amino"));
var _252 = __toESM(require("./core/channel/v1/tx.amino"));
var _253 = __toESM(require("./core/client/v1/tx.amino"));
var _254 = __toESM(require("./core/connection/v1/tx.amino"));
var _255 = __toESM(require("./applications/fee/v1/tx.registry"));
var _256 = __toESM(require("./applications/interchain_accounts/controller/v1/tx.registry"));
var _257 = __toESM(require("./applications/transfer/v1/tx.registry"));
var _258 = __toESM(require("./core/channel/v1/tx.registry"));
var _259 = __toESM(require("./core/client/v1/tx.registry"));
var _260 = __toESM(require("./core/connection/v1/tx.registry"));
var _261 = __toESM(require("./applications/fee/v1/query.rpc.Query"));
var _262 = __toESM(require("./applications/interchain_accounts/controller/v1/query.rpc.Query"));
var _263 = __toESM(require("./applications/interchain_accounts/host/v1/query.rpc.Query"));
var _264 = __toESM(require("./applications/transfer/v1/query.rpc.Query"));
var _265 = __toESM(require("./core/channel/v1/query.rpc.Query"));
var _266 = __toESM(require("./core/client/v1/query.rpc.Query"));
var _267 = __toESM(require("./core/connection/v1/query.rpc.Query"));
var _268 = __toESM(require("./applications/fee/v1/tx.rpc.msg"));
var _269 = __toESM(require("./applications/interchain_accounts/controller/v1/tx.rpc.msg"));
var _270 = __toESM(require("./applications/transfer/v1/tx.rpc.msg"));
var _271 = __toESM(require("./core/channel/v1/tx.rpc.msg"));
var _272 = __toESM(require("./core/client/v1/tx.rpc.msg"));
var _273 = __toESM(require("./core/connection/v1/tx.rpc.msg"));
var _317 = __toESM(require("./rpc.query"));
var _318 = __toESM(require("./rpc.tx"));
var ibc;
((ibc2) => {
  let applications;
  ((applications2) => {
    let fee;
    ((fee2) => {
      fee2.v1 = {
        ..._84,
        ..._85,
        ..._86,
        ..._87,
        ..._88,
        ..._89,
        ..._249,
        ..._255,
        ..._261,
        ..._268
      };
    })(fee = applications2.fee || (applications2.fee = {}));
    let interchain_accounts;
    ((interchain_accounts2) => {
      let controller;
      ((controller2) => {
        controller2.v1 = {
          ..._90,
          ..._91,
          ..._92,
          ..._250,
          ..._256,
          ..._262,
          ..._269
        };
      })(controller = interchain_accounts2.controller || (interchain_accounts2.controller = {}));
      let genesis;
      ((genesis2) => {
        genesis2.v1 = {
          ..._93
        };
      })(genesis = interchain_accounts2.genesis || (interchain_accounts2.genesis = {}));
      let host;
      ((host2) => {
        host2.v1 = {
          ..._94,
          ..._95,
          ..._263
        };
      })(host = interchain_accounts2.host || (interchain_accounts2.host = {}));
      interchain_accounts2.v1 = {
        ..._96,
        ..._97,
        ..._98
      };
    })(interchain_accounts = applications2.interchain_accounts || (applications2.interchain_accounts = {}));
    let transfer;
    ((transfer2) => {
      transfer2.v1 = {
        ..._99,
        ..._100,
        ..._101,
        ..._102,
        ..._103,
        ..._251,
        ..._257,
        ..._264,
        ..._270
      };
      transfer2.v2 = {
        ..._104
      };
    })(transfer = applications2.transfer || (applications2.transfer = {}));
  })(applications = ibc2.applications || (ibc2.applications = {}));
  let core;
  ((core2) => {
    let channel;
    ((channel2) => {
      channel2.v1 = {
        ..._105,
        ..._106,
        ..._107,
        ..._108,
        ..._252,
        ..._258,
        ..._265,
        ..._271
      };
    })(channel = core2.channel || (core2.channel = {}));
    let client;
    ((client2) => {
      client2.v1 = {
        ..._109,
        ..._110,
        ..._111,
        ..._112,
        ..._253,
        ..._259,
        ..._266,
        ..._272
      };
    })(client = core2.client || (core2.client = {}));
    let commitment;
    ((commitment2) => {
      commitment2.v1 = {
        ..._113
      };
    })(commitment = core2.commitment || (core2.commitment = {}));
    let connection;
    ((connection2) => {
      connection2.v1 = {
        ..._114,
        ..._115,
        ..._116,
        ..._117,
        ..._254,
        ..._260,
        ..._267,
        ..._273
      };
    })(connection = core2.connection || (core2.connection = {}));
    let types;
    ((types2) => {
      types2.v1 = {
        ..._118
      };
    })(types = core2.types || (core2.types = {}));
  })(core = ibc2.core || (ibc2.core = {}));
  let lightclients;
  ((lightclients2) => {
    let localhost;
    ((localhost2) => {
      localhost2.v2 = {
        ..._119
      };
    })(localhost = lightclients2.localhost || (lightclients2.localhost = {}));
    let solomachine;
    ((solomachine2) => {
      solomachine2.v2 = {
        ..._120
      };
      solomachine2.v3 = {
        ..._121
      };
    })(solomachine = lightclients2.solomachine || (lightclients2.solomachine = {}));
    let tendermint;
    ((tendermint2) => {
      tendermint2.v1 = {
        ..._122
      };
    })(tendermint = lightclients2.tendermint || (lightclients2.tendermint = {}));
  })(lightclients = ibc2.lightclients || (ibc2.lightclients = {}));
  ibc2.ClientFactory = {
    ..._317,
    ..._318
  };
})(ibc || (ibc = {}));
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ibc
});
