function ListNode(val) {
  this.val = val;
  this.next = null;
}

function reverseList(head) {
  if (!head || !head.next) return head;

  let cur = head;
  let pre = null;

  while (cur) {
    const next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }

  return pre;
};

var reverseList = function (head) {
  // 递归结束条件
  if (head === null || head.next === null) {
    return head;
  }

  // 递归反转 子链表
  let newReverseList = reverseList(head.next);
  // 获取原来链表的第 2 个节点 newReverseListTail
  let newReverseListTail = head.next;
  // 调整原来头结点和第 2 个节点的指向
  newReverseListTail.next = head;
  head.next = null;

  // 将调整后的链表返回
  return newReverseList;
};