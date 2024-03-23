import logo from './logo.svg';
import './App.css';
import Login from './components/home'
import { useState } from 'react';
import { ethers } from "https://cdnjs.cloudflare.com/ajax/libs/ethers/6.7.0/ethers.min.js";

function App() {
  const [walletAddress, setWalletAddress] = useState("");

  async function requestAccount(){
    console.log('Requesting account');

    // checar se metamask existe
    if (window.ethereum) {
    console.log('detected');

    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setWalletAddress(accounts[0]);
    } catch (error) {
      console.log('Error connecting..')
    }

  } else {
    console.log('metamask not detected')
  }
  }

  
  async function connectWallet() {
    if(typeof window.etherum !== 'undefined'){
      await requestAccount();
      // podemos usar este provedor para interagir com contratos
      const provider = new ethers.providers.Web3Provider(window.ethereum);
    } 
  } 
  return (
    <div className="App"> 
      <header className="App-header">
        <Login/> 
        <button onClick={requestAccount}>Conectar carteira</button>
        <h3>Endereço da carteira : {walletAddress}</h3>
      </header>
    </div>
  );
}

export default App;
