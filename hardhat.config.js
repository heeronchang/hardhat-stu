require('@nomicfoundation/hardhat-toolbox');

const { vars } = require('hardhat/config');

const INFURA_API_KEY = vars.get('INFURA_API_KEY');
const WEB3_SEPOLIA_PRIVATE_KEY = vars.get('WEB3_API_KEY');
const METAMASK_PRIVATE_KEY = vars.get('METAMASK_PRIVATE_KEY');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: '0.8.28',
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [METAMASK_PRIVATE_KEY],
      gas: 2000000,
    },
    'arbitrum-sepolia': {
      // has deployed contract address:0x8622832935665e98e138AFf0B05e992cd6279FA0
      url: `https://arbitrum-sepolia.infura.io/v3/${WEB3_SEPOLIA_PRIVATE_KEY}`,
      accounts: [METAMASK_PRIVATE_KEY],
    },
  },
};
