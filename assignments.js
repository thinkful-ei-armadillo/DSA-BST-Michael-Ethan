const util = require('util');
const BST = require('./BinarySearchTree');

const inspectOptions = {
  depth: Infinity,
  colors: true,
};

// const alpha = new BST();

// alpha.insert(3, 'foo');
// alpha.insert(1, 'foo');
// alpha.insert(4, 'foo');
// alpha.insert(6, 'foo');
// alpha.insert(9, 'foo');
// alpha.insert(2, 'foo');
// alpha.insert(5, 'foo');
// alpha.insert(7, 'foo');

// alpha.remove(3);

// console.log(alpha);


const bravo = new BST();

bravo.insert('E', 'foo');
bravo.insert('A', 'foo');
bravo.insert('S', 'foo');
bravo.insert('Y', 'foo');
bravo.insert('Q', 'foo');
bravo.insert('U', 'foo');
bravo.insert('E', 'foo');
bravo.insert('S', 'foo');
bravo.insert('T', 'foo');
bravo.insert('I', 'foo');
bravo.insert('O', 'foo');
bravo.insert('N', 'foo');

console.log(util.inspect(bravo, inspectOptions));
