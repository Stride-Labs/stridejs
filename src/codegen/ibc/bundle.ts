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
export namespace ibc {
  export namespace applications {
    export namespace fee {
      export const v1 = {
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
    }
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = {
          ..._90,
          ..._91,
          ..._92,
          ..._250,
          ..._256,
          ..._262,
          ..._269
        };
      }
      export namespace genesis {
        export const v1 = {
          ..._93
        };
      }
      export namespace host {
        export const v1 = {
          ..._94,
          ..._95,
          ..._263
        };
      }
      export const v1 = {
        ..._96,
        ..._97,
        ..._98
      };
    }
    export namespace transfer {
      export const v1 = {
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
      export const v2 = {
        ..._104
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._105,
        ..._106,
        ..._107,
        ..._108,
        ..._252,
        ..._258,
        ..._265,
        ..._271
      };
    }
    export namespace client {
      export const v1 = {
        ..._109,
        ..._110,
        ..._111,
        ..._112,
        ..._253,
        ..._259,
        ..._266,
        ..._272
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._113
      };
    }
    export namespace connection {
      export const v1 = {
        ..._114,
        ..._115,
        ..._116,
        ..._117,
        ..._254,
        ..._260,
        ..._267,
        ..._273
      };
    }
    export namespace types {
      export const v1 = {
        ..._118
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v2 = {
        ..._119
      };
    }
    export namespace solomachine {
      export const v2 = {
        ..._120
      };
      export const v3 = {
        ..._121
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._122
      };
    }
  }
  export const ClientFactory = {
    ..._317,
    ..._318
  };
}