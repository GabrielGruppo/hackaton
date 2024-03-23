import "/.config.js";

const getTokenBalance = async () => {
    try {
      const address = await web3.eth.getAccounts();
      const balance = await tokenContract.methods.balanceOf(address).call();
      return balance;
    } catch (error) {
      return null;
    }
  };

  const getNFTBalance = async () => {};

  getTokenBalance().then(balance => {
    //if null return error message, else return value
  });

  const buyTokens = async () => {
    const tokenContractInstance = web3.eth.Contract(TokenAbi, tokenContractAddress);
    // Call buy function on token contract
    //OpenZeppelin ?
    await tokenContractInstance.methods.buyTokens().send({ from: accounts[0], value: web3.utils.toWei('1', 'ether') });
  };

  const sellTokens = async () => {
    const tokenContractInstance = new web3.eth.Contract(TokenAbi, tokenContractAddress);
    // Call sell function on token contract
    //OpenZeppelin ?
    await tokenContractInstance.methods.sellTokens(tokenAmount).send({ from: accounts[0] });
  };


