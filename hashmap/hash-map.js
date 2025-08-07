import { List } from './linked-list.js'
class HashMap {
    constructor(capacity = 16, loadFactor = 0.8) {
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
       if (this.buckets[index] == null) {
        list.append(key, value)
        this.buckets[index] = list
        return;
       }
       this.buckets[index].append(key, value)
       console.log(this.buckets[index])
    }
}

let map = new HashMap();
map.set("Hello", "IDK")
map.set("Sara", "Example")
map.set("raSa", "Another Example")