var eth = require('ethers');
require('dotenv').config();

/**
  * this set of blockchain node providers are based on getblock.io
  * https://account.getblock.io/
  * 
  * and infura.io
  * https://infura.io/
  * https://mainnet.infura.io/v3/
  * 
  * By default, Sovryn endpoints will be used
  * 
  */

 const KEY = process.env.GETBLOK;
 const KEY2 = process.env.INFURA;

 const urlBSC1      =   'https://bsc.getblock.io/mainnet/?api_key=' + KEY;
 const urlBSC2      =   'https://bsc.sovryn.app/mainnet';
 const urlBSC_t1    =   'https://bsc.getblock.io/testnet/?api_key=' + KEY;
 const urlBSC_t2    =   'https://bsc.sovryn.app/testnet';
 const urlGOER1     =   'https://eth.getblock.io/goerli/?api_key='  + KEY;
 const urlGOER2     =   'https://goerli.infura.io/v3/'              + KEY2;
 const urlRINK1     =   'https://eth.getblock.io/rinkeby/?api_key=' + KEY;
 const urlRINK2     =   'https://rinkeby.infura.io/v3/'             + KEY2;
 const urlROP1      =   'https://eth.getblock.io/ropsten/?api_key=' + KEY;
 const urlROP2      =   'https://ropsten.infura.io/v3/'             + KEY2;
 const urlETH1      =   'https://eth.getblock.io/mainnet/?api_key=' + KEY;
 const urlETH2      =   'https://mainnet.infura.io/v3/'             + KEY2;
 const urlSOV1      =   'https://rsk.getblock.io/mainnet/?api_key=' + KEY;
 const urlSOV2      =   'https://mainnet.sovryn.app/rpc';
 const urlSOV_t1    =   'https://rsk.getblock.io/testnet/?api_key=' + KEY;
 const urlSOV_t2    =   'https://testnet.sovryn.app/rpc';
 
async function tune(source, net) {
    switch(source){
        case 'blk':
            return tuneGetBlock(net);
        case 'inf':
            return tuneInfura(net);
        case 'sov':
            return tuneNet(net);
        default:
            return tuneNet(net);
    }

 }

 async function tuneGetBlock(net) {
 
     switch(net){
         case 'rink':
             net =    new eth.providers.JsonRpcProvider(urlRINK1);
             console.log('\n the provider is: ' + urlRINK1 + '\n');
             break;
         case 'bin':
             net =    new eth.providers.JsonRpcProvider(urlBSC1);
             console.log('\n the provider is: ' + urlBSC1 + '\n');
             break;
         case 'tbin':
             net =     new eth.providers.JsonRpcProvider(urlBSC_t1);
             console.log('\n the provider is: ' + urlBSC_t1 + '\n');
             break;        
         case 'ger':
             net =    new eth.providers.JsonRpcProvider(urlGOER1);
             console.log('\n the provider is: ' + urlGOER1 + '\n');
             break;
         case 'rop':
             net =    new eth.providers.JsonRpcProvider(urlROP1);
             console.log('\n the provider is: ' + urlROP1 + '\n');
             break;        
         case 'eth':
             net =    new eth.providers.JsonRpcProvider(urlETH1);
             console.log('\n the provider is: ' + urlETH1 + '\n');             
             break;        
         case 'sov':
             net =    new eth.providers.JsonRpcProvider(urlSOV1);
             console.log('\n the provider is: ' + urlSOV1 + '\n');
             break;        
         case 'tsov':
             net =     new eth.providers.JsonRpcProvider(urlSOV_t1);
             console.log('\n the provider is: ' + urlSOV_t1 + '\n');              
             break;
         default:        
             net =    new eth.providers.JsonRpcProvider(urlSOV1);
             console.log('\n the provider is: ' + urlSOV1 + '\n');                           
     }
      
     return net;
  
 }

 async function tuneInfura(net) {
 
    switch(net){
        case 'rink':
            net =    new eth.providers.JsonRpcProvider(urlRINK2);
            console.log('\n the provider is: ' + urlRINK2 + '\n');
            break;
        case 'bin':
            net =    new eth.providers.JsonRpcProvider(urlBSC1);
            console.log('\n the provider is: ' + urlBSC1 + '\n');
            break;
        case 'tbin':
            net =     new eth.providers.JsonRpcProvider(urlBSC_t1);
            console.log('\n the provider is: ' + urlBSC_t1 + '\n');
            break;        
        case 'ger':
            net =    new eth.providers.JsonRpcProvider(urlGOER2);
            console.log('\n the provider is: ' + urlGOER2 + '\n');
            break;
        case 'rop':
            net =    new eth.providers.JsonRpcProvider(urlROP2);
            console.log('\n the provider is: ' + urlROP2 + '\n');
            break;        
        case 'eth':
            net =    new eth.providers.JsonRpcProvider(urlETH2);
            console.log('\n the provider is: ' + urlETH2 + '\n');
            break;        
        case 'sov':
            net =    new eth.providers.JsonRpcProvider(urlSOV1);
            console.log('\n the provider is: ' + urlSOV1 + '\n');
            break;        
        case 'tsov':
            net =     new eth.providers.JsonRpcProvider(urlSOV_t1);        
            console.log('\n the provider is: ' + urlSOV_t1 + '\n');            
            break;
        default:        
            net =    new eth.providers.JsonRpcProvider(urlSOV1);
            console.log('\n the provider is: ' + urlSOV1 + '\n');            
    }
     
    return net;
 
 }

 async function tuneNet(net) {
 
    switch(net){
        case 'rink':
            net =    new eth.providers.JsonRpcProvider(urlRINK2);
            console.log('\n the provider is: ' + urlRINK2 + '\n');            
            break;
        case 'bin':
            net =    new eth.providers.JsonRpcProvider(urlBSC2);
            console.log('\n the provider is: ' + urlBSC2 + '\n');            
            break;
        case 'tbin':
            net =     new eth.providers.JsonRpcProvider(urlBSC_t2);
            console.log('\n the provider is: ' + urlBSC_t2 + '\n');            
            break;        
        case 'ger':
            net =    new eth.providers.JsonRpcProvider(urlGOER2);
            console.log('\n the provider is: ' + urlGOER2 + '\n');            
            break;
        case 'rop':
            net =    new eth.providers.JsonRpcProvider(urlROP2);
            console.log('\n the provider is: ' + urlROP2 + '\n');            
            break;        
        case 'eth':
            net =    new eth.providers.JsonRpcProvider(urlETH2);
            console.log('\n the provider is: ' + urlETH2 + '\n');            
            break;        
        case 'sov':
            net =    new eth.providers.JsonRpcProvider(urlSOV2);
            console.log('\n the provider is: ' + urlSOV2 + '\n');
            break;        
        case 'tsov':
            net =     new eth.providers.JsonRpcProvider(urlSOV_t2);
            console.log('\n the provider is: ' + urlSOV_t2 + '\n');            
            break;
        default:        
            net =    new eth.providers.JsonRpcProvider(urlSOV2);
            console.log('\n the provider is: ' + urlSOV2 + '\n');            
    }
     
    return net;
 
 }

module.exports = { tune };