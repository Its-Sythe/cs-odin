class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor(arr) {
        this.arr = arr
        this.root = this.buildTree() || null;
    }

    buildTree(arr) {
        if (arr.length == 0) return null;
        if (arr.length <= 1) return new Node(arr[0])
        arr = this.sortArray(arr)

        let mid = Math.floor(arr.length / 2)
        let left = arr.slice(0, mid + 1)
        let right = arr.slice(mid + 1)

        let root = new Node(arr[mid])
        root.lChild = buildTree(left)
        root.rChild = buildTree(right)

        return root;
    }

    sortArray(arr) {
        return Array.from(new Set(arr.toSorted((a, b) => a - b)))
    }
}

let tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324])
tree.buildTree(tree.arr)

