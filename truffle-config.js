require("dotenv").config();
const { API_KEY, MNEMONIC } = process.env;
const HDWalletProvider = require("@truffle/hdwallet-provider");

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
    },
    loc_development_development: {
      network_id: "*",
      port: 8545,
      host: "127.0.0.1",
    },
    goerli: {
      provider: () => {
        return new HDWalletProvider(
          process.env.MNEMONIC,
          "https://goerli.infura.io/v3/" + process.env.API_KEY
        );
      },
      network_id: 5,
      gas: 4465030,
      gasPrice: 10000000000,
    },
  },
  mocha: {},
  compilers: {
    solc: {
      version: "0.8.20",
    },
  },
};
