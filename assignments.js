const util = require('util');
const BST = require('./BinarySearchTree');

const inspectOptions = {
  depth: Infinity,
  colors: true,
};

const alpha = new BST();

alpha.insert(3, '1');
alpha.insert(1, '2');
alpha.insert(4, '2');
alpha.insert(6, '3');
alpha.insert(9, '4');
alpha.insert(2, '3');
alpha.insert(5, '4');
alpha.insert(7, '5');

// alpha.remove(3);

// console.log(alpha);


const bravo = new BST();

bravo.insert('E', 'e');
bravo.insert('A', 'a');
bravo.insert('S', 's');
bravo.insert('Y', 'y');
bravo.insert('Q', 'q');
bravo.insert('U', 'u');
bravo.insert('E', 'e');
bravo.insert('S', 's');
bravo.insert('T', 't');
bravo.insert('I', 'i');
bravo.insert('O', 'o');
bravo.insert('N', 'n');

// console.log(util.inspect(bravo, inspectOptions));


// It outputs the tree structure in plain text, however it's hard read without
// the added parenthesis we added to the return statement;
function tree(t){
  if(!t){
    return 0;
  }
  return '(' + tree(t.left) + t.value + tree(t.right) + ')';
}

console.log(tree(alpha));
