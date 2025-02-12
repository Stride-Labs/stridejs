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
        ..._330,
        ..._336,
        ..._342,
        ..._349
      };
    }
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = {
          ..._142,
          ..._143,
          ..._144,
          ..._331,
          ..._337,
          ..._343,
          ..._350
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
          ..._344
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
        ..._332,
        ..._338,
        ..._345,
        ..._351
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
        ..._333,
        ..._339,
        ..._346,
        ..._352
      };
    }
    export namespace client {
      export const v1 = {
        ..._161,
        ..._162,
        ..._163,
        ..._164,
        ..._334,
        ..._340,
        ..._347,
        ..._353
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
        ..._335,
        ..._341,
        ..._348,
        ..._354
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
    ..._398,
    ..._399
  };
}