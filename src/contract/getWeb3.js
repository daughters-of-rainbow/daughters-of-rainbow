var Web3 = require('web3');
// set the provider of web3
if (typeof web3 !== 'undefined') {
   // console.debug(web3.currentProvider);
   web3 = new Web3(web3.currentProvider);
   // web3 = new Web3(new Web3.providers.WebsocketProvider("wss://ws-testnet.hecochain.com"));
} else {
   window.web3 = new Web3(new Web3.providers.HttpProvider(window.ethereum));
}

/*
* 1. Check for injected web3 (mist/metamask)
* 2. If metamask/mist create a new web3 instance and pass on result
* 3. Get networkId - Now we can check the user is connected to the right network to use our dApp
* 4. Get user account from metamask
* 5. Get user balanceip：47.241.64.6
*/

export default web3