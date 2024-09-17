class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }

    push(value) {
        const newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode
        }
        else {
            this.tail.next = newNode; // POINTER helps old last node to point to new last node
            this.tail = newNode; // TAIL is now directly pointed to new node
        }
        this.length++;
        return this; // meaning return the OBJECT which is our LINKED LIST
    }

    pop() {
        // length = 0
        if(!this.head) return undefined;
        // length > 1
        let temp = this.head;
        let pre = this.head;
        while(temp.next) {
            pre = temp;
            temp = temp.next;
        }
        this.tail = pre;
        this.tail.next = null;
        length--;
        if(length === 0) { //length = 1
            this.head = null;
            this.tail = null
        }
        return temp;
    }
    // 2    3   4
    unshift(value) {
        const newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    shift() {
        if(!this.head && this.length === 0) return undefined;
        let temp = this.head;
        this.head = this.head.next;
        temp.next = null;
        this.length--;
        if(this.length === 0) {
            this.tail = null
        }
        return temp;
    }

    get(index) {
        if(index < 0 || index >= this.length) return undefined;
        let temp = this.head;
        for(let i = 0; i<index; i++) {
            temp = temp.next;
        }
        return temp;
    }

    set(index, value) {
        // 4    22   31  54   40    77
        let replaceNode = this.get(index);
        if(replaceNode) {
            replaceNode.value = value;
            // return true;
        }
        // return false;
    }

    insert(index, value) {
        if(index < 0 || index >= this.length) return false;
        else if(index===0) return this.unshift(value);
        else if(index === this.length) return this.push(value);
        const newNode = new Node(value);
        let beforeNode = this.get(index-1);
        newNode.next = beforeNode.next;
        beforeNode.next = newNode;
        this.length++;
        return true;
    }

    remove(index) {
        if(index === 0) return this.shift();
        if(index === this.length-1) return this.pop();
        if(index < 0 || index >= this.length) return undefined;
        const beforeItem = this.get(index-1);
        const removeItem = beforeItem.next;

        beforeItem.next = removeItem.next;
        removeItem.next = null;
        this.length--;
        return removeItem;
    }

    reverse() {
        let newLast = this.head;
        this.head = this.tail;
        this.tail = newLast;
        let next = newLast.next;
        let prev = null;
        for(let i =0; i<this.length;i++) {
            next = newLast.next;
            newLast.next = prev;
            prev = newLast;
            newLast = next;
        }
        return this;
    }
    // my solution
    // findMiddleNode() {
    //     if(this.head === null) return null; //length = 0
    //     else if(this.head === this.tail) return this.head; //length = 1
    //     let count = 0;
    //     let node = this.head;
    //     let middleNode = {0 : this.head};
    //     while(node.value != this.tail.value) {
    //         node = node.next;
    //         count++;
    //         middleNode[count] = node;
    //     }
    //     this.length = count+1;
    //     let middleIndex = Math.floor(this.length/2);
    //     return middleNode[middleIndex];
    // }

    // Tortoise and Hare ALGORITHM
    findMiddleNode() {
        let slow = this.head;
        let fast = this.head;
        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }

    hasLoop() {
        let slow = this.head;
        let fast = this.head;
        while(fast!=null && fast.next!=null) {
            slow = slow.next;
            fast = fast.next.next;
            if(slow === fast) {
                return true;
            }
        }
        return false;
    }

    // If the value of k is greater than or equal to the number of nodes in the list, return null

    findKthFromEnd(k) {
        let node = this.head;
        let nodeObject = {};
        let count = 0;
        while(node !== null) {
            nodeObject[count] = node;
            count++;
            node = node.next;
        }
        return nodeObject[count- k];
    }

    partitionList(x) {
        if(this.head === null) return;
        const dummy1 = new Node(0);
        const dummy2 = new Node(0);
        let prev1 = dummy1;
        let prev2 = dummy2;
        let current = this.head;
        while(current!=null){
            if(current.value<x) {
                prev1.next = current;
                prev1 = current;
            }
            else {
                prev2.next = current;
                prev2 = current;
            }
          current= current.next;
        }
        prev2.next = null;
        prev1.next = dummy2.next;
        this.head = dummy1.next;
    }

    removeDuplicates() {
        const values = new Set();
        let previous = null;
        let current = this.head;
        while(current !== null) {
            if(values.has(current.value)) {
                previous.next = current.next;
                this.length -= 1;
            }
            else {
                values.add(current.value);
                previous = current;
            }
            current = current.next;
        }
    }
}

let linkedList = new LinkedList(3);
linkedList.push(8)
linkedList.push(5)
linkedList.push(10)
linkedList.push(2)
linkedList.push(1)
// linkedList.insert(3,31);
// linkedList.tail.next = linkedList.head.next; CREATES LOOP
console.log(linkedList);
// console.log(linkedList.findMiddleNode());
console.log(linkedList.hasLoop());
console.log(linkedList.findKthFromEnd(2));
linkedList.partitionList(5);
console.log(linkedList);
// edge case when no nodes are there yet => in this case make HEAD & TAIL point to it