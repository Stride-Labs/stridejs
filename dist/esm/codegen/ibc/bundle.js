import * as _154 from "./applications/fee/v1/ack";
import * as _155 from "./applications/fee/v1/fee";
import * as _156 from "./applications/fee/v1/genesis";
import * as _157 from "./applications/fee/v1/metadata";
import * as _158 from "./applications/fee/v1/query";
import * as _159 from "./applications/fee/v1/tx";
import * as _160 from "./applications/interchain_accounts/controller/v1/controller";
import * as _161 from "./applications/interchain_accounts/controller/v1/query";
import * as _162 from "./applications/interchain_accounts/controller/v1/tx";
import * as _163 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _164 from "./applications/interchain_accounts/host/v1/host";
import * as _165 from "./applications/interchain_accounts/host/v1/query";
import * as _166 from "./applications/interchain_accounts/host/v1/tx";
import * as _167 from "./applications/interchain_accounts/v1/account";
import * as _168 from "./applications/interchain_accounts/v1/metadata";
import * as _169 from "./applications/interchain_accounts/v1/packet";
import * as _170 from "./applications/transfer/v1/authz";
import * as _171 from "./applications/transfer/v1/genesis";
import * as _172 from "./applications/transfer/v1/query";
import * as _173 from "./applications/transfer/v1/transfer";
import * as _174 from "./applications/transfer/v1/tx";
import * as _175 from "./applications/transfer/v2/packet";
import * as _176 from "./core/channel/v1/channel";
import * as _177 from "./core/channel/v1/genesis";
import * as _178 from "./core/channel/v1/query";
import * as _179 from "./core/channel/v1/tx";
import * as _180 from "./core/channel/v1/upgrade";
import * as _181 from "./core/client/v1/client";
import * as _182 from "./core/client/v1/genesis";
import * as _183 from "./core/client/v1/query";
import * as _184 from "./core/client/v1/tx";
import * as _185 from "./core/commitment/v1/commitment";
import * as _186 from "./core/connection/v1/connection";
import * as _187 from "./core/connection/v1/genesis";
import * as _188 from "./core/connection/v1/query";
import * as _189 from "./core/connection/v1/tx";
import * as _190 from "./core/types/v1/genesis";
import * as _191 from "./lightclients/localhost/v2/localhost";
import * as _192 from "./lightclients/solomachine/v2/solomachine";
import * as _193 from "./lightclients/solomachine/v3/solomachine";
import * as _194 from "./lightclients/tendermint/v1/tendermint";
import * as _195 from "./lightclients/wasm/v1/genesis";
import * as _196 from "./lightclients/wasm/v1/query";
import * as _197 from "./lightclients/wasm/v1/tx";
import * as _198 from "./lightclients/wasm/v1/wasm";
import * as _365 from "./applications/fee/v1/tx.amino";
import * as _366 from "./applications/interchain_accounts/controller/v1/tx.amino";
import * as _367 from "./applications/interchain_accounts/host/v1/tx.amino";
import * as _368 from "./applications/transfer/v1/tx.amino";
import * as _369 from "./core/channel/v1/tx.amino";
import * as _370 from "./core/client/v1/tx.amino";
import * as _371 from "./core/connection/v1/tx.amino";
import * as _372 from "./lightclients/wasm/v1/tx.amino";
import * as _373 from "./applications/fee/v1/tx.registry";
import * as _374 from "./applications/interchain_accounts/controller/v1/tx.registry";
import * as _375 from "./applications/interchain_accounts/host/v1/tx.registry";
import * as _376 from "./applications/transfer/v1/tx.registry";
import * as _377 from "./core/channel/v1/tx.registry";
import * as _378 from "./core/client/v1/tx.registry";
import * as _379 from "./core/connection/v1/tx.registry";
import * as _380 from "./lightclients/wasm/v1/tx.registry";
import * as _381 from "./applications/fee/v1/query.rpc.Query";
import * as _382 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _383 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _384 from "./applications/transfer/v1/query.rpc.Query";
import * as _385 from "./core/channel/v1/query.rpc.Query";
import * as _386 from "./core/client/v1/query.rpc.Query";
import * as _387 from "./core/connection/v1/query.rpc.Query";
import * as _388 from "./lightclients/wasm/v1/query.rpc.Query";
import * as _389 from "./applications/fee/v1/tx.rpc.msg";
import * as _390 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _391 from "./applications/interchain_accounts/host/v1/tx.rpc.msg";
import * as _392 from "./applications/transfer/v1/tx.rpc.msg";
import * as _393 from "./core/channel/v1/tx.rpc.msg";
import * as _394 from "./core/client/v1/tx.rpc.msg";
import * as _395 from "./core/connection/v1/tx.rpc.msg";
import * as _396 from "./lightclients/wasm/v1/tx.rpc.msg";
import * as _447 from "./rpc.query";
import * as _448 from "./rpc.tx";
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
export {
  ibc
};
