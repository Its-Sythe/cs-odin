import { Node } from './node.js'

export class List {
    constructor() {
        this.head = null;
    }

    append(value) {
        if (this.head == null) {
            this.head = new Node(value)
            return;
        }

    }
}

















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
