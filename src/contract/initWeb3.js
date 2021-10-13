import { ethers } from "ethers";
import master from './abi/abi.json'
//判断用户是否安装metamask
export const judgeUserOpenMetamask = () => {
   return new Promise(async (resolve, reject) => {
      var obj = setInterval(async () => {
         if (typeof window.ethereum != 'undefined') {
            let ethereum = window.ethereum
           let isConnected = window.ethereum.isConnected();
           if(isConnected){
            let accounts = await ethereum.request({method:'eth_requestAccounts'});
             let chainId = await ethereum.request({method:'eth_chainId'});
             let provider = new ethers.providers.Web3Provider(window.ethereum);
             const signer = provider.getSigner(accounts[0]);
             const masterAddr = '0x137901C8588190c7a52265fa4EA68b0faa679AA1'
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
           }else{
              console.log('some thing wrong with current env')
           }
          } else {
           alert('Please install Metamask on Chrome plugin or Metamask APP.')
          }
      },100)
     
   })
 }
 