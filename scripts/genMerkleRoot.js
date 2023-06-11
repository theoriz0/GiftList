const MerkleTree = require('../utils/MerkleTree');
const niceList = require('../utils/niceList');
const utils = require('ethereum-cryptography/utils')

// create the merkle tree for the whole nice list
const merkleTree = new MerkleTree(niceList);

// get the root
const root = merkleTree.getRoot();

console.log(root);