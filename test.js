var Web3 = require('web3');
const { ethers } = require("ethers");


const provider = new ethers.providers.JsonRpcProvider(`https://liberty20.shardeum.org`);

async function asyncCall() {
  
  //Call to get latest Block Number
  const bnum = await provider.getBlockNumber();
  // console.log(bnum);
  //Call to get Transactions of a block
  const block_trans = await provider.getBlockWithTransactions(bnum);
  // console.log(block_trans);
  // Call to get balance of an address
  //const balance = await provider.getBalance("Enter Wallet address");
  // console.log(balance);
 
 }
 asyncCall();

