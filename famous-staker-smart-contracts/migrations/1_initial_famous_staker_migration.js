const FamousStaker = artifacts.require("FamousStaker");

module.exports = function (deployer) {
  deployer.deploy(FamousStaker);
};
