class node {
    constructor(value, prev, next) {
        this.element = value;
        this.prev = (prev == undefined ? null : prev);
        this.next = (next == undefined ? null : next);
    }
}
class DLL {
    constructor(value) {
        const newnode = new node(value);
        this.head = newnode;
        this.tail = newnode;
        this.size = 1;
    }
    create(value) {
        const newnode = new node(value);
        this.tail.next = newnode;
        newnode.prev = this.tail;
        this.tail = newnode;
        this.size++;
    }
    print() {
        let temp = this.head;
        let head = ["head"];
        while (temp !== null) {
            head.push(temp.element);
            temp = temp.next;
        }
        head = head.join("-->");
        console.log(head);
    }
    prepend(element) {
        const newnode = new node(element);
        newnode.next = this.head;
        this.head.prev = newnode;
        this.head = newnode;
        this.size++;
    }
    insertat(element, index) {
        let count = 1;
        const newnode = new node(element);
        if (index < 0 || index > this.size) {
            console.error("Invalid entry");
            return false;
        } else {
            let temp = this.head;
            while (count < index) {
                count++;
                temp = temp.next;
            }
            let temp2 = temp.next;
            newnode.next = temp2;
            newnode.prev = temp;
            temp.next = newnode;
            temp2.prev = newnode;
            this.size++;
        }
    }
}
const ll = new DLL(4);
ll.create(5);
ll.create(6);
ll.create(7);
ll.create(8);
ll.create(9)
ll.print();