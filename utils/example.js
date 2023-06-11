const MerkleTree = require('./MerkleTree');
const niceList = require('./niceList');
const verifyProof = require('./verifyProof');

// create the merkle tree for the whole nice list
const merkleTree = new MerkleTree(niceList);

// get the root
const root = merkleTree.getRoot();

// find the proof that norman block is in the list 
let name = 'Norman Block';
let index = niceList.findIndex(n => n === name);
let proof = merkleTree.getProof(index);

// verify proof against the Merkle Root
console.log( verifyProof(proof, name, root) ); // true, Norman Block is in the list!

// TRY IT OUT: what happens if you try a name not in the list, or a fake proof?
// Name not in list
name = 'H Zett M';
index = niceList.findIndex(n => n === name);
proof = merkleTree.getProof(index);

// verify proof against the Merkle Root
console.log( verifyProof(proof, name, root) );

// Fake proof
name = 'H Zett M';
index = 0;
proof = merkleTree.getProof(index);

// verify proof against the Merkle Root
console.log( verifyProof(proof, name, root) );