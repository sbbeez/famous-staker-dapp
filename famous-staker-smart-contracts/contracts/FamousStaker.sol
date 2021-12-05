// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.10;

contract FamousStaker {
    address public currentStaker;

    uint256 public currentStake = 0;

    function transferBackOldStaker() private {
        payable(currentStaker).transfer(currentStake);
    }

    function makeMeFamous() public payable {
        require(msg.value > currentStake);
        transferBackOldStaker();
        currentStaker = msg.sender;
        currentStake = msg.value;
    }

    function withdrawFamousStaker() public {
        require(msg.sender == currentStaker);
        payable(currentStaker).transfer(currentStake);
        currentStaker = address(0);
        currentStake = 0;
    }
}
