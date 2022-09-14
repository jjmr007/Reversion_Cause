/**
 * way of use:
 * $ node whyR <net> <TxH> <provider>
 * possible values for <net> : bin, tbin, sov, tsov, eth, rop, ger, rink... default value --> sov
 * <provider>: in case of having a KEY from infura.io or getblock.io we can put it in .env file
 * possible values for <provider>: blk, inf, sov... default value --> sov
 * <TxH> Hash of the failed transaction
 * 
 */

var Net = require('./net');

var V = process.argv;
var net = V[2];
var TxHash = V[3];
var provider = V[4];

async function getWhy(TxHash, net, provider) {

    neT = await Net.tune(provider, net);
    let sTat = await getTxStat(TxHash, neT);
    let cOde = '';

    if (!sTat) {

        try {
            let tx = await neT.getTransaction(TxHash);
            let blk = tx.blockNumber
            cOde = await neT.call(tx,blk);
        } catch(e) {
           try {
            cOde = JSON.parse(e.responseText).error.message;
            } catch (rr) {
                console.log('endpoint having issues \n');
                cOde = 'No reason, endpoint having issues';
            }

        } 
        
    }

    let U = [cOde, sTat]
    return U;

}

async function getTxStat(TxHash, net) {
    let s = 0;
    try {
        s = await net.getTransactionReceipt(TxHash);
        s = s.status;    
    } catch(r) {
        console.log(' Issues with endpoint trying to read transaction status \n');
    }

    if (s == 1) { return true } else { return false } 
}
 
async function run() {
    let W = await getWhy(TxHash, net, provider);
    // console.log('\n parameters: ' + W + '\n');
    let message;
    if (W[1]) { message = ' indeed succeed \n';} 
    else { 
        if(W[0].slice(0,19) == 'execution reverted:') W[0] = W[0].slice(20);
        if(W[0] == 'execution reverted') W[0] += ' most likely Out of Gas';
        if(W[0] == '0x') W[0] = 'Out of Gas';
        message = ' failed with the following reason: \n \n             ' + W[0] + '\n'; }
    console.log('\n transaction ' + TxHash + message);
}

run();