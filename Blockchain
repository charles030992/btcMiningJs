class Block {
  constructor (index, previousHash, timestamp, data, hash, nonce) {
    this.index = index;
    this.previousHash = previousHash;
    this.timestamp = timestamp;
    this.data = data;
    this.hash = hash;
    this.nonce = nonce;
  }

  get genesis() {
    new Block(
      0,
      "0",
      1508270000000,
      "This is the way",
      "6a73e816a6e5018a4476c8e97e2e8579069f341da4097a154b6b12b678bdc4b4",
      604
    );
  }
}

module.exports = Block;
