import React, { useState, useEffect } from "react";
import Web3 from "web3";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "./constant";

// web 3 initializer
const web3 = new Web3(Web3.givenProvider || "http://127.0.0.1:7545");
const famousStaker: any = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
const { ethereum }: any = window;

const App = () => {
  const [isWalletInstalled, setIsWalletInstalled] = useState(false);
  const [selectedAccount, setSelectedAccuont] = useState("");
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [currentStaker, setCurrentStaker] = useState<any>({
    address: 0,
    value: 0,
  });

  const [stake, setStake] = useState(0);

  useEffect(() => {
    checkWalletStatus();
    getCurrentStaker();
  }, []);

  const checkWalletInstallStatus = () => {
    return Boolean(ethereum && ethereum.isMetaMask);
  };

  const checkWalletConnectedStatus = async () => {
    const accounts = await web3.eth.getAccounts();
    if (accounts.length) {
      setSelectedAccuont(accounts[0]);
      setIsWalletConnected(true);
    } else {
      setSelectedAccuont("");
      setIsWalletConnected(false);
    }
  };

  const connectWallet = async () => {
    try {
      const accounts = await ethereum.send("eth_requestAccounts");
      setSelectedAccuont(accounts.result[0]);
      setIsWalletConnected(true);
      localStorage.setItem("wallet_selected_account", accounts.result[0]);
    } catch (err) {
      console.log(err);
    }
  };

  const checkWalletStatus = () => {
    if (!checkWalletInstallStatus()) {
      setIsWalletInstalled(false);
    } else {
      setIsWalletInstalled(true);
      checkWalletConnectedStatus();
    }
  };

  const getWalletStatusView = () => {
    if (!isWalletInstalled) {
      return <p>Please install a meta mask wallet!!!</p>;
    }
    if (!isWalletConnected) {
      return <button onClick={connectWallet}>Connect my Wallet</button>;
    } else {
      return <button disabled>Wallet connected!!!</button>;
    }
  };

  const makeMeFamous = async () => {
    try {
      const accounts = await web3.eth.getAccounts();
      await famousStaker.methods.makeMeFamous().send({
        from: accounts[0],
        value: web3.utils.toWei(stake.toString(), "ether"),
      });
      getCurrentStaker();
    } catch (err) {
      console.log("make me famous error", err);
    }
  };

  const withdrawFromFamousStaker = async () => {
    try {
      const accounts = await web3.eth.getAccounts();
      await famousStaker.methods.withdrawFamousStaker().send({
        from: accounts[0],
      });
      getCurrentStaker();
    } catch (err) {}
  };

  const getCurrentStaker = async () => {
    const address = await famousStaker.methods.currentStaker().call();
    const value = await famousStaker.methods.currentStake().call();
    setCurrentStaker({ address, value });
  };
  const onStakeChange = (event: any) => {
    const value = event.target.value;
    if (value >= 0) {
      setStake(value);
    }
  };

  return (
    <div>
      <br />
      <div>{getWalletStatusView()}</div>
      {selectedAccount && <p>My current Account : {selectedAccount}</p>}
      {currentStaker.address && <p>Famous Staker : {currentStaker.address}</p>}
      {currentStaker.value && (
        <p>
          Famous Staker value :
          {web3.utils.fromWei(currentStaker.value, "ether")}
        </p>
      )}
      {selectedAccount && (
        <React.Fragment>
          <input
            placeholder="Enter your stake (ether)"
            value={stake}
            type="number"
            onChange={onStakeChange}
            style={{ width: "200px" }}
          />
          <button onClick={makeMeFamous}>Make me Famous</button>
          {currentStaker.address &&
            currentStaker.address.toLowerCase() ==
              selectedAccount?.toLowerCase() && (
              <button onClick={withdrawFromFamousStaker}>Withdraw</button>
            )}
        </React.Fragment>
      )}
      <br />
      <br />
      <br />
      <button onClick={getCurrentStaker}>
        Refresh to see current famous staker
      </button>
    </div>
  );
};

export default App;
