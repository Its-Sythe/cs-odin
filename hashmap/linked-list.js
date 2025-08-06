class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
    }
}


export class List {
    constructor() {
        this.head = null;
    }

    contains(key) {
        if (this.head == null) return false;

        let currentNode = this.head;
        while (currentNode.next != null) {
            if (currentNode.key == key) break;
            
            currentNode = currentNode.next;
        }
        if (currentNode.key == key) {
            return true;
        } else {
            return false;
        }
    }

    append(key, value) { 
        if (this.head == null) {
            this.head = new Node(key, value);
            return this.head;
        }
        let currentNode = this.head;
        while (currentNode.next != null) {
            currentNode = currentNode.next;
        }
        if (!this.contains(key)) {
            currentNode.next = new Node(key, value)  
        } else if(this.contains(key)) {
            let existingNode = this.head;
            while (existingNode.next != null) {
                if (existingNode.key == key) break;

                existingNode = existingNode.next;
            }
            existingNode.value = value;
        }
        return this.head;
    }

    remove(key) {
        if (this.contains(key)) { 
            let currentNode = this.head;
            let previousNode;
            while (currentNode.next != null) {
                if (currentNode.key == key) break;

                previousNode = currentNode;
                currentNode = currentNode.next;
            }

            if (currentNode == this.head) {
                this.head = currentNode.next;
            } else if (currentNode.next == null) {
                previousNode.next = null;
            } else {
                previousNode.next = currentNode.next;
            }
            return true;
        }
        return false;
    }
}

