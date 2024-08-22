import * as _124 from "./airdrop/airdrop";
import * as _125 from "./airdrop/genesis";
import * as _126 from "./airdrop/query";
import * as _127 from "./airdrop/tx";
import * as _128 from "./autopilot/genesis";
import * as _129 from "./autopilot/params";
import * as _130 from "./autopilot/query";
import * as _131 from "./claim/claim";
import * as _132 from "./claim/genesis";
import * as _133 from "./claim/params";
import * as _134 from "./claim/query";
import * as _135 from "./claim/tx";
import * as _136 from "./epochs/genesis";
import * as _137 from "./epochs/query";
import * as _138 from "./icacallbacks/callback_data";
import * as _139 from "./icacallbacks/genesis";
import * as _140 from "./icacallbacks/packet";
import * as _141 from "./icacallbacks/params";
import * as _142 from "./icacallbacks/query";
import * as _143 from "./icacallbacks/tx";
import * as _144 from "./icaoracle/callbacks";
import * as _145 from "./icaoracle/contract";
import * as _146 from "./icaoracle/genesis";
import * as _147 from "./icaoracle/icaoracle";
import * as _148 from "./icaoracle/query";
import * as _149 from "./icaoracle/tx";
import * as _150 from "./interchainquery/v1/genesis";
import * as _151 from "./interchainquery/v1/messages";
import * as _152 from "./interchainquery/v1/query";
import * as _153 from "./mint/v1beta1/genesis";
import * as _154 from "./mint/v1beta1/mint";
import * as _155 from "./mint/v1beta1/query";
import * as _156 from "./records/callbacks";
import * as _157 from "./records/genesis";
import * as _158 from "./records/params";
import * as _159 from "./records/query";
import * as _160 from "./records/records";
import * as _161 from "./stakedym/genesis";
import * as _162 from "./stakedym/query";
import * as _163 from "./stakedym/stakedym";
import * as _164 from "./stakedym/tx";
import * as _165 from "./stakeibc/address_unbonding";
import * as _166 from "./stakeibc/callbacks";
import * as _167 from "./stakeibc/epoch_tracker";
import * as _168 from "./stakeibc/genesis";
import * as _169 from "./stakeibc/gov";
import * as _170 from "./stakeibc/host_zone";
import * as _171 from "./stakeibc/ica_account";
import * as _172 from "./stakeibc/packet";
import * as _173 from "./stakeibc/params";
import * as _174 from "./stakeibc/query";
import * as _175 from "./stakeibc/trade_route";
import * as _176 from "./stakeibc/tx";
import * as _177 from "./stakeibc/validator";
import * as _178 from "./staketia/genesis";
import * as _179 from "./staketia/query";
import * as _180 from "./staketia/staketia";
import * as _181 from "./staketia/tx";
import * as _182 from "./vesting/tx";
import * as _183 from "./vesting/vesting";
import * as _265 from "./airdrop/tx.amino";
import * as _266 from "./claim/tx.amino";
import * as _267 from "./icaoracle/tx.amino";
import * as _268 from "./interchainquery/v1/messages.amino";
import * as _269 from "./stakedym/tx.amino";
import * as _270 from "./stakeibc/tx.amino";
import * as _271 from "./staketia/tx.amino";
import * as _272 from "./airdrop/tx.registry";
import * as _273 from "./claim/tx.registry";
import * as _274 from "./icaoracle/tx.registry";
import * as _275 from "./interchainquery/v1/messages.registry";
import * as _276 from "./stakedym/tx.registry";
import * as _277 from "./stakeibc/tx.registry";
import * as _278 from "./staketia/tx.registry";
import * as _279 from "./airdrop/query.rpc.Query";
import * as _280 from "./autopilot/query.rpc.Query";
import * as _281 from "./claim/query.rpc.Query";
import * as _282 from "./epochs/query.rpc.Query";
import * as _283 from "./icacallbacks/query.rpc.Query";
import * as _284 from "./icaoracle/query.rpc.Query";
import * as _285 from "./mint/v1beta1/query.rpc.Query";
import * as _286 from "./records/query.rpc.Query";
import * as _287 from "./stakedym/query.rpc.Query";
import * as _288 from "./stakeibc/query.rpc.Query";
import * as _289 from "./staketia/query.rpc.Query";
import * as _290 from "./airdrop/tx.rpc.msg";
import * as _291 from "./claim/tx.rpc.msg";
import * as _292 from "./icaoracle/tx.rpc.msg";
import * as _293 from "./interchainquery/v1/messages.rpc.msg";
import * as _294 from "./stakedym/tx.rpc.msg";
import * as _295 from "./stakeibc/tx.rpc.msg";
import * as _296 from "./staketia/tx.rpc.msg";
import * as _301 from "./rpc.query";
import * as _302 from "./rpc.tx";
export namespace stride {
  export const airdrop = {
    ..._124,
    ..._125,
    ..._126,
    ..._127,
    ..._265,
    ..._272,
    ..._279,
    ..._290
  };
  export const autopilot = {
    ..._128,
    ..._129,
    ..._130,
    ..._280
  };
  export const claim = {
    ..._131,
    ..._132,
    ..._133,
    ..._134,
    ..._135,
    ..._266,
    ..._273,
    ..._281,
    ..._291
  };
  export const epochs = {
    ..._136,
    ..._137,
    ..._282
  };
  export const icacallbacks = {
    ..._138,
    ..._139,
    ..._140,
    ..._141,
    ..._142,
    ..._143,
    ..._283
  };
  export const icaoracle = {
    ..._144,
    ..._145,
    ..._146,
    ..._147,
    ..._148,
    ..._149,
    ..._267,
    ..._274,
    ..._284,
    ..._292
  };
  export namespace interchainquery {
    export const v1 = {
      ..._150,
      ..._151,
      ..._152,
      ..._268,
      ..._275,
      ..._293
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._153,
      ..._154,
      ..._155,
      ..._285
    };
  }
  export const records = {
    ..._156,
    ..._157,
    ..._158,
    ..._159,
    ..._160,
    ..._286
  };
  export const stakedym = {
    ..._161,
    ..._162,
    ..._163,
    ..._164,
    ..._269,
    ..._276,
    ..._287,
    ..._294
  };
  export const stakeibc = {
    ..._165,
    ..._166,
    ..._167,
    ..._168,
    ..._169,
    ..._170,
    ..._171,
    ..._172,
    ..._173,
    ..._174,
    ..._175,
    ..._176,
    ..._177,
    ..._270,
    ..._277,
    ..._288,
    ..._295
  };
  export const staketia = {
    ..._178,
    ..._179,
    ..._180,
    ..._181,
    ..._271,
    ..._278,
    ..._289,
    ..._296
  };
  export const vesting = {
    ..._182,
    ..._183
  };
  export const ClientFactory = {
    ..._301,
    ..._302
  };
}