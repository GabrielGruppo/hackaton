import detectEthereumProvider from "@metamask/detect-provider";
import Web3 from "web3";

const initWeb3 = async () => {
    let web3 = null;
    const metamaskProvider = await detectEthereumProvider();
  
    if (metamaskProvider) {
      web3 = new Web3(metamaskProvider);

      metamaskProvider.on("chainChanged", reloadPage);
      metamaskProvider.on("accountsChanged", reloadPage);   //login - redirect to home
      metamaskProvider.on("disconnect", reloadPage);        //logout - redirect to login

      const reloadPage = () => {
        window.location.reload();
      };
    } else {
      console.log("For the moment the use of MetaMask is required. Please, download it to your browser.");
      //exibir modal
    }
    return web3;
  };
  
  export default initWeb3;