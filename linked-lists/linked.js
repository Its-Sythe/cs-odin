import { Node } from './node.js'

export class List {
    constructor() {
        this.head = null;
    }

    contains(value) {
        let currentNode = this.head;
        while (currentNode.value != value) {
            currentNode = currentNode.next;
            if (currentNode.next == null) {
                break;
            }
        }

        if (currentNode.value == value) {
            return true;
        }

        return false;
    }

    find(value) {
        if (this.contains(value)) {
            let currentNode = this.head;
            let index = 0;
            while (currentNode.value != value) {
                currentNode = currentNode.next;
                index++
            }
            return index;
        }
    }

    getList() {
        return this.head;
    }

    append(value) {
        if (this.head == null) {
            this.head = new Node(value)
            return;
        } else {
            let currentNode = this.head;
            while (currentNode.next !== null) {
                currentNode = currentNode.next;
            }
            currentNode.next = new Node(value)
            return;
        }
    }

    prepend(value) {
        let newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
    }

    size() {
        let currentNode = this.head;
        let length = 0;
        while (currentNode.next != null) {
            currentNode = currentNode.next
            length++
        }  
        return length;
    }

    head() {
        return this.head;
    }

    tail() {
        let currentNode = this.head;
        while (currentNode.next != null) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }
    
    at(index) {
        let currentIndex = 0;
        let currentNode = this.head;
        while (currentIndex != index) {
            currentNode = currentNode.next;
            currentIndex++
        }
        return currentNode;
    }

    pop() {
        let currentNode = this.head;
        while (currentNode.next.next != null) {
            currentNode = currentNode.next
        } 
        currentNode.next = null;
        return this.head;
    }

    toString() {
        let string = []
        let currentNode = this.head;
        while(currentNode.next != null) {
            string.push(`(${currentNode.value})`)
            currentNode = currentNode.next;
        }    
        string.push(`(${this.tail().value})`);
        string.push("null")
        return string.join(" -> ")
    }
}

const list = new List();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
console.log(list.toString())



//This is just a masterpiece that I cant afford to delete
//class Lists {
//    constructor() {
//        this.lists = []
//    }
//
//    contains(value) {
//        return this.lists.some(list => list.content == value);
//    }
//
//    append(value) {
//        if (this.lists.length == 0) {
//            return this.lists.push(new Node(null, value, this.lists.length + 1))
//        }
//        
//        this.lists.at(-1).tail = this.lists.at(-1).head + 1
//        return this.lists.push(new Node(this.lists.at(-1).tail, value, null))
//    }
//
//    static prepend(value) {
//
//    }
//
//    static at(index) {
//
//    }
//
//    static size() {
//
//    }
//}
//
//let list = new Lists()
//list.append("Content1")
//list.append("Content2")
//list.append("Content3")
//console.log(list)
