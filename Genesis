const Block = require("./Block.js");

class Blockchain {
  constructor () {
    this.blockchain = [Block.genesis()];
  }

  get() {
    return this.blockchain;
  }

  get latestBlock() {
    return this.blockchain[this.blockchain.length - 1];
  }
};

module.exports = Blockchain;
