class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

export class Tree {
    constructor(arr) {
        this.arr = this.sortArr(arr);
        this.root = this.buildTree(this.arr);
    }

    buildTree(arr) {
        if (arr.length == 0) return null;
        if (arr.length <= 1) return new Node(arr[0])
        let mid = Math.floor(arr.length / 2)
        let left = arr.slice(0, mid)
        let right = arr.slice(mid + 1);

        let root = new Node(arr[mid])
        root.left = this.buildTree(left)
        root.right = this.buildTree(right)

        return root;
    }

    sortArr(arr) {
        return Array.from(new Set(arr.toSorted((a, b) => a - b)))
    }

    insert(value) {
        let currNode = this.root;
        if (currNode == null) {
            return this.root = new Node(value)
        }

        let prevNode;

        while(currNode != null) {
            prevNode = currNode;

            if (currNode.value == value) break;

            if (currNode.value > value) {
                currNode = currNode.left;
            } else if (currNode.value < value) {
                currNode = currNode.right;
            }

        }
        if (prevNode.value > value) {
            prevNode.left = new Node(value)
        } else if (prevNode.value < value) {
            prevNode.right = new Node(value)
        }
    }

    delete(value) {
        let currNode = this.root;
        if (currNode == null) return;

        let prevNode;

        while (currNode != null) {
            if (currNode.value == value) break;
            prevNode = currNode
            if (currNode.value > value) {
                currNode = currNode.left;
            } else if (currNode.value < value) {
                currNode = currNode.right;
            }
        }
        
        //Delete a leaf.
        if (currNode.left == null && currNode.right == null) {
            if (prevNode.value > value) {
                prevNode.left = null;
            } else if (prevNode.value < value) {
                prevNode.right = null;
            }
        }

        //Delete a parent node with one child.
        if (currNode.left != null) {
            if (prevNode.value > currNode.left.value) {
                prevNode.left = this.insert(currNode.left.value)
            } else if (prevNode.value < currNode.left.value) {
                prevNode.right = this.insert(currNode.left.value)
            }
        } else if (currNode.right != null) {
            console.log("Reached here")
            if (prevNode.value > currNode.value) {
                console.log("Should be here")
                prevNode.left = currNode.right
                currNode = null
                console.log(prevNode)
            } else if (prevNode.value < currNod.right.value) {
                prevNode.right = currNode.right
            }
        }
      
    }
}

