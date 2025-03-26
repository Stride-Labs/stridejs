import * as _148 from "./applications/fee/v1/ack";
import * as _149 from "./applications/fee/v1/fee";
import * as _150 from "./applications/fee/v1/genesis";
import * as _151 from "./applications/fee/v1/metadata";
import * as _152 from "./applications/fee/v1/query";
import * as _153 from "./applications/fee/v1/tx";
import * as _154 from "./applications/interchain_accounts/controller/v1/controller";
import * as _155 from "./applications/interchain_accounts/controller/v1/query";
import * as _156 from "./applications/interchain_accounts/controller/v1/tx";
import * as _157 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _158 from "./applications/interchain_accounts/host/v1/host";
import * as _159 from "./applications/interchain_accounts/host/v1/query";
import * as _160 from "./applications/interchain_accounts/host/v1/tx";
import * as _161 from "./applications/interchain_accounts/v1/account";
import * as _162 from "./applications/interchain_accounts/v1/metadata";
import * as _163 from "./applications/interchain_accounts/v1/packet";
import * as _164 from "./applications/transfer/v1/authz";
import * as _165 from "./applications/transfer/v1/genesis";
import * as _166 from "./applications/transfer/v1/query";
import * as _167 from "./applications/transfer/v1/transfer";
import * as _168 from "./applications/transfer/v1/tx";
import * as _169 from "./applications/transfer/v2/packet";
import * as _170 from "./core/channel/v1/channel";
import * as _171 from "./core/channel/v1/genesis";
import * as _172 from "./core/channel/v1/query";
import * as _173 from "./core/channel/v1/tx";
import * as _174 from "./core/channel/v1/upgrade";
import * as _175 from "./core/client/v1/client";
import * as _176 from "./core/client/v1/genesis";
import * as _177 from "./core/client/v1/query";
import * as _178 from "./core/client/v1/tx";
import * as _179 from "./core/commitment/v1/commitment";
import * as _180 from "./core/connection/v1/connection";
import * as _181 from "./core/connection/v1/genesis";
import * as _182 from "./core/connection/v1/query";
import * as _183 from "./core/connection/v1/tx";
import * as _184 from "./core/types/v1/genesis";
import * as _185 from "./lightclients/localhost/v2/localhost";
import * as _186 from "./lightclients/solomachine/v2/solomachine";
import * as _187 from "./lightclients/solomachine/v3/solomachine";
import * as _188 from "./lightclients/tendermint/v1/tendermint";
import * as _189 from "./lightclients/wasm/v1/genesis";
import * as _190 from "./lightclients/wasm/v1/query";
import * as _191 from "./lightclients/wasm/v1/tx";
import * as _192 from "./lightclients/wasm/v1/wasm";
import * as _354 from "./applications/fee/v1/tx.amino";
import * as _355 from "./applications/interchain_accounts/controller/v1/tx.amino";
import * as _356 from "./applications/interchain_accounts/host/v1/tx.amino";
import * as _357 from "./applications/transfer/v1/tx.amino";
import * as _358 from "./core/channel/v1/tx.amino";
import * as _359 from "./core/client/v1/tx.amino";
import * as _360 from "./core/connection/v1/tx.amino";
import * as _361 from "./lightclients/wasm/v1/tx.amino";
import * as _362 from "./applications/fee/v1/tx.registry";
import * as _363 from "./applications/interchain_accounts/controller/v1/tx.registry";
import * as _364 from "./applications/interchain_accounts/host/v1/tx.registry";
import * as _365 from "./applications/transfer/v1/tx.registry";
import * as _366 from "./core/channel/v1/tx.registry";
import * as _367 from "./core/client/v1/tx.registry";
import * as _368 from "./core/connection/v1/tx.registry";
import * as _369 from "./lightclients/wasm/v1/tx.registry";
import * as _370 from "./applications/fee/v1/query.rpc.Query";
import * as _371 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _372 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _373 from "./applications/transfer/v1/query.rpc.Query";
import * as _374 from "./core/channel/v1/query.rpc.Query";
import * as _375 from "./core/client/v1/query.rpc.Query";
import * as _376 from "./core/connection/v1/query.rpc.Query";
import * as _377 from "./lightclients/wasm/v1/query.rpc.Query";
import * as _378 from "./applications/fee/v1/tx.rpc.msg";
import * as _379 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _380 from "./applications/interchain_accounts/host/v1/tx.rpc.msg";
import * as _381 from "./applications/transfer/v1/tx.rpc.msg";
import * as _382 from "./core/channel/v1/tx.rpc.msg";
import * as _383 from "./core/client/v1/tx.rpc.msg";
import * as _384 from "./core/connection/v1/tx.rpc.msg";
import * as _385 from "./lightclients/wasm/v1/tx.rpc.msg";
import * as _431 from "./rpc.query";
import * as _432 from "./rpc.tx";
var ibc;
((ibc2) => {
  let applications;
  ((applications2) => {
    let fee;
    ((fee2) => {
      fee2.v1 = {
        ..._148,
        ..._149,
        ..._150,
        ..._151,
        ..._152,
        ..._153,
        ..._354,
        ..._362,
        ..._370,
        ..._378
      };
    })(fee = applications2.fee || (applications2.fee = {}));
    let interchain_accounts;
    ((interchain_accounts2) => {
      let controller;
      ((controller2) => {
        controller2.v1 = {
          ..._154,
          ..._155,
          ..._156,
          ..._355,
          ..._363,
          ..._371,
          ..._379
        };
      })(controller = interchain_accounts2.controller || (interchain_accounts2.controller = {}));
      let genesis;
      ((genesis2) => {
        genesis2.v1 = {
          ..._157
        };
      })(genesis = interchain_accounts2.genesis || (interchain_accounts2.genesis = {}));
      let host;
      ((host2) => {
        host2.v1 = {
          ..._158,
          ..._159,
          ..._160,
          ..._356,
          ..._364,
          ..._372,
          ..._380
        };
      })(host = interchain_accounts2.host || (interchain_accounts2.host = {}));
      interchain_accounts2.v1 = {
        ..._161,
        ..._162,
        ..._163
      };
    })(interchain_accounts = applications2.interchain_accounts || (applications2.interchain_accounts = {}));
    let transfer;
    ((transfer2) => {
      transfer2.v1 = {
        ..._164,
        ..._165,
        ..._166,
        ..._167,
        ..._168,
        ..._357,
        ..._365,
        ..._373,
        ..._381
      };
      transfer2.v2 = {
        ..._169
      };
    })(transfer = applications2.transfer || (applications2.transfer = {}));
  })(applications = ibc2.applications || (ibc2.applications = {}));
  let core;
  ((core2) => {
    let channel;
    ((channel2) => {
      channel2.v1 = {
        ..._170,
        ..._171,
        ..._172,
        ..._173,
        ..._174,
        ..._358,
        ..._366,
        ..._374,
        ..._382
      };
    })(channel = core2.channel || (core2.channel = {}));
    let client;
    ((client2) => {
      client2.v1 = {
        ..._175,
        ..._176,
        ..._177,
        ..._178,
        ..._359,
        ..._367,
        ..._375,
        ..._383
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
        ..._360,
        ..._368,
        ..._376,
        ..._384
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
    let wasm;
    ((wasm2) => {
      wasm2.v1 = {
        ..._189,
        ..._190,
        ..._191,
        ..._192,
        ..._361,
        ..._369,
        ..._377,
        ..._385
      };
    })(wasm = lightclients2.wasm || (lightclients2.wasm = {}));
  })(lightclients = ibc2.lightclients || (ibc2.lightclients = {}));
  ibc2.ClientFactory = {
    ..._431,
    ..._432
  };
})(ibc || (ibc = {}));
export {
  ibc
};
