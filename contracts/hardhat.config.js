require("dotenv/config");
require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-web3");

module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      chainId: 11155111,
      url: "https://ethereum-sepolia-rpc.publicnode.com",
      accounts: [process.env.PRIVATE_KEY],
      // accounts: {
      //   mnemonic: "test every none test with test test input test test test junk",
      //   path: "m/44'/60'/0'/0",
      //   initialIndex: 0,
      //   count: 20,
      //   passphrase: "",
      // },
    }
  }
};
