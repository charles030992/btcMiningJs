//Bloque de una Blockchain
class Block {
    constructor(index, timestamp, data, previousHash = '') {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
        this.nonce = 0; // Added nonce for proof of work
    }
    calculateHash() {
        return SHA256
        (this.index + this.timestamp + JSON.stringify(this.data) + this.previousHash + this.nonce).toString();
    }
}
