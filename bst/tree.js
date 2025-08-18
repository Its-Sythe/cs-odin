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

    // Bless mycodeschool for the explanations on these DFS and BFS implemetation
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

    preOrderForEach(root, callback) {
        this.checkCallback(callback);
        if (root == null) return; 
    
        callback(root)
        this.preOrderForEach(root.left, callback)
        this.preOrderForEach(root.right, callback)
    }
    
    postOrderForEach(root, callback) {
        this.checkCallback(callback);
        if (root == null) return;

        this.postOrderForEach(root.left, callback);
        this.postOrderForEach(root.right, callback);
        return callback(root)
    }

    inOrderForEach(root, callback) {
        this.checkCallback(callback);
        if (root == null) return;

        this.inOrderForEach(root.left, callback);
        callback(root);
        this.inOrderForEach(root.right, callback)
    }
    
    getHeight(node) {
        if (node == null) return -1;

        let rightH = this.getHeight(node.right)
        let leftH = this.getHeight(node.left)

        return Math.max(rightH, leftH) + 1
   }

    height(value) {
        let node = this.findNode(value).currNode
        console.log(`Height: ${this.getHeight(node)}`)
   }

    depth(value) {
        let currNode = this.root; 
        let depth = 0;
        while (currNode != null) {
            if (currNode.value == value) break;
            
            depth++
            if (currNode.value > value) {
                currNode = currNode.left;
            } else if (currNode.value < value) {
                currNode = currNode.right;
            }
        }
        if (currNode == null) {
            return false;
        } else {
            return depth;
        }
    }

    isBalanced() {
        let tree = this.root;
        let heightDiff = (this.getHeight(tree.left) - this.getHeight(tree.right)) 

        if (heightDiff == 1) return true;

        return false;
    }

    rebalance() {
        let newArr = [];

        this.inOrderForEach(this.root, (node) => newArr.push(node.value)) 
        return this.sortArr(newArr)
    }
}
