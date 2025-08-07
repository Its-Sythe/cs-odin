import { List } from './linked-list.js'
export class HashMap {
    constructor(capacity = 16, loadFactor = 0.75) {
        this.capacity = capacity;
        this.loadFactor = loadFactor;
        this.buckets = new Array(capacity).fill(null)
        this.size = 0;
    }

    hash(key) {
        let hashCode = 0;

        const primeNo = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNo * hashCode + key.charCodeAt(i)
        }
        hashCode %= this.capacity;

        return hashCode;
    }

    set(key, value) {
        let list = new List()
        let index = this.hash(key)
        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds")
        }
        if (this.buckets[index] == null) {
            list.append(key, value)
            this.buckets[index] = list
            this.size++
            return;
        }
        this.buckets[index].append(key, value)
        this.size++

        if (this.size > (this.capacity * this.loadFactor)) {
            this.capacity *= 2;
        }
        return this.buckets;
    }

    get(key) {
        let index = this.hash(key);
        if (this.buckets[index] == null) return null;

        let currentNode = this.buckets[index].head
        while (currentNode.next != null) {
            if (currentNode.key == key) break;

            currentNode = currentNode.next;
        }
        if (currentNode.key == key) {
            return currentNode.value;
        } else {
            return false;
        }
    }

    has(key) {
        let result = this.get(key)

        if (result == null || result == false) {
            return false
        } else if (result != null || result != undefined) {
            return true;
        }  
    }

    remove(key) {
        let index = this.hash(key);

        if (this.buckets[index] == null) return false;

        if (this.buckets[index].contains(key)) {
            this.buckets[index].remove(key);
            return true;
        } else {
            return false;
        }
    }

    length() {
        return this.size;
   }

    clear() {
        return this.buckets.fill(null)
    }

    keys() {
        let content = []
        let buckets = this.buckets; 

        for (let i = 0; i < buckets.length; i++) {
            if (buckets[i] == null) continue;

            let currentNode = buckets[i].head;
            while(currentNode.next != null) {
                content.push(currentNode.key)
                currentNode = currentNode.next;
            }
            if (currentNode.next == null) {
                content.push(currentNode.key)
            }
        }
        return content;
    }

    values() {
        let content = []
        let buckets = this.buckets; 

        for (let i = 0; i < buckets.length; i++) {
            if (buckets[i] == null) continue;

            let currentNode = buckets[i].head;
            while(currentNode.next != null) {
                content.push(currentNode.value)
                currentNode = currentNode.next;
            }
            if (currentNode.next == null) {
                content.push(currentNode.value)
            }
        }
        return content;
    }

    entries() {
        let entries = [];
        let buckets = this.buckets;

        for (let i = 0; i < buckets.length; i++) {
            if (buckets[i] == null) continue;

            let currentNode = buckets[i].head;
            while(currentNode.next != null) {
                entries.push([currentNode.key, currentNode.value])
                currentNode = currentNode.next;
            }
            if (currentNode.next == null) {
                entries.push([currentNode.key, currentNode.value])
            }
        }
        return entries;
    }
}

