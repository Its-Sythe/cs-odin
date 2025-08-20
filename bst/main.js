import { Tree } from './tree.js'
const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.value}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
};

let tree = new Tree([7, 4, 67, 3, 5, 23, 324, 1, 8, 6345, 9])
tree.buildTree(tree.arr)
tree.insert(2)
tree.insert(24)
console.log(tree.isBalanced(tree.root));
prettyPrint(tree.rebalance());
console.log(tree.isBalanced(tree.root))
