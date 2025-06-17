const SHA256 = require('crypto-js/sha256');
const TARGET_DIFFICULTY = BigInt(0x0fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
const MAX_TRANSACTIONS = 10;

const mempool = [];
const blocks = [];

function addTransaction(transaction) {
    // Añade la transacción al mempool
    mempool.push(transaction);
}

function mine() {
    // Preparamos el bloque con las transacciones
    const transactions = [];
    
    // Tomamos transacciones del mempool (hasta MAX_TRANSACTIONS)
    while (transactions.length < MAX_TRANSACTIONS && mempool.length > 0) {
        transactions.push(mempool.shift());
    }
    
    // Creamos el bloque con las transacciones
    const block = { 
        id: blocks.length,
        transactions 
    };
    
    // Proof of Work: encontrar un hash válido
    let nonce = 0;
    let hash;
    while (true) {
        // Calculamos el hash con el nonce actual
        block.nonce = nonce;
        const blockString = JSON.stringify(block);
        hash = SHA256(blockString).toString();
        
        // Convertimos el hash a BigInt para comparar con TARGET_DIFFICULTY
        const hashInt = BigInt('0x' + hash);
        
        // Comprobamos si cumple con la dificultad requerida
        if (hashInt < TARGET_DIFFICULTY) {
            break; // ¡Hash válido encontrado!
        }
        
        nonce++; // Probamos con el siguiente nonce
    }
    
    // Añadimos el hash al bloque y lo guardamos
    block.hash = hash;
    blocks.push(block);
}

module.exports = {
    TARGET_DIFFICULTY,
    MAX_TRANSACTIONS,
    addTransaction, 
    mine, 
    blocks,
    mempool
};

//Subir implementacion de mineria de bloques
