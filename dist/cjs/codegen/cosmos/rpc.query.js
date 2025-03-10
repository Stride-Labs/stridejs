var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var rpc_query_exports = {};
__export(rpc_query_exports, {
  createRPCQueryClient: () => createRPCQueryClient
});
module.exports = __toCommonJS(rpc_query_exports);
var import_tendermint_rpc = require("@cosmjs/tendermint-rpc");
var import_stargate = require("@cosmjs/stargate");
const createRPCQueryClient = async ({
  rpcEndpoint
}) => {
  const tmClient = await import_tendermint_rpc.Tendermint34Client.connect(rpcEndpoint);
  const client = new import_stargate.QueryClient(tmClient);
  return {
    cosmos: {
      app: {
        v1alpha1: (await import("./app/v1alpha1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      auth: {
        v1beta1: (await import("./auth/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      authz: {
        v1beta1: (await import("./authz/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      autocli: {
        v1: (await import("./autocli/v1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      bank: {
        v1beta1: (await import("./bank/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      base: {
        node: {
          v1beta1: (await import("./base/node/v1beta1/query.rpc.Service")).createRpcQueryExtension(client)
        },
        tendermint: {
          v1beta1: (await import("./base/tendermint/v1beta1/query.rpc.Service")).createRpcQueryExtension(client)
        }
      },
      consensus: {
        v1: (await import("./consensus/v1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      distribution: {
        v1beta1: (await import("./distribution/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      evidence: {
        v1beta1: (await import("./evidence/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      feegrant: {
        v1beta1: (await import("./feegrant/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      gov: {
        v1: (await import("./gov/v1/query.rpc.Query")).createRpcQueryExtension(client),
        v1beta1: (await import("./gov/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      group: {
        v1: (await import("./group/v1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      mint: {
        v1beta1: (await import("./mint/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      nft: {
        v1beta1: (await import("./nft/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      orm: {
        query: {
          v1alpha1: (await import("./orm/query/v1alpha1/query.rpc.Query")).createRpcQueryExtension(client)
        }
      },
      params: {
        v1beta1: (await import("./params/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      slashing: {
        v1beta1: (await import("./slashing/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      staking: {
        v1beta1: (await import("./staking/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      tx: {
        v1beta1: (await import("./tx/v1beta1/service.rpc.Service")).createRpcQueryExtension(client)
      },
      upgrade: {
        v1beta1: (await import("./upgrade/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      }
    }
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createRPCQueryClient
});
