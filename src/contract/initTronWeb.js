import TronWeb from 'tronweb'
const fullNode = 'https://api.trongrid.io';
const HttpProvider = TronWeb.providers.HttpProvider;
const solidityNode = 'https://api.trongrid.io';
const eventServer = 'https://api.trongrid.io/';
const headers = {"TRON-PRO-API-KEY": '63c2d15c-3176-4921-864c-90379f06fd8c'};
const tronWeb = new TronWeb(
    fullNode,
    solidityNode,
    eventServer,
    headers
   //  privateKey
);
export default tronWeb