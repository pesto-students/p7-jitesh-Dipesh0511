class node {
    constructor(element, next) {
        this.element = element;
        this.next = (next === undefined) ? null : next;
    }
}
class linkedlist {
    constructor(element) {
        if (element) {
            this.head = new node(element);
            this.size = 1;
        } else {
            this.head = undefined;
            this.size = 0;
        }
    }
    create(element) {
        let newnode = new node(element);

        let temp = this.head;
        while (temp.next !== null) {
            temp = temp.next;
        }
        temp.next = newnode;
    }
    insertat(index, element) {
        if (index < 0 || index > (this.size + 1)) {
            console.error("Invalid index entered");
        } else {
            let temp = this.head;
            let newnode = new node(element);
            let count = 0;
            if (index == 0) {
                newnode.next = this.head;
                this.head = newnode;

            } else {
                while (count < (index - 1)) {
                    temp = temp.next;
                    count++;
                }
            }
            newnode.next = temp.next;
            temp.next = newnode;
            this.size++;
        }

    }
    remove(element) {
        let temp = this.head;
        let temp2 = new node(0);
        if (this.head.value == element) {
            this.head = this.head.next;
        } else {
            while (temp.element !== element) {
                temp2 = temp;
                temp = temp.next;
            }
        }
        temp2.next = temp.next;
        temp = null;
    }
    print() {
        let temp = this.head;
        while (temp !== null) {
            console.log(temp.element);
            temp = temp.next;
        }
    }
    checkloop(h) {
        let s = new Set();
        while (h != null) {
            if (s.has(h))
                return true;
            else
                s.add(h);
        }
        return false;
    }
}
const ll = new linkedlist(5);
ll.create(6);
ll.create(7)
ll.insertat(2, 44)
ll.remove(5);
ll.print();
console.log(ll.checkloop(this.head));