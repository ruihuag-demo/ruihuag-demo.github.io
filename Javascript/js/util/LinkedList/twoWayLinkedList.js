// // Two way linked list

// function LinkedList() {
// 	let length = 0;
// 	let head = null;
// 	let pre = null;
// 	let Node = function (val) {
// 		this.val = val;
// 		this.next = null;
// 		this.pre = null;
// 	}
// 	// 创键
// 	this.append = function (val) {
// 		let node = new Node(val);
// 		let current = head;
// 		if (head === null) {
// 			head = node;
// 		} else {
// 			while (current.next) {
// 				current = current.next;
// 			}
// 			current.next = node;
// 			current = head;
// 			while (current.next) {
// 				if (current.nect.val = val) {

// 				}
// 			}

// 		}
// 	}
// 	this.toString = function () {
// 		let string = head.val;
// 		let current = head.next;
// 		while (current) {
// 			string += ',' + current.val;
// 			current = current.next;
// 		}
// 		return string;
// 	}
// 	this.getHead = function () {
// 		return head;
// 	}
// }


// function toTwoWayLinkedList(array = []) {

// }



// let li = new LinkedList();
// li.append(1);
// li.append(2);
// li.append(4);
// li.append(4);
// li.append(5);

// console.log(li.toString());
// console.log(li.getHead());


