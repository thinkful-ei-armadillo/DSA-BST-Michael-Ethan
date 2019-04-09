'use strict';

const util = require('util');
const BST = require('./BinarySearchTree');

const inspectOptions = {
  depth: Infinity,
  colors: true,
};

const alpha = new BST();

alpha.insert(3, 'three');
alpha.insert(1, 'one');
alpha.insert(4, 'four');
alpha.insert(6, 'six');
alpha.insert(9, 'nine');
alpha.insert(2, 'two');
alpha.insert(5, 'five');
alpha.insert(7, 'seven');

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

// console.log(tree(bravo));










function depthofBST(tree) {
  let depth = 0;
  let leftcount = 1;
  let rightcount = 1;

  function depthCount(tree) {

  

    if (tree === null) {
      return 0;
    }
  
    if (tree.left === null && tree.right === null ) {
      depth++;
    } else {
      depth = depth + 1;
    }
  
    if (tree.left) {
      leftcount = leftcount + 1;
      
      
      depthCount(tree.left);
    }
  
    if (tree.right) {
      rightcount = rightcount + 1;
      
      depthCount(tree.right);
    }
  
    if (rightcount > leftcount) {
      depth = rightcount;
      return depth;
    } else {
      depth = leftcount;
      return depth;
    }
  
  }

  depthCount(tree);


  return depth;
    
}



console.log(depthofBST(alpha));
console.log(depthofBST(bravo));





// Find 3rd largest

function findNthLargest(tree, state) {
  if (tree.right) {
    findNthLargest(tree.right, state);
    if (state.result) {
      return;
    }
  }

  if (!--state.n) {
    state.result = tree.key;
    return;
  }

  if (tree.left) {
    findNthLargest(tree.left, state);
  }
}

function findThirdLargest(tree) {
  if (tree.key === null) {
    return null;
  }

  const state = { n: 3, result: null };
  findNthLargest(tree, state);
  return state.result;
}


// console.log(findThirdLargest(alpha));
// console.log(findThirdLargest(bravo));


