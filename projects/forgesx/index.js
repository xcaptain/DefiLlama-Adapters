const { sumTokensExport } = require('../helper/unwrapLPs')
const FORGE_SOL = '0x4938D2016e7446a24b07635611bD34289Df42ECb'
const USDC_TOKEN = '0xff970a61a04b1ca14834a43f5de4533ebddb5cc8'

module.exports = {
  methodology: 'counts the number of USDC tokens deposited as collateral in the Forge.sol contract.',
  start: 1680643295,
  arbitrum: {
    tvl: sumTokensExport({ owner: FORGE_SOL, tokens: [USDC_TOKEN]}),
  }
};