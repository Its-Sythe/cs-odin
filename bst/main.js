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

function createRandArr(max) {
    let newArr = []
    for (let i = 1; i < max; i++) {
      let randNo = Math.floor(Math.random(max) * max)
      if (newArr.includes(randNo)) randNo = Math.floor(Math.random(max) * max)

      newArr.push(randNo)
    }
    return newArr;
}
