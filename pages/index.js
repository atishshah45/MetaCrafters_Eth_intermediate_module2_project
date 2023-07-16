import {useState, useEffect} from "react";
import {ethers} from "ethers";
import atm_abi from "../artifacts/contracts/Assessment.sol/Assessment.json";

export default function HomePage() {
  const [ethWallet, setEthWallet] = useState(undefined);
  const [account, setAccount] = useState(undefined);
  const [atm, setATM] = useState(undefined);
  const [balance, setBalance] = useState(undefined);
  const [Maxbalance, setMaxBalance] = useState(undefined);

  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const atmABI = atm_abi.abi;

  const getWallet = async() => {
    if (window.ethereum) {
      setEthWallet(window.ethereum);
    }

    if (ethWallet) {
      const account = await ethWallet.request({method: "eth_accounts"});
      handleAccount(account);
    }
  }

  const handleAccount = (account) => {
    if (account) {
      console.log ("Account connected: ", account);
      setAccount(account);
    }
    else {
      console.log("No account found");
    }
  }

  const connectAccount = async() => {
    if (!ethWallet) {
      alert('MetaMask wallet is required to connect');
      return;
    }
  
    const accounts = await ethWallet.request({ method: 'eth_requestAccounts' });
    handleAccount(accounts);
    
    // once wallet is set we can get a reference to our deployed contract
    getATMContract();
  };

  const getATMContract = () => {
    const provider = new ethers.providers.Web3Provider(ethWallet);
    const signer = provider.getSigner();
    const atmContract = new ethers.Contract(contractAddress, atmABI, signer);
 
    setATM(atmContract);
  }

  const getBalance = async() => {
    if (atm) {
      setBalance((await atm.getBalance()).toNumber());
    }
  }
  const MaxBalance = async() => {
    if (atm) {
      setMaxBalance((await atm.MaxBalance()).toNumber());
    }
  }

  const deposit1 = async() => {
    if (atm) {
      let tx = await atm.deposit(1);
      await tx.wait()
      getBalance();
      MaxBalance();
    }
  }
  const deposit2 = async() => {
    if (atm) {
      let tx = await atm.deposit(2);
      await tx.wait()
      getBalance();
      MaxBalance();
    }
  }
  const deposit3 = async() => {
    if (atm) {
      let tx = await atm.deposit(3);
      await tx.wait()
      getBalance();
      MaxBalance();
    }
  }
  const deposit4 = async() => {
    if (atm) {
      let tx = await atm.deposit(4);
      await tx.wait()
      getBalance();
      MaxBalance();
    }
  }
  const deposit5 = async() => {
    if (atm) {
      let tx = await atm.deposit(5);
      await tx.wait()
      getBalance();
      MaxBalance();
    }
  }

  const withdraw1 = async() => {
    if (atm) {
      let tx = await atm.withdraw(1);
      await tx.wait()
      getBalance();
      MaxBalance();
    }
  }
  const withdraw2 = async() => {
    if (atm) {
      let tx = await atm.withdraw(2);
      await tx.wait()
      getBalance();
      MaxBalance();
    }
  }
  const withdraw3 = async() => {
    if (atm) {
      let tx = await atm.withdraw(3);
      await tx.wait()
      getBalance();
      MaxBalance();
    }
  }
  const withdraw4 = async() => {
    if (atm) {
      let tx = await atm.withdraw(4);
      await tx.wait()
      getBalance();
      MaxBalance();
    }
  }
  const withdraw5 = async() => {
    if (atm) {
      let tx = await atm.withdraw(5);
      await tx.wait()
      getBalance();
      MaxBalance();
    }
  }

  const initUser = () => {
    // Check to see if user has Metamask
    if (!ethWallet) {
      return <p>Please install Metamask in order to use this ATM.</p>
    }

    // Check to see if user is connected. If not, connect to their account
    if (!account) {
      return <button onClick={connectAccount}>Please connect your Metamask wallet</button>
    }

    if (balance == undefined) {
      getBalance();
    }
    if (Maxbalance == undefined) {
      MaxBalance();
    }


    return (
      <div>
        <p>Your Account: {account}</p>
        <p>Your Balance: {balance}</p>
        <p>More Ether that can be deposit: {Maxbalance}</p>
        <button onClick={deposit1}>Deposit 1 ETH</button>
        <button onClick={withdraw1}>Withdraw 1 ETH</button>
        <br/>
        <button onClick={deposit2}>Deposit 2 ETH</button>
        <button onClick={withdraw2}>Withdraw 2 ETH</button>
        <br/>
        <button onClick={deposit3}>Deposit 3 ETH</button>
        <button onClick={withdraw3}>Withdraw 3 ETH</button>
        <br/>
        <button onClick={deposit4}>Deposit 4 ETH</button>
        <button onClick={withdraw4}>Withdraw 4 ETH</button>
        <br/>
        <button onClick={deposit5}>Deposit 5 ETH</button>
        <button onClick={withdraw5}>Withdraw 5 ETH</button>
        
      </div>
    )
  }

  useEffect(() => {getWallet();}, []);

  return (
    <main className="container">
      <header><h1>Welcome to the ETH Piggy Bank</h1></header>
      <h3>In this piggy bank, you can deposit and withdraw ethereum</h3>
      <h3>In this piggy bank, you can have a Maximum of 10 ethereum</h3>
      {initUser()}
      <style jsx>{`
        .container {
          text-align: center
          
          
        }
      `}
      </style>
    </main>
  )
}