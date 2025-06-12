import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgUpdateParams, MsgUpdateParamsResponse, MsgTokenizeShares, MsgTokenizeSharesResponse, MsgRedeemTokensForShares, MsgRedeemTokensForSharesResponse, MsgTransferTokenizeShareRecord, MsgTransferTokenizeShareRecordResponse, MsgDisableTokenizeShares, MsgDisableTokenizeSharesResponse, MsgEnableTokenizeShares, MsgEnableTokenizeSharesResponse, MsgWithdrawTokenizeShareRecordReward, MsgWithdrawTokenizeShareRecordRewardResponse, MsgWithdrawAllTokenizeShareRecordReward, MsgWithdrawAllTokenizeShareRecordRewardResponse } from "./tx";
/** Msg defines the liquid Msg service. */
export interface Msg {
  /**
   * UpdateParams defines an operation for updating the x/liquid module
   * parameters.
   */
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  /** TokenizeShares defines a method for tokenizing shares from a validator. */
  tokenizeShares(request: MsgTokenizeShares): Promise<MsgTokenizeSharesResponse>;
  /**
   * RedeemTokensForShares defines a method for redeeming tokens from a
   * validator for shares.
   */
  redeemTokensForShares(request: MsgRedeemTokensForShares): Promise<MsgRedeemTokensForSharesResponse>;
  /**
   * TransferTokenizeShareRecord defines a method to transfer ownership of
   * TokenizeShareRecord
   */
  transferTokenizeShareRecord(request: MsgTransferTokenizeShareRecord): Promise<MsgTransferTokenizeShareRecordResponse>;
  /**
   * DisableTokenizeShares defines a method to prevent the tokenization of an
   * addresses stake
   */
  disableTokenizeShares(request: MsgDisableTokenizeShares): Promise<MsgDisableTokenizeSharesResponse>;
  /**
   * EnableTokenizeShares defines a method to re-enable the tokenization of an
   * addresseses stake after it has been disabled
   */
  enableTokenizeShares(request: MsgEnableTokenizeShares): Promise<MsgEnableTokenizeSharesResponse>;
  /**
   * WithdrawTokenizeShareRecordReward defines a method to withdraw reward for
   * an owning TokenizeShareRecord
   */
  withdrawTokenizeShareRecordReward(request: MsgWithdrawTokenizeShareRecordReward): Promise<MsgWithdrawTokenizeShareRecordRewardResponse>;
  /**
   * WithdrawAllTokenizeShareRecordReward defines a method to withdraw reward
   * for all owning TokenizeShareRecord
   */
  withdrawAllTokenizeShareRecordReward(request: MsgWithdrawAllTokenizeShareRecordReward): Promise<MsgWithdrawAllTokenizeShareRecordRewardResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
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
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("gaia.liquid.v1beta1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
  tokenizeShares(request: MsgTokenizeShares): Promise<MsgTokenizeSharesResponse> {
    const data = MsgTokenizeShares.encode(request).finish();
    const promise = this.rpc.request("gaia.liquid.v1beta1.Msg", "TokenizeShares", data);
    return promise.then(data => MsgTokenizeSharesResponse.decode(new BinaryReader(data)));
  }
  redeemTokensForShares(request: MsgRedeemTokensForShares): Promise<MsgRedeemTokensForSharesResponse> {
    const data = MsgRedeemTokensForShares.encode(request).finish();
    const promise = this.rpc.request("gaia.liquid.v1beta1.Msg", "RedeemTokensForShares", data);
    return promise.then(data => MsgRedeemTokensForSharesResponse.decode(new BinaryReader(data)));
  }
  transferTokenizeShareRecord(request: MsgTransferTokenizeShareRecord): Promise<MsgTransferTokenizeShareRecordResponse> {
    const data = MsgTransferTokenizeShareRecord.encode(request).finish();
    const promise = this.rpc.request("gaia.liquid.v1beta1.Msg", "TransferTokenizeShareRecord", data);
    return promise.then(data => MsgTransferTokenizeShareRecordResponse.decode(new BinaryReader(data)));
  }
  disableTokenizeShares(request: MsgDisableTokenizeShares): Promise<MsgDisableTokenizeSharesResponse> {
    const data = MsgDisableTokenizeShares.encode(request).finish();
    const promise = this.rpc.request("gaia.liquid.v1beta1.Msg", "DisableTokenizeShares", data);
    return promise.then(data => MsgDisableTokenizeSharesResponse.decode(new BinaryReader(data)));
  }
  enableTokenizeShares(request: MsgEnableTokenizeShares): Promise<MsgEnableTokenizeSharesResponse> {
    const data = MsgEnableTokenizeShares.encode(request).finish();
    const promise = this.rpc.request("gaia.liquid.v1beta1.Msg", "EnableTokenizeShares", data);
    return promise.then(data => MsgEnableTokenizeSharesResponse.decode(new BinaryReader(data)));
  }
  withdrawTokenizeShareRecordReward(request: MsgWithdrawTokenizeShareRecordReward): Promise<MsgWithdrawTokenizeShareRecordRewardResponse> {
    const data = MsgWithdrawTokenizeShareRecordReward.encode(request).finish();
    const promise = this.rpc.request("gaia.liquid.v1beta1.Msg", "WithdrawTokenizeShareRecordReward", data);
    return promise.then(data => MsgWithdrawTokenizeShareRecordRewardResponse.decode(new BinaryReader(data)));
  }
  withdrawAllTokenizeShareRecordReward(request: MsgWithdrawAllTokenizeShareRecordReward): Promise<MsgWithdrawAllTokenizeShareRecordRewardResponse> {
    const data = MsgWithdrawAllTokenizeShareRecordReward.encode(request).finish();
    const promise = this.rpc.request("gaia.liquid.v1beta1.Msg", "WithdrawAllTokenizeShareRecordReward", data);
    return promise.then(data => MsgWithdrawAllTokenizeShareRecordRewardResponse.decode(new BinaryReader(data)));
  }
}