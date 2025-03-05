var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var tx_rpc_msg_exports = {};
__export(tx_rpc_msg_exports, {
  MsgClientImpl: () => MsgClientImpl
});
module.exports = __toCommonJS(tx_rpc_msg_exports);
var import_binary = require("../../binary");
var import_tx = require("./tx");
class MsgClientImpl {
  rpc;
  constructor(rpc) {
    this.rpc = rpc;
    this.placeBid = this.placeBid.bind(this);
    this.createAuction = this.createAuction.bind(this);
    this.updateAuction = this.updateAuction.bind(this);
  }
  placeBid(request) {
    const data = import_tx.MsgPlaceBid.encode(request).finish();
    const promise = this.rpc.request("stride.auction.Msg", "PlaceBid", data);
    return promise.then((data2) => import_tx.MsgPlaceBidResponse.decode(new import_binary.BinaryReader(data2)));
  }
  createAuction(request) {
    const data = import_tx.MsgCreateAuction.encode(request).finish();
    const promise = this.rpc.request("stride.auction.Msg", "CreateAuction", data);
    return promise.then((data2) => import_tx.MsgCreateAuctionResponse.decode(new import_binary.BinaryReader(data2)));
  }
  updateAuction(request) {
    const data = import_tx.MsgUpdateAuction.encode(request).finish();
    const promise = this.rpc.request("stride.auction.Msg", "UpdateAuction", data);
    return promise.then((data2) => import_tx.MsgUpdateAuctionResponse.decode(new import_binary.BinaryReader(data2)));
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  MsgClientImpl
});
