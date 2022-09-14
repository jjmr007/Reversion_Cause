# SCRIPT TO RETRIEVE REVERSION CAUSES FOR FAILED TRANSACTIONS  

## Intro  

So far the repo only has one script: `whyR.js`.  
Next step is to create a script that calls `whyR` and with a list of Sovrn's contracts, get in a database the history of all reverted transactions and their causes.  
The last step is to create a websocket able to monitor all transactions belonging to a list of contracts, to identify which fail and their causes. Special mention in the database will be given to "Out of Gas" transactions.  

## How to Use "whyR"  

First of all, install the packages: 

```bash
npm install
```
Then, initialize the .env file.

And now we are ready to use it:

```bash
 $ node whyR [net] [TxH] [provider]  
```

 possible values for `net` : bin, tbin, sov, tsov, eth, rop, ger, rink... default value --> sov  
 `provider`: in case of having a KEY from infura.io or getblock.io we can put it in .env file (follow the `.env_example`)    
 possible values for `provider`: blk, inf, sov... default value --> sov  
 `TxH` Hash of the failed transaction  
 