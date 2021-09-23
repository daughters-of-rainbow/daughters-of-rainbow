const abi = require('./abi/abi.json') 
const code  = require('./abi/bytecode.json')
const khcExtension = require('khc-extension');
let fullNode = new khcExtension.providers.HttpProvider('http://mainnet.khchain.io/fullnode');
let solidityNode = new khcExtension.providers.HttpProvider('http://mainnet.khchain.io/solidity');
const khc = new khcExtension({fullNode,solidityNode});

export default khc
