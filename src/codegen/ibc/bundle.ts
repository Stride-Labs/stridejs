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
import * as _339 from "./applications/fee/v1/tx.amino";
import * as _340 from "./applications/interchain_accounts/controller/v1/tx.amino";
import * as _341 from "./applications/transfer/v1/tx.amino";
import * as _342 from "./core/channel/v1/tx.amino";
import * as _343 from "./core/client/v1/tx.amino";
import * as _344 from "./core/connection/v1/tx.amino";
import * as _345 from "./applications/fee/v1/tx.registry";
import * as _346 from "./applications/interchain_accounts/controller/v1/tx.registry";
import * as _347 from "./applications/transfer/v1/tx.registry";
import * as _348 from "./core/channel/v1/tx.registry";
import * as _349 from "./core/client/v1/tx.registry";
import * as _350 from "./core/connection/v1/tx.registry";
import * as _351 from "./applications/fee/v1/query.lcd";
import * as _352 from "./applications/interchain_accounts/controller/v1/query.lcd";
import * as _353 from "./applications/interchain_accounts/host/v1/query.lcd";
import * as _354 from "./applications/transfer/v1/query.lcd";
import * as _355 from "./core/channel/v1/query.lcd";
import * as _356 from "./core/client/v1/query.lcd";
import * as _357 from "./core/connection/v1/query.lcd";
import * as _358 from "./applications/fee/v1/query.rpc.Query";
import * as _359 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _360 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _361 from "./applications/transfer/v1/query.rpc.Query";
import * as _362 from "./core/channel/v1/query.rpc.Query";
import * as _363 from "./core/client/v1/query.rpc.Query";
import * as _364 from "./core/connection/v1/query.rpc.Query";
import * as _365 from "./applications/fee/v1/tx.rpc.msg";
import * as _366 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _367 from "./applications/transfer/v1/tx.rpc.msg";
import * as _368 from "./core/channel/v1/tx.rpc.msg";
import * as _369 from "./core/client/v1/tx.rpc.msg";
import * as _370 from "./core/connection/v1/tx.rpc.msg";
import * as _417 from "./lcd";
import * as _418 from "./rpc.query";
import * as _419 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace fee {
      export const v1 = {
        ..._136,
        ..._137,
        ..._138,
        ..._139,
        ..._140,
        ..._141,
        ..._339,
        ..._345,
        ..._351,
        ..._358,
        ..._365
      };
    }
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = {
          ..._142,
          ..._143,
          ..._144,
          ..._340,
          ..._346,
          ..._352,
          ..._359,
          ..._366
        };
      }
      export namespace genesis {
        export const v1 = {
          ..._145
        };
      }
      export namespace host {
        export const v1 = {
          ..._146,
          ..._147,
          ..._353,
          ..._360
        };
      }
      export const v1 = {
        ..._148,
        ..._149,
        ..._150
      };
    }
    export namespace transfer {
      export const v1 = {
        ..._151,
        ..._152,
        ..._153,
        ..._154,
        ..._155,
        ..._341,
        ..._347,
        ..._354,
        ..._361,
        ..._367
      };
      export const v2 = {
        ..._156
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._157,
        ..._158,
        ..._159,
        ..._160,
        ..._342,
        ..._348,
        ..._355,
        ..._362,
        ..._368
      };
    }
    export namespace client {
      export const v1 = {
        ..._161,
        ..._162,
        ..._163,
        ..._164,
        ..._343,
        ..._349,
        ..._356,
        ..._363,
        ..._369
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._165
      };
    }
    export namespace connection {
      export const v1 = {
        ..._166,
        ..._167,
        ..._168,
        ..._169,
        ..._344,
        ..._350,
        ..._357,
        ..._364,
        ..._370
      };
    }
    export namespace types {
      export const v1 = {
        ..._170
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v2 = {
        ..._171
      };
    }
    export namespace solomachine {
      export const v2 = {
        ..._172
      };
      export const v3 = {
        ..._173
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._174
      };
    }
  }
  export const ClientFactory = {
    ..._417,
    ..._418,
    ..._419
  };
}