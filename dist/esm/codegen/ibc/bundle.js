import * as _136 from "./applications/fee/v1/ack";
import * as _137 from "./applications/fee/v1/fee";
import * as _138 from "./applications/fee/v1/genesis";
import * as _139 from "./applications/fee/v1/metadata";
import * as _140 from "./applications/fee/v1/query";
import * as _141 from "./applications/fee/v1/tx";
import * as _142 from "./applications/interchain_accounts/controller/v1/controller";
import * as _143 from "./applications/interchain_accounts/controller/v1/query";
import * as _144 from "./applications/interchain_accounts/controller/v1/tx";
import * as _145 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _146 from "./applications/interchain_accounts/host/v1/host";
import * as _147 from "./applications/interchain_accounts/host/v1/query";
import * as _148 from "./applications/interchain_accounts/v1/account";
import * as _149 from "./applications/interchain_accounts/v1/metadata";
import * as _150 from "./applications/interchain_accounts/v1/packet";
import * as _151 from "./applications/transfer/v1/authz";
import * as _152 from "./applications/transfer/v1/genesis";
import * as _153 from "./applications/transfer/v1/query";
import * as _154 from "./applications/transfer/v1/transfer";
import * as _155 from "./applications/transfer/v1/tx";
import * as _156 from "./applications/transfer/v2/packet";
import * as _157 from "./core/channel/v1/channel";
import * as _158 from "./core/channel/v1/genesis";
import * as _159 from "./core/channel/v1/query";
import * as _160 from "./core/channel/v1/tx";
import * as _161 from "./core/client/v1/client";
import * as _162 from "./core/client/v1/genesis";
import * as _163 from "./core/client/v1/query";
import * as _164 from "./core/client/v1/tx";
import * as _165 from "./core/commitment/v1/commitment";
import * as _166 from "./core/connection/v1/connection";
import * as _167 from "./core/connection/v1/genesis";
import * as _168 from "./core/connection/v1/query";
import * as _169 from "./core/connection/v1/tx";
import * as _170 from "./core/types/v1/genesis";
import * as _171 from "./lightclients/localhost/v2/localhost";
import * as _172 from "./lightclients/solomachine/v2/solomachine";
import * as _173 from "./lightclients/solomachine/v3/solomachine";
import * as _174 from "./lightclients/tendermint/v1/tendermint";
import * as _330 from "./applications/fee/v1/tx.amino";
import * as _331 from "./applications/interchain_accounts/controller/v1/tx.amino";
import * as _332 from "./applications/transfer/v1/tx.amino";
import * as _333 from "./core/channel/v1/tx.amino";
import * as _334 from "./core/client/v1/tx.amino";
import * as _335 from "./core/connection/v1/tx.amino";
import * as _336 from "./applications/fee/v1/tx.registry";
import * as _337 from "./applications/interchain_accounts/controller/v1/tx.registry";
import * as _338 from "./applications/transfer/v1/tx.registry";
import * as _339 from "./core/channel/v1/tx.registry";
import * as _340 from "./core/client/v1/tx.registry";
import * as _341 from "./core/connection/v1/tx.registry";
import * as _342 from "./applications/fee/v1/query.rpc.Query";
import * as _343 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _344 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _345 from "./applications/transfer/v1/query.rpc.Query";
import * as _346 from "./core/channel/v1/query.rpc.Query";
import * as _347 from "./core/client/v1/query.rpc.Query";
import * as _348 from "./core/connection/v1/query.rpc.Query";
import * as _349 from "./applications/fee/v1/tx.rpc.msg";
import * as _350 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _351 from "./applications/transfer/v1/tx.rpc.msg";
import * as _352 from "./core/channel/v1/tx.rpc.msg";
import * as _353 from "./core/client/v1/tx.rpc.msg";
import * as _354 from "./core/connection/v1/tx.rpc.msg";
import * as _398 from "./rpc.query";
import * as _399 from "./rpc.tx";
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
export {
  ibc
};
