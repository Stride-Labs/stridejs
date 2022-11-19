import { join } from 'path';
import telescope from '@osmonauts/telescope';
import { sync as rimraf } from 'rimraf';

const protoDirs = [join(__dirname, '/../proto')];
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
        // '/Stridelabs.stride.stakeibc.MsgLiquidStake': {
        //   aminoType: 'stakeibc/LiquidStake'
        // },
        // '/Stridelabs.stride.stakeibc.MsgRedeemStake': {
        //   aminoType: 'stakeibc/RedeemStake'
        // },
        // '/Stridelabs.stride.stakeibc.MsgRegisterHostZone': {
        //   aminoType: 'stakeibc/RegisterHostZone'
        // },
        // '/Stridelabs.stride.stakeibc.MsgClaimUndelegatedTokens': {
        //   aminoType: 'stakeibc/ClaimUndelegatedTokens'
        // },
        // '/Stridelabs.stride.stakeibc.MsgRebalanceValidators': {
        //   aminoType: 'stakeibc/RebalanceValidators'
        // },
        // '/Stridelabs.stride.stakeibc.MsgAddValidator': {
        //   aminoType: 'stakeibc/AddValidator'
        // },
        // '/Stridelabs.stride.stakeibc.MsgChangeValidatorWeight': {
        //   aminoType: 'stakeibc/ChangeValidatorWeight'
        // },
        // '/Stridelabs.stride.stakeibc.MsgDeleteValidator': {
        //   aminoType: 'stakeibc/DeleteValidator'
        // },
        // '/Stridelabs.stride.stakeibc.MsgRestoreInterchainAccount': {
        //   aminoType: 'stakeibc/RestoreInterchainAccount'
        // },
        // '/Stridelabs.stride.stakeibc.MsgUpdateValidatorSharesExchRate': {
        //   aminoType: 'stakeibc/UpdateValidatorSharesExchRate'
        // }
        // '/Stridelabs.stride.stakeibc.MsgClearBalance': {
        //   aminoType: 'still-no-defined'
        // },
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
