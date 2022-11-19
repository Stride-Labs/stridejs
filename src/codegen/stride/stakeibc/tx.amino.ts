import { iCAAccountTypeFromJSON } from "./ica_account";
import { AminoMsg } from "@cosmjs/amino";
import { Long } from "@osmonauts/helpers";
import { MsgLiquidStake, MsgRedeemStake, MsgRegisterHostZone, MsgClaimUndelegatedTokens, MsgRebalanceValidators, MsgAddValidator, MsgChangeValidatorWeight, MsgDeleteValidator, MsgRestoreInterchainAccount, MsgUpdateValidatorSharesExchRate, MsgClearBalance } from "./tx";
export interface AminoMsgLiquidStake extends AminoMsg {
  type: "/stride.stakeibc.MsgLiquidStake";
  value: {
    creator: string;
    amount: string;
    host_denom: string;
  };
}
export interface AminoMsgRedeemStake extends AminoMsg {
  type: "/stride.stakeibc.MsgRedeemStake";
  value: {
    creator: string;
    amount: string;
    host_zone: string;
    receiver: string;
  };
}
export interface AminoMsgRegisterHostZone extends AminoMsg {
  type: "/stride.stakeibc.MsgRegisterHostZone";
  value: {
    connection_id: string;
    bech32prefix: string;
    host_denom: string;
    ibc_denom: string;
    creator: string;
    transfer_channel_id: string;
    unbonding_frequency: string;
  };
}
export interface AminoMsgClaimUndelegatedTokens extends AminoMsg {
  type: "/stride.stakeibc.MsgClaimUndelegatedTokens";
  value: {
    creator: string;
    host_zone_id: string;
    epoch: string;
    sender: string;
  };
}
export interface AminoMsgRebalanceValidators extends AminoMsg {
  type: "/stride.stakeibc.MsgRebalanceValidators";
  value: {
    creator: string;
    host_zone: string;
    num_rebalance: string;
  };
}
export interface AminoMsgAddValidator extends AminoMsg {
  type: "/stride.stakeibc.MsgAddValidator";
  value: {
    creator: string;
    host_zone: string;
    name: string;
    address: string;
    commission: string;
    weight: string;
  };
}
export interface AminoMsgChangeValidatorWeight extends AminoMsg {
  type: "/stride.stakeibc.MsgChangeValidatorWeight";
  value: {
    creator: string;
    host_zone: string;
    val_addr: string;
    weight: string;
  };
}
export interface AminoMsgDeleteValidator extends AminoMsg {
  type: "/stride.stakeibc.MsgDeleteValidator";
  value: {
    creator: string;
    host_zone: string;
    val_addr: string;
  };
}
export interface AminoMsgRestoreInterchainAccount extends AminoMsg {
  type: "/stride.stakeibc.MsgRestoreInterchainAccount";
  value: {
    creator: string;
    chain_id: string;
    account_type: number;
  };
}
export interface AminoMsgUpdateValidatorSharesExchRate extends AminoMsg {
  type: "/stride.stakeibc.MsgUpdateValidatorSharesExchRate";
  value: {
    creator: string;
    chain_id: string;
    valoper: string;
  };
}
export interface AminoMsgClearBalance extends AminoMsg {
  type: "/stride.stakeibc.MsgClearBalance";
  value: {
    creator: string;
    chain_id: string;
    amount: string;
    channel: string;
  };
}
export const AminoConverter = {
  "/stride.stakeibc.MsgLiquidStake": {
    aminoType: "/stride.stakeibc.MsgLiquidStake",
    toAmino: ({
      creator,
      amount,
      hostDenom
    }: MsgLiquidStake): AminoMsgLiquidStake["value"] => {
      return {
        creator,
        amount: amount.toString(),
        host_denom: hostDenom
      };
    },
    fromAmino: ({
      creator,
      amount,
      host_denom
    }: AminoMsgLiquidStake["value"]): MsgLiquidStake => {
      return {
        creator,
        amount: Long.fromString(amount),
        hostDenom: host_denom
      };
    }
  },
  "/stride.stakeibc.MsgRedeemStake": {
    aminoType: "/stride.stakeibc.MsgRedeemStake",
    toAmino: ({
      creator,
      amount,
      hostZone,
      receiver
    }: MsgRedeemStake): AminoMsgRedeemStake["value"] => {
      return {
        creator,
        amount: amount.toString(),
        host_zone: hostZone,
        receiver
      };
    },
    fromAmino: ({
      creator,
      amount,
      host_zone,
      receiver
    }: AminoMsgRedeemStake["value"]): MsgRedeemStake => {
      return {
        creator,
        amount: Long.fromString(amount),
        hostZone: host_zone,
        receiver
      };
    }
  },
  "/stride.stakeibc.MsgRegisterHostZone": {
    aminoType: "/stride.stakeibc.MsgRegisterHostZone",
    toAmino: ({
      connectionId,
      bech32prefix,
      hostDenom,
      ibcDenom,
      creator,
      transferChannelId,
      unbondingFrequency
    }: MsgRegisterHostZone): AminoMsgRegisterHostZone["value"] => {
      return {
        connection_id: connectionId,
        bech32prefix,
        host_denom: hostDenom,
        ibc_denom: ibcDenom,
        creator,
        transfer_channel_id: transferChannelId,
        unbonding_frequency: unbondingFrequency.toString()
      };
    },
    fromAmino: ({
      connection_id,
      bech32prefix,
      host_denom,
      ibc_denom,
      creator,
      transfer_channel_id,
      unbonding_frequency
    }: AminoMsgRegisterHostZone["value"]): MsgRegisterHostZone => {
      return {
        connectionId: connection_id,
        bech32prefix,
        hostDenom: host_denom,
        ibcDenom: ibc_denom,
        creator,
        transferChannelId: transfer_channel_id,
        unbondingFrequency: Long.fromString(unbonding_frequency)
      };
    }
  },
  "/stride.stakeibc.MsgClaimUndelegatedTokens": {
    aminoType: "/stride.stakeibc.MsgClaimUndelegatedTokens",
    toAmino: ({
      creator,
      hostZoneId,
      epoch,
      sender
    }: MsgClaimUndelegatedTokens): AminoMsgClaimUndelegatedTokens["value"] => {
      return {
        creator,
        host_zone_id: hostZoneId,
        epoch: epoch.toString(),
        sender
      };
    },
    fromAmino: ({
      creator,
      host_zone_id,
      epoch,
      sender
    }: AminoMsgClaimUndelegatedTokens["value"]): MsgClaimUndelegatedTokens => {
      return {
        creator,
        hostZoneId: host_zone_id,
        epoch: Long.fromString(epoch),
        sender
      };
    }
  },
  "/stride.stakeibc.MsgRebalanceValidators": {
    aminoType: "/stride.stakeibc.MsgRebalanceValidators",
    toAmino: ({
      creator,
      hostZone,
      numRebalance
    }: MsgRebalanceValidators): AminoMsgRebalanceValidators["value"] => {
      return {
        creator,
        host_zone: hostZone,
        num_rebalance: numRebalance.toString()
      };
    },
    fromAmino: ({
      creator,
      host_zone,
      num_rebalance
    }: AminoMsgRebalanceValidators["value"]): MsgRebalanceValidators => {
      return {
        creator,
        hostZone: host_zone,
        numRebalance: Long.fromString(num_rebalance)
      };
    }
  },
  "/stride.stakeibc.MsgAddValidator": {
    aminoType: "/stride.stakeibc.MsgAddValidator",
    toAmino: ({
      creator,
      hostZone,
      name,
      address,
      commission,
      weight
    }: MsgAddValidator): AminoMsgAddValidator["value"] => {
      return {
        creator,
        host_zone: hostZone,
        name,
        address,
        commission: commission.toString(),
        weight: weight.toString()
      };
    },
    fromAmino: ({
      creator,
      host_zone,
      name,
      address,
      commission,
      weight
    }: AminoMsgAddValidator["value"]): MsgAddValidator => {
      return {
        creator,
        hostZone: host_zone,
        name,
        address,
        commission: Long.fromString(commission),
        weight: Long.fromString(weight)
      };
    }
  },
  "/stride.stakeibc.MsgChangeValidatorWeight": {
    aminoType: "/stride.stakeibc.MsgChangeValidatorWeight",
    toAmino: ({
      creator,
      hostZone,
      valAddr,
      weight
    }: MsgChangeValidatorWeight): AminoMsgChangeValidatorWeight["value"] => {
      return {
        creator,
        host_zone: hostZone,
        val_addr: valAddr,
        weight: weight.toString()
      };
    },
    fromAmino: ({
      creator,
      host_zone,
      val_addr,
      weight
    }: AminoMsgChangeValidatorWeight["value"]): MsgChangeValidatorWeight => {
      return {
        creator,
        hostZone: host_zone,
        valAddr: val_addr,
        weight: Long.fromString(weight)
      };
    }
  },
  "/stride.stakeibc.MsgDeleteValidator": {
    aminoType: "/stride.stakeibc.MsgDeleteValidator",
    toAmino: ({
      creator,
      hostZone,
      valAddr
    }: MsgDeleteValidator): AminoMsgDeleteValidator["value"] => {
      return {
        creator,
        host_zone: hostZone,
        val_addr: valAddr
      };
    },
    fromAmino: ({
      creator,
      host_zone,
      val_addr
    }: AminoMsgDeleteValidator["value"]): MsgDeleteValidator => {
      return {
        creator,
        hostZone: host_zone,
        valAddr: val_addr
      };
    }
  },
  "/stride.stakeibc.MsgRestoreInterchainAccount": {
    aminoType: "/stride.stakeibc.MsgRestoreInterchainAccount",
    toAmino: ({
      creator,
      chainId,
      accountType
    }: MsgRestoreInterchainAccount): AminoMsgRestoreInterchainAccount["value"] => {
      return {
        creator,
        chain_id: chainId,
        account_type: accountType
      };
    },
    fromAmino: ({
      creator,
      chain_id,
      account_type
    }: AminoMsgRestoreInterchainAccount["value"]): MsgRestoreInterchainAccount => {
      return {
        creator,
        chainId: chain_id,
        accountType: iCAAccountTypeFromJSON(account_type)
      };
    }
  },
  "/stride.stakeibc.MsgUpdateValidatorSharesExchRate": {
    aminoType: "/stride.stakeibc.MsgUpdateValidatorSharesExchRate",
    toAmino: ({
      creator,
      chainId,
      valoper
    }: MsgUpdateValidatorSharesExchRate): AminoMsgUpdateValidatorSharesExchRate["value"] => {
      return {
        creator,
        chain_id: chainId,
        valoper
      };
    },
    fromAmino: ({
      creator,
      chain_id,
      valoper
    }: AminoMsgUpdateValidatorSharesExchRate["value"]): MsgUpdateValidatorSharesExchRate => {
      return {
        creator,
        chainId: chain_id,
        valoper
      };
    }
  },
  "/stride.stakeibc.MsgClearBalance": {
    aminoType: "/stride.stakeibc.MsgClearBalance",
    toAmino: ({
      creator,
      chainId,
      amount,
      channel
    }: MsgClearBalance): AminoMsgClearBalance["value"] => {
      return {
        creator,
        chain_id: chainId,
        amount: amount.toString(),
        channel
      };
    },
    fromAmino: ({
      creator,
      chain_id,
      amount,
      channel
    }: AminoMsgClearBalance["value"]): MsgClearBalance => {
      return {
        creator,
        chainId: chain_id,
        amount: Long.fromString(amount),
        channel
      };
    }
  }
};