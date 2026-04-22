// LRU cache implementation
// LRU cache is a cache that evicts the least recently used item when the cache is full.

// [(4, 19), (5, 19), (9, 10), (3, 23)]

// (3, 23)
// [(3, 23), (4, 19), (5, 19), (9, 10)]

class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class LRU {
    constructor(capacity){
        this.capacity = capacity;
        this.map = new Map();

        this.head = new Node(0, 0); // dummy LRU head - MRU
        this.tail = new Node(0, 0); // dummy LRU tail - LRU
        this.head.next = this.tail;
        this.tail.prev = this.head; 
        // Without sentinels, every pointer operation needs null guards. 
        // When removing a node, if it's the only node in the list, node.prev and node.next are both null — so node.prev.next = ... throws immediately. 
        
        // The sentinels guarantee that every real node always has a valid prev and next, so the same four lines of _remove work whether the list has one element or a thousand. It's an invariant, not a convenience.
    }

    // Remove a node from the list;
    _remove(node){
        node.prev.next = node.next;
        node.next.prev = node.prev;
    };

    // Insert the node to the front beside head
    _insertFront(node){
        node.next = this.head.next;
        node.prev = this.head;

        this.head.next.prev = node;
        this.head.next = node;
    };              

    get(key){
        if (!this.map.has(key)) return null;

        const node = this.map.get(key);
        this._remove(node);
        this._insertFront(node);

        return node.value;
    };

    put(key, value){
        if (this.map.has(key)) {
            const node = this.map.get(key);
            node.value = value;
            this._remove(node);
            this._insertFront(node);
        } else {
            if (this.map.size >= this.capacity) {
                const lru = this.tail.prev;
                this._remove(lru);
                this.map.delete(key);
            }
            const node = new Node(key, value);
            this._insertFront(node);
            this.map.set(key, node);
        }
    };
}