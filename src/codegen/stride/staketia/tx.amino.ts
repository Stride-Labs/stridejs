import { delegationRecordStatusFromJSON, unbondingRecordStatusFromJSON } from "./staketia";
import { AminoMsg } from "@cosmjs/amino";
import { Long } from "@osmonauts/helpers";
import { MsgLiquidStake, MsgRedeemStake, MsgConfirmDelegation, MsgConfirmUndelegation, MsgConfirmUnbondedTokenSweep, MsgAdjustDelegatedBalance, MsgUpdateInnerRedemptionRateBounds, MsgResumeHostZone, MsgRefreshRedemptionRate, MsgOverwriteDelegationRecord, MsgOverwriteUnbondingRecord, MsgOverwriteRedemptionRecord, MsgSetOperatorAddress } from "./tx";
export interface AminoMsgLiquidStake extends AminoMsg {
  type: "staketia/MsgLiquidStake";
  value: {
    staker: string;
    native_amount: string;
  };
}
export interface AminoMsgRedeemStake extends AminoMsg {
  type: "staketia/MsgRedeemStake";
  value: {
    redeemer: string;
    st_token_amount: string;
  };
}
export interface AminoMsgConfirmDelegation extends AminoMsg {
  type: "/stride.staketia.MsgConfirmDelegation";
  value: {
    operator: string;
    record_id: string;
    tx_hash: string;
  };
}
export interface AminoMsgConfirmUndelegation extends AminoMsg {
  type: "/stride.staketia.MsgConfirmUndelegation";
  value: {
    operator: string;
    record_id: string;
    tx_hash: string;
  };
}
export interface AminoMsgConfirmUnbondedTokenSweep extends AminoMsg {
  type: "/stride.staketia.MsgConfirmUnbondedTokenSweep";
  value: {
    operator: string;
    record_id: string;
    tx_hash: string;
  };
}
export interface AminoMsgAdjustDelegatedBalance extends AminoMsg {
  type: "/stride.staketia.MsgAdjustDelegatedBalance";
  value: {
    operator: string;
    delegation_offset: string;
    validator_address: string;
  };
}
export interface AminoMsgUpdateInnerRedemptionRateBounds extends AminoMsg {
  type: "/stride.staketia.MsgUpdateInnerRedemptionRateBounds";
  value: {
    creator: string;
    min_inner_redemption_rate: string;
    max_inner_redemption_rate: string;
  };
}
export interface AminoMsgResumeHostZone extends AminoMsg {
  type: "/stride.staketia.MsgResumeHostZone";
  value: {
    creator: string;
  };
}
export interface AminoMsgRefreshRedemptionRate extends AminoMsg {
  type: "/stride.staketia.MsgRefreshRedemptionRate";
  value: {
    creator: string;
  };
}
export interface AminoMsgOverwriteDelegationRecord extends AminoMsg {
  type: "/stride.staketia.MsgOverwriteDelegationRecord";
  value: {
    creator: string;
    delegation_record: {
      id: string;
      native_amount: string;
      status: number;
      tx_hash: string;
    };
  };
}
export interface AminoMsgOverwriteUnbondingRecord extends AminoMsg {
  type: "/stride.staketia.MsgOverwriteUnbondingRecord";
  value: {
    creator: string;
    unbonding_record: {
      id: string;
      status: number;
      st_token_amount: string;
      native_amount: string;
      unbonding_completion_time_seconds: string;
      undelegation_tx_hash: string;
      unbonded_token_sweep_tx_hash: string;
    };
  };
}
export interface AminoMsgOverwriteRedemptionRecord extends AminoMsg {
  type: "/stride.staketia.MsgOverwriteRedemptionRecord";
  value: {
    creator: string;
    redemption_record: {
      unbonding_record_id: string;
      redeemer: string;
      st_token_amount: string;
      native_amount: string;
    };
  };
}
export interface AminoMsgSetOperatorAddress extends AminoMsg {
  type: "/stride.staketia.MsgSetOperatorAddress";
  value: {
    signer: string;
    operator: string;
  };
}
export const AminoConverter = {
  "/stride.staketia.MsgLiquidStake": {
    aminoType: "staketia/MsgLiquidStake",
    toAmino: ({
      staker,
      nativeAmount
    }: MsgLiquidStake): AminoMsgLiquidStake["value"] => {
      return {
        staker,
        native_amount: nativeAmount
      };
    },
    fromAmino: ({
      staker,
      native_amount
    }: AminoMsgLiquidStake["value"]): MsgLiquidStake => {
      return {
        staker,
        nativeAmount: native_amount
      };
    }
  },
  "/stride.staketia.MsgRedeemStake": {
    aminoType: "staketia/MsgRedeemStake",
    toAmino: ({
      redeemer,
      stTokenAmount
    }: MsgRedeemStake): AminoMsgRedeemStake["value"] => {
      return {
        redeemer,
        st_token_amount: stTokenAmount
      };
    },
    fromAmino: ({
      redeemer,
      st_token_amount
    }: AminoMsgRedeemStake["value"]): MsgRedeemStake => {
      return {
        redeemer,
        stTokenAmount: st_token_amount
      };
    }
  },
  "/stride.staketia.MsgConfirmDelegation": {
    aminoType: "/stride.staketia.MsgConfirmDelegation",
    toAmino: ({
      operator,
      recordId,
      txHash
    }: MsgConfirmDelegation): AminoMsgConfirmDelegation["value"] => {
      return {
        operator,
        record_id: recordId.toString(),
        tx_hash: txHash
      };
    },
    fromAmino: ({
      operator,
      record_id,
      tx_hash
    }: AminoMsgConfirmDelegation["value"]): MsgConfirmDelegation => {
      return {
        operator,
        recordId: Long.fromString(record_id),
        txHash: tx_hash
      };
    }
  },
  "/stride.staketia.MsgConfirmUndelegation": {
    aminoType: "/stride.staketia.MsgConfirmUndelegation",
    toAmino: ({
      operator,
      recordId,
      txHash
    }: MsgConfirmUndelegation): AminoMsgConfirmUndelegation["value"] => {
      return {
        operator,
        record_id: recordId.toString(),
        tx_hash: txHash
      };
    },
    fromAmino: ({
      operator,
      record_id,
      tx_hash
    }: AminoMsgConfirmUndelegation["value"]): MsgConfirmUndelegation => {
      return {
        operator,
        recordId: Long.fromString(record_id),
        txHash: tx_hash
      };
    }
  },
  "/stride.staketia.MsgConfirmUnbondedTokenSweep": {
    aminoType: "/stride.staketia.MsgConfirmUnbondedTokenSweep",
    toAmino: ({
      operator,
      recordId,
      txHash
    }: MsgConfirmUnbondedTokenSweep): AminoMsgConfirmUnbondedTokenSweep["value"] => {
      return {
        operator,
        record_id: recordId.toString(),
        tx_hash: txHash
      };
    },
    fromAmino: ({
      operator,
      record_id,
      tx_hash
    }: AminoMsgConfirmUnbondedTokenSweep["value"]): MsgConfirmUnbondedTokenSweep => {
      return {
        operator,
        recordId: Long.fromString(record_id),
        txHash: tx_hash
      };
    }
  },
  "/stride.staketia.MsgAdjustDelegatedBalance": {
    aminoType: "/stride.staketia.MsgAdjustDelegatedBalance",
    toAmino: ({
      operator,
      delegationOffset,
      validatorAddress
    }: MsgAdjustDelegatedBalance): AminoMsgAdjustDelegatedBalance["value"] => {
      return {
        operator,
        delegation_offset: delegationOffset,
        validator_address: validatorAddress
      };
    },
    fromAmino: ({
      operator,
      delegation_offset,
      validator_address
    }: AminoMsgAdjustDelegatedBalance["value"]): MsgAdjustDelegatedBalance => {
      return {
        operator,
        delegationOffset: delegation_offset,
        validatorAddress: validator_address
      };
    }
  },
  "/stride.staketia.MsgUpdateInnerRedemptionRateBounds": {
    aminoType: "/stride.staketia.MsgUpdateInnerRedemptionRateBounds",
    toAmino: ({
      creator,
      minInnerRedemptionRate,
      maxInnerRedemptionRate
    }: MsgUpdateInnerRedemptionRateBounds): AminoMsgUpdateInnerRedemptionRateBounds["value"] => {
      return {
        creator,
        min_inner_redemption_rate: minInnerRedemptionRate,
        max_inner_redemption_rate: maxInnerRedemptionRate
      };
    },
    fromAmino: ({
      creator,
      min_inner_redemption_rate,
      max_inner_redemption_rate
    }: AminoMsgUpdateInnerRedemptionRateBounds["value"]): MsgUpdateInnerRedemptionRateBounds => {
      return {
        creator,
        minInnerRedemptionRate: min_inner_redemption_rate,
        maxInnerRedemptionRate: max_inner_redemption_rate
      };
    }
  },
  "/stride.staketia.MsgResumeHostZone": {
    aminoType: "/stride.staketia.MsgResumeHostZone",
    toAmino: ({
      creator
    }: MsgResumeHostZone): AminoMsgResumeHostZone["value"] => {
      return {
        creator
      };
    },
    fromAmino: ({
      creator
    }: AminoMsgResumeHostZone["value"]): MsgResumeHostZone => {
      return {
        creator
      };
    }
  },
  "/stride.staketia.MsgRefreshRedemptionRate": {
    aminoType: "/stride.staketia.MsgRefreshRedemptionRate",
    toAmino: ({
      creator
    }: MsgRefreshRedemptionRate): AminoMsgRefreshRedemptionRate["value"] => {
      return {
        creator
      };
    },
    fromAmino: ({
      creator
    }: AminoMsgRefreshRedemptionRate["value"]): MsgRefreshRedemptionRate => {
      return {
        creator
      };
    }
  },
  "/stride.staketia.MsgOverwriteDelegationRecord": {
    aminoType: "/stride.staketia.MsgOverwriteDelegationRecord",
    toAmino: ({
      creator,
      delegationRecord
    }: MsgOverwriteDelegationRecord): AminoMsgOverwriteDelegationRecord["value"] => {
      return {
        creator,
        delegation_record: {
          id: delegationRecord.id.toString(),
          native_amount: delegationRecord.nativeAmount,
          status: delegationRecord.status,
          tx_hash: delegationRecord.txHash
        }
      };
    },
    fromAmino: ({
      creator,
      delegation_record
    }: AminoMsgOverwriteDelegationRecord["value"]): MsgOverwriteDelegationRecord => {
      return {
        creator,
        delegationRecord: {
          id: Long.fromString(delegation_record.id),
          nativeAmount: delegation_record.native_amount,
          status: delegationRecordStatusFromJSON(delegation_record.status),
          txHash: delegation_record.tx_hash
        }
      };
    }
  },
  "/stride.staketia.MsgOverwriteUnbondingRecord": {
    aminoType: "/stride.staketia.MsgOverwriteUnbondingRecord",
    toAmino: ({
      creator,
      unbondingRecord
    }: MsgOverwriteUnbondingRecord): AminoMsgOverwriteUnbondingRecord["value"] => {
      return {
        creator,
        unbonding_record: {
          id: unbondingRecord.id.toString(),
          status: unbondingRecord.status,
          st_token_amount: unbondingRecord.stTokenAmount,
          native_amount: unbondingRecord.nativeAmount,
          unbonding_completion_time_seconds: unbondingRecord.unbondingCompletionTimeSeconds.toString(),
          undelegation_tx_hash: unbondingRecord.undelegationTxHash,
          unbonded_token_sweep_tx_hash: unbondingRecord.unbondedTokenSweepTxHash
        }
      };
    },
    fromAmino: ({
      creator,
      unbonding_record
    }: AminoMsgOverwriteUnbondingRecord["value"]): MsgOverwriteUnbondingRecord => {
      return {
        creator,
        unbondingRecord: {
          id: Long.fromString(unbonding_record.id),
          status: unbondingRecordStatusFromJSON(unbonding_record.status),
          stTokenAmount: unbonding_record.st_token_amount,
          nativeAmount: unbonding_record.native_amount,
          unbondingCompletionTimeSeconds: Long.fromString(unbonding_record.unbonding_completion_time_seconds),
          undelegationTxHash: unbonding_record.undelegation_tx_hash,
          unbondedTokenSweepTxHash: unbonding_record.unbonded_token_sweep_tx_hash
        }
      };
    }
  },
  "/stride.staketia.MsgOverwriteRedemptionRecord": {
    aminoType: "/stride.staketia.MsgOverwriteRedemptionRecord",
    toAmino: ({
      creator,
      redemptionRecord
    }: MsgOverwriteRedemptionRecord): AminoMsgOverwriteRedemptionRecord["value"] => {
      return {
        creator,
        redemption_record: {
          unbonding_record_id: redemptionRecord.unbondingRecordId.toString(),
          redeemer: redemptionRecord.redeemer,
          st_token_amount: redemptionRecord.stTokenAmount,
          native_amount: redemptionRecord.nativeAmount
        }
      };
    },
    fromAmino: ({
      creator,
      redemption_record
    }: AminoMsgOverwriteRedemptionRecord["value"]): MsgOverwriteRedemptionRecord => {
      return {
        creator,
        redemptionRecord: {
          unbondingRecordId: Long.fromString(redemption_record.unbonding_record_id),
          redeemer: redemption_record.redeemer,
          stTokenAmount: redemption_record.st_token_amount,
          nativeAmount: redemption_record.native_amount
        }
      };
    }
  },
  "/stride.staketia.MsgSetOperatorAddress": {
    aminoType: "/stride.staketia.MsgSetOperatorAddress",
    toAmino: ({
      signer,
      operator
    }: MsgSetOperatorAddress): AminoMsgSetOperatorAddress["value"] => {
      return {
        signer,
        operator
      };
    },
    fromAmino: ({
      signer,
      operator
    }: AminoMsgSetOperatorAddress["value"]): MsgSetOperatorAddress => {
      return {
        signer,
        operator
      };
    }
  }
};