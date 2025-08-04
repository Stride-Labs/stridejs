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
import * as _364 from "./applications/fee/v1/tx.amino";
import * as _365 from "./applications/interchain_accounts/controller/v1/tx.amino";
import * as _366 from "./applications/interchain_accounts/host/v1/tx.amino";
import * as _367 from "./applications/transfer/v1/tx.amino";
import * as _368 from "./core/channel/v1/tx.amino";
import * as _369 from "./core/client/v1/tx.amino";
import * as _370 from "./core/connection/v1/tx.amino";
import * as _371 from "./lightclients/wasm/v1/tx.amino";
import * as _372 from "./applications/fee/v1/tx.registry";
import * as _373 from "./applications/interchain_accounts/controller/v1/tx.registry";
import * as _374 from "./applications/interchain_accounts/host/v1/tx.registry";
import * as _375 from "./applications/transfer/v1/tx.registry";
import * as _376 from "./core/channel/v1/tx.registry";
import * as _377 from "./core/client/v1/tx.registry";
import * as _378 from "./core/connection/v1/tx.registry";
import * as _379 from "./lightclients/wasm/v1/tx.registry";
import * as _380 from "./applications/fee/v1/query.rpc.Query";
import * as _381 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _382 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _383 from "./applications/transfer/v1/query.rpc.Query";
import * as _384 from "./core/channel/v1/query.rpc.Query";
import * as _385 from "./core/client/v1/query.rpc.Query";
import * as _386 from "./core/connection/v1/query.rpc.Query";
import * as _387 from "./lightclients/wasm/v1/query.rpc.Query";
import * as _388 from "./applications/fee/v1/tx.rpc.msg";
import * as _389 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _390 from "./applications/interchain_accounts/host/v1/tx.rpc.msg";
import * as _391 from "./applications/transfer/v1/tx.rpc.msg";
import * as _392 from "./core/channel/v1/tx.rpc.msg";
import * as _393 from "./core/client/v1/tx.rpc.msg";
import * as _394 from "./core/connection/v1/tx.rpc.msg";
import * as _395 from "./lightclients/wasm/v1/tx.rpc.msg";
import * as _443 from "./rpc.query";
import * as _444 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace fee {
      export const v1 = {
        ..._154,
        ..._155,
        ..._156,
        ..._157,
        ..._158,
        ..._159,
        ..._364,
        ..._372,
        ..._380,
        ..._388
      };
    }
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = {
          ..._160,
          ..._161,
          ..._162,
          ..._365,
          ..._373,
          ..._381,
          ..._389
        };
      }
      export namespace genesis {
        export const v1 = {
          ..._163
        };
      }
      export namespace host {
        export const v1 = {
          ..._164,
          ..._165,
          ..._166,
          ..._366,
          ..._374,
          ..._382,
          ..._390
        };
      }
      export const v1 = {
        ..._167,
        ..._168,
        ..._169
      };
    }
    export namespace transfer {
      export const v1 = {
        ..._170,
        ..._171,
        ..._172,
        ..._173,
        ..._174,
        ..._367,
        ..._375,
        ..._383,
        ..._391
      };
      export const v2 = {
        ..._175
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._176,
        ..._177,
        ..._178,
        ..._179,
        ..._180,
        ..._368,
        ..._376,
        ..._384,
        ..._392
      };
    }
    export namespace client {
      export const v1 = {
        ..._181,
        ..._182,
        ..._183,
        ..._184,
        ..._369,
        ..._377,
        ..._385,
        ..._393
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._185
      };
    }
    export namespace connection {
      export const v1 = {
        ..._186,
        ..._187,
        ..._188,
        ..._189,
        ..._370,
        ..._378,
        ..._386,
        ..._394
      };
    }
    export namespace types {
      export const v1 = {
        ..._190
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v2 = {
        ..._191
      };
    }
    export namespace solomachine {
      export const v2 = {
        ..._192
      };
      export const v3 = {
        ..._193
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._194
      };
    }
    export namespace wasm {
      export const v1 = {
        ..._195,
        ..._196,
        ..._197,
        ..._198,
        ..._371,
        ..._379,
        ..._387,
        ..._395
      };
    }
  }
  export const ClientFactory = {
    ..._443,
    ..._444
  };
}