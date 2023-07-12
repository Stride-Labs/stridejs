import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgSetWithdrawAddress, MsgSetWithdrawAddressResponse, MsgWithdrawDelegatorReward, MsgWithdrawDelegatorRewardResponse, MsgWithdrawValidatorCommission, MsgWithdrawValidatorCommissionResponse, MsgWithdrawTokenizeShareRecordReward, MsgWithdrawTokenizeShareRecordRewardResponse, MsgWithdrawAllTokenizeShareRecordReward, MsgWithdrawAllTokenizeShareRecordRewardResponse, MsgFundCommunityPool, MsgFundCommunityPoolResponse } from "./tx";
/** Msg defines the RPC service */

export interface Msg {
  setWithdrawAddress(request: MsgSetWithdrawAddress): Promise<MsgSetWithdrawAddressResponse>;
  /*SetWithdrawAddress defines a method to change the withdraw address
   for a delegator (or validator self-delegation).*/

  withdrawDelegatorReward(request: MsgWithdrawDelegatorReward): Promise<MsgWithdrawDelegatorRewardResponse>;
  /*WithdrawDelegatorReward defines a method to withdraw rewards of delegator
   from a single validator.*/

  withdrawValidatorCommission(request: MsgWithdrawValidatorCommission): Promise<MsgWithdrawValidatorCommissionResponse>;
  /*WithdrawValidatorCommission defines a method to withdraw the
   full commission to the validator address.*/

  withdrawTokenizeShareRecordReward(request: MsgWithdrawTokenizeShareRecordReward): Promise<MsgWithdrawTokenizeShareRecordRewardResponse>;
  /*WithdrawTokenizeShareRecordReward defines a method to withdraw reward for an owning TokenizeShareRecord*/

  withdrawAllTokenizeShareRecordReward(request: MsgWithdrawAllTokenizeShareRecordReward): Promise<MsgWithdrawAllTokenizeShareRecordRewardResponse>;
  /*WithdrawAllTokenizeShareRecordReward defines a method to withdraw reward for all owning TokenizeShareRecord*/

  fundCommunityPool(request: MsgFundCommunityPool): Promise<MsgFundCommunityPoolResponse>;
  /*FundCommunityPool defines a method to allow an account to directly
   fund the community pool.*/

}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.setWithdrawAddress = this.setWithdrawAddress.bind(this);
    this.withdrawDelegatorReward = this.withdrawDelegatorReward.bind(this);
    this.withdrawValidatorCommission = this.withdrawValidatorCommission.bind(this);
    this.withdrawTokenizeShareRecordReward = this.withdrawTokenizeShareRecordReward.bind(this);
    this.withdrawAllTokenizeShareRecordReward = this.withdrawAllTokenizeShareRecordReward.bind(this);
    this.fundCommunityPool = this.fundCommunityPool.bind(this);
  }

  setWithdrawAddress(request: MsgSetWithdrawAddress): Promise<MsgSetWithdrawAddressResponse> {
    const data = MsgSetWithdrawAddress.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Msg", "SetWithdrawAddress", data);
    return promise.then(data => MsgSetWithdrawAddressResponse.decode(new _m0.Reader(data)));
  }

  withdrawDelegatorReward(request: MsgWithdrawDelegatorReward): Promise<MsgWithdrawDelegatorRewardResponse> {
    const data = MsgWithdrawDelegatorReward.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Msg", "WithdrawDelegatorReward", data);
    return promise.then(data => MsgWithdrawDelegatorRewardResponse.decode(new _m0.Reader(data)));
  }

  withdrawValidatorCommission(request: MsgWithdrawValidatorCommission): Promise<MsgWithdrawValidatorCommissionResponse> {
    const data = MsgWithdrawValidatorCommission.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Msg", "WithdrawValidatorCommission", data);
    return promise.then(data => MsgWithdrawValidatorCommissionResponse.decode(new _m0.Reader(data)));
  }

  withdrawTokenizeShareRecordReward(request: MsgWithdrawTokenizeShareRecordReward): Promise<MsgWithdrawTokenizeShareRecordRewardResponse> {
    const data = MsgWithdrawTokenizeShareRecordReward.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Msg", "WithdrawTokenizeShareRecordReward", data);
    return promise.then(data => MsgWithdrawTokenizeShareRecordRewardResponse.decode(new _m0.Reader(data)));
  }

  withdrawAllTokenizeShareRecordReward(request: MsgWithdrawAllTokenizeShareRecordReward): Promise<MsgWithdrawAllTokenizeShareRecordRewardResponse> {
    const data = MsgWithdrawAllTokenizeShareRecordReward.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Msg", "WithdrawAllTokenizeShareRecordReward", data);
    return promise.then(data => MsgWithdrawAllTokenizeShareRecordRewardResponse.decode(new _m0.Reader(data)));
  }

  fundCommunityPool(request: MsgFundCommunityPool): Promise<MsgFundCommunityPoolResponse> {
    const data = MsgFundCommunityPool.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Msg", "FundCommunityPool", data);
    return promise.then(data => MsgFundCommunityPoolResponse.decode(new _m0.Reader(data)));
  }

}