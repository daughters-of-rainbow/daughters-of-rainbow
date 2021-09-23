import web3 from './initWeb3'
import bindUser from './abi/bindUser.json'
import erc20 from './abi/erc20.json'
const beeHandleAddr = 'KtMU6EN8u7qfgqRfBUBocW9i3pPh66swJd'
const usdtAddr = 'KnL3bfnZFGW2rNjbnAx7zwAPRVudCiNe2X'
const winnerAddr = 'KnLPb7oChTbSwEYKTBjKAzRbanboxSi2vz'
const burnAddr = 'KaP8MmBrcJd7Qn9uAUzmdGdkrnSnXiv7ap'//总销毁量

let winnerToken =  async()=>{
    const obj = {
        beeMineInstance: await khc.contract().at(beeHandleAddr),
        usdtInstance: await khc.contract().at(usdtAddr),
        beeInstance:await khc.contract().at(winnerAddr)
    }
    console.info(obj.beeInstance)
    return obj
}
export { 
    winnerToken,beeHandleAddr,winnerAddr,usdtAddr,burnAddr
}