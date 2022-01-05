import { Injectable } from '@angular/core';
import Web3 from "web3";
// @ts-ignore
import {contractABI,contractAddress} from '../../../abi.js';

declare let window: any;
declare let require:any;

// const contractABI=require('../../../build/contracts/Transfer.json');

@Injectable({
  providedIn: 'root'
})



export class TransferService {

  private account: any = null;
  private web3: any;

  private Contract:any; //wrapper for the contract

  private web3Provider:any;



  //login with metamask
  async LoginWithMetaMask(){
    if (typeof window.ethereum !== 'undefined') {
      this.web3Provider = window.web3.currentProvider
      this.web3 = new Web3(window.web3.currentProvider)
      console.log('MetaMask is installed!');
    }
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        try {
            // Request account access if needed
            await window.ethereum.enable();
            // Acccounts now exposed
            this.web3.eth.sendTransaction({/* ... */});
        } catch (error) {
            // User denied account access...
        }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider);
        // Acccounts always exposed
        this.web3.eth.sendTransaction({/* ... */});
          //getting the connected account
    }
    console.log(this.web3)

    this.loadAccount()
  }




  constructor() {

  }



  //get the current account
  async loadAccount(){

    if(this.account==null){

      console.log("Account is null -- Fetching account")

      const accounts =await window.ethereum.request({ method: 'eth_requestAccounts' });

      this.account = accounts[0];

      //the address of the current user
      this.web3.eth.Contract.defaultAccount = this.account

      console.log(this.account)

    }

  }



  //load the contract & to get its methods
  async loadContract(){

    this.Contract=new this.web3.eth.Contract(contractABI,contractAddress,{gasPrice: '20000000', from: this.account})

    // this.transferEth("18")

  }





  //transfer eth from one account to another
  async transferEth(etherValue:any){

    //contract address is the receiver address
    //eth is sent from the current address
    this.Contract=new this.web3.eth.Contract(contractABI,contractAddress,{gasPrice: '20000000', from: this.account})

    //call the transfer method in the contract
    const transfer=this.Contract.methods.sendViaTransfer(contractAddress)
    .send(
      {
        value: Web3.utils.toWei(etherValue,"ether"), //value of ether to send
        from: this.account,
        gas: '6721975'
      }
    )

    console.log(transfer)
  }



  //
  async addProperty(title:string,etherValue:any){
    this.loadContract()

    const addProp=this.Contract.methods.addProperty(contractAddress,title)
    .send(
      {
        from: this.account,
        gas: '6721975'
      }
    )

    console.log(addProp)

    console.log("_____GETTING PROPERTY_____")

    // const getProp=this.Contract.methods.getPropertyByTitle(title).call()

    // console.log(getProp)
  }



  async getPropretyByTitle(title:string){


    console.log("getPropretyByTitle")
    const getProp=this.Contract.methods.getPropertyByTitle(title).call(
    {
      from:this.account,
      gas: '6721975',
      gasPrice: '20000000',
      to: "0x3A546B3A09519ab02f06eFb3e57C09ED2F12f679" // contract address
    }
    )
    .then(console.log);




  }



  async sayhi(){
    this.loadContract()
    console.log("Saying hi")

    const getProp=this.Contract.methods.sayHi().call(
        {
          from:this.account,
          gas: '6721975',
          gasPrice: '20000000',
          to: "0x3A546B3A09519ab02f06eFb3e57C09ED2F12f679" // contract address
        }
      )
      .then(console.log);

  }



  async getAllProps(){

    const getProp=this.Contract.methods.getAllProperties().call(
      {
        from:this.account,
        gas: '6721975',
        gasPrice: '20000000',
        to: "0x3A546B3A09519ab02f06eFb3e57C09ED2F12f679" // contract address
      }
    )
    .then(console.log);
    // getAllProperties
  }

  //get the balance of the current account
  async getCurrentAccountBalance(){
    return this.web3.eth.getBalance(this.account);
  }






}












  // }
