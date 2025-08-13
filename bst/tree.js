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

    findNode(value) {
        let currNode = this.root;
        let prevNode = 0;
        while (currNode != null) {
            if (currNode.value == value)
                return { currNode, prevNode }

            prevNode = currNode;
            if (currNode.value > value) {
                currNode = currNode.left;
            } else if (currNode.value < value) {
                currNode = currNode.right;
            }
        }
        return prevNode;
    }
    //Get inorder successor
    getSucc(curr) {
        curr = curr.right;
        while (curr !== null && curr.left !== null) {
            curr = curr.left;
        }
        return curr;
    }

    insert(value) {
        let prevNode = this.findNode(value)

        if (prevNode.value > value) {
            prevNode.left = new Node(value)
        } else if (prevNode.value < value) {
            prevNode.right = new Node(value)
        }
    }

    deleteLeaf(node, parent) {
        if (parent.value > node.value) {
            parent.left = null
        } else if (parent.value < node.value) {
            parent.right = null
        }
    }

    deleteNode(node, parent) {
        if (node.left != null && node.right == null) {
           if (parent.value > node.value) {
                parent.left = node.left;
            } else if (parent.value < node.value) {
                parent.right = node.left;
            }
        } else if (node.right != null && node.left == null) {
            if (parent.value > node.value) {
                parent.right = node.left;
            } else if (parent.value < node.value) {
                parent.right = node.right;
            }
        } else if (node.right != null && node.left != null) {
            let succ = this.getSucc(node)
            let { currNode, prevNode } = this.findNode(succ.value)
            node.value = succ.value
            this.deleteLeaf(currNode, prevNode)
        }
    }

    deleteRootNode(node) {
        let succ = this.getSucc(node)
        let { currNode, prevNode } = this.findNode(succ.value)
        node.value = succ.value;
        this.deleteLeaf(currNode, prevNode)
    }

    delete(value) {
        let { currNode, prevNode } = this.findNode(value)
        
        if (prevNode != 0) {
            if (currNode.left == null && currNode.right == null) {
                this.deleteLeaf(currNode, prevNode)
            } else if (currNode.left != null || currNode.right != null) {
                this.deleteNode(currNode, prevNode)
            }
        } else if (prevNode == 0) {
            this.deleteRootNode(currNode)
        }
    }

    checkCallback(callback) {
        if (typeof(callback) != "function") {
            throw new Error("Please provide a valid function")
        }
    }

    levelOrderForEach(callback) { // Couldnt implement recursive, it still hasnt clicked D: 
        this.checkCallback(callback) 
        if (this.root == null) return;

        let nodeQueue = []
        nodeQueue.push(this.root)

        while (nodeQueue.length != 0) {
            let currNode = nodeQueue[0]
            callback(currNode)
            if (currNode.left != null) {
                nodeQueue.push(currNode.left)
            }
            if (currNode.right != null) {
                nodeQueue.push(currNode.right)
            }
            nodeQueue.splice(0, 1);
        }
    }

    inOrderForEach(callback) {
        this.checkCallback(callback)
        let root = this.root;
        if (root == null) return;

    }

    preOrderForEach(callback) {
        this.checkCallback(callback)
        let root = this.root;
        if (root == null) return;

        callback(root)
        root.left = this.preOrderForEach(callback)
        root.right = this.preOrderForEach(callback)
        
        return root;
    }
    
    postOrderForEach(callback) {

    }
}

let tree = new Tree([1, 2, 3, 4, 5])
tree.preOrderForEach((node) => console.log(node.value))
