class LinkList{
    constructor(){
        this.count = 0
        this.head = undefined
    }
    push(element){
        const node = new Node(element)
        let current
        if(this.head == null){
            this.head = node
        } else {
            current = this.head
            while(current.next!=null){
                current = current.next
            }
            current.next = node
        }
        this.count++
    }
    remove(element){
        if(element.next == null){
            
        }
    }
}

class Node{
    constructor(element){
        this.element = element
        this.next = undefined
    }
}


