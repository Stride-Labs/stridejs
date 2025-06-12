import * as _149 from "./applications/fee/v1/ack";
import * as _150 from "./applications/fee/v1/fee";
import * as _151 from "./applications/fee/v1/genesis";
import * as _152 from "./applications/fee/v1/metadata";
import * as _153 from "./applications/fee/v1/query";
import * as _154 from "./applications/fee/v1/tx";
import * as _155 from "./applications/interchain_accounts/controller/v1/controller";
import * as _156 from "./applications/interchain_accounts/controller/v1/query";
import * as _157 from "./applications/interchain_accounts/controller/v1/tx";
import * as _158 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _159 from "./applications/interchain_accounts/host/v1/host";
import * as _160 from "./applications/interchain_accounts/host/v1/query";
import * as _161 from "./applications/interchain_accounts/host/v1/tx";
import * as _162 from "./applications/interchain_accounts/v1/account";
import * as _163 from "./applications/interchain_accounts/v1/metadata";
import * as _164 from "./applications/interchain_accounts/v1/packet";
import * as _165 from "./applications/transfer/v1/authz";
import * as _166 from "./applications/transfer/v1/genesis";
import * as _167 from "./applications/transfer/v1/query";
import * as _168 from "./applications/transfer/v1/transfer";
import * as _169 from "./applications/transfer/v1/tx";
import * as _170 from "./applications/transfer/v2/packet";
import * as _171 from "./core/channel/v1/channel";
import * as _172 from "./core/channel/v1/genesis";
import * as _173 from "./core/channel/v1/query";
import * as _174 from "./core/channel/v1/tx";
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
import * as _352 from "./applications/fee/v1/tx.amino";
import * as _353 from "./applications/interchain_accounts/controller/v1/tx.amino";
import * as _354 from "./applications/interchain_accounts/host/v1/tx.amino";
import * as _355 from "./applications/transfer/v1/tx.amino";
import * as _356 from "./core/channel/v1/tx.amino";
import * as _357 from "./core/client/v1/tx.amino";
import * as _358 from "./core/connection/v1/tx.amino";
import * as _359 from "./applications/fee/v1/tx.registry";
import * as _360 from "./applications/interchain_accounts/controller/v1/tx.registry";
import * as _361 from "./applications/interchain_accounts/host/v1/tx.registry";
import * as _362 from "./applications/transfer/v1/tx.registry";
import * as _363 from "./core/channel/v1/tx.registry";
import * as _364 from "./core/client/v1/tx.registry";
import * as _365 from "./core/connection/v1/tx.registry";
import * as _366 from "./applications/fee/v1/query.rpc.Query";
import * as _367 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _368 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _369 from "./applications/transfer/v1/query.rpc.Query";
import * as _370 from "./core/channel/v1/query.rpc.Query";
import * as _371 from "./core/client/v1/query.rpc.Query";
import * as _372 from "./core/connection/v1/query.rpc.Query";
import * as _373 from "./applications/fee/v1/tx.rpc.msg";
import * as _374 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _375 from "./applications/interchain_accounts/host/v1/tx.rpc.msg";
import * as _376 from "./applications/transfer/v1/tx.rpc.msg";
import * as _377 from "./core/channel/v1/tx.rpc.msg";
import * as _378 from "./core/client/v1/tx.rpc.msg";
import * as _379 from "./core/connection/v1/tx.rpc.msg";
import * as _427 from "./rpc.query";
import * as _428 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace fee {
      export const v1 = {
        ..._149,
        ..._150,
        ..._151,
        ..._152,
        ..._153,
        ..._154,
        ..._352,
        ..._359,
        ..._366,
        ..._373
      };
    }
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = {
          ..._155,
          ..._156,
          ..._157,
          ..._353,
          ..._360,
          ..._367,
          ..._374
        };
      }
      export namespace genesis {
        export const v1 = {
          ..._158
        };
      }
      export namespace host {
        export const v1 = {
          ..._159,
          ..._160,
          ..._161,
          ..._354,
          ..._361,
          ..._368,
          ..._375
        };
      }
      export const v1 = {
        ..._162,
        ..._163,
        ..._164
      };
    }
    export namespace transfer {
      export const v1 = {
        ..._165,
        ..._166,
        ..._167,
        ..._168,
        ..._169,
        ..._355,
        ..._362,
        ..._369,
        ..._376
      };
      export const v2 = {
        ..._170
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._171,
        ..._172,
        ..._173,
        ..._174,
        ..._356,
        ..._363,
        ..._370,
        ..._377
      };
    }
    export namespace client {
      export const v1 = {
        ..._175,
        ..._176,
        ..._177,
        ..._178,
        ..._357,
        ..._364,
        ..._371,
        ..._378
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._179
      };
    }
    export namespace connection {
      export const v1 = {
        ..._180,
        ..._181,
        ..._182,
        ..._183,
        ..._358,
        ..._365,
        ..._372,
        ..._379
      };
    }
    export namespace types {
      export const v1 = {
        ..._184
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v2 = {
        ..._185
      };
    }
    export namespace solomachine {
      export const v2 = {
        ..._186
      };
      export const v3 = {
        ..._187
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._188
      };
    }
  }
  export const ClientFactory = {
    ..._427,
    ..._428
  };
}