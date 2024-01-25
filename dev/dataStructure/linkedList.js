/*
 * File: linkedList.js
 * Project: api
 * Author: ruihuag
 * File Created: Thursday, 5th August 2021 4:05:56 pm
 * Modified By: ruihuag
 * Last Modified: Thursday, 5th August 2021 4:14:04 pm
 */

//节点
function Node(element) {
	this.element = element;   //当前节点的元素
	this.next = null;         //下一个节点链接
}

//链表类
function LList() {
	this.head = new Node('head');     //头节点
	this.find = find;                   //查找节点
	this.insert = insert;               //插入节点
	this.remove = remove;               //删除节点
	this.findPrev = findPrev;           //查找前一个节点
	this.display = display;             //显示链表
}

//查找给定节点

function find(item) {
	var currNode = this.head;
	while (currNode.element != item) {
		currNode = currNode.next;
	}
	return currNode;
}

//插入节点

function insert(newElement, item) {
	var newNode = new Node(newElement);
	var currNode = this.find(item);
	newNode.next = currNode.next;
	currNode.next = newNode;
}

//显示链表元素

function display() {
	var currNode = this.head;
	while (!(currNode.next == null)) {
		console.log(currNode.next.element);
		currNode = currNode.next;
	}
}

//查找带删除节点的前一个节点

function findPrev(item) {
	var currNode = this.head;
	while (!(currNode.next == null) && (currNode.next.element != item)) {
		currNode = currNode.next;
	}
	return currNode;
}

//删除节点

function remove(item) {
	var prevNode = this.findPrev(item);
	if (!(prevNode.next == null)) {
		prevNode.next = prevNode.next.next;
	}
}
var fruits = new LList();

fruits.insert('Apple', 'head');
fruits.insert('Banana', 'Apple');
fruits.insert('Pear', 'Banana');

console.log(fruits.display());
// Apple
// Banana
// Pear