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

### Deployment using Rinkeby test network

Please note, this deployment process is in a *test netowrk* called **Rinkeby**.
- The frontend app is deployed using [Vercel](https://vercel.com/).
- The block chain app is deployed using Infura.
So, both the accounts are to be created.

*Blockchain deployment*
1. Make sure, menomic and infura values are added as part of famous-staker-smart-contracts/.env like below,
```
MNEMONIC=xxx xxx xxx
INFURA_API_KEY=xxxxxxxxxxxx
```
2. Make sure `truffle` is installed
3. Run `truffle migrate --network rinkeby`

Above steps will make sure, the smart contracts are deployed to rinkeby network and returns a `contract address`. Keep this `contract address` safe to deploy the `react` front end app to use the same.

*Frontend deployment*
1. Login / sign up to vercel
2. connect the github repo
3. add .env file
4. Add the following
```
REACT_APP_CONTRACT_ADDRESS=<contract address from migrate>
```
5. push your changes
6. Open Vercel and open settings for the connected repo
7. Choose `Environment variables` option and update the `contract address`


### Testing in Rinkeby

To test the dapp in rinkeby network. Please add some ether to your address in the network. 
1. Go to [this](https://faucets.chain.link/rinkeby) website
2. Enter your wallet address
3. Initiate the transfer
4. After it is successful verify your metamask wallet for ethers (having chosen rinkeby network)