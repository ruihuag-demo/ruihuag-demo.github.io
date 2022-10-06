/**
 * 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
	if (l1 === null) return l2;
	if (l2 === null) return l1;
	if (l1.val < l2.val) {
		l1.next = mergeTwoLists(l1.next, l2);
		return l1;
	} else {
		l2.next = mergeTwoLists(l1, l2.next);
		return l2;
	}
};


// let l1 = [1, 2, 4], l2 = [1, 3, 4]

let l1 = {
	val: 1,
	next: null,
}

l1.next = {
	val: 2,
	next: null,
}
l1.next.next = {
	val: 4,
	next: null,
}

let l2 = {
	val: 1,
	next: null,
};

l2.next = {
	val: 3,
	next: null,
}
l2.next.next = {
	val: 4,
	next: null
}

console.log(mergeTwoLists(l1, l2));
