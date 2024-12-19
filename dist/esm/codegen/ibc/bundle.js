import * as _84 from "./applications/fee/v1/ack";
import * as _85 from "./applications/fee/v1/fee";
import * as _86 from "./applications/fee/v1/genesis";
import * as _87 from "./applications/fee/v1/metadata";
import * as _88 from "./applications/fee/v1/query";
import * as _89 from "./applications/fee/v1/tx";
import * as _90 from "./applications/interchain_accounts/controller/v1/controller";
import * as _91 from "./applications/interchain_accounts/controller/v1/query";
import * as _92 from "./applications/interchain_accounts/controller/v1/tx";
import * as _93 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _94 from "./applications/interchain_accounts/host/v1/host";
import * as _95 from "./applications/interchain_accounts/host/v1/query";
import * as _96 from "./applications/interchain_accounts/v1/account";
import * as _97 from "./applications/interchain_accounts/v1/metadata";
import * as _98 from "./applications/interchain_accounts/v1/packet";
import * as _99 from "./applications/transfer/v1/authz";
import * as _100 from "./applications/transfer/v1/genesis";
import * as _101 from "./applications/transfer/v1/query";
import * as _102 from "./applications/transfer/v1/transfer";
import * as _103 from "./applications/transfer/v1/tx";
import * as _104 from "./applications/transfer/v2/packet";
import * as _105 from "./core/channel/v1/channel";
import * as _106 from "./core/channel/v1/genesis";
import * as _107 from "./core/channel/v1/query";
import * as _108 from "./core/channel/v1/tx";
import * as _109 from "./core/client/v1/client";
import * as _110 from "./core/client/v1/genesis";
import * as _111 from "./core/client/v1/query";
import * as _112 from "./core/client/v1/tx";
import * as _113 from "./core/commitment/v1/commitment";
import * as _114 from "./core/connection/v1/connection";
import * as _115 from "./core/connection/v1/genesis";
import * as _116 from "./core/connection/v1/query";
import * as _117 from "./core/connection/v1/tx";
import * as _118 from "./core/types/v1/genesis";
import * as _119 from "./lightclients/localhost/v2/localhost";
import * as _120 from "./lightclients/solomachine/v2/solomachine";
import * as _121 from "./lightclients/solomachine/v3/solomachine";
import * as _122 from "./lightclients/tendermint/v1/tendermint";
import * as _249 from "./applications/fee/v1/tx.amino";
import * as _250 from "./applications/interchain_accounts/controller/v1/tx.amino";
import * as _251 from "./applications/transfer/v1/tx.amino";
import * as _252 from "./core/channel/v1/tx.amino";
import * as _253 from "./core/client/v1/tx.amino";
import * as _254 from "./core/connection/v1/tx.amino";
import * as _255 from "./applications/fee/v1/tx.registry";
import * as _256 from "./applications/interchain_accounts/controller/v1/tx.registry";
import * as _257 from "./applications/transfer/v1/tx.registry";
import * as _258 from "./core/channel/v1/tx.registry";
import * as _259 from "./core/client/v1/tx.registry";
import * as _260 from "./core/connection/v1/tx.registry";
import * as _261 from "./applications/fee/v1/query.rpc.Query";
import * as _262 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _263 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _264 from "./applications/transfer/v1/query.rpc.Query";
import * as _265 from "./core/channel/v1/query.rpc.Query";
import * as _266 from "./core/client/v1/query.rpc.Query";
import * as _267 from "./core/connection/v1/query.rpc.Query";
import * as _268 from "./applications/fee/v1/tx.rpc.msg";
import * as _269 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _270 from "./applications/transfer/v1/tx.rpc.msg";
import * as _271 from "./core/channel/v1/tx.rpc.msg";
import * as _272 from "./core/client/v1/tx.rpc.msg";
import * as _273 from "./core/connection/v1/tx.rpc.msg";
import * as _317 from "./rpc.query";
import * as _318 from "./rpc.tx";
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
export {
  ibc
};
