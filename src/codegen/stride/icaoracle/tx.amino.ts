import { AminoMsg } from "@cosmjs/amino";
import { Long } from "@osmonauts/helpers";
import { MsgAddOracle, MsgInstantiateOracle, MsgRestoreOracleICA, MsgToggleOracle, MsgRemoveOracle } from "./tx";
export interface AminoMsgAddOracle extends AminoMsg {
  type: "/stride.icaoracle.MsgAddOracle";
  value: {
    creator: string;
    connection_id: string;
  };
}
export interface AminoMsgInstantiateOracle extends AminoMsg {
  type: "/stride.icaoracle.MsgInstantiateOracle";
  value: {
    creator: string;
    oracle_chain_id: string;
    contract_code_id: string;
    transfer_channel_on_oracle: string;
  };
}
export interface AminoMsgRestoreOracleICA extends AminoMsg {
  type: "/stride.icaoracle.MsgRestoreOracleICA";
  value: {
    creator: string;
    oracle_chain_id: string;
  };
}
export interface AminoMsgToggleOracle extends AminoMsg {
  type: "/stride.icaoracle.MsgToggleOracle";
  value: {
    authority: string;
    oracle_chain_id: string;
    active: boolean;
  };
}
export interface AminoMsgRemoveOracle extends AminoMsg {
  type: "/stride.icaoracle.MsgRemoveOracle";
  value: {
    authority: string;
    oracle_chain_id: string;
  };
}
export const AminoConverter = {
  "/stride.icaoracle.MsgAddOracle": {
    aminoType: "/stride.icaoracle.MsgAddOracle",
    toAmino: ({
      creator,
      connectionId
    }: MsgAddOracle): AminoMsgAddOracle["value"] => {
      return {
        creator,
        connection_id: connectionId
      };
    },
    fromAmino: ({
      creator,
      connection_id
    }: AminoMsgAddOracle["value"]): MsgAddOracle => {
      return {
        creator,
        connectionId: connection_id
      };
    }
  },
  "/stride.icaoracle.MsgInstantiateOracle": {
    aminoType: "/stride.icaoracle.MsgInstantiateOracle",
    toAmino: ({
      creator,
      oracleChainId,
      contractCodeId,
      transferChannelOnOracle
    }: MsgInstantiateOracle): AminoMsgInstantiateOracle["value"] => {
      return {
        creator,
        oracle_chain_id: oracleChainId,
        contract_code_id: contractCodeId.toString(),
        transfer_channel_on_oracle: transferChannelOnOracle
      };
    },
    fromAmino: ({
      creator,
      oracle_chain_id,
      contract_code_id,
      transfer_channel_on_oracle
    }: AminoMsgInstantiateOracle["value"]): MsgInstantiateOracle => {
      return {
        creator,
        oracleChainId: oracle_chain_id,
        contractCodeId: Long.fromString(contract_code_id),
        transferChannelOnOracle: transfer_channel_on_oracle
      };
    }
  },
  "/stride.icaoracle.MsgRestoreOracleICA": {
    aminoType: "/stride.icaoracle.MsgRestoreOracleICA",
    toAmino: ({
      creator,
      oracleChainId
    }: MsgRestoreOracleICA): AminoMsgRestoreOracleICA["value"] => {
      return {
        creator,
        oracle_chain_id: oracleChainId
      };
    },
    fromAmino: ({
      creator,
      oracle_chain_id
    }: AminoMsgRestoreOracleICA["value"]): MsgRestoreOracleICA => {
      return {
        creator,
        oracleChainId: oracle_chain_id
      };
    }
  },
  "/stride.icaoracle.MsgToggleOracle": {
    aminoType: "/stride.icaoracle.MsgToggleOracle",
    toAmino: ({
      authority,
      oracleChainId,
      active
    }: MsgToggleOracle): AminoMsgToggleOracle["value"] => {
      return {
        authority,
        oracle_chain_id: oracleChainId,
        active
      };
    },
    fromAmino: ({
      authority,
      oracle_chain_id,
      active
    }: AminoMsgToggleOracle["value"]): MsgToggleOracle => {
      return {
        authority,
        oracleChainId: oracle_chain_id,
        active
      };
    }
  },
  "/stride.icaoracle.MsgRemoveOracle": {
    aminoType: "/stride.icaoracle.MsgRemoveOracle",
    toAmino: ({
      authority,
      oracleChainId
    }: MsgRemoveOracle): AminoMsgRemoveOracle["value"] => {
      return {
        authority,
        oracle_chain_id: oracleChainId
      };
    },
    fromAmino: ({
      authority,
      oracle_chain_id
    }: AminoMsgRemoveOracle["value"]): MsgRemoveOracle => {
      return {
        authority,
        oracleChainId: oracle_chain_id
      };
    }
  }
};