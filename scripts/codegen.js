import { join } from 'path';
import telescope from '@osmonauts/telescope';
import { sync as rimraf } from 'rimraf';

const protoDirs = [join(__dirname, '../stride/third_party/proto'), join(__dirname, '../stride/proto')];
const outPath = join(__dirname, '../src/codegen');
rimraf(outPath);

telescope({
  protoDirs,
  outPath,
  options: {
    prototypes: {
      parser: {
        keepCase: false
      },
      includePackageVar: false,
      typingsFormat: {
        useExact: false,
        timestamp: 'date',
        duration: 'duration'
      }
    },
    aminoEncoding: {
      enabled: true,
      exceptions: {
        '/stride.stakeibc.MsgLiquidStake': {
          aminoType: 'stakeibc/LiquidStake'
        },
        '/stride.stakeibc.MsgRedeemStake': {
          aminoType: 'stakeibc/RedeemStake'
        },
        '/stride.stakeibc.MsgRegisterHostZone': {
          aminoType: 'stakeibc/RegisterHostZone'
        },
        '/stride.stakeibc.MsgClaimUndelegatedTokens': {
          aminoType: 'stakeibc/ClaimUndelegatedTokens'
        },
        '/stride.stakeibc.MsgRebalanceValidators': {
          aminoType: 'stakeibc/RebalanceValidators'
        },
        '/stride.stakeibc.MsgAddValidator': {
          aminoType: 'stakeibc/AddValidator'
        },
        '/stride.stakeibc.MsgChangeValidatorWeight': {
          aminoType: 'stakeibc/ChangeValidatorWeight'
        },
        '/stride.stakeibc.MsgDeleteValidator': {
          aminoType: 'stakeibc/DeleteValidator'
        },
        '/stride.stakeibc.MsgRestoreInterchainAccount': {
          aminoType: 'stakeibc/RestoreInterchainAccount'
        },
        '/stride.stakeibc.MsgUpdateValidatorSharesExchRate': {
          aminoType: 'stakeibc/UpdateValidatorSharesExchRate'
        },
        '/stride.stakeibc.MsgClearBalance': {
          aminoType: 'still-no-defined'
        },
        '/stride.claim.MsgClaimFreeAmount': {
          aminoType: 'claim/ClaimFreeAmount'
        }
      }
    },
    lcdClients: {
      enabled: true
    },
    rpcClients: {
      enabled: true,
      camelCase: true
    }
  }
})
  .then(() => {
    console.log('✨ all done!');
  })
  .catch((e) => {
    console.error(e);
  });
