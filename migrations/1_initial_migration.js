const MyContract = artifacts.require("Chainlink");

module.exports = function (deployer) {
  deployer.deploy(MyContract);
};
