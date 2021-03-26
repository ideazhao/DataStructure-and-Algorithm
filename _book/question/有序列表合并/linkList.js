class Node {
  constructor(data) {
      this.data = data;  // 节点的数据域
      this.prev = null;  // 节点的指针域
      this.next = null;  // 节点的指针域
  }
}

class SingleList {
  constructor() {
          this.size = 0;  // 单链表的长度
          this.head = new Node('head');  // 表头节点
          this.currNode = '';  // 当前节点的指向
  }
  // 在单链表中寻找item元素
  //从表头开始找，如果不是，一直往后找，是则返回节点
  find(item) {
    let currNode = this.head;
    while (currNode && (currNode.data !== item)) {
        currNode = currNode.next;
    }
    return currNode;
  }

  // 向单链表中插入元素
  insert(item, element) {
    let curNode = this.find(item);  //找到插入位置
    let element = new Node(element); //创建插入节点

    //下面两步不能颠倒，要先让插入元素拿到指针，再赋给之前的节点
    element.next = curNode.next;
    curNode.next = element;
  }  

  //删除节点
  remove(item) {
    let curNode = this.find(item);

    //这里不着急操作，先判断节点有没有，不存在直接返回，否则下面也会出错
    if(!curNode){  
      return;
    }
    
    let nextNode = curNode.next;
    curNode.next = nextNode.next;
  }
  show() {}  // 显示当前节点
  getLength() {}  // 获取单链表的长度
  display() {}  // 单链表的遍历显示
  clear() {}  // 清空单链表
}