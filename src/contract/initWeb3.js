import { ethers } from "ethers";
import master from './abi/abi.json'
//判断用户是否安装metamask
export const judgeUserOpenMetamask = () => {
   return new Promise(async (resolve, reject) => {
      var obj = setInterval(async () => {
         if (typeof window.ethereum != 'undefined') {
            let ethereum = window.ethereum
           let isConnected = ethereum.isConnected();
           if(isConnected){
            let accounts = await ethereum.request({method:'eth_requestAccounts'});
             let chainId = await ethereum.request({method:'eth_chainId'});
             let provider = new ethers.providers.Web3Provider(window.ethereum);
             const signer = provider.getSigner(accounts[0]);
             const masterAddr = '0xD6B1CE3fd493F71bB89Cb89d159623D22585e717'
             const masterContract = new ethers.Contract(masterAddr,master, signer);
             let data = {
               address:accounts[0],
               chainId:chainId,
               provider,
               masterAddr,
               masterInstance:masterContract,
             }
             clearInterval(obj);
             resolve(data)
           }
          } else {
           alert('Please install an Ethereum wallet or a metamask plugin')
          }
      },10)
     
   })
 }
 