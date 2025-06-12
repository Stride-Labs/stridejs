import { BinaryReader } from "../../../binary";
import { MsgUpdateParams, MsgUpdateParamsResponse, MsgTokenizeShares, MsgTokenizeSharesResponse, MsgRedeemTokensForShares, MsgRedeemTokensForSharesResponse, MsgTransferTokenizeShareRecord, MsgTransferTokenizeShareRecordResponse, MsgDisableTokenizeShares, MsgDisableTokenizeSharesResponse, MsgEnableTokenizeShares, MsgEnableTokenizeSharesResponse, MsgWithdrawTokenizeShareRecordReward, MsgWithdrawTokenizeShareRecordRewardResponse, MsgWithdrawAllTokenizeShareRecordReward, MsgWithdrawAllTokenizeShareRecordRewardResponse } from "./tx";
class MsgClientImpl {
  rpc;
  constructor(rpc) {
    this.rpc = rpc;
    this.updateParams = this.updateParams.bind(this);
    this.tokenizeShares = this.tokenizeShares.bind(this);
    this.redeemTokensForShares = this.redeemTokensForShares.bind(this);
    this.transferTokenizeShareRecord = this.transferTokenizeShareRecord.bind(this);
    this.disableTokenizeShares = this.disableTokenizeShares.bind(this);
    this.enableTokenizeShares = this.enableTokenizeShares.bind(this);
    this.withdrawTokenizeShareRecordReward = this.withdrawTokenizeShareRecordReward.bind(this);
    this.withdrawAllTokenizeShareRecordReward = this.withdrawAllTokenizeShareRecordReward.bind(this);
  }
  updateParams(request) {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("gaia.liquid.v1beta1.Msg", "UpdateParams", data);
    return promise.then((data2) => MsgUpdateParamsResponse.decode(new BinaryReader(data2)));
  }
  tokenizeShares(request) {
    const data = MsgTokenizeShares.encode(request).finish();
    const promise = this.rpc.request("gaia.liquid.v1beta1.Msg", "TokenizeShares", data);
    return promise.then((data2) => MsgTokenizeSharesResponse.decode(new BinaryReader(data2)));
  }
  redeemTokensForShares(request) {
    const data = MsgRedeemTokensForShares.encode(request).finish();
    const promise = this.rpc.request("gaia.liquid.v1beta1.Msg", "RedeemTokensForShares", data);
    return promise.then((data2) => MsgRedeemTokensForSharesResponse.decode(new BinaryReader(data2)));
  }
  transferTokenizeShareRecord(request) {
    const data = MsgTransferTokenizeShareRecord.encode(request).finish();
    const promise = this.rpc.request("gaia.liquid.v1beta1.Msg", "TransferTokenizeShareRecord", data);
    return promise.then((data2) => MsgTransferTokenizeShareRecordResponse.decode(new BinaryReader(data2)));
  }
  disableTokenizeShares(request) {
    const data = MsgDisableTokenizeShares.encode(request).finish();
    const promise = this.rpc.request("gaia.liquid.v1beta1.Msg", "DisableTokenizeShares", data);
    return promise.then((data2) => MsgDisableTokenizeSharesResponse.decode(new BinaryReader(data2)));
  }
  enableTokenizeShares(request) {
    const data = MsgEnableTokenizeShares.encode(request).finish();
    const promise = this.rpc.request("gaia.liquid.v1beta1.Msg", "EnableTokenizeShares", data);
    return promise.then((data2) => MsgEnableTokenizeSharesResponse.decode(new BinaryReader(data2)));
  }
  withdrawTokenizeShareRecordReward(request) {
    const data = MsgWithdrawTokenizeShareRecordReward.encode(request).finish();
    const promise = this.rpc.request("gaia.liquid.v1beta1.Msg", "WithdrawTokenizeShareRecordReward", data);
    return promise.then((data2) => MsgWithdrawTokenizeShareRecordRewardResponse.decode(new BinaryReader(data2)));
  }
  withdrawAllTokenizeShareRecordReward(request) {
    const data = MsgWithdrawAllTokenizeShareRecordReward.encode(request).finish();
    const promise = this.rpc.request("gaia.liquid.v1beta1.Msg", "WithdrawAllTokenizeShareRecordReward", data);
    return promise.then((data2) => MsgWithdrawAllTokenizeShareRecordRewardResponse.decode(new BinaryReader(data2)));
  }
}
export {
  MsgClientImpl
};
