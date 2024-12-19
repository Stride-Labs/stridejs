import { MsgCreateValidator, MsgEditValidator, MsgDelegate, MsgBeginRedelegate, MsgUndelegate, MsgUnbondValidator, MsgCancelUnbondingDelegation, MsgTokenizeShares, MsgRedeemTokensForShares, MsgTransferTokenizeShareRecord, MsgDisableTokenizeShares, MsgEnableTokenizeShares, MsgValidatorBond } from "./tx";
const AminoConverter = {
  "/cosmos.staking.v1beta1.MsgCreateValidator": {
    aminoType: "cosmos-sdk/MsgCreateValidator",
    toAmino: MsgCreateValidator.toAmino,
    fromAmino: MsgCreateValidator.fromAmino
  },
  "/cosmos.staking.v1beta1.MsgEditValidator": {
    aminoType: "cosmos-sdk/MsgEditValidator",
    toAmino: MsgEditValidator.toAmino,
    fromAmino: MsgEditValidator.fromAmino
  },
  "/cosmos.staking.v1beta1.MsgDelegate": {
    aminoType: "cosmos-sdk/MsgDelegate",
    toAmino: MsgDelegate.toAmino,
    fromAmino: MsgDelegate.fromAmino
  },
  "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
    aminoType: "cosmos-sdk/MsgBeginRedelegate",
    toAmino: MsgBeginRedelegate.toAmino,
    fromAmino: MsgBeginRedelegate.fromAmino
  },
  "/cosmos.staking.v1beta1.MsgUndelegate": {
    aminoType: "cosmos-sdk/MsgUndelegate",
    toAmino: MsgUndelegate.toAmino,
    fromAmino: MsgUndelegate.fromAmino
  },
  "/cosmos.staking.v1beta1.MsgUnbondValidator": {
    aminoType: "cosmos-sdk/MsgUnbondValidator",
    toAmino: MsgUnbondValidator.toAmino,
    fromAmino: MsgUnbondValidator.fromAmino
  },
  "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation": {
    aminoType: "cosmos-sdk/MsgCancelUnbondingDelegation",
    toAmino: MsgCancelUnbondingDelegation.toAmino,
    fromAmino: MsgCancelUnbondingDelegation.fromAmino
  },
  "/cosmos.staking.v1beta1.MsgTokenizeShares": {
    aminoType: "cosmos-sdk/MsgTokenizeShares",
    toAmino: MsgTokenizeShares.toAmino,
    fromAmino: MsgTokenizeShares.fromAmino
  },
  "/cosmos.staking.v1beta1.MsgRedeemTokensForShares": {
    aminoType: "cosmos-sdk/MsgRedeemTokensForShares",
    toAmino: MsgRedeemTokensForShares.toAmino,
    fromAmino: MsgRedeemTokensForShares.fromAmino
  },
  "/cosmos.staking.v1beta1.MsgTransferTokenizeShareRecord": {
    aminoType: "cosmos-sdk/MsgTransferTokenizeShareRecord",
    toAmino: MsgTransferTokenizeShareRecord.toAmino,
    fromAmino: MsgTransferTokenizeShareRecord.fromAmino
  },
  "/cosmos.staking.v1beta1.MsgDisableTokenizeShares": {
    aminoType: "cosmos-sdk/MsgDisableTokenizeShares",
    toAmino: MsgDisableTokenizeShares.toAmino,
    fromAmino: MsgDisableTokenizeShares.fromAmino
  },
  "/cosmos.staking.v1beta1.MsgEnableTokenizeShares": {
    aminoType: "cosmos-sdk/MsgEnableTokenizeShares",
    toAmino: MsgEnableTokenizeShares.toAmino,
    fromAmino: MsgEnableTokenizeShares.fromAmino
  },
  "/cosmos.staking.v1beta1.MsgValidatorBond": {
    aminoType: "cosmos-sdk/MsgValidatorBond",
    toAmino: MsgValidatorBond.toAmino,
    fromAmino: MsgValidatorBond.fromAmino
  }
};
export {
  AminoConverter
};
