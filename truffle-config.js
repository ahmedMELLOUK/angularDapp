//handles configuration of the local blockchain where the smart contracts are deployed
module.exports = {
  networks: {
    development: {     // 127.0.0.1:7545 is the ganache port, (local placement of the local blockchain)
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200,
      // plugins: [ plugins: [ 'truffle-web3-generator' ]
    }
  },

}


