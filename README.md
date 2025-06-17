# Ejercicios de minería de bloques y proof of work en JavaScript.

function mine() {
    const transactions = [];
    while (transactions.length < MAX_TRANSACTIONS && mempool.length > 0) {
        transactions.push(mempool.shift());
    }
    
    let nonce = 0;
    let hash, intHash;

    while (true) {
        const block = {
            id: blocks.length,
            transactions,
            nonce
        };

        const blockString = JSON.stringify({ id: block.id, transactions: block.transactions, nonce: block.nonce });
        hash = SHA256(blockString).toString();

        // CORREGIDO: usar backticks para interpolar hash
        intHash = BigInt(`0x${hash}`);

        if (intHash < TARGET_DIFFICULTY) {
            block.hash = hash;
            blocks.push(block);
            break;
        }
        nonce++;
    }
}
