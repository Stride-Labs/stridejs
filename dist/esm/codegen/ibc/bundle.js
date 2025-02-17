import * as _143 from "./applications/fee/v1/ack";
import * as _144 from "./applications/fee/v1/fee";
import * as _145 from "./applications/fee/v1/genesis";
import * as _146 from "./applications/fee/v1/metadata";
import * as _147 from "./applications/fee/v1/query";
import * as _148 from "./applications/fee/v1/tx";
import * as _149 from "./applications/interchain_accounts/controller/v1/controller";
import * as _150 from "./applications/interchain_accounts/controller/v1/query";
import * as _151 from "./applications/interchain_accounts/controller/v1/tx";
import * as _152 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _153 from "./applications/interchain_accounts/host/v1/host";
import * as _154 from "./applications/interchain_accounts/host/v1/query";
import * as _155 from "./applications/interchain_accounts/v1/account";
import * as _156 from "./applications/interchain_accounts/v1/metadata";
import * as _157 from "./applications/interchain_accounts/v1/packet";
import * as _158 from "./applications/transfer/v1/authz";
import * as _159 from "./applications/transfer/v1/genesis";
import * as _160 from "./applications/transfer/v1/query";
import * as _161 from "./applications/transfer/v1/transfer";
import * as _162 from "./applications/transfer/v1/tx";
import * as _163 from "./applications/transfer/v2/packet";
import * as _164 from "./core/channel/v1/channel";
import * as _165 from "./core/channel/v1/genesis";
import * as _166 from "./core/channel/v1/query";
import * as _167 from "./core/channel/v1/tx";
import * as _168 from "./core/client/v1/client";
import * as _169 from "./core/client/v1/genesis";
import * as _170 from "./core/client/v1/query";
import * as _171 from "./core/client/v1/tx";
import * as _172 from "./core/commitment/v1/commitment";
import * as _173 from "./core/connection/v1/connection";
import * as _174 from "./core/connection/v1/genesis";
import * as _175 from "./core/connection/v1/query";
import * as _176 from "./core/connection/v1/tx";
import * as _177 from "./core/types/v1/genesis";
import * as _178 from "./lightclients/localhost/v2/localhost";
import * as _179 from "./lightclients/solomachine/v2/solomachine";
import * as _180 from "./lightclients/solomachine/v3/solomachine";
import * as _181 from "./lightclients/tendermint/v1/tendermint";
import * as _341 from "./applications/fee/v1/tx.amino";
import * as _342 from "./applications/interchain_accounts/controller/v1/tx.amino";
import * as _343 from "./applications/transfer/v1/tx.amino";
import * as _344 from "./core/channel/v1/tx.amino";
import * as _345 from "./core/client/v1/tx.amino";
import * as _346 from "./core/connection/v1/tx.amino";
import * as _347 from "./applications/fee/v1/tx.registry";
import * as _348 from "./applications/interchain_accounts/controller/v1/tx.registry";
import * as _349 from "./applications/transfer/v1/tx.registry";
import * as _350 from "./core/channel/v1/tx.registry";
import * as _351 from "./core/client/v1/tx.registry";
import * as _352 from "./core/connection/v1/tx.registry";
import * as _353 from "./applications/fee/v1/query.rpc.Query";
import * as _354 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _355 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _356 from "./applications/transfer/v1/query.rpc.Query";
import * as _357 from "./core/channel/v1/query.rpc.Query";
import * as _358 from "./core/client/v1/query.rpc.Query";
import * as _359 from "./core/connection/v1/query.rpc.Query";
import * as _360 from "./applications/fee/v1/tx.rpc.msg";
import * as _361 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _362 from "./applications/transfer/v1/tx.rpc.msg";
import * as _363 from "./core/channel/v1/tx.rpc.msg";
import * as _364 from "./core/client/v1/tx.rpc.msg";
import * as _365 from "./core/connection/v1/tx.rpc.msg";
import * as _411 from "./rpc.query";
import * as _412 from "./rpc.tx";
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
export {
  ibc
};
