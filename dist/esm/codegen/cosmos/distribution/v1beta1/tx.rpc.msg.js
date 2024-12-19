import { BinaryReader } from "../../../binary";
import { MsgSetWithdrawAddress, MsgSetWithdrawAddressResponse, MsgWithdrawDelegatorReward, MsgWithdrawDelegatorRewardResponse, MsgWithdrawValidatorCommission, MsgWithdrawValidatorCommissionResponse, MsgWithdrawTokenizeShareRecordReward, MsgWithdrawTokenizeShareRecordRewardResponse, MsgWithdrawAllTokenizeShareRecordReward, MsgWithdrawAllTokenizeShareRecordRewardResponse, MsgFundCommunityPool, MsgFundCommunityPoolResponse } from "./tx";
class MsgClientImpl {
  rpc;
  constructor(rpc) {
    this.rpc = rpc;
    this.setWithdrawAddress = this.setWithdrawAddress.bind(this);
    this.withdrawDelegatorReward = this.withdrawDelegatorReward.bind(this);
    this.withdrawValidatorCommission = this.withdrawValidatorCommission.bind(this);
    this.withdrawTokenizeShareRecordReward = this.withdrawTokenizeShareRecordReward.bind(this);
    this.withdrawAllTokenizeShareRecordReward = this.withdrawAllTokenizeShareRecordReward.bind(this);
    this.fundCommunityPool = this.fundCommunityPool.bind(this);
  }
  setWithdrawAddress(request) {
    const data = MsgSetWithdrawAddress.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Msg", "SetWithdrawAddress", data);
    return promise.then((data2) => MsgSetWithdrawAddressResponse.decode(new BinaryReader(data2)));
  }
  withdrawDelegatorReward(request) {
    const data = MsgWithdrawDelegatorReward.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Msg", "WithdrawDelegatorReward", data);
    return promise.then((data2) => MsgWithdrawDelegatorRewardResponse.decode(new BinaryReader(data2)));
  }
  withdrawValidatorCommission(request) {
    const data = MsgWithdrawValidatorCommission.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Msg", "WithdrawValidatorCommission", data);
    return promise.then((data2) => MsgWithdrawValidatorCommissionResponse.decode(new BinaryReader(data2)));
  }
  withdrawTokenizeShareRecordReward(request) {
    const data = MsgWithdrawTokenizeShareRecordReward.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Msg", "WithdrawTokenizeShareRecordReward", data);
    return promise.then((data2) => MsgWithdrawTokenizeShareRecordRewardResponse.decode(new BinaryReader(data2)));
  }
  withdrawAllTokenizeShareRecordReward(request) {
    const data = MsgWithdrawAllTokenizeShareRecordReward.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Msg", "WithdrawAllTokenizeShareRecordReward", data);
    return promise.then((data2) => MsgWithdrawAllTokenizeShareRecordRewardResponse.decode(new BinaryReader(data2)));
  }
  fundCommunityPool(request) {
    const data = MsgFundCommunityPool.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Msg", "FundCommunityPool", data);
    return promise.then((data2) => MsgFundCommunityPoolResponse.decode(new BinaryReader(data2)));
  }
}
export {
  MsgClientImpl
};
