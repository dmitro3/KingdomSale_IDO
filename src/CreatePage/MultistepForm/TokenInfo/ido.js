import web3 from './web3';
import IDO from './abi/IDO.json';

const instance = new web3.eth.Contract(
    JSON.parse(JSON.stringify(IDO.abi)),
    '0x990FdaE4D16b3BB13593Be7c9FD759ce800B5Cc6'
);

export default instance;