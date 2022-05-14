require("@nomiclabs/hardhat-waffle");
require("dotenv").config({ path: ".env" });

const ALCHEMY_API_KEY_URL = process.env.ALCHEMY_API_KEY_URL;

const RINKEBY_PRIVATE_KEY = process.env.RINKEBY_PRIVATE_KEY;

module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: ALCHEMY_API_KEY_URL,
      accounts: [RINKEBY_PRIVATE_KEY],
    },
  },
};

// FakeNFTMarketplace deployed to: 0x038869af7e3289E2E945171D2338Ef979736389e
// CryptoDevsDAO deployed to: 0x28Ae5aEC7275c48572FD3E25ae389a4Ed41a58Bb