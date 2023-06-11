const axios = require('axios');
const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');

const serverUrl = 'http://localhost:1225';

async function main() {
  const merkleTree = new MerkleTree(niceList);
  let name = 'Norman Block';
  let index = niceList.findIndex(n => n === name);
  let proof = merkleTree.getProof(index);

  // In the list
  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    name,
    proof,
  });

  console.log({ gift });

  // Not in the list with fake proof
  name = 'H Zett M';
  index = 42;
  proof = merkleTree.getProof(index);

  const { data: gift2 } = await axios.post(`${serverUrl}/gift`, {
    name,
    proof,
  });

  console.log({ gift2 });
}

main();