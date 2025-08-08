const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.rChild !== null) {
    prettyPrint(node.rChild, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.value}`);
  if (node.lChild !== null) {
    prettyPrint(node.lChild, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
};

export class Node {
    constructor(value) {
        this.value = value;
        this.lChild = null;
        this.rChild = null;
    }
}

export class Tree {
    constructor(arr = null, root = null) {
        this.arr = arr;
        this.root = buildTree(arr)
    }

    insert(value) {
       
    }
}

function sortArr(arr) {
    return Array.from(new Set(arr.sort()))
}

function buildTree(arr) {
    if (arr.length == 0) return null;
    if (arr.length <= 1) return new Node(arr[0])
    

    arr = sortArr(arr)
    let mid = Math.floor(arr.length / 2)
    let left = arr.slice(0, mid)
    let right = arr.slice(mid + 1)

    let root = new Node(arr[mid])
    root.lChild = buildTree(left)
    root.rChild = buildTree(right)
    
    return root;
}

//let tree = new Tree([1, 2, 3, 0, 6, 9, 8, 4, 5, 7])
//prettyPrint(tree.root)
//insert(1)

