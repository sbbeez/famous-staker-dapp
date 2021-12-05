### Famous Staker

Block chain based smart contract + client app for simple dapp. With this decentralized users can stake more and more ether for showing their address as famous staker!! **This app is not built for production**. Purely developed to learn and explore the creating the dapp.

This app is built using `truffle`, `react` and `web3`. Tested with `ganche`, `metamask` in local set up.

### Features

1. Connect to metamask wallet
2. View the current famous staker
3. Make a bid to become as a staker
4. Refresh to see the current famous staker
5. Staker can also withdraw the ether staked
6. New staker can make his/her bid

### Smart contract

This is an easiest way to show `smart contracts` can hold on to some ether (some money in real case) and transfer back the ether once the contract's purpose is over.

### Local-set up testing

For setting up famous-me dapp,
1. Install metamask
2. Find a way to deploy the smart contract (USE ganache or any test neworks)
3. Go to client folder and run `npm i` and `npm start`

Once, the react app is opened in your browser, you are good to test the app.

### Deployment using Ganache

To deploy your smart contracts locally, 
1. Please install `ganache` 
2. Go to `famous-staker-smart-contracts` folder
3. Run `truffle migrate`

Also, Make sure to update the `contract address` for `FamousStaker` smart contract from cmd line result or same can be found in `build/FamousStaker.json` file as `address` (refer the last address).