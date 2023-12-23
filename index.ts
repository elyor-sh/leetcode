import {execute} from "./helpers/performance";
import {MagicDictionary} from "./solutions/MagicDictionary";

// execute(() => {
//     const dict = new MagicDictionary()
//     dict.buildDict(["hello", "hallo", "leetcode"])
//     console.log(dict.search("hello"))
//     console.log(dict.search("hhllo"))
//     console.log(dict.search("hell"))
//     console.log(dict.search("leetcoded"));
// });

class ListNode {
    val: number
    next: ListNode | null // keyingi element
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

class LinkedList {
    head: ListNode | null
    private _size: number

    constructor() {
        this.head = new ListNode()
        this._size = 0
    }

    // listni uzunligini qaytaradi
    get size () {
        return this._size
    }

    // kerakli indexga element qo'shish
    insertAt(element: number, index: number) {
        if (index < 0 || index > this.size)
            return console.log("Mavjud bo'lmagan index");
        else {
            // Yangi node yaratib olamiz
            let node = new ListNode(element);
            let curr = this.head
            let prev: ListNode | null = null

            // Agar birinchi element bo'lsa
            // ortiqcha sikl kerak emas
            if (index == 0) {
                node.next = this.head;
                this.head = node;
            } else {
                curr = this.head;
                let it = 0;

                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr?.next || null;
                }

                // element qo'shish
                node.next = curr;
                prev!.next = node;
            }
            this._size++;
        }
    }
}

const linked = new LinkedList()
linked.insertAt(2, linked.size)
linked.insertAt(3, linked.size)
linked.insertAt(0, 0)
console.log(linked)



